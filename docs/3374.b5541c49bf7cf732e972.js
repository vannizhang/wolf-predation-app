"use strict";(self.webpackChunkreact_redux_arcgis_boilerplate=self.webpackChunkreact_redux_arcgis_boilerplate||[]).push([[3374],{51187:function(e,t,s){s.d(t,{A:function(){return n},J:function(){return r}});var i=s(21332);function r(e,t){let s;if("string"==typeof e)s=(0,i.Wm)(e+`-seed(${t})`);else{let i=12;s=e^t;do{s=107*(s>>8^s)+i|0}while(0!=--i)}return(1+s/(1<<31))/2}function n(e){return Math.floor(r(e,o)*a)}const o=53290320,a=10},23374:function(e,t,s){s.d(t,{o:function(){return Se}});var i=s(41820),r=s(23572),n=s(6538),o=s(51917),a=s(49093),c=s(97933);class l extends c.r{}function h(e){const{sprite:t,isMapAligned:s,colorLocked:i,scaleSymbolsProportionally:r,isStroke:n}=e;let c=0;return s&&(c|=(0,o.mR)(a.c.bitset.isMapAligned)),i&&(c|=(0,o.mR)(a.c.bitset.colorLocked)),t.sdf&&(c|=(0,o.mR)(a.c.bitset.isSDF)),r&&(c|=(0,o.mR)(a.c.bitset.scaleSymbolsProportionally)),n&&(c|=(0,o.mR)(a.c.bitset.isStroke)),c}var u=s(77330),d=s(68716);class f extends l{get vertexSpec(){return{createComputedParams:e=>{let{pixelDimensions:t,texelDimensions:s,baseSize:i,referenceSize:n,strokeWidth:o,sizeRatio:a}=e;t||(t=e.sprite.sdf?[0,0]:[e.sprite.width,e.sprite.height]),s||(s=e.sprite.sdf?[0,0]:t),i=(0,r.Lz)(i),n=(0,r.Lz)(n),o=(0,r.Lz)(o);const c=(e.sprite.sdfDecodeCoeff??1)*a;return{...e,pixelDimensions:t,texelDimensions:s,baseSize:i,referenceSize:n,strokeWidth:o,sdfDecodeCoeff:c}},optionalAttributes:{zoomRange:{type:d.pe.SHORT,count:2,packPrecisionFactor:n.fq,pack:({scaleInfo:e},{tileInfo:t})=>(0,o.My)(e,t)}},attributes:{id:{type:d.pe.UNSIGNED_BYTE,count:3,pack:"id"},bitset:{type:d.pe.UNSIGNED_BYTE,count:1,pack:h},pos:{type:d.pe.SHORT,count:2,pack:"position",packPrecisionFactor:1},offset:{type:d.pe.FLOAT,count:2,packAlternating:{count:4,pack:e=>{const t=e.texelDimensions;return[[-.5*t[0],-.5*t[1]],[.5*t[0],-.5*t[1]],[-.5*t[0],.5*t[1]],[.5*t[0],.5*t[1]]]}}},uv:{type:d.pe.SHORT,count:2,packPrecisionFactor:1,packAlternating:{count:4,packTessellation:({texXmax:e,texXmin:t,texYmax:s,texYmin:i})=>[[t,i],[e,i],[t,s],[e,s]]}},animationPointerAndBaseSizeAndReferenceSize:{type:d.pe.UNSIGNED_SHORT,count:4,packPrecisionFactor:1,pack:({animations:e,baseSize:t,referenceSize:s})=>[e.dataColumn,e.dataRow,t,s]},sizing:{type:d.pe.UNSIGNED_SHORT,count:4,packPrecisionFactor:8,pack:({strokeWidth:e,pixelDimensions:t,baseSize:s,sprite:i,sizeRatio:r})=>{const n=Math.max(s*i.width/i.height,s),o=i.sdfDecodeCoeff*n*r;return[t[0],t[1],e,o]}},angle:{type:d.pe.BYTE,count:1,packTessellation:({angle:e})=>e}}}}_write(e,t){const s=this.evaluatedMeshParams.sprite,{textureBinding:i}=s;e.recordStart(this.instanceId,this.attributeLayout,i);const r=t.getDisplayId();if("esriGeometryPolygon"===t.geometryType){const s=t.readCentroidForDisplay();if(!s)return;const[i,n]=s.coords;this._writeQuad(e,r,i,n)}else if("esriGeometryPoint"===t.geometryType){const s=t.readXForDisplay(),i=t.readYForDisplay();this._writeQuad(e,r,s,i)}else{const s=t.readGeometryForDisplay();if(s){const{angleToLine:t}=this.evaluatedMeshParams;if(t){let t=!0,i=null,n=null;s.forEachVertex(((s,o)=>{if(null!=i&&null!=n){const a=Math.atan2(o-n,s-i)/u.rp;t&&(this._writeQuad(e,r,i,n,a),t=!1),this._writeQuad(e,r,s,o,a)}i=s,n=o}))}else s.forEachVertex(((t,s)=>{this._writeQuad(e,r,t,s)}))}}e.recordEnd()}_writeQuad(e,t,s,i,r=0){const n=this.evaluatedMeshParams.sprite,{rect:o}=n,a=o.x+2,c=o.y+2,l=o.x+o.width-2,h=o.y+o.height-2,u=e.vertexCount();e.recordBounds(s,i,64,64);const d={texXmin:a,texYmin:c,texXmax:l,texYmax:h,angle:r};for(let r=0;r<4;r++)this._writeVertex(e,t,s,i,d);e.indexEnsureSize(6),e.indexWrite(u),e.indexWrite(u+1),e.indexWrite(u+2),e.indexWrite(u+1),e.indexWrite(u+3),e.indexWrite(u+2)}}var p=s(47819),m=s(39313),_=s(64329),g=s(5467),y=s(90927),x=s(36123),v=s(23695),M=s(20059),P=s(80294),b=s(94464),w=s(68749),S=s(53334),A=s(14571),I=s(56560),k=s(5525),z=s(65977),L=s(99576),E=s(31927),D=s(87574),R=s(61866);function B(e,t,s){return e[0]=t[0]-s[0],e[1]=t[1]-s[1],e}function T(e,t){return Math.sqrt(e*e+t*t)}function G(e){const t=T(e[0],e[1]);e[0]/=t,e[1]/=t}function F(e,t){return T(e[0]-t[0],e[1]-t[1])}function N(e){return e.length-1}function C(e){let t=0;for(let s=0;s<N(e);s++)t+=O(e,s);return t}function O(e,t,s=1){let[i,r]=function(e,t){return e[t+1]}(e,t);return[i,r]=[Math.round(i),Math.round(r)],Math.sqrt(i*i+r*r)*s}class W{constructor(e,t,s,i,r){this._segments=e,this._index=t,this._distance=s,this._xStart=i,this._yStart=r,this._done=!1}static create(e){return new W(e,0,0,e[0][0],e[0][1])}clone(){return new W(this._segments,this._index,this._distance,this.xStart,this.yStart)}equals(e){return this._index===e._index||e._index===this._index-1&&(0===this._distance||1===e._distance)||e._index===this._index+1&&(1===this._distance||0===e._distance)}leq(e){return this._index<e._index||this._index===e._index&&this._distance<=e._distance}geq(e){return this._index>e._index||this._index===e._index&&this._distance>=e._distance}get _segment(){return this._segments[this._index+1]}get angle(){const e=this.dy,t=(0*e+-1*-this.dx)/(1*this.length);let s=Math.acos(t);return e>0&&(s=2*Math.PI-s),s}get xStart(){return this._xStart}get yStart(){return this._yStart}get x(){return this.xStart+this.distance*this.dx}get y(){return this.yStart+this.distance*this.dy}get dx(){return this._segment[0]}get dy(){return this._segment[1]}get xMidpoint(){return this.xStart+.5*this.dx}get yMidpoint(){return this.yStart+.5*this.dy}get xEnd(){return this.xStart+this.dx}get yEnd(){return this.yStart+this.dy}get length(){const{dx:e,dy:t}=this;return Math.sqrt(e*e+t*t)}get remainingLength(){return this.length*(1-this._distance)}get backwardLength(){return this.length*this._distance}get distance(){return this._distance}get done(){return this._done}hasPrev(){return this._index-1>=0}hasNext(){return this._index+1<N(this._segments)}next(){return this.hasNext()?(this._xStart+=this.dx,this._yStart+=this.dy,this._distance=0,this._index+=1,this):null}prev(){return this.hasPrev()?(this._index-=1,this._xStart-=this.dx,this._yStart-=this.dy,this._distance=1,this):(this._done=!0,null)}_seekBackwards(e,t){const s=this.backwardLength;if(e<=s)return this._distance=(s-e)/this.length,this;let i=this.backwardLength;for(;this.prev();){if(i+this.length>e)return this._seekBackwards(e-i);i+=this.length}return this._distance=0,t?this:null}seek(e,t=!1){if(e<0)return this._seekBackwards(Math.abs(e),t);if(e<=this.remainingLength)return this._distance=(this.backwardLength+e)/this.length,this;let s=this.remainingLength;for(;this.next();){if(s+this.length>e)return this.seek(e-s,t);s+=this.length}return this._distance=1,t?this:null}}function Z(e,t,s,i=!0){const r=C(e),n=W.create(e),o=r/2;if(!i)return n.seek(o),void(Math.abs(n.x)<R.$u&&Math.abs(n.y)<R.$u&&s(n.clone(),0,o+0*t,r));const a=Math.max((r-t)/2,0),c=Math.floor(a/t),l=o-c*t;n.seek(l);for(let e=-c;e<=c;e++)Math.abs(n.x)<R.$u&&Math.abs(n.y)<R.$u&&s(n.clone(),e,o+e*t,r),n.seek(t)}function V(e,t){const s=t;for(let t=0;t<e.length;t++){let i=e[t];j(i,s);const r=[];r.push(i[0]);for(let e=1;e<i.length;e++){const[t,s]=i[e-1],[n,o]=i[e],a=n-t,c=o-s;r.push([a,c])}e[t]=r,i=r}return e}function j(e,t){const s=1e-6;if(t<=0)return;const i=e.length;if(i<3)return;const r=[];let n=0;r.push(0);for(let t=1;t<i;t++)n+=F(e[t],e[t-1]),r.push(n);t=Math.min(t,.2*n);const o=[];o.push(e[0][0]),o.push(e[0][1]);const a=e[i-1][0],c=e[i-1][1],l=B([0,0],e[0],e[1]);G(l),e[0][0]+=t*l[0],e[0][1]+=t*l[1],B(l,e[i-1],e[i-2]),G(l),e[i-1][0]+=t*l[0],e[i-1][1]+=t*l[1];for(let e=1;e<i;e++)r[e]+=t;r[i-1]+=t;const h=.5*t;for(let n=1;n<i-1;n++){let a=0,c=0,l=0;for(let i=n-1;i>=0&&!(r[i+1]<r[n]-h);i--){const o=h+r[i+1]-r[n],u=r[i+1]-r[i],d=r[n]-r[i]<h?1:o/u;if(Math.abs(d)<s)break;const f=d*d,p=d*o-.5*f*u,m=d*u/t,_=e[i+1],g=e[i][0]-_[0],y=e[i][1]-_[1];a+=m/p*(_[0]*d*o+.5*f*(o*g-u*_[0])-f*d*u*g/3),c+=m/p*(_[1]*d*o+.5*f*(o*y-u*_[1])-f*d*u*y/3),l+=m}for(let o=n+1;o<i&&!(r[o-1]>r[n]+h);o++){const i=h-r[o-1]+r[n],u=r[o]-r[o-1],d=r[o]-r[n]<h?1:i/u;if(Math.abs(d)<s)break;const f=d*d,p=d*i-.5*f*u,m=d*u/t,_=e[o-1],g=e[o][0]-_[0],y=e[o][1]-_[1];a+=m/p*(_[0]*d*i+.5*f*(i*g-u*_[0])-f*d*u*g/3),c+=m/p*(_[1]*d*i+.5*f*(i*y-u*_[1])-f*d*u*y/3),l+=m}o.push(a/l),o.push(c/l)}o.push(a),o.push(c);for(let t=0,s=0;t<i;t++)e[t][0]=o[s++],e[t][1]=o[s++]}var q=s(37249);const Y=(0,P.Bj)((e=>{let t=0;if(0===e)return 1/0;for(;!(e%2);)t++,e/=2;return t}));class Q extends q.G8{constructor(){super(...arguments),this._zoomLevel=0}_write(e,t,s,i){if(this._zoomLevel=i||0,null!=s)throw new Error("InternalError: EffectGeometry not support for LabelMeshWriter");switch(t.geometryType){case"esriGeometryPoint":{const s=t.readXForDisplay(),i=t.readYForDisplay();this._writePoint(e,s,i,t);break}case"esriGeometryEnvelope":case"esriGeometryPolygon":case"esriGeometryMultipoint":{const s=t.readCentroidForDisplay();if(!s)return;const[i,r]=s.coords;this._writePoint(e,i,r,t);break}case"esriGeometryPolyline":this._writeLines(e,t)}}_createLineLabelMetric(e,t,s,i){const r=(0,E.Q4)(e),n="right"===this.evaluatedMeshParams.horizontalAlignment?-1:1,o="bottom"===this.evaluatedMeshParams.verticalAlignment?-1:1,a=this.evaluatedMeshParams.scaleInfo?.maxScale??0,c=this.evaluatedMeshParams.scaleInfo?.minScale??0;return new D.f(r,t,s,n,o,a,c,i??null)}_writePoint(e,t,s,i){const r=this._getShaping();if(!r)return;const n=i.getDisplayId(),o=(0,L.xy)(this.evaluatedMeshParams.horizontalAlignment),a=(0,L.UD)(this.evaluatedMeshParams.verticalAlignment),c=this.evaluatedMeshParams.scaleInfo?.maxScale??0,l=this.evaluatedMeshParams.scaleInfo?.minScale??0,h=(0,E.Q4)(i.getDisplayId()),u=this._getPointReferenceBounds()||{offsetX:0,offsetY:0,size:0};e.metricStart(new D.f(h,t,s,o,a,c,l,u)),this._writeGlyphs(e,n,t,s,r,0,u),e.metricBoxWrite(r.boundsT),e.metricEnd()}_getPointReferenceBounds(){if(!this._references)return null;for(const e of this._references){const t=e.getBoundsInfo();if(t)return t}return null}_writeLines(e,t){const{scaleInfo:s,verticalAlignment:i}=this.evaluatedMeshParams,r=this.evaluatedMeshParams.repeatLabelDistance||128,n=this._getShaping("middle");if(!n)return;const a=(e,t,s,i)=>this._placeSubdivGlyphs(e,t,s,i),c=(n.bounds.width+r)/2;this._current={out:e,id:t.getDisplayId(),shaping:n,zoomRange:(0,o.My)(s,this.getTileInfo()),referenceBounds:this._getPointReferenceBounds()||{offsetX:0,offsetY:0,size:0},offsetDirection:null},this._verticalPlacement="bottom"===i?"above":"top"===i?"below":null,this._verticalPlacement?this._writeAboveAndBelowAlong(t,a,c):this._writeCenterAlong(t,a,c)}_writeAboveAndBelowAlong(e,t,s){const{repeatLabel:i}=this.evaluatedMeshParams,{shaping:r}=this._current,n=r.bounds.halfHeight,o=e.readGeometryForDisplay();if(!o)return;const a=new z.A;(0,k.kz)(a,o,!1,!1,"esriGeometryPolyline",1);const c=$(new z.A,a,n),l=$(new z.A,a,-n),h=(0,k.zv)(l,"esriGeometryPolyline",!1,!1),u=V((0,k.zv)(c,"esriGeometryPolyline",!1,!1).paths,r.bounds.width),d=V(h.paths,r.bounds.width);this._current.offsetDirection="above";for(const e of u)Z(e,s,t,!!i);this._current.offsetDirection="below";for(const e of d)Z(e,s,t,!!i)}_writeCenterAlong(e,t,s){const{repeatLabel:i}=this.evaluatedMeshParams,{shaping:r}=this._current,n=V(e.readLegacyGeometryForDisplay().paths,r.bounds.width);for(const e of n)Z(e,s,t,!!i)}_placeSubdivGlyphs(e,t,s,i){const{allowOverrun:r,labelPosition:n,repeatLabelDistance:o}=this.evaluatedMeshParams,a=this._current.zoomRange[0],c=Y(t),l=this._current.shaping.bounds.width/2,h=Math.sqrt(o||128)/2,u=Math.min(s,i-s),d=this._current.shaping.isMultiline?q.GJ:Math.log2(u/(h+l/2)),f=0===t?d:Math.min(c,d),p=Math.max(a,this._zoomLevel+1-f),m=this._zoomLevel-p,_=this._current.shaping.bounds.width/2*2**m;this._current.shaping.isMultiline?0===t&&this._placeStraight(e,p):r&&m<0?this._placeStraightAlong(e,a):"parallel"===n?this._placeStraightAlong(e,p):"curved"===n&&this._placeCurved(e,p,_)}_placeStraight(e,t){const{out:s,id:i,shaping:r,referenceBounds:n}=this._current,{x:o,y:a}=e;s.metricStart(this._createLineLabelMetric(i,o,a)),s.metricBoxWrite(r.boundsT);const c=e.angle*(180/Math.PI)%360,l=(e.angle*(180/Math.PI)+180)%360;this._writeGlyphs(s,i,o,a,r,0,n,{clipAngle:c,mapAligned:!0,isLineLabel:!0,minZoom:t}),this._writeGlyphs(s,i,o,a,r,0,n,{clipAngle:l,mapAligned:!0,isLineLabel:!0,minZoom:t}),s.metricEnd()}_placeCurved(e,t,s){const{out:i,id:r}=this._current;i.metricStart(this._createLineLabelMetric(r,e.x,e.y));const n=e.clone(),o=e.angle*(180/Math.PI)%360,a=(e.angle*(180/Math.PI)+180)%360;this._verticalPlacement&&this._verticalPlacement!==this._current.offsetDirection||(this._placeFirst(n,t,1,o),this._placeBack(e,n,t,s,1,o),this._placeForward(e,n,t,s,1,o)),this._verticalPlacement&&this._verticalPlacement===this._current.offsetDirection||(this._placeFirst(n,t,0,a),this._placeBack(e,n,t,s,0,a),this._placeForward(e,n,t,s,0,a)),i.metricEnd()}_placeStraightAlong(e,t){const{out:s,id:i,shaping:n,zoomRange:o,referenceBounds:a}=this._current,{boxBorderLineColor:c,boxBackgroundColor:l}=this.evaluatedMeshParams,h=e.clone(),u=e.angle*(180/Math.PI)%360,d=(e.angle*(180/Math.PI)+180)%360,f=n.glyphs.length>0&&!(!c&&!l);if(s.metricStart(this._createLineLabelMetric(i,e.x,e.y)),f){const c=Math.max(t,o[0],0),l=Math.min(q.GJ,o[1]),h=(0,b.$0)((0,w.vt)(),-e.angle),f={minZoom:c,maxZoom:l,clipAngle:u,mapAligned:!0,isLineLabel:!0},p=(0,r.Lz)(this.evaluatedMeshParams.offsetX),m=(0,r.Lz)(this.evaluatedMeshParams.offsetY);if(!this._verticalPlacement||this._verticalPlacement===this._current.offsetDirection){const t=(0,A.fA)(p,-1*m),[r,o]=n.shapeBackground((0,b.Tl)((0,w.vt)(),h,t));s.recordStart(this.instanceId,this.attributeLayout,n.glyphs[0].textureBinding);const c=2*Math.max(r.width,r.height);s.recordBounds(e.x+r.x,e.y+r.y,c,c),this._writeTextBox(s,i,e.x,e.y,o,a,f),s.recordEnd()}if(!this._verticalPlacement||this._verticalPlacement!==this._current.offsetDirection){const t=(0,A.fA)(p,m),[r,o]=n.shapeBackground((0,b.Tl)((0,w.vt)(),h,t));f.clipAngle=d,s.recordStart(this.instanceId,this.attributeLayout,n.glyphs[0].textureBinding);const c=2*Math.max(r.width,r.height);s.recordBounds(e.x+r.x,e.y+r.y,c,c),this._writeTextBox(s,i,e.x,e.y,o,a,f),s.recordEnd()}}this._verticalPlacement&&this._verticalPlacement!==this._current.offsetDirection||this._placeFirst(h,t,1,u,!0),this._verticalPlacement&&this._verticalPlacement===this._current.offsetDirection||this._placeFirst(h,t,0,d,!0),s.metricEnd()}_placeBack(e,t,s,i,r,n){const o=e.clone();let a=e.backwardLength+0;for(;o.prev()&&!(a>=i);)this._placeOnSegment(o,t,a,s,-1,r,n),a+=o.length+0}_placeForward(e,t,s,i,r,n){const o=e.clone();let a=e.remainingLength+0;for(;o.next()&&!(a>=i);)this._placeOnSegment(o,t,a,s,1,r,n),a+=o.length+0}_placeFirst(e,t,s,i,r=!1){const{out:n,id:o,shaping:a,zoomRange:c,referenceBounds:l}=this._current,h=a.glyphs;for(const u of h){const h=u.x>a.bounds.x?s:1-s,d=h*e.remainingLength+(1-h)*e.backwardLength,f=Math.abs(u.x+u.width/2-a.bounds.x),p=Math.max(0,this._zoomLevel+Math.log2(f/(d+0))),m=Math.max(t,r?0:p);u.maxZoom=Math.min(c[1],q.GJ),u.angle=e.angle+(1-s)*Math.PI,u.minZoom=Math.max(c[0],m),this._writeLineGlyph(n,o,e.x,e.y,a.bounds,u,i,l,!0),(s||this._current.offsetDirection)&&this._isVisible(u.minZoom,u.maxZoom)&&n.metricBoxWrite(u.bounds)}}_placeOnSegment(e,t,s,i,r,n,o){const{out:a,id:c,shaping:l,referenceBounds:h}=this._current,u=l.glyphs,d=e.dx/e.length,f=e.dy/e.length,p={x:e.x+s*-r*d,y:e.y+s*-r*f};for(const t of u){const u=t.x>l.bounds.x?n:1-n;if(!(u&&1===r||!u&&-1===r))continue;const d=Math.abs(t.x+t.width/2-l.bounds.x),f=Math.max(0,this._zoomLevel+Math.log2(d/s)-.1),m=Math.max(i,this._zoomLevel+Math.log2(d/(s+e.length+0)));0!==f&&(t.angle=e.angle+(1-n)*Math.PI,t.minZoom=m,t.maxZoom=f,this._writeLineGlyph(a,c,p.x,p.y,l.bounds,t,o,h,!0),(n||this._current.offsetDirection)&&this._isVisible(t.minZoom,t.maxZoom)&&a.metricBoxWrite(t.bounds))}}_writeLineGlyph(e,t,s,i,r,n,a,c,l){const h=s+r.x,u=i+r.y,d=2*(this.evaluatedMeshParams.minPixelBuffer?this.evaluatedMeshParams.minPixelBuffer/this._textMeshTransformProps.fontSize:1),f=Math.max(r.width,r.height)*d;e.recordStart(this.instanceId,this.attributeLayout,n.textureBinding),e.recordBounds(h,u,f,f);const{texcoords:p,offsets:m}=n,{fontSize:_,haloSize:g,outlineSize:y}=this._textMeshTransformProps;this._writeQuad(e,t,s,i,{texcoords:p,offsets:m,fontSize:_,haloSize:g,outlineSize:y,color:(0,o.Jb)(this.evaluatedMeshParams.color),isBackground:!1,referenceBounds:c,minZoom:Math.max(this._current.zoomRange[0],n.minZoom),maxZoom:Math.min(this._current.zoomRange[1],n.maxZoom),clipAngle:a,mapAligned:l,isLineLabel:!0}),e.recordEnd()}_isVisible(e,t){const s=Math.floor(this._zoomLevel*n.fq)/n.fq;return e<=s&&s<=t}}function $(e,t,s){const{coords:i,lengths:r}=t,n=(0,I.vt)(),o=(0,I.vt)(),a=(0,I.vt)(),c=(0,I.vt)(),l=(0,I.vt)(),h=(0,I.vt)();let u=0;for(let t=0;t<r.length;t++){const d=r[t];for(let t=0;t<d;t++){const r=2*(t+u-1),f=2*(t+u),p=2*(t+u+1);t>0?(0,S.hZ)(n,i[r],i[r+1]):(0,S.hZ)(n,0,0),(0,S.hZ)(o,i[f],i[f+1]),t<d-1?(0,S.hZ)(a,i[p],i[p+1]):(0,S.hZ)(a,0,0),0===t?(0,S.hZ)(c,0,0):((0,S.jb)(c,o,n),(0,S.S8)(c,c),(0,S.hZ)(c,c[1],-c[0])),t===d-1?(0,S.hZ)(l,0,0):((0,S.jb)(l,a,o),(0,S.S8)(l,l),(0,S.hZ)(l,l[1],-l[0])),(0,S.WQ)(h,c,l),(0,S.S8)(h,h);const m=h[0]*l[0]+h[1]*l[1];0!==m&&(0,S.hs)(h,h,m),(0,S.hs)(h,h,s),e.coords.push(o[0]+h[0],o[1]+h[1])}e.lengths.push(d),u+=d}return e}var X=s(98721),H=s(43208),J=s(22956),U=s(3223),K=s(62991),ee=s(15565),te=s(80861),se=s(51187),ie=s(46205);function re(e){return e instanceof ne?e:"object"==typeof e&&"type"in e?le[e.type].hydrate(e):new oe(e)}class ne{constructor(e){this.inputs=e}encode(){const e=[];for(const t of this.inputs)e.push(...t.encode());return e.push(...this.instructions),e}}class oe extends ne{constructor(e){super([]),this.value=e}simplify(){return this}get instructions(){if(Array.isArray(this.value)){const[e,t,s,i]=this.value;return null!=i?ie.GA.vector4.encode([e,t||0,s||0,i]):ie.GA.vector3.encode([e,t||0,s||0])}return ie.GA.scalar.encode(this.value)}}class ae extends ne{constructor(e,t){super([t]),this._config=e,this._parent=t}static hydrate(e){return new ae(e,re(e.parent))}simplify(){if(this._config.relativeTranslation||this._config.absoluteScale)return this;const e=this._parent.simplify();if(!(e instanceof oe))return this;const[t,s,i,r]=e.value,n=this._config.translation.from[0],o=this._config.translation.from[1],a=this._config.rotation.from,c=this._config.scale.from;if(n===this._config.translation.to[0]&&o===this._config.translation.to[1]&&a===this._config.rotation.to&&c===this._config.scale.to){const e=i+a,l=r*c,h=Math.sin(i),u=Math.cos(i);return new oe([u*r*n-h*r*o+t,h*r*n+u*r*o+s,e,l])}return new ae(this._config,e)}get instructions(){return ie.GA.animatedTransform.encode(this._config)}}class ce extends ne{constructor(e,t){super([t]),this._config=e,this._parent=t}static hydrate(e){return new ce(e,re(e.parent))}simplify(){const e=this._parent.simplify();if(!(e instanceof oe))return this;const[t,s,i,r]=e.value,n=this._config.color.from[0],o=this._config.color.from[1],a=this._config.color.from[2];let c=this._config.color.from[3];const l=this._config.opacity.from;return n===this._config.color.to[0]&&o===this._config.color.to[1]&&a===this._config.color.to[2]&&c===this._config.color.to[3]&&l===this._config.opacity.to?(c*=l,new oe([t*n,s*o,i*a,r*c])):new ce(this._config,e)}get instructions(){return ie.GA.animatedColor.encode(this._config)}}const le={AnimatedTransform:ae,AnimatedColor:ce};var he=s(93814);function ue(e){return fe(e.map((e=>me(e))).map((e=>re(e).simplify())))}function de(e){const t=[];return t.push(e.transform),t.push(e.fromColor),t.push(e.toColor),t.push(e.colorMix),t.push(e.toOpacity),t.push(e.opacityMix),t}function fe(e){const t=[],s=[];let i=0;for(const r of e){const n=[...r.encode(),...ie.GA.ret.encode()];t.push([i+e.length,0,0,0]),s.push(...n),i+=n.length}return[...t,...s]}async function pe(e,t){const s=e;let i;if("number"==typeof s||"string"==typeof s||"boolean"==typeof s)i=s;else if(Array.isArray(s))i=await Promise.all(s.map((e=>pe(e,t))));else if("object"==typeof s)if("valueExpressionInfo"in s){const{valueExpressionInfo:e}=s,{expression:r}=e;i={...s,computed:await t.createComputedField({expression:r})}}else{i={};for(const e in s)i[e]=await pe(s[e],t)}return i}function me(e,t,s){const i=e;let r;if("number"==typeof i||"string"==typeof i||"boolean"==typeof i)r=i;else if(Array.isArray(i))r=i.map((e=>me(e,t,s)));else if("object"==typeof i)if("type"in i&&null!=i.type&&"Process"===i.type)switch(i.op){case"ArcadeColor":{const e=me(i.value,t,s);_e(Array.isArray(e)&&4===e.length),r=[e[0]/255,e[1]/255,e[2]/255,e[3]]}break;case"Transparency":{const e=me(i.value,t,s);_e("number"==typeof e),r=1-e/100}break;case"Divide":{const e=me(i.left,t,s);_e("number"==typeof e);const n=me(i.right,t,s);_e("number"==typeof n),r=e/n}break;case"Random":{const e=me(i.seed,t,s),n=me(i.min,t,s),o=me(i.max,t,s),a=t.getObjectId(),c=(0,se.A)(a||0);r=n+(0,se.J)(c,e)*(o-n)}}else if("computed"in i)r=function(e){if(!("computed"in e))return e;let i=e.computed.readWithDefault(t,s,[255*e.defaultValue[0],255*e.defaultValue[1],255*e.defaultValue[2],e.defaultValue[3]]);if("string"==typeof i){const e=he.A.fromString(i);e&&(i=[e.r,e.g,e.b,e.a])}return i}(i);else{r={};for(const e in i)r[e]=me(i[e],t,s)}return r}function _e(e){if(!e)throw new Error("Assertion failed.")}var ge=s(43135),ye=s(77377);async function xe(e,t,s=!1){const{defaultValue:i,valueExpressionInfo:r,value:n}=t;if(r){const{expression:n}=r,o=await e.createComputedField({expression:n},s);return o?{...t,computed:o,defaultValue:i}:null}return{...t,computed:new ye.G(n),defaultValue:i}}async function ve(e,t){const{valueExpressionInfo:s}=t,{expression:i}=s,r=await e.createComputedField({expression:i});return r?{...t,computed:r}:null}function Me(e){return"object"==typeof e&&null!=e&&(!(!("valueExpressionInfo"in e)||!e.valueExpressionInfo)||"type"in e&&"Process"===e.type&&"op"in e&&"Random"===e.op)}function Pe(e){if(Array.isArray(e))for(const t of e)if(Pe(t))return!0;if("object"==typeof e){if(Me(e))return!0;for(const t in e)if(Pe(e[t]))return!0}return!1}class be{static async create(e,t,s){const i={},r=new Map,n=new Map,o=new Map,a=new Map,c=new Map,l=new Map;for(const h in s){const u=s[h];if(null!=u&&"object"==typeof u)if(Array.isArray(u)){if("object"==typeof u[0])throw new Error(`InternalError: Cannot handle ${h}. Nested array params are not supported`);i[h]=u}else if("valueExpressionInfo"in u){if(u.value){i[h]=u.value;continue}const t=await ve(e,u);if(!t){i[h]=u.defaultValue;continue}r.set(h,t),i[h]=null}else switch(u.type){case"cim-effect-infos":if(u.effectInfos.some((e=>e.overrides.length))){n.set(h,{effects:await Promise.all(u.effectInfos.map((async t=>{const s=t.overrides.map((t=>xe(e,t)));return{effect:t.effect,compiledOverrides:(await Promise.all(s)).filter(U.Ru)}})))});break}i[h]=u.effectInfos.map((e=>e.effect));break;case"cim-marker-placement-param":u.overrides.length&&o.set(h,{placementInfo:u,compiledOverrides:(await Promise.all(u.overrides.map((t=>xe(e,t))))).filter(U.Ru)}),i[h]=u.placement;break;case"text-rasterization-param":{if(u.overrides.length){const t=u.overrides.map((t=>xe(e,t,u.useLegacyLabelEvaluationRules)));a.set(h,{compiledOverrides:(await Promise.all(t)).filter(U.Ru),rasterizationParam:u,objectIdToResourceId:new Map});continue}const s={type:"cim-rasterization-info",resource:u.resource};i[h]=await t.fetchResourceImmediate(s)??null;break}case"sprite-rasterization-param":{if(u.overrides.length){const t=u.overrides.map((t=>xe(e,t)));a.set(h,{compiledOverrides:(await Promise.all(t)).filter(U.Ru),rasterizationParam:u,objectIdToResourceId:new Map});continue}if("animated"===u.resource.type){a.set(h,{compiledOverrides:[],rasterizationParam:u,objectIdToResourceId:new Map});continue}const s={type:"cim-rasterization-info",resource:u.resource};i[h]=await t.fetchResourceImmediate(s)??null;break}case"cim-marker-transform-param":{const{params:t}=u;if(Pe(t)){const s={compiledMarkerInfos:[]};await Promise.all(t.map((async t=>{const i={props:{}};for(const s in t)if(Me(t[s])){const r=await ve(e,t[s]);i.compiledExpressionMap||(i.compiledExpressionMap=new Map);const n=i.compiledExpressionMap;r&&n.set(s,r)}else i.props[s]=t[s];s.compiledMarkerInfos.push(i)}))),c.set(h,s)}else i[h]={type:"cim-marker-transform-info",infos:t};break}case"animation-params":{const{params:s}=u,r=de(s);if(Pe(r)){const t=await Promise.all(r.map((t=>pe(t,e))));l.set(h,{params:t,propertyIdToResourceId:new Map,key:h})}else{const e=ue(r),s=await t.fetchResourceImmediate({type:"animation-info",resource:e});null!=s&&"sprite"===s.type&&(i[h]={dataRow:s.rect.y,dataColumn:s.rect.x})}break}default:i[h]=u}else i[h]=u}return new be(s,i,r,n,o,a,c,l)}constructor(e,t,s,i,r,n,o,a){this.inputMeshParams=e,this._resolvedMeshParams=t,this._dynamicProperties=s,this._dynamicEffectProperties=i,this._dynamicPlacementProperties=r,this._dynamicAsyncProperties=n,this._dynamicTransformProperties=o,this._dynamicAsyncAnimations=a,this.evaluator=e=>e}get hasDynamicProperties(){return!!(this._dynamicProperties.size||this._dynamicAsyncProperties.size||this._dynamicEffectProperties.size||this._dynamicTransformProperties.size||this._dynamicPlacementProperties.size||this._dynamicAsyncAnimations.size)}get evaluatedMeshParams(){return this._evaluatedMeshParams||(this._evaluatedMeshParams=this.evaluator(this._resolvedMeshParams)),this._evaluatedMeshParams}enqueueRequest(e,t,s){for(const i of this._dynamicAsyncProperties.values()){const r=(0,ee.o8)(i.rasterizationParam.resource);"animated"===i.rasterizationParam.resource.type&&i.rasterizationParam.resource.randomizeStartTime&&(r.primitiveName="__RESERVED__PRIMITIVE__NAME__",r.startGroup=(0,se.A)(t.getObjectId()||0));for(const{primitiveName:e,propertyName:n,computed:o,defaultValue:a,valueExpressionInfo:c}of i.compiledOverrides)try{const c="animated"===i.rasterizationParam.resource.type?r.primitiveName:e;(0,ge.Ph)(r,c,n,o,t,s,a)}catch(t){te.A.getLogger("esri.views.2d.engine.webgl.shaderGraph.techniques.mesh.MeshWriterInputEvaluator").errorOnce(new K.A("invalid-arcade-expression",`Encountered an error when evaluating the arcade expression '${c?.expression}' (primitive: '${e}', property: '${n}')`,t))}const n=e.enqueueRequest({type:"cim-rasterization-info",resource:r});i.objectIdToResourceId.set(t.getObjectId(),n)}for(const i of this._dynamicAsyncAnimations.values()){const r=i.params.map((e=>me(e,t,s))).map(re).map((e=>e.simplify())),n=fe(r),o=e.enqueueRequest({type:"animation-info",resource:n});i.propertyIdToResourceId.set(t.getObjectId()+"."+i.key,o)}}evaluateMeshParams(e,t,s){for(const[e,i]of this._dynamicProperties.entries())this._resolvedMeshParams[e]=i.computed.readWithDefault(t,s,i.defaultValue);for(const[e,i]of this._dynamicPlacementProperties.entries())for(const{computed:r,defaultValue:n,propertyName:o}of i.compiledOverrides){const a=r.readWithDefault(t,s,n);i.placementInfo.placement[o]=a,this._resolvedMeshParams[e]=i.placementInfo.placement}for(const[e,i]of this._dynamicEffectProperties.entries())for(const r of i.effects){for(const{computed:e,defaultValue:i,propertyName:n}of r.compiledOverrides){const o=e.readWithDefault(t,s,i);r.effect[n]=o}this._resolvedMeshParams[e]=i.effects.map((e=>e.effect))}for(const[e,i]of this._dynamicTransformProperties.entries()){const r={type:"cim-marker-transform-info",infos:[]};for(const e of i.compiledMarkerInfos){const i={...e.props};if(e.compiledExpressionMap)for(const[r,n]of e.compiledExpressionMap){const e=n.computed.readWithDefault(t,s,n.defaultValue);i[r]="number"==typeof e||"boolean"==typeof e?e:n.defaultValue}r.infos.push(i)}this._resolvedMeshParams[e]=r}for(const[s,i]of this._dynamicAsyncProperties.entries()){const r=i.objectIdToResourceId.get(t.getObjectId());if(null==r)continue;const n=e.getResource(r);this._resolvedMeshParams[s]=n}for(const[s,i]of this._dynamicAsyncAnimations.entries()){const r=i.propertyIdToResourceId.get(t.getObjectId()+"."+s);if(null==r)continue;const n=e.getResource(r);this._resolvedMeshParams[s]={dataRow:n.rect.y,dataColumn:n.rect.x}}return this._evaluatedMeshParams=this.evaluator(this._resolvedMeshParams),this.evaluatedMeshParams}}var we=s(33121);class Se{async createMeshWriter(e,t,s,i){const r=this._getMeshWriter(i.techniqueType),n=await be.create(e,t,i.inputParams),o=new r(i.id,n,i.optionalAttributes,s);return await o.loadDependencies(),o}_getMeshWriter(e){switch(e){case i.N.Fill:return g.Y;case i.N.DotDensity:return p.k;case i.N.ComplexFill:return m.KE;case i.N.PatternFill:return x.m;case i.N.OutlineFill:return y.w0;case i.N.PatternOutlineFill:return v.Q;case i.N.ComplexOutlineFill:return _.O;case i.N.Marker:return J.H;case i.N.PieChart:return we.v;case i.N.Text:return q.G8;case i.N.Line:return X.Bw;case i.N.TexturedLine:return H.K;case i.N.Heatmap:return M.h;case i.N.Label:return Q;case i.N.AnimatedMarker:return f;default:throw new Error("Internal Error: Mesh writer not in the registry")}}}},77377:function(e,t,s){s.d(t,{G:function(){return r}});var i=s(13666);class r extends i.L{constructor(e){super(),this._value=e}resize(e){}read(e,t){return this._value}readWithDefault(e,t,s){return this._value}referencesScale(){return!1}referencesGeometry(){return!1}}}}]);
//# sourceMappingURL=3374.b5541c49bf7cf732e972.js.map