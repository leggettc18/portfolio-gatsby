"use strict";(self.webpackChunkportfolio_gatsby=self.webpackChunkportfolio_gatsby||[]).push([[594],{3867:function(e,t,n){var a=n(6736),r=n(959);function o(e){const t=Object.assign({p:"p",strong:"strong",a:"a"},(0,a.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.p,null,"This is a small educational project I wrote up to teach myself GraphQL and how to implement a\nGraphQL API in Go. It's nothing ",r.createElement(t.strong,null,"too")," fancy, but it might be useful to someone learning GraphQL\nthemselves."),"\n",r.createElement(t.p,null,"For the ",r.createElement(t.a,{href:"https://github.com/leggettc18/hackernews-clone-api"},"backend"),", it utilizes the graph-gophers\npackages for parsing the schema, mapping incoming requests to the correct resolvers, and handling\nsubscriptions. It has a working setup for Websocket Subscriptions, Pagination, etc. Feel free to\nlook it over, take what I wrote with a grain of salt, but you may learn something new!"),"\n",r.createElement(t.p,null,"For the ",r.createElement(t.a,{href:"https://github.com/leggettc18/hackernews-vue-apollo"},"frontend"),", it utilizes the ",r.createElement(t.a,{href:"https://apollo.vuejs.org/"},"Vue\nversion of the Apollo")," library. I followed a tutorial that may\nor may not be slightly out of date, so some review and revision may be in order. Keep that in\nmind if you choose to use it as an educational resource."),"\n",r.createElement(t.p,null,"Feedback is appreciated if you come across these and find any glaring issues, or ways to improve\nthem as educational resources. Feel free to leave an issue on whichever repo the code changes would\ngo in."))}t.Z=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?r.createElement(t,e,r.createElement(o,e)):o(e)}},9817:function(e,t,n){n.r(t),n.d(t,{Head:function(){return l},default:function(){return c}});var a=n(3867),r=n(959),o=n(1087);const i=e=>{let{data:t,children:n}=e;return r.createElement("div",{className:"flex justify-center"},r.createElement("div",{className:"prose lg:prose-xl prose-zinc dark:prose-invert md:max-w-[65ch] lg:max-w-[75ch] xl:max-w-[90ch] prose-h2:mt-2 lg:prose-h2:mt-2"},r.createElement("h1",{className:"px-9 pt-9 md:px-4"},t.mdx.frontmatter.title),r.createElement("div",{className:"px-9"},r.createElement("p",null,t.mdx.frontmatter.date),r.createElement("a",{href:t.mdx.frontmatter.github,className:"dark:text-zinc-100 bg-purple-300 dark:bg-purple-600 hover:bg-purple-400 dark:hover:bg-purple-800 p-4 rounded no-underline flex max-w-fit items-center space-x-2"},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",className:"bi bi-github",viewBox:"0 0 16 16"},r.createElement("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"}))," ",r.createElement("p",{className:"p-0 m-0"},"Check it out on Github!")),n)))},l=e=>{var t;let{location:n,data:a}=e;return r.createElement(o.H,{title:a.mdx.frontmatter.title,description:a.mdx.frontmatter.description||a.mdx.excerpt||"nothin’",image:null===(t=a.mdx.frontmatter.image)||void 0===t?void 0:t.childImageSharp.sizes.src,location:n,article:!0})};function c(e){return r.createElement(i,e,r.createElement(a.Z,e))}},1087:function(e,t,n){n.d(t,{H:function(){return o}});var a=n(959),r=n(8394);const o=e=>{let{title:t,description:n,article:o,image:i,location:l,children:c}=e;const{title:m,description:s,url:p,image:u,twitterUsername:h}=(0,r.useStaticQuery)("2535782836").site.siteMetadata,g={title:t?t+" | "+m:m,description:n||s,image:""+p+(i||u),url:""+p+l.pathname};return console.log(l.pathname),a.createElement(a.Fragment,null,a.createElement("title",null,g.title),a.createElement("meta",{name:"description",content:g.description}),a.createElement("meta",{name:"image",content:g.image}),g.url&&a.createElement("meta",{property:"og:url",content:g.url}),!o?null:a.createElement("meta",{property:"og:type",content:"article"}),g.title&&a.createElement("meta",{property:"og:title",content:g.title}),g.description&&a.createElement("meta",{property:"og:description",content:g.description}),g.image&&a.createElement("meta",{property:"og:image",content:g.image}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),h&&a.createElement("meta",{name:"twitter:creator",content:h}),g.title&&a.createElement("meta",{name:"twitter:title",content:g.title}),g.description&&a.createElement("meta",{name:"twitter:description",content:g.description}),g.image&&a.createElement("meta",{name:"twitter:image",content:g.image}),c)}},6736:function(e,t,n){n.d(t,{ah:function(){return o}});var a=n(959);const r=a.createContext({});function o(e){const t=a.useContext(r);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}}}]);
//# sourceMappingURL=component---src-pages-portfolio-mdx-fields-slug-tsx-content-file-path-content-portfolio-hackernews-clone-index-mdx-b474712ba83d7c71571a.js.map