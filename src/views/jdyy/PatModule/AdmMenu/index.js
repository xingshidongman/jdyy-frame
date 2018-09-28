import JdyyAdm from './JdyyAdm.vue'

const components = [
  JdyyAdm
]

const main = {
  install(Vue) {
    components.map((component) => {
      Vue.component(component.name, component)
    })
  }
}
export default main
