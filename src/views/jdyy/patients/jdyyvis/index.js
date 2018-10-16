import JdyyVis from './jdyyVis.vue'
import JdyyVisAdd from './jdyyVisAdd.vue'
import JdyyVisEdit from './jdyyVisEdit.vue'
import JdyyVisSearch from './jdyyVisSearch.vue'
import JdyyVisImg from './jdyyVisImg.vue'

const components = [
  JdyyVis,
  JdyyVisAdd,
  JdyyVisEdit,
  JdyyVisSearch,
  JdyyVisImg
]

const main = {
  install(Vue) {
    components.map((component) => {
      Vue.component(component.name, component)
    })
  }
}

export default main
