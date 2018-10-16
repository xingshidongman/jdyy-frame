import jdyySur from './jdyySur.vue'
import jdyySurAdd from './jdyySurAdd.vue'
import jdyySurEdit from './jdyySurEdit.vue'

const components = [
  jdyySur,
  jdyySurAdd,
  jdyySurEdit
]

const main = {
  install(Vue) {
    components.map((component) => {
      Vue.component(component.name, component)
    })
  }
}
export default main
