<template>
  <div class='user-container'>
    <el-table :data='dataList' border :header-cell-style="{'background-color':'#F2F2F2'}">
      <el-table-column prop='username' label='用户名' />
      <el-table-column prop='authority' label='权限' />
      <el-table-column label='操作'>
        <template>
          <div>
            <i class='el-icon-delete'></i>
          </div>
        </template></el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'UserList',
    data() {
      return {
        dataList: [{
          username: 'admin',
          authority: '管理员'
        }, {
          username: 'auditor',
          authority: '用户'
        }]
      }
    },
  }
</script>

<style scoped lang="stylus">
.user-container{
  margin:30px
}
  .el-icon-delete {
    background-color: #6F060b;
    color: #ffffff;
    padding:2px
  }
</style>
