import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/pages/home'
import index from '@/pages/index'
import love from '@/pages/love'
import self from '@/pages/self'
import more from '@/pages/more'
import detail from '@/pages/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      component: home,
      children: [
          {
            path: '',
            name: 'index',
            component: index
          },
          {
            path: '/home/love',
            name: 'love',
            component: love
          },
          {
              path: '/home/self',
              name: 'self',
              component: self
          },
          {
              path: '/home/more',
              name: 'more',
              component: more
          }
      ]
    },
      {
          path: '/detail',
          name: 'detail',
          component: detail
      }
  ]
})
