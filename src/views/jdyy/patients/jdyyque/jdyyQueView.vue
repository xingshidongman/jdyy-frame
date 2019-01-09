<template lang="pug">
  kalix-dialog.user-add.search-more(title='查询详情页' bizKey="jdyyQue" ref="kalixBizDialog" v-bind:formModel.sync="formModel" isView)
    div.el-form(slot="dialogFormSlot")
      <!--button(type="button" v-on:click="getBase64Pdf()") 导出PDF-->
      <!--div.row(id="pdfDom" ref="pdfDom" style="padding-top: 30px;")-->
      div(style="margin:20px auto;font-size: 30px;text-align:center;font-weight:bold;") 基 本 信 息
      el-form-item.block(label="病案号" prop="medicalRecordNumber" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.medicalRecordNumber" readonly)
      el-form-item.block(label="床位号" prop="bedNumber" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.bedNumber" readonly)
      el-form-item.block(label="姓名" prop="name" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.name" readonly)
      el-form-item.block(label="性别" prop="sex" v-bind:label-width="labelWidth" style="")
        el-input(v-model="formModel.sex" readonly)
        <!--el-radio-group(v-model="formModel.sex" disabled)-->
        <!--el-radio(label="男")-->
        <!--el-radio(label="女")-->
      el-form-item.block(label="年龄" prop="age" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.age" type="number" readonly min="0")
      el-form-item.block(label="本人联系方式" prop="telephonePerson" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.telephonePerson" readonly)
      el-form-item.address.block(label="通讯地址" prop="completeAddress" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.completeAddress" readonly)
      el-form-item.block(label="入院日期" prop="dateAdmission" v-bind:label-width="labelWidth")
        el-date-picker(v-model="formModel.dateAdmission" type="date" placeholder="选择日期" value-format="yyyy/M/d" format="yyyy/M/d" style="width: 100%;" readonly)
      el-form-item.block(label="出院日期" prop="dischargeDate" v-bind:label-width="labelWidth")
        el-date-picker(v-model="formModel.dischargeDate" type="date" placeholder="选择日期" value-format="yyyy/M/d" format="yyyy/M/d" style="width: 100%;" readonly)
      el-form-item.block.short(label="主管医生" prop="directorDoctor" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.directorDoctor" readonly)
      el-form-item.block(label="图片" prop="photo" v-bind:label-width="labelWidth")
        el-button.download() 点击下载
      <!--kalix-img-upload(v-model="formModel.photo" readonly="readonly")-->
      <!--template(slot-scope="scope")-->
      div.picture-box(style="margin-left:200px")
        div.picture(v-for="(img, index) in formModel.imgs" :class="{ 'active':index===mark }" :key="index")
          img(v-bind:src="img.val" @click="change(img.val)"  style="width:144px; height:144px" v-bind:ref="img.key" v-if="img.val")
          el-dialog(:visible.sync="dialogVisible" :append-to-body="true" fullscreen=true)
            div.img-box
              div.img-height
                img.img-width(v-bind:src="item.val" v-for="(item, index) in formModel.imgs" v-show="index===mark" :key="index")
                img(src="../../../../../static/images/prev.png" height="50" width="50" class="prev" @click="cut()" )
                img(src="../../../../../static/images/next.png" height="50" width="50" class="next" @click="add()" )
        div.clear
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
        div(style="margin:20px auto;font-size: 30px;font-weight:bold;text-align:center;") 诊 断 信 息
        el-table(v-bind:data="formModel.tableData")
          el-table-column(prop="diagnosis" label="诊断" min-width="150" :resizable="false")
          el-table-column(prop="surgical" label="术式" min-width="150" :resizable="false")
          el-table-column(prop="operationDate" label="手术日期" min-width="120" :resizable="false")
          el-table-column(prop="periodization" label="分期" min-width="120" :resizable="false")
          <!--el-table-column(prop="imgs" label="图片" min-width="360" :resizable="false")-->
          <!--template(slot-scope="scope")-->
          <!--div.picture(v-for="(img, filePathArr) in scope.row.imgs" :class="{ 'active':filePathArr===mark }" :key="filePathArr")-->
          <!--img(v-bind:src="img.val" v-bind:ref="img.key" @click="change(filePathArr) ; handelClick(scope.$index)" style="width:144px; height:144px")-->
          <!--el-dialog(:visible.sync="dialogVisible" :append-to-body="true" width="800px")-->
          <!--div.img-height-->
          <!--img.img-width(v-bind:src="item.val" v-for="(item, filePathArr) in formModel.tableData[rowNumber].imgs" v-show="filePathArr===mark" :key="filePathArr")-->
          <!--img(src="../../../../../static/images/prev.png" height="50" width="50" class="prev" @click="cut()" )-->
          <!--img(src="../../../../../static/images/next.png" height="50" width="50" class="next" @click="add()" )-->
          <!--div.clear-->
      <!--view-table(v-bind:targetURL="visPatUrl" v-bind:userId="formModel.id" v-on:handleClick="handleClick")-->
      <!--div.mark(ref="mark")-->
      <!--div(v-for="img in imgs" v-bind:key="img.key" @click="markclose" )-->
      <!--img(v-bind:src="img.val" v-bind:ref="img.key" style="width:150px; height:150px")-->

</template>

<script type="text/ecmascript-6">
  import FormModel from './model'
  import {JdyypatientsURL, visPatUrl} from '../../config.toml'
  import KalixDatepickerSimple from '../../../../components/corelib/components/common/baseDatepicker'
  import KalixFontCascader from '../../../../components/cascader/ThreeCascader'
  import ViewTable from '../../../../components/view/viewtable'
  import KalixImgUpload from '../../../../components/corelib/components/common/imgUpload'

  export default {
    name: 'JdyyQueView',
    components: {ViewTable, KalixFontCascader, KalixImgUpload, KalixDatepickerSimple},
    data() {
      return {
        // htmlTitle: '页面导出PDF文件名', // 这个是pdf文件的名字
        visPatUrl: visPatUrl,
        targetURL: JdyypatientsURL,
        formModel: Object.assign({}, FormModel),
        labelWidth: '200px',
        tableData: [],
        filePathArr: [],
        dialogVisible: false,
        dialogImageUrl: '',
        mark: '',
        rowNumber: 0
      }
    },
    mounted() {
    },
    methods: {
      prev() {
        this.$emit('onGetPrevRow')
      },
      next() {
        this.$emit('onGetNextRow')
      },
      change(item) {
        console.log('this.formModel.imgs:', this.formModel.imgs)
        console.log('item:', item)
        let _imgs = []
        this.formModel.imgs.forEach(e => {
          _imgs.push(e.val)
        })
        this.$KalixDialogImgPreview({
          imgs: _imgs,
          selectItem: item
        })
        // this.mark = i
        // console.log('mark================', this.formModel.photo)
        // this.dialogVisible = true
      },
      getphoto() {
        this.filePathArr = this.formModel.photo.split(',')
        console.log('this.formModel.photo------------:', this.formModel.photo)
        console.log('this.formModel.photo------------:', this.filePathArr)
        for (let i = 0; i < this.filePathArr.length; i++) {
          this.img.val = this.filePathArr[i]
          console.log('pppppppppppppppppppppppppppppppppppppppp', this.filePathArr[i])
        }
      },
      // handelClick(index) {
      //   this.rowNumber = index
      //   console.log('3333333333333333333333', this.rowNumber)
      // },
      cut() {
        this.mark--
        if (this.mark < 0) {
          this.mark = 0
          // console.log(this.formModel.tableData[index])
        }
        console.log('=====================', this.mark)
      },
      add() {
        this.mark++
        if (this.mark > this.formModel.photo.split(',').length - 1) {
          this.mark = this.formModel.photo.split(',').length - 1
        }
        console.log('=====================', this.mark)
      }
      // convertImgToBase64(url, callback, outputFormat) {
      //   let canvas = document.createElement('CANVAS')
      //   let ctx = canvas.getContext('2d')
      //   let img = new Image()
      //   img.crossOrigin = '*'
      //   // img.crossOrigin = 'Anonymous'
      //   img.onload = function () {
      //     canvas.height = img.height
      //     canvas.width = img.width
      //     ctx.drawImage(img, 0, 0)
      //     let dataURL = canvas.toDataURL(outputFormat || 'image/jpeg')
      //     callback.call(this, dataURL)
      //     canvas = null
      //   }
      //   img.src = url
      // },
      // getBase64Pdf() {
      //   let _this = this
      //   this.formModel.imgs = this.formModel.photo.split(',')
      //   console.log('this.formModel.imgs=--------------', this.formModel.imgs)
      //   let imgsArr = this.formModel.imgs
      //   console.log('imgsArr------------------', imgsArr)
      //   if (imgsArr !== undefined) {
      //     for (let i = 0; i < imgsArr.length; i++) {
      //       console.log('base64I========================', imgsArr[0].val)
      //       this.convertImgToBase64(imgsArr[0].val, function (base64ImgSrc) {
      //         console.log('base64ImgSrc========================', base64ImgSrc)
      //         imgsArr[0].val = base64ImgSrc
      //       })
      //     }
      //     let pdfDom = _this.$refs.pdfDom
      //     _this.getPdf(pdfDom)
      //   } else {
      //     let pdfDom = _this.$refs.pdfDom
      //     _this.getPdf(pdfDom)
      //   }
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
      font-size: 14px;
      padding: 12px 10px;
      .el-input__inner
        border-radius 1px

  .img-width
    margin-top -50px
    max-width 100%
    max-height 820px
    display inline-block

  .img-height
    width 100%
    display table-cell
    vertical-align middle

  .img-box
    width 100%
    display table
    text-align center

  .prev
  .next
    background-color: rgba(0, 0, 0, 0.5)
    padding 20px 0
    position fixed
    top 40%

  .prev
    left 0

  .next
    right 0

  .picture
    float left
    margin 0 3px
    display block

  .clear
    clear both

  .long
    width 100% !important

  .short
    width 50%
    display block !important

  .el-table
    font-size 20px
  .download
    background-color #3465cb
    color white
  .download:hover
    background-color #1047cb
</style>
<style lang="stylus" type="text/stylus">
  .search-more
    .el-form-item__label
      font-size: 30px;
    .el-input__inner
      font-size 30px
      font-weight bold
      color #3465cb
    th
      border 2px solid #909090 !important
      color #606266
      font-size 30px
      .cell
        line-height 36px
    td
      border 2px solid #909090 !important
      color #3465cb
      font-weight bold
      font-size 22px

</style>
