(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=e(i);fetch(i.href,n)}})();function P(r,t,e,s){var i=arguments.length,n=i<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,e):s,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(r,t,e,s);else for(var h=r.length-1;h>=0;h--)(o=r[h])&&(n=(i<3?o(n):i>3?o(t,e,n):o(t,e))||n);return i>3&&n&&Object.defineProperty(t,e,n),n}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=window,G=N.ShadowRoot&&(N.ShadyCSS===void 0||N.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Q=Symbol(),tt=new WeakMap;let pt=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==Q)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(G&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=tt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&tt.set(e,t))}return t}toString(){return this.cssText}};const At=r=>new pt(typeof r=="string"?r:r+"",void 0,Q),T=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((s,i,n)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[n+1],r[0]);return new pt(e,r,Q)},wt=(r,t)=>{G?r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const s=document.createElement("style"),i=N.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)})},et=G?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return At(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var M;const H=window,st=H.trustedTypes,Et=st?st.emptyScript:"",it=H.reactiveElementPolyfillSupport,V={toAttribute(r,t){switch(t){case Boolean:r=r?Et:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},ut=(r,t)=>t!==r&&(t==t||r==r),L={attribute:!0,type:String,converter:V,reflect:!1,hasChanged:ut},K="finalized";let _=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,s)=>{const i=this._$Ep(s,e);i!==void 0&&(this._$Ev.set(i,s),t.push(i))}),t}static createProperty(t,e=L){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){const n=this[t];this[e]=i,this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||L}static finalize(){if(this.hasOwnProperty(K))return!1;this[K]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,s=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of s)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(et(i))}else t!==void 0&&e.push(et(t));return e}static _$Ep(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,s;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)===null||s===void 0||s.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return wt(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostConnected)===null||s===void 0?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostDisconnected)===null||s===void 0?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e,s=L){var i;const n=this.constructor._$Ep(t,s);if(n!==void 0&&s.reflect===!0){const o=(((i=s.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?s.converter:V).toAttribute(e,s.type);this._$El=t,o==null?this.removeAttribute(n):this.setAttribute(n,o),this._$El=null}}_$AK(t,e){var s;const i=this.constructor,n=i._$Ev.get(t);if(n!==void 0&&this._$El!==n){const o=i.getPropertyOptions(n),h=typeof o.converter=="function"?{fromAttribute:o.converter}:((s=o.converter)===null||s===void 0?void 0:s.fromAttribute)!==void 0?o.converter:V;this._$El=n,this[n]=h.fromAttribute(e,o.type),this._$El=null}}requestUpdate(t,e,s){let i=!0;t!==void 0&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||ut)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,n)=>this[n]=i),this._$Ei=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var n;return(n=i.hostUpdate)===null||n===void 0?void 0:n.call(i)}),this.update(s)):this._$Ek()}catch(i){throw e=!1,this._$Ek(),i}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(s=>{var i;return(i=s.hostUpdated)===null||i===void 0?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,s)=>this._$EO(s,this[s],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};_[K]=!0,_.elementProperties=new Map,_.elementStyles=[],_.shadowRootOptions={mode:"open"},it==null||it({ReactiveElement:_}),((M=H.reactiveElementVersions)!==null&&M!==void 0?M:H.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var j;const k=window,g=k.trustedTypes,rt=g?g.createPolicy("lit-html",{createHTML:r=>r}):void 0,W="$lit$",f=`lit$${(Math.random()+"").slice(9)}$`,vt="?"+f,St=`<${vt}>`,m=document,S=()=>m.createComment(""),x=r=>r===null||typeof r!="object"&&typeof r!="function",ft=Array.isArray,xt=r=>ft(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",z=`[ 	
\f\r]`,w=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,nt=/-->/g,ot=/>/g,$=RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),lt=/'/g,at=/"/g,$t=/^(?:script|style|textarea|title)$/i,Ct=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),yt=Ct(1),b=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),ht=new WeakMap,y=m.createTreeWalker(m,129,null,!1);function mt(r,t){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return rt!==void 0?rt.createHTML(t):t}const Pt=(r,t)=>{const e=r.length-1,s=[];let i,n=t===2?"<svg>":"",o=w;for(let h=0;h<e;h++){const l=r[h];let a,d,c=-1,u=0;for(;u<l.length&&(o.lastIndex=u,d=o.exec(l),d!==null);)u=o.lastIndex,o===w?d[1]==="!--"?o=nt:d[1]!==void 0?o=ot:d[2]!==void 0?($t.test(d[2])&&(i=RegExp("</"+d[2],"g")),o=$):d[3]!==void 0&&(o=$):o===$?d[0]===">"?(o=i??w,c=-1):d[1]===void 0?c=-2:(c=o.lastIndex-d[2].length,a=d[1],o=d[3]===void 0?$:d[3]==='"'?at:lt):o===at||o===lt?o=$:o===nt||o===ot?o=w:(o=$,i=void 0);const v=o===$&&r[h+1].startsWith("/>")?" ":"";n+=o===w?l+St:c>=0?(s.push(a),l.slice(0,c)+W+l.slice(c)+f+v):l+f+(c===-2?(s.push(void 0),h):v)}return[mt(r,n+(r[e]||"<?>")+(t===2?"</svg>":"")),s]};class C{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,o=0;const h=t.length-1,l=this.parts,[a,d]=Pt(t,e);if(this.el=C.createElement(a,s),y.currentNode=this.el.content,e===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(i=y.nextNode())!==null&&l.length<h;){if(i.nodeType===1){if(i.hasAttributes()){const c=[];for(const u of i.getAttributeNames())if(u.endsWith(W)||u.startsWith(f)){const v=d[o++];if(c.push(u),v!==void 0){const bt=i.getAttribute(v.toLowerCase()+W).split(f),O=/([.?@])?(.*)/.exec(v);l.push({type:1,index:n,name:O[2],strings:bt,ctor:O[1]==="."?Ot:O[1]==="?"?Ht:O[1]==="@"?kt:B})}else l.push({type:6,index:n})}for(const u of c)i.removeAttribute(u)}if($t.test(i.tagName)){const c=i.textContent.split(f),u=c.length-1;if(u>0){i.textContent=g?g.emptyScript:"";for(let v=0;v<u;v++)i.append(c[v],S()),y.nextNode(),l.push({type:2,index:++n});i.append(c[u],S())}}}else if(i.nodeType===8)if(i.data===vt)l.push({type:2,index:n});else{let c=-1;for(;(c=i.data.indexOf(f,c+1))!==-1;)l.push({type:7,index:n}),c+=f.length-1}n++}}static createElement(t,e){const s=m.createElement("template");return s.innerHTML=t,s}}function A(r,t,e=r,s){var i,n,o,h;if(t===b)return t;let l=s!==void 0?(i=e._$Co)===null||i===void 0?void 0:i[s]:e._$Cl;const a=x(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((n=l==null?void 0:l._$AO)===null||n===void 0||n.call(l,!1),a===void 0?l=void 0:(l=new a(r),l._$AT(r,e,s)),s!==void 0?((o=(h=e)._$Co)!==null&&o!==void 0?o:h._$Co=[])[s]=l:e._$Cl=l),l!==void 0&&(t=A(r,l._$AS(r,t.values),l,s)),t}class Ut{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:s},parts:i}=this._$AD,n=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:m).importNode(s,!0);y.currentNode=n;let o=y.nextNode(),h=0,l=0,a=i[0];for(;a!==void 0;){if(h===a.index){let d;a.type===2?d=new U(o,o.nextSibling,this,t):a.type===1?d=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(d=new Tt(o,this,t)),this._$AV.push(d),a=i[++l]}h!==(a==null?void 0:a.index)&&(o=y.nextNode(),h++)}return y.currentNode=m,n}v(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class U{constructor(t,e,s,i){var n;this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cp=(n=i==null?void 0:i.isConnected)===null||n===void 0||n}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=A(this,t,e),x(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==b&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):xt(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==p&&x(this._$AH)?this._$AA.nextSibling.data=t:this.$(m.createTextNode(t)),this._$AH=t}g(t){var e;const{values:s,_$litType$:i}=t,n=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=C.createElement(mt(i.h,i.h[0]),this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===n)this._$AH.v(s);else{const o=new Ut(n,this),h=o.u(this.options);o.v(s),this.$(h),this._$AH=o}}_$AC(t){let e=ht.get(t.strings);return e===void 0&&ht.set(t.strings,e=new C(t)),e}T(t){ft(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new U(this.k(S()),this.k(S()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class B{constructor(t,e,s,i,n){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=p}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const n=this.strings;let o=!1;if(n===void 0)t=A(this,t,e,0),o=!x(t)||t!==this._$AH&&t!==b,o&&(this._$AH=t);else{const h=t;let l,a;for(t=n[0],l=0;l<n.length-1;l++)a=A(this,h[s+l],e,l),a===b&&(a=this._$AH[l]),o||(o=!x(a)||a!==this._$AH[l]),a===p?t=p:t!==p&&(t+=(a??"")+n[l+1]),this._$AH[l]=a}o&&!i&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ot extends B{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}}const Nt=g?g.emptyScript:"";class Ht extends B{constructor(){super(...arguments),this.type=4}j(t){t&&t!==p?this.element.setAttribute(this.name,Nt):this.element.removeAttribute(this.name)}}class kt extends B{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){var s;if((t=(s=A(this,t,e,0))!==null&&s!==void 0?s:p)===b)return;const i=this._$AH,n=t===p&&i!==p||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==p&&(i===p||n);n&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&s!==void 0?s:this.element,t):this._$AH.handleEvent(t)}}class Tt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){A(this,t)}}const dt=k.litHtmlPolyfillSupport;dt==null||dt(C,U),((j=k.litHtmlVersions)!==null&&j!==void 0?j:k.litHtmlVersions=[]).push("2.8.0");const Bt=(r,t,e)=>{var s,i;const n=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:t;let o=n._$litPart$;if(o===void 0){const h=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:null;n._$litPart$=o=new U(t.insertBefore(S(),h),h,void 0,e??{})}return o._$AI(r),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var q,D;class E extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Bt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return b}}E.finalized=!0,E._$litElement$=!0,(q=globalThis.litElementHydrateSupport)===null||q===void 0||q.call(globalThis,{LitElement:E});const ct=globalThis.litElementPolyfillSupport;ct==null||ct({LitElement:E});((D=globalThis.litElementVersions)!==null&&D!==void 0?D:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const X=r=>t=>typeof t=="function"?((e,s)=>(customElements.define(e,s),s))(r,t):((e,s)=>{const{kind:i,elements:n}=s;return{kind:i,elements:n,finisher(o){customElements.define(e,o)}}})(r,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rt=(r,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,r)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,r)}},Mt=(r,t,e)=>{t.constructor.createProperty(e,r)};function _t(r){return(t,e)=>e!==void 0?Mt(r,t,e):Rt(r,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var I;((I=window.HTMLSlotElement)===null||I===void 0?void 0:I.prototype.assignedElements)!=null;class R extends E{constructor(){super(...arguments),this.variant="normal",this.hasBlur=!1}}P([_t({type:String})],R.prototype,"variant",void 0);P([_t({type:Boolean})],R.prototype,"hasBlur",void 0);class gt extends R{render(){return yt`
            <div
                data-variant=${this.variant}
                class="spinnerBox"
            ></div>
        `}}const Lt=T`

.spinnerBox[data-variant="small"] {
    --bw-sys-scale: 0.75;
    --bw-sys-offset-margin: 0 10px 0;
}
.spinnerBox {
    --bw-sys-scale: 1;
    --bw-sys-rouneded: 9999px;
    --bw-sys-offset-margin: 0px;
}
.spinnerBox[data-variant="large"] {
    --bw-sys-scale: 1.25;
    --bw-sys-offset-margin: 0 20px 0;
}

.spinnerBox {
    position: relative;
    margin: var(--bw-sys-offset-margin);
    padding: 0;
    width: 26px;
    height: 26px;
    background-color: transparent;
    outline: 8px solid var(--bw-sys-color-surface);
    border-radius: var(--bw-sys-rouneded);
    animation: rotateKey 1s cubic-bezier(.45,.19,.5,.73) infinite;
    transform-origin: center;
    scale: var(--bw-sys-scale);
}
.spinnerBox::after {
    content: '';
    position: absolute;
    display: block;
    margin-top: -5.25px;
    padding: 0;
    left: 0;
    top: 0;
    width: 8px;
    height: 8px;
    border-radius: var(--bw-sys-rouneded);
    background-color: var(--bw-sys-color-primary);
}
@keyframes rotateKey {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
`,Y=T`

:root, *, ::before, ::after {
    --bw-sys-color-primary: red;
    --bw-sys-color-surface: rgb(240, 240, 240);
    
}
`;let Z=class extends gt{};Z.styles=[Lt,Y];Z=P([X("circle-spinner")],Z);const jt=T`

.spinnerBox[data-variant="small"] {
    --bw-sys-scale: 0.75;
    --bw-sys-offset-margin: 0 -4px 0;
}
.spinnerBox {
    --bw-sys-scale: 1;
    --bw-sys-rouneded: 9999px;
    --bw-sys-offset-margin: 0px;
}
.spinnerBox[data-variant="large"] {
    --bw-sys-scale: 1.25;
    --bw-sys-offset-margin: 0 4px 0;
}

.spinnerBox {
    position: relative;
    margin: var(--bw-sys-offset-margin);
    padding: 0;
    width: 34px;
    height: 34px;
    background-color: transparent;
    border-radius: var(--bw-sys-rouneded);
    overflow: hidden;
    animation: rotateKey 1s linear infinite;
    transform-origin: center;
    scale: var(--bw-sys-scale);
}
.spinnerBox::after {
    content: '';
    position: absolute;
    display: block;
    margin: 0;
    padding: 0;
    left: 0;
    top: 0;
    width: 50%;
    height: 50%;
    background-color: var(--bw-sys-color-primary);
}
@keyframes rotateKey {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
`;let J=class extends gt{};J.styles=[jt,Y];J=P([X("triangle-circle-spinner")],J);class zt extends R{render(){return yt`
            <div
                data-hasBlur=${this.hasBlur}
                data-variant=${this.variant}
                class="square-box"
            >
                <div></div>
            </div>
        `}}let F=class extends zt{};F.styles=[T`
            * {
                padding: 0;
                margin: 0;
            }
            .square-box[data-hasBlur="true"] {
                --bw-blur: 8px;
            }
            .square-box[data-variant="small"] {
                --bw-scale: 0.75;
                --bw-margin: 0 -4px 0;
            }
            .square-box {
                --bw-scale: 1;
                --bw-margin: 0;
                --bw-blur: 0;
            }
            .square-box[data-variant="large"] {
                --bw-scale: 1.25;
                --bw-margin: 0 4px 0;
            }
            .square-box {
                transition: all 0.25s;
                display: block;
                position: relative;
                width: 32px;
                height: 32px;
                overflow: hidden;
                background-color: var(--bw-sys-color-surface);
                scale: var(--bw-scale);
                margin: var(--bw-margin);
            }
            .square-box > div {
                filter: blur(var(--bw-blur));
                display: blcok;
                position: absolute;
                left: 0;
                top: 0;
                height: 50%;
                width: 50%;
                background-color: var(--bw-sys-color-primary);
                animation: move 1s linear infinite;
            }
            @keyframes move {
                0% {
                    left: 0;
                    top: 0;
                }
                25% {
                    left: 50%;
                    top: 0;
                }
                50% {
                    left: 50%;
                    top: 50%;
                }
                75% {
                    left: 0;
                    top: 50%;
                }
                100% {
                    left: 0;
                    top: 0;
                }
            }
        `,Y];F=P([X("square-spinner")],F);
