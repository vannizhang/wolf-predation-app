"use strict";(self.webpackChunkreact_redux_arcgis_boilerplate=self.webpackChunkreact_redux_arcgis_boilerplate||[]).push([[208],{40208:function(e,t,n){n.d(t,{previewWebStyleSymbol:function(){return l}});var i=n(38116),h=n(23572),a=n(21550),r=n(54866);function l(e,t,n){const l=e.thumbnail?.url;return l?(0,i.A)(l,{responseType:"image"}).then((e=>{const t=function(e,t){const n=!/\\.svg$/i.test(e.src)&&t?.disableUpsampling,i=Math.max(e.width,e.height);let r=null!=t?.maxSize?(0,h.Lz)(t.maxSize):a.CB.maxSize;n&&(r=Math.min(i,r));const l="number"==typeof t?.size?t?.size:null,s=Math.min(r,null!=l?(0,h.Lz)(l):i);if(s!==i){const t=0!==e.width&&0!==e.height?e.width/e.height:1;t>=1?(e.width=s,e.height=s/t):(e.width=s*t,e.height=s)}return e}(e.data,n);return n?.node?(n.node.appendChild(t),n.node):t})):(0,r.yG)(e).then((e=>e?t(e,n):null))}}}]);
//# sourceMappingURL=208.942d83d71ab10cad8431.js.map