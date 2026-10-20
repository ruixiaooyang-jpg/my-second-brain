/* Versioned local repository. Legacy bytes are never changed or deleted.
   No network, account, AI or Codex-Memory access. */
window.KnowledgeStore=(()=>{
  const KEY='my-second-brain.knowledge.v2',LEGACY='optimization-learning-hub.knowledge.v1';
  const BACKUP='my-second-brain.backup.before-v2',FORMAT='optimization-learning-hub',LIMIT=4*1024*1024;
  const epoch='2026-10-10T00:00:00.000Z';
  const clone=v=>JSON.parse(JSON.stringify(v)),norm=v=>v.trim().toLowerCase();
  function str(v,max,required=true){if(typeof v!=='string'||v.length>max||(required&&!v.trim()))throw Error('invalid text');return v.trim();}
  function id(v){v=str(v,100);if(!/^[a-zA-Z0-9_-]+$/.test(v))throw Error('invalid id');return v;}
  function date(v){v=str(v,40);if(!/^\d{4}-\d{2}-\d{2}T/.test(v)||!Number.isFinite(Date.parse(v)))throw Error('invalid date');return v;}
  function note(v,legacy=false){
    if(!v||typeof v!=='object'||Array.isArray(v))throw Error('invalid note');
    const n={id:id(v.id),title:str(v.title,200),body:str(v.body,20000),course:str(v.course,200),category:str(v.category,200),sourcePage:str(v.sourcePage??'',300,false),titleEn:str(v.titleEn??'',200,false),bodyEn:str(v.bodyEn??'',20000,false),createdAt:date(v.createdAt),updatedAt:date(v.updatedAt)};
    if(!Array.isArray(v.tags)||v.tags.length>20)throw Error('tags');n.tags=[...new Set(v.tags.map(t=>str(t,50)))];
    if(!legacy){n.libraryId=id(v.libraryId);n.source=str(v.source??'',300,false);}
    // Optional v2 fields: old records are neither rewritten nor assigned new identities.
    if(v.contentType!==undefined){if(!['concept','case','note','practice'].includes(v.contentType))throw Error('content type');n.contentType=v.contentType;}
    if(v.relatedIds!==undefined){if(!Array.isArray(v.relatedIds)||v.relatedIds.length>1000)throw Error('relations');n.relatedIds=[...new Set(v.relatedIds.map(id))].filter(x=>x!==n.id);}
    return n;
  }
  function library(v){return {id:id(v.id),name:str(v.name,200),nameEn:str(v.nameEn??'',200,false),kind:['course','personal','project'].includes(v.kind)?v.kind:(()=>{throw Error('kind');})(),createdAt:date(v.createdAt),updatedAt:date(v.updatedAt)};}
  function empty(){return {format:FORMAT,version:2,libraries:[{id:'kb_etf5248',name:'ETF5248',nameEn:'ETF5248',kind:'course',createdAt:epoch,updatedAt:epoch}],builtinLibraryId:'kb_etf5248',items:[]};}
  function legacyId(name){let h=2166136261;for(const ch of norm(name)){h^=ch.charCodeAt(0);h=Math.imul(h,16777619);}return 'legacy_'+(h>>>0).toString(16);}
  function migrate(v){
    if(v.format!==FORMAT||v.version!==1||!Array.isArray(v.items)||v.items.length>1000)throw Error('legacy schema');
    const data=empty();const ids=new Set();
    data.items=v.items.map(item=>{const n=note(item,true);if(ids.has(n.id))throw Error('duplicate note id');ids.add(n.id);
      let lib=data.libraries.find(l=>norm(l.name)===norm(n.course));
      if(!lib){let lid=legacyId(n.course);while(data.libraries.some(l=>l.id===lid))lid+='x';lib={id:lid,name:n.course,nameEn:'',kind:'course',createdAt:epoch,updatedAt:epoch};data.libraries.push(lib);}
      return {...n,libraryId:lib.id,source:''};});return validate(data);
  }
  function validate(v){
    if(v?.version===1)return migrate(v);
    if(!v||v.format!==FORMAT||v.version!==2||!Array.isArray(v.items)||v.items.length>1000||!Array.isArray(v.libraries)||v.libraries.length<1||v.libraries.length>100)throw Error('schema');
    const libraries=v.libraries.map(library),items=v.items.map(n=>note(n));
    if(new Set(libraries.map(l=>l.id)).size!==libraries.length||new Set(libraries.map(l=>norm(l.name))).size!==libraries.length||new Set(items.map(n=>n.id)).size!==items.length)throw Error('duplicate identity');
    const valid=new Set(libraries.map(l=>l.id));if(!valid.has(v.builtinLibraryId)||items.some(n=>!valid.has(n.libraryId)))throw Error('orphan note');
    return {format:FORMAT,version:2,libraries,builtinLibraryId:v.builtinLibraryId,items};
  }
  function encode(v){const clean=validate(v),raw=JSON.stringify(clean);if(new Blob([raw]).size>LIMIT)throw Error('capacity');return raw;}
  function snapshot(raw){if(raw===null)return;const previous=localStorage.getItem(BACKUP);if(previous!==null&&previous!==raw)localStorage.setItem(BACKUP+'.'+Date.now(),previous);if(previous!==raw)localStorage.setItem(BACKUP,raw);if(localStorage.getItem(BACKUP)!==raw)throw Error('backup verification');}
  function read(){const raw=localStorage.getItem(KEY);return raw===null?empty():validate(JSON.parse(raw));}
  function init(){
    if(localStorage.getItem(KEY)!==null)return read();
    const raw=localStorage.getItem(LEGACY);if(raw===null)return empty();
    // Snapshot must succeed BEFORE even the first v2 write. Leave v1 untouched.
    const migrated=validate(JSON.parse(raw));snapshot(raw);localStorage.setItem(KEY,encode(migrated));return migrated;
  }
  function update(change){const oldRaw=localStorage.getItem(KEY);if(oldRaw!==null&&localStorage.getItem('my-second-brain.backup.before-live-graph')===null)localStorage.setItem('my-second-brain.backup.before-live-graph',oldRaw);const next=change(clone(read()));const raw=encode(next);localStorage.setItem(KEY,raw);return validate(JSON.parse(raw));}
  const fingerprint=n=>JSON.stringify([n.libraryId,n.title,n.body,n.course,n.category,[...n.tags].sort(),n.source,n.sourcePage,n.titleEn,n.bodyEn,n.contentType||'note',[...(n.relatedIds||[])].sort()]);
  function merge(base,incoming){
    // A fresh workspace has no user-authored library metadata to protect.
    // Restore the full backup including renamed libraries and built-in ownership.
    if(JSON.stringify(base)===JSON.stringify(empty()))return {next:clone(incoming),added:incoming.items.length,librariesAdded:Math.max(0,incoming.libraries.length-1),duplicate:0,conflict:0,libraryConflict:0};
    const next=clone(base),mapping=new Map();let duplicate=0,conflict=0,libraryConflict=0;
    for(const lib of incoming.libraries){
      const same=next.libraries.find(v=>v.id===lib.id),alias=x=>{x=norm(x);return x==='etf5500'?'etx5500':x},byName=next.libraries.find(v=>alias(v.name)===alias(lib.name));
      if(same){mapping.set(lib.id,same.id);if(same.name!==lib.name||same.nameEn!==lib.nameEn||same.kind!==lib.kind)libraryConflict++;}
      else if(byName){mapping.set(lib.id,byName.id);if(byName.kind!==lib.kind||byName.nameEn!==lib.nameEn)libraryConflict++;}
      else{next.libraries.push(lib);mapping.set(lib.id,lib.id);}
    }
    for(const input of incoming.items){const n={...input,libraryId:mapping.get(input.libraryId)},same=next.items.find(v=>v.id===n.id);
      if(same){fingerprint(same)===fingerprint(n)?duplicate++:conflict++;}
      else if(!n.contentType&&!n.relatedIds?.length&&!incoming.items.some(v=>v.relatedIds?.includes(n.id))&&next.items.some(v=>fingerprint(v)===fingerprint(n)))duplicate++;
      else next.items.push(n);
    }
    return {next,added:next.items.length-base.items.length,librariesAdded:next.libraries.length-base.libraries.length,duplicate,conflict,libraryConflict};
  }
  return {KEY,LEGACY,BACKUP,init,read,update,validate,note,library,empty,merge,encode,
    rawBackup:()=>localStorage.getItem(BACKUP)??localStorage.getItem(LEGACY),
    legacyChanged:()=>localStorage.getItem(BACKUP)!==null&&localStorage.getItem(LEGACY)!==localStorage.getItem(BACKUP),
    rawCurrent:()=>localStorage.getItem(KEY),capabilities:Object.freeze({pdf:false,ai:false,cloud:false})};
})();
