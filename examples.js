/* Example bank: every worked example from the course slides and tutorial solutions, searchable and filterable.
   Static data (course-data/examples-data.js); nothing here writes to notes. Examples can also be reviewed (see review.js). */
window.ExamplesUI=(()=>{
 const $=id=>document.getElementById(id),data=window.CourseExamples;
 if(!data||!Array.isArray(data.examples))return {};
 const i18=a=>a[lang==='en'?1:0]||a[0],all=data.examples;
 const dlg=document.createElement('dialog');dlg.id='examplesDialog';dlg.className='review-dialog examples-dialog';dlg.setAttribute('aria-labelledby','exTitle');
 dlg.innerHTML='<div class="review-bar"><h2 id="exTitle"></h2><label><span id="exCourseL"></span><select id="exCourse"></select></label><label><span id="exTopicL"></span><select id="exTopic"></select></label><input id="exSearch" type="search"><span id="exCount" class="muted" aria-live="polite"></span><button type="button" id="exReview"></button><button type="button" id="exClose"></button></div><div class="examples-layout"><ul id="exList" class="ex-list"></ul><article id="exView" class="ex-view" tabindex="-1"></article></div>';
 document.body.append(dlg);
 let course='all',topic='all',q='',sel=null,solved=new Set();
 const catalog=()=>new Map((window.ETF5248Catalog?.entries||[]).map(c=>[c.id,c])),pack=()=>new Map([...(window.ETX5500Pack?.cards||[]),...(window.BEX5260Pack?.cards||[])].map(c=>[c.id,c]));
 const topicName=e=>i18(e.topicName||[e.topic,e.topic]);

 // Knowledge points (static course data) that an example links to.
 function concept(id){
  const c=catalog().get(id);if(c){const f=(c.formulas||[]).map(x=>`$$${x}$$`).join('\n');return {id,title:i18(c.title),body:c.body?(f?f+'\n':'')+i18(c.body):t('这是一个案例知识点，完整内容见“课程学习”。','This is a case entry; see Course learning for its full content.'),lib:'kb_etf5248'};}
  const p=pack().get(id);if(p)return {id,title:lang==='en'&&p.titleEn?p.titleEn:p.title,body:lang==='en'&&p.bodyEn?p.bodyEn:p.body,lib:null,code:id.startsWith('bex5260-')?'BEX5260':'ETX5500'};
  return null;
 }
 const examplesOf=id=>all.filter(e=>(e.concepts||[]).includes(id));
 function conceptTitles(ex){return (ex.concepts||[]).map(concept).filter(Boolean).map(c=>c.title);}
 let openConcept=null;
 function openInLibrary(c){
  const libs=KnowledgeManager.state().libraries,lib=c.lib?libs.find(l=>l.id===c.lib):libs.find(l=>l.name.trim().toUpperCase()===(c.code||'ETX5500'));
  if(!lib){KnowledgeManager.notify(`请先在 ${c.code||'ETX5500'} → 课程知识点中载入课程卡。`,`Load the course cards first (${c.code||'ETX5500'} → Course knowledge).`,true);return;}
  dlg.close();CourseNav.go(lib.id,'knowledge');const s=$('search');if(s){s.value=c.title;s.dispatchEvent(new Event('input',{bubbles:true}));}
 }
 function filtered(){const k=q.trim().toLowerCase();return all.filter(e=>(course==='all'||e.course===course)&&(topic==='all'||e.topic===topic)&&(!k||(e.title.join(' ')+e.problem.join(' ')+(e.tags||[]).join(' ')).toLowerCase().includes(k)));}
 function fillFilters(){
  const cs=[...new Set(all.map(e=>e.course))];$('exCourse').innerHTML=`<option value="all">${t('全部课程','All courses')}</option>`+cs.map(c=>`<option>${c}</option>`).join('');$('exCourse').value=course;
  const ts=[...new Map(all.filter(e=>course==='all'||e.course===course).map(e=>[e.topic,e])).values()];
  $('exTopic').innerHTML=`<option value="all">${t('全部主题','All topics')}</option>`+ts.map(e=>`<option value="${e.topic.replace(/"/g,'')}">${topicName(e).replace(/[<>&]/g,'')}</option>`).join('');if(!ts.some(e=>e.topic===topic))topic='all';$('exTopic').value=topic;
 }
 function text(el,s){el.textContent='';for(const p of String(s).split(/\n+/)){if(!p.trim())continue;const n=document.createElement('p');n.textContent=p;el.append(n);}window.BrainUI?.userMath(el);}
 function paint(){
  $('exTitle').textContent=t('例题','Worked examples');$('exCourseL').textContent=t('课程','Course');$('exTopicL').textContent=t('主题','Topic');$('exSearch').placeholder=t('搜索题目…','Search examples…');$('exClose').textContent=t('关闭 · Esc','Close · Esc');$('exReview').textContent=t('复习这些例题','Review examples');
  const list=filtered();$('exCount').textContent=t(`${list.length} / ${all.length} 题`,`${list.length} / ${all.length} examples`);
  if(!list.some(e=>e.id===sel))sel=list[0]?.id||null;
  $('exList').innerHTML='';for(const e of list){const li=document.createElement('li'),b=document.createElement('button');b.type='button';b.dataset.id=e.id;b.setAttribute('aria-current',e.id===sel?'true':'false');
   b.innerHTML=`<small></small><span></span>`;b.querySelector('small').textContent=`${e.course} · ${topicName(e)}${solved.has(e.id)?' ✓':''}`;b.querySelector('span').textContent=i18(e.title);li.append(b);$('exList').append(li);}
  view();
 }
 let revealed=false;
 function view(){
  const e=all.find(x=>x.id===sel),v=$('exView');v.textContent='';
  if(!e){v.textContent=t('没有匹配的例题。','No matching examples.');return;}
  const meta=document.createElement('p');meta.className='review-meta muted';meta.textContent=`${e.course} · ${topicName(e)} · ${(e.pages&&e.pages.length)?t('课件 p.','slides p.')+e.pages.join(', '):t('习题解答','tutorial solutions')}${e.source?' · '+e.source:''}`;
  const h=document.createElement('h3');h.textContent=i18(e.title);const pr=document.createElement('div');pr.className='ex-problem';text(pr,i18(e.problem));
  v.append(meta,h,pr);
  const btn=document.createElement('button');btn.type='button';btn.id='exReveal';btn.className='primary';btn.textContent=revealed?t('隐藏解答','Hide solution'):t('显示解答','Show solution');v.append(btn);
  const cs=(e.concepts||[]).map(concept).filter(Boolean);
  if(cs.length){const box=document.createElement('div');box.className='ex-links';const lh=document.createElement('h4');lh.textContent=t('相关知识点','Related knowledge');box.append(lh);
   for(const c of cs){const b=document.createElement('button');b.type='button';b.dataset.concept=c.id;b.setAttribute('aria-pressed',openConcept===c.id?'true':'false');b.textContent=c.title;box.append(b);}
   v.append(box);
   const oc=openConcept&&cs.find(c=>c.id===openConcept);
   if(oc){const pv=document.createElement('section');pv.className='ex-concept';const ph=document.createElement('h4');ph.textContent=oc.title;const pb=document.createElement('div');text(pb,oc.body);pv.append(ph,pb);
    const act=document.createElement('div');act.className='review-actions';const ob=document.createElement('button');ob.type='button';ob.dataset.openLib=oc.id;ob.textContent=t('在知识库中搜索','Search in knowledge library');act.append(ob);pv.append(act);
    const others=examplesOf(oc.id).filter(x=>x.id!==e.id);if(others.length){const oh=document.createElement('h5');oh.textContent=t('同一知识点的其他例题','Other examples of this knowledge point');pv.append(oh);const ul=document.createElement('ul');ul.className='ex-others';for(const x of others){const li=document.createElement('li'),xb=document.createElement('button');xb.type='button';xb.dataset.id=x.id;xb.textContent=i18(x.title);li.append(xb);ul.append(li);}pv.append(ul);}
    v.append(pv);}}
  if(revealed){const s=document.createElement('div');s.className='ex-solution';const sh=document.createElement('h4');sh.textContent=t('解法','Solution');const sb=document.createElement('div');text(sb,i18(e.solution));const ah=document.createElement('h4');ah.textContent=t('答案','Answer');const ab=document.createElement('div');text(ab,i18(e.answer));s.append(sh,sb,ah,ab);v.append(s);}
 }
 dlg.addEventListener('click',e=>{
  const b=e.target.closest('button');if(!b)return;
  if(b.id==='exClose')dlg.close();else if(b.id==='exReview'){dlg.close();window.ReviewUI?.open(course==='ETF5248'?'kb_etf5248':'all','examples');}else if(b.id==='exReveal'){revealed=!revealed;if(revealed)solved.add(sel);view();}
  else if(b.dataset.concept){openConcept=openConcept===b.dataset.concept?null:b.dataset.concept;view();}
  else if(b.dataset.openLib){const c=concept(b.dataset.openLib);if(c)openInLibrary(c);}
  else if(b.dataset.id){sel=b.dataset.id;revealed=false;openConcept=null;paint();$('exView').focus({preventScroll:true});}
 });
 dlg.addEventListener('change',e=>{if(e.target.id==='exCourse'){course=e.target.value;topic='all';fillFilters();revealed=false;paint();}else if(e.target.id==='exTopic'){topic=e.target.value;revealed=false;paint();}});
 dlg.addEventListener('input',e=>{if(e.target.id==='exSearch'){q=e.target.value;revealed=false;paint();}});
 dlg.addEventListener('close',()=>document.getElementById('examplesLink')?.focus());
 const link=document.createElement('button');link.id='examplesLink';link.type='button';(document.getElementById('reviewLink')||document.getElementById('homeLink')).after(link);
 function open(c){openConcept=null;course=c&&all.some(e=>e.course===c)?c:'all';topic='all';q='';$('exSearch').value='';revealed=false;fillFilters();if(!dlg.open)dlg.showModal();paint();}
 link.onclick=()=>open('all');
 const previousRender=render;render=()=>{previousRender();link.textContent=t('例题','Examples')+` · ${all.length}`;};link.textContent=t('例题','Examples')+` · ${all.length}`;
 return {open,count:()=>all.length,conceptTitles};
})();
