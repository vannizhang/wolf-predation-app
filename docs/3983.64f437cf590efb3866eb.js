"use strict";(self.webpackChunkreact_redux_arcgis_boilerplate=self.webpackChunkreact_redux_arcgis_boilerplate||[]).push([[3983],{85012:function(e,t,n){function l(e){return e=e||globalThis.location.hostname,c.some((t=>null!=e?.match(t)))}function a(e,t){return e?(t=t||globalThis.location.hostname)?null!=t.match(r)||null!=t.match(s)?e.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(o)||null!=t.match(i)?e.replace("static.arcgis.com","staticqa.arcgis.com"):e:e:null}n.d(t,{EM:function(){return a},b5:function(){return l}});const r=/^devext\.arcgis\.com$/,o=/^qaext\.arcgis\.com$/,s=/^[\w-]*\.mapsdevext\.arcgis\.com$/,i=/^[\w-]*\.mapsqa\.arcgis\.com$/,c=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local\.esri\.com$/,r,o,/^jsapps\.esri\.com$/,s,i]},43983:function(e,t,n){n.d(t,{resolveWebStyleSymbol:function(){return f}});var l=n(3438),a=n(85012),r=n(62991),o=n(19759),s=n(83382),i=n(55714),c=n(68931),m=n(14176),u=n(40869),b=n(51431);function f(e,t,n,f){const p=e.name;return null==p?Promise.reject(new r.A("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference")):"Esri2DPointSymbolsStyle"===e.styleName?function(e,t,n){const l=u.jg.replaceAll(/\{SymbolName\}/gi,e),a=null!=t.portal?t.portal:s.A.getDefault();return(0,u.yA)(l,n).then((e=>{const t=(0,u.bo)(e.data);return(0,c.rS)(t,{portal:a,url:(0,o.An)((0,o.nM)(l)),origin:"portal-item"})}))}(p,t,f):(0,u.cF)(e,t,f).then((e=>function(e,t,n,f,p,y){const g=null!=n?.portal?n.portal:s.A.getDefault(),h={portal:g,url:(0,o.An)(e.baseUrl),origin:"portal-item"},d=function(e,t){return t.items.find((t=>t.name===e))}(t,e.data);if(!d){const e=`The symbol name '${t}' could not be found`;return Promise.reject(new r.A("symbolstyleutils:symbol-name-not-found",e,{symbolName:t}))}let w=(0,i.f)(p(d,f),h),A=d.thumbnail?.href??null;const $=d.thumbnail?.imageData;(0,a.b5)()&&(w=(0,a.EM)(w)??"",A=(0,a.EM)(A));const S={portal:g,url:(0,o.An)((0,o.nM)(w)),origin:"portal-item"};return(0,u.yA)(w,y).then((a=>{const r="cimRef"===f?(0,u.bo)(a.data):a.data,o=(0,c.rS)(r,S);if(o&&(0,l.wk)(o)){if(A){const e=(0,i.f)(A,h);o.thumbnail=new b.V({url:e})}else $&&(o.thumbnail=new b.V({url:`data:image/png;base64,${$}`}));e.styleUrl?o.styleOrigin=new m.A({portal:n.portal,styleUrl:e.styleUrl,name:t}):e.styleName&&(o.styleOrigin=new m.A({portal:n.portal,styleName:e.styleName,name:t}))}return o}))}(e,p,t,n,u.o5,f)))}}}]);
//# sourceMappingURL=3983.64f437cf590efb3866eb.js.map