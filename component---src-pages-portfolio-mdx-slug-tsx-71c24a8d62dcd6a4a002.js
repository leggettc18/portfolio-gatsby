(self.webpackChunkportfolio_gatsby=self.webpackChunkportfolio_gatsby||[]).push([[852],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o},e.exports.__esModule=!0,e.exports.default=e.exports},3646:function(e,t,r){var o=r(7228);e.exports=function(e){if(Array.isArray(e))return o(e)},e.exports.__esModule=!0,e.exports.default=e.exports},9100:function(e,t,r){var o=r(9489),n=r(7067);function u(t,r,c){return n()?(e.exports=u=Reflect.construct,e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=u=function(e,t,r){var n=[null];n.push.apply(n,t);var u=new(Function.bind.apply(e,n));return r&&o(u,r.prototype),u},e.exports.__esModule=!0,e.exports.default=e.exports),u.apply(null,arguments)}e.exports=u,e.exports.__esModule=!0,e.exports.default=e.exports},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},319:function(e,t,r){var o=r(3646),n=r(6860),u=r(379),c=r(8206);e.exports=function(e){return o(e)||n(e)||u(e)||c()},e.exports.__esModule=!0,e.exports.default=e.exports},379:function(e,t,r){var o=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},2102:function(e,t,r){var o=r(2632);e.exports={MDXRenderer:o}},2632:function(e,t,r){var o=r(9100),n=r(319),u=r(9713),c=r(7316),a=["scope","children"];function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s=r(7294),i=r(4983).mdx,f=r(6948).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,u=c(e,a),p=f(t),d=s.useMemo((function(){if(!r)return null;var e=l({React:s,mdx:i},p),t=Object.keys(e),u=t.map((function(t){return e[t]}));return o(Function,["_fn"].concat(n(t),[""+r])).apply(void 0,[{}].concat(n(u)))}),[r,t]);return s.createElement(d,l({},u))}},1676:function(e,t,r){"use strict";r.r(t);var o=r(7294),n=r(1597),u=r(2102),c=r(7023),a=r(1571);t.default=function(e){var t,r=e.data;return o.createElement(c.Z,{pageTitle:r.mdx.frontmatter.title},o.createElement("div",{className:"px-9"},o.createElement(a.Z,{title:r.mdx.frontmatter.title,description:r.mdx.frontmatter.description||r.mdx.excerpt||"nothin’",image:null===(t=r.mdx.frontmatter.image)||void 0===t?void 0:t.childImageSharp.sizes.src,article:!0}),o.createElement("p",null,r.mdx.frontmatter.date),o.createElement(n.Link,{to:r.mdx.frontmatter.github,className:"dark:text-zinc-100 bg-purple-300 dark:bg-purple-600 hover:bg-purple-400 dark:hover:bg-purple-800 p-4 rounded no-underline flex max-w-fit items-center space-x-2"},o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",className:"bi bi-github",viewBox:"0 0 16 16"},o.createElement("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"}))," ",o.createElement("p",{className:"p-0 m-0"},"Check it out on Github!")),o.createElement(u.MDXRenderer,null,r.mdx.body)))}}}]);
//# sourceMappingURL=component---src-pages-portfolio-mdx-slug-tsx-71c24a8d62dcd6a4a002.js.map