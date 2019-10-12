<template>
  <div class="src-ip">
    <div class="title">源IP</div>
    <div class="table-box">
      <el-table border size="medium" header-row-class-nam="table-title" cell-class-name='table-cell' :data="externalNodes" style="width: 100%">
        <el-table-column label="名称" prop="name" />
        <el-table-column label="源IP" prop="ip" />
        <el-table-column label="掩码" prop="netmask" />
        <el-table-column label="MAC地址" prop="mac" />
        <el-table-column align="center">
          <template slot="header">
            <el-button size="mini" type="success" @click="handleAdd">新增 +
            </el-button>
          </template>
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog v-loading="loading" title="编辑源IP" :visible.sync="dialogVisible">
      <el-form :model="srcIp">
        <el-form-item label="名称" label-width="200">
          <el-input v-model="srcIp.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="源ip" label-width="200">
          <el-input v-model="srcIp.ip" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="掩码" label-width="200">
          <el-input v-model="srcIp.netmask" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="MAC地址" label-width="200">
          <el-input v-model="srcIp.mac" autocomplete="off"></el-input>
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleSave">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import srcIpModel from '@/models/srcIp'
export default {
  name: 'index',
  data() {
    return {
      externalNodes: [],
      srcIp: {},
      dialogVisible: false,
      loading: false
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    async getData() {
      let data = await srcIpModel.getExternalNodes()
      this.externalNodes = data[0].externalNodes
    },
    async handleAdd() {
      console.log('addnew')
      let externalNode = this.externalNodes[0]
      let newSrcIp = {
        sensor: externalNode.sensor,
        sensorIp: externalNode.sensorIp,
        name: '', // 名称
        ip: '', // 源IP
        netmask: '', // MAC地址
        selected: false,
        ipMacBinding: false, // IP/MAC绑定
        mac: '' // MAC地址(未启用mac绑定时, 无效)
      }
      this.srcIp = newSrcIp
      this.dialogVisible = true
    },
    async handleEdit(index, item) {
      this.srcIp = item
      this.dialogVisible = true
    },
    async handleSave() {
      let { srcIp } = this
      if (srcIp.mac !== '' && srcIp.mac !== null && srcIp.mac !== undefined) {
        srcIp.ipMacBinding = true
      }
      this.loading = true
      srcIpModel.setExternalNode(srcIp).then(res => {
        this.getData()
        this.loading = false
        this.dialogVisible = false
      })
    },

  }
}
</script>

<style scoped lang="stylus">
  .table-box {
    padding 50px
    max-width 1300px
  }
</style>
