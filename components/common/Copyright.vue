<template lang="pug">
a.flex-center.py-2.px-5.rounded-md.hocus_bg-item-hover.transition(
  href="https://piloyan.ru"
)
  | {{ $t('madeBy.text') }}
  .mdi.mdi-heart(
    class=`
      mx-2
      text-2xl text-[rgb(210,0,20)]
      animate-[heartbeat_3s_ease-in-out_infinite]
    `
  )
  | {{ $t('madeBy.name') }}
</template>

<style lang="stylus">
@keyframes heartbeat
  0%
    transform scale(.75)
  20%
    transform scale(1)
  40%
    transform scale(.75)
  60%
    transform scale(1.1)
  80%
    transform scale(.75)
  100%
    transform scale(.75)
</style>

<i18n lang="yaml">
en:
  madeBy:
    text: piloyan.ru
    name: Арсен Пилоян
ru:
  madeBy:
    text: piloyan.ru
    name: Арсен Пилоян
  </i18n>
