import './scss/index.scss'
import Vue, { VueConstructor } from 'vue'
import * as components from './components'

import WeVue from './components/we-vue'

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(WeVue)
}

export default WeVue
