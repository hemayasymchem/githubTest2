  <template>
    <div class="breadCrumb-container">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="(item,index) in levelList">{{item.name}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </template>

  <script>
    export default {
      name: 'breadCrumb',
      data() {
        return {
          levelList: '',
        }
      },
      watch: {
        $route() {
          this.getBreadcrumb()
        }
      },
      methods: {
        getBreadcrumb() {
          this.levelList = this.$route.matched
        },
      },
    }
  </script>
