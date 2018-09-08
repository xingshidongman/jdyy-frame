import JdyyDict from './jdyydict.vue'

const components = [
  JdyyDict
]

const main = {
  install(Vue) {
    components.map((component) => {
      Vue.component(component.name, component)
    })
  }
}
export default main
