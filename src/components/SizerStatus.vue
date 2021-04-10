<template>
  <div class="sizer-status">
    <div
      v-for="item in statusList"
      :key="item.value"
      class="item"
      :class="{'active': status === item.value}"
      @click="selectItem(item)"
    >
        <i class="iconfont icon-dui"></i>
        <span>{{ item.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    status: {
      type: [String, Number],
      required: true
    }
  },
  data () {
    return {
      statusList: [
        { name: '全部', value: '' },
        { name: '已上映', value: '1' },
        { name: '未上映', value: '0' }
      ]
    }
  },
  methods: {
    selectItem (item) {
      this.$emit('change', item)
    }
  }
}
</script>

<style lang="stylus" scoped>
.sizer-status
  background $color-white
  .item
    line-height 40px
    color $color-text-primary
    border-bottom $bordered
    .icon-dui
      display inline-block
      width 40px
      text-align center
      visibility hidden
    &.active
      color $color-golden
      .icon-dui
        visibility visible
</style>
