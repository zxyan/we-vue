<template>
  <i :class="classObject" />
</template>

<script lang="ts">
import Vue from 'vue'
import '../../scss/icon.scss'

export default Vue.extend({
  name: 'wv-icon',

  props: {
    type: {
      type: String,
      required: true,
    },
    large: Boolean,
  },

  computed: {
    classObject () {
      let classType = `weui-icon-${this.type}`

      return {
        [classType]: true,
        'weui-icon_msg': this.large,
      }
    },
  },
})
</script>
