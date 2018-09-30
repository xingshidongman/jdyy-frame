import JdyyMan from './jdyyQue.vue'
import JdyyManSearch from './jdyyQueSearch.vue'
import JdyyManView from './jdyyQueView.vue'

const components = [
  JdyyMan,
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
