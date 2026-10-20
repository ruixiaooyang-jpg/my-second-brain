/* Full backup & restore: ONE file that holds everything this browser stores (notes, "My understanding", review progress,
   learned ticks, activity). Restore replaces current data, after saving a safety snapshot that can be undone.
   Nothing is uploaded; there is no account or cloud. */
window.FullBackup=(()=>{
 'use strict';
 const $=id=>document.getElementById(id),manage=$('workspaceManage');if(!manage)return {};
 const KEYS=[KnowledgeStore.KEY,'my-second-brain.mine.v1','my-second-brain.review.v1','my-second-brain.learned.v1','my-second-brain.activity.v1'];
 const SNAP='my-second-brain.snapshot.before-full-restore',EK='my-second-brain.lastExport',MAX=12*1024*1024;
 const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const box=document.createElement('div');box.id='fullBackup';box.className='folder-backup';manage.append(box);
 let pending=null,msg='',bad=false;
 const get=k=>{try{return localStorage.getItem(k);}catch{return null;}};
 const parse=s=>{try{return JSON.parse(s);}catch{return null;}};
 function counts(map){
  const k=parse(map[KEYS[0]]),m=parse(map[KEYS[1]]),r=parse(map[KEYS[2]]),l=parse(map[KEYS[3]]);
  return {notes:Array.isArray(k?.items)?k.items.length:0,mine:m&&m.notes?Object.keys(m.notes).length:0,review:r&&r.cards?Object.keys(r.cards).length:0,learned:l&&l.ids?Object.keys(l.ids).length:0};
 }
 const current=()=>Object.fromEntries(KEYS.map(k=>[k,get(k)]));
 function exportAll(){
  try{
   const data={};for(const k of KEYS){const v=get(k);if(v!==null)data[k]=v;}
   const text=JSON.stringify({app:'my-second-brain',kind:'full-backup',v:1,exportedAt:new Date().toISOString(),data});
   const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([text],{type:'application/json'}));a.download='my-second-brain-full-'+new Date().toISOString().slice(0,10)+'.json';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),1500);
   try{localStorage.setItem(EK,new Date().toISOString());}catch{/* reminder only */}
   say(t('已发起完整备份下载，请确认文件已保存。','Full backup download started; check that the file was saved.'));
  }catch{say(t('导出失败：浏览器无法读取存储。','Export failed: the browser cannot read storage.'),true);}
 }
 function say(m,isBad=false){msg=m;bad=isBad;paint();}
 async function pick(file){
  pending=null;
  try{
   if(!file)return;if(file.size>MAX)throw Error('size');
   const env=parse(await file.text());
   if(!env||env.app!=='my-second-brain'||env.kind!=='full-backup'||env.v!==1||!env.data||typeof env.data!=='object')throw Error('format');
   const map={};
   for(const k of KEYS){const v=env.data[k];if(v===undefined)continue;if(typeof v!=='string'||v.length>MAX)throw Error('value');const p=parse(v);if(p===null)throw Error('json '+k);map[k]=v;}
   if(!map[KEYS[0]])throw Error('no notes');
   KnowledgeStore.validate(JSON.parse(map[KEYS[0]]));
   for(const k of KEYS.slice(1,5)){if(map[k]&&typeof parse(map[k])!=='object')throw Error('shape');}
   pending={map,at:env.exportedAt,name:file.name};msg='';bad=false;
  }catch{msg=t('这不是有效的完整备份文件，或文件已损坏。当前数据没有任何改动。','This is not a valid full backup, or the file is damaged. Current data is untouched.');bad=true;}
  paint();
 }
 function restore(){
  if(!pending)return;
  const snap={v:1,ts:new Date().toISOString(),data:current()};
  try{
   localStorage.setItem(SNAP,JSON.stringify(snap));if(localStorage.getItem(SNAP)===null)throw Error('snap');
   for(const k of KEYS){if(pending.map[k]!==undefined)localStorage.setItem(k,pending.map[k]);else localStorage.removeItem(k);}
   for(const k of KEYS){if(pending.map[k]!==undefined&&localStorage.getItem(k)!==pending.map[k])throw Error('verify');}
  }catch{
   try{for(const k of KEYS){if(snap.data[k]===null)localStorage.removeItem(k);else localStorage.setItem(k,snap.data[k]);}localStorage.removeItem(SNAP);}catch{/* best effort */}
   pending=null;say(t('恢复失败（可能是存储空间不足），已自动还原，当前数据没有改动。','Restore failed (storage may be full); everything was rolled back and current data is unchanged.'),true);return;
  }
  location.reload();
 }
 function undo(){
  const snap=parse(get(SNAP));if(!snap||!snap.data)return;
  try{for(const k of KEYS){if(snap.data[k]===null||snap.data[k]===undefined)localStorage.removeItem(k);else localStorage.setItem(k,snap.data[k]);}localStorage.removeItem(SNAP);}
  catch{say(t('撤销失败。','Undo failed.'),true);return;}
  location.reload();
 }
 const row=(label,a,b)=>`<tr><td>${label}</td><td>${a}</td><td>${b}</td></tr>`;
 function paint(){
  const snap=parse(get(SNAP));
  let preview='';
  if(pending){
   const c=counts(current()),n=counts(pending.map);
   preview=`<div class="fb-preview"><p><strong>${t('备份文件内容','Backup file')}</strong>：${esc(pending.name)}${pending.at?' · '+esc(String(pending.at).slice(0,16).replace('T',' ')):''}</p>
   <table><thead><tr><th></th><th>${t('当前','Now')}</th><th>${t('恢复后','After restore')}</th></tr></thead><tbody>${row(t('知识卡片/笔记','Cards & notes'),c.notes,n.notes)}${row(t('“我的理解”','“My understanding”'),c.mine,n.mine)}${row(t('已学','Learned'),c.learned,n.learned)}${row(t('复习进度','Review progress'),c.review,n.review)}</tbody></table>
   <p class="muted">${t('恢复会用备份替换当前数据（不是合并）。替换前会自动保存一份当前数据，可以在这里撤销。','Restoring replaces current data (it is not a merge). A snapshot of the current data is saved first, and you can undo it here.')}</p>
   <button type="button" class="primary" id="fbRestore">${t('用备份替换当前数据','Replace current data with this backup')}</button> <button type="button" id="fbCancel">${t('取消','Cancel')}</button></div>`;
  }
  box.innerHTML=`<h4>${t('完整备份与恢复（换电脑 / 防丢失）','Full backup & restore (new device / safety)')}</h4>
  <p class="muted">${t('一个文件包含笔记、“我的理解”、复习进度、已学和活动记录。数据只在浏览器本地，不会上传；换电脑时在新电脑上导入这个文件即可。','One file holds notes, “My understanding”, review progress, learned ticks and activity. Data lives only in this browser and is never uploaded; on a new computer, import this file.')}</p>
  <button type="button" class="primary" id="fbExport">${t('导出完整备份','Export full backup')}</button> <button type="button" id="fbImport">${t('从备份恢复…','Restore from backup…')}</button>
  <input type="file" id="fbFile" accept=".json,application/json" hidden>
  ${msg?`<p class="${bad?'error':'muted'}" role="status">${esc(msg)}</p>`:''}${preview}
  ${snap&&snap.ts?`<p class="muted">${t('上次恢复前的数据快照：','Snapshot from before the last restore: ')}${esc(snap.ts.slice(0,16).replace('T',' '))} <button type="button" id="fbUndo">${t('撤销上次恢复','Undo last restore')}</button></p>`:''}`;
 }
 box.addEventListener('click',e=>{const id=e.target.id;if(id==='fbExport')exportAll();else if(id==='fbImport')$('fbFile').click();else if(id==='fbRestore')restore();else if(id==='fbCancel'){pending=null;paint();}else if(id==='fbUndo')undo();});
 box.addEventListener('change',e=>{if(e.target.id==='fbFile'){pick(e.target.files[0]);e.target.value='';}});
 const previousRender=render;render=()=>{previousRender();paint();};paint();
 return {exportAll};
})();
