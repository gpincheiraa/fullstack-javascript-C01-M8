(function(e){function t(t){for(var n,a,c=t[0],i=t[1],s=t[2],l=0,f=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);p&&p(t);while(f.length)f.shift()();return u.push.apply(u,s||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,a=1;a<r.length;a++){var i=r[a];0!==o[i]&&(n=!1)}n&&(u.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},o={app:0},u=[];function a(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"d51ec877"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=n);var u,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=a(e);var s=new Error;u=function(t){i.onerror=i.onload=null,clearTimeout(l);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+n+": "+u+")",s.name="ChunkLoadError",s.type=n,s.request=u,r[1](s)}o[e]=void 0}};var l=setTimeout((function(){u({type:"timeout",target:i})}),12e4);i.onerror=i.onload=u,document.head.appendChild(i)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var p=s;u.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),r("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),r("router-view")],1)},u=[],a=(r("034f"),r("2877")),c={},i=Object(a["a"])(c,o,u,!1,null,null,null),s=i.exports,l=(r("d3b7"),r("3ca3"),r("ddb0"),r("8c4f")),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"home"},[r("h1",[e._v("Products")]),r("ul",{attrs:{id:"example-1"}},e._l(e.products,(function(t){return r("li",{key:t.id},[r("h3",[e._v(e._s(t.name))]),r("p",[e._v(e._s(t.description))])])})),0)])},f=[],d=r("5530"),m=r("2f62"),v={name:"Home",methods:Object(d["a"])({},Object(m["b"])(["getProducts"])),computed:Object(d["a"])({},Object(m["c"])(["products"])),created:function(){this.getProducts()}},b=v,h=Object(a["a"])(b,p,f,!1,null,null,null),g=h.exports;n["a"].use(l["a"]);var y=[{path:"/",name:"Home",component:g},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],_=new l["a"]({mode:"history",base:"/",routes:y}),j=_,w=r("1da1"),O=(r("96cf"),r("bc3a")),P=r.n(O);n["a"].use(m["a"]);var k=new m["a"].Store({state:{products:[]},mutations:{SET_PRODUCTS:function(e,t){e.products=t}},actions:{getProducts:function(e){return Object(w["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.prev=1,t.next=4,P.a.get("".concat("https://sbstn-jmnz-fullstack-javascript.herokuapp.com","/products"));case 4:n=t.sent,r("SET_PRODUCTS",n.data),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))()}},modules:{}});n["a"].config.productionTip=!1,new n["a"]({router:j,store:k,render:function(e){return e(s)}}).$mount("#app")},"85ec":function(e,t,r){}});
//# sourceMappingURL=app.1b3fb3c1.js.map