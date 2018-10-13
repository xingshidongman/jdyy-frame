import JdyyEnt from './jdyyEnt.vue'
import JdyyEntAdd from './jdyyEntAdd.vue'

const components = [
  JdyyEnt,
  JdyyEntAdd
]

const main = {
  install(Vue) {
    components.map((component) => {
      Vue.component(component.name, component)
    })
  }
}

export default main
