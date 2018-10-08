import JdyyPos from './jdyyPos.vue'
import JdyyPosSearch from './JdyyPosSearch.vue'

const components = [
  JdyyPos,
  JdyyPosSearch
]

const main = {
  install(Vue) {
    components.map((component) => {
      Vue.component(component.name, component)
    })
  }
}

export default main
