"use strict";(self.webpackChunkreact_redux_arcgis_boilerplate=self.webpackChunkreact_redux_arcgis_boilerplate||[]).push([[4376],{24376:function(e,t,i){i.r(t),i.d(t,{default:function(){return B}});var r,s=i(82392),o=(i(3313),i(20879)),n=(i(42957),i(8499),i(72502),i(2394),i(1318),i(46243),i(79645),i(1851),i(29221)),a=i(83015),l=i(38116),d=i(14755),p=i(62991),c=i(70214),u=i(15565),h=i(80861),y=i(67214),m=i(37623),f=i(81482),g=i(8636),v=i(25376),w=i(26325),b=i(54483),_=i(45449),S=i(30179),I=i(20923),M=i(27303),Z=i(23091),x=i(71519),A=i(4648),j=i(60368),R=i(51177),T=i(22111),F=i(2960),P=i(9014),k=i(16948),O=i(45352),E=i(83693),D=i(46227),C=i(15724),N=i(6488),U=i(84977);i(6273),i(67498);let L=r=class extends U.oY{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1}clone(){return new r({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};(0,s._)([(0,f.MZ)({type:Number,json:{write:!0}})],L.prototype,"age",void 0),(0,s._)([(0,f.MZ)({type:Number,json:{write:!0}})],L.prototype,"ageReceived",void 0),(0,s._)([(0,f.MZ)({type:Number,json:{write:!0}})],L.prototype,"displayCount",void 0),(0,s._)([(0,f.MZ)({type:Number,json:{write:!0}})],L.prototype,"maxObservations",void 0),L=r=(0,s._)([(0,w.$)("esri.layers.support.PurgeOptions")],L);const V=L;var J=i(99650),G=i(33432),z=i(95610),$=i(44223),X=i(29759),q=i(44153),W=i(8e3);const Q=(0,E.p)();function Y(e,t){return new p.A("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${t}`,{layer:e})}let H=class extends((0,x.J)((0,Z.F)((0,I.dM)((0,F.e)((0,T.j)((0,R.J)((0,S.b)((0,A.q)((0,j.A)((0,y.P)((0,M.d)((0,d.O)(_.A))))))))))))){constructor(...e){super(...e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.outFields=["*"],this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new V,this.refreshInterval=0,this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=q.A.WGS84,this.type="stream",this.url=null,this.updateInterval=300,this.useViewTime=!0,this.webSocketUrl=null,this._debouncedSaveOperations=(0,m.sg)((async(e,t,r)=>{const{save:s,saveAs:o}=await i.e(8380).then(i.bind(i,8380));switch(e){case X.X.SAVE:return s(this,t);case X.X.SAVE_AS:return o(this,r,t)}}))}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){if(!("WebSocket"in globalThis))return this.addResolvingPromise(Promise.reject(new p.A("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);const t=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service","Feed"]},e).catch(m.QP).then((()=>this._fetchService(t)))),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}set featureReduction(e){const t=this._normalizeFeatureReduction(e);this._set("featureReduction",t)}set renderer(e){(0,D.yp)(e,this.fieldsIndex),this._set("renderer",e)}readRenderer(e,t,i){t=t.layerDefinition||t;const r=t.drawingInfo?.renderer;if(r){const e=(0,n.L)(r,t,i)||void 0;return e||h.A.getLogger(this).error("Failed to create renderer",{rendererDefinition:t.drawingInfo.renderer,layer:this,context:i}),e}return(0,k.PD)(t,i)}async connect(e){const[{createConnection:t}]=await Promise.all([Promise.all([i.e(9155),i.e(2401)]).then(i.bind(i,29155)),this.load()]),r=this.geometryType?b.g.toJSON(this.geometryType):null,{customParameters:s=null,definitionExpression:o=null,geometryDefinition:n=null,maxReconnectionAttempts:a=0,maxReconnectionInterval:l=20,spatialReference:d=this.spatialReference}=e||this.createConnectionParameters(),p=t(this.parsedUrl,this.spatialReference,d,r,o,n,a,l,s??void 0),u=(0,c.vE)([this.on("send-message-to-socket",(e=>p.sendMessageToSocket(e))),this.on("send-message-to-client",(e=>p.sendMessageToClient(e)))]);return p.once("destroy",u.remove),p}createConnectionParameters(){return{spatialReference:this.spatialReference,customParameters:this.customParameters,definitionExpression:this.definitionExpression,geometryDefinition:this.geometryDefinition,maxReconnectionAttempts:this.maxReconnectionAttempts,maxReconnectionInterval:this.maxReconnectionInterval}}createPopupTemplate(e){return(0,z.tn)(this,e)}createQuery(){const e=new G.A;return e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1",e}getFieldDomain(e,t){if(!this.fields)return null;let i=null;return this.fields.some((t=>(t.name===e&&(i=t.domain),!!i))),i}getField(e){return this.fieldsIndex.get(e)}serviceSupportsSpatialReference(e){return!0}sendMessageToSocket(e){this.emit("send-message-to-socket",e)}sendMessageToClient(e){this.emit("send-message-to-client",e)}async save(e){return this._debouncedSaveOperations(X.X.SAVE,e)}async saveAs(e,t){return this._debouncedSaveOperations(X.X.SAVE_AS,t,e)}write(e,t){const i=t?.messages;return this.webSocketUrl?(i?.push(Y(this,"using a custom websocket connection cannot be written to web scenes and web maps")),null):this.parsedUrl?super.write(e,t):(i?.push(Y(this,"using a client-side only connection without a url cannot be written to web scenes and web maps")),null)}async _fetchService(e){if(!this.webSocketUrl&&this.parsedUrl){if(!this.sourceJSON){const{data:t}=await(0,l.A)(this.parsedUrl.path,{query:{f:"json",...this.customParameters,...this.parsedUrl.query},responseType:"json",signal:e});this.sourceJSON=t}}else{if(!this.timeInfo?.trackIdField)throw new p.A("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField){const e=this.fields.find((e=>"oid"===e.type))?.name;if(!e)throw new p.A("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");this.objectIdField=e}if(!this.fields)throw new p.A("stream-layer:missing-metadata","The stream layer fields must be specified.");if(this.fields.some((e=>e.name===this.objectIdField))||this.fields.push(new O.A({name:this.objectIdField,alias:this.objectIdField,type:"oid"})),!this.geometryType)throw new p.A("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.webSocketUrl&&(this.url=this.webSocketUrl)}return this.read(this.sourceJSON,{origin:"service",portalItem:this.portalItem,portal:this.portalItem?.portal,url:this.parsedUrl}),(0,D.yp)(this.renderer,this.fieldsIndex),(0,D.sv)(this.timeInfo,this.fieldsIndex),this.objectIdField||(this.objectIdField="__esri_stream_id__"),(0,J.L)(this,{origin:"service"})}};(0,s._)([(0,f.MZ)({type:String})],H.prototype,"copyright",void 0),(0,s._)([(0,f.MZ)({readOnly:!0})],H.prototype,"defaultPopupTemplate",null),(0,s._)([(0,f.MZ)({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],H.prototype,"definitionExpression",void 0),(0,s._)([(0,f.MZ)({type:String})],H.prototype,"displayField",void 0),(0,s._)([(0,f.MZ)({type:$.A})],H.prototype,"elevationInfo",void 0),(0,s._)([(0,f.MZ)({json:{origins:{"web-map":{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],H.prototype,"featureReduction",null),(0,s._)([(0,f.MZ)(Q.fields)],H.prototype,"fields",void 0),(0,s._)([(0,f.MZ)(Q.fieldsIndex)],H.prototype,"fieldsIndex",void 0),(0,s._)([(0,f.MZ)({type:W.A,json:{name:"layerDefinition.definitionGeometry",write:!0}})],H.prototype,"geometryDefinition",void 0),(0,s._)([(0,f.MZ)({type:b.g.apiValues,json:{read:{reader:b.g.read}}})],H.prototype,"geometryType",void 0),(0,s._)([(0,f.MZ)(P.kF)],H.prototype,"labelsVisible",void 0),(0,s._)([(0,f.MZ)({type:[C.A],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:N.w},write:!0}})],H.prototype,"labelingInfo",void 0),(0,s._)([(0,f.MZ)(P.fV)],H.prototype,"legendEnabled",void 0),(0,s._)([(0,f.MZ)({type:["show","hide"],json:{origins:{"portal-item":{read:!1,write:!1}}}})],H.prototype,"listMode",void 0),(0,s._)([(0,f.MZ)({type:g.jz})],H.prototype,"maxReconnectionAttempts",void 0),(0,s._)([(0,f.MZ)({type:g.jz})],H.prototype,"maxReconnectionInterval",void 0),(0,s._)([(0,f.MZ)(P.hG)],H.prototype,"maxScale",void 0),(0,s._)([(0,f.MZ)(P.hn)],H.prototype,"minScale",void 0),(0,s._)([(0,f.MZ)({type:String})],H.prototype,"objectIdField",void 0),(0,s._)([(0,f.MZ)({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],H.prototype,"operationalLayerType",void 0),(0,s._)([(0,f.MZ)({readOnly:!0})],H.prototype,"outFields",void 0),(0,s._)([(0,f.MZ)(P.M6)],H.prototype,"popupEnabled",void 0),(0,s._)([(0,f.MZ)({type:o.A,json:{name:"popupInfo",write:!0}})],H.prototype,"popupTemplate",void 0),(0,s._)([(0,f.MZ)({type:V})],H.prototype,"purgeOptions",void 0),(0,s._)([(0,f.MZ)({json:{read:!1,write:!1}})],H.prototype,"refreshInterval",void 0),(0,s._)([(0,f.MZ)({types:a.H,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{name:"layerDefinition.drawingInfo.renderer",types:a.X,write:!0}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],H.prototype,"renderer",null),(0,s._)([(0,v.w)("service","renderer",["drawingInfo.renderer","defaultSymbol"]),(0,v.w)("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],H.prototype,"readRenderer",null),(0,s._)([(0,f.MZ)((()=>{const e=(0,u.o8)(P.PY);return e.json.origins["portal-item"]={read:!1,write:!1},e})())],H.prototype,"screenSizePerspectiveEnabled",void 0),(0,s._)([(0,f.MZ)()],H.prototype,"sourceJSON",void 0),(0,s._)([(0,f.MZ)({type:q.A,json:{origins:{service:{read:{source:"spatialReference"}}}}})],H.prototype,"spatialReference",void 0),(0,s._)([(0,f.MZ)({json:{read:!1}})],H.prototype,"type",void 0),(0,s._)([(0,f.MZ)(P.OZ)],H.prototype,"url",void 0),(0,s._)([(0,f.MZ)({type:Number})],H.prototype,"updateInterval",void 0),(0,s._)([(0,f.MZ)({json:{read:!1,write:!1}})],H.prototype,"useViewTime",void 0),(0,s._)([(0,f.MZ)({type:String})],H.prototype,"webSocketUrl",void 0),H=(0,s._)([(0,w.$)("esri.layers.StreamLayer")],H);const B=H}}]);
//# sourceMappingURL=4376.c00a286810d9662c9d5f.js.map