(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{762:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var o=[{id:"expense",type:0},{id:"income",type:1}];function r(){return{moneyTypes:o}}},854:function(t,e,n){"use strict";n.r(e);var o=n(1),r=(n(73),n(7),n(295)),c=n(762),l=Object(o.defineComponent)({__name:"Group",props:{typeText:null},setup:function(t){var e=t,n=Object(r.a)().statPage,l=Object(c.a)().moneyTypes,y=Object(o.computed)((function(){var t;return null===(t=l.find((function(t){return t.id==="".concat(e.typeText).toLowerCase()})))||void 0===t?void 0:t.type}));return{__sfc:!0,props:e,statPage:n,moneyTypes:l,typeNumber:y,useStatPage:r.a,useStat:c.a}}}),y=n(6),component=Object(y.a)(l,(function(){var t=this,e=t._self._c,n=t._self._setupProxy;return e("div",{staticClass:"my-4 px-1 bg-white dark_bg-dark3"},[e("UiTitle",[t._v(t._s(t.$t("money.".concat(t.typeText))))]),e("div",{staticClass:"overflow-hidden overflow-x-auto scrollbar"},[e("div",{staticClass:"flex flex-wrap items-center gap-1 gap-x-6"},[e("div",{staticClass:"text-3xl"},[e("Amount",{attrs:{amount:n.statPage.current[t.typeText].total,colorize:t.typeText,currencyCode:t.$store.state.currencies.base,isShowBaseRate:!1,type:n.typeNumber}})],1),0!==n.statPage.average[t.typeText]?e("LazyStatSumAverage",{attrs:{amount:n.statPage.average[t.typeText],title:t.$t("money.average.".concat(t.typeText)),type:n.typeNumber}}):t._e()],1)])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiTitle:n(219).default,Amount:n(148).default})}}]);