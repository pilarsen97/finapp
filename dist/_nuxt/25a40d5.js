(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{1111:function(t,e,n){"use strict";n.r(e);var o=n(10),r=n(1),l=(n(13),n(7),Object(r.defineComponent)({__name:"Trns",props:{isShowIncome:{type:Boolean},isShowExpense:{type:Boolean}},setup:function(t){var e=t,n=Object(o.g)().$store,l=Object(r.computed)((function(){var t=n.state.trns.items,o=n.getters["trns/selectedTrnsIdsWithDate"];return e.isShowIncome&&(o=o.filter((function(e){return 1===t[e].type}))),e.isShowExpense&&(o=o.filter((function(e){return 0===t[e].type}))),o}));return{__sfc:!0,props:e,$store:n,trnsIds:l}}})),c=n(6),component=Object(c.a)(l,(function(){var t=this,e=t._self._c,n=t._self._setupProxy;return e("div",{staticClass:"my-6 max-w-[420px]"},[e("div",{staticClass:"pb-2 text-lg leading-none font-nunito font-semibold text-item-base"},[t._v(t._s(t.$t("trns.inPeriodTitle")))]),e("TrnsList",{attrs:{size:12,trnsIds:n.trnsIds,isShowFilter:"",uiHistory:""}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TrnsList:n(477).default})}}]);