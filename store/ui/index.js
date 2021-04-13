import actions from './actions'
import mutations from './mutations'

const state = () => ({
  activeTab: 'stat',
  defaultBgColor: '#455a64',
  height: 0,
  mobile: false,
  pc: false,
  catsChart: 'visible',
  catsChartPie: 'visible',
  statGraphsVisibility: 'visible',
  statItems: 'visible',
  stat: {
    activeTab: 'incomes'
  },
  activeTabStat: 'details',
  activeTabViewName: 'stat'
})

export default {
  state,
  actions,
  mutations
}
