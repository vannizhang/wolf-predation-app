"use strict";(self.webpackChunkreact_redux_arcgis_boilerplate=self.webpackChunkreact_redux_arcgis_boilerplate||[]).push([[1924,4812],{28300:function(e,t,n){n.d(t,{lY:function(){return m},mT:function(){return h}});var r,s=n(21332),i=n(69967),o=n(96285);(r||(r={})).TimeZoneNotRecognized="TimeZoneNotRecognized";const a={[r.TimeZoneNotRecognized]:"Timezone identifier has not been recognized."};class u extends Error{constructor(e,t){super((0,s.HC)(a[e],t)),this.declaredRootClass="esri.arcade.arcadedate.dateerror",Error.captureStackTrace&&Error.captureStackTrace(this,u)}}function c(e,t,n){return e<t?e-t:e>n?e-n:0}function l(e,t,n){return e<t?t:e>n?n:e}class m{constructor(e){this._date=e,this.declaredRootClass="esri.arcade.arcadedate"}static fromParts(e=0,t=1,n=1,r=0,s=0,i=0,a=0,u){if(isNaN(e)||isNaN(t)||isNaN(n)||isNaN(r)||isNaN(s)||isNaN(i)||isNaN(a))return null;const f=o.c9.local(e,t).daysInMonth;let d=o.c9.fromObject({day:l(n,1,f),year:e,month:l(t,1,12),hour:l(r,0,23),minute:l(s,0,59),second:l(i,0,59),millisecond:l(a,0,999)},{zone:h(u)});return d=d.plus({months:c(t,1,12),days:c(n,1,f),hours:c(r,0,23),minutes:c(s,0,59),seconds:c(i,0,59),milliseconds:c(a,0,999)}),new m(d)}static get systemTimeZoneCanonicalName(){return Intl.DateTimeFormat().resolvedOptions().timeZone??"system"}static arcadeDateAndZoneToArcadeDate(e,t){const n=h(t);return e.isUnknownTimeZone||n===i.GB.instance?m.fromParts(e.year,e.monthJS+1,e.day,e.hour,e.minute,e.second,e.millisecond,n):new m(e._date.setZone(n))}static dateJSToArcadeDate(e){return new m(o.c9.fromJSDate(e,{zone:"system"}))}static dateJSAndZoneToArcadeDate(e,t="system"){const n=h(t);return new m(o.c9.fromJSDate(e,{zone:n}))}static unknownEpochToArcadeDate(e){return new m(o.c9.fromMillis(e,{zone:i.GB.instance}))}static unknownDateJSToArcadeDate(e){return new m(o.c9.fromMillis(e.getTime(),{zone:i.GB.instance}))}static epochToArcadeDate(e,t="system"){const n=h(t);return new m(o.c9.fromMillis(e,{zone:n}))}static dateTimeToArcadeDate(e){return new m(e)}clone(){return new m(this._date)}changeTimeZone(e){const t=h(e);return m.dateTimeToArcadeDate(this._date.setZone(t))}static dateTimeAndZoneToArcadeDate(e,t){const n=h(t);return e.zone===i.GB.instance||n===i.GB.instance?m.fromParts(e.year,e.month,e.day,e.hour,e.minute,e.second,e.millisecond,n):new m(e.setZone(n))}static nowToArcadeDate(e){const t=h(e);return new m(o.c9.fromJSDate(new Date,{zone:t}))}static nowUTCToArcadeDate(){return new m(o.c9.utc())}get isSystem(){return"system"===this.timeZone||this.timeZone===m.systemTimeZoneCanonicalName}equals(e){return this.isSystem&&e.isSystem?this.toNumber()===e.toNumber():this.isUnknownTimeZone===e.isUnknownTimeZone&&this._date.equals(e._date)}get isUnknownTimeZone(){return this._date.zone===i.GB.instance}get isValid(){return this._date.isValid}get hour(){return this._date.hour}get second(){return this._date.second}get day(){return this._date.day}get dayOfWeekISO(){return this._date.weekday}get dayOfWeekJS(){let e=this._date.weekday;return e>6&&(e=0),e}get millisecond(){return this._date.millisecond}get monthISO(){return this._date.month}get weekISO(){return this._date.weekNumber}get yearISO(){return this._date.weekYear}get monthJS(){return this._date.month-1}get year(){return this._date.year}get minute(){return this._date.minute}get zone(){return this._date.zone}get timeZoneOffset(){return this.isUnknownTimeZone?0:this._date.offset}get timeZone(){if(this.isUnknownTimeZone)return"unknown";if("system"===this._date.zone.type)return"system";const e=this.zone;return"fixed"===e.type?0===e.fixed?"UTC":e.formatOffset(0,"short"):e.name}stringify(){return JSON.stringify(this.toJSDate())}plus(e){return new m(this._date.plus(e))}diff(e,t="milliseconds"){return this._date.diff(e._date,t)[t]}toISODate(){return this._date.toISODate()}toISOString(e){return e?this._date.toISO({suppressMilliseconds:!0,includeOffset:!this.isUnknownTimeZone}):this._date.toISO({includeOffset:!this.isUnknownTimeZone})}toISOTime(e,t){return this._date.toISOTime({suppressMilliseconds:e,includeOffset:t&&!this.isUnknownTimeZone})}toFormat(e,t){return this.isUnknownTimeZone&&(e=e.replaceAll("Z","")),this._date.toFormat(e,t)}toJSDate(){return this._date.toJSDate()}toSQLValue(){return this._date.toFormat("yyyy-LL-dd HH:mm:ss")}toSQLWithKeyword(){return`timestamp '${this.toSQLValue()}'`}toDateTime(){return this._date}toNumber(){return this._date.toMillis()}getTime(){return this._date.toMillis()}toUTC(){return new m(this._date.toUTC())}toLocal(){return new m(this._date.toLocal())}toString(){return this.toISOString(!0)}static fromReaderAsTimeStampOffset(e){if(!e)return null;const t=o.c9.fromISO(e,{setZone:!0});return new m(t)}}function h(e,t=!0){if(e instanceof o.bo)return e;if("system"===e.toLowerCase())return"system";if("utc"===e.toLowerCase())return"UTC";if("unknown"===e.toLowerCase())return i.GB.instance;if(/^[+-]?[0-9]{1,2}([:][0-9]{2})?$/.test(e)){const t=o.mQ.parseSpecifier("UTC"+(e.startsWith("+")||e.startsWith("-")?"":"+")+e);if(t)return t}const n=o.oh.create(e);if(!n.isValid){if(t)throw new u(r.TimeZoneNotRecognized);return null}return n}},91017:function(e,t,n){n.d(t,{Fq:function(){return u},SQ:function(){return o},Yc:function(){return i},Yq:function(){return a},uf:function(){return s}});var r=n(8e3);function s(e){if(null==e)return null;if("number"==typeof e)return e;let t=e.toLowerCase();switch(t=t.replaceAll(/\s/g,""),t=t.replaceAll("-",""),t){case"meters":case"meter":case"m":case"squaremeters":case"squaremeter":return 109404;case"miles":case"mile":case"squaremile":case"squaremiles":return 109439;case"kilometers":case"kilometer":case"squarekilometers":case"squarekilometer":case"km":return 109414;case"acres":case"acre":case"ac":return 109402;case"hectares":case"hectare":case"ha":return 109401;case"yard":case"yd":case"yards":case"squareyards":case"squareyard":return 109442;case"feet":case"ft":case"foot":case"squarefeet":case"squarefoot":return 109405;case"nmi":case"nauticalmile":case"nauticalmiles":case"squarenauticalmile":case"squarenauticalmiles":return 109409}return null}function i(e){if(null==e)return null;switch(e.type){case"polygon":case"multipoint":case"polyline":return e.extent;case"point":return new r.A({xmin:e.x,ymin:e.y,xmax:e.x,ymax:e.y,spatialReference:e.spatialReference});case"extent":return e}return null}function o(e){if(null==e)return null;if("number"==typeof e)return e;let t=e.toLowerCase();switch(t=t.replaceAll(/\s/g,""),t=t.replaceAll("-",""),t){case"meters":case"meter":case"m":case"squaremeters":case"squaremeter":return 9001;case"miles":case"mile":case"squaremile":case"squaremiles":return 9093;case"kilometers":case"kilometer":case"squarekilometers":case"squarekilometer":case"km":return 9036;case"yard":case"yd":case"yards":case"squareyards":case"squareyard":return 9096;case"feet":case"ft":case"foot":case"squarefeet":case"squarefoot":return 9002;case"nmi":case"nauticalmile":case"nauticalmiles":case"squarenauticalmile":case"squarenauticalmiles":return 9030}return null}function a(e){if(null==e)return null;const t=e.clone();return void 0!==e.cache._geVersion&&(t.cache._geVersion=e.cache._geVersion),t}function u(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e}},76902:function(e,t,n){n.d(t,{n:function(){return a}});var r=n(28300),s=n(4631),i=n(96285);function o(e){e=e.replaceAll(/LTS|LT|L{1,4}|l{1,4}/g,"[$&]");let t="";const n=/(\[[^[]*\])|(\\)?([Hh]mm(ss)?|Mo|M{1,4}|Do|DDDo|D{1,4}|d{2,4}|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;for(const r of e.match(n)||[])switch(r){case"D":t+="d";break;case"DD":t+="dd";break;case"DDD":t+="o";break;case"d":t+="c";break;case"ddd":t+="ccc";break;case"dddd":t+="cccc";break;case"M":t+="L";break;case"MM":t+="LL";break;case"MMM":t+="LLL";break;case"MMMM":t+="LLLL";break;case"YY":t+="yy";break;case"Y":case"YYYY":t+="yyyy";break;case"Q":t+="q";break;case"X":case"x":t+=r;break;default:r.length>=2&&"["===r.slice(0,1)&&"]"===r.slice(-1)?t+=`'${r.slice(1,-1)}'`:t+=`'${r}'`}return t}class a{constructor(e,t,n){this._year=e,this._month=t,this._day=n,this.declaredRootClass="esri.core.sql.dateonly"}get month(){return this._month}get monthJS(){return this._month-1}get year(){return this._year}get day(){return this._day}get isValid(){return this.toDateTime("unknown").isValid}equals(e){return e instanceof a&&e.day===this.day&&e.month===this.month&&e.year===this.year}clone(){return new a(this._year,this._month,this._day)}toDateTime(e){return i.c9.fromObject({day:this.day,month:this.month,year:this.year},{zone:(0,r.mT)(e)})}toDateTimeLuxon(e){return i.c9.fromObject({day:this.day,month:this.month,year:this.year},{zone:(0,r.mT)(e)})}toString(){return`${this.year.toString().padStart(4,"0")}-${this.month.toString().padStart(2,"0")}-${this.day.toString().padStart(2,"0")}`}toFormat(e=null,t=!0){if(null===e||""===e)return this.toString();if(t&&(e=o(e)),!e)return"";const n=this.toDateTime("unknown");return r.lY.dateTimeToArcadeDate(n).toFormat(e,{locale:(0,s.JK)(),numberingSystem:"latn"})}toArcadeDate(){const e=this.toDateTime("unknown");return r.lY.dateTimeToArcadeDate(e)}toNumber(){return this.toDateTime("unknown").toMillis()}toJSDate(){return this.toDateTime("unknown").toJSDate()}toStorageFormat(){return this.toFormat("yyyy-LL-dd",!1)}toSQLValue(){return this.toFormat("yyyy-LL-dd",!1)}toSQLWithKeyword(){return"date '"+this.toFormat("yyyy-LL-dd",!1)+"'"}plus(e,t){return a.fromDateTime(this.toUTCDateTime().plus({[e]:t}))}toUTCDateTime(){return i.c9.utc(this.year,this.month,this.day,0,0,0,0)}difference(e,t){switch(t.toLowerCase()){case"days":case"day":case"d":return this.toUTCDateTime().diff(e.toUTCDateTime(),"days").days;case"months":case"month":return this.toUTCDateTime().diff(e.toUTCDateTime(),"months").months;case"minutes":case"minute":case"m":return"M"===t?this.toUTCDateTime().diff(e.toUTCDateTime(),"months").months:this.toUTCDateTime().diff(e.toUTCDateTime(),"minutes").minutes;case"seconds":case"second":case"s":return this.toUTCDateTime().diff(e.toUTCDateTime(),"seconds").seconds;case"milliseconds":case"millisecond":case"ms":default:return this.toUTCDateTime().diff(e.toUTCDateTime(),"milliseconds").milliseconds;case"hours":case"hour":case"h":return this.toUTCDateTime().diff(e.toUTCDateTime(),"hours").hours;case"years":case"year":case"y":return this.toUTCDateTime().diff(e.toUTCDateTime(),"years").years}}static fromMilliseconds(e){const t=i.c9.fromMillis(e,{zone:i.mQ.utcInstance});return t.isValid?a.fromParts(t.year,t.month,t.day):null}static fromSeconds(e){const t=i.c9.fromSeconds(e,{zone:i.mQ.utcInstance});return t.isValid?a.fromParts(t.year,t.month,t.day):null}static fromReader(e){if(!e)return null;const t=e.split("-");return 3!==t.length?null:new a(parseInt(t[0],10),parseInt(t[1],10),parseInt(t[2],10))}static fromParts(e,t,n){const r=new a(e,t,n);return!1===r.isValid?null:r}static fromDateJS(e){return a.fromParts(e.getFullYear(),e.getMonth()+1,e.getDay())}static fromDateTime(e){return a.fromParts(e.year,e.month,e.day)}static fromSqlTimeStampOffset(e){return this.fromDateTime(e.toDateTime())}static fromString(e,t=null){if(""===e)return null;if(null===e)return null;const n=[];if(t)(t=o(t))&&n.push(t);else if(null===t||""===t){const t=i.c9.fromISO(e,{setZone:!0});return t.isValid?a.fromParts(t.year,t.month,t.day):null}for(const r of n){const n=i.c9.fromFormat(e,t??r);if(n.isValid)return new a(n.year,n.month,n.day)}return null}static fromNow(e="system"){const t=i.c9.fromJSDate(new Date).setZone((0,r.mT)(e));return new a(t.year,t.month,t.day)}}},3991:function(e,t,n){n.d(t,{k:function(){return a}});var r=n(91017),s=n(4631),i=n(96285);function o(e){if(!e)return"";const t=/(a|A|hh?|HH?|mm?|ss?|SSS|S|.)/g;let n="";for(const r of e.match(t)||[])switch(r){case"SSS":case"m":case"mm":case"h":case"hh":case"H":case"HH":case"s":case"ss":n+=r;break;case"A":case"a":n+="a";break;default:n+=`'${r}'`}return n}class a{constructor(e,t,n,r){this._hour=e,this._minute=t,this._second=n,this._millisecond=r,this.declaredRootClass="esri.core.sql.timeonly"}get hour(){return this._hour}get minute(){return this._minute}get second(){return this._second}get millisecond(){return this._millisecond}equals(e){return e instanceof a&&e.hour===this.hour&&e.minute===this.minute&&e.second===this.second&&e.millisecond===this.millisecond}clone(){return new a(this.hour,this.minute,this.second,this.millisecond)}isValid(){return(0,r.Fq)(this.hour)&&(0,r.Fq)(this.minute)&&(0,r.Fq)(this.second)&&(0,r.Fq)(this.millisecond)&&this.hour>=0&&this.hour<24&&this.minute>=0&&this.minute<60&&this.second>=0&&this.second<60&&this.millisecond>=0&&this.millisecond<1e3}toString(){return`${this.hour.toString().padStart(2,"0")}:${this.minute.toString().padStart(2,"0")}:${this.second.toString().padStart(2,"0")}`+(this.millisecond>0?"."+this.millisecond.toString().padStart(3,"0"):"")}toSQLValue(){return this.toString()}toSQLWithKeyword(){return`time '${this.hour.toString().padStart(2,"0")}:${this.minute.toString().padStart(2,"0")}:${this.second.toString().padStart(2,"0")}${this.millisecond>0?"."+this.millisecond.toString().padStart(3,"0"):""}'`}toStorageString(){return`${this.hour.toString().padStart(2,"0")}:${this.minute.toString().padStart(2,"0")}:${this.second.toString().padStart(2,"0")}`}toFormat(e=null){return null===e||""===e?this.toString():(e=o(e))?i.c9.local(1970,1,1,this._hour,this._minute,this._second,this._millisecond).toFormat(e,{locale:(0,s.JK)(),numberingSystem:"latn"}):""}toNumber(){return this.millisecond+1e3*this.second+1e3*this.minute*60+60*this.hour*60*1e3}static fromParts(e,t,n,r){const s=new a(e,t,n,r);return s.isValid()?s:null}static fromReader(e){if(!e)return null;const t=e.split(":");return 3!==t.length?null:new a(parseInt(t[0],10),parseInt(t[1],10),parseInt(t[2],10),0)}static fromMilliseconds(e){if(e>864e5||e<0)return null;const t=Math.floor(e/1e3%60),n=Math.floor(e/6e4%60),r=Math.floor(e/36e5%24),s=Math.floor(e%1e3);return new a(r,n,t,s)}static fromDateJS(e){return new a(e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds())}static fromDateTime(e){return new a(e.hour,e.minute,e.second,e.millisecond)}static fromSqlTimeStampOffset(e){return this.fromDateTime(e.toDateTime())}static fromString(e,t=null){if(""===e)return null;if(null===e)return null;const n=[];t?(t=o(t))&&n.push(t):null!==t&&""!==t||(n.push("HH:mm:ss"),n.push("HH:mm:ss.SSS"),n.push("hh:mm:ss a"),n.push("hh:mm:ss.SSS a"),n.push("HH:mm"),n.push("hh:mm a"),n.push("H:mm"),n.push("h:mm a"),n.push("H:mm:ss"),n.push("h:mm:ss a"),n.push("H:mm:ss.SSS"),n.push("h:mm:ss.SSS a"));for(const t of n){const n=i.c9.fromFormat(e,t);if(n.isValid)return new a(n.hour,n.minute,n.second,n.millisecond)}return null}plus(e,t){switch(e){case"days":case"years":case"months":return this.clone();case"hours":case"minutes":case"seconds":case"milliseconds":return a.fromDateTime(this.toUTCDateTime().plus({[e]:t}))}return null}toUTCDateTime(){return i.c9.utc(1970,1,1,this.hour,this.minute,this.second,this.millisecond)}difference(e,t){switch(t.toLowerCase()){case"days":case"day":case"d":return this.toUTCDateTime().diff(e.toUTCDateTime(),"days").days;case"months":case"month":return this.toUTCDateTime().diff(e.toUTCDateTime(),"months").months;case"minutes":case"minute":case"m":return"M"===t?this.toUTCDateTime().diff(e.toUTCDateTime(),"months").months:this.toUTCDateTime().diff(e.toUTCDateTime(),"minutes").minutes;case"seconds":case"second":case"s":return this.toUTCDateTime().diff(e.toUTCDateTime(),"seconds").seconds;case"milliseconds":case"millisecond":case"ms":default:return this.toUTCDateTime().diff(e.toUTCDateTime(),"milliseconds").milliseconds;case"hours":case"hour":case"h":return this.toUTCDateTime().diff(e.toUTCDateTime(),"hours").hours;case"years":case"year":case"y":return this.toUTCDateTime().diff(e.toUTCDateTime(),"years").years}}}},94625:function(e,t,n){n.d(t,{g:function(){return r}});const r={convertToGEGeometry:function(e,t){return null==t?null:e.convertJSONToGeometry(t)},exportPoint:function(e,t,n){const r=new s(e.getPointX(t),e.getPointY(t),n),i=e.hasZ(t),o=e.hasM(t);return i&&(r.z=e.getPointZ(t)),o&&(r.m=e.getPointM(t)),r},exportPolygon:function(e,t,n){return new i(e.exportPaths(t),n,e.hasZ(t),e.hasM(t))},exportPolyline:function(e,t,n){return new o(e.exportPaths(t),n,e.hasZ(t),e.hasM(t))},exportMultipoint:function(e,t,n){return new a(e.exportPoints(t),n,e.hasZ(t),e.hasM(t))},exportExtent:function(e,t,n){const r=e.hasZ(t),s=e.hasM(t),i=new u(e.getXMin(t),e.getYMin(t),e.getXMax(t),e.getYMax(t),n);if(r){const n=e.getZExtent(t);i.zmin=n.vmin,i.zmax=n.vmax}if(s){const n=e.getMExtent(t);i.mmin=n.vmin,i.mmax=n.vmax}return i}};class s{constructor(e,t,n){this.x=e,this.y=t,this.spatialReference=n,this.z=void 0,this.m=void 0}}class i{constructor(e,t,n,r){this.rings=e,this.spatialReference=t,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),r&&(this.hasM=r)}}class o{constructor(e,t,n,r){this.paths=e,this.spatialReference=t,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),r&&(this.hasM=r)}}class a{constructor(e,t,n,r){this.points=e,this.spatialReference=t,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),r&&(this.hasM=r)}}class u{constructor(e,t,n,r,s){this.xmin=e,this.ymin=t,this.xmax=n,this.ymax=r,this.spatialReference=s,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}},91658:function(e,t,n){function r(e,t){return e?t?4:3:t?3:2}function s(e,t,n,s){if(!t?.lengths.length)return null;e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0);const a=e.coords,u=[],c=n?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:l,coords:m}=t,h=r(n,s);let f=0;for(const e of l){const t=i(c,m,f,e,n,s);t&&u.push(t),f+=e*h}if(u.sort(((e,t)=>{let r=e[2]-t[2];return 0===r&&n&&(r=e[4]-t[4]),r})),u.length){let e=6*u[0][2];a[0]=u[0][0]/e,a[1]=u[0][1]/e,n&&(e=6*u[0][4],a[2]=0!==e?u[0][3]/e:0),(a[0]<c[0]||a[0]>c[1]||a[1]<c[2]||a[1]>c[3]||n&&(a[2]<c[4]||a[2]>c[5]))&&(a.length=0)}if(!a.length){const e=t.lengths[0]?o(m,0,l[0],n,s):null;if(!e)return null;a[0]=e[0],a[1]=e[1],n&&e.length>2&&(a[2]=e[2])}return e}function i(e,t,n,s,i,o){const a=r(i,o);let u=n,c=n+a,l=0,m=0,h=0,f=0,d=0;for(let n=0,r=s-1;n<r;n++,u+=a,c+=a){const n=t[u],r=t[u+1],s=t[u+2],o=t[c],a=t[c+1],y=t[c+2];let p=n*a-o*r;f+=p,l+=(n+o)*p,m+=(r+a)*p,i&&(p=n*y-o*s,h+=(s+y)*p,d+=p),n<e[0]&&(e[0]=n),n>e[1]&&(e[1]=n),r<e[2]&&(e[2]=r),r>e[3]&&(e[3]=r),i&&(s<e[4]&&(e[4]=s),s>e[5]&&(e[5]=s))}if(f>0&&(f*=-1),d>0&&(d*=-1),!f)return null;const y=[l,m,.5*f];return i&&(y[3]=h,y[4]=.5*d),y}function o(e,t,n,s,i){const o=r(s,i);let m=t,h=t+o,f=0,d=0,y=0,p=0;for(let t=0,r=n-1;t<r;t++,m+=o,h+=o){const t=e[m],n=e[m+1],r=e[m+2],i=e[h],o=e[h+1],T=e[h+2],S=s?u(t,n,r,i,o,T):a(t,n,i,o);if(S)if(f+=S,s){const e=l(t,n,r,i,o,T);d+=S*e[0],y+=S*e[1],p+=S*e[2]}else{const e=c(t,n,i,o);d+=S*e[0],y+=S*e[1]}}return f>0?s?[d/f,y/f,p/f]:[d/f,y/f]:n>0?s?[e[t],e[t+1],e[t+2]]:[e[t],e[t+1]]:null}function a(e,t,n,r){const s=n-e,i=r-t;return Math.sqrt(s*s+i*i)}function u(e,t,n,r,s,i){const o=r-e,a=s-t,u=i-n;return Math.sqrt(o*o+a*a+u*u)}function c(e,t,n,r){return[e+.5*(n-e),t+.5*(r-t)]}function l(e,t,n,r,s,i){return[e+.5*(r-e),t+.5*(s-t),n+.5*(i-n)]}n.d(t,{Q:function(){return s}})},84880:function(e,t,n){n.d(t,{LQ:function(){return c},ag:function(){return m},pL:function(){return l}});var r=n(5525),s=n(65977);const i=new s.A,o=new s.A,a=new s.A,u={esriGeometryPoint:r.DF,esriGeometryPolyline:r.BW,esriGeometryPolygon:r.z5,esriGeometryMultipoint:r.qK};function c(e,t,n,s=e.hasZ,i=e.hasM){if(null==t)return null;const o=e.hasZ&&s,u=e.hasM&&i;if(n){const c=(0,r.Nl)(a,t,e.hasZ,e.hasM,"esriGeometryPoint",n,s,i);return(0,r.DF)(c,o,u)}return(0,r.DF)(t,o,u)}function l(e,t,n,s,c,l,m=t,h=n){const f=t&&m,d=n&&h,y=null!=s?"coords"in s?s:s.geometry:null;if(null==y)return null;if(c){let s=(0,r.kz)(o,y,t,n,e,c,m,h);return l&&(s=(0,r.Nl)(a,s,f,d,e,l)),u[e]?.(s,f,d)??null}if(l){const s=(0,r.Nl)(a,y,t,n,e,l,m,h);return u[e]?.(s,f,d)??null}return(0,r.Q4)(i,y,t,n,m,h),u[e]?.(i,f,d)??null}function m(e){return e&&h in e?JSON.parse(JSON.stringify(e,f)):e}const h="_geVersion",f=(e,t)=>e!==h?t:void 0},48277:function(e,t,n){n.d(t,{Cv:function(){return p},Nk:function(){return f},lK:function(){return S}});var r=n(3223),s=n(37623),i=n(3034),o=n(94625),a=n(67488),u=n(64672);const c=[0,0];function l(e,t){if(!t)return null;if("x"in t){const n={x:0,y:0};return[n.x,n.y]=e(t.x,t.y,c),null!=t.z&&(n.z=t.z),null!=t.m&&(n.m=t.m),n}if("xmin"in t){const n={xmin:0,ymin:0,xmax:0,ymax:0};return[n.xmin,n.ymin]=e(t.xmin,t.ymin,c),[n.xmax,n.ymax]=e(t.xmax,t.ymax,c),t.hasZ&&(n.zmin=t.zmin,n.zmax=t.zmax,n.hasZ=!0),t.hasM&&(n.mmin=t.mmin,n.mmax=t.mmax,n.hasM=!0),n}return"rings"in t?{rings:m(t.rings,e),hasM:t.hasM,hasZ:t.hasZ}:"paths"in t?{paths:m(t.paths,e),hasM:t.hasM,hasZ:t.hasZ}:"points"in t?{points:h(t.points,e),hasM:t.hasM,hasZ:t.hasZ}:null}function m(e,t){const n=[];for(const r of e)n.push(h(r,t));return n}function h(e,t){const n=[];for(const r of e){const e=t(r[0],r[1],[0,0]);n.push(e),r.length>2&&e.push(r[2]),r.length>3&&e.push(r[3])}return n}async function f(e,t){if(!e||!t)return;const n=Array.isArray(e)?e.map((e=>null!=e.geometry?e.geometry.spatialReference:null)).filter(r.Ru):[e];await(0,i.initializeProjection)(n.map((e=>({source:e,dest:t}))))}const d=l.bind(null,u.je),y=l.bind(null,u.tD);function p(e,t,n,r){if(!e)return e;if(n||(n=t,t=e.spatialReference),!(0,a.fn)(t)||!(0,a.fn)(n)||(0,a.aI)(t,n))return e;if((0,u.y7)(t,n)){const t=(0,a.K8)(n)?d(e):y(e);return t.spatialReference=n,t}return(0,i.projectMany)(o.g,[e],t,n,null,r)[0]}const T=new class{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}async push(e,t,n,r){if(!e?.length||!t||!n||(0,a.aI)(t,n))return e;const i={geometries:e,inSpatialReference:t,outSpatialReference:n,geographicTransformation:r,resolve:(0,s.Tw)()};return this._jobs.push(i),this._timer??=setTimeout(this._process,10),i.resolve.promise}_process(){this._timer=null;const e=this._jobs.shift();if(!e)return;const{geometries:t,inSpatialReference:n,outSpatialReference:r,resolve:s,geographicTransformation:c}=e;(0,u.y7)(n,r)?(0,a.K8)(r)?s(t.map(d)):s(t.map(y)):s((0,i.projectMany)(o.g,t,n,r,c,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}};function S(e,t,n,r){return T.push(e,t,n,r)}},18160:function(e,t,n){n.d(t,{GC:function(){return f},T2:function(){return d},VY:function(){return m},v8:function(){return h}});var r=n(1817),s=n(5262),i=n(3034),o=n(34475),a=n(56053),u=n(87249),c=n(67488),l=n(48277);const m=new r.J({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),h=Object.freeze({});async function f(e,t,n){const{outFields:r,orderByFields:s,groupByFieldsForStatistics:i,outStatistics:o}=e;if(r)for(let e=0;e<r.length;e++)r[e]=r[e].trim();if(s)for(let e=0;e<s.length;e++)s[e]=s[e].trim();if(i)for(let e=0;e<i.length;e++)i[e]=i[e].trim();if(o)for(let e=0;e<o.length;e++)o[e].onStatisticField&&(o[e].onStatisticField=o[e].onStatisticField.trim());return e.geometry&&!e.outSR&&(e.outSR=e.geometry.spatialReference),d(e,t,n)}async function d(e,t,r){if(!e)return null;let{where:i}=e;if(e.where=i=i?.trim(),(!i||/^1 *= *1$/.test(i)||t&&t===i)&&(e.where=null),!e.geometry)return e;let f=await async function(e){const{distance:t,units:r}=e,i=e.geometry;if(null==t||"vertexAttributes"in i)return i;const o=i.spatialReference,a=r?m.fromJSON(r):(0,s.Ij)(o),u=o&&((0,c.EA)(o)||(0,c.K8)(o))?i:await(0,l.Nk)(o,c.KK).then((()=>(0,l.Cv)(i,c.KK)));return(await async function(){return(await Promise.all([n.e(9694),n.e(2127)]).then(n.bind(n,30344))).geodesicBuffer}())(u.spatialReference,u,t,a)}(e);if(e.distance=0,e.units=null,"esriSpatialRelEnvelopeIntersects"===e.spatialRel){const{spatialReference:t}=e.geometry;f=(0,o.HA)(f),f.spatialReference=t}if(f){await(0,l.Nk)(f.spatialReference,r),f=function(e,t){const n=e.spatialReference;return y(e,t)&&(0,a.ZC)(e)?{spatialReference:n,rings:[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]]}:e}(f,r);const t=(await(0,u.el)((0,a.rS)(f)))[0];if(null==t)throw h;const n="quantizationParameters"in e&&e.quantizationParameters?.tolerance||"maxAllowableOffset"in e&&e.maxAllowableOffset||0,s=n&&y(f,r)?{densificationStep:8*n}:void 0,i=t.toJSON(),o=(0,l.Cv)(i,i.spatialReference,r,s);if(!o)throw h;o.spatialReference=r,e.geometry=o}return e}function y(e,t){if(!e)return!1;const n=e.spatialReference;return((0,a.ZC)(e)||(0,a.Bi)(e)||(0,a.Rg)(e))&&!(0,c.aI)(n,t)&&!(0,i.canProjectWithoutEngine)(n,t)}},25831:function(e,t,n){n.d(t,{tC:function(){return D},c0:function(){return w},xt:function(){return g}});var r=n(62991),s=n(10805),i=n(19387);var o=n(56053),a=n(67488);function u(e,t){return e?t?4:3:t?3:2}function c(e,t,n,r,s,i){const o=u(s,i),{coords:a,lengths:c}=r;if(!c)return!1;for(let r=0,s=0;r<c.length;r++,s+=o)if(!l(e,t,n,a[s],a[s+1]))return!1;return!0}function l(e,t,n,r,s){if(!e)return!1;const i=u(t,n),{coords:o,lengths:a}=e;let c=!1,l=0;for(const e of a)c=m(c,o,i,l,e,r,s),l+=e*i;return c}function m(e,t,n,r,s,i,o){let a=e,u=r;for(let e=r,c=r+s*n;e<c;e+=n){u=e+n,u===c&&(u=r);const s=t[e],l=t[e+1],m=t[u],h=t[u+1];(l<o&&h>=o||h<o&&l>=o)&&s+(o-l)/(h-l)*(m-s)<i&&(a=!a)}return a}var h=n(5525),f=n(65977),d=n(84880),y=n(48277);const p="unsupported-query",T={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},S={spatialRelationship:{esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},queryGeometry:{esriGeometryPoint:!0,esriGeometryMultiPatch:!1,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},layerGeometry:{esriGeometryPoint:!0,esriGeometryMultiPatch:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1}};function g(e,t,r,a,u){if((0,o.Bi)(t)&&"esriGeometryPoint"===r&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e)){const e=(0,h.Ye)(new f.A,t,!1,!1);return Promise.resolve((t=>function(e,t,n,r){return l(e,t,n,r.coords[0],r.coords[1])}(e,!1,!1,t)))}if((0,o.Bi)(t)&&"esriGeometryMultipoint"===r){const n=(0,h.Ye)(new f.A,t,!1,!1);if("esriSpatialRelContains"===e)return Promise.resolve((e=>c(n,!1,!1,e,a,u)))}if((0,o.ZC)(t)&&"esriGeometryPoint"===r&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e))return Promise.resolve((e=>(0,s.qz)(t,(0,d.pL)(r,a,u,e))));if((0,o.ZC)(t)&&"esriGeometryMultipoint"===r&&"esriSpatialRelContains"===e)return Promise.resolve((e=>(0,s.rL)(t,(0,d.pL)(r,a,u,e))));if((0,o.ZC)(t)&&"esriSpatialRelIntersects"===e){const e=function(e){return"mesh"===e?i.xB:(0,i.xK)(e)}(r);return Promise.resolve((n=>e(t,(0,d.pL)(r,a,u,n))))}return Promise.all([n.e(9694),n.e(2127)]).then(n.bind(n,30344)).then((n=>{const s=n[T[e]].bind(null,t.spatialReference,t);return e=>s((0,d.pL)(r,a,u,e))}))}async function w(e,t,n){const{spatialRel:s,geometry:i}=e;if(i){if(!function(e){return null!=e&&!0===S.spatialRelationship[e]}(s))throw new r.A(p,"Unsupported query spatial relationship",{query:e});if((0,a.fn)(i.spatialReference)&&(0,a.fn)(n)){if(!function(e){return null!=e&&!0===S.queryGeometry[(0,o.$B)(e)]}(i))throw new r.A(p,"Unsupported query geometry type",{query:e});if(!function(e){return null!=e&&!0===S.layerGeometry[e]}(t))throw new r.A(p,"Unsupported layer geometry type",{query:e});if(e.outSR)return(0,y.Nk)(e.geometry?.spatialReference,e.outSR)}}}function D(e){if((0,o.ZC)(e))return!0;if((0,o.Bi)(e)){for(const t of e.rings){if(5!==t.length)return!1;if(t[0][0]!==t[1][0]||t[0][0]!==t[4][0]||t[2][0]!==t[3][0]||t[0][1]!==t[3][1]||t[0][1]!==t[4][1]||t[1][1]!==t[2][1])return!1}return!0}return!1}},86089:function(e,t,n){async function r(e,t){if(!e)return null;const n=t.featureAdapter,{startTimeField:r,endTimeField:s}=e;let i=Number.POSITIVE_INFINITY,o=Number.NEGATIVE_INFINITY;if(r&&s)await t.forEach((e=>{const t=n.getAttribute(e,r),a=n.getAttribute(e,s);null==t||isNaN(t)||(i=Math.min(i,t)),null==a||isNaN(a)||(o=Math.max(o,a))}));else{const e=r||s;await t.forEach((t=>{const r=n.getAttribute(t,e);null==r||isNaN(r)||(i=Math.min(i,r),o=Math.max(o,r))}))}return{start:i,end:o}}function s(e,t,n){if(!t||!e)return null;const{startTimeField:r,endTimeField:s}=e;if(!r&&!s)return null;const{start:i,end:o}=t;if(null===i&&null===o)return null;if(void 0===i&&void 0===o)return()=>!1;const a=n.getAttributeAsTimestamp?.bind(n)??n.getAttribute.bind(n);return r&&s?function(e,t,n,r,s){return null!=r&&null!=s?i=>{const o=e(i,t),a=e(i,n);return(null==o||o<=s)&&(null==a||a>=r)}:null!=r?t=>{const s=e(t,n);return null==s||s>=r}:null!=s?n=>{const r=e(n,t);return null==r||r<=s}:void 0}(a,r,s,i,o):function(e,t,n,r){return null!=n&&null!=r&&n===r?r=>e(r,t)===n:null!=n&&null!=r?s=>{const i=e(s,t);return null!=i&&i>=n&&i<=r}:null!=n?r=>{const s=e(r,t);return null!=s&&s>=n}:null!=r?n=>{const s=e(n,t);return null!=s&&s<=r}:void 0}(a,r||s,i,o)}n.d(t,{I:function(){return s},W:function(){return r}})}}]);
//# sourceMappingURL=1924.30ebd57a80cb6304ae14.js.map