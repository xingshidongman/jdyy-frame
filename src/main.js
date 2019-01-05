import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'config/axios'
import VueAxios from 'vue-axios'
import Es6Promise from 'es6-promise'
import KalixVueNavigate from './components/navigate'
import KalixVueLib from './components/corelib'
import KalixVueBiz from './components/bizlib'
import './views/admin'
import './views/jdyy'
import './element-ui'
import Tinymce from './components/Tinymce'

import Squire from './components/squire/Squire'
import * as typeFormat from './common/typeFormat.js'
import store from './store'
// Vue.use(ElementUI)

// html转pdf
import htmlToPdf from './components/corelib/components/common/htmlToPdf'
import KalixDialogImgPreview from './components/KalixDialogImgPreview/index.js'

Vue.use(htmlToPdf)

Es6Promise.polyfill()
Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.use(KalixVueLib)
Vue.use(KalixVueBiz)
Vue.use(KalixVueNavigate)
Vue.use(KalixDialogImgPreview)

// const router = KalixRouter(Vue)

Vue.component(Squire.name, Squire)
Vue.component(Tinymce.name, Tinymce)

Vue.filter('formatDate', (value, fmt) => {
  return typeFormat.formatDate(new Date(value), fmt)
})
// 全局加载方式
// Vue.use(KalixVueOA)
// 异步加载方式
// let moduleArr = []
// Vue.use(KalixVueAdmin)
// moduleArr.push(Vue.prototype.$module)
// Vue.use(KalixVueOA)
// moduleArr.push(Vue.prototype.$module)
// Vue.prototype.$modulePlugins = moduleArr

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
