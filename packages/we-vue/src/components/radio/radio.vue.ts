import Vue from 'vue'
import '../../scss/radio.scss'

import { PropValidator } from 'vue/types/options'

export default Vue.extend({
  name: 'wv-radio',

  props: {
    title: String,
    align: {
      type: String,
      default: 'left',
    },
    options: {
      type: Array,
      required: true,
    },
    value: null as any as PropValidator<any>,
  },

  data () {
    return {
      currentValue: this.value,
    }
  },

  watch: {
    currentValue (val): void {
      this.$emit('input', val)
      this.$emit('change', val)
    },

    value (val): void {
      this.currentValue = val
    },
  },
})
