(self.webpackChunkportfolio_gatsby=self.webpackChunkportfolio_gatsby||[]).push([[98],{2993:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,u,l,s;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(!i(e[u],a[u]))return!1;return!0}if(r&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!a.has(u.value[0]))return!1;for(s=e.entries();!(u=s.next()).done;)if(!i(u.value[1],a.get(u.value[0])))return!1;return!0}if(n&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(e[u]!==a[u])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(l=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,l[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==l[u]&&"__v"!==l[u]&&"__o"!==l[u]||!e.$$typeof)&&!i(e[l[u]],a[l[u]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},4839:function(e,t,r){"use strict";var n,o=r(7294),i=(n=o)&&"object"==typeof n&&"default"in n?n.default:n;function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var u,l=[];function s(){u=e(l.map((function(e){return e.props}))),f.canUseDOM?t(u):r&&(u=r(u))}var f=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,l=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){l.push(this),s()},a.componentDidUpdate=function(){s()},a.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),s()},a.render=function(){return i.createElement(n,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),a(f,"canUseDOM",c),f}}},7023:function(e,t,r){"use strict";var n=r(7294),o=r(1597);t.Z=function(e){var t=e.pageTitle,r=e.children,i=(0,o.useStaticQuery)("3159585216");return n.createElement("div",{className:"min-h-screen bg-zinc-100 dark:bg-zinc-900"},n.createElement("title",null,t," | ",i.site.siteMetadata.title),n.createElement("header",{className:"text-zinc-700 dark:text-zinc-300 text-2xl font-bold p-9"},i.site.siteMetadata.title),n.createElement("nav",null,n.createElement("ul",{className:"flex space-x-5 pl-9"},n.createElement("li",null,n.createElement(o.Link,{className:"text-zinc-700 dark:text-zinc-300 hover:text-purple-700 dark:hover:text-purple-400 font-semibold text-lg hover:underline transition duration-200",to:"/"},"Home")),n.createElement("li",null,n.createElement(o.Link,{className:"text-gray-700 dark:text-zinc-300 hover:text-purple-700 dark:hover:text-purple-400 font-semibold text-lg hover:underline transition duration-200",to:"/about"},"About")),n.createElement("li",null,n.createElement(o.Link,{className:"text-zinc-700 dark:text-zinc-300 hover:text-purple-700 dark:hover:text-purple-400 font-semibold text-lg hover:underline transition duration-200",to:"/portfolio"},"Portfolio")),n.createElement("li",null,n.createElement(o.Link,{className:"text-zinc-700 dark:text-zinc-300 hover:text-purple-700 dark:hover:text-purple-400 font-semibold text-lg hover:underline transition duration-200",to:"/blog"},"Blog")))),n.createElement("main",{className:"flex justify-center p-9 mt-5 md:m-9 rounded-xl"},n.createElement("div",{className:"prose lg:prose-xl prose-zinc dark:prose-invert"},n.createElement("h1",null,t),r)))}},1571:function(e,t,r){"use strict";r.d(t,{Z:function(){return ve}});var n,o,i,a,c=r(7294),u=r(5697),l=r.n(u),s=r(4839),f=r.n(s),p=r(2993),d=r.n(p),m=r(6494),y=r.n(m),h="bodyAttributes",b="htmlAttributes",g="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(v).map((function(e){return v[e]})),"charset"),w="cssText",E="href",A="http-equiv",O="innerHTML",C="itemprop",S="name",x="property",k="rel",j="src",P="target",L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},I="defaultTitle",N="defer",M="encodeSpecialCharacters",R="onChangeClientState",_="titleTemplate",z=Object.keys(L).reduce((function(e,t){return e[L[t]]=t,e}),{}),B=[v.NOSCRIPT,v.SCRIPT,v.STYLE],D="data-react-helmet",H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},U=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},F=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},K=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},V=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},W=function(e){var t=J(e,v.TITLE),r=J(e,_);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=J(e,I);return t||n||void 0},Q=function(e){return J(e,R)||function(){}},Z=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Y({},e,t)}),{})},$=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var i=n[o].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},G=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+H(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var o={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===t.indexOf(u)||r===k&&"canonical"===e[r].toLowerCase()||u===k&&"stylesheet"===e[u].toLowerCase()||(r=u),-1===t.indexOf(c)||c!==O&&c!==w&&c!==C||(r=c)}if(!r||!e[r])return!1;var l=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][l]&&(o[r][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=y()({},n[c],o[c]);n[c]=u}return e}),[]).reverse()},J=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},X=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:r.g.requestAnimationFrame||X,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:r.g.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ie=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,f=e.title,p=e.titleAttributes;ue(v.BODY,n),ue(v.HTML,o),ce(f,p);var d={baseTag:le(v.BASE,r),linkTags:le(v.LINK,i),metaTags:le(v.META,a),noscriptTags:le(v.NOSCRIPT,c),scriptTags:le(v.SCRIPT,l),styleTags:le(v.STYLE,s)},m={},y={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(y[e]=d[e].oldTags)})),t&&t(),u(e,m,y)},ae=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),ue(v.TITLE,t)},ue=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(D),o=n?n.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],l=t[u]||"";r.getAttribute(u)!==l&&r.setAttribute(u,l),-1===o.indexOf(u)&&o.push(u);var s=i.indexOf(u);-1!==s&&i.splice(s,1)}for(var f=i.length-1;f>=0;f--)r.removeAttribute(i[f]);o.length===i.length?r.removeAttribute(D):r.getAttribute(D)!==a.join(",")&&r.setAttribute(D,a.join(","))}},le=function(e,t){var r=document.head||document.querySelector(v.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(n),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===O)r.innerHTML=t.innerHTML;else if(n===w)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute(D,"true"),o.some((function(e,t){return a=t,r.isEqualNode(e)}))?o.splice(a,1):i.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:i}},se=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[L[r]||r]=e[r],t}),t)},pe=function(e,t,r){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[D]=!0,o=fe(r,n),[c.createElement(v.TITLE,o,e)];var e,r,n,o},toString:function(){return function(e,t,r,n){var o=se(r),i=ae(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+V(i,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+V(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case h:case b:return{toComponent:function(){return fe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,o=((n={key:r})[D]=!0,n);return Object.keys(t).forEach((function(e){var r=L[e]||e;if(r===O||r===w){var n=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=t[e]})),c.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===O||e===w)})).reduce((function(e,t){var o=void 0===n[t]?t:t+'="'+V(n[t],r)+'"';return e?e+" "+o:o}),""),i=n.innerHTML||n.cssText||"",a=-1===B.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},de=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,l=e.styleTags,s=e.title,f=void 0===s?"":s,p=e.titleAttributes;return{base:pe(v.BASE,t,n),bodyAttributes:pe(h,r,n),htmlAttributes:pe(b,o,n),link:pe(v.LINK,i,n),meta:pe(v.META,a,n),noscript:pe(v.NOSCRIPT,c,n),script:pe(v.SCRIPT,u,n),style:pe(v.STYLE,l,n),title:pe(v.TITLE,{title:f,titleAttributes:p},n)}},me=f()((function(e){return{baseTag:$([E,P],e),bodyAttributes:Z(h,e),defer:J(e,N),encode:J(e,M),htmlAttributes:Z(b,e),linkTags:G(v.LINK,[k,E],e),metaTags:G(v.META,[S,T,A,x,C],e),noscriptTags:G(v.NOSCRIPT,[O],e),onChangeClientState:Q(e),scriptTags:G(v.SCRIPT,[j,O],e),styleTags:G(v.STYLE,[w],e),title:W(e),titleAttributes:Z(g,e)}}),(function(e){oe&&re(oe),e.defer?oe=te((function(){ie(e,(function(){oe=null}))})):(ie(e),oe=null)}),de)((function(){return null})),ye=(o=me,a=i=function(e){function t(){return q(this,t),K(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return Y({},n,((t={})[r.type]=[].concat(n[r.type]||[],[Y({},o,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(n.type){case v.TITLE:return Y({},o,((t={})[n.type]=a,t.titleAttributes=Y({},i),t));case v.BODY:return Y({},o,{bodyAttributes:Y({},i)});case v.HTML:return Y({},o,{htmlAttributes:Y({},i)})}return Y({},o,((r={})[n.type]=Y({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=Y({},t);return Object.keys(e).forEach((function(t){var n;r=Y({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return c.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[z[r]||r]=e[r],t}),t)}(F(o,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:a,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=F(e,["children"]),n=Y({},r);return t&&(n=this.mapChildrenToProps(t,n)),c.createElement(o,n)},U(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(c.Component),i.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);ye.renderStatic=ye.rewind;var he=r(9499),be=r(1597),ge="26522286",ve=function(e){var t=e.title,r=e.description,n=e.image,o=e.article,i=(0,he.useLocation)().pathname,a=(0,be.useStaticQuery)(ge).site.siteMetadata,u=a.defaultTitle,l=a.defaultDescription,s=a.siteUrl,f=a.defaultImage,p=a.twitterUsername,d={title:t||u,description:r||l,image:""+s+(n||f),url:""+s+i};return c.createElement(ye,{title:d.title,titleTemplate:d.title},c.createElement("meta",{name:"description",content:d.description}),c.createElement("meta",{name:"image",content:d.image}),d.url&&c.createElement("meta",{property:"og:url",content:d.url}),!o?null:c.createElement("meta",{property:"og:type",content:"article"}),d.title&&c.createElement("meta",{property:"og:title",content:d.title}),d.description&&c.createElement("meta",{property:"og:description",content:d.description}),d.image&&c.createElement("meta",{property:"og:image",content:"seo.url"}),c.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),p&&c.createElement("meta",{name:"twitter:creator",content:p}),d.title&&c.createElement("meta",{name:"twitter:title",content:d.title}),d.description&&c.createElement("meta",{name:"twitter:description",content:d.description}),d.image&&c.createElement("meta",{name:"twitter:image",content:d.image}))}}}]);
//# sourceMappingURL=f35865b6020905d9a3b190bc8bd94c973d5097bc-b89c08407924417b5014.js.map