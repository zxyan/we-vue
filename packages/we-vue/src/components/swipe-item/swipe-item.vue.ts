import Vue from 'vue'

import WVSwipe from '../swipe'

type WVSwipeInstance = InstanceType<typeof WVSwipe>

// Utils
import mixins from '../../utils/mixins'

// Mixins
import Colorable from '../../mixins/colorable'

interface options extends Vue {
  swipeComponent: WVSwipeInstance
  offset: number

  $parent: WVSwipeInstance
}

export default mixins<options>(
  Colorable
).extend({
  name: 'wv-swipe-item',

  inject: {
    swipeComponent: {
      default: null
    }
  },

  data () {
    return {
      offset: 0 as number,
    }
  },

  computed: {
    style (): object {
      return {
        width: this.$parent.width + 'px',
        transform: `translate3d(${this.offset}px, 0, 0)`,
      }
    },
  },

  beforeCreate (): void {
    this.$parent && this.$parent.swipes.push(this)
  },

  destroyed (): void {
    this.$parent &&
    this.$parent.swipes.splice(this.$parent.swipes.indexOf(this), 1)
  },
})
