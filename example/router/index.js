/*
 * @Description:路由定义
 * @Author: panrui
 * @Date: 2021-05-21 18:02:50
 * @LastEditTime: 2023-06-27 13:36:28
 * @LastEditors: panrui
 * 不忘初心,不负梦想
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    // redirect: "/start",
    children: [
      {
        path: "start",
        name: "Start",
        component: () => import("../views/Start.vue"),
      },
      {
        path: "changelog",
        name: "ChangeLog",
        component: () => import("../views/ChangeLog.vue"),
      },
      {
        path: "cityPicker",
        name: "CityPicker",
        component: () => import("../views/CityPicker.vue"),
      },
      {
        path: "circleProgress",
        name: "CircleProgress",
        component: () => import("../views/CircleProgress.vue"),
      },
      {
        path: "sign",
        name: "Sign",
        component: () => import("../views/Sign.vue"),
      },
      // {
      //   path: "country",
      //   name: "Country",
      //   component: () => import("../views/Country.vue"),
      // },
      // {
      //   path: "select",
      //   name: "Select",
      //   component: () => import("../views/Select.vue"),
      // },
      // {
      //   path: "selectYear",
      //   name: "SelectYear",
      //   component: () => import("../views/SelectYear.vue"),
      // },
      // {
      //   path: "wangeditor",
      //   name: "Wangeditor",
      //   component: () => import("../views/Wangeditor.vue"),
      // },
      // {
      //   path: "dateSelect",
      //   name: "DateSelect",
      //   component: () => import("../views/DateSelect.vue"),
      // },
      // {
      //   path: "upload",
      //   name: "Upload",
      //   component: () => import("../views/Upload.vue"),
      // },
      // {
      //   path: "selectcol",
      //   name: "SelectCol",
      //   component: () => import("../views/SelectCol.vue"),
      // },
      // {
      //   path: "preview",
      //   name: "Preview",
      //   component: () => import("../views/Preview.vue"),
      // },
      // {
      //   path: "twitter",
      //   name: "twitter",
      //   component: () => import("../views/Twitter.vue"),
      // },
    ],
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/About.vue"),
  },
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
