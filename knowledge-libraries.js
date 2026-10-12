/* Multiple knowledge bases; presentation and forms reuse the existing manager. */
window.LibraryUI=(()=>{
  const $=id=>document.getElementById(id),esc=v=>String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const store=KnowledgeStore,manager=KnowledgeManager;
  let scope='all',editingLibrary=null,editingSnapshot=null,baseMessage=['',''];
  const expanded=new Set(['root','course','personal','project','kb_etf5248']);
  const kindLabels=()=>({course:t('我的课程','My courses'),personal:t('个人笔记','Personal notes'),project:t('项目知识','Project knowledge')});
  const state=()=>manager.state(),name=id=>{const l=state().libraries.find(v=>v.id===id);return l?(lang==='en'&&l.nameEn?l.nameEn:l.name):id;};
  const tree=document.createElement('div');tree.id='libraryTree';$('nav').before(tree);
  const controls=document.createElement('div');controls.id='libraryControls';controls.className='card';
  controls.innerHTML=`<div class="base-toolbar"><div><h3 id="baseHeading"></h3><p id="baseDescription" class="muted"></p></div><button id="createLibrary" class="primary" type="button"></button></div>
    <div class="base-actions"><label><span id="scopeLabel"></span><select id="libraryScope"></select></label><button id="renameLibrary" type="button"></button><button id="deleteLibrary" class="danger" type="button"></button><button id="legacyBackup" type="button"></button></div>
    <p id="legacyChangeWarning" class="error"></p>
    <p id="baseStatus" role="status" aria-live="polite"></p>
    <form id="libraryForm" hidden><h3 id="libraryFormTitle"></h3><div class="form-grid"><label><span id="libNameLabel"></span><input id="libName" required maxlength="200"></label><label><span id="libNameEnLabel"></span><input id="libNameEn" maxlength="200"></label><label><span id="libKindLabel"></span><select id="libKind"></select></label></div><div class="note-actions"><button id="saveLibrary" type="submit" class="primary"></button><button id="cancelLibrary" type="button"></button></div></form>
    <form id="deleteLibraryForm" hidden><p id="deleteLibraryHint"></p><label><span id="transferLabel"></span><select id="transferLibrary"></select></label><div class="note-actions"><button id="confirmDeleteLibrary" type="submit" class="danger"></button><button id="cancelDeleteLibrary" type="button"></button></div></form>`;
  document.querySelector('.manager').before(controls);
  const filters=document.createElement('div');filters.className='extra-filters';filters.innerHTML='<label><span id="courseFilterLabel"></span><select id="courseFilter"></select></label><label><span id="tagFilterLabel"></span><select id="tagFilter"></select></label><button id="clearFilters" type="button"></button>';
  document.querySelector('#knowledge .tools').after(filters);
  const texts={baseHeading:['知识库管理','Manage knowledge bases'],baseDescription:['每一条知识都有归属。按课程、个人主题或项目整理，随时切换与搜索。','Every note has a home. Organize by course, personal topic or project.'],createLibrary:['＋ 新建知识库','＋ New knowledge base'],scopeLabel:['搜索范围','Search scope'],renameLibrary:['重命名 / 设置','Rename / settings'],deleteLibrary:['删除知识库','Delete knowledge base'],legacyBackup:['导出升级前快照','Export pre-upgrade snapshot'],libNameLabel:['知识库名称 *','Knowledge base name *'],libNameEnLabel:['英文名称（可选）','English name (optional)'],libKindLabel:['分组','Group'],saveLibrary:['保存知识库','Save knowledge base'],cancelLibrary:['取消','Cancel'],transferLabel:['将全部知识转移到','Move all knowledge to'],confirmDeleteLibrary:['转移并删除知识库','Move and delete base'],cancelDeleteLibrary:['取消','Cancel'],courseFilterLabel:['课程筛选','Course filter'],tagFilterLabel:['标签筛选','Tag filter'],clearFilters:['清除筛选','Clear filters']};
  const fill=(el,options,value=el.value)=>{el.replaceChildren(...options.map(([v,n])=>new Option(n,v)));el.value=options.some(([v])=>v===value)?value:options[0]?.[0]??'';};
  function notify(zh,en,bad=false){baseMessage=[zh,en];$('baseStatus').textContent=t(zh,en);$('baseStatus').classList.toggle('error',bad);}
  function matches(n){return (scope==='all'||n.libraryId===scope)&&(!$('courseFilter').value||n.course===$('courseFilter').value)&&(!$('tagFilter').value||n.tags.includes($('tagFilter').value));}
  function sync(){
    $('baseStatus').textContent=t(...baseMessage);
    const data=state();if(scope!=='all'&&!data.libraries.some(l=>l.id===scope))scope='all';
    Object.entries(texts).forEach(([k,v])=>$(k).textContent=t(...v));
    $('legacyChangeWarning').textContent=store.legacyChanged()?t('检测到旧版页面又修改了数据。请从旧页面导出最新 JSON 并在这里合并，然后关闭旧页面；新版不会覆盖这些旧记录。','An older page changed legacy data. Export its latest JSON and merge it here, then close that page. New data does not overwrite legacy records.'):'';
    const options=data.libraries.map(l=>[l.id,name(l.id)]);
    fill($('libraryScope'),[['all',t('全部知识库 · 全局搜索','All knowledge bases · Global search')],...options],scope);
    if($('pdfTarget'))fill($('pdfTarget'),options);
    if($('tutorScope'))fill($('tutorScope'),[['all',t('跨全部知识库','Across all bases')],...options]);
    fill($('note-libraryId'),options,$('note-libraryId').value||selected());
    fill($('libKind'),Object.entries(kindLabels()));
    fill($('courseFilter'),[['',t('全部课程','All courses')],...[...new Set(['ETF5248',...data.items.map(n=>n.course)])].sort().map(c=>[c,c])]);
    fill($('tagFilter'),[['',t('全部标签','All tags')],...[...new Set(data.items.filter(n=>scope==='all'||n.libraryId===scope).flatMap(n=>n.tags))].sort().map(v=>[v,v])]);
    $('renameLibrary').disabled=scope==='all'||manager.blocked();$('deleteLibrary').disabled=scope==='all'||manager.blocked();$('createLibrary').disabled=manager.blocked();
    $('sourceTag').textContent=t('本机保存','Stored locally');
    $('knowledgeTitle').textContent=scope==='all'?t('我的知识库','My Knowledge Base'):name(scope);
    $('search').placeholder=scope==='all'?t('全局搜索：标题、正文、课程、标签、来源…','Search all: titles, content, courses, tags, sources…'):t(`在 ${name(scope)} 中搜索…`,`Search within ${name(scope)}…`);
    $('search').setAttribute('aria-label',$('search').placeholder);
    $('libraryFormTitle').textContent=editingLibrary?t('修改知识库','Edit knowledge base'):t('创建知识库','Create knowledge base');
    const op=k=>expanded.has(k)?' open':'';
    const groups=Object.entries(kindLabels()).map(([kind,label])=>`<details data-tree="${kind}"${op(kind)}><summary>${esc(label)}</summary>${data.libraries.filter(l=>l.kind===kind).map(l=>{
      const notes=data.items.filter(n=>n.libraryId===l.id),builtins=data.builtinLibraryId===l.id;
      return `<details class="tree-base" data-tree="${esc(l.id)}"${op(l.id)}><summary>${esc(name(l.id))}<small>${notes.length+(builtins?topics.length:0)}</small></summary><button type="button" data-scope="${esc(l.id)}" ${scope===l.id?'aria-current="page"':''}>${t('查看全部','View all')}</button>${builtins?topics.map((n,i)=>`<button type="button" data-topic="builtin-${i}" data-base="${esc(l.id)}">${esc(pair(n.title))}</button>`).join(''):''}${notes.map(n=>`<button type="button" data-topic="${esc(n.id)}" data-base="${esc(l.id)}">${esc(lang==='en'&&n.titleEn?n.titleEn:n.title)}</button>`).join('')}</details>`;
    }).join('')}</details>`).join('');
    tree.innerHTML=`<details data-tree="root"${op('root')}><summary>${t('我的知识库','My Knowledge Base')}</summary><button type="button" data-scope="all" ${scope==='all'?'aria-current="page"':''}>${t('全部知识 · 全局搜索','All knowledge · Search')}</button>${groups}</details>`;
    $('nav').setAttribute('aria-label',t('ETF5248 学习工具','ETF5248 learning tools'));
    window.CourseNav?.refresh();
  }
  function setScope(value){scope=value;window.CourseNav?.showKnowledge(value);$('courseFilter').value='';$('tagFilter').value='';$('category').value='all';$('search').value='';$('deleteLibraryForm').hidden=true;manager.renderKnowledge();$('knowledge').scrollIntoView({behavior:'instant'});}
  function selected(){return scope==='all'?state().builtinLibraryId:scope;}
  function openForm(lib){editingLibrary=lib?.id||null;editingSnapshot=lib?JSON.stringify(lib):null;$('libName').value=lib?.name||'';$('libNameEn').value=lib?.nameEn||'';$('libKind').value=lib?.kind||'course';$('libraryForm').hidden=false;sync();$('libName').focus();}
  $('createLibrary').onclick=()=>openForm();$('renameLibrary').onclick=()=>openForm(state().libraries.find(l=>l.id===scope));
  $('cancelLibrary').onclick=()=>{$('libraryForm').hidden=true;};
  $('libraryForm').onsubmit=e=>{e.preventDefault();const title=$('libName').value.trim(),en=$('libNameEn').value.trim(),kind=$('libKind').value;try{
    if(!title)throw Error('name');let nextId=editingLibrary||'kb_'+crypto.randomUUID();
    manager.apply(data=>{if(data.libraries.some(l=>l.id!==nextId&&l.name.toLowerCase()===title.toLowerCase()))throw Error('duplicate');
      const old=data.libraries.find(l=>l.id===editingLibrary);if(editingLibrary&&JSON.stringify(old)!==editingSnapshot)throw Error('conflict');const now=new Date().toISOString(),lib={id:nextId,name:title,nameEn:en,kind,createdAt:old?.createdAt||now,updatedAt:now};
      data.libraries=editingLibrary?data.libraries.map(l=>l.id===editingLibrary?lib:l):[...data.libraries,lib];return data;});
    $('libraryForm').hidden=true;expanded.add(nextId);setScope(nextId);notify('知识库已保存。','Knowledge base saved.');
   }catch(err){notify('保存失败：名称不能为空或重复；也可能已在其他页面修改、达到容量上限或存储受限。表单已保留。','Save failed: empty/duplicate name, concurrent change, capacity limit or storage restriction. Form retained.',true);}};
  let deletionSnapshot=null,deletionId=null;
  $('deleteLibrary').onclick=()=>{const d=state();if(d.libraries.length===1){notify('至少保留一个知识库。请先新建接收内容的知识库。','Keep at least one base. Create a destination first.',true);return;}
    deletionId=scope;deletionSnapshot=JSON.stringify(d);const count=d.items.filter(n=>n.libraryId===scope).length+(d.builtinLibraryId===scope?topics.length:0);
    $('deleteLibraryHint').textContent=t(`“${name(scope)}”包含 ${count} 条知识。删除知识库不会删除笔记：请先指定接收位置。`,`“${name(scope)}” contains ${count} entries. Notes will be preserved: choose their destination.`);
    fill($('transferLibrary'),d.libraries.filter(l=>l.id!==scope).map(l=>[l.id,name(l.id)]));$('deleteLibraryForm').hidden=false;};
  $('cancelDeleteLibrary').onclick=()=>{$('deleteLibraryForm').hidden=true;};
  $('deleteLibraryForm').onsubmit=e=>{e.preventDefault();const dest=$('transferLibrary').value;if(!confirm(t('确认转移全部知识并删除这个知识库？笔记内容保持不变。','Move all knowledge and delete this base? Note content is preserved.')))return;
    try{manager.apply(d=>{if(JSON.stringify(d)!==deletionSnapshot)throw Error('stale delete');if(!d.libraries.some(l=>l.id===dest)||dest===deletionId)throw Error('destination');d.items=d.items.map(n=>n.libraryId===deletionId?{...n,libraryId:dest}:n);if(d.builtinLibraryId===deletionId)d.builtinLibraryId=dest;d.libraries=d.libraries.filter(l=>l.id!==deletionId);return d;});window.PDFWorkspace?.transferLibrary(deletionId,dest);setScope(dest);notify('知识已转移，原知识库已删除。','Knowledge moved; original base deleted.');}
    catch(err){notify('删除未完成：数据可能在其他页面改变，请重新检查后操作。','Delete failed: data may have changed elsewhere. Review and try again.',true);}};
  $('legacyBackup').onclick=()=>{try{const raw=store.rawBackup();if(raw===null){notify('当前浏览器没有旧版数据快照。请使用“导出 JSON”备份当前知识库。','No legacy snapshot in this browser. Use Export JSON for the current bases.');return;}const url=URL.createObjectURL(new Blob([raw],{type:'application/json'})),a=document.createElement('a');a.href=url;a.download='knowledge-before-v2.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),10000);notify('已发起下载升级前的原始快照，请检查下载文件。','Pre-upgrade snapshot download started. Check your downloads.');}catch(err){notify('无法读取旧版快照。','Cannot read legacy snapshot.',true);}};
  $('libraryScope').onchange=()=>setScope($('libraryScope').value);
  $('courseFilter').onchange=$('tagFilter').onchange=()=>manager.renderKnowledge();
  $('clearFilters').onclick=()=>{$('courseFilter').value='';$('tagFilter').value='';$('category').value='all';$('search').value='';manager.renderKnowledge();};
  $('note-libraryId').onchange=()=>{const l=state().libraries.find(l=>l.id===$('note-libraryId').value);if(l)$('note-course').value=l.name;};
  tree.addEventListener('toggle',e=>{const key=e.target.dataset.tree;if(key&&e.target.isConnected){e.target.open?expanded.add(key):expanded.delete(key);}},true);
  tree.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.scope){setScope(b.dataset.scope);return;}if(b.dataset.topic){setScope(b.dataset.base);const key=b.dataset.topic,card=key.startsWith('builtin-')?[...document.querySelectorAll('#cards article:not(.personal-note)')][Number(key.slice(8))]:[...document.querySelectorAll('#cards [data-note-id]')].find(el=>el.dataset.noteId===key);if(card)BrainUI.open(card);}});
  function refresh(){
    $('heading').textContent=t('我的个人知识库','My Knowledge Base');$('intro').textContent=t('把课程、想法和项目放进各自的知识库。跨领域查找，在自己的节奏里持续积累。','A home for your courses, ideas and projects. Find connections across your knowledge and keep learning at your own pace.');
    $('notice').textContent=t('私人本机空间 · 笔记不会上传。ETF5248 内置知识、图形、例题和测验是待核实的教学补充。AI、登录、云同步和发布尚未开放。','Private local workspace · Notes are not uploaded. Built-in ETF5248 materials and exercises are unverified teaching supplements. AI, accounts, cloud sync and publishing are not available.');
    $('graphTitle').textContent=t('ETF5248 / 图形实验室','ETF5248 / Graph laboratory');$('exampleTitle').textContent=t('ETF5248 / 应用例题','ETF5248 / Application example');$('quizTitle').textContent=t('ETF5248 / 自测','ETF5248 / Quiz');
    sync();
    const future=$('roadmap');if(future&&!$('futureScope')){const box=document.createElement('div');box.id='futureScope';box.className='future-scope';box.innerHTML='<label><span id="pdfTargetLabel"></span><select id="pdfTarget"></select></label><label><span id="tutorScopeLabel"></span><select id="tutorScope"></select></label><p id="futureWorkflow"></p>';future.append(box);}
    if($('futureScope')){$('pdfTargetLabel').textContent=t('未来 PDF 草稿保存目标（仅规划）','Future PDF draft destination (planning only)');$('tutorScopeLabel').textContent=t('未来 Tutor 检索范围（仅规划）','Future Tutor scope (planning only)');const opts=state().libraries.map(l=>[l.id,name(l.id)]);fill($('pdfTarget'),opts);fill($('tutorScope'),[['all',t('跨全部知识库','Across all bases')],...opts]);$('futureWorkflow').textContent=t('规划流程：选择知识库 → 本机提取 PDF → AI 整理草稿（未接入）→ 核对公式及原文页码 → 你确认后入库。Tutor 必须引用知识点与来源页码，证据不足时明确说明。当前选择不会触发提取、问答或上传。账户、跨设备同步、公开作品集与私密空间权限尚未实现；Codex-Memory 保持独立私人文件。','Planned: choose a base → local PDF extraction → AI drafts (not connected) → verify formulas and source pages → save after your confirmation. Tutor must cite notes and pages, and acknowledge missing evidence. These selectors do not process, answer or upload anything. Accounts, sync, portfolio/private access controls are not implemented. Codex-Memory stays in separate private files.');}
  }
  window.addEventListener('storage',event=>{if(event.key===store.LEGACY)sync();});
  const previous=render;render=()=>{previous();refresh();};
  refresh();
  return {sync,refresh,matches,selected,name,setScope,currentScope:()=>scope};
})();
KnowledgeManager.renderKnowledge();
