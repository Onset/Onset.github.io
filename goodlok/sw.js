var __wpo = {"assets":{"main":["/goodlok/280a720cfcb63a89ba77a4d4f5614424.mp4","/goodlok/bundle.92fb7e051f0b0dd60b78.js","/goodlok/main.a238c143c5daf9dd76d2960b734e6c58.css","/goodlok/36.png","/goodlok/","/goodlok/manifest.46cc477eb82b383aa789e3e25692fb45.json","/goodlok/icon_512x512.139fd11e9d1146e9b775e46dd1c2b8e2.png","/goodlok/icon_384x384.d9c8874084746bed3bca8eb99e6b5a9c.png","/goodlok/icon_256x256.752186aff254e47cc81cf61612281f96.png","/goodlok/icon_192x192.917756280129b279dac7ec0957c05498.png","/goodlok/icon_128x128.e7268ab35be82e5e5402a1a13d1b4fe9.png","/goodlok/icon_96x96.4b9c9f9debdcaaaa1f5f2520d20f2fab.png","/goodlok/icon_36x36.24f0433269b5f25d6e47b52e568ac031.png","https://use.fontawesome.com/releases/v5.0.13/css/all.css","https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,600&amp;subset=latin-ext"],"additional":[],"optional":[]},"externals":["https://use.fontawesome.com/releases/v5.0.13/css/all.css","https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,600&amp;subset=latin-ext"],"hashesMap":{"7e587b66820c7bad6eac840676d932cf06771f20":"/goodlok/280a720cfcb63a89ba77a4d4f5614424.mp4","2cdf715fe535d3c5e3ba75074c48e5ab209a54dd":"/goodlok/bundle.92fb7e051f0b0dd60b78.js","7ff4c62f3338bd900969f6faa8cc24c7356326ef":"/goodlok/main.a238c143c5daf9dd76d2960b734e6c58.css","24560f8f8b7a4d379a1cf4256ecf049f54f9e5c6":"/goodlok/36.png","3d3d42413dcd084ab13f4911e893a33aa06fda60":"/goodlok/","278e64814bf507c5678b1a9b1841e81460ab0d3c":"/goodlok/manifest.46cc477eb82b383aa789e3e25692fb45.json","53f88067ebd20b1bb0c63021568c7d24ab2a278e":"/goodlok/icon_512x512.139fd11e9d1146e9b775e46dd1c2b8e2.png","93aecc71c90e1e7ef8926bcbc280abf20e19ce43":"/goodlok/icon_384x384.d9c8874084746bed3bca8eb99e6b5a9c.png","14ec62d61e8336b59269800076775a25c408f28b":"/goodlok/icon_256x256.752186aff254e47cc81cf61612281f96.png","058610f6a93f33f989475a329cc95430832860b0":"/goodlok/icon_192x192.917756280129b279dac7ec0957c05498.png","ef8f2390929d4172370a3f8713c487347d78bfbf":"/goodlok/icon_128x128.e7268ab35be82e5e5402a1a13d1b4fe9.png","16f3cbeae6c0c7f8170839fedec9ed9223ede066":"/goodlok/icon_96x96.4b9c9f9debdcaaaa1f5f2520d20f2fab.png","30d508f985ab351b2e18ea43fd1a92a46df210b0":"/goodlok/icon_36x36.24f0433269b5f25d6e47b52e568ac031.png"},"strategy":"changed","responseStrategy":"cache-first","version":"2018-6-9 00:49:59","name":"webpack-offline","pluginVersion":"5.0.5","relativePaths":false};

!function(e){function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="/goodlok/",n(n.s=0)}([function(e,n,t){"use strict";function r(e,n){return caches.match(e,{cacheName:n}).then(function(t){return a(t)?t:c(t).then(function(t){return caches.open(n).then(function(n){return n.put(e,t)}).then(function(){return t})})}).catch(function(){})}function o(e,n){return e+(-1!==e.indexOf("?")?"&":"?")+"__uncache="+encodeURIComponent(n)}function i(e){return"navigate"===e.mode||e.headers.get("Upgrade-Insecure-Requests")||-1!==(e.headers.get("Accept")||"").indexOf("text/html")}function a(e){return!e||!e.redirected||!e.ok||"opaqueredirect"===e.type}function c(e){return a(e)?Promise.resolve(e):("body"in e?Promise.resolve(e.body):e.blob()).then(function(n){return new Response(n,{headers:e.headers,status:e.status})})}function s(e,n){console.groupCollapsed("[SW]:",e),n.forEach(function(e){console.log("Asset:",e)}),console.groupEnd()}if(function(){var e=ExtendableEvent.prototype.waitUntil,n=FetchEvent.prototype.respondWith,t=new WeakMap;ExtendableEvent.prototype.waitUntil=function(n){var r=this,o=t.get(r);return o?void o.push(Promise.resolve(n)):(o=[Promise.resolve(n)],t.set(r,o),e.call(r,Promise.resolve().then(function e(){var n=o.length;return Promise.all(o.map(function(e){return e.catch(function(){})})).then(function(){return o.length!=n?e():(t.delete(r),Promise.all(o))})})))},FetchEvent.prototype.respondWith=function(e){return this.waitUntil(e),n.call(this,e)}}(),void 0===u)var u=!1;!function(e,n){function t(){if(!W.additional.length)return Promise.resolve();u&&console.log("[SW]:","Caching additional");var e=void 0;return e="changed"===O?f("additional"):a("additional"),e.catch(function(e){console.error("[SW]:","Cache section `additional` failed to load")})}function a(n){var t=W[n];return caches.open(j).then(function(r){return y(r,t,{bust:e.version,request:L,failAll:"main"===n})}).then(function(){s("Cached assets: "+n,t)}).catch(function(e){throw console.error(e),e})}function f(n){return h().then(function(t){if(!t)return a(n);var r=t[0],o=t[1],i=t[2],c=i.hashmap,u=i.version;if(!i.hashmap||u===e.version)return a(n);var f=Object.keys(c).map(function(e){return c[e]}),l=o.map(function(e){var n=new URL(e.url);return n.search="",n.hash="",n.toString()}),h=W[n],d=[],p=h.filter(function(e){return-1===l.indexOf(e)||-1===f.indexOf(e)});Object.keys(b).forEach(function(e){var n=b[e];if(-1!==h.indexOf(n)&&-1===p.indexOf(n)&&-1===d.indexOf(n)){var t=c[e];t&&-1!==l.indexOf(t)?d.push([t,n]):p.push(n)}}),s("Changed assets: "+n,p),s("Moved assets: "+n,d);var v=Promise.all(d.map(function(e){return r.match(e[0]).then(function(n){return[e[1],n]})}));return caches.open(j).then(function(t){var r=v.then(function(e){return Promise.all(e.map(function(e){return t.put(e[0],e[1])}))});return Promise.all([r,y(t,p,{bust:e.version,request:L,failAll:"main"===n,deleteFirst:"main"!==n})])})})}function l(){return caches.keys().then(function(e){var n=e.map(function(e){if(0===e.indexOf(E)&&0!==e.indexOf(j))return console.log("[SW]:","Delete cache:",e),caches.delete(e)});return Promise.all(n)})}function h(){return caches.keys().then(function(e){for(var n=e.length,t=void 0;n--&&(t=e[n],0!==t.indexOf(E)););if(t){var r=void 0;return caches.open(t).then(function(e){return r=e,e.match(new URL(M,location).toString())}).then(function(e){if(e)return Promise.all([r,r.keys(),e.json()])})}})}function d(){return caches.open(j).then(function(n){var t=new Response(JSON.stringify({version:e.version,hashmap:b}));return n.put(new URL(M,location).toString(),t)})}function p(e,n,t){return m(e),r(t,j).then(function(r){return r?(u&&console.log("[SW]:","URL ["+t+"]("+n+") from cache"),r):fetch(e.request).then(function(r){return r.ok?(u&&console.log("[SW]:","URL ["+n+"] from network"),t===n&&function(){var t=r.clone(),o=caches.open(j).then(function(e){return e.put(n,t)}).then(function(){console.log("[SW]:","Cache asset: "+n)});e.waitUntil(o)}(),r):(u&&console.log("[SW]:","URL ["+n+"] wrong response: ["+r.status+"] "+r.type),r)})})}function v(e,n,t){return R(e).then(function(e){if(e.ok)return u&&console.log("[SW]:","URL ["+n+"] from network"),e;throw e}).catch(function(e){return u&&console.log("[SW]:","URL ["+n+"] from cache if possible"),r(t,j).then(function(n){if(n)return n;if(e instanceof Response)return e;throw e})})}function m(e){if(q&&"function"==typeof q.map&&e.preloadResponse&&"navigate"===e.request.mode){var n=q.map(new URL(e.request.url),e.request);n&&g(n,e)}}function g(e,n){var t=new URL(e,location),r=n.preloadResponse;F.set(r,{url:t,response:r});var o=function(){return F.has(r)},i=r.then(function(e){if(e&&o()){var n=e.clone();return caches.open(C).then(function(e){if(o())return e.put(t,n).then(function(){if(!o())return caches.open(C).then(function(e){return e.delete(t)})})})}});n.waitUntil(i)}function w(e){if(F){var n=void 0,t=void 0;return F.forEach(function(r,o){r.url.href===e.href&&(n=r.response,t=o)}),n?(F.delete(t),n):void 0}}function U(e){var n=new URL(e.request.url);if(self.registration.navigationPreload&&q&&q.test&&q.test(n,e.request)){var t=w(n),o=e.request;return t?(e.waitUntil(caches.open(C).then(function(e){return e.delete(o)})),t):r(o,C).then(function(n){return n&&e.waitUntil(caches.open(C).then(function(e){return e.delete(o)})),n||fetch(e.request)})}}function y(e,n,t){var r=t.bust,i=!1!==t.failAll,a=!0===t.deleteFirst,s=t.request||{credentials:"omit",mode:"cors"},u=Promise.resolve();return a&&(u=Promise.all(n.map(function(n){return e.delete(n).catch(function(){})}))),Promise.all(n.map(function(e){return r&&(e=o(e,r)),fetch(e,s).then(c).then(function(e){return e.ok?{response:e}:{error:!0}},function(){return{error:!0}})})).then(function(t){return i&&t.some(function(e){return e.error})?Promise.reject(new Error("Wrong response status")):(i||(t=t.filter(function(e){return!e.error})),u.then(function(){var r=t.map(function(t,r){var o=t.response;return e.put(n[r],o)});return Promise.all(r)}))})}function P(e){var n=e.url,t=new URL(n),r=void 0;r=i(e)?"navigate":t.origin===location.origin?"same-origin":"cross-origin";for(var o=0;o<x.length;o++){var a=x[o];if(a&&(!a.requestTypes||-1!==a.requestTypes.indexOf(r))){var c=void 0;if((c="function"==typeof a.match?a.match(t,e):n.replace(a.match,a.to))&&c!==n)return c}}}function R(e){return e.preloadResponse&&!0===q?e.preloadResponse.then(function(n){return n||fetch(e.request)}):fetch(e.request)}var x=n.cacheMaps,q=n.navigationPreload,O=e.strategy,S=e.responseStrategy,W=e.assets,b=e.hashesMap,k=e.externals,L=e.prefetchRequest||{credentials:"same-origin",mode:"cors"},E=e.name,_=e.version,j=E+":"+_,C=E+"$preload",M="__offline_webpack__data";!function(){Object.keys(W).forEach(function(e){W[e]=W[e].map(function(e){var n=new URL(e,location);return n.hash="",-1===k.indexOf(e)&&(n.search=""),n.toString()})}),b=Object.keys(b).reduce(function(e,n){var t=new URL(b[n],location);return t.search="",t.hash="",e[n]=t.toString(),e},{}),k=k.map(function(e){var n=new URL(e,location);return n.hash="",n.toString()})}();var A=[].concat(W.main,W.additional,W.optional);self.addEventListener("install",function(e){console.log("[SW]:","Install event");var n=void 0;n="changed"===O?f("main"):a("main"),e.waitUntil(n)}),self.addEventListener("activate",function(e){console.log("[SW]:","Activate event");var n=t();n=n.then(d),n=n.then(l),n=n.then(function(){if(self.clients&&self.clients.claim)return self.clients.claim()}),q&&self.registration.navigationPreload&&(n=Promise.all([n,self.registration.navigationPreload.enable()])),e.waitUntil(n)}),self.addEventListener("fetch",function(e){if("GET"===e.request.method&&("only-if-cached"!==e.request.cache||"same-origin"===e.request.mode)){var n=new URL(e.request.url);n.hash="";var t=n.toString();-1===k.indexOf(t)&&(n.search="",t=n.toString());var r=-1!==A.indexOf(t),o=t;if(!r){var i=P(e.request);i&&(o=i,r=!0)}if(r){var a=void 0;a="network-first"===S?v(e,t,o):p(e,t,o),e.respondWith(a)}else{if("navigate"===e.request.mode&&!0===q)return void e.respondWith(R(e));if(q){var c=U(e);if(c)return void e.respondWith(c)}}}}),self.addEventListener("message",function(e){var n=e.data;if(n)switch(n.action){case"skipWaiting":self.skipWaiting&&self.skipWaiting()}});var F=new Map}(__wpo,{loaders:{},cacheMaps:[],navigationPreload:!1}),e.exports=t(1)},function(e,n){}]);