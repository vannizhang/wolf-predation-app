"use strict";(self.webpackChunkreact_redux_arcgis_boilerplate=self.webpackChunkreact_redux_arcgis_boilerplate||[]).push([[4713],{30037:function(e,t,n){function s(e){return null!=a(e)||null!=o(e)}function r(e){return u.test(e)}function i(e){return a(e)??o(e)}function o(e){const t=new Date(e);return function(e,t){if(Number.isNaN(e.getTime()))return!1;let n=!0;if(p&&/\d+\W*$/.test(t)){const e=t.match(/[a-zA-Z]{2,}/);if(e){let t=!1,s=0;for(;!t&&s<=e.length;)t=!l.test(e[s]),s++;n=!t}}return n}(t,e)?Number.isNaN(t.getTime())?null:t.getTime()-6e4*t.getTimezoneOffset():null}function a(e){const t=u.exec(e);if(!t?.groups)return null;const n=t.groups,s=+n.year,r=+n.month-1,i=+n.day,o=+(n.hours??"0"),a=+(n.minutes??"0"),l=+(n.seconds??"0");if(o>23)return null;if(a>59)return null;if(l>59)return null;const p=n.ms??"0",c=p?+p.padEnd(3,"0").slice(0,3):0;let d;if(n.isUTC||!n.offsetSign)d=Date.UTC(s,r,i,o,a,l,c);else{const e=+n.offsetHours,t=+n.offsetMinutes;d=6e4*("+"===n.offsetSign?-1:1)*(60*e+t)+Date.UTC(s,r,i,o,a,l,c)}return Number.isNaN(d)?null:d}n.d(t,{Br:function(){return r},Cq:function(){return s},_U:function(){return i}});const u=/^(?:(?<year>-?\d{4,})-(?<month>\d{2})-(?<day>\d{2}))(?:T(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?:\.(?<ms>\d+))?)?(?:(?<isUTC>Z)|(?:(?<offsetSign>\+|-)(?<offsetHours>\d{2}):(?<offsetMinutes>\d{2})))?$/;const l=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,p=!Number.isNaN(new Date("technology 10").getTime())},38192:function(e,t,n){n.d(t,{B:function(){return l},GP:function(){return a},qg:function(){return p}});var s=n(21332),r=n(4631);const i={ar:[".",","],bg:[","," "],bs:[",","."],ca:[",","."],cs:[","," "],da:[",","."],de:[",","."],"de-ch":[".","’"],el:[",","."],en:[".",","],"en-au":[".",","],es:[",","."],"es-mx":[".",","],et:[","," "],fi:[","," "],fr:[","," "],"fr-ch":[","," "],he:[".",","],hi:[".",",","#,##,##0.###"],hr:[",","."],hu:[","," "],id:[",","."],it:[",","."],"it-ch":[".","’"],ja:[".",","],ko:[".",","],lt:[","," "],lv:[","," "],mk:[",","."],nb:[","," "],nl:[",","."],pl:[","," "],pt:[",","."],"pt-pt":[","," "],ro:[",","."],ru:[","," "],sk:[","," "],sl:[",","."],sr:[",","."],sv:[","," "],th:[".",","],tr:[",","."],uk:[","," "],vi:[",","."],zh:[".",","]};function o(e=(0,r.JK)()){let t=(e=e.toLowerCase())in i;if(!t){const n=e.split("-");n.length>1&&n[0]in i&&(e=n[0],t=!0),t||(e="en")}const[n,s,o="#,##0.###"]=i[e];return{decimal:n,group:s,pattern:o}}function a(e,t){const n=o((t={...t}).locale);t.customs=n;const s=t.pattern||n.pattern;return isNaN(e)||Math.abs(e)===1/0?null:function(e,t,n){const s=(n=n||{}).customs.group,r=n.customs.decimal,i=t.split(";"),o=i[0];if((t=i[e<0?1:0]||"-"+o).includes("%"))e*=100;else if(t.includes("‰"))e*=1e3;else{if(t.includes("¤"))throw new Error("currency notation not supported");if(t.includes("E"))throw new Error("exponential notation not supported")}const a=u,l=o.match(a);if(!l)throw new Error("unable to find a number expression in pattern: "+t);return!1===n.fractional&&(n.places=0),t.replace(a,function(e,t,n){!0===(n=n||{}).places&&(n.places=0),n.places===1/0&&(n.places=6);const s=t.split("."),r="string"==typeof n.places&&n.places.indexOf(",");let i=n.places;r?i=n.places.slice(r+1):+i>=0||(i=(s[1]||[]).length),n.round<0||(e=Number(e.toFixed(Number(i))));const o=String(Math.abs(e)).split("."),a=o[1]||"";if(s[1]||n.places){r&&(n.places=n.places.slice(0,Math.max(0,r)));const e=void 0!==n.places?n.places:s[1]&&s[1].lastIndexOf("0")+1;+e>a.length&&(o[1]=a.padEnd(Number(e),"0")),+i<a.length&&(o[1]=a.slice(0,Math.max(0,Number(i))))}else o[1]&&o.pop();const u=s[0].replace(",","");let l=u.indexOf("0");-1!==l&&(l=u.length-l,l>o[0].length&&(o[0]=o[0].padStart(l,"0")),u.includes("#")||(o[0]=o[0].slice(-l)));let p,c,d=s[0].lastIndexOf(",");if(-1!==d){p=s[0].length-d-1;const e=s[0].slice(0,d);d=e.lastIndexOf(","),-1!==d&&(c=e.length-d-1)}const f=[];for(let e=o[0];e;){const t=e.length-p;f.push(t>0?e.slice(Math.max(0,t)):e),e=t>0?e.slice(0,t):"",c&&(p=c,c=void 0)}return o[0]=f.reverse().join(n.group||","),o.join(n.decimal||".")}(e,l[0],{decimal:r,group:s,places:n.places,round:n.round}))}(e,s,t)}const u=/[#0,]*[#0](?:\.0*#*)?/;function l(e){const t=o((e=e||{}).locale),n=e.pattern||t.pattern,r=t.group,i=t.decimal;let a=1;if(n.includes("%"))a/=100;else if(n.includes("‰"))a/=1e3;else if(n.includes("¤"))throw new Error("currency notation not supported");const l=n.split(";");1===l.length&&l.push("-"+l[0]);const p=d(l,(t=>(t="(?:"+(0,s.Cj)(t,".")+")").replace(u,(t=>{const n={signed:!1,separator:e.strict?r:[r,""],fractional:e.fractional,decimal:i,exponent:!1},s=t.split(".");let o=e.places;1===s.length&&1!==a&&(s[1]="###"),1===s.length||0===o?n.fractional=!1:(void 0===o&&(o=e.pattern?s[1].lastIndexOf("0")+1:1/0),o&&null==e.fractional&&(n.fractional=!0),!e.places&&+o<s[1].length&&(o+=","+s[1].length),n.places=o);const u=s[0].split(",");return u.length>1&&(n.groupSize=u.pop().length,u.length>1&&(n.groupSize2=u.pop().length)),"("+function(e){"places"in(e=e||{})||(e.places=1/0),"string"!=typeof e.decimal&&(e.decimal="."),"fractional"in e&&!String(e.places).startsWith("0")||(e.fractional=[!0,!1]),"exponent"in e||(e.exponent=[!0,!1]),"eSigned"in e||(e.eSigned=[!0,!1]);const t=c(e),n=d(e.fractional,(t=>{let n="";return t&&0!==e.places&&(n="\\"+e.decimal,e.places===1/0?n="(?:"+n+"\\d+)?":n+="\\d{"+e.places+"}"),n}),!0);let s=t+n;return n&&(s="(?:(?:"+s+")|(?:"+n+"))"),s+d(e.exponent,(t=>t?"([eE]"+c({signed:e.eSigned})+")":""))}(n)+")"}))),!0);return{regexp:p.replaceAll(/[\xa0 ]/g,"[\\s\\xa0]"),group:r,decimal:i,factor:a}}function p(e,t){const n=l(t),s=new RegExp("^"+n.regexp+"$").exec(e);if(!s)return NaN;let r=s[1];if(!s[1]){if(!s[2])return NaN;r=s[2],n.factor*=-1}return r=r.replaceAll(new RegExp("["+n.group+"\\s\\xa0]","g"),"").replace(n.decimal,"."),Number(r)*n.factor}function c(e){return"signed"in(e=e||{})||(e.signed=[!0,!1]),"separator"in e?"groupSize"in e||(e.groupSize=3):e.separator="",d(e.signed,(e=>e?"[-+]":""),!0)+d(e.separator,(t=>{if(!t)return"(?:\\d+)";" "===(t=(0,s.Cj)(t))?t="\\s":" "===t&&(t="\\s\\xa0");const n=e.groupSize,r=e.groupSize2;if(r){const e="(?:0|[1-9]\\d{0,"+(r-1)+"}(?:["+t+"]\\d{"+r+"})*["+t+"]\\d{"+n+"})";return n-r>0?"(?:"+e+"|(?:0|[1-9]\\d{0,"+(n-1)+"}))":e}return"(?:0|[1-9]\\d{0,"+(n-1)+"}(?:["+t+"]\\d{"+n+"})*)"}),!0)}const d=(e,t,n)=>{if(!Array.isArray(e))return t(e);const s=[];for(let n=0;n<e.length;n++)s.push(t(e[n]));return f(s.join("|"),Boolean(n))},f=(e,t)=>"("+(t?"?:":"")+e+")"},14713:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});n(3313);var s=n(38116),r=n(3132),i=n(30037),o=n(62991),a=n(80861),u=n(37623),l=n(19759),p=n(3034),c=n(94625),d=n(67488),f=n(64672),m=n(85747),h=n(65977),y=n(91582),g=n(48277),x=n(68119),F=n(38192),N=n(46227);function I(e,t,n){t=(0,N.rS)(t)?.toLowerCase(),n=(0,N.rS)(n)?.toLowerCase();const s=e.map((e=>e.toLowerCase())),r=t?e[s.indexOf(t)]:null,i=n?e[s.indexOf(n)]:null;return{longitudeFieldName:r||e[s.indexOf(_.find((e=>s.includes(e))))],latitudeFieldName:i||e[s.indexOf(w.find((e=>s.includes(e))))]}}const w=["lat","lat83","latitude","latitude83","latdecdeg","lat_dd","y","ycenter","point_y"],_=["lon","lng","lng83","long","long83","longitude","longitude83","longdecdeg","long_dd","x","xcenter","point_x"],S=/^\s*"([\S\s]*)"\s*$/,b=/""/g,T="\n",E=[","," ",";","|","\t"];function*A(e,t,n){let s=0;for(;s<=e.length;){const r=e.indexOf(t,s),i=e.slice(s,r>-1?r:void 0);s+=i.length+t.length,n&&!i.trim()||(yield i)}}function C(e){const t=e.includes("\r\n")?"\r\n":T;return A(e,t,!0)}function O(e,t){return A(e,t,!1)}function v(e,t,n){e=e.trim(),t=t?.trim();const s=[],r=Array.from(new Set([n?.delimiter,...E])).filter((e=>null!=e));for(const n of r){const r=R(e,n).length,i=R(t,n).length??r;r>1&&s.push({weight:Math.min(r,i),delimiter:n})}const i=s.sort((({weight:e},{weight:t})=>t-e)).map((({delimiter:e})=>e));for(const t of i){const s=I(D(e,t).names,n?.longitudeField,n?.latitudeField);if(s.longitudeFieldName&&s.latitudeFieldName)return{delimiter:t,locationInfo:s}}return{delimiter:i[0],locationInfo:null}}function*q(e,t,n,s=()=>Object.create(null)){const r=C(e);r.next();let i="",o="",a=0,u=s(),l=0;e:for(const e of r){const r=O(e,n);for(const e of r)if(i+=o+e,o="",a+=k(e),a%2==0){if(a>0){const e=S.exec(i);if(!e){u=s(),l=0,i="",a=0;continue e}u[t[l]]=e[1].replaceAll(b,'"'),l++}else u[t[l]]=i,l++;i="",a=0}else o=n;0===a?(yield u,u=s(),l=0):o=T}}function D(e,t){const n=R(e,t).filter((e=>null!=e)),s=n.map((e=>(0,N.rS)(e)));for(let e=s.length-1;e>=0;e--)s[e]||(s.splice(e,1),n.splice(e,1));return{names:s,aliases:n}}function R(e,t){if(!e?.length)return[];const n=[];let s="",r="",i=0;const o=O(e,t);for(const e of o)if(s+=r+e,r="",i+=k(e),i%2==0){if(i>0){const e=S.exec(s);e&&n.push(e[1].replaceAll(b,'"'))}else n.push(s);s="",i=0}else r=t;return n}function k(e){let t=0,n=0;for(n=e.indexOf('"',n);n>=0;)t++,n=e.indexOf('"',n+1);return t}function B(e,t,n,s,r){const i=[],o=q(e,n,t),a=[];for(const e of o){if(10===a.length)break;a.push(e)}for(let e=0;e<n.length;e++){const t=n[e],o=s[e];if(t===r.longitudeFieldName||t===r.latitudeFieldName)i.push({name:t,type:"esriFieldTypeDouble",alias:o});else{let e;switch(j(a.map((e=>e[t])))){case"integer":e="esriFieldTypeInteger";break;case"double":e="esriFieldTypeDouble";break;case"date":e="esriFieldTypeDate";break;default:e="esriFieldTypeString"}i.push({name:t,type:e,alias:o,length:(0,N._b)(e)})}}return i}function j(e){if(!e.length)return"string";const t=/[^+\-.,0-9]/;return e.map((e=>{if(""!==e){if(!t.test(e)){let t=M(e);if(!isNaN(t))return/[.,]/.test(e)||!Number.isInteger(t)||t>214783647||t<-214783648?"double":"integer";if(e.includes("E")){if(t=Number(e),!Number.isNaN(t))return"double";if(e.includes(",")&&(e=e.replace(",","."),t=Number(e),!Number.isNaN(t)))return"double"}}return(0,i.Cq)(e)?"date":"string"}})).reduce(((e,t)=>void 0===e?t:void 0===t?e:e===t?t:"string"===e||"string"===t?"string":"double"===e||"double"===t?"double":void 0))}const M=function(){const e=(0,F.B)(),t=new RegExp("^"+e.regexp+"$"),n=new RegExp("["+e.group+"\\s\\xa0]","g"),s=e.factor;return r=>{const i=t.exec(r);if(e.factor=s,!i)return NaN;let o=i[1];if(!i[1]){if(!i[2])return NaN;o=i[2],e.factor*=-1}return o=o.replace(n,"").replace(e.decimal,"."),+o*e.factor}}();function P(e){return JSON.parse(JSON.stringify(e))}var Q=n(77159),z=n(51387),U=n(23375),$=n(44153);const V=(0,Q.F0)("esriGeometryPoint"),G=["csv"],L=[0,0];class H{constructor(e,t){this.x=e,this.y=t}}class Z{constructor(){this._queryEngine=null,this._snapshotFeatures=async e=>{const t=await this._fetch(e);return this._createFeatures(t)}}destroy(){this._queryEngine?.destroy(),this._queryEngine=null}async load(e,t={}){this._loadOptions=e;const[n]=await Promise.all([this._fetch(t.signal),this._checkProjection(e?.parsingOptions?.spatialReference)]),s=function(e,t){const n=t.parsingOptions||{},s={delimiter:n.delimiter,layerDefinition:null,locationInfo:{latitudeFieldName:n.latitudeField,longitudeFieldName:n.longitudeField}},r=s.layerDefinition={name:(0,l.e7)(t.url,G)||"csv",dateFieldsTimeReference:{timeZoneIANA:U.n$},drawingInfo:V,geometryType:"esriGeometryPoint",objectIdField:null,fields:[],timeInfo:n.timeInfo,extent:{xmin:Number.POSITIVE_INFINITY,ymin:Number.POSITIVE_INFINITY,xmax:Number.NEGATIVE_INFINITY,ymax:Number.NEGATIVE_INFINITY,spatialReference:n.spatialReference||{wkid:4326}}},i=C(e),a=i.next().value?.trim(),u=i.next().value?.trim();if(!a)throw new o.A("csv-layer:empty-csv","CSV is empty",{csv:e});const{delimiter:p,locationInfo:c}=v(a,u,n);if(!p)throw new o.A("csv-layer:invalid-delimiter","Unable to detect the delimiter from CSV",{firstLine:a,secondLine:u,parsingOptions:n});if(!c)throw new o.A("csv-layer:location-fields-not-found","Unable to identify latitude and longitude fields from the CSV file",{firstLine:a,secondLine:u,parsingOptions:n});s.locationInfo=c,s.delimiter=p;const{names:d,aliases:f}=D(a,p),m=B(e,s.delimiter,d,f,s.locationInfo);if(n.fields?.length){const e=new z.A(n.fields);for(const t of m){const n=e.get(t.name);n&&Object.assign(t,n)}}if(!m.some((e=>"esriFieldTypeOID"===e.type&&(r.objectIdField=e.name,!0)))){const e={name:"__OBJECTID",alias:"__OBJECTID",type:"esriFieldTypeOID",editable:!1,nullable:!1};r.objectIdField=e.name,m.unshift(e)}r.fields=m;const h=new z.A(r.fields);if(s.locationInfo&&(s.locationInfo.latitudeFieldName=h.get(s.locationInfo.latitudeFieldName).name,s.locationInfo.longitudeFieldName=h.get(s.locationInfo.longitudeFieldName).name),r.timeInfo){const e=r.timeInfo;if(e.startTimeField){const t=h.get(e.startTimeField);t?(e.startTimeField=t.name,t.type="esriFieldTypeDate"):e.startTimeField=null}if(e.endTimeField){const t=h.get(e.endTimeField);t?(e.endTimeField=t.name,t.type="esriFieldTypeDate"):e.endTimeField=null}if(e.trackIdField){const t=h.get(e.trackIdField);e.trackIdField=t?t.name:null}e.startTimeField||e.endTimeField||(r.timeInfo=null)}return s}(n,e);this._locationInfo=s.locationInfo,this._delimiter=s.delimiter,this._queryEngine=this._createQueryEngine(s);const r=await this._createFeatures(n);this._queryEngine.featureStore.addMany(r);const{fullExtent:i,timeExtent:a}=await this._queryEngine.fetchRecomputedExtents();if(s.layerDefinition.extent=i,a){const{start:e,end:t}=a;s.layerDefinition.timeInfo.timeExtent=[e,t]}return s}async applyEdits(){throw new o.A("csv-layer:editing-not-supported","applyEdits() is not supported on CSVLayer")}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){this._loadOptions.customParameters=e,this._snapshotTask?.abort(),this._snapshotTask=(0,r.UT)(this._snapshotFeatures),this._snapshotTask.promise.then((e=>{this._queryEngine.featureStore.clear(),e&&this._queryEngine.featureStore.addMany(e)}),(e=>{this._queryEngine.featureStore.clear(),(0,u.zf)(e)||a.A.getLogger("esri.layers.CSVLayer").error(new o.A("csv-layer:refresh","An error occurred during refresh",{error:e}))})),await this._waitSnapshotComplete();const{fullExtent:t,timeExtent:n}=await this._queryEngine.fetchRecomputedExtents();return{extent:t,timeExtent:n}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _fetch(e){const{url:t,customParameters:n}=this._loadOptions;if(!t)throw new o.A("csv-layer:invalid-source","url not defined");const r=(0,l.An)(t);return(await(0,s.A)(r.path,{query:{...r.query,...n},responseType:"text",signal:e})).data}_createQueryEngine(e){const{objectIdField:t,fields:n,extent:s,timeInfo:r}=e.layerDefinition,i=new y.A({geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1});return new x.d({fieldsIndex:z.A.fromLayerJSON({fields:n,dateFieldsTimeReference:{timeZoneIANA:U.n$}}),geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1,timeInfo:r,objectIdField:t,spatialReference:s.spatialReference||{wkid:4326},featureStore:i})}async _createFeatures(e){const{latitudeFieldName:t,longitudeFieldName:n}=this._locationInfo,{objectIdField:s,fieldsIndex:r,spatialReference:o}=this._queryEngine;let a=[];const u=[],l=r.fields.filter((e=>e.name!==s)).map((e=>e.name));let y=0;const g={};for(const e of r.fields)if("esriFieldTypeOID"!==e.type&&"esriFieldTypeGlobalID"!==e.type){const t=(0,N.lD)(e);void 0!==t&&(g[e.name]=t)}const x=q(e,l,this._delimiter,(0,Q.Vx)(g,s));for(const e of x){const o=this._parseCoordinateValue(e[t]),l=this._parseCoordinateValue(e[n]);if(null!=l&&null!=o&&!isNaN(o)&&!isNaN(l)){e[t]=o,e[n]=l;for(const s in e)if(s!==t&&s!==n)if(r.isDateField(s))e[s]=(0,i._U)(e[s]);else if(r.isNumericField(s)){const t=M(e[s]);isNaN(t)?e[s]=null:e[s]=t}else null!=e[s]&&(e[s]=P(e[s]));e[s]=y,y++,a.push(new H(l,o)),u.push(e)}}if(!(0,d.aI)({wkid:4326},o))if((0,d.K8)(o))for(const e of a)[e.x,e.y]=(0,f.je)(e.x,e.y,L);else a=(0,p.projectMany)(c.g,a,$.A.WGS84,o,null,null);const F=[];for(let e=0;e<a.length;e++){const{x:t,y:n}=a[e],r=u[e];r[s]=e+1,F.push(new m.Om(new h.A([],[t,n]),r,null,r[s]))}return F}_parseCoordinateValue(e){if(null==e||""===e)return null;let t=M(e);return(isNaN(t)||Math.abs(t)>181)&&(t=parseFloat(e)),t}async _checkProjection(e){try{await(0,g.Nk)(d.KK,e)}catch{throw new o.A("csv-layer:projection-not-supported","Projection not supported")}}}},77159:function(e,t,n){n.d(t,{F0:function(){return u},Vx:function(){return c},e2:function(){return f},f:function(){return m}});var s=n(6273),r=n(15565),i=n(52557),o=n(21200),a=n(51103);function u(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?a.Cb:"esriGeometryPolyline"===e?a.yM:a.WR}}}const l=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let p=1;function c(e,t){if((0,s.A)("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let n=`this${d(t)} = null;`;for(const t in e)n+=`this${d(t)} = ${JSON.stringify(e[t])};`;const s=new Function(`\n      return class AttributesClass$${p++} {\n        constructor() {\n          ${n};\n        }\n      }\n    `)();return()=>new s}catch(n){return()=>({[t]:null,...e})}}function d(e){return l.test(e)?`.${e}`:`["${e}"]`}function f(e={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,r.o8)(e)}}]}function m(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,isBranchVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryBins:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:i.F,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},queryBins:o.$,editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}},21200:function(e,t,n){n.d(t,{$:function(){return s},P:function(){return r}});const s={supportsDate:!1,supportsFixedInterval:!1,supportsAutoInterval:!1,supportsFixedBoundaries:!1,supportedStatistics:void 0},r={analytics:{supportsCacheHint:!1},attachment:{supportsContentType:!1,supportsExifInfo:!1,supportsKeywords:!1,supportsName:!1,supportsSize:!1,supportsCacheHint:!1,supportsResize:!1},data:{isVersioned:!1,isBranchVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsAsyncApplyEdits:!1,zDefault:void 0},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryBins:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1,supportsAsyncConvert3D:!1},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},queryBins:s,query:{maxRecordCount:0,maxRecordCountFactor:0,standardMaxRecordCount:0,supportsCacheHint:!1,supportsCentroid:!1,supportsCompactGeometry:!1,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByAnonymous:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsSqlExpression:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsStatistics:!1,tileMaxRecordCount:0}}}}]);
//# sourceMappingURL=4713.aa6acaba4702e4560b97.js.map