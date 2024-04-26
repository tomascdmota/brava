/*! For license information please see 513.59f5abee.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkbrava=self.webpackChunkbrava||[]).push([[513,156],{8416:(e,s,a)=>{a.r(s),a.d(s,{default:()=>o});var t=a(2791),i=a(7689),n=a(184);var l=a(5294),c=(a(8329),a(3712));const o=e=>{let{initialValues:s,isEditing:a,cardId:o}=e;const[r,p]=(0,t.useState)(1),[d,m]=(0,t.useState)(""),[u,h]=(0,t.useState)(""),[x,f]=(0,t.useState)("Profile Image"),[v,g]=(0,t.useState)("Background Image"),[j,y]=(0,t.useState)({id:"",username:"",email:"",company:"",phone:"",position:"",instagram:"",url:"",facebook:"",linkedin:"",image:"",background_image:"",tiktok:"",spotify:"",twitter:"",paypal:"",vinted:"",notes:"",standvirtual:"",olx:"",piscapisca:"",custojusto:"",address:"",...s}),N=(0,i.s0)(),{id:b}=(0,i.UO)(),k="".concat(j.profilePicture,"-").concat(j.background_image);(0,t.useEffect)((()=>{if(s&&s.cards&&s.cards.length>0){const e=s.cards[0];y((s=>({...s,...e})))}}),[s]);const C=e=>{const{name:s,value:a}=e.target;y((e=>({...e,[s]:a})))},w=async e=>{e.preventDefault();try{const e=new FormData;for(const a in j)"profilePicture"===a||"background_image"===a?j[a]instanceof File&&e.append(a,j[a]):e.append(a,j[a]);let s,t;a?(s="put",t="https://".concat("app.bravanfc.com","/api/updatecard/").concat(b,"/").concat(o),console.log("cardid",o)):(s="post",t="https://".concat("app.bravanfc.com","/api/createcard"));const i=await(0,l.Z)({method:s,url:t,data:e,headers:{"Content-Type":"multipart/form-data"}});201===i.status&&N("/".concat(b,"/dashboard/my-card")),console.log("Response:",i.data)}catch(s){console.error("Error submitting form:",s)}};return(0,n.jsx)("div",{className:"createcard-container",children:(0,n.jsx)("div",{className:"msform",children:(0,n.jsx)("div",{className:"createcard-container",children:(0,n.jsxs)("div",{className:"card-content",children:[(0,n.jsx)("div",{className:"side-navigation",children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{className:r>=1?"active":"",children:"Card Setup"}),(0,n.jsx)("li",{className:r>=2?"active":"",children:"Social Media"})]})}),(0,n.jsx)("div",{className:"msform",children:(0,n.jsxs)("form",{id:"msform",onSubmit:w,encType:"multipart/form-data",children:[1===r&&(0,n.jsxs)("fieldset",{children:[(0,n.jsx)("h2",{className:"fs-title",children:"Setup your data"}),(0,n.jsx)("p",{className:"fs-subtitle",children:"We'll guide you through the process of adding the data displayed in your card"}),(0,n.jsxs)("div",{className:"row",children:[(0,n.jsxs)("div",{className:"col",children:[(0,n.jsx)("label",{children:"Name"}),(0,n.jsx)("input",{type:"text",name:"username",placeholder:"Name",value:j.username,onChange:C,required:!0})]}),(0,n.jsxs)("div",{className:"col",children:[(0,n.jsx)("label",{children:"Email"}),(0,n.jsx)("input",{type:"text",name:"email",placeholder:"Email",value:j.email,onChange:C,required:!0})]}),(0,n.jsxs)("div",{className:"col",children:[(0,n.jsx)("label",{children:"Phone"}),(0,n.jsx)("input",{type:"tel",name:"phone",placeholder:"Phone",value:j.phone,onChange:C,required:!0})]})]}),(0,n.jsxs)("div",{className:"row",children:[(0,n.jsxs)("div",{className:"col",children:[(0,n.jsx)("label",{children:"Company"}),(0,n.jsx)("input",{type:"text",name:"company",placeholder:"Company (optional)",value:j.company,onChange:C})]}),(0,n.jsxs)("div",{className:"col",children:[(0,n.jsx)("label",{children:"Position"}),(0,n.jsx)("input",{type:"text",name:"position",placeholder:"Position (optional)",value:j.position,onChange:C})]})]}),(0,n.jsx)("div",{className:"row",children:(0,n.jsxs)("div",{className:"col",children:[(0,n.jsx)("label",{children:"Address"}),(0,n.jsx)("input",{type:"text",name:"address",placeholder:"Address",value:j.address,onChange:C})]})}),(0,n.jsxs)("div",{className:"row",children:[(0,n.jsxs)("div",{className:"profile-picture-container",children:[(0,n.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/upload.png?v=1713209450",alt:"Upload Icon",className:"upload-icon"}),(0,n.jsx)("input",{id:"profilePictureInput",name:"profilePicture",type:"file",onChange:e=>{return s=e.target.files[0],y((e=>({...e,profilePicture:s}))),m(URL.createObjectURL(s)),void f(s.name);var s},className:"file-input"}),(0,n.jsx)("label",{htmlFor:"profilePictureInput",className:"file-label",children:x})]}),(0,n.jsxs)("div",{className:"profile-picture-container",children:[(0,n.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/upload.png?v=1713209450",alt:"Upload Icon",className:"upload-icon"}),(0,n.jsx)("input",{id:"backgroundImageInput",name:"background_image",type:"file",onChange:e=>{return s=e.target.files[0],y((e=>({...e,background_image:s}))),h(URL.createObjectURL(s)),void g(s.name);var s},className:"file-input"}),(0,n.jsx)("label",{htmlFor:"backgroundImageInput",className:"file-label",children:v})]})]}),(0,n.jsx)("div",{className:"col",children:(0,n.jsx)("input",{type:"button",name:"next",className:"next action-button",value:"Next",onClick:()=>{p(r+1)}})})]}),2===r&&(0,n.jsxs)("fieldset",{children:[(0,n.jsx)("h2",{className:"fs-title",children:"Social Profiles"}),(0,n.jsx)("h3",{className:"fs-subtitle",children:"Your presence on the social network"}),(0,n.jsx)("div",{className:"social-input-container-wrapper",children:(0,n.jsxs)("div",{className:"social-input-container",children:[(0,n.jsxs)("div",{className:"social-input",children:[(0,n.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/icons8-instagram.svg?v=1712083465",className:"social",alt:"Instagram"}),(0,n.jsx)("input",{type:"text",name:"instagram",placeholder:"Instagram",value:j.instagram,onChange:C})]}),(0,n.jsxs)("div",{className:"social-input",children:[(0,n.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/icons8-facebook.svg?v=1712083465",className:"social",alt:"Facebook"}),(0,n.jsx)("input",{type:"text",name:"facebook",placeholder:"Facebook",value:j.facebook,onChange:C})]}),(0,n.jsxs)("div",{className:"social-input",children:[(0,n.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/icons8-linkedin.svg?v=1712083465",className:"social",alt:"LinkedIn"}),(0,n.jsx)("input",{type:"text",name:"linkedin",placeholder:"Linkedin",value:j.linkedin,onChange:C})]}),(0,n.jsxs)("div",{className:"social-input",children:[(0,n.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/url.png?v=1712083467",className:"social",alt:"URL"}),(0,n.jsx)("input",{type:"text",name:"url",placeholder:"Url",value:j.url,onChange:C})]}),(0,n.jsxs)("div",{className:"social-input",children:[(0,n.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/tiktok.png?v=1713213933",className:"social",alt:"tiktok"}),(0,n.jsx)("input",{type:"text",name:"tiktok",placeholder:"tiktok",value:j.tiktok,onChange:C})]}),(0,n.jsxs)("div",{className:"social-input",children:[(0,n.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/spotify_bcf3311d-41be-49a9-8cec-d1bdc9363c4d.png?v=1713213932",className:"social",alt:"Spotify"}),(0,n.jsx)("input",{type:"text",name:"spotify",placeholder:"spotify",value:j.spotify,onChange:C})]}),(0,n.jsxs)("div",{className:"social-input",children:[(0,n.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/twitter.svg?v=1713213932",className:"social",alt:"Twitter"}),(0,n.jsx)("input",{type:"text",name:"twitter",placeholder:"Twitter",value:j.twitter,onChange:C})]}),(0,n.jsxs)("div",{className:"social-input",children:[(0,n.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/paypal.png?v=1713213933",className:"social",alt:"paypal"}),(0,n.jsx)("input",{type:"text",name:"paypal",placeholder:"paypal",value:j.paypal,onChange:C})]}),(0,n.jsxs)("div",{className:"social-input",children:[(0,n.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/Vinted.png?v=1713213932",className:"social",alt:"vinted",style:{width:"100px",height:"60px",marginRight:"-20px",marginLeft:"-20px"}}),(0,n.jsx)("input",{type:"text",name:"vinted",placeholder:"vinted",value:j.vinted,onChange:C})]}),(0,n.jsxs)("div",{className:"social-input",children:[(0,n.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/standvirtual.png?v=1713213933",className:"social",alt:"standvirtual"}),(0,n.jsx)("input",{type:"text",name:"standvirtual",placeholder:"standvirtual",value:j.standvirtual,onChange:C})]}),(0,n.jsxs)("div",{className:"social-input",children:[(0,n.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/olx.png?v=1713213932",className:"social",alt:"olx"}),(0,n.jsx)("input",{type:"text",name:"olx",placeholder:"olx",value:j.olx,onChange:C})]}),(0,n.jsxs)("div",{className:"social-input",children:[(0,n.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/piscapisca.png?v=1713213932",className:"social",alt:"piscapisca"}),(0,n.jsx)("input",{type:"text",name:"piscapisca",placeholder:"piscapisca",value:j.piscapisca,onChange:C})]}),(0,n.jsxs)("div",{className:"social-input",children:[(0,n.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/custojusto.png?v=1713213932",className:"social",alt:"custojusto",style:{width:"100px",height:"60px",marginRight:"-35px",marginLeft:"-20px"}}),(0,n.jsx)("input",{type:"text",name:"custojusto",placeholder:"custojusto",value:j.custojusto,onChange:C})]}),(0,n.jsxs)("div",{className:"social-input",children:[(0,n.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/notes.png?v=1713213932",className:"social",alt:"notes"}),(0,n.jsx)("input",{type:"text",name:"notes",placeholder:"notes",value:j.notes,onChange:C})]})]})}),(0,n.jsx)("input",{type:"button",name:"previous",className:"previous action-button",value:"Previous",onClick:()=>{p(r-1)}}),(0,n.jsx)("input",{type:"submit",name:"submit",className:"next action-button",value:"Submit",onClick:w})]})]})}),(0,n.jsx)("div",{className:"createcard-component",children:(0,n.jsx)(c.default,{email:j.email,username:j.username,phone:j.phone,company:j.company,title:j.position,instagram:j.instagram,facebook:j.facebook,linkedin:j.linkedin,url:j.url,notes:j.notes,background_image_url:u||"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/brava_Front4-removebg-preview.png?v=1712164655",profile_image_url:d||"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/brava.jpg?v=1713204195",address:j.address,tiktok:j.tiktok,spotify:j.spotify,twitter:j.twitter,paypal:j.paypal,vinted:j.vinted,standvirtual:j.standvirtual,olx:j.olx,piscapisca:j.piscapisca,custojusto:j.custojusto,loading:!1},k)})]})})})})}},8329:(e,s,a)=>{function t(e){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var t in a)e[t]=a[t]}return e}a.d(s,{Z:()=>i});var i=function e(s,a){function i(e,i,n){if("undefined"!==typeof document){"number"===typeof(n=t({},a,n)).expires&&(n.expires=new Date(Date.now()+864e5*n.expires)),n.expires&&(n.expires=n.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var l="";for(var c in n)n[c]&&(l+="; "+c,!0!==n[c]&&(l+="="+n[c].split(";")[0]));return document.cookie=e+"="+s.write(i,e)+l}}return Object.create({set:i,get:function(e){if("undefined"!==typeof document&&(!arguments.length||e)){for(var a=document.cookie?document.cookie.split("; "):[],t={},i=0;i<a.length;i++){var n=a[i].split("="),l=n.slice(1).join("=");try{var c=decodeURIComponent(n[0]);if(t[c]=s.read(l,c),e===c)break}catch(o){}}return e?t[e]:t}},remove:function(e,s){i(e,"",t({},s,{expires:-1}))},withAttributes:function(s){return e(this.converter,t({},this.attributes,s))},withConverter:function(s){return e(t({},this.converter,s),this.attributes)}},{attributes:{value:Object.freeze(a)},converter:{value:Object.freeze(s)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}}]);
//# sourceMappingURL=513.59f5abee.chunk.js.map