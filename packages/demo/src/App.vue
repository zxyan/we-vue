<template>
  <div id="app">
    <transition :name="$root.transitionName">
      <router-view/>
    </transition>
    <div class="qrcode">
      <img
        :src="qrcodeUrl"
        :class="{ 'qrcode-big': bigQrcode }"
        @click="clickQrcode"
      >
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

// import { WvButton } from 'we-vue'
//
// // console.log(WvButton)

import WeVue from 'we-vue'

console.log(WeVue)

export default {
  data () {
    return {
      bigQrcode: false
    }
  },

  computed: {
    ...mapState({
      qrcodeUrl: state => state.qrcodeUrl
    })
  },

  methods: {
    clickQrcode () {
      this.bigQrcode = !this.bigQrcode
    }
  }
}
</script>
