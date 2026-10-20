/* Optional course note packs (ETX5500 full pack, ETF5248 supplements). Nothing is written until the user presses the button; existing cards are never overwritten. */
window.CoursePacks=(()=>{
 const $=id=>document.getElementById(id),BACK='my-second-brain.backup.before-course-packs';
 const defs=[
  {pack:window.ETX5500Pack,code:'ETX5500',match:l=>l.name.trim().toUpperCase()==='ETX5500',
   zh:n=>`${n} 张卡，覆盖 7 个主题：导论、矩阵基础、距离、聚类、MDS、PCA、因子模型。内容为对课件与习题解答的改写，附物理页码；需要时请回到课件核对。`,
   en:n=>`${n} cards across 7 topics: intro, matrix basics, distance, clustering, MDS, PCA, factor models. Paraphrased from your slides and tutorial solutions, with physical page numbers; check the slides when it matters.`},
  {pack:window.BEX5260Pack,code:'BEX5260',match:l=>l.name.trim().toUpperCase()==='BEX5260',
   zh:n=>`${n} 张卡，覆盖 12 个主题：巨趋势总论、气候与碳、行业转型、数字颠覆、数字资产、人口结构、债务与主权债务危机。官方练习题放在“例题”里，不算知识点。内容为对课件的改写，附物理页码；需要时请回到课件核对。`,
   en:n=>`${n} cards across 12 topics: megatrends overview, climate and carbon, sector transition, digital disruption, digital assets, demographics, debt and sovereign debt crises. The official practice questions live under Examples, not as knowledge points. Paraphrased from your slides with physical page numbers; check the slides when it matters.`},
  {pack:window.ETF5248Pack,code:'ETF5248',match:l=>l.id==='kb_etf5248',
   zh:n=>`${n} 张补充卡：覆盖内置知识点没有引用到的讲义页（向量与矩阵记号、单纯形复杂度、整数规划算法分类、lpSolveAPI 工作坊、饮食问题历史）。改写自课件，附物理页码。`,
   en:n=>`${n} supplementary cards for slide pages no built-in entry cites (vector and matrix notation, simplex complexity, IP algorithm families, the lpSolveAPI workshop, diet-problem history). Paraphrased from your slides with physical pages.`}
 ].filter(d=>d.pack&&Array.isArray(d.pack.cards));
 if(!defs.length)return {};
 const box=document.createElement('div');box.id='packBanner';box.className='pack-banner';box.hidden=true;
 $('knowledge').querySelector('.tools').before(box);
 const libOf=d=>KnowledgeManager.state().libraries.find(d.match);
 function missing(d){if(!libOf(d))return d.pack.cards.length;const have=new Set(KnowledgeManager.state().items.map(n=>n.id));return d.pack.cards.filter(c=>!have.has(c.id)).length;}
 function load(d){
  try{
   const raw=KnowledgeStore.rawCurrent();if(raw!==null&&localStorage.getItem(BACK)===null){localStorage.setItem(BACK,raw);if(localStorage.getItem(BACK)!==raw)throw Error('backup');}
   let added=0;
   KnowledgeManager.apply(data=>{
    const l=data.libraries.find(d.match);if(!l)throw Error('library');
    const have=new Set(data.items.map(n=>n.id)),known=new Set([...have,...d.pack.cards.map(c=>c.id)]),now=new Date().toISOString();
    const fresh=d.pack.cards.filter(c=>!have.has(c.id));if(data.items.length+fresh.length>1000)throw Error('limit');
    for(const c of fresh)data.items.push(KnowledgeStore.note({id:c.id,title:c.title,titleEn:c.titleEn,body:c.body,bodyEn:c.bodyEn,course:d.code,category:c.category,tags:c.tags,source:c.source,sourcePage:c.sourcePage,contentType:c.kind,relatedIds:c.related.filter(r=>known.has(r)),libraryId:l.id,createdAt:now,updatedAt:now}));
    added=fresh.length;return data;});
   KnowledgeManager.notify(`已载入 ${added} 张 ${d.code} 课程卡。`,`Loaded ${added} ${d.code} cards.`);
   render();
  }catch(e){KnowledgeManager.notify('无法载入：请先导出备份并检查存储空间（上限 1,000 条 / 4 MB）。现有笔记未改动。','Could not load: export a backup and check storage (limit 1,000 notes / 4 MB). Existing notes are unchanged.',true);}
 }
 let current=null;
 function refresh(){
  const r=window.CourseNav?.current();current=r&&r.view==='knowledge'?defs.find(d=>{const l=libOf(d);return l&&l.id===r.libraryId;}):null;
  box.hidden=!current;if(!current)return;
  const n=missing(current),total=current.pack.cards.length;
  if(n===0){box.hidden=true;return;}
  box.innerHTML=`<p><strong>${t(current.code+' 笔记包','Note pack · '+current.code)}</strong> ${t(`含 ${total} 张卡，改写自课件，附物理页码。已载入的不会重复或覆盖。`,`${total} cards paraphrased from your slides, with physical pages. Cards you already have are never duplicated or overwritten.`)}</p><button type="button" id="loadPack" class="primary">${t(`载入 ${n} 张课程卡`,`Load ${n} cards`)}</button>`;
 }
 box.addEventListener('click',e=>{if(e.target.id==='loadPack'&&current)load(current);});
 for(const name of ['go','showKnowledge']){const original=CourseNav[name];CourseNav[name]=(...a)=>{const r=original(...a);refresh();return r;};}
 const previous=render;render=()=>{previous();refresh();};refresh();
 return {refresh,load,loadCode:code=>{const d=defs.find(v=>v.code===code);if(d)load(d);},missing:code=>{const d=defs.find(v=>v.code===code);return d?missing(d):null;}};
})();
