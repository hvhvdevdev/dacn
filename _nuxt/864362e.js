(window.webpackJsonp=window.webpackJsonp||[]).push([[27,6],{610:function(e,t,r){var content=r(611);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(24).default)("951d1426",content,!0,{sourceMap:!1})},611:function(e,t,r){var n=r(23)((function(i){return i[1]}));n.push([e.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{border:solid;border-width:thin 0 0;display:block;flex:1 1 0px;height:0;max-height:0;max-width:100%;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;margin:0 -1px;max-height:100%;max-width:0;min-height:100%;vertical-align:text-bottom;width:0}.v-divider--vertical.v-divider--inset{margin-top:8px;max-height:calc(100% - 16px);min-height:0}",""]),n.locals={},e.exports=n},614:function(e,t,r){"use strict";r(12),r(15),r(11),r(6),r(18),r(13),r(19);var n=r(3),o=(r(610),r(25));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=o.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(e){var t;return this.$attrs.role&&"separator"!==this.$attrs.role||(t=this.vertical?"vertical":"horizontal"),e("hr",{class:c({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:c({role:"separator","aria-orientation":t},this.$attrs),on:this.$listeners})}})},651:function(e,t,r){"use strict";r.r(t);var n=r(108),o=r(124),l=r(99),c=r(278),d=r(614),v=r(586),h=(r(12),r(15),r(11),r(6),r(18),r(13),r(19),r(3));function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(h.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var _={name:"DeleteModelButton",props:{modelName:{type:String,required:!0}},data:function(){return{dialog:!1,loading:!1}},methods:{close:function(){this.dialog=!1},deleteModel:function(){var e=this;this.close(),this.loading=!0,this.$store.dispatch("models/deleteModel",this.modelName).then((function(){e.loading=!1,e.$store.commit("setSnackbarContent","Model deleted successfully")}))}}},O=r(137),component=Object(O.a)(_,(function(){var e=this,t=e._self._c;return t(c.a,{attrs:{persistent:"",width:"400"},scopedSlots:e._u([{key:"activator",fn:function(r){var o=r.on,l=r.attrs;return[t(v.a,{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function(r){var c=r.on,d=r.attrs;return[t(n.a,e._g(e._b({attrs:{loading:e.loading,text:"",color:"error"}},"v-btn",m(m({},d),l),!1),m(m({},c),o)),[e._v("\n          Delete\n        ")])]}}],null,!0)},[e._v(" "),t("span",[e._v("Delete")])])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),t(o.a,[t(l.c,{staticClass:"primary white--text"},[e._v("Delete Model")]),e._v(" "),t(d.a),e._v(" "),t(l.b,{staticClass:"mt-5"},[e._v(" Really delete `"+e._s(e.modelName)+"`? ")]),e._v(" "),t(d.a),e._v(" "),t(l.a,[t(n.a,{attrs:{text:"",color:"error"},on:{click:e.deleteModel}},[e._v(" Delete ")]),e._v(" "),t(n.a,{attrs:{text:""},on:{click:e.close}},[e._v(" Cancel ")])],1)],1)],1)}),[],!1,null,"57188425",null);t.default=component.exports},695:function(e,t,r){"use strict";r.r(t);var n=r(108),o=r(124),l=r(99),c=r(369),d=r(614),v=r(136),h=r(368),f=(r(37),{name:"Index",computed:{models:function(){return this.$store.getters["models/getModels"]}}}),m=r(137),component=Object(m.a)(f,(function(){var e=this,t=e._self._c;return t(h.a,[t(c.a,{attrs:{cols:"12"}},[t("h1",[e._v("Models")])]),e._v(" "),t(c.a,{attrs:{cols:"12"}},[t(n.a,{attrs:{color:"primary"},on:{click:function(t){return e.$router.push("/models/create")}}},[t(v.a,{attrs:{left:""}},[e._v("mdi-plus")]),e._v("\n      Create\n    ")],1)],1),e._v(" "),e._l(e.models,(function(r){return t(c.a,{key:r.name,attrs:{cols:"12",sm:"6",md:"4"}},[t(o.a,[t(l.c,[e._v(e._s(r.name))]),e._v(" "),t(l.b,[e._v("\n        "+e._s(r.fields.length)+" fields"),t("br"),e._v("\n        Identified by "),t("code",[e._v(e._s(r.name)+"."+e._s(r.identifier))])]),e._v(" "),t(d.a),e._v(" "),t(l.a,[t(n.a,{attrs:{text:"",color:"info"},on:{click:function(t){return e.$router.push({path:"/models/edit",query:{model:r.name}})}}},[e._v("Edit")]),e._v(" "),t(n.a,{attrs:{text:"",color:"success"}},[e._v("Content")]),e._v(" "),t("DeleteModelButton",{attrs:{"model-name":r.name}})],1)],1)],1)}))],2)}),[],!1,null,"a661877c",null);t.default=component.exports;installComponents(component,{DeleteModelButton:r(651).default})}}]);