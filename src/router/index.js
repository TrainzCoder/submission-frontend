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
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/ProductsView.vue')
    },
    {
      path: '/product/:id',
      name: 'product',
      component: () => import('../views/ProductView.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/CartView.vue')
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('../views/CheckoutView.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue')
    },
    {
      path: '/dashboard-admin',
      name: 'dashboardAdmin',
      component: () => import('../views/AdminDashboardView.vue')
    },
    {
      path: '/success',
      name: 'success',
      component: () => import('../views/SuccessView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('../views/NotFoundView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('currentUser')

  if (to.name === 'login' || to.name === 'register') {
    if (isAuthenticated) {
      next({ name: 'home' })
    } else {
      next()
    }
  } else if (to.name === 'dashboardAdmin') {
    const currentUser = JSON.parse(isAuthenticated)
    if (!currentUser && currentUser.role !== 'user') {
      next({ name: 'dashboard' })
    } else {
      next()
    }
  } else if (to.name === 'dashboard') {
    const currentUser = JSON.parse(isAuthenticated)
    if (currentUser && currentUser.role === 'owner') {
      next({ name: 'dashboardAdmin' })
    } else {
      next()
    }
  } else {
    next()
  }
})


export default router
