<template>
  <div class="search">
    <Scroll>
      <div class="search-input-wrapper">
        <Input ref="searchBox" @input="search" @clear="clear" />
      </div>
      <div class="search-keys-wrapper">
        <h1 class="title">热门搜索</h1>
        <div class="list">
          <span
            v-for="item in hotSearchKeys"
            :key="item.name"
            class="item"
            @click="addQuery(item.name)"
          >{{ item.name }}</span>
        </div>
      </div>
      <div class="search-history-wrapper" v-if="searchHistory.length">
        <h1 class="title">
          <span>历史</span>
          <i class="iconfont icon-clear"></i>
        </h1>
        <div class="list">
            <div v-for="item in searchHistory" :key="item" class="item">
                <i class="iconfont icon-history"></i>
                <span class="text" @click="addQuery(item)">{{ item }}</span>
                <i class="iconfont icon-del" @click="deleteSearchHistory(item)"></i>
            </div>
        </div>
      </div>
    </Scroll>
    <div class="movie-list" v-show="isShow">
      <Scroll :data="movieList" v-show="movieList.length">
        <Card v-for="movie in movieList" :key="movie.id" :movie="movie" @select="selectItem" />
      </Scroll>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      hotSearchKeys: [],
      movieList: [],
      isShow: false
    }
  },
  computed: {
    ...mapState([
      'searchHistory'
    ])
  },
  created () {
    this.getHotSearchKeys()
  },
  methods: {
    search (query) {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!query.trim()) return
      const params = { keyword: query }
      this.timer = setTimeout(() => {
        this.$axios.get('api/movie/search', { params })
          .then(res => {
            const result = res.data.data
            this.movieList = result
            this.isShow = true
          })
        this.saveSearchHistory(query)
      }, 500)
    },
    clear () {
      this.movieList = []
      this.isShow = false
    },
    ...mapMutations([
      'saveSearchHistory',
      'deleteSearchHistory',
      'clearSearchHistory'
    ]),
    getHotSearchKeys () {
      this.$axios.get('/api/keyword')
        .then(res => {
          const result = res.data.data
          this.hotSearchKeys = result
        })
    },
    addQuery (query) {
      this.$refs.searchBox.setQuery(query)
      this.search(query)
    },
    selectItem (id) {
      this.$router.push(`/movie/${id}`)
    }
  }
}
</script>

<style lang="stylus" scoped>
.search-input-wrapper
  background $color-background
  padding 10px 15px
.search-keys-wrapper
  padding 0 15px 8px 15px
  background $color-white
  .title
    padding 15px 0
    font-size $font-size-base
    color $color-text-regular
  .list
    display flex
    flex-wrap wrap
    overflow hidden
    .item
      padding 6px 12px
      margin 0 12px 12px 0
      border-radius $border-radius-base
      font-size $font-size-small
      color $color-text-primary
      background $color-background
.search-history-wrapper
  padding 0 15px 8px 15px
  background $color-white
  .title
    padding-bottom 15px
    font-size $font-size-base
    color $color-text-regular
    .icon-clear
      float right
      font-size $font-size-base
  .list
    .item
      height 40px
      line-height 40px
      display flex
      font-size $font-size-base
      color $color-text-primary
      border-bottom $bordered
      .icon
        font-size $bordered
        color $color-text-secondary
      .icon-history
        margin-right 10px
      .text
        flex 1
.movie-list
  page-fixed(111px)
</style>
