(this.webpackJsonptwitch_ui=this.webpackJsonptwitch_ui||[]).push([[0],[,,function(e){e.exports=JSON.parse('[{"username":"Chess","category":"Chess","tags":["Chess","English"],"description":"Watch this livestream about chess!","video":"/assets/videos/chess_video.mp4","image":"/assets/images/bunny.jpg"},{"username":"Cheese","category":"Food","tags":["Food","English"],"description":"Watch this livestream about Cheese!","video":"/assets/videos/chess_video.mp4","image":"/assets/images/bunny.jpg"},{"username":"Checkers","category":"Checkers","tags":["Checkers","French"],"description":"Watch this livestream about checkers!","video":"/assets/videos/chess_video.mp4","image":"/assets/images/bunny.jpg"},{"username":"Animals","category":"Animals","tags":["Animals","Polish","Danish"],"description":"Watch this livestream about animals!","video":"/assets/videos/chess_video.mp4","image":"/assets/images/bunny.jpg"},{"username":"Sleep","category":"Sleep","tags":["Meditation","Sleep"],"description":"Watch this livestream about meditation!","video":"/assets/videos/chess_video.mp4","image":"/assets/images/bunny.jpg"},{"username":"Fries","category":"Fries","tags":["Potatoes","fries","English"],"description":"Watch this livestream about fries!","video":"/assets/videos/chess_video.mp4","image":"/assets/images/bunny.jpg"},{"username":"Trees","category":"Trees","tags":["Birch","Maple"],"description":"Watch this livestream about trees!","video":"/assets/videos/chess_video.mp4","image":"/assets/images/bunny.jpg"}]')},,,,,function(e,a,t){},,,,,,,function(e,a,t){e.exports=t.p+"static/media/twitch_logo.1f6704ce.png"},,,function(e){e.exports=JSON.parse('[{"username":"LCS","image":"/assets/images/bunny.jpg","description":"League of Legends","watchers":"8.4K"},{"username":"Shroud","image":"/assets/images/bunny.jpg","description":"Rust","watchers":"72.5K"},{"username":"Chess","image":"/assets/images/bunny.jpg","description":"Chess","watchers":"30.5K"},{"username":"JeremyFrieser","image":"/assets/images/bunny.jpg","description":"Minecraft","watchers":"2.2K"},{"username":"Duncan","image":"/assets/images/bunny.jpg","description":"Minecraft","watchers":"854"},{"username":"CohhCarnage","image":"/assets/images/bunny.jpg","description":"Stardew Valley","watchers":"12.9K"},{"username":"hJune","image":"/assets/images/bunny.jpg","description":"Rust","watchers":"14.8K"},{"username":"Punz","image":"/assets/images/bunny.jpg","description":"Minecraft","watchers":"6.4K"},{"username":"Quin69","image":"/assets/images/bunny.jpg","description":"Path of Exile","watchers":"11.4K"},{"username":"Symfuhny","image":"/assets/images/bunny.jpg","description":"Call of Duty: Warzone","watchers":"12.8K"}]')},,,function(e,a,t){e.exports=t(43)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(8),i=t.n(r),c=(t(25),t(26),t(27),t(7),t(2));t(28);function l(e){var a=e.label,t=(e.primary,e.secondary);return e.tertiary?s.a.createElement("button",{className:"button tertiary-button"},a):t?s.a.createElement("button",{className:"button secondary-button"},a):s.a.createElement("button",{className:"button primary-button"},a)}function o(e){var a=e.video,t=e.right;e.bottom;return t?s.a.createElement("div",{className:"video video-right"},s.a.createElement("video",{controls:!0,src:a.video}),s.a.createElement("div",{className:"side-menu"},s.a.createElement("img",{className:"profile-picture",src:a.image}),s.a.createElement("span",{className:"username"},a.username),s.a.createElement("span",{className:"category"},a.category),s.a.createElement("span",{className:"watchers"},"58 viewers"),s.a.createElement("div",{className:"tags"},a.tags.map((function(e){return s.a.createElement(l,{tertiary:!0,label:e})}))),s.a.createElement("span",{className:"description"},a.description))):s.a.createElement("div",{className:"video video-bottom"},s.a.createElement("div",{className:"video-wrapper"},s.a.createElement("div",{className:"left-bar-side"}),s.a.createElement("div",{className:"bottom-bar-side"}),s.a.createElement("video",{src:a.video})),s.a.createElement("div",{className:"side-menu"},s.a.createElement("img",{className:"profile-picture",src:a.image}),s.a.createElement("span",{className:"title"},"Coding is fun!"),s.a.createElement("span",{className:"username"},a.username),s.a.createElement("span",{className:"category"},a.category),s.a.createElement("div",{className:"tags"},a.tags.map((function(e){return s.a.createElement(l,{tertiary:!0,label:e})})))))}var m,u=t(9),d=t.n(u),p=t(11),v=t.n(p);t(29);function g(e){var a,t=e.Icon,n=e.tooltipDirection,r=e.tooltip,i=e.number,c=e.onClick;function l(e){c&&c(e)}return s.a.createElement("button",{onClick:function(e){return l(e)},className:"icon-button"},i&&s.a.createElement("span",{className:"number"},i),s.a.createElement(t,null),r&&(void 0===(a=n)||a===m.BOTTOM?r&&s.a.createElement("span",{className:"tooltip tooltip-bottom"},r):a===m.RIGHT?r&&s.a.createElement("span",{className:"tooltip tooltip-right"},r):void 0))}!function(e){e[e.TOP=0]="TOP",e[e.RIGHT=1]="RIGHT",e[e.BOTTOM=2]="BOTTOM",e[e.LEFT=3]="LEFT"}(m||(m={}));var h=["video-left-2","video-left-1","video-center","video-right-1","video-right-2"];function E(){var e=Object(n.useRef)(null);function a(e){var a=document.createElement("div");a.className="video video-right";var t=document.createElement("video");t.src=e.video,t.controls=!0;var n=document.createElement("div");n.className="side-menu";var s=document.createElement("img");s.className="profile-picture",s.src=e.image;var r=document.createElement("span");r.className="username",r.innerHTML=e.username;var i=document.createElement("span");i.className="category",i.innerHTML=e.category;var c=document.createElement("span");c.className="watchers",c.innerHTML="58 viewers";var l=document.createElement("div");l.className="tags",e.tags.forEach((function(e){var a=document.createElement("button");a.className="button tertiary-button",a.innerHTML=e,l.appendChild(a)}));var o=document.createElement("span");return o.className="description",o.innerHTML=e.description,a.appendChild(t),a.appendChild(n),n.appendChild(s),n.appendChild(r),n.appendChild(i),n.appendChild(c),n.appendChild(l),n.appendChild(o),a}return Object(n.useEffect)((function(){if(e.current)for(var t=0;t<5;t++){var n=a(c[t]);n.classList.add(h[h.length-1-t]),e.current.children[0].insertAdjacentElement("afterend",n)}}),[]),s.a.createElement("div",{id:"content"},s.a.createElement("div",{ref:e,className:"video-slideshow"},s.a.createElement(g,{onClick:function(){if(e.current){var t=e.current.getElementsByClassName("video");if(t){var n=t[t.length-1];e.current.removeChild(n);for(var s=0;s<t.length;s++)for(var r=t[s],i=h.length-1;i>=0;i--)r.classList.contains(h[i])&&(r.classList.remove(h[i]),r.classList.add(h[i+1]));var l=a(c[0]);l.classList.add(h[0]),e.current.children[0].insertAdjacentElement("afterend",l)}}},Icon:d.a}),s.a.createElement(g,{onClick:function(){if(e.current){var t=e.current.getElementsByClassName("video");if(t){var n=t[0];e.current.removeChild(n);for(var s=0;s<t.length;s++)for(var r=t[s],i=0;i<h.length;i++)r.classList.contains(h[i])&&(r.classList.remove(h[i]),r.classList.add(h[i-1]));var l=a(c[0]);l.classList.add(h[h.length-1]),e.current.children[e.current.children.length-1].insertAdjacentElement("beforebegin",l)}}},Icon:v.a})),s.a.createElement("div",{className:"channels"},s.a.createElement("span",{className:"title"},"Live channels we think you\u2019ll like"),s.a.createElement("div",{className:"videos"},s.a.createElement(o,{video:c[0]}),s.a.createElement(o,{video:c[0]}),s.a.createElement(o,{video:c[0]}),s.a.createElement(o,{video:c[0]}),s.a.createElement(o,{video:c[0]}))))}t(35);var f=t(12),b=t.n(f),y=t(13),N=t.n(y);function w(){return s.a.createElement("div",{id:"account-section"},s.a.createElement(g,{number:60,tooltip:"New Prime Loot",Icon:b.a}),s.a.createElement(l,{secondary:!0,label:"Log In"}),s.a.createElement(l,{label:"Sign Up"}),s.a.createElement(g,{Icon:N.a}))}t(36),t(37);var C=t(14),T=t.n(C);t(38);function j(e){var a=e.label,t=e.primary,n=e.secondary,r=e.tertiary,i=e.style;return t?s.a.createElement("a",{style:i,className:"primary-link",href:"/"},a):n?s.a.createElement("a",{style:i,className:"secondary-link",href:"/"},a):r?s.a.createElement("a",{style:i,className:"tertiary-link",href:"/"},a):s.a.createElement("a",{style:i,className:"primary-link",href:"/"},a)}var L=t(15),k=t.n(L),M={margin:"0px 20px"};function I(){return s.a.createElement("div",{id:"navigation-section"},s.a.createElement("a",{className:"logo",href:"/"},s.a.createElement("img",{alt:"Twitch logo",src:T.a})),s.a.createElement(j,{style:M,label:"Browse"}),s.a.createElement(g,{tooltip:"More",Icon:k.a}))}var S=t(16),O=t.n(S);t(39);function B(){return s.a.createElement("div",{id:"search-section"},s.a.createElement("input",{className:"search-bar",placeholder:"Search"}),s.a.createElement("button",{className:"search-button"},s.a.createElement(O.a,null)))}function W(){return s.a.createElement("nav",{id:"navbar"},s.a.createElement(I,null),s.a.createElement(B,null),s.a.createElement(w,null))}t(40);var _=t(18),H=t.n(_),K=t(17);t(41);function F(e){var a=e.user;return s.a.createElement("div",{className:"user"},s.a.createElement("img",{alt:"Bunny",src:a.image,className:"profile-picture"}),s.a.createElement("span",{className:"username"},a.username),s.a.createElement("span",{className:"description"},a.description),s.a.createElement("span",{className:"watchers"},s.a.createElement("span",{className:"dot",role:"img","aria-label":"Amount of people watching"},"\ud83d\udd34"),a.watchers))}function R(){return s.a.createElement("div",{id:"sidebar"},s.a.createElement("div",{className:"top-section"},s.a.createElement("span",null,"Recommended Channels"),s.a.createElement(g,{tooltip:"Collapse",tooltipDirection:m.RIGHT,Icon:H.a})),s.a.createElement("div",{className:"users-section"},K.map((function(e){return s.a.createElement(F,{key:e.username,user:e})}))),s.a.createElement("div",{className:"twitch-message-section"},s.a.createElement("p",{className:"title"},"Join the ",s.a.createElement("span",null,"Twitch")," community!"),s.a.createElement("p",{className:"description"},"Discover the best live streams anywhere."),s.a.createElement(l,{label:"Sign up"})))}var x=function(){return s.a.createElement("div",{id:"landing"},s.a.createElement(W,null),s.a.createElement(R,null),s.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[20,1,2]]]);
//# sourceMappingURL=main.09ea5077.chunk.js.map