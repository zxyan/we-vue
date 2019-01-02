<template>
  <div class="weui-flex__item" :style="style">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// TODO
// import '../../scss/flex-item.scss'

export default Vue.extend({
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
    gutter () {
      return (this.$parent && Number(this.$parent.gutter)) || 0
    },

    style () {
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
</script>
