import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/ProductOrder',
      name: 'ProductOrder',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ProductOrderView.vue')
    },
    {
      path: '/Product',
      name: 'Product',
      component: () => import('../views/ProductView.vue')
    },
    {
      path: '/DonateList',
      name: 'DonateList',
      component: () => import('../views/DonateListView.vue')
    },
    {
      path: '/DonateExpense',
      name: 'DonateExpense',
      component: () => import('../views/DonateExpenseView.vue')
    },
  ]
})

export default router
