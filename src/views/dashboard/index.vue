<template>
  <div class="dashboard">
    <el-row :gutter="16">
      <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
        <GraphContainer title="资产通信量"></GraphContainer>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
        <GraphContainer title="网络流量统计"></GraphContainer>
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="4" :xl="4">
        <GraphContainer title="事件按源IP细分"></GraphContainer>
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="4" :xl="4">
        <GraphContainer title="CPU使用率"></GraphContainer>
      </el-col>
    </el-row>
    <el-row :gutter="16">
      <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
        <GraphContainer title="协议通信量(L4)"></GraphContainer>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
        <GraphContainer title="协议通信量(L7)"></GraphContainer>
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="4" :xl="4">
        <GraphContainer title="事件按目标IP细分"></GraphContainer>
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="4" :xl="4">
        <GraphContainer title="内存使用率"></GraphContainer>
      </el-col>
    </el-row>

    <el-row>
      <GraphContainer>
        <el-row :gutter="16">
          <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
            <GraphContainer title="最近事件"></GraphContainer>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="16" :xl="16">
            <GraphContainer></GraphContainer>
          </el-col>
        </el-row>
      </GraphContainer>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
import GraphContainer from 'comps/base/GraphContainer'
export default {
  name: 'Dashboard',
  components: { GraphContainer },
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

</style>
