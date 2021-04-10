<template>
  <div class="sizer-rate">
    <div ref="bar" class="bar">
        <div class="mask" :style="style"></div>
        <div
          class="bar-btn"
          ref="barBtn1"
          @touchstart.prevent="touchStart"
          @touchmove.prevent="touchMove"
          @touchend="touchEnd"
        ></div>
        <div
          class="bar-btn"
          ref="barBtn2"
          @touchstart.prevent="touchStart"
          @touchmove.prevent="touchMove"
          @touchend="touchEnd"
        ></div>
    </div>
    <div class="bottom">
        <button class="confirm-btn" @click="confirm">完成</button>
        <span class="rate-show-text">
            {{innerRate[0]}} ~ {{innerRate[1]}}
        </span>
    </div>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'rate',
    event: 'change'
  },
  props: {
    rate: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      innerRate: [],
      style: {}
    }
  },
  created () {
    this.touch = {}
  },
  mounted () {
    setTimeout(() => {
      if (!this.dots) {
        this.generateDots()
      }
      this.innerRate = this.rate

      const [start, end] = this.innerRate
      this.$refs.barBtn1.style.left = this.dots[start] + 'px'
      this.$refs.barBtn2.style.left = this.dots[end] + 'px'

      this.setStyle()
    }, 20)
  },
  methods: {
    // 生成 rateBar 上面的阈值点，起始是 0，末尾是总长度
    generateDots () {
      this.dots = [0]
      // 获取 bar 元素的宽度，要页面显示这个元素才可以获取到宽度，深入：v-show 和 v-if
      this.width = this.$refs.bar.getBoundingClientRect().width
      for (let i = 1; i < 10; i++) {
        const dot = document.createElement('div')
        dot.className = 'bar-dot'
        const left = i * 0.1 * this.width
        this.dots.push(parseInt(left) - 7)
        dot.style.left = parseInt(left) + 'px'
        this.$refs.bar.appendChild(dot)
      }
      // 减去 btn 的宽度
      this.dots.push(this.width - 7)
      // dots 存储的是每个点的距离：[0, 26, 60, 93, 127, 160, 194, 227, 261, 294, 328.20001220703125]
    },
    // 设置 mask 黄色区块的长度和偏移量
    setStyle () {
      const x1 = parseInt(this.$refs.barBtn1.style.left)
      const x2 = parseInt(this.$refs.barBtn2.style.left)
      const position = [x1, x2].sort((a, b) => a - b)
      this.style = {
        width: (position[1] - position[0]) + 'px',
        left: position[0] + 'px'
      }
    },
    confirm () {
      this.$emit('change', this.innerRate)
    },
    touchStart (e) {
      this.touch.initiated = true
      e.target.style.transform = 'scale(1.3)'
    },
    touchMove (e) {
      if (!this.touch.initiated) return
      const otherIdx = this.dots.indexOf(parseInt(e.target.style.left))
      const otherRate = this.innerRate[1 - this.innerRate.indexOf(otherIdx)]
      const offSetWidth = Math.min(Math.max(0, e.touches[0].pageX - 30), this.width)
      const deltaArr = this.dots.map(it => Math.abs(parseInt(it - offSetWidth)))
      const min = Math.min(...deltaArr)
      const minIndex = deltaArr.findIndex(it => it === min)
      e.target.style.left = this.dots[minIndex] + 'px'
      this.innerRate = [otherRate, minIndex].sort((a, b) => a - b)
      this.setStyle()
    },
    touchEnd (e) {
      this.touch.initiated = false
      e.target.style.transform = 'scale(1.0)'
    }
  }
}
</script>

<style lang="stylus" scoped>
.sizer-rate
  padding 20px
  .bar
    position relative
    width 100%
    height 5px
    background-color $color-text-lighter
    border-radius $border-radius-small
    .bar-btn
      position absolute
      left 0
      top -5px
      width 10px
      height 10px
      border 2px solid $color-golden
      background $color-white
      border-radius 50%
      z-index 10
    .mask
      position absolute
      height 5px
      background $color-golden
      border-radius $border-radius-small
  .bottom
    margin-top 10px
    layout-flex(center, space-between)
    .confirm-btn
      padding 6px 17px
      background $color-blue
      color $color-white
      border none
      outline none
      outline none
      border-radius $border-radius-small
    .rate-show-text
      float right
      color $color-golden
      font-weight bold
      font-style italic
</style>
<style lang="stylus">
.bar-dot
  position absolute
  width 5px
  height 5px
  border-radius 100%
  background #fff
</style>
