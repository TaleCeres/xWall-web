<template>
  <div>
    <div class="container">
      <div v-if="title" class="title">{{title}}</div>
      <slot />
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'GraphContainer',
  components: {},
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  data() {
    return {}
  },
  computed: {},
  created() { },
  mounted() { },
  methods: {},
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.container {
  margin-bottom 20px
  border-radius 4px
  position relative
  background-color #fff
  background-size 100% 100%
  overflow hidden
  height 240px
  box-shadow 0 2px 12px 0 rgba(0,0,0,.1)
  .title {
    padding-left 20px
    font-weight bolder
    position relative
    height 40px
    line-height 40px
    font-size 18px
    border-bottom 1px solid #f3f3f3
  }
}
</style>
