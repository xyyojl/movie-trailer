import Vue from 'vue'
import VueRouter from 'vue-router'
const Recommend = () => import('@/views/Recommend')
const List = () => import('@/views/List')
const Movie = () => import('@/views/Movie')
const Rank = () => import('@/views/Rank')
const Category = () => import('@/views/Category')
const Search = () => import('@/views/Search')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    name: 'Recommend',
    component: Recommend
  },
  {
    path: '/list/:type',
    name: 'List',
    component: List
  },
  {
    path: '/movie/:id',
    name: 'Movie',
    component: Movie
  },
  {
    path: '/rank',
    name: 'Rank',
    component: Rank
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
