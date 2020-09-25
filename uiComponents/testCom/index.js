import TestCom from './testCom.vue'

TestCom.install = function(Vue) {
  Vue.component(TestCom.name, TestCom)
}

export default TestCom