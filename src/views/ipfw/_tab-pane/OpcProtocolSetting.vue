<template>
  <div class="opc">
    <div class="checked">
      <p class="note">协议完整性检查</p>
      <p class="is-open"><i class="el-icon-check"></i> 已开启</p>
    </div>
    <div class="checked">
      <p class="note">动态端口检查</p>
      <p class="is-open"><i class="el-icon-check"></i> 已开启</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'OpcProtocolSetting',
  components: {},
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
.opc {
  .checked {
    margin-bottom 5px
  }
}
</style>
