<template>
  <div>
    <div
      :style="{ color: titleColor }"
      class="weui-cells__title"
      v-html="title"
      v-if="title"
    />
    <div class="weui-cells">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import '../../scss/group.scss'

export default Vue.extend({
  name: 'wv-group',

  props: {
    title: String,
    titleColor: String,
  },
})
</script>
