import JdyyAnalyse from './jdyyAnalyse.vue'

const components = [
  JdyyAnalyse
]

const main = {
  install(Vue) {
    components.map((component) => {
      Vue.component(component.name, component)
    })
  }
}

export default main
