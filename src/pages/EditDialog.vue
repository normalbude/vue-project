<template>
  <el-dialog
      title="编辑"
      :visible.sync="dialogVisible"
      width="334px"
      :before-close="closeDialog">
    <el-date-picker
        type="date"
        placeholder="日期"
        v-model="item.date"
        style="width: 147px"
        value-format="yyyy-MM-dd">
      clearable>
    </el-date-picker>
    <el-input
        placeholder="姓名"
        v-model="item.name"
        style="width: 147px"
        clearable>
    </el-input>
    <el-input
        placeholder="地址"
        v-model="item.address"
        clearable>
    </el-input>
    <span slot="footer" class="dialog-footer">
    <el-button @click="cancelEdit">取 消</el-button>
    <el-button type="primary" @click="sure">确 定</el-button>
  </span>
  </el-dialog>
</template>

<script>
export default {
  name: "EditDialog",
  props:['item'],
  data(){
    return{
      dialogVisible:this.item.dialogVisible
    }
  },
  methods:{
    closeDialog(done) {
      this.$emit('closeEditDia',false)
      done()
    },
    cancelEdit(){
      this.$emit('closeEditDia',false)
    },
    sure(){
      this.dialogVisible=false
      const data = {...this.item,dialogVisible:false}
      this.$bus.$emit('backWrite',data)
      this.$emit('closeEditDia',false)
    }
  },
  watch:{
    item:{
      deep:true,
      handler(newValue){
        this.dialogVisible=newValue.dialogVisible
      }
    }
  }
}
</script>

<style scoped>

</style>