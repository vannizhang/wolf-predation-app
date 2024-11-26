"use strict";(self.webpackChunkreact_redux_arcgis_boilerplate=self.webpackChunkreact_redux_arcgis_boilerplate||[]).push([[7823],{12743:function(e,t,i){i.d(t,{g:function(){return d}});var r=i(82392),s=i(73783),a=i(80189),n=i(81482),o=(i(6273),i(80861),i(67498),i(26325)),h=i(84459),l=i(57179),p=i(22508);const u={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};let d=class extends s.A{constructor(e){super(e),this.floors=null,this.scale=0}destroy(){this.layer=null}get dynamicLayers(){if(!this.hasDynamicLayers)return null;const e=this.visibleSublayers.map((e=>{const t=(0,l.f)(this.floors,e);return e.toExportImageJSON(t)}));return e.length?JSON.stringify(e):null}get hasDynamicLayers(){return this.layer&&(0,p.Sk)(this.visibleSublayers,this.layer.serviceSublayers,this.layer.gdbVersion)}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.removeHandles("layer"),e&&this.addHandles([e.allSublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("sublayer-update",(e=>this.notifyChange(u[e.propertyName])))],"layer"))}get layers(){const e=this.visibleSublayers;return e?e.length?"show:"+e.map((e=>e.id)).join(","):"show:-1":null}get layerDefs(){const e=!!this.floors?.length,t=this.visibleSublayers.filter((t=>null!=t.definitionExpression||e&&null!=t.floorInfo));return t.length?JSON.stringify(t.reduce(((e,t)=>{const i=(0,l.f)(this.floors,t),r=(0,a.m)(i,t.definitionExpression);return null!=r&&(e[t.id]=r),e}),{})):null}get version(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers");const e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}get visibleSublayers(){const e=[];if(!this.layer)return e;const t=this.layer.sublayers,i=this.scale,r=t=>{t.visible&&(0===i||(0,h.zx)(i,t.minScale,t.maxScale))&&(t.sublayers?t.sublayers.forEach(r):e.unshift(t))};t&&t.forEach(r);const s=this._get("visibleSublayers");return!s||s.length!==e.length||s.some(((t,i)=>e[i]!==t))?e:s}toJSON(){const e=this.layer;let t={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?t.dynamicLayers=this.dynamicLayers:t={...t,layers:this.layers,layerDefs:this.layerDefs},t}};(0,r._)([(0,n.MZ)({readOnly:!0})],d.prototype,"dynamicLayers",null),(0,r._)([(0,n.MZ)()],d.prototype,"floors",void 0),(0,r._)([(0,n.MZ)({readOnly:!0})],d.prototype,"hasDynamicLayers",null),(0,r._)([(0,n.MZ)()],d.prototype,"layer",null),(0,r._)([(0,n.MZ)({readOnly:!0})],d.prototype,"layers",null),(0,r._)([(0,n.MZ)({readOnly:!0})],d.prototype,"layerDefs",null),(0,r._)([(0,n.MZ)({type:Number})],d.prototype,"scale",void 0),(0,r._)([(0,n.MZ)({readOnly:!0})],d.prototype,"version",null),(0,r._)([(0,n.MZ)({readOnly:!0})],d.prototype,"visibleSublayers",null),d=(0,r._)([(0,o.$)("esri.layers.support.ExportImageParameters")],d)},7198:function(e,t,i){i.d(t,{F:function(){return a}});i(3223),i(61090),i(15565),i(80861);var r=i(11895),s=i(6218);i(50831),i(33376);function a(e,t,i){if(null==e?.timeInfo)return null;const{datesInUnknownTimezone:a=!1,timeOffset:n,useViewTime:o}=e;let h=e.timeExtent;a&&(h=function(e){if(!e)return e;const{start:t,end:i}=e;return new s.A({start:null!=t?(0,r.S1)(t,t.getTimezoneOffset(),"minutes"):t,end:null!=i?(0,r.S1)(i,i.getTimezoneOffset(),"minutes"):i})}(h));let l=o?t&&h?t.intersection(h):t||h:h;return!l||l.isEmpty||l.isAllTime?l:(n&&(l=l.offset(-n.value,n.unit)),a&&(l=function(e){if(!e)return e;const{start:t,end:i}=e;return new s.A({start:null!=t?(0,r.S1)(t,-t.getTimezoneOffset(),"minutes"):t,end:null!=i?(0,r.S1)(i,-i.getTimezoneOffset(),"minutes"):i})}(l)),l.equals(i)?i:l)}},33376:function(e,t,i){i.d(t,{X:function(){return r}});const r=Symbol("WebScene")},3596:function(e,t,i){i.d(t,{l:function(){return n}});var r=i(97088),s=i(57122),a=i(47764);class n extends a.A{constructor(){super(...arguments),this._hasCrossfade=!1}get requiresDedicatedFBO(){return super.requiresDedicatedFBO||this._hasCrossfade}beforeRender(e){super.beforeRender(e),this._manageFade()}prepareRenderPasses(e){const t=e.registerRenderPass({name:"bitmap",brushes:[r.d.bitmap],target:()=>this.children,drawPhase:s.S5.MAP});return[...super.prepareRenderPasses(e),t]}_manageFade(){this.children.reduce(((e,t)=>e+(t.inFadeTransition?1:0)),0)>=2?(this.children.forEach((e=>e.blendFunction="additive")),this._hasCrossfade=!0):(this.children.forEach((e=>e.blendFunction="standard")),this._hasCrossfade=!1)}}},97823:function(e,t,i){i.r(t),i.d(t,{default:function(){return S}});var r=i(82392),s=i(80861),a=i(37623),n=i(61985),o=i(81482),h=(i(6273),i(67498),i(26325)),l=i(52796),p=i(3596),u=i(45515),d=i(70947),c=i(21109),m=i(7444),y=i(24775),g=i(12743),f=i(7198);const _=e=>{let t=class extends e{initialize(){this.exportImageParameters=new g.g({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get floors(){return this.view?.floors??null}get exportImageVersion(){return this.exportImageParameters?.commitProperty("version"),this.commitProperty("timeExtent"),this.commitProperty("floors"),(this._get("exportImageVersion")||0)+1}get timeExtent(){return(0,f.F)(this.layer,this.view?.timeExtent,this._get("timeExtent"))}canResume(){return!!super.canResume()&&!this.timeExtent?.isEmpty}};return(0,r._)([(0,o.MZ)()],t.prototype,"exportImageParameters",void 0),(0,r._)([(0,o.MZ)({readOnly:!0})],t.prototype,"floors",null),(0,r._)([(0,o.MZ)({readOnly:!0})],t.prototype,"exportImageVersion",null),(0,r._)([(0,o.MZ)()],t.prototype,"layer",void 0),(0,r._)([(0,o.MZ)()],t.prototype,"suspended",void 0),(0,r._)([(0,o.MZ)({readOnly:!0})],t.prototype,"timeExtent",null),t=(0,r._)([(0,h.$)("esri.views.layers.MapImageLayerView")],t),t};var x=i(30386),b=i(1045),v=i(17467);let M=class extends(_((0,x.A)((0,u.e)(y.A)))){constructor(){super(...arguments),this._highlightGraphics=new l.Y,this._updateHash=""}fetchPopupFeaturesAtLocation(e,t){return this._popupHighlightHelper.fetchPopupFeaturesAtLocation(e,t)}update(e){const t=`${this.exportImageVersion}/${e.state.id}/${e.pixelRatio}/${e.stationary}`;this._updateHash!==t&&(this._updateHash=t,this.strategy.update(e).catch((e=>{(0,a.zf)(e)||s.A.getLogger(this).error(e)})),e.stationary&&this._popupHighlightHelper.updateHighlightedFeatures(e.state.resolution)),this._highlightView.processUpdate(e)}attach(){const{imageMaxWidth:e,imageMaxHeight:t,version:i}=this.layer,r=i>=10.3,s=i>=10;this._bitmapContainer=new p.l,this.container.addChild(this._bitmapContainer),this._highlightView=new d.A({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new c.A(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1}),this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new b.Uh({createFetchPopupFeaturesQueryGeometry:(e,t)=>(0,v.V)(e,t,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(e,t)=>{this._highlightView.graphicUpdateHandler({graphic:e,property:t})},layerView:this,updatingHandles:this._updatingHandles}),this.strategy=new m.A({container:this._bitmapContainer,fetchSource:this.fetchImageBitmap.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:e,imageMaxHeight:t,imageRotationSupported:r,imageNormalizationSupported:s,hidpi:!0}),this.addAttachHandles((0,n.wB)((()=>this.exportImageVersion),(()=>this.requestUpdate()))),this.requestUpdate()}detach(){this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren(),this._highlightView.destroy(),this._popupHighlightHelper.destroy()}viewChange(){}moveEnd(){this.requestUpdate()}supportsSpatialReference(e){return this.layer.serviceSupportsSpatialReference(e)}async doRefresh(){this._updateHash="",this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,i,r){return this.layer.fetchImage(e,t,i,{timeExtent:this.timeExtent,floors:this.floors,...r})}fetchImageBitmap(e,t,i,r){return this.layer.fetchImageBitmap(e,t,i,{timeExtent:this.timeExtent,floors:this.floors,...r})}highlight(e){return this._popupHighlightHelper.highlight(e)}};(0,r._)([(0,o.MZ)()],M.prototype,"strategy",void 0),(0,r._)([(0,o.MZ)()],M.prototype,"updating",void 0),M=(0,r._)([(0,h.$)("esri.views.2d.layers.MapImageLayerView2D")],M);const S=M},7444:function(e,t,i){i.d(t,{A:function(){return E}});var r=i(82392),s=i(73783),a=(i(6273),i(37623)),n=i(81482),o=(i(80861),i(67498),i(26325)),h=i(2532),l=i(67488),p=i(26574);const u=Math.PI/180;function d(e){return e*u}function c(e,t){const i=d(t.rotation),r=Math.abs(Math.cos(i)),s=Math.abs(Math.sin(i)),[a,n]=t.size;return e[0]=Math.round(n*s+a*r),e[1]=Math.round(n*r+a*s),e}var m=i(97047),y=i(62516),g=i(39156);const f=(0,h.vt)(),_=[0,0],x=new g.A(0,0,0,0),b=2048,v=2048,M=!1,S=!1,w=!1;let P=class extends s.A{constructor(e){super(e),this._imagePromise=null,this.bitmaps=[],this.hidpi=w,this.imageMaxWidth=b,this.imageMaxHeight=v,this.imageRotationSupported=M,this.imageNormalizationSupported=S,this.update=(0,a.sg)((async(e,t)=>{if((0,a.Te)(t),!e.stationary||this.destroyed)return;const i=e.state,r=(0,l.Vp)(i.spatialReference),s=this.hidpi?e.pixelRatio:1,n=i.worldScreenWidth>0,o=n&&this.imageNormalizationSupported&&i.worldScreenWidth<i.size[0],h=Math.round((this.imageMaxWidth??0)/s),p=Math.round((this.imageMaxHeight??0)/s);o?(_[0]=i.worldScreenWidth,_[1]=i.size[1]):this.imageRotationSupported?(_[0]=i.size[0],_[1]=i.size[1]):c(_,i);const u=Math.floor(_[0])>h||Math.floor(_[1])>p,d=r&&(i.extent.xmin<r.valid[0]||i.extent.xmax>r.valid[1]),m=!this.imageNormalizationSupported&&d,y=!u&&!m,g=this.imageRotationSupported?i.rotation:0,f=this.container.children.slice();if(y){const e=o?i.paddedViewState.center:i.center;this._imagePromise=this._singleExport(i,_,e,i.resolution,g,s,t)}else{let e=Math.min(h,p);n&&(e=Math.min(i.worldScreenWidth,e),e=Math.round(i.worldScreenWidth/Math.ceil(i.worldScreenWidth/e))),this._imagePromise=this._tiledExport(i,e,s,t)}try{const e=await this._imagePromise??[];(0,a.Te)(t);const i=[];if(this._imagePromise=null,this.destroyed)return;this.bitmaps=e;for(const t of f)e.includes(t)||i.push(t.fadeOut().then((()=>{t.remove(),t.destroy()})));for(const t of e)i.push(t.fadeIn());await Promise.all(i)}catch(e){this._imagePromise=null,(0,a.QP)(e)}}),5e3),this.updateExports=(0,a.sg)((async e=>{const t=[];for(const i of this.container.children){if(!i.visible||!i.stage)return;t.push(e(i).then((()=>{i.invalidateTexture(),i.requestRender()})))}this._imagePromise=(0,a.Lx)(t).then((()=>this._imagePromise=null)),await this._imagePromise}))}destroy(){this.bitmaps.forEach((e=>e.destroy())),this.bitmaps=[]}get updating(){return!this.destroyed&&null!==this._imagePromise}async _export(e,t,i,r,s,n){const o=await this.fetchSource(e,Math.floor(t*s),Math.floor(i*s),{rotation:r,pixelRatio:s,signal:n});(0,a.Te)(n);const h=new m.mb(null,!0);return h.x=e.xmin,h.y=e.ymax,h.resolution=e.width/t,h.rotation=r,h.pixelRatio=s,h.opacity=0,this.container.addChild(h),await h.setSourceAsync(o,n),(0,a.Te)(n),h}async _singleExport(e,t,i,r,s,a,n){!function(e,t,i,r){const[s,a]=t,[n,o]=r,h=.5*i;e[0]=s-h*n,e[1]=a-h*o,e[2]=s+h*n,e[3]=a+h*o}(f,i,r,t);const o=(0,h.w1)(f,e.spatialReference);return[await this._export(o,t[0],t[1],s,a,n)]}_tiledExport(e,t,i,r){const s=p.A.create({size:t,spatialReference:e.spatialReference,scales:[e.scale]}),a=new y.A(s),n=a.getTileCoverage(e);if(!n)return null;const o=[];return n.forEach(((s,n,l,p)=>{x.set(s,n,l,0),a.getTileBounds(f,x);const u=(0,h.w1)(f,e.spatialReference);o.push(this._export(u,t,t,0,i,r).then((e=>(0!==p&&(x.set(s,n,l,p),a.getTileBounds(f,x),e.x=f[0],e.y=f[3]),e))))})),Promise.all(o)}};(0,r._)([(0,n.MZ)()],P.prototype,"_imagePromise",void 0),(0,r._)([(0,n.MZ)()],P.prototype,"bitmaps",void 0),(0,r._)([(0,n.MZ)()],P.prototype,"container",void 0),(0,r._)([(0,n.MZ)()],P.prototype,"fetchSource",void 0),(0,r._)([(0,n.MZ)()],P.prototype,"hidpi",void 0),(0,r._)([(0,n.MZ)()],P.prototype,"imageMaxWidth",void 0),(0,r._)([(0,n.MZ)()],P.prototype,"imageMaxHeight",void 0),(0,r._)([(0,n.MZ)()],P.prototype,"imageRotationSupported",void 0),(0,r._)([(0,n.MZ)()],P.prototype,"imageNormalizationSupported",void 0),(0,r._)([(0,n.MZ)()],P.prototype,"requestUpdate",void 0),(0,r._)([(0,n.MZ)()],P.prototype,"updating",null),P=(0,r._)([(0,o.$)("esri.views.2d.layers.support.ExportStrategy")],P);const E=P}}]);
//# sourceMappingURL=7823.0de9ea624bf2f40a8089.js.map