<template>
  <header class="header">
    <div class="logo-container">
      <i class="logo"></i>
    </div>
    <div class="tabs">
      <div class="tab-item" v-for="item in tabList" :key="item.name">
        <RouterLink :to="item.link">{{ item.name }}</RouterLink>
      </div>
    </div>
    <RouterLink class="user" to="/user">
      <i class="iconfont icon-user"></i>
    </RouterLink>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
  data () {
    return {
      tabList: [
        { name: '首页', link: '/recommend' },
        { name: '分类', link: '/category' },
        { name: '榜单', link: '/rank' },
        { name: '搜索', link: '/search' }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.header
  position fixed
  display flex
  width 100%
  height $headerHeight
  line-height $headerHeight
  color $color-text-regular
  background $color-theme
  .logo-container
    width 25%
    padding 15px
    box-sizing border-box
    .logo
      display block
      height 100%
      background url('~@/assets/images/logo.png') no-repeat center
      background-size contain
  .tabs
    display flex
    flex 1
    font-size $font-size-medium
    .tab-item
      flex 1
      text-align center
      a
        display inline-block
        height 56px
        color $color-text-secondary
        box-sizing border-box
  .user
    width 15%
    text-align center
    .icon-user
      font-size $font-size-extra-large
      color $color-text-secondary
  .router-link-active
    font-weight 700
    color $color-white !important
    border-bottom: 3px solid $color-white
</style>
