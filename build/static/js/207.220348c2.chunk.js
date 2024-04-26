(self.webpackChunkbrava=self.webpackChunkbrava||[]).push([[207,156],{8313:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>l});var t=s(2791),n=s(7689),c=s(175),o=s(8329),i=s(184);const l=function(){const e=(0,n.s0)();return(0,t.useEffect)((()=>{o.Z.get("session_token")||e("/login")}),[e]),(0,i.jsxs)("div",{className:"account-container",children:[(0,i.jsx)(c.Z,{}),(0,i.jsx)("button",{onClick:()=>{o.Z.remove("session_token"),localStorage.removeItem("profile_image_url"),localStorage.removeItem("username"),e("/login")},children:"Logout"})]})}},2016:(e,a,s)=>{"use strict";s.r(a),s.d(a,{Dashboard:()=>x,default:()=>j});var t=s(2791),n=s(7689),c=s(5294),o=s(175),i=s(184);const l=function(e){let{user_id:a,contact_id:s,name:n,company:c,email:o,message:l,contact_date:r,phone:d,sector:h}=e;const u=window.innerWidth<=1e3,m=new Date(r).toLocaleDateString(),[v,p]=(0,t.useState)(!1),f=()=>{p(!v)};return(0,i.jsxs)("div",{className:"contacts",children:[(0,i.jsx)("div",{className:"contact",children:(0,i.jsxs)("dl",{className:"contact-details",children:[(0,i.jsx)("div",{children:(0,i.jsxs)("dt",{children:[n,", ",c]})}),(0,i.jsx)("div",{children:(0,i.jsx)("dd",{style:{marginRight:"80px"},children:o})}),(0,i.jsx)("div",{children:(0,i.jsx)("dd",{children:d})}),(0,i.jsx)("div",{children:(0,i.jsx)("dd",{children:h})}),!u&&(0,i.jsx)("div",{children:(0,i.jsx)("dd",{style:{marginLeft:"-10px"},children:m})}),(0,i.jsx)("div",{className:"contact-message ".concat(u?"full-width-message":""),children:(0,i.jsx)("dt",{children:(0,i.jsx)("button",{onClick:f,children:"Read Message"})})})]})}),v&&(0,i.jsx)("div",{className:"lead-modal",children:(0,i.jsxs)("div",{className:"lead-modal-content",children:[(0,i.jsx)("span",{className:"close",onClick:f,children:"\xd7"}),(0,i.jsx)("h2",{className:"lead-modal-name",children:"Message"}),(0,i.jsx)("p",{children:l}),(0,i.jsxs)("div",{className:"modal-buttons",children:[d&&(0,i.jsxs)("button",{onClick:()=>window.location.href="tel:".concat(d),children:["Call ",n]}),o&&(0,i.jsxs)("button",{onClick:()=>window.location.href="mailto:".concat(o),children:["Email ",o]})]})]})})]})};var r=s(4802);const d=e=>{var a;let{userId:s}=e;const[n,o]=(0,t.useState)(null),[d,h]=(0,t.useState)(""),[u,m]=(0,t.useState)("mostRecent"),[v,p]=(0,t.useState)(1),[f,g]=(0,t.useState)(!0),x=window.innerWidth<=1e3;(0,t.useEffect)((()=>{(async()=>{try{const e=await c.Z.get("https://".concat("app.bravanfc.com","/api/").concat(s,"/leads"));o(e.data),g(!1)}catch(e){console.log("Error fetching contact data:",e),g(!1)}})()}),[s]);const j=n?n.filter((e=>e.name.toLowerCase().includes(d.toLowerCase())||e.email.toLowerCase().includes(d.toLowerCase())||e.company.toLowerCase().includes(d.toLowerCase()))).sort(((e,a)=>"mostRecent"===u?new Date(a.contact_date)-new Date(e.contact_date):new Date(e.contact_date)-new Date(a.contact_date))):[],w=7*v,b=w-7,y=j.slice(b,w),N=(y.length,(0,i.jsx)("div",{className:"pagination-container",children:(0,i.jsx)("ul",{className:"pagination",children:Array.from({length:Math.max(1,Math.ceil(j.length/7))},((e,a)=>(0,i.jsx)("li",{className:v===a+1?"active":"",onClick:()=>p(a+1),children:a+1},a)))})}));return(0,i.jsxs)("div",{className:"lead-container",children:[(0,i.jsx)("div",{className:"lead-header",children:(0,i.jsx)("h1",{className:"lead-title",children:"Card generated Leads"})}),(0,i.jsxs)("div",{className:"lead-wrapper",children:[(0,i.jsxs)("div",{className:"filter-container",children:[(0,i.jsx)("input",{type:"text",placeholder:"Search...",value:d,onChange:e=>h(e.target.value),style:{width:"100%"}}),(0,i.jsxs)("select",{value:u,onChange:e=>m(e.target.value),style:{height:"40px"},children:[(0,i.jsx)("option",{value:"mostRecent",children:"Most Recent"}),(0,i.jsx)("option",{value:"oldest",children:"Oldest"})]})]}),(0,i.jsxs)("div",{className:"contact-description",children:[(0,i.jsx)("h1",{children:"Name, Company"}),(0,i.jsx)("h1",{children:"Email"}),(0,i.jsx)("h1",{style:{marginLeft:"40px"},children:"Phone"}),(0,i.jsx)("h1",{children:"Sector"}),(0,i.jsx)("h1",{children:"Contact Date"}),(0,i.jsx)("h1",{children:"Message"})]}),f?(0,i.jsx)("p",{children:"Loading..."}):y.length>0?y.map((e=>(0,i.jsx)(l,{user_id:e.user_id,contact_id:e.contact_id,name:e.name,company:e.company,email:e.email,sector:e.sector,phone:e.phone,message:e.message,contact_date:e.contact_date},e.contact_id))):(0,i.jsx)("p",{children:"No results found."}),(0,i.jsx)("button",{className:"download-csv-button",onClick:()=>{if(n&&n.length>0){const e=[["Name","Email","Company","Contact Date","Message"].join(",")];n.forEach((a=>{const s=[a.name,a.email,a.company,a.sector,a.phone,a.contact_date,a.message];e.push(s.join(","))}));const a=e.join("\n"),s=new Blob([a],{type:"text/csv;charset=utf-8"});(0,r.saveAs)(s,"leads.csv")}},children:"Export Leads"})]}),N,(0,i.jsx)("div",{className:"overview-body-sidebar",children:(0,i.jsxs)("section",{className:"payment-section",children:[!x&&(0,i.jsxs)("div",{children:[(0,i.jsx)("h2",{children:"GENERATED LEADS: "}),(0,i.jsx)("div",{className:"contact-counter",children:null!==(a=null===n||void 0===n?void 0:n.length)&&void 0!==a?a:0})]}),(0,i.jsx)("div",{className:"payment-section-header"})]})})]})};var h=s(7361),u=s(8416),m=s(8329);const v=()=>{const{id:e}=(0,n.UO)(),a=(0,n.s0)(),[s,o]=(0,t.useState)(null);(0,t.useEffect)((()=>{(async()=>{try{if(!m.Z.get("session_token"))return void a("/login");const s=await c.Z.get("https://".concat("app.bravanfc.com","/api/").concat(e,"/dashboard/cards"));o(s.data)}catch(s){console.error("Error fetching card data:",s)}})()}),[e,a]);return(0,i.jsx)("div",{children:s&&(0,i.jsx)(u.default,{initialValues:s,onSubmit:async s=>{try{const t=await c.Z.put("https://".concat("app.bravanfc.com","/api/updatecard"),s,{headers:{"Content-Type":"multipart/form-data"}});console.log("Card updated:",t.data),a("/".concat(e,"/dashboard/my-card"))}catch(t){console.error("Error updating card:",t)}},isEditing:!0})})},p=e=>{let{handleTabClick:a}=e;const[s,n]=(0,t.useState)(!1),[c,o]=(0,t.useState)(!1),l=e=>{a(e),o(!1)};return(0,i.jsxs)("div",{className:"overview-body-navigation",children:[(0,i.jsx)("div",{className:"mobile-menu-button",onClick:()=>{o(!c)},children:(0,i.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/icons8-menu.svg?v=1714064137",alt:"Menu",className:"menu-icon"})}),(0,i.jsxs)("nav",{className:"side-navigation ".concat(c?"show":""),children:[(0,i.jsx)("div",{className:"dashboard-header-logo",children:(0,i.jsx)("div",{className:"dashboard-logo",children:(0,i.jsx)("span",{className:"dashboard-logo-icon",children:(0,i.jsx)("img",{src:"https://res.cloudinary.com/dnho57ne8/image/upload/v1699913993/brava_fqk4h4.png",alt:"Logo"})})})}),(0,i.jsxs)("a",{onClick:()=>l("overview"),href:"#",className:"nav-link",children:[(0,i.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/dashboard.svg?v=1713982497",alt:"Dashboard",className:"nav-icon"}),(0,i.jsx)("span",{children:"Dashboard"})]}),(0,i.jsxs)("div",{className:"dropdown-wrapper",children:[(0,i.jsxs)("div",{className:"dropdown-header",onClick:()=>{n(!s)},children:[(0,i.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/account-balance-wallet.svg?v=1713982779",alt:"Cards",className:"nav-icon"}),(0,i.jsx)("span",{children:"Cards"})]}),s&&(0,i.jsxs)("ul",{className:"dropdown-content",children:[(0,i.jsx)("li",{onClick:()=>l("my-card"),children:"My Card"}),(0,i.jsx)("li",{onClick:()=>l("edit-card"),children:"Edit Card"})]})]}),(0,i.jsxs)("a",{onClick:()=>l("leads"),href:"#",className:"nav-link",children:[(0,i.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/mail.svg?v=1713983246",alt:"Leads",className:"nav-icon"}),(0,i.jsx)("span",{children:"Leads"})]}),(0,i.jsxs)("a",{href:"#",className:"nav-link",children:[(0,i.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/calendar-today.svg?v=1713983141",alt:"Calendar",className:"nav-icon"}),(0,i.jsx)("span",{children:"Calendar"})]}),(0,i.jsxs)("a",{onClick:()=>l("account"),href:"#",className:"nav-link",children:[(0,i.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/settings.svg?v=1713983432",alt:"Settings",className:"nav-icon"}),(0,i.jsx)("span",{children:"Settings"})]}),(0,i.jsxs)("a",{href:"https://bravanfc.com",target:"_blank",className:"nav-link",children:[(0,i.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/local-grocery-store.svg?v=1713983431",alt:"Store",className:"nav-icon"}),(0,i.jsx)("span",{children:"Store"})]}),(0,i.jsxs)("a",{href:"#",className:"nav-link",children:[(0,i.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/logout.svg?v=1713983567",alt:"Logout",className:"nav-icon"}),(0,i.jsx)("span",{children:"Logout"})]})]})]})};var f=s(8313);const g=e=>{let{contactData:a,userId:s}=e;window.innerWidth;const c=(0,n.s0)(),{tab:o}=(0,n.UO)(),[l,r]=(0,t.useState)(!1),[u,g]=(0,t.useState)(1),[x,j]=(0,t.useState)(o||"overview");if(Array.isArray(a)&&a.length>0){const e=5*u,s=e-5;a.slice(s,e)}(0,t.useEffect)((()=>{a&&a.length>0&&console.log("User ID:",s)}),[a,s]);(0,t.useEffect)((()=>{m.Z.get("session_token")||c("/login")}),[c]);const[w,b]=(0,t.useState)(!1);return(0,i.jsx)("div",{children:(0,i.jsxs)("div",{className:"overview",children:[(0,i.jsx)(p,{handleTabClick:e=>{c("/".concat(s,"/dashboard/").concat(e)),j(e),r(!1)}}),(0,i.jsxs)("div",{className:"overview-body-main-content",children:["overview"===x&&(0,i.jsx)("section",{className:"service-section",children:"Analytics"}),"my-card"===x&&(0,i.jsx)(h.default,{}),"edit-card"===x&&(0,i.jsx)(v,{}),"leads"===x&&(0,i.jsx)(d,{userId:s}),"account"===x&&(0,i.jsx)(f.default,{})]})]})})};function x(){var e,a;const{id:s,tab:l}=(0,n.UO)(),r=(0,n.s0)(),[d,u]=(0,t.useState)(null),v=(0,t.useRef)(!1);return(0,t.useEffect)((()=>{s&&!v.current&&(console.log("making request"),(async()=>{try{if(!m.Z.get("session_token"))return void r("/login");const e=await c.Z.get("https://".concat("app.bravanfc.com","/api/").concat(s,"/dashboard"),{withCredentials:!0}),{username:a,profile_image_url:t}=e.data;u({username:a,profile_image_url:t}),localStorage.setItem("profile_image_url",t),localStorage.setItem("username",a),v.current=!0}catch(e){console.log("Error fetching data:",e)}})())}),[s,r]),(0,i.jsxs)("div",{children:[(0,i.jsx)(o.Z,{header_username:d?null===(e=d[0])||void 0===e?void 0:e.username:"Loading...",profile_picture:d?null===(a=d[0])||void 0===a?void 0:a.profile_image_url:"default_profile_picture_url"}),(0,i.jsxs)("div",{className:"dashboard-body",children:[(0,i.jsx)(g,{selectedTab:l,contactData:d,userId:s}),"cards"===l&&(0,i.jsx)(h.default,{contactData:d})]})]})}const j=x},4802:function(e,a,s){var t,n,c;n=[],void 0===(c="function"===typeof(t=function(){"use strict";function a(e,a){return"undefined"==typeof a?a={autoBom:!1}:"object"!=typeof a&&(console.warn("Deprecated: Expected third argument to be a object"),a={autoBom:!a}),a.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function t(e,a,s){var t=new XMLHttpRequest;t.open("GET",e),t.responseType="blob",t.onload=function(){l(t.response,a,s)},t.onerror=function(){console.error("could not download file")},t.send()}function n(e){var a=new XMLHttpRequest;a.open("HEAD",e,!1);try{a.send()}catch(e){}return 200<=a.status&&299>=a.status}function c(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(t){var a=document.createEvent("MouseEvents");a.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(a)}}var o="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof s.g&&s.g.global===s.g?s.g:void 0,i=o.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),l=o.saveAs||("object"!=typeof window||window!==o?function(){}:"download"in HTMLAnchorElement.prototype&&!i?function(e,a,s){var i=o.URL||o.webkitURL,l=document.createElement("a");a=a||e.name||"download",l.download=a,l.rel="noopener","string"==typeof e?(l.href=e,l.origin===location.origin?c(l):n(l.href)?t(e,a,s):c(l,l.target="_blank")):(l.href=i.createObjectURL(e),setTimeout((function(){i.revokeObjectURL(l.href)}),4e4),setTimeout((function(){c(l)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,s,o){if(s=s||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(a(e,o),s);else if(n(e))t(e,s,o);else{var i=document.createElement("a");i.href=e,i.target="_blank",setTimeout((function(){c(i)}))}}:function(e,a,s,n){if((n=n||open("","_blank"))&&(n.document.title=n.document.body.innerText="downloading..."),"string"==typeof e)return t(e,a,s);var c="application/octet-stream"===e.type,l=/constructor/i.test(o.HTMLElement)||o.safari,r=/CriOS\/[\d]+/.test(navigator.userAgent);if((r||c&&l||i)&&"undefined"!=typeof FileReader){var d=new FileReader;d.onloadend=function(){var e=d.result;e=r?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),n?n.location.href=e:location=e,n=null},d.readAsDataURL(e)}else{var h=o.URL||o.webkitURL,u=h.createObjectURL(e);n?n.location=u:location.href=u,n=null,setTimeout((function(){h.revokeObjectURL(u)}),4e4)}});o.saveAs=l.saveAs=l,e.exports=l})?t.apply(a,n):t)||(e.exports=c)}}]);
//# sourceMappingURL=207.220348c2.chunk.js.map