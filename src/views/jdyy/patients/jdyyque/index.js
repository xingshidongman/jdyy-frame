import JdyyQue from './jdyyQue.vue'
import JdyyQueSearch from './jdyyQueSearch.vue'
import jdyyQueExport from './jdyyQueExport.vue'
import JdyyQueEdit from './jdyyQueEdit.vue'
import JdyyQueView from './JdyyQueView.vue'

const components = [
  JdyyQue,
  JdyyQueSearch,
  JdyyQueView,
  JdyyQueEdit,
  jdyyQueExport
]

const main = {
  install(Vue) {
    components.map((component) => {
      Vue.component(component.name, component)
    })
  }
}

export default main
