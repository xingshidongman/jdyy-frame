import JdyyPos from './jdyyPos.vue'
import JdyyPosSearch from './JdyyPosSearch.vue'
import JdyyInv from './jdyyInv.vue'
const components = [
  JdyyPos,
  JdyyPosSearch,
  JdyyInv
]

const main = {
  install(Vue) {
    components.map((component) => {
      Vue.component(component.name, component)
    })
  }
}

export default main
