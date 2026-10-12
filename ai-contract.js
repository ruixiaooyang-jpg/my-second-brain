/* Shared browser/server validation. Model output is untrusted, never executable. */
(function(root,factory){const api=factory();if(typeof module==='object')module.exports=api;else root.AIContract=api;})(globalThis,()=>{
 'use strict';
 const LIMIT={pages:3,text:12000,cards:5,response:64000};
 const fail=()=>{throw Error('invalid_ai_payload');};
 const obj=(v,keys)=>{if(!v||typeof v!=='object'||Array.isArray(v)||Object.keys(v).some(k=>!keys.includes(k)))fail();};
 const str=(v,max=200)=>{if(typeof v!=='string'||!v.trim()||v.length>max)fail();return v;};
 const id=v=>{str(v,100);if(!/^[A-Za-z0-9_-]+$/.test(v))fail();return v;};
 function request(r){
  obj(r,['requestId','userId','libraryId','fileId','fileHash','source','pages','consent','provider','cloudConsent']);
  for(const k of ['requestId','userId','libraryId','fileId'])id(r[k]);
  if(!/^[a-f0-9]{64}$/.test(r.fileHash)||!['mock','gemini'].includes(r.provider)||r.consent!==true)fail();str(r.source,200);if(r.provider==='gemini'&&r.cloudConsent!=='gemini-text-v1')fail();
  if(!Array.isArray(r.pages)||r.pages.length<1||r.pages.length>LIMIT.pages)fail();let total=0;const seen=new Set();
  for(const p of r.pages){obj(p,['page','label','text']);if(!Number.isInteger(p.page)||p.page<1||p.page>200||seen.has(p.page))fail();seen.add(p.page);str(p.label,100);str(p.text,LIMIT.text);total+=p.text.length;}
  if(total>LIMIT.text)fail();return r;
 }
 function result(v,r){
  request(r);if(JSON.stringify(v).length>LIMIT.response)fail();obj(v,['version','provider','model','requestId','userId','libraryId','fileId','fileHash','source','cards']);
  if(v.version!==1||v.provider!==r.provider||(r.provider==='mock'?v.model!=='mock-fixture-v1':!['gemini-2.5-flash-lite','gemini-2.5-flash'].includes(v.model)))fail();
  for(const k of ['requestId','userId','libraryId','fileId','fileHash','source'])if(v[k]!==r[k])fail();
  if(!Array.isArray(v.cards)||v.cards.length<1||v.cards.length>LIMIT.cards)fail();
  for(const c of v.cards){
   obj(c,['title','titleEn','body','bodyEn','summary','summaryEn','formula','formulaEn','example','exampleEn','category','tags','references','warnings']);
   for(const k of ['title','titleEn','category'])str(c[k],160);
   for(const k of ['body','bodyEn','summary','summaryEn','formula','formulaEn','example','exampleEn'])str(c[k],2000);
   if(!Array.isArray(c.tags)||c.tags.length>10||!Array.isArray(c.warnings)||c.warnings.length<1||c.warnings.length>6)fail();c.tags.forEach(x=>str(x,40));c.warnings.forEach(x=>str(x,300));
   if(!Array.isArray(c.references)||!c.references.length||c.references.length>3)fail();const pages=new Set();
   for(const ref of c.references){obj(ref,r.provider==='mock'?['page','quote']:['page','quote','verification']);const p=r.pages.find(p=>p.page===ref.page);str(ref.quote,500);if(!Number.isInteger(ref.page)||ref.page<1||ref.page>200||pages.has(ref.page))fail();const verified=!!p&&p.text.includes(ref.quote);if(r.provider==='mock'?!verified:ref.verification!==(verified?'verified':'unverified'))fail();pages.add(ref.page);}
  }
  return v;
 }
 function mock(r){
  request(r);const {requestId,userId,libraryId,fileId,fileHash,source}=r;
  return {version:1,provider:'mock',model:'mock-fixture-v1',requestId,userId,libraryId,fileId,fileHash,source,cards:[{
   title:'[Mock] 知识卡片流程示例',titleEn:'[Mock] Knowledge workflow example',
   body:'这是固定的 Mock 测试内容，不是 AI 理解或翻译。下方证据来自你选择的页面，请自行整理解释。',bodyEn:'Fixed Mock fixture, not AI understanding or translation. Evidence below is copied from your selected pages; write your own explanation.',
   summary:'[Mock] 所选页面摘要占位：本阶段未总结讲义。',summaryEn:'[Mock] Selected-page summary placeholder. No lecture summary was generated.',
   formula:'测试公式（不是从讲义识别）：\\(x_1+x_2\\le 10\\)。x₁、x₂ 是演示变量，10 是演示上限。',formulaEn:'Fixture formula, not extracted: \\(x_1+x_2\\le 10\\). x₁ and x₂ are demo variables; 10 is a demo bound.',
   example:'[Mock] 例题步骤占位，请核对原文后编辑；未自动解题。',exampleEn:'[Mock] Example placeholder; edit against the source. No problem was solved.',
   category:'Mock / 流程测试',tags:['Mock'],references:r.pages.map(p=>({page:p.page,quote:p.text.slice(0,200)})),warnings:['Mock fixture only / 仅模拟测试；公式、解释及翻译均未通过真实 AI 验证。']
  }]};
 }
 return Object.freeze({LIMIT,request,result,mock});
});
