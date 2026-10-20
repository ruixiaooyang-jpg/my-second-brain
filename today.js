/* Home "Today" panel: due reviews first, then examples. Presentation only; reads counts, writes nothing. */
window.TodayUI=(()=>{
 const $=id=>document.getElementById(id);
 function fill(){
  const slot=$('todaySlot');if(!slot||!window.ReviewUI)return;
  const c=ReviewUI.counts('all'),todo=c.due+c.fresh,ex=window.ExamplesUI?.count?.()||0;
  slot.innerHTML=`<section class="today" aria-labelledby="todayTitle"><div class="today-main"><h2 id="todayTitle">${t('今天','Today')}</h2>${todo>0?`<p class="today-count"><strong>${todo}</strong> ${t('张卡待复习','cards to review')}</p><p class="muted">${t(`${c.due} 张到期，${c.fresh} 张新卡`,`${c.due} due, ${c.fresh} new`)}</p><button type="button" class="primary" data-today="review">${t('开始复习','Start review')}</button>`:`<p class="today-count">${c.total?t('今天的复习完成了','Today’s review is done'):t('还没有可复习的卡片','No cards to review yet')}</p><p class="muted">${c.total?t('明天再来，或者做几道例题。','Come back tomorrow, or try some worked examples.'):t('先在课程里载入笔记包。','Load a note pack in a course first.')}</p>`}</div>${ex?`<div class="today-side"><button type="button" data-today="examples"><strong>${t('做例题','Worked examples')}</strong><small>${t(`${ex} 题 · 先做题，再看解法`,`${ex} examples · try first, then check`)}</small></button></div>`:''}<div class="today-capture"><p class="today-q"><strong>${t('每天一问','Question of the day')}</strong> ${window.MyBrain?MyBrain.dailyQuestion():''}</p><div class="today-q-actions"><button type="button" class="primary" data-today="daily">${t('写下来','Write it down')}</button><button type="button" data-today="capture">${t('用模板记一笔','Note from a template')}</button><button type="button" data-today="weekly">${t('本周回顾','This week')}</button><span class="muted">${t(`最近 7 天记了 ${window.MyBrain?MyBrain.stats().week:0} 条`,`${window.MyBrain?MyBrain.stats().week:0} entries in the last 7 days`)}</span></div></div></section>`;
 }
 document.addEventListener('click',e=>{const a=e.target.closest('[data-today]')?.dataset.today;if(a==='review')ReviewUI.open('all');else if(a==='examples')ExamplesUI?.open();else if(a==='capture')MyBrain?.open('',null,true,'blank');else if(a==='weekly')Weekly?.open();else if(a==='daily')MyBrain?.open('',null,true,'daily',MyBrain.dailyQuestion());});
 $('reviewDialog')?.addEventListener('close',fill);
 // The home view rebuilds its own markup when it is shown again, which empties the slot.
 $('homeLink')?.addEventListener('click',()=>setTimeout(fill,0));
 const previousRender=render;render=()=>{previousRender();fill();};fill();
 return {fill};
})();
