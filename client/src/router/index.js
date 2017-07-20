import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Signin from '@/components/Signin'
import Article from '@/components/Article'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'article/:id',
          name: 'home',
          component: Article
        },
        {
          path: 'signin',
          name: 'signin',
          component: Signin
        }
      ]
    }
  ]
})
