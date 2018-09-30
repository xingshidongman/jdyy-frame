import JdyyImg from './jdyyimg.vue'
import JdyyImgAdd from './jdyyimgAdd.vue'
import JdyyImgEdit from './jdyyimgEdit.vue'
import JdyyImgSearch from './jdyyimgSearch.vue'
import JdyyImgView from './jdyyimgView.vue'

const components = [
  JdyyImg,
  JdyyImgAdd,
  JdyyImgEdit,
  JdyyImgSearch,
  JdyyImgView
]

const main = {
  install(Vue) {
    components.map((component) => {
      Vue.component(component.name, component)
    })
  }
}

export default main
