import Vue from 'vue'
import '../../scss/flex.scss'

export default Vue.extend({
  name: 'wv-flex',

  props: {
    gutter: {
      type: [Number, String],
      default: 0,
      validator: (val: number | string) => {
        return Number(val) >= 0
      },
    },
  },

  computed: {
    style (): object {
      const margin = `-${Number(this.gutter) / 2}px`

      return this.gutter ? { marginLeft: margin, marginRight: margin } : {}
    },
  },
})
