"use strict";(self.webpackChunkbrava=self.webpackChunkbrava||[]).push([[740,731,156],{7361:(e,a,s)=>{s.r(a),s.d(a,{default:()=>m});var t=s(2791),i=s(7689),n=s(5294),c=s(8329),l=s(175),o=s(3712),r=s(8416),d=s(184);const m=function(){const{id:e}=(0,i.UO)(),[a,s]=(0,t.useState)(null),[m,p]=(0,t.useState)([]),[u,h]=(0,t.useState)(!0),[g,x]=(0,t.useState)(!1),v=(0,i.s0)();return(0,t.useEffect)((()=>{c.Z.get("session_token")||v("/login")}),[v]),(0,t.useEffect)((()=>{n.Z.get("https://".concat("app.bravanfc.com","/api/").concat(e,"/dashboard/cards"),{withCredentials:!0}).then((e=>{s(e.data),p(e.data.cards),h(!1)})).catch((e=>{console.error("Error fetching cards:",e),e.response&&400===e.response.status?(s({}),h(!1)):h(!1)})).finally((()=>{h(!1)}))}),[e,g]),null===a?(0,d.jsxs)("div",{className:"cards-container",children:[(0,d.jsx)(l.Z,{}),u&&(0,d.jsx)("div",{className:"spinner-container",children:(0,d.jsx)("div",{className:"spinner"})}),(0,d.jsx)("div",{className:"nav-tiles"})]}):(0,d.jsxs)("div",{className:"cards-container",children:[(0,d.jsx)(l.Z,{}),u&&(0,d.jsx)("div",{className:"spinner-container",children:(0,d.jsx)("div",{className:"spinner"})}),0===Object.keys(a).length?(0,d.jsx)(r.default,{setSubmissionSuccess:x}):null,(0,d.jsx)("div",{className:"nav-tiles",children:(0,d.jsx)("div",{className:"tiles",children:!u&&m.map((e=>(0,d.jsx)(o.default,{...e},e.card_id)))})})]})}},175:(e,a,s)=>{s.d(a,{Z:()=>o});var t=s(2791),i=s(8008),n=s(7689),c=s(9823),l=s(184);const o=function(e,a){const{activeTab:s}=e,{id:o}=(0,n.UO)(),r=(0,n.s0)(),[d,m]=(0,t.useState)(!1),p=window.innerWidth<=1e3,u=(0,t.useRef)(null),h=localStorage.getItem("username"),g=localStorage.getItem("profile_image_url");(0,t.useEffect)((()=>{const e=e=>{u.current&&!u.current.contains(e.target)&&m(!1)},a=e=>{e.changedTouches[0].clientX-e.changedTouches[e.changedTouches.length-1].clientX>50&&m(!1)};return document.addEventListener("click",e),document.addEventListener("touchend",a),()=>{document.removeEventListener("click",e),document.removeEventListener("touchend",a)}}),[]);const x=()=>{m(!d)};function v(e){m(!1),r("/".concat(o,"/dashboard/").concat(e))}return(0,l.jsx)("div",{className:"header-container",children:(0,l.jsxs)("header",{className:"dashboard-header ".concat(d?"menu-open":""),children:[(0,l.jsx)("div",{className:"dashboard-header-logo",children:(0,l.jsxs)("div",{className:"dashboard-logo",children:[(0,l.jsx)("span",{className:"dashboard-logo-icon",children:(0,l.jsx)("img",{src:"https://res.cloudinary.com/dnho57ne8/image/upload/v1699913993/brava_fqk4h4.png",alt:"Logo"})}),(0,l.jsx)("h1",{className:"logo-title",children:"Brava"})]})}),(0,l.jsx)("div",{className:"dashboard-header-navigation",children:(0,l.jsxs)("div",{className:"tabs",children:[(0,l.jsx)("button",{onClick:e=>v("overview"),className:"overview"===s?"active":"",children:(0,l.jsx)("a",{children:"Overview"})}),(0,l.jsx)("button",{onClick:e=>v("cards"),className:"cards"===s?"active":"",children:(0,l.jsx)("a",{children:" Cards"})}),(0,l.jsx)("button",{onClick:e=>v("account"),className:"account"===s?"active":"",children:(0,l.jsx)("a",{children:"Account"})}),(0,l.jsx)("button",{children:(0,l.jsx)("a",{href:"https://bravanfc.com",children:"Store"})})]})}),(0,l.jsx)("div",{className:"dashboard-header-actions",children:(0,l.jsxs)("button",{onClick:()=>v("account"),className:"user-profile",children:[(0,l.jsx)("span",{children:h}),(0,l.jsx)("span",{children:(0,l.jsx)("img",{src:g,alt:"User Avatar"})})]})}),p&&(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"dashboard-header-mobile",children:(0,l.jsx)(i.Z,{onClick:x})}),(0,l.jsxs)("div",{className:"mobile-menu ".concat(d?"open":""),children:[d&&(0,l.jsx)(c.Z,{onClick:x}),(0,l.jsx)("button",{onClick:e=>v("overview"),className:"overview"===s?"active":"",children:"Overview"}),(0,l.jsx)("button",{onClick:e=>v("cards"),className:"cards"===s?"active":"",children:"Cards"}),(0,l.jsx)("button",{onClick:e=>v("account"),className:"account"===s?"active":"",children:"Account"}),(0,l.jsx)("button",{onClick:e=>v("account"),className:"account"===s?"active":"",children:"Store"})]})]})]})})}},8416:(e,a,s)=>{s.r(a),s.d(a,{default:()=>d});var t=s(2791),i=s(7689),n=s(184);const c=e=>{let{handleCloseModal:a}=e;const[s,i]=(0,t.useState)("Upload Profile Picture"),[c,l]=(0,t.useState)("Upload Background Image"),o=(e,a)=>{const s=new FileReader;s.onload=e=>{localStorage.setItem(a,e.target.result)},s.readAsDataURL(e)};return(0,n.jsxs)("div",{className:"upload-modal",children:[(0,n.jsx)("button",{className:"modal-close-button",onClick:a,children:"\xd7"}),(0,n.jsx)("h2",{className:"title",children:"Profile Picture"}),(0,n.jsx)("h3",{className:"subtitle",children:"Upload your profile picture"}),(0,n.jsxs)("div",{className:"profile-picture-container",children:[(0,n.jsx)("input",{type:"file",name:"profilePicture",id:"profilePictureInput",accept:"image/*",onChange:e=>{const a=e.target.files[0];a&&(i(a.name),o(a,"profileImageURL"))},className:"file-input"}),(0,n.jsx)("label",{htmlFor:"profilePictureInput",className:"file-label",children:s})]}),(0,n.jsx)("h2",{className:"title",children:"Background Image"}),(0,n.jsx)("h3",{className:"subtitle",children:"Upload your background image"}),(0,n.jsxs)("div",{className:"profile-picture-container",children:[(0,n.jsx)("input",{type:"file",name:"backgroundImage",id:"backgroundImageInput",accept:"image/*",onChange:e=>{const a=e.target.files[0];a&&(l(a.name),o(a,"backgroundImageURL"))},className:"file-input"}),(0,n.jsx)("label",{htmlFor:"backgroundImageInput",className:"file-label",children:c})]}),(0,n.jsx)("input",{type:"button",name:"submit",className:"submit action-button",value:"Submit",onClick:()=>{localStorage.removeItem("profileImageUrl"),localStorage.removeItem("backgroundImageUrl");const e=document.getElementById("profilePictureInput"),s=document.getElementById("backgroundImageInput");if(e&&e.files.length>0){const a=e.files[0];localStorage.setItem("profileImageUrl",a.name),console.log("Profile Picture saved to localStorage:",a.name)}if(s&&s.files.length>0){const e=s.files[0];localStorage.setItem("backgroundImageUrl",e.name),console.log("Background Image saved to localStorage:",e.name)}a()}})]})};var l=s(5294),o=s(8329),r=s(3712);const d=()=>{const[e,a]=(0,t.useState)(1),[s,d]=(0,t.useState)("Profile Picture"),[m,p]=(0,t.useState)("Background Image"),[u,h]=(0,t.useState)(!1),[g,x]=(0,t.useState)({name:"",email:"",company:"",phone:"",position:"",instagram:"",url:"",facebook:"",linkedin:"",image:"",background_image:"",tiktok:"",spotify:"",twitter:"",paypal:"",vinted:"",notes:"",standvirtual:"",olx:"",piscapisca:"",custojusto:""}),v=(0,i.s0)(),{id:j}=(0,i.UO)(),f=(0,t.useMemo)((()=>"".concat(g.profilePicture,"-").concat(g.background_image)),[g.profilePicture,g.background_image]);(0,t.useEffect)((()=>{o.Z.get("session_token")||v("/login")}),[v]),(0,t.useEffect)((()=>{const e=JSON.parse(localStorage.getItem("formData"));e&&x(e);const a=localStorage.getItem("profileImageURL"),s=localStorage.getItem("backgroundImageURL");a&&x((e=>({...e,profilePicture:a}))),s&&x((e=>({...e,background_image:s})))}),[]);const N=e=>{const a=e.target.files[0];if(a){const s=e.target.name;if("profilePicture"===s){d(a.name);const e=new FileReader;e.onload=e=>{localStorage.setItem("profileImageURL",e.target.result)},e.readAsDataURL(a)}else if("backgroundImage"===s){p(a.name);const e=new FileReader;e.onload=e=>{localStorage.setItem("backgroundImageURL",e.target.result)},e.readAsDataURL(a)}}},b=e=>{const{name:a,value:s}=e.target;x((e=>({...e,[a]:s})))},y=async e=>{e.preventDefault();const a=new FormData;a.append("name",g.name),a.append("email",g.email),a.append("company",g.company),a.append("position",g.position),a.append("phone",g.phone),a.append("instagram",g.instagram),a.append("facebook",g.facebook),a.append("linkedin",g.linkedin),a.append("url",g.url),a.append("userId",j),a.append("tiktok",g.tiktok),a.append("spotify",g.spotify),a.append("twitter",g.twitter),a.append("paypal",g.paypal),a.append("vinted",g.vinted),a.append("notes",g.notes),a.append("standvirtual",g.standvirtual),a.append("olx",g.olx),a.append("piscapisca",g.piscapisca),a.append("custojusto",g.custojusto);const s=localStorage.getItem("profileImageUrl");s&&(console.log("Profile Picture:",s),a.append("profilePicture",s));const t=localStorage.getItem("backgroundImage");t&&(console.log("Background Image:",t),a.append("background_image",t)),console.log("Form Data:",a);try{const e=await l.Z.post("https://".concat("app.bravanfc.com","/api//api/createcard"),a,{headers:{"Content-Type":"multipart/form-data"},withCredentials:!0});201===e.status||204===e.status?(localStorage.removeItem("formData"),localStorage.removeItem("profileImageURL"),localStorage.removeItem("backgroundImageURL"),v("/".concat(e.data.userId,"/dashboard/cards"))):(console.error("Error creating card:",e.data),alert("Error creating card"))}catch(i){console.log("Error creating card",i),alert("There was an error creating your card",i)}};return(0,n.jsx)("div",{className:"createcard-container",children:(0,n.jsxs)("div",{className:"msform",children:[u&&(0,n.jsx)(c,{handleImageChange:N,handleImageChanges:e=>{const a=e.target.files[0];a?(p(a.name),x((e=>({...e,background_image:a.name})))):p("Background Image")},handleCloseModal:()=>{h(!1)},handleSubmit:y,handlePrevious:()=>h(!1)}),(0,n.jsx)("div",{className:"createcard-container",children:(0,n.jsxs)("div",{className:"card-content",children:[(0,n.jsx)("div",{className:"side-navigation",children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{className:e>=1?"active":"",children:"Card Setup"}),(0,n.jsx)("li",{className:e>=2?"active":"",children:"Social Media"})]})}),(0,n.jsx)("div",{className:"msform",children:(0,n.jsxs)("form",{id:"msform",onSubmit:y,encType:"multipart/form-data",children:[1===e&&(0,n.jsxs)("fieldset",{children:[(0,n.jsx)("h2",{className:"fs-title",children:"Setup your data"}),(0,n.jsx)("p",{className:"fs-subtitle",children:"We'll guide you through the process of adding the data displayed in your card"}),(0,n.jsxs)("div",{className:"row",children:[(0,n.jsxs)("div",{className:"col",children:[(0,n.jsx)("label",{children:"Name"}),(0,n.jsx)("input",{type:"text",name:"name",placeholder:"Name",value:g.name,onChange:b,required:!0})]}),(0,n.jsxs)("div",{className:"col",children:[(0,n.jsx)("label",{children:"Email"}),(0,n.jsx)("input",{type:"text",name:"email",placeholder:"Email",value:g.email,onChange:b,required:!0})]}),(0,n.jsxs)("div",{className:"col",children:[(0,n.jsx)("label",{children:"Phone"}),(0,n.jsx)("input",{type:"tel",name:"phone",placeholder:"Phone",value:g.phone,onChange:b,required:!0})]})]}),(0,n.jsxs)("div",{className:"row",children:[(0,n.jsxs)("div",{className:"col",children:[(0,n.jsx)("label",{children:"Company"}),(0,n.jsx)("input",{type:"text",name:"company",placeholder:"Company (optional)",value:g.company,onChange:b})]}),(0,n.jsxs)("div",{className:"col",children:[(0,n.jsx)("label",{children:"Position"}),(0,n.jsx)("input",{type:"text",name:"position",placeholder:"Position (optional)",value:g.position,onChange:b})]})]}),(0,n.jsx)("div",{className:"row",children:(0,n.jsxs)("div",{className:"col",children:[(0,n.jsx)("label",{children:"Address"}),(0,n.jsx)("input",{type:"text",name:"address",placeholder:"Address",value:g.address,onChange:b,style:{float:"left"}})]})}),(0,n.jsx)("div",{className:"row",children:(0,n.jsxs)("div",{className:"profile-picture-container",children:[(0,n.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/upload.png?v=1713209450",alt:"Upload Icon",className:"upload-icon"}),(0,n.jsx)("input",{name:"profilePicture",id:"profilePictureInput",onChange:N,className:"file-input",onClick:()=>{h(!0)}}),(0,n.jsx)("label",{htmlFor:"profilePictureInput",className:"file-label",children:s})]})}),(0,n.jsx)("div",{className:"col",children:(0,n.jsx)("input",{type:"button",name:"next",className:"next action-button",value:"Next",onClick:()=>{a(e+1)}})})]}),2===e&&(0,n.jsxs)("fieldset",{children:[(0,n.jsx)("h2",{className:"fs-title",children:"Social Profiles"}),(0,n.jsx)("h3",{className:"fs-subtitle",children:"Your presence on the social network"}),(0,n.jsxs)("div",{className:"social-input-container-wrapper",children:[(0,n.jsxs)("div",{className:"social-input-container",children:[(0,n.jsxs)("div",{className:"social-input",children:[(0,n.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/icons8-instagram.svg?v=1712083465",className:"social",alt:"Instagram"}),(0,n.jsx)("input",{type:"text",name:"instagram",placeholder:"Instagram",value:g.instagram,onChange:b})]}),(0,n.jsxs)("div",{className:"social-input",children:[(0,n.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/icons8-facebook.svg?v=1712083465",className:"social",alt:"Facebook"}),(0,n.jsx)("input",{type:"text",name:"facebook",placeholder:"Facebook",value:g.facebook,onChange:b})]}),(0,n.jsxs)("div",{className:"social-input",children:[(0,n.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/icons8-linkedin.svg?v=1712083465",className:"social",alt:"LinkedIn"}),(0,n.jsx)("input",{type:"text",name:"linkedin",placeholder:"Linkedin",value:g.linkedin,onChange:b})]}),(0,n.jsxs)("div",{className:"social-input",children:[(0,n.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/url.png?v=1712083467",className:"social",alt:"URL"}),(0,n.jsx)("input",{type:"text",name:"url",placeholder:"Url",value:g.url,onChange:b})]}),(0,n.jsxs)("div",{className:"social-input",children:[(0,n.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/tiktok.png?v=1713213933",className:"social",alt:"tiktok"}),(0,n.jsx)("input",{type:"text",name:"tiktok",placeholder:"tiktok",value:g.tiktok,onChange:b})]}),(0,n.jsxs)("div",{className:"social-input",children:[(0,n.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/spotify_bcf3311d-41be-49a9-8cec-d1bdc9363c4d.png?v=1713213932",className:"social",alt:"Spotify"}),(0,n.jsx)("input",{type:"text",name:"spotify",placeholder:"spotify",value:g.spotify,onChange:b})]})]}),(0,n.jsxs)("div",{className:"social-input",children:[(0,n.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/twitter.svg?v=1713213932",className:"social",alt:"Twitter"}),(0,n.jsx)("input",{type:"text",name:"twitter",placeholder:"Twitter",value:g.twitter,onChange:b})]}),(0,n.jsxs)("div",{className:"social-input",children:[(0,n.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/paypal.png?v=1713213933",className:"social",alt:"paypal"}),(0,n.jsx)("input",{type:"text",name:"paypal",placeholder:"paypal",value:g.paypal,onChange:b})]}),(0,n.jsxs)("div",{className:"social-input",children:[(0,n.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/Vinted.png?v=1713213932",className:"social",alt:"vinted",style:{width:"100px",height:"60px",marginRight:"-20px",marginLeft:"-20px"}}),(0,n.jsx)("input",{type:"text",name:"vinted",placeholder:"vinted",value:g.vinted,onChange:b})]}),(0,n.jsxs)("div",{className:"social-input",children:[(0,n.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/standvirtual.png?v=1713213933",className:"social",alt:"standvirtual"}),(0,n.jsx)("input",{type:"text",name:"standvirtual",placeholder:"standvirtual",value:g.standvirtual,onChange:b})]}),(0,n.jsxs)("div",{className:"social-input",children:[(0,n.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/olx.png?v=1713213932",className:"social",alt:"olx"}),(0,n.jsx)("input",{type:"text",name:"olx",placeholder:"olx",value:g.olx,onChange:b})]}),(0,n.jsxs)("div",{className:"social-input",children:[(0,n.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/piscapisca.png?v=1713213932",className:"social",alt:"piscapisca"}),(0,n.jsx)("input",{type:"text",name:"piscapisca",placeholder:"piscapisca",value:g.piscapisca,onChange:b})]}),(0,n.jsxs)("div",{className:"social-input",children:[(0,n.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/custojusto.png?v=1713213932",className:"social",alt:"custojusto",style:{width:"100px",height:"60px",marginRight:"-35px",marginLeft:"-20px"}}),(0,n.jsx)("input",{type:"text",name:"custojusto",placeholder:"custojusto",value:g.custojusto,onChange:b})]}),(0,n.jsxs)("div",{className:"social-input",children:[(0,n.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/notes.png?v=1713213932",className:"social",alt:"notes"}),(0,n.jsx)("input",{type:"text",name:"notes",placeholder:"notes",value:g.notes,onChange:b})]})]}),(0,n.jsx)("input",{type:"button",name:"previous",className:"previous action-button",value:"Previous",onClick:()=>{a(e-1)}}),(0,n.jsx)("input",{type:"submit",name:"submit",className:"next action-button",value:"Submit",onClick:y})]})]})}),(0,n.jsx)("div",{className:"createcard-component",children:(0,n.jsx)(r.default,{email:g.email,username:g.name,phone:g.phone,company:g.company,title:g.position,instagram:g.instagram,facebook:g.facebook,linkedin:g.linkedin,url:g.url,notes:g.notes,background_image_url:g.background_image,profile_image_url:g.profilePicture,address:g.address,tiktok:g.tiktok,spotify:g.spotify,twitter:g.twitter,paypal:g.paypal,vinted:g.vinted,standvirtual:g.standvirtual,olx:g.olx,piscapisca:g.piscapisca,custojusto:g.custojusto},f)})]})})]})})}},4570:(e,a,s)=>{s.r(a),s.d(a,{Dashboard:()=>p,default:()=>u});var t=s(2791),i=s(7689),n=s(5294),c=s(175),l=s(184);const o=function(e){let{user_id:a,contact_id:s,name:t,company:i,email:n,message:c,contact_date:o}=e;const r=window.innerWidth<=1e3;return(0,l.jsx)("div",{children:(0,l.jsx)("div",{className:"contacts",children:(0,l.jsxs)("div",{className:"contact",children:[!r&&(0,l.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/profile_2.png?v=1712073839"}),r&&(0,l.jsxs)("div",{children:[(0,l.jsx)("dt",{children:"Contact Date"}),(0,l.jsx)("dd",{children:o})]}),(0,l.jsxs)("dl",{className:"contact-details",children:[(0,l.jsx)("div",{children:(0,l.jsxs)("dt",{children:[t,", ",i]})}),(0,l.jsx)("div",{children:(0,l.jsx)("dd",{children:n})}),!r&&(0,l.jsx)("div",{children:(0,l.jsx)("dd",{children:o})}),(0,l.jsx)("div",{className:"contact-message ".concat(r?"full-width-message":""),children:(0,l.jsx)("dt",{children:c})})]})]})})})};var r=s(8329);const d=e=>{let{contactData:a}=e;const s=window.innerWidth<=1e3,n=(0,i.s0)(),[c,d]=(0,t.useState)(0),m=a?a.length:0;return(0,t.useEffect)((()=>{a&&a.length>0&&d(a[0].user_id)}),[a]),(0,t.useEffect)((()=>{r.Z.get("session_token")||n("/login")}),[n]),(0,l.jsx)("div",{children:(0,l.jsx)("div",{className:"overview",children:(0,l.jsxs)("div",{className:"overview-body",children:[(0,l.jsx)("div",{className:"overview-body-navigation"}),(0,l.jsx)("div",{className:"overview-body-main-content",children:(0,l.jsxs)("section",{className:"contact-section",children:[s&&(0,l.jsxs)("div",{className:"gen-leads",children:[(0,l.jsx)("h2",{children:"GENERATED LEADS: "}),(0,l.jsx)("div",{className:"contact-counter",children:m})]}),(0,l.jsx)("div",{className:"contact-section-header",children:(0,l.jsx)("h2",{children:"Latest Leads"})}),(0,l.jsxs)("div",{className:"contact-description",children:[(0,l.jsx)("h1",{children:"Information"}),(0,l.jsx)("h1",{children:"Email"}),(0,l.jsx)("h1",{children:"Contact Date"}),(0,l.jsx)("h1",{children:"Email"})]}),a?a.map((e=>(0,l.jsx)(o,{name:e.name,email:e.email,company:e.company,contact_date:e.contact_date,message:e.message},e.contact_id))):(0,l.jsx)("p",{children:"Loading..."})]})}),(0,l.jsx)("div",{className:"overview-body-sidebar",children:(0,l.jsxs)("section",{className:"payment-section",children:[!s&&(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{children:"GENERATED LEADS: "}),(0,l.jsx)("div",{className:"contact-counter",children:m})]}),(0,l.jsx)("div",{className:"payment-section-header"})]})})]})})})};var m=s(7361);function p(e){var a,s;const{id:o}=(0,i.UO)(),[p,u]=(0,t.useState)("overview"),[h,g]=(0,t.useState)(null),x=(0,i.s0)(),v=(0,t.useRef)(!1);return(0,t.useEffect)((()=>{o&&!v.current&&(console.log("making request"),(async()=>{try{if(!r.Z.get("session_token"))return void x("/login");const s=await n.Z.get("https://".concat("app.bravanfc.com","/api/").concat(o,"/dashboard"),{withCredentials:!0});var e,a;g(s.data),console.log("Response data:",s.data),s.data&&s.data.length>0&&(localStorage.setItem("profile_image_url",null===(e=s.data[0])||void 0===e?void 0:e.profile_image_url),localStorage.setItem("username",null===(a=s.data[0])||void 0===a?void 0:a.username)),v.current=!0}catch(s){console.log("Error fetching data:",s)}})())}),[o,x]),(0,l.jsxs)("div",{children:[(0,l.jsx)(c.Z,{header_username:h?null===(a=h[0])||void 0===a?void 0:a.username:"",profile_picture:h?null===(s=h[0])||void 0===s?void 0:s.profile_image_url:"",activeTab:p,onTabClick:e=>{u(e)}}),(0,l.jsxs)("div",{className:"dashboard-body",children:["overview"===p&&(0,l.jsx)(d,{contactData:h}),"cards"===p&&(0,l.jsx)(m.default,{contactData:h})]})]})}const u=p}}]);
//# sourceMappingURL=740.6eba1bdf.chunk.js.map