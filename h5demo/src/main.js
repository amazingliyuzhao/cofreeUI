// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
// import CUI from '../uiComponents/index'
// import CUI from '../../uiComponents/index'
// Vue.use(CUI)

import CUI from '../../uiComponents/index'
import '../../uiComponents/theme-default/css/index.css'
Vue.use(CUI)

function sr(){
  document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.2 + 'px';
}
sr();
window.addEventListener('resize',sr);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


