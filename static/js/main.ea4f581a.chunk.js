(this.webpackJsonpfontend=this.webpackJsonpfontend||[]).push([[0],{15:function(e,t,n){},25:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c=n(3),a=n.n(c),s=n(17),i=n.n(s),l=(n(15),n(14)),o=n(8),r=(n(25),n(0)),d=["btn--primary","btn--outline","btn--tut","btn--upload","btn--editor"],b=["btn--medium","btn--large"],j=function(e){var t=e.children,n=e.type,c=e.onClick,a=e.buttonStyle,s=e.buttonSize,i=d.includes(a)?a:d[0],l=b.includes(s)?s:b[0];return"btn--upload"===a?Object(r.jsx)("button",{className:"btn ".concat("btn--outline"," ",l),onClick:c,type:n,children:t}):"btn--editor"===a?Object(r.jsx)(o.b,{to:"/editor",className:"btn-mobile",children:Object(r.jsx)("button",{className:"btn ".concat("btn--outline"," ",l),onClick:c,type:n,children:t})}):"btn--tut"===a?Object(r.jsx)(o.b,{to:"/about",className:"btn-mobile",children:Object(r.jsx)("button",{className:"btn ".concat("btn--primary"," ",l),onClick:c,type:n,children:t})}):Object(r.jsx)(o.b,{to:"/contact-us",className:"btn-mobile",children:Object(r.jsx)("button",{className:"btn ".concat(i," ").concat(l),onClick:c,type:n,children:t})})};n(34);var u=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(!0),i=Object(l.a)(s,2),d=i[0],b=i[1],u=function(){return a(!1)},m=function(){window.innerWidth<=960?b(!1):b(!0)};return Object(c.useEffect)((function(){m()}),[]),window.addEventListener("resize",m),Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("nav",{className:"navbar",children:Object(r.jsxs)("div",{className:"navbar-container",children:[Object(r.jsxs)(o.b,{to:"/",className:"navbar-logo",onClick:u,children:["CHROMA ",Object(r.jsx)("i",{className:"fas fa-key"})]}),Object(r.jsx)("div",{className:"menu-icon",onClick:function(){return a(!n)},children:Object(r.jsx)("i",{className:n?"fas fa-times":"fas fa-bars"})}),Object(r.jsxs)("ul",{className:n?"nav-menu active":"nav-menu",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(o.b,{to:"/editor",className:"nav-links",onClick:u,children:"Editor"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(o.b,{to:"/about",className:"nav-links",onClick:u,children:"About"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(o.b,{to:"/license",className:"nav-links",onClick:u,children:"License"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(o.b,{to:"/contact-us",className:"nav-links-mobile",onClick:u,children:"Contact Us"})})]}),d&&Object(r.jsx)(j,{buttonStyle:"btn--outline",children:"CONTACT US"})]})})})},m=n(2);n(35);var h=function(){return Object(r.jsxs)("div",{className:"hero-container",children:[Object(r.jsx)("video",{id:"hero-vid",src:"/ReactChromaKey/assets/videos/video-1.mp4",autoPlay:!0,loop:!0,muted:!0,playsInline:!0}),Object(r.jsx)("h1",{children:"CHROMA KEY"}),Object(r.jsx)("p",{className:"desc",children:"Real time green screen processor"}),Object(r.jsx)("p",{className:"call",children:"Try it now for free."}),Object(r.jsxs)("div",{className:"hero-btns",children:[Object(r.jsx)(j,{className:"btns",buttonStyle:"btn--editor",buttonSize:"btn--large",children:"GET STARTED"}),Object(r.jsxs)(j,{className:"btns",buttonStyle:"btn--tut",buttonSize:"btn--large",children:["WATCH TUTORIAL ",Object(r.jsx)("i",{className:"far fa-play-circle"})]})]})]})};var O=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(h,{})})};n(36);function x(){function e(e){return e.text.split("\n").map((function(e){return Object(r.jsx)("p",{children:e})}))}return Object(c.useEffect)((function(){document.body.style.backgroundColor="#202020"}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("i",{className:"fas fa-file-signature"}),Object(r.jsx)("p",{className:"details",children:Object(r.jsx)(e,{text:'Licensed under the Apache License, Version 2.0 (the "License");\nyou may not use this file except in compliance with the License.\nYou may obtain a copy of the License at\nhttp://www.apache.org/licenses/LICENSE-2.0\nUnless required by applicable law or agreed to in writing, software\ndistributed under the License is distributed on an "AS IS" BASIS,\nWITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\nSee the License for the specific language governing permissions and\nlimitations under the License.\n'})})]})}n(37);function p(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("video",{id:"vid",src:"/ReactChromaKey/assets/videos/video-3.mp4",autoPlay:!0,loop:!0,muted:!0,playsInline:!0}),Object(r.jsx)("h1",{className:"titleh1",children:"ABOUT CHROMA KEY"}),Object(r.jsx)("p",{className:"info",children:"Chroma Key is a simple, powerful editor designed to replace a green screen video with a desired background. By combining the capabilities of the video element with a canvas, it allows us to manipulate video data in real time."}),Object(r.jsx)("p",{className:"end",children:"TRY IT NOW FOR FREE."})]})})}var v=n(20);n(38);function f(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{children:Object(r.jsx)("i",{className:"far fa-envelope"})}),Object(r.jsx)("div",{className:"contact-us",children:Object(r.jsx)("form",{onSubmit:function(e){e.preventDefault(),v.a.sendForm("service_gcys9ri","template_p6n8bj6",e.target,"user_9IBQRhfGnk9pMbYnOlmj6").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),e.target.reset()},children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col",children:Object(r.jsx)("input",{type:"text",className:"form-control",placeholder:"Name",name:"name"})}),Object(r.jsx)("div",{className:"col",children:Object(r.jsx)("input",{type:"email",className:"form-control",placeholder:"Email Address",name:"email"})}),Object(r.jsx)("div",{className:"col",children:Object(r.jsx)("input",{type:"text",className:"form-control",placeholder:"Subject",name:"subject"})}),Object(r.jsx)("div",{className:"col",children:Object(r.jsx)("textarea",{className:"form-control",id:"",cols:"30",rows:"8",placeholder:"Your message",name:"message"})}),Object(r.jsx)("div",{className:"col",children:Object(r.jsx)("input",{type:"submit",className:"btn btn-info",value:"Send Message"})})]})})})]})}n(39);var g,N,y,C,k,w=function(e){var t=a.a.useRef(null),n=function(e){t.current.click()},c=function(e){if(void 0!==e.target.files[0]){var t=e.target.files[0],n=t.type,c=["image/jpeg","image/png","image/jpg"],a=new FileReader;a.readAsDataURL(t),a.onloadend=function(e){if(c.includes(n)){var t=new Image;t.src=a.result,t.onload=function(e){g=document.getElementById("canvas2"),N=document.getElementById("canvas"),g.style.display="flex",g.style.backgroundImage="url("+a.result+")"}}else g=document.getElementById("canvas2"),N=document.getElementById("canvas"),y=N.getContext("2d"),C=g.getContext("2d"),(k=document.getElementById("video")).src=a.result,k.style.display="flex",k.load(),k.play(),k.addEventListener("play",(function(){s.doLoad()}))}}},s={doLoad:function(){this.video=document.getElementById("video");var e=this;this.video.addEventListener("play",(function(){e.timerCallback()})),this.video.addEventListener("loadeddata",(function(){N.width=e.video.videoWidth,N.height=e.video.videoHeight,g.width=e.video.videoWidth,g.height=e.video.videoHeight,e.timerCallback()}))},timerCallback:function(){if(!this.video.paused&&!this.video.ended){this.computeFrame();var e=this;setTimeout((function(){e.timerCallback()}),0)}},computeFrame:function(){y.drawImage(this.video,0,0,N.width,N.height);for(var e=y.getImageData(0,0,N.width,N.height),t=e.data.length/4,n=0;n<t;n++){var c=e.data[4*n+0];e.data[4*n+1]>c+e.data[4*n+2]&&(e.data[4*n+3]=0)}C.putImageData(e,0,0)}};return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"file-uploads",children:[Object(r.jsxs)("div",{className:"file1",children:[Object(r.jsx)("i",{className:"far fa-caret-square-up"}),Object(r.jsx)(j,{onClick:n,className:"btnC",buttonStyle:"btn--upload",buttonSize:"btn--medium",children:"SELECT A FOREGROUND"}),"\xa0\xa0\xa0",Object(r.jsx)("input",{type:"file",ref:t,onChange:c,style:{display:"none"}})]}),Object(r.jsxs)("div",{className:"file1",children:[Object(r.jsx)("i",{className:"far fa-caret-square-up"}),Object(r.jsx)(j,{onClick:n,className:"btnC",buttonStyle:"btn--upload",buttonSize:"btn--medium",children:"SELECT A BACKGROUND"}),"\xa0\xa0\xa0",Object(r.jsx)("input",{type:"file",ref:t,onChange:c,style:{display:"none"}})]})]})})};var E=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"buttons",children:Object(r.jsx)(w,{})}),Object(r.jsx)("div",{className:"c1",children:Object(r.jsx)("canvas",{id:"canvas",style:{width:"100%",height:"auto",display:"none"}})}),Object(r.jsx)("div",{className:"c2",children:Object(r.jsx)("canvas",{id:"canvas2",style:{width:"100%",height:"auto",display:"flex"}})}),Object(r.jsx)("div",{className:"vid",children:Object(r.jsx)("video",{style:{width:"100%",height:"auto",display:"none"},id:"video",autoPlay:!0,loop:!0,muted:!0,playsInline:!0,controls:!0})})]})};var S=function(){return Object(c.useEffect)((function(){document.body.style.backgroundColor="#202020"}),[]),Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(o.a,{children:[Object(r.jsx)(u,{}),Object(r.jsxs)(m.c,{children:[Object(r.jsx)(m.a,{path:"/",exact:!0,component:O}),Object(r.jsx)(m.a,{path:"/editor",component:E}),Object(r.jsx)(m.a,{path:"/license",component:x}),Object(r.jsx)(m.a,{path:"/about",component:p}),Object(r.jsx)(m.a,{path:"/contact-us",component:f})]})]})})};i.a.render(Object(r.jsx)(S,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.ea4f581a.chunk.js.map