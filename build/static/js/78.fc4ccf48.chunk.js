/*! For license information please see 78.fc4ccf48.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkbrava=self.webpackChunkbrava||[]).push([[78],{5078:(e,t,r)=>{r.r(t),r.d(t,{default:()=>v});for(var n=r(2791),o=r(7689),a=r(1087),s=r(5294),i=r(8329),c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",l=new Map,u=0;u<64;u++){var d=u.toString(2),p=6-d.length;d="0".repeat(p)+d,l.set(c.charCodeAt(u),d)}function m(e){var t=function(e){for(var t="",r=0;r<e.length;r++)t+=l.get(e.charCodeAt(r));t=t.slice(0,t.length-t.length%8);for(var n=[],o=0;o<t.length/8;o++)n.push(t.slice(8*o,8*o+8));return n}(e=(e=(e=e.replaceAll("=","")).replaceAll("-","+")).replaceAll("_","/"));return t.map((function(e){return parseInt(e,2)}))}function h(e){try{if(3!==e.split(".").length||"string"!==typeof e)return null;var t=m(e.split(".")[1]),r=decodeURIComponent(function(e){for(var t,r="",n=e.length,o=0;o<n;o++)t=e[o],r+=String.fromCodePoint(t>251&&t<254&&o+5<n?1073741824*(t-252)+(e[++o]-128<<24)+(e[++o]-128<<18)+(e[++o]-128<<12)+(e[++o]-128<<6)+e[++o]-128:t>247&&t<252&&o+4<n?(t-248<<24)+(e[++o]-128<<18)+(e[++o]-128<<12)+(e[++o]-128<<6)+e[++o]-128:t>239&&t<248&&o+3<n?(t-240<<18)+(e[++o]-128<<12)+(e[++o]-128<<6)+e[++o]-128:t>223&&t<240&&o+2<n?(t-224<<12)+(e[++o]-128<<6)+e[++o]-128:t>191&&t<224&&o+1<n?(t-192<<6)+e[++o]-128:t);return r}(t));return JSON.parse(r)}catch(n){return console.error("There was an error decoding token: ",n),null}}var f=r(184);const v=()=>{const[e,t]=(0,n.useState)(""),[r,c]=(0,n.useState)(""),l=(0,o.s0)();(0,n.useEffect)((()=>{const e=i.Z.get("session_token");if(e){const{userId:t}=h(e);l("/".concat(t,"/dashboard"))}}),[]);const u=i.Z.get("session_token");if(u){const{userId:e}=h(u);return l("/".concat(e,"/dashboard")),null}return(0,f.jsxs)("div",{className:"login-container",children:[(0,f.jsx)(a.rU,{to:"/login"}),(0,f.jsx)("h1",{className:"welcome",children:"Bem vindo \xe0 Brava"}),(0,f.jsxs)("div",{className:"card",children:[(0,f.jsx)("img",{className:"logo",src:"https://res.cloudinary.com/dnho57ne8/image/upload/v1699913993/brava_fqk4h4.png"}),(0,f.jsx)("h2",{children:"Entre para gerir a sua conta "}),(0,f.jsxs)("form",{className:"form",onSubmit:async e=>{e.preventDefault();const t=e.target.elements.email?e.target.email.value:"",r=e.target.elements.password?e.target.password.value:"";if(""!==t.trim()&&""!==r.trim())try{const e=await s.Z.post("https://".concat("app.bravanfc.com","/api/login"),{email:t,password:r}),{token:n}=e.data,{userId:o}=h(n),a=new Date;a.setDate(a.getDate()+30),i.Z.set("session_token",n,{expires:30}),l("/".concat(o,"/dashboard/overview"))}catch(n){console.log("Axios error",n),n.response?409===n.response.status?console.log("um user com este email n\xe3o existe"):console.log("Erro de servidor. Tente novamente mais tarde."):n.request?console.log("Sem resposta do servidor. Tente novamente mais tarde."):console.log("Erro na requisi\xe7\xe3o. Tente novamente mais tarde.")}else alert("Preencha todos os campos por favor")},children:[(0,f.jsx)("input",{type:"email",placeholder:"Email",name:"email",id:"email",onChange:e=>t(e.target.value),value:e}),(0,f.jsx)("input",{type:"password",placeholder:"Password",name:"password",id:"password",onChange:e=>c(e.target.value),value:r}),(0,f.jsx)("button",{type:"submit",children:"SIGN UP"}),(0,f.jsx)("p",{className:"existing-users-text",children:"Don't have an account yet?"}),(0,f.jsx)("a",{onClick:()=>l("/signup"),children:" Click me!"})]})]})]})}},8329:(e,t,r)=>{function n(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)e[n]=r[n]}return e}r.d(t,{Z:()=>o});var o=function e(t,r){function o(e,o,a){if("undefined"!==typeof document){"number"===typeof(a=n({},r,a)).expires&&(a.expires=new Date(Date.now()+864e5*a.expires)),a.expires&&(a.expires=a.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var s="";for(var i in a)a[i]&&(s+="; "+i,!0!==a[i]&&(s+="="+a[i].split(";")[0]));return document.cookie=e+"="+t.write(o,e)+s}}return Object.create({set:o,get:function(e){if("undefined"!==typeof document&&(!arguments.length||e)){for(var r=document.cookie?document.cookie.split("; "):[],n={},o=0;o<r.length;o++){var a=r[o].split("="),s=a.slice(1).join("=");try{var i=decodeURIComponent(a[0]);if(n[i]=t.read(s,i),e===i)break}catch(c){}}return e?n[e]:n}},remove:function(e,t){o(e,"",n({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,n({},this.attributes,t))},withConverter:function(t){return e(n({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(r)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}}]);
//# sourceMappingURL=78.fc4ccf48.chunk.js.map