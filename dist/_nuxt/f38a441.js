(window.webpackJsonp=window.webpackJsonp||[]).push([[105,19,28,60,68,80,84,85,86],{1085:function(t,e,n){"use strict";n.r(e);var o=n(1),r=n(10),l=(n(15),n(14),n(13),n(7),n(28),n(22),n(29),n(8)),c=(n(26),n(58),n(75),n(182)),f=n(48);function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){Object(l.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var _=Object(o.defineComponent)({layout:"login",fetch:function(t){var e,n=t.store,o=t.redirect;null!==(e=n.state.user)&&void 0!==e&&e.user&&o("/")}}),v=Object(o.defineComponent)(m(m({},_),{},{__name:"login",setup:function(t){var e,n=Object(r.g)().$notify,l=Object(r.h)(),d=Object(r.i)(),_=Object(o.ref)(!1);return null!==(e=l.query)&&void 0!==e&&e.loading&&(_.value=!0),Object(o.onMounted)((function(){var t;if(null!==(t=l.query)&&void 0!==t&&t.loader){var e;_.value=!0;var n=m({},l);null===(e=n.query)||void 0===e||delete e.loader,d.replace(n)}setTimeout((function(){return _.value=!1}),1e4)})),{__sfc:!0,$notify:n,route:l,router:d,isLoading:_,signInWithGoogle:function(){d.push({query:{loading:!0}}),_.value=!0;var t=new c.a;Object(c.d)(f.a,t).catch((function(t){n({duration:6e3,text:t.message,title:"Error",type:"error"}),_.value=!1}))},GoogleAuthProvider:c.a,signInWithPopup:c.d,auth:f.a}}})),h=n(6),component=Object(h.a)(v,(function(){var t=this,e=t._self._c,n=t._self._setupProxy;return e("div",{staticClass:"grid h-full text-center grid-rows-[auto,1fr,auto]"},[e("div",{staticClass:"max-w-xl mx-auto py-4 p-2 w-full md_p-6"},[e("div",{staticClass:"flex justify-between"},[e("LocaleSwitcher"),e("ThemeSwitcher")],1)]),e("div",{staticClass:"h-full grid items-center gap-8 py-4 px-3 h-full overflow-hidden overflow-y-auto"},[e("div",{staticClass:"flex flex-col items-center justify-center pb-10"},[e("UiLogo"),e("div",{staticClass:"px-3 py-8 flex flex-col items-center min-w-[280px]"},[e("UiButtonBlue",{attrs:{disabled:n.isLoading},on:{click:n.signInWithGoogle}},[t._v(t._s(t.$t("loginWithGoogle"))),e("transition",{attrs:{name:"fadeIn"}},[n.isLoading?e("div",{staticClass:"absolute inset-0 w-full h-full flex-center bg-accent-2"},[e("UiSpinier")],1):t._e()])],1)],1)],1)]),e("div",{staticClass:"p-4 md_p-6"},[e("CommonCopyright")],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LocaleSwitcher:n(957).default,ThemeSwitcher:n(958).default,UiLogo:n(979).default,UiSpinier:n(959).default,UiButtonBlue:n(736).default,CommonCopyright:n(860).default})},736:function(t,e,n){"use strict";n.r(e);var o=n(1),r=Object(o.defineComponent)({__name:"ButtonBlue",props:{maxWidth:{type:Boolean}},emits:["click"],setup:function(t,e){var n=e.emit,r=t,l=Object(o.computed)((function(){var t=[];return r.maxWidth&&t.push("max-w-[320px]"),t}));return{__sfc:!0,props:r,emit:n,classes:l}}}),l=n(6),component=Object(l.a)(r,(function(){var t=this,e=t._self._c,n=t._self._setupProxy;return e("button",{staticClass:"overflow-hidden relative enabled:cursor-pointer py-3 px-3 w-full min-h-[48px] text-accent-primary text-center bg-accent-2 rounded-full hocus_bg-accent-2/80 transition",class:n.classes,on:{click:function(t){return n.emit("click")}}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},752:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"madeBy":{"text":"piloyan.ru","name":"Арсен Пилоян"}},"ru":{"madeBy":{"text":"piloyan.ru","name":"Арсен Пилоян"}}}'),delete t.options._Ctor}},772:function(t,e,n){var content=n(814);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(61).default)("26588ed6",content,!0,{sourceMap:!1})},797:function(t,e,n){"use strict";n.r(e);var o=n(1),r=Object(o.defineComponent)({__name:"TabsItem2",props:{isActive:{type:Boolean}},emits:["click"],setup:function(t,e){return{__sfc:!0,emit:e.emit}}}),l=n(6),component=Object(l.a)(r,(function(){var t=this,e=t._self._c,n=t._self._setupProxy;return e("div",{staticClass:"cursor-pointer select-none py-2 px-3 flex gap-1 items-center justify-center border-1 rounded-md text-secondary/70 text-sm leading-none hocus_bg-item-main-hover transition",class:{"!cursor-default !bg-item-main-active !text-accent-default":t.isActive},on:{click:function(t){return n.emit("click")}}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},799:function(t,e,n){"use strict";n.r(e);var o=n(6),component=Object(o.a)({},(function(){return(0,this._self._c)("div",{staticClass:"overflow-hidden overflow-x-auto flex"},[this._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},811:function(t,e,n){var content=n(864);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(61).default)("60e10162",content,!0,{sourceMap:!1})},812:function(t,e,n){var content=n(866);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(61).default)("213957bd",content,!0,{sourceMap:!1})},813:function(t,e,n){"use strict";n(772)},814:function(t,e,n){var o=n(60)((function(i){return i[1]}));o.push([t.i,'html{--font-secondary:"Unica One","Roboto Condensed",sans-serif;--font-roboto:"Roboto",sans-serif}h1,h2,h3{color:var(--c-font-2);font-family:"Nunito","Roboto",sans-serif;font-size:18px;font-weight:600;margin:0}@keyframes heartbeat{0%{transform:scale(.75)}20%{transform:scale(1)}40%{transform:scale(.75)}60%{transform:scale(1.1)}80%{transform:scale(.75)}to{transform:scale(.75)}}',""]),o.locals={},t.exports=o},815:function(t,e,n){"use strict";var o=n(752),r=n.n(o);e.default=r.a},860:function(t,e,n){"use strict";n.r(e);n(813);var o=n(6),r=n(815),component=Object(o.a)({},(function(){var t=this,e=t._self._c;return e("a",{staticClass:"flex-center py-2 px-5 rounded-md hocus_bg-item-hover transition",attrs:{href:"https://piloyan.ru"}},[t._v(t._s(t.$t("madeBy.text"))),e("div",{staticClass:"mdi mdi-heart mx-2 text-2xl text-[rgb(210,0,20)] animate-[heartbeat_3s_ease-in-out_infinite]"}),t._v(t._s(t.$t("madeBy.name")))])}),[],!1,null,null,null);"function"==typeof r.default&&Object(r.default)(component);e.default=component.exports},863:function(t,e,n){"use strict";n(811)},864:function(t,e,n){var o=n(60)((function(i){return i[1]}));o.push([t.i,'html[data-v-8f667d92]{--font-secondary:"Unica One","Roboto Condensed",sans-serif;--font-roboto:"Roboto",sans-serif}h1[data-v-8f667d92],h2[data-v-8f667d92],h3[data-v-8f667d92]{color:var(--c-font-2);font-family:"Nunito","Roboto",sans-serif;font-size:18px;font-weight:600;margin:0}.logo[data-v-8f667d92]:first-letter{color:var(--c-blue-3)}',""]),o.locals={},t.exports=o},865:function(t,e,n){"use strict";n(812)},866:function(t,e,n){var o=n(60)((function(i){return i[1]}));o.push([t.i,'html[data-v-2a8b20e4]{--font-secondary:"Unica One","Roboto Condensed",sans-serif;--font-roboto:"Roboto",sans-serif}h1[data-v-2a8b20e4],h2[data-v-2a8b20e4],h3[data-v-2a8b20e4]{color:var(--c-font-2);font-family:"Nunito","Roboto",sans-serif;font-size:18px;font-weight:600;margin:0}.dot[data-v-2a8b20e4]{animation:sk-bouncedelay-2a8b20e4 1.3s ease-in-out infinite both;background-color:var(--c-bg-10);border-radius:9999px;height:1rem;margin-right:.75rem;width:1rem}.dot._d1[data-v-2a8b20e4]{animation-delay:-.32s}.dot._d2[data-v-2a8b20e4]{animation-delay:-.16s}.dot._d3[data-v-2a8b20e4]{margin-right:0}@keyframes sk-bouncedelay-2a8b20e4{0%,80%,to{transform:scale(.2)}40%{transform:scale(1)}}',""]),o.locals={},t.exports=o},957:function(t,e,n){"use strict";n.r(e);n(19);var o=n(1),r=Object(o.defineComponent)({__name:"Switcher",setup:function(t){return{__sfc:!0,locales:[{slug:"ru",name:"Русский"},{slug:"en",name:"English"}]}}}),l=n(6),component=Object(l.a)(r,(function(){var t=this,e=t._self._c,n=t._self._setupProxy;return e("UiTabs2",t._l(n.locales,(function(n){return e("UiTabsItem2",{key:n.slug,staticClass:"text-secondary",attrs:{isActive:t.$store.state.lang.lang===n.slug},on:{click:function(e){return t.$store.dispatch("lang/setLang",n.slug)}}},[t._v(t._s(n.name))])})),1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiTabsItem2:n(797).default,UiTabs2:n(799).default})},958:function(t,e,n){"use strict";n.r(e);n(19);var o=n(1),r=Object(o.defineComponent)({__name:"Switcher",setup:function(t){return{__sfc:!0,items:[{name:"Light",slug:"light"},{name:"Dark",slug:"dark"},{name:"System",slug:"system"}]}}}),l=n(6),component=Object(l.a)(r,(function(){var t=this,e=t._self._c,n=t._self._setupProxy;return e("UiTabs2",t._l(n.items,(function(n){return e("UiTabsItem2",{key:n.name,attrs:{isActive:t.$colorMode.preference===n.slug},on:{click:function(e){return t.$store.dispatch("ui/setTheme",n.slug)}}},[t._v(t._s(n.name))])})),1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiTabsItem2:n(797).default,UiTabs2:n(799).default})},959:function(t,e,n){"use strict";n.r(e);var o=n(1),r=Object(o.defineComponent)({__name:"Spinier",setup:function(t){return{__sfc:!0}}}),l=(n(865),n(6)),component=Object(l.a)(r,(function(){var t=this;t._self._c,t._self._setupProxy;return t._m(0)}),[function(){var t=this._self._c;this._self._setupProxy;return t("div",{staticClass:"h-full flex-center"},[t("div",{staticClass:"dot _d1"}),t("div",{staticClass:"dot _d2"}),t("div",{staticClass:"dot _d3"})])}],!1,null,"2a8b20e4",null);e.default=component.exports},979:function(t,e,n){"use strict";n.r(e);n(863);var o=n(6),component=Object(o.a)({},(function(){var t=this;return(0,t._self._c)("div",{staticClass:"logo pb-8 text-6xl font-extrabold font-secondary tracking-wide text-gray-600 dark_text-neutral-200 font-nunito"},[t._v(t._s(t.$t("appName")))])}),[],!1,null,"8f667d92",null);e.default=component.exports}}]);