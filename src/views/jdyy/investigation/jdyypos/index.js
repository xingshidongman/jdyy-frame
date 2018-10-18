import JdyyPos from './jdyyPos.vue'
import JdyyPosSearch from './JdyyPosSearch.vue'
import JdyyHip from './jdyyHip.vue'
import JdyyKnee from './jdyyKnee.vue'
const components = [
  JdyyPos,
  JdyyPosSearch,
  JdyyHip,
  JdyyKnee
]

const main = {
  install(Vue) {
    components.map((component) => {
      Vue.component(component.name, component)
    })
  }
}

export default main
