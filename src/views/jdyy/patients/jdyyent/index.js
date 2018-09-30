import JdyyEnt from './jdyyEnt.vue'

const components = [
  JdyyEnt
]

const main = {
  install(Vue) {
    components.map((component) => {
      Vue.component(component.name, component)
    })
  }
}

export default main
