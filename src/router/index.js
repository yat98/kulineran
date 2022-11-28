import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FoodView from '../views/FoodView.vue'
import FoodDetailView from '../views/FoodDetailView.vue'
import CartView from '../views/CartView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/foods',
      name: 'foods',
      component: FoodView
    },
    {
      path: '/foods/:id',
      name: 'foodDetail',
      component: FoodDetailView
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    },
  ]
})

export default router
