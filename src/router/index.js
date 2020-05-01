import Vue from "vue";
import VueRouter from "vue-router";
import Pom from "../views/Pom.vue";
import Pals from "../views/Pals.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Pom",
    component: Pom
  },
  {
    path: "/pals",
    name: "Palss",
    component: Pals
  }
];

const router = new VueRouter({
  routes
});

export default router;
