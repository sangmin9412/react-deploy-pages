(this.webpackJsonpmy_app=this.webpackJsonpmy_app||[]).push([[0],{103:function(e,t,n){e.exports=n(208)},200:function(e,t,n){},201:function(e,t,n){},203:function(e,t,n){},208:function(e,t,n){"use strict";n.r(t);n(104),n(94);var a=n(0),c=n.n(a),r=n(101),o=n.n(r),i=(n(200),n(37)),s=n(6),l=(n(201),n(36)),u=n.n(l),m=n(64),f=n(60),p=n(43);n(203);function v(e){return c.a.createElement("div",{className:"img"},c.a.createElement("img",{src:e.poster}))}var d=function(e){return c.a.createElement("div",{className:"movie-item",key:e.index},c.a.createElement("div",{className:"movie-item-inner"},c.a.createElement(v,{poster:e.poster}),c.a.createElement("div",{className:"movie-item-info"},c.a.createElement("p",{className:"movie-item-tit"},e.title),c.a.createElement("p",{className:"movie-item-genres"},e.genres),c.a.createElement("p",{className:"movie-item-synopsis"},e.synopsis)),c.a.createElement("div",{className:"movie-item-likes"},"likes...")))};var E=function(){var e=Object(a.useState)([]),t=Object(p.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(!1),i=Object(p.a)(o,2),s=i[0],l=i[1],v=Object(a.useState)(2),E=Object(p.a)(v,2),b=E[0],h=E[1],g=Object(a.useRef)(!1);Object(a.useEffect)((function(){j()}),[]),Object(a.useEffect)((function(){s&&document.body.classList.add("onloaded")}),[s]),Object(a.useEffect)((function(){function e(){return t.apply(this,arguments)}function t(){return(t=Object(f.a)(u.a.mark((function e(){var t,a,c,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=window.pageYOffset,a=document.documentElement.offsetHeight,c=document.documentElement.clientHeight,!(t+c>a-800)){e.next=13;break}if(g.current){e.next=13;break}return console.log("moviessss"),g.current=!0,e.next=9,y(20,b);case 9:o=e.sent,r((function(e){return[].concat(Object(m.a)(e),Object(m.a)(o))})),console.log(n),setTimeout((function(){g.current=!1,h((function(e){return e+1}))}),1500);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return document.addEventListener("scroll",e),function(){document.removeEventListener("scroll",e)}}),[n,g,b]);var j=function(){var e=Object(f.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(20,1);case 2:t=e.sent,r(t),l(!0),console.log(t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(e,t){return fetch("https://yts.mx/api/v2/list_movies.json?sort_by=like_count&limit=".concat(e,"&page=").concat(t)).then((function(e){return e.json()})).then((function(e){return e.data.movies})).catch((function(e){console.log(e)}))};return c.a.createElement("div",{className:"movie-list"},c.a.createElement("div",{className:"movie-list-inner"},n?n.map((function(e,t){return c.a.createElement(d,{title:e.title,poster:e.medium_cover_image,key:t,genres:e.genres,synopsis:e.synopsis})})):"Loading..."))};function b(){return c.a.createElement("div",null,"Profile Test")}function h(){return c.a.createElement("div",null,"About Test")}var g=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(i.a,null,c.a.createElement("div",null,c.a.createElement(i.b,{to:"/"},"Home"),c.a.createElement(i.b,{to:"/about"},"About"),c.a.createElement(i.b,{to:"/profile"},"Profile")),c.a.createElement("div",null,c.a.createElement(s.a,{path:"/about",exact:!0},c.a.createElement(h,null)),c.a.createElement(s.a,{path:"/profile",exact:!0},c.a.createElement(b,null)),c.a.createElement(s.a,{path:"/",exact:!0},c.a.createElement(E,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[103,1,2]]]);
//# sourceMappingURL=main.cd05b017.chunk.js.map