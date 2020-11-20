import Vue from 'vue'
import VueFlex from 'vue-flex'
import 'vue-flex/dist/vue-flex.css'
import { MdToolbar, MdButton, MdIcon, MdField, MdCheckbox, MdMenu, MdList, MdEmptyState } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default-dark.css'

import router from '@/router'
import store from '@/store'
import App from '@/popup/App.vue'

Vue.use(VueFlex)
Vue.use(MdToolbar)
Vue.use(MdButton)
Vue.use(MdIcon)
Vue.use(MdField)
Vue.use(MdCheckbox)
Vue.use(MdEmptyState)
Vue.use(MdMenu) // to make md-select work
Vue.use(MdList) // to make md-select work
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
