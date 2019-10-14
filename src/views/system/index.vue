<template>
  <div class="system" v-loading.fullscreen.lock="loading">
    <div class="title">全局配置</div>
    <el-form ref="form" label-width="180px" class="form">
      <el-form-item label="模式">
        <el-radio-group v-model="form.mode" class="radio">
          <el-radio label="IPS">阻断模式</el-radio>
          <el-radio label="IDS">监测模式</el-radio>
          <el-radio label="BYPASS">旁路模式</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="handleSave">提交</el-button>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState } from 'vuex'
import SensorModel from '@/models/sensor'
export default {
  name: 'SystemIndex',
  data() {
    return {
      form: {
        mode: 'IDS' // IPS: 阻断模式; IDS: 监测模式; BYPASS: 旁路模式
      },
      loading: false
    }
  },
  computed: {
    ...mapState({
      mode: state => {
        let { mode } = state.sensor.ctx
        return mode
      }
    }),
  },
  watch: {
    mode(val, oldVal) {
      this.form.mode = val
    }
  },
  methods: {
    async handleSave() {
      this.$store.commit('sensor/SET_MODE', this.form.mode)
      this.loading = true
      await SensorModel.updateSensor()
      this.loading = false
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.system {
  .form {
    margin-top 50px
    margin-bottom 20px
    max-width 1300px
    .el-form-item {
      margin-bottom 5px
      .el-form-item__label {
        text-align center
        border-radius 4px
        background-color #FBFBFB
        border 1px solid #DCDFE6
      }
    }
    .radio {
      margin-left 10px
    }
  }
}
</style>
