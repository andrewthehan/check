var S=t=>{throw TypeError(t)};var k=(t,e,a)=>e.has(t)||S("Cannot "+a);var m=(t,e,a)=>(k(t,e,"read from private field"),a?a.call(t):e.get(t)),p=(t,e,a)=>e.has(t)?S("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,a);import{p as x,l as w,a as d}from"./props.ntZszKXP.js";import{av as C,af as z,h as O,y as I,aw as L,C as J,a9 as E,p as N,t as R,a as j}from"./index-client.DkYvC1ta.js";import{l as U,f as l,a as P,t as F}from"./disclose-version.D9N9JB02.js";import{i as K}from"./legacy.D806fZ3c.js";import{r as T,b as o,a as A,d as B}from"./utils.DPCNPhKX.js";function H(t,e,a=e){var s=C();U(t,"input",()=>{var r=h(t)?v(t.value):t.value;a(r),s&&r!==(r=e())&&(t.value=r??"")}),z(()=>{var r=e();if(O&&t.defaultValue!==t.value){a(h(t)?v(t.value):t.value);return}h(t)&&r===v(t.value)||t.type==="date"&&!r&&!t.value||r!==t.value&&(t.value=r??"")})}function h(t){var e=t.type;return e==="number"||e==="range"}function v(t){return t===""?null:+t}var c;class Q{constructor(e,a,s){p(this,c,L());this.key=e,this.serializer=s;{const r=localStorage.getItem(e);r?this.value=this.serializer.deserialize(r):this.value=a}I(()=>{localStorage.setItem(this.key,this.serializer.serialize(this.value))})}get value(){return J(m(this,c))}set value(e){E(m(this,c),x(e))}}c=new WeakMap;function V(t,e,a){return new Q(t,e,a)}class W{serialize(e){return JSON.stringify(e)}deserialize(e){return JSON.parse(e,(a,s)=>a.endsWith("Date")&&s!=null?new Date(s):s)}}const g="checklists";function ae(){return V(g,[],new W)}function ne(){const t=b(),e=new Blob([JSON.stringify(t)],{type:"application/json"}),a=URL.createObjectURL(e),s=document.createElement("a");s.href=a,s.download="checklists.json",s.click(),URL.revokeObjectURL(a)}function se(t){return new Promise(e=>{const a=new FileReader;a.onload=()=>{try{const r=JSON.parse(a.result).filter(u=>{try{return Y(u),!0}catch(f){return alert("Error importing checklist: "+f.message),!1}});e(r)}catch(s){alert("Error importing data: "+s.message),e([])}},a.readAsText(t)})}function b(){const t=localStorage.getItem(g);return t==null?[]:JSON.parse(t)}function D(t){localStorage.setItem(g,JSON.stringify(t))}function y(t){return{name:t.name.trim(),description:t.description.trim(),items:t.items.map(e=>({name:e.name.trim(),completeDate:e.completeDate})),createDate:t.createDate,updateDate:t.updateDate}}function Y(t){const e=b();if(t=y(t),e.some(a=>a.name===t.name))throw new Error(`Checklist "${t.name}" already exists`);e.push(t),D(e)}function ie(t){const e=b();t=t.trim();const a=e.findIndex(s=>s.name===t);e.splice(a,1),D(e)}function re(t){var e,a,s;return q({name:((e=t.get("name"))==null?void 0:e.trim())??"",description:((a=t.get("description"))==null?void 0:a.trim())??"",items:((s=t.get("items"))==null?void 0:s.split(",").map(r=>r.trim()))??[]})}function q({name:t,description:e="",items:a=[]}){return y({name:t,description:e,items:a.map(s=>({name:s,completeDate:null})),createDate:new Date,updateDate:new Date})}function le(t,e){const a=new URLSearchParams;return e=y(e),a.set("name",e.name),a.set("description",e.description),a.set("items",e.items.map(s=>s.name).join(",")),`${t}/new?${a.toString()}`}var G=F("<input>");function oe(t,e){const a=w(e,["children","$$slots","$$events","$$legacy"]),s=w(a,["class","value","readonly"]);N(e,!1);let r=d(e,"class",8,void 0),u=d(e,"value",12,void 0),f=d(e,"readonly",8,void 0);K();var i=G();T(i);let _;R(()=>_=A(i,_,{class:B("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r()),readonly:f(),...s})),H(i,u),l("blur",i,function(n){o.call(this,e,n)}),l("change",i,function(n){o.call(this,e,n)}),l("click",i,function(n){o.call(this,e,n)}),l("focus",i,function(n){o.call(this,e,n)}),l("focusin",i,function(n){o.call(this,e,n)}),l("focusout",i,function(n){o.call(this,e,n)}),l("keydown",i,function(n){o.call(this,e,n)}),l("keypress",i,function(n){o.call(this,e,n)}),l("keyup",i,function(n){o.call(this,e,n)}),l("mouseover",i,function(n){o.call(this,e,n)}),l("mouseenter",i,function(n){o.call(this,e,n)}),l("mouseleave",i,function(n){o.call(this,e,n)}),l("mousemove",i,function(n){o.call(this,e,n)}),l("paste",i,function(n){o.call(this,e,n)}),l("input",i,function(n){o.call(this,e,n)}),l("wheel",i,function(n){o.call(this,e,n)},void 0,!0),P(t,i),j()}export{oe as I,ae as a,le as b,Y as c,ne as e,se as i,V as l,q as n,re as p,ie as r};