(window.webpackJsonp=window.webpackJsonp||[]).push([[25,23],{745:function(t,e,n){"use strict";n.r(e);var l=n(1),c=Object(l.defineComponent)({__name:"ItemBg",emits:["click"],setup:function(t,e){return{__sfc:!0,emit:e.emit}}}),r=n(6),component=Object(r.a)(c,(function(){var t=this,e=t._self._c,n=t._self._setupProxy;return e("div",{staticClass:"cursor-pointer relative py-1 px-3 flex items-center gap-3 rounded-md bg-item-main-bg hocus_bg-item-main-hover",on:{click:function(t){return n.emit("click")}}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},971:function(t,e,n){"use strict";n.r(e);n(19);var l=n(1),c=n(114),r=Object(l.defineComponent)({__name:"WalletItem",props:{id:null},emits:["click"],setup:function(t,e){var n=e.emit,r=t,o=Object(c.a)().walletsItemsSorted,m=Object(l.computed)((function(){return o.value[r.id]}));return{__sfc:!0,props:r,emit:n,walletsItemsSorted:o,wallet:m,useWallets:c.a}}}),o=n(6),component=Object(o.a)(r,(function(){var t=this,e=t._self._c,n=t._self._setupProxy;return e("FilterItemBg",{on:{click:function(e){return n.emit("click",t.id)}}},[e("div",{staticClass:"flex-center gap-x-3"},[e("div",{staticClass:"w-6 h-6 rounded-md flex-center text-icon-base text-xs leading-none mt-[2px]",style:{background:n.wallet.color}},[t._v(t._s(n.wallet.name.substring(0,2)))]),e("div",{staticClass:"grow"},[e("div",{staticClass:"text-sm leading-none"},[t._v(t._s(n.wallet.name))]),e("div",{staticClass:"text-item-base"},[e("Amount",{attrs:{amount:n.wallet.amount,currencyCode:n.wallet.currency,isShowBaseRate:!1,align:"left"}})],1)])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Amount:n(148).default,FilterItemBg:n(745).default})}}]);