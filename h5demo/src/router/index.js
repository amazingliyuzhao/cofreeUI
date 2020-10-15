import Vue from 'vue'
import Router from 'vue-router'
import Button from '../pages/button/button.vue'
import HelloWorld from '@/components/HelloWorld'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect:'/button',
      children:[
        {
          path: 'button',
          name: 'button',
          component: Button,
        }
      ]
    }
  ]
})
