function pb(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const a=Object.getOwnPropertyDescriptor(r,o);a&&Object.defineProperty(e,o,a.get?a:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();var mb=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function dv(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var fv={exports:{}},kl={},hv={exports:{}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gs=Symbol.for("react.element"),gb=Symbol.for("react.portal"),vb=Symbol.for("react.fragment"),yb=Symbol.for("react.strict_mode"),xb=Symbol.for("react.profiler"),_b=Symbol.for("react.provider"),wb=Symbol.for("react.context"),bb=Symbol.for("react.forward_ref"),Sb=Symbol.for("react.suspense"),Cb=Symbol.for("react.memo"),Pb=Symbol.for("react.lazy"),Gp=Symbol.iterator;function kb(e){return e===null||typeof e!="object"?null:(e=Gp&&e[Gp]||e["@@iterator"],typeof e=="function"?e:null)}var pv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},mv=Object.assign,gv={};function Wr(e,t,n){this.props=e,this.context=t,this.refs=gv,this.updater=n||pv}Wr.prototype.isReactComponent={};Wr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Wr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function vv(){}vv.prototype=Wr.prototype;function sf(e,t,n){this.props=e,this.context=t,this.refs=gv,this.updater=n||pv}var af=sf.prototype=new vv;af.constructor=sf;mv(af,Wr.prototype);af.isPureReactComponent=!0;var Kp=Array.isArray,yv=Object.prototype.hasOwnProperty,lf={current:null},xv={key:!0,ref:!0,__self:!0,__source:!0};function _v(e,t,n){var r,o={},a=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(a=""+t.key),t)yv.call(t,r)&&!xv.hasOwnProperty(r)&&(o[r]=t[r]);var c=arguments.length-2;if(c===1)o.children=n;else if(1<c){for(var f=Array(c),h=0;h<c;h++)f[h]=arguments[h+2];o.children=f}if(e&&e.defaultProps)for(r in c=e.defaultProps,c)o[r]===void 0&&(o[r]=c[r]);return{$$typeof:gs,type:e,key:a,ref:l,props:o,_owner:lf.current}}function Tb(e,t){return{$$typeof:gs,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function uf(e){return typeof e=="object"&&e!==null&&e.$$typeof===gs}function Lb(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Yp=/\/+/g;function Ou(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Lb(""+e.key):t.toString(36)}function _a(e,t,n,r,o){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case gs:case gb:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Ou(l,0):r,Kp(o)?(n="",e!=null&&(n=e.replace(Yp,"$&/")+"/"),_a(o,t,n,"",function(h){return h})):o!=null&&(uf(o)&&(o=Tb(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(Yp,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",Kp(e))for(var c=0;c<e.length;c++){a=e[c];var f=r+Ou(a,c);l+=_a(a,t,n,f,o)}else if(f=kb(e),typeof f=="function")for(e=f.call(e),c=0;!(a=e.next()).done;)a=a.value,f=r+Ou(a,c++),l+=_a(a,t,n,f,o);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Hs(e,t,n){if(e==null)return e;var r=[],o=0;return _a(e,r,"","",function(a){return t.call(n,a,o++)}),r}function Eb(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ht={current:null},wa={transition:null},zb={ReactCurrentDispatcher:ht,ReactCurrentBatchConfig:wa,ReactCurrentOwner:lf};function wv(){throw Error("act(...) is not supported in production builds of React.")}se.Children={map:Hs,forEach:function(e,t,n){Hs(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Hs(e,function(){t++}),t},toArray:function(e){return Hs(e,function(t){return t})||[]},only:function(e){if(!uf(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};se.Component=Wr;se.Fragment=vb;se.Profiler=xb;se.PureComponent=sf;se.StrictMode=yb;se.Suspense=Sb;se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zb;se.act=wv;se.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=mv({},e.props),o=e.key,a=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,l=lf.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(f in t)yv.call(t,f)&&!xv.hasOwnProperty(f)&&(r[f]=t[f]===void 0&&c!==void 0?c[f]:t[f])}var f=arguments.length-2;if(f===1)r.children=n;else if(1<f){c=Array(f);for(var h=0;h<f;h++)c[h]=arguments[h+2];r.children=c}return{$$typeof:gs,type:e.type,key:o,ref:a,props:r,_owner:l}};se.createContext=function(e){return e={$$typeof:wb,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:_b,_context:e},e.Consumer=e};se.createElement=_v;se.createFactory=function(e){var t=_v.bind(null,e);return t.type=e,t};se.createRef=function(){return{current:null}};se.forwardRef=function(e){return{$$typeof:bb,render:e}};se.isValidElement=uf;se.lazy=function(e){return{$$typeof:Pb,_payload:{_status:-1,_result:e},_init:Eb}};se.memo=function(e,t){return{$$typeof:Cb,type:e,compare:t===void 0?null:t}};se.startTransition=function(e){var t=wa.transition;wa.transition={};try{e()}finally{wa.transition=t}};se.unstable_act=wv;se.useCallback=function(e,t){return ht.current.useCallback(e,t)};se.useContext=function(e){return ht.current.useContext(e)};se.useDebugValue=function(){};se.useDeferredValue=function(e){return ht.current.useDeferredValue(e)};se.useEffect=function(e,t){return ht.current.useEffect(e,t)};se.useId=function(){return ht.current.useId()};se.useImperativeHandle=function(e,t,n){return ht.current.useImperativeHandle(e,t,n)};se.useInsertionEffect=function(e,t){return ht.current.useInsertionEffect(e,t)};se.useLayoutEffect=function(e,t){return ht.current.useLayoutEffect(e,t)};se.useMemo=function(e,t){return ht.current.useMemo(e,t)};se.useReducer=function(e,t,n){return ht.current.useReducer(e,t,n)};se.useRef=function(e){return ht.current.useRef(e)};se.useState=function(e){return ht.current.useState(e)};se.useSyncExternalStore=function(e,t,n){return ht.current.useSyncExternalStore(e,t,n)};se.useTransition=function(){return ht.current.useTransition()};se.version="18.3.1";hv.exports=se;var E=hv.exports;const Ke=dv(E),jb=pb({__proto__:null,default:Ke},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mb=E,Ab=Symbol.for("react.element"),Rb=Symbol.for("react.fragment"),Ib=Object.prototype.hasOwnProperty,Ob=Mb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Db={key:!0,ref:!0,__self:!0,__source:!0};function bv(e,t,n){var r,o={},a=null,l=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Ib.call(t,r)&&!Db.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Ab,type:e,key:a,ref:l,props:o,_owner:Ob.current}}kl.Fragment=Rb;kl.jsx=bv;kl.jsxs=bv;fv.exports=kl;var m=fv.exports,Oc={},Sv={exports:{}},zt={},Cv={exports:{}},Pv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(D,H){var F=D.length;D.push(H);e:for(;0<F;){var V=F-1>>>1,q=D[V];if(0<o(q,H))D[V]=H,D[F]=q,F=V;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var H=D[0],F=D.pop();if(F!==H){D[0]=F;e:for(var V=0,q=D.length,xe=q>>>1;V<xe;){var le=2*(V+1)-1,te=D[le],Y=le+1,je=D[Y];if(0>o(te,F))Y<q&&0>o(je,te)?(D[V]=je,D[Y]=F,V=Y):(D[V]=te,D[le]=F,V=le);else if(Y<q&&0>o(je,F))D[V]=je,D[Y]=F,V=Y;else break e}}return H}function o(D,H){var F=D.sortIndex-H.sortIndex;return F!==0?F:D.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var l=Date,c=l.now();e.unstable_now=function(){return l.now()-c}}var f=[],h=[],v=1,g=null,x=3,b=!1,S=!1,P=!1,j=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(D){for(var H=n(h);H!==null;){if(H.callback===null)r(h);else if(H.startTime<=D)r(h),H.sortIndex=H.expirationTime,t(f,H);else break;H=n(h)}}function z(D){if(P=!1,w(D),!S)if(n(f)!==null)S=!0,oe(R);else{var H=n(h);H!==null&&ze(z,H.startTime-D)}}function R(D,H){S=!1,P&&(P=!1,C($),$=-1),b=!0;var F=x;try{for(w(H),g=n(f);g!==null&&(!(g.expirationTime>H)||D&&!ae());){var V=g.callback;if(typeof V=="function"){g.callback=null,x=g.priorityLevel;var q=V(g.expirationTime<=H);H=e.unstable_now(),typeof q=="function"?g.callback=q:g===n(f)&&r(f),w(H)}else r(f);g=n(f)}if(g!==null)var xe=!0;else{var le=n(h);le!==null&&ze(z,le.startTime-H),xe=!1}return xe}finally{g=null,x=F,b=!1}}var O=!1,I=null,$=-1,W=5,G=-1;function ae(){return!(e.unstable_now()-G<W)}function de(){if(I!==null){var D=e.unstable_now();G=D;var H=!0;try{H=I(!0,D)}finally{H?Ve():(O=!1,I=null)}}else O=!1}var Ve;if(typeof y=="function")Ve=function(){y(de)};else if(typeof MessageChannel<"u"){var he=new MessageChannel,Mt=he.port2;he.port1.onmessage=de,Ve=function(){Mt.postMessage(null)}}else Ve=function(){j(de,0)};function oe(D){I=D,O||(O=!0,Ve())}function ze(D,H){$=j(function(){D(e.unstable_now())},H)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(D){D.callback=null},e.unstable_continueExecution=function(){S||b||(S=!0,oe(R))},e.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<D?Math.floor(1e3/D):5},e.unstable_getCurrentPriorityLevel=function(){return x},e.unstable_getFirstCallbackNode=function(){return n(f)},e.unstable_next=function(D){switch(x){case 1:case 2:case 3:var H=3;break;default:H=x}var F=x;x=H;try{return D()}finally{x=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(D,H){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var F=x;x=D;try{return H()}finally{x=F}},e.unstable_scheduleCallback=function(D,H,F){var V=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?V+F:V):F=V,D){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=F+q,D={id:v++,callback:H,priorityLevel:D,startTime:F,expirationTime:q,sortIndex:-1},F>V?(D.sortIndex=F,t(h,D),n(f)===null&&D===n(h)&&(P?(C($),$=-1):P=!0,ze(z,F-V))):(D.sortIndex=q,t(f,D),S||b||(S=!0,oe(R))),D},e.unstable_shouldYield=ae,e.unstable_wrapCallback=function(D){var H=x;return function(){var F=x;x=H;try{return D.apply(this,arguments)}finally{x=F}}}})(Pv);Cv.exports=Pv;var $b=Cv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nb=E,Lt=$b;function B(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var kv=new Set,Uo={};function Ui(e,t){Mr(e,t),Mr(e+"Capture",t)}function Mr(e,t){for(Uo[e]=t,e=0;e<t.length;e++)kv.add(t[e])}var Ln=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Dc=Object.prototype.hasOwnProperty,Bb=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xp={},Qp={};function Fb(e){return Dc.call(Qp,e)?!0:Dc.call(Xp,e)?!1:Bb.test(e)?Qp[e]=!0:(Xp[e]=!0,!1)}function Vb(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Zb(e,t,n,r){if(t===null||typeof t>"u"||Vb(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function pt(e,t,n,r,o,a,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=l}var et={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){et[e]=new pt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];et[t]=new pt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){et[e]=new pt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){et[e]=new pt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){et[e]=new pt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){et[e]=new pt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){et[e]=new pt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){et[e]=new pt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){et[e]=new pt(e,5,!1,e.toLowerCase(),null,!1,!1)});var cf=/[\-:]([a-z])/g;function df(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(cf,df);et[t]=new pt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(cf,df);et[t]=new pt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(cf,df);et[t]=new pt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){et[e]=new pt(e,1,!1,e.toLowerCase(),null,!1,!1)});et.xlinkHref=new pt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){et[e]=new pt(e,1,!1,e.toLowerCase(),null,!0,!0)});function ff(e,t,n,r){var o=et.hasOwnProperty(t)?et[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Zb(t,n,o,r)&&(n=null),r||o===null?Fb(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var An=Nb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Gs=Symbol.for("react.element"),ur=Symbol.for("react.portal"),cr=Symbol.for("react.fragment"),hf=Symbol.for("react.strict_mode"),$c=Symbol.for("react.profiler"),Tv=Symbol.for("react.provider"),Lv=Symbol.for("react.context"),pf=Symbol.for("react.forward_ref"),Nc=Symbol.for("react.suspense"),Bc=Symbol.for("react.suspense_list"),mf=Symbol.for("react.memo"),Nn=Symbol.for("react.lazy"),Ev=Symbol.for("react.offscreen"),qp=Symbol.iterator;function uo(e){return e===null||typeof e!="object"?null:(e=qp&&e[qp]||e["@@iterator"],typeof e=="function"?e:null)}var Ee=Object.assign,Du;function Co(e){if(Du===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Du=t&&t[1]||""}return`
`+Du+e}var $u=!1;function Nu(e,t){if(!e||$u)return"";$u=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(h){var r=h}Reflect.construct(e,[],t)}else{try{t.call()}catch(h){r=h}e.call(t.prototype)}else{try{throw Error()}catch(h){r=h}e()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var o=h.stack.split(`
`),a=r.stack.split(`
`),l=o.length-1,c=a.length-1;1<=l&&0<=c&&o[l]!==a[c];)c--;for(;1<=l&&0<=c;l--,c--)if(o[l]!==a[c]){if(l!==1||c!==1)do if(l--,c--,0>c||o[l]!==a[c]){var f=`
`+o[l].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),f}while(1<=l&&0<=c);break}}}finally{$u=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Co(e):""}function Ub(e){switch(e.tag){case 5:return Co(e.type);case 16:return Co("Lazy");case 13:return Co("Suspense");case 19:return Co("SuspenseList");case 0:case 2:case 15:return e=Nu(e.type,!1),e;case 11:return e=Nu(e.type.render,!1),e;case 1:return e=Nu(e.type,!0),e;default:return""}}function Fc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case cr:return"Fragment";case ur:return"Portal";case $c:return"Profiler";case hf:return"StrictMode";case Nc:return"Suspense";case Bc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Lv:return(e.displayName||"Context")+".Consumer";case Tv:return(e._context.displayName||"Context")+".Provider";case pf:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case mf:return t=e.displayName||null,t!==null?t:Fc(e.type)||"Memo";case Nn:t=e._payload,e=e._init;try{return Fc(e(t))}catch{}}return null}function Wb(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Fc(t);case 8:return t===hf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ri(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function zv(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Hb(e){var t=zv(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,a.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ks(e){e._valueTracker||(e._valueTracker=Hb(e))}function jv(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=zv(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Va(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Vc(e,t){var n=t.checked;return Ee({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Jp(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ri(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Mv(e,t){t=t.checked,t!=null&&ff(e,"checked",t,!1)}function Zc(e,t){Mv(e,t);var n=ri(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Uc(e,t.type,n):t.hasOwnProperty("defaultValue")&&Uc(e,t.type,ri(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function em(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Uc(e,t,n){(t!=="number"||Va(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Po=Array.isArray;function kr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ri(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Wc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(B(91));return Ee({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function tm(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(B(92));if(Po(n)){if(1<n.length)throw Error(B(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ri(n)}}function Av(e,t){var n=ri(t.value),r=ri(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function nm(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Rv(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Hc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Rv(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ys,Iv=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ys=Ys||document.createElement("div"),Ys.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ys.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Wo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var zo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Gb=["Webkit","ms","Moz","O"];Object.keys(zo).forEach(function(e){Gb.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),zo[t]=zo[e]})});function Ov(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||zo.hasOwnProperty(e)&&zo[e]?(""+t).trim():t+"px"}function Dv(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Ov(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Kb=Ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Gc(e,t){if(t){if(Kb[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(B(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(B(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(B(61))}if(t.style!=null&&typeof t.style!="object")throw Error(B(62))}}function Kc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yc=null;function gf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xc=null,Tr=null,Lr=null;function im(e){if(e=xs(e)){if(typeof Xc!="function")throw Error(B(280));var t=e.stateNode;t&&(t=jl(t),Xc(e.stateNode,e.type,t))}}function $v(e){Tr?Lr?Lr.push(e):Lr=[e]:Tr=e}function Nv(){if(Tr){var e=Tr,t=Lr;if(Lr=Tr=null,im(e),t)for(e=0;e<t.length;e++)im(t[e])}}function Bv(e,t){return e(t)}function Fv(){}var Bu=!1;function Vv(e,t,n){if(Bu)return e(t,n);Bu=!0;try{return Bv(e,t,n)}finally{Bu=!1,(Tr!==null||Lr!==null)&&(Fv(),Nv())}}function Ho(e,t){var n=e.stateNode;if(n===null)return null;var r=jl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(B(231,t,typeof n));return n}var Qc=!1;if(Ln)try{var co={};Object.defineProperty(co,"passive",{get:function(){Qc=!0}}),window.addEventListener("test",co,co),window.removeEventListener("test",co,co)}catch{Qc=!1}function Yb(e,t,n,r,o,a,l,c,f){var h=Array.prototype.slice.call(arguments,3);try{t.apply(n,h)}catch(v){this.onError(v)}}var jo=!1,Za=null,Ua=!1,qc=null,Xb={onError:function(e){jo=!0,Za=e}};function Qb(e,t,n,r,o,a,l,c,f){jo=!1,Za=null,Yb.apply(Xb,arguments)}function qb(e,t,n,r,o,a,l,c,f){if(Qb.apply(this,arguments),jo){if(jo){var h=Za;jo=!1,Za=null}else throw Error(B(198));Ua||(Ua=!0,qc=h)}}function Wi(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Zv(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function rm(e){if(Wi(e)!==e)throw Error(B(188))}function Jb(e){var t=e.alternate;if(!t){if(t=Wi(e),t===null)throw Error(B(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var a=o.alternate;if(a===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===n)return rm(o),e;if(a===r)return rm(o),t;a=a.sibling}throw Error(B(188))}if(n.return!==r.return)n=o,r=a;else{for(var l=!1,c=o.child;c;){if(c===n){l=!0,n=o,r=a;break}if(c===r){l=!0,r=o,n=a;break}c=c.sibling}if(!l){for(c=a.child;c;){if(c===n){l=!0,n=a,r=o;break}if(c===r){l=!0,r=a,n=o;break}c=c.sibling}if(!l)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?e:t}function Uv(e){return e=Jb(e),e!==null?Wv(e):null}function Wv(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Wv(e);if(t!==null)return t;e=e.sibling}return null}var Hv=Lt.unstable_scheduleCallback,om=Lt.unstable_cancelCallback,eS=Lt.unstable_shouldYield,tS=Lt.unstable_requestPaint,Re=Lt.unstable_now,nS=Lt.unstable_getCurrentPriorityLevel,vf=Lt.unstable_ImmediatePriority,Gv=Lt.unstable_UserBlockingPriority,Wa=Lt.unstable_NormalPriority,iS=Lt.unstable_LowPriority,Kv=Lt.unstable_IdlePriority,Tl=null,fn=null;function rS(e){if(fn&&typeof fn.onCommitFiberRoot=="function")try{fn.onCommitFiberRoot(Tl,e,void 0,(e.current.flags&128)===128)}catch{}}var Jt=Math.clz32?Math.clz32:aS,oS=Math.log,sS=Math.LN2;function aS(e){return e>>>=0,e===0?32:31-(oS(e)/sS|0)|0}var Xs=64,Qs=4194304;function ko(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ha(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,a=e.pingedLanes,l=n&268435455;if(l!==0){var c=l&~o;c!==0?r=ko(c):(a&=l,a!==0&&(r=ko(a)))}else l=n&~o,l!==0?r=ko(l):a!==0&&(r=ko(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,a=t&-t,o>=a||o===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Jt(t),o=1<<n,r|=e[n],t&=~o;return r}function lS(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function uS(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,a=e.pendingLanes;0<a;){var l=31-Jt(a),c=1<<l,f=o[l];f===-1?(!(c&n)||c&r)&&(o[l]=lS(c,t)):f<=t&&(e.expiredLanes|=c),a&=~c}}function Jc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Yv(){var e=Xs;return Xs<<=1,!(Xs&4194240)&&(Xs=64),e}function Fu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vs(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Jt(t),e[t]=n}function cS(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Jt(n),a=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~a}}function yf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Jt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var me=0;function Xv(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Qv,xf,qv,Jv,ey,ed=!1,qs=[],Gn=null,Kn=null,Yn=null,Go=new Map,Ko=new Map,Vn=[],dS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sm(e,t){switch(e){case"focusin":case"focusout":Gn=null;break;case"dragenter":case"dragleave":Kn=null;break;case"mouseover":case"mouseout":Yn=null;break;case"pointerover":case"pointerout":Go.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ko.delete(t.pointerId)}}function fo(e,t,n,r,o,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[o]},t!==null&&(t=xs(t),t!==null&&xf(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function fS(e,t,n,r,o){switch(t){case"focusin":return Gn=fo(Gn,e,t,n,r,o),!0;case"dragenter":return Kn=fo(Kn,e,t,n,r,o),!0;case"mouseover":return Yn=fo(Yn,e,t,n,r,o),!0;case"pointerover":var a=o.pointerId;return Go.set(a,fo(Go.get(a)||null,e,t,n,r,o)),!0;case"gotpointercapture":return a=o.pointerId,Ko.set(a,fo(Ko.get(a)||null,e,t,n,r,o)),!0}return!1}function ty(e){var t=Ti(e.target);if(t!==null){var n=Wi(t);if(n!==null){if(t=n.tag,t===13){if(t=Zv(n),t!==null){e.blockedOn=t,ey(e.priority,function(){qv(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ba(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=td(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Yc=r,n.target.dispatchEvent(r),Yc=null}else return t=xs(n),t!==null&&xf(t),e.blockedOn=n,!1;t.shift()}return!0}function am(e,t,n){ba(e)&&n.delete(t)}function hS(){ed=!1,Gn!==null&&ba(Gn)&&(Gn=null),Kn!==null&&ba(Kn)&&(Kn=null),Yn!==null&&ba(Yn)&&(Yn=null),Go.forEach(am),Ko.forEach(am)}function ho(e,t){e.blockedOn===t&&(e.blockedOn=null,ed||(ed=!0,Lt.unstable_scheduleCallback(Lt.unstable_NormalPriority,hS)))}function Yo(e){function t(o){return ho(o,e)}if(0<qs.length){ho(qs[0],e);for(var n=1;n<qs.length;n++){var r=qs[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Gn!==null&&ho(Gn,e),Kn!==null&&ho(Kn,e),Yn!==null&&ho(Yn,e),Go.forEach(t),Ko.forEach(t),n=0;n<Vn.length;n++)r=Vn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Vn.length&&(n=Vn[0],n.blockedOn===null);)ty(n),n.blockedOn===null&&Vn.shift()}var Er=An.ReactCurrentBatchConfig,Ga=!0;function pS(e,t,n,r){var o=me,a=Er.transition;Er.transition=null;try{me=1,_f(e,t,n,r)}finally{me=o,Er.transition=a}}function mS(e,t,n,r){var o=me,a=Er.transition;Er.transition=null;try{me=4,_f(e,t,n,r)}finally{me=o,Er.transition=a}}function _f(e,t,n,r){if(Ga){var o=td(e,t,n,r);if(o===null)Qu(e,t,r,Ka,n),sm(e,r);else if(fS(o,e,t,n,r))r.stopPropagation();else if(sm(e,r),t&4&&-1<dS.indexOf(e)){for(;o!==null;){var a=xs(o);if(a!==null&&Qv(a),a=td(e,t,n,r),a===null&&Qu(e,t,r,Ka,n),a===o)break;o=a}o!==null&&r.stopPropagation()}else Qu(e,t,r,null,n)}}var Ka=null;function td(e,t,n,r){if(Ka=null,e=gf(r),e=Ti(e),e!==null)if(t=Wi(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Zv(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ka=e,null}function ny(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(nS()){case vf:return 1;case Gv:return 4;case Wa:case iS:return 16;case Kv:return 536870912;default:return 16}default:return 16}}var Un=null,wf=null,Sa=null;function iy(){if(Sa)return Sa;var e,t=wf,n=t.length,r,o="value"in Un?Un.value:Un.textContent,a=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[a-r];r++);return Sa=o.slice(e,1<r?1-r:void 0)}function Ca(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Js(){return!0}function lm(){return!1}function jt(e){function t(n,r,o,a,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=a,this.target=l,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(a):a[c]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Js:lm,this.isPropagationStopped=lm,this}return Ee(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Js)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Js)},persist:function(){},isPersistent:Js}),t}var Hr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bf=jt(Hr),ys=Ee({},Hr,{view:0,detail:0}),gS=jt(ys),Vu,Zu,po,Ll=Ee({},ys,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==po&&(po&&e.type==="mousemove"?(Vu=e.screenX-po.screenX,Zu=e.screenY-po.screenY):Zu=Vu=0,po=e),Vu)},movementY:function(e){return"movementY"in e?e.movementY:Zu}}),um=jt(Ll),vS=Ee({},Ll,{dataTransfer:0}),yS=jt(vS),xS=Ee({},ys,{relatedTarget:0}),Uu=jt(xS),_S=Ee({},Hr,{animationName:0,elapsedTime:0,pseudoElement:0}),wS=jt(_S),bS=Ee({},Hr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),SS=jt(bS),CS=Ee({},Hr,{data:0}),cm=jt(CS),PS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},TS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function LS(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=TS[e])?!!t[e]:!1}function Sf(){return LS}var ES=Ee({},ys,{key:function(e){if(e.key){var t=PS[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ca(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?kS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sf,charCode:function(e){return e.type==="keypress"?Ca(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ca(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),zS=jt(ES),jS=Ee({},Ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dm=jt(jS),MS=Ee({},ys,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sf}),AS=jt(MS),RS=Ee({},Hr,{propertyName:0,elapsedTime:0,pseudoElement:0}),IS=jt(RS),OS=Ee({},Ll,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),DS=jt(OS),$S=[9,13,27,32],Cf=Ln&&"CompositionEvent"in window,Mo=null;Ln&&"documentMode"in document&&(Mo=document.documentMode);var NS=Ln&&"TextEvent"in window&&!Mo,ry=Ln&&(!Cf||Mo&&8<Mo&&11>=Mo),fm=" ",hm=!1;function oy(e,t){switch(e){case"keyup":return $S.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sy(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var dr=!1;function BS(e,t){switch(e){case"compositionend":return sy(t);case"keypress":return t.which!==32?null:(hm=!0,fm);case"textInput":return e=t.data,e===fm&&hm?null:e;default:return null}}function FS(e,t){if(dr)return e==="compositionend"||!Cf&&oy(e,t)?(e=iy(),Sa=wf=Un=null,dr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ry&&t.locale!=="ko"?null:t.data;default:return null}}var VS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!VS[e.type]:t==="textarea"}function ay(e,t,n,r){$v(r),t=Ya(t,"onChange"),0<t.length&&(n=new bf("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ao=null,Xo=null;function ZS(e){yy(e,0)}function El(e){var t=pr(e);if(jv(t))return e}function US(e,t){if(e==="change")return t}var ly=!1;if(Ln){var Wu;if(Ln){var Hu="oninput"in document;if(!Hu){var mm=document.createElement("div");mm.setAttribute("oninput","return;"),Hu=typeof mm.oninput=="function"}Wu=Hu}else Wu=!1;ly=Wu&&(!document.documentMode||9<document.documentMode)}function gm(){Ao&&(Ao.detachEvent("onpropertychange",uy),Xo=Ao=null)}function uy(e){if(e.propertyName==="value"&&El(Xo)){var t=[];ay(t,Xo,e,gf(e)),Vv(ZS,t)}}function WS(e,t,n){e==="focusin"?(gm(),Ao=t,Xo=n,Ao.attachEvent("onpropertychange",uy)):e==="focusout"&&gm()}function HS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return El(Xo)}function GS(e,t){if(e==="click")return El(t)}function KS(e,t){if(e==="input"||e==="change")return El(t)}function YS(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nn=typeof Object.is=="function"?Object.is:YS;function Qo(e,t){if(nn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Dc.call(t,o)||!nn(e[o],t[o]))return!1}return!0}function vm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ym(e,t){var n=vm(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=vm(n)}}function cy(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?cy(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function dy(){for(var e=window,t=Va();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Va(e.document)}return t}function Pf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function XS(e){var t=dy(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&cy(n.ownerDocument.documentElement,n)){if(r!==null&&Pf(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,a=Math.min(r.start,o);r=r.end===void 0?a:Math.min(r.end,o),!e.extend&&a>r&&(o=r,r=a,a=o),o=ym(n,a);var l=ym(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var QS=Ln&&"documentMode"in document&&11>=document.documentMode,fr=null,nd=null,Ro=null,id=!1;function xm(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;id||fr==null||fr!==Va(r)||(r=fr,"selectionStart"in r&&Pf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ro&&Qo(Ro,r)||(Ro=r,r=Ya(nd,"onSelect"),0<r.length&&(t=new bf("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=fr)))}function ea(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var hr={animationend:ea("Animation","AnimationEnd"),animationiteration:ea("Animation","AnimationIteration"),animationstart:ea("Animation","AnimationStart"),transitionend:ea("Transition","TransitionEnd")},Gu={},fy={};Ln&&(fy=document.createElement("div").style,"AnimationEvent"in window||(delete hr.animationend.animation,delete hr.animationiteration.animation,delete hr.animationstart.animation),"TransitionEvent"in window||delete hr.transitionend.transition);function zl(e){if(Gu[e])return Gu[e];if(!hr[e])return e;var t=hr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in fy)return Gu[e]=t[n];return e}var hy=zl("animationend"),py=zl("animationiteration"),my=zl("animationstart"),gy=zl("transitionend"),vy=new Map,_m="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function li(e,t){vy.set(e,t),Ui(t,[e])}for(var Ku=0;Ku<_m.length;Ku++){var Yu=_m[Ku],qS=Yu.toLowerCase(),JS=Yu[0].toUpperCase()+Yu.slice(1);li(qS,"on"+JS)}li(hy,"onAnimationEnd");li(py,"onAnimationIteration");li(my,"onAnimationStart");li("dblclick","onDoubleClick");li("focusin","onFocus");li("focusout","onBlur");li(gy,"onTransitionEnd");Mr("onMouseEnter",["mouseout","mouseover"]);Mr("onMouseLeave",["mouseout","mouseover"]);Mr("onPointerEnter",["pointerout","pointerover"]);Mr("onPointerLeave",["pointerout","pointerover"]);Ui("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ui("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ui("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ui("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ui("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ui("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var To="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),eC=new Set("cancel close invalid load scroll toggle".split(" ").concat(To));function wm(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,qb(r,t,void 0,e),e.currentTarget=null}function yy(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var l=r.length-1;0<=l;l--){var c=r[l],f=c.instance,h=c.currentTarget;if(c=c.listener,f!==a&&o.isPropagationStopped())break e;wm(o,c,h),a=f}else for(l=0;l<r.length;l++){if(c=r[l],f=c.instance,h=c.currentTarget,c=c.listener,f!==a&&o.isPropagationStopped())break e;wm(o,c,h),a=f}}}if(Ua)throw e=qc,Ua=!1,qc=null,e}function _e(e,t){var n=t[ld];n===void 0&&(n=t[ld]=new Set);var r=e+"__bubble";n.has(r)||(xy(t,e,2,!1),n.add(r))}function Xu(e,t,n){var r=0;t&&(r|=4),xy(n,e,r,t)}var ta="_reactListening"+Math.random().toString(36).slice(2);function qo(e){if(!e[ta]){e[ta]=!0,kv.forEach(function(n){n!=="selectionchange"&&(eC.has(n)||Xu(n,!1,e),Xu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ta]||(t[ta]=!0,Xu("selectionchange",!1,t))}}function xy(e,t,n,r){switch(ny(t)){case 1:var o=pS;break;case 4:o=mS;break;default:o=_f}n=o.bind(null,t,n,e),o=void 0,!Qc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Qu(e,t,n,r,o){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var c=r.stateNode.containerInfo;if(c===o||c.nodeType===8&&c.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var f=l.tag;if((f===3||f===4)&&(f=l.stateNode.containerInfo,f===o||f.nodeType===8&&f.parentNode===o))return;l=l.return}for(;c!==null;){if(l=Ti(c),l===null)return;if(f=l.tag,f===5||f===6){r=a=l;continue e}c=c.parentNode}}r=r.return}Vv(function(){var h=a,v=gf(n),g=[];e:{var x=vy.get(e);if(x!==void 0){var b=bf,S=e;switch(e){case"keypress":if(Ca(n)===0)break e;case"keydown":case"keyup":b=zS;break;case"focusin":S="focus",b=Uu;break;case"focusout":S="blur",b=Uu;break;case"beforeblur":case"afterblur":b=Uu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=um;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=yS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=AS;break;case hy:case py:case my:b=wS;break;case gy:b=IS;break;case"scroll":b=gS;break;case"wheel":b=DS;break;case"copy":case"cut":case"paste":b=SS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=dm}var P=(t&4)!==0,j=!P&&e==="scroll",C=P?x!==null?x+"Capture":null:x;P=[];for(var y=h,w;y!==null;){w=y;var z=w.stateNode;if(w.tag===5&&z!==null&&(w=z,C!==null&&(z=Ho(y,C),z!=null&&P.push(Jo(y,z,w)))),j)break;y=y.return}0<P.length&&(x=new b(x,S,null,n,v),g.push({event:x,listeners:P}))}}if(!(t&7)){e:{if(x=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",x&&n!==Yc&&(S=n.relatedTarget||n.fromElement)&&(Ti(S)||S[En]))break e;if((b||x)&&(x=v.window===v?v:(x=v.ownerDocument)?x.defaultView||x.parentWindow:window,b?(S=n.relatedTarget||n.toElement,b=h,S=S?Ti(S):null,S!==null&&(j=Wi(S),S!==j||S.tag!==5&&S.tag!==6)&&(S=null)):(b=null,S=h),b!==S)){if(P=um,z="onMouseLeave",C="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(P=dm,z="onPointerLeave",C="onPointerEnter",y="pointer"),j=b==null?x:pr(b),w=S==null?x:pr(S),x=new P(z,y+"leave",b,n,v),x.target=j,x.relatedTarget=w,z=null,Ti(v)===h&&(P=new P(C,y+"enter",S,n,v),P.target=w,P.relatedTarget=j,z=P),j=z,b&&S)t:{for(P=b,C=S,y=0,w=P;w;w=sr(w))y++;for(w=0,z=C;z;z=sr(z))w++;for(;0<y-w;)P=sr(P),y--;for(;0<w-y;)C=sr(C),w--;for(;y--;){if(P===C||C!==null&&P===C.alternate)break t;P=sr(P),C=sr(C)}P=null}else P=null;b!==null&&bm(g,x,b,P,!1),S!==null&&j!==null&&bm(g,j,S,P,!0)}}e:{if(x=h?pr(h):window,b=x.nodeName&&x.nodeName.toLowerCase(),b==="select"||b==="input"&&x.type==="file")var R=US;else if(pm(x))if(ly)R=KS;else{R=HS;var O=WS}else(b=x.nodeName)&&b.toLowerCase()==="input"&&(x.type==="checkbox"||x.type==="radio")&&(R=GS);if(R&&(R=R(e,h))){ay(g,R,n,v);break e}O&&O(e,x,h),e==="focusout"&&(O=x._wrapperState)&&O.controlled&&x.type==="number"&&Uc(x,"number",x.value)}switch(O=h?pr(h):window,e){case"focusin":(pm(O)||O.contentEditable==="true")&&(fr=O,nd=h,Ro=null);break;case"focusout":Ro=nd=fr=null;break;case"mousedown":id=!0;break;case"contextmenu":case"mouseup":case"dragend":id=!1,xm(g,n,v);break;case"selectionchange":if(QS)break;case"keydown":case"keyup":xm(g,n,v)}var I;if(Cf)e:{switch(e){case"compositionstart":var $="onCompositionStart";break e;case"compositionend":$="onCompositionEnd";break e;case"compositionupdate":$="onCompositionUpdate";break e}$=void 0}else dr?oy(e,n)&&($="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&($="onCompositionStart");$&&(ry&&n.locale!=="ko"&&(dr||$!=="onCompositionStart"?$==="onCompositionEnd"&&dr&&(I=iy()):(Un=v,wf="value"in Un?Un.value:Un.textContent,dr=!0)),O=Ya(h,$),0<O.length&&($=new cm($,e,null,n,v),g.push({event:$,listeners:O}),I?$.data=I:(I=sy(n),I!==null&&($.data=I)))),(I=NS?BS(e,n):FS(e,n))&&(h=Ya(h,"onBeforeInput"),0<h.length&&(v=new cm("onBeforeInput","beforeinput",null,n,v),g.push({event:v,listeners:h}),v.data=I))}yy(g,t)})}function Jo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ya(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,a=o.stateNode;o.tag===5&&a!==null&&(o=a,a=Ho(e,n),a!=null&&r.unshift(Jo(e,a,o)),a=Ho(e,t),a!=null&&r.push(Jo(e,a,o))),e=e.return}return r}function sr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function bm(e,t,n,r,o){for(var a=t._reactName,l=[];n!==null&&n!==r;){var c=n,f=c.alternate,h=c.stateNode;if(f!==null&&f===r)break;c.tag===5&&h!==null&&(c=h,o?(f=Ho(n,a),f!=null&&l.unshift(Jo(n,f,c))):o||(f=Ho(n,a),f!=null&&l.push(Jo(n,f,c)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var tC=/\r\n?/g,nC=/\u0000|\uFFFD/g;function Sm(e){return(typeof e=="string"?e:""+e).replace(tC,`
`).replace(nC,"")}function na(e,t,n){if(t=Sm(t),Sm(e)!==t&&n)throw Error(B(425))}function Xa(){}var rd=null,od=null;function sd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ad=typeof setTimeout=="function"?setTimeout:void 0,iC=typeof clearTimeout=="function"?clearTimeout:void 0,Cm=typeof Promise=="function"?Promise:void 0,rC=typeof queueMicrotask=="function"?queueMicrotask:typeof Cm<"u"?function(e){return Cm.resolve(null).then(e).catch(oC)}:ad;function oC(e){setTimeout(function(){throw e})}function qu(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Yo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Yo(t)}function Xn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Pm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Gr=Math.random().toString(36).slice(2),dn="__reactFiber$"+Gr,es="__reactProps$"+Gr,En="__reactContainer$"+Gr,ld="__reactEvents$"+Gr,sC="__reactListeners$"+Gr,aC="__reactHandles$"+Gr;function Ti(e){var t=e[dn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[En]||n[dn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Pm(e);e!==null;){if(n=e[dn])return n;e=Pm(e)}return t}e=n,n=e.parentNode}return null}function xs(e){return e=e[dn]||e[En],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function pr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(B(33))}function jl(e){return e[es]||null}var ud=[],mr=-1;function ui(e){return{current:e}}function be(e){0>mr||(e.current=ud[mr],ud[mr]=null,mr--)}function ve(e,t){mr++,ud[mr]=e.current,e.current=t}var oi={},at=ui(oi),_t=ui(!1),Oi=oi;function Ar(e,t){var n=e.type.contextTypes;if(!n)return oi;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},a;for(a in n)o[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function wt(e){return e=e.childContextTypes,e!=null}function Qa(){be(_t),be(at)}function km(e,t,n){if(at.current!==oi)throw Error(B(168));ve(at,t),ve(_t,n)}function _y(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(B(108,Wb(e)||"Unknown",o));return Ee({},n,r)}function qa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||oi,Oi=at.current,ve(at,e),ve(_t,_t.current),!0}function Tm(e,t,n){var r=e.stateNode;if(!r)throw Error(B(169));n?(e=_y(e,t,Oi),r.__reactInternalMemoizedMergedChildContext=e,be(_t),be(at),ve(at,e)):be(_t),ve(_t,n)}var wn=null,Ml=!1,Ju=!1;function wy(e){wn===null?wn=[e]:wn.push(e)}function lC(e){Ml=!0,wy(e)}function ci(){if(!Ju&&wn!==null){Ju=!0;var e=0,t=me;try{var n=wn;for(me=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}wn=null,Ml=!1}catch(o){throw wn!==null&&(wn=wn.slice(e+1)),Hv(vf,ci),o}finally{me=t,Ju=!1}}return null}var gr=[],vr=0,Ja=null,el=0,Nt=[],Bt=0,Di=null,bn=1,Sn="";function bi(e,t){gr[vr++]=el,gr[vr++]=Ja,Ja=e,el=t}function by(e,t,n){Nt[Bt++]=bn,Nt[Bt++]=Sn,Nt[Bt++]=Di,Di=e;var r=bn;e=Sn;var o=32-Jt(r)-1;r&=~(1<<o),n+=1;var a=32-Jt(t)+o;if(30<a){var l=o-o%5;a=(r&(1<<l)-1).toString(32),r>>=l,o-=l,bn=1<<32-Jt(t)+o|n<<o|r,Sn=a+e}else bn=1<<a|n<<o|r,Sn=e}function kf(e){e.return!==null&&(bi(e,1),by(e,1,0))}function Tf(e){for(;e===Ja;)Ja=gr[--vr],gr[vr]=null,el=gr[--vr],gr[vr]=null;for(;e===Di;)Di=Nt[--Bt],Nt[Bt]=null,Sn=Nt[--Bt],Nt[Bt]=null,bn=Nt[--Bt],Nt[Bt]=null}var Tt=null,kt=null,Se=!1,qt=null;function Sy(e,t){var n=Ft(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Lm(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Tt=e,kt=Xn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Tt=e,kt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Di!==null?{id:bn,overflow:Sn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ft(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Tt=e,kt=null,!0):!1;default:return!1}}function cd(e){return(e.mode&1)!==0&&(e.flags&128)===0}function dd(e){if(Se){var t=kt;if(t){var n=t;if(!Lm(e,t)){if(cd(e))throw Error(B(418));t=Xn(n.nextSibling);var r=Tt;t&&Lm(e,t)?Sy(r,n):(e.flags=e.flags&-4097|2,Se=!1,Tt=e)}}else{if(cd(e))throw Error(B(418));e.flags=e.flags&-4097|2,Se=!1,Tt=e}}}function Em(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Tt=e}function ia(e){if(e!==Tt)return!1;if(!Se)return Em(e),Se=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!sd(e.type,e.memoizedProps)),t&&(t=kt)){if(cd(e))throw Cy(),Error(B(418));for(;t;)Sy(e,t),t=Xn(t.nextSibling)}if(Em(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(B(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){kt=Xn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}kt=null}}else kt=Tt?Xn(e.stateNode.nextSibling):null;return!0}function Cy(){for(var e=kt;e;)e=Xn(e.nextSibling)}function Rr(){kt=Tt=null,Se=!1}function Lf(e){qt===null?qt=[e]:qt.push(e)}var uC=An.ReactCurrentBatchConfig;function mo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,e));var o=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(l){var c=o.refs;l===null?delete c[a]:c[a]=l},t._stringRef=a,t)}if(typeof e!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,e))}return e}function ra(e,t){throw e=Object.prototype.toString.call(t),Error(B(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function zm(e){var t=e._init;return t(e._payload)}function Py(e){function t(C,y){if(e){var w=C.deletions;w===null?(C.deletions=[y],C.flags|=16):w.push(y)}}function n(C,y){if(!e)return null;for(;y!==null;)t(C,y),y=y.sibling;return null}function r(C,y){for(C=new Map;y!==null;)y.key!==null?C.set(y.key,y):C.set(y.index,y),y=y.sibling;return C}function o(C,y){return C=ei(C,y),C.index=0,C.sibling=null,C}function a(C,y,w){return C.index=w,e?(w=C.alternate,w!==null?(w=w.index,w<y?(C.flags|=2,y):w):(C.flags|=2,y)):(C.flags|=1048576,y)}function l(C){return e&&C.alternate===null&&(C.flags|=2),C}function c(C,y,w,z){return y===null||y.tag!==6?(y=sc(w,C.mode,z),y.return=C,y):(y=o(y,w),y.return=C,y)}function f(C,y,w,z){var R=w.type;return R===cr?v(C,y,w.props.children,z,w.key):y!==null&&(y.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Nn&&zm(R)===y.type)?(z=o(y,w.props),z.ref=mo(C,y,w),z.return=C,z):(z=ja(w.type,w.key,w.props,null,C.mode,z),z.ref=mo(C,y,w),z.return=C,z)}function h(C,y,w,z){return y===null||y.tag!==4||y.stateNode.containerInfo!==w.containerInfo||y.stateNode.implementation!==w.implementation?(y=ac(w,C.mode,z),y.return=C,y):(y=o(y,w.children||[]),y.return=C,y)}function v(C,y,w,z,R){return y===null||y.tag!==7?(y=Ai(w,C.mode,z,R),y.return=C,y):(y=o(y,w),y.return=C,y)}function g(C,y,w){if(typeof y=="string"&&y!==""||typeof y=="number")return y=sc(""+y,C.mode,w),y.return=C,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Gs:return w=ja(y.type,y.key,y.props,null,C.mode,w),w.ref=mo(C,null,y),w.return=C,w;case ur:return y=ac(y,C.mode,w),y.return=C,y;case Nn:var z=y._init;return g(C,z(y._payload),w)}if(Po(y)||uo(y))return y=Ai(y,C.mode,w,null),y.return=C,y;ra(C,y)}return null}function x(C,y,w,z){var R=y!==null?y.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return R!==null?null:c(C,y,""+w,z);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Gs:return w.key===R?f(C,y,w,z):null;case ur:return w.key===R?h(C,y,w,z):null;case Nn:return R=w._init,x(C,y,R(w._payload),z)}if(Po(w)||uo(w))return R!==null?null:v(C,y,w,z,null);ra(C,w)}return null}function b(C,y,w,z,R){if(typeof z=="string"&&z!==""||typeof z=="number")return C=C.get(w)||null,c(y,C,""+z,R);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case Gs:return C=C.get(z.key===null?w:z.key)||null,f(y,C,z,R);case ur:return C=C.get(z.key===null?w:z.key)||null,h(y,C,z,R);case Nn:var O=z._init;return b(C,y,w,O(z._payload),R)}if(Po(z)||uo(z))return C=C.get(w)||null,v(y,C,z,R,null);ra(y,z)}return null}function S(C,y,w,z){for(var R=null,O=null,I=y,$=y=0,W=null;I!==null&&$<w.length;$++){I.index>$?(W=I,I=null):W=I.sibling;var G=x(C,I,w[$],z);if(G===null){I===null&&(I=W);break}e&&I&&G.alternate===null&&t(C,I),y=a(G,y,$),O===null?R=G:O.sibling=G,O=G,I=W}if($===w.length)return n(C,I),Se&&bi(C,$),R;if(I===null){for(;$<w.length;$++)I=g(C,w[$],z),I!==null&&(y=a(I,y,$),O===null?R=I:O.sibling=I,O=I);return Se&&bi(C,$),R}for(I=r(C,I);$<w.length;$++)W=b(I,C,$,w[$],z),W!==null&&(e&&W.alternate!==null&&I.delete(W.key===null?$:W.key),y=a(W,y,$),O===null?R=W:O.sibling=W,O=W);return e&&I.forEach(function(ae){return t(C,ae)}),Se&&bi(C,$),R}function P(C,y,w,z){var R=uo(w);if(typeof R!="function")throw Error(B(150));if(w=R.call(w),w==null)throw Error(B(151));for(var O=R=null,I=y,$=y=0,W=null,G=w.next();I!==null&&!G.done;$++,G=w.next()){I.index>$?(W=I,I=null):W=I.sibling;var ae=x(C,I,G.value,z);if(ae===null){I===null&&(I=W);break}e&&I&&ae.alternate===null&&t(C,I),y=a(ae,y,$),O===null?R=ae:O.sibling=ae,O=ae,I=W}if(G.done)return n(C,I),Se&&bi(C,$),R;if(I===null){for(;!G.done;$++,G=w.next())G=g(C,G.value,z),G!==null&&(y=a(G,y,$),O===null?R=G:O.sibling=G,O=G);return Se&&bi(C,$),R}for(I=r(C,I);!G.done;$++,G=w.next())G=b(I,C,$,G.value,z),G!==null&&(e&&G.alternate!==null&&I.delete(G.key===null?$:G.key),y=a(G,y,$),O===null?R=G:O.sibling=G,O=G);return e&&I.forEach(function(de){return t(C,de)}),Se&&bi(C,$),R}function j(C,y,w,z){if(typeof w=="object"&&w!==null&&w.type===cr&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case Gs:e:{for(var R=w.key,O=y;O!==null;){if(O.key===R){if(R=w.type,R===cr){if(O.tag===7){n(C,O.sibling),y=o(O,w.props.children),y.return=C,C=y;break e}}else if(O.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Nn&&zm(R)===O.type){n(C,O.sibling),y=o(O,w.props),y.ref=mo(C,O,w),y.return=C,C=y;break e}n(C,O);break}else t(C,O);O=O.sibling}w.type===cr?(y=Ai(w.props.children,C.mode,z,w.key),y.return=C,C=y):(z=ja(w.type,w.key,w.props,null,C.mode,z),z.ref=mo(C,y,w),z.return=C,C=z)}return l(C);case ur:e:{for(O=w.key;y!==null;){if(y.key===O)if(y.tag===4&&y.stateNode.containerInfo===w.containerInfo&&y.stateNode.implementation===w.implementation){n(C,y.sibling),y=o(y,w.children||[]),y.return=C,C=y;break e}else{n(C,y);break}else t(C,y);y=y.sibling}y=ac(w,C.mode,z),y.return=C,C=y}return l(C);case Nn:return O=w._init,j(C,y,O(w._payload),z)}if(Po(w))return S(C,y,w,z);if(uo(w))return P(C,y,w,z);ra(C,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,y!==null&&y.tag===6?(n(C,y.sibling),y=o(y,w),y.return=C,C=y):(n(C,y),y=sc(w,C.mode,z),y.return=C,C=y),l(C)):n(C,y)}return j}var Ir=Py(!0),ky=Py(!1),tl=ui(null),nl=null,yr=null,Ef=null;function zf(){Ef=yr=nl=null}function jf(e){var t=tl.current;be(tl),e._currentValue=t}function fd(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function zr(e,t){nl=e,Ef=yr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(xt=!0),e.firstContext=null)}function Zt(e){var t=e._currentValue;if(Ef!==e)if(e={context:e,memoizedValue:t,next:null},yr===null){if(nl===null)throw Error(B(308));yr=e,nl.dependencies={lanes:0,firstContext:e}}else yr=yr.next=e;return t}var Li=null;function Mf(e){Li===null?Li=[e]:Li.push(e)}function Ty(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Mf(t)):(n.next=o.next,o.next=n),t.interleaved=n,zn(e,r)}function zn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Bn=!1;function Af(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ly(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Pn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Qn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ce&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,zn(e,n)}return o=r.interleaved,o===null?(t.next=t,Mf(r)):(t.next=o.next,o.next=t),r.interleaved=t,zn(e,n)}function Pa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,yf(e,n)}}function jm(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?o=a=l:a=a.next=l,n=n.next}while(n!==null);a===null?o=a=t:a=a.next=t}else o=a=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function il(e,t,n,r){var o=e.updateQueue;Bn=!1;var a=o.firstBaseUpdate,l=o.lastBaseUpdate,c=o.shared.pending;if(c!==null){o.shared.pending=null;var f=c,h=f.next;f.next=null,l===null?a=h:l.next=h,l=f;var v=e.alternate;v!==null&&(v=v.updateQueue,c=v.lastBaseUpdate,c!==l&&(c===null?v.firstBaseUpdate=h:c.next=h,v.lastBaseUpdate=f))}if(a!==null){var g=o.baseState;l=0,v=h=f=null,c=a;do{var x=c.lane,b=c.eventTime;if((r&x)===x){v!==null&&(v=v.next={eventTime:b,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var S=e,P=c;switch(x=t,b=n,P.tag){case 1:if(S=P.payload,typeof S=="function"){g=S.call(b,g,x);break e}g=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=P.payload,x=typeof S=="function"?S.call(b,g,x):S,x==null)break e;g=Ee({},g,x);break e;case 2:Bn=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,x=o.effects,x===null?o.effects=[c]:x.push(c))}else b={eventTime:b,lane:x,tag:c.tag,payload:c.payload,callback:c.callback,next:null},v===null?(h=v=b,f=g):v=v.next=b,l|=x;if(c=c.next,c===null){if(c=o.shared.pending,c===null)break;x=c,c=x.next,x.next=null,o.lastBaseUpdate=x,o.shared.pending=null}}while(!0);if(v===null&&(f=g),o.baseState=f,o.firstBaseUpdate=h,o.lastBaseUpdate=v,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else a===null&&(o.shared.lanes=0);Ni|=l,e.lanes=l,e.memoizedState=g}}function Mm(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(B(191,o));o.call(r)}}}var _s={},hn=ui(_s),ts=ui(_s),ns=ui(_s);function Ei(e){if(e===_s)throw Error(B(174));return e}function Rf(e,t){switch(ve(ns,t),ve(ts,e),ve(hn,_s),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Hc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Hc(t,e)}be(hn),ve(hn,t)}function Or(){be(hn),be(ts),be(ns)}function Ey(e){Ei(ns.current);var t=Ei(hn.current),n=Hc(t,e.type);t!==n&&(ve(ts,e),ve(hn,n))}function If(e){ts.current===e&&(be(hn),be(ts))}var ke=ui(0);function rl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ec=[];function Of(){for(var e=0;e<ec.length;e++)ec[e]._workInProgressVersionPrimary=null;ec.length=0}var ka=An.ReactCurrentDispatcher,tc=An.ReactCurrentBatchConfig,$i=0,Le=null,Ze=null,He=null,ol=!1,Io=!1,is=0,cC=0;function it(){throw Error(B(321))}function Df(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!nn(e[n],t[n]))return!1;return!0}function $f(e,t,n,r,o,a){if($i=a,Le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ka.current=e===null||e.memoizedState===null?pC:mC,e=n(r,o),Io){a=0;do{if(Io=!1,is=0,25<=a)throw Error(B(301));a+=1,He=Ze=null,t.updateQueue=null,ka.current=gC,e=n(r,o)}while(Io)}if(ka.current=sl,t=Ze!==null&&Ze.next!==null,$i=0,He=Ze=Le=null,ol=!1,t)throw Error(B(300));return e}function Nf(){var e=is!==0;return is=0,e}function un(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?Le.memoizedState=He=e:He=He.next=e,He}function Ut(){if(Ze===null){var e=Le.alternate;e=e!==null?e.memoizedState:null}else e=Ze.next;var t=He===null?Le.memoizedState:He.next;if(t!==null)He=t,Ze=e;else{if(e===null)throw Error(B(310));Ze=e,e={memoizedState:Ze.memoizedState,baseState:Ze.baseState,baseQueue:Ze.baseQueue,queue:Ze.queue,next:null},He===null?Le.memoizedState=He=e:He=He.next=e}return He}function rs(e,t){return typeof t=="function"?t(e):t}function nc(e){var t=Ut(),n=t.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=e;var r=Ze,o=r.baseQueue,a=n.pending;if(a!==null){if(o!==null){var l=o.next;o.next=a.next,a.next=l}r.baseQueue=o=a,n.pending=null}if(o!==null){a=o.next,r=r.baseState;var c=l=null,f=null,h=a;do{var v=h.lane;if(($i&v)===v)f!==null&&(f=f.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:e(r,h.action);else{var g={lane:v,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};f===null?(c=f=g,l=r):f=f.next=g,Le.lanes|=v,Ni|=v}h=h.next}while(h!==null&&h!==a);f===null?l=r:f.next=c,nn(r,t.memoizedState)||(xt=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=f,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do a=o.lane,Le.lanes|=a,Ni|=a,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ic(e){var t=Ut(),n=t.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,a=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do a=e(a,l.action),l=l.next;while(l!==o);nn(a,t.memoizedState)||(xt=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function zy(){}function jy(e,t){var n=Le,r=Ut(),o=t(),a=!nn(r.memoizedState,o);if(a&&(r.memoizedState=o,xt=!0),r=r.queue,Bf(Ry.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||He!==null&&He.memoizedState.tag&1){if(n.flags|=2048,os(9,Ay.bind(null,n,r,o,t),void 0,null),Xe===null)throw Error(B(349));$i&30||My(n,t,o)}return o}function My(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Le.updateQueue,t===null?(t={lastEffect:null,stores:null},Le.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ay(e,t,n,r){t.value=n,t.getSnapshot=r,Iy(t)&&Oy(e)}function Ry(e,t,n){return n(function(){Iy(t)&&Oy(e)})}function Iy(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!nn(e,n)}catch{return!0}}function Oy(e){var t=zn(e,1);t!==null&&en(t,e,1,-1)}function Am(e){var t=un();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:rs,lastRenderedState:e},t.queue=e,e=e.dispatch=hC.bind(null,Le,e),[t.memoizedState,e]}function os(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Le.updateQueue,t===null?(t={lastEffect:null,stores:null},Le.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Dy(){return Ut().memoizedState}function Ta(e,t,n,r){var o=un();Le.flags|=e,o.memoizedState=os(1|t,n,void 0,r===void 0?null:r)}function Al(e,t,n,r){var o=Ut();r=r===void 0?null:r;var a=void 0;if(Ze!==null){var l=Ze.memoizedState;if(a=l.destroy,r!==null&&Df(r,l.deps)){o.memoizedState=os(t,n,a,r);return}}Le.flags|=e,o.memoizedState=os(1|t,n,a,r)}function Rm(e,t){return Ta(8390656,8,e,t)}function Bf(e,t){return Al(2048,8,e,t)}function $y(e,t){return Al(4,2,e,t)}function Ny(e,t){return Al(4,4,e,t)}function By(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Fy(e,t,n){return n=n!=null?n.concat([e]):null,Al(4,4,By.bind(null,t,e),n)}function Ff(){}function Vy(e,t){var n=Ut();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Df(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Zy(e,t){var n=Ut();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Df(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Uy(e,t,n){return $i&21?(nn(n,t)||(n=Yv(),Le.lanes|=n,Ni|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,xt=!0),e.memoizedState=n)}function dC(e,t){var n=me;me=n!==0&&4>n?n:4,e(!0);var r=tc.transition;tc.transition={};try{e(!1),t()}finally{me=n,tc.transition=r}}function Wy(){return Ut().memoizedState}function fC(e,t,n){var r=Jn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Hy(e))Gy(t,n);else if(n=Ty(e,t,n,r),n!==null){var o=ft();en(n,e,r,o),Ky(n,t,r)}}function hC(e,t,n){var r=Jn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Hy(e))Gy(t,o);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var l=t.lastRenderedState,c=a(l,n);if(o.hasEagerState=!0,o.eagerState=c,nn(c,l)){var f=t.interleaved;f===null?(o.next=o,Mf(t)):(o.next=f.next,f.next=o),t.interleaved=o;return}}catch{}finally{}n=Ty(e,t,o,r),n!==null&&(o=ft(),en(n,e,r,o),Ky(n,t,r))}}function Hy(e){var t=e.alternate;return e===Le||t!==null&&t===Le}function Gy(e,t){Io=ol=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ky(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,yf(e,n)}}var sl={readContext:Zt,useCallback:it,useContext:it,useEffect:it,useImperativeHandle:it,useInsertionEffect:it,useLayoutEffect:it,useMemo:it,useReducer:it,useRef:it,useState:it,useDebugValue:it,useDeferredValue:it,useTransition:it,useMutableSource:it,useSyncExternalStore:it,useId:it,unstable_isNewReconciler:!1},pC={readContext:Zt,useCallback:function(e,t){return un().memoizedState=[e,t===void 0?null:t],e},useContext:Zt,useEffect:Rm,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ta(4194308,4,By.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ta(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ta(4,2,e,t)},useMemo:function(e,t){var n=un();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=un();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=fC.bind(null,Le,e),[r.memoizedState,e]},useRef:function(e){var t=un();return e={current:e},t.memoizedState=e},useState:Am,useDebugValue:Ff,useDeferredValue:function(e){return un().memoizedState=e},useTransition:function(){var e=Am(!1),t=e[0];return e=dC.bind(null,e[1]),un().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Le,o=un();if(Se){if(n===void 0)throw Error(B(407));n=n()}else{if(n=t(),Xe===null)throw Error(B(349));$i&30||My(r,t,n)}o.memoizedState=n;var a={value:n,getSnapshot:t};return o.queue=a,Rm(Ry.bind(null,r,a,e),[e]),r.flags|=2048,os(9,Ay.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=un(),t=Xe.identifierPrefix;if(Se){var n=Sn,r=bn;n=(r&~(1<<32-Jt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=is++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=cC++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},mC={readContext:Zt,useCallback:Vy,useContext:Zt,useEffect:Bf,useImperativeHandle:Fy,useInsertionEffect:$y,useLayoutEffect:Ny,useMemo:Zy,useReducer:nc,useRef:Dy,useState:function(){return nc(rs)},useDebugValue:Ff,useDeferredValue:function(e){var t=Ut();return Uy(t,Ze.memoizedState,e)},useTransition:function(){var e=nc(rs)[0],t=Ut().memoizedState;return[e,t]},useMutableSource:zy,useSyncExternalStore:jy,useId:Wy,unstable_isNewReconciler:!1},gC={readContext:Zt,useCallback:Vy,useContext:Zt,useEffect:Bf,useImperativeHandle:Fy,useInsertionEffect:$y,useLayoutEffect:Ny,useMemo:Zy,useReducer:ic,useRef:Dy,useState:function(){return ic(rs)},useDebugValue:Ff,useDeferredValue:function(e){var t=Ut();return Ze===null?t.memoizedState=e:Uy(t,Ze.memoizedState,e)},useTransition:function(){var e=ic(rs)[0],t=Ut().memoizedState;return[e,t]},useMutableSource:zy,useSyncExternalStore:jy,useId:Wy,unstable_isNewReconciler:!1};function Xt(e,t){if(e&&e.defaultProps){t=Ee({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function hd(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ee({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Rl={isMounted:function(e){return(e=e._reactInternals)?Wi(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ft(),o=Jn(e),a=Pn(r,o);a.payload=t,n!=null&&(a.callback=n),t=Qn(e,a,o),t!==null&&(en(t,e,o,r),Pa(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ft(),o=Jn(e),a=Pn(r,o);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Qn(e,a,o),t!==null&&(en(t,e,o,r),Pa(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ft(),r=Jn(e),o=Pn(n,r);o.tag=2,t!=null&&(o.callback=t),t=Qn(e,o,r),t!==null&&(en(t,e,r,n),Pa(t,e,r))}};function Im(e,t,n,r,o,a,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,l):t.prototype&&t.prototype.isPureReactComponent?!Qo(n,r)||!Qo(o,a):!0}function Yy(e,t,n){var r=!1,o=oi,a=t.contextType;return typeof a=="object"&&a!==null?a=Zt(a):(o=wt(t)?Oi:at.current,r=t.contextTypes,a=(r=r!=null)?Ar(e,o):oi),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Rl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=a),t}function Om(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Rl.enqueueReplaceState(t,t.state,null)}function pd(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Af(e);var a=t.contextType;typeof a=="object"&&a!==null?o.context=Zt(a):(a=wt(t)?Oi:at.current,o.context=Ar(e,a)),o.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(hd(e,t,a,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Rl.enqueueReplaceState(o,o.state,null),il(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Dr(e,t){try{var n="",r=t;do n+=Ub(r),r=r.return;while(r);var o=n}catch(a){o=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:o,digest:null}}function rc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function md(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var vC=typeof WeakMap=="function"?WeakMap:Map;function Xy(e,t,n){n=Pn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ll||(ll=!0,Pd=r),md(e,t)},n}function Qy(e,t,n){n=Pn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){md(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){md(e,t),typeof r!="function"&&(qn===null?qn=new Set([this]):qn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Dm(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new vC;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=jC.bind(null,e,t,n),t.then(e,e))}function $m(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Nm(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Pn(-1,1),t.tag=2,Qn(n,t,1))),n.lanes|=1),e)}var yC=An.ReactCurrentOwner,xt=!1;function dt(e,t,n,r){t.child=e===null?ky(t,null,n,r):Ir(t,e.child,n,r)}function Bm(e,t,n,r,o){n=n.render;var a=t.ref;return zr(t,o),r=$f(e,t,n,r,a,o),n=Nf(),e!==null&&!xt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,jn(e,t,o)):(Se&&n&&kf(t),t.flags|=1,dt(e,t,r,o),t.child)}function Fm(e,t,n,r,o){if(e===null){var a=n.type;return typeof a=="function"&&!Yf(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,qy(e,t,a,r,o)):(e=ja(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&o)){var l=a.memoizedProps;if(n=n.compare,n=n!==null?n:Qo,n(l,r)&&e.ref===t.ref)return jn(e,t,o)}return t.flags|=1,e=ei(a,r),e.ref=t.ref,e.return=t,t.child=e}function qy(e,t,n,r,o){if(e!==null){var a=e.memoizedProps;if(Qo(a,r)&&e.ref===t.ref)if(xt=!1,t.pendingProps=r=a,(e.lanes&o)!==0)e.flags&131072&&(xt=!0);else return t.lanes=e.lanes,jn(e,t,o)}return gd(e,t,n,r,o)}function Jy(e,t,n){var r=t.pendingProps,o=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ve(_r,Pt),Pt|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ve(_r,Pt),Pt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,ve(_r,Pt),Pt|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,ve(_r,Pt),Pt|=r;return dt(e,t,o,n),t.child}function ex(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function gd(e,t,n,r,o){var a=wt(n)?Oi:at.current;return a=Ar(t,a),zr(t,o),n=$f(e,t,n,r,a,o),r=Nf(),e!==null&&!xt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,jn(e,t,o)):(Se&&r&&kf(t),t.flags|=1,dt(e,t,n,o),t.child)}function Vm(e,t,n,r,o){if(wt(n)){var a=!0;qa(t)}else a=!1;if(zr(t,o),t.stateNode===null)La(e,t),Yy(t,n,r),pd(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,c=t.memoizedProps;l.props=c;var f=l.context,h=n.contextType;typeof h=="object"&&h!==null?h=Zt(h):(h=wt(n)?Oi:at.current,h=Ar(t,h));var v=n.getDerivedStateFromProps,g=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function";g||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c!==r||f!==h)&&Om(t,l,r,h),Bn=!1;var x=t.memoizedState;l.state=x,il(t,r,l,o),f=t.memoizedState,c!==r||x!==f||_t.current||Bn?(typeof v=="function"&&(hd(t,n,v,r),f=t.memoizedState),(c=Bn||Im(t,n,c,r,x,f,h))?(g||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=f),l.props=r,l.state=f,l.context=h,r=c):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Ly(e,t),c=t.memoizedProps,h=t.type===t.elementType?c:Xt(t.type,c),l.props=h,g=t.pendingProps,x=l.context,f=n.contextType,typeof f=="object"&&f!==null?f=Zt(f):(f=wt(n)?Oi:at.current,f=Ar(t,f));var b=n.getDerivedStateFromProps;(v=typeof b=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c!==g||x!==f)&&Om(t,l,r,f),Bn=!1,x=t.memoizedState,l.state=x,il(t,r,l,o);var S=t.memoizedState;c!==g||x!==S||_t.current||Bn?(typeof b=="function"&&(hd(t,n,b,r),S=t.memoizedState),(h=Bn||Im(t,n,h,r,x,S,f)||!1)?(v||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,S,f),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,S,f)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||c===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=S),l.props=r,l.state=S,l.context=f,r=h):(typeof l.componentDidUpdate!="function"||c===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),r=!1)}return vd(e,t,n,r,a,o)}function vd(e,t,n,r,o,a){ex(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&Tm(t,n,!1),jn(e,t,a);r=t.stateNode,yC.current=t;var c=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Ir(t,e.child,null,a),t.child=Ir(t,null,c,a)):dt(e,t,c,a),t.memoizedState=r.state,o&&Tm(t,n,!0),t.child}function tx(e){var t=e.stateNode;t.pendingContext?km(e,t.pendingContext,t.pendingContext!==t.context):t.context&&km(e,t.context,!1),Rf(e,t.containerInfo)}function Zm(e,t,n,r,o){return Rr(),Lf(o),t.flags|=256,dt(e,t,n,r),t.child}var yd={dehydrated:null,treeContext:null,retryLane:0};function xd(e){return{baseLanes:e,cachePool:null,transitions:null}}function nx(e,t,n){var r=t.pendingProps,o=ke.current,a=!1,l=(t.flags&128)!==0,c;if((c=l)||(c=e!==null&&e.memoizedState===null?!1:(o&2)!==0),c?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ve(ke,o&1),e===null)return dd(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,a?(r=t.mode,a=t.child,l={mode:"hidden",children:l},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=l):a=Dl(l,r,0,null),e=Ai(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=xd(n),t.memoizedState=yd,e):Vf(t,l));if(o=e.memoizedState,o!==null&&(c=o.dehydrated,c!==null))return xC(e,t,l,r,c,o,n);if(a){a=r.fallback,l=t.mode,o=e.child,c=o.sibling;var f={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=f,t.deletions=null):(r=ei(o,f),r.subtreeFlags=o.subtreeFlags&14680064),c!==null?a=ei(c,a):(a=Ai(a,l,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,l=e.child.memoizedState,l=l===null?xd(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},a.memoizedState=l,a.childLanes=e.childLanes&~n,t.memoizedState=yd,r}return a=e.child,e=a.sibling,r=ei(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Vf(e,t){return t=Dl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function oa(e,t,n,r){return r!==null&&Lf(r),Ir(t,e.child,null,n),e=Vf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function xC(e,t,n,r,o,a,l){if(n)return t.flags&256?(t.flags&=-257,r=rc(Error(B(422))),oa(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,o=t.mode,r=Dl({mode:"visible",children:r.children},o,0,null),a=Ai(a,o,l,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&Ir(t,e.child,null,l),t.child.memoizedState=xd(l),t.memoizedState=yd,a);if(!(t.mode&1))return oa(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var c=r.dgst;return r=c,a=Error(B(419)),r=rc(a,r,void 0),oa(e,t,l,r)}if(c=(l&e.childLanes)!==0,xt||c){if(r=Xe,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==a.retryLane&&(a.retryLane=o,zn(e,o),en(r,e,o,-1))}return Kf(),r=rc(Error(B(421))),oa(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=MC.bind(null,e),o._reactRetry=t,null):(e=a.treeContext,kt=Xn(o.nextSibling),Tt=t,Se=!0,qt=null,e!==null&&(Nt[Bt++]=bn,Nt[Bt++]=Sn,Nt[Bt++]=Di,bn=e.id,Sn=e.overflow,Di=t),t=Vf(t,r.children),t.flags|=4096,t)}function Um(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),fd(e.return,t,n)}function oc(e,t,n,r,o){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=o)}function ix(e,t,n){var r=t.pendingProps,o=r.revealOrder,a=r.tail;if(dt(e,t,r.children,n),r=ke.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Um(e,n,t);else if(e.tag===19)Um(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ve(ke,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&rl(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),oc(t,!1,o,n,a);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&rl(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}oc(t,!0,n,null,a);break;case"together":oc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function La(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function jn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ni|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(B(153));if(t.child!==null){for(e=t.child,n=ei(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ei(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function _C(e,t,n){switch(t.tag){case 3:tx(t),Rr();break;case 5:Ey(t);break;case 1:wt(t.type)&&qa(t);break;case 4:Rf(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;ve(tl,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ve(ke,ke.current&1),t.flags|=128,null):n&t.child.childLanes?nx(e,t,n):(ve(ke,ke.current&1),e=jn(e,t,n),e!==null?e.sibling:null);ve(ke,ke.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return ix(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ve(ke,ke.current),r)break;return null;case 22:case 23:return t.lanes=0,Jy(e,t,n)}return jn(e,t,n)}var rx,_d,ox,sx;rx=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_d=function(){};ox=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Ei(hn.current);var a=null;switch(n){case"input":o=Vc(e,o),r=Vc(e,r),a=[];break;case"select":o=Ee({},o,{value:void 0}),r=Ee({},r,{value:void 0}),a=[];break;case"textarea":o=Wc(e,o),r=Wc(e,r),a=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Xa)}Gc(n,r);var l;n=null;for(h in o)if(!r.hasOwnProperty(h)&&o.hasOwnProperty(h)&&o[h]!=null)if(h==="style"){var c=o[h];for(l in c)c.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Uo.hasOwnProperty(h)?a||(a=[]):(a=a||[]).push(h,null));for(h in r){var f=r[h];if(c=o!=null?o[h]:void 0,r.hasOwnProperty(h)&&f!==c&&(f!=null||c!=null))if(h==="style")if(c){for(l in c)!c.hasOwnProperty(l)||f&&f.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in f)f.hasOwnProperty(l)&&c[l]!==f[l]&&(n||(n={}),n[l]=f[l])}else n||(a||(a=[]),a.push(h,n)),n=f;else h==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,c=c?c.__html:void 0,f!=null&&c!==f&&(a=a||[]).push(h,f)):h==="children"?typeof f!="string"&&typeof f!="number"||(a=a||[]).push(h,""+f):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Uo.hasOwnProperty(h)?(f!=null&&h==="onScroll"&&_e("scroll",e),a||c===f||(a=[])):(a=a||[]).push(h,f))}n&&(a=a||[]).push("style",n);var h=a;(t.updateQueue=h)&&(t.flags|=4)}};sx=function(e,t,n,r){n!==r&&(t.flags|=4)};function go(e,t){if(!Se)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function rt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function wC(e,t,n){var r=t.pendingProps;switch(Tf(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rt(t),null;case 1:return wt(t.type)&&Qa(),rt(t),null;case 3:return r=t.stateNode,Or(),be(_t),be(at),Of(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ia(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,qt!==null&&(Ld(qt),qt=null))),_d(e,t),rt(t),null;case 5:If(t);var o=Ei(ns.current);if(n=t.type,e!==null&&t.stateNode!=null)ox(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(B(166));return rt(t),null}if(e=Ei(hn.current),ia(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[dn]=t,r[es]=a,e=(t.mode&1)!==0,n){case"dialog":_e("cancel",r),_e("close",r);break;case"iframe":case"object":case"embed":_e("load",r);break;case"video":case"audio":for(o=0;o<To.length;o++)_e(To[o],r);break;case"source":_e("error",r);break;case"img":case"image":case"link":_e("error",r),_e("load",r);break;case"details":_e("toggle",r);break;case"input":Jp(r,a),_e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},_e("invalid",r);break;case"textarea":tm(r,a),_e("invalid",r)}Gc(n,a),o=null;for(var l in a)if(a.hasOwnProperty(l)){var c=a[l];l==="children"?typeof c=="string"?r.textContent!==c&&(a.suppressHydrationWarning!==!0&&na(r.textContent,c,e),o=["children",c]):typeof c=="number"&&r.textContent!==""+c&&(a.suppressHydrationWarning!==!0&&na(r.textContent,c,e),o=["children",""+c]):Uo.hasOwnProperty(l)&&c!=null&&l==="onScroll"&&_e("scroll",r)}switch(n){case"input":Ks(r),em(r,a,!0);break;case"textarea":Ks(r),nm(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Xa)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Rv(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[dn]=t,e[es]=r,rx(e,t,!1,!1),t.stateNode=e;e:{switch(l=Kc(n,r),n){case"dialog":_e("cancel",e),_e("close",e),o=r;break;case"iframe":case"object":case"embed":_e("load",e),o=r;break;case"video":case"audio":for(o=0;o<To.length;o++)_e(To[o],e);o=r;break;case"source":_e("error",e),o=r;break;case"img":case"image":case"link":_e("error",e),_e("load",e),o=r;break;case"details":_e("toggle",e),o=r;break;case"input":Jp(e,r),o=Vc(e,r),_e("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Ee({},r,{value:void 0}),_e("invalid",e);break;case"textarea":tm(e,r),o=Wc(e,r),_e("invalid",e);break;default:o=r}Gc(n,o),c=o;for(a in c)if(c.hasOwnProperty(a)){var f=c[a];a==="style"?Dv(e,f):a==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,f!=null&&Iv(e,f)):a==="children"?typeof f=="string"?(n!=="textarea"||f!=="")&&Wo(e,f):typeof f=="number"&&Wo(e,""+f):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Uo.hasOwnProperty(a)?f!=null&&a==="onScroll"&&_e("scroll",e):f!=null&&ff(e,a,f,l))}switch(n){case"input":Ks(e),em(e,r,!1);break;case"textarea":Ks(e),nm(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ri(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?kr(e,!!r.multiple,a,!1):r.defaultValue!=null&&kr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Xa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return rt(t),null;case 6:if(e&&t.stateNode!=null)sx(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(B(166));if(n=Ei(ns.current),Ei(hn.current),ia(t)){if(r=t.stateNode,n=t.memoizedProps,r[dn]=t,(a=r.nodeValue!==n)&&(e=Tt,e!==null))switch(e.tag){case 3:na(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&na(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[dn]=t,t.stateNode=r}return rt(t),null;case 13:if(be(ke),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Se&&kt!==null&&t.mode&1&&!(t.flags&128))Cy(),Rr(),t.flags|=98560,a=!1;else if(a=ia(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(B(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(B(317));a[dn]=t}else Rr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;rt(t),a=!1}else qt!==null&&(Ld(qt),qt=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ke.current&1?Ue===0&&(Ue=3):Kf())),t.updateQueue!==null&&(t.flags|=4),rt(t),null);case 4:return Or(),_d(e,t),e===null&&qo(t.stateNode.containerInfo),rt(t),null;case 10:return jf(t.type._context),rt(t),null;case 17:return wt(t.type)&&Qa(),rt(t),null;case 19:if(be(ke),a=t.memoizedState,a===null)return rt(t),null;if(r=(t.flags&128)!==0,l=a.rendering,l===null)if(r)go(a,!1);else{if(Ue!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=rl(e),l!==null){for(t.flags|=128,go(a,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,l=a.alternate,l===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,a.type=l.type,e=l.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ve(ke,ke.current&1|2),t.child}e=e.sibling}a.tail!==null&&Re()>$r&&(t.flags|=128,r=!0,go(a,!1),t.lanes=4194304)}else{if(!r)if(e=rl(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),go(a,!0),a.tail===null&&a.tailMode==="hidden"&&!l.alternate&&!Se)return rt(t),null}else 2*Re()-a.renderingStartTime>$r&&n!==1073741824&&(t.flags|=128,r=!0,go(a,!1),t.lanes=4194304);a.isBackwards?(l.sibling=t.child,t.child=l):(n=a.last,n!==null?n.sibling=l:t.child=l,a.last=l)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Re(),t.sibling=null,n=ke.current,ve(ke,r?n&1|2:n&1),t):(rt(t),null);case 22:case 23:return Gf(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Pt&1073741824&&(rt(t),t.subtreeFlags&6&&(t.flags|=8192)):rt(t),null;case 24:return null;case 25:return null}throw Error(B(156,t.tag))}function bC(e,t){switch(Tf(t),t.tag){case 1:return wt(t.type)&&Qa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Or(),be(_t),be(at),Of(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return If(t),null;case 13:if(be(ke),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(B(340));Rr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return be(ke),null;case 4:return Or(),null;case 10:return jf(t.type._context),null;case 22:case 23:return Gf(),null;case 24:return null;default:return null}}var sa=!1,st=!1,SC=typeof WeakSet=="function"?WeakSet:Set,U=null;function xr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Me(e,t,r)}else n.current=null}function wd(e,t,n){try{n()}catch(r){Me(e,t,r)}}var Wm=!1;function CC(e,t){if(rd=Ga,e=dy(),Pf(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var l=0,c=-1,f=-1,h=0,v=0,g=e,x=null;t:for(;;){for(var b;g!==n||o!==0&&g.nodeType!==3||(c=l+o),g!==a||r!==0&&g.nodeType!==3||(f=l+r),g.nodeType===3&&(l+=g.nodeValue.length),(b=g.firstChild)!==null;)x=g,g=b;for(;;){if(g===e)break t;if(x===n&&++h===o&&(c=l),x===a&&++v===r&&(f=l),(b=g.nextSibling)!==null)break;g=x,x=g.parentNode}g=b}n=c===-1||f===-1?null:{start:c,end:f}}else n=null}n=n||{start:0,end:0}}else n=null;for(od={focusedElem:e,selectionRange:n},Ga=!1,U=t;U!==null;)if(t=U,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,U=e;else for(;U!==null;){t=U;try{var S=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var P=S.memoizedProps,j=S.memoizedState,C=t.stateNode,y=C.getSnapshotBeforeUpdate(t.elementType===t.type?P:Xt(t.type,P),j);C.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var w=t.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(z){Me(t,t.return,z)}if(e=t.sibling,e!==null){e.return=t.return,U=e;break}U=t.return}return S=Wm,Wm=!1,S}function Oo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var a=o.destroy;o.destroy=void 0,a!==void 0&&wd(t,n,a)}o=o.next}while(o!==r)}}function Il(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function bd(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ax(e){var t=e.alternate;t!==null&&(e.alternate=null,ax(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[dn],delete t[es],delete t[ld],delete t[sC],delete t[aC])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function lx(e){return e.tag===5||e.tag===3||e.tag===4}function Hm(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||lx(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Sd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Xa));else if(r!==4&&(e=e.child,e!==null))for(Sd(e,t,n),e=e.sibling;e!==null;)Sd(e,t,n),e=e.sibling}function Cd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Cd(e,t,n),e=e.sibling;e!==null;)Cd(e,t,n),e=e.sibling}var qe=null,Qt=!1;function On(e,t,n){for(n=n.child;n!==null;)ux(e,t,n),n=n.sibling}function ux(e,t,n){if(fn&&typeof fn.onCommitFiberUnmount=="function")try{fn.onCommitFiberUnmount(Tl,n)}catch{}switch(n.tag){case 5:st||xr(n,t);case 6:var r=qe,o=Qt;qe=null,On(e,t,n),qe=r,Qt=o,qe!==null&&(Qt?(e=qe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):qe.removeChild(n.stateNode));break;case 18:qe!==null&&(Qt?(e=qe,n=n.stateNode,e.nodeType===8?qu(e.parentNode,n):e.nodeType===1&&qu(e,n),Yo(e)):qu(qe,n.stateNode));break;case 4:r=qe,o=Qt,qe=n.stateNode.containerInfo,Qt=!0,On(e,t,n),qe=r,Qt=o;break;case 0:case 11:case 14:case 15:if(!st&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var a=o,l=a.destroy;a=a.tag,l!==void 0&&(a&2||a&4)&&wd(n,t,l),o=o.next}while(o!==r)}On(e,t,n);break;case 1:if(!st&&(xr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(c){Me(n,t,c)}On(e,t,n);break;case 21:On(e,t,n);break;case 22:n.mode&1?(st=(r=st)||n.memoizedState!==null,On(e,t,n),st=r):On(e,t,n);break;default:On(e,t,n)}}function Gm(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new SC),t.forEach(function(r){var o=AC.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Kt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var a=e,l=t,c=l;e:for(;c!==null;){switch(c.tag){case 5:qe=c.stateNode,Qt=!1;break e;case 3:qe=c.stateNode.containerInfo,Qt=!0;break e;case 4:qe=c.stateNode.containerInfo,Qt=!0;break e}c=c.return}if(qe===null)throw Error(B(160));ux(a,l,o),qe=null,Qt=!1;var f=o.alternate;f!==null&&(f.return=null),o.return=null}catch(h){Me(o,t,h)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)cx(t,e),t=t.sibling}function cx(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Kt(t,e),ln(e),r&4){try{Oo(3,e,e.return),Il(3,e)}catch(P){Me(e,e.return,P)}try{Oo(5,e,e.return)}catch(P){Me(e,e.return,P)}}break;case 1:Kt(t,e),ln(e),r&512&&n!==null&&xr(n,n.return);break;case 5:if(Kt(t,e),ln(e),r&512&&n!==null&&xr(n,n.return),e.flags&32){var o=e.stateNode;try{Wo(o,"")}catch(P){Me(e,e.return,P)}}if(r&4&&(o=e.stateNode,o!=null)){var a=e.memoizedProps,l=n!==null?n.memoizedProps:a,c=e.type,f=e.updateQueue;if(e.updateQueue=null,f!==null)try{c==="input"&&a.type==="radio"&&a.name!=null&&Mv(o,a),Kc(c,l);var h=Kc(c,a);for(l=0;l<f.length;l+=2){var v=f[l],g=f[l+1];v==="style"?Dv(o,g):v==="dangerouslySetInnerHTML"?Iv(o,g):v==="children"?Wo(o,g):ff(o,v,g,h)}switch(c){case"input":Zc(o,a);break;case"textarea":Av(o,a);break;case"select":var x=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!a.multiple;var b=a.value;b!=null?kr(o,!!a.multiple,b,!1):x!==!!a.multiple&&(a.defaultValue!=null?kr(o,!!a.multiple,a.defaultValue,!0):kr(o,!!a.multiple,a.multiple?[]:"",!1))}o[es]=a}catch(P){Me(e,e.return,P)}}break;case 6:if(Kt(t,e),ln(e),r&4){if(e.stateNode===null)throw Error(B(162));o=e.stateNode,a=e.memoizedProps;try{o.nodeValue=a}catch(P){Me(e,e.return,P)}}break;case 3:if(Kt(t,e),ln(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Yo(t.containerInfo)}catch(P){Me(e,e.return,P)}break;case 4:Kt(t,e),ln(e);break;case 13:Kt(t,e),ln(e),o=e.child,o.flags&8192&&(a=o.memoizedState!==null,o.stateNode.isHidden=a,!a||o.alternate!==null&&o.alternate.memoizedState!==null||(Wf=Re())),r&4&&Gm(e);break;case 22:if(v=n!==null&&n.memoizedState!==null,e.mode&1?(st=(h=st)||v,Kt(t,e),st=h):Kt(t,e),ln(e),r&8192){if(h=e.memoizedState!==null,(e.stateNode.isHidden=h)&&!v&&e.mode&1)for(U=e,v=e.child;v!==null;){for(g=U=v;U!==null;){switch(x=U,b=x.child,x.tag){case 0:case 11:case 14:case 15:Oo(4,x,x.return);break;case 1:xr(x,x.return);var S=x.stateNode;if(typeof S.componentWillUnmount=="function"){r=x,n=x.return;try{t=r,S.props=t.memoizedProps,S.state=t.memoizedState,S.componentWillUnmount()}catch(P){Me(r,n,P)}}break;case 5:xr(x,x.return);break;case 22:if(x.memoizedState!==null){Ym(g);continue}}b!==null?(b.return=x,U=b):Ym(g)}v=v.sibling}e:for(v=null,g=e;;){if(g.tag===5){if(v===null){v=g;try{o=g.stateNode,h?(a=o.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(c=g.stateNode,f=g.memoizedProps.style,l=f!=null&&f.hasOwnProperty("display")?f.display:null,c.style.display=Ov("display",l))}catch(P){Me(e,e.return,P)}}}else if(g.tag===6){if(v===null)try{g.stateNode.nodeValue=h?"":g.memoizedProps}catch(P){Me(e,e.return,P)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;v===g&&(v=null),g=g.return}v===g&&(v=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Kt(t,e),ln(e),r&4&&Gm(e);break;case 21:break;default:Kt(t,e),ln(e)}}function ln(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(lx(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Wo(o,""),r.flags&=-33);var a=Hm(e);Cd(e,a,o);break;case 3:case 4:var l=r.stateNode.containerInfo,c=Hm(e);Sd(e,c,l);break;default:throw Error(B(161))}}catch(f){Me(e,e.return,f)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function PC(e,t,n){U=e,dx(e)}function dx(e,t,n){for(var r=(e.mode&1)!==0;U!==null;){var o=U,a=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||sa;if(!l){var c=o.alternate,f=c!==null&&c.memoizedState!==null||st;c=sa;var h=st;if(sa=l,(st=f)&&!h)for(U=o;U!==null;)l=U,f=l.child,l.tag===22&&l.memoizedState!==null?Xm(o):f!==null?(f.return=l,U=f):Xm(o);for(;a!==null;)U=a,dx(a),a=a.sibling;U=o,sa=c,st=h}Km(e)}else o.subtreeFlags&8772&&a!==null?(a.return=o,U=a):Km(e)}}function Km(e){for(;U!==null;){var t=U;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:st||Il(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!st)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Xt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Mm(t,a,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Mm(t,l,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var f=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":f.autoFocus&&n.focus();break;case"img":f.src&&(n.src=f.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var h=t.alternate;if(h!==null){var v=h.memoizedState;if(v!==null){var g=v.dehydrated;g!==null&&Yo(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}st||t.flags&512&&bd(t)}catch(x){Me(t,t.return,x)}}if(t===e){U=null;break}if(n=t.sibling,n!==null){n.return=t.return,U=n;break}U=t.return}}function Ym(e){for(;U!==null;){var t=U;if(t===e){U=null;break}var n=t.sibling;if(n!==null){n.return=t.return,U=n;break}U=t.return}}function Xm(e){for(;U!==null;){var t=U;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Il(4,t)}catch(f){Me(t,n,f)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(f){Me(t,o,f)}}var a=t.return;try{bd(t)}catch(f){Me(t,a,f)}break;case 5:var l=t.return;try{bd(t)}catch(f){Me(t,l,f)}}}catch(f){Me(t,t.return,f)}if(t===e){U=null;break}var c=t.sibling;if(c!==null){c.return=t.return,U=c;break}U=t.return}}var kC=Math.ceil,al=An.ReactCurrentDispatcher,Zf=An.ReactCurrentOwner,Vt=An.ReactCurrentBatchConfig,ce=0,Xe=null,Be=null,Je=0,Pt=0,_r=ui(0),Ue=0,ss=null,Ni=0,Ol=0,Uf=0,Do=null,vt=null,Wf=0,$r=1/0,xn=null,ll=!1,Pd=null,qn=null,aa=!1,Wn=null,ul=0,$o=0,kd=null,Ea=-1,za=0;function ft(){return ce&6?Re():Ea!==-1?Ea:Ea=Re()}function Jn(e){return e.mode&1?ce&2&&Je!==0?Je&-Je:uC.transition!==null?(za===0&&(za=Yv()),za):(e=me,e!==0||(e=window.event,e=e===void 0?16:ny(e.type)),e):1}function en(e,t,n,r){if(50<$o)throw $o=0,kd=null,Error(B(185));vs(e,n,r),(!(ce&2)||e!==Xe)&&(e===Xe&&(!(ce&2)&&(Ol|=n),Ue===4&&Zn(e,Je)),bt(e,r),n===1&&ce===0&&!(t.mode&1)&&($r=Re()+500,Ml&&ci()))}function bt(e,t){var n=e.callbackNode;uS(e,t);var r=Ha(e,e===Xe?Je:0);if(r===0)n!==null&&om(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&om(n),t===1)e.tag===0?lC(Qm.bind(null,e)):wy(Qm.bind(null,e)),rC(function(){!(ce&6)&&ci()}),n=null;else{switch(Xv(r)){case 1:n=vf;break;case 4:n=Gv;break;case 16:n=Wa;break;case 536870912:n=Kv;break;default:n=Wa}n=xx(n,fx.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function fx(e,t){if(Ea=-1,za=0,ce&6)throw Error(B(327));var n=e.callbackNode;if(jr()&&e.callbackNode!==n)return null;var r=Ha(e,e===Xe?Je:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=cl(e,r);else{t=r;var o=ce;ce|=2;var a=px();(Xe!==e||Je!==t)&&(xn=null,$r=Re()+500,Mi(e,t));do try{EC();break}catch(c){hx(e,c)}while(!0);zf(),al.current=a,ce=o,Be!==null?t=0:(Xe=null,Je=0,t=Ue)}if(t!==0){if(t===2&&(o=Jc(e),o!==0&&(r=o,t=Td(e,o))),t===1)throw n=ss,Mi(e,0),Zn(e,r),bt(e,Re()),n;if(t===6)Zn(e,r);else{if(o=e.current.alternate,!(r&30)&&!TC(o)&&(t=cl(e,r),t===2&&(a=Jc(e),a!==0&&(r=a,t=Td(e,a))),t===1))throw n=ss,Mi(e,0),Zn(e,r),bt(e,Re()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(B(345));case 2:Si(e,vt,xn);break;case 3:if(Zn(e,r),(r&130023424)===r&&(t=Wf+500-Re(),10<t)){if(Ha(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ft(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ad(Si.bind(null,e,vt,xn),t);break}Si(e,vt,xn);break;case 4:if(Zn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-Jt(r);a=1<<l,l=t[l],l>o&&(o=l),r&=~a}if(r=o,r=Re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*kC(r/1960))-r,10<r){e.timeoutHandle=ad(Si.bind(null,e,vt,xn),r);break}Si(e,vt,xn);break;case 5:Si(e,vt,xn);break;default:throw Error(B(329))}}}return bt(e,Re()),e.callbackNode===n?fx.bind(null,e):null}function Td(e,t){var n=Do;return e.current.memoizedState.isDehydrated&&(Mi(e,t).flags|=256),e=cl(e,t),e!==2&&(t=vt,vt=n,t!==null&&Ld(t)),e}function Ld(e){vt===null?vt=e:vt.push.apply(vt,e)}function TC(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],a=o.getSnapshot;o=o.value;try{if(!nn(a(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Zn(e,t){for(t&=~Uf,t&=~Ol,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Jt(t),r=1<<n;e[n]=-1,t&=~r}}function Qm(e){if(ce&6)throw Error(B(327));jr();var t=Ha(e,0);if(!(t&1))return bt(e,Re()),null;var n=cl(e,t);if(e.tag!==0&&n===2){var r=Jc(e);r!==0&&(t=r,n=Td(e,r))}if(n===1)throw n=ss,Mi(e,0),Zn(e,t),bt(e,Re()),n;if(n===6)throw Error(B(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Si(e,vt,xn),bt(e,Re()),null}function Hf(e,t){var n=ce;ce|=1;try{return e(t)}finally{ce=n,ce===0&&($r=Re()+500,Ml&&ci())}}function Bi(e){Wn!==null&&Wn.tag===0&&!(ce&6)&&jr();var t=ce;ce|=1;var n=Vt.transition,r=me;try{if(Vt.transition=null,me=1,e)return e()}finally{me=r,Vt.transition=n,ce=t,!(ce&6)&&ci()}}function Gf(){Pt=_r.current,be(_r)}function Mi(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,iC(n)),Be!==null)for(n=Be.return;n!==null;){var r=n;switch(Tf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Qa();break;case 3:Or(),be(_t),be(at),Of();break;case 5:If(r);break;case 4:Or();break;case 13:be(ke);break;case 19:be(ke);break;case 10:jf(r.type._context);break;case 22:case 23:Gf()}n=n.return}if(Xe=e,Be=e=ei(e.current,null),Je=Pt=t,Ue=0,ss=null,Uf=Ol=Ni=0,vt=Do=null,Li!==null){for(t=0;t<Li.length;t++)if(n=Li[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,a=n.pending;if(a!==null){var l=a.next;a.next=o,r.next=l}n.pending=r}Li=null}return e}function hx(e,t){do{var n=Be;try{if(zf(),ka.current=sl,ol){for(var r=Le.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}ol=!1}if($i=0,He=Ze=Le=null,Io=!1,is=0,Zf.current=null,n===null||n.return===null){Ue=1,ss=t,Be=null;break}e:{var a=e,l=n.return,c=n,f=t;if(t=Je,c.flags|=32768,f!==null&&typeof f=="object"&&typeof f.then=="function"){var h=f,v=c,g=v.tag;if(!(v.mode&1)&&(g===0||g===11||g===15)){var x=v.alternate;x?(v.updateQueue=x.updateQueue,v.memoizedState=x.memoizedState,v.lanes=x.lanes):(v.updateQueue=null,v.memoizedState=null)}var b=$m(l);if(b!==null){b.flags&=-257,Nm(b,l,c,a,t),b.mode&1&&Dm(a,h,t),t=b,f=h;var S=t.updateQueue;if(S===null){var P=new Set;P.add(f),t.updateQueue=P}else S.add(f);break e}else{if(!(t&1)){Dm(a,h,t),Kf();break e}f=Error(B(426))}}else if(Se&&c.mode&1){var j=$m(l);if(j!==null){!(j.flags&65536)&&(j.flags|=256),Nm(j,l,c,a,t),Lf(Dr(f,c));break e}}a=f=Dr(f,c),Ue!==4&&(Ue=2),Do===null?Do=[a]:Do.push(a),a=l;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var C=Xy(a,f,t);jm(a,C);break e;case 1:c=f;var y=a.type,w=a.stateNode;if(!(a.flags&128)&&(typeof y.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(qn===null||!qn.has(w)))){a.flags|=65536,t&=-t,a.lanes|=t;var z=Qy(a,c,t);jm(a,z);break e}}a=a.return}while(a!==null)}gx(n)}catch(R){t=R,Be===n&&n!==null&&(Be=n=n.return);continue}break}while(!0)}function px(){var e=al.current;return al.current=sl,e===null?sl:e}function Kf(){(Ue===0||Ue===3||Ue===2)&&(Ue=4),Xe===null||!(Ni&268435455)&&!(Ol&268435455)||Zn(Xe,Je)}function cl(e,t){var n=ce;ce|=2;var r=px();(Xe!==e||Je!==t)&&(xn=null,Mi(e,t));do try{LC();break}catch(o){hx(e,o)}while(!0);if(zf(),ce=n,al.current=r,Be!==null)throw Error(B(261));return Xe=null,Je=0,Ue}function LC(){for(;Be!==null;)mx(Be)}function EC(){for(;Be!==null&&!eS();)mx(Be)}function mx(e){var t=yx(e.alternate,e,Pt);e.memoizedProps=e.pendingProps,t===null?gx(e):Be=t,Zf.current=null}function gx(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=bC(n,t),n!==null){n.flags&=32767,Be=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ue=6,Be=null;return}}else if(n=wC(n,t,Pt),n!==null){Be=n;return}if(t=t.sibling,t!==null){Be=t;return}Be=t=e}while(t!==null);Ue===0&&(Ue=5)}function Si(e,t,n){var r=me,o=Vt.transition;try{Vt.transition=null,me=1,zC(e,t,n,r)}finally{Vt.transition=o,me=r}return null}function zC(e,t,n,r){do jr();while(Wn!==null);if(ce&6)throw Error(B(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(B(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(cS(e,a),e===Xe&&(Be=Xe=null,Je=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||aa||(aa=!0,xx(Wa,function(){return jr(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Vt.transition,Vt.transition=null;var l=me;me=1;var c=ce;ce|=4,Zf.current=null,CC(e,n),cx(n,e),XS(od),Ga=!!rd,od=rd=null,e.current=n,PC(n),tS(),ce=c,me=l,Vt.transition=a}else e.current=n;if(aa&&(aa=!1,Wn=e,ul=o),a=e.pendingLanes,a===0&&(qn=null),rS(n.stateNode),bt(e,Re()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(ll)throw ll=!1,e=Pd,Pd=null,e;return ul&1&&e.tag!==0&&jr(),a=e.pendingLanes,a&1?e===kd?$o++:($o=0,kd=e):$o=0,ci(),null}function jr(){if(Wn!==null){var e=Xv(ul),t=Vt.transition,n=me;try{if(Vt.transition=null,me=16>e?16:e,Wn===null)var r=!1;else{if(e=Wn,Wn=null,ul=0,ce&6)throw Error(B(331));var o=ce;for(ce|=4,U=e.current;U!==null;){var a=U,l=a.child;if(U.flags&16){var c=a.deletions;if(c!==null){for(var f=0;f<c.length;f++){var h=c[f];for(U=h;U!==null;){var v=U;switch(v.tag){case 0:case 11:case 15:Oo(8,v,a)}var g=v.child;if(g!==null)g.return=v,U=g;else for(;U!==null;){v=U;var x=v.sibling,b=v.return;if(ax(v),v===h){U=null;break}if(x!==null){x.return=b,U=x;break}U=b}}}var S=a.alternate;if(S!==null){var P=S.child;if(P!==null){S.child=null;do{var j=P.sibling;P.sibling=null,P=j}while(P!==null)}}U=a}}if(a.subtreeFlags&2064&&l!==null)l.return=a,U=l;else e:for(;U!==null;){if(a=U,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Oo(9,a,a.return)}var C=a.sibling;if(C!==null){C.return=a.return,U=C;break e}U=a.return}}var y=e.current;for(U=y;U!==null;){l=U;var w=l.child;if(l.subtreeFlags&2064&&w!==null)w.return=l,U=w;else e:for(l=y;U!==null;){if(c=U,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:Il(9,c)}}catch(R){Me(c,c.return,R)}if(c===l){U=null;break e}var z=c.sibling;if(z!==null){z.return=c.return,U=z;break e}U=c.return}}if(ce=o,ci(),fn&&typeof fn.onPostCommitFiberRoot=="function")try{fn.onPostCommitFiberRoot(Tl,e)}catch{}r=!0}return r}finally{me=n,Vt.transition=t}}return!1}function qm(e,t,n){t=Dr(n,t),t=Xy(e,t,1),e=Qn(e,t,1),t=ft(),e!==null&&(vs(e,1,t),bt(e,t))}function Me(e,t,n){if(e.tag===3)qm(e,e,n);else for(;t!==null;){if(t.tag===3){qm(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(qn===null||!qn.has(r))){e=Dr(n,e),e=Qy(t,e,1),t=Qn(t,e,1),e=ft(),t!==null&&(vs(t,1,e),bt(t,e));break}}t=t.return}}function jC(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ft(),e.pingedLanes|=e.suspendedLanes&n,Xe===e&&(Je&n)===n&&(Ue===4||Ue===3&&(Je&130023424)===Je&&500>Re()-Wf?Mi(e,0):Uf|=n),bt(e,t)}function vx(e,t){t===0&&(e.mode&1?(t=Qs,Qs<<=1,!(Qs&130023424)&&(Qs=4194304)):t=1);var n=ft();e=zn(e,t),e!==null&&(vs(e,t,n),bt(e,n))}function MC(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),vx(e,n)}function AC(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(t),vx(e,n)}var yx;yx=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||_t.current)xt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return xt=!1,_C(e,t,n);xt=!!(e.flags&131072)}else xt=!1,Se&&t.flags&1048576&&by(t,el,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;La(e,t),e=t.pendingProps;var o=Ar(t,at.current);zr(t,n),o=$f(null,t,r,e,o,n);var a=Nf();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,wt(r)?(a=!0,qa(t)):a=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Af(t),o.updater=Rl,t.stateNode=o,o._reactInternals=t,pd(t,r,e,n),t=vd(null,t,r,!0,a,n)):(t.tag=0,Se&&a&&kf(t),dt(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(La(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=IC(r),e=Xt(r,e),o){case 0:t=gd(null,t,r,e,n);break e;case 1:t=Vm(null,t,r,e,n);break e;case 11:t=Bm(null,t,r,e,n);break e;case 14:t=Fm(null,t,r,Xt(r.type,e),n);break e}throw Error(B(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Xt(r,o),gd(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Xt(r,o),Vm(e,t,r,o,n);case 3:e:{if(tx(t),e===null)throw Error(B(387));r=t.pendingProps,a=t.memoizedState,o=a.element,Ly(e,t),il(t,r,null,n);var l=t.memoizedState;if(r=l.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){o=Dr(Error(B(423)),t),t=Zm(e,t,r,n,o);break e}else if(r!==o){o=Dr(Error(B(424)),t),t=Zm(e,t,r,n,o);break e}else for(kt=Xn(t.stateNode.containerInfo.firstChild),Tt=t,Se=!0,qt=null,n=ky(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Rr(),r===o){t=jn(e,t,n);break e}dt(e,t,r,n)}t=t.child}return t;case 5:return Ey(t),e===null&&dd(t),r=t.type,o=t.pendingProps,a=e!==null?e.memoizedProps:null,l=o.children,sd(r,o)?l=null:a!==null&&sd(r,a)&&(t.flags|=32),ex(e,t),dt(e,t,l,n),t.child;case 6:return e===null&&dd(t),null;case 13:return nx(e,t,n);case 4:return Rf(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ir(t,null,r,n):dt(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Xt(r,o),Bm(e,t,r,o,n);case 7:return dt(e,t,t.pendingProps,n),t.child;case 8:return dt(e,t,t.pendingProps.children,n),t.child;case 12:return dt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,a=t.memoizedProps,l=o.value,ve(tl,r._currentValue),r._currentValue=l,a!==null)if(nn(a.value,l)){if(a.children===o.children&&!_t.current){t=jn(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var c=a.dependencies;if(c!==null){l=a.child;for(var f=c.firstContext;f!==null;){if(f.context===r){if(a.tag===1){f=Pn(-1,n&-n),f.tag=2;var h=a.updateQueue;if(h!==null){h=h.shared;var v=h.pending;v===null?f.next=f:(f.next=v.next,v.next=f),h.pending=f}}a.lanes|=n,f=a.alternate,f!==null&&(f.lanes|=n),fd(a.return,n,t),c.lanes|=n;break}f=f.next}}else if(a.tag===10)l=a.type===t.type?null:a.child;else if(a.tag===18){if(l=a.return,l===null)throw Error(B(341));l.lanes|=n,c=l.alternate,c!==null&&(c.lanes|=n),fd(l,n,t),l=a.sibling}else l=a.child;if(l!==null)l.return=a;else for(l=a;l!==null;){if(l===t){l=null;break}if(a=l.sibling,a!==null){a.return=l.return,l=a;break}l=l.return}a=l}dt(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,zr(t,n),o=Zt(o),r=r(o),t.flags|=1,dt(e,t,r,n),t.child;case 14:return r=t.type,o=Xt(r,t.pendingProps),o=Xt(r.type,o),Fm(e,t,r,o,n);case 15:return qy(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Xt(r,o),La(e,t),t.tag=1,wt(r)?(e=!0,qa(t)):e=!1,zr(t,n),Yy(t,r,o),pd(t,r,o,n),vd(null,t,r,!0,e,n);case 19:return ix(e,t,n);case 22:return Jy(e,t,n)}throw Error(B(156,t.tag))};function xx(e,t){return Hv(e,t)}function RC(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ft(e,t,n,r){return new RC(e,t,n,r)}function Yf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function IC(e){if(typeof e=="function")return Yf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===pf)return 11;if(e===mf)return 14}return 2}function ei(e,t){var n=e.alternate;return n===null?(n=Ft(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ja(e,t,n,r,o,a){var l=2;if(r=e,typeof e=="function")Yf(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case cr:return Ai(n.children,o,a,t);case hf:l=8,o|=8;break;case $c:return e=Ft(12,n,t,o|2),e.elementType=$c,e.lanes=a,e;case Nc:return e=Ft(13,n,t,o),e.elementType=Nc,e.lanes=a,e;case Bc:return e=Ft(19,n,t,o),e.elementType=Bc,e.lanes=a,e;case Ev:return Dl(n,o,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Tv:l=10;break e;case Lv:l=9;break e;case pf:l=11;break e;case mf:l=14;break e;case Nn:l=16,r=null;break e}throw Error(B(130,e==null?e:typeof e,""))}return t=Ft(l,n,t,o),t.elementType=e,t.type=r,t.lanes=a,t}function Ai(e,t,n,r){return e=Ft(7,e,r,t),e.lanes=n,e}function Dl(e,t,n,r){return e=Ft(22,e,r,t),e.elementType=Ev,e.lanes=n,e.stateNode={isHidden:!1},e}function sc(e,t,n){return e=Ft(6,e,null,t),e.lanes=n,e}function ac(e,t,n){return t=Ft(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function OC(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fu(0),this.expirationTimes=Fu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fu(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Xf(e,t,n,r,o,a,l,c,f){return e=new OC(e,t,n,c,f),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Ft(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Af(a),e}function DC(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ur,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function _x(e){if(!e)return oi;e=e._reactInternals;e:{if(Wi(e)!==e||e.tag!==1)throw Error(B(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(wt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(B(171))}if(e.tag===1){var n=e.type;if(wt(n))return _y(e,n,t)}return t}function wx(e,t,n,r,o,a,l,c,f){return e=Xf(n,r,!0,e,o,a,l,c,f),e.context=_x(null),n=e.current,r=ft(),o=Jn(n),a=Pn(r,o),a.callback=t??null,Qn(n,a,o),e.current.lanes=o,vs(e,o,r),bt(e,r),e}function $l(e,t,n,r){var o=t.current,a=ft(),l=Jn(o);return n=_x(n),t.context===null?t.context=n:t.pendingContext=n,t=Pn(a,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Qn(o,t,l),e!==null&&(en(e,o,l,a),Pa(e,o,l)),l}function dl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Jm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Qf(e,t){Jm(e,t),(e=e.alternate)&&Jm(e,t)}function $C(){return null}var bx=typeof reportError=="function"?reportError:function(e){console.error(e)};function qf(e){this._internalRoot=e}Nl.prototype.render=qf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(B(409));$l(e,t,null,null)};Nl.prototype.unmount=qf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Bi(function(){$l(null,e,null,null)}),t[En]=null}};function Nl(e){this._internalRoot=e}Nl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Jv();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Vn.length&&t!==0&&t<Vn[n].priority;n++);Vn.splice(n,0,e),n===0&&ty(e)}};function Jf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Bl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function eg(){}function NC(e,t,n,r,o){if(o){if(typeof r=="function"){var a=r;r=function(){var h=dl(l);a.call(h)}}var l=wx(t,r,e,0,null,!1,!1,"",eg);return e._reactRootContainer=l,e[En]=l.current,qo(e.nodeType===8?e.parentNode:e),Bi(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var c=r;r=function(){var h=dl(f);c.call(h)}}var f=Xf(e,0,!1,null,null,!1,!1,"",eg);return e._reactRootContainer=f,e[En]=f.current,qo(e.nodeType===8?e.parentNode:e),Bi(function(){$l(t,f,n,r)}),f}function Fl(e,t,n,r,o){var a=n._reactRootContainer;if(a){var l=a;if(typeof o=="function"){var c=o;o=function(){var f=dl(l);c.call(f)}}$l(t,l,e,o)}else l=NC(n,t,e,o,r);return dl(l)}Qv=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ko(t.pendingLanes);n!==0&&(yf(t,n|1),bt(t,Re()),!(ce&6)&&($r=Re()+500,ci()))}break;case 13:Bi(function(){var r=zn(e,1);if(r!==null){var o=ft();en(r,e,1,o)}}),Qf(e,1)}};xf=function(e){if(e.tag===13){var t=zn(e,134217728);if(t!==null){var n=ft();en(t,e,134217728,n)}Qf(e,134217728)}};qv=function(e){if(e.tag===13){var t=Jn(e),n=zn(e,t);if(n!==null){var r=ft();en(n,e,t,r)}Qf(e,t)}};Jv=function(){return me};ey=function(e,t){var n=me;try{return me=e,t()}finally{me=n}};Xc=function(e,t,n){switch(t){case"input":if(Zc(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=jl(r);if(!o)throw Error(B(90));jv(r),Zc(r,o)}}}break;case"textarea":Av(e,n);break;case"select":t=n.value,t!=null&&kr(e,!!n.multiple,t,!1)}};Bv=Hf;Fv=Bi;var BC={usingClientEntryPoint:!1,Events:[xs,pr,jl,$v,Nv,Hf]},vo={findFiberByHostInstance:Ti,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},FC={bundleType:vo.bundleType,version:vo.version,rendererPackageName:vo.rendererPackageName,rendererConfig:vo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:An.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Uv(e),e===null?null:e.stateNode},findFiberByHostInstance:vo.findFiberByHostInstance||$C,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var la=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!la.isDisabled&&la.supportsFiber)try{Tl=la.inject(FC),fn=la}catch{}}zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=BC;zt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Jf(t))throw Error(B(200));return DC(e,t,null,n)};zt.createRoot=function(e,t){if(!Jf(e))throw Error(B(299));var n=!1,r="",o=bx;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Xf(e,1,!1,null,null,n,!1,r,o),e[En]=t.current,qo(e.nodeType===8?e.parentNode:e),new qf(t)};zt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(B(188)):(e=Object.keys(e).join(","),Error(B(268,e)));return e=Uv(t),e=e===null?null:e.stateNode,e};zt.flushSync=function(e){return Bi(e)};zt.hydrate=function(e,t,n){if(!Bl(t))throw Error(B(200));return Fl(null,e,t,!0,n)};zt.hydrateRoot=function(e,t,n){if(!Jf(e))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,o=!1,a="",l=bx;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=wx(t,null,e,1,n??null,o,!1,a,l),e[En]=t.current,qo(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Nl(t)};zt.render=function(e,t,n){if(!Bl(t))throw Error(B(200));return Fl(null,e,t,!1,n)};zt.unmountComponentAtNode=function(e){if(!Bl(e))throw Error(B(40));return e._reactRootContainer?(Bi(function(){Fl(null,null,e,!1,function(){e._reactRootContainer=null,e[En]=null})}),!0):!1};zt.unstable_batchedUpdates=Hf;zt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Bl(n))throw Error(B(200));if(e==null||e._reactInternals===void 0)throw Error(B(38));return Fl(e,t,n,!1,r)};zt.version="18.3.1-next-f1338f8080-20240426";function Sx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Sx)}catch(e){console.error(e)}}Sx(),Sv.exports=zt;var Cx=Sv.exports,tg=Cx;Oc.createRoot=tg.createRoot,Oc.hydrateRoot=tg.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function as(){return as=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},as.apply(this,arguments)}var Hn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Hn||(Hn={}));const ng="popstate";function VC(e){e===void 0&&(e={});function t(r,o){let{pathname:a,search:l,hash:c}=r.location;return Ed("",{pathname:a,search:l,hash:c},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:fl(o)}return UC(t,n,null,e)}function Fe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function eh(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function ZC(){return Math.random().toString(36).substr(2,8)}function ig(e,t){return{usr:e.state,key:e.key,idx:t}}function Ed(e,t,n,r){return n===void 0&&(n=null),as({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Kr(t):t,{state:n,key:t&&t.key||r||ZC()})}function fl(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Kr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function UC(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:a=!1}=r,l=o.history,c=Hn.Pop,f=null,h=v();h==null&&(h=0,l.replaceState(as({},l.state,{idx:h}),""));function v(){return(l.state||{idx:null}).idx}function g(){c=Hn.Pop;let j=v(),C=j==null?null:j-h;h=j,f&&f({action:c,location:P.location,delta:C})}function x(j,C){c=Hn.Push;let y=Ed(P.location,j,C);h=v()+1;let w=ig(y,h),z=P.createHref(y);try{l.pushState(w,"",z)}catch(R){if(R instanceof DOMException&&R.name==="DataCloneError")throw R;o.location.assign(z)}a&&f&&f({action:c,location:P.location,delta:1})}function b(j,C){c=Hn.Replace;let y=Ed(P.location,j,C);h=v();let w=ig(y,h),z=P.createHref(y);l.replaceState(w,"",z),a&&f&&f({action:c,location:P.location,delta:0})}function S(j){let C=o.location.origin!=="null"?o.location.origin:o.location.href,y=typeof j=="string"?j:fl(j);return y=y.replace(/ $/,"%20"),Fe(C,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,C)}let P={get action(){return c},get location(){return e(o,l)},listen(j){if(f)throw new Error("A history only accepts one active listener");return o.addEventListener(ng,g),f=j,()=>{o.removeEventListener(ng,g),f=null}},createHref(j){return t(o,j)},createURL:S,encodeLocation(j){let C=S(j);return{pathname:C.pathname,search:C.search,hash:C.hash}},push:x,replace:b,go(j){return l.go(j)}};return P}var rg;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(rg||(rg={}));function WC(e,t,n){return n===void 0&&(n="/"),HC(e,t,n)}function HC(e,t,n,r){let o=typeof t=="string"?Kr(t):t,a=th(o.pathname||"/",n);if(a==null)return null;let l=Px(e);GC(l);let c=null;for(let f=0;c==null&&f<l.length;++f){let h=oP(a);c=nP(l[f],h)}return c}function Px(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(a,l,c)=>{let f={relativePath:c===void 0?a.path||"":c,caseSensitive:a.caseSensitive===!0,childrenIndex:l,route:a};f.relativePath.startsWith("/")&&(Fe(f.relativePath.startsWith(r),'Absolute route path "'+f.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),f.relativePath=f.relativePath.slice(r.length));let h=ti([r,f.relativePath]),v=n.concat(f);a.children&&a.children.length>0&&(Fe(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),Px(a.children,t,v,h)),!(a.path==null&&!a.index)&&t.push({path:h,score:eP(h,a.index),routesMeta:v})};return e.forEach((a,l)=>{var c;if(a.path===""||!((c=a.path)!=null&&c.includes("?")))o(a,l);else for(let f of kx(a.path))o(a,l,f)}),t}function kx(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return o?[a,""]:[a];let l=kx(r.join("/")),c=[];return c.push(...l.map(f=>f===""?a:[a,f].join("/"))),o&&c.push(...l),c.map(f=>e.startsWith("/")&&f===""?"/":f)}function GC(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:tP(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const KC=/^:[\w-]+$/,YC=3,XC=2,QC=1,qC=10,JC=-2,og=e=>e==="*";function eP(e,t){let n=e.split("/"),r=n.length;return n.some(og)&&(r+=JC),t&&(r+=XC),n.filter(o=>!og(o)).reduce((o,a)=>o+(KC.test(a)?YC:a===""?QC:qC),r)}function tP(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function nP(e,t,n){let{routesMeta:r}=e,o={},a="/",l=[];for(let c=0;c<r.length;++c){let f=r[c],h=c===r.length-1,v=a==="/"?t:t.slice(a.length)||"/",g=iP({path:f.relativePath,caseSensitive:f.caseSensitive,end:h},v),x=f.route;if(!g)return null;Object.assign(o,g.params),l.push({params:o,pathname:ti([a,g.pathname]),pathnameBase:cP(ti([a,g.pathnameBase])),route:x}),g.pathnameBase!=="/"&&(a=ti([a,g.pathnameBase]))}return l}function iP(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=rP(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let a=o[0],l=a.replace(/(.)\/+$/,"$1"),c=o.slice(1);return{params:r.reduce((h,v,g)=>{let{paramName:x,isOptional:b}=v;if(x==="*"){let P=c[g]||"";l=a.slice(0,a.length-P.length).replace(/(.)\/+$/,"$1")}const S=c[g];return b&&!S?h[x]=void 0:h[x]=(S||"").replace(/%2F/g,"/"),h},{}),pathname:a,pathnameBase:l,pattern:e}}function rP(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),eh(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,c,f)=>(r.push({paramName:c,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function oP(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return eh(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function th(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const sP=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,aP=e=>sP.test(e);function lP(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Kr(e):e,a;if(n)if(aP(n))a=n;else{if(n.includes("//")){let l=n;n=n.replace(/\/\/+/g,"/"),eh(!1,"Pathnames cannot have embedded double slashes - normalizing "+(l+" -> "+n))}n.startsWith("/")?a=sg(n.substring(1),"/"):a=sg(n,t)}else a=t;return{pathname:a,search:dP(r),hash:fP(o)}}function sg(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function lc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function uP(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Tx(e,t){let n=uP(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Lx(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Kr(e):(o=as({},e),Fe(!o.pathname||!o.pathname.includes("?"),lc("?","pathname","search",o)),Fe(!o.pathname||!o.pathname.includes("#"),lc("#","pathname","hash",o)),Fe(!o.search||!o.search.includes("#"),lc("#","search","hash",o)));let a=e===""||o.pathname==="",l=a?"/":o.pathname,c;if(l==null)c=n;else{let g=t.length-1;if(!r&&l.startsWith("..")){let x=l.split("/");for(;x[0]==="..";)x.shift(),g-=1;o.pathname=x.join("/")}c=g>=0?t[g]:"/"}let f=lP(o,c),h=l&&l!=="/"&&l.endsWith("/"),v=(a||l===".")&&n.endsWith("/");return!f.pathname.endsWith("/")&&(h||v)&&(f.pathname+="/"),f}const ti=e=>e.join("/").replace(/\/\/+/g,"/"),cP=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),dP=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,fP=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function hP(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Ex=["post","put","patch","delete"];new Set(Ex);const pP=["get",...Ex];new Set(pP);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ls(){return ls=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ls.apply(this,arguments)}const nh=E.createContext(null),mP=E.createContext(null),Hi=E.createContext(null),Vl=E.createContext(null),Gi=E.createContext({outlet:null,matches:[],isDataRoute:!1}),zx=E.createContext(null);function gP(e,t){let{relative:n}=t===void 0?{}:t;ws()||Fe(!1);let{basename:r,navigator:o}=E.useContext(Hi),{hash:a,pathname:l,search:c}=Mx(e,{relative:n}),f=l;return r!=="/"&&(f=l==="/"?r:ti([r,l])),o.createHref({pathname:f,search:c,hash:a})}function ws(){return E.useContext(Vl)!=null}function di(){return ws()||Fe(!1),E.useContext(Vl).location}function jx(e){E.useContext(Hi).static||E.useLayoutEffect(e)}function ih(){let{isDataRoute:e}=E.useContext(Gi);return e?EP():vP()}function vP(){ws()||Fe(!1);let e=E.useContext(nh),{basename:t,future:n,navigator:r}=E.useContext(Hi),{matches:o}=E.useContext(Gi),{pathname:a}=di(),l=JSON.stringify(Tx(o,n.v7_relativeSplatPath)),c=E.useRef(!1);return jx(()=>{c.current=!0}),E.useCallback(function(h,v){if(v===void 0&&(v={}),!c.current)return;if(typeof h=="number"){r.go(h);return}let g=Lx(h,JSON.parse(l),a,v.relative==="path");e==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:ti([t,g.pathname])),(v.replace?r.replace:r.push)(g,v.state,v)},[t,r,l,a,e])}function Mx(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=E.useContext(Hi),{matches:o}=E.useContext(Gi),{pathname:a}=di(),l=JSON.stringify(Tx(o,r.v7_relativeSplatPath));return E.useMemo(()=>Lx(e,JSON.parse(l),a,n==="path"),[e,l,a,n])}function yP(e,t){return xP(e,t)}function xP(e,t,n,r){ws()||Fe(!1);let{navigator:o}=E.useContext(Hi),{matches:a}=E.useContext(Gi),l=a[a.length-1],c=l?l.params:{};l&&l.pathname;let f=l?l.pathnameBase:"/";l&&l.route;let h=di(),v;if(t){var g;let j=typeof t=="string"?Kr(t):t;f==="/"||(g=j.pathname)!=null&&g.startsWith(f)||Fe(!1),v=j}else v=h;let x=v.pathname||"/",b=x;if(f!=="/"){let j=f.replace(/^\//,"").split("/");b="/"+x.replace(/^\//,"").split("/").slice(j.length).join("/")}let S=WC(e,{pathname:b}),P=CP(S&&S.map(j=>Object.assign({},j,{params:Object.assign({},c,j.params),pathname:ti([f,o.encodeLocation?o.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?f:ti([f,o.encodeLocation?o.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),a,n,r);return t&&P?E.createElement(Vl.Provider,{value:{location:ls({pathname:"/",search:"",hash:"",state:null,key:"default"},v),navigationType:Hn.Pop}},P):P}function _P(){let e=LP(),t=hP(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},t),n?E.createElement("pre",{style:o},n):null,null)}const wP=E.createElement(_P,null);class bP extends E.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?E.createElement(Gi.Provider,{value:this.props.routeContext},E.createElement(zx.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function SP(e){let{routeContext:t,match:n,children:r}=e,o=E.useContext(nh);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(Gi.Provider,{value:t},r)}function CP(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var a;if(!n)return null;if(n.errors)e=n.matches;else if((a=r)!=null&&a.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,c=(o=n)==null?void 0:o.errors;if(c!=null){let v=l.findIndex(g=>g.route.id&&(c==null?void 0:c[g.route.id])!==void 0);v>=0||Fe(!1),l=l.slice(0,Math.min(l.length,v+1))}let f=!1,h=-1;if(n&&r&&r.v7_partialHydration)for(let v=0;v<l.length;v++){let g=l[v];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(h=v),g.route.id){let{loaderData:x,errors:b}=n,S=g.route.loader&&x[g.route.id]===void 0&&(!b||b[g.route.id]===void 0);if(g.route.lazy||S){f=!0,h>=0?l=l.slice(0,h+1):l=[l[0]];break}}}return l.reduceRight((v,g,x)=>{let b,S=!1,P=null,j=null;n&&(b=c&&g.route.id?c[g.route.id]:void 0,P=g.route.errorElement||wP,f&&(h<0&&x===0?(zP("route-fallback"),S=!0,j=null):h===x&&(S=!0,j=g.route.hydrateFallbackElement||null)));let C=t.concat(l.slice(0,x+1)),y=()=>{let w;return b?w=P:S?w=j:g.route.Component?w=E.createElement(g.route.Component,null):g.route.element?w=g.route.element:w=v,E.createElement(SP,{match:g,routeContext:{outlet:v,matches:C,isDataRoute:n!=null},children:w})};return n&&(g.route.ErrorBoundary||g.route.errorElement||x===0)?E.createElement(bP,{location:n.location,revalidation:n.revalidation,component:P,error:b,children:y(),routeContext:{outlet:null,matches:C,isDataRoute:!0}}):y()},null)}var Ax=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Ax||{}),Rx=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Rx||{});function PP(e){let t=E.useContext(nh);return t||Fe(!1),t}function kP(e){let t=E.useContext(mP);return t||Fe(!1),t}function TP(e){let t=E.useContext(Gi);return t||Fe(!1),t}function Ix(e){let t=TP(),n=t.matches[t.matches.length-1];return n.route.id||Fe(!1),n.route.id}function LP(){var e;let t=E.useContext(zx),n=kP(),r=Ix();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function EP(){let{router:e}=PP(Ax.UseNavigateStable),t=Ix(Rx.UseNavigateStable),n=E.useRef(!1);return jx(()=>{n.current=!0}),E.useCallback(function(o,a){a===void 0&&(a={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,ls({fromRouteId:t},a)))},[e,t])}const ag={};function zP(e,t,n){ag[e]||(ag[e]=!0)}function jP(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function lr(e){Fe(!1)}function MP(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Hn.Pop,navigator:a,static:l=!1,future:c}=e;ws()&&Fe(!1);let f=t.replace(/^\/*/,"/"),h=E.useMemo(()=>({basename:f,navigator:a,static:l,future:ls({v7_relativeSplatPath:!1},c)}),[f,c,a,l]);typeof r=="string"&&(r=Kr(r));let{pathname:v="/",search:g="",hash:x="",state:b=null,key:S="default"}=r,P=E.useMemo(()=>{let j=th(v,f);return j==null?null:{location:{pathname:j,search:g,hash:x,state:b,key:S},navigationType:o}},[f,v,g,x,b,S,o]);return P==null?null:E.createElement(Hi.Provider,{value:h},E.createElement(Vl.Provider,{children:n,value:P}))}function AP(e){let{children:t,location:n}=e;return yP(zd(t),n)}new Promise(()=>{});function zd(e,t){t===void 0&&(t=[]);let n=[];return E.Children.forEach(e,(r,o)=>{if(!E.isValidElement(r))return;let a=[...t,o];if(r.type===E.Fragment){n.push.apply(n,zd(r.props.children,a));return}r.type!==lr&&Fe(!1),!r.props.index||!r.props.children||Fe(!1);let l={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=zd(r.props.children,a)),n.push(l)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function jd(){return jd=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},jd.apply(this,arguments)}function RP(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,a;for(a=0;a<r.length;a++)o=r[a],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function IP(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function OP(e,t){return e.button===0&&(!t||t==="_self")&&!IP(e)}function Md(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(o=>[n,o]):[[n,r]])},[]))}function DP(e,t){let n=Md(e);return t&&t.forEach((r,o)=>{n.has(o)||t.getAll(o).forEach(a=>{n.append(o,a)})}),n}const $P=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],NP="6";try{window.__reactRouterVersion=NP}catch{}const BP="startTransition",lg=jb[BP];function FP(e){let{basename:t,children:n,future:r,window:o}=e,a=E.useRef();a.current==null&&(a.current=VC({window:o,v5Compat:!0}));let l=a.current,[c,f]=E.useState({action:l.action,location:l.location}),{v7_startTransition:h}=r||{},v=E.useCallback(g=>{h&&lg?lg(()=>f(g)):f(g)},[f,h]);return E.useLayoutEffect(()=>l.listen(v),[l,v]),E.useEffect(()=>jP(r),[r]),E.createElement(MP,{basename:t,children:n,location:c.location,navigationType:c.action,navigator:l,future:r})}const VP=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ZP=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ki=E.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:a,replace:l,state:c,target:f,to:h,preventScrollReset:v,viewTransition:g}=t,x=RP(t,$P),{basename:b}=E.useContext(Hi),S,P=!1;if(typeof h=="string"&&ZP.test(h)&&(S=h,VP))try{let w=new URL(window.location.href),z=h.startsWith("//")?new URL(w.protocol+h):new URL(h),R=th(z.pathname,b);z.origin===w.origin&&R!=null?h=R+z.search+z.hash:P=!0}catch{}let j=gP(h,{relative:o}),C=UP(h,{replace:l,state:c,target:f,preventScrollReset:v,relative:o,viewTransition:g});function y(w){r&&r(w),w.defaultPrevented||C(w)}return E.createElement("a",jd({},x,{href:S||j,onClick:P||a?r:y,ref:n,target:f}))});var ug;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ug||(ug={}));var cg;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(cg||(cg={}));function UP(e,t){let{target:n,replace:r,state:o,preventScrollReset:a,relative:l,viewTransition:c}=t===void 0?{}:t,f=ih(),h=di(),v=Mx(e,{relative:l});return E.useCallback(g=>{if(OP(g,n)){g.preventDefault();let x=r!==void 0?r:fl(h)===fl(v);f(e,{replace:x,state:o,preventScrollReset:a,relative:l,viewTransition:c})}},[h,f,v,r,o,n,e,a,l,c])}function WP(e){let t=E.useRef(Md(e)),n=E.useRef(!1),r=di(),o=E.useMemo(()=>DP(r.search,n.current?null:t.current),[r.search]),a=ih(),l=E.useCallback((c,f)=>{const h=Md(typeof c=="function"?c(o):c);n.current=!0,a("?"+h,f)},[a,o]);return[o,l]}var Ye=function(){return Ye=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},Ye.apply(this,arguments)};function us(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,a;r<o;r++)(a||!(r in t))&&(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}var we="-ms-",No="-moz-",pe="-webkit-",Ox="comm",Zl="rule",rh="decl",HP="@import",Dx="@keyframes",GP="@layer",$x=Math.abs,oh=String.fromCharCode,Ad=Object.assign;function KP(e,t){return Ge(e,0)^45?(((t<<2^Ge(e,0))<<2^Ge(e,1))<<2^Ge(e,2))<<2^Ge(e,3):0}function Nx(e){return e.trim()}function _n(e,t){return(e=t.exec(e))?e[0]:e}function ie(e,t,n){return e.replace(t,n)}function Ma(e,t,n){return e.indexOf(t,n)}function Ge(e,t){return e.charCodeAt(t)|0}function Nr(e,t,n){return e.slice(t,n)}function cn(e){return e.length}function Bx(e){return e.length}function Lo(e,t){return t.push(e),e}function YP(e,t){return e.map(t).join("")}function dg(e,t){return e.filter(function(n){return!_n(n,t)})}var Ul=1,Br=1,Fx=0,Wt=0,Ne=0,Yr="";function Wl(e,t,n,r,o,a,l,c){return{value:e,root:t,parent:n,type:r,props:o,children:a,line:Ul,column:Br,length:l,return:"",siblings:c}}function Dn(e,t){return Ad(Wl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function ar(e){for(;e.root;)e=Dn(e.root,{children:[e]});Lo(e,e.siblings)}function XP(){return Ne}function QP(){return Ne=Wt>0?Ge(Yr,--Wt):0,Br--,Ne===10&&(Br=1,Ul--),Ne}function tn(){return Ne=Wt<Fx?Ge(Yr,Wt++):0,Br++,Ne===10&&(Br=1,Ul++),Ne}function Ri(){return Ge(Yr,Wt)}function Aa(){return Wt}function Hl(e,t){return Nr(Yr,e,t)}function Rd(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function qP(e){return Ul=Br=1,Fx=cn(Yr=e),Wt=0,[]}function JP(e){return Yr="",e}function uc(e){return Nx(Hl(Wt-1,Id(e===91?e+2:e===40?e+1:e)))}function e2(e){for(;(Ne=Ri())&&Ne<33;)tn();return Rd(e)>2||Rd(Ne)>3?"":" "}function t2(e,t){for(;--t&&tn()&&!(Ne<48||Ne>102||Ne>57&&Ne<65||Ne>70&&Ne<97););return Hl(e,Aa()+(t<6&&Ri()==32&&tn()==32))}function Id(e){for(;tn();)switch(Ne){case e:return Wt;case 34:case 39:e!==34&&e!==39&&Id(Ne);break;case 40:e===41&&Id(e);break;case 92:tn();break}return Wt}function n2(e,t){for(;tn()&&e+Ne!==57;)if(e+Ne===84&&Ri()===47)break;return"/*"+Hl(t,Wt-1)+"*"+oh(e===47?e:tn())}function i2(e){for(;!Rd(Ri());)tn();return Hl(e,Wt)}function r2(e){return JP(Ra("",null,null,null,[""],e=qP(e),0,[0],e))}function Ra(e,t,n,r,o,a,l,c,f){for(var h=0,v=0,g=l,x=0,b=0,S=0,P=1,j=1,C=1,y=0,w="",z=o,R=a,O=r,I=w;j;)switch(S=y,y=tn()){case 40:if(S!=108&&Ge(I,g-1)==58){Ma(I+=ie(uc(y),"&","&\f"),"&\f",$x(h?c[h-1]:0))!=-1&&(C=-1);break}case 34:case 39:case 91:I+=uc(y);break;case 9:case 10:case 13:case 32:I+=e2(S);break;case 92:I+=t2(Aa()-1,7);continue;case 47:switch(Ri()){case 42:case 47:Lo(o2(n2(tn(),Aa()),t,n,f),f);break;default:I+="/"}break;case 123*P:c[h++]=cn(I)*C;case 125*P:case 59:case 0:switch(y){case 0:case 125:j=0;case 59+v:C==-1&&(I=ie(I,/\f/g,"")),b>0&&cn(I)-g&&Lo(b>32?hg(I+";",r,n,g-1,f):hg(ie(I," ","")+";",r,n,g-2,f),f);break;case 59:I+=";";default:if(Lo(O=fg(I,t,n,h,v,o,c,w,z=[],R=[],g,a),a),y===123)if(v===0)Ra(I,t,O,O,z,a,g,c,R);else switch(x===99&&Ge(I,3)===110?100:x){case 100:case 108:case 109:case 115:Ra(e,O,O,r&&Lo(fg(e,O,O,0,0,o,c,w,o,z=[],g,R),R),o,R,g,c,r?z:R);break;default:Ra(I,O,O,O,[""],R,0,c,R)}}h=v=b=0,P=C=1,w=I="",g=l;break;case 58:g=1+cn(I),b=S;default:if(P<1){if(y==123)--P;else if(y==125&&P++==0&&QP()==125)continue}switch(I+=oh(y),y*P){case 38:C=v>0?1:(I+="\f",-1);break;case 44:c[h++]=(cn(I)-1)*C,C=1;break;case 64:Ri()===45&&(I+=uc(tn())),x=Ri(),v=g=cn(w=I+=i2(Aa())),y++;break;case 45:S===45&&cn(I)==2&&(P=0)}}return a}function fg(e,t,n,r,o,a,l,c,f,h,v,g){for(var x=o-1,b=o===0?a:[""],S=Bx(b),P=0,j=0,C=0;P<r;++P)for(var y=0,w=Nr(e,x+1,x=$x(j=l[P])),z=e;y<S;++y)(z=Nx(j>0?b[y]+" "+w:ie(w,/&\f/g,b[y])))&&(f[C++]=z);return Wl(e,t,n,o===0?Zl:c,f,h,v,g)}function o2(e,t,n,r){return Wl(e,t,n,Ox,oh(XP()),Nr(e,2,-2),0,r)}function hg(e,t,n,r,o){return Wl(e,t,n,rh,Nr(e,0,r),Nr(e,r+1,-1),r,o)}function Vx(e,t,n){switch(KP(e,t)){case 5103:return pe+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return pe+e+e;case 4789:return No+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return pe+e+No+e+we+e+e;case 5936:switch(Ge(e,t+11)){case 114:return pe+e+we+ie(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return pe+e+we+ie(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return pe+e+we+ie(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return pe+e+we+e+e;case 6165:return pe+e+we+"flex-"+e+e;case 5187:return pe+e+ie(e,/(\w+).+(:[^]+)/,pe+"box-$1$2"+we+"flex-$1$2")+e;case 5443:return pe+e+we+"flex-item-"+ie(e,/flex-|-self/g,"")+(_n(e,/flex-|baseline/)?"":we+"grid-row-"+ie(e,/flex-|-self/g,""))+e;case 4675:return pe+e+we+"flex-line-pack"+ie(e,/align-content|flex-|-self/g,"")+e;case 5548:return pe+e+we+ie(e,"shrink","negative")+e;case 5292:return pe+e+we+ie(e,"basis","preferred-size")+e;case 6060:return pe+"box-"+ie(e,"-grow","")+pe+e+we+ie(e,"grow","positive")+e;case 4554:return pe+ie(e,/([^-])(transform)/g,"$1"+pe+"$2")+e;case 6187:return ie(ie(ie(e,/(zoom-|grab)/,pe+"$1"),/(image-set)/,pe+"$1"),e,"")+e;case 5495:case 3959:return ie(e,/(image-set\([^]*)/,pe+"$1$`$1");case 4968:return ie(ie(e,/(.+:)(flex-)?(.*)/,pe+"box-pack:$3"+we+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+pe+e+e;case 4200:if(!_n(e,/flex-|baseline/))return we+"grid-column-align"+Nr(e,t)+e;break;case 2592:case 3360:return we+ie(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,_n(r.props,/grid-\w+-end/)})?~Ma(e+(n=n[t].value),"span",0)?e:we+ie(e,"-start","")+e+we+"grid-row-span:"+(~Ma(n,"span",0)?_n(n,/\d+/):+_n(n,/\d+/)-+_n(e,/\d+/))+";":we+ie(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return _n(r.props,/grid-\w+-start/)})?e:we+ie(ie(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ie(e,/(.+)-inline(.+)/,pe+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(cn(e)-1-t>6)switch(Ge(e,t+1)){case 109:if(Ge(e,t+4)!==45)break;case 102:return ie(e,/(.+:)(.+)-([^]+)/,"$1"+pe+"$2-$3$1"+No+(Ge(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ma(e,"stretch",0)?Vx(ie(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return ie(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,a,l,c,f,h){return we+o+":"+a+h+(l?we+o+"-span:"+(c?f:+f-+a)+h:"")+e});case 4949:if(Ge(e,t+6)===121)return ie(e,":",":"+pe)+e;break;case 6444:switch(Ge(e,Ge(e,14)===45?18:11)){case 120:return ie(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+pe+(Ge(e,14)===45?"inline-":"")+"box$3$1"+pe+"$2$3$1"+we+"$2box$3")+e;case 100:return ie(e,":",":"+we)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ie(e,"scroll-","scroll-snap-")+e}return e}function hl(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function s2(e,t,n,r){switch(e.type){case GP:if(e.children.length)break;case HP:case rh:return e.return=e.return||e.value;case Ox:return"";case Dx:return e.return=e.value+"{"+hl(e.children,r)+"}";case Zl:if(!cn(e.value=e.props.join(",")))return""}return cn(n=hl(e.children,r))?e.return=e.value+"{"+n+"}":""}function a2(e){var t=Bx(e);return function(n,r,o,a){for(var l="",c=0;c<t;c++)l+=e[c](n,r,o,a)||"";return l}}function l2(e){return function(t){t.root||(t=t.return)&&e(t)}}function u2(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case rh:e.return=Vx(e.value,e.length,n);return;case Dx:return hl([Dn(e,{value:ie(e.value,"@","@"+pe)})],r);case Zl:if(e.length)return YP(n=e.props,function(o){switch(_n(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ar(Dn(e,{props:[ie(o,/:(read-\w+)/,":"+No+"$1")]})),ar(Dn(e,{props:[o]})),Ad(e,{props:dg(n,r)});break;case"::placeholder":ar(Dn(e,{props:[ie(o,/:(plac\w+)/,":"+pe+"input-$1")]})),ar(Dn(e,{props:[ie(o,/:(plac\w+)/,":"+No+"$1")]})),ar(Dn(e,{props:[ie(o,/:(plac\w+)/,we+"input-$1")]})),ar(Dn(e,{props:[o]})),Ad(e,{props:dg(n,r)});break}return""})}}var c2={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ct={},Fr=typeof process<"u"&&Ct!==void 0&&(Ct.REACT_APP_SC_ATTR||Ct.SC_ATTR)||"data-styled",Zx="active",Ux="data-styled-version",Gl="6.1.19",sh=`/*!sc*/
`,pl=typeof window<"u"&&typeof document<"u",d2=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ct!==void 0&&Ct.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ct.REACT_APP_SC_DISABLE_SPEEDY!==""?Ct.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ct.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ct!==void 0&&Ct.SC_DISABLE_SPEEDY!==void 0&&Ct.SC_DISABLE_SPEEDY!==""&&Ct.SC_DISABLE_SPEEDY!=="false"&&Ct.SC_DISABLE_SPEEDY),f2={},Kl=Object.freeze([]),Vr=Object.freeze({});function Wx(e,t,n){return n===void 0&&(n=Vr),e.theme!==n.theme&&e.theme||t||n.theme}var Hx=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),h2=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,p2=/(^-|-$)/g;function pg(e){return e.replace(h2,"-").replace(p2,"")}var m2=/(a)(d)/gi,ua=52,mg=function(e){return String.fromCharCode(e+(e>25?39:97))};function Od(e){var t,n="";for(t=Math.abs(e);t>ua;t=t/ua|0)n=mg(t%ua)+n;return(mg(t%ua)+n).replace(m2,"$1-$2")}var cc,Gx=5381,wr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Kx=function(e){return wr(Gx,e)};function Yx(e){return Od(Kx(e)>>>0)}function g2(e){return e.displayName||e.name||"Component"}function dc(e){return typeof e=="string"&&!0}var Xx=typeof Symbol=="function"&&Symbol.for,Qx=Xx?Symbol.for("react.memo"):60115,v2=Xx?Symbol.for("react.forward_ref"):60112,y2={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},x2={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},qx={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},_2=((cc={})[v2]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},cc[Qx]=qx,cc);function gg(e){return("type"in(t=e)&&t.type.$$typeof)===Qx?qx:"$$typeof"in e?_2[e.$$typeof]:y2;var t}var w2=Object.defineProperty,b2=Object.getOwnPropertyNames,vg=Object.getOwnPropertySymbols,S2=Object.getOwnPropertyDescriptor,C2=Object.getPrototypeOf,yg=Object.prototype;function Jx(e,t,n){if(typeof t!="string"){if(yg){var r=C2(t);r&&r!==yg&&Jx(e,r,n)}var o=b2(t);vg&&(o=o.concat(vg(t)));for(var a=gg(e),l=gg(t),c=0;c<o.length;++c){var f=o[c];if(!(f in x2||n&&n[f]||l&&f in l||a&&f in a)){var h=S2(t,f);try{w2(e,f,h)}catch{}}}}return e}function Fi(e){return typeof e=="function"}function ah(e){return typeof e=="object"&&"styledComponentId"in e}function zi(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Dd(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function cs(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function $d(e,t,n){if(n===void 0&&(n=!1),!n&&!cs(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=$d(e[r],t[r]);else if(cs(t))for(var r in t)e[r]=$d(e[r],t[r]);return e}function lh(e,t){Object.defineProperty(e,"toString",{value:t})}function Vi(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var P2=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,a=o;t>=a;)if((a<<=1)<0)throw Vi(16,"".concat(t));this.groupSizes=new Uint32Array(a),this.groupSizes.set(r),this.length=a;for(var l=o;l<a;l++)this.groupSizes[l]=0}for(var c=this.indexOfGroup(t+1),f=(l=0,n.length);l<f;l++)this.tag.insertRule(c,n[l])&&(this.groupSizes[t]++,c++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var a=r;a<o;a++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),a=o+r,l=o;l<a;l++)n+="".concat(this.tag.getRule(l)).concat(sh);return n},e}(),Ia=new Map,ml=new Map,Oa=1,ca=function(e){if(Ia.has(e))return Ia.get(e);for(;ml.has(Oa);)Oa++;var t=Oa++;return Ia.set(e,t),ml.set(t,e),t},k2=function(e,t){Oa=t+1,Ia.set(e,t),ml.set(t,e)},T2="style[".concat(Fr,"][").concat(Ux,'="').concat(Gl,'"]'),L2=new RegExp("^".concat(Fr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),E2=function(e,t,n){for(var r,o=n.split(","),a=0,l=o.length;a<l;a++)(r=o[a])&&e.registerName(t,r)},z2=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(sh),o=[],a=0,l=r.length;a<l;a++){var c=r[a].trim();if(c){var f=c.match(L2);if(f){var h=0|parseInt(f[1],10),v=f[2];h!==0&&(k2(v,h),E2(e,v,f[3]),e.getTag().insertRules(h,o)),o.length=0}else o.push(c)}}},xg=function(e){for(var t=document.querySelectorAll(T2),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(Fr)!==Zx&&(z2(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function j2(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var e_=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(c){var f=Array.from(c.querySelectorAll("style[".concat(Fr,"]")));return f[f.length-1]}(n),a=o!==void 0?o.nextSibling:null;r.setAttribute(Fr,Zx),r.setAttribute(Ux,Gl);var l=j2();return l&&r.setAttribute("nonce",l),n.insertBefore(r,a),r},M2=function(){function e(t){this.element=e_(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,a=r.length;o<a;o++){var l=r[o];if(l.ownerNode===n)return l}throw Vi(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),A2=function(){function e(t){this.element=e_(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),R2=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),_g=pl,I2={isServer:!pl,useCSSOMInjection:!d2},gl=function(){function e(t,n,r){t===void 0&&(t=Vr),n===void 0&&(n={});var o=this;this.options=Ye(Ye({},I2),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&pl&&_g&&(_g=!1,xg(this)),lh(this,function(){return function(a){for(var l=a.getTag(),c=l.length,f="",h=function(g){var x=function(C){return ml.get(C)}(g);if(x===void 0)return"continue";var b=a.names.get(x),S=l.getGroup(g);if(b===void 0||!b.size||S.length===0)return"continue";var P="".concat(Fr,".g").concat(g,'[id="').concat(x,'"]'),j="";b!==void 0&&b.forEach(function(C){C.length>0&&(j+="".concat(C,","))}),f+="".concat(S).concat(P,'{content:"').concat(j,'"}').concat(sh)},v=0;v<c;v++)h(v);return f}(o)})}return e.registerId=function(t){return ca(t)},e.prototype.rehydrate=function(){!this.server&&pl&&xg(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Ye(Ye({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new R2(o):r?new M2(o):new A2(o)}(this.options),new P2(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(ca(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(ca(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(ca(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),O2=/&/g,D2=/^\s*\/\/.*$/gm;function t_(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=t_(n.children,t)),n})}function $2(e){var t,n,r,o=Vr,a=o.options,l=a===void 0?Vr:a,c=o.plugins,f=c===void 0?Kl:c,h=function(x,b,S){return S.startsWith(n)&&S.endsWith(n)&&S.replaceAll(n,"").length>0?".".concat(t):x},v=f.slice();v.push(function(x){x.type===Zl&&x.value.includes("&")&&(x.props[0]=x.props[0].replace(O2,n).replace(r,h))}),l.prefix&&v.push(u2),v.push(s2);var g=function(x,b,S,P){b===void 0&&(b=""),S===void 0&&(S=""),P===void 0&&(P="&"),t=P,n=b,r=new RegExp("\\".concat(n,"\\b"),"g");var j=x.replace(D2,""),C=r2(S||b?"".concat(S," ").concat(b," { ").concat(j," }"):j);l.namespace&&(C=t_(C,l.namespace));var y=[];return hl(C,a2(v.concat(l2(function(w){return y.push(w)})))),y};return g.hash=f.length?f.reduce(function(x,b){return b.name||Vi(15),wr(x,b.name)},Gx).toString():"",g}var N2=new gl,Nd=$2(),n_=Ke.createContext({shouldForwardProp:void 0,styleSheet:N2,stylis:Nd});n_.Consumer;Ke.createContext(void 0);function Bd(){return E.useContext(n_)}var B2=function(){function e(t,n){var r=this;this.inject=function(o,a){a===void 0&&(a=Nd);var l=r.name+a.hash;o.hasNameForId(r.id,l)||o.insertRules(r.id,l,a(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,lh(this,function(){throw Vi(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Nd),this.name+t.hash},e}(),F2=function(e){return e>="A"&&e<="Z"};function wg(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;F2(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var i_=function(e){return e==null||e===!1||e===""},r_=function(e){var t,n,r=[];for(var o in e){var a=e[o];e.hasOwnProperty(o)&&!i_(a)&&(Array.isArray(a)&&a.isCss||Fi(a)?r.push("".concat(wg(o),":"),a,";"):cs(a)?r.push.apply(r,us(us(["".concat(o," {")],r_(a),!1),["}"],!1)):r.push("".concat(wg(o),": ").concat((t=o,(n=a)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in c2||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function ni(e,t,n,r){if(i_(e))return[];if(ah(e))return[".".concat(e.styledComponentId)];if(Fi(e)){if(!Fi(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return[e];var o=e(t);return ni(o,t,n,r)}var a;return e instanceof B2?n?(e.inject(n,r),[e.getName(r)]):[e]:cs(e)?r_(e):Array.isArray(e)?Array.prototype.concat.apply(Kl,e.map(function(l){return ni(l,t,n,r)})):[e.toString()]}function o_(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Fi(n)&&!ah(n))return!1}return!0}var V2=Kx(Gl),Z2=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&o_(t),this.componentId=n,this.baseHash=wr(V2,n),this.baseStyle=r,gl.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=zi(o,this.staticRulesId);else{var a=Dd(ni(this.rules,t,n,r)),l=Od(wr(this.baseHash,a)>>>0);if(!n.hasNameForId(this.componentId,l)){var c=r(a,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,c)}o=zi(o,l),this.staticRulesId=l}else{for(var f=wr(this.baseHash,r.hash),h="",v=0;v<this.rules.length;v++){var g=this.rules[v];if(typeof g=="string")h+=g;else if(g){var x=Dd(ni(g,t,n,r));f=wr(f,x+v),h+=x}}if(h){var b=Od(f>>>0);n.hasNameForId(this.componentId,b)||n.insertRules(this.componentId,b,r(h,".".concat(b),void 0,this.componentId)),o=zi(o,b)}}return o},e}(),ds=Ke.createContext(void 0);ds.Consumer;function U2(e){var t=Ke.useContext(ds),n=E.useMemo(function(){return function(r,o){if(!r)throw Vi(14);if(Fi(r)){var a=r(o);return a}if(Array.isArray(r)||typeof r!="object")throw Vi(8);return o?Ye(Ye({},o),r):r}(e.theme,t)},[e.theme,t]);return e.children?Ke.createElement(ds.Provider,{value:n},e.children):null}var fc={};function W2(e,t,n){var r=ah(e),o=e,a=!dc(e),l=t.attrs,c=l===void 0?Kl:l,f=t.componentId,h=f===void 0?function(z,R){var O=typeof z!="string"?"sc":pg(z);fc[O]=(fc[O]||0)+1;var I="".concat(O,"-").concat(Yx(Gl+O+fc[O]));return R?"".concat(R,"-").concat(I):I}(t.displayName,t.parentComponentId):f,v=t.displayName,g=v===void 0?function(z){return dc(z)?"styled.".concat(z):"Styled(".concat(g2(z),")")}(e):v,x=t.displayName&&t.componentId?"".concat(pg(t.displayName),"-").concat(t.componentId):t.componentId||h,b=r&&o.attrs?o.attrs.concat(c).filter(Boolean):c,S=t.shouldForwardProp;if(r&&o.shouldForwardProp){var P=o.shouldForwardProp;if(t.shouldForwardProp){var j=t.shouldForwardProp;S=function(z,R){return P(z,R)&&j(z,R)}}else S=P}var C=new Z2(n,x,r?o.componentStyle:void 0);function y(z,R){return function(O,I,$){var W=O.attrs,G=O.componentStyle,ae=O.defaultProps,de=O.foldedComponentIds,Ve=O.styledComponentId,he=O.target,Mt=Ke.useContext(ds),oe=Bd(),ze=O.shouldForwardProp||oe.shouldForwardProp,D=Wx(I,Mt,ae)||Vr,H=function(te,Y,je){for(var tt,mt=Ye(Ye({},Y),{className:void 0,theme:je}),At=0;At<te.length;At+=1){var nt=Fi(tt=te[At])?tt(mt):tt;for(var lt in nt)mt[lt]=lt==="className"?zi(mt[lt],nt[lt]):lt==="style"?Ye(Ye({},mt[lt]),nt[lt]):nt[lt]}return Y.className&&(mt.className=zi(mt.className,Y.className)),mt}(W,I,D),F=H.as||he,V={};for(var q in H)H[q]===void 0||q[0]==="$"||q==="as"||q==="theme"&&H.theme===D||(q==="forwardedAs"?V.as=H.forwardedAs:ze&&!ze(q,F)||(V[q]=H[q]));var xe=function(te,Y){var je=Bd(),tt=te.generateAndInjectStyles(Y,je.styleSheet,je.stylis);return tt}(G,H),le=zi(de,Ve);return xe&&(le+=" "+xe),H.className&&(le+=" "+H.className),V[dc(F)&&!Hx.has(F)?"class":"className"]=le,$&&(V.ref=$),E.createElement(F,V)}(w,z,R)}y.displayName=g;var w=Ke.forwardRef(y);return w.attrs=b,w.componentStyle=C,w.displayName=g,w.shouldForwardProp=S,w.foldedComponentIds=r?zi(o.foldedComponentIds,o.styledComponentId):"",w.styledComponentId=x,w.target=r?o.target:e,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(z){this._foldedDefaultProps=r?function(R){for(var O=[],I=1;I<arguments.length;I++)O[I-1]=arguments[I];for(var $=0,W=O;$<W.length;$++)$d(R,W[$],!0);return R}({},o.defaultProps,z):z}}),lh(w,function(){return".".concat(w.styledComponentId)}),a&&Jx(w,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function bg(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var Sg=function(e){return Object.assign(e,{isCss:!0})};function yt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Fi(e)||cs(e))return Sg(ni(bg(Kl,us([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?ni(r):Sg(ni(bg(r,t)))}function Fd(e,t,n){if(n===void 0&&(n=Vr),!t)throw Vi(1,t);var r=function(o){for(var a=[],l=1;l<arguments.length;l++)a[l-1]=arguments[l];return e(t,n,yt.apply(void 0,us([o],a,!1)))};return r.attrs=function(o){return Fd(e,t,Ye(Ye({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return Fd(e,t,Ye(Ye({},n),o))},r}var s_=function(e){return Fd(W2,e)},k=s_;Hx.forEach(function(e){k[e]=s_(e)});var H2=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=o_(t),gl.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,o){var a=o(Dd(ni(this.rules,n,r,o)),""),l=this.componentId+t;r.insertRules(l,l,a)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,o){t>2&&gl.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,o)},e}();function G2(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=yt.apply(void 0,us([e],t,!1)),o="sc-global-".concat(Yx(JSON.stringify(r))),a=new H2(r,o),l=function(f){var h=Bd(),v=Ke.useContext(ds),g=Ke.useRef(h.styleSheet.allocateGSInstance(o)).current;return h.styleSheet.server&&c(g,f,h.styleSheet,v,h.stylis),Ke.useLayoutEffect(function(){if(!h.styleSheet.server)return c(g,f,h.styleSheet,v,h.stylis),function(){return a.removeStyles(g,h.styleSheet)}},[g,f,h.styleSheet,v,h.stylis]),null};function c(f,h,v,g,x){if(a.isStatic)a.renderStyles(f,f2,v,x);else{var b=Ye(Ye({},h),{theme:Wx(h,g,l.defaultProps)});a.renderStyles(f,b,v,x)}}return Ke.memo(l)}const a_=E.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),Yl=E.createContext({}),Xl=E.createContext(null),Ql=typeof document<"u",uh=Ql?E.useLayoutEffect:E.useEffect,l_=E.createContext({strict:!1}),ch=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),K2="framerAppearId",u_="data-"+ch(K2);function Y2(e,t,n,r){const{visualElement:o}=E.useContext(Yl),a=E.useContext(l_),l=E.useContext(Xl),c=E.useContext(a_).reducedMotion,f=E.useRef();r=r||a.renderer,!f.current&&r&&(f.current=r(e,{visualState:t,parent:o,props:n,presenceContext:l,blockInitialAnimation:l?l.initial===!1:!1,reducedMotionConfig:c}));const h=f.current;E.useInsertionEffect(()=>{h&&h.update(n,l)});const v=E.useRef(!!(n[u_]&&!window.HandoffComplete));return uh(()=>{h&&(h.render(),v.current&&h.animationState&&h.animationState.animateChanges())}),E.useEffect(()=>{h&&(h.updateFeatures(),!v.current&&h.animationState&&h.animationState.animateChanges(),v.current&&(v.current=!1,window.HandoffComplete=!0))}),h}function br(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function X2(e,t,n){return E.useCallback(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):br(n)&&(n.current=r))},[t])}function fs(e){return typeof e=="string"||Array.isArray(e)}function ql(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const dh=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],fh=["initial",...dh];function Jl(e){return ql(e.animate)||fh.some(t=>fs(e[t]))}function c_(e){return!!(Jl(e)||e.variants)}function Q2(e,t){if(Jl(e)){const{initial:n,animate:r}=e;return{initial:n===!1||fs(n)?n:void 0,animate:fs(r)?r:void 0}}return e.inherit!==!1?t:{}}function q2(e){const{initial:t,animate:n}=Q2(e,E.useContext(Yl));return E.useMemo(()=>({initial:t,animate:n}),[Cg(t),Cg(n)])}function Cg(e){return Array.isArray(e)?e.join(" "):e}const Pg={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},hs={};for(const e in Pg)hs[e]={isEnabled:t=>Pg[e].some(n=>!!t[n])};function J2(e){for(const t in e)hs[t]={...hs[t],...e[t]}}const hh=E.createContext({}),d_=E.createContext({}),ek=Symbol.for("motionComponentSymbol");function tk({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:o}){e&&J2(e);function a(c,f){let h;const v={...E.useContext(a_),...c,layoutId:nk(c)},{isStatic:g}=v,x=q2(c),b=r(c,g);if(!g&&Ql){x.visualElement=Y2(o,b,v,t);const S=E.useContext(d_),P=E.useContext(l_).strict;x.visualElement&&(h=x.visualElement.loadFeatures(v,P,e,S))}return E.createElement(Yl.Provider,{value:x},h&&x.visualElement?E.createElement(h,{visualElement:x.visualElement,...v}):null,n(o,c,X2(b,x.visualElement,f),b,g,x.visualElement))}const l=E.forwardRef(a);return l[ek]=o,l}function nk({layoutId:e}){const t=E.useContext(hh).id;return t&&e!==void 0?t+"-"+e:e}function ik(e){function t(r,o={}){return tk(e(r,o))}if(typeof Proxy>"u")return t;const n=new Map;return new Proxy(t,{get:(r,o)=>(n.has(o)||n.set(o,t(o)),n.get(o))})}const rk=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function ph(e){return typeof e!="string"||e.includes("-")?!1:!!(rk.indexOf(e)>-1||/[A-Z]/.test(e))}const vl={};function ok(e){Object.assign(vl,e)}const bs=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Yi=new Set(bs);function f_(e,{layout:t,layoutId:n}){return Yi.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!vl[e]||e==="opacity")}const St=e=>!!(e&&e.getVelocity),sk={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},ak=bs.length;function lk(e,{enableHardwareAcceleration:t=!0,allowTransformNone:n=!0},r,o){let a="";for(let l=0;l<ak;l++){const c=bs[l];if(e[c]!==void 0){const f=sk[c]||c;a+=`${f}(${e[c]}) `}}return t&&!e.z&&(a+="translateZ(0)"),a=a.trim(),o?a=o(e,r?"":a):n&&r&&(a="none"),a}const h_=e=>t=>typeof t=="string"&&t.startsWith(e),p_=h_("--"),Vd=h_("var(--"),uk=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,ck=(e,t)=>t&&typeof e=="number"?t.transform(e):e,si=(e,t,n)=>Math.min(Math.max(n,e),t),Xi={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Bo={...Xi,transform:e=>si(0,1,e)},da={...Xi,default:1},Fo=e=>Math.round(e*1e5)/1e5,eu=/(-)?([\d]*\.?[\d])+/g,m_=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,dk=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Ss(e){return typeof e=="string"}const Cs=e=>({test:t=>Ss(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),$n=Cs("deg"),pn=Cs("%"),Q=Cs("px"),fk=Cs("vh"),hk=Cs("vw"),kg={...pn,parse:e=>pn.parse(e)/100,transform:e=>pn.transform(e*100)},Tg={...Xi,transform:Math.round},g_={borderWidth:Q,borderTopWidth:Q,borderRightWidth:Q,borderBottomWidth:Q,borderLeftWidth:Q,borderRadius:Q,radius:Q,borderTopLeftRadius:Q,borderTopRightRadius:Q,borderBottomRightRadius:Q,borderBottomLeftRadius:Q,width:Q,maxWidth:Q,height:Q,maxHeight:Q,size:Q,top:Q,right:Q,bottom:Q,left:Q,padding:Q,paddingTop:Q,paddingRight:Q,paddingBottom:Q,paddingLeft:Q,margin:Q,marginTop:Q,marginRight:Q,marginBottom:Q,marginLeft:Q,rotate:$n,rotateX:$n,rotateY:$n,rotateZ:$n,scale:da,scaleX:da,scaleY:da,scaleZ:da,skew:$n,skewX:$n,skewY:$n,distance:Q,translateX:Q,translateY:Q,translateZ:Q,x:Q,y:Q,z:Q,perspective:Q,transformPerspective:Q,opacity:Bo,originX:kg,originY:kg,originZ:Q,zIndex:Tg,fillOpacity:Bo,strokeOpacity:Bo,numOctaves:Tg};function mh(e,t,n,r){const{style:o,vars:a,transform:l,transformOrigin:c}=e;let f=!1,h=!1,v=!0;for(const g in t){const x=t[g];if(p_(g)){a[g]=x;continue}const b=g_[g],S=ck(x,b);if(Yi.has(g)){if(f=!0,l[g]=S,!v)continue;x!==(b.default||0)&&(v=!1)}else g.startsWith("origin")?(h=!0,c[g]=S):o[g]=S}if(t.transform||(f||r?o.transform=lk(e.transform,n,v,r):o.transform&&(o.transform="none")),h){const{originX:g="50%",originY:x="50%",originZ:b=0}=c;o.transformOrigin=`${g} ${x} ${b}`}}const gh=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function v_(e,t,n){for(const r in t)!St(t[r])&&!f_(r,n)&&(e[r]=t[r])}function pk({transformTemplate:e},t,n){return E.useMemo(()=>{const r=gh();return mh(r,t,{enableHardwareAcceleration:!n},e),Object.assign({},r.vars,r.style)},[t])}function mk(e,t,n){const r=e.style||{},o={};return v_(o,r,e),Object.assign(o,pk(e,t,n)),e.transformValues?e.transformValues(o):o}function gk(e,t,n){const r={},o=mk(e,t,n);return e.drag&&e.dragListener!==!1&&(r.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=o,r}const vk=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function yl(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||vk.has(e)}let y_=e=>!yl(e);function yk(e){e&&(y_=t=>t.startsWith("on")?!yl(t):e(t))}try{yk(require("@emotion/is-prop-valid").default)}catch{}function xk(e,t,n){const r={};for(const o in e)o==="values"&&typeof e.values=="object"||(y_(o)||n===!0&&yl(o)||!t&&!yl(o)||e.draggable&&o.startsWith("onDrag"))&&(r[o]=e[o]);return r}function Lg(e,t,n){return typeof e=="string"?e:Q.transform(t+n*e)}function _k(e,t,n){const r=Lg(t,e.x,e.width),o=Lg(n,e.y,e.height);return`${r} ${o}`}const wk={offset:"stroke-dashoffset",array:"stroke-dasharray"},bk={offset:"strokeDashoffset",array:"strokeDasharray"};function Sk(e,t,n=1,r=0,o=!0){e.pathLength=1;const a=o?wk:bk;e[a.offset]=Q.transform(-r);const l=Q.transform(t),c=Q.transform(n);e[a.array]=`${l} ${c}`}function vh(e,{attrX:t,attrY:n,attrScale:r,originX:o,originY:a,pathLength:l,pathSpacing:c=1,pathOffset:f=0,...h},v,g,x){if(mh(e,h,v,x),g){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:b,style:S,dimensions:P}=e;b.transform&&(P&&(S.transform=b.transform),delete b.transform),P&&(o!==void 0||a!==void 0||S.transform)&&(S.transformOrigin=_k(P,o!==void 0?o:.5,a!==void 0?a:.5)),t!==void 0&&(b.x=t),n!==void 0&&(b.y=n),r!==void 0&&(b.scale=r),l!==void 0&&Sk(b,l,c,f,!1)}const x_=()=>({...gh(),attrs:{}}),yh=e=>typeof e=="string"&&e.toLowerCase()==="svg";function Ck(e,t,n,r){const o=E.useMemo(()=>{const a=x_();return vh(a,t,{enableHardwareAcceleration:!1},yh(r),e.transformTemplate),{...a.attrs,style:{...a.style}}},[t]);if(e.style){const a={};v_(a,e.style,e),o.style={...a,...o.style}}return o}function Pk(e=!1){return(n,r,o,{latestValues:a},l)=>{const f=(ph(n)?Ck:gk)(r,a,l,n),v={...xk(r,typeof n=="string",e),...f,ref:o},{children:g}=r,x=E.useMemo(()=>St(g)?g.get():g,[g]);return E.createElement(n,{...v,children:x})}}function __(e,{style:t,vars:n},r,o){Object.assign(e.style,t,o&&o.getProjectionStyles(r));for(const a in n)e.style.setProperty(a,n[a])}const w_=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function b_(e,t,n,r){__(e,t,void 0,r);for(const o in t.attrs)e.setAttribute(w_.has(o)?o:ch(o),t.attrs[o])}function xh(e,t){const{style:n}=e,r={};for(const o in n)(St(n[o])||t.style&&St(t.style[o])||f_(o,e))&&(r[o]=n[o]);return r}function S_(e,t){const n=xh(e,t);for(const r in e)if(St(e[r])||St(t[r])){const o=bs.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;n[o]=e[r]}return n}function _h(e,t,n,r={},o={}){return typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,o)),typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,o)),t}function C_(e){const t=E.useRef(null);return t.current===null&&(t.current=e()),t.current}const xl=e=>Array.isArray(e),kk=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),Tk=e=>xl(e)?e[e.length-1]||0:e;function Da(e){const t=St(e)?e.get():e;return kk(t)?t.toValue():t}function Lk({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},r,o,a){const l={latestValues:Ek(r,o,a,e),renderState:t()};return n&&(l.mount=c=>n(r,c,l)),l}const P_=e=>(t,n)=>{const r=E.useContext(Yl),o=E.useContext(Xl),a=()=>Lk(e,t,r,o);return n?a():C_(a)};function Ek(e,t,n,r){const o={},a=r(e,{});for(const x in a)o[x]=Da(a[x]);let{initial:l,animate:c}=e;const f=Jl(e),h=c_(e);t&&h&&!f&&e.inherit!==!1&&(l===void 0&&(l=t.initial),c===void 0&&(c=t.animate));let v=n?n.initial===!1:!1;v=v||l===!1;const g=v?c:l;return g&&typeof g!="boolean"&&!ql(g)&&(Array.isArray(g)?g:[g]).forEach(b=>{const S=_h(e,b);if(!S)return;const{transitionEnd:P,transition:j,...C}=S;for(const y in C){let w=C[y];if(Array.isArray(w)){const z=v?w.length-1:0;w=w[z]}w!==null&&(o[y]=w)}for(const y in P)o[y]=P[y]}),o}const Ie=e=>e;class Eg{constructor(){this.order=[],this.scheduled=new Set}add(t){if(!this.scheduled.has(t))return this.scheduled.add(t),this.order.push(t),!0}remove(t){const n=this.order.indexOf(t);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(t))}clear(){this.order.length=0,this.scheduled.clear()}}function zk(e){let t=new Eg,n=new Eg,r=0,o=!1,a=!1;const l=new WeakSet,c={schedule:(f,h=!1,v=!1)=>{const g=v&&o,x=g?t:n;return h&&l.add(f),x.add(f)&&g&&o&&(r=t.order.length),f},cancel:f=>{n.remove(f),l.delete(f)},process:f=>{if(o){a=!0;return}if(o=!0,[t,n]=[n,t],n.clear(),r=t.order.length,r)for(let h=0;h<r;h++){const v=t.order[h];v(f),l.has(v)&&(c.schedule(v),e())}o=!1,a&&(a=!1,c.process(f))}};return c}const fa=["prepare","read","update","preRender","render","postRender"],jk=40;function Mk(e,t){let n=!1,r=!0;const o={delta:0,timestamp:0,isProcessing:!1},a=fa.reduce((g,x)=>(g[x]=zk(()=>n=!0),g),{}),l=g=>a[g].process(o),c=()=>{const g=performance.now();n=!1,o.delta=r?1e3/60:Math.max(Math.min(g-o.timestamp,jk),1),o.timestamp=g,o.isProcessing=!0,fa.forEach(l),o.isProcessing=!1,n&&t&&(r=!1,e(c))},f=()=>{n=!0,r=!0,o.isProcessing||e(c)};return{schedule:fa.reduce((g,x)=>{const b=a[x];return g[x]=(S,P=!1,j=!1)=>(n||f(),b.schedule(S,P,j)),g},{}),cancel:g=>fa.forEach(x=>a[x].cancel(g)),state:o,steps:a}}const{schedule:ye,cancel:Mn,state:ot,steps:hc}=Mk(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ie,!0),Ak={useVisualState:P_({scrapeMotionValuesFromProps:S_,createRenderState:x_,onMount:(e,t,{renderState:n,latestValues:r})=>{ye.read(()=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),ye.render(()=>{vh(n,r,{enableHardwareAcceleration:!1},yh(t.tagName),e.transformTemplate),b_(t,n)})}})},Rk={useVisualState:P_({scrapeMotionValuesFromProps:xh,createRenderState:gh})};function Ik(e,{forwardMotionProps:t=!1},n,r){return{...ph(e)?Ak:Rk,preloadedFeatures:n,useRender:Pk(t),createVisualElement:r,Component:e}}function Cn(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}const k_=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function tu(e,t="page"){return{point:{x:e[t+"X"],y:e[t+"Y"]}}}const Ok=e=>t=>k_(t)&&e(t,tu(t));function kn(e,t,n,r){return Cn(e,t,Ok(n),r)}const Dk=(e,t)=>n=>t(e(n)),ii=(...e)=>e.reduce(Dk);function T_(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const zg=T_("dragHorizontal"),jg=T_("dragVertical");function L_(e){let t=!1;if(e==="y")t=jg();else if(e==="x")t=zg();else{const n=zg(),r=jg();n&&r?t=()=>{n(),r()}:(n&&n(),r&&r())}return t}function E_(){const e=L_(!0);return e?(e(),!1):!0}class fi{constructor(t){this.isMounted=!1,this.node=t}update(){}}function Mg(e,t){const n="pointer"+(t?"enter":"leave"),r="onHover"+(t?"Start":"End"),o=(a,l)=>{if(a.pointerType==="touch"||E_())return;const c=e.getProps();e.animationState&&c.whileHover&&e.animationState.setActive("whileHover",t),c[r]&&ye.update(()=>c[r](a,l))};return kn(e.current,n,o,{passive:!e.getProps()[r]})}class $k extends fi{mount(){this.unmount=ii(Mg(this.node,!0),Mg(this.node,!1))}unmount(){}}class Nk extends fi{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=ii(Cn(this.node.current,"focus",()=>this.onFocus()),Cn(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const z_=(e,t)=>t?e===t?!0:z_(e,t.parentElement):!1;function pc(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,tu(n))}class Bk extends fi{constructor(){super(...arguments),this.removeStartListeners=Ie,this.removeEndListeners=Ie,this.removeAccessibleListeners=Ie,this.startPointerPress=(t,n)=>{if(this.isPressing)return;this.removeEndListeners();const r=this.node.getProps(),a=kn(window,"pointerup",(c,f)=>{if(!this.checkPressEnd())return;const{onTap:h,onTapCancel:v,globalTapTarget:g}=this.node.getProps();ye.update(()=>{!g&&!z_(this.node.current,c.target)?v&&v(c,f):h&&h(c,f)})},{passive:!(r.onTap||r.onPointerUp)}),l=kn(window,"pointercancel",(c,f)=>this.cancelPress(c,f),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=ii(a,l),this.startPress(t,n)},this.startAccessiblePress=()=>{const t=a=>{if(a.key!=="Enter"||this.isPressing)return;const l=c=>{c.key!=="Enter"||!this.checkPressEnd()||pc("up",(f,h)=>{const{onTap:v}=this.node.getProps();v&&ye.update(()=>v(f,h))})};this.removeEndListeners(),this.removeEndListeners=Cn(this.node.current,"keyup",l),pc("down",(c,f)=>{this.startPress(c,f)})},n=Cn(this.node.current,"keydown",t),r=()=>{this.isPressing&&pc("cancel",(a,l)=>this.cancelPress(a,l))},o=Cn(this.node.current,"blur",r);this.removeAccessibleListeners=ii(n,o)}}startPress(t,n){this.isPressing=!0;const{onTapStart:r,whileTap:o}=this.node.getProps();o&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&ye.update(()=>r(t,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!E_()}cancelPress(t,n){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&ye.update(()=>r(t,n))}mount(){const t=this.node.getProps(),n=kn(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),r=Cn(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=ii(n,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const Zd=new WeakMap,mc=new WeakMap,Fk=e=>{const t=Zd.get(e.target);t&&t(e)},Vk=e=>{e.forEach(Fk)};function Zk({root:e,...t}){const n=e||document;mc.has(n)||mc.set(n,{});const r=mc.get(n),o=JSON.stringify(t);return r[o]||(r[o]=new IntersectionObserver(Vk,{root:e,...t})),r[o]}function Uk(e,t,n){const r=Zk(t);return Zd.set(e,n),r.observe(e),()=>{Zd.delete(e),r.unobserve(e)}}const Wk={some:0,all:1};class Hk extends fi{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:o="some",once:a}=t,l={root:n?n.current:void 0,rootMargin:r,threshold:typeof o=="number"?o:Wk[o]},c=f=>{const{isIntersecting:h}=f;if(this.isInView===h||(this.isInView=h,a&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:v,onViewportLeave:g}=this.node.getProps(),x=h?v:g;x&&x(f)};return Uk(this.node.current,l,c)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(Gk(t,n))&&this.startObserver()}unmount(){}}function Gk({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const Kk={inView:{Feature:Hk},tap:{Feature:Bk},focus:{Feature:Nk},hover:{Feature:$k}};function j_(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function Yk(e){const t={};return e.values.forEach((n,r)=>t[r]=n.get()),t}function Xk(e){const t={};return e.values.forEach((n,r)=>t[r]=n.getVelocity()),t}function nu(e,t,n){const r=e.getProps();return _h(r,t,n!==void 0?n:r.custom,Yk(e),Xk(e))}let wh=Ie;const Ii=e=>e*1e3,Tn=e=>e/1e3,Qk={current:!1},M_=e=>Array.isArray(e)&&typeof e[0]=="number";function A_(e){return!!(!e||typeof e=="string"&&R_[e]||M_(e)||Array.isArray(e)&&e.every(A_))}const Eo=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,R_={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Eo([0,.65,.55,1]),circOut:Eo([.55,0,1,.45]),backIn:Eo([.31,.01,.66,-.59]),backOut:Eo([.33,1.53,.69,.99])};function I_(e){if(e)return M_(e)?Eo(e):Array.isArray(e)?e.map(I_):R_[e]}function qk(e,t,n,{delay:r=0,duration:o,repeat:a=0,repeatType:l="loop",ease:c,times:f}={}){const h={[t]:n};f&&(h.offset=f);const v=I_(c);return Array.isArray(v)&&(h.easing=v),e.animate(h,{delay:r,duration:o,easing:Array.isArray(v)?"linear":v,fill:"both",iterations:a+1,direction:l==="reverse"?"alternate":"normal"})}function Jk(e,{repeat:t,repeatType:n="loop"}){const r=t&&n!=="loop"&&t%2===1?0:e.length-1;return e[r]}const O_=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,e5=1e-7,t5=12;function n5(e,t,n,r,o){let a,l,c=0;do l=t+(n-t)/2,a=O_(l,r,o)-e,a>0?n=l:t=l;while(Math.abs(a)>e5&&++c<t5);return l}function Ps(e,t,n,r){if(e===t&&n===r)return Ie;const o=a=>n5(a,0,1,e,n);return a=>a===0||a===1?a:O_(o(a),t,r)}const i5=Ps(.42,0,1,1),r5=Ps(0,0,.58,1),D_=Ps(.42,0,.58,1),o5=e=>Array.isArray(e)&&typeof e[0]!="number",$_=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,N_=e=>t=>1-e(1-t),bh=e=>1-Math.sin(Math.acos(e)),B_=N_(bh),s5=$_(bh),F_=Ps(.33,1.53,.69,.99),Sh=N_(F_),a5=$_(Sh),l5=e=>(e*=2)<1?.5*Sh(e):.5*(2-Math.pow(2,-10*(e-1))),u5={linear:Ie,easeIn:i5,easeInOut:D_,easeOut:r5,circIn:bh,circInOut:s5,circOut:B_,backIn:Sh,backInOut:a5,backOut:F_,anticipate:l5},Ag=e=>{if(Array.isArray(e)){wh(e.length===4);const[t,n,r,o]=e;return Ps(t,n,r,o)}else if(typeof e=="string")return u5[e];return e},Ch=(e,t)=>n=>!!(Ss(n)&&dk.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),V_=(e,t,n)=>r=>{if(!Ss(r))return r;const[o,a,l,c]=r.match(eu);return{[e]:parseFloat(o),[t]:parseFloat(a),[n]:parseFloat(l),alpha:c!==void 0?parseFloat(c):1}},c5=e=>si(0,255,e),gc={...Xi,transform:e=>Math.round(c5(e))},ji={test:Ch("rgb","red"),parse:V_("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+gc.transform(e)+", "+gc.transform(t)+", "+gc.transform(n)+", "+Fo(Bo.transform(r))+")"};function d5(e){let t="",n="",r="",o="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),o=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),o=e.substring(4,5),t+=t,n+=n,r+=r,o+=o),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const Ud={test:Ch("#"),parse:d5,transform:ji.transform},Sr={test:Ch("hsl","hue"),parse:V_("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+pn.transform(Fo(t))+", "+pn.transform(Fo(n))+", "+Fo(Bo.transform(r))+")"},ct={test:e=>ji.test(e)||Ud.test(e)||Sr.test(e),parse:e=>ji.test(e)?ji.parse(e):Sr.test(e)?Sr.parse(e):Ud.parse(e),transform:e=>Ss(e)?e:e.hasOwnProperty("red")?ji.transform(e):Sr.transform(e)},Te=(e,t,n)=>-n*e+n*t+e;function vc(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function f5({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let o=0,a=0,l=0;if(!t)o=a=l=n;else{const c=n<.5?n*(1+t):n+t-n*t,f=2*n-c;o=vc(f,c,e+1/3),a=vc(f,c,e),l=vc(f,c,e-1/3)}return{red:Math.round(o*255),green:Math.round(a*255),blue:Math.round(l*255),alpha:r}}const yc=(e,t,n)=>{const r=e*e;return Math.sqrt(Math.max(0,n*(t*t-r)+r))},h5=[Ud,ji,Sr],p5=e=>h5.find(t=>t.test(e));function Rg(e){const t=p5(e);let n=t.parse(e);return t===Sr&&(n=f5(n)),n}const Z_=(e,t)=>{const n=Rg(e),r=Rg(t),o={...n};return a=>(o.red=yc(n.red,r.red,a),o.green=yc(n.green,r.green,a),o.blue=yc(n.blue,r.blue,a),o.alpha=Te(n.alpha,r.alpha,a),ji.transform(o))};function m5(e){var t,n;return isNaN(e)&&Ss(e)&&(((t=e.match(eu))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(m_))===null||n===void 0?void 0:n.length)||0)>0}const U_={regex:uk,countKey:"Vars",token:"${v}",parse:Ie},W_={regex:m_,countKey:"Colors",token:"${c}",parse:ct.parse},H_={regex:eu,countKey:"Numbers",token:"${n}",parse:Xi.parse};function xc(e,{regex:t,countKey:n,token:r,parse:o}){const a=e.tokenised.match(t);a&&(e["num"+n]=a.length,e.tokenised=e.tokenised.replace(t,r),e.values.push(...a.map(o)))}function _l(e){const t=e.toString(),n={value:t,tokenised:t,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&xc(n,U_),xc(n,W_),xc(n,H_),n}function G_(e){return _l(e).values}function K_(e){const{values:t,numColors:n,numVars:r,tokenised:o}=_l(e),a=t.length;return l=>{let c=o;for(let f=0;f<a;f++)f<r?c=c.replace(U_.token,l[f]):f<r+n?c=c.replace(W_.token,ct.transform(l[f])):c=c.replace(H_.token,Fo(l[f]));return c}}const g5=e=>typeof e=="number"?0:e;function v5(e){const t=G_(e);return K_(e)(t.map(g5))}const ai={test:m5,parse:G_,createTransformer:K_,getAnimatableNone:v5},Y_=(e,t)=>n=>`${n>0?t:e}`;function X_(e,t){return typeof e=="number"?n=>Te(e,t,n):ct.test(e)?Z_(e,t):e.startsWith("var(")?Y_(e,t):q_(e,t)}const Q_=(e,t)=>{const n=[...e],r=n.length,o=e.map((a,l)=>X_(a,t[l]));return a=>{for(let l=0;l<r;l++)n[l]=o[l](a);return n}},y5=(e,t)=>{const n={...e,...t},r={};for(const o in n)e[o]!==void 0&&t[o]!==void 0&&(r[o]=X_(e[o],t[o]));return o=>{for(const a in r)n[a]=r[a](o);return n}},q_=(e,t)=>{const n=ai.createTransformer(t),r=_l(e),o=_l(t);return r.numVars===o.numVars&&r.numColors===o.numColors&&r.numNumbers>=o.numNumbers?ii(Q_(r.values,o.values),n):Y_(e,t)},ps=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},Ig=(e,t)=>n=>Te(e,t,n);function x5(e){return typeof e=="number"?Ig:typeof e=="string"?ct.test(e)?Z_:q_:Array.isArray(e)?Q_:typeof e=="object"?y5:Ig}function _5(e,t,n){const r=[],o=n||x5(e[0]),a=e.length-1;for(let l=0;l<a;l++){let c=o(e[l],e[l+1]);if(t){const f=Array.isArray(t)?t[l]||Ie:t;c=ii(f,c)}r.push(c)}return r}function J_(e,t,{clamp:n=!0,ease:r,mixer:o}={}){const a=e.length;if(wh(a===t.length),a===1)return()=>t[0];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());const l=_5(t,r,o),c=l.length,f=h=>{let v=0;if(c>1)for(;v<e.length-2&&!(h<e[v+1]);v++);const g=ps(e[v],e[v+1],h);return l[v](g)};return n?h=>f(si(e[0],e[a-1],h)):f}function w5(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const o=ps(0,t,r);e.push(Te(n,1,o))}}function b5(e){const t=[0];return w5(t,e.length-1),t}function S5(e,t){return e.map(n=>n*t)}function C5(e,t){return e.map(()=>t||D_).splice(0,e.length-1)}function wl({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const o=o5(r)?r.map(Ag):Ag(r),a={done:!1,value:t[0]},l=S5(n&&n.length===t.length?n:b5(t),e),c=J_(l,t,{ease:Array.isArray(o)?o:C5(t,o)});return{calculatedDuration:e,next:f=>(a.value=c(f),a.done=f>=e,a)}}function e1(e,t){return t?e*(1e3/t):0}const P5=5;function t1(e,t,n){const r=Math.max(t-P5,0);return e1(n-e(r),t-r)}const _c=.001,k5=.01,T5=10,L5=.05,E5=1;function z5({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let o,a,l=1-t;l=si(L5,E5,l),e=si(k5,T5,Tn(e)),l<1?(o=h=>{const v=h*l,g=v*e,x=v-n,b=Wd(h,l),S=Math.exp(-g);return _c-x/b*S},a=h=>{const g=h*l*e,x=g*n+n,b=Math.pow(l,2)*Math.pow(h,2)*e,S=Math.exp(-g),P=Wd(Math.pow(h,2),l);return(-o(h)+_c>0?-1:1)*((x-b)*S)/P}):(o=h=>{const v=Math.exp(-h*e),g=(h-n)*e+1;return-_c+v*g},a=h=>{const v=Math.exp(-h*e),g=(n-h)*(e*e);return v*g});const c=5/e,f=M5(o,a,c);if(e=Ii(e),isNaN(f))return{stiffness:100,damping:10,duration:e};{const h=Math.pow(f,2)*r;return{stiffness:h,damping:l*2*Math.sqrt(r*h),duration:e}}}const j5=12;function M5(e,t,n){let r=n;for(let o=1;o<j5;o++)r=r-e(r)/t(r);return r}function Wd(e,t){return e*Math.sqrt(1-t*t)}const A5=["duration","bounce"],R5=["stiffness","damping","mass"];function Og(e,t){return t.some(n=>e[n]!==void 0)}function I5(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!Og(e,R5)&&Og(e,A5)){const n=z5(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}function n1({keyframes:e,restDelta:t,restSpeed:n,...r}){const o=e[0],a=e[e.length-1],l={done:!1,value:o},{stiffness:c,damping:f,mass:h,duration:v,velocity:g,isResolvedFromDuration:x}=I5({...r,velocity:-Tn(r.velocity||0)}),b=g||0,S=f/(2*Math.sqrt(c*h)),P=a-o,j=Tn(Math.sqrt(c/h)),C=Math.abs(P)<5;n||(n=C?.01:2),t||(t=C?.005:.5);let y;if(S<1){const w=Wd(j,S);y=z=>{const R=Math.exp(-S*j*z);return a-R*((b+S*j*P)/w*Math.sin(w*z)+P*Math.cos(w*z))}}else if(S===1)y=w=>a-Math.exp(-j*w)*(P+(b+j*P)*w);else{const w=j*Math.sqrt(S*S-1);y=z=>{const R=Math.exp(-S*j*z),O=Math.min(w*z,300);return a-R*((b+S*j*P)*Math.sinh(O)+w*P*Math.cosh(O))/w}}return{calculatedDuration:x&&v||null,next:w=>{const z=y(w);if(x)l.done=w>=v;else{let R=b;w!==0&&(S<1?R=t1(y,w,z):R=0);const O=Math.abs(R)<=n,I=Math.abs(a-z)<=t;l.done=O&&I}return l.value=l.done?a:z,l}}}function Dg({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:o=10,bounceStiffness:a=500,modifyTarget:l,min:c,max:f,restDelta:h=.5,restSpeed:v}){const g=e[0],x={done:!1,value:g},b=$=>c!==void 0&&$<c||f!==void 0&&$>f,S=$=>c===void 0?f:f===void 0||Math.abs(c-$)<Math.abs(f-$)?c:f;let P=n*t;const j=g+P,C=l===void 0?j:l(j);C!==j&&(P=C-g);const y=$=>-P*Math.exp(-$/r),w=$=>C+y($),z=$=>{const W=y($),G=w($);x.done=Math.abs(W)<=h,x.value=x.done?C:G};let R,O;const I=$=>{b(x.value)&&(R=$,O=n1({keyframes:[x.value,S(x.value)],velocity:t1(w,$,x.value),damping:o,stiffness:a,restDelta:h,restSpeed:v}))};return I(0),{calculatedDuration:null,next:$=>{let W=!1;return!O&&R===void 0&&(W=!0,z($),I($)),R!==void 0&&$>R?O.next($-R):(!W&&z($),x)}}}const O5=e=>{const t=({timestamp:n})=>e(n);return{start:()=>ye.update(t,!0),stop:()=>Mn(t),now:()=>ot.isProcessing?ot.timestamp:performance.now()}},$g=2e4;function Ng(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<$g;)t+=n,r=e.next(t);return t>=$g?1/0:t}const D5={decay:Dg,inertia:Dg,tween:wl,keyframes:wl,spring:n1};function bl({autoplay:e=!0,delay:t=0,driver:n=O5,keyframes:r,type:o="keyframes",repeat:a=0,repeatDelay:l=0,repeatType:c="loop",onPlay:f,onStop:h,onComplete:v,onUpdate:g,...x}){let b=1,S=!1,P,j;const C=()=>{j=new Promise(V=>{P=V})};C();let y;const w=D5[o]||wl;let z;w!==wl&&typeof r[0]!="number"&&(z=J_([0,100],r,{clamp:!1}),r=[0,100]);const R=w({...x,keyframes:r});let O;c==="mirror"&&(O=w({...x,keyframes:[...r].reverse(),velocity:-(x.velocity||0)}));let I="idle",$=null,W=null,G=null;R.calculatedDuration===null&&a&&(R.calculatedDuration=Ng(R));const{calculatedDuration:ae}=R;let de=1/0,Ve=1/0;ae!==null&&(de=ae+l,Ve=de*(a+1)-l);let he=0;const Mt=V=>{if(W===null)return;b>0&&(W=Math.min(W,V)),b<0&&(W=Math.min(V-Ve/b,W)),$!==null?he=$:he=Math.round(V-W)*b;const q=he-t*(b>=0?1:-1),xe=b>=0?q<0:q>Ve;he=Math.max(q,0),I==="finished"&&$===null&&(he=Ve);let le=he,te=R;if(a){const mt=Math.min(he,Ve)/de;let At=Math.floor(mt),nt=mt%1;!nt&&mt>=1&&(nt=1),nt===1&&At--,At=Math.min(At,a+1),!!(At%2)&&(c==="reverse"?(nt=1-nt,l&&(nt-=l/de)):c==="mirror"&&(te=O)),le=si(0,1,nt)*de}const Y=xe?{done:!1,value:r[0]}:te.next(le);z&&(Y.value=z(Y.value));let{done:je}=Y;!xe&&ae!==null&&(je=b>=0?he>=Ve:he<=0);const tt=$===null&&(I==="finished"||I==="running"&&je);return g&&g(Y.value),tt&&D(),Y},oe=()=>{y&&y.stop(),y=void 0},ze=()=>{I="idle",oe(),P(),C(),W=G=null},D=()=>{I="finished",v&&v(),oe(),P()},H=()=>{if(S)return;y||(y=n(Mt));const V=y.now();f&&f(),$!==null?W=V-$:(!W||I==="finished")&&(W=V),I==="finished"&&C(),G=W,$=null,I="running",y.start()};e&&H();const F={then(V,q){return j.then(V,q)},get time(){return Tn(he)},set time(V){V=Ii(V),he=V,$!==null||!y||b===0?$=V:W=y.now()-V/b},get duration(){const V=R.calculatedDuration===null?Ng(R):R.calculatedDuration;return Tn(V)},get speed(){return b},set speed(V){V===b||!y||(b=V,F.time=Tn(he))},get state(){return I},play:H,pause:()=>{I="paused",$=he},stop:()=>{S=!0,I!=="idle"&&(I="idle",h&&h(),ze())},cancel:()=>{G!==null&&Mt(G),ze()},complete:()=>{I="finished"},sample:V=>(W=0,Mt(V))};return F}function $5(e){let t;return()=>(t===void 0&&(t=e()),t)}const N5=$5(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),B5=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),ha=10,F5=2e4,V5=(e,t)=>t.type==="spring"||e==="backgroundColor"||!A_(t.ease);function Z5(e,t,{onUpdate:n,onComplete:r,...o}){if(!(N5()&&B5.has(t)&&!o.repeatDelay&&o.repeatType!=="mirror"&&o.damping!==0&&o.type!=="inertia"))return!1;let l=!1,c,f,h=!1;const v=()=>{f=new Promise(w=>{c=w})};v();let{keyframes:g,duration:x=300,ease:b,times:S}=o;if(V5(t,o)){const w=bl({...o,repeat:0,delay:0});let z={done:!1,value:g[0]};const R=[];let O=0;for(;!z.done&&O<F5;)z=w.sample(O),R.push(z.value),O+=ha;S=void 0,g=R,x=O-ha,b="linear"}const P=qk(e.owner.current,t,g,{...o,duration:x,ease:b,times:S}),j=()=>{h=!1,P.cancel()},C=()=>{h=!0,ye.update(j),c(),v()};return P.onfinish=()=>{h||(e.set(Jk(g,o)),r&&r(),C())},{then(w,z){return f.then(w,z)},attachTimeline(w){return P.timeline=w,P.onfinish=null,Ie},get time(){return Tn(P.currentTime||0)},set time(w){P.currentTime=Ii(w)},get speed(){return P.playbackRate},set speed(w){P.playbackRate=w},get duration(){return Tn(x)},play:()=>{l||(P.play(),Mn(j))},pause:()=>P.pause(),stop:()=>{if(l=!0,P.playState==="idle")return;const{currentTime:w}=P;if(w){const z=bl({...o,autoplay:!1});e.setWithVelocity(z.sample(w-ha).value,z.sample(w).value,ha)}C()},complete:()=>{h||P.finish()},cancel:C}}function U5({keyframes:e,delay:t,onUpdate:n,onComplete:r}){const o=()=>(n&&n(e[e.length-1]),r&&r(),{time:0,speed:1,duration:0,play:Ie,pause:Ie,stop:Ie,then:a=>(a(),Promise.resolve()),cancel:Ie,complete:Ie});return t?bl({keyframes:[0,1],duration:0,delay:t,onComplete:o}):o()}const W5={type:"spring",stiffness:500,damping:25,restSpeed:10},H5=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),G5={type:"keyframes",duration:.8},K5={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Y5=(e,{keyframes:t})=>t.length>2?G5:Yi.has(e)?e.startsWith("scale")?H5(t[1]):W5:K5,Hd=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(ai.test(t)||t==="0")&&!t.startsWith("url(")),X5=new Set(["brightness","contrast","saturate","opacity"]);function Q5(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(eu)||[];if(!r)return e;const o=n.replace(r,"");let a=X5.has(t)?1:0;return r!==n&&(a*=100),t+"("+a+o+")"}const q5=/([a-z-]*)\(.*?\)/g,Gd={...ai,getAnimatableNone:e=>{const t=e.match(q5);return t?t.map(Q5).join(" "):e}},J5={...g_,color:ct,backgroundColor:ct,outlineColor:ct,fill:ct,stroke:ct,borderColor:ct,borderTopColor:ct,borderRightColor:ct,borderBottomColor:ct,borderLeftColor:ct,filter:Gd,WebkitFilter:Gd},Ph=e=>J5[e];function i1(e,t){let n=Ph(e);return n!==Gd&&(n=ai),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const r1=e=>/^0[^.\s]+$/.test(e);function eT(e){if(typeof e=="number")return e===0;if(e!==null)return e==="none"||e==="0"||r1(e)}function tT(e,t,n,r){const o=Hd(t,n);let a;Array.isArray(n)?a=[...n]:a=[null,n];const l=r.from!==void 0?r.from:e.get();let c;const f=[];for(let h=0;h<a.length;h++)a[h]===null&&(a[h]=h===0?l:a[h-1]),eT(a[h])&&f.push(h),typeof a[h]=="string"&&a[h]!=="none"&&a[h]!=="0"&&(c=a[h]);if(o&&f.length&&c)for(let h=0;h<f.length;h++){const v=f[h];a[v]=i1(t,c)}return a}function nT({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:o,repeat:a,repeatType:l,repeatDelay:c,from:f,elapsed:h,...v}){return!!Object.keys(v).length}function kh(e,t){return e[t]||e.default||e}const iT={skipAnimations:!1},Th=(e,t,n,r={})=>o=>{const a=kh(r,e)||{},l=a.delay||r.delay||0;let{elapsed:c=0}=r;c=c-Ii(l);const f=tT(t,e,n,a),h=f[0],v=f[f.length-1],g=Hd(e,h),x=Hd(e,v);let b={keyframes:f,velocity:t.getVelocity(),ease:"easeOut",...a,delay:-c,onUpdate:S=>{t.set(S),a.onUpdate&&a.onUpdate(S)},onComplete:()=>{o(),a.onComplete&&a.onComplete()}};if(nT(a)||(b={...b,...Y5(e,b)}),b.duration&&(b.duration=Ii(b.duration)),b.repeatDelay&&(b.repeatDelay=Ii(b.repeatDelay)),!g||!x||Qk.current||a.type===!1||iT.skipAnimations)return U5(b);if(!r.isHandoff&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){const S=Z5(t,e,b);if(S)return S}return bl(b)};function Sl(e){return!!(St(e)&&e.add)}const o1=e=>/^\-?\d*\.?\d+$/.test(e);function Lh(e,t){e.indexOf(t)===-1&&e.push(t)}function Eh(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class zh{constructor(){this.subscriptions=[]}add(t){return Lh(this.subscriptions,t),()=>Eh(this.subscriptions,t)}notify(t,n,r){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](t,n,r);else for(let a=0;a<o;a++){const l=this.subscriptions[a];l&&l(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const rT=e=>!isNaN(parseFloat(e));class oT{constructor(t,n={}){this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(r,o=!0)=>{this.prev=this.current,this.current=r;const{delta:a,timestamp:l}=ot;this.lastUpdated!==l&&(this.timeDelta=a,this.lastUpdated=l,ye.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),o&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>ye.postRender(this.velocityCheck),this.velocityCheck=({timestamp:r})=>{r!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=t,this.canTrackVelocity=rT(this.current),this.owner=n.owner}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new zh);const r=this.events[t].add(n);return t==="change"?()=>{r(),ye.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=t,this.timeDelta=r}jump(t){this.updateAndNotify(t),this.prev=t,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?e1(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Zr(e,t){return new oT(e,t)}const s1=e=>t=>t.test(e),sT={test:e=>e==="auto",parse:e=>e},a1=[Xi,Q,pn,$n,hk,fk,sT],yo=e=>a1.find(s1(e)),aT=[...a1,ct,ai],lT=e=>aT.find(s1(e));function uT(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Zr(n))}function cT(e,t){const n=nu(e,t);let{transitionEnd:r={},transition:o={},...a}=n?e.makeTargetAnimatable(n,!1):{};a={...a,...r};for(const l in a){const c=Tk(a[l]);uT(e,l,c)}}function dT(e,t,n){var r,o;const a=Object.keys(t).filter(c=>!e.hasValue(c)),l=a.length;if(l)for(let c=0;c<l;c++){const f=a[c],h=t[f];let v=null;Array.isArray(h)&&(v=h[0]),v===null&&(v=(o=(r=n[f])!==null&&r!==void 0?r:e.readValue(f))!==null&&o!==void 0?o:t[f]),v!=null&&(typeof v=="string"&&(o1(v)||r1(v))?v=parseFloat(v):!lT(v)&&ai.test(h)&&(v=i1(f,h)),e.addValue(f,Zr(v,{owner:e})),n[f]===void 0&&(n[f]=v),v!==null&&e.setBaseTarget(f,v))}}function fT(e,t){return t?(t[e]||t.default||t).from:void 0}function hT(e,t,n){const r={};for(const o in e){const a=fT(o,t);if(a!==void 0)r[o]=a;else{const l=n.getValue(o);l&&(r[o]=l.get())}}return r}function pT({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function mT(e,t){const n=e.get();if(Array.isArray(t)){for(let r=0;r<t.length;r++)if(t[r]!==n)return!0}else return n!==t}function l1(e,t,{delay:n=0,transitionOverride:r,type:o}={}){let{transition:a=e.getDefaultTransition(),transitionEnd:l,...c}=e.makeTargetAnimatable(t);const f=e.getValue("willChange");r&&(a=r);const h=[],v=o&&e.animationState&&e.animationState.getState()[o];for(const g in c){const x=e.getValue(g),b=c[g];if(!x||b===void 0||v&&pT(v,g))continue;const S={delay:n,elapsed:0,...kh(a||{},g)};if(window.HandoffAppearAnimations){const C=e.getProps()[u_];if(C){const y=window.HandoffAppearAnimations(C,g,x,ye);y!==null&&(S.elapsed=y,S.isHandoff=!0)}}let P=!S.isHandoff&&!mT(x,b);if(S.type==="spring"&&(x.getVelocity()||S.velocity)&&(P=!1),x.animation&&(P=!1),P)continue;x.start(Th(g,x,b,e.shouldReduceMotion&&Yi.has(g)?{type:!1}:S));const j=x.animation;Sl(f)&&(f.add(g),j.then(()=>f.remove(g))),h.push(j)}return l&&Promise.all(h).then(()=>{l&&cT(e,l)}),h}function Kd(e,t,n={}){const r=nu(e,t,n.custom);let{transition:o=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(o=n.transitionOverride);const a=r?()=>Promise.all(l1(e,r,n)):()=>Promise.resolve(),l=e.variantChildren&&e.variantChildren.size?(f=0)=>{const{delayChildren:h=0,staggerChildren:v,staggerDirection:g}=o;return gT(e,t,h+f,v,g,n)}:()=>Promise.resolve(),{when:c}=o;if(c){const[f,h]=c==="beforeChildren"?[a,l]:[l,a];return f().then(()=>h())}else return Promise.all([a(),l(n.delay)])}function gT(e,t,n=0,r=0,o=1,a){const l=[],c=(e.variantChildren.size-1)*r,f=o===1?(h=0)=>h*r:(h=0)=>c-h*r;return Array.from(e.variantChildren).sort(vT).forEach((h,v)=>{h.notify("AnimationStart",t),l.push(Kd(h,t,{...a,delay:n+f(v)}).then(()=>h.notify("AnimationComplete",t)))}),Promise.all(l)}function vT(e,t){return e.sortNodePosition(t)}function yT(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const o=t.map(a=>Kd(e,a,n));r=Promise.all(o)}else if(typeof t=="string")r=Kd(e,t,n);else{const o=typeof t=="function"?nu(e,t,n.custom):t;r=Promise.all(l1(e,o,n))}return r.then(()=>e.notify("AnimationComplete",t))}const xT=[...dh].reverse(),_T=dh.length;function wT(e){return t=>Promise.all(t.map(({animation:n,options:r})=>yT(e,n,r)))}function bT(e){let t=wT(e);const n=CT();let r=!0;const o=(f,h)=>{const v=nu(e,h);if(v){const{transition:g,transitionEnd:x,...b}=v;f={...f,...b,...x}}return f};function a(f){t=f(e)}function l(f,h){const v=e.getProps(),g=e.getVariantContext(!0)||{},x=[],b=new Set;let S={},P=1/0;for(let C=0;C<_T;C++){const y=xT[C],w=n[y],z=v[y]!==void 0?v[y]:g[y],R=fs(z),O=y===h?w.isActive:null;O===!1&&(P=C);let I=z===g[y]&&z!==v[y]&&R;if(I&&r&&e.manuallyAnimateOnMount&&(I=!1),w.protectedKeys={...S},!w.isActive&&O===null||!z&&!w.prevProp||ql(z)||typeof z=="boolean")continue;let W=ST(w.prevProp,z)||y===h&&w.isActive&&!I&&R||C>P&&R,G=!1;const ae=Array.isArray(z)?z:[z];let de=ae.reduce(o,{});O===!1&&(de={});const{prevResolvedValues:Ve={}}=w,he={...Ve,...de},Mt=oe=>{W=!0,b.has(oe)&&(G=!0,b.delete(oe)),w.needsAnimating[oe]=!0};for(const oe in he){const ze=de[oe],D=Ve[oe];if(S.hasOwnProperty(oe))continue;let H=!1;xl(ze)&&xl(D)?H=!j_(ze,D):H=ze!==D,H?ze!==void 0?Mt(oe):b.add(oe):ze!==void 0&&b.has(oe)?Mt(oe):w.protectedKeys[oe]=!0}w.prevProp=z,w.prevResolvedValues=de,w.isActive&&(S={...S,...de}),r&&e.blockInitialAnimation&&(W=!1),W&&(!I||G)&&x.push(...ae.map(oe=>({animation:oe,options:{type:y,...f}})))}if(b.size){const C={};b.forEach(y=>{const w=e.getBaseTarget(y);w!==void 0&&(C[y]=w)}),x.push({animation:C})}let j=!!x.length;return r&&(v.initial===!1||v.initial===v.animate)&&!e.manuallyAnimateOnMount&&(j=!1),r=!1,j?t(x):Promise.resolve()}function c(f,h,v){var g;if(n[f].isActive===h)return Promise.resolve();(g=e.variantChildren)===null||g===void 0||g.forEach(b=>{var S;return(S=b.animationState)===null||S===void 0?void 0:S.setActive(f,h)}),n[f].isActive=h;const x=l(v,f);for(const b in n)n[b].protectedKeys={};return x}return{animateChanges:l,setActive:c,setAnimateFunction:a,getState:()=>n}}function ST(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!j_(t,e):!1}function yi(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function CT(){return{animate:yi(!0),whileInView:yi(),whileHover:yi(),whileTap:yi(),whileDrag:yi(),whileFocus:yi(),exit:yi()}}class PT extends fi{constructor(t){super(t),t.animationState||(t.animationState=bT(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();this.unmount(),ql(t)&&(this.unmount=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let kT=0;class TT extends fi{constructor(){super(...arguments),this.id=kT++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n,custom:r}=this.node.presenceContext,{isPresent:o}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===o)return;const a=this.node.animationState.setActive("exit",!t,{custom:r??this.node.getProps().custom});n&&!t&&a.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const LT={animation:{Feature:PT},exit:{Feature:TT}},Bg=(e,t)=>Math.abs(e-t);function ET(e,t){const n=Bg(e.x,t.x),r=Bg(e.y,t.y);return Math.sqrt(n**2+r**2)}class u1{constructor(t,n,{transformPagePoint:r,contextWindow:o,dragSnapToOrigin:a=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const g=bc(this.lastMoveEventInfo,this.history),x=this.startEvent!==null,b=ET(g.offset,{x:0,y:0})>=3;if(!x&&!b)return;const{point:S}=g,{timestamp:P}=ot;this.history.push({...S,timestamp:P});const{onStart:j,onMove:C}=this.handlers;x||(j&&j(this.lastMoveEvent,g),this.startEvent=this.lastMoveEvent),C&&C(this.lastMoveEvent,g)},this.handlePointerMove=(g,x)=>{this.lastMoveEvent=g,this.lastMoveEventInfo=wc(x,this.transformPagePoint),ye.update(this.updatePoint,!0)},this.handlePointerUp=(g,x)=>{this.end();const{onEnd:b,onSessionEnd:S,resumeAnimation:P}=this.handlers;if(this.dragSnapToOrigin&&P&&P(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const j=bc(g.type==="pointercancel"?this.lastMoveEventInfo:wc(x,this.transformPagePoint),this.history);this.startEvent&&b&&b(g,j),S&&S(g,j)},!k_(t))return;this.dragSnapToOrigin=a,this.handlers=n,this.transformPagePoint=r,this.contextWindow=o||window;const l=tu(t),c=wc(l,this.transformPagePoint),{point:f}=c,{timestamp:h}=ot;this.history=[{...f,timestamp:h}];const{onSessionStart:v}=n;v&&v(t,bc(c,this.history)),this.removeListeners=ii(kn(this.contextWindow,"pointermove",this.handlePointerMove),kn(this.contextWindow,"pointerup",this.handlePointerUp),kn(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Mn(this.updatePoint)}}function wc(e,t){return t?{point:t(e.point)}:e}function Fg(e,t){return{x:e.x-t.x,y:e.y-t.y}}function bc({point:e},t){return{point:e,delta:Fg(e,c1(t)),offset:Fg(e,zT(t)),velocity:jT(t,.1)}}function zT(e){return e[0]}function c1(e){return e[e.length-1]}function jT(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const o=c1(e);for(;n>=0&&(r=e[n],!(o.timestamp-r.timestamp>Ii(t)));)n--;if(!r)return{x:0,y:0};const a=Tn(o.timestamp-r.timestamp);if(a===0)return{x:0,y:0};const l={x:(o.x-r.x)/a,y:(o.y-r.y)/a};return l.x===1/0&&(l.x=0),l.y===1/0&&(l.y=0),l}function Et(e){return e.max-e.min}function Yd(e,t=0,n=.01){return Math.abs(e-t)<=n}function Vg(e,t,n,r=.5){e.origin=r,e.originPoint=Te(t.min,t.max,e.origin),e.scale=Et(n)/Et(t),(Yd(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=Te(n.min,n.max,e.origin)-e.originPoint,(Yd(e.translate)||isNaN(e.translate))&&(e.translate=0)}function Vo(e,t,n,r){Vg(e.x,t.x,n.x,r?r.originX:void 0),Vg(e.y,t.y,n.y,r?r.originY:void 0)}function Zg(e,t,n){e.min=n.min+t.min,e.max=e.min+Et(t)}function MT(e,t,n){Zg(e.x,t.x,n.x),Zg(e.y,t.y,n.y)}function Ug(e,t,n){e.min=t.min-n.min,e.max=e.min+Et(t)}function Zo(e,t,n){Ug(e.x,t.x,n.x),Ug(e.y,t.y,n.y)}function AT(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?Te(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?Te(n,e,r.max):Math.min(e,n)),e}function Wg(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function RT(e,{top:t,left:n,bottom:r,right:o}){return{x:Wg(e.x,n,o),y:Wg(e.y,t,r)}}function Hg(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function IT(e,t){return{x:Hg(e.x,t.x),y:Hg(e.y,t.y)}}function OT(e,t){let n=.5;const r=Et(e),o=Et(t);return o>r?n=ps(t.min,t.max-r,e.min):r>o&&(n=ps(e.min,e.max-o,t.min)),si(0,1,n)}function DT(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Xd=.35;function $T(e=Xd){return e===!1?e=0:e===!0&&(e=Xd),{x:Gg(e,"left","right"),y:Gg(e,"top","bottom")}}function Gg(e,t,n){return{min:Kg(e,t),max:Kg(e,n)}}function Kg(e,t){return typeof e=="number"?e:e[t]||0}const Yg=()=>({translate:0,scale:1,origin:0,originPoint:0}),Cr=()=>({x:Yg(),y:Yg()}),Xg=()=>({min:0,max:0}),$e=()=>({x:Xg(),y:Xg()});function $t(e){return[e("x"),e("y")]}function d1({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function NT({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function BT(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Sc(e){return e===void 0||e===1}function Qd({scale:e,scaleX:t,scaleY:n}){return!Sc(e)||!Sc(t)||!Sc(n)}function Ci(e){return Qd(e)||f1(e)||e.z||e.rotate||e.rotateX||e.rotateY}function f1(e){return Qg(e.x)||Qg(e.y)}function Qg(e){return e&&e!=="0%"}function Cl(e,t,n){const r=e-n,o=t*r;return n+o}function qg(e,t,n,r,o){return o!==void 0&&(e=Cl(e,o,r)),Cl(e,n,r)+t}function qd(e,t=0,n=1,r,o){e.min=qg(e.min,t,n,r,o),e.max=qg(e.max,t,n,r,o)}function h1(e,{x:t,y:n}){qd(e.x,t.translate,t.scale,t.originPoint),qd(e.y,n.translate,n.scale,n.originPoint)}function FT(e,t,n,r=!1){const o=n.length;if(!o)return;t.x=t.y=1;let a,l;for(let c=0;c<o;c++){a=n[c],l=a.projectionDelta;const f=a.instance;f&&f.style&&f.style.display==="contents"||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&Pr(e,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),l&&(t.x*=l.x.scale,t.y*=l.y.scale,h1(e,l)),r&&Ci(a.latestValues)&&Pr(e,a.latestValues))}t.x=Jg(t.x),t.y=Jg(t.y)}function Jg(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function Fn(e,t){e.min=e.min+t,e.max=e.max+t}function e0(e,t,[n,r,o]){const a=t[o]!==void 0?t[o]:.5,l=Te(e.min,e.max,a);qd(e,t[n],t[r],l,t.scale)}const VT=["x","scaleX","originX"],ZT=["y","scaleY","originY"];function Pr(e,t){e0(e.x,t,VT),e0(e.y,t,ZT)}function p1(e,t){return d1(BT(e.getBoundingClientRect(),t))}function UT(e,t,n){const r=p1(e,n),{scroll:o}=t;return o&&(Fn(r.x,o.offset.x),Fn(r.y,o.offset.y)),r}const m1=({current:e})=>e?e.ownerDocument.defaultView:null,WT=new WeakMap;class HT{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=$e(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const o=v=>{const{dragSnapToOrigin:g}=this.getProps();g?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(tu(v,"page").point)},a=(v,g)=>{const{drag:x,dragPropagation:b,onDragStart:S}=this.getProps();if(x&&!b&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=L_(x),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),$t(j=>{let C=this.getAxisMotionValue(j).get()||0;if(pn.test(C)){const{projection:y}=this.visualElement;if(y&&y.layout){const w=y.layout.layoutBox[j];w&&(C=Et(w)*(parseFloat(C)/100))}}this.originPoint[j]=C}),S&&ye.update(()=>S(v,g),!1,!0);const{animationState:P}=this.visualElement;P&&P.setActive("whileDrag",!0)},l=(v,g)=>{const{dragPropagation:x,dragDirectionLock:b,onDirectionLock:S,onDrag:P}=this.getProps();if(!x&&!this.openGlobalLock)return;const{offset:j}=g;if(b&&this.currentDirection===null){this.currentDirection=GT(j),this.currentDirection!==null&&S&&S(this.currentDirection);return}this.updateAxis("x",g.point,j),this.updateAxis("y",g.point,j),this.visualElement.render(),P&&P(v,g)},c=(v,g)=>this.stop(v,g),f=()=>$t(v=>{var g;return this.getAnimationState(v)==="paused"&&((g=this.getAxisMotionValue(v).animation)===null||g===void 0?void 0:g.play())}),{dragSnapToOrigin:h}=this.getProps();this.panSession=new u1(t,{onSessionStart:o,onStart:a,onMove:l,onSessionEnd:c,resumeAnimation:f},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:h,contextWindow:m1(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:o}=n;this.startAnimation(o);const{onDragEnd:a}=this.getProps();a&&ye.update(()=>a(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:o}=this.getProps();if(!r||!pa(t,o,this.currentDirection))return;const a=this.getAxisMotionValue(t);let l=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(l=AT(l,this.constraints[t],this.elastic[t])),a.set(l)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,a=this.constraints;n&&br(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&o?this.constraints=RT(o.layoutBox,n):this.constraints=!1,this.elastic=$T(r),a!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&$t(l=>{this.getAxisMotionValue(l)&&(this.constraints[l]=DT(o.layoutBox[l],this.constraints[l]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!br(t))return!1;const r=t.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const a=UT(r,o.root,this.visualElement.getTransformPagePoint());let l=IT(o.layout.layoutBox,a);if(n){const c=n(NT(l));this.hasMutatedConstraints=!!c,c&&(l=d1(c))}return l}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:o,dragTransition:a,dragSnapToOrigin:l,onDragTransitionEnd:c}=this.getProps(),f=this.constraints||{},h=$t(v=>{if(!pa(v,n,this.currentDirection))return;let g=f&&f[v]||{};l&&(g={min:0,max:0});const x=o?200:1e6,b=o?40:1e7,S={type:"inertia",velocity:r?t[v]:0,bounceStiffness:x,bounceDamping:b,timeConstant:750,restDelta:1,restSpeed:10,...a,...g};return this.startAxisValueAnimation(v,S)});return Promise.all(h).then(c)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return r.start(Th(t,r,0,n))}stopAnimation(){$t(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){$t(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n="_drag"+t.toUpperCase(),r=this.visualElement.getProps(),o=r[n];return o||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){$t(n=>{const{drag:r}=this.getProps();if(!pa(n,r,this.currentDirection))return;const{projection:o}=this.visualElement,a=this.getAxisMotionValue(n);if(o&&o.layout){const{min:l,max:c}=o.layout.layoutBox[n];a.set(t[n]-Te(l,c,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!br(n)||!r||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};$t(l=>{const c=this.getAxisMotionValue(l);if(c){const f=c.get();o[l]=OT({min:f,max:f},this.constraints[l])}});const{transformTemplate:a}=this.visualElement.getProps();this.visualElement.current.style.transform=a?a({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),$t(l=>{if(!pa(l,t,null))return;const c=this.getAxisMotionValue(l),{min:f,max:h}=this.constraints[l];c.set(Te(f,h,o[l]))})}addListeners(){if(!this.visualElement.current)return;WT.set(this.visualElement,this);const t=this.visualElement.current,n=kn(t,"pointerdown",f=>{const{drag:h,dragListener:v=!0}=this.getProps();h&&v&&this.start(f)}),r=()=>{const{dragConstraints:f}=this.getProps();br(f)&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,a=o.addEventListener("measure",r);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),r();const l=Cn(window,"resize",()=>this.scalePositionWithinConstraints()),c=o.addEventListener("didUpdate",({delta:f,hasLayoutChanged:h})=>{this.isDragging&&h&&($t(v=>{const g=this.getAxisMotionValue(v);g&&(this.originPoint[v]+=f[v].translate,g.set(g.get()+f[v].translate))}),this.visualElement.render())});return()=>{l(),n(),a(),c&&c()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:o=!1,dragConstraints:a=!1,dragElastic:l=Xd,dragMomentum:c=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:o,dragConstraints:a,dragElastic:l,dragMomentum:c}}}function pa(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function GT(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class KT extends fi{constructor(t){super(t),this.removeGroupControls=Ie,this.removeListeners=Ie,this.controls=new HT(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ie}unmount(){this.removeGroupControls(),this.removeListeners()}}const t0=e=>(t,n)=>{e&&ye.update(()=>e(t,n))};class YT extends fi{constructor(){super(...arguments),this.removePointerDownListener=Ie}onPointerDown(t){this.session=new u1(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:m1(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:o}=this.node.getProps();return{onSessionStart:t0(t),onStart:t0(n),onMove:r,onEnd:(a,l)=>{delete this.session,o&&ye.update(()=>o(a,l))}}}mount(){this.removePointerDownListener=kn(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function XT(){const e=E.useContext(Xl);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:r}=e,o=E.useId();return E.useEffect(()=>r(o),[]),!t&&n?[!1,()=>n&&n(o)]:[!0]}const $a={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function n0(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const xo={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(Q.test(e))e=parseFloat(e);else return e;const n=n0(e,t.target.x),r=n0(e,t.target.y);return`${n}% ${r}%`}},QT={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,o=ai.parse(e);if(o.length>5)return r;const a=ai.createTransformer(e),l=typeof o[0]!="number"?1:0,c=n.x.scale*t.x,f=n.y.scale*t.y;o[0+l]/=c,o[1+l]/=f;const h=Te(c,f,.5);return typeof o[2+l]=="number"&&(o[2+l]/=h),typeof o[3+l]=="number"&&(o[3+l]/=h),a(o)}};class qT extends Ke.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:o}=this.props,{projection:a}=t;ok(JT),a&&(n.group&&n.group.add(a),r&&r.register&&o&&r.register(a),a.root.didUpdate(),a.addEventListener("animationComplete",()=>{this.safeToRemove()}),a.setOptions({...a.options,onExitComplete:()=>this.safeToRemove()})),$a.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:o,isPresent:a}=this.props,l=r.projection;return l&&(l.isPresent=a,o||t.layoutDependency!==n||n===void 0?l.willUpdate():this.safeToRemove(),t.isPresent!==a&&(a?l.promote():l.relegate()||ye.postRender(()=>{const c=l.getStack();(!c||!c.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),queueMicrotask(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:o}=t;o&&(o.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(o),r&&r.deregister&&r.deregister(o))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function g1(e){const[t,n]=XT(),r=E.useContext(hh);return Ke.createElement(qT,{...e,layoutGroup:r,switchLayoutGroup:E.useContext(d_),isPresent:t,safeToRemove:n})}const JT={borderRadius:{...xo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:xo,borderTopRightRadius:xo,borderBottomLeftRadius:xo,borderBottomRightRadius:xo,boxShadow:QT},v1=["TopLeft","TopRight","BottomLeft","BottomRight"],e4=v1.length,i0=e=>typeof e=="string"?parseFloat(e):e,r0=e=>typeof e=="number"||Q.test(e);function t4(e,t,n,r,o,a){o?(e.opacity=Te(0,n.opacity!==void 0?n.opacity:1,n4(r)),e.opacityExit=Te(t.opacity!==void 0?t.opacity:1,0,i4(r))):a&&(e.opacity=Te(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let l=0;l<e4;l++){const c=`border${v1[l]}Radius`;let f=o0(t,c),h=o0(n,c);if(f===void 0&&h===void 0)continue;f||(f=0),h||(h=0),f===0||h===0||r0(f)===r0(h)?(e[c]=Math.max(Te(i0(f),i0(h),r),0),(pn.test(h)||pn.test(f))&&(e[c]+="%")):e[c]=h}(t.rotate||n.rotate)&&(e.rotate=Te(t.rotate||0,n.rotate||0,r))}function o0(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const n4=y1(0,.5,B_),i4=y1(.5,.95,Ie);function y1(e,t,n){return r=>r<e?0:r>t?1:n(ps(e,t,r))}function s0(e,t){e.min=t.min,e.max=t.max}function Dt(e,t){s0(e.x,t.x),s0(e.y,t.y)}function a0(e,t,n,r,o){return e-=t,e=Cl(e,1/n,r),o!==void 0&&(e=Cl(e,1/o,r)),e}function r4(e,t=0,n=1,r=.5,o,a=e,l=e){if(pn.test(t)&&(t=parseFloat(t),t=Te(l.min,l.max,t/100)-l.min),typeof t!="number")return;let c=Te(a.min,a.max,r);e===a&&(c-=t),e.min=a0(e.min,t,n,c,o),e.max=a0(e.max,t,n,c,o)}function l0(e,t,[n,r,o],a,l){r4(e,t[n],t[r],t[o],t.scale,a,l)}const o4=["x","scaleX","originX"],s4=["y","scaleY","originY"];function u0(e,t,n,r){l0(e.x,t,o4,n?n.x:void 0,r?r.x:void 0),l0(e.y,t,s4,n?n.y:void 0,r?r.y:void 0)}function c0(e){return e.translate===0&&e.scale===1}function x1(e){return c0(e.x)&&c0(e.y)}function a4(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}function _1(e,t){return Math.round(e.x.min)===Math.round(t.x.min)&&Math.round(e.x.max)===Math.round(t.x.max)&&Math.round(e.y.min)===Math.round(t.y.min)&&Math.round(e.y.max)===Math.round(t.y.max)}function d0(e){return Et(e.x)/Et(e.y)}class l4{constructor(){this.members=[]}add(t){Lh(this.members,t),t.scheduleRender()}remove(t){if(Eh(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(o=>t===o);if(n===0)return!1;let r;for(let o=n;o>=0;o--){const a=this.members[o];if(a.isPresent!==!1){r=a;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:o}=t.options;o===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function f0(e,t,n){let r="";const o=e.x.translate/t.x,a=e.y.translate/t.y;if((o||a)&&(r=`translate3d(${o}px, ${a}px, 0) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{rotate:f,rotateX:h,rotateY:v}=n;f&&(r+=`rotate(${f}deg) `),h&&(r+=`rotateX(${h}deg) `),v&&(r+=`rotateY(${v}deg) `)}const l=e.x.scale*t.x,c=e.y.scale*t.y;return(l!==1||c!==1)&&(r+=`scale(${l}, ${c})`),r||"none"}const u4=(e,t)=>e.depth-t.depth;class c4{constructor(){this.children=[],this.isDirty=!1}add(t){Lh(this.children,t),this.isDirty=!0}remove(t){Eh(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(u4),this.isDirty=!1,this.children.forEach(t)}}function d4(e,t){const n=performance.now(),r=({timestamp:o})=>{const a=o-n;a>=t&&(Mn(r),e(a-t))};return ye.read(r,!0),()=>Mn(r)}function f4(e){window.MotionDebug&&window.MotionDebug.record(e)}function h4(e){return e instanceof SVGElement&&e.tagName!=="svg"}function p4(e,t,n){const r=St(e)?e:Zr(e);return r.start(Th("",r,t,n)),r.animation}const h0=["","X","Y","Z"],m4={visibility:"hidden"},p0=1e3;let g4=0;const Pi={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function w1({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:o}){return class{constructor(l={},c=t==null?void 0:t()){this.id=g4++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Pi.totalNodes=Pi.resolvedTargetDeltas=Pi.recalculatedProjection=0,this.nodes.forEach(x4),this.nodes.forEach(C4),this.nodes.forEach(P4),this.nodes.forEach(_4),f4(Pi)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=l,this.root=c?c.root||c:this,this.path=c?[...c.path,c]:[],this.parent=c,this.depth=c?c.depth+1:0;for(let f=0;f<this.path.length;f++)this.path[f].shouldResetTransform=!0;this.root===this&&(this.nodes=new c4)}addEventListener(l,c){return this.eventHandlers.has(l)||this.eventHandlers.set(l,new zh),this.eventHandlers.get(l).add(c)}notifyListeners(l,...c){const f=this.eventHandlers.get(l);f&&f.notify(...c)}hasListeners(l){return this.eventHandlers.has(l)}mount(l,c=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=h4(l),this.instance=l;const{layoutId:f,layout:h,visualElement:v}=this.options;if(v&&!v.current&&v.mount(l),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),c&&(h||f)&&(this.isLayoutDirty=!0),e){let g;const x=()=>this.root.updateBlockedByResize=!1;e(l,()=>{this.root.updateBlockedByResize=!0,g&&g(),g=d4(x,250),$a.hasAnimatedSinceResize&&($a.hasAnimatedSinceResize=!1,this.nodes.forEach(g0))})}f&&this.root.registerSharedNode(f,this),this.options.animate!==!1&&v&&(f||h)&&this.addEventListener("didUpdate",({delta:g,hasLayoutChanged:x,hasRelativeTargetChanged:b,layout:S})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const P=this.options.transition||v.getDefaultTransition()||z4,{onLayoutAnimationStart:j,onLayoutAnimationComplete:C}=v.getProps(),y=!this.targetLayout||!_1(this.targetLayout,S)||b,w=!x&&b;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||w||x&&(y||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(g,w);const z={...kh(P,"layout"),onPlay:j,onComplete:C};(v.shouldReduceMotion||this.options.layoutRoot)&&(z.delay=0,z.type=!1),this.startAnimation(z)}else x||g0(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=S})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const l=this.getStack();l&&l.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Mn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(k4),this.animationId++)}getTransformTemplate(){const{visualElement:l}=this.options;return l&&l.getProps().transformTemplate}willUpdate(l=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let v=0;v<this.path.length;v++){const g=this.path[v];g.shouldResetTransform=!0,g.updateScroll("snapshot"),g.options.layoutRoot&&g.willUpdate(!1)}const{layoutId:c,layout:f}=this.options;if(c===void 0&&!f)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),l&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(m0);return}this.isUpdating||this.nodes.forEach(b4),this.isUpdating=!1,this.nodes.forEach(S4),this.nodes.forEach(v4),this.nodes.forEach(y4),this.clearAllSnapshots();const c=performance.now();ot.delta=si(0,1e3/60,c-ot.timestamp),ot.timestamp=c,ot.isProcessing=!0,hc.update.process(ot),hc.preRender.process(ot),hc.render.process(ot),ot.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(w4),this.sharedNodes.forEach(T4)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ye.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ye.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let f=0;f<this.path.length;f++)this.path[f].updateScroll();const l=this.layout;this.layout=this.measure(!1),this.layoutCorrected=$e(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:c}=this.options;c&&c.notify("LayoutMeasure",this.layout.layoutBox,l?l.layoutBox:void 0)}updateScroll(l="measure"){let c=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===l&&(c=!1),c&&(this.scroll={animationId:this.root.animationId,phase:l,isRoot:r(this.instance),offset:n(this.instance)})}resetTransform(){if(!o)return;const l=this.isLayoutDirty||this.shouldResetTransform,c=this.projectionDelta&&!x1(this.projectionDelta),f=this.getTransformTemplate(),h=f?f(this.latestValues,""):void 0,v=h!==this.prevTransformTemplateValue;l&&(c||Ci(this.latestValues)||v)&&(o(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(l=!0){const c=this.measurePageBox();let f=this.removeElementScroll(c);return l&&(f=this.removeTransform(f)),j4(f),{animationId:this.root.animationId,measuredBox:c,layoutBox:f,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:l}=this.options;if(!l)return $e();const c=l.measureViewportBox(),{scroll:f}=this.root;return f&&(Fn(c.x,f.offset.x),Fn(c.y,f.offset.y)),c}removeElementScroll(l){const c=$e();Dt(c,l);for(let f=0;f<this.path.length;f++){const h=this.path[f],{scroll:v,options:g}=h;if(h!==this.root&&v&&g.layoutScroll){if(v.isRoot){Dt(c,l);const{scroll:x}=this.root;x&&(Fn(c.x,-x.offset.x),Fn(c.y,-x.offset.y))}Fn(c.x,v.offset.x),Fn(c.y,v.offset.y)}}return c}applyTransform(l,c=!1){const f=$e();Dt(f,l);for(let h=0;h<this.path.length;h++){const v=this.path[h];!c&&v.options.layoutScroll&&v.scroll&&v!==v.root&&Pr(f,{x:-v.scroll.offset.x,y:-v.scroll.offset.y}),Ci(v.latestValues)&&Pr(f,v.latestValues)}return Ci(this.latestValues)&&Pr(f,this.latestValues),f}removeTransform(l){const c=$e();Dt(c,l);for(let f=0;f<this.path.length;f++){const h=this.path[f];if(!h.instance||!Ci(h.latestValues))continue;Qd(h.latestValues)&&h.updateSnapshot();const v=$e(),g=h.measurePageBox();Dt(v,g),u0(c,h.latestValues,h.snapshot?h.snapshot.layoutBox:void 0,v)}return Ci(this.latestValues)&&u0(c,this.latestValues),c}setTargetDelta(l){this.targetDelta=l,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(l){this.options={...this.options,...l,crossfade:l.crossfade!==void 0?l.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ot.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(l=!1){var c;const f=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=f.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=f.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=f.isSharedProjectionDirty);const h=!!this.resumingFrom||this!==f;if(!(l||h&&this.isSharedProjectionDirty||this.isProjectionDirty||!((c=this.parent)===null||c===void 0)&&c.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:g,layoutId:x}=this.options;if(!(!this.layout||!(g||x))){if(this.resolvedRelativeTargetAt=ot.timestamp,!this.targetDelta&&!this.relativeTarget){const b=this.getClosestProjectingParent();b&&b.layout&&this.animationProgress!==1?(this.relativeParent=b,this.forceRelativeParentToResolveTarget(),this.relativeTarget=$e(),this.relativeTargetOrigin=$e(),Zo(this.relativeTargetOrigin,this.layout.layoutBox,b.layout.layoutBox),Dt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=$e(),this.targetWithTransforms=$e()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),MT(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Dt(this.target,this.layout.layoutBox),h1(this.target,this.targetDelta)):Dt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const b=this.getClosestProjectingParent();b&&!!b.resumingFrom==!!this.resumingFrom&&!b.options.layoutScroll&&b.target&&this.animationProgress!==1?(this.relativeParent=b,this.forceRelativeParentToResolveTarget(),this.relativeTarget=$e(),this.relativeTargetOrigin=$e(),Zo(this.relativeTargetOrigin,this.target,b.target),Dt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Pi.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Qd(this.parent.latestValues)||f1(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var l;const c=this.getLead(),f=!!this.resumingFrom||this!==c;let h=!0;if((this.isProjectionDirty||!((l=this.parent)===null||l===void 0)&&l.isProjectionDirty)&&(h=!1),f&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(h=!1),this.resolvedRelativeTargetAt===ot.timestamp&&(h=!1),h)return;const{layout:v,layoutId:g}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(v||g))return;Dt(this.layoutCorrected,this.layout.layoutBox);const x=this.treeScale.x,b=this.treeScale.y;FT(this.layoutCorrected,this.treeScale,this.path,f),c.layout&&!c.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(c.target=c.layout.layoutBox);const{target:S}=c;if(!S){this.projectionTransform&&(this.projectionDelta=Cr(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=Cr(),this.projectionDeltaWithTransform=Cr());const P=this.projectionTransform;Vo(this.projectionDelta,this.layoutCorrected,S,this.latestValues),this.projectionTransform=f0(this.projectionDelta,this.treeScale),(this.projectionTransform!==P||this.treeScale.x!==x||this.treeScale.y!==b)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",S)),Pi.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(l=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),l){const c=this.getStack();c&&c.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(l,c=!1){const f=this.snapshot,h=f?f.latestValues:{},v={...this.latestValues},g=Cr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!c;const x=$e(),b=f?f.source:void 0,S=this.layout?this.layout.source:void 0,P=b!==S,j=this.getStack(),C=!j||j.members.length<=1,y=!!(P&&!C&&this.options.crossfade===!0&&!this.path.some(E4));this.animationProgress=0;let w;this.mixTargetDelta=z=>{const R=z/1e3;v0(g.x,l.x,R),v0(g.y,l.y,R),this.setTargetDelta(g),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Zo(x,this.layout.layoutBox,this.relativeParent.layout.layoutBox),L4(this.relativeTarget,this.relativeTargetOrigin,x,R),w&&a4(this.relativeTarget,w)&&(this.isProjectionDirty=!1),w||(w=$e()),Dt(w,this.relativeTarget)),P&&(this.animationValues=v,t4(v,h,this.latestValues,R,y,C)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=R},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(l){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Mn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ye.update(()=>{$a.hasAnimatedSinceResize=!0,this.currentAnimation=p4(0,p0,{...l,onUpdate:c=>{this.mixTargetDelta(c),l.onUpdate&&l.onUpdate(c)},onComplete:()=>{l.onComplete&&l.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const l=this.getStack();l&&l.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(p0),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const l=this.getLead();let{targetWithTransforms:c,target:f,layout:h,latestValues:v}=l;if(!(!c||!f||!h)){if(this!==l&&this.layout&&h&&b1(this.options.animationType,this.layout.layoutBox,h.layoutBox)){f=this.target||$e();const g=Et(this.layout.layoutBox.x);f.x.min=l.target.x.min,f.x.max=f.x.min+g;const x=Et(this.layout.layoutBox.y);f.y.min=l.target.y.min,f.y.max=f.y.min+x}Dt(c,f),Pr(c,v),Vo(this.projectionDeltaWithTransform,this.layoutCorrected,c,v)}}registerSharedNode(l,c){this.sharedNodes.has(l)||this.sharedNodes.set(l,new l4),this.sharedNodes.get(l).add(c);const h=c.options.initialPromotionConfig;c.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(c):void 0})}isLead(){const l=this.getStack();return l?l.lead===this:!0}getLead(){var l;const{layoutId:c}=this.options;return c?((l=this.getStack())===null||l===void 0?void 0:l.lead)||this:this}getPrevLead(){var l;const{layoutId:c}=this.options;return c?(l=this.getStack())===null||l===void 0?void 0:l.prevLead:void 0}getStack(){const{layoutId:l}=this.options;if(l)return this.root.sharedNodes.get(l)}promote({needsReset:l,transition:c,preserveFollowOpacity:f}={}){const h=this.getStack();h&&h.promote(this,f),l&&(this.projectionDelta=void 0,this.needsReset=!0),c&&this.setOptions({transition:c})}relegate(){const l=this.getStack();return l?l.relegate(this):!1}resetRotation(){const{visualElement:l}=this.options;if(!l)return;let c=!1;const{latestValues:f}=l;if((f.rotate||f.rotateX||f.rotateY||f.rotateZ)&&(c=!0),!c)return;const h={};for(let v=0;v<h0.length;v++){const g="rotate"+h0[v];f[g]&&(h[g]=f[g],l.setStaticValue(g,0))}l.render();for(const v in h)l.setStaticValue(v,h[v]);l.scheduleRender()}getProjectionStyles(l){var c,f;if(!this.instance||this.isSVG)return;if(!this.isVisible)return m4;const h={visibility:""},v=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,h.opacity="",h.pointerEvents=Da(l==null?void 0:l.pointerEvents)||"",h.transform=v?v(this.latestValues,""):"none",h;const g=this.getLead();if(!this.projectionDelta||!this.layout||!g.target){const P={};return this.options.layoutId&&(P.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,P.pointerEvents=Da(l==null?void 0:l.pointerEvents)||""),this.hasProjected&&!Ci(this.latestValues)&&(P.transform=v?v({},""):"none",this.hasProjected=!1),P}const x=g.animationValues||g.latestValues;this.applyTransformsToTarget(),h.transform=f0(this.projectionDeltaWithTransform,this.treeScale,x),v&&(h.transform=v(x,h.transform));const{x:b,y:S}=this.projectionDelta;h.transformOrigin=`${b.origin*100}% ${S.origin*100}% 0`,g.animationValues?h.opacity=g===this?(f=(c=x.opacity)!==null&&c!==void 0?c:this.latestValues.opacity)!==null&&f!==void 0?f:1:this.preserveOpacity?this.latestValues.opacity:x.opacityExit:h.opacity=g===this?x.opacity!==void 0?x.opacity:"":x.opacityExit!==void 0?x.opacityExit:0;for(const P in vl){if(x[P]===void 0)continue;const{correct:j,applyTo:C}=vl[P],y=h.transform==="none"?x[P]:j(x[P],g);if(C){const w=C.length;for(let z=0;z<w;z++)h[C[z]]=y}else h[P]=y}return this.options.layoutId&&(h.pointerEvents=g===this?Da(l==null?void 0:l.pointerEvents)||"":"none"),h}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(l=>{var c;return(c=l.currentAnimation)===null||c===void 0?void 0:c.stop()}),this.root.nodes.forEach(m0),this.root.sharedNodes.clear()}}}function v4(e){e.updateLayout()}function y4(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:o}=e.layout,{animationType:a}=e.options,l=n.source!==e.layout.source;a==="size"?$t(g=>{const x=l?n.measuredBox[g]:n.layoutBox[g],b=Et(x);x.min=r[g].min,x.max=x.min+b}):b1(a,n.layoutBox,r)&&$t(g=>{const x=l?n.measuredBox[g]:n.layoutBox[g],b=Et(r[g]);x.max=x.min+b,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[g].max=e.relativeTarget[g].min+b)});const c=Cr();Vo(c,r,n.layoutBox);const f=Cr();l?Vo(f,e.applyTransform(o,!0),n.measuredBox):Vo(f,r,n.layoutBox);const h=!x1(c);let v=!1;if(!e.resumeFrom){const g=e.getClosestProjectingParent();if(g&&!g.resumeFrom){const{snapshot:x,layout:b}=g;if(x&&b){const S=$e();Zo(S,n.layoutBox,x.layoutBox);const P=$e();Zo(P,r,b.layoutBox),_1(S,P)||(v=!0),g.options.layoutRoot&&(e.relativeTarget=P,e.relativeTargetOrigin=S,e.relativeParent=g)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:f,layoutDelta:c,hasLayoutChanged:h,hasRelativeTargetChanged:v})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function x4(e){Pi.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function _4(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function w4(e){e.clearSnapshot()}function m0(e){e.clearMeasurements()}function b4(e){e.isLayoutDirty=!1}function S4(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function g0(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function C4(e){e.resolveTargetDelta()}function P4(e){e.calcProjection()}function k4(e){e.resetRotation()}function T4(e){e.removeLeadSnapshot()}function v0(e,t,n){e.translate=Te(t.translate,0,n),e.scale=Te(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function y0(e,t,n,r){e.min=Te(t.min,n.min,r),e.max=Te(t.max,n.max,r)}function L4(e,t,n,r){y0(e.x,t.x,n.x,r),y0(e.y,t.y,n.y,r)}function E4(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const z4={duration:.45,ease:[.4,0,.1,1]},x0=e=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(e),_0=x0("applewebkit/")&&!x0("chrome/")?Math.round:Ie;function w0(e){e.min=_0(e.min),e.max=_0(e.max)}function j4(e){w0(e.x),w0(e.y)}function b1(e,t,n){return e==="position"||e==="preserve-aspect"&&!Yd(d0(t),d0(n),.2)}const M4=w1({attachResizeListener:(e,t)=>Cn(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Cc={current:void 0},S1=w1({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Cc.current){const e=new M4({});e.mount(window),e.setOptions({layoutScroll:!0}),Cc.current=e}return Cc.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),A4={pan:{Feature:YT},drag:{Feature:KT,ProjectionNode:S1,MeasureLayout:g1}},R4=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function I4(e){const t=R4.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]}function Jd(e,t,n=1){const[r,o]=I4(e);if(!r)return;const a=window.getComputedStyle(t).getPropertyValue(r);if(a){const l=a.trim();return o1(l)?parseFloat(l):l}else return Vd(o)?Jd(o,t,n+1):o}function O4(e,{...t},n){const r=e.current;if(!(r instanceof Element))return{target:t,transitionEnd:n};n&&(n={...n}),e.values.forEach(o=>{const a=o.get();if(!Vd(a))return;const l=Jd(a,r);l&&o.set(l)});for(const o in t){const a=t[o];if(!Vd(a))continue;const l=Jd(a,r);l&&(t[o]=l,n||(n={}),n[o]===void 0&&(n[o]=a))}return{target:t,transitionEnd:n}}const D4=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),C1=e=>D4.has(e),$4=e=>Object.keys(e).some(C1),b0=e=>e===Xi||e===Q,S0=(e,t)=>parseFloat(e.split(", ")[t]),C0=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const o=r.match(/^matrix3d\((.+)\)$/);if(o)return S0(o[1],t);{const a=r.match(/^matrix\((.+)\)$/);return a?S0(a[1],e):0}},N4=new Set(["x","y","z"]),B4=bs.filter(e=>!N4.has(e));function F4(e){const t=[];return B4.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t.length&&e.render(),t}const Ur={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:C0(4,13),y:C0(5,14)};Ur.translateX=Ur.x;Ur.translateY=Ur.y;const V4=(e,t,n)=>{const r=t.measureViewportBox(),o=t.current,a=getComputedStyle(o),{display:l}=a,c={};l==="none"&&t.setStaticValue("display",e.display||"block"),n.forEach(h=>{c[h]=Ur[h](r,a)}),t.render();const f=t.measureViewportBox();return n.forEach(h=>{const v=t.getValue(h);v&&v.jump(c[h]),e[h]=Ur[h](f,a)}),e},Z4=(e,t,n={},r={})=>{t={...t},r={...r};const o=Object.keys(t).filter(C1);let a=[],l=!1;const c=[];if(o.forEach(f=>{const h=e.getValue(f);if(!e.hasValue(f))return;let v=n[f],g=yo(v);const x=t[f];let b;if(xl(x)){const S=x.length,P=x[0]===null?1:0;v=x[P],g=yo(v);for(let j=P;j<S&&x[j]!==null;j++)b?wh(yo(x[j])===b):b=yo(x[j])}else b=yo(x);if(g!==b)if(b0(g)&&b0(b)){const S=h.get();typeof S=="string"&&h.set(parseFloat(S)),typeof x=="string"?t[f]=parseFloat(x):Array.isArray(x)&&b===Q&&(t[f]=x.map(parseFloat))}else g!=null&&g.transform&&(b!=null&&b.transform)&&(v===0||x===0)?v===0?h.set(b.transform(v)):t[f]=g.transform(x):(l||(a=F4(e),l=!0),c.push(f),r[f]=r[f]!==void 0?r[f]:t[f],h.jump(x))}),c.length){const f=c.indexOf("height")>=0?window.pageYOffset:null,h=V4(t,e,c);return a.length&&a.forEach(([v,g])=>{e.getValue(v).set(g)}),e.render(),Ql&&f!==null&&window.scrollTo({top:f}),{target:h,transitionEnd:r}}else return{target:t,transitionEnd:r}};function U4(e,t,n,r){return $4(t)?Z4(e,t,n,r):{target:t,transitionEnd:r}}const W4=(e,t,n,r)=>{const o=O4(e,t,r);return t=o.target,r=o.transitionEnd,U4(e,t,n,r)},ef={current:null},P1={current:!1};function H4(){if(P1.current=!0,!!Ql)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>ef.current=e.matches;e.addListener(t),t()}else ef.current=!1}function G4(e,t,n){const{willChange:r}=t;for(const o in t){const a=t[o],l=n[o];if(St(a))e.addValue(o,a),Sl(r)&&r.add(o);else if(St(l))e.addValue(o,Zr(a,{owner:e})),Sl(r)&&r.remove(o);else if(l!==a)if(e.hasValue(o)){const c=e.getValue(o);!c.hasAnimated&&c.set(a)}else{const c=e.getStaticValue(o);e.addValue(o,Zr(c!==void 0?c:a,{owner:e}))}}for(const o in n)t[o]===void 0&&e.removeValue(o);return t}const P0=new WeakMap,k1=Object.keys(hs),K4=k1.length,k0=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],Y4=fh.length;class X4{constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:o,visualState:a},l={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>ye.render(this.render,!1,!0);const{latestValues:c,renderState:f}=a;this.latestValues=c,this.baseTarget={...c},this.initialValues=n.initial?{...c}:{},this.renderState=f,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=o,this.options=l,this.isControllingVariants=Jl(n),this.isVariantNode=c_(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:h,...v}=this.scrapeMotionValuesFromProps(n,{});for(const g in v){const x=v[g];c[g]!==void 0&&St(x)&&(x.set(c[g],!1),Sl(h)&&h.add(g))}}scrapeMotionValuesFromProps(t,n){return{}}mount(t){this.current=t,P0.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),P1.current||H4(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:ef.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){P0.delete(this.current),this.projection&&this.projection.unmount(),Mn(this.notifyUpdate),Mn(this.render),this.valueSubscriptions.forEach(t=>t()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features)this.features[t].unmount();this.current=null}bindToMotionValue(t,n){const r=Yi.has(t),o=n.on("change",l=>{this.latestValues[t]=l,this.props.onUpdate&&ye.update(this.notifyUpdate,!1,!0),r&&this.projection&&(this.projection.isTransformDirty=!0)}),a=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(t,()=>{o(),a()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}loadFeatures({children:t,...n},r,o,a){let l,c;for(let f=0;f<K4;f++){const h=k1[f],{isEnabled:v,Feature:g,ProjectionNode:x,MeasureLayout:b}=hs[h];x&&(l=x),v(n)&&(!this.features[h]&&g&&(this.features[h]=new g(this)),b&&(c=b))}if((this.type==="html"||this.type==="svg")&&!this.projection&&l){this.projection=new l(this.latestValues,this.parent&&this.parent.projection);const{layoutId:f,layout:h,drag:v,dragConstraints:g,layoutScroll:x,layoutRoot:b}=n;this.projection.setOptions({layoutId:f,layout:h,alwaysMeasureLayout:!!v||g&&br(g),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof h=="string"?h:"both",initialPromotionConfig:a,layoutScroll:x,layoutRoot:b})}return c}updateFeatures(){for(const t in this.features){const n=this.features[t];n.isMounted?n.update():(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):$e()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}makeTargetAnimatable(t,n=!0){return this.makeTargetAnimatableFromInstance(t,this.props,n)}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<k0.length;r++){const o=k0[r];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const a=t["on"+o];a&&(this.propEventSubscriptions[o]=this.on(o,a))}this.prevMotionValues=G4(this,this.scrapeMotionValuesFromProps(t,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(t=!1){if(t)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const r=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(r.initial=this.props.initial),r}const n={};for(let r=0;r<Y4;r++){const o=fh[r],a=this.props[o];(fs(a)||a===!1)&&(n[o]=a)}return n}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){n!==this.values.get(t)&&(this.removeValue(t),this.bindToMotionValue(t,n)),this.values.set(t,n),this.latestValues[t]=n.get()}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=Zr(n,{owner:this}),this.addValue(t,r)),r}readValue(t){var n;return this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(n=this.getBaseTargetFromProps(this.props,t))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,t,this.options)}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props,o=typeof r=="string"||typeof r=="object"?(n=_h(this.props,r))===null||n===void 0?void 0:n[t]:void 0;if(r&&o!==void 0)return o;const a=this.getBaseTargetFromProps(this.props,t);return a!==void 0&&!St(a)?a:this.initialValues[t]!==void 0&&o===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new zh),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class T1 extends X4{sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}makeTargetAnimatableFromInstance({transition:t,transitionEnd:n,...r},{transformValues:o},a){let l=hT(r,t||{},this);if(o&&(n&&(n=o(n)),r&&(r=o(r)),l&&(l=o(l))),a){dT(this,r,l);const c=W4(this,r,l,n);n=c.transitionEnd,r=c.target}return{transition:t,transitionEnd:n,...r}}}function Q4(e){return window.getComputedStyle(e)}class q4 extends T1{constructor(){super(...arguments),this.type="html"}readValueFromInstance(t,n){if(Yi.has(n)){const r=Ph(n);return r&&r.default||0}else{const r=Q4(t),o=(p_(n)?r.getPropertyValue(n):r[n])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(t,{transformPagePoint:n}){return p1(t,n)}build(t,n,r,o){mh(t,n,r,o.transformTemplate)}scrapeMotionValuesFromProps(t,n){return xh(t,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;St(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(t,n,r,o){__(t,n,r,o)}}class J4 extends T1{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(Yi.has(n)){const r=Ph(n);return r&&r.default||0}return n=w_.has(n)?n:ch(n),t.getAttribute(n)}measureInstanceViewportBox(){return $e()}scrapeMotionValuesFromProps(t,n){return S_(t,n)}build(t,n,r,o){vh(t,n,r,this.isSVGTag,o.transformTemplate)}renderInstance(t,n,r,o){b_(t,n,r,o)}mount(t){this.isSVGTag=yh(t.tagName),super.mount(t)}}const eL=(e,t)=>ph(e)?new J4(t,{enableHardwareAcceleration:!1}):new q4(t,{enableHardwareAcceleration:!0}),tL={layout:{ProjectionNode:S1,MeasureLayout:g1}},nL={...LT,...Kk,...A4,...tL},J=ik((e,t)=>Ik(e,t,nL,eL));function L1(){const e=E.useRef(!1);return uh(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function iL(){const e=L1(),[t,n]=E.useState(0),r=E.useCallback(()=>{e.current&&n(t+1)},[t]);return[E.useCallback(()=>ye.postRender(r),[r]),t]}class rL extends E.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function oL({children:e,isPresent:t}){const n=E.useId(),r=E.useRef(null),o=E.useRef({width:0,height:0,top:0,left:0});return E.useInsertionEffect(()=>{const{width:a,height:l,top:c,left:f}=o.current;if(t||!r.current||!a||!l)return;r.current.dataset.motionPopId=n;const h=document.createElement("style");return document.head.appendChild(h),h.sheet&&h.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${l}px !important;
            top: ${c}px !important;
            left: ${f}px !important;
          }
        `),()=>{document.head.removeChild(h)}},[t]),E.createElement(rL,{isPresent:t,childRef:r,sizeRef:o},E.cloneElement(e,{ref:r}))}const Pc=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:o,presenceAffectsLayout:a,mode:l})=>{const c=C_(sL),f=E.useId(),h=E.useMemo(()=>({id:f,initial:t,isPresent:n,custom:o,onExitComplete:v=>{c.set(v,!0);for(const g of c.values())if(!g)return;r&&r()},register:v=>(c.set(v,!1),()=>c.delete(v))}),a?void 0:[n]);return E.useMemo(()=>{c.forEach((v,g)=>c.set(g,!1))},[n]),E.useEffect(()=>{!n&&!c.size&&r&&r()},[n]),l==="popLayout"&&(e=E.createElement(oL,{isPresent:n},e)),E.createElement(Xl.Provider,{value:h},e)};function sL(){return new Map}function aL(e){return E.useEffect(()=>()=>e(),[])}const ki=e=>e.key||"";function lL(e,t){e.forEach(n=>{const r=ki(n);t.set(r,n)})}function uL(e){const t=[];return E.Children.forEach(e,n=>{E.isValidElement(n)&&t.push(n)}),t}const Zi=({children:e,custom:t,initial:n=!0,onExitComplete:r,exitBeforeEnter:o,presenceAffectsLayout:a=!0,mode:l="sync"})=>{const c=E.useContext(hh).forceRender||iL()[0],f=L1(),h=uL(e);let v=h;const g=E.useRef(new Map).current,x=E.useRef(v),b=E.useRef(new Map).current,S=E.useRef(!0);if(uh(()=>{S.current=!1,lL(h,b),x.current=v}),aL(()=>{S.current=!0,b.clear(),g.clear()}),S.current)return E.createElement(E.Fragment,null,v.map(y=>E.createElement(Pc,{key:ki(y),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:a,mode:l},y)));v=[...v];const P=x.current.map(ki),j=h.map(ki),C=P.length;for(let y=0;y<C;y++){const w=P[y];j.indexOf(w)===-1&&!g.has(w)&&g.set(w,void 0)}return l==="wait"&&g.size&&(v=[]),g.forEach((y,w)=>{if(j.indexOf(w)!==-1)return;const z=b.get(w);if(!z)return;const R=P.indexOf(w);let O=y;if(!O){const I=()=>{g.delete(w);const $=Array.from(b.keys()).filter(W=>!j.includes(W));if($.forEach(W=>b.delete(W)),x.current=h.filter(W=>{const G=ki(W);return G===w||$.includes(G)}),!g.size){if(f.current===!1)return;c(),r&&r()}};O=E.createElement(Pc,{key:ki(z),isPresent:!1,onExitComplete:I,custom:t,presenceAffectsLayout:a,mode:l},z),g.set(w,O)}v.splice(R,0,O)}),v=v.map(y=>{const w=y.key;return g.has(w)?y:E.createElement(Pc,{key:ki(y),isPresent:!0,presenceAffectsLayout:a,mode:l},y)}),E.createElement(E.Fragment,null,g.size?v:v.map(y=>E.cloneElement(y)))};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var cL={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dL=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Ce=(e,t)=>{const n=E.forwardRef(({color:r="currentColor",size:o=24,strokeWidth:a=2,absoluteStrokeWidth:l,className:c="",children:f,...h},v)=>E.createElement("svg",{ref:v,...cL,width:o,height:o,stroke:r,strokeWidth:l?Number(a)*24/Number(o):a,className:["lucide",`lucide-${dL(e)}`,c].join(" "),...h},[...t.map(([g,x])=>E.createElement(g,x)),...Array.isArray(f)?f:[f]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fL=Ce("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T0=Ce("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hL=Ce("ChefHat",[["path",{d:"M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z",key:"z3ra2g"}],["line",{x1:"6",x2:"18",y1:"17",y2:"17",key:"12q60k"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tf=Ce("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ms=Ce("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=Ce("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pL=Ce("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mL=Ce("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Na=Ce("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L0=Ce("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E1=Ce("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=Ce("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=Ce("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gL=Ce("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z1=Ce("MessageCircle",[["path",{d:"m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z",key:"v2veuj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vL=Ce("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iu=Ce("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yL=Ce("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nf=Ce("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xL=Ce("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j1=Ce("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _L=Ce("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wL=Ce("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M1=Ce("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),bL=k(J.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${({theme:e})=>e.zIndex.sticky};
  background: ${({$scrolled:e})=>e?"#7a4a5a":"transparent"};
  border-top: ${({$scrolled:e})=>e?"4px solid #5a3545":"none"};
  transition: all 0.3s ease;
  padding: ${({theme:e})=>e.spacing.md} 0;
`,SL=k.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.spacing.xl};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,E0=k(Ki)`
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  font-style: italic;
  color: ${({theme:e})=>e.colors.accent.gold};
  text-decoration: none;
  
  span {
    color: #fff;
  }
`,CL=k.nav`
  display: flex;
  align-items: center;
  background: ${({$scrolled:e})=>e?"#9a6a7a":"rgba(120, 100, 100, 0.4)"};
  border-radius: 50px;
  padding: 6px 8px;
  border: 1px solid rgba(100, 80, 80, 0.3);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    display: none;
  }
`,PL=k(Ki)`
  font-family: ${({theme:e})=>e.fonts.body};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  color: ${({$active:e})=>e?"#2d1f1f":"#f5e8e8"};
  text-decoration: none;
  padding: 8px 24px;
  border-radius: 50px;
  transition: all ${({theme:e})=>e.transitions.fast};
  background: ${({$active:e})=>e?"#e8d5d5":"transparent"};
  
  &:hover {
    background: #e8d5d5;
    color: #2d1f1f;
  }
`,z0=k.button`
  display: none;
  width: 44px;
  height: 44px;
  color: #f5e8e8;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,kL=k(J.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #7a4a5a;
  z-index: ${({theme:e})=>e.zIndex.modal};
  display: flex;
  flex-direction: column;
  padding: ${({theme:e})=>e.spacing["3xl"]};
`,TL=k.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({theme:e})=>e.spacing["3xl"]};
`,LL=k.nav`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.lg};
`,EL=k(Ki)`
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: ${({theme:e})=>e.fontSizes["3xl"]};
  color: ${({theme:e})=>e.colors.white};
  text-decoration: none;
  
  &:hover {
    color: ${({theme:e})=>e.colors.accent.gold};
  }
`,j0=[{path:"/",label:"Главная"},{path:"/menu",label:"Меню"},{path:"/reservation",label:"Бронирование"},{path:"/locations",label:"Филиалы"},{path:"/contact",label:"Контакты"}],zL=()=>{const[e,t]=E.useState(!1),[n,r]=E.useState(!1),o=di();return E.useEffect(()=>{const a=()=>{t(window.scrollY>50)};return window.addEventListener("scroll",a),()=>window.removeEventListener("scroll",a)},[]),E.useEffect(()=>{r(!1)},[o]),m.jsxs(m.Fragment,{children:[m.jsx(bL,{$scrolled:e,children:m.jsxs(SL,{children:[m.jsx(E0,{to:"/",children:"Socials"}),m.jsx(CL,{$scrolled:e,children:j0.map(a=>m.jsx(PL,{to:a.path,$active:o.pathname===a.path,children:a.label},a.path))}),m.jsx(z0,{onClick:()=>r(!0),children:m.jsx(gL,{size:28})})]})}),m.jsx(Zi,{children:n&&m.jsxs(kL,{initial:{x:"100%"},animate:{x:0},exit:{x:"100%"},transition:{type:"tween",duration:.3},children:[m.jsxs(TL,{children:[m.jsx(E0,{to:"/",children:"Socials"}),m.jsx(z0,{onClick:()=>r(!1),children:m.jsx(M1,{size:28})})]}),m.jsx(LL,{children:j0.map((a,l)=>m.jsx(J.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{delay:l*.1},children:m.jsx(EL,{to:a.path,children:a.label})},a.path))})]})})]})},jL=k.footer`
  background: linear-gradient(135deg, #5a3545 0%, #4a2c34 100%);
  color: #fff;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #C9A86C 0%, #e8d4a8 50%, #C9A86C 100%);
  }
`,ML=k.div`
  padding: 50px 40px 40px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(201, 168, 108, 0.4), transparent);
  }
  
  @media (max-width: 768px) {
    padding: 40px 20px 30px;
  }
`,AL=k.div`
  max-width: 1200px;
  margin: 0 auto;
`,RL=k.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr 1.2fr;
  gap: 35px;
  
  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 25px;
  }
`,kc=k.div``,Tc=k.h4`
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: 16px;
  color: #fff;
  margin-bottom: 18px;
  font-weight: 400;
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  
  &::before {
    content: '◆';
    font-size: 6px;
    color: #C9A86C;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 30px;
    height: 1px;
    background: linear-gradient(90deg, #C9A86C, transparent);
  }
`,IL=k.div`
  text-align: left;
`,OL=k(Ki)`
  font-family: 'IM Fell English', Georgia, serif;
  font-size: 26px;
  font-style: italic;
  color: #fff;
  text-decoration: none;
  display: inline-block;
  margin-bottom: 12px;
  
  span {
    color: #C9A86C;
  }
`,DL=k.p`
  font-family: ${({theme:e})=>e.fonts.body};
  font-size: 13px;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 15px;
`,Lc=k.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: ${({theme:e})=>e.fonts.body};
  font-size: 13px;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 8px;
  
  svg {
    color: #C9A86C;
    flex-shrink: 0;
  }
  
  a {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: #C9A86C;
    }
  }
`,$L=k.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,_o=k(Ki)`
  font-family: ${({theme:e})=>e.fonts.body};
  font-size: 14px;
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  
  &::before {
    content: '';
    width: 0;
    height: 1px;
    background: #C9A86C;
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: #C9A86C;
    transform: translateX(5px);
    
    &::before {
      width: 15px;
    }
  }
`,NL=k.div`
  display: flex;
  gap: 10px;
  margin-bottom: 12px;
`,Ec=k.a`
  width: 40px;
  height: 40px;
  background: transparent;
  border: 1px solid rgba(201, 168, 108, 0.4);
  color: #C9A86C;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  position: relative;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    border: 1px solid #C9A86C;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &::before {
    top: -3px;
    left: -3px;
    border-right: none;
    border-bottom: none;
  }
  
  &::after {
    bottom: -3px;
    right: -3px;
    border-left: none;
    border-top: none;
  }
  
  &:hover {
    background: #C9A86C;
    color: #4a2c34;
    border-color: #C9A86C;
    transform: translateY(-3px);
    
    &::before,
    &::after {
      opacity: 1;
    }
  }
`,BL=k.p`
  font-family: ${({theme:e})=>e.fonts.body};
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.5;
`,FL=k.form`
  margin-bottom: 12px;
`,VL=k.div`
  display: flex;
  border: 1px solid rgba(201, 168, 108, 0.4);
  background: rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  
  &:focus-within {
    border-color: #C9A86C;
    background: rgba(255, 255, 255, 0.1);
  }
`,ZL=k.input`
  flex: 1;
  padding: 10px 14px;
  border: none;
  background: transparent;
  color: #fff;
  font-family: ${({theme:e})=>e.fonts.body};
  font-size: 13px;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
    font-style: italic;
  }
  
  &:focus {
    outline: none;
  }
`,UL=k.button`
  padding: 10px 18px;
  background: linear-gradient(135deg, #C9A86C 0%, #b89a5a 100%);
  border: none;
  color: #4a2c34;
  font-family: ${({theme:e})=>e.fonts.body};
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 6px;
  
  &:hover {
    background: linear-gradient(135deg, #d4b87a 0%, #C9A86C 100%);
  }
`,WL=k.p`
  font-family: ${({theme:e})=>e.fonts.body};
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.5;
`,HL=k.div`
  padding: 20px 40px;
  
  @media (max-width: 768px) {
    padding: 15px 20px;
  }
`,GL=k.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  
  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
`,KL=k.p`
  font-family: ${({theme:e})=>e.fonts.body};
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
  
  span {
    color: #C9A86C;
  }
`,YL=k.div`
  display: flex;
  gap: 30px;
`,M0=k(Ki)`
  font-family: ${({theme:e})=>e.fonts.body};
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: #C9A86C;
  }
`,A0=k.div`
  position: absolute;
  font-size: 10px;
  color: rgba(201, 168, 108, 0.2);
  letter-spacing: 4px;
  
  &.top-right {
    top: 30px;
    right: 40px;
  }
  
  &.bottom-left {
    bottom: 80px;
    left: 40px;
  }
`,XL=()=>{const[e,t]=E.useState(""),n=r=>{r.preventDefault(),console.log("Subscribe:",e),t("")};return m.jsxs(jL,{children:[m.jsx(A0,{className:"top-right",children:"✦ ✦ ✦ ✦ ✦"}),m.jsx(A0,{className:"bottom-left",children:"✦ ✦ ✦ ✦ ✦"}),m.jsx(ML,{children:m.jsx(AL,{children:m.jsxs(RL,{children:[m.jsxs(IL,{children:[m.jsx(OL,{to:"/",children:"Socials"}),m.jsx(DL,{children:"Изысканные десерты ручной работы, созданные с любовью и вниманием к каждой детали."}),m.jsxs(Lc,{children:[m.jsx(Ah,{size:16}),m.jsx("span",{children:"г. Москва, ул. Арбат, д. 10"})]}),m.jsxs(Lc,{children:[m.jsx(iu,{size:16}),m.jsx("a",{href:"tel:+74951234567",children:"+7 (495) 123-45-67"})]}),m.jsxs(Lc,{children:[m.jsx(Mh,{size:16}),m.jsx("a",{href:"mailto:info@bellepatisserie.ru",children:"info@bellepatisserie.ru"})]})]}),m.jsxs(kc,{children:[m.jsx(Tc,{children:"Навигация"}),m.jsxs($L,{children:[m.jsx("li",{children:m.jsx(_o,{to:"/",children:"Главная"})}),m.jsx("li",{children:m.jsx(_o,{to:"/menu",children:"Меню"})}),m.jsx("li",{children:m.jsx(_o,{to:"/reservation",children:"Бронирование"})}),m.jsx("li",{children:m.jsx(_o,{to:"/locations",children:"Филиалы"})}),m.jsx("li",{children:m.jsx(_o,{to:"/contact",children:"Контакты"})})]})]}),m.jsxs(kc,{children:[m.jsx(Tc,{children:"Соцсети"}),m.jsxs(NL,{children:[m.jsx(Ec,{href:"https://instagram.com",target:"_blank",rel:"noopener",children:m.jsx(E1,{size:20})}),m.jsx(Ec,{href:"https://t.me",target:"_blank",rel:"noopener",children:m.jsx(nf,{size:20})}),m.jsx(Ec,{href:"https://wa.me",target:"_blank",rel:"noopener",children:m.jsx(z1,{size:20})})]}),m.jsxs(BL,{children:["Подписывайтесь на нас, чтобы быть",m.jsx("br",{}),"в курсе новинок и акций"]})]}),m.jsxs(kc,{children:[m.jsx(Tc,{children:"Рассылка"}),m.jsx(FL,{onSubmit:n,children:m.jsxs(VL,{children:[m.jsx(ZL,{type:"email",placeholder:"Ваш email...",value:e,onChange:r=>t(r.target.value),required:!0}),m.jsx(UL,{type:"submit",children:m.jsx(ms,{size:16})})]})}),m.jsxs(WL,{children:["Подпишитесь на нашу рассылку",m.jsx("br",{}),"и получите скидку 10% на первый заказ"]})]})]})})}),m.jsx(HL,{children:m.jsxs(GL,{children:[m.jsxs(KL,{children:["© 2024 ",m.jsx("span",{children:"Socials"}),". Все права защищены."]}),m.jsxs(YL,{children:[m.jsx(M0,{to:"/privacy",children:"Политика конфиденциальности"}),m.jsx(M0,{to:"/terms",children:"Условия использования"})]})]})})]})},QL=k.main`
  min-height: 100vh;
`,qL=({children:e})=>m.jsxs(m.Fragment,{children:[m.jsx(zL,{}),m.jsx(QL,{children:e}),m.jsx(XL,{})]}),JL={primary:yt`
    background: ${({theme:e})=>e.colors.primary.dark};
    color: ${({theme:e})=>e.colors.white};
    
    &:hover:not(:disabled) {
      background: ${({theme:e})=>e.colors.primary.darker};
      transform: translateY(-2px);
      box-shadow: ${({theme:e})=>e.shadows.lg};
    }
  `,secondary:yt`
    background: ${({theme:e})=>e.colors.background.card};
    color: ${({theme:e})=>e.colors.text.primary};
    
    &:hover:not(:disabled) {
      background: ${({theme:e})=>e.colors.background.cardHover};
    }
  `,outline:yt`
    background: transparent;
    color: ${({theme:e})=>e.colors.primary.dark};
    border: 2px solid ${({theme:e})=>e.colors.primary.dark};
    
    &:hover:not(:disabled) {
      background: ${({theme:e})=>e.colors.primary.dark};
      color: ${({theme:e})=>e.colors.white};
    }
  `,ghost:yt`
    background: transparent;
    color: ${({theme:e})=>e.colors.text.primary};
    
    &:hover:not(:disabled) {
      background: ${({theme:e})=>e.colors.background.secondary};
    }
  `,gold:yt`
    background: linear-gradient(135deg, ${({theme:e})=>e.colors.accent.gold} 0%, ${({theme:e})=>e.colors.accent.goldDark} 100%);
    color: ${({theme:e})=>e.colors.white};
    box-shadow: ${({theme:e})=>e.shadows.glow};
    
    &:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 0 30px rgba(201, 168, 108, 0.5);
    }
  `},eE={sm:yt`
    padding: ${({theme:e})=>`${e.spacing.sm} ${e.spacing.md}`};
    font-size: ${({theme:e})=>e.fontSizes.sm};
  `,md:yt`
    padding: ${({theme:e})=>`${e.spacing.md} ${e.spacing.xl}`};
    font-size: ${({theme:e})=>e.fontSizes.md};
  `,lg:yt`
    padding: ${({theme:e})=>`${e.spacing.lg} ${e.spacing["2xl"]}`};
    font-size: ${({theme:e})=>e.fontSizes.lg};
  `},A1=yt`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing.sm};
  font-family: ${({theme:e})=>e.fonts.body};
  font-weight: ${({theme:e})=>e.fontWeights.semibold};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  border: none;
  cursor: pointer;
  transition: all ${({theme:e})=>e.transitions.normal};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
  text-decoration: none;
  
  ${({variant:e="primary"})=>JL[e]}
  ${({size:e="md"})=>eE[e]}
  
  ${({fullWidth:e})=>e&&yt`
    width: 100%;
  `}
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  ${({isLoading:e})=>e&&yt`
    position: relative;
    color: transparent !important;
    
    &::after {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      border: 2px solid currentColor;
      border-right-color: transparent;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }
    
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  `}
`;k(J.button)`
  ${A1}
`;const tE=k(Ki)`
  ${A1}
`,R0=({children:e,variant:t="primary",size:n="md",to:r,style:o,...a})=>m.jsx(tE,{variant:t,size:n,to:r,style:o,...a,children:e}),R1=k.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.xs};
  width: 100%;
`,I1=k.label`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  color: ${({theme:e})=>e.colors.text.secondary};
`,O1=yt`
  width: 100%;
  padding: ${({theme:e})=>`${e.spacing.md} ${e.spacing.lg}`};
  padding-left: ${({$hasIcon:e,theme:t})=>e?t.spacing["3xl"]:t.spacing.lg};
  font-family: ${({theme:e})=>e.fonts.body};
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.text.primary};
  background: ${({theme:e})=>e.colors.white};
  border: 2px solid ${({theme:e,$hasError:t})=>t?e.colors.error:e.colors.primary.lighter};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  transition: all ${({theme:e})=>e.transitions.fast};
  outline: none;
  
  &::placeholder {
    color: ${({theme:e})=>e.colors.text.light};
  }
  
  &:focus {
    border-color: ${({theme:e,$hasError:t})=>t?e.colors.error:e.colors.accent.gold};
    box-shadow: 0 0 0 3px ${({$hasError:e})=>e?"rgba(184, 80, 80, 0.1)":"rgba(201, 168, 108, 0.15)"};
  }
  
  &:disabled {
    background: ${({theme:e})=>e.colors.background.secondary};
    cursor: not-allowed;
  }
`,nE=k.input`
  ${O1}
`,iE=k.textarea`
  ${O1}
  min-height: 120px;
  resize: vertical;
`,rE=k.div`
  position: relative;
  width: 100%;
`,oE=k.div`
  position: absolute;
  left: ${({theme:e})=>e.spacing.md};
  top: 50%;
  transform: translateY(-50%);
  color: ${({theme:e})=>e.colors.text.light};
  display: flex;
  align-items: center;
  justify-content: center;
`,D1=k.span`
  font-size: ${({theme:e})=>e.fontSizes.xs};
  color: ${({theme:e})=>e.colors.error};
`,Ba=E.forwardRef(({label:e,error:t,icon:n,...r},o)=>m.jsxs(R1,{children:[e&&m.jsx(I1,{children:e}),m.jsxs(rE,{children:[n&&m.jsx(oE,{children:n}),m.jsx(nE,{ref:o,$hasError:!!t,$hasIcon:!!n,...r})]}),t&&m.jsx(D1,{children:t})]}));Ba.displayName="Input";const $1=E.forwardRef(({label:e,error:t,...n},r)=>m.jsxs(R1,{children:[e&&m.jsx(I1,{children:e}),m.jsx(iE,{ref:r,$hasError:!!t,...n}),t&&m.jsx(D1,{children:t})]}));$1.displayName="Textarea";k(J.div)`
  background: ${({theme:e})=>e.colors.background.card};
  border-radius: ${({theme:e})=>e.borderRadius.xl};
  overflow: hidden;
  transition: all ${({theme:e})=>e.transitions.normal};
  
  ${({$hoverable:e,theme:t})=>e&&`
    cursor: pointer;
    
    &:hover {
      transform: translateY(-4px);
      box-shadow: ${t.shadows.xl};
      background: ${t.colors.background.cardHover};
    }
  `}
`;k(J.div)`
  background: transparent;
  cursor: pointer;
  width: 100%;
  max-width: 380px;
  position: relative;
  
  &:hover {
    .product-image-container {
      transform: translateY(-12px);
      
      &::before {
        opacity: 1;
      }
    }
    
    .product-overlay {
      opacity: 1;
    }
    
    img {
      transform: scale(1.1);
    }
    
    .view-btn {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }
`;k.div`
  position: relative;
  width: 100%;
  aspect-ratio: 0.85;
  overflow: hidden;
  border-radius: 30px;
  box-shadow: 0 15px 40px rgba(74, 44, 52, 0.25);
  transition: transform 0.5s ease;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border: 3px solid rgba(201, 168, 108, 0.5);
    border-radius: 30px;
    z-index: 3;
    opacity: 0;
    transition: opacity 0.4s ease;
  }
`;k.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg, 
    transparent 0%, 
    transparent 40%,
    rgba(74, 44, 52, 0.7) 100%
  );
  z-index: 1;
  opacity: 0;
  transition: opacity 0.4s ease;
  border-radius: 30px;
`;k.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.8);
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  opacity: 0;
  transition: all 0.4s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  
  &::before {
    content: '→';
    font-size: 28px;
    color: #4a2c34;
  }
`;k.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }
`;k.div`
  padding: 28px 20px 20px;
  text-align: center;
  position: relative;
`;k.h3`
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: 32px;
  font-weight: 400;
  color: #4a2c34;
  text-transform: capitalize;
  letter-spacing: 0.03em;
  position: relative;
  display: inline-block;
  
  &::before,
  &::after {
    content: '◈';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 10px;
    color: #C9A86C;
  }
  
  &::before {
    left: -24px;
  }
  
  &::after {
    right: -24px;
  }
`;k.span`
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: ${({theme:e})=>e.fontSizes.xl};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  color: ${({theme:e})=>e.colors.accent.gold};
  display: none;
`;k.p`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.text.secondary};
  margin-top: ${({theme:e})=>e.spacing.sm};
  line-height: ${({theme:e})=>e.lineHeights.relaxed};
  display: none;
`;k(J.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({theme:e})=>e.colors.overlay};
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${({theme:e})=>e.zIndex.overlay};
  padding: ${({theme:e})=>e.spacing.lg};
`;k(J.div)`
  background: ${({theme:e})=>e.colors.background.primary};
  border-radius: ${({theme:e})=>e.borderRadius["2xl"]};
  width: 100%;
  max-width: ${({$size:e})=>e};
  max-height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: ${({theme:e})=>e.shadows.xl};
`;k.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({theme:e})=>e.spacing.lg} ${({theme:e})=>e.spacing.xl};
  border-bottom: 1px solid ${({theme:e})=>e.colors.primary.lighter};
`;k.h2`
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  color: ${({theme:e})=>e.colors.text.primary};
  margin: 0;
`;k.button`
  width: 40px;
  height: 40px;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  background: ${({theme:e})=>e.colors.background.card};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.colors.text.secondary};
  transition: all ${({theme:e})=>e.transitions.fast};
  
  &:hover {
    background: ${({theme:e})=>e.colors.primary.light};
    color: ${({theme:e})=>e.colors.white};
  }
`;k.div`
  padding: ${({theme:e})=>e.spacing.xl};
  overflow-y: auto;
  flex: 1;
`;const sE=k.section`
  min-height: 100vh;
  background: ${({theme:e})=>e.colors.background.gradient};
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=1920') center/cover;
    opacity: 0.15;
  }
  
  @media (max-width: 768px) {
    min-height: auto;
    padding: 120px 0 60px;
  }
`,aE=k.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: ${({theme:e})=>`${e.spacing["5xl"]} ${e.spacing.xl}`};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({theme:e})=>e.spacing["4xl"]};
  align-items: center;
  position: relative;
  z-index: 1;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.desktop}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  @media (max-width: 768px) {
    padding: 20px 15px;
    gap: 20px;
    display: flex;
    flex-direction: column;
  }
`,lE=k(J.div)`
  @media (max-width: ${({theme:e})=>e.breakpoints.desktop}) {
    order: 2;
    text-align: center;
  }
  
  @media (max-width: 768px) {
    padding: 0 15px;
    order: 1;
  }
`,uE=k(J.h1)`
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: ${({theme:e})=>e.fontSizes["7xl"]};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  color: ${({theme:e})=>e.colors.white};
  line-height: 1;
  margin-bottom: ${({theme:e})=>e.spacing.xl};
  
  span {
    color: ${({theme:e})=>e.colors.accent.gold};
    font-style: italic;
  }
  
  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    font-size: ${({theme:e})=>e.fontSizes["5xl"]};
  }
  
  @media (max-width: 768px) {
    font-size: 32px;
    text-align: center;
    margin-bottom: 20px;
  }
`,cE=k(J.p)`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  color: ${({theme:e})=>e.colors.primary.lighter};
  margin-bottom: ${({theme:e})=>e.spacing["2xl"]};
  max-width: 500px;
  line-height: ${({theme:e})=>e.lineHeights.relaxed};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.desktop}) {
    margin: 0 auto ${({theme:e})=>e.spacing["2xl"]};
  }
  
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 0;
    max-width: 100%;
    margin-bottom: 25px;
    text-align: center;
  }
`,dE=k(J.div)`
  display: flex;
  gap: ${({theme:e})=>e.spacing.lg};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.desktop}) {
    justify-content: center;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 12px;
    width: 100%;
    padding: 0 20px;
    
    a, button {
      width: 100% !important;
      max-width: 280px !important;
      text-align: center;
      display: flex;
      justify-content: center;
      font-size: 13px !important;
      padding: 14px 24px !important;
    }
  }
`,fE=k(J.div)`
  position: relative;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.desktop}) {
    order: 1;
  }
  
  @media (max-width: 768px) {
    display: none !important;
  }
  
  img {
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    display: block;
    filter: drop-shadow(0 40px 80px rgba(0, 0, 0, 0.3));
  }
`,I0=k(J.div)`
  position: absolute;
  background: ${({theme:e})=>e.colors.white};
  padding: ${({theme:e})=>e.spacing.md} ${({theme:e})=>e.spacing.lg};
  border-radius: ${({theme:e})=>e.borderRadius.xl};
  box-shadow: ${({theme:e})=>e.shadows.xl};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  
  &.top-left {
    top: 10%;
    left: -5%;
  }
  
  &.bottom-right {
    bottom: 15%;
    right: 0;
  }
  
  @media (max-width: ${({theme:e})=>e.breakpoints.desktop}) {
    display: none;
  }
`,O0=k.span`
  width: 40px;
  height: 40px;
  background: ${({theme:e})=>e.colors.accent.goldLight};
  border-radius: ${({theme:e})=>e.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.colors.accent.goldDark};
`,D0=k.div`
  h4 {
    font-size: ${({theme:e})=>e.fontSizes.sm};
    font-weight: ${({theme:e})=>e.fontWeights.bold};
    color: ${({theme:e})=>e.colors.text.primary};
    margin: 0;
  }
  
  span {
    font-size: ${({theme:e})=>e.fontSizes.xs};
    color: ${({theme:e})=>e.colors.text.light};
  }
`,hE=k.section`
  padding: 100px 40px;
  background: #f4cbcd;
`,pE=k.div`
  max-width: 1200px;
  margin: 0 auto;
`,mE=k.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  
  @media (max-width: 1000px) {
    flex-wrap: wrap;
  }
`,gE=k(J.div)`
  text-align: center;
  padding: 0;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  position: relative;
  
  &:hover {
    .feature-inner {
      transform: translateY(-8px);
      box-shadow: 0 20px 50px rgba(74, 44, 52, 0.25);
    }
    
    .icon-wrapper {
      transform: scale(1.05);
    }
  }
`,vE=k.div`
  background: linear-gradient(145deg, #fff 0%, #f8e8e8 100%);
  border-radius: 0 0 30px 30px;
  padding: 100px 30px 40px;
  width: 100%;
  box-shadow: 0 10px 40px rgba(74, 44, 52, 0.15);
  transition: all 0.4s ease;
  position: relative;
  margin-top: 80px;
  
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: 30px;
    right: 30px;
    height: 4px;
    background: linear-gradient(90deg, #C9A86C, #e8d4a8, #C9A86C);
    border-radius: 2px;
  }
`,yE=k.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  transition: transform 0.4s ease;
`,xE=k.div`
  width: 160px;
  height: 160px;
  background: linear-gradient(145deg, #8b6b6b 0%, #6d4f4f 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fce4e4;
  box-shadow: 0 8px 30px rgba(74, 44, 52, 0.3);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    inset: 8px;
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
  }
  
  svg {
    width: 70px;
    height: 70px;
    stroke-width: 1.5;
  }
`,_E=k.h3`
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: 26px;
  color: #4a2c34;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 400;
`,wE=k.p`
  font-family: ${({theme:e})=>e.fonts.accent};
  font-size: 16px;
  color: #8b6b6b;
  margin-bottom: 24px;
  font-style: italic;
  font-weight: 400;
  
  &::after {
    content: '?';
    display: block;
    font-size: 8px;
    color: #C9A86C;
    margin-top: 16px;
    letter-spacing: 12px;
    text-indent: 12px;
  }
`,bE=k.button`
  padding: 12px 36px;
  background: transparent;
  border: 2px solid #C9A86C;
  border-radius: 30px;
  color: #C9A86C;
  font-family: ${({theme:e})=>e.fonts.body};
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  
  &:hover {
    background: #C9A86C;
    color: #fff;
    box-shadow: 0 4px 15px rgba(201, 168, 108, 0.4);
  }
`,SE=k.section`
  padding: 100px 0;
  background: #f4cbcd;
  overflow: hidden;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 60px 0;
  }
`,CE=k(J.h2)`
  font-family: 'Cormorant Garamond', 'IM Fell English', Georgia, serif;
  font-size: 90px;
  font-weight: 400;
  color: #d4a5a6;
  text-align: center;
  margin-bottom: 60px;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.15);
  letter-spacing: 0.02em;
  padding: 0 40px;
  
  @media (max-width: 768px) {
    font-size: 36px;
    margin-bottom: 30px;
    padding: 0 20px;
  }
`,PE=k.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 150px;
    z-index: 2;
    pointer-events: none;
  }
  
  &::before {
    left: 0;
    background: linear-gradient(90deg, #f4cbcd 0%, transparent 100%);
  }
  
  &::after {
    right: 0;
    background: linear-gradient(90deg, transparent 0%, #f4cbcd 100%);
  }
  
  @media (max-width: 768px) {
    &::before,
    &::after {
      width: 30px;
    }
  }
`,kE=k(J.div)`
  display: flex;
  gap: 40px;
  width: fit-content;
  
  @media (max-width: 768px) {
    gap: 15px;
  }
`,TE=k(J.div)`
  flex-shrink: 0;
  width: 350px;
  text-align: center;
  cursor: pointer;
  
  @media (max-width: 768px) {
    width: 160px;
  }
`,LE=k.div`
  position: relative;
  width: 100%;
  aspect-ratio: 0.85;
  border-radius: 30px;
  overflow: hidden;
  margin-bottom: 24px;
  box-shadow: 0 15px 40px rgba(74, 44, 52, 0.2);
  transition: all 0.4s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 25px 50px rgba(74, 44, 52, 0.3);
    
    img {
      transform: scale(1.08);
    }
    
    .slide-overlay {
      opacity: 1;
    }
    
    .slide-button {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  @media (max-width: 768px) {
    border-radius: 15px;
    margin-bottom: 12px;
    box-shadow: 0 8px 20px rgba(74, 44, 52, 0.15);
    
    .slide-button {
      display: none;
    }
  }
`,EE=k.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    transparent 0%,
    transparent 50%,
    rgba(74, 44, 52, 0.5) 100%
  );
  opacity: 0;
  transition: opacity 0.4s ease;
  border-radius: 30px;
`,zE=k.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.8);
  width: 70px;
  height: 70px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.4s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  
  &::before {
    content: '?';
    font-size: 24px;
    color: #4a2c34;
  }
`,jE=k.h3`
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: 28px;
  font-weight: 400;
  color: #4a2c34;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  
  &::before,
  &::after {
    content: '✦';
    font-size: 10px;
    color: #C9A86C;
  }
  
  @media (max-width: 768px) {
    font-size: 14px;
    gap: 6px;
    
    &::before,
    &::after {
      font-size: 6px;
    }
  }
`,ME=k.section`
  padding: 100px 40px;
  background: linear-gradient(135deg, #f5e6e0 0%, #e8d4cc 50%, #dcc4bc 100%);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(201, 168, 108, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(122, 74, 90, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
`,AE=k.div`
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`,RE=k(J.div)`
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 240, 235, 0.95) 100%);
  border-radius: 40px;
  padding: 60px;
  box-shadow: 
    0 30px 80px rgba(122, 74, 90, 0.15),
    0 10px 30px rgba(0, 0, 0, 0.08);
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 60px;
  align-items: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 20px;
    left: 20px;
    right: 20px;
    bottom: 20px;
    border: 1px solid rgba(201, 168, 108, 0.3);
    border-radius: 30px;
    pointer-events: none;
  }
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 40px;
  }
`,IE=k(J.div)`
  position: relative;
  
  @media (max-width: 900px) {
    order: 1;
  }
`,OE=k.div`
  position: relative;
  padding: 20px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid #C9A86C;
    border-radius: 30px;
    transform: rotate(-3deg);
    opacity: 0.5;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid #7a4a5a;
    border-radius: 30px;
    transform: rotate(3deg);
    opacity: 0.3;
  }
`,DE=k.div`
  position: relative;
  z-index: 1;
  
  img {
    width: 100%;
    max-width: 380px;
    border-radius: 25px;
    box-shadow: 0 20px 50px rgba(74, 44, 52, 0.25);
    display: block;
    margin: 0 auto;
  }
`,$E=k(J.div)`
  @media (max-width: 900px) {
    order: 2;
    text-align: center;
  }
`,NE=k.span`
  display: inline-block;
  background: #7a4a5a;
  color: #fff;
  padding: 10px 28px;
  border-radius: 30px;
  font-family: ${({theme:e})=>e.fonts.body};
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin-bottom: 24px;
`,BE=k.h2`
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: 48px;
  color: #4a2c34;
  margin-bottom: 20px;
  font-weight: 400;
  line-height: 1.2;
  
  @media (max-width: 600px) {
    font-size: 36px;
  }
`,FE=k.p`
  font-family: ${({theme:e})=>e.fonts.body};
  font-size: 16px;
  color: #6b5055;
  line-height: 1.8;
  margin-bottom: 32px;
  max-width: 400px;
  
  @media (max-width: 900px) {
    margin: 0 auto 32px;
  }
`,VE=k.div`
  display: flex;
  align-items: baseline;
  gap: 16px;
  margin-bottom: 32px;
  
  @media (max-width: 900px) {
    justify-content: center;
  }
`,ZE=k.span`
  font-family: ${({theme:e})=>e.fonts.body};
  font-size: 20px;
  color: #a08080;
  text-decoration: line-through;
`,UE=k.span`
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: 42px;
  color: #C9A86C;
  font-weight: 400;
`,WE=k.button`
  padding: 18px 50px;
  background: linear-gradient(135deg, #C9A86C 0%, #b89a5a 100%);
  border: none;
  border-radius: 35px;
  color: #fff;
  font-family: ${({theme:e})=>e.fonts.body};
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(201, 168, 108, 0.4);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(201, 168, 108, 0.5);
  }
`,HE=k.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 50px;
`,$0=k.button`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #fff;
  border: 2px solid rgba(201, 168, 108, 0.3);
  color: #7a4a5a;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  
  &:hover {
    background: #C9A86C;
    border-color: #C9A86C;
    color: #fff;
    transform: scale(1.08);
  }
`,GE=k.div`
  display: flex;
  gap: 12px;
  align-items: center;
`,KE=k.button`
  width: ${({$active:e})=>e?"32px":"12px"};
  height: 12px;
  border-radius: 6px;
  background: ${({$active:e})=>e?"#C9A86C":"rgba(122, 74, 90, 0.25)"};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({$active:e})=>e?"#C9A86C":"rgba(122, 74, 90, 0.4)"};
  }
`,N0=k.div`
  position: absolute;
  font-size: 14px;
  color: #C9A86C;
  letter-spacing: 8px;
  
  &.top-left {
    top: 30px;
    left: 40px;
  }
  
  &.bottom-right {
    bottom: 30px;
    right: 40px;
  }
`,Yt=[{id:1,label:"Хит сезона",title:'Торт "Matcha Bliss"',description:"Изысканный торт с нежнейшим кремом матча, белым шоколадом и хрустящим слоем из лесных орехов. Настоящий вкусовой шедевр в каждом кусочке.",oldPrice:"320 000 сум",newPrice:"259 000 сум",image:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500"},{id:2,label:"Новинка",title:'Тартлет "Сан-Тропе"',description:"Классический французский тартлет с лёгким кремом маскарпоне и свежайшими ягодами из Прованса. Подаётся с ванильным соусом.",oldPrice:"280 000 сум",newPrice:"229 000 сум",image:"https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=500"},{id:3,label:"Топ продаж",title:"Набор макарон",description:"Ассорти из 6 макарон с лучшими вкусами: малина, фисташка, карамель, шоколад, манго и роза. Идеальный подарок.",oldPrice:"180 000 сум",newPrice:"149 000 сум",image:"https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?w=500"}],YE=[{icon:m.jsx(xL,{size:60}),title:"Качество",subtitle:"Только лучшее",description:"Используем только лучшие ингредиенты премиального качества."},{icon:m.jsx(hL,{size:60}),title:"Мастерство",subtitle:"Профессионализм",description:"Наши кондитеры — профессионалы с многолетним опытом и безупречной репутацией."},{icon:m.jsx(Na,{size:60}),title:"С любовью",subtitle:"В каждой детали",description:"Каждый десерт создаётся с душой и вниманием к каждой детали."}],Fa=[{id:1,name:"Cakes",slug:"cakes",image:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500"},{id:2,name:"Muffins",slug:"pastries",image:"https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=500"},{id:3,name:"Cookies",slug:"cookies",image:"https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500"},{id:4,name:"Pastries",slug:"pastries",image:"https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500"},{id:5,name:"Eclairs",slug:"eclairs",image:"https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?w=500"},{id:6,name:"Macarons",slug:"macarons",image:"https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=500"}],XE=[...Fa,...Fa,...Fa],QE=()=>{const[e,t]=E.useState(0),n=ih(),r=()=>{t(l=>(l+1)%Yt.length)},o=()=>{t(l=>(l-1+Yt.length)%Yt.length)},a=l=>{n(`/menu?category=${l}`)};return m.jsxs(m.Fragment,{children:[m.jsx(sE,{children:m.jsxs(aE,{children:[m.jsxs(lE,{children:[m.jsxs(uE,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},children:["Bake the",m.jsx("br",{}),"World a",m.jsx("br",{}),m.jsx("span",{children:"Better Place"})]}),m.jsx(cE,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},children:"Откройте для себя мир изысканных десертов, где каждое блюдо — настоящее произведение искусства."}),m.jsxs(dE,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.4},children:[m.jsx(R0,{to:"/menu",variant:"gold",size:"lg",children:"Смотреть меню"}),m.jsx(R0,{to:"/reservation",variant:"outline",size:"lg",style:{borderColor:"white",color:"white"},children:"Забронировать"})]})]}),m.jsxs(fE,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:1,delay:.3},children:[m.jsx("img",{src:"https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600",alt:"Праздничный торт"}),m.jsxs(I0,{className:"top-left",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.6,delay:.8},children:[m.jsx(O0,{children:m.jsx(mL,{size:20})}),m.jsxs(D0,{children:[m.jsx("h4",{children:"Доставка"}),m.jsx("span",{children:"Бесплатно от 200 000"})]})]}),m.jsxs(I0,{className:"bottom-right",initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{duration:.6,delay:1},children:[m.jsx(O0,{children:m.jsx(j1,{size:20})}),m.jsxs(D0,{children:[m.jsx("h4",{children:"4.9 ★"}),m.jsx("span",{children:"2000+ отзывов"})]})]})]})]})}),m.jsx(hE,{children:m.jsx(pE,{children:m.jsx(mE,{children:YE.map((l,c)=>m.jsxs(gE,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:c*.1},children:[m.jsx(yE,{className:"icon-wrapper",children:m.jsx(xE,{children:l.icon})}),m.jsxs(vE,{className:"feature-inner",children:[m.jsx(_E,{children:l.title}),m.jsx(wE,{children:l.subtitle}),m.jsx(bE,{children:"Подробнее"})]})]},c))})})}),m.jsx(ME,{children:m.jsxs(AE,{children:[m.jsxs(RE,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:[m.jsx(N0,{className:"top-left",children:"? ? ?"}),m.jsx(N0,{className:"bottom-right",children:"? ? ?"}),m.jsx(Zi,{mode:"wait",children:m.jsx(IE,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},transition:{duration:.4},children:m.jsx(OE,{children:m.jsx(DE,{children:m.jsx("img",{src:Yt[e].image,alt:Yt[e].title})})})},`image-${e}`)}),m.jsx(Zi,{mode:"wait",children:m.jsxs($E,{initial:{opacity:0,x:30},animate:{opacity:1,x:0},exit:{opacity:0,x:-30},transition:{duration:.4},children:[m.jsx(NE,{children:Yt[e].label}),m.jsx(BE,{children:Yt[e].title}),m.jsx(FE,{children:Yt[e].description}),m.jsxs(VE,{children:[m.jsx(ZE,{children:Yt[e].oldPrice}),m.jsx(UE,{children:Yt[e].newPrice})]}),m.jsx(WE,{children:"Заказать сейчас"})]},`content-${e}`)})]}),m.jsxs(HE,{children:[m.jsx($0,{onClick:o,children:m.jsx(tf,{size:24})}),m.jsx(GE,{children:Yt.map((l,c)=>m.jsx(KE,{$active:c===e,onClick:()=>t(c)},c))}),m.jsx($0,{onClick:r,children:m.jsx(ms,{size:24})})]})]})}),m.jsxs(SE,{children:[m.jsx(CE,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},children:"Our Product"}),m.jsx(PE,{children:m.jsx(kE,{animate:{x:[0,-(Fa.length*390)]},transition:{x:{duration:25,repeat:1/0,ease:"linear"}},children:XE.map((l,c)=>m.jsxs(TE,{onClick:()=>a(l.slug),children:[m.jsxs(LE,{children:[m.jsx("img",{src:l.image,alt:l.name,loading:"lazy"}),m.jsx(EE,{className:"slide-overlay"}),m.jsx(zE,{className:"slide-button"})]}),m.jsx(jE,{children:l.name})]},`${l.id}-${c}`))})})]})]})},qE=k.section`
  padding-top: ${({theme:e})=>e.spacing["5xl"]};
  padding-bottom: ${({theme:e})=>e.spacing["3xl"]};
  background: 
    linear-gradient(rgba(139, 69, 87, 0.85), rgba(167, 107, 91, 0.85)),
    url('https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=1920') center/cover no-repeat;
  position: relative;
`,JE=k.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: ${({theme:e})=>`${e.spacing["3xl"]} ${e.spacing.xl}`};
  text-align: center;
`,e3=k(J.h1)`
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: ${({theme:e})=>e.fontSizes["5xl"]};
  color: ${({theme:e})=>e.colors.white};
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,t3=k(J.p)`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  color: ${({theme:e})=>e.colors.primary.lighter};
  max-width: 600px;
  margin: 0 auto;
`,n3=k.section`
  padding: ${({theme:e})=>e.spacing["3xl"]} 0;
  background: ${({theme:e})=>e.colors.background.primary};
`,i3=k.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.spacing.xl};
`,r3=k.div`
  margin-bottom: 50px;
`,o3=k.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
  
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 24px;
  }
`,s3=k.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 20px;
  
  @media (max-width: 900px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`,a3=k.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  
  @media (max-width: 900px) {
    justify-content: center;
  }
`,l3=k.button`
  padding: 14px 32px;
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 0.03em;
  color: ${({$active:e})=>e?"#fff":"#4a2c34"};
  background: ${({$active:e})=>e?"linear-gradient(135deg, #7a4a5a 0%, #5a3545 100%)":"transparent"};
  border: ${({$active:e})=>e?"none":"2px solid #d4c4bc"};
  border-radius: 0;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  
  ${({$active:e})=>e&&`
    box-shadow: 0 6px 20px rgba(122, 74, 90, 0.35);
    
    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 8px;
      height: 8px;
      border: 2px solid #C9A86C;
    }
    
    &::before {
      top: -4px;
      left: -4px;
      border-right: none;
      border-bottom: none;
    }
    
    &::after {
      bottom: -4px;
      right: -4px;
      border-left: none;
      border-top: none;
    }
  `}
  
  ${({$active:e})=>!e&&`
    &::before {
      content: '';
      position: absolute;
      bottom: 8px;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 2px;
      background: #C9A86C;
      transition: width 0.3s ease;
    }
    
    &:hover::before {
      width: 60%;
    }
  `}
  
  &:hover {
    color: ${({$active:e})=>e?"#fff":"#7a4a5a"};
    border-color: ${({$active:e})=>e?"transparent":"#7a4a5a"};
  }
  
  @media (max-width: 600px) {
    padding: 12px 24px;
    font-size: 14px;
  }
`,u3=k.div`
  width: 1px;
  height: 30px;
  background: linear-gradient(180deg, transparent, #C9A86C, transparent);
  
  @media (max-width: 900px) {
    display: none;
  }
`,c3=k.div`
  position: relative;
  width: 100%;
  max-width: 320px;
  
  @media (max-width: 900px) {
    max-width: 100%;
  }
`,d3=k.div`
  position: relative;
  display: flex;
  align-items: center;
  background: transparent;
  border: 2px solid #d4c4bc;
  padding: 0;
  transition: all 0.3s ease;
  
  &:focus-within {
    border-color: #7a4a5a;
    
    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 8px;
      height: 8px;
      border: 2px solid #C9A86C;
    }
    
    &::before {
      top: -4px;
      left: -4px;
      border-right: none;
      border-bottom: none;
    }
    
    &::after {
      bottom: -4px;
      right: -4px;
      border-left: none;
      border-top: none;
    }
  }
`,f3=k.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #a08080;
  flex-shrink: 0;
  border-right: 1px solid #d4c4bc;
`,h3=k.input`
  flex: 1;
  border: none;
  background: transparent;
  padding: 14px 16px;
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: 15px;
  color: #4a2c34;
  
  &::placeholder {
    color: #a08080;
    font-weight: 400;
  }
  
  &:focus {
    outline: none;
  }
`,p3=k.div`
  display: none;
`,m3=k.button`
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #7a4a5a 0%, #5a3545 100%);
  border: none;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  flex-shrink: 0;
  
  &:hover {
    background: linear-gradient(135deg, #8a5a6a 0%, #6a4555 100%);
  }
`,B0=k.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 50px;
  
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`,F0=k(J.div)`
  position: relative;
  cursor: pointer;
  
  &:hover {
    .card-frame {
      transform: rotate(-1deg) scale(1.02);
    }
    
    .card-inner {
      box-shadow: 0 30px 60px rgba(74, 44, 52, 0.25);
    }
    
    .card-image img {
      transform: scale(1.1);
    }
    
    .card-stamp {
      transform: rotate(-15deg) scale(1.1);
    }
    
    .action-buttons {
      opacity: 1;
      transform: translateY(0);
    }
    
    .price-ribbon {
      transform: scale(1.05);
    }
  }
`,V0=k.div`
  position: relative;
  padding: 15px;
  background: linear-gradient(135deg, #f5ebe6 0%, #ede3dc 100%);
  border-radius: 8px;
  transition: all 0.4s ease;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border: 1px solid rgba(201, 168, 108, 0.3);
    border-radius: 8px;
    pointer-events: none;
  }
`,Z0=k.div`
  position: relative;
  background: #fff;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(74, 44, 52, 0.12);
  transition: box-shadow 0.4s ease;
`,U0=k.div`
  position: relative;
  aspect-ratio: 4/3;
  overflow: hidden;
`,W0=k.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
`,H0=k.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(74, 44, 52, 0.1) 0%,
    transparent 30%,
    transparent 60%,
    rgba(74, 44, 52, 0.4) 100%
  );
  pointer-events: none;
`,G0=k.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%) translateY(20px);
  display: flex;
  gap: 0;
  opacity: 0;
  transition: all 0.4s ease;
  pointer-events: auto;
`,K0=k.div`
  display: flex;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 243, 240, 0.98) 100%);
  border-radius: 30px;
  padding: 6px;
  box-shadow: 0 8px 30px rgba(74, 44, 52, 0.25);
  border: 2px solid #C9A86C;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -6px;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 3px;
    background: #C9A86C;
    border-radius: 2px;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 3px;
    background: #C9A86C;
    border-radius: 2px;
  }
`,ma=k.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${({$variant:e})=>e==="heart"?"linear-gradient(135deg, #f8e8e8 0%, #f0d8d8 100%)":"linear-gradient(135deg, #e8e8f0 0%, #d8d8e8 100%)"};
  color: #7a4a5a;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  border: none;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    inset: 3px;
    border: 1px dashed rgba(201, 168, 108, 0.5);
    border-radius: 50%;
    transition: all 0.3s ease;
  }
  
  &:hover {
    transform: scale(1.15) rotate(5deg);
    
    &::before {
      border-style: solid;
      border-color: #C9A86C;
    }
  }
  
  &:first-child {
    margin-right: 8px;
  }
`,Y0=k.div`
  width: 1px;
  background: linear-gradient(180deg, transparent, #C9A86C, transparent);
  margin: 8px 0;
`,X0=k.div`
  position: absolute;
  top: 20px;
  left: -8px;
  background: linear-gradient(135deg, #7a4a5a 0%, #5a3545 100%);
  color: #fff;
  padding: 10px 20px 10px 16px;
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: 20px;
  font-weight: 400;
  box-shadow: 0 4px 15px rgba(74, 44, 52, 0.3);
  transition: transform 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -8px;
    border: 4px solid transparent;
    border-top-color: #3d2525;
    border-right-color: #3d2525;
  }
  
  &::after {
    content: '';
    position: absolute;
    right: -12px;
    top: 0;
    bottom: 0;
    border: 21px solid transparent;
    border-left-color: #5a3545;
    border-left-width: 12px;
  }
`,Q0=k.div`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 70px;
  height: 70px;
  border: 3px solid #C9A86C;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.95);
  transform: rotate(-12deg);
  transition: transform 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  
  span:first-child {
    font-family: ${({theme:e})=>e.fonts.accent};
    font-size: 10px;
    color: #7a4a5a;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
  
  span:last-child {
    font-family: ${({theme:e})=>e.fonts.heading};
    font-size: 14px;
    color: #C9A86C;
    font-weight: 600;
  }
`,q0=k.div`
  padding: 24px;
  text-align: center;
  position: relative;
  background: linear-gradient(180deg, #fff 0%, #faf7f5 100%);
  
  &::before {
    content: '◆ ◆ ◆';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    font-size: 8px;
    color: #C9A86C;
    letter-spacing: 8px;
    background: #fff;
    padding: 0 15px;
  }
`,J0=k.h3`
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: 24px;
  color: #4a2c34;
  margin-bottom: 10px;
  font-weight: 400;
  line-height: 1.3;
`,ev=k.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: ${({theme:e})=>e.fonts.body};
  font-size: 12px;
  color: #a08080;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  
  &::before,
  &::after {
    content: '';
    width: 20px;
    height: 1px;
    background: #d4c4bc;
  }
`,g3=k(J.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(74, 44, 52, 0.85);
  backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${({theme:e})=>e.zIndex.modal};
  padding: 20px;
`,v3=k(J.div)`
  background: linear-gradient(145deg, #faf7f5 0%, #f0ebe8 100%);
  border-radius: 30px;
  max-width: 950px;
  width: 100%;
  max-height: 90vh;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.3);
  
  &::before {
    content: '';
    position: absolute;
    inset: 10px;
    border: 2px solid rgba(201, 168, 108, 0.3);
    border-radius: 24px;
    pointer-events: none;
    z-index: 10;
  }
  
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    max-height: 95vh;
    overflow-y: auto;
  }
`,y3=k.div`
  position: relative;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(transparent, rgba(74, 44, 52, 0.3));
    pointer-events: none;
  }
  
  @media (max-width: 800px) {
    height: 350px;
  }
`,x3=k.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  display: flex;
  justify-content: center;
  z-index: 5;
  
  span {
    background: rgba(255, 255, 255, 0.9);
    padding: 8px 24px;
    border-radius: 20px;
    font-family: ${({theme:e})=>e.fonts.body};
    font-size: 12px;
    color: #7a4a5a;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    backdrop-filter: blur(10px);
  }
`,_3=k.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, #fff 0%, #f5f0ed 100%);
  color: #7a4a5a;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 15;
  transition: all 0.3s ease;
  border: 2px solid #C9A86C;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  
  &:hover {
    background: #7a4a5a;
    color: #fff;
    transform: rotate(90deg);
  }
`,w3=k.button`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, #fff 0%, #f5f0ed 100%);
  color: ${({$active:e})=>e?"#e74c3c":"#7a4a5a"};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 15;
  transition: all 0.3s ease;
  border: 2px solid ${({$active:e})=>e?"#e74c3c":"#C9A86C"};
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  
  svg {
    fill: ${({$active:e})=>e?"#e74c3c":"none"};
    transition: all 0.3s ease;
  }
  
  &:hover {
    transform: scale(1.1);
    border-color: #e74c3c;
    color: #e74c3c;
  }
`,b3=k.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-y: auto;
  
  &::before {
    content: '✦';
    position: absolute;
    top: 30px;
    right: 40px;
    font-size: 20px;
    color: #C9A86C;
  }
`,S3=k.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(135deg, #7a4a5a 0%, #5a3545 100%);
  color: #fff;
  padding: 10px 24px;
  border-radius: 25px;
  font-family: ${({theme:e})=>e.fonts.body};
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: 24px;
  align-self: flex-start;
  box-shadow: 0 4px 15px rgba(122, 74, 90, 0.3);
  
  &::before {
    content: '◆';
    font-size: 8px;
  }
`,C3=k.h2`
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: 36px;
  color: #4a2c34;
  margin-bottom: 16px;
  font-weight: 400;
  line-height: 1.2;
  position: relative;
  
  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 2px;
    background: linear-gradient(90deg, #C9A86C, transparent);
    margin-top: 16px;
  }
`,P3=k.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
  
  span {
    font-family: ${({theme:e})=>e.fonts.heading};
    font-size: 32px;
    font-weight: 400;
    color: #C9A86C;
  }
  
  &::after {
    content: '★★★★★';
    font-size: 12px;
    color: #C9A86C;
    letter-spacing: 2px;
  }
`,k3=k.p`
  font-family: ${({theme:e})=>e.fonts.body};
  font-size: 15px;
  color: #6b5055;
  line-height: 1.8;
  margin-bottom: 28px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 15px;
  border-left: 3px solid #C9A86C;
  font-style: italic;
`,T3=k.div`
  margin-bottom: 24px;
`,L3=k.h4`
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: 14px;
  font-weight: 400;
  color: #4a2c34;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: 14px;
  display: flex;
  align-items: center;
  gap: 10px;
  
  &::before {
    content: '';
    width: 20px;
    height: 1px;
    background: #C9A86C;
  }
`,E3=k.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`,z3=k.li`
  background: linear-gradient(135deg, #f5ebe6 0%, #ede3dc 100%);
  padding: 10px 18px;
  border-radius: 20px;
  font-family: ${({theme:e})=>e.fonts.body};
  font-size: 13px;
  color: #5a4045;
  border: 1px solid rgba(201, 168, 108, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #C9A86C;
    transform: translateY(-2px);
  }
`,j3=k.div`
  margin-top: 80px;
  
  &:first-of-type {
    margin-top: 0;
  }
`,tv=k.div`
  text-align: center;
  margin-bottom: 60px;
  position: relative;
`,nv=k.h2`
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: 56px;
  color: #4a2c34;
  font-weight: 400;
  display: inline-block;
  position: relative;
  padding: 0 40px;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 80px;
    height: 1px;
    background: linear-gradient(90deg, transparent, #C9A86C);
  }
  
  &::before {
    right: 100%;
    background: linear-gradient(90deg, transparent, #C9A86C);
  }
  
  &::after {
    left: 100%;
    background: linear-gradient(90deg, #C9A86C, transparent);
  }
  
  @media (max-width: 700px) {
    font-size: 36px;
    
    &::before,
    &::after {
      width: 40px;
    }
  }
`,iv=k.div`
  margin-top: 15px;
  font-size: 12px;
  color: #C9A86C;
  letter-spacing: 6px;
`,rv=k.span`
  display: block;
  margin-top: 20px;
  font-family: ${({theme:e})=>e.fonts.body};
  font-size: 13px;
  color: #a08080;
  letter-spacing: 0.2em;
  text-transform: uppercase;
`,zc=[{id:"all",name:"Всё"},{id:"cakes",name:"Торты"},{id:"pastries",name:"Пирожные"},{id:"cookies",name:"Печенье"},{id:"muffins",name:"Маффины"},{id:"drinks",name:"Напитки"}],M3=[{id:1,name:"Красный Бархат",price:2500,image:"https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=400",description:"Нежный красный бисквит с ванильным кремом из маскарпоне, украшенный белым шоколадом.",category:"cakes",ingredients:["Мука","Какао","Маскарпоне","Сливки","Ваниль","Белый шоколад"],allergens:["Глютен","Молочные продукты"],weight:"1.2 кг"},{id:2,name:'Торт "Matcha Bliss"',price:2590,image:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400",description:"Уникальный торт с японским чаем матча, нежным муссом и хрустящей основой.",category:"cakes",ingredients:["Матча","Сливки","Белый шоколад","Миндальное пралине"],allergens:["Орехи","Молочные продукты"],weight:"1 кг"},{id:3,name:"Шоколадный Фондан",price:1800,image:"https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=400",description:"Классический шоколадный торт с жидким центром из горького шоколада.",category:"cakes",ingredients:["Темный шоколад","Сливочное масло","Яйца","Сахар"],allergens:["Глютен","Яйца","Молочные продукты"],weight:"800 г"},{id:4,name:"Макарон Ассорти",price:890,image:"https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=400",description:"Набор из 12 французских макарон разных вкусов: малина, фисташка, шоколад, ваниль.",category:"pastries",ingredients:["Миндальная мука","Сахарная пудра","Яичные белки","Разные начинки"],allergens:["Орехи","Яйца"],weight:"240 г"},{id:5,name:"Эклер Ваниль",price:280,image:"https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?w=400",description:"Классический французский эклер с нежным ванильным кремом и шоколадной глазурью.",category:"pastries",ingredients:["Заварное тесто","Ванильный крем","Темный шоколад"],allergens:["Глютен","Яйца","Молочные продукты"],weight:"80 г"},{id:6,name:"Тарталетка с ягодами",price:320,image:"https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400",description:"Хрустящая песочная корзиночка с заварным кремом и свежими сезонными ягодами.",category:"pastries",ingredients:["Песочное тесто","Заварной крем","Свежие ягоды"],allergens:["Глютен","Яйца","Молочные продукты"],weight:"120 г"},{id:7,name:"Круассан с миндалем",price:320,image:"https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400",description:"Хрустящий французский круассан с миндальным кремом и карамелизированным миндалем.",category:"pastries",ingredients:["Слоеное тесто","Миндальный крем","Миндаль","Сахарная пудра"],allergens:["Глютен","Орехи","Молочные продукты"],weight:"90 г"},{id:8,name:"Шоколадное печенье",price:150,image:"https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400",description:"Мягкое печенье с кусочками темного и молочного шоколада.",category:"cookies",ingredients:["Мука","Сливочное масло","Темный шоколад","Молочный шоколад"],allergens:["Глютен","Молочные продукты"],weight:"70 г"},{id:9,name:"Имбирное печенье",price:120,image:"https://images.unsplash.com/photo-1610450949065-1f2841536c88?w=400",description:"Хрустящее пряное печенье с имбирем и корицей.",category:"cookies",ingredients:["Мука","Имбирь","Корица","Мед","Сливочное масло"],allergens:["Глютен","Молочные продукты"],weight:"50 г"},{id:10,name:"Маффин черничный",price:220,image:"https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400",description:"Пышный маффин со свежей черникой и хрустящим штрейзелем.",category:"muffins",ingredients:["Мука","Черника","Сливочное масло","Яйца","Штрейзель"],allergens:["Глютен","Яйца","Молочные продукты"],weight:"100 г"},{id:11,name:"Маффин шоколадный",price:220,image:"https://images.unsplash.com/photo-1604882737321-e8cddbb25a20?w=400",description:"Шоколадный маффин с жидким шоколадным центром.",category:"muffins",ingredients:["Мука","Какао","Темный шоколад","Сливочное масло"],allergens:["Глютен","Молочные продукты"],weight:"100 г"},{id:12,name:"Латте Карамель",price:350,image:"https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400",description:"Ароматный кофе латте с домашним карамельным сиропом и взбитыми сливками.",category:"drinks",ingredients:["Эспрессо","Молоко","Карамельный сироп","Взбитые сливки"],allergens:["Молочные продукты"],weight:"350 мл"}],A3=()=>{const[e]=WP(),[t,n]=E.useState("all"),[r,o]=E.useState(""),[a,l]=E.useState(null),[c,f]=E.useState([]),h=E.useRef({});E.useEffect(()=>{const S=e.get("category");S&&n(S)},[e]);const v=M3.filter(S=>{const P=t==="all"||S.category===t,j=S.name.toLowerCase().includes(r.toLowerCase());return P&&j}),g=v.reduce((S,P)=>(S[P.category]||(S[P.category]=[]),S[P.category].push(P),S),{}),x=S=>{f(P=>P.includes(S)?P.filter(j=>j!==S):[...P,S])},b=S=>{var P;return((P=zc.find(j=>j.id===S))==null?void 0:P.name)||S};return m.jsxs(m.Fragment,{children:[m.jsx(qE,{children:m.jsxs(JE,{children:[m.jsx(e3,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},children:"Наше Меню"}),m.jsx(t3,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.1},children:"Выберите из нашей коллекции изысканных десертов и выпечки"})]})}),m.jsx(n3,{children:m.jsxs(i3,{children:[m.jsx(r3,{children:m.jsxs(o3,{children:[m.jsx(s3,{children:m.jsx(a3,{children:zc.map((S,P)=>m.jsxs(m.Fragment,{children:[m.jsx(l3,{$active:t===S.id,onClick:()=>n(S.id),children:S.name},S.id),P<zc.length-1&&m.jsx(u3,{},`div-${S.id}`)]}))})}),m.jsx(c3,{children:m.jsxs(d3,{children:[m.jsx(f3,{children:m.jsx(yL,{size:20})}),m.jsx(h3,{placeholder:"Поиск по меню...",value:r,onChange:S=>o(S.target.value)}),m.jsx(p3,{}),m.jsx(m3,{children:m.jsx(pL,{size:18})})]})})]})}),t==="all"?Object.entries(g).map(([S,P])=>m.jsxs(j3,{ref:j=>{h.current[S]=j},children:[m.jsxs(tv,{children:[m.jsx(nv,{children:b(S)}),m.jsx(iv,{children:"✦ ✦ ✦"}),m.jsxs(rv,{children:[P.length," позиций в меню"]})]}),m.jsx(B0,{children:P.map((j,C)=>m.jsx(F0,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-50px"},transition:{delay:C*.1,duration:.5},children:m.jsx(V0,{className:"card-frame",children:m.jsxs(Z0,{className:"card-inner",children:[m.jsxs(U0,{className:"card-image",children:[m.jsx(W0,{src:j.image,alt:j.name,loading:"lazy"}),m.jsx(H0,{}),m.jsx(G0,{className:"action-buttons",children:m.jsxs(K0,{children:[m.jsx(ma,{$variant:"heart",onClick:y=>{y.stopPropagation(),x(j.id)},children:m.jsx(Na,{size:20,fill:c.includes(j.id)?"currentColor":"none"})}),m.jsx(Y0,{}),m.jsx(ma,{$variant:"info",onClick:y=>{y.stopPropagation(),l(j)},children:m.jsx(L0,{size:20})})]})}),m.jsxs(X0,{className:"price-ribbon",children:[j.price.toLocaleString("uz-UZ")," сум"]}),m.jsxs(Q0,{className:"card-stamp",children:[m.jsx("span",{children:"Socials"}),m.jsx("span",{children:"★★★"})]})]}),m.jsxs(q0,{onClick:()=>l(j),children:[m.jsx(J0,{children:j.name}),m.jsx(ev,{children:b(j.category)})]})]})})},j.id))})]},S)):m.jsxs(m.Fragment,{children:[m.jsxs(tv,{children:[m.jsx(nv,{children:b(t)}),m.jsx(iv,{children:"✦ ✦ ✦"}),m.jsxs(rv,{children:[v.length," позиций в меню"]})]}),m.jsx(B0,{children:v.map((S,P)=>m.jsx(F0,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-50px"},transition:{delay:P*.1,duration:.5},children:m.jsx(V0,{className:"card-frame",children:m.jsxs(Z0,{className:"card-inner",children:[m.jsxs(U0,{className:"card-image",children:[m.jsx(W0,{src:S.image,alt:S.name,loading:"lazy"}),m.jsx(H0,{}),m.jsx(G0,{className:"action-buttons",children:m.jsxs(K0,{children:[m.jsx(ma,{$variant:"heart",onClick:j=>{j.stopPropagation(),x(S.id)},children:m.jsx(Na,{size:20,fill:c.includes(S.id)?"currentColor":"none"})}),m.jsx(Y0,{}),m.jsx(ma,{$variant:"info",onClick:j=>{j.stopPropagation(),l(S)},children:m.jsx(L0,{size:20})})]})}),m.jsxs(X0,{className:"price-ribbon",children:[S.price.toLocaleString("uz-UZ")," сум"]}),m.jsxs(Q0,{className:"card-stamp",children:[m.jsx("span",{children:"Socials"}),m.jsx("span",{children:"★★★"})]})]}),m.jsxs(q0,{onClick:()=>l(S),children:[m.jsx(J0,{children:S.name}),m.jsx(ev,{children:b(S.category)})]})]})})},S.id))})]})]})}),m.jsx(Zi,{children:a&&m.jsx(g3,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>l(null),children:m.jsxs(v3,{initial:{opacity:0,scale:.9,y:40},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.9,y:40},transition:{duration:.4,ease:"easeOut"},onClick:S=>S.stopPropagation(),children:[m.jsxs(y3,{children:[m.jsx("img",{src:a.image,alt:a.name}),m.jsx(x3,{children:m.jsx("span",{children:"Socials"})})]}),m.jsx(w3,{$active:c.includes(a.id),onClick:()=>x(a.id),children:m.jsx(Na,{size:22})}),m.jsx(_3,{onClick:()=>l(null),children:m.jsx(M1,{size:22})}),m.jsxs(b3,{children:[m.jsx(S3,{children:b(a.category)}),m.jsx(C3,{children:a.name}),m.jsx(P3,{children:m.jsxs("span",{children:[a.price.toLocaleString("uz-UZ")," сум"]})}),m.jsxs(k3,{children:['"',a.description,'"']}),a.ingredients&&m.jsxs(T3,{children:[m.jsx(L3,{children:"Состав"}),m.jsx(E3,{children:a.ingredients.map((S,P)=>m.jsx(z3,{children:S},P))})]})]})]})})})]})},R3=k.section`
  padding-top: ${({theme:e})=>e.spacing["5xl"]};
  padding-bottom: ${({theme:e})=>e.spacing["3xl"]};
  background: 
    linear-gradient(rgba(139, 69, 87, 0.85), rgba(167, 107, 91, 0.85)),
    url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920') center/cover no-repeat;
  position: relative;
`,I3=k.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: ${({theme:e})=>`${e.spacing["3xl"]} ${e.spacing.xl}`};
  text-align: center;
`,O3=k(J.h1)`
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: ${({theme:e})=>e.fontSizes["5xl"]};
  color: ${({theme:e})=>e.colors.white};
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,D3=k(J.p)`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  color: ${({theme:e})=>e.colors.primary.lighter};
  max-width: 600px;
  margin: 0 auto;
`,$3=k.section`
  padding: ${({theme:e})=>e.spacing["3xl"]} 0 ${({theme:e})=>e.spacing["5xl"]};
  background: ${({theme:e})=>e.colors.background.primary};
`,N3=k.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.spacing.xl};
`,B3=k.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 60px;
  position: relative;
`,F3=k.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 28px;
    left: calc(50% + 35px);
    width: 100px;
    height: 2px;
    background: ${({$completed:e})=>e?"linear-gradient(90deg, #C9A86C, #C9A86C)":"linear-gradient(90deg, #d4c4bc, #d4c4bc)"};
    
    @media (max-width: 600px) {
      width: 60px;
      left: calc(50% + 30px);
    }
  }
`,V3=k.div`
  width: 56px;
  height: 56px;
  background: ${({$active:e,$completed:t})=>t?"linear-gradient(135deg, #C9A86C 0%, #b89a5a 100%)":e?"linear-gradient(135deg, #7a4a5a 0%, #5a3545 100%)":"transparent"};
  color: ${({$active:e,$completed:t})=>e||t?"#fff":"#7a4a5a"};
  border: ${({$active:e,$completed:t})=>e||t?"none":"2px solid #d4c4bc"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: 20px;
  font-weight: 400;
  transition: all 0.3s ease;
  position: relative;
  
  ${({$active:e})=>e&&`
    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 10px;
      height: 10px;
      border: 2px solid #C9A86C;
    }
    
    &::before {
      top: -5px;
      left: -5px;
      border-right: none;
      border-bottom: none;
    }
    
    &::after {
      bottom: -5px;
      right: -5px;
      border-left: none;
      border-top: none;
    }
  `}
  
  svg {
    stroke-width: 3;
  }
`,Z3=k.span`
  margin-top: 16px;
  font-family: ${({theme:e})=>e.fonts.body};
  font-size: 13px;
  letter-spacing: 0.05em;
  color: ${({$active:e})=>e?"#4a2c34":"#a08080"};
  text-align: center;
  transition: color 0.3s ease;
  
  @media (max-width: 600px) {
    font-size: 11px;
  }
`,U3=k.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 140px;
  
  @media (max-width: 600px) {
    width: 100px;
  }
`,ov=k(J.div)`
  background: linear-gradient(145deg, #fff 0%, #faf7f5 100%);
  border-radius: 30px;
  padding: 50px;
  box-shadow: 0 20px 60px rgba(122, 74, 90, 0.12);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    inset: 15px;
    border: 1px solid rgba(201, 168, 108, 0.2);
    border-radius: 22px;
    pointer-events: none;
  }
  
  @media (max-width: 600px) {
    padding: 30px 20px;
  }
`,jc=k.h2`
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: 32px;
  color: #4a2c34;
  margin-bottom: 40px;
  text-align: center;
  font-weight: 400;
  position: relative;
  
  &::after {
    content: '✦';
    display: block;
    margin-top: 15px;
    font-size: 12px;
    color: #C9A86C;
  }
`,W3=k.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
  margin-bottom: 40px;
  background: linear-gradient(145deg, #f5ebe6 0%, #ede3dc 100%);
  padding: 20px;
  border-radius: 20px;
  border: 1px solid rgba(201, 168, 108, 0.2);
`,H3=k.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`,G3=k.h3`
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: 24px;
  color: #4a2c34;
  font-weight: 400;
`,sv=k.button`
  width: 44px;
  height: 44px;
  background: transparent;
  border: 2px solid #d4c4bc;
  color: #7a4a5a;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  &:hover:not(:disabled) {
    background: linear-gradient(135deg, #7a4a5a 0%, #5a3545 100%);
    border-color: transparent;
    color: #fff;
  }
  
  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`,K3=k.div`
  text-align: center;
  font-family: ${({theme:e})=>e.fonts.body};
  font-size: 12px;
  font-weight: 500;
  color: #7a4a5a;
  padding: 10px 0;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`,Y3=k.button`
  aspect-ratio: 1;
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: 16px;
  font-weight: 400;
  background: ${({$selected:e})=>e?"linear-gradient(135deg, #7a4a5a 0%, #5a3545 100%)":"transparent"};
  color: ${({$selected:e,$disabled:t,$today:n})=>e?"#fff":t?"#c0b0a8":n?"#C9A86C":"#4a2c34"};
  border: ${({$today:e,$selected:t})=>e&&!t?"2px solid #C9A86C":"none"};
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  opacity: ${({$disabled:e})=>e?.5:1};
  transition: all 0.3s ease;
  position: relative;
  
  ${({$selected:e})=>e&&`
    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 6px;
      height: 6px;
      border: 1px solid #C9A86C;
    }
    
    &::before {
      top: 2px;
      left: 2px;
      border-right: none;
      border-bottom: none;
    }
    
    &::after {
      bottom: 2px;
      right: 2px;
      border-left: none;
      border-top: none;
    }
  `}
  
  &:hover:not(:disabled) {
    background: ${({$selected:e})=>e?"linear-gradient(135deg, #7a4a5a 0%, #5a3545 100%)":"rgba(122, 74, 90, 0.1)"};
  }
`,X3=k.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  margin-bottom: 40px;
  
  @media (max-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,Q3=k.button`
  padding: 16px;
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: 16px;
  font-weight: 400;
  background: ${({$selected:e})=>e?"linear-gradient(135deg, #7a4a5a 0%, #5a3545 100%)":"transparent"};
  color: ${({$selected:e,$disabled:t})=>e?"#fff":t?"#c0b0a8":"#4a2c34"};
  border: ${({$selected:e})=>e?"none":"2px solid #d4c4bc"};
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  opacity: ${({$disabled:e})=>e?.5:1};
  transition: all 0.3s ease;
  position: relative;
  
  ${({$selected:e})=>e&&`
    box-shadow: 0 6px 20px rgba(122, 74, 90, 0.3);
    
    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 8px;
      height: 8px;
      border: 2px solid #C9A86C;
    }
    
    &::before {
      top: -4px;
      left: -4px;
      border-right: none;
      border-bottom: none;
    }
    
    &::after {
      bottom: -4px;
      right: -4px;
      border-left: none;
      border-top: none;
    }
  `}
  
  &:hover:not(:disabled) {
    border-color: ${({$selected:e})=>e?"transparent":"#7a4a5a"};
    color: ${({$selected:e})=>e?"#fff":"#7a4a5a"};
  }
`,q3=k.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-bottom: 40px;
  padding: 30px;
  background: linear-gradient(145deg, #f5ebe6 0%, #ede3dc 100%);
  border-radius: 20px;
  border: 1px solid rgba(201, 168, 108, 0.2);
`,av=k.button`
  width: 56px;
  height: 56px;
  background: ${({$disabled:e})=>e?"transparent":"linear-gradient(135deg, #7a4a5a 0%, #5a3545 100%)"};
  border: ${({$disabled:e})=>e?"2px solid #d4c4bc":"none"};
  color: ${({$disabled:e})=>e?"#c0b0a8":"#fff"};
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  
  &:hover:not(:disabled) {
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(122, 74, 90, 0.3);
  }
`,J3=k.div`
  text-align: center;
  min-width: 100px;
  
  span {
    display: block;
    font-family: ${({theme:e})=>e.fonts.heading};
    font-size: 56px;
    font-weight: 400;
    color: #C9A86C;
    line-height: 1;
  }
  
  small {
    font-family: ${({theme:e})=>e.fonts.body};
    font-size: 14px;
    color: #8b6b6b;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
`,Mc=k.h3`
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: 18px;
  color: #4a2c34;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 400;
  
  &::before {
    content: '';
    width: 30px;
    height: 1px;
    background: #C9A86C;
  }
  
  svg {
    color: #C9A86C;
  }
`,ez=k.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({theme:e})=>e.spacing.lg};
  margin-bottom: ${({theme:e})=>e.spacing.lg};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`,tz=k.div`
  background: linear-gradient(145deg, #f5ebe6 0%, #ede3dc 100%);
  border-radius: 20px;
  padding: 30px;
  margin-bottom: 30px;
  border: 1px solid rgba(201, 168, 108, 0.2);
`,xi=k.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid rgba(201, 168, 108, 0.2);
  
  &:last-child {
    border-bottom: none;
  }
`,_i=k.span`
  font-family: ${({theme:e})=>e.fonts.body};
  font-size: 14px;
  color: #8b6b6b;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`,wi=k.span`
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: 18px;
  font-weight: 400;
  color: #4a2c34;
`,nz=k(J.div)`
  text-align: center;
  padding: 40px 20px;
`,iz=k(J.div)`
  width: 120px;
  height: 120px;
  margin: 0 auto 30px;
  background: linear-gradient(135deg, #7a4a5a 0%, #5a3545 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  position: relative;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
    border: 3px solid #C9A86C;
  }
  
  &::before {
    top: -8px;
    left: -8px;
    border-right: none;
    border-bottom: none;
  }
  
  &::after {
    bottom: -8px;
    right: -8px;
    border-left: none;
    border-top: none;
  }
`,rz=k.h2`
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: 36px;
  color: #4a2c34;
  margin-bottom: 16px;
  font-weight: 400;
`,oz=k.p`
  font-family: ${({theme:e})=>e.fonts.body};
  font-size: 16px;
  color: #6b5055;
  margin-bottom: 30px;
  line-height: 1.7;
`,sz=k.div`
  background: linear-gradient(145deg, #f5ebe6 0%, #ede3dc 100%);
  padding: 25px;
  border-radius: 15px;
  margin-bottom: 30px;
  border: 1px solid rgba(201, 168, 108, 0.3);
  
  span {
    display: block;
    font-family: ${({theme:e})=>e.fonts.body};
    font-size: 12px;
    color: #8b6b6b;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    margin-bottom: 10px;
  }
  
  strong {
    font-family: ${({theme:e})=>e.fonts.heading};
    font-size: 28px;
    color: #C9A86C;
    font-weight: 400;
  }
`,az=k.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 40px;
`,Ac=k.button`
  padding: 16px 36px;
  font-family: ${({theme:e})=>e.fonts.body};
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  ${({$variant:e})=>e==="primary"?`
    background: linear-gradient(135deg, #7a4a5a 0%, #5a3545 100%);
    border: none;
    color: #fff;
    box-shadow: 0 6px 20px rgba(122, 74, 90, 0.3);
    
    &:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 10px 30px rgba(122, 74, 90, 0.4);
    }
    
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `:`
    background: transparent;
    border: 2px solid #d4c4bc;
    color: #7a4a5a;
    
    &:hover {
      border-color: #7a4a5a;
      background: rgba(122, 74, 90, 0.05);
    }
  `}
`,lz=[{id:1,label:"Дата и время"},{id:2,label:"Детали"},{id:3,label:"Подтверждение"}],uz=["12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","18:00","18:30","19:00","19:30","20:00","20:30","21:00","21:30"],cz=["Пн","Вт","Ср","Чт","Пт","Сб","Вс"],dz=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],fz=()=>{const[e,t]=E.useState(1),[n,r]=E.useState(!1),[o,a]=E.useState(new Date),[l,c]=E.useState({date:"",time:"",guests:2,name:"",phone:"",email:"",notes:""}),f=new Date;f.setHours(0,0,0,0);const h=y=>{const w=y.getFullYear(),z=y.getMonth(),R=new Date(w,z,1),I=new Date(w,z+1,0).getDate();let $=R.getDay()-1;$<0&&($=6);const W=[];for(let G=0;G<$;G++)W.push(null);for(let G=1;G<=I;G++)W.push(G);return W},v=y=>new Date(o.getFullYear(),o.getMonth(),y)<f,g=y=>new Date(o.getFullYear(),o.getMonth(),y).toDateString()===f.toDateString(),x=()=>l.date?new Date(l.date).toLocaleDateString("ru-RU",{weekday:"long",day:"numeric",month:"long"}):"",b=y=>{const w=new Date(o.getFullYear(),o.getMonth(),y);c(z=>({...z,date:w.toISOString().split("T")[0]}))},S=()=>{e<3?t(y=>y+1):r(!0)},P=()=>{e>1&&t(y=>y-1)},j=()=>{switch(e){case 1:return l.date&&l.time&&l.guests>0;case 2:return l.name&&l.phone&&l.email;default:return!0}},C=()=>`BP-${Date.now().toString(36).toUpperCase()}`;return m.jsxs(m.Fragment,{children:[m.jsx(R3,{children:m.jsxs(I3,{children:[m.jsx(O3,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},children:"Бронирование Столика"}),m.jsx(D3,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.1},children:"Забронируйте столик за 3 простых шага"})]})}),m.jsx($3,{children:m.jsx(N3,{children:n?m.jsx(ov,{children:m.jsxs(nz,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.5},children:[m.jsx(iz,{initial:{scale:0},animate:{scale:1},transition:{delay:.2,type:"spring",stiffness:200},children:m.jsx(T0,{size:50})}),m.jsx(rz,{children:"Бронь подтверждена!"}),m.jsxs(oz,{children:["Мы отправили детали бронирования на ваш email. Ждём вас ",x()," в ",l.time,"!"]}),m.jsxs(sz,{children:[m.jsx("span",{children:"Номер бронирования"}),m.jsx("strong",{children:C()})]}),m.jsx(Ac,{as:"a",href:"/",$variant:"primary",style:{justifyContent:"center",textDecoration:"none"},children:"Вернуться на главную"})]})}):m.jsxs(m.Fragment,{children:[m.jsx(B3,{children:lz.map(y=>m.jsx(F3,{$active:e===y.id,$completed:e>y.id,children:m.jsxs(U3,{children:[m.jsx(V3,{$active:e===y.id,$completed:e>y.id,children:e>y.id?m.jsx(T0,{size:20}):y.id}),m.jsx(Z3,{$active:e===y.id,children:y.label})]})},y.id))}),m.jsx(Zi,{mode:"wait",children:m.jsxs(ov,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},transition:{duration:.3},children:[e===1&&m.jsxs(m.Fragment,{children:[m.jsx(jc,{children:"Выберите дату и время"}),m.jsxs(Mc,{children:[m.jsx(fL,{size:20}),"Дата"]}),m.jsxs(H3,{children:[m.jsx(sv,{onClick:()=>a(new Date(o.getFullYear(),o.getMonth()-1)),disabled:o.getMonth()===f.getMonth()&&o.getFullYear()===f.getFullYear(),children:m.jsx(tf,{size:20})}),m.jsxs(G3,{children:[dz[o.getMonth()]," ",o.getFullYear()]}),m.jsx(sv,{onClick:()=>a(new Date(o.getFullYear(),o.getMonth()+1)),children:m.jsx(ms,{size:20})})]}),m.jsxs(W3,{children:[cz.map(y=>m.jsx(K3,{children:y},y)),h(o).map((y,w)=>m.jsx("div",{children:y&&m.jsx(Y3,{$selected:l.date===new Date(o.getFullYear(),o.getMonth(),y).toISOString().split("T")[0],$disabled:v(y),$today:g(y),onClick:()=>!v(y)&&b(y),disabled:v(y),children:y})},w))]}),m.jsxs(Mc,{children:[m.jsx(jh,{size:20}),"Время"]}),m.jsx(X3,{children:uz.map(y=>m.jsx(Q3,{$selected:l.time===y,$disabled:!1,onClick:()=>c(w=>({...w,time:y})),children:y},y))}),m.jsxs(Mc,{children:[m.jsx(wL,{size:20}),"Количество гостей"]}),m.jsxs(q3,{children:[m.jsx(av,{onClick:()=>c(y=>({...y,guests:Math.max(1,y.guests-1)})),$disabled:l.guests<=1,disabled:l.guests<=1,children:"−"}),m.jsxs(J3,{children:[m.jsx("span",{children:l.guests}),m.jsx("small",{children:l.guests===1?"гость":l.guests<5?"гостя":"гостей"})]}),m.jsx(av,{onClick:()=>c(y=>({...y,guests:Math.min(8,y.guests+1)})),$disabled:l.guests>=8,disabled:l.guests>=8,children:"+"})]})]}),e===2&&m.jsxs(m.Fragment,{children:[m.jsx(jc,{children:"Введите ваши данные"}),m.jsxs(ez,{children:[m.jsx(Ba,{label:"Имя",placeholder:"Ваше имя",value:l.name,onChange:y=>c(w=>({...w,name:y.target.value})),icon:m.jsx(_L,{size:20})}),m.jsx(Ba,{label:"Телефон",placeholder:"+7 (___) ___-__-__",value:l.phone,onChange:y=>c(w=>({...w,phone:y.target.value})),icon:m.jsx(iu,{size:20})})]}),m.jsx("div",{style:{marginBottom:"1.5rem"},children:m.jsx(Ba,{label:"Email",type:"email",placeholder:"email@example.com",value:l.email,onChange:y=>c(w=>({...w,email:y.target.value})),icon:m.jsx(Mh,{size:20})})}),m.jsx($1,{label:"Особые пожелания",placeholder:"Столик у окна, детский стульчик, аллергии...",value:l.notes,onChange:y=>c(w=>({...w,notes:y.target.value}))})]}),e===3&&m.jsxs(m.Fragment,{children:[m.jsx(jc,{children:"Подтверждение брони"}),m.jsxs(tz,{children:[m.jsxs(xi,{children:[m.jsx(_i,{children:"Дата"}),m.jsx(wi,{children:x()})]}),m.jsxs(xi,{children:[m.jsx(_i,{children:"Время"}),m.jsx(wi,{children:l.time})]}),m.jsxs(xi,{children:[m.jsx(_i,{children:"Гостей"}),m.jsx(wi,{children:l.guests})]}),m.jsxs(xi,{children:[m.jsx(_i,{children:"Имя"}),m.jsx(wi,{children:l.name})]}),m.jsxs(xi,{children:[m.jsx(_i,{children:"Телефон"}),m.jsx(wi,{children:l.phone})]}),m.jsxs(xi,{children:[m.jsx(_i,{children:"Email"}),m.jsx(wi,{children:l.email})]}),l.notes&&m.jsxs(xi,{children:[m.jsx(_i,{children:"Пожелания"}),m.jsx(wi,{children:l.notes})]})]})]}),m.jsxs(az,{children:[e>1?m.jsxs(Ac,{$variant:"secondary",onClick:P,children:[m.jsx(tf,{size:18}),"Назад"]}):m.jsx("div",{}),m.jsxs(Ac,{$variant:"primary",onClick:S,disabled:!j(),children:[e===3?"Подтвердить бронь":"Далее",e<3&&m.jsx(ms,{size:18})]})]})]},e)})]})})})]})};function N1(e,t){const n=E.useRef(t);E.useEffect(function(){t!==n.current&&e.attributionControl!=null&&(n.current!=null&&e.attributionControl.removeAttribution(n.current),t!=null&&e.attributionControl.addAttribution(t)),n.current=t},[e,t])}const hz=1;function pz(e){return Object.freeze({__version:hz,map:e})}function mz(e,t){return Object.freeze({...e,...t})}const B1=E.createContext(null),F1=B1.Provider;function Rh(){const e=E.useContext(B1);if(e==null)throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return e}function gz(e){function t(n,r){const{instance:o,context:a}=e(n).current;return E.useImperativeHandle(r,()=>o),n.children==null?null:Ke.createElement(F1,{value:a},n.children)}return E.forwardRef(t)}function vz(e){function t(n,r){const[o,a]=E.useState(!1),{instance:l}=e(n,a).current;E.useImperativeHandle(r,()=>l),E.useEffect(function(){o&&l.update()},[l,o,n.children]);const c=l._contentNode;return c?Cx.createPortal(n.children,c):null}return E.forwardRef(t)}function yz(e){function t(n,r){const{instance:o}=e(n).current;return E.useImperativeHandle(r,()=>o),null}return E.forwardRef(t)}function V1(e,t){const n=E.useRef();E.useEffect(function(){return t!=null&&e.instance.on(t),n.current=t,function(){n.current!=null&&e.instance.off(n.current),n.current=null}},[e,t])}function Ih(e,t){const n=e.pane??t.pane;return n?{...e,pane:n}:e}function xz(e,t){return function(r,o){const a=Rh(),l=e(Ih(r,a),a);return N1(a.map,r.attribution),V1(l.current,r.eventHandlers),t(l.current,a,r,o),l}}var rf={exports:{}};/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */(function(e,t){(function(n,r){r(t)})(mb,function(n){var r="1.9.4";function o(i){var s,u,d,p;for(u=1,d=arguments.length;u<d;u++){p=arguments[u];for(s in p)i[s]=p[s]}return i}var a=Object.create||function(){function i(){}return function(s){return i.prototype=s,new i}}();function l(i,s){var u=Array.prototype.slice;if(i.bind)return i.bind.apply(i,u.call(arguments,1));var d=u.call(arguments,2);return function(){return i.apply(s,d.length?d.concat(u.call(arguments)):arguments)}}var c=0;function f(i){return"_leaflet_id"in i||(i._leaflet_id=++c),i._leaflet_id}function h(i,s,u){var d,p,_,T;return T=function(){d=!1,p&&(_.apply(u,p),p=!1)},_=function(){d?p=arguments:(i.apply(u,arguments),setTimeout(T,s),d=!0)},_}function v(i,s,u){var d=s[1],p=s[0],_=d-p;return i===d&&u?i:((i-p)%_+_)%_+p}function g(){return!1}function x(i,s){if(s===!1)return i;var u=Math.pow(10,s===void 0?6:s);return Math.round(i*u)/u}function b(i){return i.trim?i.trim():i.replace(/^\s+|\s+$/g,"")}function S(i){return b(i).split(/\s+/)}function P(i,s){Object.prototype.hasOwnProperty.call(i,"options")||(i.options=i.options?a(i.options):{});for(var u in s)i.options[u]=s[u];return i.options}function j(i,s,u){var d=[];for(var p in i)d.push(encodeURIComponent(u?p.toUpperCase():p)+"="+encodeURIComponent(i[p]));return(!s||s.indexOf("?")===-1?"?":"&")+d.join("&")}var C=/\{ *([\w_ -]+) *\}/g;function y(i,s){return i.replace(C,function(u,d){var p=s[d];if(p===void 0)throw new Error("No value provided for variable "+u);return typeof p=="function"&&(p=p(s)),p})}var w=Array.isArray||function(i){return Object.prototype.toString.call(i)==="[object Array]"};function z(i,s){for(var u=0;u<i.length;u++)if(i[u]===s)return u;return-1}var R="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function O(i){return window["webkit"+i]||window["moz"+i]||window["ms"+i]}var I=0;function $(i){var s=+new Date,u=Math.max(0,16-(s-I));return I=s+u,window.setTimeout(i,u)}var W=window.requestAnimationFrame||O("RequestAnimationFrame")||$,G=window.cancelAnimationFrame||O("CancelAnimationFrame")||O("CancelRequestAnimationFrame")||function(i){window.clearTimeout(i)};function ae(i,s,u){if(u&&W===$)i.call(s);else return W.call(window,l(i,s))}function de(i){i&&G.call(window,i)}var Ve={__proto__:null,extend:o,create:a,bind:l,get lastId(){return c},stamp:f,throttle:h,wrapNum:v,falseFn:g,formatNum:x,trim:b,splitWords:S,setOptions:P,getParamString:j,template:y,isArray:w,indexOf:z,emptyImageUrl:R,requestFn:W,cancelFn:G,requestAnimFrame:ae,cancelAnimFrame:de};function he(){}he.extend=function(i){var s=function(){P(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},u=s.__super__=this.prototype,d=a(u);d.constructor=s,s.prototype=d;for(var p in this)Object.prototype.hasOwnProperty.call(this,p)&&p!=="prototype"&&p!=="__super__"&&(s[p]=this[p]);return i.statics&&o(s,i.statics),i.includes&&(Mt(i.includes),o.apply(null,[d].concat(i.includes))),o(d,i),delete d.statics,delete d.includes,d.options&&(d.options=u.options?a(u.options):{},o(d.options,i.options)),d._initHooks=[],d.callInitHooks=function(){if(!this._initHooksCalled){u.callInitHooks&&u.callInitHooks.call(this),this._initHooksCalled=!0;for(var _=0,T=d._initHooks.length;_<T;_++)d._initHooks[_].call(this)}},s},he.include=function(i){var s=this.prototype.options;return o(this.prototype,i),i.options&&(this.prototype.options=s,this.mergeOptions(i.options)),this},he.mergeOptions=function(i){return o(this.prototype.options,i),this},he.addInitHook=function(i){var s=Array.prototype.slice.call(arguments,1),u=typeof i=="function"?i:function(){this[i].apply(this,s)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(u),this};function Mt(i){if(!(typeof L>"u"||!L||!L.Mixin)){i=w(i)?i:[i];for(var s=0;s<i.length;s++)i[s]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var oe={on:function(i,s,u){if(typeof i=="object")for(var d in i)this._on(d,i[d],s);else{i=S(i);for(var p=0,_=i.length;p<_;p++)this._on(i[p],s,u)}return this},off:function(i,s,u){if(!arguments.length)delete this._events;else if(typeof i=="object")for(var d in i)this._off(d,i[d],s);else{i=S(i);for(var p=arguments.length===1,_=0,T=i.length;_<T;_++)p?this._off(i[_]):this._off(i[_],s,u)}return this},_on:function(i,s,u,d){if(typeof s!="function"){console.warn("wrong listener type: "+typeof s);return}if(this._listens(i,s,u)===!1){u===this&&(u=void 0);var p={fn:s,ctx:u};d&&(p.once=!0),this._events=this._events||{},this._events[i]=this._events[i]||[],this._events[i].push(p)}},_off:function(i,s,u){var d,p,_;if(this._events&&(d=this._events[i],!!d)){if(arguments.length===1){if(this._firingCount)for(p=0,_=d.length;p<_;p++)d[p].fn=g;delete this._events[i];return}if(typeof s!="function"){console.warn("wrong listener type: "+typeof s);return}var T=this._listens(i,s,u);if(T!==!1){var M=d[T];this._firingCount&&(M.fn=g,this._events[i]=d=d.slice()),d.splice(T,1)}}},fire:function(i,s,u){if(!this.listens(i,u))return this;var d=o({},s,{type:i,target:this,sourceTarget:s&&s.sourceTarget||this});if(this._events){var p=this._events[i];if(p){this._firingCount=this._firingCount+1||1;for(var _=0,T=p.length;_<T;_++){var M=p[_],A=M.fn;M.once&&this.off(i,A,M.ctx),A.call(M.ctx||this,d)}this._firingCount--}}return u&&this._propagateEvent(d),this},listens:function(i,s,u,d){typeof i!="string"&&console.warn('"string" type argument expected');var p=s;typeof s!="function"&&(d=!!s,p=void 0,u=void 0);var _=this._events&&this._events[i];if(_&&_.length&&this._listens(i,p,u)!==!1)return!0;if(d){for(var T in this._eventParents)if(this._eventParents[T].listens(i,s,u,d))return!0}return!1},_listens:function(i,s,u){if(!this._events)return!1;var d=this._events[i]||[];if(!s)return!!d.length;u===this&&(u=void 0);for(var p=0,_=d.length;p<_;p++)if(d[p].fn===s&&d[p].ctx===u)return p;return!1},once:function(i,s,u){if(typeof i=="object")for(var d in i)this._on(d,i[d],s,!0);else{i=S(i);for(var p=0,_=i.length;p<_;p++)this._on(i[p],s,u,!0)}return this},addEventParent:function(i){return this._eventParents=this._eventParents||{},this._eventParents[f(i)]=i,this},removeEventParent:function(i){return this._eventParents&&delete this._eventParents[f(i)],this},_propagateEvent:function(i){for(var s in this._eventParents)this._eventParents[s].fire(i.type,o({layer:i.target,propagatedFrom:i.target},i),!0)}};oe.addEventListener=oe.on,oe.removeEventListener=oe.clearAllEventListeners=oe.off,oe.addOneTimeEventListener=oe.once,oe.fireEvent=oe.fire,oe.hasEventListeners=oe.listens;var ze=he.extend(oe);function D(i,s,u){this.x=u?Math.round(i):i,this.y=u?Math.round(s):s}var H=Math.trunc||function(i){return i>0?Math.floor(i):Math.ceil(i)};D.prototype={clone:function(){return new D(this.x,this.y)},add:function(i){return this.clone()._add(F(i))},_add:function(i){return this.x+=i.x,this.y+=i.y,this},subtract:function(i){return this.clone()._subtract(F(i))},_subtract:function(i){return this.x-=i.x,this.y-=i.y,this},divideBy:function(i){return this.clone()._divideBy(i)},_divideBy:function(i){return this.x/=i,this.y/=i,this},multiplyBy:function(i){return this.clone()._multiplyBy(i)},_multiplyBy:function(i){return this.x*=i,this.y*=i,this},scaleBy:function(i){return new D(this.x*i.x,this.y*i.y)},unscaleBy:function(i){return new D(this.x/i.x,this.y/i.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=H(this.x),this.y=H(this.y),this},distanceTo:function(i){i=F(i);var s=i.x-this.x,u=i.y-this.y;return Math.sqrt(s*s+u*u)},equals:function(i){return i=F(i),i.x===this.x&&i.y===this.y},contains:function(i){return i=F(i),Math.abs(i.x)<=Math.abs(this.x)&&Math.abs(i.y)<=Math.abs(this.y)},toString:function(){return"Point("+x(this.x)+", "+x(this.y)+")"}};function F(i,s,u){return i instanceof D?i:w(i)?new D(i[0],i[1]):i==null?i:typeof i=="object"&&"x"in i&&"y"in i?new D(i.x,i.y):new D(i,s,u)}function V(i,s){if(i)for(var u=s?[i,s]:i,d=0,p=u.length;d<p;d++)this.extend(u[d])}V.prototype={extend:function(i){var s,u;if(!i)return this;if(i instanceof D||typeof i[0]=="number"||"x"in i)s=u=F(i);else if(i=q(i),s=i.min,u=i.max,!s||!u)return this;return!this.min&&!this.max?(this.min=s.clone(),this.max=u.clone()):(this.min.x=Math.min(s.x,this.min.x),this.max.x=Math.max(u.x,this.max.x),this.min.y=Math.min(s.y,this.min.y),this.max.y=Math.max(u.y,this.max.y)),this},getCenter:function(i){return F((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,i)},getBottomLeft:function(){return F(this.min.x,this.max.y)},getTopRight:function(){return F(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(i){var s,u;return typeof i[0]=="number"||i instanceof D?i=F(i):i=q(i),i instanceof V?(s=i.min,u=i.max):s=u=i,s.x>=this.min.x&&u.x<=this.max.x&&s.y>=this.min.y&&u.y<=this.max.y},intersects:function(i){i=q(i);var s=this.min,u=this.max,d=i.min,p=i.max,_=p.x>=s.x&&d.x<=u.x,T=p.y>=s.y&&d.y<=u.y;return _&&T},overlaps:function(i){i=q(i);var s=this.min,u=this.max,d=i.min,p=i.max,_=p.x>s.x&&d.x<u.x,T=p.y>s.y&&d.y<u.y;return _&&T},isValid:function(){return!!(this.min&&this.max)},pad:function(i){var s=this.min,u=this.max,d=Math.abs(s.x-u.x)*i,p=Math.abs(s.y-u.y)*i;return q(F(s.x-d,s.y-p),F(u.x+d,u.y+p))},equals:function(i){return i?(i=q(i),this.min.equals(i.getTopLeft())&&this.max.equals(i.getBottomRight())):!1}};function q(i,s){return!i||i instanceof V?i:new V(i,s)}function xe(i,s){if(i)for(var u=s?[i,s]:i,d=0,p=u.length;d<p;d++)this.extend(u[d])}xe.prototype={extend:function(i){var s=this._southWest,u=this._northEast,d,p;if(i instanceof te)d=i,p=i;else if(i instanceof xe){if(d=i._southWest,p=i._northEast,!d||!p)return this}else return i?this.extend(Y(i)||le(i)):this;return!s&&!u?(this._southWest=new te(d.lat,d.lng),this._northEast=new te(p.lat,p.lng)):(s.lat=Math.min(d.lat,s.lat),s.lng=Math.min(d.lng,s.lng),u.lat=Math.max(p.lat,u.lat),u.lng=Math.max(p.lng,u.lng)),this},pad:function(i){var s=this._southWest,u=this._northEast,d=Math.abs(s.lat-u.lat)*i,p=Math.abs(s.lng-u.lng)*i;return new xe(new te(s.lat-d,s.lng-p),new te(u.lat+d,u.lng+p))},getCenter:function(){return new te((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new te(this.getNorth(),this.getWest())},getSouthEast:function(){return new te(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(i){typeof i[0]=="number"||i instanceof te||"lat"in i?i=Y(i):i=le(i);var s=this._southWest,u=this._northEast,d,p;return i instanceof xe?(d=i.getSouthWest(),p=i.getNorthEast()):d=p=i,d.lat>=s.lat&&p.lat<=u.lat&&d.lng>=s.lng&&p.lng<=u.lng},intersects:function(i){i=le(i);var s=this._southWest,u=this._northEast,d=i.getSouthWest(),p=i.getNorthEast(),_=p.lat>=s.lat&&d.lat<=u.lat,T=p.lng>=s.lng&&d.lng<=u.lng;return _&&T},overlaps:function(i){i=le(i);var s=this._southWest,u=this._northEast,d=i.getSouthWest(),p=i.getNorthEast(),_=p.lat>s.lat&&d.lat<u.lat,T=p.lng>s.lng&&d.lng<u.lng;return _&&T},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(i,s){return i?(i=le(i),this._southWest.equals(i.getSouthWest(),s)&&this._northEast.equals(i.getNorthEast(),s)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function le(i,s){return i instanceof xe?i:new xe(i,s)}function te(i,s,u){if(isNaN(i)||isNaN(s))throw new Error("Invalid LatLng object: ("+i+", "+s+")");this.lat=+i,this.lng=+s,u!==void 0&&(this.alt=+u)}te.prototype={equals:function(i,s){if(!i)return!1;i=Y(i);var u=Math.max(Math.abs(this.lat-i.lat),Math.abs(this.lng-i.lng));return u<=(s===void 0?1e-9:s)},toString:function(i){return"LatLng("+x(this.lat,i)+", "+x(this.lng,i)+")"},distanceTo:function(i){return tt.distance(this,Y(i))},wrap:function(){return tt.wrapLatLng(this)},toBounds:function(i){var s=180*i/40075017,u=s/Math.cos(Math.PI/180*this.lat);return le([this.lat-s,this.lng-u],[this.lat+s,this.lng+u])},clone:function(){return new te(this.lat,this.lng,this.alt)}};function Y(i,s,u){return i instanceof te?i:w(i)&&typeof i[0]!="object"?i.length===3?new te(i[0],i[1],i[2]):i.length===2?new te(i[0],i[1]):null:i==null?i:typeof i=="object"&&"lat"in i?new te(i.lat,"lng"in i?i.lng:i.lon,i.alt):s===void 0?null:new te(i,s,u)}var je={latLngToPoint:function(i,s){var u=this.projection.project(i),d=this.scale(s);return this.transformation._transform(u,d)},pointToLatLng:function(i,s){var u=this.scale(s),d=this.transformation.untransform(i,u);return this.projection.unproject(d)},project:function(i){return this.projection.project(i)},unproject:function(i){return this.projection.unproject(i)},scale:function(i){return 256*Math.pow(2,i)},zoom:function(i){return Math.log(i/256)/Math.LN2},getProjectedBounds:function(i){if(this.infinite)return null;var s=this.projection.bounds,u=this.scale(i),d=this.transformation.transform(s.min,u),p=this.transformation.transform(s.max,u);return new V(d,p)},infinite:!1,wrapLatLng:function(i){var s=this.wrapLng?v(i.lng,this.wrapLng,!0):i.lng,u=this.wrapLat?v(i.lat,this.wrapLat,!0):i.lat,d=i.alt;return new te(u,s,d)},wrapLatLngBounds:function(i){var s=i.getCenter(),u=this.wrapLatLng(s),d=s.lat-u.lat,p=s.lng-u.lng;if(d===0&&p===0)return i;var _=i.getSouthWest(),T=i.getNorthEast(),M=new te(_.lat-d,_.lng-p),A=new te(T.lat-d,T.lng-p);return new xe(M,A)}},tt=o({},je,{wrapLng:[-180,180],R:6371e3,distance:function(i,s){var u=Math.PI/180,d=i.lat*u,p=s.lat*u,_=Math.sin((s.lat-i.lat)*u/2),T=Math.sin((s.lng-i.lng)*u/2),M=_*_+Math.cos(d)*Math.cos(p)*T*T,A=2*Math.atan2(Math.sqrt(M),Math.sqrt(1-M));return this.R*A}}),mt=6378137,At={R:mt,MAX_LATITUDE:85.0511287798,project:function(i){var s=Math.PI/180,u=this.MAX_LATITUDE,d=Math.max(Math.min(u,i.lat),-u),p=Math.sin(d*s);return new D(this.R*i.lng*s,this.R*Math.log((1+p)/(1-p))/2)},unproject:function(i){var s=180/Math.PI;return new te((2*Math.atan(Math.exp(i.y/this.R))-Math.PI/2)*s,i.x*s/this.R)},bounds:function(){var i=mt*Math.PI;return new V([-i,-i],[i,i])}()};function nt(i,s,u,d){if(w(i)){this._a=i[0],this._b=i[1],this._c=i[2],this._d=i[3];return}this._a=i,this._b=s,this._c=u,this._d=d}nt.prototype={transform:function(i,s){return this._transform(i.clone(),s)},_transform:function(i,s){return s=s||1,i.x=s*(this._a*i.x+this._b),i.y=s*(this._c*i.y+this._d),i},untransform:function(i,s){return s=s||1,new D((i.x/s-this._b)/this._a,(i.y/s-this._d)/this._c)}};function lt(i,s,u,d){return new nt(i,s,u,d)}var ru=o({},tt,{code:"EPSG:3857",projection:At,transformation:function(){var i=.5/(Math.PI*At.R);return lt(i,.5,-i,.5)}()}),U1=o({},ru,{code:"EPSG:900913"});function $h(i){return document.createElementNS("http://www.w3.org/2000/svg",i)}function Nh(i,s){var u="",d,p,_,T,M,A;for(d=0,_=i.length;d<_;d++){for(M=i[d],p=0,T=M.length;p<T;p++)A=M[p],u+=(p?"L":"M")+A.x+" "+A.y;u+=s?K.svg?"z":"x":""}return u||"M0 0"}var ou=document.documentElement.style,Ts="ActiveXObject"in window,W1=Ts&&!document.addEventListener,Bh="msLaunchUri"in navigator&&!("documentMode"in document),su=rn("webkit"),Fh=rn("android"),Vh=rn("android 2")||rn("android 3"),H1=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),G1=Fh&&rn("Google")&&H1<537&&!("AudioNode"in window),au=!!window.opera,Zh=!Bh&&rn("chrome"),Uh=rn("gecko")&&!su&&!au&&!Ts,K1=!Zh&&rn("safari"),Wh=rn("phantom"),Hh="OTransition"in ou,Y1=navigator.platform.indexOf("Win")===0,Gh=Ts&&"transition"in ou,lu="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!Vh,Kh="MozPerspective"in ou,X1=!window.L_DISABLE_3D&&(Gh||lu||Kh)&&!Hh&&!Wh,Xr=typeof orientation<"u"||rn("mobile"),Q1=Xr&&su,q1=Xr&&lu,Yh=!window.PointerEvent&&window.MSPointerEvent,Xh=!!(window.PointerEvent||Yh),Qh="ontouchstart"in window||!!window.TouchEvent,J1=!window.L_NO_TOUCH&&(Qh||Xh),ew=Xr&&au,tw=Xr&&Uh,nw=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,iw=function(){var i=!1;try{var s=Object.defineProperty({},"passive",{get:function(){i=!0}});window.addEventListener("testPassiveEventSupport",g,s),window.removeEventListener("testPassiveEventSupport",g,s)}catch{}return i}(),rw=function(){return!!document.createElement("canvas").getContext}(),uu=!!(document.createElementNS&&$h("svg").createSVGRect),ow=!!uu&&function(){var i=document.createElement("div");return i.innerHTML="<svg/>",(i.firstChild&&i.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"}(),sw=!uu&&function(){try{var i=document.createElement("div");i.innerHTML='<v:shape adj="1"/>';var s=i.firstChild;return s.style.behavior="url(#default#VML)",s&&typeof s.adj=="object"}catch{return!1}}(),aw=navigator.platform.indexOf("Mac")===0,lw=navigator.platform.indexOf("Linux")===0;function rn(i){return navigator.userAgent.toLowerCase().indexOf(i)>=0}var K={ie:Ts,ielt9:W1,edge:Bh,webkit:su,android:Fh,android23:Vh,androidStock:G1,opera:au,chrome:Zh,gecko:Uh,safari:K1,phantom:Wh,opera12:Hh,win:Y1,ie3d:Gh,webkit3d:lu,gecko3d:Kh,any3d:X1,mobile:Xr,mobileWebkit:Q1,mobileWebkit3d:q1,msPointer:Yh,pointer:Xh,touch:J1,touchNative:Qh,mobileOpera:ew,mobileGecko:tw,retina:nw,passiveEvents:iw,canvas:rw,svg:uu,vml:sw,inlineSvg:ow,mac:aw,linux:lw},qh=K.msPointer?"MSPointerDown":"pointerdown",Jh=K.msPointer?"MSPointerMove":"pointermove",ep=K.msPointer?"MSPointerUp":"pointerup",tp=K.msPointer?"MSPointerCancel":"pointercancel",cu={touchstart:qh,touchmove:Jh,touchend:ep,touchcancel:tp},np={touchstart:pw,touchmove:Ls,touchend:Ls,touchcancel:Ls},Qi={},ip=!1;function uw(i,s,u){return s==="touchstart"&&hw(),np[s]?(u=np[s].bind(this,u),i.addEventListener(cu[s],u,!1),u):(console.warn("wrong event specified:",s),g)}function cw(i,s,u){if(!cu[s]){console.warn("wrong event specified:",s);return}i.removeEventListener(cu[s],u,!1)}function dw(i){Qi[i.pointerId]=i}function fw(i){Qi[i.pointerId]&&(Qi[i.pointerId]=i)}function rp(i){delete Qi[i.pointerId]}function hw(){ip||(document.addEventListener(qh,dw,!0),document.addEventListener(Jh,fw,!0),document.addEventListener(ep,rp,!0),document.addEventListener(tp,rp,!0),ip=!0)}function Ls(i,s){if(s.pointerType!==(s.MSPOINTER_TYPE_MOUSE||"mouse")){s.touches=[];for(var u in Qi)s.touches.push(Qi[u]);s.changedTouches=[s],i(s)}}function pw(i,s){s.MSPOINTER_TYPE_TOUCH&&s.pointerType===s.MSPOINTER_TYPE_TOUCH&&Qe(s),Ls(i,s)}function mw(i){var s={},u,d;for(d in i)u=i[d],s[d]=u&&u.bind?u.bind(i):u;return i=s,s.type="dblclick",s.detail=2,s.isTrusted=!1,s._simulated=!0,s}var gw=200;function vw(i,s){i.addEventListener("dblclick",s);var u=0,d;function p(_){if(_.detail!==1){d=_.detail;return}if(!(_.pointerType==="mouse"||_.sourceCapabilities&&!_.sourceCapabilities.firesTouchEvents)){var T=up(_);if(!(T.some(function(A){return A instanceof HTMLLabelElement&&A.attributes.for})&&!T.some(function(A){return A instanceof HTMLInputElement||A instanceof HTMLSelectElement}))){var M=Date.now();M-u<=gw?(d++,d===2&&s(mw(_))):d=1,u=M}}}return i.addEventListener("click",p),{dblclick:s,simDblclick:p}}function yw(i,s){i.removeEventListener("dblclick",s.dblclick),i.removeEventListener("click",s.simDblclick)}var du=js(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),Qr=js(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),op=Qr==="webkitTransition"||Qr==="OTransition"?Qr+"End":"transitionend";function sp(i){return typeof i=="string"?document.getElementById(i):i}function qr(i,s){var u=i.style[s]||i.currentStyle&&i.currentStyle[s];if((!u||u==="auto")&&document.defaultView){var d=document.defaultView.getComputedStyle(i,null);u=d?d[s]:null}return u==="auto"?null:u}function fe(i,s,u){var d=document.createElement(i);return d.className=s||"",u&&u.appendChild(d),d}function Pe(i){var s=i.parentNode;s&&s.removeChild(i)}function Es(i){for(;i.firstChild;)i.removeChild(i.firstChild)}function qi(i){var s=i.parentNode;s&&s.lastChild!==i&&s.appendChild(i)}function Ji(i){var s=i.parentNode;s&&s.firstChild!==i&&s.insertBefore(i,s.firstChild)}function fu(i,s){if(i.classList!==void 0)return i.classList.contains(s);var u=zs(i);return u.length>0&&new RegExp("(^|\\s)"+s+"(\\s|$)").test(u)}function ne(i,s){if(i.classList!==void 0)for(var u=S(s),d=0,p=u.length;d<p;d++)i.classList.add(u[d]);else if(!fu(i,s)){var _=zs(i);hu(i,(_?_+" ":"")+s)}}function Ae(i,s){i.classList!==void 0?i.classList.remove(s):hu(i,b((" "+zs(i)+" ").replace(" "+s+" "," ")))}function hu(i,s){i.className.baseVal===void 0?i.className=s:i.className.baseVal=s}function zs(i){return i.correspondingElement&&(i=i.correspondingElement),i.className.baseVal===void 0?i.className:i.className.baseVal}function Rt(i,s){"opacity"in i.style?i.style.opacity=s:"filter"in i.style&&xw(i,s)}function xw(i,s){var u=!1,d="DXImageTransform.Microsoft.Alpha";try{u=i.filters.item(d)}catch{if(s===1)return}s=Math.round(s*100),u?(u.Enabled=s!==100,u.Opacity=s):i.style.filter+=" progid:"+d+"(opacity="+s+")"}function js(i){for(var s=document.documentElement.style,u=0;u<i.length;u++)if(i[u]in s)return i[u];return!1}function hi(i,s,u){var d=s||new D(0,0);i.style[du]=(K.ie3d?"translate("+d.x+"px,"+d.y+"px)":"translate3d("+d.x+"px,"+d.y+"px,0)")+(u?" scale("+u+")":"")}function Oe(i,s){i._leaflet_pos=s,K.any3d?hi(i,s):(i.style.left=s.x+"px",i.style.top=s.y+"px")}function pi(i){return i._leaflet_pos||new D(0,0)}var Jr,eo,pu;if("onselectstart"in document)Jr=function(){ee(window,"selectstart",Qe)},eo=function(){ge(window,"selectstart",Qe)};else{var to=js(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);Jr=function(){if(to){var i=document.documentElement.style;pu=i[to],i[to]="none"}},eo=function(){to&&(document.documentElement.style[to]=pu,pu=void 0)}}function mu(){ee(window,"dragstart",Qe)}function gu(){ge(window,"dragstart",Qe)}var Ms,vu;function yu(i){for(;i.tabIndex===-1;)i=i.parentNode;i.style&&(As(),Ms=i,vu=i.style.outlineStyle,i.style.outlineStyle="none",ee(window,"keydown",As))}function As(){Ms&&(Ms.style.outlineStyle=vu,Ms=void 0,vu=void 0,ge(window,"keydown",As))}function ap(i){do i=i.parentNode;while((!i.offsetWidth||!i.offsetHeight)&&i!==document.body);return i}function xu(i){var s=i.getBoundingClientRect();return{x:s.width/i.offsetWidth||1,y:s.height/i.offsetHeight||1,boundingClientRect:s}}var _w={__proto__:null,TRANSFORM:du,TRANSITION:Qr,TRANSITION_END:op,get:sp,getStyle:qr,create:fe,remove:Pe,empty:Es,toFront:qi,toBack:Ji,hasClass:fu,addClass:ne,removeClass:Ae,setClass:hu,getClass:zs,setOpacity:Rt,testProp:js,setTransform:hi,setPosition:Oe,getPosition:pi,get disableTextSelection(){return Jr},get enableTextSelection(){return eo},disableImageDrag:mu,enableImageDrag:gu,preventOutline:yu,restoreOutline:As,getSizedParentNode:ap,getScale:xu};function ee(i,s,u,d){if(s&&typeof s=="object")for(var p in s)wu(i,p,s[p],u);else{s=S(s);for(var _=0,T=s.length;_<T;_++)wu(i,s[_],u,d)}return this}var on="_leaflet_events";function ge(i,s,u,d){if(arguments.length===1)lp(i),delete i[on];else if(s&&typeof s=="object")for(var p in s)bu(i,p,s[p],u);else if(s=S(s),arguments.length===2)lp(i,function(M){return z(s,M)!==-1});else for(var _=0,T=s.length;_<T;_++)bu(i,s[_],u,d);return this}function lp(i,s){for(var u in i[on]){var d=u.split(/\d/)[0];(!s||s(d))&&bu(i,d,null,null,u)}}var _u={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function wu(i,s,u,d){var p=s+f(u)+(d?"_"+f(d):"");if(i[on]&&i[on][p])return this;var _=function(M){return u.call(d||i,M||window.event)},T=_;!K.touchNative&&K.pointer&&s.indexOf("touch")===0?_=uw(i,s,_):K.touch&&s==="dblclick"?_=vw(i,_):"addEventListener"in i?s==="touchstart"||s==="touchmove"||s==="wheel"||s==="mousewheel"?i.addEventListener(_u[s]||s,_,K.passiveEvents?{passive:!1}:!1):s==="mouseenter"||s==="mouseleave"?(_=function(M){M=M||window.event,Cu(i,M)&&T(M)},i.addEventListener(_u[s],_,!1)):i.addEventListener(s,T,!1):i.attachEvent("on"+s,_),i[on]=i[on]||{},i[on][p]=_}function bu(i,s,u,d,p){p=p||s+f(u)+(d?"_"+f(d):"");var _=i[on]&&i[on][p];if(!_)return this;!K.touchNative&&K.pointer&&s.indexOf("touch")===0?cw(i,s,_):K.touch&&s==="dblclick"?yw(i,_):"removeEventListener"in i?i.removeEventListener(_u[s]||s,_,!1):i.detachEvent("on"+s,_),i[on][p]=null}function mi(i){return i.stopPropagation?i.stopPropagation():i.originalEvent?i.originalEvent._stopped=!0:i.cancelBubble=!0,this}function Su(i){return wu(i,"wheel",mi),this}function no(i){return ee(i,"mousedown touchstart dblclick contextmenu",mi),i._leaflet_disable_click=!0,this}function Qe(i){return i.preventDefault?i.preventDefault():i.returnValue=!1,this}function gi(i){return Qe(i),mi(i),this}function up(i){if(i.composedPath)return i.composedPath();for(var s=[],u=i.target;u;)s.push(u),u=u.parentNode;return s}function cp(i,s){if(!s)return new D(i.clientX,i.clientY);var u=xu(s),d=u.boundingClientRect;return new D((i.clientX-d.left)/u.x-s.clientLeft,(i.clientY-d.top)/u.y-s.clientTop)}var ww=K.linux&&K.chrome?window.devicePixelRatio:K.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function dp(i){return K.edge?i.wheelDeltaY/2:i.deltaY&&i.deltaMode===0?-i.deltaY/ww:i.deltaY&&i.deltaMode===1?-i.deltaY*20:i.deltaY&&i.deltaMode===2?-i.deltaY*60:i.deltaX||i.deltaZ?0:i.wheelDelta?(i.wheelDeltaY||i.wheelDelta)/2:i.detail&&Math.abs(i.detail)<32765?-i.detail*20:i.detail?i.detail/-32765*60:0}function Cu(i,s){var u=s.relatedTarget;if(!u)return!0;try{for(;u&&u!==i;)u=u.parentNode}catch{return!1}return u!==i}var bw={__proto__:null,on:ee,off:ge,stopPropagation:mi,disableScrollPropagation:Su,disableClickPropagation:no,preventDefault:Qe,stop:gi,getPropagationPath:up,getMousePosition:cp,getWheelDelta:dp,isExternalTarget:Cu,addListener:ee,removeListener:ge},fp=ze.extend({run:function(i,s,u,d){this.stop(),this._el=i,this._inProgress=!0,this._duration=u||.25,this._easeOutPower=1/Math.max(d||.5,.2),this._startPos=pi(i),this._offset=s.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=ae(this._animate,this),this._step()},_step:function(i){var s=+new Date-this._startTime,u=this._duration*1e3;s<u?this._runFrame(this._easeOut(s/u),i):(this._runFrame(1),this._complete())},_runFrame:function(i,s){var u=this._startPos.add(this._offset.multiplyBy(i));s&&u._round(),Oe(this._el,u),this.fire("step")},_complete:function(){de(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(i){return 1-Math.pow(1-i,this._easeOutPower)}}),ue=ze.extend({options:{crs:ru,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(i,s){s=P(this,s),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(i),this._initLayout(),this._onResize=l(this._onResize,this),this._initEvents(),s.maxBounds&&this.setMaxBounds(s.maxBounds),s.zoom!==void 0&&(this._zoom=this._limitZoom(s.zoom)),s.center&&s.zoom!==void 0&&this.setView(Y(s.center),s.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=Qr&&K.any3d&&!K.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),ee(this._proxy,op,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(i,s,u){if(s=s===void 0?this._zoom:this._limitZoom(s),i=this._limitCenter(Y(i),s,this.options.maxBounds),u=u||{},this._stop(),this._loaded&&!u.reset&&u!==!0){u.animate!==void 0&&(u.zoom=o({animate:u.animate},u.zoom),u.pan=o({animate:u.animate,duration:u.duration},u.pan));var d=this._zoom!==s?this._tryAnimatedZoom&&this._tryAnimatedZoom(i,s,u.zoom):this._tryAnimatedPan(i,u.pan);if(d)return clearTimeout(this._sizeTimer),this}return this._resetView(i,s,u.pan&&u.pan.noMoveStart),this},setZoom:function(i,s){return this._loaded?this.setView(this.getCenter(),i,{zoom:s}):(this._zoom=i,this)},zoomIn:function(i,s){return i=i||(K.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+i,s)},zoomOut:function(i,s){return i=i||(K.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-i,s)},setZoomAround:function(i,s,u){var d=this.getZoomScale(s),p=this.getSize().divideBy(2),_=i instanceof D?i:this.latLngToContainerPoint(i),T=_.subtract(p).multiplyBy(1-1/d),M=this.containerPointToLatLng(p.add(T));return this.setView(M,s,{zoom:u})},_getBoundsCenterZoom:function(i,s){s=s||{},i=i.getBounds?i.getBounds():le(i);var u=F(s.paddingTopLeft||s.padding||[0,0]),d=F(s.paddingBottomRight||s.padding||[0,0]),p=this.getBoundsZoom(i,!1,u.add(d));if(p=typeof s.maxZoom=="number"?Math.min(s.maxZoom,p):p,p===1/0)return{center:i.getCenter(),zoom:p};var _=d.subtract(u).divideBy(2),T=this.project(i.getSouthWest(),p),M=this.project(i.getNorthEast(),p),A=this.unproject(T.add(M).divideBy(2).add(_),p);return{center:A,zoom:p}},fitBounds:function(i,s){if(i=le(i),!i.isValid())throw new Error("Bounds are not valid.");var u=this._getBoundsCenterZoom(i,s);return this.setView(u.center,u.zoom,s)},fitWorld:function(i){return this.fitBounds([[-90,-180],[90,180]],i)},panTo:function(i,s){return this.setView(i,this._zoom,{pan:s})},panBy:function(i,s){if(i=F(i).round(),s=s||{},!i.x&&!i.y)return this.fire("moveend");if(s.animate!==!0&&!this.getSize().contains(i))return this._resetView(this.unproject(this.project(this.getCenter()).add(i)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new fp,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),s.noMoveStart||this.fire("movestart"),s.animate!==!1){ne(this._mapPane,"leaflet-pan-anim");var u=this._getMapPanePos().subtract(i).round();this._panAnim.run(this._mapPane,u,s.duration||.25,s.easeLinearity)}else this._rawPanBy(i),this.fire("move").fire("moveend");return this},flyTo:function(i,s,u){if(u=u||{},u.animate===!1||!K.any3d)return this.setView(i,s,u);this._stop();var d=this.project(this.getCenter()),p=this.project(i),_=this.getSize(),T=this._zoom;i=Y(i),s=s===void 0?T:s;var M=Math.max(_.x,_.y),A=M*this.getZoomScale(T,s),N=p.distanceTo(d)||1,Z=1.42,X=Z*Z;function re(De){var Ws=De?-1:1,cb=De?A:M,db=A*A-M*M+Ws*X*X*N*N,fb=2*cb*X*N,Iu=db/fb,Hp=Math.sqrt(Iu*Iu+1)-Iu,hb=Hp<1e-9?-18:Math.log(Hp);return hb}function ut(De){return(Math.exp(De)-Math.exp(-De))/2}function We(De){return(Math.exp(De)+Math.exp(-De))/2}function Ot(De){return ut(De)/We(De)}var gt=re(0);function or(De){return M*(We(gt)/We(gt+Z*De))}function sb(De){return M*(We(gt)*Ot(gt+Z*De)-ut(gt))/X}function ab(De){return 1-Math.pow(1-De,1.5)}var lb=Date.now(),Up=(re(1)-gt)/Z,ub=u.duration?1e3*u.duration:1e3*Up*.8;function Wp(){var De=(Date.now()-lb)/ub,Ws=ab(De)*Up;De<=1?(this._flyToFrame=ae(Wp,this),this._move(this.unproject(d.add(p.subtract(d).multiplyBy(sb(Ws)/N)),T),this.getScaleZoom(M/or(Ws),T),{flyTo:!0})):this._move(i,s)._moveEnd(!0)}return this._moveStart(!0,u.noMoveStart),Wp.call(this),this},flyToBounds:function(i,s){var u=this._getBoundsCenterZoom(i,s);return this.flyTo(u.center,u.zoom,s)},setMaxBounds:function(i){return i=le(i),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),i.isValid()?(this.options.maxBounds=i,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(i){var s=this.options.minZoom;return this.options.minZoom=i,this._loaded&&s!==i&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(i):this},setMaxZoom:function(i){var s=this.options.maxZoom;return this.options.maxZoom=i,this._loaded&&s!==i&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(i):this},panInsideBounds:function(i,s){this._enforcingBounds=!0;var u=this.getCenter(),d=this._limitCenter(u,this._zoom,le(i));return u.equals(d)||this.panTo(d,s),this._enforcingBounds=!1,this},panInside:function(i,s){s=s||{};var u=F(s.paddingTopLeft||s.padding||[0,0]),d=F(s.paddingBottomRight||s.padding||[0,0]),p=this.project(this.getCenter()),_=this.project(i),T=this.getPixelBounds(),M=q([T.min.add(u),T.max.subtract(d)]),A=M.getSize();if(!M.contains(_)){this._enforcingBounds=!0;var N=_.subtract(M.getCenter()),Z=M.extend(_).getSize().subtract(A);p.x+=N.x<0?-Z.x:Z.x,p.y+=N.y<0?-Z.y:Z.y,this.panTo(this.unproject(p),s),this._enforcingBounds=!1}return this},invalidateSize:function(i){if(!this._loaded)return this;i=o({animate:!1,pan:!0},i===!0?{animate:!0}:i);var s=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var u=this.getSize(),d=s.divideBy(2).round(),p=u.divideBy(2).round(),_=d.subtract(p);return!_.x&&!_.y?this:(i.animate&&i.pan?this.panBy(_):(i.pan&&this._rawPanBy(_),this.fire("move"),i.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(l(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:s,newSize:u}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(i){if(i=this._locateOptions=o({timeout:1e4,watch:!1},i),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var s=l(this._handleGeolocationResponse,this),u=l(this._handleGeolocationError,this);return i.watch?this._locationWatchId=navigator.geolocation.watchPosition(s,u,i):navigator.geolocation.getCurrentPosition(s,u,i),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(i){if(this._container._leaflet_id){var s=i.code,u=i.message||(s===1?"permission denied":s===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:s,message:"Geolocation error: "+u+"."})}},_handleGeolocationResponse:function(i){if(this._container._leaflet_id){var s=i.coords.latitude,u=i.coords.longitude,d=new te(s,u),p=d.toBounds(i.coords.accuracy*2),_=this._locateOptions;if(_.setView){var T=this.getBoundsZoom(p);this.setView(d,_.maxZoom?Math.min(T,_.maxZoom):T)}var M={latlng:d,bounds:p,timestamp:i.timestamp};for(var A in i.coords)typeof i.coords[A]=="number"&&(M[A]=i.coords[A]);this.fire("locationfound",M)}},addHandler:function(i,s){if(!s)return this;var u=this[i]=new s(this);return this._handlers.push(u),this.options[i]&&u.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),Pe(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(de(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var i;for(i in this._layers)this._layers[i].remove();for(i in this._panes)Pe(this._panes[i]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(i,s){var u="leaflet-pane"+(i?" leaflet-"+i.replace("Pane","")+"-pane":""),d=fe("div",u,s||this._mapPane);return i&&(this._panes[i]=d),d},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var i=this.getPixelBounds(),s=this.unproject(i.getBottomLeft()),u=this.unproject(i.getTopRight());return new xe(s,u)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(i,s,u){i=le(i),u=F(u||[0,0]);var d=this.getZoom()||0,p=this.getMinZoom(),_=this.getMaxZoom(),T=i.getNorthWest(),M=i.getSouthEast(),A=this.getSize().subtract(u),N=q(this.project(M,d),this.project(T,d)).getSize(),Z=K.any3d?this.options.zoomSnap:1,X=A.x/N.x,re=A.y/N.y,ut=s?Math.max(X,re):Math.min(X,re);return d=this.getScaleZoom(ut,d),Z&&(d=Math.round(d/(Z/100))*(Z/100),d=s?Math.ceil(d/Z)*Z:Math.floor(d/Z)*Z),Math.max(p,Math.min(_,d))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new D(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(i,s){var u=this._getTopLeftPoint(i,s);return new V(u,u.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(i){return this.options.crs.getProjectedBounds(i===void 0?this.getZoom():i)},getPane:function(i){return typeof i=="string"?this._panes[i]:i},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(i,s){var u=this.options.crs;return s=s===void 0?this._zoom:s,u.scale(i)/u.scale(s)},getScaleZoom:function(i,s){var u=this.options.crs;s=s===void 0?this._zoom:s;var d=u.zoom(i*u.scale(s));return isNaN(d)?1/0:d},project:function(i,s){return s=s===void 0?this._zoom:s,this.options.crs.latLngToPoint(Y(i),s)},unproject:function(i,s){return s=s===void 0?this._zoom:s,this.options.crs.pointToLatLng(F(i),s)},layerPointToLatLng:function(i){var s=F(i).add(this.getPixelOrigin());return this.unproject(s)},latLngToLayerPoint:function(i){var s=this.project(Y(i))._round();return s._subtract(this.getPixelOrigin())},wrapLatLng:function(i){return this.options.crs.wrapLatLng(Y(i))},wrapLatLngBounds:function(i){return this.options.crs.wrapLatLngBounds(le(i))},distance:function(i,s){return this.options.crs.distance(Y(i),Y(s))},containerPointToLayerPoint:function(i){return F(i).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(i){return F(i).add(this._getMapPanePos())},containerPointToLatLng:function(i){var s=this.containerPointToLayerPoint(F(i));return this.layerPointToLatLng(s)},latLngToContainerPoint:function(i){return this.layerPointToContainerPoint(this.latLngToLayerPoint(Y(i)))},mouseEventToContainerPoint:function(i){return cp(i,this._container)},mouseEventToLayerPoint:function(i){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(i))},mouseEventToLatLng:function(i){return this.layerPointToLatLng(this.mouseEventToLayerPoint(i))},_initContainer:function(i){var s=this._container=sp(i);if(s){if(s._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");ee(s,"scroll",this._onScroll,this),this._containerId=f(s)},_initLayout:function(){var i=this._container;this._fadeAnimated=this.options.fadeAnimation&&K.any3d,ne(i,"leaflet-container"+(K.touch?" leaflet-touch":"")+(K.retina?" leaflet-retina":"")+(K.ielt9?" leaflet-oldie":"")+(K.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var s=qr(i,"position");s!=="absolute"&&s!=="relative"&&s!=="fixed"&&s!=="sticky"&&(i.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var i=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),Oe(this._mapPane,new D(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(ne(i.markerPane,"leaflet-zoom-hide"),ne(i.shadowPane,"leaflet-zoom-hide"))},_resetView:function(i,s,u){Oe(this._mapPane,new D(0,0));var d=!this._loaded;this._loaded=!0,s=this._limitZoom(s),this.fire("viewprereset");var p=this._zoom!==s;this._moveStart(p,u)._move(i,s)._moveEnd(p),this.fire("viewreset"),d&&this.fire("load")},_moveStart:function(i,s){return i&&this.fire("zoomstart"),s||this.fire("movestart"),this},_move:function(i,s,u,d){s===void 0&&(s=this._zoom);var p=this._zoom!==s;return this._zoom=s,this._lastCenter=i,this._pixelOrigin=this._getNewPixelOrigin(i),d?u&&u.pinch&&this.fire("zoom",u):((p||u&&u.pinch)&&this.fire("zoom",u),this.fire("move",u)),this},_moveEnd:function(i){return i&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return de(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(i){Oe(this._mapPane,this._getMapPanePos().subtract(i))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(i){this._targets={},this._targets[f(this._container)]=this;var s=i?ge:ee;s(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&s(window,"resize",this._onResize,this),K.any3d&&this.options.transform3DLimit&&(i?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){de(this._resizeRequest),this._resizeRequest=ae(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var i=this._getMapPanePos();Math.max(Math.abs(i.x),Math.abs(i.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(i,s){for(var u=[],d,p=s==="mouseout"||s==="mouseover",_=i.target||i.srcElement,T=!1;_;){if(d=this._targets[f(_)],d&&(s==="click"||s==="preclick")&&this._draggableMoved(d)){T=!0;break}if(d&&d.listens(s,!0)&&(p&&!Cu(_,i)||(u.push(d),p))||_===this._container)break;_=_.parentNode}return!u.length&&!T&&!p&&this.listens(s,!0)&&(u=[this]),u},_isClickDisabled:function(i){for(;i&&i!==this._container;){if(i._leaflet_disable_click)return!0;i=i.parentNode}},_handleDOMEvent:function(i){var s=i.target||i.srcElement;if(!(!this._loaded||s._leaflet_disable_events||i.type==="click"&&this._isClickDisabled(s))){var u=i.type;u==="mousedown"&&yu(s),this._fireDOMEvent(i,u)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(i,s,u){if(i.type==="click"){var d=o({},i);d.type="preclick",this._fireDOMEvent(d,d.type,u)}var p=this._findEventTargets(i,s);if(u){for(var _=[],T=0;T<u.length;T++)u[T].listens(s,!0)&&_.push(u[T]);p=_.concat(p)}if(p.length){s==="contextmenu"&&Qe(i);var M=p[0],A={originalEvent:i};if(i.type!=="keypress"&&i.type!=="keydown"&&i.type!=="keyup"){var N=M.getLatLng&&(!M._radius||M._radius<=10);A.containerPoint=N?this.latLngToContainerPoint(M.getLatLng()):this.mouseEventToContainerPoint(i),A.layerPoint=this.containerPointToLayerPoint(A.containerPoint),A.latlng=N?M.getLatLng():this.layerPointToLatLng(A.layerPoint)}for(T=0;T<p.length;T++)if(p[T].fire(s,A,!0),A.originalEvent._stopped||p[T].options.bubblingMouseEvents===!1&&z(this._mouseEvents,s)!==-1)return}},_draggableMoved:function(i){return i=i.dragging&&i.dragging.enabled()?i:this,i.dragging&&i.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var i=0,s=this._handlers.length;i<s;i++)this._handlers[i].disable()},whenReady:function(i,s){return this._loaded?i.call(s||this,{target:this}):this.on("load",i,s),this},_getMapPanePos:function(){return pi(this._mapPane)||new D(0,0)},_moved:function(){var i=this._getMapPanePos();return i&&!i.equals([0,0])},_getTopLeftPoint:function(i,s){var u=i&&s!==void 0?this._getNewPixelOrigin(i,s):this.getPixelOrigin();return u.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(i,s){var u=this.getSize()._divideBy(2);return this.project(i,s)._subtract(u)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(i,s,u){var d=this._getNewPixelOrigin(u,s);return this.project(i,s)._subtract(d)},_latLngBoundsToNewLayerBounds:function(i,s,u){var d=this._getNewPixelOrigin(u,s);return q([this.project(i.getSouthWest(),s)._subtract(d),this.project(i.getNorthWest(),s)._subtract(d),this.project(i.getSouthEast(),s)._subtract(d),this.project(i.getNorthEast(),s)._subtract(d)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(i){return this.latLngToLayerPoint(i).subtract(this._getCenterLayerPoint())},_limitCenter:function(i,s,u){if(!u)return i;var d=this.project(i,s),p=this.getSize().divideBy(2),_=new V(d.subtract(p),d.add(p)),T=this._getBoundsOffset(_,u,s);return Math.abs(T.x)<=1&&Math.abs(T.y)<=1?i:this.unproject(d.add(T),s)},_limitOffset:function(i,s){if(!s)return i;var u=this.getPixelBounds(),d=new V(u.min.add(i),u.max.add(i));return i.add(this._getBoundsOffset(d,s))},_getBoundsOffset:function(i,s,u){var d=q(this.project(s.getNorthEast(),u),this.project(s.getSouthWest(),u)),p=d.min.subtract(i.min),_=d.max.subtract(i.max),T=this._rebound(p.x,-_.x),M=this._rebound(p.y,-_.y);return new D(T,M)},_rebound:function(i,s){return i+s>0?Math.round(i-s)/2:Math.max(0,Math.ceil(i))-Math.max(0,Math.floor(s))},_limitZoom:function(i){var s=this.getMinZoom(),u=this.getMaxZoom(),d=K.any3d?this.options.zoomSnap:1;return d&&(i=Math.round(i/d)*d),Math.max(s,Math.min(u,i))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){Ae(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(i,s){var u=this._getCenterOffset(i)._trunc();return(s&&s.animate)!==!0&&!this.getSize().contains(u)?!1:(this.panBy(u,s),!0)},_createAnimProxy:function(){var i=this._proxy=fe("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(i),this.on("zoomanim",function(s){var u=du,d=this._proxy.style[u];hi(this._proxy,this.project(s.center,s.zoom),this.getZoomScale(s.zoom,1)),d===this._proxy.style[u]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){Pe(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var i=this.getCenter(),s=this.getZoom();hi(this._proxy,this.project(i,s),this.getZoomScale(s,1))},_catchTransitionEnd:function(i){this._animatingZoom&&i.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(i,s,u){if(this._animatingZoom)return!0;if(u=u||{},!this._zoomAnimated||u.animate===!1||this._nothingToAnimate()||Math.abs(s-this._zoom)>this.options.zoomAnimationThreshold)return!1;var d=this.getZoomScale(s),p=this._getCenterOffset(i)._divideBy(1-1/d);return u.animate!==!0&&!this.getSize().contains(p)?!1:(ae(function(){this._moveStart(!0,u.noMoveStart||!1)._animateZoom(i,s,!0)},this),!0)},_animateZoom:function(i,s,u,d){this._mapPane&&(u&&(this._animatingZoom=!0,this._animateToCenter=i,this._animateToZoom=s,ne(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:i,zoom:s,noUpdate:d}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(l(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&Ae(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function Sw(i,s){return new ue(i,s)}var Ht=he.extend({options:{position:"topright"},initialize:function(i){P(this,i)},getPosition:function(){return this.options.position},setPosition:function(i){var s=this._map;return s&&s.removeControl(this),this.options.position=i,s&&s.addControl(this),this},getContainer:function(){return this._container},addTo:function(i){this.remove(),this._map=i;var s=this._container=this.onAdd(i),u=this.getPosition(),d=i._controlCorners[u];return ne(s,"leaflet-control"),u.indexOf("bottom")!==-1?d.insertBefore(s,d.firstChild):d.appendChild(s),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(Pe(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(i){this._map&&i&&i.screenX>0&&i.screenY>0&&this._map.getContainer().focus()}}),io=function(i){return new Ht(i)};ue.include({addControl:function(i){return i.addTo(this),this},removeControl:function(i){return i.remove(),this},_initControlPos:function(){var i=this._controlCorners={},s="leaflet-",u=this._controlContainer=fe("div",s+"control-container",this._container);function d(p,_){var T=s+p+" "+s+_;i[p+_]=fe("div",T,u)}d("top","left"),d("top","right"),d("bottom","left"),d("bottom","right")},_clearControlPos:function(){for(var i in this._controlCorners)Pe(this._controlCorners[i]);Pe(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var hp=Ht.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(i,s,u,d){return u<d?-1:d<u?1:0}},initialize:function(i,s,u){P(this,u),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var d in i)this._addLayer(i[d],d);for(d in s)this._addLayer(s[d],d,!0)},onAdd:function(i){this._initLayout(),this._update(),this._map=i,i.on("zoomend",this._checkDisabledLayers,this);for(var s=0;s<this._layers.length;s++)this._layers[s].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(i){return Ht.prototype.addTo.call(this,i),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var i=0;i<this._layers.length;i++)this._layers[i].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(i,s){return this._addLayer(i,s),this._map?this._update():this},addOverlay:function(i,s){return this._addLayer(i,s,!0),this._map?this._update():this},removeLayer:function(i){i.off("add remove",this._onLayerChange,this);var s=this._getLayer(f(i));return s&&this._layers.splice(this._layers.indexOf(s),1),this._map?this._update():this},expand:function(){ne(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var i=this._map.getSize().y-(this._container.offsetTop+50);return i<this._section.clientHeight?(ne(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=i+"px"):Ae(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return Ae(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var i="leaflet-control-layers",s=this._container=fe("div",i),u=this.options.collapsed;s.setAttribute("aria-haspopup",!0),no(s),Su(s);var d=this._section=fe("section",i+"-list");u&&(this._map.on("click",this.collapse,this),ee(s,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var p=this._layersLink=fe("a",i+"-toggle",s);p.href="#",p.title="Layers",p.setAttribute("role","button"),ee(p,{keydown:function(_){_.keyCode===13&&this._expandSafely()},click:function(_){Qe(_),this._expandSafely()}},this),u||this.expand(),this._baseLayersList=fe("div",i+"-base",d),this._separator=fe("div",i+"-separator",d),this._overlaysList=fe("div",i+"-overlays",d),s.appendChild(d)},_getLayer:function(i){for(var s=0;s<this._layers.length;s++)if(this._layers[s]&&f(this._layers[s].layer)===i)return this._layers[s]},_addLayer:function(i,s,u){this._map&&i.on("add remove",this._onLayerChange,this),this._layers.push({layer:i,name:s,overlay:u}),this.options.sortLayers&&this._layers.sort(l(function(d,p){return this.options.sortFunction(d.layer,p.layer,d.name,p.name)},this)),this.options.autoZIndex&&i.setZIndex&&(this._lastZIndex++,i.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;Es(this._baseLayersList),Es(this._overlaysList),this._layerControlInputs=[];var i,s,u,d,p=0;for(u=0;u<this._layers.length;u++)d=this._layers[u],this._addItem(d),s=s||d.overlay,i=i||!d.overlay,p+=d.overlay?0:1;return this.options.hideSingleBase&&(i=i&&p>1,this._baseLayersList.style.display=i?"":"none"),this._separator.style.display=s&&i?"":"none",this},_onLayerChange:function(i){this._handlingClick||this._update();var s=this._getLayer(f(i.target)),u=s.overlay?i.type==="add"?"overlayadd":"overlayremove":i.type==="add"?"baselayerchange":null;u&&this._map.fire(u,s)},_createRadioElement:function(i,s){var u='<input type="radio" class="leaflet-control-layers-selector" name="'+i+'"'+(s?' checked="checked"':"")+"/>",d=document.createElement("div");return d.innerHTML=u,d.firstChild},_addItem:function(i){var s=document.createElement("label"),u=this._map.hasLayer(i.layer),d;i.overlay?(d=document.createElement("input"),d.type="checkbox",d.className="leaflet-control-layers-selector",d.defaultChecked=u):d=this._createRadioElement("leaflet-base-layers_"+f(this),u),this._layerControlInputs.push(d),d.layerId=f(i.layer),ee(d,"click",this._onInputClick,this);var p=document.createElement("span");p.innerHTML=" "+i.name;var _=document.createElement("span");s.appendChild(_),_.appendChild(d),_.appendChild(p);var T=i.overlay?this._overlaysList:this._baseLayersList;return T.appendChild(s),this._checkDisabledLayers(),s},_onInputClick:function(){if(!this._preventClick){var i=this._layerControlInputs,s,u,d=[],p=[];this._handlingClick=!0;for(var _=i.length-1;_>=0;_--)s=i[_],u=this._getLayer(s.layerId).layer,s.checked?d.push(u):s.checked||p.push(u);for(_=0;_<p.length;_++)this._map.hasLayer(p[_])&&this._map.removeLayer(p[_]);for(_=0;_<d.length;_++)this._map.hasLayer(d[_])||this._map.addLayer(d[_]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var i=this._layerControlInputs,s,u,d=this._map.getZoom(),p=i.length-1;p>=0;p--)s=i[p],u=this._getLayer(s.layerId).layer,s.disabled=u.options.minZoom!==void 0&&d<u.options.minZoom||u.options.maxZoom!==void 0&&d>u.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var i=this._section;this._preventClick=!0,ee(i,"click",Qe),this.expand();var s=this;setTimeout(function(){ge(i,"click",Qe),s._preventClick=!1})}}),Cw=function(i,s,u){return new hp(i,s,u)},Pu=Ht.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(i){var s="leaflet-control-zoom",u=fe("div",s+" leaflet-bar"),d=this.options;return this._zoomInButton=this._createButton(d.zoomInText,d.zoomInTitle,s+"-in",u,this._zoomIn),this._zoomOutButton=this._createButton(d.zoomOutText,d.zoomOutTitle,s+"-out",u,this._zoomOut),this._updateDisabled(),i.on("zoomend zoomlevelschange",this._updateDisabled,this),u},onRemove:function(i){i.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(i){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(i.shiftKey?3:1))},_zoomOut:function(i){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(i.shiftKey?3:1))},_createButton:function(i,s,u,d,p){var _=fe("a",u,d);return _.innerHTML=i,_.href="#",_.title=s,_.setAttribute("role","button"),_.setAttribute("aria-label",s),no(_),ee(_,"click",gi),ee(_,"click",p,this),ee(_,"click",this._refocusOnMap,this),_},_updateDisabled:function(){var i=this._map,s="leaflet-disabled";Ae(this._zoomInButton,s),Ae(this._zoomOutButton,s),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||i._zoom===i.getMinZoom())&&(ne(this._zoomOutButton,s),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||i._zoom===i.getMaxZoom())&&(ne(this._zoomInButton,s),this._zoomInButton.setAttribute("aria-disabled","true"))}});ue.mergeOptions({zoomControl:!0}),ue.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new Pu,this.addControl(this.zoomControl))});var Pw=function(i){return new Pu(i)},pp=Ht.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(i){var s="leaflet-control-scale",u=fe("div",s),d=this.options;return this._addScales(d,s+"-line",u),i.on(d.updateWhenIdle?"moveend":"move",this._update,this),i.whenReady(this._update,this),u},onRemove:function(i){i.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(i,s,u){i.metric&&(this._mScale=fe("div",s,u)),i.imperial&&(this._iScale=fe("div",s,u))},_update:function(){var i=this._map,s=i.getSize().y/2,u=i.distance(i.containerPointToLatLng([0,s]),i.containerPointToLatLng([this.options.maxWidth,s]));this._updateScales(u)},_updateScales:function(i){this.options.metric&&i&&this._updateMetric(i),this.options.imperial&&i&&this._updateImperial(i)},_updateMetric:function(i){var s=this._getRoundNum(i),u=s<1e3?s+" m":s/1e3+" km";this._updateScale(this._mScale,u,s/i)},_updateImperial:function(i){var s=i*3.2808399,u,d,p;s>5280?(u=s/5280,d=this._getRoundNum(u),this._updateScale(this._iScale,d+" mi",d/u)):(p=this._getRoundNum(s),this._updateScale(this._iScale,p+" ft",p/s))},_updateScale:function(i,s,u){i.style.width=Math.round(this.options.maxWidth*u)+"px",i.innerHTML=s},_getRoundNum:function(i){var s=Math.pow(10,(Math.floor(i)+"").length-1),u=i/s;return u=u>=10?10:u>=5?5:u>=3?3:u>=2?2:1,s*u}}),kw=function(i){return new pp(i)},Tw='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',ku=Ht.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(K.inlineSvg?Tw+" ":"")+"Leaflet</a>"},initialize:function(i){P(this,i),this._attributions={}},onAdd:function(i){i.attributionControl=this,this._container=fe("div","leaflet-control-attribution"),no(this._container);for(var s in i._layers)i._layers[s].getAttribution&&this.addAttribution(i._layers[s].getAttribution());return this._update(),i.on("layeradd",this._addAttribution,this),this._container},onRemove:function(i){i.off("layeradd",this._addAttribution,this)},_addAttribution:function(i){i.layer.getAttribution&&(this.addAttribution(i.layer.getAttribution()),i.layer.once("remove",function(){this.removeAttribution(i.layer.getAttribution())},this))},setPrefix:function(i){return this.options.prefix=i,this._update(),this},addAttribution:function(i){return i?(this._attributions[i]||(this._attributions[i]=0),this._attributions[i]++,this._update(),this):this},removeAttribution:function(i){return i?(this._attributions[i]&&(this._attributions[i]--,this._update()),this):this},_update:function(){if(this._map){var i=[];for(var s in this._attributions)this._attributions[s]&&i.push(s);var u=[];this.options.prefix&&u.push(this.options.prefix),i.length&&u.push(i.join(", ")),this._container.innerHTML=u.join(' <span aria-hidden="true">|</span> ')}}});ue.mergeOptions({attributionControl:!0}),ue.addInitHook(function(){this.options.attributionControl&&new ku().addTo(this)});var Lw=function(i){return new ku(i)};Ht.Layers=hp,Ht.Zoom=Pu,Ht.Scale=pp,Ht.Attribution=ku,io.layers=Cw,io.zoom=Pw,io.scale=kw,io.attribution=Lw;var sn=he.extend({initialize:function(i){this._map=i},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});sn.addTo=function(i,s){return i.addHandler(s,this),this};var Ew={Events:oe},mp=K.touch?"touchstart mousedown":"mousedown",Rn=ze.extend({options:{clickTolerance:3},initialize:function(i,s,u,d){P(this,d),this._element=i,this._dragStartTarget=s||i,this._preventOutline=u},enable:function(){this._enabled||(ee(this._dragStartTarget,mp,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(Rn._dragging===this&&this.finishDrag(!0),ge(this._dragStartTarget,mp,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(i){if(this._enabled&&(this._moved=!1,!fu(this._element,"leaflet-zoom-anim"))){if(i.touches&&i.touches.length!==1){Rn._dragging===this&&this.finishDrag();return}if(!(Rn._dragging||i.shiftKey||i.which!==1&&i.button!==1&&!i.touches)&&(Rn._dragging=this,this._preventOutline&&yu(this._element),mu(),Jr(),!this._moving)){this.fire("down");var s=i.touches?i.touches[0]:i,u=ap(this._element);this._startPoint=new D(s.clientX,s.clientY),this._startPos=pi(this._element),this._parentScale=xu(u);var d=i.type==="mousedown";ee(document,d?"mousemove":"touchmove",this._onMove,this),ee(document,d?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(i){if(this._enabled){if(i.touches&&i.touches.length>1){this._moved=!0;return}var s=i.touches&&i.touches.length===1?i.touches[0]:i,u=new D(s.clientX,s.clientY)._subtract(this._startPoint);!u.x&&!u.y||Math.abs(u.x)+Math.abs(u.y)<this.options.clickTolerance||(u.x/=this._parentScale.x,u.y/=this._parentScale.y,Qe(i),this._moved||(this.fire("dragstart"),this._moved=!0,ne(document.body,"leaflet-dragging"),this._lastTarget=i.target||i.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),ne(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(u),this._moving=!0,this._lastEvent=i,this._updatePosition())}},_updatePosition:function(){var i={originalEvent:this._lastEvent};this.fire("predrag",i),Oe(this._element,this._newPos),this.fire("drag",i)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(i){Ae(document.body,"leaflet-dragging"),this._lastTarget&&(Ae(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),ge(document,"mousemove touchmove",this._onMove,this),ge(document,"mouseup touchend touchcancel",this._onUp,this),gu(),eo();var s=this._moved&&this._moving;this._moving=!1,Rn._dragging=!1,s&&this.fire("dragend",{noInertia:i,distance:this._newPos.distanceTo(this._startPos)})}});function gp(i,s,u){var d,p=[1,4,2,8],_,T,M,A,N,Z,X,re;for(_=0,Z=i.length;_<Z;_++)i[_]._code=vi(i[_],s);for(M=0;M<4;M++){for(X=p[M],d=[],_=0,Z=i.length,T=Z-1;_<Z;T=_++)A=i[_],N=i[T],A._code&X?N._code&X||(re=Rs(N,A,X,s,u),re._code=vi(re,s),d.push(re)):(N._code&X&&(re=Rs(N,A,X,s,u),re._code=vi(re,s),d.push(re)),d.push(A));i=d}return i}function vp(i,s){var u,d,p,_,T,M,A,N,Z;if(!i||i.length===0)throw new Error("latlngs not passed");It(i)||(console.warn("latlngs are not flat! Only the first ring will be used"),i=i[0]);var X=Y([0,0]),re=le(i),ut=re.getNorthWest().distanceTo(re.getSouthWest())*re.getNorthEast().distanceTo(re.getNorthWest());ut<1700&&(X=Tu(i));var We=i.length,Ot=[];for(u=0;u<We;u++){var gt=Y(i[u]);Ot.push(s.project(Y([gt.lat-X.lat,gt.lng-X.lng])))}for(M=A=N=0,u=0,d=We-1;u<We;d=u++)p=Ot[u],_=Ot[d],T=p.y*_.x-_.y*p.x,A+=(p.x+_.x)*T,N+=(p.y+_.y)*T,M+=T*3;M===0?Z=Ot[0]:Z=[A/M,N/M];var or=s.unproject(F(Z));return Y([or.lat+X.lat,or.lng+X.lng])}function Tu(i){for(var s=0,u=0,d=0,p=0;p<i.length;p++){var _=Y(i[p]);s+=_.lat,u+=_.lng,d++}return Y([s/d,u/d])}var zw={__proto__:null,clipPolygon:gp,polygonCenter:vp,centroid:Tu};function yp(i,s){if(!s||!i.length)return i.slice();var u=s*s;return i=Aw(i,u),i=Mw(i,u),i}function xp(i,s,u){return Math.sqrt(ro(i,s,u,!0))}function jw(i,s,u){return ro(i,s,u)}function Mw(i,s){var u=i.length,d=typeof Uint8Array<"u"?Uint8Array:Array,p=new d(u);p[0]=p[u-1]=1,Lu(i,p,s,0,u-1);var _,T=[];for(_=0;_<u;_++)p[_]&&T.push(i[_]);return T}function Lu(i,s,u,d,p){var _=0,T,M,A;for(M=d+1;M<=p-1;M++)A=ro(i[M],i[d],i[p],!0),A>_&&(T=M,_=A);_>u&&(s[T]=1,Lu(i,s,u,d,T),Lu(i,s,u,T,p))}function Aw(i,s){for(var u=[i[0]],d=1,p=0,_=i.length;d<_;d++)Rw(i[d],i[p])>s&&(u.push(i[d]),p=d);return p<_-1&&u.push(i[_-1]),u}var _p;function wp(i,s,u,d,p){var _=d?_p:vi(i,u),T=vi(s,u),M,A,N;for(_p=T;;){if(!(_|T))return[i,s];if(_&T)return!1;M=_||T,A=Rs(i,s,M,u,p),N=vi(A,u),M===_?(i=A,_=N):(s=A,T=N)}}function Rs(i,s,u,d,p){var _=s.x-i.x,T=s.y-i.y,M=d.min,A=d.max,N,Z;return u&8?(N=i.x+_*(A.y-i.y)/T,Z=A.y):u&4?(N=i.x+_*(M.y-i.y)/T,Z=M.y):u&2?(N=A.x,Z=i.y+T*(A.x-i.x)/_):u&1&&(N=M.x,Z=i.y+T*(M.x-i.x)/_),new D(N,Z,p)}function vi(i,s){var u=0;return i.x<s.min.x?u|=1:i.x>s.max.x&&(u|=2),i.y<s.min.y?u|=4:i.y>s.max.y&&(u|=8),u}function Rw(i,s){var u=s.x-i.x,d=s.y-i.y;return u*u+d*d}function ro(i,s,u,d){var p=s.x,_=s.y,T=u.x-p,M=u.y-_,A=T*T+M*M,N;return A>0&&(N=((i.x-p)*T+(i.y-_)*M)/A,N>1?(p=u.x,_=u.y):N>0&&(p+=T*N,_+=M*N)),T=i.x-p,M=i.y-_,d?T*T+M*M:new D(p,_)}function It(i){return!w(i[0])||typeof i[0][0]!="object"&&typeof i[0][0]<"u"}function bp(i){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),It(i)}function Sp(i,s){var u,d,p,_,T,M,A,N;if(!i||i.length===0)throw new Error("latlngs not passed");It(i)||(console.warn("latlngs are not flat! Only the first ring will be used"),i=i[0]);var Z=Y([0,0]),X=le(i),re=X.getNorthWest().distanceTo(X.getSouthWest())*X.getNorthEast().distanceTo(X.getNorthWest());re<1700&&(Z=Tu(i));var ut=i.length,We=[];for(u=0;u<ut;u++){var Ot=Y(i[u]);We.push(s.project(Y([Ot.lat-Z.lat,Ot.lng-Z.lng])))}for(u=0,d=0;u<ut-1;u++)d+=We[u].distanceTo(We[u+1])/2;if(d===0)N=We[0];else for(u=0,_=0;u<ut-1;u++)if(T=We[u],M=We[u+1],p=T.distanceTo(M),_+=p,_>d){A=(_-d)/p,N=[M.x-A*(M.x-T.x),M.y-A*(M.y-T.y)];break}var gt=s.unproject(F(N));return Y([gt.lat+Z.lat,gt.lng+Z.lng])}var Iw={__proto__:null,simplify:yp,pointToSegmentDistance:xp,closestPointOnSegment:jw,clipSegment:wp,_getEdgeIntersection:Rs,_getBitCode:vi,_sqClosestPointOnSegment:ro,isFlat:It,_flat:bp,polylineCenter:Sp},Eu={project:function(i){return new D(i.lng,i.lat)},unproject:function(i){return new te(i.y,i.x)},bounds:new V([-180,-90],[180,90])},zu={R:6378137,R_MINOR:6356752314245179e-9,bounds:new V([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(i){var s=Math.PI/180,u=this.R,d=i.lat*s,p=this.R_MINOR/u,_=Math.sqrt(1-p*p),T=_*Math.sin(d),M=Math.tan(Math.PI/4-d/2)/Math.pow((1-T)/(1+T),_/2);return d=-u*Math.log(Math.max(M,1e-10)),new D(i.lng*s*u,d)},unproject:function(i){for(var s=180/Math.PI,u=this.R,d=this.R_MINOR/u,p=Math.sqrt(1-d*d),_=Math.exp(-i.y/u),T=Math.PI/2-2*Math.atan(_),M=0,A=.1,N;M<15&&Math.abs(A)>1e-7;M++)N=p*Math.sin(T),N=Math.pow((1-N)/(1+N),p/2),A=Math.PI/2-2*Math.atan(_*N)-T,T+=A;return new te(T*s,i.x*s/u)}},Ow={__proto__:null,LonLat:Eu,Mercator:zu,SphericalMercator:At},Dw=o({},tt,{code:"EPSG:3395",projection:zu,transformation:function(){var i=.5/(Math.PI*zu.R);return lt(i,.5,-i,.5)}()}),Cp=o({},tt,{code:"EPSG:4326",projection:Eu,transformation:lt(1/180,1,-1/180,.5)}),$w=o({},je,{projection:Eu,transformation:lt(1,0,-1,0),scale:function(i){return Math.pow(2,i)},zoom:function(i){return Math.log(i)/Math.LN2},distance:function(i,s){var u=s.lng-i.lng,d=s.lat-i.lat;return Math.sqrt(u*u+d*d)},infinite:!0});je.Earth=tt,je.EPSG3395=Dw,je.EPSG3857=ru,je.EPSG900913=U1,je.EPSG4326=Cp,je.Simple=$w;var Gt=ze.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(i){return i.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(i){return i&&i.removeLayer(this),this},getPane:function(i){return this._map.getPane(i?this.options[i]||i:this.options.pane)},addInteractiveTarget:function(i){return this._map._targets[f(i)]=this,this},removeInteractiveTarget:function(i){return delete this._map._targets[f(i)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(i){var s=i.target;if(s.hasLayer(this)){if(this._map=s,this._zoomAnimated=s._zoomAnimated,this.getEvents){var u=this.getEvents();s.on(u,this),this.once("remove",function(){s.off(u,this)},this)}this.onAdd(s),this.fire("add"),s.fire("layeradd",{layer:this})}}});ue.include({addLayer:function(i){if(!i._layerAdd)throw new Error("The provided object is not a Layer.");var s=f(i);return this._layers[s]?this:(this._layers[s]=i,i._mapToAdd=this,i.beforeAdd&&i.beforeAdd(this),this.whenReady(i._layerAdd,i),this)},removeLayer:function(i){var s=f(i);return this._layers[s]?(this._loaded&&i.onRemove(this),delete this._layers[s],this._loaded&&(this.fire("layerremove",{layer:i}),i.fire("remove")),i._map=i._mapToAdd=null,this):this},hasLayer:function(i){return f(i)in this._layers},eachLayer:function(i,s){for(var u in this._layers)i.call(s,this._layers[u]);return this},_addLayers:function(i){i=i?w(i)?i:[i]:[];for(var s=0,u=i.length;s<u;s++)this.addLayer(i[s])},_addZoomLimit:function(i){(!isNaN(i.options.maxZoom)||!isNaN(i.options.minZoom))&&(this._zoomBoundLayers[f(i)]=i,this._updateZoomLevels())},_removeZoomLimit:function(i){var s=f(i);this._zoomBoundLayers[s]&&(delete this._zoomBoundLayers[s],this._updateZoomLevels())},_updateZoomLevels:function(){var i=1/0,s=-1/0,u=this._getZoomSpan();for(var d in this._zoomBoundLayers){var p=this._zoomBoundLayers[d].options;i=p.minZoom===void 0?i:Math.min(i,p.minZoom),s=p.maxZoom===void 0?s:Math.max(s,p.maxZoom)}this._layersMaxZoom=s===-1/0?void 0:s,this._layersMinZoom=i===1/0?void 0:i,u!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var er=Gt.extend({initialize:function(i,s){P(this,s),this._layers={};var u,d;if(i)for(u=0,d=i.length;u<d;u++)this.addLayer(i[u])},addLayer:function(i){var s=this.getLayerId(i);return this._layers[s]=i,this._map&&this._map.addLayer(i),this},removeLayer:function(i){var s=i in this._layers?i:this.getLayerId(i);return this._map&&this._layers[s]&&this._map.removeLayer(this._layers[s]),delete this._layers[s],this},hasLayer:function(i){var s=typeof i=="number"?i:this.getLayerId(i);return s in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(i){var s=Array.prototype.slice.call(arguments,1),u,d;for(u in this._layers)d=this._layers[u],d[i]&&d[i].apply(d,s);return this},onAdd:function(i){this.eachLayer(i.addLayer,i)},onRemove:function(i){this.eachLayer(i.removeLayer,i)},eachLayer:function(i,s){for(var u in this._layers)i.call(s,this._layers[u]);return this},getLayer:function(i){return this._layers[i]},getLayers:function(){var i=[];return this.eachLayer(i.push,i),i},setZIndex:function(i){return this.invoke("setZIndex",i)},getLayerId:function(i){return f(i)}}),Nw=function(i,s){return new er(i,s)},mn=er.extend({addLayer:function(i){return this.hasLayer(i)?this:(i.addEventParent(this),er.prototype.addLayer.call(this,i),this.fire("layeradd",{layer:i}))},removeLayer:function(i){return this.hasLayer(i)?(i in this._layers&&(i=this._layers[i]),i.removeEventParent(this),er.prototype.removeLayer.call(this,i),this.fire("layerremove",{layer:i})):this},setStyle:function(i){return this.invoke("setStyle",i)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var i=new xe;for(var s in this._layers){var u=this._layers[s];i.extend(u.getBounds?u.getBounds():u.getLatLng())}return i}}),Bw=function(i,s){return new mn(i,s)},tr=he.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(i){P(this,i)},createIcon:function(i){return this._createIcon("icon",i)},createShadow:function(i){return this._createIcon("shadow",i)},_createIcon:function(i,s){var u=this._getIconUrl(i);if(!u){if(i==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var d=this._createImg(u,s&&s.tagName==="IMG"?s:null);return this._setIconStyles(d,i),(this.options.crossOrigin||this.options.crossOrigin==="")&&(d.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),d},_setIconStyles:function(i,s){var u=this.options,d=u[s+"Size"];typeof d=="number"&&(d=[d,d]);var p=F(d),_=F(s==="shadow"&&u.shadowAnchor||u.iconAnchor||p&&p.divideBy(2,!0));i.className="leaflet-marker-"+s+" "+(u.className||""),_&&(i.style.marginLeft=-_.x+"px",i.style.marginTop=-_.y+"px"),p&&(i.style.width=p.x+"px",i.style.height=p.y+"px")},_createImg:function(i,s){return s=s||document.createElement("img"),s.src=i,s},_getIconUrl:function(i){return K.retina&&this.options[i+"RetinaUrl"]||this.options[i+"Url"]}});function Fw(i){return new tr(i)}var oo=tr.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(i){return typeof oo.imagePath!="string"&&(oo.imagePath=this._detectIconPath()),(this.options.imagePath||oo.imagePath)+tr.prototype._getIconUrl.call(this,i)},_stripUrl:function(i){var s=function(u,d,p){var _=d.exec(u);return _&&_[p]};return i=s(i,/^url\((['"])?(.+)\1\)$/,2),i&&s(i,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var i=fe("div","leaflet-default-icon-path",document.body),s=qr(i,"background-image")||qr(i,"backgroundImage");if(document.body.removeChild(i),s=this._stripUrl(s),s)return s;var u=document.querySelector('link[href$="leaflet.css"]');return u?u.href.substring(0,u.href.length-11-1):""}}),Pp=sn.extend({initialize:function(i){this._marker=i},addHooks:function(){var i=this._marker._icon;this._draggable||(this._draggable=new Rn(i,i,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),ne(i,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&Ae(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(i){var s=this._marker,u=s._map,d=this._marker.options.autoPanSpeed,p=this._marker.options.autoPanPadding,_=pi(s._icon),T=u.getPixelBounds(),M=u.getPixelOrigin(),A=q(T.min._subtract(M).add(p),T.max._subtract(M).subtract(p));if(!A.contains(_)){var N=F((Math.max(A.max.x,_.x)-A.max.x)/(T.max.x-A.max.x)-(Math.min(A.min.x,_.x)-A.min.x)/(T.min.x-A.min.x),(Math.max(A.max.y,_.y)-A.max.y)/(T.max.y-A.max.y)-(Math.min(A.min.y,_.y)-A.min.y)/(T.min.y-A.min.y)).multiplyBy(d);u.panBy(N,{animate:!1}),this._draggable._newPos._add(N),this._draggable._startPos._add(N),Oe(s._icon,this._draggable._newPos),this._onDrag(i),this._panRequest=ae(this._adjustPan.bind(this,i))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(i){this._marker.options.autoPan&&(de(this._panRequest),this._panRequest=ae(this._adjustPan.bind(this,i)))},_onDrag:function(i){var s=this._marker,u=s._shadow,d=pi(s._icon),p=s._map.layerPointToLatLng(d);u&&Oe(u,d),s._latlng=p,i.latlng=p,i.oldLatLng=this._oldLatLng,s.fire("move",i).fire("drag",i)},_onDragEnd:function(i){de(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",i)}}),Is=Gt.extend({options:{icon:new oo,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(i,s){P(this,s),this._latlng=Y(i)},onAdd:function(i){this._zoomAnimated=this._zoomAnimated&&i.options.markerZoomAnimation,this._zoomAnimated&&i.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(i){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&i.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(i){var s=this._latlng;return this._latlng=Y(i),this.update(),this.fire("move",{oldLatLng:s,latlng:this._latlng})},setZIndexOffset:function(i){return this.options.zIndexOffset=i,this.update()},getIcon:function(){return this.options.icon},setIcon:function(i){return this.options.icon=i,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var i=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(i)}return this},_initIcon:function(){var i=this.options,s="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),u=i.icon.createIcon(this._icon),d=!1;u!==this._icon&&(this._icon&&this._removeIcon(),d=!0,i.title&&(u.title=i.title),u.tagName==="IMG"&&(u.alt=i.alt||"")),ne(u,s),i.keyboard&&(u.tabIndex="0",u.setAttribute("role","button")),this._icon=u,i.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&ee(u,"focus",this._panOnFocus,this);var p=i.icon.createShadow(this._shadow),_=!1;p!==this._shadow&&(this._removeShadow(),_=!0),p&&(ne(p,s),p.alt=""),this._shadow=p,i.opacity<1&&this._updateOpacity(),d&&this.getPane().appendChild(this._icon),this._initInteraction(),p&&_&&this.getPane(i.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&ge(this._icon,"focus",this._panOnFocus,this),Pe(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&Pe(this._shadow),this._shadow=null},_setPos:function(i){this._icon&&Oe(this._icon,i),this._shadow&&Oe(this._shadow,i),this._zIndex=i.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(i){this._icon&&(this._icon.style.zIndex=this._zIndex+i)},_animateZoom:function(i){var s=this._map._latLngToNewLayerPoint(this._latlng,i.zoom,i.center).round();this._setPos(s)},_initInteraction:function(){if(this.options.interactive&&(ne(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),Pp)){var i=this.options.draggable;this.dragging&&(i=this.dragging.enabled(),this.dragging.disable()),this.dragging=new Pp(this),i&&this.dragging.enable()}},setOpacity:function(i){return this.options.opacity=i,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var i=this.options.opacity;this._icon&&Rt(this._icon,i),this._shadow&&Rt(this._shadow,i)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var i=this._map;if(i){var s=this.options.icon.options,u=s.iconSize?F(s.iconSize):F(0,0),d=s.iconAnchor?F(s.iconAnchor):F(0,0);i.panInside(this._latlng,{paddingTopLeft:d,paddingBottomRight:u.subtract(d)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function Vw(i,s){return new Is(i,s)}var In=Gt.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(i){this._renderer=i.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(i){return P(this,i),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&i&&Object.prototype.hasOwnProperty.call(i,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),Os=In.extend({options:{fill:!0,radius:10},initialize:function(i,s){P(this,s),this._latlng=Y(i),this._radius=this.options.radius},setLatLng:function(i){var s=this._latlng;return this._latlng=Y(i),this.redraw(),this.fire("move",{oldLatLng:s,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(i){return this.options.radius=this._radius=i,this.redraw()},getRadius:function(){return this._radius},setStyle:function(i){var s=i&&i.radius||this._radius;return In.prototype.setStyle.call(this,i),this.setRadius(s),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var i=this._radius,s=this._radiusY||i,u=this._clickTolerance(),d=[i+u,s+u];this._pxBounds=new V(this._point.subtract(d),this._point.add(d))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(i){return i.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function Zw(i,s){return new Os(i,s)}var ju=Os.extend({initialize:function(i,s,u){if(typeof s=="number"&&(s=o({},u,{radius:s})),P(this,s),this._latlng=Y(i),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(i){return this._mRadius=i,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var i=[this._radius,this._radiusY||this._radius];return new xe(this._map.layerPointToLatLng(this._point.subtract(i)),this._map.layerPointToLatLng(this._point.add(i)))},setStyle:In.prototype.setStyle,_project:function(){var i=this._latlng.lng,s=this._latlng.lat,u=this._map,d=u.options.crs;if(d.distance===tt.distance){var p=Math.PI/180,_=this._mRadius/tt.R/p,T=u.project([s+_,i]),M=u.project([s-_,i]),A=T.add(M).divideBy(2),N=u.unproject(A).lat,Z=Math.acos((Math.cos(_*p)-Math.sin(s*p)*Math.sin(N*p))/(Math.cos(s*p)*Math.cos(N*p)))/p;(isNaN(Z)||Z===0)&&(Z=_/Math.cos(Math.PI/180*s)),this._point=A.subtract(u.getPixelOrigin()),this._radius=isNaN(Z)?0:A.x-u.project([N,i-Z]).x,this._radiusY=A.y-T.y}else{var X=d.unproject(d.project(this._latlng).subtract([this._mRadius,0]));this._point=u.latLngToLayerPoint(this._latlng),this._radius=this._point.x-u.latLngToLayerPoint(X).x}this._updateBounds()}});function Uw(i,s,u){return new ju(i,s,u)}var gn=In.extend({options:{smoothFactor:1,noClip:!1},initialize:function(i,s){P(this,s),this._setLatLngs(i)},getLatLngs:function(){return this._latlngs},setLatLngs:function(i){return this._setLatLngs(i),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(i){for(var s=1/0,u=null,d=ro,p,_,T=0,M=this._parts.length;T<M;T++)for(var A=this._parts[T],N=1,Z=A.length;N<Z;N++){p=A[N-1],_=A[N];var X=d(i,p,_,!0);X<s&&(s=X,u=d(i,p,_))}return u&&(u.distance=Math.sqrt(s)),u},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Sp(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(i,s){return s=s||this._defaultShape(),i=Y(i),s.push(i),this._bounds.extend(i),this.redraw()},_setLatLngs:function(i){this._bounds=new xe,this._latlngs=this._convertLatLngs(i)},_defaultShape:function(){return It(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(i){for(var s=[],u=It(i),d=0,p=i.length;d<p;d++)u?(s[d]=Y(i[d]),this._bounds.extend(s[d])):s[d]=this._convertLatLngs(i[d]);return s},_project:function(){var i=new V;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,i),this._bounds.isValid()&&i.isValid()&&(this._rawPxBounds=i,this._updateBounds())},_updateBounds:function(){var i=this._clickTolerance(),s=new D(i,i);this._rawPxBounds&&(this._pxBounds=new V([this._rawPxBounds.min.subtract(s),this._rawPxBounds.max.add(s)]))},_projectLatlngs:function(i,s,u){var d=i[0]instanceof te,p=i.length,_,T;if(d){for(T=[],_=0;_<p;_++)T[_]=this._map.latLngToLayerPoint(i[_]),u.extend(T[_]);s.push(T)}else for(_=0;_<p;_++)this._projectLatlngs(i[_],s,u)},_clipPoints:function(){var i=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(i))){if(this.options.noClip){this._parts=this._rings;return}var s=this._parts,u,d,p,_,T,M,A;for(u=0,p=0,_=this._rings.length;u<_;u++)for(A=this._rings[u],d=0,T=A.length;d<T-1;d++)M=wp(A[d],A[d+1],i,d,!0),M&&(s[p]=s[p]||[],s[p].push(M[0]),(M[1]!==A[d+1]||d===T-2)&&(s[p].push(M[1]),p++))}},_simplifyPoints:function(){for(var i=this._parts,s=this.options.smoothFactor,u=0,d=i.length;u<d;u++)i[u]=yp(i[u],s)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(i,s){var u,d,p,_,T,M,A=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(i))return!1;for(u=0,_=this._parts.length;u<_;u++)for(M=this._parts[u],d=0,T=M.length,p=T-1;d<T;p=d++)if(!(!s&&d===0)&&xp(i,M[p],M[d])<=A)return!0;return!1}});function Ww(i,s){return new gn(i,s)}gn._flat=bp;var nr=gn.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return vp(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(i){var s=gn.prototype._convertLatLngs.call(this,i),u=s.length;return u>=2&&s[0]instanceof te&&s[0].equals(s[u-1])&&s.pop(),s},_setLatLngs:function(i){gn.prototype._setLatLngs.call(this,i),It(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return It(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var i=this._renderer._bounds,s=this.options.weight,u=new D(s,s);if(i=new V(i.min.subtract(u),i.max.add(u)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(i))){if(this.options.noClip){this._parts=this._rings;return}for(var d=0,p=this._rings.length,_;d<p;d++)_=gp(this._rings[d],i,!0),_.length&&this._parts.push(_)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(i){var s=!1,u,d,p,_,T,M,A,N;if(!this._pxBounds||!this._pxBounds.contains(i))return!1;for(_=0,A=this._parts.length;_<A;_++)for(u=this._parts[_],T=0,N=u.length,M=N-1;T<N;M=T++)d=u[T],p=u[M],d.y>i.y!=p.y>i.y&&i.x<(p.x-d.x)*(i.y-d.y)/(p.y-d.y)+d.x&&(s=!s);return s||gn.prototype._containsPoint.call(this,i,!0)}});function Hw(i,s){return new nr(i,s)}var vn=mn.extend({initialize:function(i,s){P(this,s),this._layers={},i&&this.addData(i)},addData:function(i){var s=w(i)?i:i.features,u,d,p;if(s){for(u=0,d=s.length;u<d;u++)p=s[u],(p.geometries||p.geometry||p.features||p.coordinates)&&this.addData(p);return this}var _=this.options;if(_.filter&&!_.filter(i))return this;var T=Ds(i,_);return T?(T.feature=Bs(i),T.defaultOptions=T.options,this.resetStyle(T),_.onEachFeature&&_.onEachFeature(i,T),this.addLayer(T)):this},resetStyle:function(i){return i===void 0?this.eachLayer(this.resetStyle,this):(i.options=o({},i.defaultOptions),this._setLayerStyle(i,this.options.style),this)},setStyle:function(i){return this.eachLayer(function(s){this._setLayerStyle(s,i)},this)},_setLayerStyle:function(i,s){i.setStyle&&(typeof s=="function"&&(s=s(i.feature)),i.setStyle(s))}});function Ds(i,s){var u=i.type==="Feature"?i.geometry:i,d=u?u.coordinates:null,p=[],_=s&&s.pointToLayer,T=s&&s.coordsToLatLng||Mu,M,A,N,Z;if(!d&&!u)return null;switch(u.type){case"Point":return M=T(d),kp(_,i,M,s);case"MultiPoint":for(N=0,Z=d.length;N<Z;N++)M=T(d[N]),p.push(kp(_,i,M,s));return new mn(p);case"LineString":case"MultiLineString":return A=$s(d,u.type==="LineString"?0:1,T),new gn(A,s);case"Polygon":case"MultiPolygon":return A=$s(d,u.type==="Polygon"?1:2,T),new nr(A,s);case"GeometryCollection":for(N=0,Z=u.geometries.length;N<Z;N++){var X=Ds({geometry:u.geometries[N],type:"Feature",properties:i.properties},s);X&&p.push(X)}return new mn(p);case"FeatureCollection":for(N=0,Z=u.features.length;N<Z;N++){var re=Ds(u.features[N],s);re&&p.push(re)}return new mn(p);default:throw new Error("Invalid GeoJSON object.")}}function kp(i,s,u,d){return i?i(s,u):new Is(u,d&&d.markersInheritOptions&&d)}function Mu(i){return new te(i[1],i[0],i[2])}function $s(i,s,u){for(var d=[],p=0,_=i.length,T;p<_;p++)T=s?$s(i[p],s-1,u):(u||Mu)(i[p]),d.push(T);return d}function Au(i,s){return i=Y(i),i.alt!==void 0?[x(i.lng,s),x(i.lat,s),x(i.alt,s)]:[x(i.lng,s),x(i.lat,s)]}function Ns(i,s,u,d){for(var p=[],_=0,T=i.length;_<T;_++)p.push(s?Ns(i[_],It(i[_])?0:s-1,u,d):Au(i[_],d));return!s&&u&&p.length>0&&p.push(p[0].slice()),p}function ir(i,s){return i.feature?o({},i.feature,{geometry:s}):Bs(s)}function Bs(i){return i.type==="Feature"||i.type==="FeatureCollection"?i:{type:"Feature",properties:{},geometry:i}}var Ru={toGeoJSON:function(i){return ir(this,{type:"Point",coordinates:Au(this.getLatLng(),i)})}};Is.include(Ru),ju.include(Ru),Os.include(Ru),gn.include({toGeoJSON:function(i){var s=!It(this._latlngs),u=Ns(this._latlngs,s?1:0,!1,i);return ir(this,{type:(s?"Multi":"")+"LineString",coordinates:u})}}),nr.include({toGeoJSON:function(i){var s=!It(this._latlngs),u=s&&!It(this._latlngs[0]),d=Ns(this._latlngs,u?2:s?1:0,!0,i);return s||(d=[d]),ir(this,{type:(u?"Multi":"")+"Polygon",coordinates:d})}}),er.include({toMultiPoint:function(i){var s=[];return this.eachLayer(function(u){s.push(u.toGeoJSON(i).geometry.coordinates)}),ir(this,{type:"MultiPoint",coordinates:s})},toGeoJSON:function(i){var s=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(s==="MultiPoint")return this.toMultiPoint(i);var u=s==="GeometryCollection",d=[];return this.eachLayer(function(p){if(p.toGeoJSON){var _=p.toGeoJSON(i);if(u)d.push(_.geometry);else{var T=Bs(_);T.type==="FeatureCollection"?d.push.apply(d,T.features):d.push(T)}}}),u?ir(this,{geometries:d,type:"GeometryCollection"}):{type:"FeatureCollection",features:d}}});function Tp(i,s){return new vn(i,s)}var Gw=Tp,Fs=Gt.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(i,s,u){this._url=i,this._bounds=le(s),P(this,u)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(ne(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){Pe(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(i){return this.options.opacity=i,this._image&&this._updateOpacity(),this},setStyle:function(i){return i.opacity&&this.setOpacity(i.opacity),this},bringToFront:function(){return this._map&&qi(this._image),this},bringToBack:function(){return this._map&&Ji(this._image),this},setUrl:function(i){return this._url=i,this._image&&(this._image.src=i),this},setBounds:function(i){return this._bounds=le(i),this._map&&this._reset(),this},getEvents:function(){var i={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(i.zoomanim=this._animateZoom),i},setZIndex:function(i){return this.options.zIndex=i,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var i=this._url.tagName==="IMG",s=this._image=i?this._url:fe("img");if(ne(s,"leaflet-image-layer"),this._zoomAnimated&&ne(s,"leaflet-zoom-animated"),this.options.className&&ne(s,this.options.className),s.onselectstart=g,s.onmousemove=g,s.onload=l(this.fire,this,"load"),s.onerror=l(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(s.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),i){this._url=s.src;return}s.src=this._url,s.alt=this.options.alt},_animateZoom:function(i){var s=this._map.getZoomScale(i.zoom),u=this._map._latLngBoundsToNewLayerBounds(this._bounds,i.zoom,i.center).min;hi(this._image,u,s)},_reset:function(){var i=this._image,s=new V(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),u=s.getSize();Oe(i,s.min),i.style.width=u.x+"px",i.style.height=u.y+"px"},_updateOpacity:function(){Rt(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var i=this.options.errorOverlayUrl;i&&this._url!==i&&(this._url=i,this._image.src=i)},getCenter:function(){return this._bounds.getCenter()}}),Kw=function(i,s,u){return new Fs(i,s,u)},Lp=Fs.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var i=this._url.tagName==="VIDEO",s=this._image=i?this._url:fe("video");if(ne(s,"leaflet-image-layer"),this._zoomAnimated&&ne(s,"leaflet-zoom-animated"),this.options.className&&ne(s,this.options.className),s.onselectstart=g,s.onmousemove=g,s.onloadeddata=l(this.fire,this,"load"),i){for(var u=s.getElementsByTagName("source"),d=[],p=0;p<u.length;p++)d.push(u[p].src);this._url=u.length>0?d:[s.src];return}w(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(s.style,"objectFit")&&(s.style.objectFit="fill"),s.autoplay=!!this.options.autoplay,s.loop=!!this.options.loop,s.muted=!!this.options.muted,s.playsInline=!!this.options.playsInline;for(var _=0;_<this._url.length;_++){var T=fe("source");T.src=this._url[_],s.appendChild(T)}}});function Yw(i,s,u){return new Lp(i,s,u)}var Ep=Fs.extend({_initImage:function(){var i=this._image=this._url;ne(i,"leaflet-image-layer"),this._zoomAnimated&&ne(i,"leaflet-zoom-animated"),this.options.className&&ne(i,this.options.className),i.onselectstart=g,i.onmousemove=g}});function Xw(i,s,u){return new Ep(i,s,u)}var an=Gt.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(i,s){i&&(i instanceof te||w(i))?(this._latlng=Y(i),P(this,s)):(P(this,i),this._source=s),this.options.content&&(this._content=this.options.content)},openOn:function(i){return i=arguments.length?i:this._source._map,i.hasLayer(this)||i.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(i){return this._map?this.close():(arguments.length?this._source=i:i=this._source,this._prepareOpen(),this.openOn(i._map)),this},onAdd:function(i){this._zoomAnimated=i._zoomAnimated,this._container||this._initLayout(),i._fadeAnimated&&Rt(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),i._fadeAnimated&&Rt(this._container,1),this.bringToFront(),this.options.interactive&&(ne(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(i){i._fadeAnimated?(Rt(this._container,0),this._removeTimeout=setTimeout(l(Pe,void 0,this._container),200)):Pe(this._container),this.options.interactive&&(Ae(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(i){return this._latlng=Y(i),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(i){return this._content=i,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var i={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(i.zoomanim=this._animateZoom),i},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&qi(this._container),this},bringToBack:function(){return this._map&&Ji(this._container),this},_prepareOpen:function(i){var s=this._source;if(!s._map)return!1;if(s instanceof mn){s=null;var u=this._source._layers;for(var d in u)if(u[d]._map){s=u[d];break}if(!s)return!1;this._source=s}if(!i)if(s.getCenter)i=s.getCenter();else if(s.getLatLng)i=s.getLatLng();else if(s.getBounds)i=s.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(i),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var i=this._contentNode,s=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof s=="string")i.innerHTML=s;else{for(;i.hasChildNodes();)i.removeChild(i.firstChild);i.appendChild(s)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var i=this._map.latLngToLayerPoint(this._latlng),s=F(this.options.offset),u=this._getAnchor();this._zoomAnimated?Oe(this._container,i.add(u)):s=s.add(i).add(u);var d=this._containerBottom=-s.y,p=this._containerLeft=-Math.round(this._containerWidth/2)+s.x;this._container.style.bottom=d+"px",this._container.style.left=p+"px"}},_getAnchor:function(){return[0,0]}});ue.include({_initOverlay:function(i,s,u,d){var p=s;return p instanceof i||(p=new i(d).setContent(s)),u&&p.setLatLng(u),p}}),Gt.include({_initOverlay:function(i,s,u,d){var p=u;return p instanceof i?(P(p,d),p._source=this):(p=s&&!d?s:new i(d,this),p.setContent(u)),p}});var Vs=an.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(i){return i=arguments.length?i:this._source._map,!i.hasLayer(this)&&i._popup&&i._popup.options.autoClose&&i.removeLayer(i._popup),i._popup=this,an.prototype.openOn.call(this,i)},onAdd:function(i){an.prototype.onAdd.call(this,i),i.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof In||this._source.on("preclick",mi))},onRemove:function(i){an.prototype.onRemove.call(this,i),i.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof In||this._source.off("preclick",mi))},getEvents:function(){var i=an.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(i.preclick=this.close),this.options.keepInView&&(i.moveend=this._adjustPan),i},_initLayout:function(){var i="leaflet-popup",s=this._container=fe("div",i+" "+(this.options.className||"")+" leaflet-zoom-animated"),u=this._wrapper=fe("div",i+"-content-wrapper",s);if(this._contentNode=fe("div",i+"-content",u),no(s),Su(this._contentNode),ee(s,"contextmenu",mi),this._tipContainer=fe("div",i+"-tip-container",s),this._tip=fe("div",i+"-tip",this._tipContainer),this.options.closeButton){var d=this._closeButton=fe("a",i+"-close-button",s);d.setAttribute("role","button"),d.setAttribute("aria-label","Close popup"),d.href="#close",d.innerHTML='<span aria-hidden="true">&#215;</span>',ee(d,"click",function(p){Qe(p),this.close()},this)}},_updateLayout:function(){var i=this._contentNode,s=i.style;s.width="",s.whiteSpace="nowrap";var u=i.offsetWidth;u=Math.min(u,this.options.maxWidth),u=Math.max(u,this.options.minWidth),s.width=u+1+"px",s.whiteSpace="",s.height="";var d=i.offsetHeight,p=this.options.maxHeight,_="leaflet-popup-scrolled";p&&d>p?(s.height=p+"px",ne(i,_)):Ae(i,_),this._containerWidth=this._container.offsetWidth},_animateZoom:function(i){var s=this._map._latLngToNewLayerPoint(this._latlng,i.zoom,i.center),u=this._getAnchor();Oe(this._container,s.add(u))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var i=this._map,s=parseInt(qr(this._container,"marginBottom"),10)||0,u=this._container.offsetHeight+s,d=this._containerWidth,p=new D(this._containerLeft,-u-this._containerBottom);p._add(pi(this._container));var _=i.layerPointToContainerPoint(p),T=F(this.options.autoPanPadding),M=F(this.options.autoPanPaddingTopLeft||T),A=F(this.options.autoPanPaddingBottomRight||T),N=i.getSize(),Z=0,X=0;_.x+d+A.x>N.x&&(Z=_.x+d-N.x+A.x),_.x-Z-M.x<0&&(Z=_.x-M.x),_.y+u+A.y>N.y&&(X=_.y+u-N.y+A.y),_.y-X-M.y<0&&(X=_.y-M.y),(Z||X)&&(this.options.keepInView&&(this._autopanning=!0),i.fire("autopanstart").panBy([Z,X]))}},_getAnchor:function(){return F(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),Qw=function(i,s){return new Vs(i,s)};ue.mergeOptions({closePopupOnClick:!0}),ue.include({openPopup:function(i,s,u){return this._initOverlay(Vs,i,s,u).openOn(this),this},closePopup:function(i){return i=arguments.length?i:this._popup,i&&i.close(),this}}),Gt.include({bindPopup:function(i,s){return this._popup=this._initOverlay(Vs,this._popup,i,s),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(i){return this._popup&&(this instanceof mn||(this._popup._source=this),this._popup._prepareOpen(i||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(i){return this._popup&&this._popup.setContent(i),this},getPopup:function(){return this._popup},_openPopup:function(i){if(!(!this._popup||!this._map)){gi(i);var s=i.layer||i.target;if(this._popup._source===s&&!(s instanceof In)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(i.latlng);return}this._popup._source=s,this.openPopup(i.latlng)}},_movePopup:function(i){this._popup.setLatLng(i.latlng)},_onKeyPress:function(i){i.originalEvent.keyCode===13&&this._openPopup(i)}});var Zs=an.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(i){an.prototype.onAdd.call(this,i),this.setOpacity(this.options.opacity),i.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(i){an.prototype.onRemove.call(this,i),i.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var i=an.prototype.getEvents.call(this);return this.options.permanent||(i.preclick=this.close),i},_initLayout:function(){var i="leaflet-tooltip",s=i+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=fe("div",s),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+f(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(i){var s,u,d=this._map,p=this._container,_=d.latLngToContainerPoint(d.getCenter()),T=d.layerPointToContainerPoint(i),M=this.options.direction,A=p.offsetWidth,N=p.offsetHeight,Z=F(this.options.offset),X=this._getAnchor();M==="top"?(s=A/2,u=N):M==="bottom"?(s=A/2,u=0):M==="center"?(s=A/2,u=N/2):M==="right"?(s=0,u=N/2):M==="left"?(s=A,u=N/2):T.x<_.x?(M="right",s=0,u=N/2):(M="left",s=A+(Z.x+X.x)*2,u=N/2),i=i.subtract(F(s,u,!0)).add(Z).add(X),Ae(p,"leaflet-tooltip-right"),Ae(p,"leaflet-tooltip-left"),Ae(p,"leaflet-tooltip-top"),Ae(p,"leaflet-tooltip-bottom"),ne(p,"leaflet-tooltip-"+M),Oe(p,i)},_updatePosition:function(){var i=this._map.latLngToLayerPoint(this._latlng);this._setPosition(i)},setOpacity:function(i){this.options.opacity=i,this._container&&Rt(this._container,i)},_animateZoom:function(i){var s=this._map._latLngToNewLayerPoint(this._latlng,i.zoom,i.center);this._setPosition(s)},_getAnchor:function(){return F(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),qw=function(i,s){return new Zs(i,s)};ue.include({openTooltip:function(i,s,u){return this._initOverlay(Zs,i,s,u).openOn(this),this},closeTooltip:function(i){return i.close(),this}}),Gt.include({bindTooltip:function(i,s){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(Zs,this._tooltip,i,s),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(i){if(!(!i&&this._tooltipHandlersAdded)){var s=i?"off":"on",u={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?u.add=this._openTooltip:(u.mouseover=this._openTooltip,u.mouseout=this.closeTooltip,u.click=this._openTooltip,this._map?this._addFocusListeners():u.add=this._addFocusListeners),this._tooltip.options.sticky&&(u.mousemove=this._moveTooltip),this[s](u),this._tooltipHandlersAdded=!i}},openTooltip:function(i){return this._tooltip&&(this instanceof mn||(this._tooltip._source=this),this._tooltip._prepareOpen(i)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(i){return this._tooltip&&this._tooltip.setContent(i),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(i){var s=typeof i.getElement=="function"&&i.getElement();s&&(ee(s,"focus",function(){this._tooltip._source=i,this.openTooltip()},this),ee(s,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(i){var s=typeof i.getElement=="function"&&i.getElement();s&&s.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(i){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var s=this;this._map.once("moveend",function(){s._openOnceFlag=!1,s._openTooltip(i)});return}this._tooltip._source=i.layer||i.target,this.openTooltip(this._tooltip.options.sticky?i.latlng:void 0)}},_moveTooltip:function(i){var s=i.latlng,u,d;this._tooltip.options.sticky&&i.originalEvent&&(u=this._map.mouseEventToContainerPoint(i.originalEvent),d=this._map.containerPointToLayerPoint(u),s=this._map.layerPointToLatLng(d)),this._tooltip.setLatLng(s)}});var zp=tr.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(i){var s=i&&i.tagName==="DIV"?i:document.createElement("div"),u=this.options;if(u.html instanceof Element?(Es(s),s.appendChild(u.html)):s.innerHTML=u.html!==!1?u.html:"",u.bgPos){var d=F(u.bgPos);s.style.backgroundPosition=-d.x+"px "+-d.y+"px"}return this._setIconStyles(s,"icon"),s},createShadow:function(){return null}});function Jw(i){return new zp(i)}tr.Default=oo;var so=Gt.extend({options:{tileSize:256,opacity:1,updateWhenIdle:K.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(i){P(this,i)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(i){i._addZoomLimit(this)},onRemove:function(i){this._removeAllTiles(),Pe(this._container),i._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(qi(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(Ji(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(i){return this.options.opacity=i,this._updateOpacity(),this},setZIndex:function(i){return this.options.zIndex=i,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var i=this._clampZoom(this._map.getZoom());i!==this._tileZoom&&(this._tileZoom=i,this._updateLevels()),this._update()}return this},getEvents:function(){var i={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=h(this._onMoveEnd,this.options.updateInterval,this)),i.move=this._onMove),this._zoomAnimated&&(i.zoomanim=this._animateZoom),i},createTile:function(){return document.createElement("div")},getTileSize:function(){var i=this.options.tileSize;return i instanceof D?i:new D(i,i)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(i){for(var s=this.getPane().children,u=-i(-1/0,1/0),d=0,p=s.length,_;d<p;d++)_=s[d].style.zIndex,s[d]!==this._container&&_&&(u=i(u,+_));isFinite(u)&&(this.options.zIndex=u+i(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!K.ielt9){Rt(this._container,this.options.opacity);var i=+new Date,s=!1,u=!1;for(var d in this._tiles){var p=this._tiles[d];if(!(!p.current||!p.loaded)){var _=Math.min(1,(i-p.loaded)/200);Rt(p.el,_),_<1?s=!0:(p.active?u=!0:this._onOpaqueTile(p),p.active=!0)}}u&&!this._noPrune&&this._pruneTiles(),s&&(de(this._fadeFrame),this._fadeFrame=ae(this._updateOpacity,this))}},_onOpaqueTile:g,_initContainer:function(){this._container||(this._container=fe("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var i=this._tileZoom,s=this.options.maxZoom;if(i!==void 0){for(var u in this._levels)u=Number(u),this._levels[u].el.children.length||u===i?(this._levels[u].el.style.zIndex=s-Math.abs(i-u),this._onUpdateLevel(u)):(Pe(this._levels[u].el),this._removeTilesAtZoom(u),this._onRemoveLevel(u),delete this._levels[u]);var d=this._levels[i],p=this._map;return d||(d=this._levels[i]={},d.el=fe("div","leaflet-tile-container leaflet-zoom-animated",this._container),d.el.style.zIndex=s,d.origin=p.project(p.unproject(p.getPixelOrigin()),i).round(),d.zoom=i,this._setZoomTransform(d,p.getCenter(),p.getZoom()),g(d.el.offsetWidth),this._onCreateLevel(d)),this._level=d,d}},_onUpdateLevel:g,_onRemoveLevel:g,_onCreateLevel:g,_pruneTiles:function(){if(this._map){var i,s,u=this._map.getZoom();if(u>this.options.maxZoom||u<this.options.minZoom){this._removeAllTiles();return}for(i in this._tiles)s=this._tiles[i],s.retain=s.current;for(i in this._tiles)if(s=this._tiles[i],s.current&&!s.active){var d=s.coords;this._retainParent(d.x,d.y,d.z,d.z-5)||this._retainChildren(d.x,d.y,d.z,d.z+2)}for(i in this._tiles)this._tiles[i].retain||this._removeTile(i)}},_removeTilesAtZoom:function(i){for(var s in this._tiles)this._tiles[s].coords.z===i&&this._removeTile(s)},_removeAllTiles:function(){for(var i in this._tiles)this._removeTile(i)},_invalidateAll:function(){for(var i in this._levels)Pe(this._levels[i].el),this._onRemoveLevel(Number(i)),delete this._levels[i];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(i,s,u,d){var p=Math.floor(i/2),_=Math.floor(s/2),T=u-1,M=new D(+p,+_);M.z=+T;var A=this._tileCoordsToKey(M),N=this._tiles[A];return N&&N.active?(N.retain=!0,!0):(N&&N.loaded&&(N.retain=!0),T>d?this._retainParent(p,_,T,d):!1)},_retainChildren:function(i,s,u,d){for(var p=2*i;p<2*i+2;p++)for(var _=2*s;_<2*s+2;_++){var T=new D(p,_);T.z=u+1;var M=this._tileCoordsToKey(T),A=this._tiles[M];if(A&&A.active){A.retain=!0;continue}else A&&A.loaded&&(A.retain=!0);u+1<d&&this._retainChildren(p,_,u+1,d)}},_resetView:function(i){var s=i&&(i.pinch||i.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),s,s)},_animateZoom:function(i){this._setView(i.center,i.zoom,!0,i.noUpdate)},_clampZoom:function(i){var s=this.options;return s.minNativeZoom!==void 0&&i<s.minNativeZoom?s.minNativeZoom:s.maxNativeZoom!==void 0&&s.maxNativeZoom<i?s.maxNativeZoom:i},_setView:function(i,s,u,d){var p=Math.round(s);this.options.maxZoom!==void 0&&p>this.options.maxZoom||this.options.minZoom!==void 0&&p<this.options.minZoom?p=void 0:p=this._clampZoom(p);var _=this.options.updateWhenZooming&&p!==this._tileZoom;(!d||_)&&(this._tileZoom=p,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),p!==void 0&&this._update(i),u||this._pruneTiles(),this._noPrune=!!u),this._setZoomTransforms(i,s)},_setZoomTransforms:function(i,s){for(var u in this._levels)this._setZoomTransform(this._levels[u],i,s)},_setZoomTransform:function(i,s,u){var d=this._map.getZoomScale(u,i.zoom),p=i.origin.multiplyBy(d).subtract(this._map._getNewPixelOrigin(s,u)).round();K.any3d?hi(i.el,p,d):Oe(i.el,p)},_resetGrid:function(){var i=this._map,s=i.options.crs,u=this._tileSize=this.getTileSize(),d=this._tileZoom,p=this._map.getPixelWorldBounds(this._tileZoom);p&&(this._globalTileRange=this._pxBoundsToTileRange(p)),this._wrapX=s.wrapLng&&!this.options.noWrap&&[Math.floor(i.project([0,s.wrapLng[0]],d).x/u.x),Math.ceil(i.project([0,s.wrapLng[1]],d).x/u.y)],this._wrapY=s.wrapLat&&!this.options.noWrap&&[Math.floor(i.project([s.wrapLat[0],0],d).y/u.x),Math.ceil(i.project([s.wrapLat[1],0],d).y/u.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(i){var s=this._map,u=s._animatingZoom?Math.max(s._animateToZoom,s.getZoom()):s.getZoom(),d=s.getZoomScale(u,this._tileZoom),p=s.project(i,this._tileZoom).floor(),_=s.getSize().divideBy(d*2);return new V(p.subtract(_),p.add(_))},_update:function(i){var s=this._map;if(s){var u=this._clampZoom(s.getZoom());if(i===void 0&&(i=s.getCenter()),this._tileZoom!==void 0){var d=this._getTiledPixelBounds(i),p=this._pxBoundsToTileRange(d),_=p.getCenter(),T=[],M=this.options.keepBuffer,A=new V(p.getBottomLeft().subtract([M,-M]),p.getTopRight().add([M,-M]));if(!(isFinite(p.min.x)&&isFinite(p.min.y)&&isFinite(p.max.x)&&isFinite(p.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var N in this._tiles){var Z=this._tiles[N].coords;(Z.z!==this._tileZoom||!A.contains(new D(Z.x,Z.y)))&&(this._tiles[N].current=!1)}if(Math.abs(u-this._tileZoom)>1){this._setView(i,u);return}for(var X=p.min.y;X<=p.max.y;X++)for(var re=p.min.x;re<=p.max.x;re++){var ut=new D(re,X);if(ut.z=this._tileZoom,!!this._isValidTile(ut)){var We=this._tiles[this._tileCoordsToKey(ut)];We?We.current=!0:T.push(ut)}}if(T.sort(function(gt,or){return gt.distanceTo(_)-or.distanceTo(_)}),T.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var Ot=document.createDocumentFragment();for(re=0;re<T.length;re++)this._addTile(T[re],Ot);this._level.el.appendChild(Ot)}}}},_isValidTile:function(i){var s=this._map.options.crs;if(!s.infinite){var u=this._globalTileRange;if(!s.wrapLng&&(i.x<u.min.x||i.x>u.max.x)||!s.wrapLat&&(i.y<u.min.y||i.y>u.max.y))return!1}if(!this.options.bounds)return!0;var d=this._tileCoordsToBounds(i);return le(this.options.bounds).overlaps(d)},_keyToBounds:function(i){return this._tileCoordsToBounds(this._keyToTileCoords(i))},_tileCoordsToNwSe:function(i){var s=this._map,u=this.getTileSize(),d=i.scaleBy(u),p=d.add(u),_=s.unproject(d,i.z),T=s.unproject(p,i.z);return[_,T]},_tileCoordsToBounds:function(i){var s=this._tileCoordsToNwSe(i),u=new xe(s[0],s[1]);return this.options.noWrap||(u=this._map.wrapLatLngBounds(u)),u},_tileCoordsToKey:function(i){return i.x+":"+i.y+":"+i.z},_keyToTileCoords:function(i){var s=i.split(":"),u=new D(+s[0],+s[1]);return u.z=+s[2],u},_removeTile:function(i){var s=this._tiles[i];s&&(Pe(s.el),delete this._tiles[i],this.fire("tileunload",{tile:s.el,coords:this._keyToTileCoords(i)}))},_initTile:function(i){ne(i,"leaflet-tile");var s=this.getTileSize();i.style.width=s.x+"px",i.style.height=s.y+"px",i.onselectstart=g,i.onmousemove=g,K.ielt9&&this.options.opacity<1&&Rt(i,this.options.opacity)},_addTile:function(i,s){var u=this._getTilePos(i),d=this._tileCoordsToKey(i),p=this.createTile(this._wrapCoords(i),l(this._tileReady,this,i));this._initTile(p),this.createTile.length<2&&ae(l(this._tileReady,this,i,null,p)),Oe(p,u),this._tiles[d]={el:p,coords:i,current:!0},s.appendChild(p),this.fire("tileloadstart",{tile:p,coords:i})},_tileReady:function(i,s,u){s&&this.fire("tileerror",{error:s,tile:u,coords:i});var d=this._tileCoordsToKey(i);u=this._tiles[d],u&&(u.loaded=+new Date,this._map._fadeAnimated?(Rt(u.el,0),de(this._fadeFrame),this._fadeFrame=ae(this._updateOpacity,this)):(u.active=!0,this._pruneTiles()),s||(ne(u.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:u.el,coords:i})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),K.ielt9||!this._map._fadeAnimated?ae(this._pruneTiles,this):setTimeout(l(this._pruneTiles,this),250)))},_getTilePos:function(i){return i.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(i){var s=new D(this._wrapX?v(i.x,this._wrapX):i.x,this._wrapY?v(i.y,this._wrapY):i.y);return s.z=i.z,s},_pxBoundsToTileRange:function(i){var s=this.getTileSize();return new V(i.min.unscaleBy(s).floor(),i.max.unscaleBy(s).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var i in this._tiles)if(!this._tiles[i].loaded)return!1;return!0}});function eb(i){return new so(i)}var rr=so.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(i,s){this._url=i,s=P(this,s),s.detectRetina&&K.retina&&s.maxZoom>0?(s.tileSize=Math.floor(s.tileSize/2),s.zoomReverse?(s.zoomOffset--,s.minZoom=Math.min(s.maxZoom,s.minZoom+1)):(s.zoomOffset++,s.maxZoom=Math.max(s.minZoom,s.maxZoom-1)),s.minZoom=Math.max(0,s.minZoom)):s.zoomReverse?s.minZoom=Math.min(s.maxZoom,s.minZoom):s.maxZoom=Math.max(s.minZoom,s.maxZoom),typeof s.subdomains=="string"&&(s.subdomains=s.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(i,s){return this._url===i&&s===void 0&&(s=!0),this._url=i,s||this.redraw(),this},createTile:function(i,s){var u=document.createElement("img");return ee(u,"load",l(this._tileOnLoad,this,s,u)),ee(u,"error",l(this._tileOnError,this,s,u)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(u.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(u.referrerPolicy=this.options.referrerPolicy),u.alt="",u.src=this.getTileUrl(i),u},getTileUrl:function(i){var s={r:K.retina?"@2x":"",s:this._getSubdomain(i),x:i.x,y:i.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var u=this._globalTileRange.max.y-i.y;this.options.tms&&(s.y=u),s["-y"]=u}return y(this._url,o(s,this.options))},_tileOnLoad:function(i,s){K.ielt9?setTimeout(l(i,this,null,s),0):i(null,s)},_tileOnError:function(i,s,u){var d=this.options.errorTileUrl;d&&s.getAttribute("src")!==d&&(s.src=d),i(u,s)},_onTileRemove:function(i){i.tile.onload=null},_getZoomForUrl:function(){var i=this._tileZoom,s=this.options.maxZoom,u=this.options.zoomReverse,d=this.options.zoomOffset;return u&&(i=s-i),i+d},_getSubdomain:function(i){var s=Math.abs(i.x+i.y)%this.options.subdomains.length;return this.options.subdomains[s]},_abortLoading:function(){var i,s;for(i in this._tiles)if(this._tiles[i].coords.z!==this._tileZoom&&(s=this._tiles[i].el,s.onload=g,s.onerror=g,!s.complete)){s.src=R;var u=this._tiles[i].coords;Pe(s),delete this._tiles[i],this.fire("tileabort",{tile:s,coords:u})}},_removeTile:function(i){var s=this._tiles[i];if(s)return s.el.setAttribute("src",R),so.prototype._removeTile.call(this,i)},_tileReady:function(i,s,u){if(!(!this._map||u&&u.getAttribute("src")===R))return so.prototype._tileReady.call(this,i,s,u)}});function jp(i,s){return new rr(i,s)}var Mp=rr.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(i,s){this._url=i;var u=o({},this.defaultWmsParams);for(var d in s)d in this.options||(u[d]=s[d]);s=P(this,s);var p=s.detectRetina&&K.retina?2:1,_=this.getTileSize();u.width=_.x*p,u.height=_.y*p,this.wmsParams=u},onAdd:function(i){this._crs=this.options.crs||i.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var s=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[s]=this._crs.code,rr.prototype.onAdd.call(this,i)},getTileUrl:function(i){var s=this._tileCoordsToNwSe(i),u=this._crs,d=q(u.project(s[0]),u.project(s[1])),p=d.min,_=d.max,T=(this._wmsVersion>=1.3&&this._crs===Cp?[p.y,p.x,_.y,_.x]:[p.x,p.y,_.x,_.y]).join(","),M=rr.prototype.getTileUrl.call(this,i);return M+j(this.wmsParams,M,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+T},setParams:function(i,s){return o(this.wmsParams,i),s||this.redraw(),this}});function tb(i,s){return new Mp(i,s)}rr.WMS=Mp,jp.wms=tb;var yn=Gt.extend({options:{padding:.1},initialize:function(i){P(this,i),f(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),ne(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var i={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(i.zoomanim=this._onAnimZoom),i},_onAnimZoom:function(i){this._updateTransform(i.center,i.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(i,s){var u=this._map.getZoomScale(s,this._zoom),d=this._map.getSize().multiplyBy(.5+this.options.padding),p=this._map.project(this._center,s),_=d.multiplyBy(-u).add(p).subtract(this._map._getNewPixelOrigin(i,s));K.any3d?hi(this._container,_,u):Oe(this._container,_)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var i in this._layers)this._layers[i]._reset()},_onZoomEnd:function(){for(var i in this._layers)this._layers[i]._project()},_updatePaths:function(){for(var i in this._layers)this._layers[i]._update()},_update:function(){var i=this.options.padding,s=this._map.getSize(),u=this._map.containerPointToLayerPoint(s.multiplyBy(-i)).round();this._bounds=new V(u,u.add(s.multiplyBy(1+i*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),Ap=yn.extend({options:{tolerance:0},getEvents:function(){var i=yn.prototype.getEvents.call(this);return i.viewprereset=this._onViewPreReset,i},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){yn.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var i=this._container=document.createElement("canvas");ee(i,"mousemove",this._onMouseMove,this),ee(i,"click dblclick mousedown mouseup contextmenu",this._onClick,this),ee(i,"mouseout",this._handleMouseOut,this),i._leaflet_disable_events=!0,this._ctx=i.getContext("2d")},_destroyContainer:function(){de(this._redrawRequest),delete this._ctx,Pe(this._container),ge(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var i;this._redrawBounds=null;for(var s in this._layers)i=this._layers[s],i._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){yn.prototype._update.call(this);var i=this._bounds,s=this._container,u=i.getSize(),d=K.retina?2:1;Oe(s,i.min),s.width=d*u.x,s.height=d*u.y,s.style.width=u.x+"px",s.style.height=u.y+"px",K.retina&&this._ctx.scale(2,2),this._ctx.translate(-i.min.x,-i.min.y),this.fire("update")}},_reset:function(){yn.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(i){this._updateDashArray(i),this._layers[f(i)]=i;var s=i._order={layer:i,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=s),this._drawLast=s,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(i){this._requestRedraw(i)},_removePath:function(i){var s=i._order,u=s.next,d=s.prev;u?u.prev=d:this._drawLast=d,d?d.next=u:this._drawFirst=u,delete i._order,delete this._layers[f(i)],this._requestRedraw(i)},_updatePath:function(i){this._extendRedrawBounds(i),i._project(),i._update(),this._requestRedraw(i)},_updateStyle:function(i){this._updateDashArray(i),this._requestRedraw(i)},_updateDashArray:function(i){if(typeof i.options.dashArray=="string"){var s=i.options.dashArray.split(/[, ]+/),u=[],d,p;for(p=0;p<s.length;p++){if(d=Number(s[p]),isNaN(d))return;u.push(d)}i.options._dashArray=u}else i.options._dashArray=i.options.dashArray},_requestRedraw:function(i){this._map&&(this._extendRedrawBounds(i),this._redrawRequest=this._redrawRequest||ae(this._redraw,this))},_extendRedrawBounds:function(i){if(i._pxBounds){var s=(i.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new V,this._redrawBounds.extend(i._pxBounds.min.subtract([s,s])),this._redrawBounds.extend(i._pxBounds.max.add([s,s]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var i=this._redrawBounds;if(i){var s=i.getSize();this._ctx.clearRect(i.min.x,i.min.y,s.x,s.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var i,s=this._redrawBounds;if(this._ctx.save(),s){var u=s.getSize();this._ctx.beginPath(),this._ctx.rect(s.min.x,s.min.y,u.x,u.y),this._ctx.clip()}this._drawing=!0;for(var d=this._drawFirst;d;d=d.next)i=d.layer,(!s||i._pxBounds&&i._pxBounds.intersects(s))&&i._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(i,s){if(this._drawing){var u,d,p,_,T=i._parts,M=T.length,A=this._ctx;if(M){for(A.beginPath(),u=0;u<M;u++){for(d=0,p=T[u].length;d<p;d++)_=T[u][d],A[d?"lineTo":"moveTo"](_.x,_.y);s&&A.closePath()}this._fillStroke(A,i)}}},_updateCircle:function(i){if(!(!this._drawing||i._empty())){var s=i._point,u=this._ctx,d=Math.max(Math.round(i._radius),1),p=(Math.max(Math.round(i._radiusY),1)||d)/d;p!==1&&(u.save(),u.scale(1,p)),u.beginPath(),u.arc(s.x,s.y/p,d,0,Math.PI*2,!1),p!==1&&u.restore(),this._fillStroke(u,i)}},_fillStroke:function(i,s){var u=s.options;u.fill&&(i.globalAlpha=u.fillOpacity,i.fillStyle=u.fillColor||u.color,i.fill(u.fillRule||"evenodd")),u.stroke&&u.weight!==0&&(i.setLineDash&&i.setLineDash(s.options&&s.options._dashArray||[]),i.globalAlpha=u.opacity,i.lineWidth=u.weight,i.strokeStyle=u.color,i.lineCap=u.lineCap,i.lineJoin=u.lineJoin,i.stroke())},_onClick:function(i){for(var s=this._map.mouseEventToLayerPoint(i),u,d,p=this._drawFirst;p;p=p.next)u=p.layer,u.options.interactive&&u._containsPoint(s)&&(!(i.type==="click"||i.type==="preclick")||!this._map._draggableMoved(u))&&(d=u);this._fireEvent(d?[d]:!1,i)},_onMouseMove:function(i){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var s=this._map.mouseEventToLayerPoint(i);this._handleMouseHover(i,s)}},_handleMouseOut:function(i){var s=this._hoveredLayer;s&&(Ae(this._container,"leaflet-interactive"),this._fireEvent([s],i,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(i,s){if(!this._mouseHoverThrottled){for(var u,d,p=this._drawFirst;p;p=p.next)u=p.layer,u.options.interactive&&u._containsPoint(s)&&(d=u);d!==this._hoveredLayer&&(this._handleMouseOut(i),d&&(ne(this._container,"leaflet-interactive"),this._fireEvent([d],i,"mouseover"),this._hoveredLayer=d)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,i),this._mouseHoverThrottled=!0,setTimeout(l(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(i,s,u){this._map._fireDOMEvent(s,u||s.type,i)},_bringToFront:function(i){var s=i._order;if(s){var u=s.next,d=s.prev;if(u)u.prev=d;else return;d?d.next=u:u&&(this._drawFirst=u),s.prev=this._drawLast,this._drawLast.next=s,s.next=null,this._drawLast=s,this._requestRedraw(i)}},_bringToBack:function(i){var s=i._order;if(s){var u=s.next,d=s.prev;if(d)d.next=u;else return;u?u.prev=d:d&&(this._drawLast=d),s.prev=null,s.next=this._drawFirst,this._drawFirst.prev=s,this._drawFirst=s,this._requestRedraw(i)}}});function Rp(i){return K.canvas?new Ap(i):null}var ao=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(i){return document.createElement("<lvml:"+i+' class="lvml">')}}catch{}return function(i){return document.createElement("<"+i+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}(),nb={_initContainer:function(){this._container=fe("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(yn.prototype._update.call(this),this.fire("update"))},_initPath:function(i){var s=i._container=ao("shape");ne(s,"leaflet-vml-shape "+(this.options.className||"")),s.coordsize="1 1",i._path=ao("path"),s.appendChild(i._path),this._updateStyle(i),this._layers[f(i)]=i},_addPath:function(i){var s=i._container;this._container.appendChild(s),i.options.interactive&&i.addInteractiveTarget(s)},_removePath:function(i){var s=i._container;Pe(s),i.removeInteractiveTarget(s),delete this._layers[f(i)]},_updateStyle:function(i){var s=i._stroke,u=i._fill,d=i.options,p=i._container;p.stroked=!!d.stroke,p.filled=!!d.fill,d.stroke?(s||(s=i._stroke=ao("stroke")),p.appendChild(s),s.weight=d.weight+"px",s.color=d.color,s.opacity=d.opacity,d.dashArray?s.dashStyle=w(d.dashArray)?d.dashArray.join(" "):d.dashArray.replace(/( *, *)/g," "):s.dashStyle="",s.endcap=d.lineCap.replace("butt","flat"),s.joinstyle=d.lineJoin):s&&(p.removeChild(s),i._stroke=null),d.fill?(u||(u=i._fill=ao("fill")),p.appendChild(u),u.color=d.fillColor||d.color,u.opacity=d.fillOpacity):u&&(p.removeChild(u),i._fill=null)},_updateCircle:function(i){var s=i._point.round(),u=Math.round(i._radius),d=Math.round(i._radiusY||u);this._setPath(i,i._empty()?"M0 0":"AL "+s.x+","+s.y+" "+u+","+d+" 0,"+65535*360)},_setPath:function(i,s){i._path.v=s},_bringToFront:function(i){qi(i._container)},_bringToBack:function(i){Ji(i._container)}},Us=K.vml?ao:$h,lo=yn.extend({_initContainer:function(){this._container=Us("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=Us("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){Pe(this._container),ge(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){yn.prototype._update.call(this);var i=this._bounds,s=i.getSize(),u=this._container;(!this._svgSize||!this._svgSize.equals(s))&&(this._svgSize=s,u.setAttribute("width",s.x),u.setAttribute("height",s.y)),Oe(u,i.min),u.setAttribute("viewBox",[i.min.x,i.min.y,s.x,s.y].join(" ")),this.fire("update")}},_initPath:function(i){var s=i._path=Us("path");i.options.className&&ne(s,i.options.className),i.options.interactive&&ne(s,"leaflet-interactive"),this._updateStyle(i),this._layers[f(i)]=i},_addPath:function(i){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(i._path),i.addInteractiveTarget(i._path)},_removePath:function(i){Pe(i._path),i.removeInteractiveTarget(i._path),delete this._layers[f(i)]},_updatePath:function(i){i._project(),i._update()},_updateStyle:function(i){var s=i._path,u=i.options;s&&(u.stroke?(s.setAttribute("stroke",u.color),s.setAttribute("stroke-opacity",u.opacity),s.setAttribute("stroke-width",u.weight),s.setAttribute("stroke-linecap",u.lineCap),s.setAttribute("stroke-linejoin",u.lineJoin),u.dashArray?s.setAttribute("stroke-dasharray",u.dashArray):s.removeAttribute("stroke-dasharray"),u.dashOffset?s.setAttribute("stroke-dashoffset",u.dashOffset):s.removeAttribute("stroke-dashoffset")):s.setAttribute("stroke","none"),u.fill?(s.setAttribute("fill",u.fillColor||u.color),s.setAttribute("fill-opacity",u.fillOpacity),s.setAttribute("fill-rule",u.fillRule||"evenodd")):s.setAttribute("fill","none"))},_updatePoly:function(i,s){this._setPath(i,Nh(i._parts,s))},_updateCircle:function(i){var s=i._point,u=Math.max(Math.round(i._radius),1),d=Math.max(Math.round(i._radiusY),1)||u,p="a"+u+","+d+" 0 1,0 ",_=i._empty()?"M0 0":"M"+(s.x-u)+","+s.y+p+u*2+",0 "+p+-u*2+",0 ";this._setPath(i,_)},_setPath:function(i,s){i._path.setAttribute("d",s)},_bringToFront:function(i){qi(i._path)},_bringToBack:function(i){Ji(i._path)}});K.vml&&lo.include(nb);function Ip(i){return K.svg||K.vml?new lo(i):null}ue.include({getRenderer:function(i){var s=i.options.renderer||this._getPaneRenderer(i.options.pane)||this.options.renderer||this._renderer;return s||(s=this._renderer=this._createRenderer()),this.hasLayer(s)||this.addLayer(s),s},_getPaneRenderer:function(i){if(i==="overlayPane"||i===void 0)return!1;var s=this._paneRenderers[i];return s===void 0&&(s=this._createRenderer({pane:i}),this._paneRenderers[i]=s),s},_createRenderer:function(i){return this.options.preferCanvas&&Rp(i)||Ip(i)}});var Op=nr.extend({initialize:function(i,s){nr.prototype.initialize.call(this,this._boundsToLatLngs(i),s)},setBounds:function(i){return this.setLatLngs(this._boundsToLatLngs(i))},_boundsToLatLngs:function(i){return i=le(i),[i.getSouthWest(),i.getNorthWest(),i.getNorthEast(),i.getSouthEast()]}});function ib(i,s){return new Op(i,s)}lo.create=Us,lo.pointsToPath=Nh,vn.geometryToLayer=Ds,vn.coordsToLatLng=Mu,vn.coordsToLatLngs=$s,vn.latLngToCoords=Au,vn.latLngsToCoords=Ns,vn.getFeature=ir,vn.asFeature=Bs,ue.mergeOptions({boxZoom:!0});var Dp=sn.extend({initialize:function(i){this._map=i,this._container=i._container,this._pane=i._panes.overlayPane,this._resetStateTimeout=0,i.on("unload",this._destroy,this)},addHooks:function(){ee(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){ge(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){Pe(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(i){if(!i.shiftKey||i.which!==1&&i.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),Jr(),mu(),this._startPoint=this._map.mouseEventToContainerPoint(i),ee(document,{contextmenu:gi,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(i){this._moved||(this._moved=!0,this._box=fe("div","leaflet-zoom-box",this._container),ne(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(i);var s=new V(this._point,this._startPoint),u=s.getSize();Oe(this._box,s.min),this._box.style.width=u.x+"px",this._box.style.height=u.y+"px"},_finish:function(){this._moved&&(Pe(this._box),Ae(this._container,"leaflet-crosshair")),eo(),gu(),ge(document,{contextmenu:gi,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(i){if(!(i.which!==1&&i.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(l(this._resetState,this),0);var s=new xe(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(s).fire("boxzoomend",{boxZoomBounds:s})}},_onKeyDown:function(i){i.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});ue.addInitHook("addHandler","boxZoom",Dp),ue.mergeOptions({doubleClickZoom:!0});var $p=sn.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(i){var s=this._map,u=s.getZoom(),d=s.options.zoomDelta,p=i.originalEvent.shiftKey?u-d:u+d;s.options.doubleClickZoom==="center"?s.setZoom(p):s.setZoomAround(i.containerPoint,p)}});ue.addInitHook("addHandler","doubleClickZoom",$p),ue.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var Np=sn.extend({addHooks:function(){if(!this._draggable){var i=this._map;this._draggable=new Rn(i._mapPane,i._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),i.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),i.on("zoomend",this._onZoomEnd,this),i.whenReady(this._onZoomEnd,this))}ne(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){Ae(this._map._container,"leaflet-grab"),Ae(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var i=this._map;if(i._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var s=le(this._map.options.maxBounds);this._offsetLimit=q(this._map.latLngToContainerPoint(s.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(s.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;i.fire("movestart").fire("dragstart"),i.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(i){if(this._map.options.inertia){var s=this._lastTime=+new Date,u=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(u),this._times.push(s),this._prunePositions(s)}this._map.fire("move",i).fire("drag",i)},_prunePositions:function(i){for(;this._positions.length>1&&i-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var i=this._map.getSize().divideBy(2),s=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=s.subtract(i).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(i,s){return i-(i-s)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var i=this._draggable._newPos.subtract(this._draggable._startPos),s=this._offsetLimit;i.x<s.min.x&&(i.x=this._viscousLimit(i.x,s.min.x)),i.y<s.min.y&&(i.y=this._viscousLimit(i.y,s.min.y)),i.x>s.max.x&&(i.x=this._viscousLimit(i.x,s.max.x)),i.y>s.max.y&&(i.y=this._viscousLimit(i.y,s.max.y)),this._draggable._newPos=this._draggable._startPos.add(i)}},_onPreDragWrap:function(){var i=this._worldWidth,s=Math.round(i/2),u=this._initialWorldOffset,d=this._draggable._newPos.x,p=(d-s+u)%i+s-u,_=(d+s+u)%i-s-u,T=Math.abs(p+u)<Math.abs(_+u)?p:_;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=T},_onDragEnd:function(i){var s=this._map,u=s.options,d=!u.inertia||i.noInertia||this._times.length<2;if(s.fire("dragend",i),d)s.fire("moveend");else{this._prunePositions(+new Date);var p=this._lastPos.subtract(this._positions[0]),_=(this._lastTime-this._times[0])/1e3,T=u.easeLinearity,M=p.multiplyBy(T/_),A=M.distanceTo([0,0]),N=Math.min(u.inertiaMaxSpeed,A),Z=M.multiplyBy(N/A),X=N/(u.inertiaDeceleration*T),re=Z.multiplyBy(-X/2).round();!re.x&&!re.y?s.fire("moveend"):(re=s._limitOffset(re,s.options.maxBounds),ae(function(){s.panBy(re,{duration:X,easeLinearity:T,noMoveStart:!0,animate:!0})}))}}});ue.addInitHook("addHandler","dragging",Np),ue.mergeOptions({keyboard:!0,keyboardPanDelta:80});var Bp=sn.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(i){this._map=i,this._setPanDelta(i.options.keyboardPanDelta),this._setZoomDelta(i.options.zoomDelta)},addHooks:function(){var i=this._map._container;i.tabIndex<=0&&(i.tabIndex="0"),ee(i,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),ge(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var i=document.body,s=document.documentElement,u=i.scrollTop||s.scrollTop,d=i.scrollLeft||s.scrollLeft;this._map._container.focus(),window.scrollTo(d,u)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(i){var s=this._panKeys={},u=this.keyCodes,d,p;for(d=0,p=u.left.length;d<p;d++)s[u.left[d]]=[-1*i,0];for(d=0,p=u.right.length;d<p;d++)s[u.right[d]]=[i,0];for(d=0,p=u.down.length;d<p;d++)s[u.down[d]]=[0,i];for(d=0,p=u.up.length;d<p;d++)s[u.up[d]]=[0,-1*i]},_setZoomDelta:function(i){var s=this._zoomKeys={},u=this.keyCodes,d,p;for(d=0,p=u.zoomIn.length;d<p;d++)s[u.zoomIn[d]]=i;for(d=0,p=u.zoomOut.length;d<p;d++)s[u.zoomOut[d]]=-i},_addHooks:function(){ee(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){ge(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(i){if(!(i.altKey||i.ctrlKey||i.metaKey)){var s=i.keyCode,u=this._map,d;if(s in this._panKeys){if(!u._panAnim||!u._panAnim._inProgress)if(d=this._panKeys[s],i.shiftKey&&(d=F(d).multiplyBy(3)),u.options.maxBounds&&(d=u._limitOffset(F(d),u.options.maxBounds)),u.options.worldCopyJump){var p=u.wrapLatLng(u.unproject(u.project(u.getCenter()).add(d)));u.panTo(p)}else u.panBy(d)}else if(s in this._zoomKeys)u.setZoom(u.getZoom()+(i.shiftKey?3:1)*this._zoomKeys[s]);else if(s===27&&u._popup&&u._popup.options.closeOnEscapeKey)u.closePopup();else return;gi(i)}}});ue.addInitHook("addHandler","keyboard",Bp),ue.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var Fp=sn.extend({addHooks:function(){ee(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){ge(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(i){var s=dp(i),u=this._map.options.wheelDebounceTime;this._delta+=s,this._lastMousePos=this._map.mouseEventToContainerPoint(i),this._startTime||(this._startTime=+new Date);var d=Math.max(u-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(l(this._performZoom,this),d),gi(i)},_performZoom:function(){var i=this._map,s=i.getZoom(),u=this._map.options.zoomSnap||0;i._stop();var d=this._delta/(this._map.options.wheelPxPerZoomLevel*4),p=4*Math.log(2/(1+Math.exp(-Math.abs(d))))/Math.LN2,_=u?Math.ceil(p/u)*u:p,T=i._limitZoom(s+(this._delta>0?_:-_))-s;this._delta=0,this._startTime=null,T&&(i.options.scrollWheelZoom==="center"?i.setZoom(s+T):i.setZoomAround(this._lastMousePos,s+T))}});ue.addInitHook("addHandler","scrollWheelZoom",Fp);var rb=600;ue.mergeOptions({tapHold:K.touchNative&&K.safari&&K.mobile,tapTolerance:15});var Vp=sn.extend({addHooks:function(){ee(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){ge(this._map._container,"touchstart",this._onDown,this)},_onDown:function(i){if(clearTimeout(this._holdTimeout),i.touches.length===1){var s=i.touches[0];this._startPos=this._newPos=new D(s.clientX,s.clientY),this._holdTimeout=setTimeout(l(function(){this._cancel(),this._isTapValid()&&(ee(document,"touchend",Qe),ee(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",s))},this),rb),ee(document,"touchend touchcancel contextmenu",this._cancel,this),ee(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function i(){ge(document,"touchend",Qe),ge(document,"touchend touchcancel",i)},_cancel:function(){clearTimeout(this._holdTimeout),ge(document,"touchend touchcancel contextmenu",this._cancel,this),ge(document,"touchmove",this._onMove,this)},_onMove:function(i){var s=i.touches[0];this._newPos=new D(s.clientX,s.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(i,s){var u=new MouseEvent(i,{bubbles:!0,cancelable:!0,view:window,screenX:s.screenX,screenY:s.screenY,clientX:s.clientX,clientY:s.clientY});u._simulated=!0,s.target.dispatchEvent(u)}});ue.addInitHook("addHandler","tapHold",Vp),ue.mergeOptions({touchZoom:K.touch,bounceAtZoomLimits:!0});var Zp=sn.extend({addHooks:function(){ne(this._map._container,"leaflet-touch-zoom"),ee(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){Ae(this._map._container,"leaflet-touch-zoom"),ge(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(i){var s=this._map;if(!(!i.touches||i.touches.length!==2||s._animatingZoom||this._zooming)){var u=s.mouseEventToContainerPoint(i.touches[0]),d=s.mouseEventToContainerPoint(i.touches[1]);this._centerPoint=s.getSize()._divideBy(2),this._startLatLng=s.containerPointToLatLng(this._centerPoint),s.options.touchZoom!=="center"&&(this._pinchStartLatLng=s.containerPointToLatLng(u.add(d)._divideBy(2))),this._startDist=u.distanceTo(d),this._startZoom=s.getZoom(),this._moved=!1,this._zooming=!0,s._stop(),ee(document,"touchmove",this._onTouchMove,this),ee(document,"touchend touchcancel",this._onTouchEnd,this),Qe(i)}},_onTouchMove:function(i){if(!(!i.touches||i.touches.length!==2||!this._zooming)){var s=this._map,u=s.mouseEventToContainerPoint(i.touches[0]),d=s.mouseEventToContainerPoint(i.touches[1]),p=u.distanceTo(d)/this._startDist;if(this._zoom=s.getScaleZoom(p,this._startZoom),!s.options.bounceAtZoomLimits&&(this._zoom<s.getMinZoom()&&p<1||this._zoom>s.getMaxZoom()&&p>1)&&(this._zoom=s._limitZoom(this._zoom)),s.options.touchZoom==="center"){if(this._center=this._startLatLng,p===1)return}else{var _=u._add(d)._divideBy(2)._subtract(this._centerPoint);if(p===1&&_.x===0&&_.y===0)return;this._center=s.unproject(s.project(this._pinchStartLatLng,this._zoom).subtract(_),this._zoom)}this._moved||(s._moveStart(!0,!1),this._moved=!0),de(this._animRequest);var T=l(s._move,s,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=ae(T,this,!0),Qe(i)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,de(this._animRequest),ge(document,"touchmove",this._onTouchMove,this),ge(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});ue.addInitHook("addHandler","touchZoom",Zp),ue.BoxZoom=Dp,ue.DoubleClickZoom=$p,ue.Drag=Np,ue.Keyboard=Bp,ue.ScrollWheelZoom=Fp,ue.TapHold=Vp,ue.TouchZoom=Zp,n.Bounds=V,n.Browser=K,n.CRS=je,n.Canvas=Ap,n.Circle=ju,n.CircleMarker=Os,n.Class=he,n.Control=Ht,n.DivIcon=zp,n.DivOverlay=an,n.DomEvent=bw,n.DomUtil=_w,n.Draggable=Rn,n.Evented=ze,n.FeatureGroup=mn,n.GeoJSON=vn,n.GridLayer=so,n.Handler=sn,n.Icon=tr,n.ImageOverlay=Fs,n.LatLng=te,n.LatLngBounds=xe,n.Layer=Gt,n.LayerGroup=er,n.LineUtil=Iw,n.Map=ue,n.Marker=Is,n.Mixin=Ew,n.Path=In,n.Point=D,n.PolyUtil=zw,n.Polygon=nr,n.Polyline=gn,n.Popup=Vs,n.PosAnimation=fp,n.Projection=Ow,n.Rectangle=Op,n.Renderer=yn,n.SVG=lo,n.SVGOverlay=Ep,n.TileLayer=rr,n.Tooltip=Zs,n.Transformation=nt,n.Util=Ve,n.VideoOverlay=Lp,n.bind=l,n.bounds=q,n.canvas=Rp,n.circle=Uw,n.circleMarker=Zw,n.control=io,n.divIcon=Jw,n.extend=o,n.featureGroup=Bw,n.geoJSON=Tp,n.geoJson=Gw,n.gridLayer=eb,n.icon=Fw,n.imageOverlay=Kw,n.latLng=Y,n.latLngBounds=le,n.layerGroup=Nw,n.map=Sw,n.marker=Vw,n.point=F,n.polygon=Hw,n.polyline=Ww,n.popup=Qw,n.rectangle=ib,n.setOptions=P,n.stamp=f,n.svg=Ip,n.svgOverlay=Xw,n.tileLayer=jp,n.tooltip=qw,n.transformation=lt,n.version=r,n.videoOverlay=Yw;var ob=window.L;n.noConflict=function(){return window.L=ob,this},window.L=n})})(rf,rf.exports);var ks=rf.exports;const _z=dv(ks);function Oh(e,t,n){return Object.freeze({instance:e,context:t,container:n})}function Dh(e,t){return t==null?function(r,o){const a=E.useRef();return a.current||(a.current=e(r,o)),a}:function(r,o){const a=E.useRef();a.current||(a.current=e(r,o));const l=E.useRef(r),{instance:c}=a.current;return E.useEffect(function(){l.current!==r&&(t(c,r,l.current),l.current=r)},[c,r,o]),a}}function wz(e,t){E.useEffect(function(){return(t.layerContainer??t.map).addLayer(e.instance),function(){var a;(a=t.layerContainer)==null||a.removeLayer(e.instance),t.map.removeLayer(e.instance)}},[t,e])}function Z1(e){return function(n){const r=Rh(),o=e(Ih(n,r),r);return N1(r.map,n.attribution),V1(o.current,n.eventHandlers),wz(o.current,r),o}}function bz(e,t){const n=Dh(e,t),r=Z1(n);return gz(r)}function Sz(e,t){const n=Dh(e),r=xz(n,t);return vz(r)}function Cz(e,t){const n=Dh(e,t),r=Z1(n);return yz(r)}function Pz(e,t,n){const{opacity:r,zIndex:o}=t;r!=null&&r!==n.opacity&&e.setOpacity(r),o!=null&&o!==n.zIndex&&e.setZIndex(o)}function kz(){return Rh().map}function of(){return of=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},of.apply(this,arguments)}function Tz({bounds:e,boundsOptions:t,center:n,children:r,className:o,id:a,placeholder:l,style:c,whenReady:f,zoom:h,...v},g){const[x]=E.useState({className:o,id:a,style:c}),[b,S]=E.useState(null);E.useImperativeHandle(g,()=>(b==null?void 0:b.map)??null,[b]);const P=E.useCallback(C=>{if(C!==null&&b===null){const y=new ks.Map(C,v);n!=null&&h!=null?y.setView(n,h):e!=null&&y.fitBounds(e,t),f!=null&&y.whenReady(f),S(pz(y))}},[]);E.useEffect(()=>()=>{b==null||b.map.remove()},[b]);const j=b?Ke.createElement(F1,{value:b},r):l??null;return Ke.createElement("div",of({},x,{ref:P}),j)}const Lz=E.forwardRef(Tz),Ez=bz(function({position:t,...n},r){const o=new ks.Marker(t,n);return Oh(o,mz(r,{overlayContainer:o}))},function(t,n,r){n.position!==r.position&&t.setLatLng(n.position),n.icon!=null&&n.icon!==r.icon&&t.setIcon(n.icon),n.zIndexOffset!=null&&n.zIndexOffset!==r.zIndexOffset&&t.setZIndexOffset(n.zIndexOffset),n.opacity!=null&&n.opacity!==r.opacity&&t.setOpacity(n.opacity),t.dragging!=null&&n.draggable!==r.draggable&&(n.draggable===!0?t.dragging.enable():t.dragging.disable())}),zz=Sz(function(t,n){const r=new ks.Popup(t,n.overlayContainer);return Oh(r,n)},function(t,n,{position:r},o){E.useEffect(function(){const{instance:l}=t;function c(h){h.popup===l&&(l.update(),o(!0))}function f(h){h.popup===l&&o(!1)}return n.map.on({popupopen:c,popupclose:f}),n.overlayContainer==null?(r!=null&&l.setLatLng(r),l.openOn(n.map)):n.overlayContainer.bindPopup(l),function(){var v;n.map.off({popupopen:c,popupclose:f}),(v=n.overlayContainer)==null||v.unbindPopup(),n.map.removeLayer(l)}},[t,n,o,r])}),jz=Cz(function({url:t,...n},r){const o=new ks.TileLayer(t,Ih(n,r));return Oh(o,r)},function(t,n,r){Pz(t,n,r);const{url:o}=n;o!=null&&o!==r.url&&t.setUrl(o)}),Mz=e=>_z.divIcon({className:"custom-marker",html:`
      <div style="
        width: ${e?"50px":"40px"};
        height: ${e?"50px":"40px"};
        background: ${e?"linear-gradient(135deg, #7a4a5a 0%, #5a3545 100%)":"linear-gradient(135deg, #C9A86C 0%, #b89a5a 100%)"};
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 8px 25px rgba(74, 44, 52, 0.4);
        position: relative;
        ${e?`
          border: 3px solid #C9A86C;
        `:""}
      ">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="10" r="3"></circle>
          <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z"></path>
        </svg>
        <div style="
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-top: 12px solid ${e?"#5a3545":"#b89a5a"};
        "></div>
      </div>
    `,iconSize:[e?50:40,e?60:50],iconAnchor:[e?25:20,e?60:50],popupAnchor:[0,-50]}),Az=()=>{const e=Pl.map(n=>n.coordinates[0]),t=Pl.map(n=>n.coordinates[1]);return[[Math.min(...e)-.02,Math.min(...t)-.02],[Math.max(...e)+.02,Math.max(...t)+.02]]},Rz=({selectedLocation:e,showAll:t})=>{const n=kz();return E.useEffect(()=>{if(t){const r=Az();n.fitBounds(r,{padding:[50,50],duration:.5})}},[n,t]),E.useEffect(()=>{e&&!t&&n.flyTo(e.coordinates,15,{duration:1})},[e,n,t]),null},Iz=k.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f5ebe6 0%, #ede3dc 100%);
`,Oz=k.section`
  padding-top: ${({theme:e})=>e.spacing["5xl"]};
  padding-bottom: ${({theme:e})=>e.spacing["3xl"]};
  background: 
    linear-gradient(rgba(139, 69, 87, 0.85), rgba(167, 107, 91, 0.85)),
    url('https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=1920') center/cover no-repeat;
  position: relative;
`,Dz=k.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: ${({theme:e})=>`${e.spacing["3xl"]} ${e.spacing.xl}`};
  text-align: center;
`,$z=k(J.h1)`
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: ${({theme:e})=>e.fontSizes["5xl"]};
  color: ${({theme:e})=>e.colors.white};
  margin-bottom: ${({theme:e})=>e.spacing.md};
  
  @media (max-width: 600px) {
    font-size: 36px;
  }
`,Nz=k(J.p)`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  color: ${({theme:e})=>e.colors.primary.lighter};
  max-width: 600px;
  margin: 0 auto;
`,Bz=k.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 0;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 40px 60px;
  
  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  @media (max-width: 600px) {
    padding: 0 20px 40px;
  }
`,Fz=k.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,Vz=k(J.div)`
  background: ${({$active:e})=>e?"linear-gradient(135deg, #7a4a5a 0%, #5a3545 100%)":"linear-gradient(145deg, #fff 0%, #faf7f5 100%)"};
  padding: 30px;
  cursor: pointer;
  transition: all 0.4s ease;
  position: relative;
  
  ${({$active:e})=>e&&`
    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 12px;
      height: 12px;
      border: 2px solid #C9A86C;
    }
    
    &::before {
      top: -6px;
      left: -6px;
      border-right: none;
      border-bottom: none;
    }
    
    &::after {
      bottom: -6px;
      right: -6px;
      border-left: none;
      border-top: none;
    }
  `}
  
  ${({$active:e})=>!e&&`
    border: 1px solid rgba(201, 168, 108, 0.2);
    
    &:hover {
      border-color: #C9A86C;
      transform: translateX(10px);
    }
  `}
`,Zz=k.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
`,Uz=k.h3`
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: 24px;
  color: ${({$active:e})=>e?"#fff":"#4a2c34"};
  font-weight: 400;
  margin: 0;
`,Wz=k.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-family: ${({theme:e})=>e.fonts.body};
  font-size: 14px;
  color: ${({$active:e})=>"#C9A86C"};
  
  svg {
    fill: #C9A86C;
  }
`,Hz=k.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Rc=k.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: ${({theme:e})=>e.fonts.body};
  font-size: 14px;
  color: ${({$active:e})=>e?"rgba(255, 255, 255, 0.8)":"#6b5055"};
  
  svg {
    color: ${({$active:e})=>"#C9A86C"};
    flex-shrink: 0;
  }
`,Gz=k.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
  padding: 14px 28px;
  background: ${({$active:e})=>e?"linear-gradient(135deg, #C9A86C 0%, #b89a5a 100%)":"transparent"};
  border: ${({$active:e})=>e?"none":"2px solid #d4c4bc"};
  color: ${({$active:e})=>e?"#fff":"#7a4a5a"};
  font-family: ${({theme:e})=>e.fonts.body};
  font-size: 13px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateX(5px);
    ${({$active:e})=>e?"box-shadow: 0 6px 20px rgba(201, 168, 108, 0.4);":"border-color: #7a4a5a;"}
  }
`,Kz=k.div`
  position: relative;
  min-height: 600px;
  background: linear-gradient(145deg, #fff 0%, #faf7f5 100%);
  border: 1px solid rgba(201, 168, 108, 0.2);
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    inset: 15px;
    border: 1px solid rgba(201, 168, 108, 0.2);
    pointer-events: none;
    z-index: 1000;
  }
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(245, 230, 220, 0.15) 0%,
      transparent 40%,
      transparent 60%,
      rgba(245, 230, 220, 0.15) 100%
    );
    pointer-events: none;
    z-index: 999;
  }
  
  @media (max-width: 1100px) {
    min-height: 500px;
  }
  
  .leaflet-container {
    width: 100%;
    height: 100%;
    min-height: 600px;
    background: #f5ebe6;
    filter: sepia(25%) saturate(80%) hue-rotate(-5deg) brightness(1.05);
    
    @media (max-width: 1100px) {
      min-height: 500px;
    }
  }
  
  .custom-marker {
    background: transparent !important;
    border: none !important;
  }
  
  .leaflet-popup-content-wrapper {
    background: linear-gradient(145deg, #fff 0%, #faf7f5 100%);
    border: 1px solid rgba(201, 168, 108, 0.3);
    border-radius: 0;
    box-shadow: 0 10px 40px rgba(74, 44, 52, 0.2);
  }
  
  .leaflet-popup-content {
    margin: 16px 20px;
    font-family: 'Inconsolata', monospace;
  }
  
  .leaflet-popup-tip {
    background: #fff;
    border: 1px solid rgba(201, 168, 108, 0.3);
    box-shadow: none;
  }
  
  .leaflet-control-zoom {
    border: none !important;
    box-shadow: 0 4px 15px rgba(74, 44, 52, 0.15) !important;
  }
  
  .leaflet-control-zoom a {
    background: linear-gradient(145deg, #fff 0%, #faf7f5 100%) !important;
    color: #7a4a5a !important;
    border: 1px solid rgba(201, 168, 108, 0.3) !important;
    
    &:hover {
      background: #7a4a5a !important;
      color: #fff !important;
    }
  }
`,Yz=k.div`
  position: absolute;
  bottom: 30px;
  left: 30px;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.95) 0%, rgba(250, 247, 245, 0.95) 100%);
  padding: 20px 25px;
  border: 1px solid rgba(201, 168, 108, 0.3);
  z-index: 1000;
  backdrop-filter: blur(10px);
  
  h5 {
    font-family: ${({theme:e})=>e.fonts.heading};
    font-size: 14px;
    color: #4a2c34;
    margin-bottom: 12px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
`,lv=k.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: ${({theme:e})=>e.fonts.body};
  font-size: 12px;
  color: #6b5055;
  margin-bottom: 8px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,uv=k.div`
  width: 14px;
  height: 14px;
  background: ${({$type:e})=>e==="active"?"linear-gradient(135deg, #7a4a5a 0%, #5a3545 100%)":"linear-gradient(135deg, #C9A86C 0%, #b89a5a 100%)"};
`,Xz=k.div`
  h4 {
    font-family: 'IM Fell English', Georgia, serif;
    font-size: 16px;
    font-weight: 400;
    color: #4a2c34;
    margin: 0 0 8px 0;
  }
  
  p {
    font-family: 'Inconsolata', monospace;
    font-size: 13px;
    color: #8b6b6b;
    margin: 0;
  }
`,Pl=[{id:1,name:"Socials Арбат",address:"г. Москва, ул. Арбат, д. 10",phone:"+7 (495) 123-45-67",hours:"Ежедневно: 09:00 — 22:00",coordinates:[55.752,37.5873],image:"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600",rating:4.9},{id:2,name:"Socials Тверская",address:"г. Москва, ул. Тверская, д. 25",phone:"+7 (495) 234-56-78",hours:"Ежедневно: 08:00 — 23:00",coordinates:[55.7648,37.6046],image:"https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=600",rating:4.8},{id:3,name:"Socials Патриаршие",address:"г. Москва, Патриаршие пруды, д. 5",phone:"+7 (495) 345-67-89",hours:"Ежедневно: 10:00 — 21:00",coordinates:[55.764,37.5911],image:"https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600",rating:4.9},{id:4,name:"Socials Кузнецкий",address:"г. Москва, ул. Кузнецкий мост, д. 3",phone:"+7 (495) 456-78-90",hours:"Пн-Сб: 09:00 — 22:00",coordinates:[55.7605,37.6214],image:"https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600",rating:4.7}],Qz=()=>{const[e,t]=E.useState(null),[n,r]=E.useState(!0),o=l=>{t(l),r(!1)},a=l=>`https://www.google.com/maps/dir/?api=1&destination=${l.coordinates[0]},${l.coordinates[1]}`;return m.jsxs(Iz,{children:[m.jsx(Oz,{children:m.jsxs(Dz,{children:[m.jsx($z,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},children:"Наши Филиалы"}),m.jsx(Nz,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.1},children:"Выберите ближайшую кондитерскую для посещения"})]})}),m.jsxs(Bz,{children:[m.jsx(Fz,{children:Pl.map((l,c)=>m.jsxs(Vz,{$active:(e==null?void 0:e.id)===l.id,onClick:()=>o(l),initial:{opacity:0,x:-30},animate:{opacity:1,x:0},transition:{delay:c*.1},children:[m.jsxs(Zz,{children:[m.jsx(Uz,{$active:(e==null?void 0:e.id)===l.id,children:l.name}),m.jsxs(Wz,{$active:(e==null?void 0:e.id)===l.id,children:[m.jsx(j1,{size:14}),l.rating]})]}),m.jsxs(Hz,{children:[m.jsxs(Rc,{$active:(e==null?void 0:e.id)===l.id,children:[m.jsx(Ah,{size:16}),m.jsx("span",{children:l.address})]}),m.jsxs(Rc,{$active:(e==null?void 0:e.id)===l.id,children:[m.jsx(iu,{size:16}),m.jsx("span",{children:l.phone})]}),m.jsxs(Rc,{$active:(e==null?void 0:e.id)===l.id,children:[m.jsx(jh,{size:16}),m.jsx("span",{children:l.hours})]})]}),m.jsx(Zi,{children:(e==null?void 0:e.id)===l.id&&m.jsx(J.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},children:m.jsxs(Gz,{$active:!0,href:a(l),target:"_blank",rel:"noopener noreferrer",onClick:f=>f.stopPropagation(),children:[m.jsx(vL,{size:16}),"Проложить маршрут",m.jsx(ms,{size:16})]})})})]},l.id))}),m.jsxs(Kz,{children:[m.jsxs(Lz,{center:[55.76,37.6],zoom:12,scrollWheelZoom:!0,style:{height:"100%",width:"100%"},children:[m.jsx(jz,{attribution:'© <a href="https://stadiamaps.com/">Stadia Maps</a>, © <a href="https://openmaptiles.org/">OpenMapTiles</a> © <a href="http://openstreetmap.org">OpenStreetMap</a>',url:"https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"}),m.jsx(Rz,{selectedLocation:e,showAll:n}),Pl.map(l=>m.jsx(Ez,{position:l.coordinates,icon:Mz((e==null?void 0:e.id)===l.id),eventHandlers:{click:()=>o(l)},children:m.jsx(zz,{children:m.jsxs(Xz,{children:[m.jsx("h4",{children:l.name}),m.jsx("p",{children:l.address})]})})},l.id))]}),m.jsxs(Yz,{children:[m.jsx("h5",{children:"Легенда"}),m.jsxs(lv,{children:[m.jsx(uv,{$type:"active"}),m.jsx("span",{children:"Выбранный филиал"})]}),m.jsxs(lv,{children:[m.jsx(uv,{$type:"default"}),m.jsx("span",{children:"Другие филиалы"})]})]})]})]})]})},qz=k.section`
  padding-top: ${({theme:e})=>e.spacing["5xl"]};
  padding-bottom: ${({theme:e})=>e.spacing["3xl"]};
  background: 
    linear-gradient(rgba(139, 69, 87, 0.85), rgba(167, 107, 91, 0.85)),
    url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920') center/cover no-repeat;
  position: relative;
`,Jz=k.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: ${({theme:e})=>`${e.spacing["3xl"]} ${e.spacing.xl}`};
  text-align: center;
`,ej=k(J.h1)`
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: ${({theme:e})=>e.fontSizes["5xl"]};
  color: ${({theme:e})=>e.colors.white};
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,tj=k(J.p)`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  color: ${({theme:e})=>e.colors.primary.lighter};
  max-width: 600px;
  margin: 0 auto;
`,nj=k.div`
  background: linear-gradient(135deg, #f5ebe6 0%, #ede3dc 100%);
  padding: 80px 40px;
  
  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`,ij=k.div`
  max-width: 1200px;
  margin: 0 auto;
`,rj=k.div`
  text-align: center;
  margin-bottom: 60px;
  
  h2 {
    font-family: ${({theme:e})=>e.fonts.heading};
    font-size: 42px;
    color: #4a2c34;
    font-weight: 400;
    margin-bottom: 15px;
    
    span {
      color: #C9A86C;
    }
  }
  
  &::after {
    content: '✦ ✦ ✦';
    display: block;
    font-size: 12px;
    color: #C9A86C;
    letter-spacing: 8px;
    margin-top: 20px;
  }
`,oj=k.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 50px;
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`,sj=k.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`,ga=k(J.div)`
  background: linear-gradient(145deg, #fff 0%, #faf7f5 100%);
  padding: 30px;
  display: flex;
  align-items: flex-start;
  gap: 24px;
  border: 1px solid rgba(201, 168, 108, 0.2);
  position: relative;
  transition: all 0.4s ease;
  
  &:hover {
    border-color: #C9A86C;
    transform: translateX(10px);
    
    &::before,
    &::after {
      opacity: 1;
    }
  }
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    border: 2px solid #C9A86C;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &::before {
    top: -5px;
    left: -5px;
    border-right: none;
    border-bottom: none;
  }
  
  &::after {
    bottom: -5px;
    right: -5px;
    border-left: none;
    border-top: none;
  }
`,va=k.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #7a4a5a 0%, #5a3545 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  flex-shrink: 0;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    inset: 3px;
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
`,ya=k.div`
  flex: 1;
  
  h4 {
    font-family: ${({theme:e})=>e.fonts.heading};
    font-size: 20px;
    color: #4a2c34;
    margin-bottom: 10px;
    font-weight: 400;
  }
  
  p {
    font-family: ${({theme:e})=>e.fonts.body};
    font-size: 15px;
    color: #6b5055;
    line-height: 1.7;
    margin: 0;
  }
  
  a {
    color: #7a4a5a;
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: #C9A86C;
    }
  }
`,aj=k.div`
  margin-top: 20px;
  padding-top: 30px;
  border-top: 1px solid rgba(201, 168, 108, 0.2);
`,lj=k.h4`
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: 18px;
  color: #4a2c34;
  font-weight: 400;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  
  &::before,
  &::after {
    content: '◆';
    font-size: 8px;
    color: #C9A86C;
  }
`,uj=k.div`
  display: flex;
  gap: 15px;
`,Ic=k(J.a)`
  width: 55px;
  height: 55px;
  background: linear-gradient(135deg, #C9A86C 0%, #b89a5a 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  position: relative;
  transition: all 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    inset: 3px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    transition: all 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(201, 168, 108, 0.4);
    
    &::before {
      inset: 5px;
    }
  }
`,cj=k(J.div)`
  background: linear-gradient(145deg, #fff 0%, #faf7f5 100%);
  padding: 50px;
  border: 1px solid rgba(201, 168, 108, 0.2);
  position: relative;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border: 2px solid #C9A86C;
  }
  
  &::before {
    top: -10px;
    left: -10px;
    border-right: none;
    border-bottom: none;
  }
  
  &::after {
    bottom: -10px;
    right: -10px;
    border-left: none;
    border-top: none;
  }
  
  @media (max-width: 600px) {
    padding: 30px;
  }
`,dj=k.h3`
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: 32px;
  color: #4a2c34;
  font-weight: 400;
  margin-bottom: 10px;
  text-align: center;
  
  span {
    color: #C9A86C;
  }
`,fj=k.p`
  font-family: ${({theme:e})=>e.fonts.body};
  font-size: 14px;
  color: #8b6b6b;
  text-align: center;
  margin-bottom: 35px;
`,hj=k.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,cv=k.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`,wo=k.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,bo=k.label`
  font-family: ${({theme:e})=>e.fonts.body};
  font-size: 12px;
  color: #7a4a5a;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &::before {
    content: '◆';
    font-size: 6px;
    color: #C9A86C;
  }
`,xa=k.input`
  padding: 16px 20px;
  border: 2px solid #d4c4bc;
  background: transparent;
  font-family: ${({theme:e})=>e.fonts.body};
  font-size: 15px;
  color: #4a2c34;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #7a4a5a;
    background: rgba(255, 255, 255, 0.5);
  }
  
  &::placeholder {
    color: #a08080;
    font-style: italic;
  }
`,pj=k.textarea`
  padding: 16px 20px;
  border: 2px solid #d4c4bc;
  background: transparent;
  font-family: ${({theme:e})=>e.fonts.body};
  font-size: 15px;
  color: #4a2c34;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #7a4a5a;
    background: rgba(255, 255, 255, 0.5);
  }
  
  &::placeholder {
    color: #a08080;
    font-style: italic;
  }
`,mj=k.button`
  padding: 20px 50px;
  background: linear-gradient(135deg, #7a4a5a 0%, #5a3545 100%);
  border: none;
  color: #fff;
  font-family: ${({theme:e})=>e.fonts.body};
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  cursor: pointer;
  transition: all 0.4s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  position: relative;
  overflow: hidden;
  margin-top: 10px;
  
  &::before {
    content: '';
    position: absolute;
    inset: 4px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: all 0.3s ease;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(122, 74, 90, 0.35);
    
    &::before {
      inset: 6px;
    }
    
    &::after {
      left: 100%;
    }
  }
`,gj=k(J.div)`
  text-align: center;
  padding: 50px 30px;
`,vj=k(J.div)`
  width: 90px;
  height: 90px;
  background: linear-gradient(135deg, #7a4a5a 0%, #5a3545 100%);
  margin: 0 auto 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 40px;
  position: relative;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    border: 2px solid #C9A86C;
  }
  
  &::before {
    top: -6px;
    left: -6px;
    border-right: none;
    border-bottom: none;
  }
  
  &::after {
    bottom: -6px;
    right: -6px;
    border-left: none;
    border-top: none;
  }
`,yj=k.h4`
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: 28px;
  color: #4a2c34;
  font-weight: 400;
  margin-bottom: 15px;
`,xj=k.p`
  font-family: ${({theme:e})=>e.fonts.body};
  font-size: 16px;
  color: #6b5055;
  line-height: 1.7;
`,_j=()=>{const[e,t]=E.useState({name:"",email:"",phone:"",subject:"",message:""}),[n,r]=E.useState(!1),o=l=>{l.preventDefault(),r(!0)},a=l=>{t({...e,[l.target.name]:l.target.value})};return m.jsxs(m.Fragment,{children:[m.jsx(qz,{children:m.jsxs(Jz,{children:[m.jsx(ej,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},children:"Контакты"}),m.jsx(tj,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.1},children:"Свяжитесь с нами любым удобным способом"})]})}),m.jsx(nj,{children:m.jsxs(ij,{children:[m.jsx(rj,{children:m.jsxs("h2",{children:["Свяжитесь с ",m.jsx("span",{children:"нами"})]})}),m.jsxs(oj,{children:[m.jsxs(sj,{children:[m.jsxs(ga,{initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{delay:.1},children:[m.jsx(va,{children:m.jsx(Ah,{size:26})}),m.jsxs(ya,{children:[m.jsx("h4",{children:"Главный офис"}),m.jsxs("p",{children:["г. Москва, ул. Арбат, д. 10",m.jsx("br",{}),"Ежедневно: 09:00 — 22:00"]})]})]}),m.jsxs(ga,{initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{delay:.2},children:[m.jsx(va,{children:m.jsx(iu,{size:26})}),m.jsxs(ya,{children:[m.jsx("h4",{children:"Телефоны"}),m.jsxs("p",{children:[m.jsx("a",{href:"tel:+74951234567",children:"+7 (495) 123-45-67"}),m.jsx("br",{}),m.jsx("a",{href:"tel:+74959876543",children:"+7 (495) 987-65-43"})]})]})]}),m.jsxs(ga,{initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{delay:.3},children:[m.jsx(va,{children:m.jsx(Mh,{size:26})}),m.jsxs(ya,{children:[m.jsx("h4",{children:"Email"}),m.jsxs("p",{children:[m.jsx("a",{href:"mailto:info@bellepatisserie.ru",children:"info@bellepatisserie.ru"}),m.jsx("br",{}),m.jsx("a",{href:"mailto:order@bellepatisserie.ru",children:"order@bellepatisserie.ru"})]})]})]}),m.jsxs(ga,{initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{delay:.4},children:[m.jsx(va,{children:m.jsx(jh,{size:26})}),m.jsxs(ya,{children:[m.jsx("h4",{children:"Часы работы"}),m.jsxs("p",{children:["Пн-Пт: 08:00 — 22:00",m.jsx("br",{}),"Сб-Вс: 09:00 — 21:00"]})]})]}),m.jsxs(aj,{children:[m.jsx(lj,{children:"Мы в соцсетях"}),m.jsxs(uj,{children:[m.jsx(Ic,{href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.05},whileTap:{scale:.95},children:m.jsx(E1,{size:24})}),m.jsx(Ic,{href:"https://t.me",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.05},whileTap:{scale:.95},children:m.jsx(nf,{size:24})}),m.jsx(Ic,{href:"https://wa.me",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.05},whileTap:{scale:.95},children:m.jsx(z1,{size:24})})]})]})]}),m.jsx(cj,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.2},children:n?m.jsxs(gj,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},children:[m.jsx(vj,{initial:{scale:0},animate:{scale:1},transition:{delay:.2,type:"spring"},children:"✓"}),m.jsx(yj,{children:"Сообщение отправлено!"}),m.jsx(xj,{children:"Спасибо за обращение! Мы свяжемся с вами в ближайшее время."})]}):m.jsxs(m.Fragment,{children:[m.jsxs(dj,{children:["Напишите ",m.jsx("span",{children:"нам"})]}),m.jsx(fj,{children:"Мы ответим в течение 24 часов"}),m.jsxs(hj,{onSubmit:o,children:[m.jsxs(cv,{children:[m.jsxs(wo,{children:[m.jsx(bo,{children:"Ваше имя"}),m.jsx(xa,{type:"text",name:"name",placeholder:"Как вас зовут?",value:e.name,onChange:a,required:!0})]}),m.jsxs(wo,{children:[m.jsx(bo,{children:"Email"}),m.jsx(xa,{type:"email",name:"email",placeholder:"email@example.com",value:e.email,onChange:a,required:!0})]})]}),m.jsxs(cv,{children:[m.jsxs(wo,{children:[m.jsx(bo,{children:"Телефон"}),m.jsx(xa,{type:"tel",name:"phone",placeholder:"+7 (___) ___-__-__",value:e.phone,onChange:a})]}),m.jsxs(wo,{children:[m.jsx(bo,{children:"Тема"}),m.jsx(xa,{type:"text",name:"subject",placeholder:"О чём хотите спросить?",value:e.subject,onChange:a,required:!0})]})]}),m.jsxs(wo,{children:[m.jsx(bo,{children:"Сообщение"}),m.jsx(pj,{name:"message",placeholder:"Ваше сообщение...",value:e.message,onChange:a,required:!0})]}),m.jsxs(mj,{type:"submit",children:[m.jsx(nf,{size:18}),"Отправить сообщение"]})]})]})})]})]})})]})},wj=()=>{const{pathname:e}=di();return E.useEffect(()=>{window.scrollTo(0,0)},[e]),null},So=({children:e})=>m.jsx(J.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.3},children:e});function bj(){const e=di();return m.jsxs(qL,{children:[m.jsx(wj,{}),m.jsx(Zi,{mode:"wait",children:m.jsxs(AP,{location:e,children:[m.jsx(lr,{path:"/",element:m.jsx(So,{children:m.jsx(QE,{})})}),m.jsx(lr,{path:"/menu",element:m.jsx(So,{children:m.jsx(A3,{})})}),m.jsx(lr,{path:"/reservation",element:m.jsx(So,{children:m.jsx(fz,{})})}),m.jsx(lr,{path:"/locations",element:m.jsx(So,{children:m.jsx(Qz,{})})}),m.jsx(lr,{path:"/contact",element:m.jsx(So,{children:m.jsx(_j,{})})})]},e.pathname)})]})}const Sj=G2`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
    
    @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
      font-size: 15px;
    }
    
    @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
      font-size: 14px;
    }
  }

  body {
    font-family: ${({theme:e})=>e.fonts.body};
    font-weight: ${({theme:e})=>e.fontWeights.normal};
    line-height: ${({theme:e})=>e.lineHeights.normal};
    color: ${({theme:e})=>e.colors.text.primary};
    background-color: ${({theme:e})=>e.colors.background.primary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({theme:e})=>e.fonts.heading};
    font-weight: ${({theme:e})=>e.fontWeights.medium};
    line-height: ${({theme:e})=>e.lineHeights.tight};
    color: ${({theme:e})=>e.colors.text.primary};
  }

  h1 {
    font-size: ${({theme:e})=>e.fontSizes["5xl"]};
    
    @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
      font-size: ${({theme:e})=>e.fontSizes["4xl"]};
    }
  }

  h2 {
    font-size: ${({theme:e})=>e.fontSizes["4xl"]};
    
    @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
      font-size: ${({theme:e})=>e.fontSizes["3xl"]};
    }
  }

  h3 {
    font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  }

  h4 {
    font-size: ${({theme:e})=>e.fontSizes.xl};
  }

  p {
    margin-bottom: ${({theme:e})=>e.spacing.md};
    
    &:last-child {
      margin-bottom: 0;
    }
  }

  a {
    color: ${({theme:e})=>e.colors.accent.gold};
    text-decoration: none;
    transition: color ${({theme:e})=>e.transitions.fast};
    
    &:hover {
      color: ${({theme:e})=>e.colors.accent.goldDark};
    }
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
  }

  input, textarea, select {
    font-family: inherit;
    font-size: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  ul, ol {
    list-style: none;
  }

  /* Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({theme:e})=>e.colors.background.secondary};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.colors.primary.main};
    border-radius: ${({theme:e})=>e.borderRadius.full};
    
    &:hover {
      background: ${({theme:e})=>e.colors.primary.dark};
    }
  }

  /* Selection */
  ::selection {
    background: ${({theme:e})=>e.colors.accent.gold};
    color: ${({theme:e})=>e.colors.white};
  }

  /* Focus visible */
  :focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.accent.gold};
    outline-offset: 2px;
  }

  /* Utility classes */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`,Cj={colors:{primary:{main:"#A76B5B",light:"#C89B8E",lighter:"#E8C4B8",lightest:"#F5E6E0",dark:"#8B4557",darker:"#6E3344"},accent:{gold:"#C9A86C",goldLight:"#E4D4A5",goldDark:"#9A7B4F"},background:{primary:"#F5E6E0",secondary:"#EDD5CC",card:"#DEB8A8",cardHover:"#D4A898",dark:"#8B4557",gradient:"linear-gradient(135deg, #8B4557 0%, #A76B5B 50%, #C89B8E 100%)"},text:{primary:"#4A2C34",secondary:"#6E4A4A",light:"#8B6B6B",white:"#FFFFFF",gold:"#C9A86C"},success:"#6B8E6B",error:"#B85050",warning:"#D4A555",white:"#FFFFFF",black:"#1A1A1A",overlay:"rgba(74, 44, 52, 0.7)"},fonts:{heading:'"Cormorant Garamond", "IM Fell English", Georgia, serif',body:'"Inconsolata", sans-serif',accent:'"Cormorant Garamond", "IM Fell English SC", Georgia, serif'},fontSizes:{xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"1.875rem","4xl":"2.25rem","5xl":"3rem","6xl":"3.75rem","7xl":"4.5rem"},fontWeights:{light:300,normal:400,medium:500,semibold:600,bold:700},lineHeights:{tight:1.1,snug:1.25,normal:1.5,relaxed:1.75},spacing:{xs:"0.25rem",sm:"0.5rem",md:"1rem",lg:"1.5rem",xl:"2rem","2xl":"3rem","3xl":"4rem","4xl":"6rem","5xl":"8rem"},borderRadius:{sm:"4px",md:"8px",lg:"12px",xl:"16px","2xl":"24px",full:"9999px"},shadows:{sm:"0 1px 2px rgba(74, 44, 52, 0.05)",md:"0 4px 6px rgba(74, 44, 52, 0.07)",lg:"0 10px 15px rgba(74, 44, 52, 0.1)",xl:"0 20px 25px rgba(74, 44, 52, 0.15)",inner:"inset 0 2px 4px rgba(74, 44, 52, 0.06)",glow:"0 0 20px rgba(201, 168, 108, 0.3)"},transitions:{fast:"0.15s ease",normal:"0.3s ease",slow:"0.5s ease",spring:"0.4s cubic-bezier(0.34, 1.56, 0.64, 1)"},breakpoints:{mobile:"375px",tablet:"768px",desktop:"1024px",wide:"1440px"},zIndex:{dropdown:100,sticky:200,modal:300,overlay:400,toast:500}};Oc.createRoot(document.getElementById("root")).render(m.jsx(Ke.StrictMode,{children:m.jsx(FP,{children:m.jsxs(U2,{theme:Cj,children:[m.jsx(Sj,{}),m.jsx(bj,{})]})})}));
