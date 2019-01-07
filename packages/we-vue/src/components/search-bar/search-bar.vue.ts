// import Vue from 'vue'
import '../../scss/search-bar.scss'
// import WvCell from '../cell/index'
import mixins from '../../utils/mixins'

import Colorable from '../../mixins/colorable'

export default mixins(Colorable).extend({
  name: 'wv-search-bar',

  // TODO
  // components: {
  //   WvCell,
  // },
  //
  // props: {
  //   autofocus: Boolean,
  //   show: Boolean,
  //   placeholder: {
  //     type: String,
  //     default: '搜索',
  //   },
  //   cancelText: {
  //     type: String,
  //     default: '取消',
  //   },
  //   resultTextKey: String,
  //   result: Array,
  //   value: null,
  // },
  //
  // data () {
  //   return {
  //     currentValue: this.value,
  //     isActive: false,
  //   }
  // },
  //
  // mounted (): void {
  //   if (this.autofocus) {
  //     this.isActive = true
  //   }
  // },
  //
  // methods: {
  //   textClick (): void {
  //     // focus the input
  //     (this.$refs.input as HTMLElement).focus()
  //     this.isActive = true
  //   },
  //
  //   // 清除输入
  //   clear (): void {
  //     this.currentValue = ''
  //   },
  //
  //   // 取消搜索
  //   cancel (): void {
  //     this.$emit('cancel')
  //     this.clear()
  //     this.isActive = false
  //   },
  // },
  //
  // watch: {
  //   currentValue (val): void {
  //     this.$emit('input', val)
  //   },
  //
  //   value (val): void {
  //     this.currentValue = val
  //   },
  // },
})
