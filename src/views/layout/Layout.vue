<template>
  <div class="layout-container">
    <el-container>
      <el-header class="lm-header">
        <div class="menu1" v-for="(item,index) in menu1" :key="item.name" @mouseover="menu1Over($event,index)" @mouseout="menu1Out($event,index)">
          {{item.name}}
          <ul class="menu2" :class="{ show: item.show}">
            <li v-for="subItem in item.children" @click="changeMenu3(subItem.name)">{{subItem.name}}</li>
          </ul>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px" class="aside">
          <div class="menu3" v-for="(item,index) in menu3" >
            {{item.name}}
          </div>
        </el-aside>
        <el-container>
          <el-main class="content">
            <transition name="el-zoom-in-center">
              <router-view></router-view>
            </transition>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import sideMenu from '@/components/sidemenu/index'
  export default {
    name: 'Layout',
    data() {
      return {
        menu1: [],
        menu3: [
          {name:'menu3',children:'menu4'},
          {name:'menu3',children:'menu4'},
          {name:'menu3',children:'menu4'},
          {name:'menu3',children:'menu4'},
          {name:'menu3',children:'menu4'},
        ],
        menu4: [],
        menu4Show: false,
      }
    },
    components: { //注册组件
      sideMenu
    },
    created() {
      this.menu1 = this.$router.options.routes
    },
    methods: {
      menu1Over(e,index) {
        var Dom = e.target
        Dom.style.background = 'red'
        this.menu1[index].show = true
      },
      menu1Out(e,index) {
        var Dom = e.target
        Dom.style.background = '#CCCCCC'
        this.menu1[index].show = false
      },
      changeMenu3(s) {
        console.log(s)
      }
    }
  }
</script>

<style lang="scss" scoped>
  * {
    margin: 0px; padding:0px; box-sizing: border-box;
  }
  .layout-container {
    color: green;
    .el-header {
      background-color: #B3C0D1;
      color: #333;
      text-align: center;
      line-height: 60px;
      width: 100%;
      display: flex;
      padding-left: 200px;
      .menu1 {
        flex: 1;
        background-color: #CCCCCC;
        line-height: 30px;
        height: 30px;
        position: relative;
        .menu2 {
          z-index: 88;
          display: none;
          position: absolute;
          top: 30px;
          left: 0px;
          width: 100%;
          background-color: #CCCCCC;
          li {
            width: 100%;
            text-align: left;
            border: 1px solid #ccc;
          }
        }
        .show {
          display: block;
        }

      }

    }
    .el-footer {
      background-color: #B3C0D1;
      color: #333;
      text-align: center;
      line-height: 60px;
    }

    .el-aside {
      background-color: #D3DCE6;
      color: #333;
      text-align: center;
      height: 600px;
      .menu3 {
        position: relative;
        height: 50px;
        line-height: 50px;
        background-color: #409EFF;
        border: 1px solid #ccc;
      }

    }

    .el-main {
      background-color: #E9EEF3;
      color: #333;
      text-align: center;
    }
  }

</style>

