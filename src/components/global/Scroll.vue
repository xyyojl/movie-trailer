<template>
  <div ref="wrapper" class="scroll-wrapper">
    <div>
      <slot/>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: 'ScrollView',
  props: {
    /**
     * 列表的数据
     */
    data: {
      type: Array,
      default: () => []
    },
    /**
     * 是否派发滚动到底部的事件，用于上拉加载
     */
    pullUpLoad: {
      type: [Boolean, Object],
      default: false
    }
  },
  /* 数据源改变，强制刷新 */
  watch: {
    data () {
      setTimeout(() => {
        this.forceUpdate()
      })
    }
  },
  mounted () {
    // 保证在DOM渲染完毕后初始化 better-scroll
    setTimeout(() => {
      this.initScroll()
    }, 20)
  },
  /* keepAlive里内容变化时 */
  activated () {
    if (this.data.length) {
      this.refresh()
    }
  },
  methods: {
    /* 初始化滚动 */
    initScroll () {
      if (!this.$refs.wrapper) {
        return
      }
      // better-scroll的初始化
      this.scroll = new BScroll(this.$refs.wrapper, {
        bounce: false,
        click: true,
        pullUpLoad: this.pullUpLoad
      })
      if (this.pullUpLoad) {
        this.initPullUpLoad()
      }
    },
    initPullUpLoad () {
      this.scroll.on('pullingUp', () => {
        this.$emit('pulling-up')
      })
    },
    /* 刷新滚动 */
    refresh () {
      this.scroll && this.scroll.refresh()
    },
    /* 强制刷新，停止滚动 */
    forceUpdate () {
      if (this.pullUpLoad) {
        this.scroll.finishPullUp()
        this.refresh()
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.scroll-wrapper
  height 100%
  overflow hidden
</style>
