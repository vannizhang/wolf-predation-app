"use strict";(self.webpackChunkreact_redux_arcgis_boilerplate=self.webpackChunkreact_redux_arcgis_boilerplate||[]).push([[7942],{57942:function(e,r,t){t.r(r),t.d(r,{getGeometryServiceURL:function(){return c},projectGeometry:function(){return u}});var n=t(32083),i=t(62991),o=t(83382),a=t(35497),l=t(15697);async function c(e=null,r){if(n.A.geometryServiceUrl)return n.A.geometryServiceUrl;if(!e)throw new i.A("internal:geometry-service-url-not-configured");let t;t="portal"in e?e.portal||o.A.getDefault():e,await t.load({signal:r});const a=t.helperServices?.geometry?.url;if(!a)throw new i.A("internal:geometry-service-url-not-configured");return a}async function u(e,r,t=null,n){const o=await c(t,n),u=new l.A({geometries:[e],outSpatialReference:r}),s=await(0,a.C)(o,u,{signal:n});if(s&&Array.isArray(s)&&1===s.length)return s[0];throw new i.A("internal:geometry-service-projection-failed")}}}]);
//# sourceMappingURL=7942.33d59ff03188cf55ec4a.js.map