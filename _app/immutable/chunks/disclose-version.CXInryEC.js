import{a0 as B,an as O,aa as D,ao as $,Q as L,ap as q,ak as J,V as K,aq as T,b as X,ar as ee,h as l,as as F,A as I,Z as m,C as A,i as u,D as w,at as te,au as re,e as x,av as M,H as k,aw as ne,B as ae,ax as oe,ay as se,az as ie,aA as ue,d as fe,p as ce,a as de,o as le,ag as _e,n as C,j as ve,O as pe,w as he}from"./index-client.RmORvUAM.js";function Se(e,t){if(t){const r=document.body;e.autofocus=!0,B(()=>{document.activeElement===r&&e.focus()})}}let j=!1;function ye(){j||(j=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const r of e.target.elements)(t=r.__on_r)==null||t.call(r)})},{capture:!0}))}function z(e){var t=$,r=L;O(null),D(null);try{return e()}finally{O(t),D(r)}}function Oe(e,t,r,a=r){e.addEventListener(t,()=>z(r));const o=e.__on_r;o?e.__on_r=()=>{o(),a()}:e.__on_r=a,ye()}const U=new Set,P=new Set;function be(e,t,r,a){function o(n){if(a.capture||E.call(t,n),!n.cancelBubble)return z(()=>r.call(this,n))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?B(()=>{t.addEventListener(e,o,a)}):t.addEventListener(e,o,a),o}function De(e,t,r,a,o){var n={capture:a,passive:o},s=be(e,t,r,n);(t===document.body||t===window||t===document)&&q(()=>{t.removeEventListener(e,s,n)})}function Re(e){for(var t=0;t<e.length;t++)U.add(e[t]);for(var r of P)r(e)}function E(e){var W;var t=this,r=t.ownerDocument,a=e.type,o=((W=e.composedPath)==null?void 0:W.call(e))||[],n=o[0]||e.target,s=0,_=e.__root;if(_){var c=o.indexOf(_);if(c!==-1&&(t===document||t===window)){e.__root=t;return}var y=o.indexOf(t);if(y===-1)return;c<=y&&(s=c)}if(n=o[s]||e.target,n!==t){J(e,"currentTarget",{configurable:!0,get(){return n||r}});var R=$,v=L;O(null),D(null);try{for(var i,f=[];n!==null;){var h=n.assignedSlot||n.parentNode||n.host||null;try{var b=n["__"+a];if(b!==void 0&&!n.disabled)if(K(b)){var[Q,...Z]=b;Q.apply(n,[e,...Z])}else b.call(n,e)}catch(N){i?f.push(N):i=N}if(e.cancelBubble||h===t||h===null)break;n=h}if(i){for(let N of f)queueMicrotask(()=>{throw N});throw i}}finally{e.__root=t,delete e.currentTarget,O(R),D(v)}}}let d;function ge(){d=void 0}function ke(e){let t=null,r=l;var a;if(l){for(t=u,d===void 0&&(d=w(document.head));d!==null&&(d.nodeType!==8||d.data!==F);)d=I(d);d===null?m(!1):d=A(I(d))}l||(a=document.head.appendChild(T()));try{X(()=>e(a),ee)}finally{r&&(m(!0),d=u,A(t))}}function Y(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function p(e,t){var r=L;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function Ie(e,t){var r=(t&te)!==0,a=(t&re)!==0,o,n=!e.startsWith("<!>");return()=>{if(l)return p(u,null),u;o===void 0&&(o=Y(n?e:"<!>"+e),r||(o=w(o)));var s=a?document.importNode(o,!0):o.cloneNode(!0);if(r){var _=w(s),c=s.lastChild;p(_,c)}else p(s,s);return s}}function Me(e,t,r="svg"){var a=!e.startsWith("<!>"),o=`<${r}>${a?e:"<!>"+e}</${r}>`,n;return()=>{if(l)return p(u,null),u;if(!n){var s=Y(o),_=w(s);n=w(_)}var c=n.cloneNode(!0);return p(c,c),c}}function Ce(e=""){if(!l){var t=T(e+"");return p(t,t),t}var r=u;return r.nodeType!==3&&(r.before(r=T()),A(r)),p(r,r),r}function Pe(){if(l)return p(u,null),u;var e=document.createDocumentFragment(),t=document.createComment(""),r=T();return e.append(t,r),p(t,r),e}function Ve(e,t){if(l){L.nodes_end=u,x();return}e!==null&&e.before(t)}function He(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const me=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function We(e){return me.includes(e)}const we={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",srcobject:"srcObject"};function je(e){return e=e.toLowerCase(),we[e]??e}const Ee=["touchstart","touchmove"];function Te(e){return Ee.includes(e)}let V=!0;function Be(e){V=e}function $e(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=r==null?"":r+"")}function Ae(e,t){return G(e,t)}function qe(e,t){M(),t.intro=t.intro??!1;const r=t.target,a=l,o=u;try{for(var n=w(r);n&&(n.nodeType!==8||n.data!==F);)n=I(n);if(!n)throw k;m(!0),A(n),x();const s=G(e,{...t,anchor:n});if(u===null||u.nodeType!==8||u.data!==ne)throw ae(),k;return m(!1),s}catch(s){if(s===k)return t.recover===!1&&oe(),M(),se(r),m(!1),Ae(e,t);throw s}finally{m(a),A(o),ge()}}const g=new Map;function G(e,{target:t,anchor:r,props:a={},events:o,context:n,intro:s=!0}){M();var _=new Set,c=v=>{for(var i=0;i<v.length;i++){var f=v[i];if(!_.has(f)){_.add(f);var h=Te(f);t.addEventListener(f,E,{passive:h});var b=g.get(f);b===void 0?(document.addEventListener(f,E,{passive:h}),g.set(f,1)):g.set(f,b+1)}}};c(ie(U)),P.add(c);var y=void 0,R=ue(()=>{var v=r??t.appendChild(T());return fe(()=>{if(n){ce({});var i=le;i.c=n}o&&(a.$$events=o),l&&p(v,null),V=s,y=e(v,a)||{},V=!0,l&&(L.nodes_end=u),n&&de()}),()=>{var h;for(var i of _){t.removeEventListener(i,E);var f=g.get(i);--f===0?(document.removeEventListener(i,E),g.delete(i)):g.set(i,f)}P.delete(c),H.delete(y),v!==r&&((h=v.parentNode)==null||h.removeChild(v))}});return H.set(y,R),y}let H=new WeakMap;function Fe(e){const t=H.get(e);t&&t()}let S=!1;function xe(e,t,r){const a=r[t]??(r[t]={store:null,source:_e(void 0),unsubscribe:C});if(a.store!==e)if(a.unsubscribe(),a.store=e??null,e==null)a.source.v=void 0,a.unsubscribe=C;else{var o=!0;a.unsubscribe=ve(e,n=>{o?a.source.v=n:pe(a.source,n)}),o=!1}return he(a.source)}function ze(e,t,r){let a=r[t];return a&&a.store!==e&&(a.unsubscribe(),a.unsubscribe=C),e}function Ue(){const e={};return q(()=>{for(var t in e)e[t].unsubscribe()}),e}function Ye(e){var t=S;try{return S=!1,[e(),S]}finally{S=t}}const Le="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Le);export{V as A,Ve as a,$e as b,xe as c,Pe as d,p as e,Y as f,Ce as g,De as h,Ye as i,qe as j,ze as k,Oe as l,Ae as m,Me as n,ke as o,Be as p,ye as q,He as r,Ue as s,Ie as t,Fe as u,be as v,Re as w,Se as x,je as y,We as z};