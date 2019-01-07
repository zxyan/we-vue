// import Vue from 'vue'
import '../../scss/flex-item.scss'

import mixins from '../../utils/mixins'

import Colorable from '../../mixins/colorable'

export default mixins(Colorable).extend({
  name: 'wv-flex-item',

  props: {
    flex: {
      type: [Number, String],
      default: 1,
    },
    offset: {
      type: String,
      default: '',
    },
  },

  computed: {
    gutter (): number {
      // TODO
      return (this.$parent && Number(this.$parent.gutter)) || 0
    },

    style (): object {
      const padding = `${Number(this.gutter) / 2}px`

      let ret = this.gutter
        ? {
          paddingLeft: padding,
          paddingRight: padding,
        }
        : {}

      return { ...ret, ...{ flex: Number(this.flex), marginLeft: this.offset } }
    },
  },
})
