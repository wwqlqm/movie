import Vue from 'vue'
import Router from 'vue-router'
import moviesRouter from './movies/index'
import mineRouter from './mine/index'
import cinamaRouter from './cinema/index'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
      moviesRouter,
      mineRouter,
      cinamaRouter,
      {
          path:'/*',
          redirect:'/movies'
      }
  ]
})
