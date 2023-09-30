import { createRouter, createWebHistory ,createWebHashHistory } from 'vue-router'
import Film from '../views/Film.vue'
import Cinema from '../views/Cinema.vue'
import Center from '../views/Center.vue'
import Nowplaying from '../views/Films/Nowplaying.vue'
import Comingsoon from '../views/Films/Comingsoon.vue'
import Detail from '../views/Detail.vue'
import City from '@/views/City.vue'
import Search from '@/views/Search.vue'

const routes = [
  {
    path: '/films',
    component:Film,
    name: 'film',
    children:[
      {
        path:'/films/nowplaying',
        component:Nowplaying
      },
      {
        path:'/films/comingsoon',
        component:Comingsoon
      },
      {
        path:'/films',
        redirect:'/films/nowplaying',
      },
    ]
  },{
    path: '/city',
    component:City
  },
  {
    path: '/cinemas',
    component:Cinema,
  },
  {
    path:'/cinemas/search',
    component:Search
},
  {
    path: '/centers',
    component:Center
  },
  {
    path: '/detail/:id',
    component:Detail
  },
  {
    path:'/',
    redirect:'/films'
  },
  {
    path:'/:hsj',
    redirect:{
      name:'film'
    }
  }
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView 
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
// router.beforeEach((to,from,next)=>{

// })
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL), //history模式
  history: createWebHashHistory(process.env.BASE_URL), //hash模式
  routes
})
//router.beforeEach
export default router
