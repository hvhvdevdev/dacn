(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{639:function(e,t,n){"use strict";var r=n(3),o=(n(39),n(57),n(279),n(11),n(6),n(13),n(44),n(100),n(12),n(15),n(18),n(19),n(7)),l=n(113),d=n(138);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=Object(o.a)(l.a,Object(d.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(e){var t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var e=this,t=function(input){return input.$watch("hasError",(function(t){e.$set(e.errorBag,input._uid,t)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(r){r&&(e.errorBag.hasOwnProperty(input._uid)||(n.valid=t(input)))})):n.valid=t(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var e=this;this.lazyValidation&&setTimeout((function(){e.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var e=this.inputs.find((function(i){return i._uid===input._uid}));if(e){var t=this.watchers.find((function(i){return i._uid===e._uid}));t&&(t.valid(),t.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==e._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(e){var t=this;return e("form",{staticClass:"v-form",attrs:m({novalidate:!0},this.attrs$),on:{submit:function(e){return t.$emit("submit",e)}}},this.$slots.default)}})},702:function(e,t,n){"use strict";n.r(t);var r=n(108),o=n(124),l=n(99),d=n(369),c=n(614),m=n(639),f=n(136),h=n(368),v=n(687),w=n(226),_=(n(37),n(192),n(22)),y=(n(89),n(12),n(100),n(6),{name:"Edit",data:function(){return{modelName:this.$route.query.model,formIsValid:!1,notEmpty:[function(e){return!!e||"This field must not be empty"}],widgets:["text","number","select","rich-text","date"],loading:!1,model:{name:"",identifier:"code",fields:[{field:"code",widget:"text"}]}}},computed:{models:function(){return this.$store.getters["models/getModels"]}},mounted:function(){var e=this;this.model=JSON.parse(JSON.stringify(this.models.find((function(t){return t.name===e.modelName}))))},methods:{addField:function(){this.model.fields.push({field:"",widget:"text"})},updateModel:function(){var e=this;return Object(_.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.$store.dispatch("models/updateModel",{modelName:e.modelName,newModel:e.model});case 3:return e.$store.commit("setSnackbarContent","Model updated successfully"),t.next=6,e.$router.push("/models");case 6:case"end":return t.stop()}}),t)})))()}}}),O=n(137),component=Object(O.a)(y,(function(){var e=this,t=e._self._c;return t(h.a,{attrs:{justify:"center"}},[t(d.a,{attrs:{cols:"12"}},[t("h1",[e._v("Edit Model")])]),e._v(" "),t(d.a,{attrs:{cols:"12",sm:"10",md:"8"}},[t(o.a,[t(l.c,[e._v("Editing Model `"+e._s(e.modelName)+"`")]),e._v(" "),t(l.b,[t(m.a,{model:{value:e.formIsValid,callback:function(t){e.formIsValid=t},expression:"formIsValid"}},[t(w.a,{attrs:{rules:e.notEmpty,label:"Name"},model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}}),e._v(" "),t(v.a,{attrs:{rules:e.notEmpty,items:e.model.fields,"item-value":"field","item-text":"field",label:"Identifier"},model:{value:e.model.identifier,callback:function(t){e.$set(e.model,"identifier",t)},expression:"model.identifier"}}),e._v(" "),e._l(e.model.fields,(function(n,o){return t("div",{key:o},[t(c.a),e._v(" "),t(h.a,{attrs:{align:"center"}},[t(d.a,{staticClass:"text-right",attrs:{cols:"1"}},[t(r.a,{attrs:{color:"error",icon:""},on:{click:function(t){return e.model.fields.splice(o,1)}}},[t(f.a,[e._v("mdi-close")])],1)],1),e._v(" "),t(d.a,{attrs:{cols:"11",md:"4"}},[t(w.a,{attrs:{"prepend-inner-icon":"mdi-pencil-box-outline",rules:e.notEmpty,label:"Field Name"},model:{value:n.field,callback:function(t){e.$set(n,"field",t)},expression:"field.field"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12",md:"3"}},[t(v.a,{attrs:{"prepend-inner-icon":"mdi-widgets-outline",label:"Widget",rules:e.notEmpty,items:e.widgets},model:{value:n.widget,callback:function(t){e.$set(n,"widget",t)},expression:"field.widget"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12",md:"4"}},["select"===n.widget?t(v.a,{attrs:{"prepend-inner-icon":"mdi-book-open-outline",label:"Model",items:e.models,"item-text":"name","item-value":"name"},model:{value:n.model,callback:function(t){e.$set(n,"model",t)},expression:"field.model"}}):e._e()],1)],1)],1)})),e._v(" "),t(r.a,{attrs:{color:"success"},on:{click:e.addField}},[t(f.a,{attrs:{left:""}},[e._v("mdi-plus")]),e._v("\n            Field\n          ")],1),e._v(" "),t(r.a,{attrs:{disabled:!e.formIsValid,color:"primary",loading:e.loading},on:{click:e.updateModel}},[t(f.a,{attrs:{left:""}},[e._v("mdi-content-save")]),e._v("\n            Save\n          ")],1)],2)],1)],1)],1)],1)}),[],!1,null,"5a8cecc2",null);t.default=component.exports}}]);