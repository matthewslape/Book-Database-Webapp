import { createRouter, createWebHistory } from "vue-router";
import firebase from "firebase/app";
import Home from "../views/Home.vue";
import Register from "../views/Register.vue";
import SignIn from "../views/SignIn.vue";
import Feed from "../views/Feed.vue";
import About from "../views/About.vue";
import Edit from "../views/Edit.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/sign-in",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/feed",
    name: "Feed",
    component: Feed,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/edit/:id",
    name: "Edit",
    component: Edit,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  if (requiresAuth && !(await firebase.getCurrentUser())) {
    alert("you do not have access!");
    next("/");
  } else {
    next();
  }
});

export default router;
