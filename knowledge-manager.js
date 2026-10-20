/* No dependencies or network requests. User text is always escaped.
   Future PDF/AI importers must produce the same validated JSON envelope.
   Future cloud storage belongs behind the storage adapter, with explicit consent. */
window.KnowledgeManager = (() => {
  'use strict';
  const KEY = KnowledgeStore.KEY;
  const FORMAT = 'optimization-learning-hub';
  const MAX_BYTES = 4 * 1024 * 1024;
  const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const el = id => document.getElementById(id);
  const storage = {read: () => localStorage.getItem(KEY), write: value => localStorage.setItem(KEY,value)};
  const envelope = items => ({...state,items});
  let state = KnowledgeStore.empty();
  let items = [], editing = null, originalEdit = null, pending = null, blocked = false;
  let message = ['', ''], error = false;
  const fields = ['title','body','course','category','tags','sourcePage','titleEn','bodyEn','libraryId','source'];
  const labels = {
    managerTitle:['我的知识工作台','My knowledge workspace'],
    storageHint:['笔记仅保存在当前浏览器中，不会上传。清除浏览器数据可能导致丢失，请定期导出 JSON；换电脑或换网址需导入备份。','Notes stay in this browser and are not uploaded. Clearing browser data may erase them. Export JSON regularly; import your backup on another computer or URL.'],
    addNote:['添加知识','Add knowledge'],exportNotes:['导出 JSON','Export JSON'],importNotes:['导入 JSON','Import JSON'],
    formHelp:['标题、正文、课程和分类为必填。可填写中文或英文；可选英文版本仅由你填写，不会自动翻译。内置教学内容只读。','Title, content, course and category are required. Write in either language; optional English versions are supplied by you, never automatically translated. Built-in teaching content is read-only.'],
    titleLabel:['标题 *','Title *'],bodyLabel:['正文 *','Content *'],courseLabel:['课程 *','Course *'],categoryLabel:['分类 *（可输入新分类）','Category * (or enter a new one)'],
    tagsLabel:['标签（逗号分隔，最多 20 个）','Tags (comma-separated, up to 20)'],sourcePageLabel:['来源页码 / 讲义名称（可选）','Source pages / lecture name (optional)'],
    titleEnLabel:['英文标题（可选）','English title (optional)'],bodyEnLabel:['英文正文（可选）','English content (optional)'],
    saveNote:['保存知识','Save knowledge'],cancelNote:['取消','Cancel'],confirmImport:['合并导入','Merge import'],cancelImport:['取消导入','Cancel import'],
    libraryIdLabel:['所属知识库 *','Knowledge base *'],sourceLabel:['来源名称 / 链接','Source name / link'],
    recovery:['导出原始存储备份','Export raw storage backup']
  };
  const panel = document.createElement('div');
  panel.className='card manager';
  panel.innerHTML=`<h3 id="managerTitle"></h3><p id="storageHint" class="muted"></p>
    <div class="manager-actions"><button id="addNote" type="button" class="primary"></button><button id="exportNotes" type="button"></button><button id="importNotes" type="button"></button><button id="recovery" type="button" hidden></button></div>
    <input id="importFile" type="file" accept=".json,application/json" hidden>
    <p id="managerStatus" class="manager-status" role="status" aria-live="polite"></p>
    <div id="importPreview" hidden><p id="importSummary"></p><button id="confirmImport" type="button" class="primary"></button> <button id="cancelImport" type="button"></button></div>
    <form id="noteForm" class="note-form" hidden><h3 id="formTitle"></h3><p id="formHelp" class="muted"></p><div class="form-grid">
    ${fields.map(f=>`<label class="${['body','bodyEn'].includes(f)?'wide':''}" for="note-${f}"><span id="${f}Label"></span>${f==='libraryId'?`<select id="note-libraryId" required></select>`:['body','bodyEn'].includes(f)?`<textarea id="note-${f}" maxlength="20000" ${f==='body'?'required':''}></textarea>`:`<input id="note-${f}" ${f==='category'?'list="categorySuggestions"':''} maxlength="${f==='tags'?1200:f==='sourcePage'?300:200}" ${['title','course','category'].includes(f)?'required':''}>`}</label>`).join('')}
    </div><datalist id="categorySuggestions"></datalist><div class="note-actions"><button id="saveNote" type="submit" class="primary"></button><button id="cancelNote" type="button"></button></div></form>`;
  document.querySelector('#knowledge .tools').before(panel);

  // Strict schema: validate the entire batch before changing any stored data.
  function validateRecord(value){return KnowledgeStore.note(value);}
  function validateEnvelope(value){return KnowledgeStore.validate(value);}
  function read(){state=KnowledgeStore.read();return state.items;}
  function status(zh,en,isError=false){message=[zh,en];error=isError;paintStatus();}
  function paintStatus(){el('managerStatus').textContent=t(...message);el('managerStatus').classList.toggle('error',error);}
  function load(){
    try{state=KnowledgeStore.init();items=state.items;blocked=false;}catch(e){items=[];blocked=true;status('无法读取本机笔记：存储被禁用或数据已损坏。已停止写入以保留原数据；如可读取，请导出原始备份。','Cannot read local notes: storage is disabled or damaged. Writes are blocked to preserve existing data. Export a raw backup if readable.',true);}
    el('recovery').hidden=!blocked;
    ['addNote','importNotes','exportNotes','saveNote'].forEach(id=>el(id).disabled=blocked);
  }
  function commit(next){
    if(blocked)throw Error('blocked');
    state=KnowledgeStore.update(current=>({...current,items:next}));items=state.items;
    refreshCategories();renderKnowledge();
  }
  function failure(){status('保存失败，未确认写入。可能是空间不足、存储受限或原数据异常；表单内容已保留，请先导出备份再检查。','Save failed; no write was confirmed. Storage may be full, restricted or damaged. Form content is retained; export a backup before investigating.',true);}
  function groupOf(category){
    const aliases=[['建模基础','Model formulation'],['图形求解','Graphical solution'],['模型解释','Interpretation']];
    return aliases.findIndex(list=>list.some(v=>v.toLowerCase()===category.toLowerCase()));
  }
  function groupKey(note){const group=groupOf(note.category);return group<0?'custom:'+note.category:String(group);}
  function categoryName(note){const group=groupOf(note.category);return group<0?note.category:categories()[group];}
  function refreshCategories(selected=el('category').value || 'all'){
    const options=[['all',t('全部分类','All categories')],...categories().map((v,i)=>[String(i),v]),...[...new Set(items.filter(v=>groupOf(v.category)<0).map(v=>v.category))].sort().map(v=>['custom:'+v,v])];
    el('category').replaceChildren(...options.map(([value,label])=>new Option(label,value)));
    el('category').value=options.some(([v])=>v===selected)?selected:'all';
    el('categorySuggestions').replaceChildren(...[...new Set([...categories(),...items.map(v=>v.category)])].map(v=>new Option(v,v)));
  }
  function renderKnowledge(){
    const query=el('search').value.trim().toLowerCase(), group=el('category').value;
    window.LibraryUI?.sync();
    const builtins=topics.filter(v=>(!window.LibraryUI||LibraryUI.matches({libraryId:state.builtinLibraryId,course:'ETF5248',tags:[]}))&&(group==='all'||String(v.group)===group)&&[...v.title,...v.body,v.formula,'ETF5248',window.LibraryUI?.name(state.builtinLibraryId)||''].join(' ').toLowerCase().includes(query));
    const personal=items.filter(v=>(!window.LibraryUI||LibraryUI.matches(v))&&(group==='all'||groupKey(v)===group)&&[v.title,v.body,v.titleEn,v.bodyEn,v.course,v.category,categoryName(v),...v.tags,v.source,v.sourcePage,window.LibraryUI?.name(v.libraryId)||''].join(' ').toLowerCase().includes(query));
    el('cards').innerHTML=builtins.map(v=>`<article class="card"><span class="tag">${esc(categories()[v.group])}</span><details><summary>${esc(pair(v.title))}</summary><p>${esc(pair(v.body))}</p><div class="formula">${esc(v.formula)}</div><p class="muted">${t('来源：通用补充；待课程资料核对。','Source: general supplement; pending course verification.')}</p></details></article>`).join('')+
      personal.map(v=>`<article class="card personal-note" data-note-id="${esc(v.id)}"><span class="tag">${esc(categoryName(v))}</span><p class="muted">${t('我的笔记','My note')} · ${esc(window.LibraryUI?.name(v.libraryId)||v.course)} · ${esc(v.course)}</p><details><summary>${esc(lang==='en'&&v.titleEn?v.titleEn:v.title)}</summary><p class="note-body">${esc(lang==='en'&&v.bodyEn?v.bodyEn:v.body)}</p><p class="muted">${t('标签：','Tags: ')}${esc(v.tags.join(' · ')||'—')}</p><p class="muted">${t('来源（自行填写，未核实）：','Source (self-reported, unverified): ')}${esc([v.source,v.sourcePage].filter(Boolean).join(' · ')||t('未填写','Not supplied'))}</p></details><div class="note-actions"><button type="button" data-action="edit">${t('编辑','Edit')}</button><button type="button" class="danger" data-action="delete">${t('删除','Delete')}</button></div></article>`).join('');
    const n=builtins.length+personal.length;
    el('count').textContent=n?t(`找到 ${n} 个知识点，点击标题查看详情。`,`${n} topics. Select a title to view details.`):t('没有匹配项，请尝试其他关键词或分类。','No matches. Try another keyword or category.');
    window.CourseOrganization?.enhance();
    window.BrainUI?.decorate();window.KnowledgeGraph?.syncRoute();window.WorkspacePolish?.refresh();
  }
  function translate(){
    Object.entries(labels).forEach(([id,value])=>el(id).textContent=t(...value));
    el('formTitle').textContent=editing?t('编辑知识','Edit knowledge'):t('添加知识','Add knowledge');
    window.LibraryUI?.sync();paintStatus();paintPreview();
  }
  function closeForm(){el('noteForm').hidden=true;el('noteForm').reset();editing=null;originalEdit=null;}
  function openForm(note){
    if(!el('noteForm').hidden && !confirm(t('放弃当前未保存的表单内容？','Discard the current unsaved form?')))return;
    closeForm();window.LibraryUI?.sync();editing=note?.id||null;originalEdit=note?JSON.stringify(note):null;
    fields.forEach(f=>el('note-'+f).value=note?(f==='tags'?note.tags.join(', '):note[f]||''):'');
    if(!note){el('note-course').value=window.LibraryUI?.name(window.LibraryUI.selected())||'ETF5248';el('note-category').value=categories()[0];el('note-libraryId').value=window.LibraryUI?.selected()||state.builtinLibraryId;}
    window.NoteGraphFields?.open(note);el('noteForm').hidden=false;translate();el('note-title').focus();
  }
  function download(data,name){
    const url=URL.createObjectURL(new Blob([data],{type:'application/json;charset=utf-8'}));
    const link=document.createElement('a');link.href=url;link.download=name;link.click();setTimeout(()=>URL.revokeObjectURL(url),10000);
  }
  const merge=(base,incoming)=>KnowledgeStore.merge(base,incoming);
  function summary(r,english=lang==='en'){return english?`Add ${r.added} notes and ${r.librariesAdded} bases; ${r.duplicate} duplicates, ${r.conflict} note conflicts, ${r.libraryConflict} base conflicts. Keep local versions.`:`新增 ${r.added} 条笔记、${r.librariesAdded} 个知识库；重复 ${r.duplicate} 条；笔记冲突 ${r.conflict} 条；知识库冲突 ${r.libraryConflict} 个。冲突保留本机版本。`;}

  function paintPreview(){if(pending)el('importSummary').textContent=t('预览：','Preview: ')+summary(merge(state,pending));}
  function cancelImport(){pending=null;el('importPreview').hidden=true;}
  el('addNote').onclick=()=>openForm();
  el('cancelNote').onclick=()=>{closeForm();el('addNote').focus();};
  el('noteForm').onsubmit=event=>{
    event.preventDefault();
    const now=new Date().toISOString();
    const value=Object.fromEntries(fields.map(f=>[f,el('note-'+f).value.trim()]));
    Object.assign(value,window.NoteGraphFields?.value()||{});
    value.tags=value.tags.split(/[,，]/).map(v=>v.trim()).filter(Boolean);
    let clean;
    try{clean=validateRecord({...value,id:editing||('note_'+crypto.randomUUID()),createdAt:now,updatedAt:now});}
    catch(e){status('请检查输入：必填项不能只有空格；标签最多 20 个，每个最多 50 字。','Check input: required fields cannot be blank; use up to 20 tags of 50 characters each.',true);return;}
    try{
      const current=read(), old=current.find(v=>v.id===editing);
      if(editing && (!old||JSON.stringify(old)!==originalEdit)){status('这条知识已在其他页面修改或删除。请复制未保存的文字，再刷新并重新编辑。','This note changed or was deleted in another tab. Copy your unsaved text, then reload and edit again.',true);return;}
      if(old)clean.createdAt=old.createdAt;
      const next=editing?current.map(v=>v.id===editing?clean:v):[...current,clean];
      commit(next);closeForm();el('search').value='';refreshCategories('all');renderKnowledge();
      status('已保存到本机浏览器。建议导出 JSON 备份。','Saved in this browser. Export JSON for a backup.');
    }catch(e){failure();}
  };
  el('cards').addEventListener('click',event=>{
    const button=event.target.closest('[data-action]');if(!button)return;
    const note=items.find(v=>v.id===button.closest('[data-note-id]').dataset.noteId);if(!note)return;
    if(button.dataset.action==='edit'){openForm(note);return;}
    if(!confirm(t(`删除“${note.title}”？删除后只能从之前导出的备份恢复。`,`Delete “${note.title}”? Recovery requires an earlier exported backup.`)))return;
    try{
      const current=read(),actual=current.find(v=>v.id===note.id);
      if(actual && JSON.stringify(actual)!==JSON.stringify(note)){status('内容已在其他页面更新。请刷新后检查，再删除。','The note changed in another tab. Reload and review before deleting.',true);return;}
      commit(current.filter(v=>v.id!==note.id).map(v=>v.relatedIds?.includes(note.id)?{...v,relatedIds:v.relatedIds.filter(id=>id!==note.id)}:v));if(editing===note.id)closeForm();status('已删除。','Deleted.');
    }catch(e){failure();}
  });
  el('exportNotes').onclick=()=>{
    try{const current=read();download(JSON.stringify({...state,items:current,exportedAt:new Date().toISOString(),app:'my-second-brain',appVersion:'1.1'}),'knowledge-backup-'+new Date().toISOString().slice(0,10)+'.json');status(`已发起导出 ${current.length} 条个人笔记；请确认下载文件已保存。`,`Export started for ${current.length} personal notes; check that the download was saved.`);}
    catch(e){status('导出失败，无法读取本机存储。','Export failed: cannot read local storage.',true);}
  };
  el('recovery').onclick=()=>{try{download(KnowledgeStore.rawCurrent()||KnowledgeStore.rawBackup()||'null','knowledge-raw-recovery.json');}catch(e){status('浏览器禁止读取存储，无法导出原始数据。','Browser storage access is blocked; raw data cannot be exported.',true);}};
  el('importNotes').onclick=()=>el('importFile').click();
  el('importFile').onchange=async event=>{
    const file=event.target.files[0];event.target.value='';cancelImport();if(!file)return;
    try{
      if(file.size>MAX_BYTES || !/\.json$/i.test(file.name))throw Error('file');
      pending=validateEnvelope(JSON.parse((await file.text()).replace(/^\uFEFF/,'')));
      el('importPreview').hidden=false;paintPreview();status('文件检查通过，请查看预览后合并。最多 1,000 条、4 MB。','File validated. Review the preview, then merge. Limit: 1,000 notes, 4 MB.');
    }catch(e){cancelImport();status('导入失败：请选择本系统导出的有效 JSON（版本 1 或 2，最多 1,000 条、4 MB）。原数据未改动。','Import failed: select a valid JSON backup from this app (version 1 or 2, up to 1,000 notes, 4 MB). Existing data is unchanged.',true);}
  };
  el('cancelImport').onclick=cancelImport;
  el('confirmImport').onclick=()=>{
    if(!pending)return;
    try{read();const result=merge(state,pending);state=KnowledgeStore.update(current=>KnowledgeStore.merge(current,pending).next);items=state.items;cancelImport();el('search').value='';refreshCategories('all');renderKnowledge();status('导入完成。'+summary(result,false),'Import complete. '+summary(result,true));}
    catch(e){failure();}
  };
  window.addEventListener('storage',event=>{if(event.key===KEY||event.key===null){load();refreshCategories();renderKnowledge();paintPreview();}});
  // Explicit extension contract: nothing here uploads PDFs, calls AI, or syncs clouds.
  return {openForm,init:load,translate,refreshCategories,renderKnowledge,
    state:()=>JSON.parse(JSON.stringify(state)),
    apply:change=>{if(blocked)throw Error('blocked');state=KnowledgeStore.update(change);items=state.items;refreshCategories();renderKnowledge();},
    notify:status,
    blocked:()=>blocked,
    extensions:Object.freeze({schemaVersion:2,validateEnvelope,capabilities:Object.freeze({pdf:false,ai:false,cloud:false})})};
})();
