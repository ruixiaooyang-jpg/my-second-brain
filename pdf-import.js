/* Zero-budget PDF workflow. PDF bytes never leave this browser.
   Review drafts are session-only; saving uses the existing v2 note schema.
   AI has no configured provider and cannot run or incur charges here. */
window.PDFWorkspace=(()=>{
 'use strict';
 const $=id=>document.getElementById(id),esc=v=>String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const LIMIT={file:20*1024*1024,total:50*1024*1024,files:5,pages:200,text:2000000,drafts:100,chunk:6000};
 const BACKUP='my-second-brain.backup.before-pdf',docs=[],drafts=[];
 let active=null,pageNo=1,seq=0,busy=false,loader=null,renderTask=null,message=['',''];
 let courseScope=null;const positions=new Map();
 const visibleDocs=()=>docs.filter(d=>d.libraryId===courseScope);
 const visibleDrafts=()=>drafts.filter(d=>d.libraryId===courseScope);
 const section=document.createElement('section');section.id='pdfWorkspace';section.hidden=true;
 section.innerHTML=`<div class="pdf-heading"><div><div class="eyebrow">SOURCE → REVIEW → KNOWLEDGE</div><h1 id="pdfHeading"></h1><p id="pdfDescription" class="pdf-description"></p></div><button id="pdfBack" type="button"></button></div>
 <p id="pdfStatus" class="pdf-status" role="status" aria-live="polite"></p>
 <div class="pdf-grid"><div class="pdf-left"><div class="pdf-upload"><span id="pdfLocalBadge" class="pdf-badge"></span><label><span id="pdfDestinationLabel"></span><select id="pdfDestination"></select></label><label for="pdfFiles" id="pdfFileLabel"></label><input id="pdfFiles" type="file" multiple accept=".pdf,application/pdf"><p id="pdfLimits" class="pdf-muted"></p><p id="pdfAIState" class="pdf-warn"></p><button id="pdfAnalyze" disabled type="button"></button><p id="pdfSessionHint" class="pdf-muted"></p><button id="pdfBackup" type="button"></button></div>
 <h2 id="pdfQueueTitle"></h2><div id="pdfQueue"></div><h2 id="pdfDraftTitle"></h2><p id="pdfDraftHelp" class="pdf-muted"></p><div id="pdfDrafts"></div></div>
 <aside class="pdf-preview"><h2 id="pdfPreviewTitle"></h2><p id="pdfPreviewName" class="pdf-muted"></p><div class="pdf-actions"><button id="pdfPrev" type="button"></button><label><span id="pdfPageLabel"></span> <input id="pdfPage" type="number" min="1" value="1"></label><button id="pdfNext" type="button"></button></div><p id="pdfPageInfo" class="pdf-muted"></p><p id="pdfPageWarning" class="pdf-warn" hidden></p><p id="pdfRenderError" class="pdf-preview-error" role="status"></p><canvas id="pdfCanvas" hidden></canvas><details open><summary id="pdfTextTitle"></summary><pre id="pdfText"></pre></details><button id="pdfMakeDraft" type="button" disabled></button></aside></div>`;
 $('footer').before(section);
 const nav=document.createElement('a');nav.href='#pdfWorkspace';nav.className='pdf-nav';nav.id='pdfNav';$('nav').before(nav);
 const backupButton=document.createElement('button');backupButton.id='pdfPreviousBackup';backupButton.type='button';$('pdfBackup').after(backupButton);
 const words={pdfHeading:['AI PDF 智能整理','AI PDF workspace'],pdfBack:['返回知识库','Back to knowledge'],pdfDescription:['从讲义原文出发，核对每一页，再把值得保留的内容存入知识库。支持免费本机提取与人工整理；Mock 与真实 AI 的可用状态见下方整理面板。','Start with the source. Review each page and save useful knowledge. Free local extraction and manual review are available; see the organizer below for Mock and real AI status.'],pdfLocalBadge:['本机处理 · 0 元 · 不上传','Local processing · Free · No uploads'],pdfDestinationLabel:['新草稿的目标知识库','Destination for new drafts'],pdfFileLabel:['选择一个或多个 PDF','Choose one or more PDFs'],pdfLimits:['每份最多 20 MB / 200 页；最多 5 份，总计 50 MB。文字型可提取；扫描或无文本页需 OCR。','Up to 20 MB / 200 pages per file; 5 files / 50 MB total. Text PDFs supported; scanned or textless pages need OCR.'],pdfAIState:['AI 未配置 · 不会调用任何付费或云端服务。摘录草稿不是 AI 总结；英文解释、公式和例题请自行核对填写。','AI not configured · No paid or cloud calls. Extract drafts are not AI summaries. Review and supply translations, formulas and examples yourself.'],pdfAnalyze:['AI 自动整理 · 未配置','AI organize · Not configured'],pdfSessionHint:['上传文件、原文和未保存草稿仅保留在本次页面中，刷新会清除。正式保存后可用原有 JSON 导出恢复。PDF 文件本身不进入知识库备份。','Files, extracted text and unsaved drafts last only for this page session. Refresh clears them. Saved notes support JSON backup/restore; PDF files themselves are not included.'],pdfBackup:['导出当前知识库备份','Export current knowledge backup'],pdfQueueTitle:['讲义文件','Lecture files'],pdfDraftTitle:['待审核的知识草稿','Knowledge drafts for review'],pdfDraftHelp:['按当前页生成原文摘录；没有自动总结或翻译。选择并核对草稿后逐条保存，未确认的内容不会进入知识库。','Create extracts from the current page; no automatic summary or translation. Review and save selected drafts individually. Nothing is saved without confirmation.'],pdfPreviewTitle:['原文与页码','Source and pages'],pdfPrev:['上一页','Previous'],pdfNext:['下一页','Next'],pdfPageLabel:['页','Page'],pdfTextTitle:['提取原文（阅读顺序可能需核对）','Extracted text (reading order may need review)'],pdfMakeDraft:['当前页 → 摘录草稿','Current page → Extract drafts']};
 const fileName=id=>docs.find(d=>d.id===id)?.name||'';
 function status(zh,en,bad=false){message=[zh,en];$('pdfStatus').textContent=t(zh,en);$('pdfStatus').classList.toggle('error',bad);}
 function options(select,value=select.value){const libs=KnowledgeManager.state().libraries;select.replaceChildren(...libs.map(l=>new Option(lang==='en'&&l.nameEn?l.nameEn:l.name,l.id)));select.value=libs.some(l=>l.id===value)?value:LibraryUI.selected();}
 function open(id=LibraryUI.selected()){
  if(!KnowledgeManager.state().libraries.some(l=>l.id===id))return;
  if(courseScope!==id){if(courseScope)positions.set(courseScope,{active,pageNo});courseScope=id;const pos=positions.get(id);active=pos?.active||visibleDocs()[0]?.id||null;pageNo=pos?.pageNo||1;seq++;renderTask?.cancel();renderTask=null;message=['',''];}
  $('pdfDestination').value=id;section.hidden=false;document.body.classList.add('pdf-mode');refresh();window.CourseNav?.pdfScopeChanged(id);section.scrollIntoView({behavior:'instant'});
 }
 function close(){document.body.classList.remove('pdf-mode');section.hidden=true;}
 nav.onclick=e=>{e.preventDefault();open();};$('pdfBack').onclick=()=>{close();LibraryUI.setScope(courseScope||'all');};
 // Ordinary navigation remains usable while the focused PDF workspace is open.
 document.querySelector('header').addEventListener('click',e=>{if(e.target.closest('#nav a,#libraryTree button:not([data-view])'))close();});
 $('pdfDestination').onchange=()=>open($('pdfDestination').value);
 $('pdfBackup').onclick=()=>$('exportNotes').click();
 $('pdfPreviousBackup').onclick=()=>{try{const raw=localStorage.getItem(BACKUP);if(raw===null){status('尚无 PDF 入库前快照。请先用“导出当前知识库备份”。','No pre-PDF snapshot yet. Use Export current knowledge backup.');return;}download(JSON.parse(raw),'knowledge-before-pdf.json');status('已发起快照下载，可用知识库的“导入 JSON”合并恢复。','Snapshot download started. Use the knowledge JSON importer to merge and restore.');}catch(e){status('快照无法读取，原数据不改动。','Cannot read snapshot. Existing data unchanged.',true);}};
 function script(src){return new Promise((resolve,reject)=>{const s=document.createElement('script');s.src=src;s.onload=resolve;s.onerror=()=>{s.remove();reject(Error('loader'));};document.head.append(s);});}
 async function engine(){if(!loader)loader=(async()=>{await script('vendor/pdfjs/pdf.js');if(location.protocol==='file:')await script('vendor/pdfjs/pdf.worker.js');else pdfjsLib.GlobalWorkerOptions.workerSrc='vendor/pdfjs/pdf.worker.mjs';return pdfjsLib;})().catch(e=>{loader=null;throw e;});return loader;}
 const stateText=d=>d.error?t(...d.error):d.processing?t(`正在提取文字 · ${d.pages.length}/${d.count||'?'}`,`Extracting text · ${d.pages.length}/${d.count||'?'}`):d.pages.every(p=>p.ocr)?t('未提取到可用文字 · 可能需 OCR','No usable text · OCR may be required'):d.pages.some(p=>p.ocr)?t('部分页需 OCR / 核对','Some pages need OCR / review'):t('文字提取完成 · 等待人工审核','Text extracted · Awaiting review');
 function queue(){
  window.dispatchEvent(new Event('pdf-context-change'));
  $('pdfQueue').innerHTML=visibleDocs().length?visibleDocs().map(d=>`<article class="pdf-file ${d.id===active?'active':''}" data-doc="${d.id}"><h3>${esc(d.name)}</h3><p>${(d.size/1024/1024).toFixed(2)} MB · ${d.count??'—'} ${t('页','pages')}</p><p>${esc(stateText(d))}</p><div class="pdf-actions"><button type="button" data-pdf="view" ${!d.pdf?'disabled':''}>${t('预览原文','Preview')}</button><button type="button" data-pdf="raw" ${d.processing||d.error?'disabled':''}>${t('导出提取原文 JSON','Export extracted text JSON')}</button><button type="button" data-pdf="remove">${t('移除文件 / 取消','Remove / Cancel')}</button></div></article>`).join(''):`<p class="pdf-empty">${t('当前知识库暂无上传文件。','No uploaded files in this knowledge base.')}</p>`;
 }
 function download(value,name){const url=URL.createObjectURL(new Blob([JSON.stringify(value,null,2)],{type:'application/json'})),a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),10000);}
 async function upload(files){
  if(busy)return;const target=courseScope;if(!KnowledgeManager.state().libraries.some(l=>l.id===target))return;busy=true;$('pdfFiles').disabled=true;
  try{for(const file of files){
   if(docs.length>=LIMIT.files||file.size>LIMIT.file||docs.reduce((n,d)=>n+d.size,0)+file.size>LIMIT.total||!file.name.toLowerCase().endsWith('.pdf')||file.name.length>250){status('文件未添加：请检查 PDF 类型、文件名长度或文件大小/数量限制。','File not added: check PDF type, name length, size or count limits.',true);continue;}
   const d={id:crypto.randomUUID(),libraryId:target,name:file.name,size:file.size,pages:[],processing:true,cancelled:false,pdf:null,count:null};docs.push(d);queue();
   try{
    const bytes=new Uint8Array(await file.arrayBuffer());
    if(!new TextDecoder().decode(bytes.slice(0,1024)).includes('%PDF-'))throw Error('invalid');
    d.hash=Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',bytes))).map(n=>n.toString(16).padStart(2,'0')).join('');
    if(d.cancelled)continue;
    if(docs.some(x=>x!==d&&x.libraryId===target&&x.hash===d.hash&&!x.cancelled)){docs.splice(docs.indexOf(d),1);if(courseScope===target)status('这份 PDF 已在当前知识库中，已跳过重复文件。','This PDF is already in this base; duplicate skipped.');continue;}
    if(d.cancelled)continue;
    const lib=await engine();if(d.cancelled)continue;
    // Never execute document JavaScript; render only canvas and plain text.
    d.task=lib.getDocument({data:bytes,isEvalSupported:false,enableXfa:false,useSystemFonts:true,cMapUrl:'vendor/pdfjs/cmaps/',cMapPacked:true,standardFontDataUrl:'vendor/pdfjs/standard_fonts/',wasmUrl:'vendor/pdfjs/wasm/',verbosity:0});
    d.task.onPassword=()=>{d.error=['加密 PDF：请先在本机解锁后再上传。','Encrypted PDF: unlock locally, then select it again.'];d.task.destroy();};
    d.pdf=await d.task.promise;d.count=d.pdf.numPages;
    if(d.count>LIMIT.pages)throw Error('pages');
    const labels=await d.pdf.getPageLabels();
    for(let n=1;n<=d.count;n++){
     if(d.cancelled)break;
     const page=await d.pdf.getPage(n),content=await page.getTextContent();let raw='',lastY=null;
     for(const item of content.items){if(typeof item.str!=='string')continue;const y=item.transform?.[5];if(lastY!==null&&Math.abs(y-lastY)>3&&!raw.endsWith('\n'))raw+='\n';raw+=item.str+(item.hasEOL?'\n':' ');lastY=y;}
     raw=raw.trim();if(raw.length>100000||docs.reduce((s,x)=>s+x.pages.reduce((a,p)=>a+p.text.length,0),0)+raw.length>LIMIT.text)throw Error('text-limit');
     d.pages.push({page:n,label:labels?.[n-1]||String(n),text:raw,ocr:raw.replace(/\s/g,'').length<15});page.cleanup();queue();await new Promise(r=>setTimeout(r,0));
    }
    if(!d.cancelled){d.processing=false;positions.set(d.libraryId,{active:d.id,pageNo:1});if(courseScope===d.libraryId){active=d.id;pageNo=1;queue();await preview();status('提取完成。请选择页面生成摘录草稿，核对后保存。公式、表格、图片和阅读顺序都需要人工检查。','Extraction complete. Create page extracts, review, then save. Verify formulas, tables, images and reading order.');}}
   }catch(e){if(!d.cancelled){d.error=d.error||(e.message==='pages'?['超过 200 页上限。请先拆分 PDF。','Over 200 pages. Split the PDF first.']:e.message==='text-limit'?['原文过大，已停止。请拆分文件后重试。','Extracted text limit reached. Split and retry.']:['处理失败：文件可能损坏或浏览器不支持。原有知识未改变。','Processing failed: damaged file or unsupported browser. Existing notes unchanged.']);d.pdf?.destroy();d.pdf=null;}}
   finally{d.processing=false;queue();}
  }}finally{busy=false;$('pdfFiles').disabled=false;}
 }
 $('pdfFiles').onchange=e=>{const files=[...e.target.files];e.target.value='';upload(files);};
 $('pdfQueue').onclick=async e=>{const b=e.target.closest('[data-pdf]');if(!b)return;const d=visibleDocs().find(v=>v.id===b.closest('[data-doc]').dataset.doc);if(!d)return;
  if(b.dataset.pdf==='view'){active=d.id;pageNo=1;queue();await preview();}
  if(b.dataset.pdf==='raw')download({format:'my-second-brain-pdf-extract',version:1,filename:d.name,sha256:d.hash,pages:d.pages,method:'PDF.js local text extraction; not AI; review required'},d.name+'.extracted.json');
  if(b.dataset.pdf==='remove'){
   const pending=drafts.filter(v=>v.docId===d.id&&!v.saved);if(pending.length&&!confirm(t('移除该 PDF 及其未保存草稿？已经保存的知识不会删除。','Remove this PDF and its unsaved drafts? Saved notes stay.')))return;
   d.cancelled=true;if(active===d.id){active=null;seq++;renderTask?.cancel();renderTask=null;}
   if(!docs.some(v=>v!==d&&v.task===d.task))await d.task?.destroy();docs.splice(docs.indexOf(d),1);for(let i=drafts.length-1;i>=0;i--)if(drafts[i].docId===d.id)drafts.splice(i,1);queue();paintDrafts();await preview();
  }
 };
 async function preview(){
  const token=++seq,d=visibleDocs().find(v=>v.id===active),p=d?.pages[pageNo-1];renderTask?.cancel();renderTask=null;
  $('pdfCanvas').hidden=true;$('pdfRenderError').textContent='';$('pdfPreviewName').textContent=d?.name||t('尚未选择文件','No file selected');$('pdfPage').value=pageNo;$('pdfPage').max=d?.pages.length||1;
  $('pdfPrev').disabled=!p||pageNo<=1;$('pdfNext').disabled=!p||pageNo>=d.pages.length;$('pdfPage').disabled=!p;
  $('pdfPageInfo').textContent=p?t(`PDF 物理页 ${pageNo} / ${d.count} · 文档页标 ${p.label}`,`PDF physical page ${pageNo} / ${d.count} · Page label ${p.label}`):'';
  $('pdfText').textContent=p?.text||t('本页没有可用文本。可能为扫描页、图片页或空白页；需要 OCR 或人工核对。','No usable text. This may be scanned, image-only or blank; OCR or manual review is needed.');
  $('pdfPageWarning').hidden=!p?.ocr;$('pdfPageWarning').textContent=t('本页文字过少，可能为扫描页、图片页或空白页。需要 OCR 或人工核对；不能自动生成可靠草稿。','Too little text: this may be scanned, image-only or blank. OCR or manual review is required; a reliable draft cannot be created.');
  $('pdfMakeDraft').disabled=!p||p.ocr||d.processing||!!d.error;
  if(!p||!d.pdf)return;
  try{const page=await d.pdf.getPage(pageNo);if(token!==seq)return;const unit=page.getViewport({scale:1}),width=Math.min(900,Math.max(240,$('pdfCanvas').parentElement.clientWidth-40)),view=page.getViewport({scale:Math.min(2,width/unit.width)});const canvas=$('pdfCanvas');canvas.width=Math.ceil(view.width);canvas.height=Math.ceil(view.height);renderTask=page.render({canvasContext:canvas.getContext('2d'),viewport:view,annotationMode:0});await renderTask.promise;if(token===seq)canvas.hidden=false;}
  catch(e){if(token===seq&&e.name!=='RenderingCancelledException')$('pdfRenderError').textContent=t('这一页预览失败。请用本机 PDF 阅读器核对原文；提取文字可能仍可用。','Page preview failed. Check the original in a local PDF reader; text may still be available.');}
 }
 $('pdfPrev').onclick=()=>{pageNo--;preview();};$('pdfNext').onclick=()=>{pageNo++;preview();};$('pdfPage').onchange=()=>{const d=docs.find(v=>v.id===active),next=Math.max(1,Math.min(d?.pages.length||1,Math.trunc(Number($('pdfPage').value)||1)));$('pdfPage').value=next;if(next===pageNo)return;pageNo=next;preview();};
 function createDrafts(){
  const d=visibleDocs().find(v=>v.id===active),p=d?.pages[pageNo-1];if(!p||p.ocr||d.processing||d.error)return;
  const chunks=[];for(let i=0;i<p.text.length;i+=LIMIT.chunk)chunks.push(p.text.slice(i,i+LIMIT.chunk));
  if(drafts.length+chunks.length>LIMIT.drafts){status('最多保留 100 张草稿，请先处理现有草稿。','Maximum 100 drafts. Review existing drafts first.',true);return;}
  let added=0;chunks.forEach((raw,i)=>{if(visibleDrafts().some(v=>v.hash===d.hash&&v.page===p.page&&v.part===i))return;
   drafts.push({id:crypto.randomUUID(),docId:d.id,hash:d.hash,source:d.name,page:p.page,label:p.label,part:i,raw,libraryId:$('pdfDestination').value,title:`${d.name} · p.${p.page}${chunks.length>1?' · '+(i+1):''}`,titleEn:'',body:raw,bodyEn:'',category:'PDF 摘录',tags:'PDF',formula:'',example:'',reviewed:false,saved:false});added++;});
  paintDrafts();status(added?`已创建 ${added} 张原文摘录草稿；尚未保存。`:'该页草稿已存在，未重复创建。',added?`${added} extract drafts created; not saved.`:'Drafts for this page already exist; none added.');
 }
 $('pdfMakeDraft').onclick=createDrafts;
 const draftFields={title:['中文标题 / 原文标题 *','Chinese / original title *'],titleEn:['English Title（可选）','English Title (optional)'],body:['中文解释 / 原文摘录 *','Chinese explanation / original extract *'],bodyEn:['English Explanation（可选）','English Explanation (optional)'],category:['分类 *','Category *'],tags:['标签（逗号分隔）','Tags (comma-separated)'],formula:['相关公式（LaTeX，自行核对）','Related formulas (LaTeX; verify manually)'],example:['相关例题（条件与步骤，自行核对）','Related examples (conditions and steps; verify manually)']};
 function paintDrafts(){
  $('pdfDrafts').innerHTML=visibleDrafts().length?visibleDrafts().map(d=>`<article class="pdf-draft ${d.saved?'saved':''}" data-draft="${d.id}"><h3>${d.saved?t('已保存','Saved'):t('等待人工审核 · 原文摘录','Awaiting manual review · Source extract')}</h3><p class="pdf-muted">${esc(d.source)} · PDF p.${d.page} · ${t('片段','Part')} ${d.part+1}</p><button type="button" data-draft-action="source">${t('查看对应原页','View source page')}</button><fieldset ${d.saved?'disabled':''}><label>${t('所属知识库','Knowledge base')}<select data-field="libraryId">${KnowledgeManager.state().libraries.map(l=>`<option value="${esc(l.id)}" ${l.id===d.libraryId?'selected':''}>${esc(lang==='en'&&l.nameEn?l.nameEn:l.name)}</option>`).join('')}</select></label>${Object.entries(draftFields).map(([key,label])=>`<label>${t(...label)}${['body','bodyEn','formula','example'].includes(key)?`<textarea data-field="${key}" maxlength="${key==='formula'?2000:key==='example'?3000:6000}">${esc(d[key])}</textarea>`:`<input data-field="${key}" maxlength="${key==='tags'?1000:200}" value="${esc(d[key])}">`}</label>`).join('')}<p class="pdf-warn">${t('公式、表格、图片及语义尚未自动理解。请对照原页，勿将摘录当作正确的 AI 解释。','Formulas, tables, images and meaning have not been interpreted by AI. Verify against the page.')}</p><label class="review-check"><input data-field="reviewed" type="checkbox" ${d.reviewed?'checked':''}>${t('我已核对原文、来源页码及目标知识库，确认保存此条知识。','I reviewed the source, page and destination and confirm saving this note.')}</label></fieldset><details><summary>${t('保留的原文片段（不可改写）','Preserved source extract (read-only)')}</summary><pre class="pdf-original">${esc(d.raw)}</pre></details><div class="pdf-actions"><button type="button" data-draft-action="preview">${t('预览卡片','Preview card')}</button><button type="button" data-draft-action="save" class="primary" ${d.saved?'disabled':''}>${t('确认保存此条','Confirm and save')}</button><button type="button" data-draft-action="delete">${d.saved?t('从草稿区移除','Dismiss from drafts'):t('删除草稿','Delete draft')}</button></div><div class="draft-preview" hidden></div></article>`).join(''):`<p class="pdf-empty">${t('暂无草稿。预览 PDF，选中一页后点击“当前页 → 摘录草稿”。','No drafts. Preview a PDF page and select “Current page → Extract drafts”.')}</p>`;
 }
 $('pdfDrafts').addEventListener('input',e=>{
  const f=e.target.dataset.field;if(!f)return;const d=visibleDrafts().find(v=>v.id===e.target.closest('[data-draft]').dataset.draft);if(!d||d.saved)return;
  if(f==='libraryId'&&e.target.value!==d.libraryId){
   const target=e.target.value,origin=docs.find(v=>v.id===d.docId);if(!origin||!KnowledgeManager.state().libraries.some(l=>l.id===target))return;
   let peer=docs.find(v=>v.libraryId===target&&v.hash===origin.hash&&!v.error&&!v.processing);
   if(!peer){if(docs.length>=LIMIT.files){e.target.value=d.libraryId;status('文件数已到上限，草稿未转移。请先处理其他上传文件。','File limit reached. Draft was not moved; review other uploads first.',true);return;}peer={...origin,id:crypto.randomUUID(),libraryId:target};docs.push(peer);}
   d.docId=peer.id;d.libraryId=target;d.reviewed=false;paintDrafts();queue();status('草稿已转移到所选知识库，原课程中的其他文件和草稿保留。切换目标课程后可继续审核。','Draft moved to the selected base. Other source files and drafts stay. Switch destination to continue review.');return;
  }
  d[f]=f==='reviewed'?e.target.checked:e.target.value;if(f!=='reviewed'){d.reviewed=false;e.target.closest('article').querySelector('[data-field=reviewed]').checked=false;}
 });
 function body(d,english=false){const text=english?d.bodyEn:d.body;return [text,d.formula&&`\n${english?'Formulas (reviewed manually)':'公式（人工核对）'}\n${d.formula}`,d.example&&`\n${english?'Related examples (reviewed manually)':'相关例题（人工核对）'}\n${d.example}`,`\n${english?'Source extract / local PDF extraction, not AI':'原文片段 / 本机 PDF 提取，非 AI 生成'}\n${d.source} · PDF p.${d.page} · label ${d.label} · part ${d.part+1}\nSHA-256: ${d.hash}\n${d.raw}`].filter(Boolean).join('\n');}
 function backup(){const raw=KnowledgeStore.rawCurrent();if(raw!==null&&localStorage.getItem(BACKUP)===null){localStorage.setItem(BACKUP,raw);if(localStorage.getItem(BACKUP)!==raw)throw Error('backup');}}
 $('pdfDrafts').onclick=async e=>{
  const b=e.target.closest('[data-draft-action]');if(!b)return;const article=b.closest('[data-draft]'),d=visibleDrafts().find(v=>v.id===article.dataset.draft);if(!d)return;
  if(b.dataset.draftAction==='source'){active=d.docId;pageNo=d.page;queue();await preview();$('pdfPreviewTitle').scrollIntoView({behavior:'instant'});}
  if(b.dataset.draftAction==='delete'){if(!d.saved&&!confirm(t('删除此未保存草稿？','Delete this unsaved draft?')))return;drafts.splice(drafts.indexOf(d),1);paintDrafts();}
  if(b.dataset.draftAction==='preview'){const box=article.querySelector('.draft-preview');box.hidden=false;box.textContent=(lang==='en'&&d.titleEn?d.titleEn:d.title)+'\n\n'+body(d,lang==='en'&&!!d.bodyEn);window.renderMathInElement?.(box,{throwOnError:false,trust:false,maxExpand:500,maxSize:15,delimiters:[{left:'$$',right:'$$',display:true},{left:'\\(',right:'\\)',display:false},{left:'\\[',right:'\\]',display:true}]});}
  if(b.dataset.draftAction==='save'&&!d.saved){
   if(!d.reviewed){status('请先核对并勾选审核确认。草稿尚未保存。','Review and check the confirmation box first. Draft not saved.',true);return;}
   try{const state=KnowledgeStore.read(),lib=state.libraries.find(l=>l.id===d.libraryId);if(!lib)throw Error('missing base');const now=new Date().toISOString(),n=KnowledgeStore.note({id:'pdf_'+crypto.randomUUID(),title:d.title,body:body(d),titleEn:d.titleEn,bodyEn:d.bodyEn?body(d,true):'',course:lib.name,libraryId:lib.id,category:d.category,tags:d.tags.split(/[,，]/).map(v=>v.trim()).filter(Boolean),source:d.source,sourcePage:`PDF p.${d.page} · label ${d.label} · part ${d.part+1}`,createdAt:now,updatedAt:now});
    const exact=state.items.find(v=>v.libraryId===n.libraryId&&v.source===n.source&&v.sourcePage===n.sourcePage&&v.title===n.title&&v.body===n.body&&v.titleEn===n.titleEn&&v.bodyEn===n.bodyEn);
    if(exact){status('已有相同知识，未重复保存，也未覆盖已有笔记。','Identical knowledge exists. Nothing duplicated or overwritten.');return;}
    if(state.items.some(v=>v.libraryId===n.libraryId&&v.source===n.source&&v.sourcePage===n.sourcePage)&&!confirm(t('同一来源页已有知识。保留原笔记，并另外新增这一条？','Notes from this source page already exist. Keep them and add this as a separate note?')))return;
    backup();KnowledgeManager.apply(current=>{current.items.push(n);return current;});d.saved=true;paintDrafts();status('已保存到所选知识库。可以搜索、编辑并导出 JSON；建议现在备份。','Saved to the selected base. Search, edit and export JSON are available; back up now.');
   }catch(err){status('保存失败：请检查必填字段、目标知识库、标签或浏览器空间。已有知识不覆盖，草稿保留。','Save failed: check required fields, destination, tags or browser space. Existing notes unchanged; draft retained.',true);}
  }
 };
 function refresh(){window.dispatchEvent(new Event('pdf-context-change'));Object.entries(words).forEach(([id,pair])=>$(id).textContent=t(...pair));$('pdfPreviousBackup').textContent=t('导出 PDF 入库前快照','Export pre-PDF snapshot');nav.textContent=t('AI PDF 智能整理','AI PDF workspace');options($('pdfDestination'),courseScope||LibraryUI.selected());$('pdfHeading').textContent=t('PDF 课程资料','Course PDF materials')+' · '+LibraryUI.name(courseScope||LibraryUI.selected());$('pdfStatus').textContent=t(...message);queue();paintDrafts();if(!section.hidden)preview();}
 const previous=render;render=()=>{previous();refresh();};
 window.addEventListener('beforeunload',e=>{if(drafts.some(d=>!d.saved)){e.preventDefault();e.returnValue='';}});
 window.addEventListener('storage',e=>{if(e.key===KnowledgeStore.KEY)refresh();});
 refresh();
 function transferLibrary(from,to){for(const d of docs)if(d.libraryId===from)d.libraryId=to;for(const d of drafts)if(d.libraryId===from){d.libraryId=to;d.reviewed=false;}if(courseScope===from)courseScope=to;positions.delete(from);refresh();}
 return {open,close,refresh,transferLibrary,
  aiContext:()=>{const d=visibleDocs().find(v=>v.id===active);return d&&!d.processing&&!d.error?{libraryId:d.libraryId,fileId:d.id,fileHash:d.hash,source:d.name,pages:d.pages.map(p=>({...p}))}:null;},
  hasSource:(id,lib,hash)=>docs.some(d=>d.id===id&&d.libraryId===lib&&d.hash===hash&&!d.cancelled&&!d.error),
  showSource:(id,lib,page)=>{const d=docs.find(d=>d.id===id&&d.libraryId===lib);if(d&&d.pages[page-1]){open(lib);active=id;pageNo=page;queue();preview();}},
 currentScope:()=>courseScope,limits:Object.freeze(LIMIT),capabilities:Object.freeze({pdf:true,ai:false,ocr:false}),backupKey:BACKUP};
})();
