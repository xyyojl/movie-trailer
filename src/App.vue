<template>
  <div id="app">
    <TheHeader></TheHeader>
    <div class="content">
      <keepAlive :exclude="exclude">
        <RouterView/>
      </keepAlive>
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
    return {
      exclude: ['User', 'Movie']
    }
  }
}
</script>

<style lang="stylus" scoped>
.content
  position absolute
  top 56px
  bottom 0
  width 100%
</style>
