"use strict";(self.webpackChunkbrava=self.webpackChunkbrava||[]).push([[106,812],{7361:(e,a,s)=>{s.r(a),s.d(a,{default:()=>l});var c=s(2791),n=s(7689),r=s(5294),d=s(8329),i=s(175),o=s(59),t=s(184);const l=function(){const{id:e}=(0,n.UO)(),[a,s]=(0,c.useState)(null),[l,h]=(0,c.useState)([]),[v,u]=(0,c.useState)(!0),m=(0,n.s0)();return(0,c.useEffect)((()=>{d.Z.get("session_token")||m("/login")}),[m]),(0,c.useEffect)((()=>{r.Z.get("https://".concat("app.bravanfc.com","/api/").concat(e,"/dashboard/cards"),{withCredentials:!0}).then((e=>{s(e.data),h(e.data.cards)})).catch((e=>{console.error("Error fetching cards:",e)})).finally((()=>{u(!1)}))}),[e]),null===a?(0,t.jsxs)("div",{className:"cards-container",children:[(0,t.jsx)(i.Z,{}),v&&(0,t.jsx)("div",{className:"spinner-container",children:(0,t.jsx)("div",{className:"spinner"})}),(0,t.jsx)("div",{className:"nav-tiles"})]}):(0,t.jsxs)("div",{className:"cards-container",children:[(0,t.jsx)(i.Z,{}),v&&(0,t.jsx)("div",{className:"spinner-container",children:(0,t.jsx)("div",{className:"spinner"})}),(0,t.jsx)("div",{className:"nav-tiles",children:(0,t.jsx)("div",{className:"tiles",children:!v&&l.map((e=>(0,t.jsx)(o.default,{...e},e.card_id)))})})]})}},175:(e,a,s)=>{s.d(a,{Z:()=>o});var c=s(2791),n=s(8008),r=s(7689),d=s(9823),i=s(184);const o=function(e){const{activeTab:a,onTabClick:s}=e,{id:o}=(0,r.UO)(),[t,l]=(0,c.useState)(!1),h=window.innerWidth<=1e3,v=(0,c.useRef)(null);(0,c.useEffect)((()=>{const e=e=>{v.current&&!v.current.contains(e.target)&&l(!1)},a=e=>{e.changedTouches[0].clientX-e.changedTouches[e.changedTouches.length-1].clientX>50&&l(!1)};return document.addEventListener("click",e),document.addEventListener("touchend",a),()=>{document.removeEventListener("click",e),document.removeEventListener("touchend",a)}}),[]);const u=()=>{l(!t)};return(0,i.jsx)("div",{className:"header-container",children:(0,i.jsxs)("header",{className:"dashboard-header ".concat(t?"menu-open":""),children:[(0,i.jsx)("div",{className:"dashboard-header-logo",children:(0,i.jsxs)("div",{className:"dashboard-logo",children:[(0,i.jsx)("span",{className:"dashboard-logo-icon",children:(0,i.jsx)("img",{src:"https://res.cloudinary.com/dnho57ne8/image/upload/v1699913993/brava_fqk4h4.png",alt:"Logo"})}),(0,i.jsx)("h1",{className:"logo-title",children:"Brava"})]})}),(0,i.jsx)("div",{className:"dashboard-header-navigation",children:(0,i.jsxs)("div",{className:"tabs",children:[(0,i.jsx)("a",{onClick:()=>s("overview"),href:"/".concat(o,"/dashboard/overview"),className:"overview"===a?"active":"",children:"Overview"}),(0,i.jsx)("a",{onClick:()=>s("cards"),href:"/".concat(o,"/dashboard/cards"),className:"cards"===a?"active":"",children:"Cards"}),(0,i.jsx)("a",{onClick:()=>s("account"),href:"/".concat(o,"/dashboard/account"),className:"account"===a?"active":"",children:"Account"})]})}),(0,i.jsx)("div",{className:"dashboard-header-actions",children:(0,i.jsxs)("button",{className:"user-profile",children:[(0,i.jsx)("span",{children:e.username}),(0,i.jsx)("span",{})]})}),h&&(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"dashboard-header-mobile",children:(0,i.jsx)(n.Z,{onClick:u})}),(0,i.jsxs)("div",{className:"mobile-menu ".concat(t?"open":""),children:[t&&(0,i.jsx)(d.Z,{onClick:u}),(0,i.jsx)("a",{onClick:()=>s("overview"),href:"/".concat(o,"/dashboard/overview"),className:"overview"===a?"active":"",children:"Overview"}),(0,i.jsx)("a",{onClick:()=>s("profiles"),href:"/".concat(o,"/dashboard/profiles"),className:"profiles"===a?"active":"",children:"Profiles"}),(0,i.jsx)("a",{onClick:()=>s("cards"),href:"/".concat(o,"/dashboard/cards"),className:"cards"===a?"active":"",children:"Cards"}),(0,i.jsx)("a",{onClick:()=>s("account"),href:"/".concat(o,"/dashboard/account"),className:"account"===a?"active":"",children:"Account"})]})]})]})})}}}]);
//# sourceMappingURL=106.33b79a98.chunk.js.map