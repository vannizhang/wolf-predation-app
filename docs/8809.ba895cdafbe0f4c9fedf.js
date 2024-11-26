"use strict";(self.webpackChunkreact_redux_arcgis_boilerplate=self.webpackChunkreact_redux_arcgis_boilerplate||[]).push([[8809],{51190:function(t,e,s){s.r(e),s.d(e,{default:function(){return _}});var r=s(82392),o=(s(3313),s(62991)),i=s(37623),n=s(19759),a=s(81482),p=s(6273),u=(s(80861),s(67498),s(25376)),l=s(26325),c=s(85049),d=s(11965),y=s(73462),h=s(74704),m=s(8e3);let f=class extends d.A{constructor(t){super(t),this.type="csv",this.refresh=(0,i.sg)((async t=>{await this.load();const{extent:e,timeExtent:s}=await this._connection.invoke("refresh",t);return e&&(this.sourceJSON.extent=e),s&&(this.sourceJSON.timeInfo.timeExtent=[s.start,s.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}}))}load(t){const e=null!=t?t.signal:null;return this.addResolvingPromise(this._startWorker(e)),Promise.resolve(this)}destroy(){this._connection?.close(),this._connection=null}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(t,e={}){await this.load(e);const s=await this._connection.invoke("queryFeatures",t?t.toJSON():null,e);return h.A.fromJSON(s)}async queryFeaturesJSON(t,e={}){return await this.load(e),this._connection.invoke("queryFeatures",t?t.toJSON():null,e)}async queryFeatureCount(t,e={}){return await this.load(e),this._connection.invoke("queryFeatureCount",t?t.toJSON():null,e)}async queryObjectIds(t,e={}){return await this.load(e),this._connection.invoke("queryObjectIds",t?t.toJSON():null,e)}async queryExtent(t,e={}){await this.load(e);const s=await this._connection.invoke("queryExtent",t?t.toJSON():null,e);return{count:s.count,extent:m.A.fromJSON(s.extent)}}async querySnapping(t,e={}){return await this.load(e),this._connection.invoke("querySnapping",t,e)}async _startWorker(t){this._connection=await(0,y.ho)("CSVSourceWorker",{strategy:(0,p.A)("feature-layers-workers")?"dedicated":"local",signal:t,registryTarget:this});const{url:e,delimiter:s,fields:r,latitudeField:o,longitudeField:i,spatialReference:n,timeInfo:a}=this.loadOptions,u=await this._connection.invoke("load",{url:e,customParameters:this.customParameters,parsingOptions:{delimiter:s,fields:r?.map((t=>t.toJSON())),latitudeField:o,longitudeField:i,spatialReference:n?.toJSON(),timeInfo:a?.toJSON()}},{signal:t});this.locationInfo=u.locationInfo,this.sourceJSON=u.layerDefinition,this.delimiter=u.delimiter}};(0,r._)([(0,a.MZ)()],f.prototype,"type",void 0),(0,r._)([(0,a.MZ)()],f.prototype,"loadOptions",void 0),(0,r._)([(0,a.MZ)()],f.prototype,"customParameters",void 0),(0,r._)([(0,a.MZ)()],f.prototype,"locationInfo",void 0),(0,r._)([(0,a.MZ)()],f.prototype,"sourceJSON",void 0),(0,r._)([(0,a.MZ)()],f.prototype,"delimiter",void 0),f=(0,r._)([(0,l.$)("esri.layers.graphics.sources.CSVSource")],f);var g=s(77159),v=s(33432),S=s(55714),F=s(44153);function C(t,e){throw new o.A(e,`CSVLayer (title: ${t.title}, id: ${t.id}) cannot be saved to a portal item`)}let w=class extends c.default{constructor(...t){super(...t),this.geometryType="point",this.capabilities=(0,g.f)(!1,!1),this.delimiter=null,this.editingEnabled=!1,this.fields=null,this.latitudeField=null,this.locationType="coordinates",this.longitudeField=null,this.operationalLayerType="CSV",this.outFields=["*"],this.path=null,this.spatialReference=F.A.WGS84,this.source=null,this.type="csv"}normalizeCtorArgs(t,e){return"string"==typeof t?{url:t,...e}:t}load(t){const e=null!=t?t.signal:null,s=this.loadFromPortal({supportedTypes:["CSV"],supportsData:!1},t).catch(i.QP).then((async()=>this.initLayerProperties(await this.createGraphicsSource(e))));return this.addResolvingPromise(s),Promise.resolve(this)}get isTable(){return this.loaded&&null==this.geometryType}readWebMapLabelsVisible(t,e){return null!=e.showLabels?e.showLabels:!!e.layerDefinition?.drawingInfo?.labelingInfo}set url(t){if(!t)return void this._set("url",t);const e=(0,n.An)(t);this._set("url",e.path),e.query&&(this.customParameters={...this.customParameters,...e.query})}async createGraphicsSource(t){const e=new f({loadOptions:{delimiter:this.delimiter,fields:this.fields,latitudeField:this.latitudeField??void 0,longitudeField:this.longitudeField??void 0,spatialReference:this.spatialReference??void 0,timeInfo:this.timeInfo??void 0,url:this.url},customParameters:this.customParameters??void 0});return this._set("source",e),await e.load({signal:t}),this.read({locationInfo:e.locationInfo,columnDelimiter:e.delimiter},{origin:"service",url:this.parsedUrl}),e}queryFeatures(t,e){return this.load().then((()=>this.source.queryFeatures(v.A.from(t)||this.createQuery()))).then((t=>{if(t?.features)for(const e of t.features)e.layer=e.sourceLayer=this;return t}))}queryObjectIds(t,e){return this.load().then((()=>this.source.queryObjectIds(v.A.from(t)||this.createQuery())))}queryFeatureCount(t,e){return this.load().then((()=>this.source.queryFeatureCount(v.A.from(t)||this.createQuery())))}queryExtent(t,e){return this.load().then((()=>this.source.queryExtent(v.A.from(t)||this.createQuery())))}read(t,e){super.read(t,e),e&&"service"===e.origin&&this.revert(["latitudeField","longitudeField"],"service")}write(t,e){return super.write(t,{...e,writeLayerSchema:!0})}clone(){throw new o.A("csv-layer:clone",`CSVLayer (title: ${this.title}, id: ${this.id}) cannot be cloned`)}async save(t){return C(this,"csv-layer:save")}async saveAs(t,e){return C(this,"csv-layer:save-as")}async hasDataChanged(){try{const{dataChanged:t,updates:e}=await this.source.refresh(this.customParameters);return null!=e&&this.read(e,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),t}catch{}return!1}_verifyFields(){}_verifySource(){}_hasMemorySource(){return!1}};(0,r._)([(0,a.MZ)({readOnly:!0,json:{read:!1,write:!1}})],w.prototype,"capabilities",void 0),(0,r._)([(0,a.MZ)({type:[","," ",";","|","\t"],json:{read:{source:"columnDelimiter"},write:{target:"columnDelimiter",ignoreOrigin:!0}}})],w.prototype,"delimiter",void 0),(0,r._)([(0,a.MZ)({readOnly:!0,type:Boolean,json:{origins:{"web-scene":{read:!1,write:!1}}}})],w.prototype,"editingEnabled",void 0),(0,r._)([(0,a.MZ)({json:{read:{source:"layerDefinition.fields"},write:{target:"layerDefinition.fields"}}})],w.prototype,"fields",void 0),(0,r._)([(0,a.MZ)({type:Boolean,readOnly:!0})],w.prototype,"isTable",null),(0,r._)([(0,u.w)("web-map","labelsVisible",["layerDefinition.drawingInfo.labelingInfo","showLabels"])],w.prototype,"readWebMapLabelsVisible",null),(0,r._)([(0,a.MZ)({type:String,json:{read:{source:"locationInfo.latitudeFieldName"},write:{target:"locationInfo.latitudeFieldName",ignoreOrigin:!0}}})],w.prototype,"latitudeField",void 0),(0,r._)([(0,a.MZ)({type:["show","hide"]})],w.prototype,"listMode",void 0),(0,r._)([(0,a.MZ)({type:["coordinates"],json:{read:{source:"locationInfo.locationType"},write:{target:"locationInfo.locationType",ignoreOrigin:!0,isRequired:!0}}})],w.prototype,"locationType",void 0),(0,r._)([(0,a.MZ)({type:String,json:{read:{source:"locationInfo.longitudeFieldName"},write:{target:"locationInfo.longitudeFieldName",ignoreOrigin:!0}}})],w.prototype,"longitudeField",void 0),(0,r._)([(0,a.MZ)({type:["CSV"]})],w.prototype,"operationalLayerType",void 0),(0,r._)([(0,a.MZ)()],w.prototype,"outFields",void 0),(0,r._)([(0,a.MZ)({type:String,json:{origins:{"web-scene":{read:!1,write:!1}},read:!1,write:!1}})],w.prototype,"path",void 0),(0,r._)([(0,a.MZ)({json:{read:!1},cast:null,type:f,readOnly:!0})],w.prototype,"source",void 0),(0,r._)([(0,a.MZ)({json:{read:!1},value:"csv",readOnly:!0})],w.prototype,"type",void 0),(0,r._)([(0,a.MZ)({json:{read:S.r,write:{isRequired:!0,ignoreOrigin:!0,writer:S.w}}})],w.prototype,"url",null),w=(0,r._)([(0,l.$)("esri.layers.CSVLayer")],w);const _=w},52557:function(t,e,s){s.d(e,{F:function(){return r}});const r={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!0,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!0,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByAnonymous:!0,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},77159:function(t,e,s){s.d(e,{F0:function(){return p},Vx:function(){return c},e2:function(){return y},f:function(){return h}});var r=s(6273),o=s(15565),i=s(52557),n=s(21200),a=s(51103);function p(t){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===t||"esriGeometryMultipoint"===t?a.Cb:"esriGeometryPolyline"===t?a.yM:a.WR}}}const u=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let l=1;function c(t,e){if((0,r.A)("esri-csp-restrictions"))return()=>({[e]:null,...t});try{let s=`this${d(e)} = null;`;for(const e in t)s+=`this${d(e)} = ${JSON.stringify(t[e])};`;const r=new Function(`\n      return class AttributesClass$${l++} {\n        constructor() {\n          ${s};\n        }\n      }\n    `)();return()=>new r}catch(s){return()=>({[e]:null,...t})}}function d(t){return u.test(t)?`.${t}`:`["${t}"]`}function y(t={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,o.o8)(t)}}]}function h(t,e){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,isBranchVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:t},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:e,supportsDelete:e,supportsEditing:e,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryBins:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:e,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:i.F,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},queryBins:n.$,editing:{supportsGeometryUpdate:e,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}},21200:function(t,e,s){s.d(e,{$:function(){return r},P:function(){return o}});const r={supportsDate:!1,supportsFixedInterval:!1,supportsAutoInterval:!1,supportsFixedBoundaries:!1,supportedStatistics:void 0},o={analytics:{supportsCacheHint:!1},attachment:{supportsContentType:!1,supportsExifInfo:!1,supportsKeywords:!1,supportsName:!1,supportsSize:!1,supportsCacheHint:!1,supportsResize:!1},data:{isVersioned:!1,isBranchVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsAsyncApplyEdits:!1,zDefault:void 0},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryBins:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1,supportsAsyncConvert3D:!1},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},queryBins:r,query:{maxRecordCount:0,maxRecordCountFactor:0,standardMaxRecordCount:0,supportsCacheHint:!1,supportsCentroid:!1,supportsCompactGeometry:!1,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByAnonymous:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsSqlExpression:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsStatistics:!1,tileMaxRecordCount:0}}}}]);
//# sourceMappingURL=8809.ba895cdafbe0f4c9fedf.js.map