import Vue from 'vue';
import VueRouter from 'vue-router';
import Pom from '../views/Pom.vue';
import Pals from '../views/Pals.vue';
import Account from '../views/Account.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Pom',
    component: Pom
  },
  {
    path: '/pals',
    name: 'Pals',
    component: Pals
  },
  {
    path: '/account',
    name: 'Account',
    component: Account
  }
];

const router = new VueRouter({
  routes
});

export default router;
