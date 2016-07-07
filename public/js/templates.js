!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.templates=e()}}(function(){var define,module,exports;
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;n="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,n.jade=e()}}(function(){return function e(n,t,r){function o(a,f){if(!t[a]){if(!n[a]){var s="function"==typeof require&&require;if(!f&&s)return s(a,!0);if(i)return i(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var l=t[a]={exports:{}};n[a][0].call(l.exports,function(e){var t=n[a][1][e];return o(t?t:e)},l,l.exports,e,n,t,r)}return t[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(e,n,t){"use strict";function r(e){return null!=e&&""!==e}function o(e){return(Array.isArray(e)?e.map(o):e&&"object"==typeof e?Object.keys(e).filter(function(n){return e[n]}):[e]).filter(r).join(" ")}function i(e){return f[e]||e}function a(e){var n=String(e).replace(s,i);return n===""+e?e:n}t.merge=function u(e,n){if(1===arguments.length){for(var t=e[0],o=1;o<e.length;o++)t=u(t,e[o]);return t}var i=e["class"],a=n["class"];(i||a)&&(i=i||[],a=a||[],Array.isArray(i)||(i=[i]),Array.isArray(a)||(a=[a]),e["class"]=i.concat(a).filter(r));for(var f in n)"class"!=f&&(e[f]=n[f]);return e},t.joinClasses=o,t.cls=function(e,n){for(var r=[],i=0;i<e.length;i++)n&&n[i]?r.push(t.escape(o([e[i]]))):r.push(o(e[i]));var a=o(r);return a.length?' class="'+a+'"':""},t.style=function(e){return e&&"object"==typeof e?Object.keys(e).map(function(n){return n+":"+e[n]}).join(";"):e},t.attr=function(e,n,r,o){return"style"===e&&(n=t.style(n)),"boolean"==typeof n||null==n?n?" "+(o?e:e+'="'+e+'"'):"":0==e.indexOf("data")&&"string"!=typeof n?(-1!==JSON.stringify(n).indexOf("&")&&console.warn("Since Jade 2.0.0, ampersands (`&`) in data attributes will be escaped to `&amp;`"),n&&"function"==typeof n.toISOString&&console.warn("Jade will eliminate the double quotes around dates in ISO form after 2.0.0")," "+e+"='"+JSON.stringify(n).replace(/'/g,"&apos;")+"'"):r?(n&&"function"==typeof n.toISOString&&console.warn("Jade will stringify dates in ISO form after 2.0.0")," "+e+'="'+t.escape(n)+'"'):(n&&"function"==typeof n.toISOString&&console.warn("Jade will stringify dates in ISO form after 2.0.0")," "+e+'="'+n+'"')},t.attrs=function(e,n){var r=[],i=Object.keys(e);if(i.length)for(var a=0;a<i.length;++a){var f=i[a],s=e[f];"class"==f?(s=o(s))&&r.push(" "+f+'="'+s+'"'):r.push(t.attr(f,s,!1,n))}return r.join("")};var f={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"},s=/[&<>"]/g;t.escape=a,t.rethrow=function l(n,t,r,o){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&t||o))throw n.message+=" on line "+r,n;try{o=o||e("fs").readFileSync(t,"utf8")}catch(i){l(n,null,r)}var a=3,f=o.split("\n"),s=Math.max(r-a,0),u=Math.min(f.length,r+a),a=f.slice(s,u).map(function(e,n){var t=n+s+1;return(t==r?"  > ":"    ")+t+"| "+e}).join("\n");throw n.path=t,n.message=(t||"Jade")+":"+r+"\n"+a+"\n\n"+n.message,n},t.DebugItem=function(e,n){this.lineno=e,this.filename=n}},{fs:2}],2:[function(e,n,t){},{}]},{},[1])(1)});return {"navbar": function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (className, logo, logotype, menuItems, undefined) {
buf.push("<div class=\"navbar\"><a href=\"/\"><div class=\"logo\"><img" + (jade.attr("src", logo, true, false)) + "/></div><div class=\"logotype\"><img" + (jade.attr("src", logotype, true, false)) + "/></div></a><div class=\"menu\"><ul>");
// iterate menuItems
;(function(){
  var $$obj = menuItems;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

buf.push("<li class=\"link\"><a" + (jade.attr("href", item.url, true, false)) + (jade.cls([className + ' ' + item.id], [true])) + "> <div class=\"fr\">" + (jade.escape((jade_interp = item.name.fr) == null ? '' : jade_interp)) + "</div><div class=\"en\">" + (jade.escape((jade_interp = item.name.en) == null ? '' : jade_interp)) + "</div></a></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

buf.push("<li class=\"link\"><a" + (jade.attr("href", item.url, true, false)) + (jade.cls([className + ' ' + item.id], [true])) + "> <div class=\"fr\">" + (jade.escape((jade_interp = item.name.fr) == null ? '' : jade_interp)) + "</div><div class=\"en\">" + (jade.escape((jade_interp = item.name.en) == null ? '' : jade_interp)) + "</div></a></li>");
    }

  }
}).call(this);

buf.push("</ul><div" + (jade.cls(['switch',className], [null,true])) + "><span class=\"lang-en\">Eng</span><span>/</span><span class=\"lang-fr\">Fr</span></div></div></div>");}.call(this,"className" in locals_for_with?locals_for_with.className:typeof className!=="undefined"?className:undefined,"logo" in locals_for_with?locals_for_with.logo:typeof logo!=="undefined"?logo:undefined,"logotype" in locals_for_with?locals_for_with.logotype:typeof logotype!=="undefined"?logotype:undefined,"menuItems" in locals_for_with?locals_for_with.menuItems:typeof menuItems!=="undefined"?menuItems:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
}};
});