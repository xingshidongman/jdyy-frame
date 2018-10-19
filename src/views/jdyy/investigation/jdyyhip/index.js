import JdyyHip from './jdyyHip.vue'
import JdyyHipSearch from './jdyyHipSearch.vue'
import JdyyHipEdit from './jdyyHipEdit.vue'
import JdyyHipAdd from './jdyyHipAdd.vue'
import JdyyHipView from './jdyyHipView.vue'
const components = [
  JdyyHip,
  JdyyHipSearch,
  JdyyHipEdit,
  JdyyHipAdd,
  JdyyHipView
]

const main = {
  install(Vue) {
    components.map((component) => {
      Vue.component(component.name, component)
    })
  }
}

export default main
