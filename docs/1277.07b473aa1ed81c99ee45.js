"use strict";(self.webpackChunkreact_redux_arcgis_boilerplate=self.webpackChunkreact_redux_arcgis_boilerplate||[]).push([[1277],{30037:function(e,t,s){function n(e){return null!=o(e)||null!=u(e)}function r(e){return a.test(e)}function i(e){return o(e)??u(e)}function u(e){const t=new Date(e);return function(e,t){if(Number.isNaN(e.getTime()))return!1;let s=!0;if(l&&/\d+\W*$/.test(t)){const e=t.match(/[a-zA-Z]{2,}/);if(e){let t=!1,n=0;for(;!t&&n<=e.length;)t=!p.test(e[n]),n++;s=!t}}return s}(t,e)?Number.isNaN(t.getTime())?null:t.getTime()-6e4*t.getTimezoneOffset():null}function o(e){const t=a.exec(e);if(!t?.groups)return null;const s=t.groups,n=+s.year,r=+s.month-1,i=+s.day,u=+(s.hours??"0"),o=+(s.minutes??"0"),p=+(s.seconds??"0");if(u>23)return null;if(o>59)return null;if(p>59)return null;const l=s.ms??"0",d=l?+l.padEnd(3,"0").slice(0,3):0;let c;if(s.isUTC||!s.offsetSign)c=Date.UTC(n,r,i,u,o,p,d);else{const e=+s.offsetHours,t=+s.offsetMinutes;c=6e4*("+"===s.offsetSign?-1:1)*(60*e+t)+Date.UTC(n,r,i,u,o,p,d)}return Number.isNaN(c)?null:c}s.d(t,{Br:function(){return r},Cq:function(){return n},_U:function(){return i}});const a=/^(?:(?<year>-?\d{4,})-(?<month>\d{2})-(?<day>\d{2}))(?:T(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?:\.(?<ms>\d+))?)?(?:(?<isUTC>Z)|(?:(?<offsetSign>\+|-)(?<offsetHours>\d{2}):(?<offsetMinutes>\d{2})))?$/;const p=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,l=!Number.isNaN(new Date("technology 10").getTime())},36355:function(e,t,s){s.d(t,{H:function(){return r},L:function(){return n}});const n=1;function r(e,t){let s=0;for(const n of t){const t=n.attributes?.[e];"number"==typeof t&&isFinite(t)&&(s=Math.max(s,t))}return s}},81277:function(e,t,s){s.r(t),s.d(t,{default:function(){return x}});var n=s(62991),r=s(56053),i=s(67488),u=s(5525),o=s(36355),a=s(91582),p=s(48277),l=s(68119),d=s(77159),c=s(84347),f=s(51387),y=s(94832),m=s(46227),h=s(23375);const g=i.KK,b={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:i.KK},F={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!0,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0,supportsQueryWithCacheHint:!0}};function I(e){return(0,r.fT)(e)?null!=e.z:!!e.hasZ}function T(e){return(0,r.fT)(e)?null!=e.m:!!e.hasM}class x{constructor(){this._queryEngine=null,this._nextObjectId=null}destroy(){this._queryEngine?.destroy(),this._queryEngine=this._createDefaultAttributes=null}async load(e){const t=[],{features:s}=e,r=this._inferLayerProperties(s,e.fields),i=e.fields||[],u=null!=e.hasM?e.hasM:!!r.hasM,c=null!=e.hasZ?e.hasZ:!!r.hasZ,I=!e.spatialReference&&!r.spatialReference,T=I?g:e.spatialReference||r.spatialReference,x=I?b:null,E=e.geometryType||r.geometryType,R=!E;let A=e.objectIdField||r.objectIdField,C=e.timeInfo;const _=new f.A(i);if(!R&&(I&&t.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!E))throw new n.A("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!A)throw new n.A("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");if(r.objectIdField&&A!==r.objectIdField&&(t.push({name:"feature-layer:duplicated-oid-field",message:`Provided objectIdField "${A}" doesn't match the field name "${r.objectIdField}", found in the provided fields`}),A=r.objectIdField),A&&!r.objectIdField){const e=_.get(A);e?(A=e.name,e.type="esriFieldTypeOID",e.editable=!1,e.nullable=!1):i.unshift({alias:A,name:A,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const e of i){if(null==e.name&&(e.name=e.alias),null==e.alias&&(e.alias=e.name),!e.name)throw new n.A("feature-layer:invalid-field-name","field name is missing",{field:e});if(e.name===A&&(e.type="esriFieldTypeOID"),!y.m.jsonValues.includes(e.type))throw new n.A("feature-layer:invalid-field-type",`invalid type for field "${e.name}"`,{field:e});null==e.length&&(e.length=(0,m._b)(e))}const S={};for(const e of i)if("esriFieldTypeOID"!==e.type&&"esriFieldTypeGlobalID"!==e.type){const t=(0,m.lD)(e);void 0!==t&&(S[e.name]=t)}if(C){if(C.startTimeField){const e=_.get(C.startTimeField);e?(C.startTimeField=e.name,e.type="esriFieldTypeDate"):C.startTimeField=null}if(C.endTimeField){const e=_.get(C.endTimeField);e?(C.endTimeField=e.name,e.type="esriFieldTypeDate"):C.endTimeField=null}if(C.trackIdField){const e=_.get(C.trackIdField);e?C.trackIdField=e.name:(C.trackIdField=null,t.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:C}}))}C.startTimeField||C.endTimeField||(t.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:C}}),C=null)}const D=_.dateFields.length?{timeZoneIANA:e.dateFieldsTimeZone??h.n$}:null;this._createDefaultAttributes=(0,d.Vx)(S,A);const q={warnings:t,featureErrors:[],layerDefinition:{...F,drawingInfo:(0,d.F0)(E),templates:(0,d.e2)(S),extent:x,geometryType:E,objectIdField:A,fields:i,hasZ:c,hasM:u,timeInfo:C,dateFieldsTimeReference:D},assignedObjectIds:{}};if(this._queryEngine=new l.d({fieldsIndex:f.A.fromLayerJSON({fields:i,timeInfo:C,dateFieldsTimeReference:D}),geometryType:E,hasM:u,hasZ:c,objectIdField:A,spatialReference:T,featureStore:new a.A({geometryType:E,hasM:u,hasZ:c}),timeInfo:C}),!s?.length)return this._nextObjectId=o.L,q;const j=(0,o.H)(A,s);return this._nextObjectId=j+1,await(0,p.Nk)(s,T),this._loadInitialFeatures(q,s)}async applyEdits(e){const{spatialReference:t,geometryType:s}=this._queryEngine;return await Promise.all([(0,c.$1)(t,s),(0,p.Nk)(e.adds,t),(0,p.Nk)(e.updates,t)]),this._applyEdits(e)}queryFeatures(e,t={}){return this._queryEngine.executeQuery(e,t.signal)}queryFeatureCount(e,t={}){return this._queryEngine.executeQueryForCount(e,t.signal)}queryObjectIds(e,t={}){return this._queryEngine.executeQueryForIds(e,t.signal)}queryExtent(e,t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)}querySnapping(e,t={}){return this._queryEngine.executeQueryForSnapping(e,t.signal)}_inferLayerProperties(e,t){let s,n,i=null,u=null,o=null;for(const t of e){const e=t.geometry;if(null!=e&&(i||(i=(0,r.$B)(e)),u||(u=e.spatialReference),null==s&&(s=I(e)),null==n&&(n=T(e)),i&&u&&null!=s&&null!=n))break}if(t&&t.length){let e=null;t.some((t=>{const s="esriFieldTypeOID"===t.type,n=!t.type&&t.name&&"objectid"===t.name.toLowerCase();return e=t,s||n}))&&(o=e.name)}return{geometryType:i,spatialReference:u,objectIdField:o,hasM:n,hasZ:s}}async _loadInitialFeatures(e,t){const{geometryType:s,hasM:n,hasZ:i,objectIdField:o,spatialReference:a,featureStore:l,fieldsIndex:d}=this._queryEngine,f=[];for(const n of t){if(null!=n.uid&&(e.assignedObjectIds[n.uid]=-1),n.geometry&&s!==(0,r.$B)(n.geometry)){e.featureErrors.push((0,c.Yx)("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),i=(0,c.MB)(d,t,n.attributes,!0);i?e.featureErrors.push(i):(this._assignObjectId(t,n.attributes,!0),n.attributes=t,null!=n.uid&&(e.assignedObjectIds[n.uid]=n.attributes[o]),null!=n.geometry&&(n.geometry=(0,p.Cv)(n.geometry,n.geometry.spatialReference,a)),f.push(n))}l.addMany((0,u.Di)([],f,s,i,n,o));const{fullExtent:y,timeExtent:m}=await this._queryEngine.fetchRecomputedExtents();if(e.layerDefinition.extent=y,m){const{start:t,end:s}=m;e.layerDefinition.timeInfo.timeExtent=[t,s]}return e}async _applyEdits(e){const{adds:t,updates:s,deletes:n}=e,r={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t?.length&&this._applyAddEdits(r,t),s?.length&&this._applyUpdateEdits(r,s),n?.length){for(const e of n)r.deleteResults.push((0,c.bP)(e));this._queryEngine.featureStore.removeManyById(n)}const{fullExtent:i,timeExtent:u}=await this._queryEngine.fetchRecomputedExtents();return{extent:i,timeExtent:u,featureEditResults:r}}_applyAddEdits(e,t){const{addResults:s}=e,{geometryType:n,hasM:i,hasZ:o,objectIdField:a,spatialReference:l,featureStore:d,fieldsIndex:f}=this._queryEngine,y=[];for(const i of t){if(i.geometry&&n!==(0,r.$B)(i.geometry)){s.push((0,c.Yx)("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),u=(0,c.MB)(f,t,i.attributes);if(u)s.push(u);else{if(this._assignObjectId(t,i.attributes),i.attributes=t,null!=i.uid){const t=i.attributes[a];e.uidToObjectId[i.uid]=t}if(null!=i.geometry){const e=i.geometry.spatialReference??l;i.geometry=(0,p.Cv)((0,c.CR)(i.geometry,e),e,l)}y.push(i),s.push((0,c.bP)(i.attributes[a]))}}d.addMany((0,u.Di)([],y,n,o,i,a))}_applyUpdateEdits({updateResults:e},t){const{geometryType:s,hasM:n,hasZ:i,objectIdField:o,spatialReference:a,featureStore:l,fieldsIndex:d}=this._queryEngine;for(const f of t){const{attributes:t,geometry:y}=f,m=t?.[o];if(null==m){e.push((0,c.Yx)(`Identifier field ${o} missing`));continue}if(!l.has(m)){e.push((0,c.Yx)(`Feature with object id ${m} missing`));continue}const h=(0,u.oN)(l.getFeature(m),s,i,n);if(null!=y){if(s!==(0,r.$B)(y)){e.push((0,c.Yx)("Incorrect geometry type."));continue}const t=y.spatialReference??a;h.geometry=(0,p.Cv)((0,c.CR)(y,t),t,a)}if(t){const s=(0,c.MB)(d,h.attributes,t);if(s){e.push(s);continue}}l.add((0,u.E2)(h,s,i,n,o)),e.push((0,c.bP)(m))}}_assignObjectId(e,t,s=!1){const n=this._queryEngine.objectIdField;s&&t&&isFinite(t[n])?e[n]=t[n]:e[n]=this._nextObjectId++}}},77159:function(e,t,s){s.d(t,{F0:function(){return a},Vx:function(){return d},e2:function(){return f},f:function(){return y}});var n=s(6273),r=s(15565),i=s(52557),u=s(21200),o=s(51103);function a(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?o.Cb:"esriGeometryPolyline"===e?o.yM:o.WR}}}const p=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let l=1;function d(e,t){if((0,n.A)("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let s=`this${c(t)} = null;`;for(const t in e)s+=`this${c(t)} = ${JSON.stringify(e[t])};`;const n=new Function(`\n      return class AttributesClass$${l++} {\n        constructor() {\n          ${s};\n        }\n      }\n    `)();return()=>new n}catch(s){return()=>({[t]:null,...e})}}function c(e){return p.test(e)?`.${e}`:`["${e}"]`}function f(e={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,r.o8)(e)}}]}function y(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,isBranchVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryBins:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:i.F,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},queryBins:u.$,editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}},84347:function(e,t,s){s.d(t,{$1:function(){return h},CR:function(){return m},MB:function(){return c},Yx:function(){return a},bP:function(){return l}});var n=s(30037),r=s(67488),i=s(46227);class u{constructor(){this.code=null,this.description=null}}class o{constructor(e){this.error=new u,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e}}function a(e){return new o(e)}class p{constructor(e){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e}}function l(e){return new p(e)}const d=new Set;function c(e,t,s,n=!1){d.clear();for(const r in s){const u=e.get(r);if(!u)continue;const o=f(u,s[r]);if(d.add(u.name),u&&(n||u.editable)){const e=(0,i.CJ)(u,o);if(e)return a((0,i.uo)(e,u,o));t[u.name]=o}}for(const t of e.requiredFields??[])if(!d.has(t.name))return a(`missing required field "${t.name}"`);return null}function f(e,t){let s=t;return(0,i.WA)(e)&&"string"==typeof t?s=parseFloat(t):(0,i.yM)(e)&&null!=t&&"string"!=typeof t?s=String(t):(0,i.vE)(e)&&"string"==typeof t&&(s=(0,n._U)(t)),(0,i.WX)(s)}let y;function m(e,t){if(!e||!(0,r.fn)(t))return e;if("rings"in e||"paths"in e){if(null==y)throw new TypeError("geometry engine not loaded");return y.simplify(t,e)}return e}async function h(e,t){!(0,r.fn)(e)||"esriGeometryPolygon"!==t&&"esriGeometryPolyline"!==t||await async function(){return null==y&&(y=await Promise.all([s.e(9694),s.e(4508)]).then(s.bind(s,30344))),y}()}},21200:function(e,t,s){s.d(t,{$:function(){return n},P:function(){return r}});const n={supportsDate:!1,supportsFixedInterval:!1,supportsAutoInterval:!1,supportsFixedBoundaries:!1,supportedStatistics:void 0},r={analytics:{supportsCacheHint:!1},attachment:{supportsContentType:!1,supportsExifInfo:!1,supportsKeywords:!1,supportsName:!1,supportsSize:!1,supportsCacheHint:!1,supportsResize:!1},data:{isVersioned:!1,isBranchVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsAsyncApplyEdits:!1,zDefault:void 0},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryBins:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1,supportsAsyncConvert3D:!1},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},queryBins:n,query:{maxRecordCount:0,maxRecordCountFactor:0,standardMaxRecordCount:0,supportsCacheHint:!1,supportsCentroid:!1,supportsCompactGeometry:!1,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByAnonymous:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsSqlExpression:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsStatistics:!1,tileMaxRecordCount:0}}}}]);
//# sourceMappingURL=1277.07b473aa1ed81c99ee45.js.map