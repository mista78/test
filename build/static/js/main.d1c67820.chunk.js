(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{47:function(e,t,a){e.exports=a(82)},79:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),i=a(12),m=a(6),l=a.n(m),s=a(11),u=a(10),o=a(41),p=a.n(o).a.create({headers:{"Client-ID":"konp54pwem1n35thhka2nrn620q6xdu"}});var d=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],i=t[1];return Object(n.useEffect)(function(){!function(){var e=Object(s.a)(l.a.mark(function e(){var t,a,n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get("https://api.twitch.tv/helix/games/top?first=25");case 2:t=e.sent,a=t.data.data,n=a.map(function(e){var t=e.box_art_url.replace("{width}","285").replace("{height}","380");return e.box_art_url=t,e}),i(n);case 6:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[]),r.a.createElement("div",null,r.a.createElement("div",{className:"row"},a.map(function(e){return r.a.createElement("div",{className:"col-lg-2 col-md-3 col-sm-4 col-6 mt-5"},r.a.createElement("div",{className:"card"},r.a.createElement(c.b,{className:"link",to:{pathname:"/game/"+e.name,state:{gameID:e.id}}},r.a.createElement("img",{className:"card-img-top",alt:"",src:e.box_art_url}))))})))},f=a(44),v=a(45),h=a.n(v);function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(a,!0).forEach(function(t){Object(f.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var E=function(e){var t=e.match,a=Object(n.useState)([]),c=Object(u.a)(a,2),i=c[0],m=c[1],o=Object(n.useState)(0),d=Object(u.a)(o,2),f=d[0],v=d[1],g=Object(n.useState)({name:t.params.id?t.params.id:"sardoche"}),E=Object(u.a)(g,2),w=E[0],O=E[1];Object(n.useEffect)(function(){!function(){var e=Object(s.a)(l.a.mark(function e(){var a,n,r,c,i,s,u,o,d,h;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get("https://api.twitch.tv/helix/streams?first=10&language=fr");case 2:return a=e.sent,n=a.data.data,r=n.map(function(e){return e.game_id}),c="",r.map(function(e){return c+="id=".concat(e,"&")}),i="https://api.twitch.tv/helix/games?"+c,e.next=11,p.get(i);case 11:s=e.sent,u=s.data.data,o=n.map(function(e){e.gameName="",u.map(function(t){if(e.game_id===t.id)return e.gameName=t.name});var t=e.thumbnail_url.replace("{width}","320").replace("{height}","180");return e.thumbnail_url=t,e}),m(o),void 0===t.params.id&&(d=b({},w),h=b({},f),console.log(o),d.name=o[0].user_name,h.value=o[0].viewer_count,d.id=o[0].user_id,O(d),v(h));case 16:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[]);var N=function(e){var t=b({},w);t.name=e.target.getAttribute("value"),O(t)},j="https://www.twitch.tv/"+w.name.toLowerCase();return r.a.createElement("div",null,r.a.createElement("div",{className:"left"},r.a.createElement(h.a,{width:"100%",url:j,playing:!0})),r.a.createElement("div",{className:"right"},r.a.createElement("div",{className:"row"},i.map(function(e){return r.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 mt-5"},r.a.createElement("div",{className:"card"},r.a.createElement("span",{className:"spanF","data-count":e.user_name,onClick:N},r.a.createElement("img",{value:e.user_name,className:"card-img-top",alt:"",src:e.thumbnail_url}))))}))))};var w=function(){return r.a.createElement("nav",{className:"navbar fixed-top"},r.a.createElement("ul",null,r.a.createElement("li",{className:"nav-item nav-link"},r.a.createElement(c.b,{to:"/"},"Home")),r.a.createElement("li",{className:"nav-item nav-link"},r.a.createElement(c.b,{to:"/game"},"Top Games")),r.a.createElement("li",{className:"nav-item nav-link"},r.a.createElement(c.b,{to:"/top-streams"},"Top Live Streams"))))};var O=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],i=t[1];return Object(n.useEffect)(function(){!function(){var e=Object(s.a)(l.a.mark(function e(){var t,a,n,r,c,m,s,u;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get("https://api.twitch.tv/helix/streams?first=60&language=fr");case 2:return t=e.sent,a=t.data.data,n=a.map(function(e){return e.game_id}),r="",n.map(function(e){return r+="id=".concat(e,"&")}),c="https://api.twitch.tv/helix/games?"+r,e.next=11,p.get(c);case 11:m=e.sent,s=m.data.data,u=a.map(function(e){e.gameName="",s.map(function(t){if(e.game_id===t.id)return e.gameName=t.name});var t=e.thumbnail_url.replace("{width}","320").replace("{height}","180");return e.thumbnail_url=t,e}),i(u);case 15:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[]),r.a.createElement("div",null,r.a.createElement("div",{className:"row"},a.map(function(e){return r.a.createElement("div",{className:"col-lg-3 col-md-4 col-sm-12 mt-5"},r.a.createElement("div",{className:"card"},r.a.createElement(c.b,{className:"link views","data-count":e.user_name,to:{pathname:"/views/"+e.user_name}},r.a.createElement("img",{className:"card-img-top",alt:"",src:e.thumbnail_url}))))})))};var N=function(e){e.match;var t=e.location,a=Object(n.useState)([]),i=Object(u.a)(a,2),m=i[0],o=i[1];return Object(n.useEffect)(function(){!function(){var e=Object(s.a)(l.a.mark(function e(){var a,n,r;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get("https://api.twitch.tv/helix/streams?game_id=".concat(t.state.gameID,"&first=24&language=fr"));case 2:a=e.sent,n=a.data.data,r=n.map(function(e){var t=e.thumbnail_url.replace("{width}","320").replace("{height}","180");return e.thumbnail_url=t,e}),o(r);case 6:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()}),r.a.createElement("div",null,r.a.createElement("div",{className:"row"},m.map(function(e){return r.a.createElement("div",{className:"col-lg-3 col-md-4 col-sm-12 mt-5"},r.a.createElement("div",{className:"card"},r.a.createElement(c.b,{className:"link views","data-count":e.user_name,to:{pathname:"/views/"+e.user_name}},r.a.createElement("img",{className:"card-img-top",alt:"",src:e.thumbnail_url}))))})))},j=a(46),_=a.n(j);a(79),a(80),a(81);var x=document.getElementById("root");_.a.render(r.a.createElement(function(){return r.a.createElement(c.a,null,r.a.createElement(w,null),r.a.createElement("div",{className:"App container-fluid"},r.a.createElement(i.a,{exact:!0,path:"/",component:E}),r.a.createElement(i.a,{exact:!0,path:"/game",component:d}),r.a.createElement(i.a,{exact:!0,path:"/top-streams",component:O}),r.a.createElement(i.a,{path:"/game/:id",component:N})),r.a.createElement(i.a,{path:"/views/:id",component:E}))},null),x)}},[[47,1,2]]]);
//# sourceMappingURL=main.d1c67820.chunk.js.map