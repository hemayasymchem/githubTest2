  <template>
    <div class="goodsDetail-container shadow-box">
      <div class="box-title">商品详情页</div>
      <div class="box-content">
        <el-form >
          <h4>基本活动信息:</h4>
          <el-form-item>
             <span>活动名称：{{basicInfo.activityName}}</span>
             <div>
               <span>活动开始时间:</span><span style="margin-left:10px;">{{basicInfo.startDate}}</span>
               <span style="margin-left: 20px;">活动结束时间:</span><span style="margin-left:10px;">{{basicInfo.endDate}}</span>
             </div>
          </el-form-item>

          <h4 style="margin-top:10px;">新增商品数据：</h4>
          <el-form-item>
            <span>输入商品ID号：</span>
            <el-input type="text" style="margin-left: 28px;" v-model="newGoodsData.ID"></el-input>
          </el-form-item>
          <el-form-item>
            <span>商品每日库存数量：</span>
            <el-input type="text" v-model="newGoodsData.stockNum"></el-input>
          </el-form-item>
          <el-form-item>
            <span>勾选商品推广时间</span> <el-checkbox v-model="selectedAll" @change="selectAll">全选</el-checkbox>
            <el-checkbox-group v-model="newGoodsData.timeList" style="width: 80%;">
              <el-checkbox v-for="(item,index) in checkboxGroup" :label="item" :key="index" name="type"
              @change="checkboxClick"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item>
            <span>设置该奖品砍价限制：</span>
            <el-radio-group v-model="radioDisabled">
              <el-radio :label="true">不设置</el-radio>
              <el-radio :label="false">设置</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item>
            <span :class="{disabled: radioDisabled}">设置最多可砍价格：</span>
            <el-input type="text" :disabled="radioDisabled"
                      v-model="newGoodsData.bargainPrice" @change="change(value)" ></el-input>
          </el-form-item>
          <el-form-item>
            <span :class="{disabled: radioDisabled}">设置可购买价格：</span>
            <el-input type="text" style="margin-left: 14px;" :disabled="radioDisabled"
                      v-model="newGoodsData.buyPrice" ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" style="width:150px;height:40px;margin-left:30%;" @click.native.prevent="submit">提交</el-button>
            <span>备注：由于砍价会预告第二天商品，因此配置数据需要一次性配置两天</span>
          </el-form-item>

        </el-form>

        <div class="goodsInfo">
          <h3>商品信息列表品</h3>
          <el-form >
            <el-form-item >
              <span>活动时间：
                <!--<el-select placeholder="全部时间">-->

                <!--</el-select>-->
              </span>
              <span style="margin-left: 40px;">商品ID号：
                <el-input type="text"></el-input>
              </span>
            </el-form-item>
            <el-form-item>
              <span>商品名称：</span>
              <el-input type="text" style="width: 500px;"></el-input>
              <el-button type="primary" style="width:100px; height:40px; margin-left:40px;">搜索</el-button>
              <el-button type="primary" style="width:100px; height:40px; background:#ccc;">导出</el-button>
            </el-form-item>
          </el-form>

          <el-table :data="tableData" style="width:100%; margin-top:50px;" border>
            <el-table-column prop="" label="商品外展时间" align="center">
            </el-table-column>
            <el-table-column prop="id" label="商品ID号" align="center"></el-table-column>
            <el-table-column prop="id" label="商品名称" align="center"></el-table-column>
            <el-table-column prop="id" label="商品设定数量" align="center"></el-table-column>
            <el-table-column prop="id" label="剩余商品数量" align="center"></el-table-column>
            <el-table-column prop="id" label="可砍最高价格" align="center"></el-table-column>
            <el-table-column prop="id" label="可购买价格" align="center"></el-table-column>
            <el-table-column prop="id" label="创建时间" align="center"></el-table-column>
            <el-table-column prop="id" label="创建人" align="center"></el-table-column>
            <el-table-column  label="操作" align="center">
              <template slot-scope="scope">
                <span>编辑</span>
                <span>删除</span>
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
    </div>
  </template>

  <script>
    export default {
      name: 'goodsDetail',
      data() {
        return {
          basicInfo: {
            activityName: '我的活动',
            startDate: '2018-05-01 start',
            endDate: '2018-05-02 end'
          },
          newGoodsData: {
            ID: '',
            stockNum: '',
            timeList: [],
            bargainPrice: '',
            buyPrice: '',
          },
          checkboxGroup: [ //勾选推广时间的复选框选项集合
            '2018.04.23','2018.04.24','2018.04.25',
            '2018.04.26','2018.04.27','2018.04.28',
            '2018.04.29','2018.04.30','2018.04.22',
          ],
          selectedAll: false,
          radioDisabled: true,
          tableData: [

          ],
          pagination: {
            pageIndex: 1,
            pageSizeOptions: [5, 10, 15, 20],
            pageSize: 5,
            totalNum: 100,
          },

        }
      },
      created() {
        console.log(this.$route.query.id)
      },
      methods: {
        selectAll() { //每次点击 显示的和实际相反 这难道是一个BUG
          if (this.selectedAll) {
            this.newGoodsData.timeList = this.checkboxGroup
          } else {
            this.newGoodsData.timeList = []
          }
        },
        checkboxClick() { //复选框单独选择事件
          if (this.newGoodsData.timeList.length === this.checkboxGroup.length) {
            this.selectedAll = true
          } else {
            this.selectedAll = false
          }
        },
        change(value) {
          console.log(value)
        },
        submit() {
          console.log(this.newGoodsData)
        },
        changeSize() {
          console.log("change size")
        },
        changePage() {
          console.log(process.env.BASE_API)
        },


      },
    }
  </script>

  <style lang="scss" scoped>
    * {margin: 0px; padding: 0px;}
    .goodsDetail-container {
      width: 100%;
      background-color: #fff;
      .box-title { text-align: center;}
      .box-content {
        .el-form {
          .el-form-item {
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 5px;
            color: #454545;
            margin-top: 10px;
            .el-input {
              width: 300px;
            }
            .el-checkbox-group {
              margin-left: 155px;
            }
          }
        }
        .goodsInfo {
          .el-pagination {
            margin-top: 20px;
            .el-pager {
              .number {
                margin: 0px;
              }
            }
          }
        }

      }
      .disabled {
        color: #ccc;
      }
    }
  </style>
