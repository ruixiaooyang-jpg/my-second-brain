/* Optional automatic backup into a folder the user picks (File System Access API, Chrome/Edge).
   Writes JSON files only into that folder; nothing is uploaded and nothing is ever deleted. */
window.FolderBackup=(()=>{
 const $=id=>document.getElementById(id),EK='my-second-brain.lastExport',REVIEW='my-second-brain.review.v1';
 const manage=$('workspaceManage');if(!manage)return {};
 const box=document.createElement('div');box.id='folderBackup';box.className='folder-backup';manage.append(box);
 const supported=typeof window.showDirectoryPicker==='function';
 let handle=null,state='none',last='',timer=null,busy=false,failed=false;
 const DB='my-second-brain-handles';
 const idb=()=>new Promise((res,rej)=>{const r=indexedDB.open(DB,1);r.onupgradeneeded=()=>r.result.createObjectStore('h');r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error);});
 async function idbGet(){try{const db=await idb();return await new Promise((res,rej)=>{const q=db.transaction('h').objectStore('h').get('dir');q.onsuccess=()=>res(q.result||null);q.onerror=()=>rej(q.error);});}catch{return null;}}
 async function idbSet(v){try{const db=await idb();await new Promise((res,rej)=>{const tx=db.transaction('h','readwrite');v?tx.objectStore('h').put(v,'dir'):tx.objectStore('h').delete('dir');tx.oncomplete=res;tx.onerror=()=>rej(tx.error);});}catch{/* handle just won't persist */}}
 async function put(dir,name,text){const fh=await dir.getFileHandle(name,{create:true});const w=await fh.createWritable();await w.write(text);await w.close();}
 async function backupNow(){
  if(!handle||busy)return;busy=true;
  try{
   const env=JSON.stringify({...KnowledgeStore.read(),exportedAt:new Date().toISOString(),app:'my-second-brain',appVersion:'1.1'});
   const day=new Date().toISOString().slice(0,10);
   await put(handle,'my-second-brain-backup.json',env);await put(handle,`my-second-brain-${day}.json`,env);
   const rv=localStorage.getItem(REVIEW);if(rv)await put(handle,'my-second-brain-review.json',rv);
   const mn=localStorage.getItem('my-second-brain.mine.v1');if(mn)await put(handle,'my-second-brain-mine.json',mn);
   const ac=localStorage.getItem('my-second-brain.activity.v1');if(ac)await put(handle,'my-second-brain-activity.json',ac);
   const ln=localStorage.getItem('my-second-brain.learned.v1');if(ln)await put(handle,'my-second-brain-learned.json',ln);
   try{localStorage.setItem(EK,new Date().toISOString());}catch{/* reminder only */}
   last=new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});failed=false;
  }catch{failed=true;}
  busy=false;paint();
 }
 function schedule(){if(state!=='on')return;clearTimeout(timer);timer=setTimeout(backupNow,3000);}
 async function check(){
  if(!supported)return paint();
  handle=await idbGet();
  if(!handle){state='none';return paint();}
  try{state=(await handle.queryPermission({mode:'readwrite'}))==='granted'?'on':'ask';}catch{state='ask';}
  paint();if(state==='on')backupNow();
 }
 async function choose(){
  try{const dir=await window.showDirectoryPicker({mode:'readwrite',id:'my-second-brain-backup',startIn:'documents'});handle=dir;await idbSet(dir);state='on';await backupNow();}
  catch{/* user cancelled */}
  paint();
 }
 async function resume(){try{state=(await handle.requestPermission({mode:'readwrite'}))==='granted'?'on':'ask';}catch{state='ask';}paint();if(state==='on')backupNow();}
 async function stop(){handle=null;state='none';await idbSet(null);paint();}
 function paint(){
  const b=(id,zh,en,cls='')=>`<button type="button" id="${id}" ${cls?`class="${cls}"`:''}>${t(zh,en)}</button>`;
  let body;
  if(!supported)body=`<p class="muted">${t('当前浏览器不支持自动备份到文件夹（请用 Chrome 或 Edge）。仍可手动“导出 JSON”。','This browser cannot back up to a folder automatically (use Chrome or Edge). Manual “Export JSON” still works.')}</p>`;
  else if(state==='none')body=`<p class="muted">${t('选择一个文件夹（例如 OneDrive 或移动硬盘里的文件夹），之后每次修改笔记或复习进度，会在几秒后自动写入备份。文件只保存在你选的文件夹，不上传。','Pick a folder (for example inside OneDrive or on an external drive). After each change to your notes or review progress, a backup is written there a few seconds later. Files stay in that folder; nothing is uploaded.')}</p>${b('fbChoose','选择备份文件夹','Choose backup folder','primary')}`;
  else if(state==='ask')body=`<p class="muted">${t(`已设置备份文件夹“${handle?.name||''}”，但浏览器重启后需要你点一下授权。`,`Backup folder “${handle?.name||''}” is set; the browser needs one click to re-authorise it after a restart.`)}</p>${b('fbResume','恢复自动备份','Resume automatic backup','primary')} ${b('fbStop','停用','Turn off')}`;
  else body=`<p>${t(`自动备份已开启 · 文件夹“${handle?.name||''}”${last?' · 最近备份 '+last:''}`,`Automatic backup is on · folder “${handle?.name||''}”${last?' · last backup '+last:''}`)}</p>${failed?`<p class="error">${t('上次写入失败：请确认文件夹仍可访问，然后点“立即备份”。','The last write failed: check that the folder is still available, then press “Back up now”.')}</p>`:''}${b('fbNow','立即备份','Back up now')} ${b('fbStop','停用','Turn off')}`;
  box.innerHTML=`<h4>${t('自动备份到文件夹','Automatic folder backup')}</h4>${body}`;
 }
 box.addEventListener('click',e=>{const id=e.target.id;if(id==='fbChoose')choose();else if(id==='fbResume')resume();else if(id==='fbNow')backupNow();else if(id==='fbStop')stop();});
 const update=KnowledgeStore.update;KnowledgeStore.update=(...a)=>{const r=update.apply(KnowledgeStore,a);schedule();return r;};
 if(window.ReviewUI)ReviewUI.onChange=schedule;
 window.addEventListener('storage',schedule);
 const previousRender=render;render=()=>{previousRender();paint();};
 paint();check();
 return {backupNow,schedule,state:()=>state,supported};
})();
