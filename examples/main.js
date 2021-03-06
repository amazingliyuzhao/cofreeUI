// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import demoBlock from './components/demoBlock/demoBlock.vue'
import CUI from '../uiComponents/index'
import './assets/css/common.css'
import '../uiComponents/theme-default/css/index.css'
Vue.use(CUI)

Vue.config.devtools = true

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.component('demo-block', demoBlock)

Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
