(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{689:function(e,t,r){"use strict";r.r(t);var l=r(687),n=r(110),c=r(125),o=r(100),h=r(369),m=r(688),d=r(136),v=r(637),f=r(368),P=r(685),D=r(226),x=(r(33),r(231),r(3));r(163),r(164),r(11),r(6),r(39),r(59),r(69),r(37),r(13),r(15),r(17),r(14),r(18);function y(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function k(){var e,t,r;return{tags:this.$route.query.tags?[this.$route.query.tags].flat():null,authors:this.$route.query.authors?[this.$route.query.authors].flat():null,published:"true"===this.$route.query.published||"false"!==this.$route.query.published&&null,title:null!==(e=this.$route.query.title)&&void 0!==e?e:null,minDate:null!==(t=this.$route.query.minDate)&&void 0!==t?t:null,maxDate:null!==(r=this.$route.query.maxDate)&&void 0!==r?r:null}}var _={name:"Articles",data:function(){return{searchParams:k.call(this),activeSearchParams:k.call(this),menuMinDate:!1,menuMaxDate:!1,loadingArticles:!1}},computed:{allArticles:function(){return this.$store.getters.getArticles},filteredArticles:function(){var e=this;return this.allArticles.filter((function(a){var t,r,l,n,c,o,h,m;return!(null!==(t=e.activeSearchParams)&&void 0!==t&&null!==(t=t.authors)&&void 0!==t&&t.length&&!a.authors.filter((function(t){var r;return null===(r=e.activeSearchParams)||void 0===r||null===(r=r.authors)||void 0===r?void 0:r.includes(t)})).length>0)&&(!(null!==(r=e.activeSearchParams)&&void 0!==r&&null!==(r=r.tags)&&void 0!==r&&r.length&&!a.tags.filter((function(t){var r;return null===(r=e.activeSearchParams)||void 0===r||null===(r=r.tags)||void 0===r?void 0:r.includes(t)})).length>0)&&((null===(null===(l=e.activeSearchParams)||void 0===l?void 0:l.published)||a.published===(null===(n=e.activeSearchParams)||void 0===n?void 0:n.published))&&(!(null!==(c=e.activeSearchParams)&&void 0!==c&&null!==(c=c.title)&&void 0!==c&&c.length&&!a.title.toLowerCase().includes(null===(o=e.activeSearchParams)||void 0===o||null===(o=o.title)||void 0===o?void 0:o.toLowerCase()))&&(!(null!==(h=e.activeSearchParams.minDate)&&void 0!==h&&h.length&&a.date<e.activeSearchParams.minDate)&&!(null!==(m=e.activeSearchParams.maxDate)&&void 0!==m&&m.length&&a.date>e.activeSearchParams.maxDate)))))}))},authors:function(){return this.$store.getters.getAuthors.map((function(e){return e.name}))},tags:function(){return this.$store.getters.getTags.map((function(e){return e.name}))}},watch:{$route:function(e,t){"/articles"===e.path&&(this.searchParams=k.call(this),this.activeSearchParams=function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(t){Object(x.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},this.searchParams))}},mounted:function(){var e=this;this.loadingArticles=!0,this.$store.dispatch("loadArticles").then((function(){e.loadingArticles=!1}))},methods:{search:function(){this.$router.push({query:this.searchParams})}}},$=_,S=r(137),component=Object(S.a)($,(function(){var e=this,t=e._self._c;return t(f.a,{attrs:{justify:"center",align:"stretch"}},[t(h.a,{attrs:{cols:"12"}},[t("h1",[e._v("Manage Articles")])]),e._v(" "),t(h.a,{attrs:{cols:"12"}},[t(c.a,{attrs:{loading:e.loadingArticles}},[t(o.c,[e._v(" List of Articles")]),e._v(" "),t(o.b,[t(D.a,{staticClass:"d-inline-block",attrs:{label:"Title",outlined:"",dense:""},model:{value:e.searchParams.title,callback:function(t){e.$set(e.searchParams,"title",t)},expression:"searchParams.title"}}),e._v(" "),t(l.a,{staticClass:"d-inline-block",attrs:{multiple:"",label:"Authors",items:e.authors,outlined:"",dense:""},model:{value:e.searchParams.authors,callback:function(t){e.$set(e.searchParams,"authors",t)},expression:"searchParams.authors"}}),e._v(" "),t(l.a,{staticClass:"d-inline-block",attrs:{multiple:"",label:"Tags",items:e.tags,outlined:"",dense:""},model:{value:e.searchParams.tags,callback:function(t){e.$set(e.searchParams,"tags",t)},expression:"searchParams.tags"}}),e._v(" "),t(P.a,{staticClass:"d-inline-block",attrs:{label:"Status",outlined:"",dense:"",items:[{label:"All",value:null},{label:"Published",value:!0},{label:"Draft",value:!1}],"item-text":"label","item-value":"value"},model:{value:e.searchParams.published,callback:function(t){e.$set(e.searchParams,"published",t)},expression:"searchParams.published"}}),e._v(" "),t(v.a,{attrs:{"offset-y":"","close-on-content-click":!1},scopedSlots:e._u([{key:"activator",fn:function(r){var l=r.on,n=r.attrs;return[t(D.a,e._g(e._b({staticClass:"d-inline-block",attrs:{label:"Min Date","append-icon":"mdi-calendar",readonly:"",outlined:"",dense:"",clearable:""},model:{value:e.searchParams.minDate,callback:function(t){e.$set(e.searchParams,"minDate",t)},expression:"searchParams.minDate"}},"v-text-field",n,!1),l))]}}]),model:{value:e.menuMinDate,callback:function(t){e.menuMinDate=t},expression:"menuMinDate"}},[e._v(" "),t(m.a,{attrs:{"no-title":""},on:{input:function(t){e.menuMinDate=!1}},model:{value:e.searchParams.minDate,callback:function(t){e.$set(e.searchParams,"minDate",t)},expression:"searchParams.minDate"}})],1),e._v(" "),t(v.a,{attrs:{"offset-y":"","close-on-content-click":!1},scopedSlots:e._u([{key:"activator",fn:function(r){var l=r.on,n=r.attrs;return[t(D.a,e._g(e._b({staticClass:"d-inline-block",attrs:{label:"Max Date","append-icon":"mdi-calendar",readonly:"",outlined:"",dense:"",clearable:""},model:{value:e.searchParams.maxDate,callback:function(t){e.$set(e.searchParams,"maxDate",t)},expression:"searchParams.maxDate"}},"v-text-field",n,!1),l))]}}]),model:{value:e.menuMaxDate,callback:function(t){e.menuMaxDate=t},expression:"menuMaxDate"}},[e._v(" "),t(m.a,{attrs:{"no-title":""},on:{input:function(t){e.menuMaxDate=!1}},model:{value:e.searchParams.maxDate,callback:function(t){e.$set(e.searchParams,"maxDate",t)},expression:"searchParams.maxDate"}})],1),e._v(" "),t("div",{staticClass:"text-center"},[t(n.a,{staticClass:"d-inline-block",attrs:{color:"success"},on:{click:e.search}},[t(d.a,{attrs:{left:""}},[e._v("mdi-magnify")]),e._v("\n            Search\n          ")],1),e._v(" "),t(n.a,{staticClass:"d-inline-block",attrs:{color:"primary"},on:{click:function(t){return e.$router.push("/articles/create")}}},[t(d.a,{attrs:{left:""}},[e._v("mdi-plus")]),e._v("\n            Create\n          ")],1)],1)],1),e._v(" "),t(o.b,[t("LatestArticleTable",{attrs:{"show-authors":"","show-actions":"","latest-articles":e.filteredArticles}})],1)],1)],1)],1)}),[],!1,null,"01da33bb",null);t.default=component.exports;installComponents(component,{LatestArticleTable:r(634).default})}}]);