<template>
  <div class='user-container'>
    <el-form ref="ruleForm" :model="ruleForm" :rules="rules" status-icon label-width="200px" class="user-ruleForm">
      <el-form-item label="管理中心IP设置" prop="ip">
        <el-input v-model="ruleForm.ip"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button v-loading="loading" class="btn-submit" @click="submitForm('ruleForm')">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import SystemAdmin from '@/models/systemAdmin'

export default {
  name: 'IPConfig',
  data() {
    return {
      loading: false,
      ruleForm: {
        ip: ''
      },
      rules: {
        name: [{
          required: true,
          message: '请输入管理中心IP设置',
          trigger: 'blur'
        }]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.loading = true
      this.$refs[formName].validate(valid => {
        if (valid) {
          SystemAdmin.setIpOfCenter(Object.assign(this.$store.state.sensor.ctx, {
            remoteIp: this.ruleForm.ip
          })).then(res => {
            this.loading = false
            this.$notify({
              title: '成功',
              message: '管理中心IP设置成功',
              type: 'success'
            })
          })
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style lang="stylus">
.user-container {
  margin 30px
}
.el-form-item__label {
  text-align center
  border-radius 4px
  background-color #FBFBFB
  border 1px solid #DCDFE6
}
.el-input__inner {
  margin-left 10px
}
.btn-submit {
  background-color #289E90
  color #ffffff
  font-size 15px
  margin-left -201px
}
.btn-submit:hover,
.btn-submit:active,
.btn-submit:focus {
  background-color #289E90
  color #ffffff
  font-size 15px
  margin-left -201px
}
.btn-submit:active {
  background-color #289E90
  color #ffffff
  font-size 15px
  margin-left -201px
}
</style>
