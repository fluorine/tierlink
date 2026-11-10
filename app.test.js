import {test} from 'node:test';
import assert from 'node:assert/strict';
import {decode} from './state.js';

test('editing title, adding, editing, moving and deleting update the address', async () => {
  class Element {
    constructor(){this.children=[];this.value='';this.dataset={};this.style={};this.classList={add(){},remove(){}};this.open=false;}
    append(...items){this.children.push(...items);}
    replaceChildren(...items){this.children=[...items];}
    setAttribute(){} focus(){} showModal(){this.open=true;} close(){this.open=false;}
  }
  const ids=Object.fromEntries(['status','title','board','edit-tier','edit-name','editor-heading','delete','edit-rating','editor','cancel','edit','new','share','link-text','link-dialog','close-link'].map(id=>[id,new Element()]));
  const guide=new Element();
  globalThis.document={getElementById:id=>ids[id],createElement:()=>new Element(),querySelector:()=>guide,querySelectorAll:()=>[]};
  globalThis.location=new URL('https://example.com/tierlink/');
  globalThis.history={replaceState(_a,_b,url){globalThis.location=new URL(url,globalThis.location.href);}};
  globalThis.window={addEventListener(){}};
  globalThis.confirm=()=>true;
  await import('./app.js');
  const snapshot=()=>decode(globalThis.location.hash.slice(4));
  ids.title.value='My ranking';ids.title.oninput();
  assert.equal(snapshot().title,'My ranking');
  ids.board.children[0].children[2].onclick();ids['edit-name'].value='Coffee';ids.edit.onsubmit({preventDefault(){}});
  assert.equal(snapshot().items[0].tier,'S');
  ids.board.children[0].children[1].children[0].onclick();ids['edit-name'].value='Tea';ids['edit-tier'].value='B';ids.edit.onsubmit({preventDefault(){}});
  assert.deepEqual(snapshot().items[0],{name:'Tea',notes:'',tier:'B'});
  const card=ids.board.children[2].children[1].children[0];card.ondragstart({dataTransfer:{setData(){}}});ids.board.children[1].children[1].ondrop({preventDefault(){}});
  assert.equal(snapshot().items[0].tier,'A');
  ids.board.children[1].children[1].children[0].onclick();ids.delete.onclick();
  assert.equal(snapshot().items.length,0);
  ids.new.onclick();assert.equal(globalThis.location.href,'https://example.com/tierlink/');
});
