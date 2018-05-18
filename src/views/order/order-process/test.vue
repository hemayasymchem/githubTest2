<template>
  <div class='basic-filter shadow-box'>
    <h4 class='box-title'>Basic</h4>
    <div class='box-content'>
      <el-form :inline='true' label-width='100px'>
        <el-form-item label='Name'>
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="Article No." >
          <el-input ></el-input>
        </el-form-item>
        <el-form-item label="Start Time" >
          <el-date-picker
            value-format="yyyy-MM-dd 00:00:00"

            type="date"
            placeholder="Select date and time">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="End Time" >
          <el-date-picker

            value-format="yyyy-MM-dd 23:59:59"
            type="date"
            placeholder="Select date and time">
          </el-date-picker>
        </el-form-item>
        <el-form-item class="btn">
          <el-button type="primary" @click.native.prevent="test">Search</el-button>
          <el-button type="primary" >Clear</el-button>
        </el-form-item>
        <el-form-item>
          <p ref="test">this is test</p>
        </el-form-item>
      </el-form>





    </div>
  </div>
</template>

<script>
  import { saveAs } from 'file-saver'
  import NProgress from 'nprogress'
  import 'nprogress/nprogress.css'

  export default {
    name: 'test',
    data() {
      return {

      }
    },
    methods: {
      test() {
        console.log("start")
        NProgress.start()
        setTimeout( function() {
          NProgress.done()
          console.log("end")
        },2000)
      }

    },

  }

</script>

<style lang='scss' scoped>
   .el-breadcrumb__inner {
     color: red;
   }
</style>
