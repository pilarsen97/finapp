(window.webpackJsonp=window.webpackJsonp||[]).push([[112,18],{1083:function(t,e,r){"use strict";r.r(e);var n=r(10),o=r(1),c=(r(31),r(35),r(19),r(43),r(32),r(26),r(14),r(30),r(41),r(13),r(28),r(22),r(29),r(8)),l=r(11),f=(r(39),r(7),r(20),r(38),r(15),r(1043)),d=r.n(f),m=r(16),v=r.n(m),y=r(302),h={borderRadius:[4,4,0,0]},O={z:1,silent:!0,symbol:[!1,!1],data:[{type:"average",name:"Avg",label:{show:!1}}],lineStyle:{type:"solid",opacity:.7}},C={grid:{top:"30",left:"10",right:"10",bottom:"30",containLabel:!0},xAxis:{type:"category",axisTick:{alignWithLabel:!0},axisLabel:{color:"var(--color-item-base-down)",fontFamily:"var(--font-secondary)",fontSize:"10"}},yAxis:{type:"value",axisPointer:{snap:!0},position:"right",axisTick:{lineStyle:{color:"blue"}},splitLine:{lineStyle:{color:"var(--c-bg-5)"}},axisLabel:{color:"var(--color-item-base-down)",fontFamily:"var(--font-secondary)",fontSize:"10"}},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"var(--color-item-main-active)"}},backgroundColor:"var(--c-item-bg-main)",borderColor:"var(--c-item-bg-active)",textStyle:{color:"var(--color-item-base)"}}},j=r(99),_=r(121),w=r(93),x=r(787),D=r(181),S=r(788);function P(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function k(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?P(Object(r),!0).forEach((function(e){Object(c.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function T(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return I(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return I(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function I(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var M=Object(o.defineComponent)({__name:"total",setup:function(t){var e=Object(y.a)().baseCurrencyCode,r=Object(n.g)().$store,c=Object(o.computed)((function(){return r.state.trns.items})),f=Object(x.a)(c.value),m=Object(o.ref)("month"),P=Object(o.computed)((function(){return Object(S.a)(m.value,f)}));function I(t){var e=t.date,r=t.period;return{from:v()(e).startOf(r).valueOf(),until:v()(e).endOf(r).valueOf()}}function M(t){for(var e=t.fromDate,r=t.periodName,n=t.periodsCount,o=[],c=0;c<n;c++)o.push({date:v()(e).startOf(r).add(c,r).startOf(r).format()});return o}var A=Object(o.computed)((function(){return M({fromDate:f,periodName:m.value,periodsCount:P.value})})),L=Object(o.computed)((function(){return A.value.map((function(t){var e=I({date:t.date,period:m.value}),n=Object(w.a)({fromDate:e.from,untilDate:e.until,trnsItems:c.value}),o=r.state.categories.items,l=r.state.wallets.items,f=r.state.currencies.base,d=r.state.currencies.rates,v=Object(j.c)(o),y=Object(_.b)({baseCurrencyCode:f,rates:d,transferCategoriesIds:v,trnsIds:n,trnsItems:c.value,walletsItems:l});return{date:t.date,trnsIds:n,total:y}}))})),Y=Object(o.computed)((function(){var t,e=[],r=T(L.value.entries());try{for(r.s();!(t=r.n()).done;){var n=Object(l.a)(t.value,2),o=n[0],element=n[1],c=element.total.sumTransfers+element.total.sumTransactions;0===o?e.push(c):e.push(e[o-1]+c)}}catch(t){r.e(t)}finally{r.f()}return e})),N=Object(o.computed)((function(){return{xAxis:{type:"category",data:L.value.map((function(t){return v()(t.date).format("DD MMMM")}))},series:[{name:"Income",type:"bar",data:L.value.map((function(t){return t.total.incomeTransactions})),markLine:O,itemStyle:k(k({},h),{},{color:"green"})},{name:"Expense",type:"bar",data:L.value.map((function(t){return t.total.expenseTransactions})),markLine:O,itemStyle:k(k({},h),{},{color:"red"})},{name:"Total",type:"line",data:Y.value,markLine:O,itemStyle:k(k({},h),{},{color:"#c1c1c1"})}],tooltip:{valueFormatter:function(t){return"".concat(Object(D.a)(t)," ").concat(Object(D.b)(e.value))}},dataZoom:[{type:"inside",start:0,end:100},{start:0,end:0}],legend:{},grid:{bottom:"50"}}})),z=Object(o.computed)((function(){return d()(JSON.parse(JSON.stringify(C)),N.value)}));return{__sfc:!0,baseCurrencyCode:e,$store:r,trnsItems:c,oldestTrnDate:f,activePeriod:m,periods:["day","week","month","year"],maxPeriodsNumber:P,getPeriodDates:I,getLastDateOrToday:function(t){var e=t.date,r=v()().endOf("day").valueOf();return e>r?r:e},getPeriodsDates:M,periodsGenerated:A,series:L,seriesTotal:Y,chartConfig:N,chartData:z,_merge:d.a,dayjs:v.a,useAmount:y.a,averageLine:O,baseSeriesItemStyle:h,options:C,getTransferCategoriesIds:j.c,getTotal:_.b,getTrnsIds:w.a,getOldestTrnDate:x.a,formatAmount:D.a,getCurrencySymbol:D.b,getMaxPeriodsToShow:S.a}}}),A=r(6),component=Object(A.a)(M,(function(){var t=this,e=t._self._c,r=t._self._setupProxy;return e("div",{staticClass:"h-full overflow-hidden overflow-y-auto"},[t._m(0),e("div",{staticClass:"my-5"},[e("h1",[t._v("date")]),e("pre",[t._v(t._s(r.dayjs(t.date).format("YYYY-MM-DD HH:mm")))])]),e("div",{staticClass:"my-5"},[e("h1",[t._v("oldestTrnDate")]),e("pre",[t._v(t._s(r.dayjs(r.oldestTrnDate).format("YYYY-MM-DD HH:mm")))])]),e("div",{staticClass:"my-5"},[e("h1",[t._v("maxPeriodsNumber")]),e("pre",[t._v(t._s(r.maxPeriodsNumber))])]),e("div",{staticClass:"my-6 mx-2 py-2 rounded-lg bg-item-main-bg border dark_border-neutral-800"},[e("ChartBase",{staticClass:"h-80",attrs:{option:r.chartData},on:{finished:t.finished}})],1)])}),[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"my-5"},[e("h1",{staticClass:"pb-2"},[t._v("Periods")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{ChartBase:r(966).default})},787:function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));var n=r(18),o=(r(39),r(191),r(16)),c=r.n(o);function l(t){var e=c()().startOf("day").valueOf();return Math.min.apply(Math,Object(n.a)(Object.values(t).map((function(t){return t.date}))))||e}},788:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(16),o=r.n(n);function c(t,e){return o()().endOf(t).diff(e,t)+1}},966:function(t,e,r){"use strict";r.r(e);var n=r(1),o=r(901),c=r(952),l=r(951),f=r(984),d=r(950),m=Object(n.defineComponent)({__name:"Base",props:{option:null,loading:{type:Boolean}},emits:["finished","onClickChart"],setup:function(t,e){var r=e.emit;Object(o.c)([l.a,d.a,d.b,d.c,d.d,d.e,l.b,d.f,d.g,c.a,d.h]);var m=Object(n.ref)();return{__sfc:!0,emit:r,chart:m,finished:function(){r("finished",m.value)},onClickChart:function(t){r("onClickChart",t)},use:o.c,SVGRenderer:c.a,BarChart:l.a,LineChart:l.b,VChart:f.a,DataZoomComponent:d.a,DataZoomInsideComponent:d.b,DataZoomSliderComponent:d.c,GridComponent:d.d,LegendComponent:d.e,MarkAreaComponent:d.f,MarkLineComponent:d.g,TooltipComponent:d.h}}}),v=r(6),component=Object(v.a)(m,(function(){var t=this,e=t._self._c,r=t._self._setupProxy;return e(r.VChart,{ref:"chart",staticClass:"w-full",attrs:{loading:t.loading,option:t.option,autoresize:""},on:{finished:r.finished,"zr:click":r.onClickChart}})}),[],!1,null,null,null);e.default=component.exports}}]);