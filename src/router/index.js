import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import About from '../views/About.vue'
// import DunBuild from '../views/DunBuild.vue'
// import ChangeLog from '../views/ChangeLog.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    //component: About
  },
  {
    path: '/dunbuild',
    name: 'DungeonBuilder',
    component: () => import(/* webpackChunkName: "dunbuild" */ '../views/DunBuild.vue')
    //component: DunBuild
  },
  {
    path: '/changelog',
    name: 'ChangeLog',
    component: () => import(/* webpackChunkName: "changelog" */ '../views/ChangeLog.vue')
    //component: ChangeLog
  },
  // {
  //   path: '/helloworld',
  //   name: 'HelloWorld',
  //   component: () => import(/* webpackChunkName: "helloworld" */ '../components/HelloWorld.vue')
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
