(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{620:function(t,e,r){"use strict";r.r(e);var n=r(108),l=r(124),o=r(99),c=r(278),d=r(614),v=r(136),_=r(586),h=(r(12),r(15),r(11),r(6),r(18),r(13),r(19),r(3));function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function A(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(h.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y={name:"PublishArticleButton",props:{articleTitle:{type:String,required:!0},disabled:{type:Boolean,default:function(){return!1}}},data:function(){return{dialog:!1,loading:!1}},methods:{close:function(){this.dialog=!1},deleteArticle:function(){var t=this;this.close(),this.loading=!0,this.$store.dispatch("publishArticle",this.articleTitle).then((function(){t.loading=!1,t.$store.commit("setSnackbarContent","Article published successfully")}))}}},m=r(137),component=Object(m.a)(y,(function(){var t=this,e=t._self._c;return e(c.a,{attrs:{persistent:"",width:"400"},scopedSlots:t._u([{key:"activator",fn:function(r){var l=r.on,o=r.attrs;return[e(_.a,{attrs:{disabled:t.disabled,top:""},scopedSlots:t._u([{key:"activator",fn:function(r){var c=r.on,d=r.attrs;return[e(n.a,t._g(t._b({attrs:{loading:t.loading,disabled:t.disabled,icon:"",color:"warning"}},"v-btn",A(A({},d),o),!1),A(A({},c),l)),[e(v.a,[t._v("mdi-publish")])],1)]}}],null,!0)},[t._v(" "),e("span",[t._v("Publish")])])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),e(l.a,[e(o.c,{staticClass:"primary white--text"},[t._v("Publish Article")]),t._v(" "),e(d.a),t._v(" "),e(o.b,{staticClass:"mt-5"},[t._v("\n      Really publish `"+t._s(t.articleTitle)+"`?\n    ")]),t._v(" "),e(d.a),t._v(" "),e(o.a,[e(n.a,{attrs:{text:"",color:"warning"},on:{click:t.deleteArticle}},[t._v(" Publish")]),t._v(" "),e(n.a,{attrs:{text:""},on:{click:t.close}},[t._v(" Cancel")])],1)],1)],1)}),[],!1,null,"2da2ca52",null);e.default=component.exports},621:function(t,e,r){"use strict";r.r(e);var n=r(108),l=r(124),o=r(99),c=r(278),d=r(614),v=r(136),_=r(586),h=(r(12),r(15),r(11),r(6),r(18),r(13),r(19),r(3));function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function A(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(h.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y={name:"DeleteArticleButton",props:{articleTitle:{type:String,required:!0}},data:function(){return{dialog:!1,loading:!1}},methods:{close:function(){this.dialog=!1},deleteArticle:function(){var t=this;this.close(),this.loading=!0,this.$store.dispatch("deleteArticle",this.articleTitle).then((function(){t.loading=!1,t.$store.commit("setSnackbarContent","Article deleted successfully")}))}}},m=r(137),component=Object(m.a)(y,(function(){var t=this,e=t._self._c;return e(c.a,{attrs:{persistent:"",width:"400"},scopedSlots:t._u([{key:"activator",fn:function(r){var l=r.on,o=r.attrs;return[e(_.a,{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(r){var c=r.on,d=r.attrs;return[e(n.a,t._g(t._b({attrs:{loading:t.loading,icon:"",color:"error"}},"v-btn",A(A({},d),o),!1),A(A({},c),l)),[e(v.a,[t._v("mdi-trash-can")])],1)]}}],null,!0)},[t._v(" "),e("span",[t._v("Delete")])])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),e(l.a,[e(o.c,{staticClass:"primary white--text"},[t._v("Delete Article")]),t._v(" "),e(d.a),t._v(" "),e(o.b,{staticClass:"mt-5"},[t._v("\n      Really delete `"+t._s(t.articleTitle)+"`?\n    ")]),t._v(" "),e(d.a),t._v(" "),e(o.a,[e(n.a,{attrs:{text:"",color:"error"},on:{click:t.deleteArticle}},[t._v(" Delete ")]),t._v(" "),e(n.a,{attrs:{text:""},on:{click:t.close}},[t._v(" Cancel ")])],1)],1)],1)}),[],!1,null,"46eb784e",null);e.default=component.exports},629:function(t,e,r){"use strict";r.r(e);var n=r(108),l=r(633),o=r(641),c=r(136),d=r(638),v=r(634),_=r(586),h={name:"LatestArticleTable",props:{latestArticles:{type:Array,default:function(){return[]}},showAuthors:{type:Boolean,default:function(){return!1}},showActions:{type:Boolean,default:function(){return!1}}},data:function(){return{page:1}}},f=r(137),component=Object(f.a)(h,(function(){var t=this,e=t._self._c;return e("div",[e(v.a,{attrs:{height:"337","fixed-header":""}},[e("thead",[e("tr",[e("th",{staticClass:"text-left"},[t._v("Title")]),t._v(" "),e("th",{staticClass:"text-left"},[t._v("Date")]),t._v(" "),t.showAuthors?e("th",{staticClass:"text-left"},[t._v("Authors")]):t._e(),t._v(" "),e("th",{staticClass:"text-left"},[t._v("Tags")]),t._v(" "),e("th",{staticClass:"text-left"},[t._v("Status")]),t._v(" "),t.showActions?e("th",{staticClass:"text-center"},[t._v("Actions")]):t._e()])]),t._v(" "),e("tbody",[0===t.latestArticles.length?e("tr",[e("td",{staticClass:"text-center py-16",attrs:{colspan:"100"}},[t._v("No records found")])]):t._e(),t._v(" "),t._l(t.latestArticles,(function(article){return e("tr",{key:article.title},[e("td",[t._v("\n          "+t._s(article.title)+"\n        ")]),t._v(" "),e("td",[t._v("\n          "+t._s(article.date)+"\n        ")]),t._v(" "),t.showAuthors?e("td",t._l(article.authors,(function(r,n){return e("NuxtLink",{key:r,attrs:{to:{path:"/authors",query:{name:r}}}},[t._v("\n            "+t._s(r)),n!==article.authors.length-1?e("span",[t._v(",")]):t._e()])})),1):t._e(),t._v(" "),e("td",[e(o.a,t._l(article.tags,(function(r){return e(l.a,{key:r,attrs:{small:"",to:{path:"/articles",query:{tags:r}}}},[t._v("\n              "+t._s(r)+"\n            ")])})),1)],1),t._v(" "),e("td",[article.published?e(l.a,{attrs:{label:"",color:"primary",to:{path:"/articles",query:{published:!0}}}},[t._v("Published\n          ")]):e(l.a,{attrs:{label:"",to:{path:"/articles",query:{published:!1}}}},[t._v("Draft\n          ")])],1),t._v(" "),t.showActions?e("td",{staticClass:"text-center"},[e("PublishArticleButton",{attrs:{"article-title":article.title,disabled:article.published}}),t._v(" "),e(_.a,{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(r){var l=r.on,o=r.attrs;return[e(n.a,t._g(t._b({attrs:{to:{path:"/articles/edit",query:{article:article.title}},icon:"",color:"info"}},"v-btn",o,!1),l),[e(c.a,[t._v("mdi-pencil")])],1)]}}],null,!0)},[t._v(" "),e("span",[t._v("Edit")])]),t._v(" "),e("DeleteArticleButton",{attrs:{"article-title":article.title}})],1):t._e()])}))],2)]),t._v(" "),e("div",{staticClass:"text-center pb-5"},[e(d.a,{attrs:{length:1},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],1)}),[],!1,null,"c5a92496",null);e.default=component.exports;installComponents(component,{PublishArticleButton:r(620).default,DeleteArticleButton:r(621).default})},652:function(t,e,r){"use strict";r.r(e);var n=r(634),l=(r(37),{name:"TopTagsTable",props:{topTags:{type:Array,default:function(){return[]}}}}),o=r(137),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e(n.a,{attrs:{height:"400","fixed-header":""}},[e("thead",[e("tr",[e("th",{staticClass:"text-left"},[t._v("Tag Name")]),t._v(" "),e("th",{staticClass:"text-left"},[t._v("Article Count")])])]),t._v(" "),e("tbody",t._l(t.topTags,(function(r){return e("tr",{key:r.name},[e("td",[e("NuxtLink",{attrs:{to:{path:"/articles",query:{tags:r.name}}}},[t._v("\n          "+t._s(r.name)+"\n        ")])],1),t._v(" "),e("td",[t._v("\n        "+t._s(r.articles.length)+"\n      ")])])})),0)])}),[],!1,null,"9d47c40c",null);e.default=component.exports},703:function(t,e,r){"use strict";r.r(e);var n=r(124),l=r(99),o=r(369),c=r(368),d=r(55),v=(r(280),{name:"IndexPage",computed:{topTags:function(){return Object(d.a)(this.$store.getters.getTags).sort((function(a,b){return b.articles.length-a.articles.length}))},latestArticles:function(){return Object(d.a)(this.$store.getters.getArticles).sort((function(a,b){return a.date<b.date?1:0}))},countArticles:function(){return this.$store.getters.countArticles},countPublished:function(){return this.$store.getters.countPublished},countTags:function(){return this.$store.getters.countTags},averageTagsPerArticle:function(){return Math.round(this.countTags/this.countArticles*10)/10},averageArticlesPerTag:function(){return Math.round(this.countArticles/this.countTags*10)/10},countAuthors:function(){return this.$store.getters.countAuthors},averageArticlesPerAuthor:function(){return Math.round(this.countArticles/this.countAuthors*10)/10}}}),_=r(137),component=Object(_.a)(v,(function(){var t=this,e=t._self._c;return e(c.a,{attrs:{justify:"center",align:"stretch"}},[e(o.a,{attrs:{cols:"12"}},[e("h1",[t._v("Dashboard")])]),t._v(" "),e(o.a,{attrs:{cols:"12",sm:"10",md:"4"}},[e(n.a,{attrs:{dark:"",color:"success"}},[e(l.c,[t._v(" "+t._s(t.countPublished)+" Published Articles ")]),t._v(" "),e(l.b,[t._v("\n        "+t._s(t.countArticles)+" total articles "),e("br"),t._v("\n        "+t._s(t.countArticles-t.countPublished)+" drafts\n      ")])],1)],1),t._v(" "),e(o.a,{attrs:{cols:"12",sm:"10",md:"4"}},[e(n.a,{attrs:{dark:"",color:"warning"}},[e(l.c,[t._v(" "+t._s(t.countTags)+" Unique tags ")]),t._v(" "),e(l.b,[t._v("\n        "+t._s(t.averageTagsPerArticle)+" average tags per articles "),e("br"),t._v("\n        "+t._s(t.averageArticlesPerTag)+" average articles per tags\n      ")])],1)],1),t._v(" "),e(o.a,{attrs:{cols:"12",sm:"10",md:"4"}},[e(n.a,{staticClass:"fill-height",attrs:{dark:"",color:"info"}},[e(l.c,[t._v(" "+t._s(t.countAuthors)+" Active Authors ")]),t._v(" "),e(l.b,[t._v("\n        "+t._s(t.averageArticlesPerAuthor)+" average articles per author "),e("br")])],1)],1),t._v(" "),e(o.a,{attrs:{cols:"12",sm:"10",md:"9"}},[e(n.a,[e(l.c,[t._v(" Latest Articles ")]),t._v(" "),e("LatestArticleTable",{attrs:{"latest-articles":t.latestArticles,"show-authors":""}})],1)],1),t._v(" "),e(o.a,{attrs:{cols:"12",sm:"10",md:"3"}},[e(n.a,[e(l.c,[t._v(" Top Tags ")]),t._v(" "),e("TopTagsTable",{attrs:{"top-tags":t.topTags}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LatestArticleTable:r(629).default,TopTagsTable:r(652).default})}}]);