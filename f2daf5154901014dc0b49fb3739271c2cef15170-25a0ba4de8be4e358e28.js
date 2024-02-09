"use strict";(self.webpackChunkportfolio_gatsby=self.webpackChunkportfolio_gatsby||[]).push([[293],{7278:function(n,e,a){var t=a(6736),s=a(959);function o(n){const e=Object.assign({p:"p",a:"a",span:"span",ul:"ul",li:"li",em:"em"},(0,t.ah)(),n.components);return s.createElement(s.Fragment,null,s.createElement(e.p,null,"Recently, while I was working on my ",s.createElement(e.a,{href:"https://chrisleggett.me/portfolio/todo-vite-ts"},"Simple Todo App"),", I had the need to style a checkbox. This turned out not to be a trivial process. Once I got it figured out, I decided to write this blog post, both to solidify my knowledge and share this with anyone else who happens upon this issue."),"\n",s.createElement(e.p,null,"Imagine you have the following HTML on your page."),"\n",s.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="html"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox-label<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>💊 Take Medicine<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span></code></pre></div>'}}),"\n",s.createElement(e.p,null,"Imagine you wanted the checkbox to be filled in with red instead of blue when you check the box. You might imagine that you could style the checkbox with some simple CSS such as the following."),"\n",s.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="css"><pre class="language-css"><code class="language-css"><span class="token selector">.checkbox:checked</span> <span class="token punctuation">{</span>\n  <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre></div>'}}),"\n",s.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 266px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/20b69c56ca93f28acaff3aa3ab4fcdbe/b4ffe/screenshot1.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 18.421052631578945%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAIAAAABPYjBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAsElEQVR42m2PuwrCMBhG844+iLOLqw/g3qFLL3aRUHDpVFKHYAlYaEgGl2KdMqjQC3/ySztIBc/4cYbzEVziJvq+B4DfzeE/yKuzl1s3uc9m2KyxfTDOz0UhhCjL0hhDKU2SRCklhMjzXGstpazrWmtNrs2w2remQ7zvxtMWHUolD3EcBIHneVVVMcZ83w/DME3TKIqyLOOcH2eIQxxh7rJvRPh2OuestctIgMlbPvoA3U3V3zm4rmQAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Uh Oh, that Checkbox isn&#39;t red"\n        title=""\n        src="/static/20b69c56ca93f28acaff3aa3ab4fcdbe/b4ffe/screenshot1.png"\n        srcset="/static/20b69c56ca93f28acaff3aa3ab4fcdbe/b4ffe/screenshot1.png 266w"\n        sizes="(max-width: 266px) 100vw, 266px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",s.createElement(e.p,null,"Unfortunately it's not quite that simple. You can apply some styles directly to the checkbox, such as sizing, margin, padding, etc. However if you want to use a different symbol or change the color of the textbox, you have to get a bit more creative than that. Essentially, what we have to do is not display the checkbox at all and fill in the blanks with our custom styles."),"\n",s.createElement(e.p,null,"First, the styling for the checkbox in its normal state:"),"\n",s.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="css"><pre class="language-css"><code class="language-css">  <span class="token selector">.checkbox</span> <span class="token punctuation">{</span>\n    <span class="token property">appearance</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n    <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>\n    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span></code></pre></div>'}}),"\n",s.createElement(e.ul,null,"\n",s.createElement(e.li,null,s.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">appearance: none</code>'}}),": this effectively removes the default checkbox but leaves the functionality."),"\n",s.createElement(e.li,null,s.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">cursor: pointer</code>'}}),": this controls what the cursor looks like while the checkbox is moused over. We set it to ",s.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">pointer</code>'}})," in order to signify that our custom checkbox is clickable."),"\n",s.createElement(e.li,null,s.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">border: 1px solid red</code>'}}),": This sets a border around the checkbox so that we can visually see it, otherwise it's invisible. Feel free to customize any part of this you wish to make it appear how you want it."),"\n",s.createElement(e.li,null,s.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">width</code>'}})," and ",s.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">height</code>'}}),": These need to be specified, or else the custom checkbox will have no size, and the borders will appear as a tiny dot on the screen."),"\n"),"\n",s.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 265px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/dd77c6531d8e8ee5a23504ad96ab61fc/78e79/screenshot2.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 17.358490566037734%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAADCAIAAAAcOLh5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAoElEQVR42h3LvQ6CMBQGUB7QhyN9Atgc6GzQkZmVAKYBNBGblB+rIF65/Yyc/XgYBlgLYwC4S4v7/TFNT2uJiJmdc1pray2AeZ6JaF1XZsbG+7fpBd0D3cff4Xg6tzfh+/tNmqZBEAghpJRRFEkp4zhOkiQMw2VZPBCh7/D+OrryeABARFmWKaWKojDGjONY13VZllVVKaWaptFa53nOzD+UHp3/6vW3GAAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Now we&#39;ve got a red unchecked box instead of grey."\n        title=""\n        src="/static/dd77c6531d8e8ee5a23504ad96ab61fc/78e79/screenshot2.png"\n        srcset="/static/dd77c6531d8e8ee5a23504ad96ab61fc/78e79/screenshot2.png 265w"\n        sizes="(max-width: 265px) 100vw, 265px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",s.createElement(e.p,null,"You can also specify some additional styling here if you wish, such as ",s.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">border-radius</code>'}})," and ",s.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">transition-duration</code>'}})," (to fade in the checked background color), if you would like."),"\n",s.createElement(e.p,null,"The next step is to style the ",s.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">checked</code>'}})," state of the checkbox. This is pretty simple."),"\n",s.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="css"><pre class="language-css"><code class="language-css"><span class="token selector">.checkbox:checked</span> <span class="token punctuation">{</span>\n  <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre></div>'}}),"\n",s.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 269px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/62c69a80b00308b41d9cbf2a36a05644/98fe2/screenshot3.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 19.33085501858736%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAIAAAABPYjBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAsUlEQVR42pXOsQqDMBgE4Lyic+kj9DXs1NGpk5AhEBBEcfYBCpHaZHNQMCJV6CAU1D/XotC9Nx233MdgDPIc0wQAzuGfMHgeGMO9BJb5csY43oqiUKqqqmEY2rZNksQY03Wd1rppmrqu+7631hIRQxDgeIB90fM6ixMcSv04+74QQkqplJJScs7DMIzjOIqiNE2zLOOcL8vCtv9Nu45w783uiMg5t67rztv7bwdARF/2B/lc05P9hEjCAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Sweet, the checkbox background is red when checked!"\n        title=""\n        src="/static/62c69a80b00308b41d9cbf2a36a05644/98fe2/screenshot3.png"\n        srcset="/static/62c69a80b00308b41d9cbf2a36a05644/98fe2/screenshot3.png 269w"\n        sizes="(max-width: 269px) 100vw, 269px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",s.createElement(e.p,null,"Then you get a nice red background color when the checkbox is checked. Simple as that! But there's no checkmark symbol! This is where it starts to get a bit complicated again."),"\n",s.createElement(e.p,null,"First off, you need to make sure the ",s.createElement(e.em,null,"parent")," of the checkbox and span tag has a position of ",s.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">relative</code>'}}),". In my case, this is the element with the class of ",s.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">checkbox-label</code>'}}),"."),"\n",s.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="css"><pre class="language-css"><code class="language-css"><span class="token selector">.checkbox-label</span> <span class="token punctuation">{</span>\n  <span class="token property">postion</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre></div>'}}),"\n",s.createElement(e.p,null,"Next, you need to apply the following styles to the ",s.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">checkbox</code>'}}),"'s sibling ",s.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">span</code>'}})," tag with the ",s.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">before</code>'}})," psuedo-attribute:"),"\n",s.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="css"><pre class="language-css"><code class="language-css"><span class="token selector">.checkbox:checked + span::before</span> <span class="token punctuation">{</span>\n  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">\'\\2713\'</span><span class="token punctuation">;</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>\n  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>\n  <span class="token property">left</span><span class="token punctuation">:</span> 0.35rem<span class="token punctuation">;</span>\n  <span class="token property">top</span><span class="token punctuation">:</span> -0.3rem<span class="token punctuation">;</span>\n  <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre></div>'}}),"\n",s.createElement(e.p,null,"The ",s.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">position: absolute</code>'}})," here is why the ",s.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">position: relative</code>'}})," was needed on the parent. Let's go over these"),"\n",s.createElement(e.ul,null,"\n",s.createElement(e.li,null,s.createElement(e.span,{dangerouslySetInnerHTML:{__html:"<code class=\"language-text\">content: '\\2713'</code>"}}),": This adds the checkmark symbol."),"\n",s.createElement(e.li,null,s.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">color: white;</code>'}}),": Makes the checkmark white, supply a different color if you wish."),"\n",s.createElement(e.li,null,s.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">cursor: pointer</code>'}}),": same as earlier, just applied to the checkmark itself this time."),"\n",s.createElement(e.li,null,s.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">position: absolute</code>'}}),": Since we are technically applying this style to the span tag that is after the checkbox, we need some absolute positioning in order to move the checkmark inside the checkbox. Depending on any sizing, margins, flex layout, etc that you may have applied to the checkbox or its parents or siblings, you may need to adjust the ",s.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">top</code>'}})," and ",s.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">left</code>'}})," properties a bit. There's no exact science here, just fiddle with them until the checkmark is in the middle of the box."),"\n"),"\n",s.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 228px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/dea13af17ab405ea61e06c6f10a439b8/d4770/screenshot4.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 17.105263157894736%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAADCAIAAAAcOLh5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAqUlEQVR42h3LKw6DQBQF0C6I5eDYBKprIK1HFIGCKpLn6pGYGgy/tAMC0WQyJEAHGN5tyvHnBACuC8fBOPJi0Ly0/kopjTHrugKQUiqlAGitt20zB2YGcPpn24ZlYZzN88LX8zDqILjd49j3/SzLkiTxPI+IwjAkojRNiSiKomVZjjzPGAYws3rAfBgQ4l3XdZ7nfd9P0ySEqKqqKIqmabqua9u2LMt9338ddZmF3Qy98wAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="And there&#39;s the checkmark!"\n        title=""\n        src="/static/dea13af17ab405ea61e06c6f10a439b8/d4770/screenshot4.png"\n        srcset="/static/dea13af17ab405ea61e06c6f10a439b8/d4770/screenshot4.png 228w"\n        sizes="(max-width: 228px) 100vw, 228px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",s.createElement(e.p,null,"And just to prove it works with multiple checkboxes and not just because the checkbox is at the top of the page in this contrived example, consider the following HTML with the same CSS."),"\n",s.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="html"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox-label<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>💊 Take Medicine<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox-label<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>🚗 Change Oil<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span></code></pre></div>'}}),"\n",s.createElement(e.p,null,"This results in the following:"),"\n",s.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 228px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/1b24b54c67d5798285379d2f15f47343/d4770/screenshot5.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 34.21052631578947%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAIAAACHqfpvAAAACXBIWXMAAAsTAAALEwEAmpwYAAABQ0lEQVR42pWQzU7CUBSE+y6aiK/mC7DXJTvCnxoUo8EYJGCMrhQBS8BSFHVB1VJiS2lcAEJ/0t7b3jElSth6FidnM3NmPg4AVBWaFh5g+M9w4YpsIrIRSvVPViqb85kgCLrxpQ+HruvJbz2hLVqW1e8ro9FoOp3oujGZjF1CODCG7R1EowB8Ycsv7PoM15eleHo/lYjf1fha5TYWi5VL5/FE5qJYaIsP+dPiYXZPHqiLz/U6mi0gYEQDAgCOY7ueRyklhISmfkAIcRyHUOp5ruu6tm0TSn9js/U1AObYNBTDdqzuo/j0/CpJ0ocsK0pfknqqpr9LvXazIQ+0EAxjf51zOZZOAxAPjm8yZ7PvGV+v1vhWNpOs3DfyJ0epZKLKt7od8apc7LxIAIIgYIxxq/QIIT6li5z+0t6cz03TWgpWaf8Al8hyiK68k1UAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Both checkmarks in the right place!"\n        title=""\n        src="/static/1b24b54c67d5798285379d2f15f47343/d4770/screenshot5.png"\n        srcset="/static/1b24b54c67d5798285379d2f15f47343/d4770/screenshot5.png 228w"\n        sizes="(max-width: 228px) 100vw, 228px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",s.createElement(e.p,null,"And there you have it! The absolute positioning required is a bit unfortunate, so make sure if you add any padding or margins to surrounding elements that you revisit that to make sure the checkmark is still in the middle. If you used ",s.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">rem</code>'}})," like I did, then font-size changes on any parent tags shouldn't knock the checkbox too far out of the middle, at least until you make pretty significant changes. If you do need to drastically increase your font-size, you may want to replace the hard-coded ",s.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">rem</code>'}})," values with ",s.createElement(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/--*"},"CSS Custom Properties")," and change them wherever you change the font size."),"\n",s.createElement(e.p,null,"For the complete example, check out the ",s.createElement(e.a,{href:"https://codepen.io/leggettc18/pen/bGayPzo"},"Codepen"),". There may be smoother ways of accomplishing this, so I'd be interested in hearing from you if you know of a better one! Feel free to hit me up on Twitter ",s.createElement(e.a,{href:"https://twitter.com/leggettc18"},"@leggettc18"),"! I'll update the blog post with anything useful."))}e.Z=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,t.ah)(),n.components);return e?s.createElement(e,n,s.createElement(o,n)):o(n)}},1087:function(n,e,a){a.d(e,{H:function(){return o}});var t=a(959),s=a(8394);const o=n=>{let{title:e,description:a,article:o,image:l,location:c,children:p}=n;const{title:i,description:r,url:u,image:g,twitterUsername:h}=(0,s.useStaticQuery)("2535782836").site.siteMetadata,d={title:e?e+" | "+i:i,description:a||r,image:""+u+(l||g),url:""+u+c.pathname};return console.log(c.pathname),t.createElement(t.Fragment,null,t.createElement("meta",{name:"view-transition",content:"same-origin"}),t.createElement("title",null,d.title),t.createElement("meta",{name:"description",content:d.description}),t.createElement("meta",{name:"image",content:d.image}),d.url&&t.createElement("meta",{property:"og:url",content:d.url}),!o?null:t.createElement("meta",{property:"og:type",content:"article"}),d.title&&t.createElement("meta",{property:"og:title",content:d.title}),d.description&&t.createElement("meta",{property:"og:description",content:d.description}),d.image&&t.createElement("meta",{property:"og:image",content:d.image}),t.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),h&&t.createElement("meta",{name:"twitter:creator",content:h}),d.title&&t.createElement("meta",{name:"twitter:title",content:d.title}),d.description&&t.createElement("meta",{name:"twitter:description",content:d.description}),d.image&&t.createElement("meta",{name:"twitter:image",content:d.image}),p)}},6736:function(n,e,a){a.d(e,{ah:function(){return o}});var t=a(959);const s=t.createContext({});function o(n){const e=t.useContext(s);return t.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}}}]);
//# sourceMappingURL=f2daf5154901014dc0b49fb3739271c2cef15170-25a0ba4de8be4e358e28.js.map