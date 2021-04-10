<template>
  <div class="category">
    <div class="nav-wrapper">
        <div class="sizer-tabs">
          <div
            v-for="(item, index) in cats"
            :key="index"
            class="sizer-tab-item"
            :class="getTabClass(index)"
            @click="switchTab(index)"
          >
            <span class="text">{{ item }}</span>
            <i class="iconfont icon-drop-down" :class="{'icon-drop-up': index === activeTabIdx}"></i>
          </div>
        </div>
        <div class="sizer-tab-content" v-show="activeTabIdx !== -1">
          <SizerCategory
            v-show="activeTabIdx === 0"
            v-model="params.categories"
            @change="getMovies"
          />
          <SizerStatus
            v-show="activeTabIdx === 1"
            :status="params.status"
            @change="changeStatus"
          />
          <SizerRate
            v-if="activeTabIdx === 2"
            ref="sizerRate"
            v-model="params.rate"
            @change="getMovies"
          />
        </div>
        <div class="sizer-mask" v-show="activeTabIdx !== -1" @click="closeTab"></div>
    </div>
    <div class="movie-list" v-show="!loading">
      <Scroll v-show="movieList.length" :data="movieList">
        <Card v-for="movie in movieList" :key="movie.id" :movie="movie" />
      </Scroll>
    </div>
    <Loading v-show="loading" height="80%" />
  </div>
</template>

<script>
import SizerCategory from '@/components/SizerCategory'
import SizerStatus from '@/components/SizerStatus'
import SizerRate from '@/components/SizerRate'
export default {
  components: {
    SizerCategory,
    SizerStatus,
    SizerRate
  },
  data () {
    return {
      cats: ['分类', '已上映', '评分'],
      loading: true,
      movieList: [],
      params: {
        // 分类
        categories: [],
        // 是否上映
        status: '1',
        // 评分
        rate: [0, 10]
      },
      activeTabIdx: -1
    }
  },
  created () {
    this.getMovies()
  },
  methods: {
    getMovies () {
      this.activeTabIdx = -1
      const { categories, rate, status } = this.params
      const params = {
        categories: !categories.length ? undefined : JSON.stringify(categories),
        status: status,
        rate: status !== '0' ? JSON.stringify(rate) : undefined
      }
      this.$axios.get('/api/movie', { params })
        .then(res => {
          const result = res.data.data
          this.movieList = result
          this.loading = false
        })
    },
    getTabClass (index) {
      return {
        active: index === this.activeTabIdx,
        disable: index === 2 && this.params.status === '0'
      }
    },
    switchTab (index) {
      // 点击相同相当于关闭
      if (index === this.activeTabIdx) {
        this.activeTabIdx = -1
        return
      }

      // 当选择未上映的时候，评分不可选
      if (this.params.status === '0' && index === 2) return

      this.activeTabIdx = index
      // TODO：额外做处理
    },
    closeTab () {
      this.activeTabIdx = -1
    },
    changeStatus ({ name, value }) {
      this.cats[1] = name
      this.params.status = value
      this.getMovies()
    }
  }
}
</script>

<style lang="stylus" scoped>
.sizer-tabs
  layout-flex()
  height 40px
  line-height 40px
  border-bottom $bordered
  .sizer-tab-item
    position relative
    flex 1
    text-align center
    font-size $font-size-small
    color $color-text-regular
    &.active
      color $color-text-primary
    &.disable
      color $color-text-lighter
    &:not(:first-child)::before
      position absolute
      content: ''
      display block
      height 20px
      top 10px
      left 0
      border-left 1px solid #e8e8e8
.sizer-tab-content
  position absolute
  width 100%
  top 41px
  z-index 20
  background $color-white
.sizer-mask
  page-fixed(97px)
  z-index 15
  background rgba(0, 0, 0, 0.5)
.movie-list
  page-fixed(97px);
</style>
