(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{774:function(t,o,n){var content=n(819);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(61).default)("1f2775b4",content,!0,{sourceMap:!1})},818:function(t,o,n){"use strict";n(774)},819:function(t,o,n){var e=n(60)((function(i){return i[1]}));e.push([t.i,'html[data-v-50b6902c]{--font-secondary:"Unica One","Roboto Condensed",sans-serif;--font-roboto:"Roboto",sans-serif}h1[data-v-50b6902c],h2[data-v-50b6902c],h3[data-v-50b6902c]{color:var(--c-font-2);font-family:"Nunito","Roboto",sans-serif;font-size:18px;font-weight:600;margin:0}.context-menu[data-v-50b6902c]{position:relative;width:100%;z-index:6}.context-menu__opener[data-v-50b6902c]{position:relative;z-index:22}.context-menu__overflow[data-v-50b6902c]{height:100%;left:0;position:fixed;top:0;width:100%;z-index:11}.context-menu__popup[data-v-50b6902c]{background:var(--c-bg-5);border:1px solid var(--c-bg-1);border-radius:10px;min-width:360px;overflow:hidden;position:absolute;top:48px;z-index:10}.light .context-menu__popup[data-v-50b6902c]{background:var(--c-bg-1);border:1px solid var(--c-bg-5)}.context-menu__popup._right[data-v-50b6902c]{right:0}.context-menu__popup._bottom[data-v-50b6902c]{bottom:48px;top:inherit}.context-menu__content[data-v-50b6902c]{position:relative;z-index:200}.context-menu__desc[data-v-50b6902c]{align-items:center;background:var(--c-bg-4);border-top:1px solid var(--c-bg-6);color:var(--c-font-4);display:flex;font-size:11px;padding:10px 16px}',""]),e.locals={},t.exports=e},848:function(t,o,n){"use strict";n.r(o);var e={props:{visible:{type:Boolean,default:!1},position:{type:Object,default:function(){}}},computed:{className:function(){return{_bottom:this.position&&this.position.bottom,_right:this.position&&this.position.right,_top:this.position&&this.position.top}},positionStyles:function(){return this.position&&this.position.left&&"string"==typeof this.position.left?{left:this.position.left,maxWidth:"".concat(this.$store.state.ui.width-24,"px")}:this.position&&this.position.right&&"string"==typeof this.position.right?this.position.top&&"string"==typeof this.position.top?{right:this.position.right,top:this.position.top,maxWidth:"".concat(this.$store.state.ui.width-24,"px")}:{right:this.position.right,maxWidth:"".concat(this.$store.state.ui.width-24,"px")}:null}}},c=(n(818),n(6)),component=Object(c.a)(e,(function(){var t=this,o=t._self._c;return o("div",{staticClass:"context-menu"},[o("transition",{attrs:{name:"slide2"}},[t.$slots.content?o("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"context-menu__popup",class:t.className,style:t.positionStyles},[o("transition",{attrs:{name:"slide2"}},[t.$slots.content?o("div",{staticClass:"context-menu__overflow",on:{click:function(o){return t.$emit("onClickOpener")}}}):t._e()]),o("div",{staticClass:"context-menu__content"},[t._t("content")],2),t.$slots.desc?o("div",{staticClass:"context-menu__desc"},[t._t("desc")],2):t._e()],1):t._e()]),o("div",{staticClass:"context-menu__opener",on:{click:function(o){return t.$emit("onClickOpener")}}},[t.$slots.opener?[t._t("opener")]:[t._m(0)]],2)],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"d-button _noPadding _grey"},[t("div",{staticClass:"mdi mdi-tune"})])}],!1,null,"50b6902c",null);o.default=component.exports}}]);