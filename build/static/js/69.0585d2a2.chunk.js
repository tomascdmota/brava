"use strict";(self.webpackChunkbrava=self.webpackChunkbrava||[]).push([[69],{8313:(e,s,a)=>{a.r(s),a.d(s,{default:()=>l});var t=a(2791),n=a(7689),c=a(175),i=a(8329),r=a(184);const l=function(){const e=(0,n.s0)();return(0,t.useEffect)((()=>{i.Z.get("session_token")||e("/login")}),[e]),(0,r.jsxs)("div",{className:"account-container",children:[(0,r.jsx)(c.Z,{}),(0,r.jsx)("button",{onClick:()=>{i.Z.remove("session_token"),localStorage.removeItem("profile_image_url"),localStorage.removeItem("username"),e("/login")},children:"Logout"})]})}},7361:(e,s,a)=>{a.r(s),a.d(s,{default:()=>d});var t=a(2791),n=a(7689),c=a(5294),i=a(8329),r=(a(175),a(3712)),l=a(8416),o=a(184);const d=function(){const{id:e}=(0,n.UO)(),[s,a]=(0,t.useState)(null),[d,h]=(0,t.useState)([]),[u,x]=(0,t.useState)(!0),[m,j]=(0,t.useState)(!1),v=(0,n.s0)();return(0,t.useEffect)((()=>{i.Z.get("session_token")||v("/login")}),[v]),(0,t.useEffect)((()=>{c.Z.get("https://".concat("bravanfc.com","/api/").concat(e,"/dashboard/cards"),{withCredentials:!0}).then((e=>{a(e.data),h(e.data.cards),x(!1)})).catch((e=>{console.error("Error fetching cards:",e),e.response&&400===e.response.status?(a({}),x(!1)):x(!1)})).finally((()=>{x(!1)}))}),[e,m]),null===s?(0,o.jsxs)("div",{className:"cards-container",children:[u&&(0,o.jsx)("div",{className:"spinner-container",children:(0,o.jsx)("div",{className:"spinner"})}),(0,o.jsx)("div",{className:"nav-tiles"})]}):(0,o.jsxs)("div",{className:"cards-container",children:[u&&(0,o.jsx)("div",{className:"spinner-container",children:(0,o.jsx)("div",{className:"spinner"})}),0===Object.keys(s).length?(0,o.jsx)(l.default,{setSubmissionSuccess:j}):null,(0,o.jsx)("div",{className:"nav-tiles",children:(0,o.jsx)("div",{className:"tiles",children:!u&&d.map((e=>(0,o.jsx)(r.default,{...e},e.card_id)))})})]})}},175:(e,s,a)=>{a.d(s,{Z:()=>i});var t=a(2791),n=a(7689),c=a(184);const i=function(e,s){const{activeTab:a}=e,{id:i}=(0,n.UO)(),r=(0,n.s0)(),[l,o]=(0,t.useState)(!1),d=(window.innerWidth,(0,t.useRef)(null)),h=localStorage.getItem("username"),u=localStorage.getItem("profile_image_url");return(0,t.useEffect)((()=>{const e=e=>{d.current&&!d.current.contains(e.target)&&o(!1)},s=e=>{e.changedTouches[0].clientX-e.changedTouches[e.changedTouches.length-1].clientX>50&&o(!1)};return document.addEventListener("click",e),document.addEventListener("touchend",s),()=>{document.removeEventListener("click",e),document.removeEventListener("touchend",s)}}),[]),(0,c.jsx)("div",{className:"header-container",children:(0,c.jsxs)("header",{className:"dashboard-header ".concat(l?"menu-open":""),children:[(0,c.jsx)("div",{className:"dashboard-header-logo",children:(0,c.jsx)("div",{className:"dashboard-logo"})}),(0,c.jsx)("div",{className:"dashboard-header-actions",children:(0,c.jsxs)("button",{onClick:()=>{return e="account",o(!1),void r("/".concat(i,"/dashboard/").concat(e));var e},className:"user-profile",children:[(0,c.jsx)("span",{children:h}),(0,c.jsx)("span",{children:(0,c.jsx)("img",{src:u,alt:"User Avatar"})})]})})]})})}},5377:(e,s,a)=>{a.r(s),a.d(s,{Dashboard:()=>E,default:()=>L});var t=a(2791),n=a(7689),c=a(5294),i=a(175),r=a(184);const l=function(e){let{user_id:s,contact_id:a,name:n,company:c,email:i,message:l,contact_date:o,phone:d,sector:h}=e;const u=window.innerWidth<=1e3,x=new Date(o).toLocaleDateString(),[m,j]=(0,t.useState)(!1),v=()=>{j(!m)};return(0,r.jsxs)("div",{className:"contacts",children:[(0,r.jsx)("div",{className:"contact",children:(0,r.jsxs)("dl",{className:"contact-details",children:[(0,r.jsx)("div",{children:(0,r.jsxs)("dt",{children:[n,", ",c]})}),(0,r.jsx)("div",{children:(0,r.jsx)("dd",{style:{marginRight:"80px"},children:i})}),(0,r.jsx)("div",{children:(0,r.jsx)("dd",{children:d})}),(0,r.jsx)("div",{children:(0,r.jsx)("dd",{children:h})}),!u&&(0,r.jsx)("div",{children:(0,r.jsx)("dd",{style:{marginLeft:"-10px"},children:x})}),(0,r.jsx)("div",{className:"contact-message ".concat(u?"full-width-message":""),children:(0,r.jsx)("dt",{children:(0,r.jsx)("button",{onClick:v,children:"Read Message"})})})]})}),m&&(0,r.jsx)("div",{className:"lead-modal",children:(0,r.jsxs)("div",{className:"lead-modal-content",children:[(0,r.jsx)("span",{className:"close",onClick:v,children:"\xd7"}),(0,r.jsx)("h2",{className:"lead-modal-name",children:"Message"}),(0,r.jsx)("p",{children:l}),(0,r.jsxs)("div",{className:"modal-buttons",children:[d&&(0,r.jsxs)("button",{onClick:()=>window.location.href="tel:".concat(d),children:["Call ",n]}),i&&(0,r.jsxs)("button",{onClick:()=>window.location.href="mailto:".concat(i),children:["Email ",i]})]})]})})]})};var o=a(4802);const d=e=>{var s;let{userId:a,leadsData:n}=e;const[i,d]=(0,t.useState)(null),[h,u]=(0,t.useState)(""),[x,m]=(0,t.useState)("mostRecent"),[j,v]=(0,t.useState)(1),[f,g]=(0,t.useState)(!0),p=window.innerWidth<=1e3;if((0,t.useEffect)((()=>{(async()=>{try{const e=await c.Z.get("https://".concat("bravanfc.com","/api/").concat(a,"/contacts"));d(e.data.contacts),g(!1)}catch(e){console.log("Error fetching contact data:",e),g(!1)}})()}),[a]),f)return(0,r.jsx)("p",{children:"Loading..."});const N=Array.isArray(i)?i.filter((e=>e.name.toLowerCase().includes(h.toLowerCase())||e.email.toLowerCase().includes(h.toLowerCase())||e.company.toLowerCase().includes(h.toLowerCase()))).sort(((e,s)=>"mostRecent"===x?new Date(s.contact_date)-new Date(e.contact_date):new Date(e.contact_date)-new Date(s.contact_date))):[],y=7*j,b=y-7,w=N.slice(b,y),S=(w.length,(0,r.jsx)("div",{className:"pagination-container",children:(0,r.jsx)("ul",{className:"pagination",children:Array.from({length:Math.max(1,Math.ceil(N.length/7))},((e,s)=>(0,r.jsx)("li",{className:j===s+1?"active":"",onClick:()=>v(s+1),children:s+1},s)))})}));return(0,r.jsxs)("div",{className:"lead-container",children:[(0,r.jsx)("div",{className:"lead-header",children:(0,r.jsx)("h1",{className:"lead-title",children:"Card generated Leads"})}),(0,r.jsxs)("div",{className:"lead-wrapper",children:[(0,r.jsxs)("div",{className:"filter-container",children:[(0,r.jsx)("input",{type:"text",placeholder:"Search...",value:h,onChange:e=>u(e.target.value),style:{width:"100%"}}),(0,r.jsxs)("select",{value:x,onChange:e=>m(e.target.value),style:{height:"40px"},children:[(0,r.jsx)("option",{value:"mostRecent",children:"Most Recent"}),(0,r.jsx)("option",{value:"oldest",children:"Oldest"})]})]}),(0,r.jsxs)("div",{className:"contact-description",children:[(0,r.jsx)("h1",{children:"Name, Company"}),(0,r.jsx)("h1",{children:"Email"}),(0,r.jsx)("h1",{style:{marginLeft:"40px"},children:"Phone"}),(0,r.jsx)("h1",{children:"Sector"}),(0,r.jsx)("h1",{children:"Contact Date"}),(0,r.jsx)("h1",{children:"Message"})]}),f?(0,r.jsx)("p",{children:"Loading..."}):w.length>0?w.map((e=>(0,r.jsx)(l,{user_id:e.user_id,contact_id:e.contact_id,name:e.name,company:e.company,email:e.email,sector:e.sector,phone:e.phone,message:e.message,contact_date:e.contact_date},e.contact_id))):(0,r.jsx)("p",{children:"No results found."}),(0,r.jsx)("button",{className:"download-csv-button",onClick:()=>{if(i&&i.length>0){const e=[["Name","Email","Company","Contact Date","Message"].join(",")];i.forEach((s=>{const a=[s.name,s.email,s.company,s.sector,s.phone,s.contact_date,s.message];e.push(a.join(","))}));const s=e.join("\n"),a=new Blob([s],{type:"text/csv;charset=utf-8"});(0,o.saveAs)(a,"leads.csv")}},children:"Export Leads"})]}),S,(0,r.jsx)("div",{className:"overview-body-sidebar",children:(0,r.jsxs)("section",{className:"payment-section",children:[!p&&(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:"GENERATED LEADS: "}),(0,r.jsx)("div",{className:"contact-counter",children:null!==(s=null===i||void 0===i?void 0:i.length)&&void 0!==s?s:0})]}),(0,r.jsx)("div",{className:"payment-section-header"})]})})]})};var h=a(7361),u=a(185),x=a(7448),m=a(344),j=a(681);const v=e=>{let{leadsData:s}=e;const a=(0,t.useRef)(null),[n,c]=(0,t.useState)({width:0,height:0});if((0,t.useEffect)((()=>{const e=new ResizeObserver((e=>{const s=e[0];if(s){const{width:e,height:a}=s.contentRect;c({width:e,height:a})}}));return e.observe(a.current),()=>{e.disconnect()}}),[]),!s||!Array.isArray(s))return null;const i={Sun:0,Mon:0,Tue:0,Wed:0,Thu:0,Fri:0,Sat:0};s.forEach((e=>{const s=new Date(e.access_date).toLocaleDateString("en-US",{weekday:"short"});i[s]+=1}));const l=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],o=l.map((e=>({x:e,y:i[e]})));return(0,r.jsx)("div",{ref:a,className:"graph-container",children:(0,r.jsxs)(u.k,{width:n.width,height:n.height,children:[(0,r.jsx)(x.X,{text:"Weekly Taps",x:n.width/2,y:10,textAnchor:"middle",style:{fill:"#fff",fontSize:22,fontWeight:"bold"}}),(0,r.jsx)(m.E,{tickValues:l,style:{tickLabels:{fontSize:16,fill:"#fff",fontWeight:"bold"},axis:{stroke:"#fff"}}}),(0,r.jsx)(m.E,{dependentAxis:!0,style:{tickLabels:{fontSize:16,fill:"#fff",fontWeight:"bold"},axis:{stroke:"#fff"}}}),(0,r.jsx)(j.j,{data:o,style:{data:{stroke:"#8824c2"},parent:{border:"1px solid #000"}}})]})})};var f=a(8329),g=a(8416);const p=()=>{var e;const{id:s}=(0,n.UO)(),a=(0,n.s0)(),[i,l]=(0,t.useState)(null);return(0,t.useEffect)((()=>{(async()=>{try{if(!f.Z.get("session_token"))return void a("/login");const e=await c.Z.get("https://".concat("bravanfc.com","/api/").concat(s,"/dashboard/cards"));l(e.data)}catch(e){console.error("Error fetching card data:",e)}})()}),[s,a]),(0,r.jsx)("div",{children:i&&(0,r.jsx)(g.default,{initialValues:null===i||void 0===i?void 0:i.cards[0],cardId:null===(e=i.cards[0])||void 0===e?void 0:e.card_id,isEditing:!0})})};var N=a(5717),y=(a(3037),a(8688),a(6140));const b=()=>{const{id:e}=(0,n.UO)(),[s,a]=(0,t.useState)([]);(0,t.useEffect)((()=>{(async()=>{try{var s;const t=(await c.Z.get("https://".concat("bravanfc.com","/api/").concat(e,"/icon-engagement"))).data,n=null===t||void 0===t?void 0:t.top5Metrics.reduce(((e,s)=>e+s.count),0),r=null===t||void 0===t||null===(s=t.top5Metrics)||void 0===s?void 0:s.filter((e=>e.count>0));if(r&&0!==n){const e=[["Metric","Count"],...r.map((e=>[i(e.metric),e.count]))];a(e)}}catch(t){console.error("Error fetching data:",t)}})()}),[e]);const i=e=>{switch(e){case"google_reviews_count":return"Google Reviews";case"instagram_count":return"Instagram";case"facebook_count":return"Facebook";case"linkedin_count":return"LinkedIn";case"youtube_count":return"YouTube";case"paypal_count":return"PayPal";case"twitter_count":return"Twitter";case"tiktok_count":return"TikTok";case"spotify_count":return"Spotify";case"vinted_count":return"Vinted";case"notes_count":return"Notes";case"address_count":return"Address";case"standvirtual_count":return"Standvirtual";case"olx_count":return"OLX";case"piscapisca_count":return"Piscapisca";case"custojusto_count":return"Custo Justo";case"url_count":return"URL";default:return e}};return(0,r.jsxs)("div",{className:"pie-chart-container",children:[(0,r.jsx)("h2",{children:"Social Media Engagement"}),(0,r.jsx)("div",{className:"pie-chart",children:s&&s.length>0?(0,r.jsx)(y.kL,{width:"100%",height:"100%",chartType:"PieChart",data:s,options:{pieSliceText:"none",pieHole:.5,sliceVisibilityThreshold:.01,legend:{textStyle:{color:"#fff",fontSize:16}},backgroundColor:"#1b1b1c",pieSliceBorderColor:"none",colors:["#613FB8","#361BA0","#8B63D0","#B688E7","#E0ACFF"],chartArea:{width:"100%",height:"100%",top:0,left:0}}}):(0,r.jsx)("p",{children:"No data available"})})]})},w=e=>{let{contacts:s,count:a}=e;const n=Array.isArray(s)?s:[],[c,i]=(0,t.useState)(1),[l,o]=(0,t.useState)(1),[d,h]=(0,t.useState)(null);(0,t.useEffect)((()=>{const e=Math.ceil(a/5);o(e)}),[a]);const u=5*(c-1),x=u+5,m=n.slice(u,x),j=50*Math.max(5,m.length);return(0,r.jsxs)("div",{className:"last-contacts-component",children:[(0,r.jsxs)("div",{className:"table-container",style:{height:j},children:[(0,r.jsx)("h1",{children:"Recent Leads"}),(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Name"}),(0,r.jsx)("th",{children:"Company"}),(0,r.jsx)("th",{children:"Email"}),(0,r.jsx)("th",{children:"Phone"}),(0,r.jsx)("th",{children:"Contact Date"}),(0,r.jsx)("th",{children:"Sector"}),(0,r.jsx)("th",{children:"Message"})]})}),(0,r.jsx)("tbody",{children:m.map(((e,s)=>(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:e.name||"-"}),(0,r.jsx)("td",{children:e.company||"-"}),(0,r.jsx)("td",{children:e.email||"-"}),(0,r.jsx)("td",{children:e.phone||"-"}),(0,r.jsx)("td",{children:e.contact_date}),(0,r.jsx)("td",{children:e.sector||"-"}),(0,r.jsx)("td",{children:e.message||"-"})]},s)))})]})]}),(0,r.jsx)("div",{className:"pagination"})]})};const S=function(e){let{leadsData:s,contacts:a,username:n}=e;const c=s||[],i=a||[],[l,o]=(0,t.useState)(""),d=(c.length/i.length*100).toFixed(1)||0;return(0,t.useEffect)((()=>{if(!s||!Array.isArray(s))return;const e=s.map((e=>e.city)),a={};e.forEach((e=>{a[e]=(a[e]||0)+1}));const t=Object.keys(a).sort(((e,s)=>a[s]-a[e]))[0];o(t)}),[s]),(0,r.jsxs)("div",{className:"analytics-container",children:[(0,r.jsx)("div",{className:"analytics-section",children:window.innerWidth<=768?(0,r.jsxs)(N.Z,{dots:!0,arrows:!1,infinite:!1,speed:200,slidesToShow:2,slidesToScroll:1,swipeToSlide:!0,responsive:[{breakpoint:768,settings:{slidesToShow:1}}],children:[(0,r.jsxs)("div",{className:"analytics-rectangle",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{children:i.length}),(0,r.jsx)("p",{children:"Lead Count"})]}),(0,r.jsx)("hr",{className:"divider"}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{children:c.length}),(0,r.jsx)("p",{children:"Total Tap Count"})]})]}),(0,r.jsxs)("div",{className:"analytics-rectangle",children:[(0,r.jsxs)("div",{children:[(0,r.jsxs)("h1",{children:[d,"%"]}),(0,r.jsx)("p",{children:"Tap-Lead ratio"})]}),(0,r.jsx)("hr",{className:"divider"}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{children:l}),(0,r.jsx)("p",{children:"Dominant City"})]})]})]}):(0,r.jsxs)("div",{className:"analytics-rectangle",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{children:i.length}),(0,r.jsx)("p",{children:"Lead Count"})]}),(0,r.jsx)("hr",{className:"divider"}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{children:c.length}),(0,r.jsx)("p",{children:"Total Tap Count"})]}),(0,r.jsx)("hr",{className:"divider"}),(0,r.jsxs)("div",{children:[(0,r.jsxs)("h1",{children:[d,"%"]}),(0,r.jsx)("p",{children:"Tap-Lead ratio"})]}),(0,r.jsx)("hr",{className:"divider"}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{children:l}),(0,r.jsx)("p",{children:"Dominant City"})]})]})}),(0,r.jsxs)("div",{className:"graph-section",children:[(0,r.jsx)(v,{leadsData:c}),(0,r.jsx)(b,{})]}),(0,r.jsx)("div",{className:"analytics-section",children:(0,r.jsx)(w,{title:"Last 5 Contacts",count:i.length,contacts:i})})]})},_=e=>{let{handleTabClick:s}=e;const[a,n]=(0,t.useState)(!1),[c,i]=(0,t.useState)(!1),l=e=>{s(e),i(!1)};return(0,r.jsxs)("div",{className:"overview-body-navigation",children:[(0,r.jsx)("div",{className:"mobile-menu-button",onClick:()=>{i(!c)},children:(0,r.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/icons8-menu.svg?v=1714064137",alt:"Menu",className:"menu-icon"})}),(0,r.jsxs)("nav",{className:"side-navigation ".concat(c?"show":""),children:[(0,r.jsx)("div",{className:"dashboard-header-logo",children:(0,r.jsx)("div",{className:"dashboard-logo",children:(0,r.jsx)("span",{className:"dashboard-logo-icon",children:(0,r.jsx)("img",{src:"https://res.cloudinary.com/dnho57ne8/image/upload/v1699913993/brava_fqk4h4.png",alt:"Logo"})})})}),(0,r.jsxs)("a",{onClick:()=>l("overview"),href:"#",className:"nav-link",children:[(0,r.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/dashboard.svg?v=1713982497",alt:"Dashboard",className:"nav-icon"}),(0,r.jsx)("span",{children:"Dashboard"})]}),(0,r.jsxs)("div",{className:"dropdown-wrapper",children:[(0,r.jsxs)("div",{className:"dropdown-header",onClick:()=>{n(!a)},children:[(0,r.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/account-balance-wallet.svg?v=1713982779",alt:"Cards",className:"nav-icon"}),(0,r.jsx)("span",{children:"Cards"})]}),a&&(0,r.jsxs)("ul",{className:"dropdown-content",children:[(0,r.jsx)("li",{onClick:()=>l("my-card"),children:"My Card"}),(0,r.jsx)("li",{onClick:()=>l("edit-card"),children:"Edit Card"})]})]}),(0,r.jsxs)("a",{onClick:()=>l("leads"),href:"#",className:"nav-link",children:[(0,r.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/mail.svg?v=1713983246",alt:"Leads",className:"nav-icon"}),(0,r.jsx)("span",{children:"Leads"})]}),(0,r.jsxs)("a",{href:"#",className:"nav-link",children:[(0,r.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/calendar-today.svg?v=1713983141",alt:"Calendar",className:"nav-icon"}),(0,r.jsx)("span",{children:"Calendar"})]}),(0,r.jsxs)("a",{onClick:()=>l("account"),href:"#",className:"nav-link",children:[(0,r.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/settings.svg?v=1713983432",alt:"Settings",className:"nav-icon"}),(0,r.jsx)("span",{children:"Settings"})]}),(0,r.jsxs)("a",{href:"https://bravanfc.com",target:"_blank",className:"nav-link",children:[(0,r.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/local-grocery-store.svg?v=1713983431",alt:"Store",className:"nav-icon"}),(0,r.jsx)("span",{children:"Store"})]}),(0,r.jsxs)("a",{href:"#",className:"nav-link",children:[(0,r.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/logout.svg?v=1713983567",alt:"Logout",className:"nav-icon"}),(0,r.jsx)("span",{children:"Logout"})]})]})]})};var k=a(8313);const C=e=>{let{contactData:s,userId:a,leadsData:c,username:i}=e;const l=(0,n.s0)(),{tab:o}=(0,n.UO)(),[u,x]=(0,t.useState)(!1),[m,j]=(0,t.useState)(1),[v,g]=(0,t.useState)(o||"overview");if(Array.isArray(s)&&s.length>0){const e=5*m,a=e-5;s.slice(a,e)}(0,t.useEffect)((()=>{f.Z.get("session_token")||l("/login")}),[l]);const[N,y]=(0,t.useState)(!1);return(0,r.jsx)("div",{children:(0,r.jsxs)("div",{className:"overview",children:[(0,r.jsx)(_,{handleTabClick:e=>{l("/".concat(a,"/dashboard/").concat(e)),g(e),x(!1)}}),(0,r.jsxs)("div",{className:"overview-body-main-content",children:["overview"===v&&(0,r.jsx)(S,{leadsData:c,username:i,contacts:s}),"my-card"===v&&(0,r.jsx)(h.default,{}),"edit-card"===v&&(0,r.jsx)(p,{}),"leads"===v&&(0,r.jsx)(d,{leadsData:c,userId:a}),"account"===v&&(0,r.jsx)(k.default,{})]})]})})};function E(){const{id:e,tab:s}=(0,n.UO)(),a=(0,n.s0)(),[l,o]=(0,t.useState)(null),[d,u]=(0,t.useState)(null),[x,m]=(0,t.useState)(null),j=(0,t.useRef)(!1);return(0,t.useEffect)((()=>{if(!e)return;if(j.current)return;(async()=>{try{if(!f.Z.get("token"))return void a("/login");const s=await c.Z.get("https://".concat("bravanfc.com","/api/").concat(e,"/dashboard"),{withCredentials:!0}),{username:t,profile_image_url:n}=s.data.userData;o({username:t,profile_image_url:n}),u(s.data.leadsData),m(s.data.contactsData),localStorage.setItem("profile_image_url",n),localStorage.setItem("username",t),j.current=!0}catch(s){console.log("Error fetching data:",s)}})()}),[e,a]),(0,r.jsxs)("div",{children:[(0,r.jsx)(i.Z,{header_username:l?l.username:"Loading...",profile_picture:l?l.profile_image_url:"default_profile_picture_url"}),(0,r.jsxs)("div",{className:"dashboard-body",children:[(0,r.jsx)(C,{selectedTab:s,contactData:x,username:null===l||void 0===l?void 0:l.username,userId:e,leadsData:d}),"cards"===s&&(0,r.jsx)(h.default,{contactData:l})]})]})}const L=E}}]);
//# sourceMappingURL=69.0585d2a2.chunk.js.map