!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("lodash")):"function"==typeof define&&define.amd?define(["lodash"],t):"object"==typeof exports?exports.Pager=t(require("lodash")):e.Pager=t(e._)}(this,function(e){return function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={exports:{},id:r,loaded:!1};return e[r].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="/assets/",t(0)}([function(e,t,n){e.exports=n(8)},,function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},a=0;a<this.length;a++){var o=this[a][0];"number"==typeof o&&(r[o]=!0)}for(a=0;a<t.length;a++){var i=t[a];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],a=d[r.id];if(a){a.refs++;for(var o=0;o<a.parts.length;o++)a.parts[o](r.parts[o]);for(;o<r.parts.length;o++)a.parts.push(p(r.parts[o],t))}else{for(var i=[],o=0;o<r.parts.length;o++)i.push(p(r.parts[o],t));d[r.id]={id:r.id,refs:1,parts:i}}}}function a(e){for(var t=[],n={},r=0;r<e.length;r++){var a=e[r],o=a[0],i=a[1],s=a[2],u=a[3],p={css:i,media:s,sourceMap:u};n[o]?n[o].parts.push(p):t.push(n[o]={id:o,parts:[p]})}return t}function o(e,t){var n=m(),r=b[b.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),b.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function i(e){e.parentNode.removeChild(e);var t=b.indexOf(e);t>=0&&b.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",o(e,t),t}function u(e){var t=document.createElement("link");return t.rel="stylesheet",o(e,t),t}function p(e,t){var n,r,a;if(t.singleton){var o=x++;n=v||(v=s(t)),r=c.bind(null,n,o,!1),a=c.bind(null,n,o,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=u(t),r=f.bind(null,n),a=function(){i(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),r=l.bind(null,n),a=function(){i(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}function c(e,t,n,r){var a=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=y(t,a);else{var o=document.createTextNode(a),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}function l(e,t){var n=t.css,r=t.media;t.sourceMap;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function f(e,t){var n=t.css,r=(t.media,t.sourceMap);r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([n],{type:"text/css"}),o=e.href;e.href=URL.createObjectURL(a),o&&URL.revokeObjectURL(o)}var d={},g=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},h=g(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),m=g(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,x=0,b=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=h()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=a(e);return r(n,t),function(e){for(var o=[],i=0;i<n.length;i++){var s=n[i],u=d[s.id];u.refs--,o.push(u)}if(e){var p=a(e);r(p,t)}for(var i=0;i<o.length;i++){var u=o[i];if(0===u.refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete d[u.id]}}}};var y=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(10),o=r(a);t["default"]={props:{pageIndex:{type:Number,"default":1},pagerLabel:{type:String,"default":"items"},pagerSize:{type:Number,"default":5},pageSize:{type:Number,"default":10},total:{type:Number,validator:function(e){return e>=0}}},computed:{maxPageIndex:function(){return Math.ceil(this.total/this.pageSize)},maxPagerPos:function(){return Math.ceil(this.maxPageIndex/this.pagerSize)},pagerPos:{get:function(){return Math.min(Math.max(Math.ceil(this.pageIndex/this.pagerSize),1),this.maxPagerPos)}},startPageNum:function(){return Math.max((this.pagerPos-1)*this.pagerSize+1,1)},endPageNum:function(){return console.log("end",this.maxPageIndex,this.pageSize),Math.min(this.startPageNum+this.pagerSize,this.maxPageIndex+1)},pageNumRange:function(){return console.log(this.startPageNum,this.endPageNum),o["default"].range(this.startPageNum,this.endPageNum)},isOnePage:function(){return this.pageSize>=this.total}},methods:{selectPage:function(e){this.pageIndex=e},gotoNext:function(){var e=this.pageIndex+1;e<this.maxPageIndex&&(this.pageIndex=e)},gotoPrev:function(){var e=this.pageIndex-1;e>0&&(this.pageIndex=e)}}}},function(e,t,n){t=e.exports=n(2)(),t.push([e.id,".lm-pager[_v-5c63366e]{font-size:14px;color:#333;text-align:center}.lm-pager>[_v-5c63366e]{display:inline-block;height:22px;line-height:22px;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.lm-pager .pager-splitter[_v-5c63366e]{height:22px;width:1px;background:#333;margin:0 10px}.lm-pager .pager-num[_v-5c63366e]{padding:0 5px;text-align:center}.lm-pager .pager-num.cur[_v-5c63366e]{background:#56b6d9;color:#fff}.lm-pager .pager-num.cur[_v-5c63366e]:hover{background:#56b6d9}.lm-pager .pager-num[_v-5c63366e]{cursor:pointer}.lm-pager .pager-num[_v-5c63366e]:hover{background:#97d7ef;color:#fff}.lm-pager .pager-next[_v-5c63366e],.lm-pager .pager-prev[_v-5c63366e]{cursor:pointer}",""])},function(e,t,n){var r=n(5);"string"==typeof r&&(r=[[e.id,r,""]]);n(3)(r,{});r.locals&&(e.exports=r.locals)},function(e,t){e.exports='<div class=lm-pager _v-5c63366e=""><span class=total _v-5c63366e="">{{total}} {{pagerLabel}}</span><template v-if=!isOnePage _v-5c63366e=""><span class=pager-splitter _v-5c63366e=""></span> <span class=pager-prev v-on:click=gotoPrev _v-5c63366e="">prev</span><template v-for="num in pageNumRange" _v-5c63366e=""><span class="pager-num {{pageIndex == num ? &quot;cur&quot; : &quot;&quot;}}" v-on:click=selectPage(num) _v-5c63366e="">{{num}}</span></template><span class=pager-next v-on:click=gotoNext _v-5c63366e="">next</span></template></div>'},function(e,t,n){var r,a;n(6),r=n(4),a=n(7),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports["default"]),a&&(("function"==typeof e.exports?e.exports.options:e.exports).template=a)},,function(t,n){t.exports=e}])});