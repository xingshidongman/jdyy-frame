import application from './application.vue'
import applicationSearch from './applicationSearch.vue'
import applicationView from './applicationView.vue'

const components = [
  application,
  applicationSearch,
  applicationView
]

const main = {
  install(Vue) {
    components.map((component) => {
      Vue.component(component.name, component)
    })
  }
}
export default main
