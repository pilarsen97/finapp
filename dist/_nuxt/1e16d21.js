(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{782:function(e,t,r){"use strict";r.r(t);var n=r(10),o=r(1),M=(r(38),r(31),r(16)),c=r.n(M),l=Object(o.defineComponent)({__name:"Date",props:{date:null,period:null},setup:function(e){var t=e,r=Object(n.g)().nuxt2Context.i18n,M=Object(o.computed)((function(){var e=c()(),n=t.date,o=t.period,M="MMMM";switch(o){case"day":M=e.isSame(n,"year")?"DD MMMM":"DD MMMM YYYY";break;case"week":if(e.isSame(n,"week"))return r.t("dates.week.current");if(e.subtract(1,o).isSame(n,"week"))return r.t("dates.week.last");var l=c()(n),d=l.startOf("week").format("D MMMM"),f=l.endOf("week").format("D MMMM");return"".concat(d," - ").concat(f);case"month":if(e.isSame(n,"year")){M="MMMM";break}M="MMMM YYYY";break;case"year":M="YYYY"}var m=c()(n).format(M);return m[0].toUpperCase()+m.slice(1)}));return{__sfc:!0,props:t,i18n:r,formattedDate:M,dayjs:c.a}}}),d=r(6),component=Object(d.a)(l,(function(){var e=this,t=e._self._c,r=e._self._setupProxy;return t("div",["all"===e.period?[e._v(e._s(e.$t("dates.all.simple")))]:e._e(),"all"!==e.period?[e._v(e._s(r.formattedDate))]:e._e()],2)}),[],!1,null,null,null);t.default=component.exports}}]);