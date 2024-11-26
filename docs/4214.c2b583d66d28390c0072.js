"use strict";(self.webpackChunkreact_redux_arcgis_boilerplate=self.webpackChunkreact_redux_arcgis_boilerplate||[]).push([[618,4214],{90618:function(e,a,r){r.d(a,{c:function(){return t},g:function(){return n}});var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}},64214:function(e,a,r){r.r(a),r.d(a,{a:function(){return u}});var t,n=r(90618),i={exports:{}};const o=(0,n.g)(function(){return t||(t=1,e=i,a="undefined"!=typeof document?document.currentScript?.src:void 0,r=function(e={}){var r,t,i=Object.assign({},e),o=new Promise(((e,a)=>{r=e,t=a})),u=Object.assign({},i),s="./this.program",c="";"undefined"!=typeof document&&document.currentScript&&(c=document.currentScript.src),a&&(c=a),c=c.startsWith("blob:")?"":c.substr(0,c.replace(/[?#].*/,"").lastIndexOf("/")+1);var l,f=i.print||void 0,h=i.printErr||void 0;Object.assign(i,u),u=null,i.thisProgram&&(s=i.thisProgram),i.wasmBinary&&(l=i.wasmBinary);var d,p,v,g,m,y,w,b,$,A,T,C=!1;function P(){var e=d.buffer;i.HEAP8=p=new Int8Array(e),i.HEAP16=g=new Int16Array(e),i.HEAPU8=v=new Uint8Array(e),i.HEAPU16=m=new Uint16Array(e),i.HEAP32=y=new Int32Array(e),i.HEAPU32=w=new Uint32Array(e),i.HEAPF32=b=new Float32Array(e),i.HEAPF64=T=new Float64Array(e),i.HEAP64=$=new BigInt64Array(e),i.HEAPU64=A=new BigUint64Array(e)}var W=[],O=[],k=[];function E(){var e=i.preRun.shift();W.unshift(e)}var j=0,S=null;function F(e){throw i.onAbort?.(e),h(e="Aborted("+e+")"),C=!0,e=new WebAssembly.RuntimeError(e+". Build with -sASSERTIONS for more info."),t(e),e}var M,_=e=>e.startsWith("data:application/octet-stream;base64,");function D(e){if(e==M&&l)return new Uint8Array(l);throw"both async and sync fetching of the wasm failed"}function I(e,a,r){return function(e){return l||"function"!=typeof fetch?Promise.resolve().then((()=>D(e))):fetch(e,{credentials:"same-origin"}).then((a=>{if(!a.ok)throw`failed to load wasm binary file at '${e}'`;return a.arrayBuffer()})).catch((()=>D(e)))}(e).then((e=>WebAssembly.instantiate(e,a))).then(r,(e=>{h(`failed to asynchronously prepare wasm: ${e}`),F(e)}))}var x=e=>{for(;0<e.length;)e.shift()(i)};class R{constructor(e){this.ca=e-24}}var U={},H=e=>{for(;e.length;){var a=e.pop();e.pop()(a)}};function Y(e){return this.fromWireType(w[e>>2])}var B,V,z,q={},N={},L={},G=(e,a,r)=>{function t(a){if((a=r(a)).length!==e.length)throw new B("Mismatched type converter count");for(var t=0;t<e.length;++t)Z(e[t],a[t])}e.forEach((function(e){L[e]=a}));var n=Array(a.length),i=[],o=0;a.forEach(((e,a)=>{N.hasOwnProperty(e)?n[a]=N[e]:(i.push(e),q.hasOwnProperty(e)||(q[e]=[]),q[e].push((()=>{n[a]=N[e],++o===i.length&&t(n)})))})),0===i.length&&t(n)},J=e=>{if(null===e)return"null";var a=typeof e;return"object"===a||"array"===a||"function"===a?e.toString():""+e},X=e=>{for(var a="";v[e];)a+=V[v[e++]];return a};function Z(e,a,r={}){if(!("argPackAdvance"in a))throw new TypeError("registerType registeredInstance requires argPackAdvance");return function(e,a,r={}){var t=a.name;if(!e)throw new z(`type "${t}" must have a positive integer typeid pointer`);if(N.hasOwnProperty(e)){if(r.Ma)return;throw new z(`Cannot register type '${t}' twice`)}N[e]=a,delete L[e],q.hasOwnProperty(e)&&(a=q[e],delete q[e],a.forEach((e=>e())))}(e,a,r)}var K,Q=(e,a,r)=>{switch(a){case 1:return r?e=>p[e]:e=>v[e];case 2:return r?e=>g[e>>1]:e=>m[e>>1];case 4:return r?e=>y[e>>2]:e=>w[e>>2];case 8:return r?e=>$[e>>3]:e=>A[e>>3];default:throw new TypeError(`invalid integer width (${a}): ${e}`)}},ee=e=>{throw new z(e.aa.da.ba.name+" instance already deleted")},ae=!1,re=()=>{},te=(e,a,r)=>a===r?e:void 0===r.ga||null===(e=te(e,a,r.ga))?null:r.Fa(e),ne={},ie=[],oe=()=>{for(;ie.length;){var e=ie.pop();e.aa.qa=!1,e.delete()}},ue={},se=(e,a)=>{if(!a.da||!a.ca)throw new B("makeClassHandle requires ptr and ptrType");if(!!a.ia!=!!a.fa)throw new B("Both smartPtrType and smartPtr must be specified");return a.count={value:1},ce(Object.create(e,{aa:{value:a,writable:!0}}))},ce=e=>"undefined"==typeof FinalizationRegistry?(ce=e=>e,e):(ae=new FinalizationRegistry((e=>{--(e=e.aa).count.value,0===e.count.value&&(e.fa?e.ia.ja(e.fa):e.da.ba.ja(e.ca))})),re=e=>{ae.unregister(e)},(ce=e=>{var a=e.aa;return a.fa&&ae.register(e,{aa:a},e),e})(e));function le(){}var fe=(e,a)=>Object.defineProperty(a,"name",{value:e}),he=(e,a,r)=>{if(void 0===e[a].ea){var t=e[a];e[a]=function(...t){if(!e[a].ea.hasOwnProperty(t.length))throw new z(`Function '${r}' called with an invalid number of arguments (${t.length}) - expects one of (${e[a].ea})!`);return e[a].ea[t.length].apply(this,t)},e[a].ea=[],e[a].ea[t.pa]=t}},de=(e,a,r)=>{if(i.hasOwnProperty(e)){if(void 0===r||void 0!==i[e].ea&&void 0!==i[e].ea[r])throw new z(`Cannot register public name '${e}' twice`);if(he(i,e,e),i.hasOwnProperty(r))throw new z(`Cannot register multiple overloads of a function with the same number of arguments (${r})!`);i[e].ea[r]=a}else i[e]=a,void 0!==r&&(i[e].Za=r)};function pe(e,a,r,t,n,i,o,u){this.name=e,this.constructor=a,this.la=r,this.ja=t,this.ga=n,this.Ha=i,this.sa=o,this.Fa=u,this.Oa=[]}var ve=(e,a,r)=>{for(;a!==r;){if(!a.sa)throw new z(`Expected null or instance of ${r.name}, got an instance of ${a.name}`);e=a.sa(e),a=a.ga}return e};function ge(e,a){if(null===a){if(this.ya)throw new z(`null is not a valid ${this.name}`);return 0}if(!a.aa)throw new z(`Cannot pass "${J(a)}" as a ${this.name}`);if(!a.aa.ca)throw new z(`Cannot pass deleted object as a pointer of type ${this.name}`);return ve(a.aa.ca,a.aa.da.ba,this.ba)}function me(e,a){if(null===a){if(this.ya)throw new z(`null is not a valid ${this.name}`);if(this.va){var r=this.za();return null!==e&&e.push(this.ja,r),r}return 0}if(!a||!a.aa)throw new z(`Cannot pass "${J(a)}" as a ${this.name}`);if(!a.aa.ca)throw new z(`Cannot pass deleted object as a pointer of type ${this.name}`);if(!this.ua&&a.aa.da.ua)throw new z(`Cannot convert argument of type ${a.aa.ia?a.aa.ia.name:a.aa.da.name} to parameter type ${this.name}`);if(r=ve(a.aa.ca,a.aa.da.ba,this.ba),this.va){if(void 0===a.aa.fa)throw new z("Passing raw pointer to smart pointer is illegal");switch(this.Ta){case 0:if(a.aa.ia!==this)throw new z(`Cannot convert argument of type ${a.aa.ia?a.aa.ia.name:a.aa.da.name} to parameter type ${this.name}`);r=a.aa.fa;break;case 1:r=a.aa.fa;break;case 2:if(a.aa.ia===this)r=a.aa.fa;else{var t=a.clone();r=this.Pa(r,Ie((()=>t.delete()))),null!==e&&e.push(this.ja,r)}break;default:throw new z("Unsupporting sharing policy")}}return r}function ye(e,a){if(null===a){if(this.ya)throw new z(`null is not a valid ${this.name}`);return 0}if(!a.aa)throw new z(`Cannot pass "${J(a)}" as a ${this.name}`);if(!a.aa.ca)throw new z(`Cannot pass deleted object as a pointer of type ${this.name}`);if(a.aa.da.ua)throw new z(`Cannot convert argument of type ${a.aa.da.name} to parameter type ${this.name}`);return ve(a.aa.ca,a.aa.da.ba,this.ba)}function we(e,a,r,t,n,i,o,u,s,c,l){this.name=e,this.ba=a,this.ya=r,this.ua=t,this.va=n,this.Na=i,this.Ta=o,this.Da=u,this.za=s,this.Pa=c,this.ja=l,n||void 0!==a.ga?this.toWireType=me:(this.toWireType=t?ge:ye,this.ha=null)}var be,$e,Ae=(e,a,r)=>{if(!i.hasOwnProperty(e))throw new B("Replacing nonexistent public symbol");void 0!==i[e].ea&&void 0!==r?i[e].ea[r]=a:(i[e]=a,i[e].pa=r)},Te=[],Ce=(e,a)=>{e=X(e);var r=Te[a];if(r||(a>=Te.length&&(Te.length=a+1),Te[a]=r=be.get(a)),"function"!=typeof r)throw new z(`unknown function pointer with signature ${e}: ${a}`);return r},Pe=e=>{e=ya(e);var a=X(e);return ba(e),a},We=(e,a)=>{var r=[],t={};throw a.forEach((function e(a){t[a]||N[a]||(L[a]?L[a].forEach(e):(r.push(a),t[a]=!0))})),new $e(`${e}: `+r.map(Pe).join([", "]))};function Oe(e,a,r,t,n){var i=a.length;if(2>i)throw new z("argTypes array size mismatch! Must at least get return value and 'this' types!");var o=null!==a[1]&&null!==r,u=function(e){for(var a=1;a<e.length;++a)if(null!==e[a]&&void 0===e[a].ha)return!0;return!1}(a),s="void"!==a[0].name,c=i-2,l=Array(c),f=[],h=[];return fe(e,(function(...r){if(r.length!==c)throw new z(`function ${e} called with ${r.length} arguments, expected ${c}`);if(h.length=0,f.length=o?2:1,f[0]=n,o){var i=a[1].toWireType(h,this);f[1]=i}for(var d=0;d<c;++d)l[d]=a[d+2].toWireType(h,r[d]),f.push(l[d]);if(r=t(...f),u)H(h);else for(d=o?1:2;d<a.length;d++){var p=1===d?i:l[d-2];null!==a[d].ha&&a[d].ha(p)}return s?a[0].fromWireType(r):void 0}))}var ke,Ee=(e,a)=>{for(var r=[],t=0;t<e;t++)r.push(w[a+4*t>>2]);return r},je=e=>{const a=(e=e.trim()).indexOf("(");return-1!==a?e.substr(0,a):e},Se=(e,a,r)=>{if(!(e instanceof Object))throw new z(`${r} with invalid "this": ${e}`);if(!(e instanceof a.ba.constructor))throw new z(`${r} incompatible with "this" of type ${e.constructor.name}`);if(!e.aa.ca)throw new z(`cannot call emscripten binding method ${r} on deleted object`);return ve(e.aa.ca,e.aa.da.ba,a.ba)},Fe=[],Me=[],_e=e=>{9<e&&0==--Me[e+1]&&(Me[e]=void 0,Fe.push(e))},De=e=>{if(!e)throw new z("Cannot use deleted val. handle = "+e);return Me[e]},Ie=e=>{switch(e){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:const a=Fe.pop()||Me.length;return Me[a]=e,Me[a+1]=1,a}},xe={name:"emscripten::val",fromWireType:e=>{var a=De(e);return _e(e),a},toWireType:(e,a)=>Ie(a),argPackAdvance:8,readValueFromPointer:Y,ha:null},Re=(e,a,r)=>{switch(a){case 1:return r?function(e){return this.fromWireType(p[e])}:function(e){return this.fromWireType(v[e])};case 2:return r?function(e){return this.fromWireType(g[e>>1])}:function(e){return this.fromWireType(m[e>>1])};case 4:return r?function(e){return this.fromWireType(y[e>>2])}:function(e){return this.fromWireType(w[e>>2])};default:throw new TypeError(`invalid integer width (${a}): ${e}`)}},Ue=(e,a)=>{var r=N[e];if(void 0===r)throw e=`${a} has unknown type ${Pe(e)}`,new z(e);return r},He=(e,a)=>{switch(a){case 4:return function(e){return this.fromWireType(b[e>>2])};case 8:return function(e){return this.fromWireType(T[e>>3])};default:throw new TypeError(`invalid float width (${a}): ${e}`)}},Ye=(e,a,r,t)=>{if(0<t){t=r+t-1;for(var n=0;n<e.length;++n){var i=e.charCodeAt(n);if(55296<=i&&57343>=i&&(i=65536+((1023&i)<<10)|1023&e.charCodeAt(++n)),127>=i){if(r>=t)break;a[r++]=i}else{if(2047>=i){if(r+1>=t)break;a[r++]=192|i>>6}else{if(65535>=i){if(r+2>=t)break;a[r++]=224|i>>12}else{if(r+3>=t)break;a[r++]=240|i>>18,a[r++]=128|i>>12&63}a[r++]=128|i>>6&63}a[r++]=128|63&i}}a[r]=0}},Be=e=>{for(var a=0,r=0;r<e.length;++r){var t=e.charCodeAt(r);127>=t?a++:2047>=t?a+=2:55296<=t&&57343>=t?(a+=4,++r):a+=3}return a},Ve="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0,ze=(e,a,r)=>{var t=a+r;for(r=a;e[r]&&!(r>=t);)++r;if(16<r-a&&e.buffer&&Ve)return Ve.decode(e.subarray(a,r));for(t="";a<r;){var n=e[a++];if(128&n){var i=63&e[a++];if(192==(224&n))t+=String.fromCharCode((31&n)<<6|i);else{var o=63&e[a++];65536>(n=224==(240&n)?(15&n)<<12|i<<6|o:(7&n)<<18|i<<12|o<<6|63&e[a++])?t+=String.fromCharCode(n):(n-=65536,t+=String.fromCharCode(55296|n>>10,56320|1023&n))}}else t+=String.fromCharCode(n)}return t},qe="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0,Ne=(e,a)=>{for(var r=e>>1,t=r+a/2;!(r>=t)&&m[r];)++r;if(32<(r<<=1)-e&&qe)return qe.decode(v.subarray(e,r));for(r="",t=0;!(t>=a/2);++t){var n=g[e+2*t>>1];if(0==n)break;r+=String.fromCharCode(n)}return r},Le=(e,a,r)=>{if(r??=2147483647,2>r)return 0;var t=a;r=(r-=2)<2*e.length?r/2:e.length;for(var n=0;n<r;++n)g[a>>1]=e.charCodeAt(n),a+=2;return g[a>>1]=0,a-t},Ge=e=>2*e.length,Je=(e,a)=>{for(var r=0,t="";!(r>=a/4);){var n=y[e+4*r>>2];if(0==n)break;++r,65536<=n?(n-=65536,t+=String.fromCharCode(55296|n>>10,56320|1023&n)):t+=String.fromCharCode(n)}return t},Xe=(e,a,r)=>{if(r??=2147483647,4>r)return 0;var t=a;r=t+r-4;for(var n=0;n<e.length;++n){var i=e.charCodeAt(n);if(55296<=i&&57343>=i&&(i=65536+((1023&i)<<10)|1023&e.charCodeAt(++n)),y[a>>2]=i,(a+=4)+4>r)break}return y[a>>2]=0,a-t},Ze=e=>{for(var a=0,r=0;r<e.length;++r){var t=e.charCodeAt(r);55296<=t&&57343>=t&&++r,a+=4}return a},Ke=(e,a,r)=>{var t=[];return e=e.toWireType(t,r),t.length&&(w[a>>2]=Ie(t)),e},Qe=[],ea={},aa=e=>{var a=ea[e];return void 0===a?X(e):a},ra=()=>{function e(e){e.$$$embind_global$$$=e;var a="object"==typeof $$$embind_global$$$&&e.$$$embind_global$$$==e;return a||delete e.$$$embind_global$$$,a}if("object"==typeof globalThis)return globalThis;if("object"==typeof $$$embind_global$$$)return $$$embind_global$$$;if("object"==typeof n.c&&e(n.c)?$$$embind_global$$$=n.c:"object"==typeof self&&e(self)&&($$$embind_global$$$=self),"object"==typeof $$$embind_global$$$)return $$$embind_global$$$;throw Error("unable to get global object.")},ta=Reflect.construct,na={},ia=()=>{if(!ke){var e,a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:s||"./this.program"};for(e in na)void 0===na[e]?delete a[e]:a[e]=na[e];var r=[];for(e in a)r.push(`${e}=${a[e]}`);ke=r}return ke},oa=[null,[],[]],ua=e=>0==e%4&&(0!=e%100||0==e%400),sa=[31,29,31,30,31,30,31,31,30,31,30,31],ca=[31,28,31,30,31,30,31,31,30,31,30,31];var la,fa,ha=(e,a,r,t)=>{function n(e,a,r){for(e="number"==typeof e?e.toString():e||"";e.length<a;)e=r[0]+e;return e}function i(e,a){return n(e,a,"0")}function o(e,a){function r(e){return 0>e?-1:0<e?1:0}var t;return 0===(t=r(e.getFullYear()-a.getFullYear()))&&0===(t=r(e.getMonth()-a.getMonth()))&&(t=r(e.getDate()-a.getDate())),t}function u(e){switch(e.getDay()){case 0:return new Date(e.getFullYear()-1,11,29);case 1:return e;case 2:return new Date(e.getFullYear(),0,3);case 3:return new Date(e.getFullYear(),0,2);case 4:return new Date(e.getFullYear(),0,1);case 5:return new Date(e.getFullYear()-1,11,31);case 6:return new Date(e.getFullYear()-1,11,30)}}function s(e){var a=e.na;for(e=new Date(new Date(e.oa+1900,0,1).getTime());0<a;){var r=e.getMonth(),t=(ua(e.getFullYear())?sa:ca)[r];if(!(a>t-e.getDate())){e.setDate(e.getDate()+a);break}a-=t-e.getDate()+1,e.setDate(1),11>r?e.setMonth(r+1):(e.setMonth(0),e.setFullYear(e.getFullYear()+1))}return r=new Date(e.getFullYear()+1,0,4),a=u(new Date(e.getFullYear(),0,4)),r=u(r),0>=o(a,e)?0>=o(r,e)?e.getFullYear()+1:e.getFullYear():e.getFullYear()-1}var c=w[t+40>>2];for(var l in t={Wa:y[t>>2],Va:y[t+4>>2],wa:y[t+8>>2],Aa:y[t+12>>2],xa:y[t+16>>2],oa:y[t+20>>2],ka:y[t+24>>2],na:y[t+28>>2],$a:y[t+32>>2],Ua:y[t+36>>2],Xa:c&&c?ze(v,c):""},r=r?ze(v,r):"",c={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"})r=r.replace(new RegExp(l,"g"),c[l]);var f="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),h="January February March April May June July August September October November December".split(" ");for(l in c={"%a":e=>f[e.ka].substring(0,3),"%A":e=>f[e.ka],"%b":e=>h[e.xa].substring(0,3),"%B":e=>h[e.xa],"%C":e=>i((e.oa+1900)/100|0,2),"%d":e=>i(e.Aa,2),"%e":e=>n(e.Aa,2," "),"%g":e=>s(e).toString().substring(2),"%G":s,"%H":e=>i(e.wa,2),"%I":e=>(0==(e=e.wa)?e=12:12<e&&(e-=12),i(e,2)),"%j":e=>{for(var a=0,r=0;r<=e.xa-1;a+=(ua(e.oa+1900)?sa:ca)[r++]);return i(e.Aa+a,3)},"%m":e=>i(e.xa+1,2),"%M":e=>i(e.Va,2),"%n":()=>"\n","%p":e=>0<=e.wa&&12>e.wa?"AM":"PM","%S":e=>i(e.Wa,2),"%t":()=>"\t","%u":e=>e.ka||7,"%U":e=>i(Math.floor((e.na+7-e.ka)/7),2),"%V":e=>{var a=Math.floor((e.na+7-(e.ka+6)%7)/7);if(2>=(e.ka+371-e.na-2)%7&&a++,a)53==a&&(4==(r=(e.ka+371-e.na)%7)||3==r&&ua(e.oa)||(a=1));else{a=52;var r=(e.ka+7-e.na-1)%7;(4==r||5==r&&ua(e.oa%400-1))&&a++}return i(a,2)},"%w":e=>e.ka,"%W":e=>i(Math.floor((e.na+7-(e.ka+6)%7)/7),2),"%y":e=>(e.oa+1900).toString().substring(2),"%Y":e=>e.oa+1900,"%z":e=>{var a=0<=(e=e.Ua);return e=Math.abs(e)/60,(a?"+":"-")+String("0000"+(e/60*100+e%60)).slice(-4)},"%Z":e=>e.Xa,"%%":()=>"%"},r=r.replace(/%%/g,"\0\0"),c)r.includes(l)&&(r=r.replace(new RegExp(l,"g"),c[l](t)));return(l=function(e){var a=Array(Be(e)+1);return Ye(e,a,0,a.length),a}(r=r.replace(/\0\0/g,"%"))).length>a?0:(p.set(l,e),l.length-1)};B=i.InternalError=class extends Error{constructor(e){super(e),this.name="InternalError"}};for(var da=Array(256),pa=0;256>pa;++pa)da[pa]=String.fromCharCode(pa);V=da,z=i.BindingError=class extends Error{constructor(e){super(e),this.name="BindingError"}},Object.assign(le.prototype,{isAliasOf:function(e){if(!(this instanceof le&&e instanceof le))return!1;var a=this.aa.da.ba,r=this.aa.ca;e.aa=e.aa;var t=e.aa.da.ba;for(e=e.aa.ca;a.ga;)r=a.sa(r),a=a.ga;for(;t.ga;)e=t.sa(e),t=t.ga;return a===t&&r===e},clone:function(){if(this.aa.ca||ee(this),this.aa.ra)return this.aa.count.value+=1,this;var e=ce,a=Object,r=a.create,t=Object.getPrototypeOf(this),n=this.aa;return(e=e(r.call(a,t,{aa:{value:{count:n.count,qa:n.qa,ra:n.ra,ca:n.ca,da:n.da,fa:n.fa,ia:n.ia}}}))).aa.count.value+=1,e.aa.qa=!1,e},delete(){if(this.aa.ca||ee(this),this.aa.qa&&!this.aa.ra)throw new z("Object already scheduled for deletion");re(this);var e=this.aa;--e.count.value,0===e.count.value&&(e.fa?e.ia.ja(e.fa):e.da.ba.ja(e.ca)),this.aa.ra||(this.aa.fa=void 0,this.aa.ca=void 0)},isDeleted:function(){return!this.aa.ca},deleteLater:function(){if(this.aa.ca||ee(this),this.aa.qa&&!this.aa.ra)throw new z("Object already scheduled for deletion");return ie.push(this),1===ie.length&&K&&K(oe),this.aa.qa=!0,this}}),i.getInheritedInstanceCount=()=>Object.keys(ue).length,i.getLiveInheritedInstances=()=>{var e,a=[];for(e in ue)ue.hasOwnProperty(e)&&a.push(ue[e]);return a},i.flushPendingDeletes=oe,i.setDelayFunction=e=>{K=e,ie.length&&K&&K(oe)},Object.assign(we.prototype,{Ia(e){return this.Da&&(e=this.Da(e)),e},Ba(e){this.ja?.(e)},argPackAdvance:8,readValueFromPointer:Y,fromWireType:function(e){function a(){return this.va?se(this.ba.la,{da:this.Na,ca:r,ia:this,fa:e}):se(this.ba.la,{da:this,ca:e})}var r=this.Ia(e);if(!r)return this.Ba(e),null;var t=((e,a)=>{if(void 0===a)throw new z("ptr should not be undefined");for(;e.ga;)a=e.sa(a),e=e.ga;return ue[a]})(this.ba,r);if(void 0!==t)return 0===t.aa.count.value?(t.aa.ca=r,t.aa.fa=e,t.clone()):(t=t.clone(),this.Ba(e),t);if(t=this.ba.Ha(r),!(t=ne[t]))return a.call(this);t=this.ua?t.Ea:t.pointerType;var n=te(r,this.ba,t.ba);return null===n?a.call(this):this.va?se(t.ba.la,{da:t,ca:n,ia:this,fa:e}):se(t.ba.la,{da:t,ca:n})}}),$e=i.UnboundTypeError=(la=Error,(fa=fe("UnboundTypeError",(function(e){this.name="UnboundTypeError",this.message=e,void 0!==(e=Error(e).stack)&&(this.stack=this.toString()+"\n"+e.replace(/^Error(:[^\n]*)?\n/,""))}))).prototype=Object.create(la.prototype),fa.prototype.constructor=fa,fa.prototype.toString=function(){return void 0===this.message?this.name:`${this.name}: ${this.message}`},fa),Me.push(0,1,void 0,1,null,1,!0,1,!1,1),i.count_emval_handles=()=>Me.length/2-5-Fe.length;var va,ga={m:(e,a,r)=>{var t=new R(e);throw w[t.ca+16>>2]=0,w[t.ca+4>>2]=a,w[t.ca+8>>2]=r,e},M:()=>{F("")},r:e=>{var a=U[e];delete U[e];var r=a.za,t=a.ja,n=a.Ca,i=n.map((e=>e.La)).concat(n.map((e=>e.Ra)));G([e],i,(e=>{var i={};return n.forEach(((a,r)=>{var t=e[r],o=a.Ja,u=a.Ka,s=e[r+n.length],c=a.Qa,l=a.Sa;i[a.Ga]={read:e=>t.fromWireType(o(u,e)),write:(e,a)=>{var r=[];c(l,e,s.toWireType(r,a)),H(r)}}})),[{name:a.name,fromWireType:e=>{var a,r={};for(a in i)r[a]=i[a].read(e);return t(e),r},toWireType:(e,a)=>{for(var n in i)if(!(n in a))throw new TypeError(`Missing field: "${n}"`);var o=r();for(n in i)i[n].write(o,a[n]);return null!==e&&e.push(t,o),o},argPackAdvance:8,readValueFromPointer:Y,ha:t}]}))},E:(e,a,r)=>{Z(e,{name:a=X(a),fromWireType:e=>e,toWireType:function(e,a){if("bigint"!=typeof a&&"number"!=typeof a)throw new TypeError(`Cannot convert "${J(a)}" to ${this.name}`);return"number"==typeof a&&(a=BigInt(a)),a},argPackAdvance:8,readValueFromPointer:Q(a,r,-1==a.indexOf("u")),ha:null})},S:(e,a,r,t)=>{Z(e,{name:a=X(a),fromWireType:function(e){return!!e},toWireType:function(e,a){return a?r:t},argPackAdvance:8,readValueFromPointer:function(e){return this.fromWireType(v[e])},ha:null})},f:(e,a,r,t,n,i,o,u,s,c,l,f,h)=>{l=X(l),i=Ce(n,i),u&&=Ce(o,u),c&&=Ce(s,c),h=Ce(f,h);var d=(e=>{if(void 0===e)return"_unknown";var a=(e=e.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return 48<=a&&57>=a?`_${e}`:e})(l);de(d,(function(){We(`Cannot construct ${l} due to unbound types`,[t])})),G([e,a,r],t?[t]:[],(a=>{if(a=a[0],t)var r=a.ba,n=r.la;else n=le.prototype;a=fe(l,(function(...e){if(Object.getPrototypeOf(this)!==o)throw new z("Use 'new' to construct "+l);if(void 0===f.ma)throw new z(l+" has no accessible constructor");var a=f.ma[e.length];if(void 0===a)throw new z(`Tried to invoke ctor of ${l} with invalid number of parameters (${e.length}) - expected (${Object.keys(f.ma).toString()}) parameters instead!`);return a.apply(this,e)}));var o=Object.create(n,{constructor:{value:a}});a.prototype=o;var s,f=new pe(l,a,o,h,r,i,u,c);return f.ga&&((s=f.ga).ta??(s.ta=[]),f.ga.ta.push(f)),r=new we(l,f,!0,!1,!1),s=new we(l+"*",f,!1,!1,!1),n=new we(l+" const*",f,!1,!0,!1),ne[e]={pointerType:s,Ea:n},Ae(d,a),[r,s,n]}))},v:(e,a,r,t,n,i,o)=>{var u=Ee(r,t);a=X(a),a=je(a),i=Ce(n,i),G([],[e],(e=>{function t(){We(`Cannot call ${n} due to unbound types`,u)}var n=`${(e=e[0]).name}.${a}`;a.startsWith("@@")&&(a=Symbol[a.substring(2)]);var s=e.ba.constructor;return void 0===s[a]?(t.pa=r-1,s[a]=t):(he(s,a,n),s[a].ea[r-1]=t),G([],u,(t=>{if(t=Oe(n,[t[0],null].concat(t.slice(1)),null,i,o),void 0===s[a].ea?(t.pa=r-1,s[a]=t):s[a].ea[r-1]=t,e.ba.ta)for(const r of e.ba.ta)r.constructor.hasOwnProperty(a)||(r.constructor[a]=t);return[]})),[]}))},g:(e,a,r,t,n,i)=>{var o=Ee(a,r);n=Ce(t,n),G([],[e],(e=>{var r=`constructor ${(e=e[0]).name}`;if(void 0===e.ba.ma&&(e.ba.ma=[]),void 0!==e.ba.ma[a-1])throw new z(`Cannot register multiple constructors with identical number of parameters (${a-1}) for class '${e.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return e.ba.ma[a-1]=()=>{We(`Cannot construct ${e.name} due to unbound types`,o)},G([],o,(t=>(t.splice(1,0,null),e.ba.ma[a-1]=Oe(r,t,null,n,i),[]))),[]}))},a:(e,a,r,t,n,i,o,u)=>{var s=Ee(r,t);a=X(a),a=je(a),i=Ce(n,i),G([],[e],(e=>{function t(){We(`Cannot call ${n} due to unbound types`,s)}var n=`${(e=e[0]).name}.${a}`;a.startsWith("@@")&&(a=Symbol[a.substring(2)]),u&&e.ba.Oa.push(a);var c=e.ba.la,l=c[a];return void 0===l||void 0===l.ea&&l.className!==e.name&&l.pa===r-2?(t.pa=r-2,t.className=e.name,c[a]=t):(he(c,a,n),c[a].ea[r-2]=t),G([],s,(t=>(t=Oe(n,t,e,i,o),void 0===c[a].ea?(t.pa=r-2,c[a]=t):c[a].ea[r-2]=t,[]))),[]}))},c:(e,a,r,t,n,i,o,u,s,c)=>{a=X(a),n=Ce(t,n),G([],[e],(e=>{var t=`${(e=e[0]).name}.${a}`,l={get(){We(`Cannot access ${t} due to unbound types`,[r,o])},enumerable:!0,configurable:!0};return l.set=s?()=>We(`Cannot access ${t} due to unbound types`,[r,o]):()=>{throw new z(t+" is a read-only property")},Object.defineProperty(e.ba.la,a,l),G([],s?[r,o]:[r],(r=>{var o=r[0],l={get(){var a=Se(this,e,t+" getter");return o.fromWireType(n(i,a))},enumerable:!0};if(s){s=Ce(u,s);var f=r[1];l.set=function(a){var r=Se(this,e,t+" setter"),n=[];s(c,r,f.toWireType(n,a)),H(n)}}return Object.defineProperty(e.ba.la,a,l),[]})),[]}))},R:e=>Z(e,xe),n:(e,a,r,t)=>{function n(){}a=X(a),n.values={},Z(e,{name:a,constructor:n,fromWireType:function(e){return this.constructor.values[e]},toWireType:(e,a)=>a.value,argPackAdvance:8,readValueFromPointer:Re(a,r,t),ha:null}),de(a,n)},e:(e,a,r)=>{var t=Ue(e,"enum");a=X(a),e=t.constructor,t=Object.create(t.constructor.prototype,{value:{value:r},constructor:{value:fe(`${t.name}_${a}`,(function(){}))}}),e.values[r]=t,e[a]=t},D:(e,a,r)=>{Z(e,{name:a=X(a),fromWireType:e=>e,toWireType:(e,a)=>a,argPackAdvance:8,readValueFromPointer:He(a,r),ha:null})},U:(e,a,r,t,n,i)=>{var o=Ee(a,r);e=X(e),e=je(e),n=Ce(t,n),de(e,(function(){We(`Cannot call ${e} due to unbound types`,o)}),a-1),G([],o,(r=>(Ae(e,Oe(e,[r[0],null].concat(r.slice(1)),null,n,i),a-1),[])))},w:(e,a,r,t,n)=>{if(a=X(a),-1===n&&(n=4294967295),n=e=>e,0===t){var i=32-8*r;n=e=>e<<i>>>i}var o=a.includes("unsigned")?function(e,a){return a>>>0}:function(e,a){return a};Z(e,{name:a,fromWireType:n,toWireType:o,argPackAdvance:8,readValueFromPointer:Q(a,r,0!==t),ha:null})},o:(e,a,r)=>{function t(e){return new n(p.buffer,w[e+4>>2],w[e>>2])}var n=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][a];Z(e,{name:r=X(r),fromWireType:t,argPackAdvance:8,readValueFromPointer:t},{Ma:!0})},t:e=>{Z(e,xe)},i:(e,a,r,t,n,i,o,u,s,c,l,f)=>{r=X(r),i=Ce(n,i),u=Ce(o,u),c=Ce(s,c),f=Ce(l,f),G([e],[a],(e=>(e=e[0],[new we(r,e.ba,!1,!1,!0,e,t,i,u,c,f)])))},F:(e,a)=>{var r="std::string"===(a=X(a));Z(e,{name:a,fromWireType:function(e){var a=w[e>>2],t=e+4;if(r)for(var n=t,i=0;i<=a;++i){var o=t+i;if(i==a||0==v[o]){if(n=n?ze(v,n,o-n):"",void 0===u)var u=n;else u+=String.fromCharCode(0),u+=n;n=o+1}}else{for(u=Array(a),i=0;i<a;++i)u[i]=String.fromCharCode(v[t+i]);u=u.join("")}return ba(e),u},toWireType:function(e,a){a instanceof ArrayBuffer&&(a=new Uint8Array(a));var t="string"==typeof a;if(!(t||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int8Array))throw new z("Cannot pass non-string to std::string");var n=r&&t?Be(a):a.length,i=wa(4+n+1),o=i+4;if(w[i>>2]=n,r&&t)Ye(a,v,o,n+1);else if(t)for(t=0;t<n;++t){var u=a.charCodeAt(t);if(255<u)throw ba(o),new z("String has UTF-16 code units that do not fit in 8 bits");v[o+t]=u}else for(t=0;t<n;++t)v[o+t]=a[t];return null!==e&&e.push(ba,i),i},argPackAdvance:8,readValueFromPointer:Y,ha(e){ba(e)}})},C:(e,a,r)=>{if(r=X(r),2===a)var t=Ne,n=Le,i=Ge,o=e=>m[e>>1];else 4===a&&(t=Je,n=Xe,i=Ze,o=e=>w[e>>2]);Z(e,{name:r,fromWireType:e=>{for(var r,n=w[e>>2],i=e+4,u=0;u<=n;++u){var s=e+4+u*a;u!=n&&0!=o(s)||(i=t(i,s-i),void 0===r?r=i:(r+=String.fromCharCode(0),r+=i),i=s+a)}return ba(e),r},toWireType:(e,t)=>{if("string"!=typeof t)throw new z(`Cannot pass non-string to C++ string type ${r}`);var o=i(t),u=wa(4+o+a);return w[u>>2]=o/a,n(t,u+4,o+a),null!==e&&e.push(ba,u),u},argPackAdvance:8,readValueFromPointer:Y,ha(e){ba(e)}})},s:(e,a,r,t,n,i)=>{U[e]={name:X(a),za:Ce(r,t),ja:Ce(n,i),Ca:[]}},j:(e,a,r,t,n,i,o,u,s,c)=>{U[e].Ca.push({Ga:X(a),La:r,Ja:Ce(t,n),Ka:i,Ra:o,Qa:Ce(u,s),Sa:c})},T:(e,a)=>{Z(e,{Ya:!0,name:a=X(a),argPackAdvance:0,fromWireType:()=>{},toWireType:()=>{}})},l:(e,a,r)=>(e=De(e),a=Ue(a,"emval::as"),Ke(a,r,e)),y:(e,a)=>(e=De(e),(a=Ue(a,"emval::as")).toWireType(null,e)),V:(e,a,r,t)=>(e=Qe[e])(null,a=De(a),r,t),B:(e,a,r,t,n)=>(e=Qe[e])(a=De(a),a[r=aa(r)],t,n),b:_e,H:e=>0===e?Ie(ra()):(e=aa(e),Ie(ra()[e])),A:(e,a,r)=>{var t=((e,a)=>{for(var r=Array(e),t=0;t<e;++t)r[t]=Ue(w[a+4*t>>2],"parameter "+t);return r})(e,a),n=t.shift();e--;var i=Array(e);return a=`methodCaller<(${t.map((e=>e.name)).join(", ")}) => ${n.name}>`,(e=>{var a=Qe.length;return Qe.push(e),a})(fe(a,((a,o,u,s)=>{for(var c=0,l=0;l<e;++l)i[l]=t[l].readValueFromPointer(s+c),c+=t[l].argPackAdvance;return a=1===r?ta(o,i):o.apply(a,i),Ke(n,u,a)})))},q:(e,a)=>(e=De(e),a=De(a),Ie(e[a])),h:e=>{9<e&&(Me[e+1]+=1)},I:(e,a)=>(e=De(e))instanceof De(a),u:e=>"number"==typeof(e=De(e)),x:e=>"string"==typeof(e=De(e)),G:()=>Ie([]),p:e=>Ie(aa(e)),k:e=>{var a=De(e);H(a),_e(e)},d:(e,a)=>(e=(e=Ue(e,"_emval_take_value")).readValueFromPointer(a),Ie(e)),z:e=>(e=De(e),Ie(typeof e)),N:e=>{var a=v.length;if(2147483648<(e>>>=0))return!1;for(var r=1;4>=r;r*=2){var t=a*(1+.2/r);t=Math.min(t,e+100663296);var n=Math;t=Math.max(e,t);e:{n=(n.min.call(n,2147483648,t+(65536-t%65536)%65536)-d.buffer.byteLength+65535)/65536;try{d.grow(n),P();var i=1;break e}catch(e){}i=void 0}if(i)return!0}return!1},K:(e,a)=>{var r=0;return ia().forEach(((t,n)=>{var i=a+r;for(n=w[e+4*n>>2]=i,i=0;i<t.length;++i)p[n++]=t.charCodeAt(i);p[n]=0,r+=t.length+1})),0},L:(e,a)=>{var r=ia();w[e>>2]=r.length;var t=0;return r.forEach((e=>t+=e.length+1)),w[a>>2]=t,0},Q:()=>52,P:function(){return 70},O:(e,a,r,t)=>{for(var n=0,i=0;i<r;i++){var o=w[a>>2],u=w[a+4>>2];a+=8;for(var s=0;s<u;s++){var c=v[o+s],l=oa[e];0===c||10===c?((1===e?f:h)(ze(l,0)),l.length=0):l.push(c)}n+=u}return w[t>>2]=n,0},J:(e,a,r,t)=>ha(e,a,r,t)},ma=function(){function e(e){return ma=e.exports,d=ma.W,P(),be=ma.$,O.unshift(ma.X),j--,i.monitorRunDependencies?.(j),0==j&&S&&(e=S,S=null,e()),ma}var a={a:ga};if(j++,i.monitorRunDependencies?.(j),i.instantiateWasm)try{return i.instantiateWasm(a,e)}catch(e){h(`Module.instantiateWasm callback failed with error: ${e}`),t(e)}return M||=_("arcgis-knowledge-client-core-simd.wasm")?"arcgis-knowledge-client-core-simd.wasm":i.locateFile?i.locateFile("arcgis-knowledge-client-core-simd.wasm",c):c+"arcgis-knowledge-client-core-simd.wasm",function(e,a){var r=M;return l||"function"!=typeof WebAssembly.instantiateStreaming||_(r)||"function"!=typeof fetch?I(r,e,a):fetch(r,{credentials:"same-origin"}).then((t=>WebAssembly.instantiateStreaming(t,e).then(a,(function(t){return h(`wasm streaming compile failed: ${t}`),h("falling back to ArrayBuffer instantiation"),I(r,e,a)}))))}(a,(function(a){e(a.instance)})).catch(t),{}}(),ya=e=>(ya=ma.Y)(e),wa=e=>(wa=ma.Z)(e),ba=e=>(ba=ma._)(e);function $a(){function e(){if(!va&&(va=!0,i.calledRun=!0,!C)){if(x(O),r(i),i.onRuntimeInitialized&&i.onRuntimeInitialized(),i.postRun)for("function"==typeof i.postRun&&(i.postRun=[i.postRun]);i.postRun.length;){var e=i.postRun.shift();k.unshift(e)}x(k)}}if(!(0<j)){if(i.preRun)for("function"==typeof i.preRun&&(i.preRun=[i.preRun]);i.preRun.length;)E();x(W),0<j||(i.setStatus?(i.setStatus("Running..."),setTimeout((function(){setTimeout((function(){i.setStatus("")}),1),e()}),1)):e())}}if(S=function e(){va||$a(),va||(S=e)},i.preInit)for("function"==typeof i.preInit&&(i.preInit=[i.preInit]);0<i.preInit.length;)i.preInit.pop()();return $a(),o},e.exports=r),i.exports;var e,a,r}()),u=Object.freeze(Object.defineProperty({__proto__:null,default:o},Symbol.toStringTag,{value:"Module"}))}}]);
//# sourceMappingURL=4214.c2b583d66d28390c0072.js.map