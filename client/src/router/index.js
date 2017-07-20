import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Signin from '@/components/Signin'
import Article from '@/components/Article'
// import Dashboard from '@components/Dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        // {
        //   path: 'dashboard/',
        //   name: 'dashboard',
        //   component: Dashboard
        // },
        {
          path: 'article/:id',
          name: 'home',
          component: Article
        },
        {
          path: '',
          name: 'signin',
          component: Signin
        }
      ]
    }
  ]
})
