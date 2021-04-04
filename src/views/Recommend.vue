<template>
  <div class="recommend">
    <Scroll :data="movies">
      <ListBlock
        :movies="playingMovies"
        :title="`正在热映(${playingCount})`"
        @more="goMore(0)"
        @select="selectItem"
        :loading="loading"
      />
      <Spacing />
      <ListBlock
        :movies="commingMovies"
        :title="`即将上映(${commingCount})`"
        @more="goMore(1)"
        @select="selectItem"
        :loading="loading"
      />
    </Scroll>
  </div>
</template>

<script>
import { useAxios } from '@/assets/js/request'
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
      playingCount: 0,
      loading: true
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
      const { loading } = useAxios('/api/movie/hot', result => {
        const { comming, playing } = result
        this.commingMovies = comming.movies
        this.commingCount = comming.count
        this.playingMovies = playing.movies
        this.playingCount = playing.count
        this.loading = false
      })
      this.loading = loading
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
