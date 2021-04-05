<template>
  <Transition name="fade">
      <div class="page-list">
        <TheBackHeader :back="onBack">
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
        <div class="content-wrapper" v-show="movieList.length">
          <Scroll :data="movieList" :pull-up-load="true" @pulling-up="loadMore">
            <Card
              v-for="movie in movieList"
              :key="movie.id"
              :movie="movie"
              @select="gotoDetail"
            />
            <div class="pull-up-wrap">
              <p v-show="pullUpLoading">正在加载...</p>
              <p v-show="noMore">没有更多了~</p>
            </div>
          </Scroll>
        </div>
        <Loading v-show="!movieList.length" height="80%" />
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
      movieList: [],
      count: 0,
      page: 0,
      tabs: ['即将上映', '正在热映'],
      activeIdx: +this.$route.params.type,
      pullUpLoading: false
    }
  },
  created () {
    this.getMovieList()
  },
  computed: {
    noMore () {
      return this.count === this.movieList.length && this.count !== 0
    }
  },
  // 检测路由更新做处理
  beforeRouteUpdate (to, from, next) {
    this.page = 0
    this.movieList = []
    this.count = 0
    this.activeIdx = +to.params.type
    next()
    this.getMovieList()
  },
  methods: {
    switchTab (index) {
      this.activeIdx = index
      this.$router.push(`/list/${index}`)
    },
    getMovieList () {
      const params = {
        page: this.page,
        pageSize: 10,
        status: this.$route.params.type
      }
      this.$axios.get('/api/movie/status', {
        params
      })
        .then(res => {
          const result = res.data.data
          this.movieList = this.movieList.concat(result.list)
          this.count = result.total
          this.$nextTick(() => {
            this.pullUpLoading = false
          })
        })
    },
    gotoDetail (id) {
      this.$router.push(`/movie/${id}`)
    },
    loadMore () {
      const { movieList, count } = this
      if (movieList.length >= count) return
      this.page += 1
      this.pullUpLoading = true
      this.getMovieList()
    },
    onBack () {
      this.$router.replace('/recommend')
    }
  }
}
</script>

<style lang="stylus" scoped>
.page-list
  page-fixed($headerHeight)
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
  .content-wrapper
    height: calc(100% - 56px);
    .pull-up-wrap
      height 30px
      line-height 30px
      text-align center
      font-size $font-size-small
      color $color-text-regular
</style>
