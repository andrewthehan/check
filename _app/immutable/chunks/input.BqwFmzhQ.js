var p=t=>{throw TypeError(t)};var D=(t,e,a)=>e.has(t)||p("Cannot "+a);var m=(t,e,a)=>(D(t,e,"read from private field"),a?a.call(t):e.get(t)),S=(t,e,a)=>e.has(t)?p("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,a);import{a as x,l as w,p as d}from"./props.D_esEMjf.js";import{ah as O,$ as z,h as C,m as I,ai as L,w as J,O as N,p as E,t as R,a as j}from"./index-client.RmORvUAM.js";import{l as U,h as l,a as P,t as F}from"./disclose-version.CXInryEC.js";import{i as K}from"./legacy.BTxjFtHJ.js";import{r as T,d as o,a as A,c as B}from"./Icon.C8YOjdfF.js";function H(t,e,a=e){var r=O();U(t,"input",()=>{var i=h(t)?v(t.value):t.value;a(i),r&&i!==(i=e())&&(t.value=i??"")}),z(()=>{var i=e();if(C&&t.defaultValue!==t.value){a(h(t)?v(t.value):t.value);return}h(t)&&i===v(t.value)||t.type==="date"&&!i&&!t.value||i!==t.value&&(t.value=i??"")})}function h(t){var e=t.type;return e==="number"||e==="range"}function v(t){return t===""?null:+t}var c;class Q{constructor(e,a,r){S(this,c,L());this.key=e,this.serializer=r;{const i=localStorage.getItem(e);i?this.value=this.serializer.deserialize(i):this.value=a}I(()=>{localStorage.setItem(this.key,this.serializer.serialize(this.value))})}get value(){return J(m(this,c))}set value(e){N(m(this,c),x(e))}}c=new WeakMap;function V(t,e,a){return new Q(t,e,a)}class W{serialize(e){return JSON.stringify(e)}deserialize(e){return JSON.parse(e,(a,r)=>a.endsWith("Date")&&r!=null?new Date(r):r)}}const g="checklists";function ae(){return V(g,[],new W)}function ne(){const t=b();if(t.length===0){alert("No checklists to export");return}const e=new Blob([JSON.stringify(t)],{type:"application/json"}),a=URL.createObjectURL(e),r=document.createElement("a");r.href=a,r.download="checklists.json",r.click(),URL.revokeObjectURL(a)}function re(t){return new Promise(e=>{const a=new FileReader;a.onload=()=>{try{const i=JSON.parse(a.result).filter(u=>{try{return Y(u),!0}catch(f){return alert("Error importing checklist: "+f.message),!1}});e(i)}catch(r){alert("Error importing data: "+r.message),e([])}},a.readAsText(t)})}function b(){const t=localStorage.getItem(g);return t==null?[]:JSON.parse(t)}function k(t){localStorage.setItem(g,JSON.stringify(t))}function y(t){return{name:t.name.trim(),description:t.description.trim(),items:t.items.map(e=>({name:e.name.trim(),completeDate:e.completeDate})),createDate:t.createDate,updateDate:t.updateDate}}function Y(t){const e=b();if(t=y(t),e.some(a=>a.name===t.name))throw new Error(`Checklist "${t.name}" already exists`);e.push(t),k(e)}function se(t){const e=b();t=t.trim();const a=e.findIndex(r=>r.name===t);e.splice(a,1),k(e)}function ie(t){var e,a,r;return q({name:((e=t.get("name"))==null?void 0:e.trim())??"",description:((a=t.get("description"))==null?void 0:a.trim())??"",items:((r=t.get("items"))==null?void 0:r.split(",").map(i=>i.trim()))??[]})}function q({name:t,description:e="",items:a=[]}){return y({name:t,description:e,items:a.map(r=>({name:r,completeDate:null})),createDate:new Date,updateDate:new Date})}function le(t,e){const a=new URLSearchParams;return e=y(e),a.set("name",e.name),a.set("description",e.description),a.set("items",e.items.map(r=>r.name).join(",")),`${t}/new?${a.toString()}`}var G=F("<input>");function oe(t,e){const a=w(e,["children","$$slots","$$events","$$legacy"]),r=w(a,["class","value","readonly"]);E(e,!1);let i=d(e,"class",8,void 0),u=d(e,"value",12,void 0),f=d(e,"readonly",8,void 0);K();var s=G();T(s);let _;R(()=>_=A(s,_,{class:B("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",i()),readonly:f(),...r})),H(s,u),l("blur",s,function(n){o.call(this,e,n)}),l("change",s,function(n){o.call(this,e,n)}),l("click",s,function(n){o.call(this,e,n)}),l("focus",s,function(n){o.call(this,e,n)}),l("focusin",s,function(n){o.call(this,e,n)}),l("focusout",s,function(n){o.call(this,e,n)}),l("keydown",s,function(n){o.call(this,e,n)}),l("keypress",s,function(n){o.call(this,e,n)}),l("keyup",s,function(n){o.call(this,e,n)}),l("mouseover",s,function(n){o.call(this,e,n)}),l("mouseenter",s,function(n){o.call(this,e,n)}),l("mouseleave",s,function(n){o.call(this,e,n)}),l("mousemove",s,function(n){o.call(this,e,n)}),l("paste",s,function(n){o.call(this,e,n)}),l("input",s,function(n){o.call(this,e,n)}),l("wheel",s,function(n){o.call(this,e,n)},void 0,!0),P(t,s),j()}export{oe as I,ae as a,le as b,Y as c,ne as e,re as i,V as l,q as n,ie as p,se as r};