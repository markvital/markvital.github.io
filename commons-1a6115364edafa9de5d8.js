(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[351],{72:function(e){"use strict";var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var r;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,r=!1,n=!1,a=0;a<e.length;a++){var i=e[a];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,a)+"-"+e.slice(a),t=!1,n=r,r=!0,a++):r&&n&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,a-1)+"-"+e.slice(a-1),n=r,r=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,n=r,r=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),r=e,t.pascalCase?r.charAt(0).toUpperCase()+r.slice(1):r)};e.exports=t,e.exports.default=t},2993:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,o){if(e===o)return!0;if(e&&o&&"object"==typeof e&&"object"==typeof o){if(e.constructor!==o.constructor)return!1;var s,c,u,l;if(Array.isArray(e)){if((s=e.length)!=o.length)return!1;for(c=s;0!=c--;)if(!i(e[c],o[c]))return!1;return!0}if(r&&e instanceof Map&&o instanceof Map){if(e.size!==o.size)return!1;for(l=e.entries();!(c=l.next()).done;)if(!o.has(c.value[0]))return!1;for(l=e.entries();!(c=l.next()).done;)if(!i(c.value[1],o.get(c.value[0])))return!1;return!0}if(n&&e instanceof Set&&o instanceof Set){if(e.size!==o.size)return!1;for(l=e.entries();!(c=l.next()).done;)if(!o.has(c.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(o)){if((s=e.length)!=o.length)return!1;for(c=s;0!=c--;)if(e[c]!==o[c])return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===o.toString();if((s=(u=Object.keys(e)).length)!==Object.keys(o).length)return!1;for(c=s;0!=c--;)if(!Object.prototype.hasOwnProperty.call(o,u[c]))return!1;if(t&&e instanceof Element)return!1;for(c=s;0!=c--;)if(("_owner"!==u[c]&&"__v"!==u[c]&&"__o"!==u[c]||!e.$$typeof)&&!i(e[u[c]],o[u[c]]))return!1;return!0}return e!=e&&o!=o}e.exports=function(e,t){try{return i(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},4839:function(e,t,r){"use strict";var n,a=r(7294),i=(n=a)&&"object"==typeof n&&"default"in n?n.default:n;function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var c,u=[];function l(){c=e(u.map((function(e){return e.props}))),f.canUseDOM?t(c):r&&(c=r(c))}var f=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return c},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,u=[],e};var o=a.prototype;return o.UNSAFE_componentWillMount=function(){u.push(this),l()},o.componentDidUpdate=function(){l()},o.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),l()},o.render=function(){return i.createElement(n,this.props)},a}(a.PureComponent);return o(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),o(f,"canUseDOM",s),f}}},3723:function(e,t,r){"use strict";r.d(t,{G:function(){return I},L:function(){return y},M:function(){return E},P:function(){return T},S:function(){return q},_:function(){return s},a:function(){return o},b:function(){return l},c:function(){return u},g:function(){return f},h:function(){return c}});var n=r(7294),a=(r(72),r(5697)),i=r.n(a);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(r=i[n])>=0||(a[r]=e[r]);return a}var c=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};var u=function(e){var t;return function(e){var t,r;return Boolean(null==e||null==(t=e.images)||null==(r=t.fallback)?void 0:r.src)}(e)?e:function(e){return Boolean(null==e?void 0:e.gatsbyImageData)}(e)?e.gatsbyImageData:function(e){return Boolean(null==e?void 0:e.gatsbyImage)}(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function l(e,t,r,n,a){return void 0===a&&(a={}),o({},r,{loading:n,shouldLoad:e,"data-main-image":"",style:o({},a,{opacity:t?1:0})})}function f(e,t,r,n,a,i,s,c){var u={};i&&(u.backgroundColor=i,"fixed"===r?(u.width=n,u.height=a,u.backgroundColor=i,u.position="relative"):("constrained"===r||"fullWidth"===r)&&(u.position="absolute",u.top=0,u.left=0,u.bottom=0,u.right=0)),s&&(u.objectFit=s),c&&(u.objectPosition=c);var l=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},u)});return l}var d,p=["children"],m=function(e){var t=e.layout,r=e.width,a=e.height;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:a/r*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:r,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+a+"' width='"+r+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},y=function(e){var t=e.children,r=s(e,p);return n.createElement(n.Fragment,null,n.createElement(m,o({},r)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],g=["fallback","sources","shouldLoad"],v=function(e){var t=e.src,r=e.srcSet,a=e.loading,i=e.alt,c=void 0===i?"":i,u=e.shouldLoad,l=s(e,h);return n.createElement("img",o({},l,{decoding:"async",loading:a,src:u?t:void 0,"data-src":u?void 0:t,srcSet:u?r:void 0,"data-srcset":u?void 0:r,alt:c}))},b=function(e){var t=e.fallback,r=e.sources,a=void 0===r?[]:r,i=e.shouldLoad,c=void 0===i||i,u=s(e,g),l=u.sizes||(null==t?void 0:t.sizes),f=n.createElement(v,o({},u,t,{sizes:l,shouldLoad:c}));return a.length?n.createElement("picture",null,a.map((function(e){var t=e.media,r=e.srcSet,a=e.type;return n.createElement("source",{key:t+"-"+a+"-"+r,type:a,media:t,srcSet:c?r:void 0,"data-srcset":c?void 0:r,sizes:l})})),f):f};v.propTypes={src:a.string.isRequired,alt:a.string.isRequired,sizes:a.string,srcSet:a.string,shouldLoad:a.bool},b.displayName="Picture",b.propTypes={alt:a.string.isRequired,shouldLoad:a.bool,fallback:a.exact({src:a.string.isRequired,srcSet:a.string,sizes:a.string}),sources:a.arrayOf(a.oneOfType([a.exact({media:a.string.isRequired,type:a.string,sizes:a.string,srcSet:a.string.isRequired}),a.exact({media:a.string,type:a.string.isRequired,sizes:a.string,srcSet:a.string.isRequired})]))};var w=["fallback"],T=function(e){var t=e.fallback,r=s(e,w);return t?n.createElement(b,o({},r,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",o({},r))};T.displayName="Placeholder",T.propTypes={fallback:a.string,sources:null==(d=b.propTypes)?void 0:d.sources,alt:function(e,t,r){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Validation failed."):null}};var E=function(e){return n.createElement(n.Fragment,null,n.createElement(b,o({},e)),n.createElement("noscript",null,n.createElement(b,o({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=b.propTypes;var C,S,O=function(e,t,r){for(var n=arguments.length,a=new Array(n>3?n-3:0),o=3;o<n;o++)a[o-3]=arguments[o];return e.alt||""===e.alt?i().string.apply(i(),[e,t,r].concat(a)):new Error('The "alt" prop is required in '+r+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},A={image:i().object.isRequired,alt:O},L=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],k=["style","className"],x=new Set,j=function(e){var t=e.as,a=void 0===t?"div":t,i=e.image,u=e.style,l=e.backgroundColor,f=e.className,d=e.class,p=e.onStartLoad,m=e.onLoad,y=e.onError,h=s(e,L),g=i.width,v=i.height,b=i.layout,w=function(e,t,r){var n={},a="gatsby-image-wrapper";return"fixed"===r?(n.width=e,n.height=t):"constrained"===r&&(a="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:a,"data-gatsby-image-wrapper":"",style:n}}(g,v,b),T=w.style,E=w.className,O=s(w,k),A=(0,n.useRef)(),j=(0,n.useMemo)((function(){return JSON.stringify(i.images)}),[i.images]);d&&(f=d);var I=function(e,t,r){var n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+r/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+r+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(b,g,v);return(0,n.useEffect)((function(){C||(C=Promise.all([r.e(774),r.e(217)]).then(r.bind(r,9217)).then((function(e){var t=e.renderImageToString,r=e.swapPlaceholderImage;return S=t,{renderImageToString:t,swapPlaceholderImage:r}})));var e,t,n=A.current.querySelector("[data-gatsby-image-ssr]");return n&&c()?(n.complete?(null==p||p({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((function(){n.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),n.addEventListener("load",(function e(){n.removeEventListener("load",e),null==m||m({wasCached:!0}),setTimeout((function(){n.removeAttribute("data-gatsby-image-ssr")}),0)}))),void x.add(j)):S&&x.has(j)?void 0:(C.then((function(r){var n=r.renderImageToString,a=r.swapPlaceholderImage;A.current&&(A.current.innerHTML=n(o({isLoading:!0,isLoaded:x.has(j),image:i},h)),x.has(j)||(e=requestAnimationFrame((function(){A.current&&(t=a(A.current,j,x,u,p,m,y))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[i]),(0,n.useLayoutEffect)((function(){x.has(j)&&S&&(A.current.innerHTML=S(o({isLoading:x.has(j),isLoaded:x.has(j),image:i},h)),null==p||p({wasCached:!0}),null==m||m({wasCached:!0}))}),[i]),(0,n.createElement)(a,o({},O,{style:o({},T,u,{backgroundColor:l}),className:E+(f?" "+f:""),ref:A,dangerouslySetInnerHTML:{__html:I},suppressHydrationWarning:!0}))},I=(0,n.memo)((function(e){return e.image?(0,n.createElement)(j,e):null}));I.propTypes=A,I.displayName="GatsbyImage";var P,N=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],M=function(e,t){for(var r=arguments.length,n=new Array(r>2?r-2:0),a=2;a<r;a++)n[a-2]=arguments[a];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},_=new Set(["fixed","fullWidth","constrained"]),R={src:i().string.isRequired,alt:O,width:M,height:M,sizes:i().string,layout:function(e){if(void 0!==e.layout&&!_.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},q=(P=I,function(e){var t=e.src,r=e.__imageData,a=e.__error,i=s(e,N);return a&&console.warn(a),r?n.createElement(P,o({image:r},i)):(console.warn("Image not loaded",t),null)});q.displayName="StaticImage",q.propTypes=R},8285:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(7294),a=r(1082),i="layout-module--menuItem--5c914",o=r(3723),s=function(e){var t,s,c=e.location,u=e.children,l=e.type,f="/"===c.pathname,d=(0,a.useStaticQuery)("2131900288"),p=null===(t=d.site.siteMetadata)||void 0===t?void 0:t.author,m=null===(s=d.site.siteMetadata)||void 0===s?void 0:s.social,y=n.createElement("div",{className:"layout-module--header--4755c"},n.createElement("nav",{className:"layout-module--menu--3f535"},n.createElement(a.Link,{className:"layout-module--logo--ff776",to:"/"},n.createElement(o.S,{className:"layout-module--avatar--86b51",layout:"fixed",formats:["auto","webp","avif"],src:"../images/profile-pic.png",width:35,height:35,quality:95,alt:null==p?void 0:p.name,__imageData:r(3172)}),n.createElement("span",null,null==p?void 0:p.name)),n.createElement(a.Link,{className:i,to:"/about"},"about"),n.createElement(a.Link,{className:i,to:"/work"},"works"),n.createElement(a.Link,{className:i+" hidden-xs",to:"/contact"},"contact"),n.createElement("a",{className:"layout-module--social--4a791","aria-label":"Twitter",href:"https://twitter.com/"+((null==m?void 0:m.twitter)||"")}," ")));return n.createElement("div",{className:"global-wrapper","data-is-root-path":f},n.createElement("header",{className:"global-header"},y),n.createElement("main",{className:"full"===l?"layout-module--pageFull--f6798":"layout-module--pageColumn--405c7"},u),n.createElement("footer",{className:"layout-module--footer--ad7d0"},null==p?void 0:p.name," © ",(new Date).getFullYear()))}},262:function(e,t,r){"use strict";r.d(t,{Z:function(){return ve}});var n,a,i,o,s=r(7294),c=r(5697),u=r.n(c),l=r(4839),f=r.n(l),d=r(2993),p=r.n(d),m=r(6494),y=r.n(m),h="bodyAttributes",g="htmlAttributes",v="titleAttributes",b={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(b).map((function(e){return b[e]})),"charset"),T="cssText",E="href",C="http-equiv",S="innerHTML",O="itemprop",A="name",L="property",k="rel",x="src",j="target",I={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},P="defaultTitle",N="defer",M="encodeSpecialCharacters",_="onChangeClientState",R="titleTemplate",q=Object.keys(I).reduce((function(e,t){return e[I[t]]=t,e}),{}),D=[b.NOSCRIPT,b.SCRIPT,b.STYLE],z="data-react-helmet",H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},B=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},W=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},Y=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},K=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},V=function(e){var t=Q(e,b.TITLE),r=Q(e,R);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=Q(e,P);return t||n||void 0},Z=function(e){return Q(e,_)||function(){}},$=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return U({},e,t)}),{})},G=function(e,t){return t.filter((function(e){return void 0!==e[b.BASE]})).map((function(e){return e[b.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var i=n[a].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},J=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+H(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var a={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),o=0;o<i.length;o++){var s=i[o],c=s.toLowerCase();-1===t.indexOf(c)||r===k&&"canonical"===e[r].toLowerCase()||c===k&&"stylesheet"===e[c].toLowerCase()||(r=c),-1===t.indexOf(s)||s!==S&&s!==T&&s!==O||(r=s)}if(!r||!e[r])return!1;var u=e[r].toLowerCase();return n[r]||(n[r]={}),a[r]||(a[r]={}),!n[r][u]&&(a[r][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(a),o=0;o<i.length;o++){var s=i[o],c=y()({},n[s],a[s]);n[s]=c}return e}),[]).reverse()},Q=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},X=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:r.g.requestAnimationFrame||X,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:r.g.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,ie=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,s=e.noscriptTags,c=e.onChangeClientState,u=e.scriptTags,l=e.styleTags,f=e.title,d=e.titleAttributes;ce(b.BODY,n),ce(b.HTML,a),se(f,d);var p={baseTag:ue(b.BASE,r),linkTags:ue(b.LINK,i),metaTags:ue(b.META,o),noscriptTags:ue(b.NOSCRIPT,s),scriptTags:ue(b.SCRIPT,u),styleTags:ue(b.STYLE,l)},m={},y={};Object.keys(p).forEach((function(e){var t=p[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(y[e]=p[e].oldTags)})),t&&t(),c(e,m,y)},oe=function(e){return Array.isArray(e)?e.join(""):e},se=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),ce(b.TITLE,t)},ce=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(z),a=n?n.split(","):[],i=[].concat(a),o=Object.keys(t),s=0;s<o.length;s++){var c=o[s],u=t[c]||"";r.getAttribute(c)!==u&&r.setAttribute(c,u),-1===a.indexOf(c)&&a.push(c);var l=i.indexOf(c);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)r.removeAttribute(i[f]);a.length===i.length?r.removeAttribute(z):r.getAttribute(z)!==o.join(",")&&r.setAttribute(z,o.join(","))}},ue=function(e,t){var r=document.head||document.querySelector(b.HEAD),n=r.querySelectorAll(e+"["+z+"]"),a=Array.prototype.slice.call(n),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===S)r.innerHTML=t.innerHTML;else if(n===T)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[n]?"":t[n];r.setAttribute(n,s)}r.setAttribute(z,"true"),a.some((function(e,t){return o=t,r.isEqualNode(e)}))?a.splice(o,1):i.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:i}},le=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[I[r]||r]=e[r],t}),t)},de=function(e,t,r){switch(e){case b.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[z]=!0,a=fe(r,n),[s.createElement(b.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=le(r),i=oe(t);return a?"<"+e+" "+z+'="true" '+a+">"+K(i,n)+"</"+e+">":"<"+e+" "+z+'="true">'+K(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case h:case g:return{toComponent:function(){return fe(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})[z]=!0,n);return Object.keys(t).forEach((function(e){var r=I[e]||e;if(r===S||r===T){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),s.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===S||e===T)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+K(n[t],r)+'"';return e?e+" "+a:a}),""),i=n.innerHTML||n.cssText||"",o=-1===D.indexOf(e);return t+"<"+e+" "+z+'="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},pe=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,s=e.noscriptTags,c=e.scriptTags,u=e.styleTags,l=e.title,f=void 0===l?"":l,d=e.titleAttributes;return{base:de(b.BASE,t,n),bodyAttributes:de(h,r,n),htmlAttributes:de(g,a,n),link:de(b.LINK,i,n),meta:de(b.META,o,n),noscript:de(b.NOSCRIPT,s,n),script:de(b.SCRIPT,c,n),style:de(b.STYLE,u,n),title:de(b.TITLE,{title:f,titleAttributes:d},n)}},me=f()((function(e){return{baseTag:G([E,j],e),bodyAttributes:$(h,e),defer:Q(e,N),encode:Q(e,M),htmlAttributes:$(g,e),linkTags:J(b.LINK,[k,E],e),metaTags:J(b.META,[A,w,C,L,O],e),noscriptTags:J(b.NOSCRIPT,[S],e),onChangeClientState:Z(e),scriptTags:J(b.SCRIPT,[x,S],e),styleTags:J(b.STYLE,[T],e),title:V(e),titleAttributes:$(v,e)}}),(function(e){ae&&re(ae),e.defer?ae=te((function(){ie(e,(function(){ae=null}))})):(ie(e),ae=null)}),pe)((function(){return null})),ye=(a=me,o=i=function(e){function t(){return F(this,t),Y(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case b.SCRIPT:case b.NOSCRIPT:return{innerHTML:t};case b.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return U({},n,((t={})[r.type]=[].concat(n[r.type]||[],[U({},a,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,a=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(n.type){case b.TITLE:return U({},a,((t={})[n.type]=o,t.titleAttributes=U({},i),t));case b.BODY:return U({},a,{bodyAttributes:U({},i)});case b.HTML:return U({},a,{htmlAttributes:U({},i)})}return U({},a,((r={})[n.type]=U({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=U({},t);return Object.keys(e).forEach((function(t){var n;r=U({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return s.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[q[r]||r]=e[r],t}),t)}(W(a,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case b.LINK:case b.META:case b.NOSCRIPT:case b.SCRIPT:case b.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:o,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=W(e,["children"]),n=U({},r);return t&&(n=this.mapChildrenToProps(t,n)),s.createElement(a,n)},B(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(s.Component),i.propTypes={base:u().object,bodyAttributes:u().object,children:u().oneOfType([u().arrayOf(u().node),u().node]),defaultTitle:u().string,defer:u().bool,encodeSpecialCharacters:u().bool,htmlAttributes:u().object,link:u().arrayOf(u().object),meta:u().arrayOf(u().object),noscript:u().arrayOf(u().object),onChangeClientState:u().func,script:u().arrayOf(u().object),style:u().arrayOf(u().object),title:u().string,titleAttributes:u().object,titleTemplate:u().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=a.peek,i.rewind=function(){var e=a.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);ye.renderStatic=ye.rewind;var he=r(1082),ge=function(e){var t,r,n,a=e.description,i=e.lang,o=e.meta,c=e.title,u=(0,he.useStaticQuery)("2841359383").site,l=a||u.siteMetadata.description,f=null===(t=u.siteMetadata)||void 0===t?void 0:t.title;return s.createElement(ye,{htmlAttributes:{lang:i},title:c,titleTemplate:f?"%s | "+f:null,meta:[{name:"description",content:l},{property:"og:title",content:c},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(r=u.siteMetadata)||void 0===r||null===(n=r.social)||void 0===n?void 0:n.twitter)||""},{name:"twitter:title",content:c},{name:"twitter:description",content:l}].concat(o)})};ge.defaultProps={lang:"en",meta:[],description:""};var ve=ge},3172:function(e){"use strict";e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/38faa5aa1a06807e27eefb97568a6c09/cf150/profile-pic.png","srcSet":"/static/38faa5aa1a06807e27eefb97568a6c09/cf150/profile-pic.png 35w,\\n/static/38faa5aa1a06807e27eefb97568a6c09/145fc/profile-pic.png 70w","sizes":"35px"},"sources":[{"srcSet":"/static/38faa5aa1a06807e27eefb97568a6c09/f721d/profile-pic.avif 35w,\\n/static/38faa5aa1a06807e27eefb97568a6c09/821ec/profile-pic.avif 70w","type":"image/avif","sizes":"35px"},{"srcSet":"/static/38faa5aa1a06807e27eefb97568a6c09/991ad/profile-pic.webp 35w,\\n/static/38faa5aa1a06807e27eefb97568a6c09/55c64/profile-pic.webp 70w","type":"image/webp","sizes":"35px"}]},"width":35,"height":35}')}}]);
//# sourceMappingURL=commons-1a6115364edafa9de5d8.js.map