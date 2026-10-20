/* Weekly review: what you reviewed, wrote and learned in the last 7 days, a 12-week activity map, and the cards you forget most.
   Reads existing data; the only thing it writes is a per-day review counter in its own localStorage key. */
window.Weekly=(()=>{
 'use strict';
 const KEY='my-second-brain.activity.v1',$=id=>document.getElementById(id),DAY=864e5;
 const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const dkey=d=>{d=new Date(d);return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;};
 let log={v:1,days:{}};
 function load(){let v=null;try{v=JSON.parse(localStorage.getItem(KEY)||'null');}catch{v=null;}log=v&&v.v===1&&v.days&&typeof v.days==='object'?v:{v:1,days:{}};}
 load();
 // g: 0 forgot, 1 hard, 2 good. Called by the review module for every graded card.
 function logReview(g){
  load();const k=dkey(Date.now()),d=log.days[k]||[0,0];d[0]++;if(g===0)d[1]++;log.days[k]=d;
  try{localStorage.setItem(KEY,JSON.stringify(log));}catch{/* optional */}
 }
 const learnedIds=()=>{try{const v=JSON.parse(localStorage.getItem('my-second-brain.learned.v1')||'null');return v&&v.ids?v.ids:{};}catch{return {};}};

 // Per-day activity from every source we have timestamps for.
 function activity(){
  load();const m=new Map(),add=(iso,k,n=1)=>{const t=Date.parse(iso);if(!Number.isFinite(t))return;const key=dkey(t),o=m.get(key)||{r:0,f:0,n:0,u:0,l:0};o[k]+=n;m.set(key,o);};
  for(const [k,v] of Object.entries(log.days)){const o=m.get(k)||{r:0,f:0,n:0,u:0,l:0};o.r+=v[0];o.f+=v[1];m.set(k,o);}
  try{for(const it of KnowledgeManager.state().items)if(it.id.startsWith('note_'))add(it.createdAt,'n');}catch{/* optional */}
  for(const [,iso] of (window.MyBrain?.entries?.()||[]))add(iso,'u');
  for(const iso of Object.values(learnedIds()))add(iso,'l');
  return m;
 }
 const score=o=>o?o.r+3*o.n+2*o.u+o.l:0;
 const level=s=>s<=0?0:s<3?1:s<8?2:s<15?3:4;
 function sum(m,from,to){const o={r:0,f:0,n:0,u:0,l:0};for(let t=from;t<to;t+=DAY){const x=m.get(dkey(t));if(x)for(const k in o)o[k]+=x[k];}return o;}
 function streak(m){let n=0,t=Date.now();if(!score(m.get(dkey(t))))t-=DAY;while(score(m.get(dkey(t)))){n++;t-=DAY;}return n;}

 const dlg=document.createElement('dialog');dlg.id='weeklyDialog';dlg.className='review-dialog weekly-dialog';dlg.setAttribute('aria-labelledby','weeklyTitle');
 dlg.innerHTML='<div class="review-bar"><h2 id="weeklyTitle"></h2><button type="button" id="weeklyClose"></button></div><div id="weeklyBody" class="weekly-body"></div>';
 document.body.append(dlg);
 const delta=(a,b)=>a===b?'':` <span class="muted">(${a>b?'+':''}${a-b} ${t('较上周','vs last week')})</span>`;
 function heat(m){
  const weeks=12,today=new Date();today.setHours(0,0,0,0);
  const dow=(today.getDay()+6)%7;                       // Monday = 0
  const start=today.getTime()-dow*DAY-(weeks-1)*7*DAY;
  let cells='';
  for(let i=0;i<weeks*7;i++){const t0=start+i*DAY,future=t0>today.getTime(),k=dkey(t0),s=score(m.get(k));
   cells+=`<i class="hm l${future?'f':level(s)}" title="${k}: ${future?'':s?t(`${s} 分活动`,`activity ${s}`):t('没有记录','nothing recorded')}"></i>`;}
  return `<div class="heat" role="img" aria-label="${t('近 12 周活动热力图','Activity map for the last 12 weeks')}">${cells}</div><p class="muted heat-legend">${t('少','less')} <i class="hm l0"></i><i class="hm l1"></i><i class="hm l2"></i><i class="hm l3"></i><i class="hm l4"></i> ${t('多','more')} · ${t('复习 1 分，新笔记 3 分，“我的理解” 2 分，已学 1 分','review 1, new note 3, “My understanding” 2, learned 1')}</p>`;
 }
 function paintBody(){
  $('weeklyTitle').textContent=t('每周回顾','Weekly review');$('weeklyClose').textContent=t('关闭 Esc','Close Esc');
  const m=activity(),now=Date.now(),startToday=new Date().setHours(0,0,0,0);
  const cur=sum(m,startToday-6*DAY,startToday+DAY),prev=sum(m,startToday-13*DAY,startToday-6*DAY);
  const rv=window.ReviewUI,st=rv?.state?.()||{cards:{}},titles=new Map((rv?.cards?.()||[]).map(c=>[c.id,c]));
  const mist=(rv?.mistakes?.('all')||[]);
  const counts=rv?.counts?.('all')||{due:0,fresh:0};
  const forgot=Object.entries(st.cards).filter(([id,s])=>s[4]>0&&titles.has(id)).sort((a,b)=>b[1][4]-a[1][4]).slice(0,8);
  const cut=now-7*DAY;let notes=[];
  try{notes=KnowledgeManager.state().items.filter(n=>n.id.startsWith('note_')&&Date.parse(n.createdAt)>=cut).sort((a,b)=>Date.parse(b.createdAt)-Date.parse(a.createdAt)).map(n=>[n.id,n.title]);}catch{/* optional */}
  const mineRecent=(window.MyBrain?.entries?.()||[]).filter(([,iso])=>Date.parse(iso)>=cut).map(([k])=>[k,window.MyBrain.title(k)]);
  const tips=[];
  if(counts.due>0)tips.push(`<li>${t(`有 ${counts.due} 张复习卡已经到期。`,`${counts.due} review cards are due.`)} <button type="button" data-w="review">${t('去复习','Review now')}</button></li>`);
  if(mist.length)tips.push(`<li>${t(`错题本里还有 ${mist.length} 张没掌握（忘过，且之后连续答对不到 3 次）。`,`${mist.length} cards in your mistakes list are not yet mastered (forgotten before, fewer than 3 good answers since).`)} <button type="button" data-w="mistakes">${t('刷错题','Drill mistakes')}</button></li>`);
  if(cur.n+cur.u===0)tips.push(`<li>${t('这周还没有写下自己的话。试试今天的每天一问：','You have not written anything of your own this week. Try today’s question: ')}<em>${esc(window.MyBrain?.dailyQuestion?.()||'')}</em> <button type="button" data-w="daily">${t('写下来','Write it down')}</button></li>`);
  else tips.push(`<li>${t(`这周写了 ${cur.n} 条新笔记，更新了 ${cur.u} 处“我的理解”。`,`This week: ${cur.n} new notes, ${cur.u} “My understanding” updates.`)}</li>`);
  $('weeklyBody').innerHTML=`
   <section><h3>${t('最近 7 天','Last 7 days')}</h3>
    <div class="wk-stats"><div><strong>${cur.r}</strong><span>${t('张卡复习','cards reviewed')}${delta(cur.r,prev.r)}</span></div><div><strong>${cur.f}</strong><span>${t('次忘了','times forgotten')}${delta(cur.f,prev.f)}</span></div><div><strong>${cur.n}</strong><span>${t('条新笔记','new notes')}${delta(cur.n,prev.n)}</span></div><div><strong>${cur.u}</strong><span>${t('处“我的理解”','“My understanding” edits')}${delta(cur.u,prev.u)}</span></div><div><strong>${cur.l}</strong><span>${t('张标为已学','marked learned')}${delta(cur.l,prev.l)}</span></div><div><strong>${streak(m)}</strong><span>${t('天连续有记录','day streak')}</span></div></div>
    <p class="muted">${t('复习次数从你开始使用本功能那天起记录；笔记和“我的理解”按保存时间统计（“我的理解”每条只记最后一次修改）。','Review counts start from the day this feature was first used; notes and “My understanding” are counted by save time (only the last edit of each entry).')}</p></section>
   <section><h3>${t('近 12 周','Last 12 weeks')}</h3>${heat(m)}</section>
   <section><h3>${t('下一步','Next')}</h3><ul class="wk-tips">${tips.join('')}</ul></section>
   <section><h3>${t('最常忘的卡片','Cards you forget most')}</h3>${forgot.length?`<ul class="wk-list">${forgot.map(([id,s])=>`<li><span>${esc(titles.get(id).title[lang==='en'?1:0]||titles.get(id).title[0])}</span><small class="muted">${t(`忘过 ${s[4]} 次`,`forgotten ${s[4]}×`)} · ${s[3]>=3?t('已掌握','mastered'):t('巩固中','still shaky')}</small></li>`).join('')}</ul>`:`<p class="muted">${t('还没有忘过的卡片，或还没开始复习。','Nothing forgotten yet, or you have not started reviewing.')}</p>`}</section>
   <section><h3>${t('这周写下的','Written this week')}</h3>${notes.length||mineRecent.length?`<ul class="wk-list">${[...notes,...mineRecent].slice(0,12).map(([k,ti])=>`<li><button type="button" class="wl" data-open="${esc(k)}">${esc(ti)}</button></li>`).join('')}</ul>`:`<p class="muted">${t('还没有。按 Ctrl+K 记一笔，或在任何卡片的“我的理解”里写一句。','Nothing yet. Press Ctrl+K to capture a note, or write a line in “My understanding” on any card.')}</p>`}</section>`;
 }
 function open(){paintBody();if(!dlg.open)dlg.showModal();}
 dlg.addEventListener('click',e=>{
  if(e.target.id==='weeklyClose'){dlg.close();return;}
  const a=e.target.closest('[data-w]')?.dataset.w;if(!a)return;
  dlg.close();
  if(a==='review')window.ReviewUI?.open('all');
  else if(a==='mistakes')window.ReviewUI?.open('all','mistakes');
  else if(a==='daily')window.MyBrain?.open('',null,true,'daily',window.MyBrain.dailyQuestion());
 });
 const link=document.createElement('button');link.id='weeklyLink';link.type='button';
 ($('financeLink')||$('paletteLink')||$('homeLink')).after(link);link.onclick=open;
 function paint(){link.textContent=t('每周回顾','Weekly review');}
 paint();const previousRender=render;render=()=>{previousRender();paint();};
 return {open,log:logReview,activity,paint};
})();
