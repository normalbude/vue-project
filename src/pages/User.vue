<template>
  <div class="container">
    <div class="function">
      <el-button @click="refresh">刷新</el-button>
      <!--      <el-button type="success" @click="search">搜索</el-button>-->
    </div>
    <div class="table">
      <el-table
          :data="showTable"
          style="width: 100%"

          :highlight-current-row="true">
        <el-table-column
            label="日期"
            width="280">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column
            label="姓名"
            width="280">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p>姓名: {{ scope.row.name }}</p>
              <p>住址: {{ scope.row.address }}</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.name }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑
            </el-button>
            <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="block">
      <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="selectPageSizes"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>

export default {
  name: 'User',
  inject: ['reload'],
  data() {
    return {
      dialogVisible: false,
      currentPage: 1,
      pageSize: 10,
      selectPageSizes: [10, 20, 30, 40],
      tableData: [{
        date: '2016-05-03',
        name: '张三',
        address: '陕西省显示鄠邑区 1516 弄'
      }, {
        date: '2016-05-02',
        name: '张三',
        address: '陕西省显示鄠邑区 1518 弄'
      }, {
        date: '2016-05-04',
        name: '张三',
        address: '陕西省显示鄠邑区 1517 弄'
      }, {
        date: '2016-05-01',
        name: '张三',
        address: '陕西省显示鄠邑区 1519 弄'
      }]
    }
  },
  methods: {
    refresh() {
      this.reload()
      console.log('刷新页面')
    },

    handleEdit(){

    },
    handleDelete(){

    },
    //分页
    handleSizeChange(val) {
      this.pageSize = val
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.currentPage = val
      console.log(`当前页: ${val}`);
    }
  },
  computed: {
    //分页,根据查询的结果分页
    total() {
      return this.searchResult.length
    },
    showTable() {
      let rowFirst = (this.currentPage - 1) * 10
      let rowLast = this.currentPage * this.pageSize
      return this.searchResult.slice(rowFirst, rowLast)
    }
  },
  mounted() {

  }
}
</script>
<style scoped>
.container {
  position: relative;
}

.table {
  height: 410px;
  overflow-y: scroll;
}

::-webkit-scrollbar
{
  width: 0;
  height: 0;
  background-color: #F5F5F5;
}

.container .function {
  display: flex;
  justify-content: space-between;
}
</style>
