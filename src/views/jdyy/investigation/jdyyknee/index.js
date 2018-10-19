import JdyyKnee from './jdyyKnee.vue'
import JdyyKneeSearch from './jdyyKneeSearch.vue'
import JdyyKneeEdit from './jdyyKneeEdit.vue'
import JdyyKneeAdd from './jdyyKneeAdd.vue'
import JdyyKneeView from './jdyyKneeView.vue'
const components = [
  JdyyKnee,
  JdyyKneeSearch,
  JdyyKneeEdit,
  JdyyKneeAdd,
  JdyyKneeView
]

const main = {
  install(Vue) {
    components.map((component) => {
      Vue.component(component.name, component)
    })
  }
}

export default main
