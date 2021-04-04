<template>
  <div class="recommend">
    <Scroll :data="movies">
      <ListBlock
        :movies="playingMovies"
        :title="`正在热映(${playingCount})`"
        @more="goMore(0)"
        @select="selectItem"
      />
      <Spacing />
      <ListBlock
        :movies="commingMovies"
        :title="`即将上映(${commingCount})`"
        @more="goMore(1)"
        @select="selectItem"
      />
    </Scroll>
  </div>
</template>

<script>
// 测试，拿数据
import axios from 'axios'
import ListBlock from '@/components/ListBlock'
export default {
  components: {
    ListBlock
  },
  data () {
    return {
      commingMovies: [],
      commingCount: 0,
      playingMovies: [],
      playingCount: 0
    }
  },
  computed: {
    movies () {
      return this.commingMovies.concat(this.playingMovies)
    }
  },
  created () {
    this.getMovie()
  },
  methods: {
    getMovie () {
      axios.get('/api/movie/hot').then((res) => {
        if (res.data.code === 200) {
          const { comming, playing } = res.data.data
          this.commingMovies = comming.movies
          this.commingCount = comming.count
          this.playingMovies = playing.movies
          this.playingCount = playing.count
        }
      })
    },
    goMore (type) {
      this.$router.push(`/list/${type}`)
    },
    selectItem (id) {
      this.$router.push(`/movie/${id}`)
    }
  }
}
</script>

<style lang="stylus" scoped>
.recommend
  height 100%
</style>
