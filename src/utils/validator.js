const createValidatePass = () => {
  return (rule, value, callback) => {
    if (value === '') {
      callback(new Error('请输入密码'))
    } else {
      if (this.ruleForm.checkPass !== '') {
        this.$refs.ruleForm.validateField('checkPass')
      }
      callback()
    }
  }
}

const createValidatePass2 = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请再次输入密码'))
  } else if (value !== this.ruleForm.pass) {
    callback(new Error('两次输入密码不一致!'))
  } else {
    callback()
  }
}

module.exports = {
  createValidatePass,
  createValidatePass2
}
