"use strict";(self.webpackChunkreact_redux_arcgis_boilerplate=self.webpackChunkreact_redux_arcgis_boilerplate||[]).push([[9810],{99810:function(t,e,n){n.r(e),n.d(e,{executeAttachmentQuery:function(){return c},fetchAttachments:function(){return u},processAttachmentQueryResult:function(){return d}});var o=n(6480),r=n(38116),i=n(19759),a=n(49173),s=n(82220);function l(t){const e=t.toJSON();return e.attachmentTypes&&(e.attachmentTypes=e.attachmentTypes.join(",")),e.keywords&&(e.keywords=e.keywords.join(",")),e.globalIds&&(e.globalIds=e.globalIds.join(",")),e.objectIds&&(e.objectIds=e.objectIds.join(",")),e.size&&(e.size=e.size.join(",")),e}function d(t,e){const n={};for(const r of e){const{parentObjectId:e,parentGlobalId:a,attachmentInfos:l}=r;for(const r of l){const{id:l}=r,d=(0,i.yM)((0,o.Y3)(`${t.path}/${e}/attachments/${l}`)),c=s.A.fromJSON(r);c.set({url:d,parentObjectId:e,parentGlobalId:a}),n[e]?n[e].push(c):n[e]=[c]}}return n}function c(t,e,n){let o={query:(0,a.z)({...t.query,f:"json",...l(e)})};return n&&(o={...n,...o,query:{...n.query,...o.query}}),(0,r.A)(t.path+"/queryAttachments",o).then((t=>t.data.attachmentGroups))}async function u(t,e,n){const{objectIds:o}=e,i=[];for(const e of o)i.push((0,r.A)(t.path+"/"+e+"/attachments",n));return Promise.all(i).then((t=>o.map(((e,n)=>({parentObjectId:e,attachmentInfos:t[n].data.attachmentInfos})))))}},82220:function(t,e,n){n.d(e,{A:function(){return p}});var o,r=n(82392),i=n(84977),a=n(81482),s=n(8636),l=(n(67498),n(6273),n(26325));function d(t){const{exifInfo:e,exifName:n,tagName:o}=t;if(!e||!n||!o)return null;const r=e.find((t=>t.name===n));return r?function(t){const{tagName:e,tags:n}=t;if(!n||!e)return null;const o=n.find((t=>t.name===e));return o?.value||null}({tagName:o,tags:r.tags}):null}const c={1:{id:1,rotation:0,mirrored:!1},2:{id:2,rotation:0,mirrored:!0},3:{id:3,rotation:180,mirrored:!1},4:{id:4,rotation:180,mirrored:!0},5:{id:5,rotation:-90,mirrored:!0},6:{id:6,rotation:90,mirrored:!1},7:{id:7,rotation:90,mirrored:!0},8:{id:8,rotation:-90,mirrored:!1}};let u=o=class extends i.oY{constructor(t){super(t),this.contentType=null,this.exifInfo=null,this.id=null,this.globalId=null,this.keywords=null,this.name=null,this.parentGlobalId=null,this.parentObjectId=null,this.size=null,this.url=null}get orientationInfo(){const{exifInfo:t}=this,e=d({exifName:"Exif IFD0",tagName:"Orientation",exifInfo:t});return c[e]||null}clone(){return new o({contentType:this.contentType,exifInfo:this.exifInfo,id:this.id,globalId:this.globalId,keywords:this.keywords,name:this.name,parentGlobalId:this.parentGlobalId,parentObjectId:this.parentObjectId,size:this.size,url:this.url})}};(0,r._)([(0,a.MZ)({type:String})],u.prototype,"contentType",void 0),(0,r._)([(0,a.MZ)()],u.prototype,"exifInfo",void 0),(0,r._)([(0,a.MZ)({readOnly:!0})],u.prototype,"orientationInfo",null),(0,r._)([(0,a.MZ)({type:s.jz})],u.prototype,"id",void 0),(0,r._)([(0,a.MZ)({type:String})],u.prototype,"globalId",void 0),(0,r._)([(0,a.MZ)({type:String})],u.prototype,"keywords",void 0),(0,r._)([(0,a.MZ)({type:String})],u.prototype,"name",void 0),(0,r._)([(0,a.MZ)({json:{read:!1}})],u.prototype,"parentGlobalId",void 0),(0,r._)([(0,a.MZ)({json:{read:!1}})],u.prototype,"parentObjectId",void 0),(0,r._)([(0,a.MZ)({type:s.jz})],u.prototype,"size",void 0),(0,r._)([(0,a.MZ)({json:{read:!1}})],u.prototype,"url",void 0),u=o=(0,r._)([(0,l.$)("esri.rest.query.support.AttachmentInfo")],u);const p=u}}]);
//# sourceMappingURL=9810.7dd7c32012d17c1422e3.js.map