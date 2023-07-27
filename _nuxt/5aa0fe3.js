(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{627:function(e,t,r){"use strict";var n=r(3),o=(r(39),r(59),r(279),r(11),r(6),r(14),r(44),r(101),r(13),r(15),r(17),r(18),r(7)),l=r(114),d=r(138);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=Object(o.a)(l.a,Object(d.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(e){var t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var e=this,t=function(input){return input.$watch("hasError",(function(t){e.$set(e.errorBag,input._uid,t)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(e.errorBag.hasOwnProperty(input._uid)||(r.valid=t(input)))})):r.valid=t(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var e=this;this.lazyValidation&&setTimeout((function(){e.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var e=this.inputs.find((function(i){return i._uid===input._uid}));if(e){var t=this.watchers.find((function(i){return i._uid===e._uid}));t&&(t.valid(),t.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==e._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(e){var t=this;return e("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(e){return t.$emit("submit",e)}}},this.$slots.default)}})},700:function(e,t,r){"use strict";r.r(t);var n=r(110),o=r(125),l=r(100),d=r(369),c=r(616),f=r(627),m=r(136),h=r(368),v=r(685),w=r(226),_=(r(37),r(193),r(22)),y=(r(85),{name:"Create",data:function(){return{formIsValid:!1,notEmpty:[function(e){return!!e||"This field must not be empty"}],widgets:["text","number","select","rich-text","date"],loading:!1,model:{name:"",identifier:"code",fields:[{field:"code",widget:"text"}]}}},computed:{models:function(){return this.$store.getters["models/getModels"]}},methods:{addField:function(){this.model.fields.push({field:"",widget:"text"})},createModel:function(){var e=this;return Object(_.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.$store.dispatch("models/addModel",e.model);case 3:return e.$store.commit("setSnackbarContent","Model created successfully"),t.next=6,e.$router.push("/models");case 6:case"end":return t.stop()}}),t)})))()}}}),O=r(137),component=Object(O.a)(y,(function(){var e=this,t=e._self._c;return t(h.a,{attrs:{justify:"center"}},[t(d.a,{attrs:{cols:"12"}},[t("h1",[e._v("Create Model")])]),e._v(" "),t(d.a,{attrs:{cols:"12",sm:"10",md:"8"}},[t(o.a,[t(l.c,[e._v("Create New Model")]),e._v(" "),t(l.b,[t(f.a,{model:{value:e.formIsValid,callback:function(t){e.formIsValid=t},expression:"formIsValid"}},[t(w.a,{attrs:{rules:e.notEmpty,label:"Name"},model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}}),e._v(" "),t(v.a,{attrs:{rules:e.notEmpty,items:e.model.fields,"item-value":"field","item-text":"field",label:"Identifier"},model:{value:e.model.identifier,callback:function(t){e.$set(e.model,"identifier",t)},expression:"model.identifier"}}),e._v(" "),e._l(e.model.fields,(function(r,o){return t("div",{key:o},[t(c.a),e._v(" "),t(h.a,{attrs:{align:"center"}},[t(d.a,{staticClass:"text-right",attrs:{cols:"1"}},[t(n.a,{attrs:{color:"error",icon:""},on:{click:function(t){return e.model.fields.splice(o,1)}}},[t(m.a,[e._v("mdi-close")])],1)],1),e._v(" "),t(d.a,{attrs:{cols:"11",md:"4"}},[t(w.a,{attrs:{"prepend-inner-icon":"mdi-pencil-box-outline",rules:e.notEmpty,label:"Field Name"},model:{value:r.field,callback:function(t){e.$set(r,"field",t)},expression:"field.field"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12",md:"3"}},[t(v.a,{attrs:{"prepend-inner-icon":"mdi-widgets-outline",label:"Widget",rules:e.notEmpty,items:e.widgets},model:{value:r.widget,callback:function(t){e.$set(r,"widget",t)},expression:"field.widget"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12",md:"4"}},["select"===r.widget?t(v.a,{attrs:{"prepend-inner-icon":"mdi-book-open-outline",label:"Model",items:e.models,"item-text":"name","item-value":"name"},model:{value:r.model,callback:function(t){e.$set(r,"model",t)},expression:"field.model"}}):e._e()],1)],1)],1)})),e._v(" "),t(n.a,{attrs:{color:"success"},on:{click:e.addField}},[t(m.a,{attrs:{left:""}},[e._v("mdi-plus")]),e._v("\n            Field\n          ")],1),e._v(" "),t(n.a,{attrs:{disabled:!e.formIsValid,color:"primary",loading:e.loading},on:{click:e.createModel}},[t(m.a,{attrs:{left:""}},[e._v("mdi-content-save")]),e._v("\n            Save\n          ")],1)],2)],1)],1)],1)],1)}),[],!1,null,"46e1ad84",null);t.default=component.exports}}]);