import Vue from 'vue'
import TopTipsComponent from './top-tips.vue'
// import { isObj } from '../../utils'
// import { CombinedVueInstance, OptionsVue } from 'vue/types/vue'
//
// type TopTipsOptions = {
//   visible?: boolean
//   message: string
//   duration?: number
// }
//
// type TopTipsType = CombinedVueInstance<Vue, {}, {}, {}, {
//   visible: boolean
//   timer: any
//   defaultOptions: TopTipsOptions
// }>
//
// const defaultOptions: TopTipsOptions = {
//   visible: true,
//   message: '',
//   duration: 3000,
// }
//
// let instance: any
// let currentOptions: TopTipsOptions = { ...defaultOptions }
//
// const parseOptions: (message: string | object) => object = message => (isObj(message) ? <object>message : { message })
//
// const createInstance: () => void = () => {
//   instance = new (Vue.extend(TopTipsComponent))({
//     el: document.createElement('div'),
//   })
//
//   instance.$on('update:visible', visible => {
//     instance.visible = visible
//   })
//
//   document.body.appendChild(instance.$el)
// }
//
// const TopTips: (options: TopTipsOptions | string) => TopTipsType = options => {
//   options = {
//     ...currentOptions,
//     ...parseOptions(options),
//   }
//
//   if (!instance) {
//     createInstance()
//   }
//
//   Object.assign(instance, options)
//   clearTimeout(instance.timer)
//
//   Object.assign(instance, { ...options })
//
//   if (options.duration > 0) {
//     instance.timer = setTimeout(() => {
//       instance.visible = false
//     }, options.duration)
//   }
//
//   return instance
// }
//
// Object.assign(TopTips, {
//   close: () => {
//     if (instance) {
//       instance.visible = false
//     }
//   },
// })
//
// Object.assign(TopTips, {
//   setDefaultOptions: (options) => {
//     // TODO:
//     // Object.assign(TopTips.currentOptions, options)
//   },
// })
//
// Object.assign(TopTips, {
//   resetDefaultOptions: () => {
//     // TODO:
//     // TopTips.currentOptions = { ...defaultOptions }
//   },
// })
//
// Vue.prototype.$toptips = TopTips

const TopTips = 'hello'

// export default TopTips
export default TopTips
