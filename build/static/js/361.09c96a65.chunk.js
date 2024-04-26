/*! For license information please see 361.09c96a65.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkbrava=self.webpackChunkbrava||[]).push([[361],{7361:(e,s,a)=>{a.r(s),a.d(s,{default:()=>d});var t=a(2791),i=a(7689),n=a(5294),c=a(8329),l=(a(175),a(3712)),o=a(8416),r=a(184);const d=function(){const{id:e}=(0,i.UO)(),[s,a]=(0,t.useState)(null),[d,p]=(0,t.useState)([]),[u,m]=(0,t.useState)(!0),[h,v]=(0,t.useState)(!1),x=(0,i.s0)();return(0,t.useEffect)((()=>{c.Z.get("session_token")||x("/login")}),[x]),(0,t.useEffect)((()=>{n.Z.get("https://".concat("app.bravanfc.com","/api/").concat(e,"/dashboard/cards"),{withCredentials:!0}).then((e=>{a(e.data),p(e.data.cards),m(!1)})).catch((e=>{console.error("Error fetching cards:",e),e.response&&400===e.response.status?(a({}),m(!1)):m(!1)})).finally((()=>{m(!1)}))}),[e,h]),null===s?(0,r.jsxs)("div",{className:"cards-container",children:[u&&(0,r.jsx)("div",{className:"spinner-container",children:(0,r.jsx)("div",{className:"spinner"})}),(0,r.jsx)("div",{className:"nav-tiles"})]}):(0,r.jsxs)("div",{className:"cards-container",children:[u&&(0,r.jsx)("div",{className:"spinner-container",children:(0,r.jsx)("div",{className:"spinner"})}),0===Object.keys(s).length?(0,r.jsx)(o.default,{setSubmissionSuccess:v}):null,(0,r.jsx)("div",{className:"nav-tiles",children:(0,r.jsx)("div",{className:"tiles",children:!u&&d.map((e=>(0,r.jsx)(l.default,{...e},e.card_id)))})})]})}},175:(e,s,a)=>{a.d(s,{Z:()=>c});var t=a(2791),i=a(7689),n=a(184);const c=function(e,s){const{activeTab:a}=e,{id:c}=(0,i.UO)(),l=(0,i.s0)(),[o,r]=(0,t.useState)(!1),d=(window.innerWidth,(0,t.useRef)(null)),p=localStorage.getItem("username"),u=localStorage.getItem("profile_image_url");return(0,t.useEffect)((()=>{const e=e=>{d.current&&!d.current.contains(e.target)&&r(!1)},s=e=>{e.changedTouches[0].clientX-e.changedTouches[e.changedTouches.length-1].clientX>50&&r(!1)};return document.addEventListener("click",e),document.addEventListener("touchend",s),()=>{document.removeEventListener("click",e),document.removeEventListener("touchend",s)}}),[]),(0,n.jsx)("div",{className:"header-container",children:(0,n.jsxs)("header",{className:"dashboard-header ".concat(o?"menu-open":""),children:[(0,n.jsx)("div",{className:"dashboard-header-logo",children:(0,n.jsx)("div",{className:"dashboard-logo"})}),(0,n.jsx)("div",{className:"dashboard-header-actions",children:(0,n.jsxs)("button",{onClick:()=>{return e="account",r(!1),void l("/".concat(c,"/dashboard/").concat(e));var e},className:"user-profile",children:[(0,n.jsx)("span",{children:p}),(0,n.jsx)("span",{children:(0,n.jsx)("img",{src:u,alt:"User Avatar"})})]})})]})})}},8416:(e,s,a)=>{a.r(s),a.d(s,{default:()=>o});var t=a(2791),i=a(7689),n=a(184);var c=a(5294),l=(a(8329),a(3712));const o=e=>{let{initialValues:s,isEditing:a}=e;const[o,r]=(0,t.useState)(1),[d,p]=(0,t.useState)(""),[u,m]=(0,t.useState)(""),[h,v]=(0,t.useState)("Profile Image"),[x,f]=(0,t.useState)("Background Image"),[g,j]=(0,t.useState)({id:"",username:"",email:"",company:"",phone:"",position:"",instagram:"",url:"",facebook:"",linkedin:"",image:"",background_image:"",tiktok:"",spotify:"",twitter:"",paypal:"",vinted:"",notes:"",standvirtual:"",olx:"",piscapisca:"",custojusto:"",address:"",...s}),y=(0,i.s0)(),{id:N}=(0,i.UO)(),b="".concat(g.profilePicture,"-").concat(g.background_image);(0,t.useEffect)((()=>{if(s&&s.cards&&s.cards.length>0){const e=s.cards[0];j((s=>({...s,...e})))}}),[s]);const k=e=>{const{name:s,value:a}=e.target;j((e=>({...e,[s]:a})))},C=async e=>{e.preventDefault();try{const e=new FormData;for(const a in g)"profilePicture"===a||"background_image"===a?g[a]instanceof File&&e.append(a,g[a]):e.append(a,g[a]);let s,t;a?(s="put",t="https://".concat("app.bravanfc.com","/api/updatecard")):(s="post",t="https://".concat("app.bravanfc.com","/api/createcard"));const i=await(0,c.Z)({method:s,url:t,data:e,headers:{"Content-Type":"multipart/form-data"}});201===i.status&&y("/".concat(N,"/dashboard/my-card")),console.log("Response:",i.data)}catch(s){console.error("Error submitting form:",s)}};return(0,n.jsx)("div",{className:"createcard-container",children:(0,n.jsx)("div",{className:"msform",children:(0,n.jsx)("div",{className:"createcard-container",children:(0,n.jsxs)("div",{className:"card-content",children:[(0,n.jsx)("div",{className:"side-navigation",children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{className:o>=1?"active":"",children:"Card Setup"}),(0,n.jsx)("li",{className:o>=2?"active":"",children:"Social Media"})]})}),(0,n.jsx)("div",{className:"msform",children:(0,n.jsxs)("form",{id:"msform",onSubmit:C,encType:"multipart/form-data",children:[1===o&&(0,n.jsxs)("fieldset",{children:[(0,n.jsx)("h2",{className:"fs-title",children:"Setup your data"}),(0,n.jsx)("p",{className:"fs-subtitle",children:"We'll guide you through the process of adding the data displayed in your card"}),(0,n.jsxs)("div",{className:"row",children:[(0,n.jsxs)("div",{className:"col",children:[(0,n.jsx)("label",{children:"Name"}),(0,n.jsx)("input",{type:"text",name:"username",placeholder:"Name",value:g.username,onChange:k,required:!0})]}),(0,n.jsxs)("div",{className:"col",children:[(0,n.jsx)("label",{children:"Email"}),(0,n.jsx)("input",{type:"text",name:"email",placeholder:"Email",value:g.email,onChange:k,required:!0})]}),(0,n.jsxs)("div",{className:"col",children:[(0,n.jsx)("label",{children:"Phone"}),(0,n.jsx)("input",{type:"tel",name:"phone",placeholder:"Phone",value:g.phone,onChange:k,required:!0})]})]}),(0,n.jsxs)("div",{className:"row",children:[(0,n.jsxs)("div",{className:"col",children:[(0,n.jsx)("label",{children:"Company"}),(0,n.jsx)("input",{type:"text",name:"company",placeholder:"Company (optional)",value:g.company,onChange:k})]}),(0,n.jsxs)("div",{className:"col",children:[(0,n.jsx)("label",{children:"Position"}),(0,n.jsx)("input",{type:"text",name:"position",placeholder:"Position (optional)",value:g.position,onChange:k})]})]}),(0,n.jsx)("div",{className:"row",children:(0,n.jsxs)("div",{className:"col",children:[(0,n.jsx)("label",{children:"Address"}),(0,n.jsx)("input",{type:"text",name:"address",placeholder:"Address",value:g.address,onChange:k})]})}),(0,n.jsxs)("div",{className:"row",children:[(0,n.jsxs)("div",{className:"profile-picture-container",children:[(0,n.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/upload.png?v=1713209450",alt:"Upload Icon",className:"upload-icon"}),(0,n.jsx)("input",{id:"profilePictureInput",name:"profilePicture",type:"file",onChange:e=>{return s=e.target.files[0],j((e=>({...e,profilePicture:s}))),p(URL.createObjectURL(s)),void v(s.name);var s},className:"file-input"}),(0,n.jsx)("label",{htmlFor:"profilePictureInput",className:"file-label",children:h})]}),(0,n.jsxs)("div",{className:"profile-picture-container",children:[(0,n.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/upload.png?v=1713209450",alt:"Upload Icon",className:"upload-icon"}),(0,n.jsx)("input",{id:"backgroundImageInput",name:"background_image",type:"file",onChange:e=>{return s=e.target.files[0],j((e=>({...e,background_image:s}))),m(URL.createObjectURL(s)),void f(s.name);var s},className:"file-input"}),(0,n.jsx)("label",{htmlFor:"backgroundImageInput",className:"file-label",children:x})]})]}),(0,n.jsx)("div",{className:"col",children:(0,n.jsx)("input",{type:"button",name:"next",className:"next action-button",value:"Next",onClick:()=>{r(o+1)}})})]}),2===o&&(0,n.jsxs)("fieldset",{children:[(0,n.jsx)("h2",{className:"fs-title",children:"Social Profiles"}),(0,n.jsx)("h3",{className:"fs-subtitle",children:"Your presence on the social network"}),(0,n.jsx)("div",{className:"social-input-container-wrapper",children:(0,n.jsxs)("div",{className:"social-input-container",children:[(0,n.jsxs)("div",{className:"social-input",children:[(0,n.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/icons8-instagram.svg?v=1712083465",className:"social",alt:"Instagram"}),(0,n.jsx)("input",{type:"text",name:"instagram",placeholder:"Instagram",value:g.instagram,onChange:k})]}),(0,n.jsxs)("div",{className:"social-input",children:[(0,n.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/icons8-facebook.svg?v=1712083465",className:"social",alt:"Facebook"}),(0,n.jsx)("input",{type:"text",name:"facebook",placeholder:"Facebook",value:g.facebook,onChange:k})]}),(0,n.jsxs)("div",{className:"social-input",children:[(0,n.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/icons8-linkedin.svg?v=1712083465",className:"social",alt:"LinkedIn"}),(0,n.jsx)("input",{type:"text",name:"linkedin",placeholder:"Linkedin",value:g.linkedin,onChange:k})]}),(0,n.jsxs)("div",{className:"social-input",children:[(0,n.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/url.png?v=1712083467",className:"social",alt:"URL"}),(0,n.jsx)("input",{type:"text",name:"url",placeholder:"Url",value:g.url,onChange:k})]}),(0,n.jsxs)("div",{className:"social-input",children:[(0,n.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/tiktok.png?v=1713213933",className:"social",alt:"tiktok"}),(0,n.jsx)("input",{type:"text",name:"tiktok",placeholder:"tiktok",value:g.tiktok,onChange:k})]}),(0,n.jsxs)("div",{className:"social-input",children:[(0,n.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/spotify_bcf3311d-41be-49a9-8cec-d1bdc9363c4d.png?v=1713213932",className:"social",alt:"Spotify"}),(0,n.jsx)("input",{type:"text",name:"spotify",placeholder:"spotify",value:g.spotify,onChange:k})]}),(0,n.jsxs)("div",{className:"social-input",children:[(0,n.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/twitter.svg?v=1713213932",className:"social",alt:"Twitter"}),(0,n.jsx)("input",{type:"text",name:"twitter",placeholder:"Twitter",value:g.twitter,onChange:k})]}),(0,n.jsxs)("div",{className:"social-input",children:[(0,n.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/paypal.png?v=1713213933",className:"social",alt:"paypal"}),(0,n.jsx)("input",{type:"text",name:"paypal",placeholder:"paypal",value:g.paypal,onChange:k})]}),(0,n.jsxs)("div",{className:"social-input",children:[(0,n.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/Vinted.png?v=1713213932",className:"social",alt:"vinted",style:{width:"100px",height:"60px",marginRight:"-20px",marginLeft:"-20px"}}),(0,n.jsx)("input",{type:"text",name:"vinted",placeholder:"vinted",value:g.vinted,onChange:k})]}),(0,n.jsxs)("div",{className:"social-input",children:[(0,n.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/standvirtual.png?v=1713213933",className:"social",alt:"standvirtual"}),(0,n.jsx)("input",{type:"text",name:"standvirtual",placeholder:"standvirtual",value:g.standvirtual,onChange:k})]}),(0,n.jsxs)("div",{className:"social-input",children:[(0,n.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/olx.png?v=1713213932",className:"social",alt:"olx"}),(0,n.jsx)("input",{type:"text",name:"olx",placeholder:"olx",value:g.olx,onChange:k})]}),(0,n.jsxs)("div",{className:"social-input",children:[(0,n.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/piscapisca.png?v=1713213932",className:"social",alt:"piscapisca"}),(0,n.jsx)("input",{type:"text",name:"piscapisca",placeholder:"piscapisca",value:g.piscapisca,onChange:k})]}),(0,n.jsxs)("div",{className:"social-input",children:[(0,n.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/custojusto.png?v=1713213932",className:"social",alt:"custojusto",style:{width:"100px",height:"60px",marginRight:"-35px",marginLeft:"-20px"}}),(0,n.jsx)("input",{type:"text",name:"custojusto",placeholder:"custojusto",value:g.custojusto,onChange:k})]}),(0,n.jsxs)("div",{className:"social-input",children:[(0,n.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/notes.png?v=1713213932",className:"social",alt:"notes"}),(0,n.jsx)("input",{type:"text",name:"notes",placeholder:"notes",value:g.notes,onChange:k})]})]})}),(0,n.jsx)("input",{type:"button",name:"previous",className:"previous action-button",value:"Previous",onClick:()=>{r(o-1)}}),(0,n.jsx)("input",{type:"submit",name:"submit",className:"next action-button",value:"Submit",onClick:C})]})]})}),(0,n.jsx)("div",{className:"createcard-component",children:(0,n.jsx)(l.default,{email:g.email,username:g.username,phone:g.phone,company:g.company,title:g.position,instagram:g.instagram,facebook:g.facebook,linkedin:g.linkedin,url:g.url,notes:g.notes,background_image_url:u||"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/brava_Front4-removebg-preview.png?v=1712164655",profile_image_url:d||"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/brava.jpg?v=1713204195",address:g.address,tiktok:g.tiktok,spotify:g.spotify,twitter:g.twitter,paypal:g.paypal,vinted:g.vinted,standvirtual:g.standvirtual,olx:g.olx,piscapisca:g.piscapisca,custojusto:g.custojusto,loading:!1},b)})]})})})})}},8329:(e,s,a)=>{function t(e){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var t in a)e[t]=a[t]}return e}a.d(s,{Z:()=>i});var i=function e(s,a){function i(e,i,n){if("undefined"!==typeof document){"number"===typeof(n=t({},a,n)).expires&&(n.expires=new Date(Date.now()+864e5*n.expires)),n.expires&&(n.expires=n.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var c="";for(var l in n)n[l]&&(c+="; "+l,!0!==n[l]&&(c+="="+n[l].split(";")[0]));return document.cookie=e+"="+s.write(i,e)+c}}return Object.create({set:i,get:function(e){if("undefined"!==typeof document&&(!arguments.length||e)){for(var a=document.cookie?document.cookie.split("; "):[],t={},i=0;i<a.length;i++){var n=a[i].split("="),c=n.slice(1).join("=");try{var l=decodeURIComponent(n[0]);if(t[l]=s.read(c,l),e===l)break}catch(o){}}return e?t[e]:t}},remove:function(e,s){i(e,"",t({},s,{expires:-1}))},withAttributes:function(s){return e(this.converter,t({},this.attributes,s))},withConverter:function(s){return e(t({},this.converter,s),this.attributes)}},{attributes:{value:Object.freeze(a)},converter:{value:Object.freeze(s)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}}]);
//# sourceMappingURL=361.09c96a65.chunk.js.map