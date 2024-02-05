"use strict";(self.webpackChunkbrava=self.webpackChunkbrava||[]).push([[761,326,954,49,313,812],{7049:(e,s,a)=>{a.r(s),a.d(s,{default:()=>r});var c=a(2791),n=a(7689),t=a(5294),d=a(184);const i=function(e){let{email:s,card_id:a,phone:t,username:i,company:r,title:o,onLoad:l,facebook:h,linkedin:v,instagram:m,url:u,profile_image_url:j}=e;const[x,f]=(0,c.useState)(!0),[p,g]=(0,c.useState)(null),[N,b]=(0,c.useState)(null),{id:w}=(0,n.UO)();return(0,c.useEffect)((()=>{(async()=>{try{const e=await fetch("/".concat(w,"/dashboard"));b(e.data)}catch(e){console.log(e)}})(),(async()=>{try{const e=await fetch("/images/".concat(encodeURIComponent(j)));if(!e.ok)throw new Error("Failed to fetch image: ".concat(e.status));const s=await e.blob(),a=URL.createObjectURL(s);g(a),f(!1),l&&l(a)}catch(e){console.error("Error fetching image:",e)}})()}),[j,l,w]),(0,d.jsx)("div",{class:"center",children:(0,d.jsxs)("div",{class:"extended-card",children:[(0,d.jsx)("div",{class:"additional",children:(0,d.jsx)("div",{class:"user-card",children:(0,d.jsx)("img",{src:j})})}),(0,d.jsx)("div",{class:"general",children:(0,d.jsxs)("div",{class:"more-info",children:[(0,d.jsx)("h1",{children:r}),(0,d.jsx)("div",{class:"coords",children:(0,d.jsx)("span",{children:o})}),(0,d.jsx)("div",{class:"coords",children:(0,d.jsx)("span",{children:i})})]})})]})})};const r=function(){const{id:e}=(0,n.UO)(),[s,a]=(0,c.useState)([]);return(0,c.useEffect)((()=>{(async()=>{try{const s=await t.Z.get("https://".concat("app.bravanfc.com",":4001/api/").concat(e,"/cards")),c=s.data;console.log("Card Data:",c),200===s.status?a(c.cards||[]):console.error(c.message)}catch(s){console.error("Error fetching data:",s)}})()}),[e,a]),console.log(s),(0,d.jsxs)("div",{className:"profile-card-container",children:[(0,d.jsx)("div",{children:(0,d.jsx)("h1",{className:"profile-title",children:"PICK A CARD"})}),s.map((e=>(0,d.jsx)(i,{...e},e.card_id)))]})}},8313:(e,s,a)=>{a.r(s),a.d(s,{default:()=>r});var c=a(2791),n=a(7689),t=a(175),d=a(8329),i=a(184);const r=function(){const e=(0,n.s0)();return(0,c.useEffect)((()=>{d.Z.get("session_token")||e("/login")}),[e]),(0,i.jsxs)("div",{className:"account-container",children:[(0,i.jsx)(t.Z,{}),(0,i.jsx)("button",{onClick:()=>{d.Z.remove("session_token"),e("/login")},children:"Logout"})]})}},7361:(e,s,a)=>{a.r(s),a.d(s,{default:()=>l});var c=a(2791),n=a(7689),t=a(5294),d=a(8329),i=a(175),r=a(395),o=a(184);const l=function(){const{id:e}=(0,n.UO)(),[s,a]=(0,c.useState)(null),[l,h]=(0,c.useState)([]),[v,m]=(0,c.useState)(!0),u=(0,n.s0)();return(0,c.useEffect)((()=>{d.Z.get("session_token")||u("/login")}),[u]),(0,c.useEffect)((()=>{t.Z.get("https://".concat("app.bravanfc.com","/api/").concat(e,"/dashboard/cards"),{withCredentials:!0}).then((e=>{a(e.data),h(e.data.cards)})).catch((e=>{console.error("Error fetching cards:",e)})).finally((()=>{m(!1)}))}),[e]),null===s?(0,o.jsxs)("div",{className:"cards-container",children:[(0,o.jsx)(i.Z,{}),v&&(0,o.jsx)("div",{className:"spinner-container",children:(0,o.jsx)("div",{className:"spinner"})}),(0,o.jsx)("div",{className:"nav-tiles"})]}):(0,o.jsxs)("div",{className:"cards-container",children:[(0,o.jsx)(i.Z,{}),v&&(0,o.jsx)("div",{className:"spinner-container",children:(0,o.jsx)("div",{className:"spinner"})}),(0,o.jsx)("div",{className:"nav-tiles",children:(0,o.jsx)("div",{className:"tiles",children:!v&&l.map((e=>(0,o.jsx)(r.default,{...e},e.card_id)))})})]})}},175:(e,s,a)=>{a.d(s,{Z:()=>r});var c=a(2791),n=a(8008),t=a(7689),d=a(9823),i=a(184);const r=function(e){const{activeTab:s,onTabClick:a}=e,{id:r}=(0,t.UO)(),[o,l]=(0,c.useState)(!1),h=window.innerWidth<=1e3,v=(0,c.useRef)(null);(0,c.useEffect)((()=>{const e=e=>{v.current&&!v.current.contains(e.target)&&l(!1)},s=e=>{e.changedTouches[0].clientX-e.changedTouches[e.changedTouches.length-1].clientX>50&&l(!1)};return document.addEventListener("click",e),document.addEventListener("touchend",s),()=>{document.removeEventListener("click",e),document.removeEventListener("touchend",s)}}),[]);const m=()=>{l(!o)};return(0,i.jsx)("div",{className:"header-container",children:(0,i.jsxs)("header",{className:"dashboard-header ".concat(o?"menu-open":""),children:[(0,i.jsx)("div",{className:"dashboard-header-logo",children:(0,i.jsxs)("div",{className:"dashboard-logo",children:[(0,i.jsx)("span",{className:"dashboard-logo-icon",children:(0,i.jsx)("img",{src:"https://res.cloudinary.com/dnho57ne8/image/upload/v1699913993/brava_fqk4h4.png",alt:"Logo"})}),(0,i.jsx)("h1",{className:"logo-title",children:"Brava"})]})}),(0,i.jsx)("div",{className:"dashboard-header-navigation",children:(0,i.jsxs)("div",{className:"tabs",children:[(0,i.jsx)("a",{onClick:()=>a("overview"),href:"/".concat(r,"/dashboard/overview"),className:"overview"===s?"active":"",children:"Overview"}),(0,i.jsx)("a",{onClick:()=>a("cards"),href:"/".concat(r,"/dashboard/cards"),className:"cards"===s?"active":"",children:"Cards"}),(0,i.jsx)("a",{onClick:()=>a("account"),href:"/".concat(r,"/dashboard/account"),className:"account"===s?"active":"",children:"Account"})]})}),(0,i.jsx)("div",{className:"dashboard-header-actions",children:(0,i.jsxs)("button",{className:"user-profile",children:[(0,i.jsx)("span",{children:e.username}),(0,i.jsx)("span",{})]})}),h&&(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"dashboard-header-mobile",children:(0,i.jsx)(n.Z,{onClick:m})}),(0,i.jsxs)("div",{className:"mobile-menu ".concat(o?"open":""),children:[o&&(0,i.jsx)(d.Z,{onClick:m}),(0,i.jsx)("a",{onClick:()=>a("overview"),href:"/".concat(r,"/dashboard/overview"),className:"overview"===s?"active":"",children:"Overview"}),(0,i.jsx)("a",{onClick:()=>a("profiles"),href:"/".concat(r,"/dashboard/profiles"),className:"profiles"===s?"active":"",children:"Profiles"}),(0,i.jsx)("a",{onClick:()=>a("cards"),href:"/".concat(r,"/dashboard/cards"),className:"cards"===s?"active":"",children:"Cards"}),(0,i.jsx)("a",{onClick:()=>a("account"),href:"/".concat(r,"/dashboard/account"),className:"account"===s?"active":"",children:"Account"})]})]})]})})}},4570:(e,s,a)=>{a.r(s),a.d(s,{Dashboard:()=>j,default:()=>x});var c=a(2791),n=a(7689),t=a(5294),d=a(175),i=a(7756),r=a(184);const o=function(e){let{user_id:s,contact_id:a,name:c,company:n,email:t,message:d,contact_date:o}=e;const l=window.innerWidth<=1e3;return(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:"contacts",children:(0,r.jsxs)("div",{className:"contact",children:[!l&&(0,r.jsx)(i.Z,{}),l&&(0,r.jsxs)("div",{children:[(0,r.jsx)("dt",{children:"Contact Date"}),(0,r.jsx)("dd",{children:o})]}),(0,r.jsxs)("dl",{className:"contact-details",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("dt",{children:"Name"}),(0,r.jsx)("dd",{children:c})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("dt",{children:"Company"}),(0,r.jsx)("dd",{children:n})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("dt",{children:"Email"}),(0,r.jsx)("dd",{children:t})]}),!l&&(0,r.jsxs)("div",{children:[(0,r.jsx)("dt",{children:"Contact Date"}),(0,r.jsx)("dd",{children:o})]}),(0,r.jsxs)("div",{className:"contact-message ".concat(l?"full-width-message":""),children:[(0,r.jsx)("dt",{children:"Message"}),(0,r.jsx)("dd",{children:d})]})]}),(0,r.jsx)("div",{className:"reply",children:(0,r.jsx)("button",{children:"Responder"})})]})})})};var l=a(8329);const h=()=>{const{id:e}=(0,n.UO)(),[s,a]=(0,c.useState)([]),[d,i]=(0,c.useState)(0),h=window.innerWidth<=1e3,v=(0,n.s0)();return(0,c.useEffect)((()=>{(async()=>{await t.Z.get("https://".concat("app.bravanfc.com","/api/").concat(e,"/dashboard"),{withCredentials:!0}).then((e=>{a(e.data),i(e.data.length)})).catch((e=>{console.log(e)}))})()}),[e]),(0,c.useEffect)((()=>{l.Z.get("session_token")||v("/login")}),[v]),(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:"overview",children:(0,r.jsxs)("div",{className:"overview-body",children:[(0,r.jsx)("div",{className:"overview-body-navigation"}),(0,r.jsx)("div",{className:"overview-body-main-content",children:(0,r.jsxs)("section",{className:"contact-section",children:[h&&(0,r.jsxs)("div",{className:"gen-leads",children:[(0,r.jsx)("h2",{children:"GENERATED LEADS: "}),(0,r.jsx)("div",{className:"contact-counter",children:d})]}),(0,r.jsx)("div",{className:"contact-section-header",children:(0,r.jsx)("h2",{children:"\xdaltimos Contactos"})}),s.map((e=>(0,r.jsx)(o,{name:e.name,email:e.email,company:e.company,contact_date:e.contact_date,message:e.message},e.contact_id)))]})}),(0,r.jsx)("div",{className:"overview-body-sidebar",children:(0,r.jsxs)("section",{className:"payment-section",children:[!h&&(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:"GENERATED LEADS: "}),(0,r.jsx)("div",{className:"contact-counter",children:d})]}),(0,r.jsx)("div",{className:"payment-section-header"})]})})]})})})};var v=a(8326),m=a(7361),u=a(8313);function j(){const{id:e}=(0,n.UO)(),[s,a]=(0,c.useState)("overview"),[i,o]=(0,c.useState)(null),j=(0,n.s0)();return(0,c.useEffect)((()=>{l.Z.get("session_token")||j("/login")}),[j]),(0,c.useEffect)((()=>{(async()=>{try{const s=await t.Z.get("https://".concat("app.bravanfc.com","/api/").concat(e,"/dashboard"),{withCredentials:!0});o(s.data)}catch(s){console.log("Error fetching data:",s)}})()}),[e,j]),i?(0,r.jsx)("div",{children:(0,r.jsxs)("div",{className:"dashboard",children:[(0,r.jsx)(d.Z,{username:i.username,activeTab:s,onTabClick:e=>{a(e)}}),(0,r.jsxs)("div",{className:"dashboard-body",children:["overview"===s&&(0,r.jsx)(h,{userId:i.id,username:i.username}),"profiles"===s&&(0,r.jsx)(v.default,{userId:i.id}),"cards"===s&&(0,r.jsx)(m.default,{}),"account"===s&&(0,r.jsx)(u.default,{userId:i.id})]})]})}):(0,r.jsx)("div",{children:"Loading..."})}const x=j},8326:(e,s,a)=>{a.r(s),a.d(s,{default:()=>r});var c=a(2791),n=a(7689),t=a(5294),d=a(7049),i=a(184);const r=function(){const{id:e}=(0,n.UO)(),[s,a]=(0,c.useState)(null);return(0,c.useEffect)((()=>{(async()=>{try{const s=await t.Z.get("https://".concat("app.bravanfc.com","/api/").concat(e,"/profile"));console.log(s.data),a(s.data)}catch(s){console.log("Error fetchin data:",s)}})()}),[e]),s?(0,i.jsxs)("div",{className:"backgroundd",children:[(0,i.jsx)("div",{className:"bg-pattern-top"}),(0,i.jsx)("div",{className:"bg-pattern-bottom"}),(0,i.jsx)(d.default,{name:s.username,age:s.email,phone:s.phone,followers:"80K",likes:"803K",photos:"1.4K"})]}):(0,i.jsx)("div",{children:"Loading..."})}},7756:(e,s,a)=>{var c=a(4836);s.Z=void 0;var n=c(a(5649)),t=a(184),d=(0,n.default)((0,t.jsx)("path",{d:"M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"}),"PersonOutline");s.Z=d}}]);
//# sourceMappingURL=761.bdb483b0.chunk.js.map