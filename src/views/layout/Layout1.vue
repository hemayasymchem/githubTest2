<template>
  <div class="layout-container">
    <div class="box-container">
      <div class="header">
        <div class="header-title">
          当前<span style="color:greenyellow">正式版</span>
          <span>修改密码</span>
          <span>退出登录</span>
        </div>
        <div class="menu1-container">
          <div class="menu1" v-for="(item,index) in menu1" v-if="!item.meta.hidden" :key="item.name" :class="{selected: item.selected}"
          @mouseover="menu1Over($event,index)" @mouseout="menu1Out($event,index)">
          {{item.name}}
          <ul class="menu2" :class="{show: item.show}">
            <li v-for="(subItem,index) in item.children" :key="index" @click="menu2Click(subItem.children,item)">{{subItem.name}}</li>
          </ul>
          </div>
        </div>
      </div>
      <div class="content">
        <breadcrumb></breadcrumb>
        <transition name="el-zoom-in-center">
          <router-view></router-view>
        </transition>
      </div>
      <div class="aside">
        <div class="menu3" v-for="(item,index) in menu3" :class="{selected: item.selected}"
             :key="index" @click="Menu3Click(item)" @mouseenter="menu3Toggle(item)" @mouseleave="menu3Toggle(item)">{{item.name}}
          <ul v-if="item.children" class="menu4" :class="{show: item.show}">
            <li v-for="subItem in item.children" :key="subItem.name" @click="menu4Click(item,subItem)">{{subItem.name}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import breadcrumb from '@/components/breadCrumb.vue'

  export default {
    name: 'Layout',
    data() {
      return {
        menu1: [],
        menu3: [],
        menu4Show: false,
        menu4: '',

      }
    },
    created() {
      this.menu1 = this.$router.options.routes
      this.menu1.forEach( item => { //数据暂时默认是这个
        if (item.selected) {
          this.menu3 = item.children[0].children
        }
      })
    },
    methods: {
      menu1Over(e,index) {
        this.menu1[index].show = true
      },
      menu1Out(e,index) {
        this.menu1[index].show = false
      },
      menu2Click(data,item) {
        console.log(data)
        this.menu3 = data
        this.menu1Selected()
        item.selected = true
      },
      Menu3Click(item) {
        this.menu3.forEach(item => {
          item.selected = false
        })
        item.selected = true
        if (item.children) {
          return false
        } else {
          //this.$router.push({path: item.rou})
          console.log("没有子路由，直接跳转")
        }
      },
      menu3Toggle(item) {
        if (typeof item.show == 'boolean') {
          item.show = !item.show
        }
      },
      menu4Click(item,subItem) {
        this.menu3.forEach(item => {
          item.selected = false
        })
        item.selected = true
        this.$router.push({path: subItem.rou})
      },
      changeRoute() {
        this.menu4Show = false
        this.$router.push('/menu1/menu2-1/menu3/menu4')
      },
      //封装的清除一级菜单选中的状态
      menu1Selected() {
        this.$router.options.routes.forEach(item => {
          item.selected = false
        })
      }
    },
    components: {
      breadcrumb,
    },
  }
</script>

<style lang="scss" scoped>
  * {
    margin: 0px; padding: 0px;
  }
  .layout-container {
    width: 100%;
    height: 100%;
    position: relative;
    .box-container {
      margin-top: 10px;
      width: 100%;
      min-width: 800px;
      height: 800px;
      box-shadow: 2px 2px 2px 2px gray;
      .header {
        width: 100%;
        height: 60px;
        padding-left: 200px;
        background:#143f6d;
        border-bottom: 1px solid #ccc;
        .header-title {
          font-size: 12px;
          color: #fff;
          width: 100%;
          height: 30px;
          line-height: 30px;
          text-align: right;
          padding-right: 20px;
          span {
            margin-right: 10px;
          }
        }
        .menu1-container {
          height: 30px;
          width: 100%;
          display: flex;
          .menu1 {
            flex: 1;
            height: 30px;
            line-height:30px;
            position: relative;
            font-size: 14px;
            color: #fff;
            text-align: center;
            .menu2 {
              background: #1e6bbd;
              z-index: 4;
              position: absolute;
              left: 0px;
              top: 30px;
              width: 100%;
              display: none;
            }
            .menu2> li:hover {
              background: darkblue;
            }
            .show {display: block;}
          }
          .selected {
            background: red;
          }
          .menu1:hover {
            background: skyblue;
          }
        }

      }
      .content {
        width: 100%;
        height: 740px;
        overflow-y: auto;
        padding-left: 200px;
        background: #fff;
        position: relative;
      }
      .aside {
        width: 200px;
        height:740px;
        background: rgba(0, 0, 0, 0.9);
        position: absolute;
        left:0px;
        top: 60px;
        .menu3 {
          width: 100%;
          height: 60px;
          color: #fff;
          line-height: 60px;
          text-align: center;
          position: relative;
          .menu4 {
            position: absolute;
            color: #fff;
            background: rgba(0, 0, 0, 0.9);
            width: 150px;
            left: 100%;
            top: 0px;
            display: none;
            li:hover {
              background-color: saddlebrown;
            }
          }
          .show {display: block;}
        }
        .menu3:hover { background-color:saddlebrown; }
        .selected { background-color:saddlebrown; }
      }
    }
  }
</style>
