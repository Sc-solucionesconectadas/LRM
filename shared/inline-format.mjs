import {escapeHtml,richText} from './html.mjs';
export function formatted(record,path,legacy=false){
  const value=path.split('.').reduce((item,key)=>item?.[key],record),text=String(value??''),runs=record.formatting?.[path];
  if(!runs?.length)return legacy?richText(text):escapeHtml(text);
  let previous=0,html='';
  for(const [start,end,mark] of runs){
    if(!Number.isInteger(start)||!Number.isInteger(end)||start<previous||end<=start||end>text.length||![1,2,3].includes(mark))throw new Error('Formato de texto inválido en '+path);
    html+=escapeHtml(text.slice(previous,start));let part=escapeHtml(text.slice(start,end));if(mark&2)part='<em>'+part+'</em>';if(mark&1)part='<strong>'+part+'</strong>';html+=part;previous=end;
  }
  return html+escapeHtml(text.slice(previous));
}
