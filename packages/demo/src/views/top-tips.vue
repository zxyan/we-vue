<template>
  <div class="page page-with-padding">
    <wv-button
      type="primary"
      @click="openTips"
    >显示提示 (3S)</wv-button>
    <wv-button
      type="warn"
      @click="closeTips"
    >关闭提示</wv-button>
  </div>
</template>

<script>
// import { TopTips } from 'we-vue'
import { WvToptios } from 'we-vue'
import WeVue from 'we-vue'

import { a } from 'we-vue'

console.log(a)

console.log(WvToptios)

export default {
  // TODO
  methods: {
    openTips () {
      WvToptios({
        message: '提示信息',
        duration: 3000
      })
    },

    closeTips () {
      WvToptios.close()
    }
  }
}
</script>

<style scoped lang="scss">
.page {
  margin-top: 50px;
}
</style>
