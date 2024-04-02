"use strict";(self.webpackChunkbrava=self.webpackChunkbrava||[]).push([[954],{59:(e,a,s)=>{s.r(a),s.d(a,{default:()=>h});var o=s(2791),t=s(7236),r=s(4484),i=s(4754),n=s(830),l=s.n(n),c=s(9073),A=s(8152),d=s.n(A),g=s(7689),m=s(5294),u=s(184);const f=e=>{let{isOpen:a,onClose:s}=e;const[t,r]=(0,o.useState)({name:"",company:"",email:"",message:""}),{id:i}=(0,g.UO)(),n=e=>{const{name:a,value:s}=e.target;r((e=>({...e,[a]:s})))};return(0,u.jsx)(u.Fragment,{children:a&&(0,u.jsx)("div",{className:"modal-overlay",children:(0,u.jsxs)("div",{className:"modal-content",children:[(0,u.jsx)("button",{className:"close-button",onClick:s,children:"X"}),(0,u.jsx)("h2",{children:"GET IN TOUCH"}),(0,u.jsxs)("form",{onSubmit:e=>{e.preventDefault(),m.Z.post("https://".concat("app.bravanfc.com","/api/").concat(i,"/message"),t).then((e=>{console.log("Response Headers:",e.headers),200===e.status&&(alert("Message sent successfully"),r({name:"",company:"",email:"",message:""}))})).catch((e=>{console.log(e.response.status),console.log(e)})),console.log("Form submitted:",t),s()},children:[(0,u.jsx)("label",{htmlFor:"name",children:"Name:"}),(0,u.jsx)("input",{type:"text",id:"name",name:"name",placeholder:"Name",value:t.name,onChange:n,required:!0}),(0,u.jsx)("label",{htmlFor:"company",children:"Company:"}),(0,u.jsx)("input",{type:"text",id:"company",name:"company",placeholder:"Company",value:t.company,onChange:n,required:!0}),(0,u.jsx)("label",{htmlFor:"email",children:"Email:"}),(0,u.jsx)("input",{type:"email",id:"email",name:"email",placeholder:"Email",value:t.email,onChange:n,required:!0}),(0,u.jsx)("label",{htmlFor:"message",children:"Message:"}),(0,u.jsx)("textarea",{id:"message",name:"message",placeholder:"What would you like to say?",value:t.message,onChange:n,required:!0}),(0,u.jsx)("button",{type:"submit",children:"Submit"})]})]})})})},p=s.p+"static/media/googlereview.a0998f3f7fc14a058324.png";const h=function(e){let{card_id:a,id:s,email:n,username:A,phone:g,company:m,title:h,profile_image_url:b,background_image_url:y,onLoad:w,facebook:x,linkedin:v,instagram:C,google_reviews:j,address:B,youtube:I,notes:k,url:R,paypal:E,tiktok:U,twitter:P,spotify:L,vinted:N}=e;const[H,W]=(0,o.useState)(null),[G,z]=(0,o.useState)(!0),[J,T]=(0,o.useState)(!1),Y="AKIAS74Z5OF3SEUUXSFT",D="rJzM6aFnMC/riviirzTCFtLD7QHaDvaoWsXd9ER3",M="eu-west-2",Q="brava-bucket";let F;console.log(s),(0,o.useEffect)((()=>{console.log("CardComponent useEffect triggered");let e=!0;return(async()=>{const a=await S();if(e)if(a){const e=new Blob([a],{type:"image/jpg"});W(e),z(!1)}else O()})(),()=>{e=!1,H&&URL.revokeObjectURL(H)}}),[]);const q=async()=>{try{return await(0,c.X3)("brava-db",1,{upgrade(e){if(!e.objectStoreNames.contains("images")){e.createObjectStore("images",{keyPath:"key"}).createIndex("url","url",{unique:!0})}}})}catch(e){throw console.error("Error initializing IndexedDB:",e),e}},S=async()=>{try{const e=await q(),a=e.transaction("images").objectStore("images"),s=await a.get("profileImage");return s?s.data:null}catch(e){return console.error("Error loading from IndexedDB:",e),null}},O=async()=>{try{const e=new t.S3({credentials:{accessKeyId:Y,secretAccessKey:D},region:M}),a=new URL(b),s=decodeURIComponent(a.pathname.replace(/^\//,"")),o={Bucket:Q,Key:s},i=new r.i(o),n=await e.send(i),l=new Blob([n.Body],{type:n.ContentType});(async e=>{try{const a=(await q()).transaction("images","readwrite"),s=a.objectStore("images"),o={key:"profileImage",url:b,data:e};s.put(o),await a.complete,console.log("Image stored in IndexedDB:",o)}catch(a){console.error("Error storing image in IndexedDB:",a)}})(l),W(l),z(!1),w&&w()}catch(e){console.error("Error fetching image:",e)}};(0,o.useEffect)((()=>{let e=!0;return(async()=>{const e=await S();if(e){const a=new Blob([e],{type:"image/jpg"});W(a),z(!1)}else O()})(),()=>{e=!1,H&&URL.revokeObjectURL(H)}}),[b,Q,M,Y,D,w]);const X=async e=>{try{const a=await fetch(e),s=await a.blob();return await K(s,{maxWidth:800,maxHeight:800,quality:.9})}catch(a){return console.error("Error fetching, resizing, and encoding image:",a),null}},K=async(e,a)=>{try{const s=new Image;s.src=URL.createObjectURL(e),await new Promise(((e,a)=>{s.onload=e,s.onerror=a}));const{maxWidth:o,maxHeight:t,quality:r}=a;let i=s.width,n=s.height;i>n?i>o&&(n*=o/i,i=o):n>t&&(i*=t/n,n=t);const l=document.createElement("canvas");l.width=i,l.height=n;l.getContext("2d").drawImage(s,0,0,i,n);const c=await new Promise((e=>{l.toBlob(e,"image/jpeg",r)})),A=await new Response(c).arrayBuffer();return btoa(new Uint8Array(A).reduce(((e,a)=>e+String.fromCharCode(a)),""))}catch(s){return console.error("Error resizing and compressing image:",s),null}},Z=async e=>{try{const a=new t.S3({region:"eu-west-2",credentials:{accessKeyId:Y,secretAccessKey:D}}),s={Bucket:"brava-bucket",Key:e,Expires:900},o=(0,i.e)(a,new r.i(s));return console.log(o),o}catch(a){throw console.error("Error generating pre-signed URL:",a),a}};return(0,u.jsxs)("div",{className:"card-component ".concat(G?"loading":""),children:[(0,u.jsx)("div",{className:"card-background",style:{backgroundImage:"url(".concat(y,")")}}),(0,u.jsx)("div",{className:"card-component-header",children:G?(0,u.jsx)("p",{children:"Loading..."}):(0,u.jsx)(u.Fragment,{children:b&&(0,u.jsx)("img",{className:"card-image",rel:"preload",loading:"lazy",src:b,alt:"Profile"})})}),(0,u.jsxs)("div",{className:"card-body",children:[(0,u.jsx)("h3",{children:m}),(0,u.jsx)("h5",{children:A}),(0,u.jsx)("p",{children:h}),(0,u.jsxs)("div",{className:"card-buttons",children:[(0,u.jsx)("button",{onClick:async()=>{try{const e=new(l());if(!await S())return void console.error("Image not found in IndexedDB.");const o=e=>d().nfkd(e).replace(/[\u0300-\u036f]/g,""),t=o(decodeURIComponent(A)),r=o(decodeURIComponent(h)),i=o(decodeURIComponent(k)),c=o(decodeURIComponent(B));e.add("n",[t]),e.add("fn",[t]),e.add("org",m),e.add("tel",g),e.add("email",n),e.add("title",[r]),e.add("url","https://app.bravanfc.com/".concat(s,"/cards/").concat(a)),x&&e.add("x-socialprofile",x,{type:"Facebook"}),C&&e.add("x-socialprofile",C,{type:"Instagram"}),v&&e.add("x-socialprofile",v,{type:"Linkedin"}),I&&e.add("x-socialprofile",I,{type:"Youtube"}),k&&e.add("note",[i]),P&&e.add("x-socialprofile",P,{type:"Twitter"}),E&&e.add("x-socialprofile",E,{type:"Paypal"}),U&&e.add("x-socialprofile",U,{type:"TikTok"}),L&&e.add("x-socialprofile",L,{type:"Spotify"}),N&&e.add("x-socialprofile",N,{type:"Vinted"}),e.add("adr",[c]);const u=new URL(b),f=decodeURIComponent(u.pathname.replace(/^\//,"")),p=await Z(f),y=await X(p);if(!y)return void console.error("Error fetching and encoding image.");e.add("photo",y,{encoding:"b",type:"image/jpeg"});const w=e.toString("3.0");console.log(w);const j=new Blob([(new TextEncoder).encode(w)],{type:"text/vcard;charset=utf-8"}),R=document.createElement("a");R.href=URL.createObjectURL(j),R.download="contact.vcf",window.location.href=URL.createObjectURL(j),URL.revokeObjectURL(j)}catch(e){console.error("Error saving to contacts:",e)}},children:"Save"}),(0,u.jsx)("button",{className:"fab",onClick:()=>{try{T(!0)}catch(e){console.error("Error opening modal:",e)}},children:"Get in touch"})]}),(0,u.jsxs)("div",{className:"social-icons",children:[R&&(0,u.jsx)("a",{href:R,children:(0,u.jsx)("img",{rel:"preload",className:"url",loading:"lazy",src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/url.png?v=1712083467",alt:"Url",focusable:!0})}),j&&(0,u.jsx)("a",{href:j,children:(0,u.jsx)("img",{rel:"preload",loading:"lazy",src:p,alt:"Instagram",focusable:!0})}),C&&(0,u.jsx)("a",{href:C,children:(0,u.jsx)("img",{rel:"preload",loading:"lazy",src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/icons8-instagram.svg?v=1712083465",alt:"Instagram",focusable:!0})}),x&&(0,u.jsx)("a",{href:x,children:(0,u.jsx)("img",{rel:"preload",loading:"lazy",src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/icons8-facebook.svg?v=1712083465",alt:"Facebook",focusable:!0})}),v&&(0,u.jsx)("a",{href:v,children:(0,u.jsx)("img",{rel:"preload",loading:"lazy",src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/icons8-linkedin.svg?v=1712083465",alt:"LinkedIn",focusable:!0})}),I&&(0,u.jsx)("a",{href:I,children:(0,u.jsx)("img",{rel:"preload",loading:"lazy",src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/icons8-youtube.svg?v=1712083465",alt:"YouTube",focusable:!0})}),E&&(0,u.jsx)("a",{href:E,children:(0,u.jsx)("img",{rel:"preload",loading:"lazy",src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/icons8-paypal.svg?v=1712083465",alt:"Paypal",focusable:!0})}),P&&(0,u.jsx)("a",{href:P,children:(0,u.jsx)("img",{rel:"preload",loading:"lazy",src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/icons8-twitterx.svg?v=1712083465",alt:"Twitter",focusable:!0})}),U&&(0,u.jsx)("a",{href:U,children:(0,u.jsx)("img",{rel:"preload",loading:"lazy",src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/icons8-tiktok.svg?v=1712083465",alt:"TikTok",focusable:!0})}),L&&(0,u.jsx)("a",{href:L,children:(0,u.jsx)("img",{rel:"preload",className:"spotify",loading:"lazy",src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/spotify.png?v=1712083467",alt:"Spotify",focusable:!0})}),N&&(0,u.jsx)("a",{href:N,children:(0,u.jsx)("img",{rel:"preload",className:"spotify",loading:"lazy",src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/vinted.jpg?v=1712083466",alt:"Vinted",focusable:!0})}),k&&(0,u.jsx)("a",{href:k,children:(0,u.jsx)("img",{rel:"preload",loading:"lazy",style:{marginBottom:"10px"},src:"data:image/png;base64,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",alt:"Notes",focusable:!0})}),B&&(0,u.jsx)("a",{href:F,onClick:()=>{F="https://www.google.com/maps/search/?api=1&query=".concat(B),window.open(F,"_blank")},children:(0,u.jsx)("img",{rel:"preload",loading:"lazy",src:"https://cdn.shopify.com/s/files/1/0733/7767/7577/files/icons8-google-maps-old.svg?v=1712083465",alt:"Maps",focusable:!0})})]})]}),(0,u.jsx)(f,{isOpen:J,onClose:()=>{T(!1)}})]})}}}]);
//# sourceMappingURL=954.25918a1f.chunk.js.map