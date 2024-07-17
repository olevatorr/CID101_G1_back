import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
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
    {
      path: '/Event',
      name: 'Event',
      component: () => import('../views/EventView.vue')
    },
    {
      path: '/Feedback',
      name: 'Feedback',
      component: () => import('../views/FeedbackView.vue')
    },
    {
      path: '/FeedbackReport',
      name: 'FeedbackReport',
      component: () => import('../views/FeedbackReportView.vue')
    },
    {
      path: '/NewsList',
      name: 'NewsList',
      component: () => import('../views/NewsListView.vue')
    },
    {
      path: '/Knowledge',
      name: 'Knowledge',
      component: () => import('../views/KnowledgeView.vue')
    },
    {
      path: '/Member',
      name: 'Member',
      component: () => import('../views/MemberView.vue')
    },
    {
      path: '/Admin',
      name: 'Admin',
      component: () => import('../views/AdminView.vue')
    },
    {
      path: '/Debris',
      name: 'Debris',
      component: () => import('../views/DebrisView.vue')
    },
    {
      path: '/About',
      name: 'About',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/Robot',
      name: 'Robot',
      component: () => import('../views/RobotView.vue')
    },
  ]
})

export default router
