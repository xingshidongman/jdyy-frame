import JdyyPos from './jdyyPos.vue'
import JdyyPosSearch from './JdyyPosSearch.vue'
import JdyyInv2 from './jdyyInv2.vue'
const components = [
  JdyyPos,
  JdyyPosSearch,
  JdyyInv2
]

const main = {
  install(Vue) {
    components.map((component) => {
      Vue.component(component.name, component)
    })
  }
}

export default main
