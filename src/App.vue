<template>
  <div id="app">
    <TheHeader></TheHeader>
    <div class="layout-content">
      <RouterView/>
    </div>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
export default {
  name: 'App',
  components: {
    TheHeader
  },
  data () {
    return {}
  }
}
</script>

<style lang="stylus" scoped>
#app
  height 100vh
  .layout-content
    position absolute
    top $headerHeight
    bottom 0
    width 100%
    > div
      height 100%
</style>
