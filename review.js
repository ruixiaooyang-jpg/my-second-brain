/* Spaced-repetition review. Progress lives in its own localStorage key; knowledge data and its schema are never touched. */
window.ReviewUI=(()=>{
 const $=id=>document.getElementById(id),KEY='my-second-brain.review.v1',NEW_PER_DAY=15,DAY=864e5;
 const today=()=>new Date().toISOString().slice(0,10);
 let st;function load(){try{const v=JSON.parse(localStorage.getItem(KEY)||'null');st=v&&v.v===1&&v.cards&&typeof v.cards==='object'?v:null;}catch{st=null;}if(!st)st={v:1,cards:{},newDay:today(),newCount:0};if(st.newDay!==today()){st.newDay=today();st.newCount=0;}}
 let writable=true;
 function save(){try{localStorage.setItem(KEY,JSON.stringify(st));api.onChange?.();}catch{writable=false;}}
 load();
 const kindZh={concept:'概念',case:'案例',practice:'练习',note:'笔记',example:'例题'},kindEn={concept:'Concept',case:'Case',practice:'Practice',note:'Note',example:'Example'};
 function splitQA(text,re){const m=re.exec(text);if(!m||m.index<8)return null;const q=text.slice(0,m.index).replace(/^(问题|题目|Question)[：:]\s*/,'').trim(),a=text.slice(m.index+m[0].length).trim();return q&&a?[q,a]:null;}
 let typeFilter='all';
 const isMistake=id=>{const s=st.cards[id];return !!s&&s[4]>0&&s[3]<3;};
 function mistakeList(scope){return deck_(scope).filter(c=>isMistake(c.id)).sort((a,b)=>st.cards[b.id][4]-st.cards[a.id][4]);}
 function deck(scope){const d=deck_(scope);if(typeFilter==='mistakes')return d.filter(c=>isMistake(c.id));return typeFilter==='all'?d:d.filter(c=>(c.kind==='example')===(typeFilter==='examples'));}
 function deck_(scope){
  const data=KnowledgeManager.state(),out=[],pick=(a,i)=>a[i]||a[0]||'';
  for(const n of data.items){if(scope!=='all'&&n.libraryId!==scope)continue;
   const card={id:n.id,lib:n.libraryId,title:[n.title,n.titleEn||n.title],body:[n.body,n.bodyEn||n.body],kind:n.contentType||'note',where:[n.sourcePage||'',n.sourcePage||'']};
   // Practice cards store "question … answer: …" in one body: show the question first and hide the answer.
   if(card.kind==='practice'){const z=splitQA(n.body,/(答案要点|答案|解答)[：:]/),e=splitQA(n.bodyEn||n.body,/(Answer sketch|Answer|Solution)[:：]/);if(z&&e){card.ask=[z[0],e[0]];card.body=[z[1],e[1]];}}
   out.push(card);}
  if((scope==='all'||scope===data.builtinLibraryId)&&window.ETF5248Catalog){for(const e of ETF5248Catalog.entries){
   // Cases are narrative blocks without a stand-alone body, and practices without an answer have nothing to reveal: both are skipped.
   if(e.answer&&e.body)out.push({id:'cat:'+e.id,lib:data.builtinLibraryId,title:e.title,ask:e.body,body:e.answer,kind:e.kind,where:['','']});
   else if(e.kind==='concept'&&e.body){const f=(e.formulas||[]).map(x=>`$$${x}$$`).join('\n');out.push({id:'cat:'+e.id,lib:data.builtinLibraryId,title:e.title,body:e.body.map(b=>(f?f+'\n':'')+b),kind:e.kind,where:['','']});}}}
  // Worked examples: problem on the front, solution and answer on the back.
  const exLib=c=>c==='ETF5248'?data.builtinLibraryId:(data.libraries.find(l=>l.name.trim().toUpperCase()===c.trim().toUpperCase())||{}).id||'';
  for(const e of (window.CourseExamples?.examples||[])){const lib=exLib(e.course);if(scope!=='all'&&scope!==lib)continue;
   out.push({id:'ex:'+e.id,lib,course:e.course,title:e.title,ask:e.problem,body:e.solution.map((x,i)=>x+'\n'+(lang==='en'?'Answer: ':'答案：')+e.answer[i]),kind:'example',where:[(e.pages&&e.pages.length)?'p. '+e.pages.join(', '):'',''],ex:e});}
  return out;
 }
 function counts(scope,raw){const now=Date.now(),d=raw?deck_(scope):deck(scope);if(!raw&&typeFilter==='mistakes')return {due:d.length,fresh:0,freshAll:0,total:d.length};let due=0,fresh=0;for(const c of d){const s=st.cards[c.id];if(!s)fresh++;else if(s[0]<=now)due++;}return {due,fresh:Math.min(fresh,Math.max(0,NEW_PER_DAY-st.newCount)),freshAll:fresh,total:d.length};}
 function queue(scope){
  if(typeFilter==='mistakes')return mistakeList(scope);
  const now=Date.now(),d=deck(scope),due=d.filter(c=>st.cards[c.id]&&st.cards[c.id][0]<=now).sort((a,b)=>st.cards[a.id][0]-st.cards[b.id][0]);
  const fresh=d.filter(c=>!st.cards[c.id]).slice(0,Math.max(0,NEW_PER_DAY-st.newCount));return [...due,...fresh];
 }
 // grade: 0 forgot, 1 hard, 2 good. Compact SM-2 variant: [due, intervalDays, ease, reps, lapses]
 function grade(id,g){
  const s=st.cards[id]||[0,0,2.3,0,0];let [,iv,ease,reps,lapses]=s;
  if(!st.cards[id]){st.newCount++;}
  if(g===0){reps=0;iv=0;ease=Math.max(1.3,ease-0.2);lapses++;st.cards[id]=[Date.now()+10*60*1000,iv,ease,reps,lapses];}
  else{if(g===1){iv=Math.max(1,Math.round((iv||1)*1.2));ease=Math.max(1.3,ease-0.05);}else{iv=reps===0?1:reps===1?3:Math.round(iv*ease);ease=Math.min(3,ease+0.05);reps++;}
   st.cards[id]=[Date.now()+iv*DAY,iv,ease,reps,lapses];}
  try{window.Weekly?.log(g);}catch{/* activity log is optional */}
  save();
 }
 const dlg=document.createElement('dialog');dlg.id='reviewDialog';dlg.className='review-dialog';dlg.setAttribute('aria-labelledby','reviewTitle');
 dlg.innerHTML='<div class="review-bar"><h2 id="reviewTitle"></h2><label><span id="reviewScopeLabel"></span><select id="reviewScope"></select></label><label><span id="reviewTypeLabel"></span><select id="reviewType"></select></label><span id="reviewCounts" class="muted" aria-live="polite"></span><button type="button" id="reviewClose"></button></div><div id="reviewBody" class="review-body"></div>';
 document.body.append(dlg);
 let q=[],idx=0,shown=false,scope='all';
 const i18=(a)=>a[lang==='en'?1:0]||a[0];
 function el(sel){return dlg.querySelector(sel);}
 function fillScope(){const data=KnowledgeManager.state();el('#reviewScope').innerHTML=[['all',t('全部知识库','All knowledge bases')],...data.libraries.map(l=>[l.id,LibraryUI.name(l.id)])].map(([v,n])=>`<option value="${v.replace(/"/g,'')}">${n.replace(/[<>&]/g,'')}</option>`).join('');el('#reviewScope').value=scope;}
 function header(){el('#reviewTitle').textContent=t('复习','Review');el('#reviewScopeLabel').textContent=t('范围','Scope');el('#reviewTypeLabel').textContent=t('类型','Type');el('#reviewType').innerHTML=[['all',t('全部','All')],['cards',t('知识点与练习','Knowledge cards')],['examples',t('例题','Worked examples')],['mistakes',t('错题本','Mistakes')+' ('+mistakeList(scope).length+')']].map(([v,n])=>`<option value="${v}">${n}</option>`).join('');el('#reviewType').value=typeFilter;el('#reviewClose').textContent=t('关闭 · Esc','Close · Esc');const c=counts(scope);el('#reviewCounts').textContent=t(`到期 ${c.due} · 新卡 ${c.fresh}（共 ${c.total}）`,`Due ${c.due} · New ${c.fresh} (of ${c.total})`);}
 function paint(el_,text){el_.textContent='';for(const para of String(text).split(/\n{1,}/)){if(!para.trim())continue;const p=document.createElement('p');p.textContent=para;el_.append(p);}window.BrainUI?.userMath(el_);}
 function paintCard(){
  header();const box=el('#reviewBody');box.textContent='';
  if(idx>=q.length){const c=counts(scope);box.innerHTML=`<div class="review-done"><h3>${t('今天的复习完成了','Review finished')}</h3><p>${c.total===0?t('这个范围还没有知识卡。','There are no cards in this scope yet.'):t(`还有 ${c.due} 张到期卡、${c.freshAll} 张未学的新卡（每天新卡上限 ${NEW_PER_DAY}）。`,`${c.due} due and ${c.freshAll} unseen cards remain (daily new-card limit ${NEW_PER_DAY}).`)}</p>${c.due>0||c.fresh>0?`<button type="button" id="reviewAgain">${t('继续','Continue')}</button>`:''}</div>`;return;}
  const c=q[idx];const card=document.createElement('article');card.className='review-card';
  const meta=document.createElement('p');meta.className='review-meta muted';meta.textContent=`${t(kindZh[c.kind]||'笔记',kindEn[c.kind]||'Note')} · ${c.course||LibraryUI.name(c.lib)}${c.where[0]?' · '+c.where[0]:''} · ${idx+1}/${q.length}`;
  const h=document.createElement('h3');h.textContent=i18(c.title);card.append(meta,h);if(c.ask){const a=document.createElement('p');a.className='review-ask';a.textContent=i18(c.ask);card.append(a);window.BrainUI?.userMath(a);}
  const ans=document.createElement('div');ans.className='review-answer';ans.hidden=!shown;if(shown){paint(ans,i18(c.body));const lt=c.ex&&window.ExamplesUI?.conceptTitles?.(c.ex);if(lt&&lt.length){const lk=document.createElement('p');lk.className='review-links muted';lk.textContent=t('相关知识点：','Related knowledge: ')+lt.join(' · ');ans.append(lk);}}card.append(ans);if(shown&&window.MyBrain?.reviewMine)ans.append(MyBrain.reviewMine(c.id));box.append(card);
  const bar=document.createElement('div');bar.className='review-actions';
  bar.innerHTML=shown?`<button type="button" data-g="0">${t('忘了','Forgot')} <kbd>1</kbd></button><button type="button" data-g="1">${t('模糊','Hard')} <kbd>2</kbd></button><button type="button" data-g="2" class="primary">${t('记住了','Good')} <kbd>3</kbd></button>`:`<button type="button" id="reviewShow" class="primary">${t('显示答案','Show answer')} <kbd>Space</kbd></button>`;
  box.append(bar);(shown?bar.querySelector('[data-g="2"]'):bar.querySelector('#reviewShow')).focus({preventScroll:true});
  if(!writable){const w=document.createElement('p');w.className='error';w.textContent=t('无法保存复习进度（存储不可用）。','Cannot save review progress (storage unavailable).');box.append(w);}
 }
 function start(){load();q=queue(scope);idx=0;shown=false;paintCard();badge();}
 function answer(g){const c=q[idx];if(!c)return;grade(c.id,g);if(g===0)q.push(c);idx++;shown=false;paintCard();badge();}
 dlg.addEventListener('click',e=>{
  if(e.target.id==='reviewClose')dlg.close();else if(e.target.id==='reviewShow'){shown=true;paintCard();}
  else if(e.target.dataset.g!==undefined)answer(+e.target.dataset.g);else if(e.target.id==='reviewAgain')start();
 });
 dlg.addEventListener('change',e=>{if(e.target.id==='reviewScope'){scope=e.target.value;start();}else if(e.target.id==='reviewType'){typeFilter=e.target.value;start();}});
 dlg.addEventListener('keydown',e=>{if(e.target.tagName==='SELECT'||e.target.tagName==='TEXTAREA'||e.metaKey||e.ctrlKey||e.altKey)return;
  if(!shown&&(e.key===' '||e.key==='Enter')&&q[idx]&&e.target.id!=='reviewClose'&&!e.target.dataset.g){e.preventDefault();shown=true;paintCard();}
  else if(shown&&['1','2','3'].includes(e.key)){e.preventDefault();answer(+e.key-1);}});
 dlg.addEventListener('close',()=>{document.getElementById('reviewLink')?.focus();});
 const link=document.createElement('button');link.id='reviewLink';link.type='button';(document.getElementById('homeLink')||document.getElementById('libraryTree')).after(link);
 function badge(){const c=counts('all',true);link.textContent=t('复习','Review')+(c.due+c.fresh?` · ${c.due+c.fresh}`:'');link.setAttribute('aria-label',t(`复习：${c.due} 张到期，${c.fresh} 张新卡`,`Review: ${c.due} due, ${c.fresh} new`));}
 function open(s,type){load();typeFilter=type||'all';scope=s&&!/^template_/.test(s)?s:'all';fillScope();if(!KnowledgeManager.state().libraries.some(l=>l.id===scope))scope='all';el('#reviewScope').value=scope;if(!dlg.open)dlg.showModal();start();}
 link.onclick=()=>open('all');
 const previousRender=render;render=()=>{previousRender();badge();};
 badge();
 const api={open,counts:s=>counts(s,true),badge,mistakes:s=>mistakeList(s||'all'),cards:()=>deck_('all'),state:()=>st,onChange:null,raw:()=>localStorage.getItem(KEY)};
 return api;
})();
