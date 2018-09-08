import Vue from 'vue'
import content from '@/base/content'

const globalComponents = [
  content
]

globalComponents.forEach(component => {
  Vue.component(component.name, component)
})
