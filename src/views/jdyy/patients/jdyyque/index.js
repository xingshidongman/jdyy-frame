import JdyyQue from './jdyyQue.vue'
import JdyyQueSearch from './jdyyQueSearch.vue'
import JdyyQueView from './jdyyQueView.vue'
import JdyyQueEdit from './jdyyQueEdit.vue'

const components = [
  JdyyQue,
  JdyyQueSearch,
  JdyyQueView,
  JdyyQueEdit
]

const main = {
  install(Vue) {
    components.map((component) => {
      Vue.component(component.name, component)
    })
  }
}

export default main
