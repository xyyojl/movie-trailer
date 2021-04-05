<template>
  <header class="back-header">
    <i class="iconfont icon-left" @click="onBack"></i>
    <slot />
  </header>
</template>
<script>
export default {
  name: 'TheBackHeader',
  props: {
    back: {
      type: Function
    }
  },
  methods: {
    onBack () {
      if (typeof this.back === 'function') {
        this.back()
        return
      }
      this.$router.back()
    }
  }
}
</script>

<style lang="stylus" scoped>
.back-header
  position fixed
  top 0
  display flex
  align-items center
  justify-content center
  width 100%
  height 56px
  color #fff
  background $color-theme
  text-align center
  .iconfont
    position absolute
    left 10px
    font-size 25px
</style>
