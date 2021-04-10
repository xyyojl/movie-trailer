<template>
  <div class="category">
    <div class="nav-wrapper">
        <div class="tabs">分类 Tab</div>
        <div class="tab-content"></div>
        <div class="mask"></div>
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
export default {
  data () {
    return {
      loading: true,
      movieList: [],
      params: {
        // 分类
        categories: [],
        // 是否上映
        status: '1',
        // 评分
        rate: [0, 10]
      }
    }
  },
  created () {
    this.getMovies()
  },
  methods: {
    getMovies () {
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
    }
  }
}
</script>

<style lang="stylus" scoped>
.movie-list
  page-fixed(97px)
</style>
