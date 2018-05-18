<template>
  <div class="login-container">
    <el-form
      autoComplete="on"
      ref="loginForm"
      label-position="left"
      label-width="0px"
      class="login-form"
    >
      <h3 class="title">后台管理</h3>
      <el-form-item prop="userName">
        <el-input name="userName" type="text" v-model.trim="loginForm.userName" autoComplete="on" placeholder="用户名"/>
      </el-form-item>

      <el-form-item prop="passWord">
        <el-input
          name="password"
          :type="pwdType"
          v-model.trim="loginForm.passWord"
          autoComplete="on"
          placeholder="输入密码"
        ></el-input>
        <span class="show-pwd" @click="showPwd"><i class="el-icon-info"></i></span>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" style="width:80%;" :loading="loading" @click.native.prevent="handleLogin">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import { setToken } from '@/utils/auth.js'

  export default {
    name: 'loginPage',
    data() {
      return {
        loginForm: {
          userName: '',
          passWord: '',
        },
        pwdType: 'password',
        loading:  false,
      }
    },
    methods: {
      ...mapActions('user', ['Login']),
      showPwd() {
        this.pwdType = this.pwdType === 'password'?'text':'password'
      },
      handleLogin() {
        // this.loading = true
        // setTimeout( ()=>{
        //   this.loading = false
        //   this.Login(this.loginForm)
        //   this.$router.push({path:'/'})
        // },2000)
        //setToken('f70012a3d9b74242badf4b694aa301e1')
        setToken('f45482d4eadc452ba6a966dde94859d5')
        this.$router.push({path:'/'})
      },

    }
  }
</script>

<style lang="scss" scoped>
  .login-container {
    width: 100%;
    height: 100%;
    position: relative;
    background-color: #2d3a4b;
    .login-form {
      text-align: center;
      width: 500px;
      height: 400px;
      box-shadow: 5px 5px 5px 5px skyblue;
      position: absolute;
      top: 100px;
      left: 50%;
      margin-left: -250px;
      .el-input {
        display: inline-block;
        width: 85%;
      }
      .el-form-item {
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 5px;
        color: #454545;
        position: relative;
        .show-pwd {
          position: absolute;
          display: inline-block;
          padding: 0px 10px;
          margin-left: -30px;
        }

      }
    }
  }
</style>
