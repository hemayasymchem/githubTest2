  <template>
    <div class="bargin-manager-container">
      <h3 class="title">砍价活动管理</h3>
      <el-form class="add-bargin-box" :model="form" :rules="formRules" ref="ruleForm">
        <h4>新增砍价活动：</h4>
        <el-form-item style="margin-top: 20px;" prop="activityName">
          <span>输入活动名称：</span>
          <el-input type="text" v-model.trim="form.activityName"></el-input>
          <span>备注：输入该活动名称</span>
        </el-form-item>
        <el-form-item prop="startDate">
          <span>活动开始时间：</span>
          <el-date-picker
            value-format="yyyy-MM-dd 00:00:00"
            type="date"
            placeholder="select date and time"
            v-model.trim="form.startDate"
          ></el-date-picker>
          <span>备注：活动开始时间为00:00</span>
        </el-form-item>
        <el-form-item prop="endDate">
          <span>活动结束时间：</span>
          <el-date-picker
            value-format="yyyy-MM-dd 23:59:59"
            type="date"
            placeholder="select data and time"
            v-model.trim="form.endDate"
          ></el-date-picker>
          <span>备注：结束时间为23：59：59</span>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary" @click.native.prevent="submit"
            :loading="submitLoading"
          >提交</el-button>
        </el-form-item>
      </el-form>

      <div class="bargin-activity-list">
        <h4>砍价活动列表</h4>
        <p>
          <span>活动名称:</span>
          <input type="text">
          <el-button type="primary" @click.native.prevent="search">搜索</el-button>
        </p>
        <el-table
          :data="tableData"
          border
          :default-sort = '{prop: "createdTime", order: "descending"}'
        >
          <el-table-column prop="number" label="序号" align="center"></el-table-column>
          <el-table-column prop="name" label="名称" align="center"></el-table-column>
          <el-table-column prop="createdTime" label="创建时间" align="center" sortable></el-table-column>
          <el-table-column prop="start" label="活动开始时间" align="center"></el-table-column>
          <el-table-column prop="" label="活动结束时间" align="center"></el-table-column>
          <el-table-column prop="" label="创建人" align="center"></el-table-column>
          <el-table-column prop="" label="操作" align="center">
            <template slot-scope="scope" class="operator">
              <span @click="edit" style="color:blue; text-decoration: underline;">编辑</span>
              <span @click="Delete" style="color:blue; text-decoration: underline;">删除</span>
              <span @click="toGoodsDetail" style="color:blue; text-decoration: underline;">商品详情</span>
              <span @click="toRulesDetail" style="color:blue; text-decoration: underline;">活动规则</span>
              <span @click="toBargainMenu" style="color:blue; text-decoration: underline;">砍价名单</span>
            </template>
          </el-table-column>
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
    </div>
  </template>

  <script>
    import { bargainSubmit, bargainSearch } from  '@/api/bargin'
    import axios from 'axios'
    import qs from 'qs'

    export default {
      name: 'barginManager',
      data() {
        return {
          form: {
            activityName: '',
            startDate: '',
            endDate: '',
          },
          form1: '',
          formRules: {
            activityName: [{ required: true, message: '请输入活动名称', trigger: 'blur' }],
            startDate: [{required: true, message: '不能为空', trigger: 'blur'}],
            endDate: [{required: true, message: '不能为空', trigger: 'blur' }]
          },
          submitType: 'add',
          submitLoading: false,
          tableData: [
            {number: '1', name: 'name1', createdTime: '2018-05-01 00:06:03', start:'2018-05-01',},
            {number: '1', name: 'name2', createdTime: '2018-05-02 00:05:03', start:'2018-05-01',},
            {number: '1', name: 'name3', createdTime: '2018-05-02 00:07:03', start:'2018-05-01',},
          ],
          pagination: {
            pageIndex: 1,
            pageSizeOptions: [5, 10, 15, 20],
            pageSize: 5,
            totalNum: 100,
          },
        }
      },
      methods: {
        submit() {
          this.$refs.ruleForm.validate((valid) => {
            if (valid) {
              let a = new Date(this.form.startTime).getTime()
              let b = new Date(this.form.endTime).getTime()
              if (a > b) {
                this.$alert("活动开始时间需要早于活动结束时间", '提示', {
                  confirmButtonText: '确定',
                })
              } else {
                  if (this.submitType === 'add') {
                    console.log(this.form)
                    this.form.activityName = ''
                    this.form.startDate = ''
                    this.form.endDate = ''
                    console.log(this.form)
                  } else {
                    var obj = {
                      name: '小名',
                      age: '16'
                    }
                    console.log(obj)
                    obj.name = '小红'
                    this.submitType = 'add'
                  }
                // bargainSubmit(this.form).then( data => {
                //   console.log(data)
                // }).catch(err => {
                //   alert('cuowu')
                // })
              }

            } else {
              this.$alert("请将文本补充完整", '提示', {
                confirmButtonText: '确定',
              })
            }
          })
        },
        search() {
          // bargainSearch({ pageNo: 1, pageSize: 2 }).then( data => {
          //   console.log(data)
          // })
        },
        edit() { //操作中的编辑方法
          this.submitType = 'edit'
          this.form = {
            activityName: 'edit',
            startDate: '2018-05-07',
            endDate: '2018-05-09',
          }
        },
        Delete() { //操作中的删除方法
          this.$confirm("是否删除选中商品", '提示' ,{
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warnimg'
          }).then(() => {
            this.$message({
              type: 'success',
              message: '删除成功！'
            })
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            })
          })
        },
        toGoodsDetail() {
          this.$router.push({path: '/supply/sStep2-1/sStep3-1/goodsDetail', query:{id:444}})
        },
        toRulesDetail() {
          this.$router.push({path:'/supply/sStep2-1/sStep3-1/rulesDetail'})
        },
        toBargainMenu() { // 操作中的砍价名单方法
          //this.$router.push({path:'/supply/sStep2-1/sStep3-1/prizeDetail',query:{id:111}})
          this.$router.push({name: '砍价中奖明细', params:{id:222}})
        },
        changeSize(size) {
          console.log(size)
        },
        changePage(page) {
          console.log(page)
        },
      },
    }
  </script>

  <style lang="scss">
    *{margin: 0px; padding: 0px;}
    .bargin-manager-container {
      width: 100%;
      background-color: #fff;
      .title {
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
      }
      .add-bargin-box {
        padding-left: 30px;
        margin-top: 30px;
        .el-form-item {
          width: 100%;
          padding-left: 50px;
          .el-input {
            width: 300px;
          }
          .el-button {
            width: 100px;
            margin-left: 20%;
          }
        }
      }
      .bargin-activity-list {
        padding-left: 30px;
        margin-top: 40px;
        p {
          height: 40px;
          line-height: 40px;
          margin-top: 20px;
          padding-left: 50px;
          font-size: 14px;
          input {
            height: 36px;
            margin-left: 20px;
            width: 300px;
            border-radius: 5px;
            outline: none;
          }
          .el-button {
            margin-left: 20px;
            width: 100px;
          }
        }
        .el-table {
          width: 99%;
          margin-top: 10px;
        }
        .el-pagination {
          margin-top: 20px;
        }
      }
    }
  </style>
