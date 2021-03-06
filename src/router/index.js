import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'
import SignIn from '../views/SignIn.vue'
import Restaurants from '../views/Restaurants.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/restaurants' 
  },
  {
    path: '/restaurants',
    name: 'restaurants',
    component: Restaurants
  },
  {
    path: '/signin',
    name: 'sign-in',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'sign-up',
    component: () => import('../views/SignUp.vue')
  },
  {
    path: '/restaurants/feeds',
    name: 'restaurants-feeds',
    component: () => import ('../views/RestaurantsFeeds.vue')
  },
  {
    path: '/restaurants/top',
    name: 'restaurants-tops',
    component: () => import ('../views/RestaurantsTop.vue')
  },
  {
    path: '/restaurant/:id',
    name: 'restaurant',
    component: () => import ('../views/Restaurant.vue')
  },
  {
    path: '/restaurants/:id/dashboard',
    name: 'restaurant-dashboard',
    component: () => import ('../views/RestaurantDashboard.vue')
  },
  {
    path: '/users/top',
    name: 'users-top',
    component: () => import ('../views/UsersTop.vue')
  },
  {
    path: '/user/:id',
    name: 'user',
    component: () => import ('../views/User.vue')
  },
  {
    path: '/admin',
    exact: true,
    redirect: '/admin/restaurants' 
  }
  ,{
    path: '/admin/restaurants',
    name: 'admin-restaurants',
    component: () => import ('../views/AdminRestaurants.vue')
  },{
    path: '/admin/restaurants/:id',
    name: 'admin-restaurant',
    component: () => import ('../views/AdminRestaurant.vue')
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  }
]

const router = new VueRouter({
  linkExactActiveClass: 'active',
  routes
})

export default router
