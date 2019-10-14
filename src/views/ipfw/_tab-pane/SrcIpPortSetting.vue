<template>
  <div class="src-ip">
    <div v-for="item in accessList" :key="item.ip" class="ip-item">
      {{ item }}
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'SrcIpPortSetting',
  components: {},
  data() {
    return {
      accessList: []
    }
  },
  computed: {},
  watch: {
    dialogVisible(val, oldVal) {
      if (val) this.initCheckState()
    }
  },
  created() { },
  mounted() {
    this.initCheckState()
  },
  methods: {
    initCheckState() {
      this.accessList = this.$store.state.sensor.tmpWhitelist.accessList
    }
  },
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus"></style>
