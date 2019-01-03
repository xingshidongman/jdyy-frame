import vue from 'vue'
import Unit from './Index.vue'

const UnitConstructor = vue.extend(Unit)

UnitConstructor.prototype.close = function () {
  let docKalixPopupMsg = document.querySelector('.kalix-dialog-img-preview--mask')
  docKalixPopupMsg.parentNode.removeChild(docKalixPopupMsg)
  // this.$el.parentNode.removeChild(this.$el)
}

function showMyPopupMsg(options = {}) {
  const unitDom = new UnitConstructor({
    el: document.createElement('div')
  })
  unitDom.imgs = options.imgs || []
  unitDom.selectItem = options.selectItem || {}
  unitDom.btnDefault = {
    text: '返回',
    event() {
      unitDom.close()
    }
  }
  unitDom.dialogInit()
  document.body.appendChild(unitDom.$el)
}

function registryUnit() {
  vue.prototype.$KalixDialogImgPreview = showMyPopupMsg
}

export default registryUnit
