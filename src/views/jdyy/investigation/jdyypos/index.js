import JdyyMan from './jdyyPos.vue'
import JdyyManAdd from './jdyyManAdd.vue'
import JdyyManEdit from './jdyyPosEdit.vue'
import JdyyManSearch from './jdyyManSearch.vue'
import JdyyManView from './jdyyManView.vue'

const components = [
  JdyyMan,
  JdyyManAdd,
  JdyyManEdit,
  JdyyManSearch,
  JdyyManView
]

const main = {
  install(Vue) {
    components.map((component) => {
      Vue.component(component.name, component)
    })
  }
}

export default main
