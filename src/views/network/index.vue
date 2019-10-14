<template>
  <div class="network">
    <div class="title">网络设置</div>
    <div class="table-box">
      <el-table border size="medium"
                header-row-class-name="table-title"
                cell-class-name ='table-cell'
                :data="networkList"
                style="width: 100%">
        <el-table-column
          prop="name"
          label="名称"
          width="180">
        </el-table-column>
        <el-table-column
          prop="ip"
          label="ip地址"
          width="180">
        </el-table-column>
        <el-table-column
          prop="netmask"
          label="掩码">
        </el-table-column>
        <el-table-column
          prop="mac"
          label="MAC地址"
          width="180">
        </el-table-column>
        <el-table-column
          prop="serialNumber"
          label="序列号"
          width="180">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>


    <el-dialog title="编辑" :visible.sync="dialogFormVisible">
      <el-form :model="network">
        <el-form-item label="名称" label-width="200">
          <el-input v-model="network.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="IP地址" label-width="200">
          <el-input v-model="network.ip" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="掩码" label-width="200">
          <el-input v-model="network.netmask" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="MAC地址" label-width="200">
          <el-input v-model="network.mac" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="序列号" label-width="200">
          <el-input v-model="network.serialNumber" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleUpdate">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import networkModel from '@/models/network'
export default {
  name: 'network',
  data() {
    return {
      networkList: [],
      dialogFormVisible: false,
      network: {}
    }
  },
  mounted() {
    this.getNetworkList()
  },
  methods: {
    async getNetworkList() {
      let data = await networkModel.getSensor()
      this.networkList = data
    },
    async handleEdit(index, row) {
      this.network = row
      this.dialogFormVisible = true
    },
    async handleUpdate() {
      let msg = await networkModel.updateSensor()
      this.dialogFormVisible = false
      this.getNetworkList()
    }
  }
}
</script>

<style scoped lang="stylus">
  .table-box{
    padding 50px
    width 1000px
    .table-title{
      font-size 20px
      text-align center
      font-weight bold
      background #f4f4f7
    }
    .table-cell{
      font-size 18px
    }
  }


</style>
