parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"W1z9":[function(require,module,exports) {

},{}],"LDUH":[function(require,module,exports) {

},{"./body.scss":"W1z9","./animation.scss":"W1z9"}],"MNPa":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.loading=void 0;var e=function(){var e=document.querySelector("#loading"),n=setInterval(function(){5==e.innerHTML.length?e.innerHTML="":e.innerHTML+="."},350),t=document.querySelector("#loadingH1");setTimeout(function(){clearInterval(n),t.style.display="none"},1500)};exports.loading=e;
},{}],"Z0HN":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.data=void 0;var S={greeting:"UNIDENTIFIED ORGANIC LIFEFORM DETECTED",message:"RUNNING GITHUB RESUME PROTOCAL (GRP) FOR @MONDAL10",name:"NAME: Amit Mondal",alias:"KNOWN ALIAS: Mondal10",occupation:"OCCUPATION: Fullstack Developer",frontEnd:"FRONT END DEVELOPMENT CORE: HTML5 | CSS3 | JAVASCRIPT",backEnd:"BACK END DEVELOPEMNT: NodeJS | Python | PHP | MySQL",JSFrameworks:"› JAVASCRIPT FRAMEWORKS: ReactJS | VueJS",JSLibs:"› JAVASCRIPT LIBRARIES: jQuery",CSSFrameworks:"› CSS FRAMEWORKS: Bootstrap | Bulma | Buefy | Materialize",CSSPre:"› CSS PREPROCESSORS: SASS",frontEndAnimation:"› FRONT END ANIMATION: Canvas | HTML5"};exports.data=S;
},{}],"wRW1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.initialize=void 0;var t=require("./loading"),e=require("./globalVariables"),n=function(){function n(t){t.scrollIntoView({behavior:"smooth"})}(0,t.loading)(),setTimeout(function(){function t(s){var r=document.querySelector("#message");if(r.classList.add("cursor"),r.innerText=e.data.message.substring(0,s),s<e.data.message.length)setTimeout(function(){t(s+1)},35);else{var o=function t(s){var r=document.querySelector("#name");r.classList.add("cursor"),r.innerText=e.data.name.substring(0,s),s<e.data.name.length?setTimeout(function(){t(s+1)},35):(r.classList.remove("cursor"),setTimeout(function(){!function t(s){var r=document.querySelector("#alias");r.classList.add("cursor");r.innerText=e.data.alias.substring(0,s);s<e.data.alias.length?setTimeout(function(){t(s+1)},35):(r.classList.remove("cursor"),setTimeout(function(){!function t(s){var r=document.querySelector("#occupation");r.classList.add("cursor");r.innerText=e.data.occupation.substring(0,s);s<e.data.occupation.length?setTimeout(function(){t(s+1)},35):(r.classList.remove("cursor"),setTimeout(function(){!function t(s){var r=document.querySelector("#front-end");r.classList.add("cursor");r.innerText=e.data.frontEnd.substring(0,s);s<e.data.frontEnd.length?setTimeout(function(){t(s+1)},35):(r.classList.remove("cursor"),setTimeout(function(){!function t(s){var r=document.querySelector("#js-frameworks");r.classList.add("cursor");r.innerText=e.data.JSFrameworks.substring(0,s);s<e.data.JSFrameworks.length?setTimeout(function(){t(s+1)},35):(r.classList.remove("cursor"),setTimeout(function(){!function t(s){var r=document.querySelector("#js-libs");r.classList.add("cursor");r.innerText=e.data.JSLibs.substring(0,s);s<e.data.JSLibs.length?setTimeout(function(){t(s+1)},35):(r.classList.remove("cursor"),setTimeout(function(){!function t(s){var r=document.querySelector("#css-frameworks");r.classList.add("cursor");n(r);r.innerText=e.data.CSSFrameworks.substring(0,s);s<e.data.CSSFrameworks.length?setTimeout(function(){t(s+1)},35):(r.classList.remove("cursor"),setTimeout(function(){!function t(s){var r=document.querySelector("#css-pre");r.classList.add("cursor");n(r);r.innerText=e.data.CSSPre.substring(0,s);s<e.data.CSSPre.length?setTimeout(function(){t(s+1)},35):(r.classList.remove("cursor"),setTimeout(function(){!function t(s){var r=document.querySelector("#front-end-animation");r.classList.add("cursor");n(r);r.innerText=e.data.frontEndAnimation.substring(0,s);s<e.data.frontEndAnimation.length?setTimeout(function(){t(s+1)},35):(r.classList.remove("cursor"),setTimeout(function(){!function t(s){var r=document.querySelector("#back-end");r.classList.add("cursor");n(r);r.innerText=e.data.backEnd.substring(0,s);s<e.data.backEnd.length?setTimeout(function(){t(s+1)},35):r.classList.remove("cursor")}(0)},1500))}(0)},1500))}(0)},1500))}(0)},1500))}(0)},1500))}(0)},1500))}(0)},1500))}(0)},1500))}(0)},1500))};r.classList.remove("cursor");!function(){var t=document.querySelector("#loadingMessage2");t.style.display="block";var e=document.querySelector("#alpha-loading"),n=setInterval(function(){6==e.innerHTML.length?e.innerHTML="":(e.innerHTML+=".",setTimeout(function(){clearInterval(n),t.style.display="none"},2e3))},350)}(),setTimeout(function(){o(0)},2500)}}!function n(s){var r=document.querySelector("#greeting");r.classList.add("cursor"),r.innerText=e.data.greeting.substring(0,s),s<e.data.greeting.length?setTimeout(function(){n(s+1)},35):(r.classList.remove("cursor"),t(0))}(0)},1500)};exports.initialize=n;
},{"./loading":"MNPa","./globalVariables":"Z0HN"}],"g2Hq":[function(require,module,exports) {
"use strict";require("../styles/main.scss");var i=require("./initialize");window.onload=function(){console.log("Loaded"),(0,i.initialize)()};
},{"../styles/main.scss":"LDUH","./initialize":"wRW1"}]},{},["g2Hq"], null)
//# sourceMappingURL=/scripts.0c15a7ca.js.map