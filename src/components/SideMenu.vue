<template>
  <div class="">
    <el-menu
      class="el-menu-vertical-demo"
      @select="handleSelect"
      :router="true"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">

    <el-menu-item index="/">
      <i class="el-icon-menu"></i>
      <span slot="title">Home</span>
    </el-menu-item>

    <el-submenu index="order">
      <template slot="title">
        <i class="el-icon-goods"></i>
        <span>管理商品</span>
      </template>

      <el-menu-item index="/order/order-process">新品上架</el-menu-item>
      <el-menu-item index="/order/return-process">管理商品</el-menu-item>
      <el-submenu index="order/order-test">
        <template slot="title">
          <i class="el-icon-goods"></i>
          <span>自己测试</span>
        </template>
        <el-menu-item index="/order/order-fsm/test1">测试1</el-menu-item>
        <el-menu-item index="/order/order-fsm/test2">测试2</el-menu-item>
      </el-submenu>
    </el-submenu>

    <el-submenu index="cate">
      <template slot="title">
        <i class="el-icon-document"></i>
        <span>分类管理</span>
      </template>

      <el-menu-item index="/cate/add">添加分类</el-menu-item>
      <el-menu-item index="/cate/list">管理分类</el-menu-item>
    </el-submenu>

    <el-submenu index="order">
      <template slot="title">
        <i class="el-icon-tickets"></i>
        <span>订单管理</span>
      </template>

      <el-menu-item index="/order/list">管理订单</el-menu-item>
      <el-menu-item index="/order/tui">
        <i class="el-icon-menu"></i>
        <span slot="title">退换货</span>
      </el-menu-item>

    </el-submenu>

    <el-submenu index="Activity">
      <template slot="title">
        <i class="e-icon-tickets"></i>
        <span>活动管理</span>
      </template>

      <el-menu-item index="/activity/recommend">推荐商品</el-menu-item>
      <el-menu-item index="/activity/hui">优惠特卖</el-menu-item>
    </el-submenu>

    <el-menu-item index="/ad">
      <i class="el-icon-menu"></i>
      <span slot="title">广告位管理</span>
    </el-menu-item>

    </el-menu>
  </div>
</template>

<script>
  export default {
    name: 'SideMenu',
    data() {
      return {

      }
    },
    methods: {
      handleSelect(key, keyPath) {
        //console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        //console.log(key, keyPath);
      }
    }
  }
</script>
