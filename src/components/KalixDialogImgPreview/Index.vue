<template>
  <div class="kalix-dialog-img-preview--mask">
    <div class="kalix-dialog-img-preview--cnt"
         @mousemove="handlerMouseMoveDialogCnt"
         @mouseout="handlerMouseOutDialogCnt">
      <div class="kalix-dialog-img-preview--img"
           :style="dialogImgStyle"
           @mousedown="handlerMouseDownImg"
           @mouseup="handlerMouseUpImg"
           @mousewheel="handlerMouseWheelImg"
      ></div>
      <div class="kalix-dialog-img-preview--btn btn-l" v-show="currentIndex>0" @click="handlerClickPrevImg"></div>
      <div class="kalix-dialog-img-preview--btn btn-r" v-show="currentIndex<imgs.length-1" @click="handlerClickNextImg"></div>
      <div class="kalix-dialog-img-preview--btn btn-close" @click="clickBtnDefault"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  /* eslint-disable */
  export default {
    name: 'kalix-dialog',
    props: {
      imgs: {
        type: Array,
        default: () => []
      },
      selectItem: {
        type: Object
      }
    },
    data() {
      return {
        isVisible: false,
        currentIndex: -1,
        currentImg: new Image(),
        scal: {},
        selectImgFlag: false,
        oX: 0,
        oY: 0,
        nX: 0,
        nY: 0,
        nX2: 0,
        nY2: 0,
        imgScale: 1,
        dialogImgTranslate: '',
        dialogImgScale: ''
      }
    },
    mounted() {
      this.$nextTick(() => {
        console.log('imgs', this.imgs)
      })
    },
    methods: {
      handlerClickPrevImg() {
        this._resetParams()
        this.currentIndex -= 1
      },
      handlerClickNextImg() {
        this._resetParams()
        this.currentIndex += 1
      },
      handlerMouseDownImg($event) {
        this.selectImgFlag = true
        this.oX = $event.clientX
        this.oY = $event.clientY
      },
      handlerMouseUpImg() {
        this.selectImgFlag = false
        this.oX = 0
        this.oY = 0
        this.nX2 = this.nX
        this.nY2 = this.nY
      },
      handlerMouseWheelImg($event) {
        let delta = 0;
        if ($event.wheelDelta) {
          delta = $event.wheelDelta / 120;
          if (window.opera) {
            delta = -delta;
          }
        } else if ($event.detail) {
          delta = -$event.detail / 3;
        }
        if (delta) {
          if (delta < 0) {
            //向下滚动 scale(2)
            this.imgScale -= 0.1
          } else {
            //向上滚动
            this.imgScale += 0.1
          }
          this.dialogImgScale = `scale(${this.imgScale})`
        }
      },
      handlerMouseMoveDialogCnt($event) {
        if (this.selectImgFlag) {
          this.nX = $event.clientX - this.oX + this.nX2
          this.nY = $event.clientY - this.oY + this.nY2
          this.dialogImgTranslate = `translate(${this.nX}px,${this.nY}px)`
        }
      },
      handlerMouseOutDialogCnt() {
        this.selectImgFlag = false
        this.oX = 0
        this.oY = 0
        this.nX2 = this.nX
        this.nY2 = this.nY
      },
      clickBtnDefault() {
        this.btnDefault.event()
      },
      getCurrentImg() {
        this.currentImg.src = this.imgs[this.currentIndex]
        this.scal = {
          width: this.currentImg.width,
          height: this.currentImg.height
        }
        let screenWidth = window.screen.availWidth
        let screenHeight = window.screen.availHeight
        if (this.currentImg.width > screenWidth || this.currentImg.height > screenHeight) {
          this.scal = this.scalingImage(this.currentImg.width, this.currentImg.height, screenWidth, screenHeight)
        }
      },
      dialogInit() {
        console.log('dialogInit')
        this.currentIndex = this.imgs.findIndex(e => {
          return e === this.selectItem
        })
        this.getCurrentImg()
      },
      scalingImage(imgWidth, imgHeight, containerWidth, containerHeight) {
        let containerRatio = containerWidth / containerHeight;
        let imgRatio = imgWidth / imgHeight;

        if (imgRatio > containerRatio) {
          imgWidth = containerWidth;
          imgHeight = containerWidth / imgRatio;
        } else if (imgRatio < containerRatio) {
          imgHeight = containerHeight;
          imgWidth = containerHeight * imgRatio;
        } else {
          imgWidth = containerWidth;
          imgHeight = containerHeight;
        }

        return {
          width: imgWidth,
          height: imgHeight
        }
      },
      _resetParams() {
        this.selectImgFlag = false
        this.oX = 0
        this.oY = 0
        this.nX = 0
        this.nY = 0
        this.nX2 = 0
        this.nY2 = 0
        this.imgScale = 1
        this.dialogImgTranslate = ''
        this.dialogImgScale = ''
      }
    },
    watch: {
      currentIndex() {
        this.getCurrentImg()
      }
    },
    computed: {
      dialogImgStyle() {
        console.log('this.scal.width', this.scal.width)
        return {
          width: this.scal.width + 'px',
          height: this.scal.height + 'px',
          backgroundImage: `url(${this.currentImg.src})`,
          transform: this.dialogImgTranslate + this.dialogImgScale
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .kalix-dialog-img-preview--mask
    position fixed
    background-color rgba(0, 0, 0, .8)
    z-index 9997
    width 100%
    height 100%
    left 0
    top 0

    .kalix-dialog-img-preview--cnt
      position fixed
      width 100%
      height 100%
      background-color transparent
      z-index 9998
      top 0
      left 0
      box-sizing border-box
      background 50% 50% no-repeat
      background-size contain
      display flex
      align-items center
      justify-content center
      .kalix-dialog-img-preview--img
        background 50% 50% no-repeat
        background-size 100% 100%
      .kalix-dialog-img-preview--btn
        position absolute
        top 50%
        width 64px
        height 64px
        cursor pointer
        margin-top -32px
        z-index 9999
        background 50% 50% transparent no-repeat
        background-size 100%
        &.btn-l
          left 0
          background-image url("./left.png")
        &.btn-r
          right 0
          background-image url("./right.png")
        &.btn-close
          top 0
          right 0
          background-color crimson
          margin-top 0
          background-image url("./close.png")
</style>
