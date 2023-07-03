"use strict";(self.webpackChunkportfolio_gatsby=self.webpackChunkportfolio_gatsby||[]).push([[453],{6735:function(e,t,n){var a=n(6736),r=n(959);function i(e){const t=Object.assign({p:"p",img:"img",span:"span",a:"a"},(0,a.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.p,null,"This is a very simple space shooter game written entirely in JavaScript. The goal of this\nwas not to make a very compelling or ground-breaking game, but to demonstrate what I believe\nare best practices, based on what I was able to find online."),"\n",r.createElement(t.img,{src:"/f8900457667118e7ef7f2d7b6a2eadf7/space-game.gif",alt:"Animation of playing the Space Game"}),"\n",r.createElement(t.p,null,"It was originally built from Microsoft's Web Dev for Beginners repo's javascript game tutorial\nas a base, but I have expanded on it to the point that not much of the original code is left.\nIt utilizes a spritesheet from Kenney's website, ",r.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">window.requestAnimationFrame()</code>'}})," for\nupdating the frame, and some physics calculations to move the objects around at set speed.\nIt uses a Pub/Sub architecture for sending keyboard input as well. You can check out the source\ncode ",r.createElement(t.a,{href:"https://github.com/leggettc18/space-game"},"here"),"."))}t.Z=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?r.createElement(t,e,r.createElement(i,e)):i(e)}},8375:function(e,t,n){n.r(t),n.d(t,{Head:function(){return o},default:function(){return l}});var a=n(6735),r=n(959),i=n(1087);const c=e=>{let{data:t,children:n}=e;return r.createElement("div",{className:"flex justify-center"},r.createElement("div",{className:"prose lg:prose-xl prose-zinc dark:prose-invert md:max-w-[65ch] lg:max-w-[75ch] xl:max-w-[90ch] prose-h2:mt-2 lg:prose-h2:mt-2"},r.createElement("h1",{className:"px-9 pt-9 md:px-4"},t.mdx.frontmatter.title),r.createElement("div",{className:"px-9"},r.createElement("p",null,t.mdx.frontmatter.date),r.createElement("a",{href:t.mdx.frontmatter.github,className:"dark:text-zinc-100 bg-purple-300 dark:bg-purple-600 hover:bg-purple-400 dark:hover:bg-purple-800 p-4 rounded no-underline flex max-w-fit items-center space-x-2"},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",className:"bi bi-github",viewBox:"0 0 16 16"},r.createElement("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"}))," ",r.createElement("p",{className:"p-0 m-0"},"Check it out on Github!")),n)))},o=e=>{var t;let{data:n}=e;return r.createElement(i.H,{title:n.mdx.frontmatter.title,description:n.mdx.frontmatter.description||n.mdx.excerpt||"nothin’",image:null===(t=n.mdx.frontmatter.image)||void 0===t?void 0:t.childImageSharp.sizes.src,article:!0})};function l(e){return r.createElement(c,e,r.createElement(a.Z,e))}},1087:function(e,t,n){n.d(t,{H:function(){return i}});var a=n(959),r=n(8394);const i=e=>{let{title:t,description:n,pathname:i,article:c,image:o,children:l}=e;const{title:m,description:s,url:p,image:u,twitterUsername:d}=(0,r.useStaticQuery)("2535782836").site.siteMetadata,g={title:t?t+" | "+m:m,description:n||s,image:""+p+(o||u),url:""+p+i};return a.createElement(a.Fragment,null,a.createElement("title",null,g.title),a.createElement("meta",{name:"description",content:g.description}),a.createElement("meta",{name:"image",content:g.image}),g.url&&a.createElement("meta",{property:"og:url",content:g.url}),!c?null:a.createElement("meta",{property:"og:type",content:"article"}),g.title&&a.createElement("meta",{property:"og:title",content:g.title}),g.description&&a.createElement("meta",{property:"og:description",content:g.description}),g.image&&a.createElement("meta",{property:"og:image",content:g.image}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),d&&a.createElement("meta",{name:"twitter:creator",content:d}),g.title&&a.createElement("meta",{name:"twitter:title",content:g.title}),g.description&&a.createElement("meta",{name:"twitter:description",content:g.description}),g.image&&a.createElement("meta",{name:"twitter:image",content:g.image}),l)}},6736:function(e,t,n){n.d(t,{ah:function(){return i}});var a=n(959);const r=a.createContext({});function i(e){const t=a.useContext(r);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}}}]);
//# sourceMappingURL=component---src-pages-portfolio-mdx-fields-slug-tsx-content-file-path-content-portfolio-space-game-index-mdx-f2e4378c647a02ff98b4.js.map