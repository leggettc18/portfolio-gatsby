"use strict";(self.webpackChunkportfolio_gatsby=self.webpackChunkportfolio_gatsby||[]).push([[691],{5787:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,l=/[_.\- ]+/,i=new RegExp("^"+l.source),s=new RegExp(l.source+n.source,"gu"),o=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const l=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):l(e);return e!==l(e)&&(e=((e,r,n)=>{let l=!1,i=!1,s=!1;for(let o=0;o<e.length;o++){const c=e[o];l&&t.test(c)?(e=e.slice(0,o)+"-"+e.slice(o),l=!1,s=i,i=!0,o++):i&&s&&a.test(c)?(e=e.slice(0,o-1)+"-"+e.slice(o-1),s=i,i=!1,l=!0):(l=r(c)===c&&n(c)!==c,s=i,i=n(c)===c&&r(c)!==c)}return e})(e,l,c)),e=e.replace(i,""),e=n.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,l):l(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(s.lastIndex=0,o.lastIndex=0,e.replace(s,((e,a)=>t(a))).replace(o,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},2528:function(e,t,a){a.d(t,{L:function(){return g},M:function(){return x},P:function(){return E},S:function(){return V},_:function(){return s},a:function(){return i},b:function(){return d},g:function(){return m},h:function(){return o}});var r=a(959),n=(a(5787),a(507)),l=a.n(n);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t.indexOf(a=l[r])>=0||(n[a]=e[a]);return n}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function d(e,t,a,r,n){return void 0===n&&(n={}),i({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:i({},n,{opacity:t?1:0})})}function m(e,t,a,r,n,l,s,o){const c={};l&&(c.backgroundColor=l,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=l,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),o&&(c.objectPosition=o);const d=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const u=["children"],p=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+n+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,a=s(e,u);return r.createElement(r.Fragment,null,r.createElement(p,i({},a)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:a,loading:n,alt:l="",shouldLoad:o}=e,c=s(e,h);return r.createElement("img",i({},c,{decoding:"async",loading:n,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:l}))},w=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,l=s(e,f);const o=l.sizes||(null==t?void 0:t.sizes),c=r.createElement(y,i({},l,t,{sizes:o,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:l}=e;return r.createElement("source",{key:t+"-"+l+"-"+a,type:l,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:o})})),c):c};var v;y.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},w.displayName="Picture",w.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const b=["fallback"],E=function(e){let{fallback:t}=e,a=s(e,b);return t?r.createElement(w,i({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",i({},a))};E.displayName="Placeholder",E.propTypes={fallback:n.string,sources:null==(v=w.propTypes)?void 0:v.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const x=function(e){return r.createElement(r.Fragment,null,r.createElement(w,i({},e)),r.createElement("noscript",null,r.createElement(w,i({},e,{shouldLoad:!0}))))};x.displayName="MainImage",x.propTypes=w.propTypes;const C=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],k=["style","className"],N=e=>e.replace(/\n/g,""),L=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),i=3;i<r;i++)n[i-3]=arguments[i];return e.alt||""===e.alt?l().string.apply(l(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},S={image:l().object.isRequired,alt:L},z=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],T=["style","className"],j=new Set;let I,A;const _=function(e){let{as:t="div",image:n,style:l,backgroundColor:d,className:m,class:u,onStartLoad:p,onLoad:g,onError:h}=e,f=s(e,z);const{width:y,height:w,layout:v}=n,b=c(y,w,v),{style:E,className:x}=b,C=s(b,T),k=(0,r.useRef)(),N=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);u&&(m=u);const L=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(v,y,w);return(0,r.useEffect)((()=>{I||(I=a.e(717).then(a.bind(a,7717)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return A=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=k.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void j.add(N);if(A&&j.has(N))return;let t,r;return I.then((e=>{let{renderImageToString:a,swapPlaceholderImage:s}=e;k.current&&(k.current.innerHTML=a(i({isLoading:!0,isLoaded:j.has(N),image:n},f)),j.has(N)||(t=requestAnimationFrame((()=>{k.current&&(r=s(k.current,N,j,l,p,g,h))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{j.has(N)&&A&&(k.current.innerHTML=A(i({isLoading:j.has(N),isLoaded:j.has(N),image:n},f)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[n]),(0,r.createElement)(t,i({},C,{style:i({},E,l,{backgroundColor:d}),className:x+(m?" "+m:""),ref:k,dangerouslySetInnerHTML:{__html:L},suppressHydrationWarning:!0}))},O=(0,r.memo)((function(e){return e.image?(0,r.createElement)(_,e):null}));O.propTypes=S,O.displayName="GatsbyImage";const M=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function R(e){return function(t){let{src:a,__imageData:n,__error:l}=t,o=s(t,M);return l&&console.warn(l),n?r.createElement(e,i({image:n},o)):(console.warn("Image not loaded",a),null)}}const q=R((function(e){let{as:t="div",className:a,class:n,style:l,image:o,loading:u="lazy",imgClassName:p,imgStyle:h,backgroundColor:f,objectFit:y,objectPosition:w}=e,v=s(e,C);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),h=i({objectFit:y,objectPosition:w,backgroundColor:f},h);const{width:b,height:L,layout:S,images:z,placeholder:T,backgroundColor:j}=o,I=c(b,L,S),{style:A,className:_}=I,O=s(I,k),M={fallback:void 0,sources:[]};return z.fallback&&(M.fallback=i({},z.fallback,{srcSet:z.fallback.srcSet?N(z.fallback.srcSet):void 0})),z.sources&&(M.sources=z.sources.map((e=>i({},e,{srcSet:N(e.srcSet)})))),r.createElement(t,i({},O,{style:i({},A,l,{backgroundColor:f}),className:_+(a?" "+a:"")}),r.createElement(g,{layout:S,width:b,height:L},r.createElement(E,i({},m(T,!1,S,b,L,j,y,w))),r.createElement(x,i({"data-gatsby-image-ssr":"",className:p},v,d("eager"===u,!1,M,u,h)))))})),P=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?l().number.apply(l(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},F=new Set(["fixed","fullWidth","constrained"]),H={src:l().string.isRequired,alt:L,width:P,height:P,sizes:l().string,layout:e=>{if(void 0!==e.layout&&!F.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};q.displayName="StaticImage",q.propTypes=H;const V=R(O);V.displayName="StaticImage",V.propTypes=H},1087:function(e,t,a){a.d(t,{Z:function(){return l}});var r=a(959),n=a(8394);var l=e=>{let{title:t,description:a,pathname:l,article:i,image:s,children:o}=e;const{title:c,description:d,siteUrl:m,image:u,twitterUsername:p}=(0,n.useStaticQuery)("2535782836").site.siteMetadata,g={title:t||c,description:a||d,image:""+m+(s||u),url:""+m+l};return r.createElement(r.Fragment,null,r.createElement("title",null,g.title),r.createElement("meta",{name:"description",content:g.description}),r.createElement("meta",{name:"image",content:g.image}),g.url&&r.createElement("meta",{property:"og:url",content:g.url}),!i?null:r.createElement("meta",{property:"og:type",content:"article"}),g.title&&r.createElement("meta",{property:"og:title",content:g.title}),g.description&&r.createElement("meta",{property:"og:description",content:g.description}),g.image&&r.createElement("meta",{property:"og:image",content:g.image}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),p&&r.createElement("meta",{name:"twitter:creator",content:p}),g.title&&r.createElement("meta",{name:"twitter:title",content:g.title}),g.description&&r.createElement("meta",{name:"twitter:description",content:g.description}),g.image&&r.createElement("meta",{name:"twitter:image",content:g.image}),o)}},6473:function(e,t,a){a.r(t),a.d(t,{Head:function(){return s}});var r=a(959),n=a(2528),l=a(8394),i=a(1087);const s=()=>{i.Z};t.default=()=>{const e=(0,l.useStaticQuery)("497414740");return r.createElement(r.Fragment,null,r.createElement("h1",{className:"container mx-auto p-9 font-bold text-4xl"},"Christopher Leggett's Portfolio and Blog"),r.createElement("div",{className:"flex flex-col md:flex-row items-center justify-center bg-hero-pattern px-8 rounded-lg"},r.createElement("div",{className:"font-semibold px-4 md:px-9 mt-4 md:mt-0 rounded-lg md:w-1/4 flex-col space-y-4"},r.createElement("p",null,e.site.siteMetadata.description),r.createElement("p",null,"I am currently developing hobby projects to improve my portfolio while searching for a full-time Software Developer career."),r.createElement("p",null,"Follow me on social media!"),r.createElement("p",{className:"mt-9 flex justify-between"},r.createElement("a",{rel:"me",href:"https://mastodon.social/@leggettc13"},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"w-12 h-auto",viewBox:"0 0 16 16"},r.createElement("path",{d:"M11.19 12.195c2.016-.24 3.77-1.475 3.99-2.603.348-1.778.32-4.339.32-4.339 0-3.47-2.286-4.488-2.286-4.488C12.062.238 10.083.017 8.027 0h-.05C5.92.017 3.942.238 2.79.765c0 0-2.285 1.017-2.285 4.488l-.002.662c-.004.64-.007 1.35.011 2.091.083 3.394.626 6.74 3.78 7.57 1.454.383 2.703.463 3.709.408 1.823-.1 2.847-.647 2.847-.647l-.06-1.317s-1.303.41-2.767.36c-1.45-.05-2.98-.156-3.215-1.928a3.614 3.614 0 0 1-.033-.496s1.424.346 3.228.428c1.103.05 2.137-.064 3.188-.189zm1.613-2.47H11.13v-4.08c0-.859-.364-1.295-1.091-1.295-.804 0-1.207.517-1.207 1.541v2.233H7.168V5.89c0-1.024-.403-1.541-1.207-1.541-.727 0-1.091.436-1.091 1.296v4.079H3.197V5.522c0-.859.22-1.541.66-2.046.456-.505 1.052-.764 1.793-.764.856 0 1.504.328 1.933.983L8 4.39l.417-.695c.429-.655 1.077-.983 1.934-.983.74 0 1.336.259 1.791.764.442.505.661 1.187.661 2.046v4.203z"}))),r.createElement("a",{rel:"me",href:"https://twitter.com/leggettc18"},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"w-12 h-auto",viewBox:"0 0 16 16"},r.createElement("path",{d:"M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"}))),r.createElement("a",{rel:"me",href:"https://github.com/leggettc18"},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"w-12 h-auto",viewBox:"0 0 16 16"},r.createElement("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"}))),r.createElement("a",{rel:"me",href:"https://www.linkedin.com/in/christopher-leggett-b079b7101/"},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"w-12 h-auto",viewBox:"0 0 16 16"},r.createElement("path",{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"}))))),r.createElement("div",{className:"flex justify-center"},r.createElement(n.S,{alt:"A picture of me, Christopher Leggett",src:"../images/me.webp",className:"rounded-full w-52 md:w-72 self-center m-4 shadow-xl shadow-zinc-600/50 dark:shadow-zinc-900/50",imgStyle:{borderRadius:"9999px"},__imageData:a(2950)}))),r.createElement("h2",{className:"px-9 md:px-0 pt-5 flex justify-center text-3xl font-bold"},"Featured"),r.createElement("div",{className:"flex flex-wrap justify-center px-9 md:px-0"},r.createElement("div",{className:"prose lg:prose-xl prose-zinc dark:prose-invert md:max-w-[65ch] lg:max-w-[75ch] xl:max-w-[90ch] prose-h2:mt-2 lg:prose-h2:mt-2 w-full"},r.createElement("div",{className:"flex flex-wrap"},e.allMdx.nodes.map((e=>r.createElement("article",{key:e.id,className:"dark:bg-zinc-800 rounded p-4 m-2 flex-1"},r.createElement("div",{className:"m-0 text-2xl text-center"},r.createElement(l.Link,{className:"text-zinc-700 dark:text-zinc-300 hover:text-purple-600 dark:hover:text-purple-400 no-underline transition duration-200",to:"/portfolio/"+e.fields.slug},e.frontmatter.title)))))))))}},2950:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#181828","images":{"fallback":{"src":"/static/f366af10bd419c3f376fe3ad649238f6/0e305/me.webp","srcSet":"/static/f366af10bd419c3f376fe3ad649238f6/c6c58/me.webp 192w,\\n/static/f366af10bd419c3f376fe3ad649238f6/c8bd5/me.webp 384w,\\n/static/f366af10bd419c3f376fe3ad649238f6/0e305/me.webp 768w","sizes":"(min-width: 768px) 768px, 100vw"},"sources":[]},"width":768,"height":1159}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-3325e1d06067394f1f5e.js.map