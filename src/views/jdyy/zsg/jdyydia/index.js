import jdyyDia from './jdyyDia.vue'
import jdyyDiaAdd from './jdyyDiaAdd.vue'
import jdyyDiaEdit from './jdyyDiaEdit.vue'

const components = [
  jdyyDia,
  jdyyDiaAdd,
  jdyyDiaEdit
]

const main = {
  install(Vue) {
    components.map((component) => {
      Vue.component(component.name, component)
    })
  }
}
export default main
