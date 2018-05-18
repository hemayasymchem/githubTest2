  <template>
    <div class="rules-container">
      <div class="title">活动规则</div>
      <el-form class="form-container">
        <el-input  type="textarea" placeholder="输入活动规则信息" v-model="rulesDesc" @keyup.native.prevent="show"></el-input><br/>
        <span :style="spanStyle">{{length}}/500字</span><br/>
        <button class="btn" @click="handleClick" :disabled="disabled">提交</button>
      </el-form>
    </div>
  </template>

  <script>
    export default {
      name: 'rulesDetail',
      data() {
        return {
          rulesDesc: '',
          length: 0,
          disabled: false,
          spanStyle: ''
        }
      },
      computed: {

      },
      methods: {
        show() {
          if (this.rulesDesc.trim().length >= 50) {
            this.rulesDesc = this.rulesDesc.trim().slice(0,50)
            this.spanStyle = 'color: red;'
            this.disabled = true
          } else {
            this.disabled = false
            this.spanStyle = ''
          }
          this.length = this.rulesDesc.trim().length

        },
        handleClick() {
          console.log( 'click')
        },

      },
    }
  </script>

  <style lang="scss" >
    * {margin: 0px; padding: 0px;}
    .rules-container {
      width: 100%;
      background: #fff;
      .title {
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-weight: bold;
      }
      .el-form {
        width: 100%;
        position: relative;
        text-align: center;
        .el-textarea {
          width: 80%;
          .el-textarea__inner {
            width: 100%;
            height: 200px;
          }
        }
        span {
          display: inline-block;
          margin-top: 10px;
          position: absolute;
          right: 10%;
        }
        .btn {
          width: 100px;
          height: 40px;
          border-radius: 5px;
          border: none;
          background-color: #409EFF;
          color: #fff;
          margin-top: 30px;
        }


      }

    }
  </style>



