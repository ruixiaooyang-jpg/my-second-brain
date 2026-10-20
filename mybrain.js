/* "My brain" layer: Ctrl+K palette (search everything + quick capture), [[wiki links]] with backlinks, and a personal
   "My understanding" field for every card/example. Own storage key; knowledge data and its schema are never changed
   except when the user explicitly saves a new quick note (written through KnowledgeManager.apply like any other note). */
window.MyBrain=(()=>{
 'use strict';
 const KEY='my-second-brain.mine.v1',MAX=5000,$=id=>document.getElementById(id);
 const pick=a=>Array.isArray(a)?(a[lang==='en'?1:0]||a[0]||''):String(a||'');
 const both=a=>Array.isArray(a)?a.filter(Boolean):[String(a||'')];
 const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const kindZh={concept:'概念',case:'案例',practice:'练习',note:'笔记',example:'例题',application:'金融应用'},kindEn={concept:'Concept',case:'Case',practice:'Practice',note:'Note',example:'Example',application:'Finance use'};

 // ---- "My understanding" storage: { v:1, notes:{ key:[text, iso] } }. Keys = note id, "cat:<id>", "ex:<id>", "demo:<title>".
 let mine={v:1,notes:{}},writable=true;
 function load(){let v=null;try{v=JSON.parse(localStorage.getItem(KEY)||'null');}catch{v=null;}
  mine=v&&v.v===1&&v.notes&&typeof v.notes==='object'?v:{v:1,notes:{}};}
 function persist(){try{localStorage.setItem(KEY,JSON.stringify(mine));writable=true;window.FolderBackup?.schedule?.();}catch{writable=false;}return writable;}
 const getMine=k=>mine.notes[k]?.[0]||'';
 function setMine(k,text){text=String(text).slice(0,MAX);if(text.trim())mine.notes[k]=[text,new Date().toISOString()];else delete mine.notes[k];return persist();}
 load();

 // ---- [[wiki links]]. A leading identifier/bracket char means R/matrix code such as x[[1]], so that is never a link.
 const LINK=/(?<![\w\])$\\])\[\[(?![\s"'])([^\[\]\n|]{1,80}?)(?:\|([^\[\]\n]{1,80}))?\]\]/g;
 const isCode=n=>/^[\d\s,.+\-]+$/.test(n);
 function linksIn(text){const out=[];for(const m of String(text).matchAll(LINK)){const n=m[1].trim();if(n&&!isCode(n))out.push(n);}return out;}

 // ---- Index of everything searchable.
 let idx=[],byTitle=new Map(),byKey=new Map();
 function build(){
  const st=KnowledgeManager.state(),out=[],lib=id=>window.LibraryUI?.name(id)||'';
  for(const n of st.items)out.push({key:n.id,src:'note',kind:n.contentType||'note',title:[n.title,n.titleEn||n.title],body:[n.body,n.bodyEn||n.body],course:lib(n.libraryId)||n.course,lib:n.libraryId,where:n.sourcePage||'',tags:n.tags||[],note:n});
  for(const e of (window.ETF5248Catalog?.entries||[])){
   const f=(e.formulas||[]).map(x=>`$$${x}$$`).join('\n');let body,ask=null;
   if(e.answer&&e.body){ask=e.body;body=e.answer;}else if(e.body)body=e.body.map(b=>(f?f+'\n':'')+b);else body=['',''];
   out.push({key:'cat:'+e.id,src:'cat',kind:e.kind,title:e.title,ask,body,course:'ETF5248',lib:st.builtinLibraryId,where:'',tags:[]});}
  const have=new Set(st.items.map(n=>n.id));
  for(const [pk,code] of [[window.ETX5500Pack,'ETX5500'],[window.BEX5260Pack,'BEX5260']])for(const c of (pk?.cards||[])){if(have.has(c.id))continue;out.push({key:c.id,src:'pack',kind:c.kind,title:[c.title,c.titleEn||c.title],body:[c.body,c.bodyEn||c.body],course:code,lib:null,where:c.sourcePage||'',tags:c.tags||[]});}
  for(const e of (window.CourseExamples?.examples||[]))out.push({key:'ex:'+e.id,src:'ex',kind:'example',title:e.title,ask:e.problem,body:(e.solution||[]).map((x,i)=>x+'\n'+(i?'Answer: ':'答案：')+(e.answer?.[i]||'')),course:e.course,lib:null,where:(e.pages&&e.pages.length)?'p. '+e.pages.join(', '):'',tags:[],ex:e});
  for(const f of (window.FinanceMap?.items||[]))out.push({key:'fin:'+f.id,src:'fin',kind:'application',title:f.title.map((x,i)=>(i?'Finance: ':'金融应用：')+x),body:f.body,course:t('课程应用思路','Course application'),lib:null,where:'',tags:['金融应用','finance'],links:f.links});
  for(const e of out){e.titles=both(e.title).map(x=>x.toLowerCase());e.text=[...both(e.body),...both(e.ask||[])].join('\n');}
  idx=out;byTitle=new Map();byKey=new Map();
  for(const e of out){byKey.set(e.key,e);for(const x of e.titles)if(!byTitle.has(x))byTitle.set(x,e);}
  return out;
 }
 const hay=e=>(e.titles.join('\n')+'\n'+e.text+'\n'+e.tags.join(' ')+'\n'+getMine(e.key)).toLowerCase();
 const stamp=e=>Date.parse(mine.notes[e.key]?.[1]||e.note?.updatedAt||'')||0;
 const resolve=name=>byTitle.get(String(name).trim().toLowerCase());
 function search(q){
  const tokens=q.toLowerCase().split(/\s+/).filter(Boolean);
  if(!tokens.length)return idx.filter(e=>getMine(e.key)||(e.src==='note'&&e.key.startsWith('note_'))).sort((a,b)=>stamp(b)-stamp(a)).slice(0,25);
  const r=[];
  for(const e of idx){const h=hay(e),m=getMine(e.key).toLowerCase();let s=0;
   for(const tk of tokens){if(!h.includes(tk)){s=-1;break;}s+=e.titles.includes(tk)?20:e.titles.some(x=>x.startsWith(tk))?12:e.titles.some(x=>x.includes(tk))?8:m.includes(tk)?4:1;}
   if(s>0)r.push([s+(e.src==='note'?2:0)+(m?1:0),e]);}
  return r.sort((a,b)=>b[0]-a[0]).slice(0,40).map(x=>x[1]);
 }
 // Who links to these titles? Searches note bodies and every "My understanding" text.
 function backlinks(key,titles){
  const want=new Set(titles.map(x=>x.toLowerCase()));if(!want.size)return [];
  const hit=txt=>linksIn(txt).some(n=>want.has(n.toLowerCase()));const out=[];
  for(const e of idx){if(e.key===key)continue;if(hit(e.text)||hit(getMine(e.key)))out.push(e);}
  for(const k of Object.keys(mine.notes)){if(k===key||byKey.has(k))continue;if(hit(getMine(k)))out.push({key:k,src:'stub',kind:'note',title:[k.replace(/^[a-z]+:/,''),k.replace(/^[a-z]+:/,'')]});}
  return out;
 }
 const kindLabel=e=>t(kindZh[e.kind]||'笔记',kindEn[e.kind]||'Note');

 // ---- Turn [[x]] inside already-rendered DOM into buttons (skips math and existing buttons).
 function linkifyTree(root){
  const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode:n=>n.data.includes('[[')&&!n.parentElement.closest('.katex,button,textarea,code,pre')?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT});
  const nodes=[];while(w.nextNode())nodes.push(w.currentNode);
  for(const node of nodes){
   const text=node.data,frag=document.createDocumentFragment();let last=0,any=false;
   for(const m of text.matchAll(LINK)){const name=m[1].trim();if(!name||isCode(name))continue;any=true;
    frag.append(document.createTextNode(text.slice(last,m.index)));
    const b=document.createElement('button');b.type='button';b.dataset.wl=name;b.className='wl'+(resolve(name)?'':' miss');b.textContent=(m[2]||name).trim();
    b.title=resolve(name)?t('打开','Open'):t('还没有这条笔记，点击新建','No such note yet; click to create it');frag.append(b);last=m.index+m[0].length;}
   if(any){frag.append(document.createTextNode(text.slice(last)));node.replaceWith(frag);}
  }
 }
 function paintText(root,text){
  for(const para of String(text).split(/\n+/)){if(!para.trim())continue;const p=document.createElement('p');p.textContent=para;root.append(p);}
  linkifyTree(root);window.BrainUI?.userMath(root);
 }

 // ---- "My understanding" editor + outgoing chips.
 function chips(texts){
  const seen=new Set(),box=document.createElement('p');box.className='mine-chips';
  for(const n of texts.flatMap(linksIn)){const k=n.toLowerCase();if(seen.has(k))continue;seen.add(k);
   const b=document.createElement('button');b.type='button';b.dataset.wl=n;b.className='wl'+(resolve(n)?'':' miss');b.textContent=n;box.append(b);}
  return box;
 }
 function mineBlock(key,bodyTexts,opts={}){
  const sec=document.createElement('section');sec.className='mine'+(opts.compact?' mine-compact':'');
  sec.innerHTML=`<h3>${t('我的理解','My understanding')}</h3><textarea rows="${opts.compact?3:4}" maxlength="${MAX}" aria-label="${t('我的理解','My understanding')}" placeholder="${esc(t('用自己的话写：为什么这样？我哪里错过？怎么记？可以用 [[标题]] 链接到其他知识点。','In your own words: why does it work, where did you go wrong, how do you remember it? Link other cards with [[title]].'))}"></textarea><p class="muted mine-status" role="status" aria-live="polite"></p><div class="mine-out"></div>`;
  const ta=sec.querySelector('textarea'),st=sec.querySelector('.mine-status'),out=sec.querySelector('.mine-out');
  ta.value=getMine(key);
  const paintOut=()=>{out.replaceChildren(...(linksIn(ta.value).length?[Object.assign(document.createElement('span'),{className:'muted',textContent:t('我写的链接：','Links in my text: ')}),chips([ta.value])]:[]));};
  ta.addEventListener('input',()=>{const ok=setMine(key,ta.value);st.textContent=ok?t('已保存在本机浏览器','Saved in this browser'):t('无法保存：浏览器存储不可用','Cannot save: browser storage unavailable');st.classList.toggle('error',!ok);paintOut();window.TodayUI?.fill?.();});
  paintOut();return sec;
 }
 function backBlock(key,titles){
  const list=backlinks(key,titles),sec=document.createElement('section');sec.className='mine-back';
  sec.innerHTML=`<h3>${t('谁链接到这里','Linked from')}</h3>`;
  if(!list.length){const p=document.createElement('p');p.className='muted';p.textContent=t('还没有笔记链接到这里。在任何笔记或“我的理解”里写 [[这张卡的标题]]，它就会出现在这里。','Nothing links here yet. Write [[this card’s title]] in any note or in “My understanding” and it will show up here.');sec.append(p);return sec;}
  const ul=document.createElement('ul');for(const e of list){const li=document.createElement('li'),b=document.createElement('button');b.type='button';b.className='wl';b.dataset.open=e.key;b.textContent=pick(e.title);const s=document.createElement('small');s.className='muted';s.textContent=' '+kindLabel(e);li.append(b,s);ul.append(li);}
  sec.append(ul);return sec;
 }

 // ---- Note templates and the daily question (content prompts only; nothing is stored until the user saves a note).
 const today10=()=>{const d=new Date();return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;};
 const TEMPLATES=[
  {id:'blank',zh:'空白',en:'Blank',cat:'随手记',title:()=>'',body:()=>['','']},
  {id:'mistake',zh:'错题复盘',en:'Mistake review',cat:'错题复盘',title:()=>['错题：','Mistake: '],
   body:()=>['题目 / 场景：\n我当时的想法：\n错在哪：\n正确的思路：\n下次怎么避免：\n相关知识点：[[ ]]','Problem / situation:\nWhat I thought:\nWhere I went wrong:\nCorrect reasoning:\nHow to avoid it next time:\nRelated cards: [[ ]]']},
  {id:'interview',zh:'求职 / 面试复盘',en:'Job / interview review',cat:'求职',title:()=>['求职复盘：','Job review: '],
   body:()=>['岗位 / 机构：\n环节（笔试 / 面试 / 测评）：\n被问到什么 / 考了什么：\n我是怎么答的：\n没答好的地方：\n下次准备什么：','Role / organisation:\nStage (test / interview / assessment):\nWhat was asked:\nHow I answered:\nWhat went badly:\nWhat to prepare next:']},
  {id:'apply',zh:'学以致用',en:'Use it in practice',cat:'学以致用',title:()=>['怎么用：','Where to use: '],
   body:()=>['这个方法 / 概念：[[ ]]\n可以用在哪个真实场景（比如金融、数据分析）：\n具体会怎么做：\n需要注意的前提或风险：','Method / concept: [[ ]]\nReal-world setting (e.g. finance, data analysis):\nHow I would do it:\nAssumptions or risks to watch:']},
  {id:'reading',zh:'读书 / 文章',en:'Reading',cat:'阅读',title:()=>['读后：','Reading: '],
   body:()=>['来源（书名 / 链接）：\n一句话讲了什么：\n我最认同或最想反驳的一点：\n和我学过的哪个知识点有关：[[ ]]','Source (book / link):\nWhat it says in one sentence:\nWhat I most agree or disagree with:\nWhich card it connects to: [[ ]]']},
  {id:'daily',zh:'每日三句',en:'Daily three lines',cat:'每日复盘',title:()=>[`每日复盘 ${today10()}`,`Daily review ${today10()}`],
   body:()=>['今天学了什么：\n卡在哪：\n明天先做：','What I learned today:\nWhere I got stuck:\nWhat I do first tomorrow:']}
 ];
 const QUESTIONS=[
  ['今天学的东西里，哪一点你还讲不清楚？','Which part of today’s material can you still not explain clearly?'],
  ['如果要讲给一个没学过的朋友听，你会怎么解释今天的内容？','How would you explain today’s material to a friend who hasn’t studied it?'],
  ['今天卡在哪一步？卡住时你当时在想什么？','Where did you get stuck today, and what were you thinking at that moment?'],
  ['最近学的方法，能用在哪个真实场景（比如金融）？','Where could a method you learned recently be used in real life (finance, for example)?'],
  ['最近一次做错的题，错在哪？现在会了吗？','What was the last problem you got wrong, and can you do it now?'],
  ['哪两个知识点，你觉得其实是一回事？','Which two ideas do you think are really the same thing?'],
  ['如果明天考这一章，你最担心哪里？','If this chapter were examined tomorrow, what worries you most?'],
  ['求职方面，今天有什么进展或新发现？','Any progress or new finding on the job search today?'],
  ['今天读到或听到什么想法，值得留下来？','What idea did you read or hear today that is worth keeping?'],
  ['这周学的东西里，哪一个以后一定还会用到？为什么？','Which thing from this week will you certainly use again, and why?'],
  ['有没有哪个公式你会背，但还不理解为什么？','Is there a formula you can recite but do not yet understand?'],
  ['今天最大的一个收获是什么？','What was your biggest takeaway today?'],
  ['你现在对哪个概念的理解，和刚学时不一样了？','Which concept do you understand differently now than when you first met it?'],
  ['接下来一周，你最想弄明白的一个问题是什么？','What is the one question you most want to figure out in the next week?']
 ];
 const dayIndex=()=>Math.floor((Date.now()-new Date().getTimezoneOffset()*6e4)/864e5);
 const dailyQuestion=()=>QUESTIONS[dayIndex()%QUESTIONS.length];
 // Entries written in the last 7 days: new quick notes plus "My understanding" edits.
 function stats(){
  const cut=Date.now()-7*864e5;let n=0;
  try{for(const it of KnowledgeManager.state().items)if(it.id.startsWith('note_')&&Date.parse(it.createdAt)>=cut)n++;}catch{/* optional */}
  for(const v of Object.values(mine.notes))if(Date.parse(v[1])>=cut)n++;
  return {week:n};
 }
  // Finance map: which finance uses build on a card, and which course cards a finance use builds on.
 function finBlock(key){
  const sec=document.createElement('section');sec.className='mine-back fin-block';
  const fin=idx.find(x=>x.key===key&&x.src==='fin');
  if(fin){
   sec.innerHTML=`<h3>${t('建立在这些课程知识点上','Builds on these course cards')}</h3>`;
   const ul=document.createElement('ul');for(const k of fin.links||[]){const e=byKey.get(k);if(!e)continue;const li=document.createElement('li'),b=document.createElement('button');b.type='button';b.className='wl';b.dataset.open=e.key;b.textContent=pick(e.title);li.append(b);ul.append(li);}
   sec.append(ul);const n=document.createElement('p');n.className='muted';n.textContent=t('这是我根据课程知识整理的应用思路，不是课件内容；具体做法请以教材和实务为准，不构成投资建议。','These are application ideas written from the course material, not slide content; check textbooks and practice for details. Not investment advice.');sec.append(n);return sec;
  }
  const list=idx.filter(x=>x.src==='fin'&&(x.links||[]).includes(key));if(!list.length)return null;
  sec.innerHTML=`<h3>${t('金融里怎么用','Where this is used in finance')}</h3>`;
  const ul=document.createElement('ul');for(const e of list){const li=document.createElement('li'),b=document.createElement('button');b.type='button';b.className='wl';b.dataset.open=e.key;b.textContent=pick(e.title).replace(/^(金融应用：|Finance: )/,'');li.append(b);ul.append(li);}
  sec.append(ul);return sec;
 }
 let pendingTpl=null;
 // ---- Palette dialog.
 const dlg=document.createElement('dialog');dlg.id='paletteDialog';dlg.className='palette';dlg.setAttribute('aria-label','Search and capture');
 dlg.innerHTML='<div class="pal-top"><input id="palQ" type="search" autocomplete="off" spellcheck="false" role="combobox" aria-expanded="true" aria-controls="palList"><button type="button" id="palClose"></button></div><div class="pal-body"><ul id="palList" role="listbox"></ul><div id="palView" class="pal-view"></div></div><p id="palHint" class="pal-hint muted"></p>';
 document.body.append(dlg);
 let results=[],sel=0;
 const newItem=q=>({isNew:true,title:q});
 function labels(){$('palQ').placeholder=t('搜索卡片、例题、笔记和“我的理解”… 或直接输入新想法','Search cards, examples, notes and your own words… or type a new idea');
  $('palClose').textContent=t('关闭 Esc','Close Esc');$('palHint').textContent=t('↑↓ 选择 · Enter 写“我的理解” · Ctrl+K 随时呼出 · 末尾一项可新建笔记','↑↓ choose · Enter to write “My understanding” · Ctrl+K anywhere · last item creates a note');}
 function paintList(){
  const ul=$('palList');ul.textContent='';
  results.forEach((e,i)=>{const li=document.createElement('li');li.id='pal-'+i;li.setAttribute('role','option');li.dataset.i=i;li.setAttribute('aria-selected',String(i===sel));
   if(e.isNew){li.className='pal-new';li.textContent=e.title?t(`＋ 新建笔记“${e.title}”`,`＋ New note “${e.title}”`):t('＋ 新建笔记','＋ New note');}
   else{const s=document.createElement('strong');s.textContent=pick(e.title);const m=document.createElement('small');m.textContent=`${kindLabel(e)} · ${e.course||''}${getMine(e.key)?' · '+t('有我的理解','has my notes'):''}`;li.append(s,m);}
   ul.append(li);});
  if(!results.length){const li=document.createElement('li');li.className='pal-empty muted';li.textContent=t('输入关键词搜索，或写下一个新想法','Type to search, or write down a new idea');ul.append(li);}
 }
 function view(){
  const v=$('palView');v.textContent='';const e=results[sel];
  if(!e){v.innerHTML=`<p class="muted">${t('这里会显示选中的内容。你写的笔记和“我的理解”会排在最前面。','The selected item appears here. Your notes and “My understanding” are listed first.')}</p>`;return;}
  if(e.isNew){viewNew(e.title);return;}
  const meta=document.createElement('p');meta.className='muted';meta.textContent=`${kindLabel(e)} · ${e.course||''}${e.where?' · '+e.where:''}`;
  const h=document.createElement('h3');h.textContent=pick(e.title);v.append(meta,h);
  const bodyText=pick(e.body);
  if(e.ask){const a=document.createElement('div');a.className='ex-problem';paintText(a,pick(e.ask));v.append(a);
   const d=document.createElement('details'),s=document.createElement('summary');s.textContent=t('查看解答','Show solution');d.append(s);paintText(d,bodyText);v.append(d);}
  else if(bodyText.trim()){const b=document.createElement('div');b.className='pal-body-text';paintText(b,bodyText);v.append(b);}
  else{const p=document.createElement('p');p.className='muted';p.textContent=t('这是案例知识点，完整内容见“课程学习”。','This is a case entry; see Course learning for its full content.');v.append(p);}
  if(e.src==='note'){const eb=document.createElement('button');eb.type='button';eb.dataset.edit=e.key;eb.textContent=t('编辑这条笔记','Edit this note');v.append(eb);}
  const fb=finBlock(e.key);if(fb)v.append(fb);
  v.append(mineBlock(e.key,[...both(e.body),...both(e.ask||[])]),backBlock(e.key,e.titles));
 }
 function targetLibs(){const st=KnowledgeManager.state(),list=st.libraries.map(l=>[l.id,window.LibraryUI?.name(l.id)||l.name]);
  return st.libraries.some(l=>l.kind==='personal')?list:[['__mine__',t('我的笔记（个人，保存时自动创建）','My notes (personal; created on save)')],...list];}
 function viewNew(title){
  const v=$('palView');v.textContent='';const st=KnowledgeManager.state();let lib=(st.libraries.find(l=>l.kind==='personal')||{}).id||'__mine__';
  v.innerHTML=`<h3>${t('新建笔记','New note')}</h3><form id="palNew" class="pal-form"><div class="pal-tpl" role="group" aria-label="${t('模板','Templates')}"><span class="muted">${t('模板：','Template: ')}</span>${TEMPLATES.map(x=>`<button type="button" class="wl" data-tpl="${x.id}">${esc(t(x.zh,x.en))}</button>`).join('')}</div><p class="pal-q muted" id="palQuestion" hidden></p><label>${t('标题','Title')}<input id="palNewTitle" maxlength="200" required></label><label>${t('内容（可用 [[标题]] 链接其他卡片，公式用 \\(x\\)）','Content (link cards with [[title]]; formulas as \\(x\\))')}<textarea id="palNewBody" rows="6" maxlength="20000" required></textarea></label><div class="pal-two"><label>${t('分类','Category')}<input id="palNewCat" maxlength="200" list="palCats"></label><label>${t('保存到','Save to')}<select id="palNewLib"></select></label></div><datalist id="palCats">${TEMPLATES.map(x=>`<option value="${esc(x.cat)}">`).join('')}</datalist><p class="muted" id="palNewMsg" role="status"></p><div><button type="submit" class="primary">${t('保存 Ctrl+Enter','Save Ctrl+Enter')}</button></div></form>`;
  $('palNewTitle').value=title;$('palNewCat').value='随手记';$('palNewLib').replaceChildren(...targetLibs().map(([id,n])=>new Option(n,id)));$('palNewLib').value=lib;
  if(pendingTpl){const p=pendingTpl;pendingTpl=null;applyTemplate(p.id,p.question);}
 }
 function applyTemplate(id,question){
  const tp=TEMPLATES.find(x=>x.id===id);if(!tp)return;const i=lang==='en'?1:0;
  const ti=tp.title(),title=Array.isArray(ti)?ti[i]:ti,body=tp.body()[i];
  const titleEl=$('palNewTitle'),bodyEl=$('palNewBody');
  if(title&&(!titleEl.value.trim()||TEMPLATES.some(x=>{const y=x.title();return Array.isArray(y)&&y.includes(titleEl.value.trim());})))titleEl.value=title;
  if(id==='blank'){bodyEl.value='';}
  else if(id==='daily'&&question){bodyEl.value=t('今天的问题：','Today’s question: ')+question+'\n'+t('我的回答：','My answer: ')+'\n\n'+body;}
  else bodyEl.value=body;
  $('palNewCat').value=tp.cat;const q=$('palQuestion');q.hidden=!(id==='daily'&&question);if(!q.hidden)q.textContent=question;
  (id==='blank'?titleEl:bodyEl).focus();if(id!=='blank')bodyEl.setSelectionRange(bodyEl.value.length,bodyEl.value.length);
 }
 function saveNew(){
  const title=$('palNewTitle').value.trim(),body=$('palNewBody').value.trim(),libId=$('palNewLib').value,cat=($('palNewCat').value.trim()||'随手记').slice(0,200),msg=$('palNewMsg');
  if(!title||!body){msg.textContent=t('标题和内容都要填。','Title and content are both required.');return;}
  const now=new Date().toISOString(),id='note_'+crypto.randomUUID();
  try{
   KnowledgeManager.apply(data=>{let l=data.libraries.find(x=>x.id===libId);
    if(!l&&libId==='__mine__'){l=data.libraries.find(x=>x.kind==='personal')||data.libraries.find(x=>x.name.trim()==='我的笔记');
     if(!l){l=KnowledgeStore.library({id:'kb_'+crypto.randomUUID(),name:'我的笔记',nameEn:'My notes',kind:'personal',createdAt:now,updatedAt:now});data.libraries.push(l);}}
    if(!l)l=data.libraries[0];
    if(data.items.length>=1000)throw Error('limit');
    data.items.push(KnowledgeStore.note({id,title,body,course:l.name,category:cat,tags:[],source:'',sourcePage:'',titleEn:'',bodyEn:'',contentType:'note',relatedIds:[],libraryId:l.id,createdAt:now,updatedAt:now}));return data;});
  }catch{msg.textContent=t('保存失败：请先导出备份，并检查存储空间。','Could not save: export a backup and check storage space.');msg.classList.add('error');return;}
  idx=build();$('palQ').value=title;results=search(title);sel=Math.max(0,results.findIndex(e=>e.key===id));
  results.push(newItem(title));paintList();view();window.TodayUI?.fill?.();
 }
 function run(q,key,asNew){
  idx=build();results=search(q);const t_=q.trim();
  if(t_||asNew)results.push(newItem(t_));
  sel=0;if(key){const i=results.findIndex(e=>e.key===key);if(i>=0)sel=i;else{const e=byKey.get(key);if(e){results.unshift(e);}}}
  if(asNew)sel=results.length-1;
  paintList();view();
 }
 function select(i){if(!results.length)return;sel=(i+results.length)%results.length;paintList();view();$('pal-'+sel)?.scrollIntoView({block:'nearest'});$('palQ').setAttribute('aria-activedescendant','pal-'+sel);}
 function open(q='',key=null,asNew=false,tpl=null,question=null){
  load();pendingTpl=tpl?{id:tpl,question}:null;labels();if(!dlg.open)dlg.showModal();$('palQ').value=q;run(q,key,asNew);
  if(!asNew){$('palQ').focus();$('palQ').select();}else{$('palNewBody')?.focus();}
 }
 let timer=0;
 $('palQ').addEventListener('input',()=>{clearTimeout(timer);timer=setTimeout(()=>run($('palQ').value),90);});
 $('palQ').addEventListener('keydown',e=>{
  if(e.isComposing)return;
  if(e.key==='Escape'){e.preventDefault();dlg.close();}
  else if(e.key==='ArrowDown'){e.preventDefault();select(sel+1);}
  else if(e.key==='ArrowUp'){e.preventDefault();select(sel-1);}
  else if(e.key==='Enter'){e.preventDefault();const t0=results[sel];if(!t0)return;(t0.isNew?$('palNewBody'):$('palView').querySelector('.mine textarea'))?.focus();}
 });
 dlg.addEventListener('click',e=>{
  const li=e.target.closest('#palList li[data-i]');if(li){select(+li.dataset.i);return;}
  if(e.target.id==='palClose'){dlg.close();return;}
  const tb=e.target.closest('[data-tpl]');if(tb){applyTemplate(tb.dataset.tpl,tb.dataset.tpl==='daily'?pick(dailyQuestion()):null);return;}
  const ed=e.target.closest('[data-edit]');
  if(ed){const n=idx.find(x=>x.key===ed.dataset.edit)?.note;if(n){dlg.close();try{CourseNav.go(n.libraryId,'knowledge');}catch{}KnowledgeManager.openForm(n);}}
  if(e.target===dlg){const r=dlg.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dlg.close();}
 });
 dlg.addEventListener('submit',e=>{if(e.target.id==='palNew'){e.preventDefault();saveNew();}});
 dlg.addEventListener('keydown',e=>{if(e.key==='Enter'&&(e.ctrlKey||e.metaKey)&&$('palNew')){e.preventDefault();saveNew();}});

 // Links from anywhere (reader, palette, review): wiki links and "open" buttons.
 document.addEventListener('click',e=>{
  const w=e.target.closest('button[data-wl]'),o=e.target.closest('button[data-open]');if(!w&&!o)return;
  e.preventDefault();idx=build();
  const reader=$('reader');if(reader?.open)reader.close();
  if(w){const target=resolve(w.dataset.wl);if(target)open(pick(target.title),target.key);else open(w.dataset.wl,null,true);}
  else{const target=byKey.get(o.dataset.open);if(target)open(pick(target.title),target.key);else open('',null);}
 });
 document.addEventListener('keydown',e=>{
  if((e.ctrlKey||e.metaKey)&&!e.altKey&&e.key.toLowerCase()==='k'){e.preventDefault();dlg.open?dlg.close():open();}
 });

 // ---- Reader (focus reading dialog) integration.
 let lastCard=null;
 $('cards').addEventListener('click',e=>{lastCard=e.target.closest('article');},true);
 const rc=$('readerContent');
 function keyOf(title){const c=lastCard;
  if(c&&c.querySelector('summary')?.textContent===title){if(c.dataset.noteId)return c.dataset.noteId;if(c.dataset.courseCard)return 'cat:'+c.dataset.courseCard;}
  return 'demo:'+title;}
 function decorateReader(){
  idx=build();const title=$('readerTitle').textContent,key=keyOf(title),e=byKey.get(key);
  linkifyTree(rc);
  let sec=$('readerMine');if(!sec){sec=document.createElement('div');sec.id='readerMine';rc.after(sec);}
  const titles=e?e.titles:[title.toLowerCase()];
  const fb=finBlock(key);
  sec.replaceChildren(...(fb?[fb]:[]),mineBlock(key,[rc.textContent]),backBlock(key,titles));
 }
 if(rc)new MutationObserver(decorateReader).observe(rc,{childList:true});

 // ---- Public helpers.
 function reviewMine(key){
  const w=document.createElement('div');w.className='review-mine';const block=mineBlock(key,[],{compact:true});
  if(getMine(key)){w.append(block);}else{const d=document.createElement('details'),s=document.createElement('summary');s.textContent=t('写下我的理解','Write my understanding');d.append(s,block);w.append(d);}
  return w;
 }
 // Wiki-link edges for the knowledge graph (user-written links only, never inferred).
 function extraEdges(map){
  idx=build();const byT=new Map();
  for(const n of map.values()){for(const x of both(n.title))if(!byT.has(x.toLowerCase()))byT.set(x.toLowerCase(),n);}
  for(const n of map.values()){
   const keys=[n.personal?n.id:'cat:'+n.id],txt=[...both(n.body),getMine(keys[0])].join('\n');
   for(const name of linksIn(txt)){const tgt=byT.get(name.toLowerCase());if(tgt&&tgt.id!==n.id&&!n.related.includes(tgt.id))n.related.push(tgt.id);}
  }
 }
 const link=document.createElement('button');link.id='paletteLink';link.type='button';
 function paintLink(){link.textContent=t('搜索 · 记一笔','Search · Capture')+' ';const k=document.createElement('kbd');k.textContent='Ctrl+K';link.append(k);}
 (document.getElementById('homeLink')||document.getElementById('libraryTree')).after(link);link.onclick=()=>open();
 const fl=document.createElement('button');fl.id='financeLink';fl.type='button';link.after(fl);
 function paintFin(){fl.textContent=t('金融应用地图','Finance map');}
 fl.onclick=()=>{open(lang==='en'?'Finance:':'金融应用：',null);};
 paintLink();paintFin();const previousRender=render;render=()=>{previousRender();paintLink();paintFin();};
 window.addEventListener('storage',e=>{if(e.key===KEY)load();});
 setTimeout(()=>window.TodayUI?.fill?.(),0);
 return {open,entries:()=>Object.entries(mine.notes).map(([k,v])=>[k,v[1]]),title:key=>{idx=build();const e=byKey.get(key);return e?pick(e.title):key.replace(/^[a-z]+:/,'');},finFor:key=>{idx=build();return finBlock(key);},dailyQuestion:()=>pick(dailyQuestion()),stats,reviewMine,extraEdges,paint:paintText,get:getMine,keys:()=>Object.keys(mine.notes),raw:()=>localStorage.getItem(KEY),linksIn};
})();
