(window.webpackJsonp=window.webpackJsonp||[]).push([[5,6],{428:function(t,e,n){"use strict";n.r(e);var r={name:"ArticleImages",props:{images:{type:Array}}},c=n(11),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",[t.images.length>1?e("div",[t._v("\n        This will be a gallery\n        "),t._l(t.images,(function(image,t){return e("div",{key:t},[e("img",{attrs:{src:image.src,alt:image.caption}})])}))],2):e("div",t._l(t.images,(function(image,n){return e("figure",{key:n},[e("img",{attrs:{src:image.src,alt:image.caption}}),t._v(" "),e("figcaption",[t._v(t._s(image.caption))])])})),0)])}),[],!1,null,null,null);e.default=component.exports},440:function(t,e,n){"use strict";n.r(e);var r=n(428),c={name:"ArticleContentBlock",props:{content:{type:Object},images:{type:Array}},components:{ArticleImages:r.default}},o=n(11),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"article-content"},t._l(t.content.contentBlocks,(function(n,r){return e("div",{key:r},[n.content?e("div",{domProps:{innerHTML:t._s(t.$md.render(n.content))}}):t._e(),t._v(" "),n.youtube?e("div",{domProps:{innerHTML:t._s(n.youtube)}}):t._e(),t._v(" "),n.images?e("ArticleImages",{attrs:{images:n.images}}):t._e()],1)})),0)}),[],!1,null,"991e18f4",null);e.default=component.exports}}]);