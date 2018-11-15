<template lang="pug">
  kalix-dialog.user-add(title='查询详情页' bizKey="jdyyque" ref="kalixBizDialog" v-bind:formModel.sync="formModel" isView)
    div.el-form(slot="dialogFormSlot")
      button(type="button" v-on:click="getBase64Pdf()") 导出PDF
      div.row(ref="pdfDom" style="padding-top: 30px;")
        el-form-item(label="病历号" prop="medicalRecordNumber" v-bind:label-width="labelWidth")
          el-input(v-model="formModel.medicalRecordNumber" readonly)
        el-form-item(label="床位号" prop="bedNumber" v-bind:label-width="labelWidth")
          el-input(v-model="formModel.bedNumber" readonly)
        el-form-item(label="姓名" prop="name" v-bind:label-width="labelWidth")
          el-input(v-model="formModel.name" readonly)
        el-form-item(label="性别" prop="sex" v-bind:label-width="labelWidth" style="")
          el-radio-group(v-model="formModel.sex" disabled)
            el-radio(label="男")
            el-radio(label="女")
        el-form-item(label="年龄" prop="age" v-bind:label-width="labelWidth")
          el-input(v-model="formModel.age" type="number" readonly)
        el-form-item(label="本人联系方式" prop="telephonePerson" v-bind:label-width="labelWidth")
          el-input(v-model="formModel.telephonePerson" readonly)
        el-form-item.address(label="通讯地址" prop="completeAddress" v-bind:label-width="labelWidth")
          el-input(v-model="formModel.completeAddress" readonly)
        el-form-item(label="入院日期" prop="dateAdmission" v-bind:label-width="labelWidth")
          el-date-picker(v-model="formModel.dateAdmission" type="date" placeholder="选择日期" value-format="yyyy/M/d" format="yyyy/M/d" style="width: 100%;" readonly)
        el-form-item(label="出院日期" prop="dischargeDate" v-bind:label-width="labelWidth")
          el-date-picker(v-model="formModel.dischargeDate" type="date" placeholder="选择日期" value-format="yyyy/M/d" format="yyyy/M/d" style="width: 100%;" readonly)
        el-form-item(label="主管医生" prop="directorDoctor" v-bind:label-width="labelWidth")
          el-input(v-model="formModel.directorDoctor" readonly)
        <!--el-form-item(label="出生日期" prop="brith" v-bind:label-width="labelWidth")-->
        <!--el-date-picker(v-model="formModel.brith" type="date" placeholder="选择日期" value-format="yyyy/M/d" format="yyyy/M/d" style="width: 100%;" readonly)-->
        <!--el-form-item.address(label="通讯地址" prop="completeAddress" v-bind:label-width="labelWidth")-->
        <!--el-input(v-model="formModel.completeAddress" readonly)-->
        <!--el-form-item(label="身份证号" prop="idCard" v-bind:label-width="labelWidth")-->
        <!--el-input(v-model="formModel.idCard" type="number" readonly)-->
        <!--el-form-item(label="身高" prop="stature" v-bind:label-width="labelWidth")-->
        <!--el-input(v-model="formModel.stature" type="number" readonly)-->
        <!--el-form-item(label="体重" prop="weight" v-bind:label-width="labelWidth")-->
        <!--el-input(v-model="formModel.weight" type="number" readonly)-->
        <!--el-form-item(label="病历" prop="medicalRecords" v-bind:label-width="labelWidth")-->
        <!--el-input(v-model="formModel.medicalRecords" readonly)-->
        <!--el-form-item(label="住院号" prop="hospitalNumber" v-bind:label-width="labelWidth")-->
        <!--el-input(v-model="formModel.hospitalNumber" type="number" readonly)-->
        <!--el-form-item(label="现况" prop="currentSituation" v-bind:label-width="labelWidth")-->
        <!--el-input(v-model="formModel.currentSituation" readonly)-->
        <!--el-form-item(label="重患时间" prop="heavyTime" v-bind:label-width="labelWidth")-->
        <!--el-date-picker(v-model="formModel.heavyTime" type="date" placeholder="选择日期" value-format="yyyy/M/d" format="yyyy/M/d" style="width: 100%;" readonly)-->
        <!--el-form-item(label="家属联系方式" prop="familyPhone" v-bind:label-width="labelWidth")-->
        <!--el-input(v-model="formModel.familyPhone" readonly)-->
        <!--&lt;!&ndash;el-form-item(label="省市区" prop="address" v-bind:label-width="labelWidth")&ndash;&gt;-->
        <!--&lt;!&ndash;kalix-font-cascader.Border(v-on:change="getModel" readonly)&ndash;&gt;-->
        <!--el-form-item(label="BMI" prop="bmi" v-bind:label-width="labelWidth")-->
        <!--el-input(v-model="formModel.bmi" type="number" readonly)-->
        <!--el-form-item(label="血压" prop="bloodPressure" v-bind:label-width="labelWidth")-->
        <!--el-input(v-model="formModel.bloodPressure" type="number" readonly)-->
        <!--el-form-item(label="特殊疾患" prop="specialDisorders" v-bind:label-width="labelWidth")-->
        <!--el-input(v-model="formModel.specialDisorders" readonly)-->
        <!--el-form-item(label="特殊疾患描述" prop="descriptionSpecialDisease" v-bind:label-width="labelWidth")-->
        <!--el-input(v-model="formModel.descriptionSpecialDisease" readonly)-->
        <!--el-form-item(label="过敏史" prop="allergicHistory" v-bind:label-width="labelWidth")-->
        <!--el-input(v-model="formModel.allergicHistory" readonly)-->
        <!--el-form-item(label="医疗类别" prop="medicalCategory" v-bind:label-width="labelWidth")-->
        <!--el-input(v-model="formModel.medicalCategory" readonly)-->
        <!--el-form-item(label="Harris评分" prop="harris" v-bind:label-width="labelWidth")-->
        <!--el-input(v-model="formModel.harris" type="number" readonly)-->
        <!--el-form-item(label="HSS评分" prop="hss" v-bind:label-width="labelWidth")-->
        <!--el-input(v-model="formModel.hss" type="number" readonly)-->
        <!--el-form-item(label="是否出院" prop="WhetherDischarge" v-bind:label-width="labelWidth")-->
        <!--el-radio-group(v-model="formModel.WhetherDischarge" disabled)-->
        <!--el-radio(label="是")-->
        <!--el-radio(label="否")-->
        <!--el-form-item(label="修改人员" prop="modifyStaff" v-bind:label-width="labelWidth")-->
        <!--el-input(v-model="formModel.modifyStaff" readonly)-->
        <!--el-form-item.address(label="备注" prop="remarks" v-bind:label-width="labelWidth")-->
        <!--el-input(v-model="formModel.remarks" readonly)-->
        <!--div.el-form(slot="dialogFormSlot")-->
      div.diagnose-message
        div(style="width:98px;margin:20px auto;font-size: 20px;") 诊 断 信 息
          el-table(v-bind:data="formModel.tableData" border )
            el-table-column(prop="diagnosis" label="诊断" min-width="150" :resizable="false")
            el-table-column(prop="surgical" label="术式" min-width="150" :resizable="false")
            el-table-column(prop="operationDate" label="手术日期" min-width="120" :resizable="false")
            el-table-column(prop="periodization" label="分期" min-width="120" :resizable="false")
            el-table-column(label="图片" min-width="360" :resizable="false")
              template(slot-scope="scope")
                div.picture(v-for="(img, index) in formModel.imgs" :class="{ 'active':index===mark }" :key="index")
                  img(v-bind:src="img.val" v-bind:ref="img.key" v-on:click="dialogVisible = true" @click="change(index)")
                el-dialog(:visible.sync="dialogVisible" :append-to-body="true")
                  img.img-width(v-bind:src="item.val" v-for="(item, index) in formModel.imgs" v-show="index===mark" :key="index")
                  img(src="../../../../../static/images/prev.png" height="50" width="50" class="prev" @click="cut()" )
                  img(src="../../../../../static/images/next.png" height="50" width="50" class="next" @click="add()" )
        <!--view-table(v-bind:targetURL="visPatUrl" v-bind:userId="formModel.id" v-on:handleClick="handleClick")-->
        <!--div.mark(ref="mark")-->
        <!--div(v-for="img in imgs" v-bind:key="img.key" @click="markclose" )-->
        <!--img(v-bind:src="img.val" v-bind:ref="img.key" style="width:150px; height:150px")-->

</template>

<script type="text/ecmascript-6">
  import html2Canvas from 'html2canvas'
  import JsPDF from 'jspdf'
  import FormModel from './model'
  import FormModel1 from './model1'
  import FormModel2 from './model2'
  import {JdyyvisitURL, visPatUrl} from '../../config.toml'
  import KalixDatepickerSimple from '../../../../components/corelib/components/common/baseDatepicker'
  import KalixFontCascader from '../../../../components/cascader/ThreeCascader'
  import ViewTable from '../../../../components/view/viewtable'

  export default {
    name: 'JdyyQueView',
    components: {ViewTable, KalixFontCascader, KalixDatepickerSimple},
    data() {
      return {
        htmlTitle: '页面导出PDF文件名', // 这个是pdf文件的名字
        visPatUrl: visPatUrl,
        targetURL: JdyyvisitURL,
        formModel: Object.assign({}, FormModel),
        formModel1: Object.assign({}, FormModel1),
        formModel2: Object.assign({}, FormModel2),
        labelWidth: '200px',
        tableData: [],
        dialogVisible: false,
        dialogImageUrl: '',
        mark: ''
      }
    },
    // mounted() {
    //   this.getData()
    // },
    methods: {
      change(i) {
        this.mark = i
        console.log('=====================', this.mark)
      },
      cut() {
        if (this.mark === 1) {
          this.mark = this.formModel.imgs.length
        }
        this.mark--
        console.log('=====================', this.mark)
        console.log('111111111', this.formModel.imgs.length - 1)
        console.log('222222222', this.formModel.imgs.length)
      },
      add() {
        if (this.mark === this.formModel.imgs.length - 1) {
          this.mark = 0
        }
        this.mark++
        console.log('=====================', this.mark)
      },
      convertImgToBase64 (url, callback, outputFormat) {
        let canvas = document.createElement('CANVAS')
        let ctx = canvas.getContext('2d')
        let img = new Image()
        img.crossOrigin = 'Anonymous'
        img.onload = function () {
          canvas.height = img.height
          canvas.width = img.width
          ctx.drawImage(img, 0, 0)
          let dataURL = canvas.toDataURL(outputFormat || 'image/jpeg')
          callback.call(this, dataURL)
          canvas = null
        }
        img.src = url
      },
      getPdf (pdfDom) {
        let title = this.htmlTitle
        html2Canvas(pdfDom, {
          allowTaint: true
        }).then(function (canvas) {
          let contentWidth = canvas.width
          let contentHeight = canvas.height
          let pageHeight = contentWidth / 592.28 * 841.89
          let leftHeight = contentHeight
          let position = 0
          let imgWidth = 595.28
          let imgHeight = 592.28 / contentWidth * contentHeight
          let pageData = canvas.toDataURL('image/jpeg', 1.0)
          let PDF = new JsPDF('', 'pt', 'a4')
          if (leftHeight < pageHeight) {
            PDF.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight)
          } else {
            while (leftHeight > 0) {
              PDF.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
              leftHeight -= pageHeight
              position -= 841.89
              if (leftHeight > 0) {
                PDF.addPage()
              }
            }
          }
          PDF.save(title + '.pdf')
        })
      },
      getBase64Pdf () {
        let _this = this
        let imgsArr = this.imgs
        console.log('imgsArr==================', imgsArr)
        // for (let i = 0; i < imgsArr.length; i++) {
        this.convertImgToBase64(imgsArr[0].val, function (base64ImgSrc) {
          _this.$refs.imgsArr[0].key.src = base64ImgSrc
          let pdfDom = _this.$refs.pdfDom
          _this.getPdf(pdfDom)
        })
        // }
      },
      getModel(val) { // 三级联动地区参数区分
        this.formModel1.completeAddress = val.join('')
        console.log('address=========', this.formModel1.completeAddress)
      }
      // getDate() {
      //   // this.$http.get(this.targetURL + `/${this.userId}`, {
      //   this.$http.get(this.visPatUrl, {
      //     params: {
      //       userId: this.formModel.id
      //     }
      //   }).then(res => {
      //     this.tableData = res.data.data
      //     // this.imgs = res.data.data[0].photo.split(',')
      //     if (res.data.data[0].photo.indexOf(',')) {
      //       this.imgs = res.data.data[0].photo.split(',')
      //     } else {
      //       this.imgs = res.data.data[0].photo
      //     }
      //   })
      // },
      // handleClick(data) {
      //   console.log('handleClick---data。photo----', data.photo)
      //   if (data.photo !== null) {
      //     if (data.photo.indexOf(',')) {
      //       let arr = data.photo.split(',')
      //       let imgObj = {}
      //       for (let i = 0; i < arr.length; i++) {
      //         imgObj.val = arr[i]
      //         imgObj.key = 'img' + i
      //         this.imgs.push(imgObj)
      //       }
      //       // this.imgs = data.photo.split(',')
      //     } else {
      //       // this.imgs = data.photo
      //       let imgObj = {
      //         val: data.photo,
      //         key: 'img0'
      //       }
      //       this.imgs.push(imgObj)
      //     }
      //     this.$refs.mark.style.display = 'block'
      //   } else {
      //     alert('无图片')
      //   }
      // },
      // markclose() {
      //   this.$refs.mark.style.display = 'none'
      // }
    }
  }
</script>

<style scoped lang="stylus" type="text/stylus">
  .el-form
    width 80%
    margin auto
    .el-form-item
      width 49%
      display inline-block
    .address
      width 98%
    .Border
      width 49%
      height 40px
      line-height 40px
    .el-form-item__content
      position: relative;
      font-size: 14px;
      padding: 12px 10px;
    .el-input__inner
      border-radius 1px

  .mark
    position: fixed
    z-index: 9
    background: black
    opacity: 0.5
    top: 20%
    width: 60%
    text-align: center
    display none

  .img-width
    height 50vh
    display block
    margin 0 auto

  .prev
  .next
    background-color: rgba(0, 0, 0, 0.5)
    padding 20px 0
    position absolute
    top 40%

  .prev
    left 20px

  .next
    right 20px
</style>
