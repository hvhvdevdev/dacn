(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{610:function(t,e,r){var content=r(611);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("951d1426",content,!0,{sourceMap:!1})},611:function(t,e,r){var n=r(23)((function(i){return i[1]}));n.push([t.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{border:solid;border-width:thin 0 0;display:block;flex:1 1 0px;height:0;max-height:0;max-width:100%;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;margin:0 -1px;max-height:100%;max-width:0;min-height:100%;vertical-align:text-bottom;width:0}.v-divider--vertical.v-divider--inset{margin-top:8px;max-height:calc(100% - 16px);min-height:0}",""]),n.locals={},t.exports=n},614:function(t,e,r){"use strict";r(12),r(15),r(11),r(6),r(18),r(13),r(19);var n=r(3),o=(r(610),r(25));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=o.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:c({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:c({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},650:function(t,e,r){"use strict";r.r(e);var n=r(108),o=r(124),l=r(99),c=r(278),d=r(614),v=r(136),h=r(586),f=(r(12),r(15),r(11),r(6),r(18),r(13),r(19),r(3));function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(f.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var O={name:"DeleteEntryButton",props:{entryIdentifier:{type:String,required:!0},modelName:{type:String,required:!0},idField:{type:String,required:!0}},data:function(){return{dialog:!1,loading:!1}},methods:{close:function(){this.dialog=!1},deleteEntry:function(){var t=this;this.close(),this.loading=!0,this.$store.dispatch("content/deleteEntry",{id:this.entryIdentifier,model:this.modelName,idField:this.idField}).then((function(){t.loading=!1,t.$store.commit("setSnackbarContent","Entry deleted successfully")}))}}},w=r(137),component=Object(w.a)(O,(function(){var t=this,e=t._self._c;return e(c.a,{attrs:{persistent:"",width:"400"},scopedSlots:t._u([{key:"activator",fn:function(r){var o=r.on,l=r.attrs;return[e(h.a,{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(r){var c=r.on,d=r.attrs;return[e(n.a,t._g(t._b({attrs:{loading:t.loading,text:"",color:"error"}},"v-btn",m(m({},d),l),!1),m(m({},c),o)),[e(v.a,[t._v("mdi-trash-can")])],1)]}}],null,!0)},[t._v(" "),e("span",[t._v("Delete")])])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),e(o.a,[e(l.c,{staticClass:"primary white--text"},[t._v("Delete Content")]),t._v(" "),e(d.a),t._v(" "),e(l.b,{staticClass:"mt-5"},[t._v("\n      Really delete `"+t._s(t.entryIdentifier)+"` of `"+t._s(t.modelName)+"`?\n    ")]),t._v(" "),e(d.a),t._v(" "),e(l.a,[e(n.a,{attrs:{text:"",color:"error"},on:{click:t.deleteEntry}},[t._v(" Delete ")]),t._v(" "),e(n.a,{attrs:{text:""},on:{click:t.close}},[t._v(" Cancel ")])],1)],1)],1)}),[],!1,null,"b271db2e",null);e.default=component.exports}}]);