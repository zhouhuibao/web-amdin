import Vue from 'vue'
import VueRouter from 'vue-router'
import Wrapper from '../views/Wrapper.vue'
// import Home from '../views/Home.vue'
import UserProfile from '../views/UserProfile.vue'
import Stystem from '../views/Stystem.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'wrapper',
    component: Wrapper,
    redirect: '/profile',
    children:[
      {
        path: 'profile',
        component: UserProfile,
      },
      {
        path: 'stystem',
        component: Stystem,
      },
      {
        path:'about',
        component: About,
      }
    ]
  },
  {
    path:'/login',
    name: 'login',
    component: Login,
  }
]

const router = new VueRouter({
  routes
})

export default router
