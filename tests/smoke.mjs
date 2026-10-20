// Smoke test: node tests/smoke.mjs [url]
// Setup once:  npm i -D playwright && npx playwright install chromium
// Serve the site folder first (e.g. `python -m http.server 8000`), then run this script.
import { chromium } from 'playwright';

const URL_ = process.argv[2] || 'http://localhost:8000/index.html';
let failed = 0;
const ok = (name, cond, extra = '') => {
  console.log(`${cond ? 'PASS' : 'FAIL'}  ${name}${extra ? '  ' + extra : ''}`);
  if (!cond) failed++;
};
const mainVisible = page => page.evaluate(() =>
  [...document.querySelectorAll('main > *')].filter(e => e.offsetParent && e.id !== 'footer').map(e => e.id || e.tagName));

const browser = await chromium.launch();
try {
  // ---------- desktop ----------
  const page = await (await browser.newContext({ viewport: { width: 1280, height: 800 } })).newPage();
  const errors = [];
  page.on('pageerror', e => errors.push(String(e)));
  await page.goto(URL_);
  await page.waitForTimeout(1000);

  ok('page title is My Second Brain', (await page.title()) === 'My Second Brain');
  ok('workspace home visible at start', (await mainVisible(page)).includes('workspaceHome'));
  ok('skip link is the first tab stop', await (async () => {
    await page.keyboard.press('Tab');
    return page.evaluate(() => document.activeElement.className === 'skip-link');
  })());

  // every sidebar entry must open something and leave the home view
  const targets = await page.evaluate(() =>
    [...document.querySelectorAll('#libraryTree [data-course][data-view]')].map(b => [b.dataset.course, b.dataset.view, b.textContent.trim()]));
  ok('sidebar has navigation entries', targets.length > 0, `(${targets.length})`);
  for (const [course, view, label] of targets) {
    await page.click('#homeLink');
    await page.evaluate(() => document.querySelectorAll('#libraryTree details').forEach(d => { d.open = true; }));
    // The ETX5500 template library is created on first visit and then gets a new id, so match by view + label.
    await page.locator(`#libraryTree [data-view="${view}"]`).filter({ hasText: label }).first().click();
    await page.waitForTimeout(500);
    const home = await page.evaluate(() => document.body.classList.contains('workspace-home'));
    const vis = await mainVisible(page);
    ok(`sidebar "${label}" (${course}/${view}) opens content`, !home && vis.length > 0, vis.join(','));
  }

  // graph: node select via keyboard keeps focus
  await page.click('#homeLink');
  await page.click('[data-home-action=graph]');
  await page.waitForTimeout(1200);
  await page.focus('#kgWorld .kg-node');
  const first = await page.evaluate(() => document.activeElement.dataset.node);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(300);
  const after = await page.evaluate(() => document.activeElement.dataset && document.activeElement.dataset.node);
  ok('graph: Enter selects node and keeps focus', first && first === after, `${first} -> ${after}`);
  ok('graph: detail panel shows a title', (await page.locator('#kgDetail h2').count()) > 0);

  // Ctrl+K palette, [[links]] and "My understanding"
  await page.keyboard.press('Escape');
  await page.keyboard.press('Control+k');
  ok('palette: Ctrl+K opens', (await page.locator('#paletteDialog[open]').count()) === 1);
  await page.keyboard.type('决策变量');
  await page.waitForTimeout(300);
  ok('palette: search finds results', (await page.locator('#palList li[data-i]').count()) >= 2);
  await page.locator('#palList li.pal-new').click();
  await page.fill('#palNewBody', '测试笔记，链接到 [[决策变量与定义域]]。');
  await page.keyboard.press('Control+Enter');
  await page.waitForTimeout(300);
  ok('palette: quick note saved with a resolved link',
    await page.evaluate(() => KnowledgeManager.state().items.some(n => n.category === '随手记')) &&
    (await page.locator('#palView button.wl:not(.miss)').count()) >= 1);
  ok('palette: quick note lands in personal library', await page.evaluate(() => { const st = KnowledgeManager.state(); const l = st.libraries.find(x => x.kind === 'personal'); return !!l && st.items.some(n => n.category === '随手记' && n.libraryId === l.id); }));
  await page.locator('#palView .mine textarea').fill('我的理解测试');
  ok('palette: My understanding saved', await page.evaluate(() => MyBrain.keys().length === 1));
  await page.keyboard.press('Escape');

  await page.click('#homeLink');
  await page.waitForTimeout(300);
  ok('home: daily question shown', (await page.locator('.today-q').count()) === 1);
  await page.click('#financeLink');
  await page.waitForTimeout(300);
  ok('finance map: opens with entries', (await page.locator('#palList li[data-i]').count()) >= 13);
  await page.keyboard.press('Escape');
  await page.click('#weeklyLink');
  await page.waitForTimeout(300);
  ok('weekly review opens with heat map', (await page.locator('#weeklyDialog[open] .heat .hm').count()) === 84);
  await page.keyboard.press('Escape');
  // ETX5500 course learning view
  await page.evaluate(() => CourseNav.go('template_ETX5500', 'knowledge'));
  await page.locator('#libraryTree [data-view="learn5500"]').click();
  await page.waitForTimeout(300);
  ok('ETX5500: 课程学习 shows 7 topics', (await page.locator('#course5500:not([hidden]) .c55-tabs button').count()) === 7);
  await page.locator('.c55-card summary').first().click();
  ok('ETX5500: card opens with body text', (await page.locator('.c55-card[open] .c55-text').first().innerText()).length > 20);

  // BEX5260 course learning view
  await page.evaluate(() => CourseNav.go('template_BEX5260', 'knowledge'));
  await page.locator('#libraryTree [data-view="learn5260"]').click();
  await page.waitForTimeout(300);
  ok('BEX5260: 课程学习 shows 12 topics', (await page.locator('#course5260:not([hidden]) .c55-tabs button').count()) === 12);
  await page.locator('#course5260 .c55-card summary').first().click();
  ok('BEX5260: card opens with body text', (await page.locator('#course5260 .c55-card[open] .c55-text').first().innerText()).length > 20);

  // AI panel must not be visible on a public (non-127.0.0.1) host
  const host = new URL(URL_).hostname;
  if (host !== '127.0.0.1') {
    ok('AI Mock/Gemini panel hidden on public host',
      await page.evaluate(() => getComputedStyle(document.getElementById('aiWorkspace')).display === 'none'));
  }
  ok('no uncaught page errors', errors.length === 0, errors.join(' | '));

  // ---------- mobile ----------
  const m = await (await browser.newContext({ viewport: { width: 375, height: 740 }, isMobile: true, hasTouch: true })).newPage();
  await m.goto(URL_);
  await m.waitForTimeout(1000);
  ok('mobile: no horizontal scroll', await m.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth));
  ok('mobile: nav collapsed by default', await m.evaluate(() => document.body.classList.contains('nav-collapsed')));
  ok('mobile: first action visible without scrolling', await m.evaluate(() => (document.querySelector('[data-today]')||document.querySelector('.home-actions button')).getBoundingClientRect().top < innerHeight));
} finally {
  await browser.close();
}
console.log(failed ? `\n${failed} check(s) FAILED` : '\nAll checks passed');
process.exit(failed ? 1 : 0);
