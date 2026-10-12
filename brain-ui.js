/* Presentation layer only: never writes, migrates, clears or seeds storage. */
window.BrainUI=(()=>{
  const byId=id=>document.getElementById(id);
  const reader=document.createElement('dialog');reader.id='reader';reader.className='reader';reader.setAttribute('aria-labelledby','readerTitle');
  reader.innerHTML='<div class="reader-toolbar"><span id="readerTrail"></span><button id="closeReader" type="button"></button></div><div class="reader-main"><div id="readerMeta" class="reader-meta"></div><h2 id="readerTitle"></h2><div id="readerContent"></div><p id="mathMapping" class="muted"></p></div>';
  document.body.append(reader);let activeCard=null;
  const tex=[String.raw`x_1\ge0,\quad x_2\ge0`,String.raw`\max\;z=3x_1+2x_2`,String.raw`x_1+2x_2\le8`,String.raw`F=\{(x_1,x_2):x_1+x_2\le4,\;x_1+2x_2\le8,\;x_1,x_2\ge0\}`,String.raw`z^*=\max_{v\in V}c^{\mathsf T}v`,String.raw`x_1,x_2\in\mathbb R_{\ge0}`];
  const opts={throwOnError:false,trust:false,maxExpand:500,maxSize:15,strict:'ignore',output:'htmlAndMathml'};
  function math(el,formula){if(window.katex){katex.render(formula,el,{...opts,displayMode:true});el.dataset.math='true';}}
  function userMath(el){if(window.renderMathInElement)renderMathInElement(el,{...opts,delimiters:[{left:'$$',right:'$$',display:true},{left:'\\[',right:'\\]',display:true},{left:'\\(',right:'\\)',display:false},{left:'$',right:'$',display:false}],ignoredClasses:['katex']});}
  function staticMath(){
    const a=byId('a').value,b=byId('b').value,r=byId('r').value;
    math(document.querySelector('#graph .formula'),String.raw`\max\;z=${a}x_1+${b}x_2`);
    math(byId('constraints'),String.raw`\begin{aligned}x_1+x_2&\le ${r}\\x_1+2x_2&\le8\\x_1,x_2&\ge0\end{aligned}`);
    const example=document.querySelector('#example .formula');if(example)math(example,String.raw`\begin{aligned}\max\quad z&=3x_1+2x_2\\\text{s.t.}\quad x_1+x_2&\le4\\x_1+2x_2&\le8\\x_1,x_2&\ge0\end{aligned}`);
  }
  function open(card){
    activeCard=card;const detail=card.querySelector('details');
    byId('readerTitle').textContent=card.querySelector('summary').textContent;
    byId('readerMeta').replaceChildren(card.querySelector('.tag').cloneNode(true));
    const course=card.querySelector(':scope > .muted');if(course)byId('readerMeta').append(course.cloneNode(true));
    const content=byId('readerContent');content.replaceChildren(...[...detail.children].filter(e=>e.tagName!=='SUMMARY').map(e=>e.cloneNode(true)));
    const builtin=[...document.querySelectorAll('#cards article:not(.personal-note)')].includes(card);
    if(builtin){const topic=topics.findIndex(v=>pair(v.title)===byId('readerTitle').textContent);const formula=content.querySelector('.formula');if(formula&&topic>=0)math(formula,tex[topic]);}
    userMath(content);
    byId('mathMapping').textContent=builtin?t('符号说明：x₁ 对应原演示的 x，x₂ 对应 y。','Notation: x₁ corresponds to x in the original demo; x₂ corresponds to y.'):t('个人笔记 · 来源由作者填写，尚未自动核实。','Personal note · Sources are supplied by the author and have not been automatically verified.');
    byId('readerTrail').textContent=t('知识库 / 专注阅读','Library / Focus reading');byId('closeReader').textContent=t('返回知识库 · Esc','Back to library · Esc');
    if(!reader.open)reader.showModal();reader.scrollTop=0;
  }
  function decorate(){
    document.querySelectorAll('#cards article').forEach(card=>{
      card.querySelector('summary').setAttribute('aria-haspopup','dialog');
      card.querySelector('summary').setAttribute('aria-controls','reader');
      if(!card.querySelector('.row-preview')){const preview=document.createElement('p');preview.className='row-preview';preview.textContent=card.querySelector('details p')?.textContent.slice(0,120)||'';card.querySelector('details').after(preview);}
    });
  }
  byId('closeReader').onclick=()=>reader.close();
  reader.addEventListener('close',()=>activeCard?.querySelector('summary')?.focus());
  reader.addEventListener('click',e=>{if(e.target===reader){const r=reader.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)reader.close();}});
  byId('cards').addEventListener('click',e=>{if(e.target.closest('button'))return;const card=e.target.closest('article');if(card){e.preventDefault();open(card);}});
  const sidebar=document.createElement('div');sidebar.className='side-future';byId('nav').after(sidebar);
  const bottom=document.createElement('div');bottom.className='side-bottom';document.querySelector('header .wrap').append(bottom);
  const future=document.createElement('section');future.id='roadmap';byId('footer').before(future);
  const help=document.createElement('p');help.className='math-help';byId('formHelp').after(help);
  function refresh(){
    document.title='My Second Brain';
    document.querySelector('.brand').firstChild.textContent='My Second Brain';
    byId('subtitle').textContent=t('你的个人学习空间','Your personal learning space');
    byId('heading').textContent=t('让知识积累，成为你的力量。','A home for what you learn.');
    byId('intro').textContent=t('收藏想法，连接知识，循序理解。从 ETF5248 线性规划开始，建立自己的第二大脑。','Capture ideas. Connect knowledge. Build understanding. Your second brain starts with ETF5248 linear programming.');
    document.querySelector('.eyebrow').textContent='MY WORKSPACE / LEARNING & IDEAS';
    byId('knowledgeTitle').textContent=t('知识库','Knowledge library');
    byId('knowledgeIntro').textContent=t('浏览你的笔记与学习资料。点击任意知识条目，展开专注阅读。','Browse your notes and learning materials. Open any entry for focused reading.');
    sidebar.innerHTML=t('接下来','COMING NEXT')+`<a href="#roadmap">AI PDF <span>${t('规划中','Planned')}</span></a><a href="#roadmap">AI Tutor <span>${t('规划中','Planned')}</span></a><a href="#roadmap">${t('在线发布','Publishing')} <span>${t('规划中','Planned')}</span></a>`;
    bottom.textContent=t('● 本机空间 · 笔记不上传','● Local workspace · Notes stay here');
    help.textContent=t('公式支持 LaTeX：行内用 \\(x_1\\)，独立公式用 $$\\max z=3x_1+2x_2$$。保存后在阅读窗口查看；普通文本保持原样。','LaTeX: use \\(x_1\\) inline, or $$\\max z=3x_1+2x_2$$ for display math. Save and open the reader; plain text stays unchanged.');
    future.innerHTML=`<div class="eyebrow">NEXT CHAPTER</div><h2>${t('为下一步留好位置','Room to grow')}</h2><p class="muted">${t('以下能力尚未开发，不会读取文件、发送消息或上传笔记。','These capabilities are not implemented. They do not read files, send messages or upload notes.')}</p><div class="roadmap-grid">${[['AI PDF',t('从讲义到有出处的知识草稿，先核对，再入库。','Turn lectures into sourced drafts, reviewed before saving.')],['AI Tutor',t('围绕自己的知识提问，逐步理解推导与应用。','Ask questions grounded in your notes and explore each step.')],[t('在线发布','Online publishing'),t('未来展示精选内容，让私人笔记继续保持私密。','Share selected work while keeping personal notes private.')]].map(([title,body])=>`<article class="card"><span class="tag">${t('规划中 · 未启用','Planned · Unavailable')}</span><h3>${title}</h3><p>${body}</p><button disabled>${t('尚未开放','Not available yet')}</button></article>`).join('')}</div>`;
    byId('graphIntro').textContent+=t(' 公式中的 x₁、x₂ 分别对应图轴及原例题中的 x、y。',' In formulas, x₁ and x₂ correspond to the axes and original example variables x and y.');
    decorate();staticMath();
  }
  const previousRender=render;render=()=>{previousRender();refresh();};
  ['a','b','r','resetGraph'].forEach(id=>byId(id).addEventListener(id==='resetGraph'?'click':'input',staticMath));
  byId('nav').addEventListener('click',e=>{if(e.target.tagName==='A'){byId('nav').querySelectorAll('a').forEach(a=>a.classList.toggle('active',a===e.target));}});
  refresh();
  return {userMath,decorate,refresh,staticMath,open};
})();
