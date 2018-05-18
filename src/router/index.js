import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Layout from '@/views/layout/Layout1.vue'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Layout,
      meta: {title: 'home', hidden: false},
      selected: false, //控制一级路由 hover的改变
      show: false, // 控制二级menu 是否显示
    },
    {
      path: '/login',
      name: '登录页',
      component: () => import('@/views/login/index'),
      meta: {title: 'login', hidden: true},
      selected: false,
      show: false,
    },
    {
      path: '/supply',
      name: '供应链系统',
      component: Layout,
      meta: {title: 'supply', hidden: false},
      selected: true,
      show: false,
      children: [
        {
          path: 'sStep2-1', name: '二级菜单1',component: {template: `<router-view></router-view>`},
          children: [
            {
              path: 'sStep3-1', name: '砍价后台管理', selected: false,
              component: {template: `<router-view></router-view>`},
              children: [
                {
                  path: 'barginManager', name: '砍价活动管理',
                  component: () => import('@/views/bargain/barginManager.vue'),
                  rou: '/supply/sStep2-1/sStep3-1/barginManager'
                },
                {
                  path: 'goodsDetail', name: '商品详情页',
                  component: () => import('@/views/bargain/goodsDetail.vue'),
                  rou: '/supply/sStep2-1/sStep3-1/goodsDetail'
                },
                {
                  path: 'rulesDetail', name: '游戏规则页',
                  component: () => import('@/views/bargain/Rules.vue'),
                  rou: '/supply/sStep2-1/sStep3-1/rulesDetail'
                },
                {
                  path: 'prizeDetail', name: '砍价中奖明细',
                  component: () => import('@/views/bargain/prizeDetail.vue'),
                  rou: '/supply/sStep2-1/sStep3-1/prizeDetail'
                },
                {
                  path: 'export', name: '导出测试页',
                  component: () => import('@/views/bargain/export.vue'),
                  rou: '/supply/sStep2-1/sStep3-1/export'
                },
              ],
              show: false,
            } ,
            {path: 'sStep3-2', name: '三级菜单2', selected: false,} ,
            {path: 'sStep3-3', name: '三级菜单3', selected: false,} ,
            {
              path: 'sStep3-4', name: '三级菜单4', selected: false,
              component: {template: `<router-view></router-view>`},
              children: [
                {
                  path: 'sStep4-1', name: '四级菜单1',
                  component: () => import('@/views/order/order-process/index'),
                  rou: '/supply/sStep2-1/sStep3-4/sStep4-1'
                },
                {path: 'sStep4-2', name: '四级菜单2', },
                {path: 'sStep4-3', name: '四级菜单3', },
                {path: 'sStep4-4', name: '四级菜单4', },
              ],
              show: false,
            } ,
          ],
        },
        { path: 'sStep2-2', name: '二级菜单2'},
        { path: 'sStep2-3', name: '二级菜单3'},
        { path: 'sStep2-4', name: '二级菜单4'},
      ],
    },
    {
      path: '/operations',
      name: '运营系统',
      component: Layout,
      meta: {title: 'operations', hidden: false},
      selected: false,
      show: false,
    },
    {
      path: '/order',
      name: '订单交易系统',
      component: Layout,
      meta: {title: 'order', hidden: false},
      selected: false,
      show: false,
    },
    {
      path: '/storage',
      name: '仓储系统',
      component: Layout,
      meta: {title: 'storage', hidden: false},
      selected: false,
      show: false,
    },
    {
      path: '/finance',
      name: '财务系统',
      component: Layout,
      meta: {title: 'finance', hidden: false},
      selected: false,
      show: false,
    },
    {
      path: '/system',
      name: '系统管理',
      component: Layout,
      meta: {title: 'system', hidden: false},
      selected: false,
      show: false,
    },
    // {
    //   path: '/order',
    //   component: Layout,
    //   redirect: '/order/order-process',
    //   name: 'OrderManagement',
    //   show: false,
    //   meta: { title: 'Order Management', icon: 'order' },
    //   children: [
    //     {
    //       path: 'order-process',
    //       name: 'OrderProcess',
    //       component: () => import('@/views/order/order-process/index'),
    //       meta: { title: 'Order Process', icon: '' }
    //     },
    //     {
    //       path: 'order-process-print',
    //       name: 'OrderProcessPrint',
    //       component: () => import('@/views/order/order-process/index'),
    //       meta: { title: 'Order Process Print', icon: ''}
    //     },
    //     {
    //       path: 'return-process',
    //       name: 'ReturnProcess',
    //       component: () => import('@/views/order/return-process/index'),
    //       meta: { title: 'Return Process', icon: '' }
    //     },
    //     {
    //       path: 'order-fsm',
    //       name: 'orderfsm',
    //       component: {template:`<router-view></router-view>`},
    //       meta: { title: 'Return Test', icon: '' },
    //       children:[
    //         { path:"test1",
    //           name: "test1",
    //           component: () => import('@/views/order/order-process/index'),
    //           meta: {title: 'test1'}
    //         },
    //         { path:"test2",
    //           name: "test2",
    //           component: () => import('@/views/order/order-process/index'),
    //           meta: {title: 'test2'}
    //         },
    //         { path:"test3",
    //           name: "test3",
    //           component: () => import('@/views/order/order-process/index'),
    //           meta: {title: 'test3'}
    //         },
    //
    //       ],
    //
    //     }
    //   ]
    // },
    // {
    //   path: '/feng',
    //   name: 'feng',
    //   component: Layout,
    //   meta: {title: 'thisisfeng'},
    //   show: false,
    //   children: [
    //     {
    //       path: 'item',
    //       name: 'fengitem',
    //       meta: {title: 'fengitem'}
    //     }
    //   ]
    // },
    // {
    //   path: '/menu1',
    //   name: 'menu1',
    //   show: false,
    //   component: Layout,
    //   children: [
    //     {
    //       path: 'menu2-1',
    //       name: '2-1',
    //       component: {template:`<router-view></router-view>`},
    //       children: [
    //         {
    //           path: 'menu3',
    //           name: 'menu3-1',
    //           component: {template:`<router-view></router-view>`},
    //           children: [
    //             {
    //               path: 'menu4',
    //               name: 'menu4-1',
    //               component: () => import('@/views/order/order-process/test.vue')
    //             }
    //           ]
    //         },
    //         {
    //           path: 'menu3',
    //           name: 'menu3-2',
    //         },
    //         {
    //           path: 'menu3',
    //           name: 'menu3-3',
    //         },
    //         {
    //           path: 'menu3',
    //           name: 'menu3-4',
    //         },
    //         {
    //           path: 'menu3',
    //           name: 'menu3-5',
    //         },
    //       ]
    //
    //     },
    //     {
    //       path: 'menu2-2',
    //       name: '2-2'
    //     }
    //   ]
    // }

  ]
})
