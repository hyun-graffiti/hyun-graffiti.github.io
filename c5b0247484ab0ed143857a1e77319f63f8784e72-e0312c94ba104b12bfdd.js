"use strict";(self.webpackChunkdeveloper_hyun=self.webpackChunkdeveloper_hyun||[]).push([[647],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,i=/[_.\- ]+/,s=new RegExp("^"+i.source),o=new RegExp(i.source+n.source,"gu"),l=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const i=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):i(e);return e!==i(e)&&(e=((e,r,n)=>{let i=!1,s=!1,o=!1;for(let l=0;l<e.length;l++){const c=e[l];i&&t.test(c)?(e=e.slice(0,l)+"-"+e.slice(l),i=!1,o=s,s=!0,l++):s&&o&&a.test(c)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),o=s,s=!1,i=!0):(i=r(c)===c&&n(c)!==c,o=s,s=n(c)===c&&r(c)!==c)}return e})(e,i,c)),e=e.replace(s,""),e=n.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,i):i(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(o.lastIndex=0,l.lastIndex=0,e.replace(o,((e,a)=>t(a))).replace(l,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{G:function(){return q},L:function(){return h},M:function(){return k},P:function(){return E},S:function(){return U},_:function(){return o},a:function(){return s},b:function(){return d},c:function(){return c},g:function(){return p},h:function(){return l}});var r=a(7294),n=(a(3204),a(5697)),i=a.n(n);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},s.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(a=i[r])>=0||(n[a]=e[a]);return n}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const c=e=>{var t;return(e=>{var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function u(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function d(e,t,a,r,n){return void 0===n&&(n={}),s({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:s({},n,{opacity:t?1:0})})}function p(e,t,a,r,n,i,o,l){const c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),o&&(c.objectFit=o),l&&(c.objectPosition=l);const u=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const g=["children"],m=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg%20height='${n}'%20width='${a}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},h=function(e){let{children:t}=e,a=o(e,g);return r.createElement(r.Fragment,null,r.createElement(m,s({},a)),t,null)},y=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],b=function(e){let{src:t,srcSet:a,loading:n,alt:i="",shouldLoad:l}=e,c=o(e,y);return r.createElement("img",s({},c,{decoding:"async",loading:n,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:i}))},v=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,i=o(e,f);const l=i.sizes||(null==t?void 0:t.sizes),c=r.createElement(b,s({},i,t,{sizes:l,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:i}=e;return r.createElement("source",{key:`${t}-${i}-${a}`,type:i,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:l})})),c):c};var w;b.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},v.displayName="Picture",v.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const x=["fallback"],E=function(e){let{fallback:t}=e,a=o(e,x);return t?r.createElement(v,s({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",s({},a))};E.displayName="Placeholder",E.propTypes={fallback:n.string,sources:null==(w=v.propTypes)?void 0:w.sources,alt:function(e,t,a){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${a}\`. Validation failed.`):null}};const k=function(e){return r.createElement(r.Fragment,null,r.createElement(v,s({},e)),r.createElement("noscript",null,r.createElement(v,s({},e,{shouldLoad:!0}))))};k.displayName="MainImage",k.propTypes=v.propTypes;const L=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],C=["style","className"],j=e=>e.replace(/\n/g,""),S=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),s=3;s<r;s++)n[s-3]=arguments[s];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(n)):new Error(`The "alt" prop is required in ${a}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},I={image:i().object.isRequired,alt:S},T=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],$=["style","className"],N=new Set;let O,R;const _=function(e){let{as:t="div",image:n,style:i,backgroundColor:c,className:d,class:p,onStartLoad:g,onLoad:m,onError:h}=e,y=o(e,T);const{width:f,height:b,layout:v}=n,w=u(f,b,v),{style:x,className:E}=w,k=o(w,$),L=(0,r.useRef)(),C=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);p&&(d=p);const j=function(e,t,a){let r="";return"fullWidth"===e&&(r=`<div aria-hidden="true" style="padding-top: ${a/t*100}%;"></div>`),"constrained"===e&&(r=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='${a}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),r}(v,f,b);return(0,r.useEffect)((()=>{O||(O=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return R=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=L.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==g||g({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void N.add(C);if(R&&N.has(C))return;let t,r;return O.then((e=>{let{renderImageToString:a,swapPlaceholderImage:o}=e;L.current&&(L.current.innerHTML=a(s({isLoading:!0,isLoaded:N.has(C),image:n},y)),N.has(C)||(t=requestAnimationFrame((()=>{L.current&&(r=o(L.current,C,N,i,g,m,h))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{N.has(C)&&R&&(L.current.innerHTML=R(s({isLoading:N.has(C),isLoaded:N.has(C),image:n},y)),null==g||g({wasCached:!0}),null==m||m({wasCached:!0}))}),[n]),(0,r.createElement)(t,s({},k,{style:s({},x,i,{backgroundColor:c}),className:`${E}${d?` ${d}`:""}`,ref:L,dangerouslySetInnerHTML:{__html:j},suppressHydrationWarning:!0}))},q=(0,r.memo)((function(e){return e.image?(0,r.createElement)(_,e):null}));q.propTypes=I,q.displayName="GatsbyImage";const A=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function P(e){return function(t){let{src:a,__imageData:n,__error:i}=t,l=o(t,A);return i&&console.warn(i),n?r.createElement(e,s({image:n},l)):(console.warn("Image not loaded",a),null)}}const z=P((function(e){let{as:t="div",className:a,class:n,style:i,image:l,loading:c="lazy",imgClassName:g,imgStyle:m,backgroundColor:y,objectFit:f,objectPosition:b}=e,v=o(e,L);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),m=s({objectFit:f,objectPosition:b,backgroundColor:y},m);const{width:w,height:x,layout:S,images:I,placeholder:T,backgroundColor:$}=l,N=u(w,x,S),{style:O,className:R}=N,_=o(N,C),q={fallback:void 0,sources:[]};return I.fallback&&(q.fallback=s({},I.fallback,{srcSet:I.fallback.srcSet?j(I.fallback.srcSet):void 0})),I.sources&&(q.sources=I.sources.map((e=>s({},e,{srcSet:j(e.srcSet)})))),r.createElement(t,s({},_,{style:s({},O,i,{backgroundColor:y}),className:`${R}${a?` ${a}`:""}`}),r.createElement(h,{layout:S,width:w,height:x},r.createElement(E,s({},p(T,!1,S,w,x,$,f,b))),r.createElement(k,s({"data-gatsby-image-ssr":"",className:g},v,d("eager"===c,!1,q,c,m)))))})),F=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(r)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},M=new Set(["fixed","fullWidth","constrained"]),W={src:i().string.isRequired,alt:S,width:F,height:F,sizes:i().string,layout:e=>{if(void 0!==e.layout&&!M.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}};z.displayName="StaticImage",z.propTypes=W;const U=P(q);U.displayName="StaticImage",U.propTypes=W},8347:function(e,t,a){a.d(t,{Z:function(){return s}});var r=a(4160),n=a(5893);const i="506648845";function s(e){let{title:t,description:a,pathname:s,image:o,children:l}=e;const{site:{siteMetadata:c},file:{publicURL:u}}=(0,r.K2)(i),d={title:null!=t?t:c.title,description:null!=a?a:c.description,siteUrl:`${c.siteUrl}${null!=s?s:""}`,image:null!=o?o:u};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("title",{children:d.title}),(0,n.jsx)("html",{lang:"ko"}),(0,n.jsx)("meta",{name:"description",content:d.description}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,n.jsx)("meta",{httpEquiv:"Content-Type",content:"text/html;charset=UTF-8"}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("meta",{property:"og:title",content:d.title}),(0,n.jsx)("meta",{property:"og:description",content:d.description}),(0,n.jsx)("meta",{property:"og:image",content:d.image}),(0,n.jsx)("meta",{property:"og:url",content:d.siteUrl}),(0,n.jsx)("meta",{property:"og:site_name",content:d.title}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary"}),(0,n.jsx)("meta",{name:"twitter:title",content:d.title}),(0,n.jsx)("meta",{name:"twitter:description",content:d.description}),(0,n.jsx)("meta",{name:"twitter:image",content:d.image}),(0,n.jsx)("meta",{name:"twitter:site",content:"@사용자이름"}),(0,n.jsx)("meta",{name:"twitter:creator",content:"@사용자이름"}),l]})}}}]);
//# sourceMappingURL=c5b0247484ab0ed143857a1e77319f63f8784e72-e0312c94ba104b12bfdd.js.map