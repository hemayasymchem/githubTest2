<template>
  <div class="return-process-container">
    <el-tree
     :data="data"
     :props="defaultProps"
     accordion
     @node-click="handleNodeClick"
     :highlight-current="true"
    ></el-tree>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        data: [
          {
            label: '一级1',
            children: [
              {
                label: '二级1-1',
                children: [
                  {
                    label: '三级1-1-1',
                    path: 'index1',
                  },
                  {
                    label: '三级1-1-2',
                    path: 'index2',
                  },
                  {
                    label: '三级1-1-3'
                  }
                ]
              },
              {
                label: '二级1-2',
                children: [
                  {
                    label: '三级1-2-1'
                  },
                  {
                    label: '三级1-2-2'
                  }

                ]
              }
            ]
          }
        ],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
      }
    },
    methods: {
      handleNodeClick(data) {
        if(data.path) {
          console.log(data.path)
        }
      }
    },
  }
</script>
