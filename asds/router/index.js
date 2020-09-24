import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../../examples/router/node_modules/@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
