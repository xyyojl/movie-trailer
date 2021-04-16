<template>
  <div class="sizer-category">
    <div class="category-list">
        <span
            v-for="item in categoryList"
            :key="item.id"
            class="item"
            :class="{'active': selectedKeys.includes(item.id)}"
            @click="selectItem(item.id)"
        >
            {{item.name}}
        </span>
    </div>
    <button class="confirm-btn" @click="confirm">完成</button>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'categories',
    event: 'change'
  },
  props: {
    categories: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      categoryList: [],
      selectedKeys: []
    }
  },
  created () {
    this.getCategories()
  },
  methods: {
    getCategories () {
      this.$request.get('/api/category')
        .then(res => {
          this.categoryList = res
        })
    },
    confirm () {
      this.$emit('change', this.selectedKeys)
    },
    selectItem (id) {
      const arr = this.selectedKeys.slice()
      const index = arr.indexOf(id)
      if (index > -1) {
        arr.splice(index, 1)
      } else {
        arr.push(id)
      }
      this.selectedKeys = arr
    }
  }
}
</script>

<style lang="stylus" scoped>
.sizer-category
  padding 10px 25px
  .category-list
    layout-flex()
    .item
      padding 6px 12px
      margin 0 7px 10px 0
      line-height 1;
      border-radius $border-radius-base
      font-size $font-size-small
      color $color-text-regular
      border $bordered
      &.active
        border-color $color-golden
        background $color-golden
        color $color-white
  .confirm-btn
    padding 6px 17px
    background $color-blue
    color $color-white
    border none
    outline none
    border-radius $border-radius-small
</style>
