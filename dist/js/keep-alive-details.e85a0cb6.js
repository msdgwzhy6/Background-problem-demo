(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["keep-alive-details"],{"02f4":function(t,n,e){var i=e("4588"),a=e("be13");t.exports=function(t){return function(n,e){var c,r,o=String(a(n)),u=i(e),l=o.length;return u<0||u>=l?t?"":void 0:(c=o.charCodeAt(u),c<55296||c>56319||u+1===l||(r=o.charCodeAt(u+1))<56320||r>57343?t?o.charAt(u):c:t?o.slice(u,u+2):r-56320+(c-55296<<10)+65536)}}},"400a":function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"cs-details"},[t._v("\n  当前是详情页面\n")])},a=[],c={},r=c,o=(e("69bb"),e("2877")),u=Object(o["a"])(r,i,a,!1,null,null,null);n["default"]=u.exports},"5df3":function(t,n,e){"use strict";var i=e("02f4")(!0);e("01f9")(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=i(n,e),this._i+=t.length,{value:t,done:!1})}))},"69bb":function(t,n,e){"use strict";var i=e("c6a1"),a=e.n(i);a.a},"7e27":function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h4",[t._v(t._s(t.title))]),e("p",[t._v(t._s(t.content))])])},a=[],c=(e("ac6a"),e("5df3"),e("c911")),r=e("55d4"),o="other",u={data:function(){return{content:"",title:""}},created:function(){var t=this;c["a"].get(r["user"]).then((function(n){t.content=n.data.content,t.title=n.data.title})),Promise.all([c["a"].get(o)]).then((function(t){console.log(t)}))}},l=u,s=e("2877"),f=Object(s["a"])(l,i,a,!1,null,null,null);n["default"]=f.exports},c6a1:function(t,n,e){}}]);