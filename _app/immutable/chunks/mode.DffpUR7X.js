import{g,d as S,w as u}from"./index.DXnbhSDI.js";let y,p;function k(e){if(typeof document>"u")return;clearTimeout(y),clearTimeout(p);const n=document.createElement("style"),o=document.createTextNode(`* {
     -webkit-transition: none !important;
     -moz-transition: none !important;
     -o-transition: none !important;
     -ms-transition: none !important;
     transition: none !important;
  }`);n.appendChild(o);const t=()=>document.head.appendChild(n),a=()=>document.head.removeChild(n);if(typeof window.getComputedStyle<"u"){t(),e(),window.getComputedStyle(n).opacity,a();return}if(typeof window.requestAnimationFrame<"u"){t(),e(),window.requestAnimationFrame(a);return}t(),y=window.setTimeout(()=>{e(),p=window.setTimeout(a,120)},120)}function b(e){return e.filter(n=>n.length>0)}const E={getItem:e=>null,setItem:(e,n)=>{}},f=typeof document<"u",T=["dark","light","system"],I=u("mode-watcher-mode"),V=u("mode-watcher-theme"),w=D(),A=F(),q=u(void 0),L=x(),M=u(!0),_=u([]),z=u([]),C=K(),j=P();function D(){const e="system",n=f?localStorage:E,o=n.getItem(a());let t=v(o)?o:e;function a(){return g(I)}const{subscribe:d,set:r}=u(t,()=>{if(!f)return;const i=c=>{if(c.key!==a())return;const m=c.newValue;v(m)?r(t=m):r(t=e)};return addEventListener("storage",i),()=>removeEventListener("storage",i)});function s(i){r(t=i),n.setItem(a(),t)}return{subscribe:d,set:s}}function x(){const e=f?localStorage:E,n=e.getItem(t());let o=n??"";function t(){return g(V)}const{subscribe:a,set:d}=u(o,()=>{if(!f)return;const s=i=>{if(i.key!==t())return;const c=i.newValue;d(c===null?o="":o=c)};return addEventListener("storage",s),()=>removeEventListener("storage",s)});function r(s){d(o=s),e.setItem(t(),o)}return{subscribe:a,set:r}}function F(){let n=!0;const{subscribe:o,set:t}=u(void 0,()=>{if(!f)return;const r=i=>{n&&t(i.matches?"light":"dark")},s=window.matchMedia("(prefers-color-scheme: light)");return s.addEventListener("change",r),()=>s.removeEventListener("change",r)});function a(){if(!f)return;const r=window.matchMedia("(prefers-color-scheme: light)");t(r.matches?"light":"dark")}function d(r){n=r}return{subscribe:o,query:a,tracking:d}}function K(){const{subscribe:e}=S([w,A,q,M,_,z],([n,o,t,a,d,r])=>{if(!f)return;const s=n==="system"?o:n,i=b(d),c=b(r);function m(){const l=document.documentElement,h=document.querySelector('meta[name="theme-color"]');s==="light"?(i.length&&l.classList.remove(...i),c.length&&l.classList.add(...c),l.style.colorScheme="light",h&&t&&h.setAttribute("content",t.light)):(c.length&&l.classList.remove(...c),i.length&&l.classList.add(...i),l.style.colorScheme="dark",h&&t&&h.setAttribute("content",t.dark))}return a?k(m):m(),s});return{subscribe:e}}function P(){const{subscribe:e}=S([L,M],([n,o])=>{if(!f)return;function t(){document.documentElement.setAttribute("data-theme",n)}return o?k(t):t(),n});return{subscribe:e}}function v(e){return typeof e!="string"?!1:T.includes(e)}function B(){w.set(g(C)==="dark"?"light":"dark")}function U(e){w.set(e)}function G(e){L.set(e)}function H(e){return e}function J({defaultMode:e="system",themeColors:n,darkClassNames:o=["dark"],lightClassNames:t=[],defaultTheme:a="",modeStorageKey:d="mode-watcher-mode",themeStorageKey:r="mode-watcher-theme"}){const s=document.documentElement,i=localStorage.getItem(d)||e,c=localStorage.getItem(r)||a,m=i==="light"||i==="system"&&window.matchMedia("(prefers-color-scheme: light)").matches;if(m?(o.length&&s.classList.remove(...o),t.length&&s.classList.add(...t)):(t.length&&s.classList.remove(...t),o.length&&s.classList.add(...o)),s.style.colorScheme=m?"light":"dark",n){const l=document.querySelector('meta[name="theme-color"]');l&&l.setAttribute("content",i==="light"?n.light:n.dark)}c&&(s.setAttribute("data-theme",c),localStorage.setItem(r,c)),localStorage.setItem(d,i)}export{C as a,j as b,A as c,H as d,U as e,G as f,V as g,M as h,v as i,q as j,_ as k,z as l,I as m,J as s,B as t};
