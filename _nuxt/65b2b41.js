(window.webpackJsonp=window.webpackJsonp||[]).push([[5,8],{613:function(t,e,r){var content=r(614);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("951d1426",content,!0,{sourceMap:!1})},614:function(t,e,r){var n=r(23)((function(i){return i[1]}));n.push([t.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{border:solid;border-width:thin 0 0;display:block;flex:1 1 0px;height:0;max-height:0;max-width:100%;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;margin:0 -1px;max-height:100%;max-width:0;min-height:100%;vertical-align:text-bottom;width:0}.v-divider--vertical.v-divider--inset{margin-top:8px;max-height:calc(100% - 16px);min-height:0}",""]),n.locals={},t.exports=n},616:function(t,e,r){"use strict";r(13),r(15),r(11),r(6),r(17),r(14),r(18);var n=r(3),o=(r(613),r(25));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=o.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:l({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:l({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},643:function(t,e,r){"use strict";r.r(e);var n=r(110),o=r(125),c=r(100),l=r(278),d=r(616),v=r(136),h=r(588),f=(r(13),r(15),r(11),r(6),r(17),r(14),r(18),r(3));function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(f.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y={name:"DeleteArticleButton",props:{articleTitle:{type:String,required:!0}},data:function(){return{dialog:!1,loading:!1}},methods:{close:function(){this.dialog=!1},deleteArticle:function(){var t=this;this.close(),this.loading=!0,this.$store.dispatch("deleteArticle",this.articleTitle).then((function(){t.loading=!1,t.$store.commit("setSnackbarContent","Article deleted successfully")}))}}},w=r(137),component=Object(w.a)(y,(function(){var t=this,e=t._self._c;return e(l.a,{attrs:{persistent:"",width:"400"},scopedSlots:t._u([{key:"activator",fn:function(r){var o=r.on,c=r.attrs;return[e(h.a,{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(r){var l=r.on,d=r.attrs;return[e(n.a,t._g(t._b({attrs:{loading:t.loading,icon:"",color:"error"}},"v-btn",m(m({},d),c),!1),m(m({},l),o)),[e(v.a,[t._v("mdi-trash-can")])],1)]}}],null,!0)},[t._v(" "),e("span",[t._v("Delete")])])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),e(o.a,[e(c.c,{staticClass:"primary white--text"},[t._v("Delete Article")]),t._v(" "),e(d.a),t._v(" "),e(c.b,{staticClass:"mt-5"},[t._v("\n      Really delete `"+t._s(t.articleTitle)+"`?\n    ")]),t._v(" "),e(d.a),t._v(" "),e(c.a,[e(n.a,{attrs:{text:"",color:"error"},on:{click:t.deleteArticle}},[t._v(" Delete ")]),t._v(" "),e(n.a,{attrs:{text:""},on:{click:t.close}},[t._v(" Cancel ")])],1)],1)],1)}),[],!1,null,"46eb784e",null);e.default=component.exports}}]);