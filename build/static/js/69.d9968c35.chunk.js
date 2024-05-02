"use strict";(self.webpackChunkbrava=self.webpackChunkbrava||[]).push([[69],{8313:(e,s,a)=>{a.r(s),a.d(s,{default:()=>r});var t=a(2791),n=a(7689),c=a(175),i=a(8329),l=a(184);const r=function(){const e=(0,n.s0)();return(0,t.useEffect)((()=>{i.Z.get("session_token")||e("/login")}),[e]),(0,l.jsxs)("div",{className:"account-container",children:[(0,l.jsx)(c.Z,{}),(0,l.jsx)("button",{onClick:()=>{i.Z.remove("session_token"),localStorage.removeItem("profile_image_url"),localStorage.removeItem("username"),e("/login")},children:"Logout"})]})}},5377:(e,s,a)=>{a.r(s),a.d(s,{Dashboard:()=>L,default:()=>D});var t=a(2791),n=a(7689),c=a(5294),i=a(175),l=a(185),r=a(7448),o=a(344),d=a(8552),h=a(184);const u=e=>{let{leadsData:s}=e;const a=(0,t.useRef)(null),[n,c]=(0,t.useState)({width:0,height:0});if((0,t.useEffect)((()=>{const e=new ResizeObserver((e=>{const s=e[0];if(s){const{width:e,height:a}=s.contentRect;c({width:e,height:a})}}));return e.observe(a.current),()=>{e.disconnect()}}),[]),!s||!Array.isArray(s))return null;const i={Sun:0,Mon:0,Tue:0,Wed:0,Thu:0,Fri:0,Sat:0};s.forEach((e=>{const s=new Date(e.access_date).toLocaleDateString("en-US",{weekday:"short"});i[s]+=1}));const u=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],x=u.map((e=>({x:e,y:i[e]})));return(0,h.jsx)("div",{ref:a,className:"graph-container",children:(0,h.jsxs)(l.k,{width:n.width,height:n.height,children:[(0,h.jsx)(r.X,{text:"Weekly Taps",x:n.width/2,y:10,textAnchor:"middle",style:{fill:"#fff",fontSize:22,fontWeight:"bold"}}),(0,h.jsx)(o.E,{tickValues:u,style:{tickLabels:{fontSize:16,fill:"#fff",fontWeight:"bold"},axis:{stroke:"#fff"}}}),(0,h.jsx)(o.E,{dependentAxis:!0,style:{tickLabels:{fontSize:16,fill:"#fff",fontWeight:"bold"},axis:{stroke:"#fff"}}}),(0,h.jsx)(d.j,{data:x,style:{data:{stroke:"#8824c2"},parent:{border:"1px solid #000"}}})]})})};const x=function(e){let{user_id:s,contact_id:a,name:n,company:c,email:i,message:l,contact_date:r,phone:o,sector:d}=e;const u=window.innerWidth<=1e3,x=new Date(r).toLocaleDateString(),[m,j]=(0,t.useState)(!1),v=()=>{j(!m)};return(0,h.jsxs)("div",{className:"contacts",children:[(0,h.jsx)("div",{className:"contact",children:(0,h.jsxs)("dl",{className:"contact-details",children:[(0,h.jsx)("div",{children:(0,h.jsxs)("dt",{children:[n,", ",c]})}),(0,h.jsx)("div",{children:(0,h.jsx)("dd",{style:{marginRight:"80px"},children:i})}),(0,h.jsx)("div",{children:(0,h.jsx)("dd",{children:o})}),(0,h.jsx)("div",{children:(0,h.jsx)("dd",{children:d})}),!u&&(0,h.jsx)("div",{children:(0,h.jsx)("dd",{style:{marginLeft:"-10px"},children:x})}),(0,h.jsx)("div",{className:"contact-message ".concat(u?"full-width-message":""),children:(0,h.jsx)("dt",{children:(0,h.jsx)("button",{onClick:v,children:"Read Message"})})})]})}),m&&(0,h.jsx)("div",{className:"lead-modal",children:(0,h.jsxs)("div",{className:"lead-modal-content",children:[(0,h.jsx)("span",{className:"close",onClick:v,children:"\xd7"}),(0,h.jsx)("h2",{className:"lead-modal-name",children:"Message"}),(0,h.jsx)("p",{children:l}),(0,h.jsxs)("div",{className:"modal-buttons",children:[o&&(0,h.jsxs)("button",{onClick:()=>window.location.href="tel:".concat(o),children:["Call ",n]}),i&&(0,h.jsxs)("button",{onClick:()=>window.location.href="mailto:".concat(i),children:["Email ",i]})]})]})})]})};var m=a(4802);const j=e=>{var s;let{userId:a,leadsData:n}=e;const[i,l]=(0,t.useState)(null),[r,o]=(0,t.useState)(""),[d,u]=(0,t.useState)("mostRecent"),[j,v]=(0,t.useState)(1),[p,f]=(0,t.useState)(!0),g=window.innerWidth<=1e3;if((0,t.useEffect)((()=>{(async()=>{try{const e=await c.Z.get("https://".concat("app.bravanfc.com","/api/").concat(a,"/contacts"));l(e.data.contacts),f(!1)}catch(e){console.log("Error fetching contact data:",e),f(!1)}})()}),[a]),p)return(0,h.jsx)("p",{children:"Loading..."});const y=Array.isArray(i)?i.filter((e=>e.name.toLowerCase().includes(r.toLowerCase())||e.email.toLowerCase().includes(r.toLowerCase())||e.company.toLowerCase().includes(r.toLowerCase()))).sort(((e,s)=>"mostRecent"===d?new Date(s.contact_date)-new Date(e.contact_date):new Date(e.contact_date)-new Date(s.contact_date))):[],N=7*j,w=N-7,b=y.slice(w,N),_=(b.length,(0,h.jsx)("div",{className:"pagination-container",children:(0,h.jsx)("ul",{className:"pagination",children:Array.from({length:Math.max(1,Math.ceil(y.length/7))},((e,s)=>(0,h.jsx)("li",{className:j===s+1?"active":"",onClick:()=>v(s+1),children:s+1},s)))})}));return(0,h.jsxs)("div",{className:"lead-container",children:[(0,h.jsx)("div",{className:"lead-header",children:(0,h.jsx)("h1",{className:"lead-title",children:"Card generated Leads"})}),(0,h.jsxs)("div",{className:"lead-wrapper",children:[(0,h.jsxs)("div",{className:"filter-container",children:[(0,h.jsx)("input",{type:"text",placeholder:"Search...",value:r,onChange:e=>o(e.target.value),style:{width:"100%"}}),(0,h.jsxs)("select",{value:d,onChange:e=>u(e.target.value),style:{height:"40px"},children:[(0,h.jsx)("option",{value:"mostRecent",children:"Most Recent"}),(0,h.jsx)("option",{value:"oldest",children:"Oldest"})]})]}),(0,h.jsxs)("div",{className:"contact-description",children:[(0,h.jsx)("h1",{children:"Name, Company"}),(0,h.jsx)("h1",{children:"Email"}),(0,h.jsx)("h1",{style:{marginLeft:"40px"},children:"Phone"}),(0,h.jsx)("h1",{children:"Sector"}),(0,h.jsx)("h1",{children:"Contact Date"}),(0,h.jsx)("h1",{children:"Message"})]}),p?(0,h.jsx)("p",{children:"Loading..."}):b.length>0?b.map((e=>(0,h.jsx)(x,{user_id:e.user_id,contact_id:e.contact_id,name:e.name,company:e.company,email:e.email,sector:e.sector,phone:e.phone,message:e.message,contact_date:e.contact_date},e.contact_id))):(0,h.jsx)("p",{children:"No results found."}),(0,h.jsx)("button",{className:"download-csv-button",onClick:()=>{if(i&&i.length>0){const e=[["Name","Email","Company","Contact Date","Message"].join(",")];i.forEach((s=>{const a=[s.name,s.email,s.company,s.sector,s.phone,s.contact_date,s.message];e.push(a.join(","))}));const s=e.join("\n"),a=new Blob([s],{type:"text/csv;charset=utf-8"});(0,m.saveAs)(a,"leads.csv")}},children:"Export Leads"})]}),_,(0,h.jsx)("div",{className:"overview-body-sidebar",children:(0,h.jsxs)("section",{className:"payment-section",children:[!g&&(0,h.jsxs)("div",{children:[(0,h.jsx)("h2",{children:"GENERATED LEADS: "}),(0,h.jsx)("div",{className:"contact-counter",children:null!==(s=null===i||void 0===i?void 0:i.length)&&void 0!==s?s:0})]}),(0,h.jsx)("div",{className:"payment-section-header"})]})})]})};var v=a(7361),p=a(8329),f=a(8416);const g=()=>{var e;const{id:s}=(0,n.UO)(),a=(0,n.s0)(),[i,l]=(0,t.useState)(null);return(0,t.useEffect)((()=>{(async()=>{try{if(!p.Z.get("session_token"))return void a("/login");const e=await c.Z.get("https://".concat("app.bravanfc.com","/api/").concat(s,"/dashboard/cards"));l(e.data)}catch(e){console.error("Error fetching card data:",e)}})()}),[s,a]),(0,h.jsx)("div",{children:i&&(0,h.jsx)(f.default,{initialValues:null===i||void 0===i?void 0:i.cards[0],cardId:null===(e=i.cards[0])||void 0===e?void 0:e.card_id,isEditing:!0})})};var y=a(5717),N=(a(3037),a(8688),a(6140));const w=()=>{const{id:e}=(0,n.UO)(),[s,a]=(0,t.useState)([]);(0,t.useEffect)((()=>{(async()=>{try{var s;const t=(await c.Z.get("https://".concat("app.bravanfc.com","/api/").concat(e,"/icon-engagement"))).data,n=null===t||void 0===t?void 0:t.top5Metrics.reduce(((e,s)=>e+s.count),0),l=null===t||void 0===t||null===(s=t.top5Metrics)||void 0===s?void 0:s.filter((e=>e.count>0));if(l&&0!==n){const e=[["Metric","Count"],...l.map((e=>[i(e.metric),e.count]))];a(e)}}catch(t){console.error("Error fetching data:",t)}})()}),[e]);const i=e=>{switch(e){case"google_reviews_count":return"Google Reviews";case"instagram_count":return"Instagram";case"facebook_count":return"Facebook";case"linkedin_count":return"LinkedIn";case"youtube_count":return"YouTube";case"paypal_count":return"PayPal";case"twitter_count":return"Twitter";case"tiktok_count":return"TikTok";case"spotify_count":return"Spotify";case"vinted_count":return"Vinted";case"notes_count":return"Notes";case"address_count":return"Address";case"standvirtual_count":return"Standvirtual";case"olx_count":return"OLX";case"piscapisca_count":return"Piscapisca";case"custojusto_count":return"Custo Justo";case"url_count":return"URL";default:return e}};return(0,h.jsxs)("div",{className:"pie-chart-container",children:[(0,h.jsx)("h2",{children:"Social Media Engagement"}),(0,h.jsx)("div",{className:"pie-chart",children:s&&s.length>0?(0,h.jsx)(N.kL,{width:"100%",height:"100%",chartType:"PieChart",data:s,options:{pieSliceText:"none",pieHole:.5,sliceVisibilityThreshold:.01,legend:{textStyle:{color:"#fff",fontSize:16}},backgroundColor:"#1b1b1c",pieSliceBorderColor:"none",colors:["#613FB8","#361BA0","#8B63D0","#B688E7","#E0ACFF"],chartArea:{width:"100%",height:"100%",top:0,left:0}}}):(0,h.jsx)("p",{children:"No data available"})})]})},b=e=>{let{contacts:s,count:a}=e;const n=Array.isArray(s)?s:[],[c,i]=(0,t.useState)(1),[l,r]=(0,t.useState)(1),[o,d]=(0,t.useState)(null);(0,t.useEffect)((()=>{const e=Math.ceil(a/5);r(e)}),[a]);const u=5*(c-1),x=u+5,m=n.slice(u,x),j=50*Math.max(5,m.length);return(0,h.jsxs)("div",{className:"last-contacts-component",children:[(0,h.jsxs)("div",{className:"table-container",style:{height:j},children:[(0,h.jsx)("h1",{children:"Recent Leads"}),(0,h.jsxs)("table",{children:[(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{children:"Name"}),(0,h.jsx)("th",{children:"Company"}),(0,h.jsx)("th",{children:"Email"}),(0,h.jsx)("th",{children:"Phone"}),(0,h.jsx)("th",{children:"Contact Date"}),(0,h.jsx)("th",{children:"Sector"}),(0,h.jsx)("th",{children:"Message"})]})}),(0,h.jsx)("tbody",{children:m.map(((e,s)=>(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{children:e.name||"-"}),(0,h.jsx)("td",{children:e.company||"-"}),(0,h.jsx)("td",{children:e.email||"-"}),(0,h.jsx)("td",{children:e.phone||"-"}),(0,h.jsx)("td",{children:e.contact_date}),(0,h.jsx)("td",{children:e.sector||"-"}),(0,h.jsx)("td",{children:e.message||"-"})]},s)))})]})]}),(0,h.jsx)("div",{className:"pagination"})]})};const _=function(e){let{leadsData:s,contacts:a,username:n}=e;const c=s||[],i=a||[],[l,r]=(0,t.useState)(""),o=(c.length/i.length*100).toFixed(1)||0;return(0,t.useEffect)((()=>{if(!s||!Array.isArray(s))return;const e=s.map((e=>e.city)),a={};e.forEach((e=>{a[e]=(a[e]||0)+1}));const t=Object.keys(a).sort(((e,s)=>a[s]-a[e]))[0];r(t)}),[s]),(0,h.jsxs)("div",{className:"analytics-container",children:[(0,h.jsx)("div",{className:"analytics-section",children:window.innerWidth<=768?(0,h.jsxs)(y.Z,{dots:!0,arrows:!1,infinite:!1,speed:200,slidesToShow:2,slidesToScroll:1,swipeToSlide:!0,responsive:[{breakpoint:768,settings:{slidesToShow:1}}],children:[(0,h.jsxs)("div",{className:"analytics-rectangle",children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{children:i.length}),(0,h.jsx)("p",{children:"Lead Count"})]}),(0,h.jsx)("hr",{className:"divider"}),(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{children:c.length}),(0,h.jsx)("p",{children:"Total Tap Count"})]})]}),(0,h.jsxs)("div",{className:"analytics-rectangle",children:[(0,h.jsxs)("div",{children:[(0,h.jsxs)("h1",{children:[o,"%"]}),(0,h.jsx)("p",{children:"Tap-Lead ratio"})]}),(0,h.jsx)("hr",{className:"divider"}),(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{children:l}),(0,h.jsx)("p",{children:"Dominant City"})]})]})]}):(0,h.jsxs)("div",{className:"analytics-rectangle",children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{children:i.length}),(0,h.jsx)("p",{children:"Lead Count"})]}),(0,h.jsx)("hr",{className:"divider"}),(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{children:c.length}),(0,h.jsx)("p",{children:"Total Tap Count"})]}),(0,h.jsx)("hr",{className:"divider"}),(0,h.jsxs)("div",{children:[(0,h.jsxs)("h1",{children:[o,"%"]}),(0,h.jsx)("p",{children:"Tap-Lead ratio"})]}),(0,h.jsx)("hr",{className:"divider"}),(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{children:l}),(0,h.jsx)("p",{children:"Dominant City"})]})]})}),(0,h.jsxs)("div",{className:"graph-section",children:[(0,h.jsx)(u,{leadsData:c}),(0,h.jsx)(w,{})]}),(0,h.jsx)("div",{className:"analytics-section",children:(0,h.jsx)(b,{title:"Last 5 Contacts",count:i.length,contacts:i})})]})},S=e=>{let{handleTabClick:s}=e;const[a,n]=(0,t.useState)(!1),[c,i]=(0,t.useState)(!1),l=e=>{s(e),i(!1)};return(0,h.jsxs)("div",{className:"overview-body-navigation",children:[(0,h.jsx)("div",{className:"mobile-menu-button",onClick:()=>{i(!c)},children:(0,h.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/icons8-menu.svg?v=1714064137",alt:"Menu",className:"menu-icon"})}),(0,h.jsxs)("nav",{className:"side-navigation ".concat(c?"show":""),children:[(0,h.jsx)("div",{className:"dashboard-header-logo",children:(0,h.jsx)("div",{className:"dashboard-logo",children:(0,h.jsx)("span",{className:"dashboard-logo-icon",children:(0,h.jsx)("img",{src:"https://res.cloudinary.com/dnho57ne8/image/upload/v1699913993/brava_fqk4h4.png",alt:"Logo"})})})}),(0,h.jsxs)("a",{onClick:()=>l("overview"),href:"#",className:"nav-link",children:[(0,h.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/dashboard.svg?v=1713982497",alt:"Dashboard",className:"nav-icon"}),(0,h.jsx)("span",{children:"Dashboard"})]}),(0,h.jsxs)("div",{className:"dropdown-wrapper",children:[(0,h.jsxs)("div",{className:"dropdown-header",onClick:()=>{n(!a)},children:[(0,h.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/account-balance-wallet.svg?v=1713982779",alt:"Cards",className:"nav-icon"}),(0,h.jsx)("span",{children:"Cards"})]}),a&&(0,h.jsxs)("ul",{className:"dropdown-content",children:[(0,h.jsx)("li",{onClick:()=>l("my-card"),children:"My Card"}),(0,h.jsx)("li",{onClick:()=>l("edit-card"),children:"Edit Card"})]})]}),(0,h.jsxs)("a",{onClick:()=>l("leads"),href:"#",className:"nav-link",children:[(0,h.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/mail.svg?v=1713983246",alt:"Leads",className:"nav-icon"}),(0,h.jsx)("span",{children:"Leads"})]}),(0,h.jsxs)("a",{href:"#",className:"nav-link",children:[(0,h.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/calendar-today.svg?v=1713983141",alt:"Calendar",className:"nav-icon"}),(0,h.jsx)("span",{children:"Calendar"})]}),(0,h.jsxs)("a",{onClick:()=>l("account"),href:"#",className:"nav-link",children:[(0,h.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/settings.svg?v=1713983432",alt:"Settings",className:"nav-icon"}),(0,h.jsx)("span",{children:"Settings"})]}),(0,h.jsxs)("a",{href:"https://bravanfc.com",target:"_blank",className:"nav-link",children:[(0,h.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/local-grocery-store.svg?v=1713983431",alt:"Store",className:"nav-icon"}),(0,h.jsx)("span",{children:"Store"})]}),(0,h.jsxs)("a",{href:"#",className:"nav-link",children:[(0,h.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/logout.svg?v=1713983567",alt:"Logout",className:"nav-icon"}),(0,h.jsx)("span",{children:"Logout"})]})]})]})};var k=a(8313);const C=e=>{let{contactData:s,userId:a,leadsData:c,username:i}=e;const l=(0,n.s0)(),{tab:r}=(0,n.UO)(),[o,d]=(0,t.useState)(!1),[u,x]=(0,t.useState)(1),[m,f]=(0,t.useState)(r||"overview");if(Array.isArray(s)&&s.length>0){const e=5*u,a=e-5;s.slice(a,e)}(0,t.useEffect)((()=>{p.Z.get("session_token")||l("/login")}),[l]);const[y,N]=(0,t.useState)(!1);return(0,h.jsx)("div",{children:(0,h.jsxs)("div",{className:"overview",children:[(0,h.jsx)(S,{handleTabClick:e=>{l("/".concat(a,"/dashboard/").concat(e)),f(e),d(!1)}}),(0,h.jsxs)("div",{className:"overview-body-main-content",children:["overview"===m&&(0,h.jsx)(_,{leadsData:c,username:i,contacts:s}),"my-card"===m&&(0,h.jsx)(v.default,{}),"edit-card"===m&&(0,h.jsx)(g,{}),"leads"===m&&(0,h.jsx)(j,{leadsData:c,userId:a}),"account"===m&&(0,h.jsx)(k.default,{})]})]})})};function L(){const{id:e,tab:s}=(0,n.UO)(),a=(0,n.s0)(),[l,r]=(0,t.useState)(null),[o,d]=(0,t.useState)(null),[u,x]=(0,t.useState)(null),m=(0,t.useRef)(!1);return(0,t.useEffect)((()=>{if(!e)return;if(m.current)return;(async()=>{try{if(!p.Z.get("session_token"))return void a("/login");const s=await c.Z.get("https://".concat("app.bravanfc.com","/api/").concat(e,"/dashboard"),{withCredentials:!0}),{username:t,profile_image_url:n}=s.data.userData;r({username:t,profile_image_url:n}),d(s.data.leadsData),x(s.data.contactsData),localStorage.setItem("profile_image_url",n),localStorage.setItem("username",t),m.current=!0}catch(s){console.log("Error fetching data:",s)}})()}),[e,a]),(0,h.jsxs)("div",{children:[(0,h.jsx)(i.Z,{header_username:l?l.username:"Loading...",profile_picture:l?l.profile_image_url:"default_profile_picture_url"}),(0,h.jsxs)("div",{className:"dashboard-body",children:[(0,h.jsx)(C,{selectedTab:s,contactData:u,username:null===l||void 0===l?void 0:l.username,userId:e,leadsData:o}),"cards"===s&&(0,h.jsx)(v.default,{contactData:l})]})]})}const D=L}}]);
//# sourceMappingURL=69.d9968c35.chunk.js.map