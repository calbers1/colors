(this.webpackJsonpcolors=this.webpackJsonpcolors||[]).push([[0],[,,,,,function(t,e,o){t.exports={Colors:"Colors_Colors__m8T6z",colorLabel:"Colors_colorLabel__1MC1T"}},,,,,function(t,e,o){},function(t,e,o){},,function(t,e,o){"use strict";o.r(e);var n=o(0),r=o.n(n),a=o(4),c=o.n(a),l=(o(10),o(2)),s=(o.p,o(11),o(5)),i=o.n(s),u=o(1),d=function(t){var e=Object(n.useState)(""),o=Object(l.a)(e,2),r=o[0],a=o[1],c=Object(n.useState)(""),s=Object(l.a)(c,2),d=s[0],b=s[1],g=Object(n.useState)("Enter a valid color."),f=Object(l.a)(g,2),j=f[0],p=f[1],h=Object(n.useState)("black"),v=Object(l.a)(h,2),O=v[0],m=v[1],C=function(){a(setInterval(x,250))},x=function(){for(var e="",o=0;o<6;o++)e+=Math.floor(16*Math.random()).toString(16);t.setBackground(e),b(e)},k=function(){if(""!==d){var t=document.getElementById("App"),e=function(t){var e,o,n;return t.match(/^rgb/)?(e=(t=t.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/))[1],o=t[2],n=t[3]):(e=(t=+("0x"+t.slice(1).replace(t.length<5&&/./g,"$&$&")))>>16,o=t>>8&255,n=255&t),Math.sqrt(e*e*.299+o*o*.587+n*n*.114)>=127.5?"light":"dark"}(window.getComputedStyle(t,null).getPropertyValue("background-color"));m("dark"===e?"white":"black")}};Object(n.useEffect)((function(){k()}));var w=function(t){var e=(new Option).style;return e.color=t,e.color===t.toLowerCase()};return Object(u.jsxs)("div",{className:i.a.Colors,"data-testid":"Colors",children:[Object(u.jsx)("h1",{className:"ColorLabel",style:{color:O},children:j}),Object(u.jsx)("input",{type:"text",name:"color",onChange:function(e){var o=e.target.value.trim(),n=t.hexRegExp.test(o);b(o),""!==o?(t.setBackground(o),"random"===o.toLowerCase()?p("Randomizing... Press space to stop on a color"):n?p("#".concat(o)):w(o)?p(o):p("Enter a valid color.")):p("Enter a valid color."),"random"===o.toLowerCase()?C():null!=r&&clearInterval(r)},style:{color:O,borderColor:O},value:d.trim()})]})};d.defaultProps={};var b=d;var g=function(){var t=new RegExp(/^([0-9a-f]{3}|[0-9a-f]{6})$/i),e=Object(n.useState)(null),o=Object(l.a)(e,2),r=o[0],a=o[1];return Object(u.jsx)("div",{style:{backgroundColor:r},className:"App",id:"App",children:Object(u.jsx)(b,{setBackground:function(e){t.test(e)?a("#".concat(e)):a(e)},hexRegExp:t})})},f=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,14)).then((function(e){var o=e.getCLS,n=e.getFID,r=e.getFCP,a=e.getLCP,c=e.getTTFB;o(t),n(t),r(t),a(t),c(t)}))};c.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root")),f()}],[[13,1,2]]]);
//# sourceMappingURL=main.4e9b04cf.chunk.js.map