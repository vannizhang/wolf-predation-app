"use strict";(self.webpackChunkreact_redux_arcgis_boilerplate=self.webpackChunkreact_redux_arcgis_boilerplate||[]).push([[4520],{72449:function(t,n,e){e.d(n,{a:function(){return u},b:function(){return c},c:function(){return o},d:function(){return r},e:function(){return s},f:function(){return a},n:function(){return f},s:function(){return l},t:function(){return i}});e(6273),e(80861);function r(t,n,e){i(t.typedBuffer,n.typedBuffer,e,t.typedBufferStride,n.typedBufferStride)}function i(t,n,e,r=3,i=r){if(t.length/r!==Math.ceil(n.length/i))return t;const o=t.length/r,c=e[0],l=e[1],a=e[2],u=e[4],s=e[5],f=e[6],h=e[8],p=e[9],m=e[10],d=e[12],g=e[13],_=e[14];let x=0,y=0;for(let e=0;e<o;e++){const e=n[x],o=n[x+1],A=n[x+2];t[y]=c*e+u*o+h*A+d,t[y+1]=l*e+s*o+p*A+g,t[y+2]=a*e+f*o+m*A+_,x+=i,y+=r}return t}function o(t,n,e){c(t.typedBuffer,n.typedBuffer,e,t.typedBufferStride,n.typedBufferStride)}function c(t,n,e,r=3,i=r){if(t.length/r!==Math.ceil(n.length/i))return;const o=t.length/r,c=e[0],l=e[1],a=e[2],u=e[3],s=e[4],f=e[5],h=e[6],p=e[7],m=e[8];let d=0,g=0;for(let e=0;e<o;e++){const e=n[d],o=n[d+1],_=n[d+2];t[g]=c*e+u*o+h*_,t[g+1]=l*e+s*o+p*_,t[g+2]=a*e+f*o+m*_,d+=i,g+=r}}function l(t,n,e){a(t.typedBuffer,n.typedBuffer,e,t.typedBufferStride,n.typedBufferStride)}function a(t,n,e,r=3,i=r){const o=Math.min(t.length/r,n.length/i);let c=0,l=0;for(let a=0;a<o;a++)t[l]=e*n[c],t[l+1]=e*n[c+1],t[l+2]=e*n[c+2],c+=i,l+=r;return t}function u(t,n,e,r=3,i=r){const o=t.length/r;if(o!==Math.ceil(n.length/i))return t;let c=0,l=0;for(let a=0;a<o;a++)t[l]=n[c]+e[0],t[l+1]=n[c+1]+e[1],t[l+2]=n[c+2]+e[2],c+=i,l+=r;return t}function s(t,n){f(t.typedBuffer,n.typedBuffer,t.typedBufferStride,n.typedBufferStride)}function f(t,n,e=3,r=e){const i=Math.min(t.length/e,n.length/r);let o=0,c=0;for(let l=0;l<i;l++){const i=n[o],l=n[o+1],a=n[o+2],u=i*i+l*l+a*a;if(u>0){const n=1/Math.sqrt(u);t[c]=n*i,t[c+1]=n*l,t[c+2]=n*a}o+=r,c+=e}}Object.freeze(Object.defineProperty({__proto__:null,normalize:f,normalizeView:s,scale:a,scaleView:l,shiftRight:function(t,n,e){const r=Math.min(t.count,n.count),i=t.typedBuffer,o=t.typedBufferStride,c=n.typedBuffer,l=n.typedBufferStride;let a=0,u=0;for(let t=0;t<r;t++)i[u]=c[a]>>e,i[u+1]=c[a+1]>>e,i[u+2]=c[a+2]>>e,a+=l,u+=o},transformMat3:c,transformMat3View:o,transformMat4:i,transformMat4View:r,translate:u},Symbol.toStringTag,{value:"Module"}))},79441:function(t,n,e){function r(){return[1,0,0,0,1,0,0,0,1]}function i(t,n,e,r,i,o,c,l,a){return[t,n,e,r,i,o,c,l,a]}e.d(n,{fA:function(){return i},vt:function(){return r},zK:function(){return o}});const o=[1,0,0,0,1,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:o,clone:function(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8]]},create:r,createView:function(t,n){return new Float64Array(t,n,9)},fromValues:i},Symbol.toStringTag,{value:"Module"}))},26110:function(t,n,e){function r(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function i(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15]]}e.d(n,{o8:function(){return i},vt:function(){return r},zK:function(){return o}});const o=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:o,clone:i,create:r,createView:function(t,n){return new Float64Array(t,n,16)},fromValues:function(t,n,e,r,i,o,c,l,a,u,s,f,h,p,m,d){return[t,n,e,r,i,o,c,l,a,u,s,f,h,p,m,d]}},Symbol.toStringTag,{value:"Module"}))},21120:function(t,n,e){e.d(n,{E:function(){return T},w:function(){return c}});var r=e(3223),i=(e(6273),e(41785)),o=e(79207);class c{constructor(t=9,n){this._compareMinX=f,this._compareMinY=h,this._toBBox=t=>t,this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),n&&("function"==typeof n?this._toBBox=n:this._initFormat(n)),this.clear()}destroy(){this.clear(),A.prune(),M.prune(),w.prune(),v.prune()}all(t){l(this._data,t)}search(t,n){let e=this._data;const r=this._toBBox;if(x(t,e))for(A.clear();e;){for(let i=0,o=e.children.length;i<o;i++){const o=e.children[i],c=e.leaf?r(o):o;x(t,c)&&(e.leaf?n(o):_(t,c)?l(o,n):A.push(o))}e=A.pop()}}collides(t){let n=this._data;const e=this._toBBox;if(!x(t,n))return!1;for(A.clear();n;){for(let r=0,i=n.children.length;r<i;r++){const i=n.children[r],o=n.leaf?e(i):i;if(x(t,o)){if(n.leaf||_(t,o))return!0;A.push(i)}}n=A.pop()}return!1}load(t){if(!t.length)return this;if(t.length<this._minEntries){for(let n=0,e=t.length;n<e;n++)this.insert(t[n]);return this}let n=this._build(t.slice(),0,t.length-1,0);if(this._data.children.length)if(this._data.height===n.height)this._splitRoot(this._data,n);else{if(this._data.height<n.height){const t=this._data;this._data=n,n=t}this._insert(n,this._data.height-n.height-1,!0)}else this._data=n;return this}insert(t){return t&&this._insert(t,this._data.height-1),this}clear(){return this._data=new E([]),this}remove(t){if(!t)return this;let n,e=this._data,i=null,o=0,c=!1;const l=this._toBBox(t);for(w.clear(),v.clear();e||w.length>0;){if(e||(e=w.pop(),i=w.data[w.length-1],o=v.pop()??0,c=!0),e.leaf&&(n=(0,r.qh)(e.children,t,e.children.length,e.indexHint),-1!==n))return e.children.splice(n,1),w.push(e),this._condense(w),this;c||e.leaf||!_(e,l)?i?(o++,e=i.children[o],c=!1):e=null:(w.push(e),v.push(o),o=0,i=e,e=e.children[0])}return this}toJSON(){return this._data}fromJSON(t){return this._data=t,this}_build(t,n,e,r){const i=e-n+1;let o=this._maxEntries;if(i<=o){const r=new E(t.slice(n,e+1));return a(r,this._toBBox),r}r||(r=Math.ceil(Math.log(i)/Math.log(o)),o=Math.ceil(i/o**(r-1)));const c=new S([]);c.height=r;const l=Math.ceil(i/o),u=l*Math.ceil(Math.sqrt(o));y(t,n,e,u,this._compareMinX);for(let i=n;i<=e;i+=u){const n=Math.min(i+u-1,e);y(t,i,n,l,this._compareMinY);for(let e=i;e<=n;e+=l){const i=Math.min(e+l-1,n);c.children.push(this._build(t,e,i,r-1))}}return a(c,this._toBBox),c}_insert(t,n,e){const r=this._toBBox,i=e?t:r(t);w.clear();const o=function(t,n,e,r){for(;r.push(n),!0!==n.leaf&&r.length-1!==e;){let e,r=1/0,i=1/0;for(let o=0,c=n.children.length;o<c;o++){const c=n.children[o],l=p(c),a=d(t,c)-l;a<i?(i=a,r=l<r?l:r,e=c):a===i&&l<r&&(r=l,e=c)}n=e||n.children[0]}return n}(i,this._data,n,w);for(o.children.push(t),s(o,i);n>=0&&w.data[n].children.length>this._maxEntries;)this._split(w,n),n--;!function(t,n,e){for(let r=e;r>=0;r--)s(n.data[r],t)}(i,w,n)}_split(t,n){const e=t.data[n],r=e.children.length,i=this._minEntries;this._chooseSplitAxis(e,i,r);const o=this._chooseSplitIndex(e,i,r);if(!o)return;const c=e.children.splice(o,e.children.length-o),l=e.leaf?new E(c):new S(c);l.height=e.height,a(e,this._toBBox),a(l,this._toBBox),n?t.data[n-1].children.push(l):this._splitRoot(e,l)}_splitRoot(t,n){this._data=new S([t,n]),this._data.height=t.height+1,a(this._data,this._toBBox)}_chooseSplitIndex(t,n,e){let r,i,o;r=i=1/0;for(let c=n;c<=e-n;c++){const n=u(t,0,c,this._toBBox),l=u(t,c,e,this._toBBox),a=g(n,l),s=p(n)+p(l);a<r?(r=a,o=c,i=s<i?s:i):a===r&&s<i&&(i=s,o=c)}return o}_chooseSplitAxis(t,n,e){const r=t.leaf?this._compareMinX:f,i=t.leaf?this._compareMinY:h;this._allDistMargin(t,n,e,r)<this._allDistMargin(t,n,e,i)&&t.children.sort(r)}_allDistMargin(t,n,e,r){t.children.sort(r);const i=this._toBBox,o=u(t,0,n,i),c=u(t,e-n,e,i);let l=m(o)+m(c);for(let r=n;r<e-n;r++){const n=t.children[r];s(o,t.leaf?i(n):n),l+=m(o)}for(let r=e-n-1;r>=n;r--){const n=t.children[r];s(c,t.leaf?i(n):n),l+=m(c)}return l}_condense(t){for(let n=t.length-1;n>=0;n--){const e=t.data[n];if(0===e.children.length)if(n>0){const i=t.data[n-1],o=i.children;o.splice((0,r.qh)(o,e,o.length,i.indexHint),1)}else this.clear();else a(e,this._toBBox)}}_initFormat(t){const n=["return a"," - b",";"];this._compareMinX=new Function("a","b",n.join(t[0])),this._compareMinY=new Function("a","b",n.join(t[1])),this._toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}function l(t,n){let e=t;for(M.clear();e;){if(!0===e.leaf)for(const t of e.children)n(t);else M.pushArray(e.children);e=M.pop()??null}}function a(t,n){u(t,0,t.children.length,n,t)}function u(t,n,e,r,i){i||(i=new E([])),i.minX=1/0,i.minY=1/0,i.maxX=-1/0,i.maxY=-1/0;for(let o,c=n;c<e;c++)o=t.children[c],s(i,t.leaf?r(o):o);return i}function s(t,n){t.minX=Math.min(t.minX,n.minX),t.minY=Math.min(t.minY,n.minY),t.maxX=Math.max(t.maxX,n.maxX),t.maxY=Math.max(t.maxY,n.maxY)}function f(t,n){return t.minX-n.minX}function h(t,n){return t.minY-n.minY}function p(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function m(t){return t.maxX-t.minX+(t.maxY-t.minY)}function d(t,n){return(Math.max(n.maxX,t.maxX)-Math.min(n.minX,t.minX))*(Math.max(n.maxY,t.maxY)-Math.min(n.minY,t.minY))}function g(t,n){const e=Math.max(t.minX,n.minX),r=Math.max(t.minY,n.minY),i=Math.min(t.maxX,n.maxX),o=Math.min(t.maxY,n.maxY);return Math.max(0,i-e)*Math.max(0,o-r)}function _(t,n){return t.minX<=n.minX&&t.minY<=n.minY&&n.maxX<=t.maxX&&n.maxY<=t.maxY}function x(t,n){return n.minX<=t.maxX&&n.minY<=t.maxY&&n.maxX>=t.minX&&n.maxY>=t.minY}function y(t,n,e,r,i){const c=[n,e];for(;c.length;){const n=c.pop(),e=c.pop();if(n-e<=r)continue;const l=e+Math.ceil((n-e)/r/2)*r;(0,o.q)(t,l,e,n,i),c.push(e,l,l,n)}}const A=new i.A,M=new i.A,w=new i.A,v=new i.A({deallocator:void 0});class T{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class B extends T{constructor(){super(...arguments),this.height=1,this.indexHint=new r.vW}}class E extends B{constructor(t){super(),this.children=t,this.leaf=!0}}class S extends B{constructor(t){super(),this.children=t,this.leaf=!1}}},80788:function(t,n,e){e.d(n,{l:function(){return u}});var r=e(4506),i=e(25336),o=e(19913);function c(t,n,e){const r=Math.sin(t),i=Math.cos(t),o=Math.sin(n),c=Math.cos(n),l=e;return l[0]=-r,l[4]=-o*i,l[8]=c*i,l[12]=0,l[1]=i,l[5]=-o*r,l[9]=c*r,l[13]=0,l[2]=0,l[6]=c,l[10]=o,l[14]=0,l[3]=0,l[7]=0,l[11]=0,l[15]=1,l}var l=e(99269),a=e(67488);function u(t,n,e,r){if(null==t||null==r)return!1;const o=(0,l.Qk)(t,l.Wv),u=(0,l.Qk)(r,l.zp);if(o===u&&!s(u)&&(o!==l.rz.UNKNOWN||(0,a.aI)(t,r)))return(0,i.kN)(e,n),!0;if(s(u)){const t=l.w5[o][l.rz.LON_LAT],r=l.w5[l.rz.LON_LAT][u];return null!=t&&null!=r&&(t(n,0,h,0),r(h,0,p,0),c(f*h[0],f*h[1],e),e[12]=p[0],e[13]=p[1],e[14]=p[2],!0)}const m=s(o);if((u===l.rz.WEB_MERCATOR||u===l.rz.PLATE_CARREE||u===l.rz.WGS84||u===l.rz.CGCS2000)&&(o===l.rz.WGS84||m||o===l.rz.WEB_MERCATOR||o===l.rz.CGCS2000)){const t=l.w5[o][l.rz.LON_LAT],r=l.w5[l.rz.LON_LAT][u];return null!=t&&null!=r&&(t(n,0,h,0),r(h,0,p,0),m?function(t,n,e){c(t,n,e),(0,i.mg)(e,e)}(f*h[0],f*h[1],e):(0,i.D_)(e),e[12]=p[0],e[13]=p[1],e[14]=p[2],!0)}return!1}function s(t){return t===l.rz.SPHERICAL_ECEF||t===l.rz.SPHERICAL_MARS_PCPF||t===l.rz.SPHERICAL_MOON_PCPF||t===l.rz.WGS84_ECEF}const f=(0,r.kU)(1),h=(0,o.vt)(),p=(0,o.vt)()},64159:function(t,n,e){e.d(n,{g:function(){return c}});var r=e(19913),i=e(3034),o=e(88133);function c(t,n,e,r){if((0,i.canProjectWithoutEngine)(t.spatialReference,e)){l[0]=t.x,l[1]=t.y;const i=t.z;return l[2]=i??r??0,(0,o.projectBuffer)(l,t.spatialReference,0,n,e,0)}const c=(0,i.tryProjectWithZConversion)(t,e);return!!c&&(n[0]=c?.x,n[1]=c?.y,n[2]=c?.z??r??0,!0)}const l=(0,r.vt)()},32159:function(t,n,e){e.d(n,{Y0:function(){return u},lO:function(){return s}});var r=e(34670),i=e(44153),o=e(67488);const c=new i.A(r.fv),l=new i.A(r.FY),a=new i.A(r.LJ),u=new i.A(r.Ro);function s(t){const n=f.get(t);if(n)return n;let e=c;if(t)if(t===l)e=l;else if(t===a)e=a;else{const n=t.wkid,r=t.latestWkid;if(null!=n||null!=r)(0,o.tl)(n)||(0,o.tl)(r)?e=l:((0,o.ZL)(n)||(0,o.ZL)(r))&&(e=a);else{const n=t.wkt2??t.wkt;if(n){const t=n.toUpperCase();t===h?e=l:t===p&&(e=a)}}}return f.set(t,e),e}const f=new Map,h=l.wkt.toUpperCase(),p=a.wkt.toUpperCase()},58823:function(t,n,e){e.d(n,{A:function(){return f}});var r,i=e(82392),o=e(14755),c=e(84977),l=e(81482),a=(e(6273),e(80861),e(67498),e(85716)),u=e(26325);let s=r=class extends((0,o.O)(c.oY)){constructor(t){super(t),this.type="georeferenced",this.origin=null}};s.absolute=new r,(0,i._)([(0,a.e)({georeferenced:"georeferenced"},{readOnly:!0})],s.prototype,"type",void 0),(0,i._)([(0,l.MZ)({type:[Number],nonNullable:!1,json:{write:!0}})],s.prototype,"origin",void 0),s=r=(0,i._)([(0,u.$)("esri.geometry.support.MeshGeoreferencedVertexSpace")],s);const f=s},93320:function(t,n,e){e.d(n,{A:function(){return f}});var r=e(82392),i=e(14755),o=e(84977),c=e(81482),l=(e(6273),e(80861),e(67498),e(85716)),a=e(26325),u=e(19913);let s=class extends((0,i.O)(o.oY)){constructor(t){super(t),this.type="local",this.origin=(0,u.vt)()}};(0,r._)([(0,l.e)({local:"local"},{readOnly:!0})],s.prototype,"type",void 0),(0,r._)([(0,c.MZ)({type:[Number],nonNullable:!0,json:{write:!0}})],s.prototype,"origin",void 0),s=(0,r._)([(0,a.$)("esri.geometry.support.MeshLocalVertexSpace")],s);const f=s},62139:function(t,n,e){e.r(n),e.d(n,{default:function(){return l}});var r=e(6273),i=e(21120),o=e(58823),c=e(81587);class l{async createIndex(t,n){const e=new Array;if(!t.vertexAttributes?.position)return new i.w;const r=function(t){const{vertexAttributes:{position:n},vertexSpace:e,spatialReference:r,transform:i}=t,l=(0,c.UR)({vertexAttributes:{position:n},vertexSpace:e,spatialReference:r,transform:i},o.A.absolute,{allowBufferReuse:!0})?.position;return l?!t.components||t.components.some((t=>!t.faces))?{position:l.buffer}:{position:l.buffer,components:t.components.map((t=>t.faces))}:null}(t),l=null!=n?await n.invoke("createIndexThread",r,{transferList:e}):this.createIndexThread(r).result;return a().fromJSON(l)}createIndexThread(t){const n=a();if(!t)return{result:n.toJSON()};const e=new Float64Array(t.position);return t.components?function(t,n,e){let r=0;for(const t of e)r+=t.length/3;const i=new Array(r);let o=0;for(const t of e)for(let e=0;e<t.length;e+=3)i[o++]=u(n,3*t[e],3*t[e+1],3*t[e+2]);return t.load(i),{result:t.toJSON()}}(n,e,t.components.map((t=>new Uint32Array(t)))):function(t,n){const e=new Array(n.length/9);let r=0;for(let t=0;t<n.length;t+=9)e[r++]=u(n,t,t+3,t+6);return t.load(e),{result:t.toJSON()}}(n,e)}}function a(){return new i.w(9,(0,r.A)("esri-csp-restrictions")?t=>t:[".minX",".minY",".maxX",".maxY"])}function u(t,n,e,r){return{minX:Math.min(t[n],t[e],t[r]),maxX:Math.max(t[n],t[e],t[r]),minY:Math.min(t[n+1],t[e+1],t[r+1]),maxY:Math.max(t[n+1],t[e+1],t[r+1]),p0:[t[n],t[n+1],t[n+2]],p1:[t[e],t[e+1],t[e+2]],p2:[t[r],t[r+1],t[r+2]]}}},90514:function(t,n,e){e.d(n,{$5:function(){return w},CN:function(){return x},JP:function(){return _},KM:function(){return T},Mv:function(){return E},X4:function(){return y},gr:function(){return M},qs:function(){return v},si:function(){return A},xA:function(){return B}});var r=e(4506),i=e(82541),o=e(79441),c=e(25336),l=e(26110),a=e(80347),u=e(19913),s=e(80788),f=e(88133),h=(e(99263),e(67488)),p=e(64672),m=e(40041),d=e(72449),g=e(66335);const _="Projection may be possible after calling projection.load().";function x(t,n,e,r){t.error(`Failed to project from (wkid:${n.wkid}) to (wkid:${e.wkid}).${r?" ":""}${r}`)}function y(t,n,e,r,i,o){return C(R.TO_PCPF,m.xs.fromTypedArray(t),S.NORMAL,m.Xm.fromTypedArray(n),e,m.Xm.fromTypedArray(r),i,m.xs.fromTypedArray(o))?o:null}function A(t,n,e,r,i,o){return C(R.FROM_PCPF,m.xs.fromTypedArray(t),S.NORMAL,m.Xm.fromTypedArray(n),e,m.Xm.fromTypedArray(r),i,m.xs.fromTypedArray(o))?o:null}function M(t,n,e,r){return(0,f.projectBuffer)(t,n,0,e,r,0)?e:null}function w(t,n,e,r){return(0,f.projectBuffer)(t,n,0,e,r,0)?e:null}function v(t,n,e){return(0,i.Ge)(b,e),(0,d.b)(n,t,b),(0,r.or)(b)&&(0,d.n)(n,n),n}function T(t,n,e){return(0,i.z0)(b,e),(0,g.t)(n,t,b),(0,r.or)(b)&&(0,d.n)(n,n,4),n}function B(t,n,e,r,i,o){if(!C(R.TO_PCPF,m.xs.fromTypedArray(t,4*Float32Array.BYTES_PER_ELEMENT),S.TANGENT,m.Xm.fromTypedArray(n),e,m.Xm.fromTypedArray(r),i,m.xs.fromTypedArray(o,4*Float32Array.BYTES_PER_ELEMENT)))return null;for(let n=3;n<t.length;n+=4)o[n]=t[n];return o}function E(t,n,e,r,i,o){if(!C(R.FROM_PCPF,m.xs.fromTypedArray(t,16),S.TANGENT,m.Xm.fromTypedArray(n),e,m.Xm.fromTypedArray(r),i,m.xs.fromTypedArray(o,16)))return null;for(let n=3;n<t.length;n+=4)o[n]=t[n];return o}var S,R,N;function O(t,n,e,r,o){switch((0,s.l)(r,e,F,r),t===R.FROM_PCPF&&(0,c.B8)(F,F),n){case S.NORMAL:return(0,i.Ge)(o,F);case S.TANGENT:return(0,i.z0)(o,F)}}function C(t,n,e,r,i,o,c,l){if(!n)return;const u=r.count;if(function(t){return t.isWGS84||(0,h.x1)(t)||(0,h.q8)(t)||(0,h.KQ)(t)}(i))for(let r=0;r<u;r++)o.getVec(r,X),n.getVec(r,Y),(0,a.q)(Y,Y,O(t,e,X,c,b)),l.setVec(r,Y);else for(let i=0;i<u;i++){o.getVec(i,X),n.getVec(i,Y);const u=(0,p.jg)(r.get(i,1));let s=Math.cos(u);e===S.TANGENT!=(t===R.TO_PCPF)&&(s=1/s),O(t,e,X,c,b),t===R.TO_PCPF?(b[0]*=s,b[1]*=s,b[2]*=s,b[3]*=s,b[4]*=s,b[5]*=s):(b[0]*=s,b[3]*=s,b[6]*=s,b[1]*=s,b[4]*=s,b[7]*=s),(0,a.q)(Y,Y,b),(0,a.n)(Y,Y),l.setVec(i,Y)}return l}(N=S||(S={}))[N.NORMAL=0]="NORMAL",N[N.TANGENT=1]="TANGENT",function(t){t[t.TO_PCPF=0]="TO_PCPF",t[t.FROM_PCPF=1]="FROM_PCPF"}(R||(R={}));const X=(0,u.vt)(),Y=(0,u.vt)(),F=(0,l.vt)(),b=(0,o.vt)()},81587:function(t,n,e){e.d(n,{UR:function(){return M},p5:function(){return A},xK:function(){return S}});var r=e(80861),i=e(4506),o=e(5262),c=e(82541),l=e(79441),a=e(25336),u=e(26110),s=e(80347),f=e(19913),h=e(32159),p=e(80788),m=e(64159),d=e(28364),g=e(67488),_=e(72449),x=e(90514);const y=()=>r.A.getLogger("esri.geometry.support.meshUtils.vertexSpaceConversion");function A(t,n,{vertexSpace:e,spatialReference:r}){if("georeferenced"===e.type){const i=t;if(!(0,m.g)(n,i,r))return!1;const{origin:o}=e;return(0,s.d)(t,i,o),!0}const i=(0,h.lO)(r),o=t;if(!(0,m.g)(n,o,i))return!1;const{origin:c}=e,l=X;if(!(0,p.l)(r,c,l,i))return!1;const u=(0,a.B8)(X,l);return null!=u&&((0,s.t)(t,o,u),!0)}function M(t,n,e){const{vertexSpace:r,transform:i,vertexAttributes:o}=t,l=(0,d.Hq)(r)?i:null,f=B(t.spatialReference,e,Y.SOURCE_AND_TARGET);if((0,d.yJ)(r,n)&&(!l||(0,a.t2)(l.localMatrix,u.zK))&&E(f)){const{position:t,normal:n,tangent:r}=o,i=e?.allowBufferReuse;return{position:i?t:t.slice(),normal:i?n:n?.slice(),tangent:i?r:r?.slice()}}switch(t.vertexSpace.type){case"local":return"local"===n.type?function({vertexAttributes:t,spatialReference:n,transform:e},{origin:r},i,o){const c=w(n,o);if(!(0,p.l)(n,r,R,c))return(0,x.CN)(y(),n,c),null;if(e&&(0,a.lw)(R,R,e.localMatrix),!(0,p.l)(n,i,N,c))return(0,x.CN)(y(),c,n),null;(0,a.B8)(N,N);const l=(0,a.lw)(R,N,R);return T(l,n,o,Y.SOURCE_AND_TARGET),v(t,l)}(t,t.vertexSpace,n.origin,e):function({spatialReference:t,vertexAttributes:n,transform:e},{origin:r},i,o){const c=w(t,o);if(!(0,p.l)(t,r,R,c))return(0,x.CN)(y(),t,c),null;e&&(0,a.lw)(R,R,e.localMatrix),T(R,t,o,Y.SOURCE);const l=new Float64Array(n.position.length),u=function(t,n,e,r,i){(0,_.t)(r,t,n);const o=new Float64Array(t.length);return(0,x.$5)(r,i,o,e)?o:((0,x.CN)(y(),i,e),null)}(n.position,R,t,l,c);if(!u)return null;const f=function(t,n,e,r,i,o){if(null==i)return null;const c=new Float32Array(i.length);return(0,x.qs)(i,c,o),(0,x.si)(c,t,n,e,r,c)?c:((0,x.CN)(y(),r,n),null)}(u,t,l,c,n.normal,R);if(n.normal&&!f)return null;const h=function(t,n,e,r,i,o){if(null==i)return null;const c=new Float32Array(i.length);return(0,x.KM)(i,c,o),(0,x.Mv)(c,t,n,e,r,c)?c:((0,x.CN)(y(),r,n),null)}(u,t,l,c,n.tangent,R);if(n.tangent&&!h)return null;if(i){const t=(0,s.v)(C,i);(0,_.a)(u,u,t)}return{position:u,normal:f,tangent:h}}(t,t.vertexSpace,n.origin,e);case"georeferenced":return"local"===n.type?function({vertexAttributes:t,spatialReference:n,transform:e},{origin:r},i,o){const l=w(n,o);if(!(0,p.l)(n,i,R,l))return(0,x.CN)(y(),n,l),null;const u=1/B(n,o,Y.TARGET);(0,a.hs)(R,R,[u,u,u]);const s=(0,a.B8)(N,R),{position:f,normal:h,tangent:m}=function(t,n,e){if(!n)return t;if(!e){const{position:e,normal:r,tangent:i}=t;return{position:(0,_.a)(new Float64Array(e.length),e,n),tangent:i,normal:r}}const r=v(t,e.localMatrix);return(0,_.a)(r.position,r.position,n),r}(t,r,e),d=new Float64Array(f.length),g=function(t,n,e,r,i){const o=(0,x.gr)(t,n,r,i);if(!o)return(0,x.CN)(y(),n,i),null;const c=new Float64Array(o.length);return(0,_.t)(c,o,e),c}(f,n,s,d,l);if(!g)return null;const A=(0,c.Ge)(O,s),M=function(t,n,e,r,i,o,c){if(null==t)return null;const l=c??new Float32Array(t.length);return(0,x.X4)(t,n,e,r,i,l)?((0,_.b)(l,l,o),l):((0,x.CN)(y(),e,i),null)}(h,f,n,d,l,A,h!==t.normal?h:void 0);if(!M&&h)return null;const T=function(t,n,e,r,i,o,c){if(null==t)return null;const l=c??new Float32Array(t.length);return(0,x.xA)(t,n,e,r,i,l)?((0,_.b)(l,l,o,4),l):((0,x.CN)(y(),e,i),null)}(m,f,n,d,l,A,m!==t.tangent?m:void 0);return!T&&m?null:{position:g,normal:M,tangent:T}}(t,t.vertexSpace,n.origin,e):function({vertexAttributes:t,transform:n,spatialReference:e},{origin:r},i,o){const c=B(e,o,Y.SOURCE_AND_TARGET),l=r||!E(c)?(0,a.C)(R,n?.localMatrix??u.zK):null;l&&T(l,e,o,Y.SOURCE_AND_TARGET);const{position:f,normal:h,tangent:p}=l?v(t,l):t,m=o?.allowBufferReuse,d=m?f:new Float64Array(f.length);let g=f;if(r&&(g=(0,_.a)(d,g,r)),i){const t=(0,s.v)(C,i);g=(0,_.a)(d,g,t)}return{position:g!==t.position||m?g:g.slice(),normal:h!==t.normal||m?h:h?.slice(),tangent:p!==t.tangent||m?p:p?.slice()}}(t,t.vertexSpace,n.origin,e)}}function w(t,n){return n?.useEllipsoid&&(0,g.B3)(t)?h.Y0:(0,h.lO)(t)}function v(t,n){const e=new Float64Array(t.position.length);(0,_.t)(e,t.position,n);const r=t.normal?new Float32Array(t.normal.length):null,i=t.tangent?new Float32Array(t.tangent.length):null;return r&&t.normal&&(0,x.qs)(t.normal,r,n),i&&t.tangent&&(0,x.KM)(t.tangent,i,n),{position:e,normal:r,tangent:i}}function T(t,n,e,r){const i=B(n,e,r);E(i)||(0,a.hs)(t,t,[i,i,i])}function B(t,n,e){const r=!!(e&Y.SOURCE),i=!!(e&Y.TARGET),o=n?.sourceUnit,c=n?.targetUnit;if(!o&&!c)return 1;let l=S(o,t);r||!o||E(l)||(y().warn("source unit conversion not supported"),l=1);let a=1/S(c,t);return i||!c||E(a)||(y().warn("target unit conversion not supported"),a=1),l*a}function E(t){return(0,i.Io)(t,1)}function S(t,n){if(null==t)return 1;const e=(0,o.KX)(n);return 1/(0,o.oU)(e,"meters",t)}const R=(0,u.vt)(),N=(0,u.vt)(),O=(0,l.vt)(),C=(0,f.vt)(),X=(0,u.vt)();var Y;!function(t){t[t.NONE=0]="NONE",t[t.SOURCE=1]="SOURCE",t[t.TARGET=2]="TARGET",t[t.SOURCE_AND_TARGET=3]="SOURCE_AND_TARGET"}(Y||(Y={}))},28364:function(t,n,e){e.d(n,{CK:function(){return f},Hq:function(){return s},MW:function(){return h},TE:function(){return p},yJ:function(){return m}});var r=e(61090),i=e(80861),o=e(80347),c=e(1912),l=e(58823),a=e(93320);function u(){return i.A.getLogger("esri.geometry.Mesh")}function s(t){return null!=t.origin}function f(t){return s(t.vertexSpace)}function h(t,n){if(!s(t))return null;const[e,r,i]=t.origin;return new c.A({x:e,y:r,z:i,spatialReference:n})}function p(t,n){const{x:e,y:i,z:o,spatialReference:c}=t,s=[e,i,o??0];return void 0!==n?.geographic&&((0,r.io)(u(),"option: geographic",{replacement:"Use the `vertexSpace` option instead.",version:"4.29",warnOnce:!0}),n.vertexSpace&&u().warn("Deprecated geographic flag ignored since vertexSpace option is provided.")),"local"===(n?.vertexSpace??(f=n?.geographic,null==f?void 0:f?"local":"georeferenced")??function(t){return t.isGeographic||t.isWebMercator?"local":"georeferenced"}(c))?new a.A({origin:s}):new l.A({origin:s});var f}function m(t,n){return t.type===n.type&&(t.origin===n.origin||null!=t.origin&&null!=n.origin&&(0,o.p)(t.origin,n.origin))}}}]);
//# sourceMappingURL=4520.f3cac6e47db425467cb5.js.map