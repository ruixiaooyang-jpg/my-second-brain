/* Read-only projection of static course nodes plus persisted personal cards. */
window.LiveGraphData=(()=>{
 const base=()=>ETF5248Catalog.entries.filter(e=>['concept','case'].includes(e.kind));
 function nodes(libraryId){const state=KnowledgeManager.state(),map=new Map();
  if(libraryId==='kb_etf5248'&&state.libraries.some(l=>l.id===libraryId))for(const e of base())map.set(e.id,{...e,related:[...e.related]});
  for(const n of state.items.filter(n=>n.libraryId===libraryId))if(!map.has(n.id))map.set(n.id,{id:n.id,kind:n.contentType||'note',title:[n.title,n.titleEn||n.title],body:[n.body,n.bodyEn||n.body],related:[...(n.relatedIds||[])],lectures:[...new Set([n.category,...n.tags].map(v=>/^Lecture\s+(\d+)$/i.exec(v)?.[1]).filter(Boolean).map(Number))],personal:n});
  // Relations are undirected in the view; never infer from text or mutate records.
  for(const e of map.values())e.related=e.related.filter(id=>map.has(id)&&id!==e.id);
  for(const e of map.values())for(const id of e.related)if(!map.get(id).related.includes(e.id))map.get(id).related.push(e.id);
  return [...map.values()];
 }
 return {nodes};
})();
window.NoteGraphFields=(()=>{
 const $=id=>document.getElementById(id);let editing=null,preserved=[];
 const box=document.createElement('fieldset');box.id='noteGraphFields';box.innerHTML='<legend id="noteGraphLegend"></legend><label><span id="noteTypeLabel"></span><select id="note-contentType"></select></label><p id="noteRelationHelp" class="muted"></p><input id="relationSearch" type="search"><div id="noteRelations"></div><p id="unavailableRelations" class="muted"></p>';
 $('noteForm').querySelector('.note-actions').before(box);
 function labels(){const selected=$('note-contentType').value||'note';$('noteGraphLegend').textContent=t('知识图谱','Knowledge graph');$('noteTypeLabel').textContent=t('内容类型','Content type');$('note-contentType').replaceChildren(...[['note',t('笔记','Note')],['concept',t('概念','Concept')],['case',t('案例','Case')],['practice',t('练习','Practice')]].map(([v,n])=>new Option(n,v)));$('note-contentType').value=selected;$('noteRelationHelp').textContent=t('勾选同一知识库中的关联，保存后加入图谱。不会自动猜测关系。','Choose related entries in this base. Saving confirms these graph links; no relations are inferred.');$('relationSearch').placeholder=t('查找可关联知识…','Find related entries…');$('relationSearch').setAttribute('aria-label',$('relationSearch').placeholder);}
 function candidates(chosen=[]){const all=LiveGraphData.nodes($('note-libraryId').value).filter(e=>e.id!==editing),ids=new Set(all.map(e=>e.id));preserved=chosen.filter(id=>!ids.has(id));$('noteRelations').replaceChildren(...all.map(e=>{const label=document.createElement('label'),input=document.createElement('input');input.type='checkbox';input.value=e.id;input.checked=chosen.includes(e.id);label.dataset.search=e.title.join(' ').toLowerCase();label.append(input,document.createTextNode(lang==='en'?e.title[1]:e.title[0]));return label;}));$('unavailableRelations').textContent=preserved.length?t(`${preserved.length} 条关联目标不在此知识库或尚未导入：保留记录，暂不连线。`,`${preserved.length} targets are unavailable in this base: preserved, not drawn.`):'';filter();}
 function chosen(){return [...preserved,...[...$('noteRelations').querySelectorAll('input:checked')].map(e=>e.value)];}
 function filter(){const q=$('relationSearch').value.toLowerCase();for(const el of $('noteRelations').children)el.hidden=!el.dataset.search.includes(q);}
 $('relationSearch').oninput=filter;$('note-libraryId').addEventListener('change',()=>candidates(chosen()));
 function open(n){editing=n?.id||null;$('relationSearch').value='';labels();$('note-contentType').value=n?.contentType||'note';candidates(n?.relatedIds||[]);}
 function refresh(){if(!$('noteForm').hidden){const ids=chosen();labels();candidates(ids);}}
 return {open,refresh,value:()=>({contentType:$('note-contentType').value,relatedIds:chosen()})};
})();
