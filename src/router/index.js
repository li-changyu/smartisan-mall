import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Home from '@/pages/home/home'
import Login from '@/pages/login/login'
import Cart from '@/pages/cart/cart'
import Item from '@/pages/item/item'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home',
      name: 'index',
      component: Index,
      children: [
        {path: 'home', component: Home},
        {path: 'cart', component: Cart},
        {path: 'item/:id', component: Item},
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
