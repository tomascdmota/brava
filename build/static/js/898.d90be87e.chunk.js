"use strict";(self.webpackChunkbrava=self.webpackChunkbrava||[]).push([[898],{9939:(e,a,s)=>{s.r(a),s.d(a,{default:()=>x});var t=s(2791),l=s(7236),o=s(4484),i=s(4754),n=s(830),c=s.n(n),r=s(9073),d=s(8152),p=s.n(d),m=s(7689),u=s(5294),g=s(184);const h=e=>{let{isOpen:a,onClose:s}=e;const[l,o]=(0,t.useState)({name:"",company:"",email:"",message:""}),{id:i}=(0,m.UO)(),n=e=>{const{name:a,value:s}=e.target;o((e=>({...e,[a]:s})))};return(0,g.jsx)(g.Fragment,{children:a&&(0,g.jsx)("div",{className:"modal-overlay",children:(0,g.jsxs)("div",{className:"modal-content",children:[(0,g.jsx)("button",{className:"close-button",onClick:s,children:"X"}),(0,g.jsx)("h2",{children:"GET IN TOUCH"}),(0,g.jsxs)("form",{onSubmit:e=>{e.preventDefault(),u.Z.post("https://".concat("app.bravanfc.com","/api/").concat(i,"/message"),l).then((e=>{console.log("Response Headers:",e.headers),200===e.status&&(alert("Message sent successfully"),o({name:"",company:"",email:"",message:""}))})).catch((e=>{console.log(e.response.status),console.log(e)})),console.log("Form submitted:",l),s()},children:[(0,g.jsx)("label",{htmlFor:"name",children:"Name:"}),(0,g.jsx)("input",{type:"text",id:"name",name:"name",placeholder:"Name",value:l.name,onChange:n,required:!0}),(0,g.jsx)("label",{htmlFor:"company",children:"Company:"}),(0,g.jsx)("input",{type:"text",id:"company",name:"company",placeholder:"Company",value:l.company,onChange:n,required:!0}),(0,g.jsx)("label",{htmlFor:"email",children:"Email:"}),(0,g.jsx)("input",{type:"email",id:"email",name:"email",placeholder:"Email",value:l.email,onChange:n,required:!0}),(0,g.jsx)("label",{htmlFor:"message",children:"Message:"}),(0,g.jsx)("textarea",{id:"message",name:"message",placeholder:"What would you like to say?",value:l.message,onChange:n,required:!0}),(0,g.jsx)("button",{type:"submit",children:"Submit"})]})]})})})},f=s.p+"static/media/googlereview.a0998f3f7fc14a058324.png";const x=function(e){let{card_id:a,id:s,email:n,username:d,phone:m,company:u,title:x,profile_image_url:y,background_image_url:j,onLoad:v,facebook:b,linkedin:k,instagram:N,google_reviews:w,address:I,youtube:C,notes:S,url:U,paypal:R,tiktok:L,twitter:P,spotify:E,vinted:F,standvirtual:z,olx:B,piscapisca:T,custojusto:_}=e;const[O,D]=(0,t.useState)(null),[A,q]=(0,t.useState)(!0),[M,K]=(0,t.useState)(!1),H="AKIAS74Z5OF3SEUUXSFT",W="rJzM6aFnMC/riviirzTCFtLD7QHaDvaoWsXd9ER3",X="eu-west-2",V="brava-bucket";let Z;(0,t.useEffect)((()=>{let e=!0;return(async()=>{const a=await G();if(e)if(a){const e=new Blob([a],{type:"image/jpg"});D(e),q(!1)}else J()})(),()=>{e=!1,O&&URL.revokeObjectURL(O)}}),[]);const Y=async()=>{try{return await(0,r.X3)("brava-db",1,{upgrade(e){if(!e.objectStoreNames.contains("images")){e.createObjectStore("images",{keyPath:"key"}).createIndex("url","url",{unique:!0})}}})}catch(e){throw console.error("Error initializing IndexedDB:",e),e}},G=async()=>{try{const e=await Y(),a=e.transaction("images").objectStore("images"),s=await a.get("profileImage");return s?s.data:null}catch(e){return console.error("Error loading from IndexedDB:",e),null}},J=async()=>{try{const e=new l.S3({credentials:{accessKeyId:H,secretAccessKey:W},region:X}),a=new URL(y),s=decodeURIComponent(a.pathname.replace(/^\//,"")),t={Bucket:V,Key:s},i=new o.i(t),n=await e.send(i),c=new Blob([n.Body],{type:n.ContentType});(async e=>{try{const a=(await Y()).transaction("images","readwrite"),s=a.objectStore("images"),t={key:"profileImage",url:y,data:e};s.put(t),await a.complete,console.log("Image stored in IndexedDB:",t)}catch(a){console.error("Error storing image in IndexedDB:",a)}})(c),D(c),q(!1),v&&v()}catch(e){console.error("Error fetching image:",e)}};(0,t.useEffect)((()=>{let e=!0;return(async()=>{const e=await G();if(e){const a=new Blob([e],{type:"image/jpg"});D(a),q(!1)}else J()})(),()=>{e=!1,O&&URL.revokeObjectURL(O)}}),[y,V,X,H,W,v]);const Q=async e=>{try{const a=await fetch(e),s=await a.blob();return await $(s,{maxWidth:800,maxHeight:800,quality:.9})}catch(a){return console.error("Error fetching, resizing, and encoding image:",a),null}},$=async(e,a)=>{try{const s=new Image;s.src=URL.createObjectURL(e),await new Promise(((e,a)=>{s.onload=e,s.onerror=a}));const{maxWidth:t,maxHeight:l,quality:o}=a;let i=s.width,n=s.height;i>n?i>t&&(n*=t/i,i=t):n>l&&(i*=l/n,n=l);const c=document.createElement("canvas");c.width=i,c.height=n;c.getContext("2d").drawImage(s,0,0,i,n);const r=await new Promise((e=>{c.toBlob(e,"image/jpeg",o)})),d=await new Response(r).arrayBuffer();return btoa(new Uint8Array(d).reduce(((e,a)=>e+String.fromCharCode(a)),""))}catch(s){return console.error("Error resizing and compressing image:",s),null}},ee=async e=>{try{const a=new l.S3({region:"eu-west-2",credentials:{accessKeyId:H,secretAccessKey:W}}),s={Bucket:"brava-bucket",Key:e,Expires:900},t=(0,i.e)(a,new o.i(s));return console.log(t),t}catch(a){throw console.error("Error generating pre-signed URL:",a),a}};return(0,g.jsxs)("div",{className:"card-component ".concat(A?"loading":""),children:[(0,g.jsx)("div",{className:"card-background",style:{backgroundImage:"url(".concat(j||"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/brava_Front4-removebg-preview.png?v=1712164655",")")}}),(0,g.jsx)("div",{className:"card-component-header",children:A?(0,g.jsx)("p",{children:"Loading..."}):(0,g.jsx)(g.Fragment,{children:(0,g.jsx)("img",{className:"card-image",rel:"preload",loading:"lazy",src:y||"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/brava.jpg?v=1713204195",alt:"Profile"})})}),(0,g.jsxs)("div",{className:"card-body",children:[(0,g.jsx)("h5",{children:x}),(0,g.jsx)("h3",{children:(0,g.jsx)("span",{children:u})}),(0,g.jsx)("p",{children:d}),(0,g.jsxs)("div",{className:"card-buttons",children:[(0,g.jsx)("button",{onClick:async()=>{try{const e=new(c());if(!await G())return void console.error("Image not found in IndexedDB.");const t=e=>p().nfkd(e).replace(/[\u0300-\u036f]/g,""),l=t(decodeURIComponent(d)),o=t(decodeURIComponent(x)),i=t(decodeURIComponent(S)),r=t(decodeURIComponent(I));e.add("n",[l]),e.add("fn",[l]),e.add("org",u),e.add("tel",m),e.add("email",n),e.add("title",[o]),e.add("url","https://app.bravanfc.com/".concat(s,"/cards/").concat(a)),b&&e.add("x-socialprofile",b,{type:"Facebook"}),N&&e.add("x-socialprofile",N,{type:"Instagram"}),k&&e.add("x-socialprofile",k,{type:"Linkedin"}),C&&e.add("x-socialprofile",C,{type:"Youtube"}),S&&e.add("note",[i]),P&&e.add("x-socialprofile",P,{type:"Twitter"}),R&&e.add("x-socialprofile",R,{type:"Paypal"}),L&&e.add("x-socialprofile",L,{type:"TikTok"}),E&&e.add("x-socialprofile",E,{type:"Spotify"}),F&&e.add("x-socialprofile",F,{type:"Vinted"}),B&&e.add("x-social-profile",B,{type:"Olx"}),z&&e.add("x-social-profile",z,{type:"standvirtual"}),T&&e.add("x-social-profile",T,{type:"piscapisca"}),_&&e.add("x-social-profile",_,{type:"custojusto"}),e.add("adr",[r]);const g=new URL(y),h=decodeURIComponent(g.pathname.replace(/^\//,"")),f=await ee(h),j=await Q(f);if(!j)return void console.error("Error fetching and encoding image.");e.add("photo",j,{encoding:"b",type:"image/jpeg"});const v=e.toString("3.0");console.log(v);const w=new Blob([(new TextEncoder).encode(v)],{type:"text/vcard;charset=utf-8"}),U=document.createElement("a");U.href=URL.createObjectURL(w),U.download="contact.vcf",window.location.href=URL.createObjectURL(w),URL.revokeObjectURL(w)}catch(e){console.error("Error saving to contacts:",e)}},children:"SAVE CONTACT"}),(0,g.jsx)("button",{className:"fab",onClick:()=>{try{K(!0)}catch(e){console.error("Error opening modal:",e)}},children:"EXCHANGE CONTACT"})]}),(0,g.jsxs)("div",{className:"social-icons",children:[U&&(0,g.jsx)("a",{href:U,children:(0,g.jsx)("img",{rel:"preload",className:"url",loading:"lazy",src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/url.png?v=1712083467",alt:"Url",focusable:!0})}),w&&(0,g.jsx)("a",{href:w,children:(0,g.jsx)("img",{rel:"preload",loading:"lazy",src:f,alt:"Instagram",focusable:!0})}),N&&(0,g.jsx)("a",{href:N,children:(0,g.jsx)("img",{rel:"preload",loading:"lazy",src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/icons8-instagram.svg?v=1712083465",alt:"Instagram",focusable:!0})}),b&&(0,g.jsx)("a",{href:b,children:(0,g.jsx)("img",{rel:"preload",loading:"lazy",src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/icons8-facebook.svg?v=1712083465",alt:"Facebook",focusable:!0})}),k&&(0,g.jsx)("a",{href:k,children:(0,g.jsx)("img",{rel:"preload",loading:"lazy",src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/icons8-linkedin.svg?v=1712083465",alt:"LinkedIn",focusable:!0})}),C&&(0,g.jsx)("a",{href:C,children:(0,g.jsx)("img",{rel:"preload",loading:"lazy",src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/icons8-youtube.svg?v=1712083465",alt:"YouTube",focusable:!0})}),R&&(0,g.jsx)("a",{href:R,children:(0,g.jsx)("img",{rel:"preload",loading:"lazy",src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/icons8-paypal.svg?v=1712083465",alt:"Paypal",focusable:!0})}),P&&(0,g.jsx)("a",{href:P,children:(0,g.jsx)("img",{rel:"preload",loading:"lazy",src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/icons8-twitterx.svg?v=1712083465",alt:"Twitter",focusable:!0})}),L&&(0,g.jsx)("a",{href:L,children:(0,g.jsx)("img",{rel:"preload",loading:"lazy",src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/tiktok.png?v=1713213933",alt:"TikTok",focusable:!0})}),E&&(0,g.jsx)("a",{href:E,children:(0,g.jsx)("img",{rel:"preload",className:"spotify",loading:"lazy",src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/spotify.png?v=1712083467",alt:"Spotify",focusable:!0})}),F&&(0,g.jsx)("a",{href:F,children:(0,g.jsx)("img",{rel:"preload",className:"spotify",loading:"lazy",src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/vinted.jpg?v=1712083466",alt:"Vinted",focusable:!0})}),S&&(0,g.jsx)("a",{href:S,children:(0,g.jsx)("img",{rel:"preload",loading:"lazy",style:{marginBottom:"10px"},src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/notes.png?v=1713213932",alt:"Notes",focusable:!0})}),I&&(0,g.jsx)("a",{href:Z,onClick:()=>{Z="https://www.google.com/maps/search/?api=1&query=".concat(I),window.open(Z,"_blank")},children:(0,g.jsx)("img",{rel:"preload",loading:"lazy",src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/icons8-google-maps-old.svg?v=1712083465",alt:"Maps",focusable:!0})}),z&&(0,g.jsx)("a",{href:z,children:(0,g.jsx)("img",{rel:"preload",loading:"lazy",src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/standvirtual.png?v=1713213933",alt:"standvirtual",focusable:!0})}),B&&(0,g.jsx)("a",{href:B,children:(0,g.jsx)("img",{rel:"preload",loading:"lazy",src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/olx.png?v=1713213932",alt:"olx",focusable:!0})}),T&&(0,g.jsx)("a",{href:T,children:(0,g.jsx)("img",{rel:"preload",loading:"lazy",src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/piscapisca.png?v=1713213932",alt:"piscapisca",focusable:!0})}),_&&(0,g.jsx)("a",{href:_,children:(0,g.jsx)("img",{rel:"preload",loading:"lazy",src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/custojusto.png?v=1713213932",alt:"custojusto",focusable:!0})})]})]}),(0,g.jsx)(h,{isOpen:M,onClose:()=>{K(!1)}})]})}},8416:(e,a,s)=>{s.r(a),s.d(a,{default:()=>d});var t=s(2791),l=s(7689),o=s(184);const i=e=>{let{handleCloseModal:a}=e;const[s,l]=(0,t.useState)("Upload Profile Picture"),[i,n]=(0,t.useState)("Upload Background Image"),c=(e,a)=>{const s=new FileReader;s.onload=e=>{localStorage.setItem(a,e.target.result)},s.readAsDataURL(e)};return(0,o.jsxs)("div",{className:"upload-modal",children:[(0,o.jsx)("button",{className:"modal-close-button",onClick:a,children:"\xd7"}),(0,o.jsx)("h2",{className:"title",children:"Profile Picture"}),(0,o.jsx)("h3",{className:"subtitle",children:"Upload your profile picture"}),(0,o.jsxs)("div",{className:"profile-picture-container",children:[(0,o.jsx)("input",{type:"file",name:"profilePicture",id:"profilePictureInput",accept:"image/*",onChange:e=>{const a=e.target.files[0];a&&(l(a.name),c(a,"profileImageURL"))},className:"file-input"}),(0,o.jsx)("label",{htmlFor:"profilePictureInput",className:"file-label",children:s})]}),(0,o.jsx)("h2",{className:"title",children:"Background Image"}),(0,o.jsx)("h3",{className:"subtitle",children:"Upload your background image"}),(0,o.jsxs)("div",{className:"profile-picture-container",children:[(0,o.jsx)("input",{type:"file",name:"backgroundImage",id:"backgroundImageInput",accept:"image/*",onChange:e=>{const a=e.target.files[0];a&&(n(a.name),c(a,"backgroundImageURL"))},className:"file-input"}),(0,o.jsx)("label",{htmlFor:"backgroundImageInput",className:"file-label",children:i})]}),(0,o.jsx)("input",{type:"button",name:"submit",className:"submit action-button",value:"Submit",onClick:()=>{localStorage.removeItem("profileImageUrl"),localStorage.removeItem("backgroundImageUrl");const e=document.getElementById("profilePictureInput"),s=document.getElementById("backgroundImageInput");if(e&&e.files.length>0){const a=e.files[0];localStorage.setItem("profileImageUrl",a.name),console.log("Profile Picture saved to localStorage:",a.name)}if(s&&s.files.length>0){const e=s.files[0];localStorage.setItem("backgroundImageUrl",e.name),console.log("Background Image saved to localStorage:",e.name)}a()}})]})};var n=s(5294),c=s(8329),r=s(9939);const d=()=>{const[e,a]=(0,t.useState)(1),[s,d]=(0,t.useState)("Profile Picture"),[p,m]=(0,t.useState)("Background Image"),[u,g]=(0,t.useState)(!1),[h,f]=(0,t.useState)({name:"",email:"",company:"",phone:"",position:"",instagram:"",url:"",facebook:"",linkedin:"",image:"",background_image:"",tiktok:"",spotify:"",twitter:"",paypal:"",vinted:"",notes:"",standvirtual:"",olx:"",piscapisca:"",custojusto:""}),x=(0,l.s0)(),{id:y}=(0,l.UO)(),j=(0,t.useMemo)((()=>"".concat(h.profilePicture,"-").concat(h.background_image)),[h.profilePicture,h.background_image]);(0,t.useEffect)((()=>{c.Z.get("session_token")||x("/login")}),[x]),(0,t.useEffect)((()=>{const e=JSON.parse(localStorage.getItem("formData"));e&&f(e);const a=localStorage.getItem("profileImageURL"),s=localStorage.getItem("backgroundImageURL");a&&f((e=>({...e,profilePicture:a}))),s&&f((e=>({...e,background_image:s})))}),[]);const v=e=>{const a=e.target.files[0];if(a){const s=e.target.name;if("profilePicture"===s){d(a.name);const e=new FileReader;e.onload=e=>{localStorage.setItem("profileImageURL",e.target.result)},e.readAsDataURL(a)}else if("backgroundImage"===s){m(a.name);const e=new FileReader;e.onload=e=>{localStorage.setItem("backgroundImageURL",e.target.result)},e.readAsDataURL(a)}}},b=e=>{const{name:a,value:s}=e.target;f((e=>({...e,[a]:s})))},k=async e=>{e.preventDefault();const a=new FormData;a.append("name",h.name),a.append("email",h.email),a.append("company",h.company),a.append("position",h.position),a.append("phone",h.phone),a.append("instagram",h.instagram),a.append("facebook",h.facebook),a.append("linkedin",h.linkedin),a.append("url",h.url),a.append("userId",y),a.append("tiktok",h.tiktok),a.append("spotify",h.spotify),a.append("twitter",h.twitter),a.append("paypal",h.paypal),a.append("vinted",h.vinted),a.append("notes",h.notes),a.append("standvirtual",h.standvirtual),a.append("olx",h.olx),a.append("piscapisca",h.piscapisca),a.append("custojusto",h.custojusto);const s=localStorage.getItem("profileImageUrl");s&&(console.log("Profile Picture:",s),a.append("profilePicture",s));const t=localStorage.getItem("backgroundImage");t&&(console.log("Background Image:",t),a.append("background_image",t)),console.log("Form Data:",a);try{const e=await n.Z.post("https://".concat("app.bravanfc.com","/api//api/createcard"),a,{headers:{"Content-Type":"multipart/form-data"},withCredentials:!0});201===e.status||204===e.status?(localStorage.removeItem("formData"),localStorage.removeItem("profileImageURL"),localStorage.removeItem("backgroundImageURL"),x("/".concat(e.data.userId,"/dashboard/cards"))):(console.error("Error creating card:",e.data),alert("Error creating card"))}catch(l){console.log("Error creating card",l),alert("There was an error creating your card",l)}};return(0,o.jsx)("div",{className:"createcard-container",children:(0,o.jsxs)("div",{className:"msform",children:[u&&(0,o.jsx)(i,{handleImageChange:v,handleImageChanges:e=>{const a=e.target.files[0];a?(m(a.name),f((e=>({...e,background_image:a.name})))):m("Background Image")},handleCloseModal:()=>{g(!1)},handleSubmit:k,handlePrevious:()=>g(!1)}),(0,o.jsx)("div",{className:"createcard-container",children:(0,o.jsxs)("div",{className:"card-content",children:[(0,o.jsx)("div",{className:"side-navigation",children:(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{className:e>=1?"active":"",children:"Card Setup"}),(0,o.jsx)("li",{className:e>=2?"active":"",children:"Social Media"})]})}),(0,o.jsx)("div",{className:"msform",children:(0,o.jsxs)("form",{id:"msform",onSubmit:k,encType:"multipart/form-data",children:[1===e&&(0,o.jsxs)("fieldset",{children:[(0,o.jsx)("h2",{className:"fs-title",children:"Setup your data"}),(0,o.jsx)("p",{className:"fs-subtitle",children:"We'll guide you through the process of adding the data displayed in your card"}),(0,o.jsxs)("div",{className:"row",children:[(0,o.jsxs)("div",{className:"col",children:[(0,o.jsx)("label",{children:"Name"}),(0,o.jsx)("input",{type:"text",name:"name",placeholder:"Name",value:h.name,onChange:b,required:!0})]}),(0,o.jsxs)("div",{className:"col",children:[(0,o.jsx)("label",{children:"Email"}),(0,o.jsx)("input",{type:"text",name:"email",placeholder:"Email",value:h.email,onChange:b,required:!0})]}),(0,o.jsxs)("div",{className:"col",children:[(0,o.jsx)("label",{children:"Phone"}),(0,o.jsx)("input",{type:"tel",name:"phone",placeholder:"Phone",value:h.phone,onChange:b,required:!0})]})]}),(0,o.jsxs)("div",{className:"row",children:[(0,o.jsxs)("div",{className:"col",children:[(0,o.jsx)("label",{children:"Company"}),(0,o.jsx)("input",{type:"text",name:"company",placeholder:"Company (optional)",value:h.company,onChange:b})]}),(0,o.jsxs)("div",{className:"col",children:[(0,o.jsx)("label",{children:"Position"}),(0,o.jsx)("input",{type:"text",name:"position",placeholder:"Position (optional)",value:h.position,onChange:b})]})]}),(0,o.jsx)("div",{className:"row",children:(0,o.jsxs)("div",{className:"col",children:[(0,o.jsx)("label",{children:"Address"}),(0,o.jsx)("input",{type:"text",name:"address",placeholder:"Address",value:h.address,onChange:b,style:{float:"left"}})]})}),(0,o.jsx)("div",{className:"row",children:(0,o.jsxs)("div",{className:"profile-picture-container",children:[(0,o.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/upload.png?v=1713209450",alt:"Upload Icon",className:"upload-icon"}),(0,o.jsx)("input",{name:"profilePicture",id:"profilePictureInput",onChange:v,className:"file-input",onClick:()=>{g(!0)}}),(0,o.jsx)("label",{htmlFor:"profilePictureInput",className:"file-label",children:s})]})}),(0,o.jsx)("div",{className:"col",children:(0,o.jsx)("input",{type:"button",name:"next",className:"next action-button",value:"Next",onClick:()=>{a(e+1)}})})]}),2===e&&(0,o.jsxs)("fieldset",{children:[(0,o.jsx)("h2",{className:"fs-title",children:"Social Profiles"}),(0,o.jsx)("h3",{className:"fs-subtitle",children:"Your presence on the social network"}),(0,o.jsxs)("div",{className:"social-input-container-wrapper",children:[(0,o.jsxs)("div",{className:"social-input-container",children:[(0,o.jsxs)("div",{className:"social-input",children:[(0,o.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/icons8-instagram.svg?v=1712083465",className:"social",alt:"Instagram"}),(0,o.jsx)("input",{type:"text",name:"instagram",placeholder:"Instagram",value:h.instagram,onChange:b})]}),(0,o.jsxs)("div",{className:"social-input",children:[(0,o.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/icons8-facebook.svg?v=1712083465",className:"social",alt:"Facebook"}),(0,o.jsx)("input",{type:"text",name:"facebook",placeholder:"Facebook",value:h.facebook,onChange:b})]}),(0,o.jsxs)("div",{className:"social-input",children:[(0,o.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/icons8-linkedin.svg?v=1712083465",className:"social",alt:"LinkedIn"}),(0,o.jsx)("input",{type:"text",name:"linkedin",placeholder:"Linkedin",value:h.linkedin,onChange:b})]}),(0,o.jsxs)("div",{className:"social-input",children:[(0,o.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/url.png?v=1712083467",className:"social",alt:"URL"}),(0,o.jsx)("input",{type:"text",name:"url",placeholder:"Url",value:h.url,onChange:b})]}),(0,o.jsxs)("div",{className:"social-input",children:[(0,o.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/tiktok.png?v=1713213933",className:"social",alt:"tiktok"}),(0,o.jsx)("input",{type:"text",name:"tiktok",placeholder:"tiktok",value:h.tiktok,onChange:b})]}),(0,o.jsxs)("div",{className:"social-input",children:[(0,o.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/spotify_bcf3311d-41be-49a9-8cec-d1bdc9363c4d.png?v=1713213932",className:"social",alt:"Spotify"}),(0,o.jsx)("input",{type:"text",name:"spotify",placeholder:"spotify",value:h.spotify,onChange:b})]})]}),(0,o.jsxs)("div",{className:"social-input",children:[(0,o.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/twitter.svg?v=1713213932",className:"social",alt:"Twitter"}),(0,o.jsx)("input",{type:"text",name:"twitter",placeholder:"Twitter",value:h.twitter,onChange:b})]}),(0,o.jsxs)("div",{className:"social-input",children:[(0,o.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/paypal.png?v=1713213933",className:"social",alt:"paypal"}),(0,o.jsx)("input",{type:"text",name:"paypal",placeholder:"paypal",value:h.paypal,onChange:b})]}),(0,o.jsxs)("div",{className:"social-input",children:[(0,o.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/Vinted.png?v=1713213932",className:"social",alt:"vinted",style:{width:"100px",height:"60px",marginRight:"-20px",marginLeft:"-20px"}}),(0,o.jsx)("input",{type:"text",name:"vinted",placeholder:"vinted",value:h.vinted,onChange:b})]}),(0,o.jsxs)("div",{className:"social-input",children:[(0,o.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/standvirtual.png?v=1713213933",className:"social",alt:"standvirtual"}),(0,o.jsx)("input",{type:"text",name:"standvirtual",placeholder:"standvirtual",value:h.standvirtual,onChange:b})]}),(0,o.jsxs)("div",{className:"social-input",children:[(0,o.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/olx.png?v=1713213932",className:"social",alt:"olx"}),(0,o.jsx)("input",{type:"text",name:"olx",placeholder:"olx",value:h.olx,onChange:b})]}),(0,o.jsxs)("div",{className:"social-input",children:[(0,o.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/piscapisca.png?v=1713213932",className:"social",alt:"piscapisca"}),(0,o.jsx)("input",{type:"text",name:"piscapisca",placeholder:"piscapisca",value:h.piscapisca,onChange:b})]}),(0,o.jsxs)("div",{className:"social-input",children:[(0,o.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/custojusto.png?v=1713213932",className:"social",alt:"custojusto",style:{width:"100px",height:"60px",marginRight:"-35px",marginLeft:"-20px"}}),(0,o.jsx)("input",{type:"text",name:"custojusto",placeholder:"custojusto",value:h.custojusto,onChange:b})]}),(0,o.jsxs)("div",{className:"social-input",children:[(0,o.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/notes.png?v=1713213932",className:"social",alt:"notes"}),(0,o.jsx)("input",{type:"text",name:"notes",placeholder:"notes",value:h.notes,onChange:b})]})]}),(0,o.jsx)("input",{type:"button",name:"previous",className:"previous action-button",value:"Previous",onClick:()=>{a(e-1)}}),(0,o.jsx)("input",{type:"submit",name:"submit",className:"next action-button",value:"Submit",onClick:k})]})]})}),(0,o.jsx)("div",{className:"createcard-component",children:(0,o.jsx)(r.default,{email:h.email,username:h.name,phone:h.phone,company:h.company,title:h.position,instagram:h.instagram,facebook:h.facebook,linkedin:h.linkedin,url:h.url,notes:h.notes,background_image_url:h.background_image,profile_image_url:h.profilePicture,address:h.address,tiktok:h.tiktok,spotify:h.spotify,twitter:h.twitter,paypal:h.paypal,vinted:h.vinted,standvirtual:h.standvirtual,olx:h.olx,piscapisca:h.piscapisca,custojusto:h.custojusto},j)})]})})]})})}}}]);
//# sourceMappingURL=898.d90be87e.chunk.js.map