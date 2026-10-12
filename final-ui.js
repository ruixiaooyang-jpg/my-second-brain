/* Final presentation pass: no knowledge or navigation preference writes. */
window.HomeUI=(()=>{
 const $=id=>document.getElementById(id),home=document.createElement('section');home.id='workspaceHome';document.querySelector('main').prepend(home);
 const link=document.createElement('button');link.id='homeLink';$('libraryTree').before(link);let active=true,base='kb_etf5248';
 function show(){window.KnowledgeGraph?.leaveFocus();active=true;document.body.classList.add('workspace-home');document.body.classList.remove('kg-focus');home.hidden=false;refresh();scrollTo({top:0,behavior:'instant'});}
 function refresh(){const libs=KnowledgeManager.state().libraries;if(!libs.some(l=>l.id===base))base=libs[0]?.id;link.textContent=t('工作台','Workspace');link.setAttribute('aria-current',active?'page':'false');home.hidden=!active;if(active)$('libraryTree').querySelectorAll('[aria-current]').forEach(e=>e.removeAttribute('aria-current'));
  const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  home.innerHTML=`<span class="ll-eyebrow">MY SECOND BRAIN</span><h1>${t('你的知识工作台','Your knowledge workspace')}</h1><p class="home-intro">${t('学习课程，连接想法，记录自己的理解。','Study your courses, connect ideas, and make knowledge your own.')}</p><label class="home-base">${t('当前知识库','Current knowledge base')}<select id="homeBase">${libs.map(l=>`<option value="${esc(l.id)}" ${base===l.id?'selected':''}>${esc(LibraryUI.name(l.id))}</option>`).join('')}</select></label><div class="home-actions">${[['learn','01','课程学习','Course learning','按课程内容逐步阅读','Read through your course materials'],['graph','02','知识图谱','Knowledge graph','从关联中找到新的理解','Explore connections between ideas'],['all','03','全部知识点','All knowledge','搜索概念、案例与个人笔记','Find concepts, cases and your notes'],['add','＋','添加知识','Add knowledge','保存新想法，并建立关联','Save an idea and connect it']].map(([id,num,zh,en,desc,descEn])=>`<button data-home-action="${id}"><span>${num}</span><strong>${t(zh,en)}</strong><small>${t(desc,descEn)}</small></button>`).join('')}</div><p class="home-foot">${t('本机保存 · 通过“全部知识点 → 管理与备份”导出你的笔记。','Stored locally · Export your notes under All knowledge → Manage & backup.')}</p>`;
 }
 home.addEventListener('change',e=>{if(e.target.id==='homeBase')base=e.target.value;});
 home.addEventListener('click',e=>{const action=e.target.closest('[data-home-action]')?.dataset.homeAction;if(!action)return;const target=action==='graph'?'knowledgeGraph':action==='learn'&&base==='kb_etf5248'?'lectures':'knowledge';CourseNav.go(base,target);if(action==='add')$('addNote').click();});
 link.onclick=show;const go=CourseNav.go;CourseNav.go=(...args)=>{active=false;document.body.classList.remove('workspace-home');home.hidden=true;go(...args);link.setAttribute('aria-current','false');};
 const previous=render;render=()=>{previous();refresh();if(active){document.body.classList.add('workspace-home');document.body.classList.remove('kg-focus');}};
 show();return {show,refresh};
})();
