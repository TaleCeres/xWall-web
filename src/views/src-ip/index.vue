<template>
  <div>源IP设置</div>
</template>

<script>
import srcIpModel from '@/models/srcIp'
export default {
  name: 'index',
  data() {
    return {
      externalNodes: []
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    async getData() {
      let { externalNodes } = this
      let data = await srcIpModel.getExternalNodes()
      console.log(data)
    },
  }
}
</script>

<style scoped lang="stylus">

</style>
