  <template>
    <div class="prize-detail-container">
      <h4 class="title">砍价信息列表</h4>
      <el-form class="from-box">
        <el-form-item>
          <span>时间：</span>
          <el-select placeholder="全部时间" style="margin-left: 13px;"></el-select>
          <span style="margin: 0 20px;">至</span>
          <el-select placeholder="全部时间"></el-select>
        </el-form-item>
        <el-form-item>
          <span>用户ID：</span>
          <el-input type="text"></el-input>
          <span style="margin: 0 10px;">商品名称：</span>
          <el-input type="text"></el-input>
        </el-form-item>
        <el-form-item>
          <span>商品ID：</span>
          <el-input type="text"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">搜索</el-button>
          <el-button type="primary" style="background:#fff; color:#ccc; border:1px solid #ccc;">导出</el-button>
        </el-form-item>
      </el-form>

      <el-table
        :data="tableData"
        border
      >
        <el-table-column prop="" label="序号" align="center"></el-table-column>
        <el-table-column prop="" label="砍价参与时间" align="center"></el-table-column>
        <el-table-column prop="" label="微信用户名" align="center"></el-table-column>
        <el-table-column prop="" label="用户id" align="center"></el-table-column>
        <el-table-column prop="" label="商品id" align="center"></el-table-column>
        <el-table-column prop="" label="商品名称" align="center"></el-table-column>
        <el-table-column prop="" label="已砍价金额" align="center"></el-table-column>
        <el-table-column prop="" label="是否购买" align="center"></el-table-column>
        <el-table-column prop="" label="是否获取优惠劵" align="center"></el-table-column>
      </el-table>

      <el-pagination
        align="right"
        background
        @size-change="changeSize"
        @current-change="changePage"
        :current-page="pagination.pageIndex"
        :page-sizes="pagination.pageSizeOptions"
        :page-size="pagination.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        prev-text="Pre"
        next-text="Next"
        :total="pagination.totalNum">
      </el-pagination>
    </div>
  </template>

  <script>
    export default {
      name: 'prizeDetail',
      data() {
        return {
          pagination: {
            pageIndex: 1,
            pageSizeOptions: [5, 10, 15, 20],
            pageSize: 5,
            totalNum: 100,
          },
        }
      },
      created() {
        //console.log(this.$route.query.id)
        console.log(this.$route.params.id)
      },
      methods: {
        changeSize() {
          console.log("change size")
        },
        changePage() {
          console.log(process.env.BASE_API)
        },
      },
    }
  </script>

  <style lang="scss">
    * {margin: 0px; padding: 0px;}
    .prize-detail-container {
      width: 100%;
      background-color: #fff;
      .title {
        width: 100%;
        height: 40px;
        line-height: 40px;
        padding-left: 20px;
      }
      .el-form {
        margin-top: 40px;
        padding-left: 40px;
        .el-form-item {
          width: 100%;
          .el-input {
            width: 300px;
          }
          .el-button {
            width: 100px;
          }
        }
      }
      .el-table {
        margin-left: 10px;
        width: 95%;
      }
      .el-pagination {
        margin-top: 10px;
      }
    }
  </style>
