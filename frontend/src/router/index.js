import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import {Auth} from "@/firebase";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/registro",
    name: "SignUp",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Register.vue"),
  },
  {
    path: "/ingreso",
    name: "SignIn",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
  {
    path: "/productos",
    name: "Products",
    component: () =>
      import(/* webpackChunkName: "products" */ "../views/Products.vue"),
    meta: {
      login: true
    }
  },
  {
    path: "/apod",
    name: "Apod",
    component: () =>
      import(/* webpackChunkName: "products" */ "../views/Apod.vue"),
    meta: {
      login: true
    }
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let user = Auth.currentUser;
  let authRequired = to.matched.some((route) => route.meta.login);

  if (!user && authRequired) {
    next("/ingreso");
  } else {
    next();
  }
});

export default router
