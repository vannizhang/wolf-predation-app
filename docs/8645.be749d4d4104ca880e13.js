"use strict";(self.webpackChunkreact_redux_arcgis_boilerplate=self.webpackChunkreact_redux_arcgis_boilerplate||[]).push([[8645],{68435:function(e,t,r){r.d(t,{oe:function(){return n}});var s=r(62088);function n(e,t=!1){return e<=s.y9?t?new Array(e).fill(0):new Array(e):new Float32Array(e)}},51831:function(e,t,r){r.d(t,{Dg:function(){return n},my:function(){return f},tM:function(){return c}});var s=r(62088);function n(e){if((0,s.cy)(e)){if(e.length<s.y9)return e}else if(e.length<s.y9)return Array.from(e);let t=!0,r=!0;return e.some(((e,s)=>(t=t&&0===e,r=r&&e===s,!t&&!r))),t?function(e){if(1===e)return u;if(e<s.y9)return new Array(e).fill(0);if(e>h.length){const t=Math.max(2*h.length,e);h=new Uint8Array(t)}return new Uint8Array(h.buffer,0,e)}(e.length):r?c(e.length):(0,s.cy)(e)||e.BYTES_PER_ELEMENT!==Uint16Array.BYTES_PER_ELEMENT?function(e){let t=!0;for(const r of e){if(r>=65536)return(0,s.cy)(e)?new Uint32Array(e):e;r>=256&&(t=!1)}return t?new Uint8Array(e):new Uint16Array(e)}(e):e}function f(e){return e<=s.y9?new Array(e):e<=65536?new Uint16Array(e):new Uint32Array(e)}let i=(()=>{const e=new Uint32Array(131072);for(let t=0;t<e.length;++t)e[t]=t;return e})();const u=[0],y=(()=>{const e=new Uint16Array(65536);for(let t=0;t<e.length;++t)e[t]=t;return e})();function c(e){if(1===e)return u;if(e<s.y9)return Array.from(new Uint16Array(y.buffer,0,e));if(e<y.length)return new Uint16Array(y.buffer,0,e);if(e>i.length){const t=Math.max(2*i.length,e);i=new Uint32Array(t);for(let e=0;e<i.length;e++)i[e]=e}return new Uint32Array(i.buffer,0,e)}let h=new Uint8Array(65536)},40041:function(e,t,r){r.d(t,{Y$:function(){return d},qB:function(){return m},Qt:function(){return V},My:function(){return X},bf:function(){return v},jZ:function(){return B},j0:function(){return b},Sx:function(){return E},E$:function(){return T},h:function(){return x},P:function(){return C},SL:function(){return w},gH:function(){return p},si:function(){return A},mJ:function(){return z},UL:function(){return k},D6:function(){return R},Yi:function(){return M},An:function(){return N},LC:function(){return S},xs:function(){return l},Xm:function(){return _},Vp:function(){return j},zD:function(){return G},m8:function(){return I},nS:function(){return F},H$:function(){return Y},eI:function(){return O},Eq:function(){return a},Aj:function(){return g},E7:function(){return D},Y4:function(){return H},TX:function(){return $},Uz:function(){return U},ml:function(){return P},XP:function(){return L}});class s{constructor(e,t,r=0,s,n){this.TypedArrayConstructor=e,this.elementCount=9;const f=this.TypedArrayConstructor;void 0===s&&(s=9*f.BYTES_PER_ELEMENT);const i=0===t.byteLength?0:r;this.typedBuffer=null==n?new f(t,i):new f(t,i,(n-r)/f.BYTES_PER_ELEMENT),this.typedBufferStride=s/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const s=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,s,this.stride,s+r*this.stride)}getMat(e,t){let r=e*this.typedBufferStride;for(let e=0;e<9;e++)t[e]=this.typedBuffer[r++];return t}setMat(e,t){let r=e*this.typedBufferStride;for(let e=0;e<9;e++)this.typedBuffer[r++]=t[e]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}copyFrom(e,t,r){const s=this.typedBuffer,n=t.typedBuffer;let f=e*this.typedBufferStride,i=r*t.typedBufferStride;for(let e=0;e<9;++e)s[f++]=n[i++]}get buffer(){return this.typedBuffer.buffer}}s.ElementCount=9;class n{constructor(e,t,r=0,s,n){this.TypedArrayConstructor=e,this.elementCount=16;const f=this.TypedArrayConstructor;void 0===s&&(s=16*f.BYTES_PER_ELEMENT);const i=0===t.byteLength?0:r;this.typedBuffer=null==n?new f(t,i):new f(t,i,(n-r)/f.BYTES_PER_ELEMENT),this.typedBufferStride=s/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const s=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,s,this.stride,s+r*this.stride)}getMat(e,t){let r=e*this.typedBufferStride;for(let e=0;e<16;e++)t[e]=this.typedBuffer[r++];return t}setMat(e,t){let r=e*this.typedBufferStride;for(let e=0;e<16;e++)this.typedBuffer[r++]=t[e]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}copyFrom(e,t,r){this.copyFromTypedBuffer(e,t.typedBuffer,r*t.typedBufferStride)}copyFromTypedBuffer(e,t,r){const s=this.typedBuffer;let n=e*this.typedBufferStride;for(let e=0;e<16;++e)s[n++]=t[r++]}get buffer(){return this.typedBuffer.buffer}}n.ElementCount=16;class f{constructor(e,t,r=0,s,n){this.TypedArrayConstructor=e,this.elementCount=1;const f=this.TypedArrayConstructor;void 0===s&&(s=f.BYTES_PER_ELEMENT);const i=0===t.byteLength?0:r;this.typedBuffer=null==n?new f(t,i):new f(t,i,(n-r)/f.BYTES_PER_ELEMENT),this.stride=s,this.typedBufferStride=s/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride)}sliceBuffer(e,t,r=this.count-t){const s=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,s,this.stride,s+r*this.stride)}get(e){return this.typedBuffer[e*this.typedBufferStride]}set(e,t){this.typedBuffer[e*this.typedBufferStride]=t}get buffer(){return this.typedBuffer.buffer}}f.ElementCount=1;var i=r(53334);class u{constructor(e,t,r=0,s,n){this.TypedArrayConstructor=e,this.elementCount=2;const f=this.TypedArrayConstructor;void 0===s&&(s=2*f.BYTES_PER_ELEMENT);const i=0===t.byteLength?0:r;this.typedBuffer=null==n?new f(t,i):new f(t,i,(n-r)/f.BYTES_PER_ELEMENT),this.typedBufferStride=s/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const s=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,s,this.stride,s+r*this.stride)}getVec(e,t){return e*=this.typedBufferStride,(0,i.hZ)(t,this.typedBuffer[e],this.typedBuffer[e+1])}setVec(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e]=t[1]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}setValues(e,t,r){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e]=r}copyFrom(e,t,r){const s=this.typedBuffer,n=t.typedBuffer;let f=e*this.typedBufferStride,i=r*t.typedBufferStride;s[f++]=n[i++],s[f]=n[i]}get buffer(){return this.typedBuffer.buffer}}u.ElementCount=2;var y=r(80347);class c{constructor(e,t,r=0,s,n){this.TypedArrayConstructor=e,this.elementCount=3;const f=this.TypedArrayConstructor;void 0===s&&(s=3*f.BYTES_PER_ELEMENT);const i=0===t.byteLength?0:r;this.typedBuffer=null==n?new f(t,i):new f(t,i,(n-r)/f.BYTES_PER_ELEMENT),this.typedBufferStride=s/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const s=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,s,this.stride,s+r*this.stride)}getVec(e,t){return e*=this.typedBufferStride,(0,y.i)(t,this.typedBuffer[e],this.typedBuffer[e+1],this.typedBuffer[e+2])}setVec(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e++]=t[1],this.typedBuffer[e]=t[2]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}setValues(e,t,r,s){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e++]=r,this.typedBuffer[e]=s}copyFrom(e,t,r){const s=this.typedBuffer,n=t.typedBuffer;let f=e*this.typedBufferStride,i=r*t.typedBufferStride;s[f++]=n[i++],s[f++]=n[i++],s[f]=n[i]}get buffer(){return this.typedBuffer.buffer}}c.ElementCount=3;var h=r(74772);class o{constructor(e,t,r=0,s,n){this.TypedArrayConstructor=e,this.start=r,this.elementCount=4;const f=this.TypedArrayConstructor;void 0===s&&(s=4*f.BYTES_PER_ELEMENT);const i=0===t.byteLength?0:r;this.typedBuffer=null==n?new f(t,i):new f(t,i,(n-r)/f.BYTES_PER_ELEMENT),this.typedBufferStride=s/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const s=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,s,this.stride,s+r*this.stride)}getVec(e,t){return e*=this.typedBufferStride,(0,h.s)(t,this.typedBuffer[e++],this.typedBuffer[e++],this.typedBuffer[e++],this.typedBuffer[e])}setVec(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e++]=t[1],this.typedBuffer[e++]=t[2],this.typedBuffer[e]=t[3]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}setValues(e,t,r,s,n){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e++]=r,this.typedBuffer[e++]=s,this.typedBuffer[e]=n}copyFrom(e,t,r){const s=this.typedBuffer,n=t.typedBuffer;let f=e*this.typedBufferStride,i=r*t.typedBufferStride;s[f++]=n[i++],s[f++]=n[i++],s[f++]=n[i++],s[f]=n[i]}get buffer(){return this.typedBuffer.buffer}}o.ElementCount=4;class d extends f{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32"}static fromTypedArray(e,t){return new d(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}d.ElementType="f32";class p extends u{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32"}slice(e,t){return this.sliceBuffer(p,e,t)}static fromTypedArray(e,t){return new p(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}p.ElementType="f32";class l extends c{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32"}slice(e,t){return this.sliceBuffer(l,e,t)}static fromTypedArray(e,t){return new l(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}l.ElementType="f32";class a extends o{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32"}slice(e,t){return this.sliceBuffer(a,e,t)}static fromTypedArray(e,t){return new a(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}a.ElementType="f32";class B extends s{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32"}slice(e,t){return this.sliceBuffer(B,e,t)}static fromTypedArray(e,t){return new B(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}B.ElementType="f32";class b extends s{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64"}slice(e,t){return this.sliceBuffer(b,e,t)}static fromTypedArray(e,t){return new b(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}b.ElementType="f64";class E extends n{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32"}slice(e,t){return this.sliceBuffer(E,e,t)}static fromTypedArray(e,t){return new E(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}E.ElementType="f32";class T extends n{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64"}slice(e,t){return this.sliceBuffer(T,e,t)}static fromTypedArray(e,t){return new T(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}T.ElementType="f64";class m extends f{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64"}slice(e,t){return this.sliceBuffer(m,e,t)}static fromTypedArray(e,t){return new m(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}m.ElementType="f64";class A extends u{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64"}slice(e,t){return this.sliceBuffer(A,e,t)}static fromTypedArray(e,t){return new A(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}A.ElementType="f64";class _ extends c{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64"}slice(e,t){return this.sliceBuffer(_,e,t)}static fromTypedArray(e,t){return new _(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}_.ElementType="f64";class g extends o{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64"}slice(e,t){return this.sliceBuffer(g,e,t)}static fromTypedArray(e,t){return new g(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}g.ElementType="f64";class w extends f{constructor(e,t=0,r,s){super(Uint8Array,e,t,r,s),this.elementType="u8"}slice(e,t){return this.sliceBuffer(w,e,t)}static fromTypedArray(e,t){return new w(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}w.ElementType="u8";class S extends u{constructor(e,t=0,r,s){super(Uint8Array,e,t,r,s),this.elementType="u8"}slice(e,t){return this.sliceBuffer(S,e,t)}static fromTypedArray(e,t){return new S(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}S.ElementType="u8";class O extends c{constructor(e,t=0,r,s){super(Uint8Array,e,t,r,s),this.elementType="u8"}slice(e,t){return this.sliceBuffer(O,e,t)}static fromTypedArray(e,t){return new O(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}O.ElementType="u8";class L extends o{constructor(e,t=0,r,s){super(Uint8Array,e,t,r,s),this.elementType="u8"}slice(e,t){return this.sliceBuffer(L,e,t)}static fromTypedArray(e,t){return new L(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}L.ElementType="u8";class x extends f{constructor(e,t=0,r,s){super(Uint16Array,e,t,r,s),this.elementType="u16"}slice(e,t){return this.sliceBuffer(x,e,t)}static fromTypedArray(e,t){return new x(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}x.ElementType="u16";class M extends u{constructor(e,t=0,r,s){super(Uint16Array,e,t,r,s),this.elementType="u16"}slice(e,t){return this.sliceBuffer(M,e,t)}static fromTypedArray(e,t){return new M(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}M.ElementType="u16";class F extends c{constructor(e,t=0,r,s){super(Uint16Array,e,t,r,s),this.elementType="u16"}slice(e,t){return this.sliceBuffer(F,e,t)}static fromTypedArray(e,t){return new F(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}F.ElementType="u16";class U extends o{constructor(e,t=0,r,s){super(Uint16Array,e,t,r,s),this.elementType="u16"}slice(e,t){return this.sliceBuffer(U,e,t)}static fromTypedArray(e,t){return new U(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}U.ElementType="u16";class C extends f{constructor(e,t=0,r,s){super(Uint32Array,e,t,r,s),this.elementType="u32"}slice(e,t){return this.sliceBuffer(C,e,t)}static fromTypedArray(e,t){return new C(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}C.ElementType="u32";class N extends u{constructor(e,t=0,r,s){super(Uint32Array,e,t,r,s),this.elementType="u32"}slice(e,t){return this.sliceBuffer(N,e,t)}static fromTypedArray(e,t){return new N(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}N.ElementType="u32";class Y extends c{constructor(e,t=0,r,s){super(Uint32Array,e,t,r,s),this.elementType="u32"}slice(e,t){return this.sliceBuffer(Y,e,t)}static fromTypedArray(e,t){return new Y(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}Y.ElementType="u32";class P extends o{constructor(e,t=0,r,s){super(Uint32Array,e,t,r,s),this.elementType="u32"}slice(e,t){return this.sliceBuffer(P,e,t)}static fromTypedArray(e,t){return new P(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}P.ElementType="u32";class v extends f{constructor(e,t=0,r,s){super(Int8Array,e,t,r,s),this.elementType="i8"}slice(e,t){return this.sliceBuffer(v,e,t)}static fromTypedArray(e,t){return new v(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}v.ElementType="i8";class R extends u{constructor(e,t=0,r,s){super(Int8Array,e,t,r,s),this.elementType="i8"}slice(e,t){return this.sliceBuffer(R,e,t)}static fromTypedArray(e,t){return new R(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}R.ElementType="i8";class I extends c{constructor(e,t=0,r,s){super(Int8Array,e,t,r,s),this.elementType="i8"}slice(e,t){return this.sliceBuffer(I,e,t)}static fromTypedArray(e,t){return new I(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}I.ElementType="i8";class $ extends o{constructor(e,t=0,r,s){super(Int8Array,e,t,r,s),this.elementType="i8"}slice(e,t){return this.sliceBuffer($,e,t)}static fromTypedArray(e,t){return new $(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}$.ElementType="i8";class V extends f{constructor(e,t=0,r,s){super(Int16Array,e,t,r,s),this.elementType="i16"}slice(e,t){return this.sliceBuffer(V,e,t)}static fromTypedArray(e,t){return new V(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}V.ElementType="i16";class z extends u{constructor(e,t=0,r,s){super(Int16Array,e,t,r,s),this.elementType="i16"}slice(e,t){return this.sliceBuffer(z,e,t)}static fromTypedArray(e,t){return new z(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}z.ElementType="i16";class j extends c{constructor(e,t=0,r,s){super(Int16Array,e,t,r,s),this.elementType="i16"}slice(e,t){return this.sliceBuffer(j,e,t)}static fromTypedArray(e,t){return new j(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}j.ElementType="i16";class D extends o{constructor(e,t=0,r,s){super(Int16Array,e,t,r,s),this.elementType="i16"}slice(e,t){return this.sliceBuffer(D,e,t)}static fromTypedArray(e,t){return new D(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}D.ElementType="i16";class X extends f{constructor(e,t=0,r,s){super(Int32Array,e,t,r,s),this.elementType="i32"}slice(e,t){return this.sliceBuffer(X,e,t)}static fromTypedArray(e,t){return new X(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}X.ElementType="i32";class k extends u{constructor(e,t=0,r,s){super(Int32Array,e,t,r,s),this.elementType="i32"}slice(e,t){return this.sliceBuffer(k,e,t)}static fromTypedArray(e,t){return new k(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}k.ElementType="i32";class G extends c{constructor(e,t=0,r,s){super(Int32Array,e,t,r,s),this.elementType="i32"}slice(e,t){return this.sliceBuffer(G,e,t)}static fromTypedArray(e,t){return new G(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}G.ElementType="i32";class H extends o{constructor(e,t=0,r,s){super(Int32Array,e,t,r,s),this.elementType="i32"}slice(e,t){return this.sliceBuffer(H,e,t)}static fromTypedArray(e,t){return new H(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}H.ElementType="i32"},38456:function(e,t,r){function s(e){switch(e){case"u8":case"i8":return 1;case"u16":case"i16":return 2;case"u32":case"i32":case"f32":return 4;case"f64":return 8}}r.d(t,{GJ:function(){return s}})},7724:function(e,t,r){r.d(t,{BP:function(){return y},l5:function(){return c}});var s=r(40041),n=r(38456),f=r(26421);class i{constructor(e,t){this.layout=e,this.buffer="number"==typeof t?new ArrayBuffer(t*e.stride):t;for(const t of e.fields.keys()){const r=e.fields.get(t);this[t]=new r.constructor(this.buffer,r.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(e,t){const r=this[e];return r&&r.elementCount===t.ElementCount&&r.elementType===t.ElementType?r:null}slice(e,t){return new i(this.layout,this.buffer.slice(e*this.stride,t*this.stride))}copyFrom(e,t=0,r=0,s=e.count){const n=this.stride;if(n%4==0){const f=new Uint32Array(e.buffer,t*n,s*n/4);new Uint32Array(this.buffer,r*n,s*n/4).set(f)}else{const f=new Uint8Array(e.buffer,t*n,s*n);new Uint8Array(this.buffer,r*n,s*n).set(f)}return this}get usedMemory(){return this.byteLength}dispose(){}}class u{constructor(e){this._stride=0,this._lastAligned=0,this._fields=new Map,e&&(this._stride=e.stride,e.fields.forEach((e=>this._fields.set(e[0],{...e[1],constructor:d(e[1].constructor)}))))}freeze(){return this}vec2f(e,t){return this._appendField(e,s.gH,t),this}vec2f64(e,t){return this._appendField(e,s.si,t),this}vec3f(e,t){return this._appendField(e,s.xs,t),this}vec3f64(e,t){return this._appendField(e,s.Xm,t),this}vec4f(e,t){return this._appendField(e,s.Eq,t),this}vec4f64(e,t){return this._appendField(e,s.Aj,t),this}mat3f(e,t){return this._appendField(e,s.jZ,t),this}mat3f64(e,t){return this._appendField(e,s.j0,t),this}mat4f(e,t){return this._appendField(e,s.Sx,t),this}mat4f64(e,t){return this._appendField(e,s.E$,t),this}vec4u8(e,t){return this._appendField(e,s.XP,t),this}f32(e,t){return this._appendField(e,s.Y$,t),this}f64(e,t){return this._appendField(e,s.qB,t),this}u8(e,t){return this._appendField(e,s.SL,t),this}u16(e,t){return this._appendField(e,s.h,t),this}i8(e,t){return this._appendField(e,s.bf,t),this}vec2i8(e,t){return this._appendField(e,s.D6,t),this}vec2i16(e,t){return this._appendField(e,s.mJ,t),this}vec2u8(e,t){return this._appendField(e,s.LC,t),this}vec4u16(e,t){return this._appendField(e,s.Uz,t),this}u32(e,t){return this._appendField(e,s.P,t),this}_appendField(e,t,r){if(this._fields.has(e))return void(0,f.vA)(!1,`${e} already added to vertex buffer layout`);const s=t.ElementCount*(0,n.GJ)(t.ElementType),i=this._stride;this._stride+=s,this._fields.set(e,{size:s,constructor:t,offset:i,optional:r})}createBuffer(e){return new i(this,e)}createView(e){return new i(this,e)}clone(){const e=new u;return e._stride=this._stride,e._fields=new Map,this._fields.forEach(((t,r)=>e._fields.set(r,t))),e.BufferType=this.BufferType,e}get stride(){if(this._lastAligned!==this._fields.size){let e=1;this._fields.forEach((t=>e=Math.max(e,(0,n.GJ)(t.constructor.ElementType)))),this._stride=Math.floor((this._stride+e-1)/e)*e,this._lastAligned=this._fields.size}return this._stride}get fields(){return this._fields}}function y(){return new u}class c{constructor(e){this.fields=new Array,e.fields.forEach(((e,t)=>{const r={...e,constructor:o(e.constructor)};this.fields.push([t,r])})),this.stride=e.stride}}const h=[s.Y$,s.gH,s.xs,s.Eq,s.jZ,s.Sx,s.qB,s.si,s.Xm,s.Aj,s.j0,s.E$,s.SL,s.LC,s.eI,s.XP,s.h,s.Yi,s.nS,s.Uz,s.P,s.An,s.H$,s.ml,s.bf,s.D6,s.m8,s.TX,s.Qt,s.mJ,s.Vp,s.E7,s.My,s.UL,s.zD,s.Y4];function o(e){return`${e.ElementType}_${e.ElementCount}`}function d(e){return p.get(e)}const p=new Map;h.forEach((e=>p.set(o(e),e)))},29386:function(e,t,r){r.d(t,{U:function(){return f}});var s=r(68716),n=r(67277);function f(e,t=0){const r=e.stride;return Array.from(e.fields.keys()).map((s=>{const f=e.fields.get(s),u=f.constructor.ElementCount,y=i(f.constructor.ElementType),c=f.offset,h=f.optional?.glNormalized??!1;return new n._(s,u,y,c,r,h,t)}))}function i(e){const t=u[e];if(t)return t;throw new Error("BufferType not supported in WebGL")}const u={u8:s.pe.UNSIGNED_BYTE,u16:s.pe.UNSIGNED_SHORT,u32:s.pe.UNSIGNED_INT,i8:s.pe.BYTE,i16:s.pe.SHORT,i32:s.pe.INT,f32:s.pe.FLOAT}},26421:function(e,t,r){r.d(t,{O_:function(){return f},vA:function(){return n}});r(56560),r(74772);(0,r(76982).vt)();class s{constructor(e){this.message=e}toString(){return`AssertException: ${this.message}`}}function n(e,t="Assertion"){if(!e){const e=new Error(t).stack;throw new s(`${t} at ${e}`)}}function f(e,t,r,s){let n,f=(r[0]-e[0])/t[0],i=(s[0]-e[0])/t[0];f>i&&(n=f,f=i,i=n);let u=(r[1]-e[1])/t[1],y=(s[1]-e[1])/t[1];if(u>y&&(n=u,u=y,y=n),f>y||u>i)return!1;u>f&&(f=u),y<i&&(i=y);let c=(r[2]-e[2])/t[2],h=(s[2]-e[2])/t[2];return c>h&&(n=c,c=h,h=n),!(f>h||c>i||(h<i&&(i=h),i<0))}},67277:function(e,t,r){r.d(t,{_:function(){return s}});class s{constructor(e,t,r,s,n,f=!1,i=0){this.name=e,this.count=t,this.type=r,this.offset=s,this.stride=n,this.normalized=f,this.divisor=i}}}}]);
//# sourceMappingURL=8645.be749d4d4104ca880e13.js.map