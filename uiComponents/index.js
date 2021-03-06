/*
* @author jike
* Date: 18/7/27
*/
import Vue from 'vue'
import CButton from './button/index'
import CDialog from './dialog/index'
import './theme-default/css/index.css'
const components = [
    CButton,
    CDialog
]

// void function () {
//   function sr() { document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px' }
//   sr()
//   window.addEventListener('resize', sr)
// }()

const install = function(Vue) {
  if(install.installed) return
  components.map(component => Vue.component(component.name, component))
//   Vue.prototype.$message = Message
}


export default {
  install,
  CButton,
  CDialog
}