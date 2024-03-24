"use strict";var e=require("react/jsx-runtime");!function(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css","top"===r&&o.firstChild?o.insertBefore(n,o.firstChild):o.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}('/*! tailwindcss v3.4.1 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:""}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.rounded{border-radius:.25rem}.border{border-width:1px}.border-blue-500{--tw-border-opacity:1;border-color:rgb(59 130 246/var(--tw-border-opacity))}.border-transparent{border-color:transparent}.bg-blue-50{--tw-bg-opacity:1;background-color:rgb(239 246 255/var(--tw-bg-opacity))}.bg-blue-500{--tw-bg-opacity:1;background-color:rgb(59 130 246/var(--tw-bg-opacity))}.bg-inherit{background-color:inherit}.px-4{padding-left:1rem;padding-right:1rem}.py-1{padding-bottom:.25rem;padding-top:.25rem}.py-1\\.5{padding-bottom:.375rem;padding-top:.375rem}.text-blue-500{--tw-text-opacity:1;color:rgb(59 130 246/var(--tw-text-opacity))}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.shadow-md{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.transition-all{transition-duration:.15s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}.hover\\:bg-blue-50:hover{--tw-bg-opacity:1;background-color:rgb(239 246 255/var(--tw-bg-opacity))}.hover\\:bg-blue-600:hover{--tw-bg-opacity:1;background-color:rgb(37 99 235/var(--tw-bg-opacity))}.hover\\:shadow-md:hover{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}',{insertAt:"top"});var t=function(){return t=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},t.apply(this,arguments)};"function"==typeof SuppressedError&&SuppressedError;var r=function(t){var r=t.href,o=t.children;return r?e.jsx("a",{href:r,children:o}):e.jsx(e.Fragment,{children:o})};function o(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(r=o(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}const n="-";function i(e){const t=function(e){const{theme:t,prefix:r}=e,o={nextPart:new Map,validators:[]},n=function(e,t){if(!t)return e;return e.map((([e,r])=>[e,r.map((e=>"string"==typeof e?t+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map((([e,r])=>[t+e,r]))):e))]))}(Object.entries(e.classGroups),r);return n.forEach((([e,r])=>{l(r,o,e,t)})),o}(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:function(e){const r=e.split(n);return""===r[0]&&1!==r.length&&r.shift(),a(r,t)||function(e){if(s.test(e)){const t=s.exec(e)[1],r=t?.substring(0,t.indexOf(":"));if(r)return"arbitrary.."+r}}(e)},getConflictingClassGroupIds:function(e,t){const n=r[e]||[];return t&&o[e]?[...n,...o[e]]:n}}}function a(e,t){if(0===e.length)return t.classGroupId;const r=e[0],o=t.nextPart.get(r),i=o?a(e.slice(1),o):void 0;if(i)return i;if(0===t.validators.length)return;const s=e.join(n);return t.validators.find((({validator:e})=>e(s)))?.classGroupId}const s=/^\[(.+)\]$/;function l(e,t,r,o){e.forEach((e=>{if("string"!=typeof e){if("function"==typeof e)return e.isThemeGetter?void l(e(o),t,r,o):void t.validators.push({validator:e,classGroupId:r});Object.entries(e).forEach((([e,n])=>{l(n,d(t,e),r,o)}))}else{(""===e?t:d(t,e)).classGroupId=r}}))}function d(e,t){let r=e;return t.split(n).forEach((e=>{r.nextPart.has(e)||r.nextPart.set(e,{nextPart:new Map,validators:[]}),r=r.nextPart.get(e)})),r}function c(e){if(e<1)return{get:()=>{},set:()=>{}};let t=0,r=new Map,o=new Map;function n(n,i){r.set(n,i),t++,t>e&&(t=0,o=r,r=new Map)}return{get(e){let t=r.get(e);return void 0!==t?t:void 0!==(t=o.get(e))?(n(e,t),t):void 0},set(e,t){r.has(e)?r.set(e,t):n(e,t)}}}const p="!";function u(e){const t=e.separator,r=1===t.length,o=t[0],n=t.length;return function(e){const i=[];let a,s=0,l=0;for(let d=0;d<e.length;d++){let c=e[d];if(0===s){if(c===o&&(r||e.slice(d,d+n)===t)){i.push(e.slice(l,d)),l=d+n;continue}if("/"===c){a=d;continue}}"["===c?s++:"]"===c&&s--}const d=0===i.length?e:e.substring(l),c=d.startsWith(p);return{modifiers:i,hasImportantModifier:c,baseClassName:c?d.substring(1):d,maybePostfixModifierPosition:a&&a>l?a-l:void 0}}}const b=/\s+/;function f(){let e,t,r=0,o="";for(;r<arguments.length;)(e=arguments[r++])&&(t=g(e))&&(o&&(o+=" "),o+=t);return o}function g(e){if("string"==typeof e)return e;let t,r="";for(let o=0;o<e.length;o++)e[o]&&(t=g(e[o]))&&(r&&(r+=" "),r+=t);return r}function h(e,...t){let r,o,n,a=function(l){const d=t.reduce(((e,t)=>t(e)),e());return r=function(e){return{cache:c(e.cacheSize),splitModifiers:u(e),...i(e)}}(d),o=r.cache.get,n=r.cache.set,a=s,s(l)};function s(e){const t=o(e);if(t)return t;const i=function(e,t){const{splitModifiers:r,getClassGroupId:o,getConflictingClassGroupIds:n}=t,i=new Set;return e.trim().split(b).map((e=>{const{modifiers:t,hasImportantModifier:n,baseClassName:i,maybePostfixModifierPosition:a}=r(e);let s=o(a?i.substring(0,a):i),l=Boolean(a);if(!s){if(!a)return{isTailwindClass:!1,originalClassName:e};if(s=o(i),!s)return{isTailwindClass:!1,originalClassName:e};l=!1}const d=function(e){if(e.length<=1)return e;const t=[];let r=[];return e.forEach((e=>{"["===e[0]?(t.push(...r.sort(),e),r=[]):r.push(e)})),t.push(...r.sort()),t}(t).join(":");return{isTailwindClass:!0,modifierId:n?d+p:d,classGroupId:s,originalClassName:e,hasPostfixModifier:l}})).reverse().filter((e=>{if(!e.isTailwindClass)return!0;const{modifierId:t,classGroupId:r,hasPostfixModifier:o}=e,a=t+r;return!i.has(a)&&(i.add(a),n(r,o).forEach((e=>i.add(t+e))),!0)})).reverse().map((e=>e.originalClassName)).join(" ")}(e,r);return n(e,i),i}return function(){return a(f.apply(null,arguments))}}function m(e){const t=t=>t[e]||[];return t.isThemeGetter=!0,t}const w=/^\[(?:([a-z-]+):)?(.+)\]$/i,x=/^\d+\/\d+$/,y=new Set(["px","full","screen"]),v=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,k=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,z=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,j=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,C=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function S(e){return I(e)||y.has(e)||x.test(e)}function M(e){return F(e,"length",L)}function I(e){return Boolean(e)&&!Number.isNaN(Number(e))}function N(e){return F(e,"number",I)}function G(e){return Boolean(e)&&Number.isInteger(Number(e))}function P(e){return e.endsWith("%")&&I(e.slice(0,-1))}function O(e){return w.test(e)}function E(e){return v.test(e)}const T=new Set(["length","size","percentage"]);function $(e){return F(e,T,U)}function B(e){return F(e,"position",U)}const A=new Set(["image","url"]);function R(e){return F(e,A,D)}function q(e){return F(e,"",_)}function W(){return!0}function F(e,t,r){const o=w.exec(e);return!!o&&(o[1]?"string"==typeof t?o[1]===t:t.has(o[1]):r(o[2]))}function L(e){return k.test(e)&&!z.test(e)}function U(){return!1}function _(e){return j.test(e)}function D(e){return C.test(e)}function H(){const e=m("colors"),t=m("spacing"),r=m("blur"),o=m("brightness"),n=m("borderColor"),i=m("borderRadius"),a=m("borderSpacing"),s=m("borderWidth"),l=m("contrast"),d=m("grayscale"),c=m("hueRotate"),p=m("invert"),u=m("gap"),b=m("gradientColorStops"),f=m("gradientColorStopPositions"),g=m("inset"),h=m("margin"),w=m("opacity"),x=m("padding"),y=m("saturate"),v=m("scale"),k=m("sepia"),z=m("skew"),j=m("space"),C=m("translate"),T=()=>["auto",O,t],A=()=>[O,t],F=()=>["",S,M],L=()=>["auto",I,O],U=()=>["","0",O],_=()=>[I,N],D=()=>[I,O];return{cacheSize:500,separator:":",theme:{colors:[W],spacing:[S,M],blur:["none","",E,O],brightness:_(),borderColor:[e],borderRadius:["none","","full",E,O],borderSpacing:A(),borderWidth:F(),contrast:_(),grayscale:U(),hueRotate:D(),invert:U(),gap:A(),gradientColorStops:[e],gradientColorStopPositions:[P,M],inset:T(),margin:T(),opacity:_(),padding:A(),saturate:_(),scale:_(),sepia:U(),skew:D(),space:A(),translate:A()},classGroups:{aspect:[{aspect:["auto","square","video",O]}],container:["container"],columns:[{columns:[E]}],"break-after":[{"break-after":["auto","avoid","all","avoid-page","page","left","right","column"]}],"break-before":[{"break-before":["auto","avoid","all","avoid-page","page","left","right","column"]}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top",O]}],overflow:[{overflow:["auto","hidden","clip","visible","scroll"]}],"overflow-x":[{"overflow-x":["auto","hidden","clip","visible","scroll"]}],"overflow-y":[{"overflow-y":["auto","hidden","clip","visible","scroll"]}],overscroll:[{overscroll:["auto","contain","none"]}],"overscroll-x":[{"overscroll-x":["auto","contain","none"]}],"overscroll-y":[{"overscroll-y":["auto","contain","none"]}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[g]}],"inset-x":[{"inset-x":[g]}],"inset-y":[{"inset-y":[g]}],start:[{start:[g]}],end:[{end:[g]}],top:[{top:[g]}],right:[{right:[g]}],bottom:[{bottom:[g]}],left:[{left:[g]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",G,O]}],basis:[{basis:T()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",O]}],grow:[{grow:U()}],shrink:[{shrink:U()}],order:[{order:["first","last","none",G,O]}],"grid-cols":[{"grid-cols":[W]}],"col-start-end":[{col:["auto",{span:["full",G,O]},O]}],"col-start":[{"col-start":L()}],"col-end":[{"col-end":L()}],"grid-rows":[{"grid-rows":[W]}],"row-start-end":[{row:["auto",{span:[G,O]},O]}],"row-start":[{"row-start":L()}],"row-end":[{"row-end":L()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",O]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",O]}],gap:[{gap:[u]}],"gap-x":[{"gap-x":[u]}],"gap-y":[{"gap-y":[u]}],"justify-content":[{justify:["normal","start","end","center","between","around","evenly","stretch"]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal","start","end","center","between","around","evenly","stretch","baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":["start","end","center","between","around","evenly","stretch","baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[x]}],px:[{px:[x]}],py:[{py:[x]}],ps:[{ps:[x]}],pe:[{pe:[x]}],pt:[{pt:[x]}],pr:[{pr:[x]}],pb:[{pb:[x]}],pl:[{pl:[x]}],m:[{m:[h]}],mx:[{mx:[h]}],my:[{my:[h]}],ms:[{ms:[h]}],me:[{me:[h]}],mt:[{mt:[h]}],mr:[{mr:[h]}],mb:[{mb:[h]}],ml:[{ml:[h]}],"space-x":[{"space-x":[j]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[j]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",O,t]}],"min-w":[{"min-w":[O,t,"min","max","fit"]}],"max-w":[{"max-w":[O,t,"none","full","min","max","fit","prose",{screen:[E]},E]}],h:[{h:[O,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[O,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[O,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[O,t,"auto","min","max","fit"]}],"font-size":[{text:["base",E,M]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",N]}],"font-family":[{font:[W]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",O]}],"line-clamp":[{"line-clamp":["none",I,N]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",S,O]}],"list-image":[{"list-image":["none",O]}],"list-style-type":[{list:["none","disc","decimal",O]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[w]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[w]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:["solid","dashed","dotted","double","none","wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",S,M]}],"underline-offset":[{"underline-offset":["auto",S,O]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:A()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",O]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",O]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[w]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top",B]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",$]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},R]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[f]}],"gradient-via-pos":[{via:[f]}],"gradient-to-pos":[{to:[f]}],"gradient-from":[{from:[b]}],"gradient-via":[{via:[b]}],"gradient-to":[{to:[b]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[s]}],"border-w-x":[{"border-x":[s]}],"border-w-y":[{"border-y":[s]}],"border-w-s":[{"border-s":[s]}],"border-w-e":[{"border-e":[s]}],"border-w-t":[{"border-t":[s]}],"border-w-r":[{"border-r":[s]}],"border-w-b":[{"border-b":[s]}],"border-w-l":[{"border-l":[s]}],"border-opacity":[{"border-opacity":[w]}],"border-style":[{border:["solid","dashed","dotted","double","none","hidden"]}],"divide-x":[{"divide-x":[s]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[s]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[w]}],"divide-style":[{divide:["solid","dashed","dotted","double","none"]}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:["","solid","dashed","dotted","double","none"]}],"outline-offset":[{"outline-offset":[S,O]}],"outline-w":[{outline:[S,M]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:F()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[w]}],"ring-offset-w":[{"ring-offset":[S,M]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",E,q]}],"shadow-color":[{shadow:[W]}],opacity:[{opacity:[w]}],"mix-blend":[{"mix-blend":["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]}],"bg-blend":[{"bg-blend":["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]}],filter:[{filter:["","none"]}],blur:[{blur:[r]}],brightness:[{brightness:[o]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",E,O]}],grayscale:[{grayscale:[d]}],"hue-rotate":[{"hue-rotate":[c]}],invert:[{invert:[p]}],saturate:[{saturate:[y]}],sepia:[{sepia:[k]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[r]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[d]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[c]}],"backdrop-invert":[{"backdrop-invert":[p]}],"backdrop-opacity":[{"backdrop-opacity":[w]}],"backdrop-saturate":[{"backdrop-saturate":[y]}],"backdrop-sepia":[{"backdrop-sepia":[k]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[a]}],"border-spacing-x":[{"border-spacing-x":[a]}],"border-spacing-y":[{"border-spacing-y":[a]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",O]}],duration:[{duration:D()}],ease:[{ease:["linear","in","out","in-out",O]}],delay:[{delay:D()}],animate:[{animate:["none","spin","ping","pulse","bounce",O]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[v]}],"scale-x":[{"scale-x":[v]}],"scale-y":[{"scale-y":[v]}],rotate:[{rotate:[G,O]}],"translate-x":[{"translate-x":[C]}],"translate-y":[{"translate-y":[C]}],"skew-x":[{"skew-x":[z]}],"skew-y":[{"skew-y":[z]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",O]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",O]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":A()}],"scroll-mx":[{"scroll-mx":A()}],"scroll-my":[{"scroll-my":A()}],"scroll-ms":[{"scroll-ms":A()}],"scroll-me":[{"scroll-me":A()}],"scroll-mt":[{"scroll-mt":A()}],"scroll-mr":[{"scroll-mr":A()}],"scroll-mb":[{"scroll-mb":A()}],"scroll-ml":[{"scroll-ml":A()}],"scroll-p":[{"scroll-p":A()}],"scroll-px":[{"scroll-px":A()}],"scroll-py":[{"scroll-py":A()}],"scroll-ps":[{"scroll-ps":A()}],"scroll-pe":[{"scroll-pe":A()}],"scroll-pt":[{"scroll-pt":A()}],"scroll-pr":[{"scroll-pr":A()}],"scroll-pb":[{"scroll-pb":A()}],"scroll-pl":[{"scroll-pl":A()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",O]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[S,M,N]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const J=h(H);var K=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return J(function(){for(var e,t,r=0,n="",i=arguments.length;r<i;r++)(e=arguments[r])&&(t=o(e))&&(n&&(n+=" "),n+=t);return n}(e))};function Q(e,t){return K([{"bg-blue-500 text-white hover:bg-blue-600 hover:shadow-md":"contained"===e},{"border-blue-500 text-blue-500":"outlined"===e},{"border-transparent":"text"===e},{"bg-inherit text-blue-500 hover:bg-blue-50":"outlined"===e||"text"===e},"border rounded py-1.5 px-4 transition-all",t])}exports.Button=function(o){var n=o.className,i=o.children,a=o.variant,s=void 0===a?"contained":a,l=o.href,d=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]])}return r}(o,["className","children","variant","href"]);return e.jsx(r,{href:l,children:e.jsx("button",t({className:Q(s,n)},d,{children:i}))})};
//# sourceMappingURL=index.js.map
