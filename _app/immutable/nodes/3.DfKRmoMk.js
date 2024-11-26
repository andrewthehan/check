import{s as Ve,h as z,a as u,c as we,f as Z,t as W,g as Fe,b as Be}from"../chunks/disclose-version.D9N9JB02.js";import{aA as at,aO as yt,aP as Ct,p as re,aB as B,aC as Ye,f as P,a as ie,D as T,c as J,C as c,r as Y,ae as $,t as H,aD as Je,a9 as We,a3 as pt,s as _e,a4 as et,aQ as St,aw as kt,F as Ue,w as qe}from"../chunks/index-client.DkYvC1ta.js";import{a as s,l as x,i as fe,b as pe,s as tt,p as Tt}from"../chunks/props.ntZszKXP.js";import{I as Pt,e as ct,i as wt}from"../chunks/Icon.DIe8zXmb.js";import{c as he}from"../chunks/svelte-component.COSNmyN2.js";import{i as Ae,h as It,j as Ot,k as xt,w as ut,o as Nt,l as Mt,m as je,n as Dt,p as Rt,q as Me,t as ft,u as Xe,v as Ke,x as O,y as vt,F as Bt,z as gt,A as Lt,B as mt,C as Ze,D as zt,E as Ft,G as Wt,H as lt,I as st,s as F,c as De,b as ee,a as oe,d as Ie,e as Vt,J as Ht,g as Ut}from"../chunks/utils.DPCNPhKX.js";import{l as qt,a as jt,I as Kt}from"../chunks/input.BVxUOyNV.js";import{o as bt,t as ht,g as Gt,c as Jt,d as Yt,l as rt,b as Qt,f as Xt,p as Zt,n as $t,a as en,e as tn,u as nn,h as an,i as ln,r as sn,j as rn,k as on,m as dn,q as cn,s as un,v as fn,w as ot,x as Ge,C as vn,y as gn,B as _t,P as mn}from"../chunks/index.BOjF8uVF.js";import{i as de}from"../chunks/legacy.D806fZ3c.js";import{w as $e,d as Re,g as bn,r as hn}from"../chunks/index.DXnbhSDI.js";function it(r){return Array.from(r.querySelectorAll('[role="option"]:not([data-disabled])')).filter(e=>Ae(e))}function _n(r){return e=>{const l=e.target,a=It(r);if(!a||!Ot(l))return!1;const f=a.id;return!!(xt(l)&&f===l.htmlFor||l.closest(`label[for="${f}"]`))}}const yn=[O.ARROW_LEFT,O.ESCAPE,O.ARROW_RIGHT,O.SHIFT,O.CAPS_LOCK,O.CONTROL,O.ALT,O.META,O.ENTER,O.F1,O.F2,O.F3,O.F4,O.F5,O.F6,O.F7,O.F8,O.F9,O.F10,O.F11,O.F12],Cn={positioning:{placement:"bottom",sameWidth:!0},scrollAlignment:"nearest",loop:!0,defaultOpen:!1,closeOnOutsideClick:!0,preventScroll:!0,closeOnEscape:!0,forceVisible:!1,portal:void 0,builder:"listbox",disabled:!1,required:!1,name:void 0,typeahead:!0,highlightOnHover:!0,onOutsideClick:void 0},On=["trigger","menu","label"];function En(r){const e={...Cn,...r},l=ut($e(null)),a=ut($e(null)),f=e.selected??$e(e.defaultSelected),o=bt(f,e==null?void 0:e.onSelectedChange),i=Re(a,t=>t?ye(t):void 0),d=e.open??$e(e.defaultOpen),m=bt(d,e==null?void 0:e.onOpenChange),v=ht({...Nt(e,"open","defaultOpen","builder","ids"),multiple:e.multiple??!1}),{scrollAlignment:p,loop:E,closeOnOutsideClick:k,closeOnEscape:_,preventScroll:V,portal:g,forceVisible:C,positioning:I,multiple:h,arrowSize:N,disabled:G,required:U,typeahead:b,name:q,highlightOnHover:te,onOutsideClick:M}=v,{name:L,selector:y}=Mt(e.builder),A=ht({...Gt(On),...e.ids}),{handleTypeaheadSearch:Q}=Jt({onMatch:t=>{a.set(t),t.scrollIntoView({block:p.get()})},getCurrentItem(){return a.get()}});function ye(t){const n=t.getAttribute("data-value"),S=t.getAttribute("data-label"),le=t.hasAttribute("data-disabled");return{value:n&&JSON.parse(n),label:S??t.textContent??void 0,disabled:!!le}}const ge=t=>{o.update(n=>{if(h.get()){const le=Array.isArray(n)?[...n]:[];return on(t,le,(R,w)=>je(R.value,w.value))}return t})};function se(t){const n=ye(t);ge(n)}async function Se(){m.set(!0);const t=document.getElementById(A.trigger.get());if(!t)return;t!==l.get()&&l.set(t),await at();const n=document.getElementById(A.menu.get());if(!Ae(n))return;const S=n.querySelector("[aria-selected=true]");Ae(S)&&a.set(S)}function ne(){m.set(!1),a.set(null)}const Ce=Yt({open:m,forceVisible:C,activeTrigger:l}),ce=Re([o],([t])=>n=>Array.isArray(t)?t.some(S=>je(S.value,n)):Dt(n)?je(t==null?void 0:t.value,Rt(n,void 0)):je(t==null?void 0:t.value,n)),Oe=Re([i],([t])=>n=>je(t==null?void 0:t.value,n)),ve=Me(L("trigger"),{stores:[m,a,G,A.menu,A.trigger,A.label],returned:([t,n,S,le,R,w])=>({"aria-activedescendant":n==null?void 0:n.id,"aria-autocomplete":"list","aria-controls":le,"aria-expanded":t,"aria-labelledby":w,id:R,role:"combobox",disabled:ft(S),type:e.builder==="select"?"button":void 0}),action:t=>{const n=Wt(t),S=Xe(Ke(t,"click",()=>{t.focus(),m.get()?ne():Se()}),Ke(t,"keydown",w=>{if(!m.get()){if(yn.includes(w.key)||w.key===O.TAB||w.key===O.BACKSPACE&&n&&t.value===""||w.key===O.SPACE&&vt(t))return;Se(),at().then(()=>{if(o.get())return;const xe=document.getElementById(A.menu.get());if(!Ae(xe))return;const X=Array.from(xe.querySelectorAll(`${y("item")}:not([data-disabled]):not([data-hidden])`)).filter(Pe=>Ae(Pe));X.length&&(w.key===O.ARROW_DOWN?(a.set(X[0]),X[0].scrollIntoView({block:p.get()})):w.key===O.ARROW_UP&&(a.set(rt(X)),rt(X).scrollIntoView({block:p.get()})))})}if(w.key===O.TAB){ne();return}if(w.key===O.ENTER&&!w.isComposing||w.key===O.SPACE&&vt(t)){w.preventDefault();const K=a.get();K&&se(K),h.get()||ne()}if(w.key===O.ARROW_UP&&w.altKey&&ne(),Bt.includes(w.key)){w.preventDefault();const K=document.getElementById(A.menu.get());if(!Ae(K))return;const xe=it(K);if(!xe.length)return;const X=xe.filter(dt=>!gt(dt)&&dt.dataset.hidden===void 0),Pe=a.get(),Ne=Pe?X.indexOf(Pe):-1,Qe=E.get(),At=p.get();let be;switch(w.key){case O.ARROW_DOWN:be=$t(X,Ne,Qe);break;case O.ARROW_UP:be=Zt(X,Ne,Qe);break;case O.PAGE_DOWN:be=Xt(X,Ne,10,Qe);break;case O.PAGE_UP:be=Qt(X,Ne,10,Qe);break;case O.HOME:be=X[0];break;case O.END:be=rt(X);break;default:return}a.set(be),be==null||be.scrollIntoView({block:At})}else if(b.get()){const K=document.getElementById(A.menu.get());if(!Ae(K))return;Q(w.key,it(K))}}));let le=lt;const R=Lt(t,{handler:ne,enabled:Re([m,_],([w,ze])=>w&&ze)});return R&&R.destroy&&(le=R.destroy),{destroy(){S(),le()}}}}),ke=Me(L("menu"),{stores:[Ce,A.menu],returned:([t,n])=>({hidden:t?void 0:!0,id:n,role:"listbox",style:mt({display:t?void 0:"none"})}),action:t=>{let n=lt;const S=Xe(Ze([Ce,g,k,I,l],([le,R,w,ze,K])=>{n(),!(!le||!K)&&at().then(()=>{n();const xe=_n(A.trigger.get());n=nn(t,{anchorElement:K,open:m,options:{floating:ze,focusTrap:null,modal:{closeOnInteractOutside:w,onClose:ne,open:le,shouldCloseOnInteractOutside:X=>{var Ne;if((Ne=M.get())==null||Ne(X),X.defaultPrevented)return!1;const Pe=X.target;return!(!Ot(Pe)||Pe===K||K.contains(Pe)||xe(X))}},escapeKeydown:null,portal:an(t,R)}}).destroy})}));return{destroy:()=>{S(),n()}}}}),{elements:{root:ae}}=en(),{action:Te}=bn(ae),ue=Me(L("label"),{stores:[A.label,A.trigger],returned:([t,n])=>({id:t,for:n}),action:Te}),D=Me(L("option"),{stores:[ce],returned:([t])=>n=>{const S=t(n.value);return{"data-value":JSON.stringify(n.value),"data-label":n.label,"data-disabled":ft(n.disabled),"aria-disabled":n.disabled?!0:void 0,"aria-selected":S,"data-selected":S?"":void 0,id:tn(),role:"option"}},action:t=>({destroy:Xe(Ke(t,"click",S=>{if(gt(t)){S.preventDefault();return}se(t),h.get()||ne()}),Ze(te,S=>S?Xe(Ke(t,"mouseover",()=>{a.set(t)}),Ke(t,"mouseleave",()=>{a.set(null)})):void 0))})}),me=Me(L("group"),{returned:()=>t=>({role:"group","aria-labelledby":t})}),Ee=Me(L("group-label"),{returned:()=>t=>({id:t})}),j=zt({value:Re([o],([t])=>{const n=Array.isArray(t)?t.map(S=>S.value):t==null?void 0:t.value;return typeof n=="string"?n:JSON.stringify(n)}),name:hn(q),required:U,prefix:e.builder}),Le=Me(L("arrow"),{stores:N,returned:t=>({"data-arrow":!0,style:mt({position:"absolute",width:`var(--arrow-size, ${t}px)`,height:`var(--arrow-size, ${t}px)`})})});return Ft(()=>{if(!st)return;const t=document.getElementById(A.menu.get()),n=document.getElementById(A.trigger.get());if(n&&l.set(n),!t)return;const S=t.querySelector("[data-selected]");Ae(S)}),Ze([a],([t])=>{if(!st)return;const n=document.getElementById(A.menu.get());Ae(n)&&it(n).forEach(S=>{S===t?ln(S):sn(S)})}),Ze([m],([t])=>{if(!st)return;let n=lt;return V.get()&&t&&(n=rn()),()=>{n()}}),{ids:A,elements:{trigger:ve,group:me,option:D,menu:ke,groupLabel:Ee,label:ue,hiddenInput:j,arrow:Le},states:{open:m,selected:o,highlighted:i,highlightedItem:a},helpers:{isSelected:ce,isHighlighted:Oe,closeMenu:ne},options:v}}function An(r){const e=En({...r,builder:"select"}),l=Re(e.states.selected,a=>Array.isArray(a)?a.map(f=>f.label).join(", "):(a==null?void 0:a.label)??"");return{...e,elements:{...e.elements},states:{...e.states,selectedLabel:l}}}function pn(r,e){return r.length!==e.length?!1:r.every((l,a)=>l===e[a])}function nt(){return{NAME:"select",GROUP_NAME:"select-group",ITEM_NAME:"select-item",PARTS:["arrow","content","group","item","indicator","input","label","trigger","value"]}}function He(){const{NAME:r}=nt();return yt(r)}function Sn(r){const{NAME:e,PARTS:l}=nt(),a=dn(e,l),f={...An({...cn(r),forceVisible:!0}),getAttrs:a};return Ct(e,f),{...f,updateOption:un(f.options)}}function kn(r){const{ITEM_NAME:e}=nt(),l=He();return Ct(e,r),l}function Tn(){const{ITEM_NAME:r}=nt(),{helpers:{isSelected:e},getAttrs:l}=He();return{value:yt(r),isSelected:e,getAttrs:l}}function Pn(r){const l={...{side:"bottom",align:"center",sameWidth:!0},...r},{options:{positioning:a}}=He();fn(a)(l)}function wn(r,e){re(e,!1);const l=Ve(),a=()=>we(te,"$idValues",l);let f=s(e,"required",24,()=>{}),o=s(e,"disabled",24,()=>{}),i=s(e,"preventScroll",24,()=>{}),d=s(e,"loop",24,()=>{}),m=s(e,"closeOnEscape",24,()=>{}),v=s(e,"closeOnOutsideClick",24,()=>{}),p=s(e,"portal",24,()=>{}),E=s(e,"name",24,()=>{}),k=s(e,"multiple",8,!1),_=s(e,"selected",28,()=>{}),V=s(e,"onSelectedChange",24,()=>{}),g=s(e,"open",28,()=>{}),C=s(e,"onOpenChange",24,()=>{}),I=s(e,"items",24,()=>[]),h=s(e,"onOutsideClick",24,()=>{}),N=s(e,"typeahead",24,()=>{});const{states:{open:G,selected:U},updateOption:b,ids:q}=Sn({required:f(),disabled:o(),preventScroll:i(),loop:d(),closeOnEscape:m(),closeOnOutsideClick:v(),portal:p(),name:E(),onOutsideClick:h(),multiple:k(),forceVisible:!0,defaultSelected:Array.isArray(_())?[..._()]:_(),defaultOpen:g(),onSelectedChange:({next:y})=>{var A,Q;return Array.isArray(y)?((!Array.isArray(_())||!pn(_(),y))&&((A=V())==null||A(y),_(y)),y):(_()!==y&&((Q=V())==null||Q(y),_(y)),y)},onOpenChange:({next:y})=>{var A;return g()!==y&&((A=C())==null||A(y),g(y)),y},items:I(),typeahead:N()}),te=Re([q.menu,q.trigger,q.label],([y,A,Q])=>({menu:y,trigger:A,label:Q}));B(()=>T(g()),()=>{g()!==void 0&&G.set(g())}),B(()=>T(_()),()=>{_()!==void 0&&U.set(Array.isArray(_())?[..._()]:_())}),B(()=>T(f()),()=>{b("required",f())}),B(()=>T(o()),()=>{b("disabled",o())}),B(()=>T(i()),()=>{b("preventScroll",i())}),B(()=>T(d()),()=>{b("loop",d())}),B(()=>T(m()),()=>{b("closeOnEscape",m())}),B(()=>T(v()),()=>{b("closeOnOutsideClick",v())}),B(()=>T(p()),()=>{b("portal",p())}),B(()=>T(E()),()=>{b("name",E())}),B(()=>T(k()),()=>{b("multiple",k())}),B(()=>T(h()),()=>{b("onOutsideClick",h())}),B(()=>T(N()),()=>{b("typeahead",N())}),Ye(),de();var M=z(),L=P(M);F(L,e,"default",{get ids(){return a()}},null),u(r,M),ie()}var In=W("<div><!></div>"),xn=W("<div><!></div>"),Nn=W("<div><!></div>"),Mn=W("<div><!></div>"),Dn=W("<div><!></div>");function Rn(r,e){const l=x(e,["children","$$slots","$$events","$$legacy"]),a=x(l,["transition","transitionConfig","inTransition","inTransitionConfig","outTransition","outTransitionConfig","asChild","id","side","align","sideOffset","alignOffset","collisionPadding","avoidCollisions","collisionBoundary","sameWidth","fitViewport","strategy","overlap","el"]);re(e,!1);const f=Ve(),o=()=>we(A,"$menu",f),i=()=>we(Q,"$open",f),d=Je();let m=s(e,"transition",24,()=>{}),v=s(e,"transitionConfig",24,()=>{}),p=s(e,"inTransition",24,()=>{}),E=s(e,"inTransitionConfig",24,()=>{}),k=s(e,"outTransition",24,()=>{}),_=s(e,"outTransitionConfig",24,()=>{}),V=s(e,"asChild",8,!1),g=s(e,"id",24,()=>{}),C=s(e,"side",8,"bottom"),I=s(e,"align",8,"center"),h=s(e,"sideOffset",8,0),N=s(e,"alignOffset",8,0),G=s(e,"collisionPadding",8,8),U=s(e,"avoidCollisions",8,!0),b=s(e,"collisionBoundary",24,()=>{}),q=s(e,"sameWidth",8,!0),te=s(e,"fitViewport",8,!1),M=s(e,"strategy",8,"absolute"),L=s(e,"overlap",8,!1),y=s(e,"el",28,()=>{});const{elements:{menu:A},states:{open:Q},ids:ye,getAttrs:ge}=He(),se=ot(),Se=ge("content");B(()=>T(g()),()=>{g()&&ye.menu.set(g())}),B(()=>o(),()=>{We(d,o())}),B(()=>c(d),()=>{Object.assign(c(d),Se)}),B(()=>(i(),T(C()),T(I()),T(h()),T(N()),T(G()),T(U()),T(b()),T(q()),T(te()),T(M()),T(L())),()=>{i()&&Pn({side:C(),align:I(),sideOffset:h(),alignOffset:N(),collisionPadding:G(),avoidCollisions:U(),collisionBoundary:b(),sameWidth:q(),fitViewport:te(),strategy:M(),overlap:L()})}),Ye(),de();var ne=z(),Ce=P(ne);fe(Ce,()=>V()&&i(),ce=>{var Oe=z(),ve=P(Oe);F(ve,e,"default",{get builder(){return c(d)}},null),u(ce,Oe)},ce=>{var Oe=z(),ve=P(Oe);fe(ve,()=>m()&&i(),ke=>{var ae=In();let Te;var ue=J(ae);F(ue,e,"default",{get builder(){return c(d)}},null),Y(ae),pe(ae,D=>y(D),()=>y()),De(ae,D=>c(d).action(D)),$(()=>Z("m-pointerleave",ae,se)),$(()=>Z("keydown",ae,function(D){ee.call(this,e,D)})),H(()=>Te=oe(ae,Te,{...c(d),...a})),Ge(3,ae,m,v),u(ke,ae)},ke=>{var ae=z(),Te=P(ae);fe(Te,()=>p()&&k()&&i(),ue=>{var D=xn();let me;var Ee=J(D);F(Ee,e,"default",{get builder(){return c(d)}},null),Y(D),pe(D,j=>y(j),()=>y()),De(D,j=>c(d).action(j)),$(()=>Z("m-pointerleave",D,se)),$(()=>Z("keydown",D,function(j){ee.call(this,e,j)})),H(()=>me=oe(D,me,{...c(d),...a})),Ge(1,D,p,E),Ge(2,D,k,_),u(ue,D)},ue=>{var D=z(),me=P(D);fe(me,()=>p()&&i(),Ee=>{var j=Nn();let Le;var t=J(j);F(t,e,"default",{get builder(){return c(d)}},null),Y(j),pe(j,n=>y(n),()=>y()),De(j,n=>c(d).action(n)),$(()=>Z("m-pointerleave",j,se)),$(()=>Z("keydown",j,function(n){ee.call(this,e,n)})),H(()=>Le=oe(j,Le,{...c(d),...a})),Ge(1,j,p,E),u(Ee,j)},Ee=>{var j=z(),Le=P(j);fe(Le,()=>k()&&i(),t=>{var n=Mn();let S;var le=J(n);F(le,e,"default",{get builder(){return c(d)}},null),Y(n),pe(n,R=>y(R),()=>y()),De(n,R=>c(d).action(R)),$(()=>Z("m-pointerleave",n,se)),$(()=>Z("keydown",n,function(R){ee.call(this,e,R)})),H(()=>S=oe(n,S,{...c(d),...a})),Ge(2,n,k,_),u(t,n)},t=>{var n=z(),S=P(n);fe(S,i,le=>{var R=Dn();let w;var ze=J(R);F(ze,e,"default",{get builder(){return c(d)}},null),Y(R),pe(R,K=>y(K),()=>y()),De(R,K=>c(d).action(K)),$(()=>Z("m-pointerleave",R,se)),$(()=>Z("keydown",R,function(K){ee.call(this,e,K)})),H(()=>w=oe(R,w,{...c(d),...a})),u(le,R)},null,!0),u(t,n)},!0),u(Ee,j)},!0),u(ue,D)},!0),u(ke,ae)},!0),u(ce,Oe)}),u(r,ne),ie()}var Bn=W("<div><!></div>");function Ln(r,e){const l=x(e,["children","$$slots","$$events","$$legacy"]),a=x(l,["value","disabled","label","asChild","el"]);re(e,!1);const f=Ve(),o=()=>we(V,"$item",f),i=()=>we(g,"$isSelectedStore",f),d=Je(),m=Je();let v=s(e,"value",8),p=s(e,"disabled",24,()=>{}),E=s(e,"label",24,()=>{}),k=s(e,"asChild",8,!1),_=s(e,"el",28,()=>{});const{elements:{option:V},helpers:{isSelected:g},getAttrs:C}=kn(v()),I=ot(),h=C("item");B(()=>(o(),T(v()),T(p()),T(E())),()=>{We(d,o()({value:v(),disabled:p(),label:E()}))}),B(()=>c(d),()=>{Object.assign(c(d),h)}),B(()=>(i(),T(v())),()=>{We(m,i()(v()))}),Ye(),de();var N=z(),G=P(N);fe(G,k,U=>{var b=z(),q=P(b);F(q,e,"default",{get builder(){return c(d)},get isSelected(){return c(m)}},null),u(U,b)},U=>{var b=Bn();let q;var te=J(b);F(te,e,"default",{get builder(){return c(d)},get isSelected(){return c(m)}},M=>{var L=Fe();H(()=>Be(L,E()||v())),u(M,L)}),Y(b),pe(b,M=>_(M),()=>_()),De(b,M=>c(d).action(M)),$(()=>Z("m-click",b,I)),$(()=>Z("m-pointermove",b,I)),$(()=>Z("focusin",b,function(M){ee.call(this,e,M)})),$(()=>Z("keydown",b,function(M){ee.call(this,e,M)})),$(()=>Z("focusout",b,function(M){ee.call(this,e,M)})),$(()=>Z("pointerleave",b,function(M){ee.call(this,e,M)})),H(()=>q=oe(b,q,{...c(d),...a})),u(U,b)}),u(r,N),ie()}var zn=W("<div><!></div>");function Fn(r,e){const l=x(e,["children","$$slots","$$events","$$legacy"]),a=x(l,["asChild","el"]);re(e,!1);const f=Ve(),o=()=>we(m,"$isSelected",f);let i=s(e,"asChild",8,!1),d=s(e,"el",28,()=>{});const{isSelected:m,value:v,getAttrs:p}=Tn(),E=p("indicator");de();var k=z(),_=P(k);fe(_,i,V=>{var g=z(),C=P(g);F(C,e,"default",{attrs:E,get isSelected(){return o()(v)}},null),u(V,g)},V=>{var g=zn();let C;var I=J(g);fe(I,()=>o()(v),h=>{var N=z(),G=P(N);F(G,e,"default",{attrs:E,get isSelected(){return o()(v)}},null),u(h,N)}),Y(g),pe(g,h=>d(h),()=>d()),H(()=>C=oe(g,C,{...a,...E})),u(V,g)}),u(r,k),ie()}var Wn=W("<button><!></button>");function Vn(r,e){const l=x(e,["children","$$slots","$$events","$$legacy"]),a=x(l,["asChild","id","el"]);re(e,!1);const f=Ve(),o=()=>we(p,"$trigger",f),i=Je();let d=s(e,"asChild",8,!1),m=s(e,"id",24,()=>{}),v=s(e,"el",28,()=>{});const{elements:{trigger:p},ids:E,getAttrs:k}=He(),_=ot(),V=k("trigger");B(()=>T(m()),()=>{m()&&E.trigger.set(m())}),B(()=>o(),()=>{We(i,o())}),B(()=>c(i),()=>{Object.assign(c(i),V)}),Ye(),de();var g=z(),C=P(g);fe(C,d,I=>{var h=z(),N=P(h);F(N,e,"default",{get builder(){return c(i)}},null),u(I,h)},I=>{var h=Wn();let N;var G=J(h);F(G,e,"default",{get builder(){return c(i)}},null),Y(h),pe(h,U=>v(U),()=>v()),De(h,U=>c(i).action(U)),$(()=>Z("m-click",h,_)),$(()=>Z("m-keydown",h,_)),H(()=>N=oe(h,N,{...c(i),type:"button",...a})),u(I,h)}),u(r,g),ie()}var Hn=W("<span> </span>");function Un(r,e){const l=x(e,["children","$$slots","$$events","$$legacy"]),a=x(l,["placeholder","asChild","el"]);re(e,!1);const f=Ve(),o=()=>we(p,"$selectedLabel",f),i=Je();let d=s(e,"placeholder",8,""),m=s(e,"asChild",8,!1),v=s(e,"el",28,()=>{});const{states:{selectedLabel:p},getAttrs:E}=He(),k=E("value");B(()=>o(),()=>{We(i,o())}),Ye(),de();var _=z(),V=P(_);fe(V,m,g=>{var C=z(),I=P(C);F(I,e,"default",{get label(){return c(i)},attrs:k},null),u(g,C)},g=>{var C=Hn();let I;var h=J(C,!0);Y(C),pe(C,N=>v(N),()=>v()),H(()=>{I=oe(C,I,{...a,...k,"data-placeholder":c(i)?void 0:""}),Be(h,c(i)||d())}),u(g,C)}),u(r,_),ie()}var qn=W("<div><!></div>");function jn(r,e){const l=x(e,["children","$$slots","$$events","$$legacy"]),a=x(l,["class"]);re(e,!1);let f=s(e,"class",8,void 0);de();var o=qn();let i;var d=J(o);F(d,e,"default",{},null),Y(o),H(()=>i=oe(o,i,{class:Ie("rounded-lg border bg-card text-card-foreground shadow-sm",f()),...a})),u(r,o),ie()}var Kn=W("<div><!></div>");function Gn(r,e){const l=x(e,["children","$$slots","$$events","$$legacy"]),a=x(l,["class"]);re(e,!1);let f=s(e,"class",8,void 0);de();var o=Kn();let i;var d=J(o);F(d,e,"default",{},null),Y(o),H(()=>i=oe(o,i,{class:Ie("p-6",f()),...a})),u(r,o),ie()}var Jn=W("<p><!></p>");function Yn(r,e){const l=x(e,["children","$$slots","$$events","$$legacy"]),a=x(l,["class"]);re(e,!1);let f=s(e,"class",8,void 0);de();var o=Jn();let i;var d=J(o);F(d,e,"default",{},null),Y(o),H(()=>i=oe(o,i,{class:Ie("text-sm text-muted-foreground",f()),...a})),u(r,o),ie()}var Qn=W("<div><!></div>");function Xn(r,e){const l=x(e,["children","$$slots","$$events","$$legacy"]),a=x(l,["class"]);re(e,!1);let f=s(e,"class",8,void 0);de();var o=Qn();let i;var d=J(o);F(d,e,"default",{},null),Y(o),H(()=>i=oe(o,i,{class:Ie("flex items-center p-6 pt-0",f()),...a})),u(r,o),ie()}function Zn(r,e){const l=x(e,["children","$$slots","$$events","$$legacy"]),a=x(l,["class","tag"]);re(e,!1);let f=s(e,"class",8,void 0),o=s(e,"tag",8,"h3");de();var i=z(),d=P(i);Vt(d,o,!1,(m,v)=>{let p;H(()=>p=oe(m,p,{class:Ie("text-lg font-semibold leading-none tracking-tight",f()),...a},void 0,m.namespaceURI===pt,m.nodeName.includes("-")));var E=z(),k=P(E);F(k,e,"default",{},null),u(v,E)}),u(r,i),ie()}var $n=W('<span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center"><!></span> <!>',1);function ea(r,e){const l=x(e,["children","$$slots","$$events","$$legacy"]),a=x(l,["class","value","label","disabled"]);re(e,!1);let f=s(e,"class",8,void 0),o=s(e,"value",8),i=s(e,"label",8,void 0),d=s(e,"disabled",8,void 0);de();var m=et(()=>Ie("data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",f()));Ln(r,tt({get value(){return o()},get disabled(){return d()},get label(){return i()},get class(){return c(m)}},()=>a,{$$events:{click(v){ee.call(this,e,v)},keydown(v){ee.call(this,e,v)},focusin(v){ee.call(this,e,v)},focusout(v){ee.call(this,e,v)},pointerleave(v){ee.call(this,e,v)},pointermove(v){ee.call(this,e,v)}},children:(v,p)=>{var E=$n(),k=P(E),_=J(k);Fn(_,{children:(g,C)=>{vn(g,{class:"h-4 w-4"})},$$slots:{default:!0}}),Y(k);var V=_e(k,2);F(V,e,"default",{},g=>{var C=Fe();H(()=>Be(C,i()||o())),u(g,C)}),u(v,E)},$$slots:{default:!0}})),ie()}var ta=W('<div class="w-full p-1"><!></div>');function na(r,e){const l=x(e,["children","$$slots","$$events","$$legacy"]),a=x(l,["sideOffset","inTransition","inTransitionConfig","outTransition","outTransitionConfig","class"]);re(e,!1);let f=s(e,"sideOffset",8,4),o=s(e,"inTransition",8,Ht),i=s(e,"inTransitionConfig",8,void 0),d=s(e,"outTransition",8,gn),m=s(e,"outTransitionConfig",24,()=>({start:.95,opacity:0,duration:50})),v=s(e,"class",8,void 0);de();var p=et(()=>Ie("bg-popover text-popover-foreground relative z-50 min-w-[8rem] overflow-hidden rounded-md border shadow-md outline-none",v()));Rn(r,tt({get inTransition(){return o()},get inTransitionConfig(){return i()},get outTransition(){return d()},get outTransitionConfig(){return m()},get sideOffset(){return f()},get class(){return c(p)}},()=>a,{$$events:{keydown(E){ee.call(this,e,E)}},children:(E,k)=>{var _=ta(),V=J(_);F(V,e,"default",{},null),Y(_),u(E,_)},$$slots:{default:!0}})),ie()}function aa(r,e){const l=x(e,["children","$$slots","$$events","$$legacy"]);Pt(r,tt({name:"chevron-down"},()=>l,{iconNode:[["path",{d:"m6 9 6 6 6-6"}]],children:(f,o)=>{var i=z(),d=P(i);F(d,e,"default",{},null),u(f,i)},$$slots:{default:!0}}))}var la=W("<!> <div><!></div>",1);function sa(r,e){const l=x(e,["children","$$slots","$$events","$$legacy"]),a=x(l,["class"]);re(e,!1);let f=s(e,"class",8,void 0);de();var o=et(()=>Ie("border-input bg-background ring-offset-background focus-visible:ring-ring aria-[invalid]:border-destructive data-[placeholder]:[&>span]:text-muted-foreground flex h-10 w-full items-center justify-between rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",f()));Vn(r,tt({get class(){return c(o)}},()=>a,{$$events:{click(i){ee.call(this,e,i)},keydown(i){ee.call(this,e,i)}},children:St,$$slots:{default:(i,d)=>{const m=et(()=>d.builder);var v=la(),p=P(v);F(p,e,"default",{get builder(){return c(m)}},null);var E=_e(p,2),k=J(E);aa(k,{class:"h-4 w-4 opacity-50"}),Y(E),u(i,v)}}})),ie()}const ra=wn,ia=Un;var Et=(r=>(r.NAME="Name",r.ITEM_COUNT="Item Count",r.CREATE_DATE="Create Date",r.UPDATE_DATE="Update Date",r.COMPLETION="Completion",r))(Et||{});const oa="checklists-sort-option";class da{serialize(e){return e}deserialize(e){return e}}function ca(){return qt(oa,"Name",new da)}function ua(r,e){return r.toSorted(fa(e))}function fa(r){switch(r){case"Name":return(e,l)=>e.name.localeCompare(l.name);case"Item Count":return(e,l)=>e.items.length-l.items.length;case"Create Date":return(e,l)=>l.createDate.getTime()-e.createDate.getTime();case"Update Date":return(e,l)=>l.updateDate.getTime()-e.updateDate.getTime();case"Completion":return(e,l)=>{const a=e.items.filter(o=>o.completeDate).length,f=l.items.filter(o=>o.completeDate).length;return a/e.items.length-f/l.items.length}}}var va=W("<!> <!>",1),ga=W("<p>No checklists found</p>"),ma=W(" <!> <!>",1),ba=W("<!> <!>",1),ha=W("<!> <!>",1),_a=W("<a><!></a>"),ya=W('<section class="flex-2 mt-2 flex"><!> <!></section> <section><!> <!></section>',1);function Ia(r,e){re(e,!0);const l=jt();let a=kt("");const f=Ue(()=>l.value.filter(g=>g.name.toLocaleUpperCase().includes(c(a).toLocaleUpperCase()))),o=ca(),i=Ue(()=>ua(c(f),o.value));var d=ya(),m=P(d),v=J(m);Kt(v,{class:"flex-[3]",type:"text",get value(){return c(a)},set value(g){We(a,Tt(g))},placeholder:"Search"});var p=_e(v,2),E=Ue(()=>({value:o.value,label:o.value}));he(p,()=>ra,(g,C)=>{C(g,{get selected(){return c(E)},children:(I,h)=>{var N=va(),G=P(N);he(G,()=>sa,(b,q)=>{q(b,{class:"ml-2 flex-[2]",children:(te,M)=>{var L=z(),y=P(L);he(y,()=>ia,(A,Q)=>{Q(A,{placeholder:"Sort"})}),u(te,L)},$$slots:{default:!0}})});var U=_e(G,2);he(U,()=>na,(b,q)=>{q(b,{children:(te,M)=>{var L=z(),y=P(L);ct(y,17,()=>Object.values(Et),wt,(A,Q)=>{var ye=z(),ge=P(ye);he(ge,()=>ea,(se,Se)=>{Se(se,{get value(){return c(Q)},$$events:{click:()=>o.value=c(Q)},children:(ne,Ce)=>{qe();var ce=Fe();H(()=>Be(ce,c(Q))),u(ne,ce)},$$slots:{default:!0}})}),u(A,ye)}),u(te,L)},$$slots:{default:!0}})}),u(I,N)},$$slots:{default:!0}})}),Y(m);var k=_e(m,2),_=J(k);fe(_,()=>c(i).length===0,g=>{var C=ga();u(g,C)});var V=_e(_,2);ct(V,17,()=>c(i),g=>g.name,(g,C)=>{var I=_a();const h=Ue(()=>{const{name:G,description:U,items:b,createDate:q,updateDate:te}=c(C);return{name:G,description:U,items:b,createDate:q,updateDate:te}});var N=J(I);he(N,()=>jn,(G,U)=>{U(G,{class:"my-2",children:(b,q)=>{var te=ha(),M=P(te);he(M,()=>Gn,(y,A)=>{A(y,{children:(Q,ye)=>{var ge=ba(),se=P(ge);he(se,()=>Zn,(ne,Ce)=>{Ce(ne,{class:"flex items-center",children:(ce,Oe)=>{qe();var ve=ma(),ke=P(ve),ae=_e(ke);_t(ae,{class:"ml-2",variant:"secondary",children:(ue,D)=>{qe();var me=Fe();H(()=>Be(me,`${c(h).items.length??""} items`)),u(ue,me)},$$slots:{default:!0}});var Te=_e(ae,2);fe(Te,()=>c(h).items.length>0&&c(h).items.every(ue=>ue.completeDate!=null),ue=>{_t(ue,{class:"ml-1",variant:"secondary",children:(D,me)=>{qe();var Ee=Fe("Completed");u(D,Ee)},$$slots:{default:!0}})}),H(()=>Be(ke,`${c(h).name??""} `)),u(ce,ve)},$$slots:{default:!0}})});var Se=_e(se,2);he(Se,()=>Yn,(ne,Ce)=>{Ce(ne,{class:"overflow-hidden text-ellipsis whitespace-nowrap italic",children:(ce,Oe)=>{qe();var ve=Fe();H(()=>Be(ve,c(h).description.length>0?c(h).description:"No description")),u(ce,ve)},$$slots:{default:!0}})}),u(Q,ge)},$$slots:{default:!0}})});var L=_e(M,2);he(L,()=>Xn,(y,A)=>{A(y,{children:(Q,ye)=>{var ge=Ue(()=>c(C).items.filter(se=>se.completeDate!=null).length/c(C).items.length);mn(Q,{get value(){return c(ge)},max:1,class:"h-2"})},$$slots:{default:!0}})}),u(b,te)},$$slots:{default:!0}})}),Y(I),H(()=>Ut(I,"href",`/check/${c(h).name}`)),u(g,I)}),Y(k),u(r,d),ie()}export{Ia as component};
