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
import Vue from 'vue'
import '../../scss/badge.scss'

export default Vue.extend({
  name: 'wv-badge',

  props: {
    color: String,
    isDot: Boolean,
  },
})
</script>
