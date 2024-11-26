"use strict";(self.webpackChunkreact_redux_arcgis_boilerplate=self.webpackChunkreact_redux_arcgis_boilerplate||[]).push([[7612],{27612:function(e,t,o){o.r(t),o.d(t,{default:function(){return R}});var r=o(82392),i=o(32083),s=o(38116),l=(o(3438),o(67214)),n=o(37623),a=o(19759),y=o(81482),p=(o(6273),o(80861),o(67498),o(25376)),u=o(26325),c=o(8e3),d=o(67488),h=o(45449),S=o(20923),m=o(4648),f=o(60368),g=o(51177),v=o(22111),_=o(9014),b=o(999),M=o(24826),C=o(11455),A=o(68231),Z=o(55736);const k=["atom","xml"],w={base:b.A,key:"type",typeMap:{"simple-line":M.A},errorContext:"symbol"},G={base:b.A,key:"type",typeMap:{"picture-marker":C.A,"simple-marker":A.A},errorContext:"symbol"},P={base:b.A,key:"type",typeMap:{"simple-fill":Z.A},errorContext:"symbol"};let x=class extends((0,S.dM)((0,g.J)((0,m.q)((0,f.A)((0,v.j)((0,l.P)(h.A))))))){constructor(...e){super(...e),this.description=null,this.fullExtent=null,this.legendEnabled=!0,this.lineSymbol=null,this.pointSymbol=null,this.polygonSymbol=null,this.operationalLayerType="GeoRSS",this.url=null,this.type="geo-rss"}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}readFeatureCollections(e,t){return t.featureCollection.layers.forEach((e=>{const t=e.layerDefinition.drawingInfo.renderer.symbol;t&&"esriSFS"===t.type&&t.outline?.style.includes("esriSFS")&&(t.outline.style="esriSLSSolid")})),t.featureCollection.layers}get hasPoints(){return this._hasGeometry("esriGeometryPoint")}get hasPolylines(){return this._hasGeometry("esriGeometryPolyline")}get hasPolygons(){return this._hasGeometry("esriGeometryPolygon")}get title(){const e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?(0,a.e7)(this.url,k)||"GeoRSS":e}set title(e){this._set("title",e)}load(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},e).catch(n.QP).then((()=>this._fetchService(t))).then((e=>{this.read(e,{origin:"service"})}))),Promise.resolve(this)}async hasDataChanged(){const e=await this._fetchService();return this.read(e,{origin:"service",ignoreDefaults:!0}),!0}async _fetchService(e){const t=this.spatialReference,{data:o}=await(0,s.A)(i.A.geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:(0,d.oT)(t)?void 0:t.wkid??JSON.stringify(t)},signal:e});return o}_hasGeometry(e){return this.featureCollections?.some((t=>t.featureSet?.geometryType===e&&t.featureSet.features?.length>0))??!1}};(0,r._)([(0,y.MZ)()],x.prototype,"description",void 0),(0,r._)([(0,y.MZ)()],x.prototype,"featureCollections",void 0),(0,r._)([(0,p.w)("service","featureCollections",["featureCollection.layers"])],x.prototype,"readFeatureCollections",null),(0,r._)([(0,y.MZ)({type:c.A,json:{name:"lookAtExtent"}})],x.prototype,"fullExtent",void 0),(0,r._)([(0,y.MZ)(_.id)],x.prototype,"id",void 0),(0,r._)([(0,y.MZ)(_.fV)],x.prototype,"legendEnabled",void 0),(0,r._)([(0,y.MZ)({types:w,json:{write:!0}})],x.prototype,"lineSymbol",void 0),(0,r._)([(0,y.MZ)({type:["show","hide"]})],x.prototype,"listMode",void 0),(0,r._)([(0,y.MZ)({types:G,json:{write:!0}})],x.prototype,"pointSymbol",void 0),(0,r._)([(0,y.MZ)({types:P,json:{write:!0}})],x.prototype,"polygonSymbol",void 0),(0,r._)([(0,y.MZ)({type:["GeoRSS"]})],x.prototype,"operationalLayerType",void 0),(0,r._)([(0,y.MZ)(_.OZ)],x.prototype,"url",void 0),(0,r._)([(0,y.MZ)({json:{origins:{service:{read:{source:"name",reader:e=>e||void 0}}}}})],x.prototype,"title",null),(0,r._)([(0,y.MZ)({readOnly:!0,json:{read:!1},value:"geo-rss"})],x.prototype,"type",void 0),x=(0,r._)([(0,u.$)("esri.layers.GeoRSSLayer")],x);const R=x}}]);
//# sourceMappingURL=7612.7ea9c06fce075e25c057.js.map