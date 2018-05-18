<template>
  <div class="">
    <h3 class="nav-title" v-show="!isCollapse">My Menu</h3>
    <el-menu mode="vertical" unique-opened :default-active="$route.path" :collapse="isCollapse" background-color="#304156" text-color="#fff" active-text-color="#409EFF" :router="true">
      <sidebar-item :routes="routes"></sidebar-item>
    </el-menu>
  </div>

</template>

<script>

  import SidebarItem from './SidebarItem'

  export default {
    components: { SidebarItem },
    computed: {
      routes() {
        return this.$router.options.routes
      },
      isCollapse() {

      }
    },
    created() {

    }
  }
</script>

<style scoped>
  .nav-title {
    text-align: center;
    color: #FFF;
  }
</style>
