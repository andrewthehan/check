import{d as y,a as m,h as i}from"./disclose-version.CXInryEC.js";import{i as U}from"./legacy.BTxjFtHJ.js";import{p as q,f as x,a as C,t as I,N as V,w as G,I as M}from"./index-client.RmORvUAM.js";import{e as j,d as e,s as P,f as D,a as R,c as F,b as H}from"./Icon.C8YOjdfF.js";import{l as N,p as d,i as J,b as S,s as K}from"./props.D_esEMjf.js";function L(f,t){const u=[];return t.builders.forEach(o=>{const r=o.action(f);r&&u.push(r)}),{destroy:()=>{u.forEach(o=>{o.destroy&&o.destroy()})}}}function Q(f){const t={};return f.forEach(u=>{Object.keys(u).forEach(o=>{o!=="action"&&(t[o]=u[o])})}),t}function T(f,t){const u=N(t,["children","$$slots","$$events","$$legacy"]),o=N(u,["href","type","builders","el"]);q(t,!1);let r=d(t,"href",24,()=>{}),w=d(t,"type",24,()=>{}),v=d(t,"builders",24,()=>[]),b=d(t,"el",28,()=>{});const k={"data-button-root":""};U();var l=y(),B=x(l);J(B,()=>v()&&v().length,g=>{var h=y(),A=x(h);const c=M(()=>Q(v()));j(A,()=>r()?"a":"button",!1,(s,z)=>{S(s,n=>b(n),()=>b()),D(s,(n,O)=>L(n,O),()=>({builders:v()}));let _;I(()=>_=R(s,_,{type:r()?void 0:w(),href:r(),tabindex:"0",...G(c),...o,...k},void 0,s.namespaceURI===V,s.nodeName.includes("-"))),i("click",s,function(n){e.call(this,t,n)}),i("change",s,function(n){e.call(this,t,n)}),i("keydown",s,function(n){e.call(this,t,n)}),i("keyup",s,function(n){e.call(this,t,n)}),i("mouseenter",s,function(n){e.call(this,t,n)}),i("mouseleave",s,function(n){e.call(this,t,n)}),i("mousedown",s,function(n){e.call(this,t,n)}),i("pointerdown",s,function(n){e.call(this,t,n)}),i("mouseup",s,function(n){e.call(this,t,n)}),i("pointerup",s,function(n){e.call(this,t,n)});var E=y(),a=x(E);P(a,t,"default",{},null),m(z,E)}),m(g,h)},g=>{var h=y(),A=x(h);j(A,()=>r()?"a":"button",!1,(c,s)=>{S(c,a=>b(a),()=>b());let z;I(()=>z=R(c,z,{type:r()?void 0:w(),href:r(),tabindex:"0",...o,...k},void 0,c.namespaceURI===V,c.nodeName.includes("-"))),i("click",c,function(a){e.call(this,t,a)}),i("change",c,function(a){e.call(this,t,a)}),i("keydown",c,function(a){e.call(this,t,a)}),i("keyup",c,function(a){e.call(this,t,a)}),i("mouseenter",c,function(a){e.call(this,t,a)}),i("mouseleave",c,function(a){e.call(this,t,a)}),i("mousedown",c,function(a){e.call(this,t,a)}),i("pointerdown",c,function(a){e.call(this,t,a)}),i("mouseup",c,function(a){e.call(this,t,a)}),i("pointerup",c,function(a){e.call(this,t,a)});var _=y(),E=x(_);P(E,t,"default",{},null),m(s,_)}),m(g,h)}),m(f,l),C()}function tt(f,t){const u=N(t,["children","$$slots","$$events","$$legacy"]),o=N(u,["class","variant","size","builders"]);q(t,!1);let r=d(t,"class",8,void 0),w=d(t,"variant",8,"default"),v=d(t,"size",8,"default"),b=d(t,"builders",24,()=>[]);U();var k=M(()=>F(W({variant:w(),size:v(),className:r()})));T(f,K({get builders(){return b()},get class(){return G(k)},type:"button"},()=>o,{$$events:{click(l){e.call(this,t,l)},keydown(l){e.call(this,t,l)}},children:(l,B)=>{var g=y(),h=x(g);P(h,t,"default",{},null),m(l,g)},$$slots:{default:!0}})),C()}const W=H({base:"ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border-input bg-background hover:bg-accent hover:text-accent-foreground border",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}});export{tt as B};