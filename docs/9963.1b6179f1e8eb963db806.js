"use strict";(self.webpackChunkreact_redux_arcgis_boilerplate=self.webpackChunkreact_redux_arcgis_boilerplate||[]).push([[9963],{66335:function(e,t,r){r.d(t,{a:function(){return s},b:function(){return y},n:function(){return u},s:function(){return i},t:function(){return n}});r(6273);var f=r(80861);function s(e,t,r){n(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function n(e,t,r,f=4,s=f){if(e.length/f!=t.length/s)return;const n=e.length/f,u=r[0],i=r[1],y=r[2],c=r[3],d=r[4],o=r[5],h=r[6],p=r[7],l=r[8];let a=0,B=0;for(let r=0;r<n;r++){const r=t[a],n=t[a+1],b=t[a+2],T=t[a+3];e[B]=u*r+c*n+h*b,e[B+1]=i*r+d*n+p*b,e[B+2]=y*r+o*n+l*b,e[B+3]=T,a+=s,B+=f}}function u(e,t){const r=Math.min(e.count,t.count),f=e.typedBuffer,s=e.typedBufferStride,n=t.typedBuffer,u=t.typedBufferStride;for(let e=0;e<r;e++){const t=e*s,r=e*u,i=n[r],y=n[r+1],c=n[r+2],d=i*i+y*y+c*c;if(d>0){const e=1/Math.sqrt(d);f[t]=e*i,f[t+1]=e*y,f[t+2]=e*c}}}function i(e,t,r){y(e.typedBuffer,t,r,e.typedBufferStride)}function y(e,t,r,f=4){const s=Math.min(e.length/f,t.count),n=t.typedBuffer,u=t.typedBufferStride;let i=0,y=0;for(let t=0;t<s;t++)e[y]=r*n[i],e[y+1]=r*n[i+1],e[y+2]=r*n[i+2],e[y+3]=r*n[i+3],i+=u,y+=f}Object.freeze(Object.defineProperty({__proto__:null,normalize:u,scale:y,scaleView:i,transformMat3:n,transformMat3View:s,transformMat4:function(e,t,r,s=4,n=s){if(e.length/s!=t.length/n)return void f.A.getLogger("esri.views.3d.support.buffer.math").error("source and destination buffers need to have the same number of elements");const u=e.length/s,i=r[0],y=r[1],c=r[2],d=r[3],o=r[4],h=r[5],p=r[6],l=r[7],a=r[8],B=r[9],b=r[10],T=r[11],E=r[12],m=r[13],A=r[14],S=r[15];let g=0,O=0;for(let r=0;r<u;r++){const r=t[g],f=t[g+1],u=t[g+2],L=t[g+3];e[O]=i*r+o*f+a*u+E*L,e[O+1]=y*r+h*f+B*u+m*L,e[O+2]=c*r+p*f+b*u+A*L,e[O+3]=d*r+l*f+T*u+S*L,g+=n,O+=s}},transformMat4View:function(e,t,r){if(e.count!==t.count)return;const f=e.count,s=r[0],n=r[1],u=r[2],i=r[3],y=r[4],c=r[5],d=r[6],o=r[7],h=r[8],p=r[9],l=r[10],a=r[11],B=r[12],b=r[13],T=r[14],E=r[15],m=e.typedBuffer,A=e.typedBufferStride,S=t.typedBuffer,g=t.typedBufferStride;for(let e=0;e<f;e++){const t=e*A,r=e*g,f=S[r],O=S[r+1],L=S[r+2],w=S[r+3];m[t]=s*f+y*O+h*L+B*w,m[t+1]=n*f+c*O+p*L+b*w,m[t+2]=u*f+d*O+l*L+T*w,m[t+3]=i*f+o*O+a*L+E*w}}},Symbol.toStringTag,{value:"Module"}))},40041:function(e,t,r){r.d(t,{Y$:function(){return h},qB:function(){return m},Qt:function(){return j},My:function(){return X},bf:function(){return v},jZ:function(){return B},j0:function(){return b},Sx:function(){return T},E$:function(){return E},h:function(){return M},P:function(){return Y},SL:function(){return O},gH:function(){return p},si:function(){return A},mJ:function(){return k},UL:function(){return $},D6:function(){return U},Yi:function(){return x},An:function(){return N},LC:function(){return L},xs:function(){return l},Xm:function(){return S},Vp:function(){return z},zD:function(){return D},m8:function(){return I},nS:function(){return C},H$:function(){return R},eI:function(){return w},Eq:function(){return a},Aj:function(){return g},E7:function(){return q},Y4:function(){return H},TX:function(){return V},Uz:function(){return P},ml:function(){return F},XP:function(){return _}});class f{constructor(e,t,r=0,f,s){this.TypedArrayConstructor=e,this.elementCount=9;const n=this.TypedArrayConstructor;void 0===f&&(f=9*n.BYTES_PER_ELEMENT);const u=0===t.byteLength?0:r;this.typedBuffer=null==s?new n(t,u):new n(t,u,(s-r)/n.BYTES_PER_ELEMENT),this.typedBufferStride=f/n.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const f=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,f,this.stride,f+r*this.stride)}getMat(e,t){let r=e*this.typedBufferStride;for(let e=0;e<9;e++)t[e]=this.typedBuffer[r++];return t}setMat(e,t){let r=e*this.typedBufferStride;for(let e=0;e<9;e++)this.typedBuffer[r++]=t[e]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}copyFrom(e,t,r){const f=this.typedBuffer,s=t.typedBuffer;let n=e*this.typedBufferStride,u=r*t.typedBufferStride;for(let e=0;e<9;++e)f[n++]=s[u++]}get buffer(){return this.typedBuffer.buffer}}f.ElementCount=9;class s{constructor(e,t,r=0,f,s){this.TypedArrayConstructor=e,this.elementCount=16;const n=this.TypedArrayConstructor;void 0===f&&(f=16*n.BYTES_PER_ELEMENT);const u=0===t.byteLength?0:r;this.typedBuffer=null==s?new n(t,u):new n(t,u,(s-r)/n.BYTES_PER_ELEMENT),this.typedBufferStride=f/n.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const f=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,f,this.stride,f+r*this.stride)}getMat(e,t){let r=e*this.typedBufferStride;for(let e=0;e<16;e++)t[e]=this.typedBuffer[r++];return t}setMat(e,t){let r=e*this.typedBufferStride;for(let e=0;e<16;e++)this.typedBuffer[r++]=t[e]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}copyFrom(e,t,r){this.copyFromTypedBuffer(e,t.typedBuffer,r*t.typedBufferStride)}copyFromTypedBuffer(e,t,r){const f=this.typedBuffer;let s=e*this.typedBufferStride;for(let e=0;e<16;++e)f[s++]=t[r++]}get buffer(){return this.typedBuffer.buffer}}s.ElementCount=16;class n{constructor(e,t,r=0,f,s){this.TypedArrayConstructor=e,this.elementCount=1;const n=this.TypedArrayConstructor;void 0===f&&(f=n.BYTES_PER_ELEMENT);const u=0===t.byteLength?0:r;this.typedBuffer=null==s?new n(t,u):new n(t,u,(s-r)/n.BYTES_PER_ELEMENT),this.stride=f,this.typedBufferStride=f/n.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride)}sliceBuffer(e,t,r=this.count-t){const f=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,f,this.stride,f+r*this.stride)}get(e){return this.typedBuffer[e*this.typedBufferStride]}set(e,t){this.typedBuffer[e*this.typedBufferStride]=t}get buffer(){return this.typedBuffer.buffer}}n.ElementCount=1;var u=r(53334);class i{constructor(e,t,r=0,f,s){this.TypedArrayConstructor=e,this.elementCount=2;const n=this.TypedArrayConstructor;void 0===f&&(f=2*n.BYTES_PER_ELEMENT);const u=0===t.byteLength?0:r;this.typedBuffer=null==s?new n(t,u):new n(t,u,(s-r)/n.BYTES_PER_ELEMENT),this.typedBufferStride=f/n.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const f=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,f,this.stride,f+r*this.stride)}getVec(e,t){return e*=this.typedBufferStride,(0,u.hZ)(t,this.typedBuffer[e],this.typedBuffer[e+1])}setVec(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e]=t[1]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}setValues(e,t,r){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e]=r}copyFrom(e,t,r){const f=this.typedBuffer,s=t.typedBuffer;let n=e*this.typedBufferStride,u=r*t.typedBufferStride;f[n++]=s[u++],f[n]=s[u]}get buffer(){return this.typedBuffer.buffer}}i.ElementCount=2;var y=r(80347);class c{constructor(e,t,r=0,f,s){this.TypedArrayConstructor=e,this.elementCount=3;const n=this.TypedArrayConstructor;void 0===f&&(f=3*n.BYTES_PER_ELEMENT);const u=0===t.byteLength?0:r;this.typedBuffer=null==s?new n(t,u):new n(t,u,(s-r)/n.BYTES_PER_ELEMENT),this.typedBufferStride=f/n.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const f=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,f,this.stride,f+r*this.stride)}getVec(e,t){return e*=this.typedBufferStride,(0,y.i)(t,this.typedBuffer[e],this.typedBuffer[e+1],this.typedBuffer[e+2])}setVec(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e++]=t[1],this.typedBuffer[e]=t[2]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}setValues(e,t,r,f){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e++]=r,this.typedBuffer[e]=f}copyFrom(e,t,r){const f=this.typedBuffer,s=t.typedBuffer;let n=e*this.typedBufferStride,u=r*t.typedBufferStride;f[n++]=s[u++],f[n++]=s[u++],f[n]=s[u]}get buffer(){return this.typedBuffer.buffer}}c.ElementCount=3;var d=r(74772);class o{constructor(e,t,r=0,f,s){this.TypedArrayConstructor=e,this.start=r,this.elementCount=4;const n=this.TypedArrayConstructor;void 0===f&&(f=4*n.BYTES_PER_ELEMENT);const u=0===t.byteLength?0:r;this.typedBuffer=null==s?new n(t,u):new n(t,u,(s-r)/n.BYTES_PER_ELEMENT),this.typedBufferStride=f/n.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const f=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,f,this.stride,f+r*this.stride)}getVec(e,t){return e*=this.typedBufferStride,(0,d.s)(t,this.typedBuffer[e++],this.typedBuffer[e++],this.typedBuffer[e++],this.typedBuffer[e])}setVec(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e++]=t[1],this.typedBuffer[e++]=t[2],this.typedBuffer[e]=t[3]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}setValues(e,t,r,f,s){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e++]=r,this.typedBuffer[e++]=f,this.typedBuffer[e]=s}copyFrom(e,t,r){const f=this.typedBuffer,s=t.typedBuffer;let n=e*this.typedBufferStride,u=r*t.typedBufferStride;f[n++]=s[u++],f[n++]=s[u++],f[n++]=s[u++],f[n]=s[u]}get buffer(){return this.typedBuffer.buffer}}o.ElementCount=4;class h extends n{constructor(e,t=0,r,f){super(Float32Array,e,t,r,f),this.elementType="f32"}static fromTypedArray(e,t){return new h(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}h.ElementType="f32";class p extends i{constructor(e,t=0,r,f){super(Float32Array,e,t,r,f),this.elementType="f32"}slice(e,t){return this.sliceBuffer(p,e,t)}static fromTypedArray(e,t){return new p(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}p.ElementType="f32";class l extends c{constructor(e,t=0,r,f){super(Float32Array,e,t,r,f),this.elementType="f32"}slice(e,t){return this.sliceBuffer(l,e,t)}static fromTypedArray(e,t){return new l(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}l.ElementType="f32";class a extends o{constructor(e,t=0,r,f){super(Float32Array,e,t,r,f),this.elementType="f32"}slice(e,t){return this.sliceBuffer(a,e,t)}static fromTypedArray(e,t){return new a(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}a.ElementType="f32";class B extends f{constructor(e,t=0,r,f){super(Float32Array,e,t,r,f),this.elementType="f32"}slice(e,t){return this.sliceBuffer(B,e,t)}static fromTypedArray(e,t){return new B(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}B.ElementType="f32";class b extends f{constructor(e,t=0,r,f){super(Float64Array,e,t,r,f),this.elementType="f64"}slice(e,t){return this.sliceBuffer(b,e,t)}static fromTypedArray(e,t){return new b(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}b.ElementType="f64";class T extends s{constructor(e,t=0,r,f){super(Float32Array,e,t,r,f),this.elementType="f32"}slice(e,t){return this.sliceBuffer(T,e,t)}static fromTypedArray(e,t){return new T(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}T.ElementType="f32";class E extends s{constructor(e,t=0,r,f){super(Float64Array,e,t,r,f),this.elementType="f64"}slice(e,t){return this.sliceBuffer(E,e,t)}static fromTypedArray(e,t){return new E(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}E.ElementType="f64";class m extends n{constructor(e,t=0,r,f){super(Float64Array,e,t,r,f),this.elementType="f64"}slice(e,t){return this.sliceBuffer(m,e,t)}static fromTypedArray(e,t){return new m(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}m.ElementType="f64";class A extends i{constructor(e,t=0,r,f){super(Float64Array,e,t,r,f),this.elementType="f64"}slice(e,t){return this.sliceBuffer(A,e,t)}static fromTypedArray(e,t){return new A(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}A.ElementType="f64";class S extends c{constructor(e,t=0,r,f){super(Float64Array,e,t,r,f),this.elementType="f64"}slice(e,t){return this.sliceBuffer(S,e,t)}static fromTypedArray(e,t){return new S(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}S.ElementType="f64";class g extends o{constructor(e,t=0,r,f){super(Float64Array,e,t,r,f),this.elementType="f64"}slice(e,t){return this.sliceBuffer(g,e,t)}static fromTypedArray(e,t){return new g(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}g.ElementType="f64";class O extends n{constructor(e,t=0,r,f){super(Uint8Array,e,t,r,f),this.elementType="u8"}slice(e,t){return this.sliceBuffer(O,e,t)}static fromTypedArray(e,t){return new O(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}O.ElementType="u8";class L extends i{constructor(e,t=0,r,f){super(Uint8Array,e,t,r,f),this.elementType="u8"}slice(e,t){return this.sliceBuffer(L,e,t)}static fromTypedArray(e,t){return new L(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}L.ElementType="u8";class w extends c{constructor(e,t=0,r,f){super(Uint8Array,e,t,r,f),this.elementType="u8"}slice(e,t){return this.sliceBuffer(w,e,t)}static fromTypedArray(e,t){return new w(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}w.ElementType="u8";class _ extends o{constructor(e,t=0,r,f){super(Uint8Array,e,t,r,f),this.elementType="u8"}slice(e,t){return this.sliceBuffer(_,e,t)}static fromTypedArray(e,t){return new _(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}_.ElementType="u8";class M extends n{constructor(e,t=0,r,f){super(Uint16Array,e,t,r,f),this.elementType="u16"}slice(e,t){return this.sliceBuffer(M,e,t)}static fromTypedArray(e,t){return new M(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}M.ElementType="u16";class x extends i{constructor(e,t=0,r,f){super(Uint16Array,e,t,r,f),this.elementType="u16"}slice(e,t){return this.sliceBuffer(x,e,t)}static fromTypedArray(e,t){return new x(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}x.ElementType="u16";class C extends c{constructor(e,t=0,r,f){super(Uint16Array,e,t,r,f),this.elementType="u16"}slice(e,t){return this.sliceBuffer(C,e,t)}static fromTypedArray(e,t){return new C(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}C.ElementType="u16";class P extends o{constructor(e,t=0,r,f){super(Uint16Array,e,t,r,f),this.elementType="u16"}slice(e,t){return this.sliceBuffer(P,e,t)}static fromTypedArray(e,t){return new P(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}P.ElementType="u16";class Y extends n{constructor(e,t=0,r,f){super(Uint32Array,e,t,r,f),this.elementType="u32"}slice(e,t){return this.sliceBuffer(Y,e,t)}static fromTypedArray(e,t){return new Y(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}Y.ElementType="u32";class N extends i{constructor(e,t=0,r,f){super(Uint32Array,e,t,r,f),this.elementType="u32"}slice(e,t){return this.sliceBuffer(N,e,t)}static fromTypedArray(e,t){return new N(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}N.ElementType="u32";class R extends c{constructor(e,t=0,r,f){super(Uint32Array,e,t,r,f),this.elementType="u32"}slice(e,t){return this.sliceBuffer(R,e,t)}static fromTypedArray(e,t){return new R(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}R.ElementType="u32";class F extends o{constructor(e,t=0,r,f){super(Uint32Array,e,t,r,f),this.elementType="u32"}slice(e,t){return this.sliceBuffer(F,e,t)}static fromTypedArray(e,t){return new F(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}F.ElementType="u32";class v extends n{constructor(e,t=0,r,f){super(Int8Array,e,t,r,f),this.elementType="i8"}slice(e,t){return this.sliceBuffer(v,e,t)}static fromTypedArray(e,t){return new v(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}v.ElementType="i8";class U extends i{constructor(e,t=0,r,f){super(Int8Array,e,t,r,f),this.elementType="i8"}slice(e,t){return this.sliceBuffer(U,e,t)}static fromTypedArray(e,t){return new U(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}U.ElementType="i8";class I extends c{constructor(e,t=0,r,f){super(Int8Array,e,t,r,f),this.elementType="i8"}slice(e,t){return this.sliceBuffer(I,e,t)}static fromTypedArray(e,t){return new I(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}I.ElementType="i8";class V extends o{constructor(e,t=0,r,f){super(Int8Array,e,t,r,f),this.elementType="i8"}slice(e,t){return this.sliceBuffer(V,e,t)}static fromTypedArray(e,t){return new V(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}V.ElementType="i8";class j extends n{constructor(e,t=0,r,f){super(Int16Array,e,t,r,f),this.elementType="i16"}slice(e,t){return this.sliceBuffer(j,e,t)}static fromTypedArray(e,t){return new j(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}j.ElementType="i16";class k extends i{constructor(e,t=0,r,f){super(Int16Array,e,t,r,f),this.elementType="i16"}slice(e,t){return this.sliceBuffer(k,e,t)}static fromTypedArray(e,t){return new k(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}k.ElementType="i16";class z extends c{constructor(e,t=0,r,f){super(Int16Array,e,t,r,f),this.elementType="i16"}slice(e,t){return this.sliceBuffer(z,e,t)}static fromTypedArray(e,t){return new z(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}z.ElementType="i16";class q extends o{constructor(e,t=0,r,f){super(Int16Array,e,t,r,f),this.elementType="i16"}slice(e,t){return this.sliceBuffer(q,e,t)}static fromTypedArray(e,t){return new q(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}q.ElementType="i16";class X extends n{constructor(e,t=0,r,f){super(Int32Array,e,t,r,f),this.elementType="i32"}slice(e,t){return this.sliceBuffer(X,e,t)}static fromTypedArray(e,t){return new X(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}X.ElementType="i32";class $ extends i{constructor(e,t=0,r,f){super(Int32Array,e,t,r,f),this.elementType="i32"}slice(e,t){return this.sliceBuffer($,e,t)}static fromTypedArray(e,t){return new $(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}$.ElementType="i32";class D extends c{constructor(e,t=0,r,f){super(Int32Array,e,t,r,f),this.elementType="i32"}slice(e,t){return this.sliceBuffer(D,e,t)}static fromTypedArray(e,t){return new D(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}D.ElementType="i32";class H extends o{constructor(e,t=0,r,f){super(Int32Array,e,t,r,f),this.elementType="i32"}slice(e,t){return this.sliceBuffer(H,e,t)}static fromTypedArray(e,t){return new H(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}H.ElementType="i32"}}]);
//# sourceMappingURL=9963.1b6179f1e8eb963db806.js.map