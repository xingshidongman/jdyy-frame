import JdyyManAddView from './jdyyManAddView.vue'
// import JdyyMan from './jdyyMan.vue'
// import JdyyManAdd from './jdyyManAdd.vue'
// import JdyyManEdit from './jdyyManEdit.vue'
// import JdyyManSearch from './jdyyManSearch.vue'
// import JdyyManView from './jdyyManView.vue'

const components = [
  JdyyManAddView
  // JdyyMan,
  // JdyyManAdd,
  // JdyyManEdit,
  // JdyyManSearch,
  // JdyyManView
]

const main = {
  install(Vue) {
    components.map((component) => {
      Vue.component(component.name, component)
    })
  }
}

export default main
