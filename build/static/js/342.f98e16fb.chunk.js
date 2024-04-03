/*! For license information please see 342.f98e16fb.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkbrava=self.webpackChunkbrava||[]).push([[342],{3342:(e,a,t)=>{t.r(a),t.d(a,{default:()=>c});var n=t(2791),i=t(7689),s=t(5294),o=t(8329),r=(t(9806),t(184));const c=e=>{let{setSubmissionSuccess:a}=e;const[t,c]=(0,n.useState)(1),[l,p]=(0,n.useState)("Profile Picture"),[u,d]=(0,n.useState)("Background Image"),[m,f]=(0,n.useState)({name:"",email:"",company:"",phone:"",position:"",instagram:"",url:"",facebook:"",linkedin:"",image:"",background_image:""}),h=(0,i.s0)(),{id:g}=(0,i.UO)();(0,n.useEffect)((()=>{o.Z.get("session_token")||h("/login")}),[h]),(0,n.useEffect)((()=>{const e=JSON.parse(localStorage.getItem("formData"));e&&f(e)}),[]);const x=e=>{const{name:a,value:t}=e.target;f((e=>({...e,[a]:t})))},v=()=>{c(t+1)},b=()=>{c(t-1)};return(0,r.jsx)("div",{className:"createcard-container",children:(0,r.jsxs)("div",{className:"msform",children:[(0,r.jsxs)("ul",{id:"progressbar",children:[(0,r.jsx)("li",{className:t>=1?"active":"",children:"Card Setup"}),(0,r.jsx)("li",{className:t>=2?"active":"",children:"Social Media"}),(0,r.jsx)("li",{className:t>=3?"active":"",children:"Profile Picture"})]}),(0,r.jsxs)("form",{id:"msform",onSubmit:async e=>{e.preventDefault();const t=new FormData;t.append("name",m.name),t.append("email",m.email),t.append("company",m.company),t.append("position",m.position),t.append("phone",m.phone),t.append("instagram",m.instagram),t.append("facebook",m.facebook),t.append("linkedin",m.linkedin),t.append("url",m.url),t.append("profilePicture",m.profilePicture),t.append("background_image",m.background_image),t.append("userId",g);try{const e=await s.Z.post("https://".concat("app.bravanfc.com","/api/createcard"),t,{headers:{"Content-Type":"multipart/form-data"},withCredentials:!0});201===e.status||204===e.status?(localStorage.removeItem("formData"),h("/".concat(e.data.userId,"/dashboard/cards")),a(!0)):(console.error("Error creating card:",e.data),alert("Error creating card"))}catch(n){console.log("Error creating card",n),alert("There was an error creating your card",n)}},encType:"multipart/form-data",children:[1===t&&(0,r.jsxs)("fieldset",{children:[(0,r.jsx)("h2",{className:"fs-title",children:"Personal data"}),(0,r.jsx)("input",{type:"text",name:"name",placeholder:"Name",value:m.name,onChange:x,required:!0}),(0,r.jsx)("input",{type:"text",name:"email",placeholder:"Email",value:m.email,onChange:x,required:!0}),(0,r.jsx)("input",{type:"text",name:"company",placeholder:"Company (optional)",value:m.company,onChange:x}),(0,r.jsx)("input",{type:"text",name:"position",placeholder:"Position (optional)",value:m.position,onChange:x}),(0,r.jsx)("input",{type:"tel",name:"phone",placeholder:"Phone",value:m.phone,onChange:x,required:!0}),(0,r.jsx)("input",{type:"button",name:"next",className:"next action-button",value:"Next",onClick:v})]}),2===t&&(0,r.jsxs)("fieldset",{children:[(0,r.jsx)("h2",{className:"fs-title",children:"Social Profiles"}),(0,r.jsx)("h3",{className:"fs-subtitle",children:"Your presence on the social network"}),(0,r.jsxs)("div",{className:"social-input-container",children:[(0,r.jsxs)("div",{className:"social-input",children:[(0,r.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/icons8-instagram.svg?v=1712083465",className:"social"}),(0,r.jsx)("input",{type:"text",name:"instagram",placeholder:"Instagram",value:m.instagram,onChange:x})]}),(0,r.jsxs)("div",{className:"social-input",children:[(0,r.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/icons8-facebook.svg?v=1712083465",className:"social"}),(0,r.jsx)("input",{type:"text",name:"facebook",placeholder:"Facebook",value:m.facebook,onChange:x})]}),(0,r.jsxs)("div",{className:"social-input",children:[(0,r.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/icons8-linkedin.svg?v=1712083465",className:"social"}),(0,r.jsx)("input",{type:"text",name:"linkedin",placeholder:"Linkedin",value:m.linkedin,onChange:x})]}),(0,r.jsxs)("div",{className:"social-input",children:[(0,r.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/url.png?v=1712083467",className:"social"}),(0,r.jsx)("input",{type:"text",name:"url",placeholder:"Url",value:m.url,onChange:x})]})]}),(0,r.jsx)("input",{type:"button",name:"previous",className:"previous action-button",value:"Previous",onClick:b}),(0,r.jsx)("input",{type:"button",name:"next",className:"next action-button",value:"Next",onClick:v})]}),3===t&&(0,r.jsxs)("fieldset",{children:[(0,r.jsx)("h2",{className:"fs-title",children:"Profile Picture"}),(0,r.jsx)("h3",{className:"fs-subtitle",children:"Upload your profile picture"}),(0,r.jsxs)("div",{className:"profile-picture-container",children:[(0,r.jsx)("input",{type:"file",name:"profilePicture",id:"profilePictureInput",accept:"image/*",onChange:e=>{const a=e.target.files[0];a?(p(a.name),f((e=>({...e,profilePicture:a})))):p("Background Image")},className:"file-input"}),(0,r.jsx)("label",{htmlFor:"profilePictureInput",className:"file-label",children:l})]}),(0,r.jsxs)("div",{className:"profile-picture-container",children:[(0,r.jsx)("input",{type:"file",name:"background_image",id:"backgroundImageInput",accept:"image/*",onChange:e=>{const a=e.target.files[0];a?(d(a.name),f((e=>({...e,background_image:a})))):d("Background Image")},className:"file-input"}),(0,r.jsx)("label",{htmlFor:"backgroundImageInput",className:"file-label",children:u})]}),(0,r.jsx)("input",{type:"button",name:"previous",className:"previous action-button",value:"Previous",onClick:b}),(0,r.jsx)("input",{type:"submit",name:"submit",className:"submit action-button",value:"Submit"})]})]})]})})}},8329:(e,a,t)=>{function n(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)e[n]=t[n]}return e}t.d(a,{Z:()=>i});var i=function e(a,t){function i(e,i,s){if("undefined"!==typeof document){"number"===typeof(s=n({},t,s)).expires&&(s.expires=new Date(Date.now()+864e5*s.expires)),s.expires&&(s.expires=s.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var o="";for(var r in s)s[r]&&(o+="; "+r,!0!==s[r]&&(o+="="+s[r].split(";")[0]));return document.cookie=e+"="+a.write(i,e)+o}}return Object.create({set:i,get:function(e){if("undefined"!==typeof document&&(!arguments.length||e)){for(var t=document.cookie?document.cookie.split("; "):[],n={},i=0;i<t.length;i++){var s=t[i].split("="),o=s.slice(1).join("=");try{var r=decodeURIComponent(s[0]);if(n[r]=a.read(o,r),e===r)break}catch(c){}}return e?n[e]:n}},remove:function(e,a){i(e,"",n({},a,{expires:-1}))},withAttributes:function(a){return e(this.converter,n({},this.attributes,a))},withConverter:function(a){return e(n({},this.converter,a),this.attributes)}},{attributes:{value:Object.freeze(t)},converter:{value:Object.freeze(a)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}}]);
//# sourceMappingURL=342.f98e16fb.chunk.js.map