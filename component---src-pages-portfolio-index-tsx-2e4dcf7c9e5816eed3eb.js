"use strict";(self.webpackChunkportfolio_gatsby=self.webpackChunkportfolio_gatsby||[]).push([[967],{1087:function(e,t,n){n.d(t,{H:function(){return i}});var r=n(959),a=n(8394);const i=e=>{let{title:t,description:n,article:i,image:l,location:c,children:o}=e;const{title:m,description:s,url:p,image:d,twitterUsername:u}=(0,a.useStaticQuery)("2535782836").site.siteMetadata,g={title:t?t+" | "+m:m,description:n||s,image:""+p+(l||d),url:""+p+c.pathname};return console.log(c.pathname),r.createElement(r.Fragment,null,r.createElement("title",null,g.title),r.createElement("meta",{name:"description",content:g.description}),r.createElement("meta",{name:"image",content:g.image}),g.url&&r.createElement("meta",{property:"og:url",content:g.url}),!i?null:r.createElement("meta",{property:"og:type",content:"article"}),g.title&&r.createElement("meta",{property:"og:title",content:g.title}),g.description&&r.createElement("meta",{property:"og:description",content:g.description}),g.image&&r.createElement("meta",{property:"og:image",content:g.image}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),u&&r.createElement("meta",{name:"twitter:creator",content:u}),g.title&&r.createElement("meta",{name:"twitter:title",content:g.title}),g.description&&r.createElement("meta",{name:"twitter:description",content:g.description}),g.image&&r.createElement("meta",{name:"twitter:image",content:g.image}),o)}},277:function(e,t,n){n.r(t),n.d(t,{Head:function(){return l}});var r=n(959),a=n(8394),i=n(1087);const l=()=>r.createElement(i.H,{title:"Portfolio"});t.default=()=>{const e=(0,a.useStaticQuery)("3945893415");return r.createElement("div",{className:"flex justify-center"},r.createElement("div",{className:"prose lg:prose-xl prose-zinc dark:prose-invert md:max-w-[65ch] lg:max-w-[75ch] xl:max-w-[90ch] prose-h2:mt-2 lg:prose-h2:mt-2"},r.createElement("h1",{className:"px-9 md:px-4"},"My Portfolio"),r.createElement("div",{className:"px-9"},e.allMdx.nodes.map((e=>r.createElement("article",{key:e.id,className:"dark:bg-zinc-800 bg-zinc-200 p-4 rounded mb-4"},r.createElement("h2",{className:"m-0"},r.createElement(a.Link,{className:"text-zinc-700 dark:text-zinc-300 hover:text-purple-600 dark:hover:text-purple-400 no-underline transition duration-200",to:"/portfolio/"+e.fields.slug},e.frontmatter.title)),r.createElement("p",null,"Posted: ",e.frontmatter.date),r.createElement("p",null,e.excerpt),r.createElement(a.Link,{to:"/portfolio/"+e.fields.slug,className:"text-zinc-700 dark:text-zinc-300 hover:text-purple-600 dark:hover:text-purple-400 no-underline transition duration-200"},"Read More...")))))))}}}]);
//# sourceMappingURL=component---src-pages-portfolio-index-tsx-2e4dcf7c9e5816eed3eb.js.map