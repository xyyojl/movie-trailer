<template>
  <div class="rank">
    <Scroll v-show="movieList.length" :data="movieList">
      <Card
        v-for="(movie, index) in movieList"
        :key="movie.id"
        :movie="movie"
        :sort="index + 1"
        @select="gotoDetail"
      />
    </Scroll>
    <Loading v-show="!movieList.length" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      movieList: []
    }
  },
  created () {
    this.getMovieList()
  },
  methods: {
    getMovieList () {
      this.$request.get('/api/movie/rank')
        .then(res => {
          this.movieList = this.movieList.concat(res)
        })
    },
    gotoDetail (id) {
      this.$router.push(`/movie/${id}`)
    }
  }
}
</script>

<style lang="stylus" scoped></style>
