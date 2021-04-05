<template>
  <Transition name="fade">
      <div class="list">
        <TheBackHeader>
          <div class="tabs">
            <div
              v-for="(name, index) in tabs"
              :key="name"
              :class="{'active': activeIdx === index }"
              class="item"
              @click="switchTab(index)"
            >
              <span>{{ name }}</span>
            </div>
          </div>
        </TheBackHeader>
        <div class="content-wrapper"></div>
        <div class="loading-wrap"></div>
      </div>
  </Transition>
</template>
<script>
import TheBackHeader from '@/components/TheBackHeader'
export default {
  name: 'List',
  components: {
    TheBackHeader
  },
  data () {
    return {
      tabs: ['正在热映', '即将上映'],
      activeIdx: 0
    }
  },
  methods: {
    switchTab (index) {
      this.activeIdx = index
      this.$router.push(`/list/${index}`)
    }
  }
}
</script>

<style lang="stylus" scoped>
.list
  page-fixed()
  .tabs
    width 210px
    height 30px
    line-height 30px
    border 1px solid #0d121a
    border-radius 100px
    background #0d121a
    .item
      display inline-block
      width 50%
      font-size 15px
      border-radius 100px
      &.active
        background $color-theme
</style>
