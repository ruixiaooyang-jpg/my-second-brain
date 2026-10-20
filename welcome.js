/* First-visit welcome block on the workspace home + "How I built this with AI" page.
   Writes nothing to knowledge data. The only state is a remembered "collapsed" flag (optional, localStorage). */
window.Welcome=(()=>{
 'use strict';
 const $=id=>document.getElementById(id),KEY='my-second-brain.welcome.collapsed';
 const store={get(){try{return localStorage.getItem(KEY)==='1';}catch{return false;}},set(v){try{localStorage.setItem(KEY,v?'1':'0');}catch{/* optional */}}};
 const CODES=['ETX5500','BEX5260'];
 const missing=()=>CODES.reduce((n,c)=>n+(window.CoursePacks?.missing?.(c)||0),0);

 // ---------- About / process dialog ----------
 const dlg=document.createElement('dialog');dlg.id='aboutDialog';dlg.className='review-dialog weekly-dialog';dlg.setAttribute('aria-labelledby','aboutTitle');
 dlg.innerHTML='<div class="review-bar"><h2 id="aboutTitle"></h2><button type="button" id="aboutClose"></button></div><div id="aboutBody" class="weekly-body about-body"></div>';
 document.body.append(dlg);
 const li=(zh,en)=>`<li>${t(zh,en)}</li>`;
 function paintAbout(){
  $('aboutTitle').textContent=t('我如何用 AI 做这个项目','How I built this project with AI');$('aboutClose').textContent=t('关闭 Esc','Close Esc');
  $('aboutBody').innerHTML=`
  <section><h3>${t('这是什么，为什么做','What this is and why')}</h3>
   <p>${t('我同时修三门课（线性规划、高维数据分析、巨趋势），课件散在不同文件夹里，考前不知道该复习什么。我想要一个能把课件变成可复习、可相互连接、还能写进自己理解的个人知识库，并且只用静态 HTML/CSS/JS，不依赖框架和服务器，打开就能用。','I take three courses (linear programming, high-dimensional data analysis, megatrends). The slides sit in different folders and before exams I never know what to review. I wanted a personal knowledge base that turns slides into cards I can review, connect and annotate with my own understanding, built as static HTML/CSS/JS with no framework or server, so it just opens.')}</p></section>
  <section><h3>${t('我怎么和 AI 协作','How I worked with AI')}</h3>
   <ol>${li('我先用自己的话说清楚要什么，例如“做一个课程学习页面，按顺序读知识点、能勾已学、能写我的理解”。','I first say what I want in my own words, e.g. “a course-learning page: read topics in order, tick learned, write my understanding”.')}
   ${li('AI 在不改框架的前提下实现，并自己跑浏览器测试。','AI implements it without changing the stack and runs browser tests itself.')}
   ${li('我在真实浏览器里点一遍，看哪里不对（截图发回去）。','I click through it in a real browser and report what looks wrong (with screenshots).')}
   ${li('AI 查原因、修改、复测；我再决定要不要保留。','AI finds the cause, fixes and retests; I decide whether to keep it.')}
   ${li('每次改动前先备份旧文件，已有的笔记和课程内容不被覆盖。','Old files are backed up before every change; existing notes and course content are never overwritten.')}</ol>
   <p class="muted">${t('约束一直是：不换框架、不乱改课程内容和知识关联、不动我的个人数据。','Standing constraints: no framework rewrite, no casual changes to course content or knowledge relations, no touching my personal data.')}</p></section>
  <section><h3>${t('一路做了什么','What was built, step by step')}</h3>
   <ul>${li('工作台首页、今日复习、课程导航','Workspace home, today’s review, course navigation')}
   ${li('Ctrl+K 搜索与快速记一笔，[[双向链接]] 与“谁链接到这里”','Ctrl+K search and quick capture, [[wiki links]] with backlinks')}
   ${li('每张卡片下的“我的理解”（只存在本机浏览器）','“My understanding” under every card (stored only in this browser)')}
   ${li('三门课的“课程学习”：按顺序阅读、已学勾选、搜索、页码','“Course learning” for three courses: ordered reading, learned ticks, search, page numbers')}
   ${li('间隔复习、错题本、每周回顾与活动热力图','Spaced review, mistakes notebook, weekly review and activity map')}
   ${li('知识图谱、例题库、金融应用地图','Knowledge graph, example bank, finance application map')}</ul></section>
  <section><h3>${t('我怎么检查 AI 的结果','How I check what AI produces')}</h3>
   <ul>${li('课件卡片是 AI 对课件的改写。每张卡都用关键短语回到原 PDF 页面核对，页码是 PDF 物理页，改写不等于逐字抄。','Course cards are AI paraphrases of the slides. Each card is checked against the source PDF page with key phrases; page numbers are physical PDF pages, and paraphrase is not verbatim.')}
   ${li('发现知识图谱里练习题是孤立的点，于是把练习题改成“例题”，再让知识点链到它们。','I noticed practice questions were isolated nodes in the graph, so they became “examples” that knowledge cards link to.')}
   ${li('发现图谱里概念之间几乎不连线，补了一批概念与概念的关联，孤立概念降为 0（这些关联是按内容判断的，仍需对照课件复核）。','Concepts were barely connected to each other, so I added concept-to-concept links and isolated concepts dropped to 0 (judged from content; still to be checked against slides).')}
   ${li('发现 $ 符号会被当成公式、星号会原样显示，已改掉。','Found that $ signs were rendered as math and asterisks showed literally, and fixed both.')}
   ${li('发现我自己写的“最小比值检验”笔记不准确，和 AI 一起改正：比值是 RHS ÷ 进基列的正系数。','Caught an inaccurate note of my own on the minimum-ratio test and corrected it: ratio = RHS ÷ the positive entering-column coefficient.')}
   ${li('每次改完都跑自动冒烟测试，并检查手机宽度。','An automated smoke test and a mobile-width check run after every change.')}</ul></section>
  <section><h3>${t('哪些是 AI 的，哪些是我的','What is AI’s and what is mine')}</h3>
   <ul>${li('AI：代码、课件卡片的改写、例题整理、测试。','AI: code, paraphrased course cards, example write-ups, tests.')}
   ${li('我：要什么和为什么、每一步的验收、卡片是否准确的判断、以及“我的理解”里写下的所有自己的话。','Me: what and why, acceptance of every step, judging whether cards are accurate, and everything I write under “My understanding”.')}</ul></section>
  <section><h3>${t('已知局限','Known limitations')}</h3>
   <ul>${li('没有云端同步：笔记、“我的理解”、复习进度和已学记录只存在这台电脑的浏览器里。我选择“本地优先”，跨设备靠“完整备份”一个文件导出、导入；恢复前会自动保存快照，可以撤销。','There is no cloud sync: notes, “My understanding”, review progress and learned ticks live only in this browser. I chose local-first; moving between devices uses one “full backup” file, and a snapshot is saved before every restore so it can be undone.')}
   ${li('要做真正的多设备同步，需要后端或第三方账号，这是后续方向。','Real multi-device sync would need a backend or a third-party account; that is a future direction.')}
   ${li('卡片由 AI 改写，关键数字请回课件确认。','Cards are AI paraphrases; confirm key numbers against the slides.')}</ul></section>
  <section><h3>${t('技术','Tech')}</h3><p>${t('纯静态 HTML / CSS / JavaScript，无框架、无后端；数据存在浏览器 localStorage；可离线使用。','Plain static HTML / CSS / JavaScript, no framework, no backend; data in browser localStorage; works offline.')}</p></section>`;
 }
 function openAbout(){paintAbout();if(!dlg.open)dlg.showModal();}
 dlg.addEventListener('click',e=>{if(e.target.id==='aboutClose')dlg.close();});

 // ---------- Welcome block on the home page ----------
 let busy=false;
 function block(){
  const mis=missing(),collapsed=store.get();
  const box=document.createElement('section');box.id='welcomeBlock';box.className='welcome'+(collapsed?' is-collapsed':'');
  box.innerHTML=collapsed?`<p><strong>${t('欢迎','Welcome')}</strong> <button type="button" data-wc="show">${t('展开新手引导','Show the quick start')}</button> <button type="button" data-wc="about">${t('我如何用 AI 做这个项目','How I built this with AI')}</button></p>`:`
   <p class="welcome-lead">${t('这是我用 AI 协作搭建的个人知识库：把三门课的课件变成可复习、可相互连接，并能写进自己理解的卡片。','A personal knowledge base I built in collaboration with AI: it turns the slides of three courses into cards you can review, connect, and annotate with your own understanding.')}</p>
   <ol class="welcome-steps">
    <li><strong>${t('载入课程卡片','Load the course cards')}</strong> ${mis?`<button type="button" class="primary" data-wc="load">${t('一键载入另外两门课','Load the other two courses')}</button>`:`<span class="welcome-ok">${t('三门课已就绪','All three courses are ready')}</span>`}<span class="muted"> ${t('ETF5248 已内置；ETX5500 与 BEX5260 点击后载入。','ETF5248 is built in; ETX5500 and BEX5260 are added by the button.')}</span></li>
    <li><strong>${t('读一张卡，写一句自己的话','Read a card, write one line of your own')}</strong> <span class="muted">${t('左侧选课程 → 课程学习 → 展开卡片 → “写下我的理解”。','Pick a course on the left → Course learning → open a card → “Write my understanding”.')}</span></li>
    <li><strong>${t('看看它们怎么连起来','See how it connects')}</strong> <button type="button" data-wc="graph">${t('打开知识图谱','Open the knowledge graph')}</button> <button type="button" data-wc="review">${t('开始复习','Start reviewing')}</button></li>
   </ol>
   <p class="welcome-foot"><button type="button" class="primary" data-wc="about">${t('我如何用 AI 做这个项目','How I built this with AI')}</button> <button type="button" data-wc="hide">${t('收起引导','Hide this')}</button></p>`;
  return box;
 }
 function paintBlock(){
  const home=$('workspaceHome');if(!home)return;
  const old=$('welcomeBlock');
  const fresh=block();
  if(old){if(old.innerHTML===fresh.innerHTML&&old.className===fresh.className)return;old.replaceWith(fresh);}
  else{const small=matchMedia('(max-width:760px)').matches,slot=small?(home.querySelector('#todaySlot')||home.querySelector('.home-intro')):home.querySelector('.home-intro');if(slot)slot.after(fresh);else home.prepend(fresh);}
 }
 async function loadAll(){
  if(busy)return;busy=true;
  try{
   for(const c of CODES){if((window.CoursePacks?.missing?.(c)||0)===0)continue;CourseNav.go('template_'+c,'knowledge');window.CoursePacks.loadCode(c);}
  }catch{/* CoursePacks reports its own errors */}
  busy=false;window.HomeUI?.show();paintBlock();
 }
 document.addEventListener('click',e=>{
  const a=e.target.closest('#welcomeBlock [data-wc]')?.dataset.wc;if(!a)return;
  if(a==='about')openAbout();
  else if(a==='load')loadAll();
  else if(a==='hide'){store.set(true);paintBlock();}
  else if(a==='show'){store.set(false);paintBlock();}
  else if(a==='review')window.ReviewUI?.open('all');
  else if(a==='graph'){const l=KnowledgeManager.state().libraries.find(v=>v.id==='kb_etf5248')||KnowledgeManager.state().libraries[0];if(l)CourseNav.go(l.id,'knowledgeGraph');}
 });
 // Sidebar link next to the weekly review.
 const link=document.createElement('button');link.id='aboutLink';link.type='button';
 ($('weeklyLink')||$('paletteLink')||$('homeLink')).after(link);link.onclick=openAbout;
 function paint(){link.textContent=t('关于 · 我如何用 AI','About · built with AI');paintBlock();if(dlg.open)paintAbout();}
 // The home page rewrites its own markup on refresh; put the block back whenever that happens.
 const home=$('workspaceHome');if(home)new MutationObserver(()=>{if(!$('welcomeBlock'))paintBlock();}).observe(home,{childList:true});
 paint();const previousRender=render;render=()=>{previousRender();paint();};
 return {open:openAbout,paint};
})();
