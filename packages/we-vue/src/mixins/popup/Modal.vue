<template>
  <Transition name="wv-fade">
    <div
      v-show="visible"
      class="wv-modal"
      :class="className"
      :style="style"
      @touchmove.prevent.stop
      @click="$emit('click', $event)"
    />
  </Transition>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'wv-modal',

  props: {
    visible: Boolean,
    zIndex: Number,
    className: String,
    customStyle: Object,
  },

  computed: {
    style (): object {
      return {
        zIndex: this.zIndex,
        ...this.customStyle,
      }
    },
  },
})
</script>
