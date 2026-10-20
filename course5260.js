/* BEX5260 "Course learning": the Megatrends note pack read topic by topic (same layout as ETX5500).
   Reads static pack data only. Learned ticks live in their own localStorage key; no knowledge data is written. */
window.Course5260=(()=>{
 'use strict';
 const pack=window.BEX5260Pack;if(!pack||!Array.isArray(pack.cards))return {};
 const $=id=>document.getElementById(id),KEY='my-second-brain.learned.v1';
 const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const en=()=>lang==='en',pick=(zh,e)=>en()&&e?e:zh;
  const kindZh={concept:'概念',case:'案例',practice:'练习',note:'笔记'},kindEn={concept:'Concept',case:'Case',practice:'Practice',note:'Note'};
 const topics=[];for(const c of pack.cards){let tp=topics.find(x=>x.category===c.category);if(!tp){tp={category:c.category,cards:[]};topics.push(tp);}tp.cards.push(c);}
 topics.forEach((tp,i)=>{const [zh,e]=tp.category.split(' · ');tp.zh=zh;tp.en=e||zh;});
 const byId=new Map(pack.cards.map(c=>[c.id,c]));
 let learned={v:1,ids:{}};try{const v=JSON.parse(localStorage.getItem(KEY)||'null');if(v&&v.v===1&&v.ids&&typeof v.ids==='object')learned=v;}catch{/* optional */}
 function saveLearned(){try{localStorage.setItem(KEY,JSON.stringify(learned));window.FolderBackup?.schedule?.();}catch{/* progress only */}}
 
 const root=document.createElement('section');root.id='course5260';root.hidden=true;document.querySelector('main').insertBefore(root,$('footer'));
 let cur=0,query='';
 const done=tp=>tp.cards.filter(c=>learned.ids[c.id]).length;
 const missing=()=>window.CoursePacks?.missing?.('BEX5260')||0;
 function matches(c){if(!query)return true;const q=query.toLowerCase();return [c.title,c.titleEn,c.body,c.bodyEn,...(c.tags||[])].join('\n').toLowerCase().includes(q);}
 function refresh(){
  const tp=topics[cur],all=pack.cards.length,doneAll=Object.keys(learned.ids).filter(id=>byId.has(id)).length,miss=missing();
  const list=tp.cards.filter(matches);
  root.innerHTML=`<div class="c55-head"><h1>BEX5260 · ${t('课程学习','Course learning')}</h1><p class="muted">${t(`${topics.length} 个主题 · ${all} 张卡  · 已学 ${doneAll}/${all}`,`${topics.length} topics · ${all} cards · learned ${doneAll}/${all}`)}</p>
   ${miss?`<p class="c55-load"><span>${t('把这些卡载入知识库后，才能参加复习并出现在知识图谱里。','Load the cards into your knowledge base to include them in review and the graph.')}</span> <button type="button" class="primary" data-c55="load">${t(`载入 ${miss} 张卡`,`Load ${miss} cards`)}</button></p>`:''}</div>
  <div class="c55-layout"><nav class="c55-tabs" aria-label="${t('主题','Topics')}">${topics.map((x,i)=>`<button type="button" data-c55-topic="${i}" ${i===cur?'aria-current="true"':''}><strong>${esc(pick(x.zh,x.en))}</strong><small>${done(x)}/${x.cards.length} ${t('已学','learned')}</small><i style="--p:${Math.round(100*done(x)/x.cards.length)}%"></i></button>`).join('')}</nav>
  <div class="c55-main"><div class="c55-tools"><label>${t('搜索本主题','Search this topic')}<input id="c52Search" type="search" value="${esc(query)}"></label><button type="button" data-c55="expand">${t('全部展开','Expand all')}</button><button type="button" data-c55="collapse">${t('全部收起','Collapse all')}</button></div>
  <h2>${esc(pick(tp.zh,tp.en))}</h2><p class="muted">${t('按课件顺序阅读（官方练习题在“例题”里，卡片下方会链接到相关题目）。读完一张就勾选“已学”；点“我的理解”写下自己的话。','Read in slide order (the official practice questions live under Examples; cards link to the related ones). Tick “learned” as you go; use “My understanding” to write in your own words.')}</p>
  <div class="c55-cards">${list.map(c=>`<details class="c55-card" data-id="${esc(c.id)}"><summary><span class="c55-title">${esc(pick(c.title,c.titleEn))}</span><small>${t(kindZh[c.kind]||'笔记',kindEn[c.kind]||'Note')}${c.sourcePage?' · '+esc(c.sourcePage):''}</small></summary><div class="c55-body"></div></details>`).join('')||`<p class="muted">${t('没有匹配的卡。','No matching cards.')}</p>`}</div>
  </div></div>`;
 }
 function fillCard(d){
  const body=d.querySelector('.c55-body');if(body.dataset.ready)return;body.dataset.ready='1';
  const c=byId.get(d.dataset.id);if(!c)return;
  const text=document.createElement('div');text.className='c55-text';window.MyBrain?.paint?(MyBrain.paint(text,pick(c.body,c.bodyEn))):(text.textContent=pick(c.body,c.bodyEn));
  const tick=document.createElement('label');tick.className='c55-tick';tick.innerHTML=`<input type="checkbox" data-learned="${esc(c.id)}" ${learned.ids[c.id]?'checked':''}> ${t('已学','Learned')}`;
  body.append(text);
  if(c.tags?.length){const p=document.createElement('p');p.className='muted c55-tags';p.textContent=c.tags.filter(x=>x!=='BEX5260').join(' · ');body.append(p);}
  const rel=(c.related||[]).map(id=>byId.get(id)).filter(Boolean);
  if(rel.length){const p=document.createElement('p');p.className='c55-rel';p.append(Object.assign(document.createElement('span'),{className:'muted',textContent:t('相关：','Related: ')}));for(const r of rel){const b=document.createElement('button');b.type='button';b.className='wl';b.dataset.open=r.id;b.textContent=pick(r.title,r.titleEn);p.append(b);}body.append(p);}
  const exs=(window.CourseExamples?.examples||[]).filter(e=>(e.concepts||[]).includes(c.id));
  if(exs.length){const p=document.createElement('p');p.className='c55-rel';p.append(Object.assign(document.createElement('span'),{className:'muted',textContent:t('相关例题：','Related questions: ')}));for(const e of exs){const b=document.createElement('button');b.type='button';b.className='wl';b.dataset.open='ex:'+e.id;b.textContent=pick(e.title[0],e.title[1]);p.append(b);}body.append(p);}
  const fin=window.MyBrain?.finFor?.(c.id);if(fin)body.append(fin);
  if(window.MyBrain?.reviewMine)body.append(MyBrain.reviewMine(c.id));
  body.append(tick);
 }
 root.addEventListener('toggle',e=>{if(e.target.matches?.('details.c55-card')&&e.target.open)fillCard(e.target);},true);
 root.addEventListener('click',e=>{
  const tb=e.target.closest('[data-c55-topic]');if(tb){cur=+tb.dataset.c55Topic;query='';refresh();root.scrollIntoView?.({block:'start'});return;}
  const a=e.target.closest('[data-c55]')?.dataset.c55;
  if(a==='load'){window.CoursePacks?.loadCode?.('BEX5260');refresh();}
  else if(a==='expand'){root.querySelectorAll('details.c55-card').forEach(d=>d.open=true);}
  else if(a==='collapse'){root.querySelectorAll('details.c55-card').forEach(d=>d.open=false);}
 });
 root.addEventListener('change',e=>{const id=e.target.dataset?.learned;if(!id)return;if(e.target.checked)learned.ids[id]=new Date().toISOString();else delete learned.ids[id];saveLearned();
  const tp=topics[cur],b=root.querySelector(`[data-c55-topic="${cur}"]`);if(b){b.querySelector('small').textContent=`${done(tp)}/${tp.cards.length} ${t('已学','learned')}`;b.querySelector('i').style.setProperty('--p',Math.round(100*done(tp)/tp.cards.length)+'%');}
  const head=root.querySelector('.c55-head .muted');if(head){const n=Object.keys(learned.ids).filter(x=>byId.has(x)).length;head.textContent=t(`${topics.length} 个主题 · ${pack.cards.length} 张卡 · 已学 ${n}/${pack.cards.length}`,`${topics.length} topics · ${pack.cards.length} cards · learned ${n}/${pack.cards.length}`);}
 });
 let timer=0;root.addEventListener('input',e=>{if(e.target.id!=='c52Search')return;query=e.target.value.trim();clearTimeout(timer);timer=setTimeout(()=>{refresh();const s=$('c52Search');s.focus();s.setSelectionRange(s.value.length,s.value.length);if(query)root.querySelectorAll('details.c55-card').forEach(d=>d.open=true);},200);});

 // Register the view for whichever library is the BEX5260 course (its id can differ between users).
 let registered=null;
 function ensureRegistered(){
  const lib=KnowledgeManager.state().libraries.find(l=>l.kind==='course'&&l.name.trim().toUpperCase()==='BEX5260');
  if(!lib||lib.id===registered)return;registered=lib.id;
  try{CourseNav.register(lib.id,[{id:'learn5260',label:['课程学习','Course learning'],sectionId:'course5260'}]);}catch{registered=null;}
 }
 for(const name of ['go','showKnowledge']){const original=CourseNav[name];CourseNav[name]=(...a)=>{ensureRegistered();const r=original(...a);if(CourseNav.current().view==='learn5260')refresh();return r;};}
 const previousRender=render;render=()=>{previousRender();ensureRegistered();if(!root.hidden)refresh();};
 ensureRegistered();refresh();CourseNav.refresh();
 function focus(id){const i=topics.findIndex(x=>x.cards.some(c=>c.id===id));if(i<0)return false;cur=i;query='';refresh();const d=root.querySelector(`details.c55-card[data-id="${id}"]`);if(d){d.open=true;d.scrollIntoView?.({block:'center'});}return true;}
 return {refresh,focus,open:()=>{ensureRegistered();if(registered)CourseNav.go(registered,'learn5260');}};
})();
