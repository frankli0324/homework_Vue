import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/error",
    name: "Error",
    component: () => import("../view/error.vue"),
  },
  {
    path: "/home",
    name: "Home",
    redirect: "/home/student_info",
    component: () => import("../view/home.vue"),
    children: [
      {
        path: "student_info",
        name: "Student_info",
        component: () => import("../components/info_table.vue"),
      },
      {
        path: "expel",
        name: "Expel",
        component: () => import("../components/expel.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
