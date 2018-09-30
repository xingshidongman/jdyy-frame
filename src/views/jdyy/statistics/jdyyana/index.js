import Analyse from './analyse.vue'

const components = [
  Analyse
]

const main = {
  install(Vue) {
    components.map((component) => {
      Vue.component(component.name, component)
    })
  }
}

export default main
