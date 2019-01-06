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
import a from './badge'
export default a
</script>
