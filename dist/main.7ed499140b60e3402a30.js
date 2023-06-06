!function(){var inProgress,parseVersion,versionLt,rangeToString,satisfy,findSingletonVersionKey,getInvalidSingletonVersionMessage,getSingletonVersion,get,loadSingletonVersionCheckFallback,installedModules,moduleToHandlerMapping,chunkMapping,__webpack_modules__={83521:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){Promise.all([__webpack_require__.e(990),__webpack_require__.e(78),__webpack_require__.e(735),__webpack_require__.e(939),__webpack_require__.e(829)]).then(__webpack_require__.bind(__webpack_require__,33829))}},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.c=__webpack_module_cache__,__webpack_require__.amdO={},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,{a:getter}),getter},__webpack_require__.d=function(exports,definition){for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=function(chunkId){return Promise.all(Object.keys(__webpack_require__.f).reduce((function(promises,key){return __webpack_require__.f[key](chunkId,promises),promises}),[]))},__webpack_require__.u=function(chunkId){return chunkId+"."+{29:"eec1b0c8291a30a2e606",78:"4f96d7f0e8b32d97c781",118:"46e00f7eccf16f5ef1f2",144:"5c23fd3d135092337754",152:"5e98153235f581e95eb3",283:"02a6c23d852c2ea3ed64",334:"b4e4546dd345308e2d29",343:"b860834ef6db52fb6593",345:"c5c48db215568386e440",426:"197cb6fa8085b6243a13",432:"6929c067b7d74491c568",483:"cd007a5da5ca37a00d48",486:"34c7849b0d689687f77f",629:"fc94ccd6e6da22a35503",654:"064f40bc8d2960b124d5",669:"1ad00a6feecf239a8f66",677:"b6f2ee94026b41eede40",678:"3d190b2d7cb5afaca374",735:"1866a59fb5d6200198b2",787:"19b55c5f48ebcd68bee6",829:"bc3601d7221e0abf89e3",904:"0bd32befebeeeb301f28",939:"445bb6076c75c0264ca7",963:"f7a0813df97aae2cb445",979:"3ea584e0f512043df1a8",990:"1d977de4570268c227d4"}[chunkId]+".js"},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.hmd=function(module){return(module=Object.create(module)).children||(module.children=[]),Object.defineProperty(module,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+module.id)}}),module},__webpack_require__.o=function(obj,prop){return Object.prototype.hasOwnProperty.call(obj,prop)},inProgress={},__webpack_require__.l=function(url,done,key,chunkId){if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="@idg/project-name:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","@idg/project-name:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=function(prev,event){script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((function(fn){return fn(event)})),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=function(exports){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=function(module){return module.paths=[],module.children||(module.children=[]),module},function(){__webpack_require__.S={};var initPromises={},initTokens={};__webpack_require__.I=function(name,initScope){initScope||(initScope=[]);var initToken=initTokens[name];if(initToken||(initToken=initTokens[name]={}),!(initScope.indexOf(initToken)>=0)){if(initScope.push(initToken),initPromises[name])return initPromises[name];__webpack_require__.o(__webpack_require__.S,name)||(__webpack_require__.S[name]={});var scope=__webpack_require__.S[name],register=function(name,version,factory,eager){var versions=scope[name]=scope[name]||{},activeVersion=versions[version];(!activeVersion||!activeVersion.loaded&&(!eager!=!activeVersion.eager?eager:"@idg/project-name">activeVersion.from))&&(versions[version]={get:factory,from:"@idg/project-name",eager:!!eager})},promises=[];if("default"===name)register("@idg/fastclick","0.1.1",(function(){return __webpack_require__.e(432).then((function(){return function(){return __webpack_require__(35432)}}))})),register("@idg/gui-typedjs","0.0.9",(function(){return Promise.all([__webpack_require__.e(677),__webpack_require__.e(735),__webpack_require__.e(29),__webpack_require__.e(283)]).then((function(){return function(){return __webpack_require__(91677)}}))})),register("@idg/idg","2.12.59",(function(){return Promise.all([__webpack_require__.e(343),__webpack_require__.e(78),__webpack_require__.e(979),__webpack_require__.e(118)]).then((function(){return function(){return __webpack_require__(93343)}}))})),register("@idg/iview","4.16.20",(function(){return Promise.all([__webpack_require__.e(963),__webpack_require__.e(426)]).then((function(){return function(){return __webpack_require__(81963)}}))})),register("@sentry/tracing","6.2.0",(function(){return __webpack_require__.e(787).then((function(){return function(){return __webpack_require__(91787)}}))})),register("@sentry/vue","6.2.5",(function(){return __webpack_require__.e(678).then((function(){return function(){return __webpack_require__(27678)}}))})),register("axios","0.19.0",(function(){return __webpack_require__.e(669).then((function(){return function(){return __webpack_require__(9669)}}))})),register("localforage","1.9.0",(function(){return __webpack_require__.e(483).then((function(){return function(){return __webpack_require__(69483)}}))})),register("lodash","4.17.15",(function(){return __webpack_require__.e(486).then((function(){return function(){return __webpack_require__(96486)}}))})),register("vue-class-component","7.1.0",(function(){return __webpack_require__.e(904).then((function(){return function(){return __webpack_require__(45904)}}))})),register("vue-i18n","8.14.1",(function(){return __webpack_require__.e(152).then((function(){return function(){return __webpack_require__(17152)}}))})),register("vue-property-decorator","8.2.2",(function(){return Promise.all([__webpack_require__.e(78),__webpack_require__.e(334)]).then((function(){return function(){return __webpack_require__(95334)}}))})),register("vue-router","3.5.1",(function(){return __webpack_require__.e(345).then((function(){return function(){return __webpack_require__(78345)}}))})),register("vue","2.6.10",(function(){return __webpack_require__.e(144).then((function(){return function(){return __webpack_require__(20144)}}))})),register("vuex","3.1.1",(function(){return __webpack_require__.e(629).then((function(){return function(){return __webpack_require__(20629)}}))}));return promises.length?initPromises[name]=Promise.all(promises).then((function(){return initPromises[name]=1})):initPromises[name]=1}}}(),function(){var scriptUrl;__webpack_require__.g.importScripts&&(scriptUrl=__webpack_require__.g.location+"");var document=__webpack_require__.g.document;if(!scriptUrl&&document&&(document.currentScript&&(scriptUrl=document.currentScript.src),!scriptUrl)){var scripts=document.getElementsByTagName("script");scripts.length&&(scriptUrl=scripts[scripts.length-1].src)}if(!scriptUrl)throw new Error("Automatic publicPath is not supported in this browser");scriptUrl=scriptUrl.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),__webpack_require__.p=scriptUrl}(),parseVersion=function(str){var p=function(p){return p.split(".").map((function(p){return+p==p?+p:p}))},n=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(str),r=n[1]?p(n[1]):[];return n[2]&&(r.length++,r.push.apply(r,p(n[2]))),n[3]&&(r.push([]),r.push.apply(r,p(n[3]))),r},versionLt=function(a,b){a=parseVersion(a),b=parseVersion(b);for(var r=0;;){if(r>=a.length)return r<b.length&&"u"!=(typeof b[r])[0];var e=a[r],n=(typeof e)[0];if(r>=b.length)return"u"==n;var t=b[r],f=(typeof t)[0];if(n!=f)return"o"==n&&"n"==f||"s"==f||"u"==n;if("o"!=n&&"u"!=n&&e!=t)return e<t;r++}},rangeToString=function(range){var r=range[0],n="";if(1===range.length)return"*";if(r+.5){n+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var e=1,a=1;a<range.length;a++)e--,n+="u"==(typeof(t=range[a]))[0]?"-":(e>0?".":"")+(e=2,t);return n}var g=[];for(a=1;a<range.length;a++){var t=range[a];g.push(0===t?"not("+o()+")":1===t?"("+o()+" || "+o()+")":2===t?g.pop()+" "+g.pop():rangeToString(t))}return o();function o(){return g.pop().replace(/^\((.+)\)$/,"$1")}},satisfy=function(range,version){if(0 in range){version=parseVersion(version);var e=range[0],r=e<0;r&&(e=-e-1);for(var n=0,i=1,a=!0;;i++,n++){var f,s,g=i<range.length?(typeof range[i])[0]:"";if(n>=version.length||"o"==(s=(typeof(f=version[n]))[0]))return!a||("u"==g?i>e&&!r:""==g!=r);if("u"==s){if(!a||"u"!=g)return!1}else if(a)if(g==s)if(i<=e){if(f!=range[i])return!1}else{if(r?f>range[i]:f<range[i])return!1;f!=range[i]&&(a=!1)}else if("s"!=g&&"n"!=g){if(r||i<=e)return!1;a=!1,i--}else{if(i<=e||s<g!=r)return!1;a=!1}else"s"!=g&&"n"!=g&&(a=!1,i--)}}var t=[],o=t.pop.bind(t);for(n=1;n<range.length;n++){var u=range[n];t.push(1==u?o()|o():2==u?o()&o():u?satisfy(u,version):!o())}return!!o()},findSingletonVersionKey=function(scope,key){var versions=scope[key];return Object.keys(versions).reduce((function(a,b){return!a||!versions[a].loaded&&versionLt(a,b)?b:a}),0)},getInvalidSingletonVersionMessage=function(scope,key,version,requiredVersion){return"Unsatisfied version "+version+" from "+(version&&scope[key][version].from)+" of shared singleton module "+key+" (required "+rangeToString(requiredVersion)+")"},getSingletonVersion=function(scope,scopeName,key,requiredVersion){var version=findSingletonVersionKey(scope,key);return satisfy(requiredVersion,version)||"undefined"!=typeof console&&console.warn&&console.warn(getInvalidSingletonVersionMessage(scope,key,version,requiredVersion)),get(scope[key][version])},get=function(entry){return entry.loaded=1,entry.get()},loadSingletonVersionCheckFallback=function(fn){return function(scopeName,a,b,c){var promise=__webpack_require__.I(scopeName);return promise&&promise.then?promise.then(fn.bind(fn,scopeName,__webpack_require__.S[scopeName],a,b,c)):fn(scopeName,__webpack_require__.S[scopeName],a,b,c)}}((function(scopeName,scope,key,version,fallback){return scope&&__webpack_require__.o(scope,key)?getSingletonVersion(scope,0,key,version):fallback()})),installedModules={},moduleToHandlerMapping={9735:function(){return loadSingletonVersionCheckFallback("default","vue-property-decorator",[1,8,2,1],(function(){return Promise.all([__webpack_require__.e(78),__webpack_require__.e(334)]).then((function(){return function(){return __webpack_require__(95334)}}))}))},65029:function(){return loadSingletonVersionCheckFallback("default","@idg/idg",[1,2,12,36],(function(){return Promise.all([__webpack_require__.e(343),__webpack_require__.e(78),__webpack_require__.e(979),__webpack_require__.e(118)]).then((function(){return function(){return __webpack_require__(93343)}}))}))},64078:function(){return loadSingletonVersionCheckFallback("default","vue",[1,2,6,10],(function(){return __webpack_require__.e(144).then((function(){return function(){return __webpack_require__(20144)}}))}))},12243:function(){return loadSingletonVersionCheckFallback("default","@sentry/vue",[1,6,2,1],(function(){return __webpack_require__.e(678).then((function(){return function(){return __webpack_require__(27678)}}))}))},22791:function(){return loadSingletonVersionCheckFallback("default","lodash",[1,4,17,14],(function(){return __webpack_require__.e(486).then((function(){return function(){return __webpack_require__(96486)}}))}))},40760:function(){return loadSingletonVersionCheckFallback("default","vuex",[1,3,1,1],(function(){return __webpack_require__.e(629).then((function(){return function(){return __webpack_require__(20629)}}))}))},52090:function(){return loadSingletonVersionCheckFallback("default","@sentry/tracing",[1,6,2,0],(function(){return __webpack_require__.e(787).then((function(){return function(){return __webpack_require__(91787)}}))}))},68212:function(){return loadSingletonVersionCheckFallback("default","axios",[2,0,19,0],(function(){return __webpack_require__.e(669).then((function(){return function(){return __webpack_require__(9669)}}))}))},68368:function(){return loadSingletonVersionCheckFallback("default","vue-i18n",[1,8,12,0],(function(){return __webpack_require__.e(152).then((function(){return function(){return __webpack_require__(17152)}}))}))},82897:function(){return loadSingletonVersionCheckFallback("default","vue-router",[1,3,0,7],(function(){return __webpack_require__.e(345).then((function(){return function(){return __webpack_require__(78345)}}))}))},83435:function(){return loadSingletonVersionCheckFallback("default","@idg/fastclick",[2,0,1,1],(function(){return __webpack_require__.e(432).then((function(){return function(){return __webpack_require__(35432)}}))}))},84351:function(){return loadSingletonVersionCheckFallback("default","localforage",[1,1,9,0],(function(){return __webpack_require__.e(483).then((function(){return function(){return __webpack_require__(69483)}}))}))},69426:function(){return loadSingletonVersionCheckFallback("default","vue",[1,2,5,2],(function(){return __webpack_require__.e(144).then((function(){return function(){return __webpack_require__(20144)}}))}))},42921:function(){return loadSingletonVersionCheckFallback("default","vue",[1,2,5,13],(function(){return __webpack_require__.e(144).then((function(){return function(){return __webpack_require__(20144)}}))}))},99350:function(){return loadSingletonVersionCheckFallback("default","vue-class-component",[1,7,0,1],(function(){return __webpack_require__.e(904).then((function(){return function(){return __webpack_require__(45904)}}))}))},19589:function(){return loadSingletonVersionCheckFallback("default","@idg/gui-typedjs",[4,0,0,9],(function(){return Promise.all([__webpack_require__.e(677),__webpack_require__.e(735),__webpack_require__.e(29)]).then((function(){return function(){return __webpack_require__(91677)}}))}))},70175:function(){return loadSingletonVersionCheckFallback("default","@idg/iview",[4,4,16,20],(function(){return Promise.all([__webpack_require__.e(963),__webpack_require__.e(426)]).then((function(){return function(){return __webpack_require__(81963)}}))}))},94925:function(){return loadSingletonVersionCheckFallback("default","@idg/idg",[4,2,12,59],(function(){return Promise.all([__webpack_require__.e(343),__webpack_require__.e(979),__webpack_require__.e(654)]).then((function(){return function(){return __webpack_require__(93343)}}))}))}},chunkMapping={29:[65029],78:[64078],334:[99350],426:[69426],735:[9735],904:[42921],939:[19589,70175,94925],979:[12243,22791,40760,52090,68212,68368,82897,83435,84351]},__webpack_require__.f.consumes=function(chunkId,promises){__webpack_require__.o(chunkMapping,chunkId)&&chunkMapping[chunkId].forEach((function(id){if(__webpack_require__.o(installedModules,id))return promises.push(installedModules[id]);var onFactory=function(factory){installedModules[id]=0,__webpack_require__.m[id]=function(module){delete __webpack_require__.c[id],module.exports=factory()}},onError=function(error){delete installedModules[id],__webpack_require__.m[id]=function(module){throw delete __webpack_require__.c[id],error}};try{var promise=moduleToHandlerMapping[id]();promise.then?promises.push(installedModules[id]=promise.then(onFactory).catch(onError)):onFactory(promise)}catch(e){onError(e)}}))},function(){var installedChunks={179:0};__webpack_require__.f.j=function(chunkId,promises){var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(/^(29|426|735|78|979)$/.test(chunkId))installedChunks[chunkId]=0;else{var promise=new Promise((function(resolve,reject){installedChunkData=installedChunks[chunkId]=[resolve,reject]}));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(function(event){if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}};var webpackJsonpCallback=function(parentChunkLoadingFunction,data){var moduleId,chunkId,chunkIds=data[0],moreModules=data[1],runtime=data[2],i=0;if(chunkIds.some((function(id){return 0!==installedChunks[id]}))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0},chunkLoadingGlobal=self.webpackChunk_idg_project_name=self.webpackChunk_idg_project_name||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))}(),__webpack_require__.nc=void 0;__webpack_require__(83521)}();