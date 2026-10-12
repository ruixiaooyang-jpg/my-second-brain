/* Group existing controls; retain their IDs, event handlers and form behavior. */
window.WorkspacePolish=(()=>{
 const $=id=>document.getElementById(id),section=$('knowledge');
 const manage=document.createElement('details');manage.id='workspaceManage';manage.innerHTML='<summary id="workspaceManageTitle"></summary>';
 section.querySelector('.manager').before(manage);manage.append($('libraryControls'));
 const backup=document.createElement('div');backup.className='backup-actions';for(const id of ['exportNotes','importNotes','recovery','storageHint'])backup.append($(id));manage.append(backup);
 const filters=document.createElement('details');filters.id='workspaceFilters';filters.innerHTML='<summary id="workspaceFiltersTitle"></summary>';
 section.querySelector('.tools').after(filters);for(const e of [...section.querySelectorAll('.extra-filters')])filters.append(e);filters.prepend($('category'));
 $('managerTitle').hidden=true;const hint=$('courseViewFilters').querySelector('p');if(hint)hint.hidden=true;
 function refresh(){
  $('workspaceManageTitle').textContent=t('管理与备份','Manage & backup');$('workspaceFiltersTitle').textContent=t('筛选','Filters');
  $('notice').textContent=t('本机知识库 · 请定期导出备份。课程笔记附来源；早期演示与个人内容分别标注。','Local knowledge base · Export backups regularly. Course notes include sources; demos and personal content are labeled separately.');
  $('footer').textContent=t('My Second Brain · 个人学习知识库 · 非 Monash University 官方网站','My Second Brain · Personal knowledge base · Not an official Monash University website');
  const side=document.querySelector('.side-future');if(side)side.textContent='';
  const future=$('roadmap');if(future)future.innerHTML=`<h2>${t('功能状态','Feature status')}</h2><p>${t('PDF 本机提取、人工审核、知识管理与图谱可用。Mock 为模拟结果；真实 AI 需本机服务配置和外发确认，状态以整理面板为准。AI Tutor、账号、云同步和在线发布尚未实现。','Local PDF extraction, review, knowledge management and graphs are available. Mock results are simulated; real AI requires local server configuration and explicit sending consent. AI Tutor, accounts, cloud sync and publishing are not implemented.')}</p>`;
 }
 const previous=render;render=()=>{previous();refresh();};refresh();return {refresh};
})();
