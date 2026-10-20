/* "Continue learning" panel on the workspace home: where you stopped, what you have not mastered, what is still to do.
   It only remembers the last place you went (own localStorage key); it never writes knowledge data. */
window.Resume=(()=>{
 'use strict';
 const KEY='my-second-brain.resume.v1',$=id=>document.getElementById(id);
 const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 let last=null;try{const v=JSON.parse(localStorage.getItem(KEY)||'null');if(v&&v.v===1)last=v;}catch{last=null;}
 const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(last));}catch{/* optional */}};
 const VIEW={learn5500:['课程学习','Course learning'],learn5260:['课程学习','Course learning'],lectures:['课程学习','Course learning'],knowledge:['课程知识点','Course knowledge'],knowledgeGraph:['知识图谱','Knowledge graph'],pdf:['PDF 课程资料','Course PDFs'],sources:['原始课件','Source slides'],graph:['图形实验','Graph laboratory'],example:['应用例题','Application example'],quiz:['自测练习','Self-test']};
 const PACKS=[['ETX5500',()=>window.ETX5500Pack],['BEX5260',()=>window.BEX5260Pack]];
 const cardInfo=id=>{for(const [code,get] of PACKS){const c=get()?.cards?.find(x=>x.id===id);if(c)return {code,title:[c.title,c.titleEn||c.title]};}return null;};
 const pickT=a=>a[lang==='en'?1:0]||a[0];

 // Remember the last place visited. Course navigation is wrapped, never replaced.
 function remember(){
  try{const r=CourseNav.current();if(!r||!r.libraryId||r.libraryId==='all'||!VIEW[r.view])return;
   if(last&&last.libraryId===r.libraryId&&last.view===r.view)return;
   last={...(last&&last.libraryId===r.libraryId?last:{}),v:1,libraryId:r.libraryId,view:r.view,ts:Date.now()};save();}catch{/* optional */}
 }
 for(const name of ['go','showKnowledge']){const original=CourseNav[name];CourseNav[name]=(...a)=>{const r=original(...a);remember();return r;};}
 // Remember the last card opened in a course-learning view.
 document.addEventListener('toggle',e=>{
  const d=e.target;if(!d.matches?.('details.c55-card')||!d.open)return;
  const id=d.dataset.id,info=cardInfo(id);if(!info)return;
  try{const r=CourseNav.current();last={v:1,libraryId:r.libraryId,view:r.view,ts:Date.now(),cardId:id};save();}catch{/* optional */}
 },true);

 const libName=id=>{try{return LibraryUI.name(id);}catch{return '';}};
 function data(){
  const rv=window.ReviewUI;if(!rv)return null;
  const mist=rv.mistakes?.('all')||[],st=rv.state?.()||{cards:{}},all=rv.cards?.()||[];
  const exTodo=all.filter(c=>String(c.id).startsWith('ex:')&&!st.cards[c.id]);
  const due=rv.counts?.('all')?.due||0;
  return {mist,exTodo,due};
 }
 function html(){
  const d=data();if(!d)return '';
  const libs=KnowledgeManager.state().libraries,lib=last&&libs.find(l=>l.id===last.libraryId);
  const parts=[];
  if(lib){
   const card=last.cardId&&cardInfo(last.cardId),view=VIEW[last.view]||['','']; 
   parts.push(`<div class="rs-col"><h3>${t('接着上次学','Pick up where you left off')}</h3><p><strong>${esc(libName(lib.id)||lib.name)}</strong> · ${esc(t(view[0],view[1]))}</p>${card?`<p class="muted">${t('上次看到：','Last card: ')}${esc(pickT(card.title))}</p>`:''}<button type="button" class="primary" data-rs="continue">${t('继续','Continue')}</button></div>`);
  }
  if(d.mist.length){
   const top=d.mist.slice(0,3).map(c=>`<li>${esc(pickT(c.title))}</li>`).join('');
   parts.push(`<div class="rs-col"><h3>${t('还没掌握','Not mastered yet')} · ${d.mist.length}</h3><ul>${top}</ul><button type="button" data-rs="mistakes">${t('刷这些题','Drill these')}</button></div>`);
  }
  if(d.exTodo.length||d.due){
   parts.push(`<div class="rs-col"><h3>${t('待完成','To do')}</h3><p>${d.due?t(`${d.due} 张卡到期复习`,`${d.due} cards due`):''}${d.due&&d.exTodo.length?' · ':''}${d.exTodo.length?t(`${d.exTodo.length} 道例题还没做过`,`${d.exTodo.length} examples not tried yet`):''}</p>${d.exTodo.length?`<button type="button" data-rs="examples">${t('做例题','Try examples')}</button>`:''} ${d.due?`<button type="button" data-rs="review">${t('开始复习','Start review')}</button>`:''}</div>`);
  }
  if(!parts.length)return '';
  let lastExp=null;try{lastExp=localStorage.getItem('my-second-brain.lastExport');}catch{/* optional */}
  const safe=`<p class="rs-safe muted">${t('数据只保存在这台电脑的浏览器里，不会上传；换电脑或清理浏览器前，请先导出完整备份。','Your data lives only in this browser and is never uploaded; export a full backup before switching computers or clearing the browser.')} ${lastExp?t('上次备份：','Last backup: ')+esc(lastExp.slice(0,10))+'。':''}<button type="button" data-rs="backup">${t('导出完整备份','Export full backup')}</button></p>`;
  return `<h2 id="rsTitle">${t('继续学习','Continue learning')}</h2>${parts.length?`<div class="rs-grid">${parts.join('')}</div>`:''}${safe}`;
 }
 function paint(){
  const home=$('workspaceHome');if(!home)return;
  const slot=$('todaySlot'),h=html();let box=$('resumePanel');
  if(!h){box?.remove();return;}
  if(!box){box=document.createElement('section');box.id='resumePanel';box.className='resume';box.setAttribute('aria-labelledby','rsTitle');if(slot){if(matchMedia('(max-width:760px)').matches)slot.after(box);else slot.before(box);}else home.append(box);}
  if(box.dataset.sig!==h){box.innerHTML=h;box.dataset.sig=h;}
 }
 document.addEventListener('click',e=>{
  const a=e.target.closest('#resumePanel [data-rs]')?.dataset.rs;if(!a)return;
  if(a==='backup')window.FullBackup?.exportAll?.();
  else if(a==='review')window.ReviewUI?.open('all');
  else if(a==='mistakes')window.ReviewUI?.open('all','mistakes');
  else if(a==='examples')window.ReviewUI?.open('all','examples');
  else if(a==='continue'&&last){
   CourseNav.go(last.libraryId,last.view);
   if(last.cardId){const mod=last.cardId.startsWith('bex5260-')?window.Course5260:window.Course5500;setTimeout(()=>mod?.focus?.(last.cardId),60);}
  }
 });
 const home=$('workspaceHome');if(home)new MutationObserver(()=>{if(!$('resumePanel'))paint();}).observe(home,{childList:true});
 $('reviewDialog')?.addEventListener('close',paint);
 $('homeLink')?.addEventListener('click',()=>setTimeout(paint,0));
 const previousRender=render;render=()=>{previousRender();paint();};paint();
 return {paint,last:()=>last};
})();
