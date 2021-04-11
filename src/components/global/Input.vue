<template>
  <div class="search-box">
    <i class="iconfont icon-search"></i>
    <input
      type="text"
      v-model="query"
      class="search-input"
      @input="handleInput"
      :placeholder="placeholder"
    />
    <i class="iconfont icon-delete" v-show="query" @click="handleClear"></i>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: '搜索电影'
    }
  },
  data () {
    return {
      query: ''
    }
  },
  methods: {
    handleInput () {
      this.$emit('input', this.query)
    },
    handleClear () {
      this.query = ''
      this.$emit('clear')
    },
    setQuery (str) {
      this.query = str
    }
  }
}
</script>

<style lang="stylus" scoped>
.search-box
  layout-flex(center, normal)
  flex-wrap nowrap
  padding 0 10px
  background $color-white
  border $bordered
  border-radius $border-radius-base
  .iconfont
    font-size $font-size-medium
    color $color-text-secondary
  .search-input
    margin 8px 20px 8px 5px
    font-size $font-size-small
    border none
    outline none
    width calc(100% - 60px)
    color $color-text-primary
</style>
