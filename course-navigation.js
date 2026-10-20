/* Course routes are presentation state, separate from persistent note data.
   Add real course modules here; never inherit ETF5248 tools for other courses. */
window.CourseNav=(()=>{
 const $=id=>document.getElementById(id),esc=v=>String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const PREF='my-second-brain.course-navigation.v1',BACK='my-second-brain.backup.before-course-navigation';
 let prefs;try{prefs=JSON.parse(localStorage.getItem(PREF)||'{}');}catch{prefs={};}
 if(!prefs||typeof prefs!=='object'||Array.isArray(prefs))prefs={};
 const expanded=new Set(Array.isArray(prefs.expanded)?prefs.expanded:['course','personal','project']);
 // Course branches start collapsed and open one at a time, so the sidebar stays short.
 for(const k of [...expanded])if(/^(kb_|template_|legacy_)/.test(k))expanded.delete(k);
 let route={libraryId:'all',view:'knowledge'};
 const modules=new Map();
 // Stable library IDs preserve module identity after a rename. Other courses
 // receive only knowledge/PDF routes until dedicated content is registered.
 modules.set('kb_etf5248',[
  {id:'graph',label:['图形实验','Graph laboratory'],sectionId:'graph'},
  {id:'example',label:['应用例题','Application example'],sectionId:'example'},
  {id:'quiz',label:['自测练习','Self-test'],sectionId:'quiz'}
 ]);
 function savePrefs(){try{localStorage.setItem(PREF,JSON.stringify({expanded:[...expanded],etf5500Used:!!prefs.etf5500Used,bex5260Used:!!prefs.bex5260Used}));}catch{/* Preferences are optional; never block knowledge access. */}}
 function libraries(){return KnowledgeManager.state().libraries;}
 function courseModules(l){const list=l?.kind==='course'?(modules.get(l.id)||[]):[];return l&&document.getElementById('knowledgeGraph')&&!list.some(m=>m.id==='knowledgeGraph')?[...list,{id:'knowledgeGraph',label:['知识图谱','Knowledge Graph'],sectionId:'knowledgeGraph'}]:list;}
 function backup(){const raw=KnowledgeStore.rawCurrent();if(raw!==null&&localStorage.getItem(BACK)===null){localStorage.setItem(BACK,raw);if(localStorage.getItem(BACK)!==raw)throw Error('backup');}}
 function ensure(id){
  const code=id==='template_ETX5500'?'ETX5500':id==='template_BEX5260'?'BEX5260':'';if(!code)return id;
  const found=libraries().find(l=>l.name.trim().toUpperCase()===code);if(found)return found.id;
  backup();let created;
  KnowledgeManager.apply(data=>{const present=data.libraries.find(l=>l.name.trim().toUpperCase()===code);if(present){created=present.id;return data;}created='kb_'+crypto.randomUUID();const now=new Date().toISOString();data.libraries.push({id:created,name:code,nameEn:code,kind:'course',createdAt:now,updatedAt:now});return data;});
  if(code==='ETX5500')prefs.etf5500Used=true;else prefs.bex5260Used=true;expanded.add(created);savePrefs();return created;
 }
 function applyView(){
  const lib=libraries().find(l=>l.id===route.libraryId);
  const valid=route.view==='knowledge'||route.view==='pdf'||courseModules(lib).some(m=>m.id===route.view);
  if(!valid||route.libraryId!=='all'&&!lib){route={libraryId:'all',view:'knowledge'};PDFWorkspace.close();}
  document.body.classList.add('course-navigation');
  for(const id of ['knowledge','graph','example','quiz','roadmap','knowledgeGraph'])if($(id))$(id).hidden=route.view!==id;
  for(const list of modules.values())for(const m of list){const el=$(m.sectionId);if(el)el.hidden=!(route.view===m.id&&courseModules(lib).some(v=>v.id===m.id&&v.sectionId===m.sectionId));}
  const hero=document.querySelector('main .hero');if(hero)hero.hidden=route.view!=='knowledge';
  if($('notice'))$('notice').hidden=route.view!=='knowledge';
 }
 // ETF5500 was an early spelling of the unit code. Rename once, keeping the library id, after a dedicated snapshot.
 function renameLegacy(){
  try{
   const libs=libraries(),old=libs.find(l=>l.name.trim().toUpperCase()==='ETF5500');
   if(!old||libs.some(l=>l.name.trim().toUpperCase()==='ETX5500')||KnowledgeManager.blocked())return;
   const RB='my-second-brain.backup.before-etx5500-rename',raw=KnowledgeStore.rawCurrent();
   if(raw!==null&&localStorage.getItem(RB)===null){localStorage.setItem(RB,raw);if(localStorage.getItem(RB)!==raw)return;}
   KnowledgeManager.apply(d=>{const l=d.libraries.find(v=>v.id===old.id);if(l){l.name='ETX5500';l.nameEn='ETX5500';l.updatedAt=new Date().toISOString();}d.items.forEach(n=>{if(n.libraryId===old.id&&n.course.trim().toUpperCase()==='ETF5500')n.course='ETX5500';});return d;});
  }catch{/* Leave the old name untouched if anything fails. */}
 }
 function refresh(){
  renameLegacy();
  const libs=libraries(),found5500=libs.some(l=>l.name.trim().toUpperCase()==='ETX5500');
  const found5260=libs.some(l=>l.name.trim().toUpperCase()==='BEX5260');
  if(found5500&&!prefs.etf5500Used){prefs.etf5500Used=true;savePrefs();}
  if(found5260&&!prefs.bex5260Used){prefs.bex5260Used=true;savePrefs();}
  const label=l=>lang==='en'&&l.nameEn?l.nameEn:l.name;
  const rows=libs.slice();if(!found5500&&!prefs.etf5500Used)rows.push({id:'template_ETX5500',name:'ETX5500',nameEn:'ETX5500',kind:'course'});if(!found5260&&!prefs.bex5260Used)rows.push({id:'template_BEX5260',name:'BEX5260',nameEn:'BEX5260',kind:'course'});
  const button=(id,view,zh,en)=>`<button type="button" data-course="${esc(id)}" data-view="${view}" ${route.libraryId===id&&route.view===view?'aria-current="page"':''}>${esc(t(zh,en))}</button>`;
  $('libraryTree').innerHTML=button('all','knowledge','全局搜索','Global search')+[['course','我的课程','My courses'],['personal','个人笔记','Personal notes'],['project','项目知识','Project knowledge']].map(([kind,zh,en])=>`<details data-course-group="${kind}" ${expanded.has(kind)?'open':''}><summary>${t(zh,en)}</summary>${rows.filter(l=>l.kind===kind).map(l=>`<details class="course-branch" data-course-branch="${esc(l.id)}" ${expanded.has(l.id)?'open':''}><summary>${esc(label(l))}</summary>${window.CourseOrganization?.navigation(l,button) || (`${button(l.id,'knowledge',kind==='course'?'课程知识点':'知识列表',kind==='course'?'Course knowledge':'Knowledge list')}${button(l.id,'pdf',kind==='course'?'PDF 课程资料':'PDF 资料',kind==='course'?'Course PDFs':'PDF materials')}${courseModules(l).map(m=>button(l.id,m.id,...m.label)).join('')}`)}</details>`).join('')||`<p class="nav-empty">${t('可在知识库管理中新建','Create a base in the workspace')}</p>`}</details>`).join('');
  $('libraryTree').setAttribute('aria-label',t('课程与知识库导航','Course and knowledge navigation'));
  applyView();window.KnowledgeGraph?.syncRoute();
 }
 function showKnowledge(id){route={libraryId:id,view:'knowledge'};PDFWorkspace.close();applyView();}
 function go(id,view){
  try{id=ensure(id);const lib=libraries().find(l=>l.id===id);if(id!=='all'&&!lib)return;if(!['knowledge','pdf'].includes(view)&&!courseModules(lib).some(m=>m.id===view))return;
   for(const k of [...expanded])if(/^(kb_|template_|legacy_)/.test(k))expanded.delete(k);expanded.add(lib?.kind||'course');expanded.add(id);
   if(view==='knowledge'){LibraryUI.setScope(id);if(id==='all')$('search').focus();}
   else {route={libraryId:id,view};if(view==='pdf')PDFWorkspace.open(id);else PDFWorkspace.close();refresh();const sectionId=view==='pdf'?'pdfWorkspace':courseModules(lib).find(m=>m.id===view)?.sectionId;$(sectionId)?.scrollIntoView({behavior:'instant'});}
   savePrefs();
  }catch(e){KnowledgeManager.notify('无法打开课程：请先导出备份并检查存储空间。原知识不改动。','Cannot open course: export a backup and check storage. Existing notes unchanged.',true);}
 }
 $('libraryTree').addEventListener('click',e=>{const b=e.target.closest('[data-course][data-view]');if(b)go(b.dataset.course,b.dataset.view);});
 $('libraryTree').addEventListener('toggle',e=>{const key=e.target.dataset.courseGroup||e.target.dataset.courseBranch;if(key&&e.target.isConnected){e.target.open?expanded.add(key):expanded.delete(key);savePrefs();}},true);
 // Legacy hash links are resolved to the owning course, not the last viewed course.
 document.addEventListener('click',e=>{const a=e.target.closest('a[href="#graph"],a[href="#example"],a[href="#quiz"]');if(a){e.preventDefault();const id=libraries().find(l=>courseModules(l).some(m=>m.id===a.hash.slice(1)))?.id;if(id)go(id,a.hash.slice(1));}});
 const previous=render;render=()=>{previous();refresh();};
 const api={refresh,showKnowledge,go,current:()=>({...route}),pdfScopeChanged:id=>{route={libraryId:id,view:'pdf'};refresh();},register:(libraryId,entries)=>{if(!Array.isArray(entries)||entries.some(m=>!m.id||['knowledge','pdf'].includes(m.id)||!Array.isArray(m.label)||!$(m.sectionId)))throw Error('Invalid course module');modules.set(libraryId,entries);refresh();}};
 refresh();return api;
})();
