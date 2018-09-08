import KalixHeader from './KalixHeader.vue' // 导入组件
import KalixNavigate from './KalixNavigate.vue' // 导入组件

const kalixNavigate = {
  install(Vue) {
    Vue.component(KalixHeader.name, KalixHeader)
    Vue.component(KalixNavigate.name, KalixNavigate)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(kalixNavigate)
}
export default kalixNavigate
