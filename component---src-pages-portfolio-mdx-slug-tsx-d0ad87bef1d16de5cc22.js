(self.webpackChunkportfolio_gatsby=self.webpackChunkportfolio_gatsby||[]).push([[852],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},9100:function(e,t,r){var n=r(9489),o=r(7067);function l(t,r,a){return o()?(e.exports=l=Reflect.construct,e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=l=function(e,t,r){var o=[null];o.push.apply(o,t);var l=new(Function.bind.apply(e,o));return r&&n(l,r.prototype),l},e.exports.__esModule=!0,e.exports.default=e.exports),l.apply(null,arguments)}e.exports=l,e.exports.__esModule=!0,e.exports.default=e.exports},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},319:function(e,t,r){var n=r(3646),o=r(6860),l=r(379),a=r(8206);e.exports=function(e){return n(e)||o(e)||l(e)||a()},e.exports.__esModule=!0,e.exports.default=e.exports},379:function(e,t,r){var n=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},2102:function(e,t,r){var n=r(2632);e.exports={MDXRenderer:n}},2632:function(e,t,r){var n=r(9100),o=r(319),l=r(9713),a=r(7316),c=["scope","children"];function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s=r(7294),p=r(4983).mdx,f=r(6948).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,l=a(e,c),u=f(t),d=s.useMemo((function(){if(!r)return null;var e=i({React:s,mdx:p},u),t=Object.keys(e),l=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(l)))}),[r,t]);return s.createElement(d,i({},l))}},7023:function(e,t,r){"use strict";var n=r(7294),o=r(1597);t.Z=function(e){var t=e.pageTitle,r=e.children,l=(0,o.useStaticQuery)("3159585216");return n.createElement("div",{className:"min-h-screen bg-zinc-100 dark:bg-zinc-900"},n.createElement("title",null,t," | ",l.site.siteMetadata.title),n.createElement("header",{className:"text-zinc-700 dark:text-zinc-300 text-2xl font-bold p-9"},l.site.siteMetadata.title),n.createElement("nav",null,n.createElement("ul",{className:"flex space-x-5 pl-9"},n.createElement("li",null,n.createElement(o.Link,{className:"text-zinc-700 dark:text-zinc-300 hover:text-purple-700 dark:hover:text-purple-400 font-semibold text-lg hover:underline transition duration-200",to:"/"},"Home")),n.createElement("li",null,n.createElement(o.Link,{className:"text-gray-700 dark:text-zinc-300 hover:text-purple-700 dark:hover:text-purple-400 font-semibold text-lg hover:underline transition duration-200",to:"/about"},"About")),n.createElement("li",null,n.createElement(o.Link,{className:"text-zinc-700 dark:text-zinc-300 hover:text-purple-700 dark:hover:text-purple-400 font-semibold text-lg hover:underline transition duration-200",to:"/portfolio"},"Portfolio")),n.createElement("li",null,n.createElement(o.Link,{className:"text-zinc-700 dark:text-zinc-300 hover:text-purple-700 dark:hover:text-purple-400 font-semibold text-lg hover:underline transition duration-200",to:"/blog"},"Blog")))),n.createElement("main",{className:"flex justify-center p-9 mt-5 md:m-9 rounded-xl"},n.createElement("div",{className:"prose lg:prose-xl prose-zinc dark:prose-invert"},n.createElement("h1",null,t),r)))}},1676:function(e,t,r){"use strict";r.r(t);var n=r(7294),o=r(1597),l=r(2102),a=r(7023);t.default=function(e){var t=e.data;return n.createElement(a.Z,{pageTitle:t.mdx.frontmatter.title},n.createElement("p",null,t.mdx.frontmatter.date),n.createElement(o.Link,{to:t.mdx.frontmatter.github,className:"dark:text-zinc-100 bg-purple-300 dark:bg-purple-600 hover:bg-purple-400 dark:hover:bg-purple-800 p-4 rounded no-underline flex max-w-fit items-center space-x-2"},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",className:"bi bi-github",viewBox:"0 0 16 16"},n.createElement("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"}))," ",n.createElement("p",{className:"p-0 m-0"},"Check it out on Github!")),n.createElement(l.MDXRenderer,null,t.mdx.body))}}}]);
//# sourceMappingURL=component---src-pages-portfolio-mdx-slug-tsx-d0ad87bef1d16de5cc22.js.map