"use strict";(self.webpackChunkreact_redux_arcgis_boilerplate=self.webpackChunkreact_redux_arcgis_boilerplate||[]).push([[9232],{97047:function(t,e,i){i.d(e,{LG:function(){return c},mb:function(){return _},yr:function(){return p}});var s=i(37623),r=i(82541),a=i(93446),o=i(14571),n=i(40087),h=i(68440),l=i(68716),u=i(22497),d=i(88416);function c(t){return t&&"render"in t}function p(t){const e=document.createElement("canvas");return e.width=t.width,e.height=t.height,t.render(e.getContext("2d")),e}class _ extends n.q{constructor(t=null,e=!1){super(),this.blendFunction="standard",this._sourceWidth=0,this._sourceHeight=0,this._textureInvalidated=!1,this._texture=null,this.stencilRef=0,this.coordScale=[1,1],this._height=void 0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this._width=void 0,this.x=0,this.y=0,this.immutable=e,this.source=t,this.requestRender=this.requestRender.bind(this)}destroy(){this._texture&&(this._texture.dispose(),this._texture=null),null!=this._uploadStatus&&(this._uploadStatus.controller.abort(),this._uploadStatus=null)}get isSourceScaled(){return this.width!==this._sourceWidth||this.height!==this._sourceHeight}get height(){return void 0!==this._height?this._height:this._sourceHeight}set height(t){this._height=t}get source(){return this._source}set source(t){null==t&&null==this._source||(this._source=t,this.invalidateTexture(),this.requestRender())}get width(){return void 0!==this._width?this._width:this._sourceWidth}set width(t){this._width=t}beforeRender(t){super.beforeRender(t),this.updateTexture(t)}async setSourceAsync(t,e){null!=this._uploadStatus&&this._uploadStatus.controller.abort();const i=new AbortController,r=(0,s.Tw)();return(0,s.NY)(e,(()=>i.abort())),(0,s.NY)(i,(t=>r.reject(t))),this._uploadStatus={controller:i,resolver:r},this.source=t,r.promise}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this._source instanceof HTMLImageElement?(this._sourceHeight=this._source.naturalHeight,this._sourceWidth=this._source.naturalWidth):this._source&&(this._sourceHeight=this._source.height,this._sourceWidth=this._source.width))}transitionStep(t,e){t>=64&&(this.fadeTransitionEnabled=!1),super.transitionStep(t,e)}setTransform(t){const e=(0,r.D_)(this.transforms.displayViewScreenMat3),[i,s]=t.toScreenNoRotation([0,0],[this.x,this.y]),a=this.resolution/this.pixelRatio/t.resolution,n=a*this.width,h=a*this.height,l=Math.PI*this.rotation/180;(0,r.Tl)(e,e,(0,o.fA)(i,s)),(0,r.Tl)(e,e,(0,o.fA)(n/2,h/2)),(0,r.e$)(e,e,-l),(0,r.Tl)(e,e,(0,o.fA)(-n/2,-h/2)),(0,r.Oe)(e,e,(0,o.fA)(n,h)),(0,r.lw)(this.transforms.displayViewScreenMat3,t.displayViewMat3,e)}setSamplingProfile(t){this._texture&&(t.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(t.samplingMode))}bind(t,e){this._texture&&t.bindTexture(this._texture,e)}async updateTexture({context:t,painter:e}){if(!this._textureInvalidated)return;if(this._textureInvalidated=!1,this._texture||(this._texture=this._createTexture(t)),!this.source)return void this._texture.setData(null);this._texture.resize(this._sourceWidth,this._sourceHeight);const i=function(t){return c(t)?t instanceof h.A?t.getRenderedRasterPixels()?.renderedRasterPixels:p(t):t}(this.source);try{if(null!=this._uploadStatus){const{controller:t,resolver:s}=this._uploadStatus,r={signal:t.signal},{width:a,height:o}=this,n=this._texture,h=e.textureUploadManager;await h.enqueueTextureUpdate({data:i,texture:n,width:a,height:o},r),s.resolve(),this._uploadStatus=null}else this._texture.setData(i);this.ready()}catch(t){(0,s.jH)(t)}}onDetach(){this.destroy()}_createTransforms(){return{displayViewScreenMat3:(0,a.vt)()}}_createTexture(t){const e=this.immutable,i=new d.R;return i.internalFormat=e?l.H0.RGBA8:l.Ab.RGBA,i.wrapMode=l.pF.CLAMP_TO_EDGE,i.isImmutable=e,i.width=this._sourceWidth,i.height=this._sourceHeight,new u.g(t,i)}}},3596:function(t,e,i){i.d(e,{l:function(){return o}});var s=i(97088),r=i(57122),a=i(47764);class o extends a.A{constructor(){super(...arguments),this._hasCrossfade=!1}get requiresDedicatedFBO(){return super.requiresDedicatedFBO||this._hasCrossfade}beforeRender(t){super.beforeRender(t),this._manageFade()}prepareRenderPasses(t){const e=t.registerRenderPass({name:"bitmap",brushes:[s.d.bitmap],target:()=>this.children,drawPhase:r.S5.MAP});return[...super.prepareRenderPasses(t),e]}_manageFade(){this.children.reduce(((t,e)=>t+(e.inFadeTransition?1:0)),0)>=2?(this.children.forEach((t=>t.blendFunction="additive")),this._hasCrossfade=!0):(this.children.forEach((t=>t.blendFunction="standard")),this._hasCrossfade=!1)}}},68440:function(t,e,i){i.d(e,{A:function(){return s}});class s{constructor(t,e,i){this.pixelBlock=t,this.extent=e,this.originalPixelBlock=i}get width(){return null!=this.pixelBlock?this.pixelBlock.width:0}get height(){return null!=this.pixelBlock?this.pixelBlock.height:0}render(t){const e=this.pixelBlock;if(null==e)return;const i=this.filter({extent:this.extent,pixelBlock:this.originalPixelBlock??e});if(null==i.pixelBlock)return;i.pixelBlock.maskIsAlpha&&(i.pixelBlock.premultiplyAlpha=!0);const s=i.pixelBlock.getAsRGBA(),r=t.createImageData(i.pixelBlock.width,i.pixelBlock.height);r.data.set(s),t.putImageData(r,0,0)}getRenderedRasterPixels(){const t=this.filter({extent:this.extent,pixelBlock:this.pixelBlock});return null==t.pixelBlock?null:(t.pixelBlock.maskIsAlpha&&(t.pixelBlock.premultiplyAlpha=!0),{width:t.pixelBlock.width,height:t.pixelBlock.height,renderedRasterPixels:new Uint8Array(t.pixelBlock.getAsRGBA().buffer)})}}},99232:function(t,e,i){i.r(e),i.d(e,{default:function(){return _}});var s=i(82392),r=i(80861),a=i(37623),o=i(81482),n=(i(6273),i(67498),i(26325)),h=i(3596),l=i(45515),u=i(7444),d=i(24775),c=i(30386);let p=class extends((0,c.A)((0,l.e)(d.A))){update(t){this._strategy.update(t).catch((t=>{(0,a.zf)(t)||r.A.getLogger(this).error(t)})),this.notifyChange("updating")}attach(){this._bitmapContainer=new h.l,this.container.addChild(this._bitmapContainer),this._strategy=new u.A({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(t,e,i){return this.layer.fetchImageBitmap(t,e,i)}async doRefresh(){this.requestUpdate()}isUpdating(){return this._strategy.updating||this.updateRequested}};(0,s._)([(0,o.MZ)()],p.prototype,"_strategy",void 0),(0,s._)([(0,o.MZ)()],p.prototype,"updating",void 0),p=(0,s._)([(0,n.$)("esri.views.2d.layers.BaseDynamicLayerView2D")],p);const _=p},7444:function(t,e,i){i.d(e,{A:function(){return A}});var s=i(82392),r=i(73783),a=(i(6273),i(37623)),o=i(81482),n=(i(80861),i(67498),i(26325)),h=i(2532),l=i(67488),u=i(26574);const d=Math.PI/180;function c(t){return t*d}function p(t,e){const i=c(e.rotation),s=Math.abs(Math.cos(i)),r=Math.abs(Math.sin(i)),[a,o]=e.size;return t[0]=Math.round(o*r+a*s),t[1]=Math.round(o*s+a*r),t}var _=i(97047),g=i(62516),x=i(39156);const m=(0,h.vt)(),f=[0,0],y=new x.A(0,0,0,0),w=2048,v=2048,M=!1,b=!1,R=!1;let S=class extends r.A{constructor(t){super(t),this._imagePromise=null,this.bitmaps=[],this.hidpi=R,this.imageMaxWidth=w,this.imageMaxHeight=v,this.imageRotationSupported=M,this.imageNormalizationSupported=b,this.update=(0,a.sg)((async(t,e)=>{if((0,a.Te)(e),!t.stationary||this.destroyed)return;const i=t.state,s=(0,l.Vp)(i.spatialReference),r=this.hidpi?t.pixelRatio:1,o=i.worldScreenWidth>0,n=o&&this.imageNormalizationSupported&&i.worldScreenWidth<i.size[0],h=Math.round((this.imageMaxWidth??0)/r),u=Math.round((this.imageMaxHeight??0)/r);n?(f[0]=i.worldScreenWidth,f[1]=i.size[1]):this.imageRotationSupported?(f[0]=i.size[0],f[1]=i.size[1]):p(f,i);const d=Math.floor(f[0])>h||Math.floor(f[1])>u,c=s&&(i.extent.xmin<s.valid[0]||i.extent.xmax>s.valid[1]),_=!this.imageNormalizationSupported&&c,g=!d&&!_,x=this.imageRotationSupported?i.rotation:0,m=this.container.children.slice();if(g){const t=n?i.paddedViewState.center:i.center;this._imagePromise=this._singleExport(i,f,t,i.resolution,x,r,e)}else{let t=Math.min(h,u);o&&(t=Math.min(i.worldScreenWidth,t),t=Math.round(i.worldScreenWidth/Math.ceil(i.worldScreenWidth/t))),this._imagePromise=this._tiledExport(i,t,r,e)}try{const t=await this._imagePromise??[];(0,a.Te)(e);const i=[];if(this._imagePromise=null,this.destroyed)return;this.bitmaps=t;for(const e of m)t.includes(e)||i.push(e.fadeOut().then((()=>{e.remove(),e.destroy()})));for(const e of t)i.push(e.fadeIn());await Promise.all(i)}catch(t){this._imagePromise=null,(0,a.QP)(t)}}),5e3),this.updateExports=(0,a.sg)((async t=>{const e=[];for(const i of this.container.children){if(!i.visible||!i.stage)return;e.push(t(i).then((()=>{i.invalidateTexture(),i.requestRender()})))}this._imagePromise=(0,a.Lx)(e).then((()=>this._imagePromise=null)),await this._imagePromise}))}destroy(){this.bitmaps.forEach((t=>t.destroy())),this.bitmaps=[]}get updating(){return!this.destroyed&&null!==this._imagePromise}async _export(t,e,i,s,r,o){const n=await this.fetchSource(t,Math.floor(e*r),Math.floor(i*r),{rotation:s,pixelRatio:r,signal:o});(0,a.Te)(o);const h=new _.mb(null,!0);return h.x=t.xmin,h.y=t.ymax,h.resolution=t.width/e,h.rotation=s,h.pixelRatio=r,h.opacity=0,this.container.addChild(h),await h.setSourceAsync(n,o),(0,a.Te)(o),h}async _singleExport(t,e,i,s,r,a,o){!function(t,e,i,s){const[r,a]=e,[o,n]=s,h=.5*i;t[0]=r-h*o,t[1]=a-h*n,t[2]=r+h*o,t[3]=a+h*n}(m,i,s,e);const n=(0,h.w1)(m,t.spatialReference);return[await this._export(n,e[0],e[1],r,a,o)]}_tiledExport(t,e,i,s){const r=u.A.create({size:e,spatialReference:t.spatialReference,scales:[t.scale]}),a=new g.A(r),o=a.getTileCoverage(t);if(!o)return null;const n=[];return o.forEach(((r,o,l,u)=>{y.set(r,o,l,0),a.getTileBounds(m,y);const d=(0,h.w1)(m,t.spatialReference);n.push(this._export(d,e,e,0,i,s).then((t=>(0!==u&&(y.set(r,o,l,u),a.getTileBounds(m,y),t.x=m[0],t.y=m[3]),t))))})),Promise.all(n)}};(0,s._)([(0,o.MZ)()],S.prototype,"_imagePromise",void 0),(0,s._)([(0,o.MZ)()],S.prototype,"bitmaps",void 0),(0,s._)([(0,o.MZ)()],S.prototype,"container",void 0),(0,s._)([(0,o.MZ)()],S.prototype,"fetchSource",void 0),(0,s._)([(0,o.MZ)()],S.prototype,"hidpi",void 0),(0,s._)([(0,o.MZ)()],S.prototype,"imageMaxWidth",void 0),(0,s._)([(0,o.MZ)()],S.prototype,"imageMaxHeight",void 0),(0,s._)([(0,o.MZ)()],S.prototype,"imageRotationSupported",void 0),(0,s._)([(0,o.MZ)()],S.prototype,"imageNormalizationSupported",void 0),(0,s._)([(0,o.MZ)()],S.prototype,"requestUpdate",void 0),(0,s._)([(0,o.MZ)()],S.prototype,"updating",null),S=(0,s._)([(0,n.$)("esri.views.2d.layers.support.ExportStrategy")],S);const A=S},30386:function(t,e,i){i.d(e,{A:function(){return h}});var s=i(82392),r=i(80861),a=i(37623),o=i(61985),n=(i(6273),i(67498),i(62991),i(26325));const h=t=>{let e=class extends t{initialize(){this.addHandles((0,o.on)((()=>this.layer),"refresh",(t=>{this.doRefresh(t.dataChanged).catch((t=>{(0,a.zf)(t)||r.A.getLogger(this).error(t)}))})),"RefreshableLayerView")}};return e=(0,s._)([(0,n.$)("esri.views.layers.RefreshableLayerView")],e),e}}}]);
//# sourceMappingURL=9232.813f6c1c22ab1f1c645a.js.map