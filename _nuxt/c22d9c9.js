(window.webpackJsonp=window.webpackJsonp||[]).push([[19,11],{623:function(e,t,n){"use strict";n.r(t);var r=n(281),o={name:"RichTextEditor",components:{TiptapVuetify:r.o},props:{value:{type:String,required:!1,default:function(){return""}},label:{type:String,required:!1,default:function(){return"Content"}}},emits:["input"],data:function(){return{extensions:[r.g,r.a,r.j,r.q,r.n,r.i,r.k,r.c,r.l,[r.f,{options:{levels:[1,2,3]}}],r.b,r.j,r.d,r.h,r.m,r.e]}}},l=n(113),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("div",[t("p",{staticClass:"v-label"},[e._v(e._s(e.label))]),e._v(" "),t("TiptapVuetify",{attrs:{extensions:e.extensions,value:e.value},on:{input:function(t){return e.$emit("input",t)}}})],1)}),[],!1,null,"051710b4",null);t.default=component.exports},699:function(e,t,n){"use strict";n.r(t);var r=n(111),o=n(127),l=n(69),c=n(370),d=n(138),f=n(369),m=n(687),v=n(227),h=(n(6),n(48),n(18)),x=(n(81),n(95),n(37),{name:"Create",data:function(){var e=this.$route.query.model,t=this.$store.getters["models/getModels"].find((function(t){return t.name===e}));return{modelName:e,model:t,content:{},loading:!1}},computed:{entries:function(){return this.$store.getters["content/getEntries"]},models:function(){return this.$store.getters["models/getModels"]}},methods:{createEntry:function(){var e=this;return Object(h.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.$store.dispatch("content/createEntry",{model:e.modelName,data:e.content});case 3:return e.$store.commit("setSnackbarContent","Entry created successfully"),t.next=6,e.$router.push("/content");case 6:case"end":return t.stop()}}),t)})))()},getIdFieldOfModelName:function(e){return this.models.find((function(t){return t.name===e})).identifier}}}),_=n(113),component=Object(_.a)(x,(function(){var e=this,t=e._self._c;return e.model?t(f.a,{attrs:{justify:"center"}},[t(c.a,{attrs:{cols:"12"}},[t("h1",[e._v("Create Content")])]),e._v(" "),t(c.a,{attrs:{cols:"12",sm:"10",md:"8"}},[t(o.a,[t(l.c,[e._v("Create `"+e._s(e.modelName)+"`")]),e._v(" "),t(l.b,[e._l(e.model.fields,(function(n){return t("div",{key:n.field},["select"===n.widget?t(m.a,{attrs:{label:n.field,items:e.entries[n.model],"item-text":e.getIdFieldOfModelName(n.model),"item-value":e.getIdFieldOfModelName(n.model)},model:{value:e.content[n.field],callback:function(t){e.$set(e.content,n.field,t)},expression:"content[field.field]"}}):"rich-text"===n.widget?t("RichTextEditor",{attrs:{label:n.field},model:{value:e.content[n.field],callback:function(t){e.$set(e.content,n.field,t)},expression:"content[field.field]"}}):t(v.a,{attrs:{label:n.field,type:"number"===n.widget?"number":"text"},model:{value:e.content[n.field],callback:function(t){e.$set(e.content,n.field,t)},expression:"content[field.field]"}})],1)})),e._v(" "),t(r.a,{attrs:{color:"primary",loading:e.loading},on:{click:e.createEntry}},[t(d.a,{attrs:{left:""}},[e._v("mdi-content-save")]),e._v("\n          Save\n        ")],1)],2)],1)],1)],1):e._e()}),[],!1,null,"5ff5a226",null);t.default=component.exports;installComponents(component,{RichTextEditor:n(623).default})}}]);