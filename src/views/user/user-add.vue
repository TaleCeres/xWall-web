<template>
  <div class='user-container'>
    <el-form ref="ruleForm" :model="ruleForm" :rules="rules" status-icon label-width="200px" class="user-ruleForm">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input v-model="ruleForm.pass" type='password' autocomplete='off' placeholder='密码最小长度8位 字母+数字'></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input v-model="ruleForm.checkPass" type='password' autocomplete='off'></el-input>
      </el-form-item>
      <el-form-item label="用户权限" prop="authority">
        <el-select v-model="ruleForm.authority" placeholder="请选择用户权限">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button class="btn-create" @click="submitForm('ruleForm')">创建用户</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'UserAdd',
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        name: '',
        pass: '',
        checkPass: '',
        authority: ''
      },
      rules: {
        name: [{
          required: true,
          message: '请输入活动名称',
          trigger: 'blur'
        }],
        pass: [{
          required: true,
          validator: validatePass,
          trigger: 'blur'
        }],
        checkPass: [{
          required: true,
          validator: validatePass2,
          trigger: 'blur'
        }],
        authority: [{
          required: true,
          message: '请选择活动区域',
          trigger: 'change'
        }]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // alert('submit!')
          console.log('submit!')
        } else {
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
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
.el-select {
  width 100%
}
.btn-create {
  background-color #289E90
  color #ffffff
  font-size 15px
  margin-left -201px
}
.btn-create:hover,
.btn-create:active,
.btn-create:focus {
  background-color #289E00
  color #ffffff
  font-size 18px
  margin-left -201px
}
.btn-create:active {
  background-color #289E00
  color #ffffff
  font-size 18px
  margin-left -201px
}
</style>
