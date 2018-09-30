import Entry from './entry.vue'

const components = [
  Entry
]

const main = {
  install(Vue) {
    components.map((component) => {
      Vue.component(component.name, component)
    })
  }
}

export default main
