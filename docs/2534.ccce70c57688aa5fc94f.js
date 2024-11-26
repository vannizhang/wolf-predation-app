/*! For license information please see 2534.ccce70c57688aa5fc94f.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_redux_arcgis_boilerplate=self.webpackChunkreact_redux_arcgis_boilerplate||[]).push([[2534],{92534:function(e,t,i){i.d(t,{I:function(){return B},d:function(){return M}});var n=i(3102),a=i(72006),s=i(74398),o=i(27114),r=i(7105),l=i(1572),c=i(832),u=i(32282),d=i(40313),h=i(96367),p=i(27053),b=i(90589),m=i(29935),f=i(69694),v=i(74697),g=i(30972),y=i(99431);const x="loader",k="clear-button",w="editing-enabled",z="inline-child",I="icon",E="prefix",V="suffix",C="number-button-wrapper",H="number-button-item--horizontal",O="element-wrapper",D="wrapper",N="action-wrapper",A="resize-icon-wrapper",L="number-button-item",S="inputValidationMessage",F={tel:"phone",password:"lock",email:"email-address",date:"calendar",time:"clock",search:"search"},T="action",B=(0,n.w$)(class extends n.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalInputFocus=(0,n.lh)(this,"calciteInternalInputFocus",6),this.calciteInternalInputBlur=(0,n.lh)(this,"calciteInternalInputBlur",6),this.calciteInputInput=(0,n.lh)(this,"calciteInputInput",7),this.calciteInputChange=(0,n.lh)(this,"calciteInputChange",6),this.childElType="input",this.previousValueOrigin="initial",this.mutationObserver=(0,d.c)("mutation",(()=>this.setDisabledAction())),this.userChangedValue=!1,this.keyDownHandler=e=>{this.readOnly||this.disabled||e.defaultPrevented||(this.isClearable&&"Escape"===e.key&&(this.clearInputValue(e),e.preventDefault()),"Enter"===e.key&&(0,s.s)(this)&&e.preventDefault())},this.clearInputValue=e=>{this.setValue({committing:!0,nativeEvent:e,origin:"user",value:""})},this.emitChangeIfUserModified=()=>{"user"===this.previousValueOrigin&&this.value!==this.previousEmittedValue&&(this.calciteInputChange.emit(),this.setPreviousEmittedValue(this.value))},this.inputBlurHandler=()=>{window.clearInterval(this.nudgeNumberValueIntervalId),this.calciteInternalInputBlur.emit(),this.emitChangeIfUserModified()},this.clickHandler=e=>{if(this.disabled)return;const t=e.composedPath();t.includes(this.inputWrapperEl)&&!t.includes(this.actionWrapperEl)&&this.setFocus()},this.inputFocusHandler=()=>{this.calciteInternalInputFocus.emit()},this.inputChangeHandler=()=>{"file"===this.type&&(this.files=this.childEl.files)},this.inputInputHandler=e=>{this.disabled||this.readOnly||this.setValue({nativeEvent:e,origin:"user",value:e.target.value})},this.inputKeyDownHandler=e=>{this.disabled||this.readOnly||"Enter"===e.key&&this.emitChangeIfUserModified()},this.inputNumberInputHandler=e=>{if(this.disabled||this.readOnly)return;if("Infinity"===this.value||"-Infinity"===this.value)return;const t=e.target.value;u.n.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator};const i=u.n.delocalize(t);"insertFromPaste"===e.inputType?((0,u.i)(i)||e.preventDefault(),this.setValue({nativeEvent:e,origin:"user",value:(0,u.p)(i)}),this.childNumberEl.value=this.displayedValue):this.setValue({nativeEvent:e,origin:"user",value:i})},this.inputNumberKeyDownHandler=e=>{if("number"!==this.type||this.disabled||this.readOnly)return;if("Infinity"===this.value||"-Infinity"===this.value)return e.preventDefault(),void("Backspace"!==e.key&&"Delete"!==e.key||this.clearInputValue(e));if("ArrowUp"===e.key)return e.preventDefault(),void this.nudgeNumberValue("up",e);if("ArrowDown"===e.key)return void this.nudgeNumberValue("down",e);const t=[...r.n,"ArrowLeft","ArrowRight","Backspace","Delete","Enter","Escape","Tab"];if(e.altKey||e.ctrlKey||e.metaKey)return;const i=e.shiftKey&&"Tab"===e.key;if(t.includes(e.key)||i)"Enter"===e.key&&this.emitChangeIfUserModified();else{if(u.n.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator},e.key===u.n.decimal){if(!this.value&&!this.childNumberEl.value)return;if(this.value&&-1===this.childNumberEl.value.indexOf(u.n.decimal))return}if(/[eE]/.test(e.key)){if(!this.value&&!this.childNumberEl.value)return;if(this.value&&!/[eE]/.test(this.childNumberEl.value))return}if("-"===e.key){if(!this.value&&!this.childNumberEl.value)return;if(this.value&&this.childNumberEl.value.split("-").length<=2)return}e.preventDefault()}},this.nudgeNumberValue=(e,t)=>{if(t instanceof KeyboardEvent&&t.repeat||"number"!==this.type)return;const i=this.maxString?parseFloat(this.maxString):null,n=this.minString?parseFloat(this.minString):null;this.incrementOrDecrementNumberValue(e,i,n,t),this.nudgeNumberValueIntervalId&&window.clearInterval(this.nudgeNumberValueIntervalId);let a=!0;this.nudgeNumberValueIntervalId=window.setInterval((()=>{a?a=!1:this.incrementOrDecrementNumberValue(e,i,n,t)}),150)},this.numberButtonPointerUpAndOutHandler=()=>{window.clearInterval(this.nudgeNumberValueIntervalId)},this.numberButtonPointerDownHandler=e=>{if(!(0,a.y)(e))return;e.preventDefault();const t=e.target.dataset.adjustment;this.disabled||this.nudgeNumberValue(t,e)},this.onHiddenFormInputInput=e=>{e.target.name===this.name&&this.setValue({value:e.target.value,origin:"direct"}),this.setFocus(),e.stopPropagation()},this.setChildElRef=e=>{this.childEl=e},this.setChildNumberElRef=e=>{this.childNumberEl=e},this.setInputValue=e=>{("text"!==this.type||this.childEl)&&("number"!==this.type||this.childNumberEl)&&(this[`child${"number"===this.type?"Number":""}El`].value=e)},this.setPreviousEmittedValue=e=>{this.previousEmittedValue=this.normalizeValue(e)},this.setPreviousValue=e=>{this.previousValue=this.normalizeValue(e)},this.setValue=({committing:e=!1,nativeEvent:t,origin:i,previousValue:n,value:a})=>{if(this.setPreviousValue(n??this.value),this.previousValueOrigin=i,"number"===this.type){u.n.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator,signDisplay:"never"};const e=this.previousValue?.length>a.length||this.value?.length>a.length,t="."===a.charAt(a.length-1),n=t&&e?a:(0,u.s)(a),s=a&&!n?(0,u.i)(this.previousValue)?this.previousValue:"":n;let o=u.n.localize(s);"connected"===i||t||(o=(0,u.a)(o,s,u.n)),this.displayedValue=t&&e?`${o}${u.n.decimal}`:o,this.userChangedValue="user"===i&&this.value!==s,this.value=["-","."].includes(s)?"":s}else this.userChangedValue="user"===i&&this.value!==a,this.value=a;if("direct"===i&&(this.setInputValue(a),this.previousEmittedValue=a),t){this.calciteInputInput.emit().defaultPrevented?(this.value=this.previousValue,this.displayedValue="number"===this.type?u.n.localize(this.previousValue):this.previousValue):e&&this.emitChangeIfUserModified()}},this.inputKeyUpHandler=()=>{window.clearInterval(this.nudgeNumberValueIntervalId)},this.alignment="start",this.autofocus=void 0,this.clearable=!1,this.disabled=!1,this.enterKeyHint=void 0,this.form=void 0,this.groupSeparator=!1,this.icon=void 0,this.iconFlipRtl=!1,this.inputMode=void 0,this.label=void 0,this.loading=!1,this.numberingSystem=void 0,this.localeFormat=!1,this.max=void 0,this.min=void 0,this.maxLength=void 0,this.minLength=void 0,this.validationMessage=void 0,this.validationIcon=void 0,this.validity={valid:!1,badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1},this.name=void 0,this.numberButtonType="vertical",this.placeholder=void 0,this.prefixText=void 0,this.readOnly=!1,this.required=!1,this.scale="m",this.status="idle",this.step=void 0,this.autocomplete=void 0,this.pattern=void 0,this.accept=void 0,this.multiple=!1,this.suffixText=void 0,this.editingEnabled=!1,this.type="text",this.value="",this.files=void 0,this.messages=void 0,this.messageOverrides=void 0,this.defaultMessages=void 0,this.effectiveLocale="",this.displayedValue=void 0,this.slottedActionElDisabledInternally=!1}handleGlobalAttributesChanged(){(0,n.$x)(this)}disabledWatcher(){this.setDisabledAction()}maxWatcher(){this.maxString=this.max?.toString()||null}minWatcher(){this.minString=this.min?.toString()||null}onMessagesChange(){}valueWatcher(e,t){if(!this.userChangedValue){if("number"===this.type&&("Infinity"===e||"-Infinity"===e))return this.displayedValue=e,void(this.previousEmittedValue=e);this.setValue({origin:"direct",previousValue:t,value:null==e||""==e?"":"number"===this.type?(0,u.i)(e)?e:this.previousValue||"":e}),this.warnAboutInvalidNumberValue(e)}this.userChangedValue=!1}updateRequestedIcon(){this.requestedIcon=(0,a.o)(F,this.icon,this.type)}get isClearable(){return!this.isTextarea&&(this.clearable||"search"===this.type)&&this.value?.length>0}get isTextarea(){return"textarea"===this.childElType}effectiveLocaleChange(){(0,p.u)(this,this.effectiveLocale)}connectedCallback(){(0,u.c)(this),(0,p.c)(this),this.inlineEditableEl=this.el.closest("calcite-inline-editable"),this.inlineEditableEl&&(this.editingEnabled=this.inlineEditableEl.editingEnabled||!1),(0,l.c)(this),(0,s.c)(this),this.mutationObserver?.observe(this.el,{childList:!0}),this.setDisabledAction(),this.el.addEventListener(s.i,this.onHiddenFormInputInput)}disconnectedCallback(){(0,l.d)(this),(0,s.d)(this),(0,u.d)(this),(0,p.d)(this),this.mutationObserver?.disconnect(),this.el.removeEventListener(s.i,this.onHiddenFormInputInput)}async componentWillLoad(){(0,c.s)(this),this.childElType="textarea"===this.type?"textarea":"input",this.maxString=this.max?.toString(),this.minString=this.min?.toString(),this.requestedIcon=(0,a.o)(F,this.icon,this.type),await(0,p.s)(this),this.setPreviousEmittedValue(this.value),this.setPreviousValue(this.value),"number"===this.type&&("Infinity"===this.value||"-Infinity"===this.value?(this.displayedValue=this.value,this.previousEmittedValue=this.value):(this.warnAboutInvalidNumberValue(this.value),this.setValue({origin:"connected",value:(0,u.i)(this.value)?this.value:""})))}componentDidLoad(){(0,c.a)(this)}componentShouldUpdate(e,t,i){return!("number"===this.type&&"value"===i&&e&&!(0,u.i)(e))||(this.setValue({origin:"reset",value:t}),!1)}componentDidRender(){(0,o.u)(this)}async setFocus(){await(0,c.c)(this),"number"===this.type?this.childNumberEl?.focus():this.childEl?.focus()}async selectText(){"number"===this.type?this.childNumberEl?.select():this.childEl?.select()}onLabelClick(){this.setFocus()}incrementOrDecrementNumberValue(e,t,i,n){const{value:a}=this;if("Infinity"===a||"-Infinity"===a)return;const s="up"===e?1:-1,o="any"===this.step?1:Math.abs(this.step||1),r=new u.B(""!==a?a:"0").add(""+o*s),l="number"==typeof i&&!isNaN(i)&&r.subtract(`${i}`).isNegative?`${i}`:"number"!=typeof t||isNaN(t)||r.subtract(`${t}`).isNegative?r.toString():`${t}`;this.setValue({committing:!0,nativeEvent:n,origin:"user",value:l})}syncHiddenFormInput(e){(0,f.s)(this.type,this,e)}setDisabledAction(){const e=(0,a.g)(this.el,"action");e&&(this.disabled?(null==e.getAttribute("disabled")&&(this.slottedActionElDisabledInternally=!0),e.setAttribute("disabled","")):this.slottedActionElDisabledInternally&&(e.removeAttribute("disabled"),this.slottedActionElDisabledInternally=!1))}normalizeValue(e){return"number"===this.type?(0,u.i)(e)?e:"":e}warnAboutInvalidNumberValue(e){"number"===this.type&&e&&(0,u.i)(e)}render(){const e=(0,a.a)(this.el),t=(0,n.h)("div",{key:"ed9acea9dbc18f4cfc5e7095c1e2de0b1adfdf35",class:x},(0,n.h)("calcite-progress",{key:"58321a27c25dd848a648d2e3d5ca6dfc3f5fd649",label:this.messages.loading,type:"indeterminate"})),i=(0,n.h)("button",{key:"348d8dee0c032afe986b1e253c9d667256f3d9f0","aria-label":this.messages.clear,class:k,disabled:this.disabled||this.readOnly,onClick:this.clearInputValue,tabIndex:-1,type:"button"},(0,n.h)("calcite-icon",{key:"334b68a283b767c0e9bea09ccfd83d09c8c17711",icon:"x",scale:(0,b.g)(this.scale)})),r=(0,n.h)("calcite-icon",{key:"4ab83aa9268277a38449ebe4a6e3db4dc9badcae",class:I,flipRtl:this.iconFlipRtl,icon:this.requestedIcon,scale:(0,b.g)(this.scale)}),c="horizontal"===this.numberButtonType,u=(0,n.h)("button",{key:"2dd700034d38581aaea39c019e626ffa1a2c1c16","aria-hidden":"true",class:{[L]:!0,[H]:c},"data-adjustment":"up",disabled:this.disabled||this.readOnly,onPointerDown:this.numberButtonPointerDownHandler,onPointerOut:this.numberButtonPointerUpAndOutHandler,onPointerUp:this.numberButtonPointerUpAndOutHandler,tabIndex:-1,type:"button"},(0,n.h)("calcite-icon",{key:"6ca9a7c93aa14520292ad8c800c4e099bd46f30d",icon:"chevron-up",scale:(0,b.g)(this.scale)})),d=(0,n.h)("button",{key:"cdbd88ddd308bd82b6d239a83f365a2c5e226cfc","aria-hidden":"true",class:{[L]:!0,[H]:c},"data-adjustment":"down",disabled:this.disabled||this.readOnly,onPointerDown:this.numberButtonPointerDownHandler,onPointerOut:this.numberButtonPointerUpAndOutHandler,onPointerUp:this.numberButtonPointerUpAndOutHandler,tabIndex:-1,type:"button"},(0,n.h)("calcite-icon",{key:"f1b9cf329da9add564d690c517ddcc414c4fbfa3",icon:"chevron-down",scale:(0,b.g)(this.scale)})),p=(0,n.h)("div",{key:"247efdce33568f219b1bf3bf252b8b19a74d03ea",class:C},u,d),f=(0,n.h)("div",{key:"01819a850399fb20a29471861e011695bf80af97",class:E},this.prefixText),v=(0,n.h)("div",{key:"dcc073305f3824a0eb72ef230bd217dabdb72104",class:V},this.suffixText),g=!(!this.el.autofocus&&!this.el.hasAttribute("autofocus"))||null,y=this.el.enterKeyHint||this.el.getAttribute("enterkeyhint"),F=this.el.inputMode||this.el.getAttribute("inputmode"),B="number"===this.type?(0,n.h)("input",{accept:this.accept,"aria-errormessage":S,"aria-invalid":(0,a.t)("invalid"===this.status),"aria-label":(0,l.g)(this),autocomplete:this.autocomplete,autofocus:g,defaultValue:this.defaultValue,disabled:!!this.disabled||null,enterKeyHint:y,inputMode:F,key:"localized-input",maxLength:this.maxLength,minLength:this.minLength,multiple:this.multiple,name:void 0,onBlur:this.inputBlurHandler,onFocus:this.inputFocusHandler,onInput:this.inputNumberInputHandler,onKeyDown:this.inputNumberKeyDownHandler,onKeyUp:this.inputKeyUpHandler,pattern:this.pattern,placeholder:this.placeholder||"",readOnly:this.readOnly,ref:this.setChildNumberElRef,type:"text",value:this.displayedValue}):null,M="number"!==this.type?[(0,n.h)(this.childElType,{accept:this.accept,"aria-errormessage":S,"aria-invalid":(0,a.t)("invalid"===this.status),"aria-label":(0,l.g)(this),autocomplete:this.autocomplete,autofocus:g,class:{[w]:this.editingEnabled,[z]:!!this.inlineEditableEl},defaultValue:this.defaultValue,disabled:!!this.disabled||null,enterKeyHint:y,inputMode:F,max:this.maxString,maxLength:this.maxLength,min:this.minString,minLength:this.minLength,multiple:this.multiple,name:this.name,onBlur:this.inputBlurHandler,onChange:this.inputChangeHandler,onFocus:this.inputFocusHandler,onInput:this.inputInputHandler,onKeyDown:this.inputKeyDownHandler,onKeyUp:this.inputKeyUpHandler,pattern:this.pattern,placeholder:this.placeholder||"",readOnly:this.readOnly,ref:this.setChildElRef,required:!!this.required||null,step:this.step,tabIndex:this.disabled||this.inlineEditableEl&&!this.editingEnabled?-1:null,type:this.type,value:this.value}),this.isTextarea?(0,n.h)("div",{class:A},(0,n.h)("calcite-icon",{icon:"chevron-down",scale:(0,b.g)(this.scale)})):null]:null;return(0,n.h)(n.xr,{key:"23d6092960315f172a56105b9af75ddc6497874c",onClick:this.clickHandler,onKeyDown:this.keyDownHandler},(0,n.h)(o.I,{key:"1bb063f39c14a829a376465fa8c2bbc288046ac7",disabled:this.disabled},(0,n.h)("div",{key:"7f3644f002b7cb75d93d9c0218508b502ddcfd0b",class:{[D]:!0,[h.C.rtl]:"rtl"===e},ref:e=>this.inputWrapperEl=e},"number"!==this.type||"horizontal"!==this.numberButtonType||this.readOnly?null:d,this.prefixText?f:null,(0,n.h)("div",{key:"0d01898e4949a60e0853c1a72669f5c9d6c91ba5",class:O},B,M,this.isClearable?i:null,this.requestedIcon?r:null,this.loading?t:null),(0,n.h)("div",{key:"42e7adec440e417128feb9845c36d0444e6c1ae4",class:N,ref:e=>this.actionWrapperEl=e},(0,n.h)("slot",{key:"f391b035ad9fc108d1f99c4cedf539425c20a36d",name:T})),"number"!==this.type||"vertical"!==this.numberButtonType||this.readOnly?null:p,this.suffixText?v:null,"number"!==this.type||"horizontal"!==this.numberButtonType||this.readOnly?null:u,(0,n.h)(s.H,{key:"df415df551b4a9a16565c8f554454d01aa89327e",component:this})),this.validationMessage&&"invalid"===this.status?(0,n.h)(m.V,{icon:this.validationIcon,id:S,message:this.validationMessage,scale:this.scale,status:this.status}):null))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{autofocus:["handleGlobalAttributesChanged"],enterkeyhint:["handleGlobalAttributesChanged"],inputmode:["handleGlobalAttributesChanged"],disabled:["disabledWatcher"],max:["maxWatcher"],min:["minWatcher"],messageOverrides:["onMessagesChange"],value:["valueWatcher"],icon:["updateRequestedIcon"],type:["updateRequestedIcon"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}:host([scale=s]) input,:host([scale=s]) .prefix,:host([scale=s]) .suffix{block-size:1.5rem;padding-inline:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) textarea{block-size:1.5rem;min-block-size:1.5rem}:host([scale=s]) .number-button-wrapper,:host([scale=s]) .action-wrapper calcite-button,:host([scale=s]) .action-wrapper calcite-button button{block-size:1.5rem}:host([scale=s]) input[type=file]{block-size:1.5rem}:host([scale=s]) .clear-button{min-block-size:1.5rem;min-inline-size:1.5rem}:host([scale=s]) textarea{block-size:auto;padding-block:0.25rem;padding-inline:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]) input,:host([scale=m]) .prefix,:host([scale=m]) .suffix{block-size:2rem;padding-inline:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) textarea{min-block-size:2rem}:host([scale=m]) .number-button-wrapper,:host([scale=m]) .action-wrapper calcite-button,:host([scale=m]) .action-wrapper calcite-button button{block-size:2rem}:host([scale=m]) input[type=file]{block-size:2rem}:host([scale=m]) .clear-button{min-block-size:2rem;min-inline-size:2rem}:host([scale=m]) textarea{block-size:auto;padding-block:0.5rem;padding-inline:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]) input,:host([scale=l]) .prefix,:host([scale=l]) .suffix{block-size:2.75rem;padding-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) textarea{min-block-size:2.75rem}:host([scale=l]) .number-button-wrapper,:host([scale=l]) .action-wrapper calcite-button,:host([scale=l]) .action-wrapper calcite-button button{block-size:2.75rem}:host([scale=l]) input[type=file]{block-size:2.75rem}:host([scale=l]) .clear-button{min-block-size:2.75rem;min-inline-size:2.75rem}:host([scale=l]) textarea{block-size:auto;padding-block:0.75rem;padding-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([disabled]) textarea{resize:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}textarea,input{transition:var(--calcite-animation-timing), block-size 0, outline-offset 0s;-webkit-appearance:none;position:relative;margin:0px;box-sizing:border-box;display:flex;max-block-size:100%;inline-size:100%;max-inline-size:100%;flex:1 1 0%;border-radius:0px;background-color:var(--calcite-color-foreground-1);font-family:inherit;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-1)}input[type=search]::-webkit-search-decoration{-webkit-appearance:none}input,textarea{text-overflow:ellipsis;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);color:var(--calcite-color-text-1)}input:placeholder-shown,textarea:placeholder-shown{text-overflow:ellipsis}input:focus,textarea:focus{border-color:var(--calcite-color-brand);color:var(--calcite-color-text-1)}input[readonly],textarea[readonly]{background-color:var(--calcite-color-background);font-weight:var(--calcite-font-weight-medium)}input[readonly]:focus,textarea[readonly]:focus{color:var(--calcite-color-text-1)}calcite-icon{color:var(--calcite-color-text-3)}textarea,input{outline-color:transparent}textarea:focus,input:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}:host([status=invalid]) input,:host([status=invalid]) textarea{border-color:var(--calcite-color-status-danger)}:host([status=invalid]) input:focus,:host([status=invalid]) textarea:focus{outline:2px solid var(--calcite-color-status-danger);outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}:host([scale=s]) .icon{inset-inline-start:0.5rem}:host([scale=m]) .icon{inset-inline-start:0.75rem}:host([scale=l]) .icon{inset-inline-start:1rem}:host([icon][scale=s]) input{padding-inline-start:2rem}:host([icon][scale=m]) input{padding-inline-start:2.5rem}:host([icon][scale=l]) input{padding-inline-start:3.5rem}.element-wrapper{position:relative;order:3;display:inline-flex;flex:1 1 0%;align-items:center}.icon{pointer-events:none;position:absolute;display:block;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.icon,.resize-icon-wrapper{z-index:var(--calcite-z-index)}input[type=text]::-ms-clear,input[type=text]::-ms-reveal{display:none;block-size:0px;inline-size:0px}input[type=search]::-webkit-search-decoration,input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-results-button,input[type=search]::-webkit-search-results-decoration,input[type=date]::-webkit-clear-button,input[type=time]::-webkit-clear-button{display:none}.clear-button{pointer-events:initial;order:4;margin:0px;box-sizing:border-box;display:flex;min-block-size:100%;cursor:pointer;align-items:center;justify-content:center;align-self:stretch;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-foreground-1);outline-color:transparent;border-inline-start-width:0px}.clear-button:hover{background-color:var(--calcite-color-foreground-2);transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:hover calcite-icon{color:var(--calcite-color-text-1);transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:active{background-color:var(--calcite-color-foreground-3)}.clear-button:active calcite-icon{color:var(--calcite-color-text-1)}.clear-button:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.clear-button:disabled{opacity:var(--calcite-opacity-disabled)}.loader{inset-block-start:1px;inset-inline:1px;pointer-events:none;position:absolute;display:block}.action-wrapper{order:7;display:flex}.prefix,.suffix{box-sizing:border-box;display:flex;block-size:auto;min-block-size:100%;-webkit-user-select:none;user-select:none;align-content:center;align-items:center;overflow-wrap:break-word;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-background);font-weight:var(--calcite-font-weight-medium);line-height:1;color:var(--calcite-color-text-2)}.prefix{order:2;border-inline-end-width:0px;inline-size:var(--calcite-input-prefix-size, auto)}.suffix{order:5;border-inline-start-width:0px;inline-size:var(--calcite-input-suffix-size, auto)}:host([alignment=start]) textarea,:host([alignment=start]) input{text-align:start}:host([alignment=end]) textarea,:host([alignment=end]) input{text-align:end}input[type=number]{-moz-appearance:textfield}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;-moz-appearance:textfield;margin:0px}.number-button-wrapper{pointer-events:none;order:6;box-sizing:border-box;display:flex;flex-direction:column;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}:host([number-button-type=vertical]) .wrapper{flex-direction:row;display:flex}:host([number-button-type=vertical]) input,:host([number-button-type=vertical]) textarea{order:2}:host([number-button-type=horizontal]) .calcite--rtl .number-button-item[data-adjustment=down] calcite-icon{transform:rotate(-90deg)}:host([number-button-type=horizontal]) .calcite--rtl .number-button-item[data-adjustment=up] calcite-icon{transform:rotate(-90deg)}.number-button-item.number-button-item--horizontal[data-adjustment=down],.number-button-item.number-button-item--horizontal[data-adjustment=up]{order:1;max-block-size:100%;min-block-size:100%;align-self:stretch}.number-button-item.number-button-item--horizontal[data-adjustment=down] calcite-icon,.number-button-item.number-button-item--horizontal[data-adjustment=up] calcite-icon{transform:rotate(90deg)}.number-button-item.number-button-item--horizontal[data-adjustment=down]{border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);border-inline-end-width:0px}.number-button-item.number-button-item--horizontal[data-adjustment=down]:hover{background-color:var(--calcite-color-foreground-2)}.number-button-item.number-button-item--horizontal[data-adjustment=down]:hover calcite-icon{color:var(--calcite-color-text-1)}.number-button-item.number-button-item--horizontal[data-adjustment=up]{order:5}.number-button-item.number-button-item--horizontal[data-adjustment=up]:hover{background-color:var(--calcite-color-foreground-2)}.number-button-item.number-button-item--horizontal[data-adjustment=up]:hover calcite-icon{color:var(--calcite-color-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]:hover{background-color:var(--calcite-color-foreground-2)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]:hover calcite-icon{color:var(--calcite-color-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=up]:hover{background-color:var(--calcite-color-foreground-2)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=up]:hover calcite-icon{color:var(--calcite-color-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]{border-block-start-width:0px}.number-button-item{max-block-size:50%;min-block-size:50%;pointer-events:initial;margin:0px;box-sizing:border-box;display:flex;cursor:pointer;align-items:center;align-self:center;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-foreground-1);padding-block:0px;padding-inline:0.5rem;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;border-inline-start-width:0px}.number-button-item calcite-icon{pointer-events:none;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.number-button-item:focus{background-color:var(--calcite-color-foreground-2)}.number-button-item:focus calcite-icon{color:var(--calcite-color-text-1)}.number-button-item:active{background-color:var(--calcite-color-foreground-3)}.number-button-item:disabled{pointer-events:none}.wrapper{position:relative;display:flex;flex-direction:row;align-items:center}:input::-webkit-calendar-picker-indicator{display:none}input[type=date]::-webkit-input-placeholder{visibility:hidden !important}textarea::-webkit-resizer{position:absolute;inset-block-end:0px;box-sizing:border-box;padding-block:0px;padding-inline:0.25rem;inset-inline-end:0}.resize-icon-wrapper{inset-block-end:2px;inset-inline-end:2px;pointer-events:none;position:absolute;block-size:0.75rem;inline-size:0.75rem;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-3)}.resize-icon-wrapper calcite-icon{inset-block-end:0.25rem;inset-inline-end:0.25rem;transform:rotate(-45deg)}.calcite--rtl .resize-icon-wrapper calcite-icon{transform:rotate(45deg)}:host([type=color]) input{padding:0.25rem}:host([type=file]) input{cursor:pointer;border-width:1px;border-style:dashed;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-foreground-1);text-align:center}:host([type=file][scale=s]) input{padding-block:1px;padding-inline:0.5rem}:host([type=file][scale=m]) input{padding-block:0.25rem;padding-inline:0.75rem}:host([type=file][scale=l]) input{padding-block:0.5rem;padding-inline:1rem}:host(.no-bottom-border) input{border-block-end-width:0px}:host(.border-top-color-one) input{border-block-start-color:var(--calcite-color-border-1)}input.inline-child{background-color:transparent;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}input.inline-child .editing-enabled{background-color:inherit}input.inline-child:not(.editing-enabled){display:flex;cursor:pointer;text-overflow:ellipsis;border-color:transparent;padding-inline-start:0}.validation-container{display:flex;flex-direction:column;align-items:flex-start;align-self:stretch}:host([scale=m]) .validation-container,:host([scale=l]) .validation-container{padding-block-start:0.5rem}:host([scale=s]) .validation-container{padding-block-start:0.25rem}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-input",{alignment:[513],autofocus:[4],clearable:[516],disabled:[516],enterKeyHint:[1,"enter-key-hint"],form:[513],groupSeparator:[516,"group-separator"],icon:[520],iconFlipRtl:[516,"icon-flip-rtl"],inputMode:[1,"input-mode"],label:[1],loading:[516],numberingSystem:[513,"numbering-system"],localeFormat:[4,"locale-format"],max:[514],min:[514],maxLength:[514,"max-length"],minLength:[514,"min-length"],validationMessage:[1,"validation-message"],validationIcon:[520,"validation-icon"],validity:[1040],name:[513],numberButtonType:[513,"number-button-type"],placeholder:[1],prefixText:[1,"prefix-text"],readOnly:[516,"read-only"],required:[516],scale:[513],status:[513],step:[520],autocomplete:[1],pattern:[1],accept:[1],multiple:[4],suffixText:[1,"suffix-text"],editingEnabled:[1540,"editing-enabled"],type:[513],value:[1025],files:[16],messages:[1040],messageOverrides:[1040],defaultMessages:[32],effectiveLocale:[32],displayedValue:[32],slottedActionElDisabledInternally:[32],setFocus:[64],selectText:[64]},void 0,{autofocus:["handleGlobalAttributesChanged"],enterkeyhint:["handleGlobalAttributesChanged"],inputmode:["handleGlobalAttributesChanged"],disabled:["disabledWatcher"],max:["maxWatcher"],min:["minWatcher"],messageOverrides:["onMessagesChange"],value:["valueWatcher"],icon:["updateRequestedIcon"],type:["updateRequestedIcon"],effectiveLocale:["effectiveLocaleChange"]}]);function M(){if("undefined"==typeof customElements)return;["calcite-input","calcite-icon","calcite-input-message","calcite-progress"].forEach((e=>{switch(e){case"calcite-input":customElements.get(e)||customElements.define(e,B);break;case"calcite-icon":customElements.get(e)||(0,v.d)();break;case"calcite-input-message":customElements.get(e)||(0,g.d)();break;case"calcite-progress":customElements.get(e)||(0,y.d)()}}))}M()}}]);
//# sourceMappingURL=2534.ccce70c57688aa5fc94f.js.map