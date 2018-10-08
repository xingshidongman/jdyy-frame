import JdyyStat from './jdyyStat.vue'
import JdyyStatAdd from './jdyyStatAdd.vue'
import JdyyStatEdit from './jdyyStatEdit.vue'
import JdyyStatSearch from './jdyyStatSearch.vue'
import JdyyStatView from './jdyyStatView.vue'

const components = [
  JdyyStat,
  JdyyStatAdd,
  JdyyStatEdit,
  JdyyStatSearch,
  JdyyStatView
]

const main = {
  install(Vue) {
    components.map((component) => {
      Vue.component(component.name, component)
    })
  }
}

export default main
