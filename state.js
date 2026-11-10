export const ratings = ['S','A','B','C','D','E','F'];
export const colors = ['#ff8486','#ffc383','#fff18b','#a0e88a','#84bcf1','#a294ed','#e9a0e9'];
export function fresh(){return {v:1,title:'My tier list',items:[]};}
export function validate(s){if(!s||s.v!==1||typeof s.title!=='string'||s.title.length>120||!Array.isArray(s.items)||s.items.length>500)throw Error('Invalid list');return {v:1,title:s.title,items:s.items.map(i=>{if(!i||typeof i.name!=='string'||!i.name.trim()||i.name.length>160||typeof i.notes!=='string'||i.notes.length>500||!ratings.includes(i.tier))throw Error('Invalid item');return {name:i.name,notes:i.notes,tier:i.tier};})};}
export function encode(s){const bytes=new TextEncoder().encode(JSON.stringify(validate(s)));return btoa(Array.from(bytes,b=>String.fromCharCode(b)).join('')).replaceAll('+','-').replaceAll('/','_').replace(/=+$/,'');}
export function decode(token){if(token.length>1000000)throw Error('Link too large');return validate(JSON.parse(new TextDecoder('utf-8',{fatal:true}).decode(Uint8Array.from(atob(token.replaceAll('-','+').replaceAll('_','/')),c=>c.charCodeAt(0)))));}
