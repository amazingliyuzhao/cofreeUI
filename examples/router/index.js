import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Button from '../docs/button.md'
import navList from '../nav.config.js'


const originalPush = Router.prototype.push

Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)


let routes = []

Object.keys(navList).forEach((header) => {
  routes = routes.concat(navList[header])
})
console.log(routes)

let addComponent = (router) => {
  router.forEach((route) => {
    if (route.items) {
      addComponent(route.items)
      routes = routes.concat(route.items)
    } else {
      route.component = (r) => {
        require.ensure([], ()=>{
          return (r(require(`../docs/${route.name}.md`)))
        })
      }
    }
  })
}
addComponent(routes)
console.log('-----')
console.log(routes)

export default new Router({
  routes: routes
})

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld,
//       children:[
//         {
//           path: '/button',
//           name: 'button',
//           component: Button,
//         }
//       ]
//     }
//   ]
// })
