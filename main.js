(()=>{"use strict";var n={904:(n,t,e)=>{e.d(t,{Z:()=>u});var r=e(81),i=e.n(r),o=e(645),a=e.n(o),s=e(667),c=e.n(s),d=new URL(e(585),e.b),p=a()(i()),l=c()(d);p.push([n.id,"body {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  width: 100vw;\n  font-family: 'Gupter', serif;\n  background: url("+l+");\n}\n\n.header {\n  position: fixed;\n  top: 0;\n  padding: 20px;\n  font-size: 80px;\n  font-weight: bold;\n}\n\n#container {\n  color: black;\n  background: #c4b5fd;\n  background-size: cover;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  border-radius: 20px;\n  padding: 40px 40px 20px 40px;\n  display: flex;\n  flex-direction: column;\n  width: 650px;\n  height: 400px;\n}\n\n#weather-data-container {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 60px 200px;\n  height: 90%;\n}\n\n#location-title {\n  grid-column: 1 / 4;\n  grid-row: 1 / 2;\n  font-size: 75px;\n  font-weight: bold;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 20px 60px 20px;\n  border-bottom: 2px solid black;\n}\n\n#weather-icon {\n  width: 70px;\n  height: 70px;\n}\n\n.temperature-container {\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n  font-size: 20px;\n  padding: 80px 20px 20px 20px;\n}\n\n#temp-text-container {\n  margin: 0px;\n  padding-bottom: 20px;\n  font-size: 70px;\n  text-align: start;\n}\n\n/* Toggle switch styling */\n\n#temp-switch-container {\n  display: flex;\n  justify-content: start;\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: '';\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196f3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196f3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n\n/* End */\n\n#weather-details {\n  grid-column: 2 / 3;\n  grid-row: 2 / 3;\n  font-size: 30px;\n}\n\nul {\n  list-style: none;\n  padding: 0px;\n}\n\nul li {\n  margin-top: 15px;\n}\n\n.giphy-box {\n  grid-column: 3 / 4;\n  grid-row: 2 / 3;\n  padding: 40px 20px 20px 20px;\n}\n\n#giph {\n  width: 175px;\n  height: 200px;\n}\n\n.form-container {\n  padding-top: 20px;\n  border-top: 2px solid black;\n  display: flex;\n}\n\n#site-search {\n  border-radius: 10px;\n  padding: 10px;\n  width: 510px;\n  margin-right: 30px;\n  border: none;\n}\n\n#submit-button {\n  border-radius: 10px;\n  padding: 10px 20px 10px 20px;\n  border: none;\n  background-color: #86efac;\n  font-family: 'Gupter', serif;\n  font-size: 17px;\n}\n\n#submit-button:hover {\n  cursor: pointer;\n  background-color: #10b981;\n}\n\n#location-warning-message {\n  padding-top: 5px;\n  visibility: hidden;\n  color: #e21111;\n  position: absolute;\n}\n\n.footer {\n  color: white;\n  position: fixed;\n  bottom: 0;\n  padding: 10px;\n}\n",""]);const u=p},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,i,o){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var d=0;d<n.length;d++){var p=[].concat(n[d]);r&&a[p[0]]||(void 0!==o&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=o),e&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=e):p[2]=e),i&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=i):p[4]="".concat(i)),t.push(p))}},t}},667:n=>{n.exports=function(n,t){return t||(t={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]|(%20)/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var o={},a=[],s=0;s<n.length;s++){var c=n[s],d=r.base?c[0]+r.base:c[0],p=o[d]||0,l="".concat(d," ").concat(p);o[d]=p+1;var u=e(l),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(f);else{var h=i(f,r);r.byIndex=s,t.splice(s,0,{identifier:l,updater:h,references:1})}a.push(l)}return a}function i(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,i){var o=r(n=n||[],i=i||{});return function(n){n=n||[];for(var a=0;a<o.length;a++){var s=e(o[a]);t[s].references--}for(var c=r(n,i),d=0;d<o.length;d++){var p=e(o[d]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}o=c}}},569:n=>{var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},216:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var i=void 0!==e.layer;i&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,i&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var o=e.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},585:(n,t,e)=>{n.exports=e.p+"7718a54ba08f35871bd6.jpg"}},t={};function e(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={id:r,exports:{}};return n[r](o,o.exports,e),o.exports}e.m=n,e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var t=e.g.document;if(!n&&t&&(t.currentScript&&(n=t.currentScript.src),!n)){var r=t.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.b=document.baseURI||self.location.href,e.nc=void 0,(()=>{var n=e(379),t=e.n(n),r=e(795),i=e.n(r),o=e(569),a=e.n(o),s=e(565),c=e.n(s),d=e(216),p=e.n(d),l=e(589),u=e.n(l),f=e(904),h={};h.styleTagTransform=u(),h.setAttributes=c(),h.insert=a().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=p(),t()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;const g=(()=>{const n=document.getElementById("location-title"),t=document.getElementById("temp-text-container"),e=document.getElementById("weather-details"),r=document.getElementById("location-warning-message");return document.getElementById("site-search").addEventListener("click",(()=>{r.style.visibility="hidden"})),{displayWeatherData:(r,i,o,a,s,c)=>{n.innerHTML=String.raw`
    ${r} <img id="weather-icon" src="${c}" />
    `,t.innerHTML=String.raw`${i}`,e.innerHTML=String.raw`
    <li>Humidity: ${o} % </li>
    <li>Wind speed: ${a} Mph </li>
    <li> ${s} </li>
    `},displayGiphyData:n=>{document.getElementById("giph").src=n},displayWarningMessage:()=>{r.style.visibility="visible"}}})();(()=>{const n=document.getElementById("search-location-form"),t=document.getElementById("site-search"),e=document.getElementById("temp-switch");let r="Metric";const i=n=>{const t=n.location.name,e=(n=>"Metric"===r?`${n.current.temp_c}°C`:"Imperial"===r?`${n.current.temp_f}°F`:void 0)(n),{humidity:i}=n.current,o=n.current.wind_mph,a=n.current.condition.text,{icon:s}=n.current.condition,c=`https:${s}`;g.displayWeatherData(t,e,i,o,a,c),(async n=>{const t=await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=stGdFhymjYVkIyM0zb1okf7kudYtznl3&s=${n}`,{mode:"cors"});(n=>{const t=n.data.images.original.url;g.displayGiphyData(t)})(await t.json())})(a)},o=async n=>{try{const t=await fetch(`https://api.weatherapi.com/v1/current.json?key=5b4cd00533fe44fba2d94101233003&q=${n}`,{mode:"cors"}),e=await t.json();i(e)}catch(n){console.log(n),g.displayWarningMessage()}};return n.addEventListener("submit",(n=>{const e=t.value;o(e),n.preventDefault(),t.value=""})),e.addEventListener("change",(n=>{(n=>{r="on"===n?"Imperial":"Metric",o(document.getElementById("location-title").textContent)})(n.target.checked?"on":"off")})),{handlePageLoad:()=>{o("london")}}})().handlePageLoad()})()})();