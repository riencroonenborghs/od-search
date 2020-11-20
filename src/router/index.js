import Vue from 'vue'
import VueRouter from 'vue-router'
import Search from '@/views/Search.vue'
import SavedSearches from '@/views/SavedSearches.vue'
import Blacklist from '@/views/Blacklist.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/popup.html',
    redirect: '/'
  },
  {
    path: '/',
    name: 'Search',
    component: Search
  },
  {
    path: '/saved-searches',
    name: 'SavedSearch',
    component: SavedSearches
  },
  {
    path: '/blacklist',
    name: 'Blacklist',
    component: Blacklist
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
