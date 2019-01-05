<template>
  <span
    class="weui-badge"
    :class="{ 'weui-badge_dot': isDot }"
    :style="{ 'background-color': color }"
  >
    <slot v-if="!isDot" />
  </span>
</template>

<script lang="ts">
// import Vue from 'vue'
import '../../scss/badge.scss'

import mixins from '../../utils/mixins'

import Colorable from '../../mixins/colorable'

// export default Vue.extend({
export default mixins(Colorable).extend({
  name: 'wv-badge',

  props: {
    color: String,
    isDot: Boolean,
  },

  mixins: [Colorable],

  mounted () {
    this.setBackgroundColor ('#0f0')
    console.log(this.color)
  },
})
</script>
