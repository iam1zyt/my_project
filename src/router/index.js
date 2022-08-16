import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path:'/',
      redirect:'/login',
      component:()=>import('@/Views/login'),
      children:[
        {
          path:'/login',
          name:'login',
          component:()=>import('@/Views/login')
        },
      ]
    },
    {
      path: "/home",
      component: () => import("@/Views/home"),
      redirect:'/home/table1',
      children: [
        {
          path: "table1",
          name: "table1",
          component: () => import("@/Views/Table1"),
        },
        {
          path: "table2",
          name: "table2",
          component: () => import("@/Views/Table2"),
        },
        {
          path: "table3",
          name: "table3",
          component: () => import("@/Views/Table3"),
        },
        {
          path: "charts",
          name: "charts",
          component: () => import("@/Views/charts"),
        },
      ],
    },
  ],
});

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
