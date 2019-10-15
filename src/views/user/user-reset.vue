<template>
  <div v-loading.fullscreen.lock="loading" class='user-container'>
    <el-form ref="ruleForm" :model="ruleForm" status-icon :rules="rules" label-width="200px" class="user-ruleForm">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="新密码" prop="pass">
        <el-input v-model="ruleForm.pass" type='password' autocomplete='off' placeholder='密码最小长度8位 字母+数字'></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input v-model="ruleForm.checkPass" type='password' autocomplete='off'></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="btn-edit" type="primary" @click="submitForm">修改密码</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import User from '@/models/user'
import { mapGetters } from 'vuex'
export default {
  name: 'UserReset',
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
      loading: false,
      ruleForm: {
        name: this.username,
        pass: '',
        checkPass: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        pass: [
          { required: true, validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { required: true, validator: validatePass2, trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    ...mapGetters([
      'username'
    ])
  },
  mounted() {
    // this.ruleForm.name = this.$store.state.user.username
    this.ruleForm.name = this.username
  },
  methods: {
    updateUser() {
      User.updateUser(this.ruleForm.name, this.ruleForm.pass).then(res => {
        if (res.error) {
          this.$notify({
            title: '失败',
            message: res.error,
            type: 'error'
          })
          this.loading = false
        } else {
          this.$notify({
            title: '成功',
            message: '添加用户成功',
            type: 'success'
          })
          this.loading = true
        }
      })
    },
    submitForm() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          // this.loading = true
          // this.updateUser()
          console.log('valid', valid)
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
.el-select {
  width 100%
}
.btn-edit {
  font-size 15px
  margin-left -201px
}
</style>
