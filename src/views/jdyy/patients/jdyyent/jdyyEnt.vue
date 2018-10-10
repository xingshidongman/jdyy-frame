<template lang="pug">
  keep-alive
    div.container_box
      el-form(:model="formModel" :rules="rules" ref="formModel")
        div.start
          el-form-item(label="姓名" prop="name" v-bind:label-width="labelWidth" v-bind:rules="rules.name")
            el-input(v-model="formModel.name")
          el-form-item(label="性别" prop="sex" v-bind:label-width="labelWidth" v-bind:rules="rules.sex")
            el-input(v-model="formModel.sex" )
          <!--el-form-item.toleft(label="出生日期" prop="brith" v-bind:label-width="labelWidth" v-bind:rules="rules.brith")-->
            <!--el-col(:span="22")-->
              <!--el-date-picker(type="date" placeholder="选择日期" v-model="formModel.brith" style="width: 100%;")-->
          el-form-item(label="出生日期" prop="brith" v-bind:label-width="labelWidth" v-bind:rules="rules.brith")
            kalix-datepicker-simple(v-model="formModel.brith" type="datetime" placeholder="选择日期" format="yyyy-MM-dd" style="width: 100%;")
          el-form-item(label="年龄" prop="age" v-bind:label-width="labelWidth" v-bind:rules="rules.age")
            el-input(v-model="formModel.age")
          el-form-item(label="身份证号" prop="idCard" v-bind:label-width="labelWidth" v-bind:rules="rules.idCard")
            el-input(v-model="formModel.idCard")
          el-form-item(label="床位号" prop="bedNumber" v-bind:label-width="labelWidth" v-bind:rules="rules.bedNumber")
            el-input(v-model="formModel.bedNumber")
          el-form-item(label="住院号" prop="hospitalNumber" v-bind:label-width="labelWidth" v-bind:rules="rules.hospitalNumber")
            el-input(v-model="formModel.hospitalNumber")
          el-form-item(label="主管医生" prop="directorDoctor" v-bind:label-width="labelWidth" v-bind:rules="rules.directorDoctor")
            el-input(v-model="formModel.directorDoctor")
          el-form-item(label="入院日期" prop="dateAdmission" v-bind:label-width="labelWidth" v-bind:rules="rules.dateAdmission")
            kalix-datepicker-simple(v-model="formModel.dateAdmission" type="datetime" placeholder="选择日期" format="yyyy-MM-dd" style="width: 100%;")
          el-form-item(label="出院日期" prop="DischargeDate" v-bind:label-width="labelWidth" v-bind:rules="rules.DischargeDate")
            kalix-datepicker-simple(v-model="formModel.DischargeDate" type="datetime" placeholder="选择日期" format="yyyy-MM-dd" style="width: 100%;")
          el-form-item(label="身高" prop="stature" v-bind:label-width="labelWidth" v-bind:rules="rules.stature")
            el-input(v-model="formModel.stature")
          el-form-item(label="体重" prop="weight" v-bind:label-width="labelWidth" v-bind:rules="rules.weight")
            el-input(v-model="formModel.weight")
          el-form-item(label="BMI" prop="bmi" v-bind:label-width="labelWidth" v-bind:rules="rules.bmi")
            el-input(v-model="formModel.bmi")
          el-form-item(label="血压" prop="bloodPressure" v-bind:label-width="labelWidth" v-bind:rules="rules.bloodPressure")
            el-input(v-model="formModel.bloodPressure")
          el-form-item(label="特殊疾患" prop="specialDisorders" v-bind:label-width="labelWidth" v-bind:rules="rules.specialDisorders")
            el-input(v-model="formModel.specialDisorders")
          el-form-item(label="特殊疾患描述" prop="descriptionSpecialDisease" v-bind:label-width="labelWidth" v-bind:rules="rules.descriptionSpecialDisease")
            el-input(v-model="formModel.descriptionSpecialDisease")
          el-form-item(label="过敏史" prop="allergicHistory" v-bind:label-width="labelWidth" v-bind:rules="rules.allergicHistory")
            el-input(v-model="formModel.allergicHistory")
          el-form-item(label="医疗类别" prop="typeMedicalTreatment" v-bind:label-width="labelWidth" v-bind:rules="rules.typeMedicalTreatment")
            el-input(v-model="formModel.typeMedicalTreatment")
          el-form-item(label="是否出院" prop="WhetherDischarge" v-bind:label-width="labelWidth" v-bind:rules="rules.WhetherDischarge")
            el-input(v-model="formModel.WhetherDischarge")
          el-form-item(label="本人联系方式" prop="telephonePerson" v-bind:label-width="labelWidth" v-bind:rules="rules.telephonePerson")
            el-input(v-model="formModel.telephonePerson")
          el-form-item(label="家属联系方式" prop="familyPhone" v-bind:label-width="labelWidth" v-bind:rules="rules.familyPhone")
            el-input(v-model="formModel.familyPhone")
          el-form-item(label="省市区" prop="address" v-bind:label-width="labelWidth" v-bind:rules="rules.address")
            kalix-font-cascader(v-model="formModel.address" v-on:getModelInfo="getModel" cascader-type="address")
          el-form-item.address(label="详细地址" prop="completeAddress" v-bind:label-width="labelWidth" v-bind:rules="rules.completeAddress")
            el-input(v-model="formModel.completeAddress")
          el-form-item.address(label="备注" prop="remarks" v-bind:label-width="labelWidth" v-bind:rules="rules.remarks")
            el-input(v-model="formModel.remarks")
          el-form-item(label="Harris评分" prop="harris" v-bind:label-width="labelWidth" v-bind:rules="rules.harris")
            el-input(v-model="formModel.harris")
          el-form-item(label="HSS评分" prop="hss" v-bind:label-width="labelWidth" v-bind:rules="rules.hss")
            el-input(v-model="formModel.hss")
          el-form-item(label="诊断" prop="diagnosis" v-bind:label-width="labelWidth" v-bind:rules="rules.diagnosis")
            el-input(v-model="formModel.diagnosis")
          el-form-item(label="术式" prop="surgical" v-bind:label-width="labelWidth" v-bind:rules="rules.surgical")
            el-cascader(v-bind:options="options" v-bind:show-all-levels="false" v-model="formModel.surgical" )
            <!--el-input(v-model="formModel.surgical")-->
          el-form-item(label="手术日期" prop="dateOperation" v-bind:label-width="labelWidth" v-bind:rules="rules.dateOperation")
            kalix-datepicker-simple(v-model="formModel.dateOperation" type="datetime" placeholder="选择日期" format="yyyy-MM-dd" style="width: 100%;")
          el-form-item(label="分期" prop="periodization" v-bind:label-width="labelWidth" v-bind:rules="rules.periodization")
            el-select(v-model="formModel.periodization")
        <!--div.block-boxs-->
          <!--el-table(:data="gridData" border="1px solid #3465cb" style="width: 100%;" cell-style=" color: #3465cb")-->
            <!--el-table-column( fixed="left" prop="" label="" width="50" class="el-icon-caret-right" align="center")-->
            <!--el-table-column(prop="diagnosis" label="诊断" width="250" align="center"  )-->
            <!--el-table-column(prop="name" label="术式" width="250" align="center")-->
            <!--el-table-column(prop="date" label="日期" width="250" align="center")-->
            <!--el-table-column( prop="installment" label="分期" align="center")-->
        div.bottom
          div.bottom-box
            ul.right_ul
              li.right_li
                <!--div(type="primary" size="large" v-on:click="submitForm") 保存-->
                el-button( size="large" v-on:click="submitForm") 保存
              li.right_li
                el-button( size="large" v-on:click="resetForm") 重置
      <!--div.box-->
        <!--ul.right_ul-->
          <!--li.right_li-->
            <!--button(v-on:onItemClick="onChild1_AItemClick") 增加照片-->
          <!--li.right_li-->
            <!--button(v-on:onItemClick="onChild1_AItemClick") 删除照片-->
        <!--ul.right_ul-->
          <!--li.right_li(v-for="photo in photos")-->
            <!--img.right_img(v-bind:src="photo.url")-->
</template>

<script type="text/ecmascript-6">
  import {JdyypatientsURL} from '../../config.toml'
  import FormModel from './model'
  import {baseURL} from '../../../../config/global.toml'
  import KalixClansmanUpload from '../../../../components/fileUpload/upload'
  import KalixFontCascader from '../../../../components/cascader/ThreeCascader'
  import KalixDatepickerSimple from '../../../../components/corelib/components/common/baseDatepicker'
  export default {
    name: 'kalix-jdyy-jdyyent',
    components: {KalixDatepickerSimple, KalixFontCascader, KalixClansmanUpload},
    data() {
      return {
        downloadURL: JdyypatientsURL,
        formModel: Object.assign({}, FormModel),
        labelWidth: '120px',
        action: baseURL + '/camel/rest/upload',
        columnParam: undefined,
        options: ['/camel/rest/jdyy/surgicals'],
        rules: {
          // name: [{required: true, message: '请输入姓名', trigger: 'change'}],
          // sex: [{required: true, message: '请输入性别', trigger: 'change'}],
          // brith: [{required: true, message: '请输入出生日期', trigger: 'change'}],
          // age: [{required: true, message: '请输入年龄', trigger: 'change'}],
          // idCard: [{required: true, message: '请输入身份证号', trigger: 'change'}],
          // bedNumber: [{required: true, message: '请输入床位号', trigger: 'change'}],
          // hospitalNumber: [{required: true, message: '请输入住院号', trigger: 'change'}],
          // directorDoctor: [{required: true, message: '请输入主管医生', trigger: 'change'}],
          // dateAdmission: [{required: true, message: '请输入入院日期', trigger: 'change'}],
          // dateAischarge: [{required: true, message: '请输入出院日期', trigger: 'change'}],
          // stature: [{required: true, message: '请输入身高', trigger: 'change'}],
          // weight: [{required: true, message: '请输入体重', trigger: 'change'}],
          // bmi: [{required: true, message: '请输入BMI', trigger: 'change'}],
          // bloodPressure: [{required: true, message: '请输入血压', trigger: 'change'}],
          // specialDisorders: [{required: true, message: '请输入特殊疾患', trigger: 'change'}],
          // descriptionSpecialDisease: [{required: true, message: '请输入特殊疾患描述', trigger: 'change'}],
          // allergicHistory: [{required: true, message: '请输入过敏史', trigger: 'change'}],
          // typeMedicalTreatment: [{required: true, message: '请输入医疗类别', trigger: 'change'}],
          // WhetherDischarge: [{required: true, message: '请输入是否出院', trigger: 'change'}],
          // telephonePerson: [{required: true, message: '请输入本人联系方式', trigger: 'change'}],
          // familyPhone: [{required: true, message: '请输入家属联系方式', trigger: 'change'}],
          // // address: [{required: true, message: '请输入省市区', trigger: 'change'}],
          // completeAddress: [{required: true, message: '请输入家详细地址', trigger: 'change'}],
          // remarks: [{required: true, message: '请输入备注', trigger: 'change'}],
          // harris: [{required: true, message: '请输入Harris评分', trigger: 'change'}],
          // diagnosis: [{required: true, message: '请输入诊断', trigger: 'change'}],
          // surgical: [{required: true, message: '请输入术式', trigger: 'change'}],
          // dateOperation: [{required: true, message: '请输入手术日期', trigger: 'change'}],
          // periodization: [{required: true, message: '请输入分期', trigger: 'change'}]
        },
        // gridData: [{
        //   imgurl: '/static/images/arrow.png',
        //   diagnosis: '病理性骨科',
        //   name: '术式',
        //   date: '2018-08-04',
        //   installment: '内科'
        // }, {
        //   diagnosis: '病理性骨科',
        //   name: '术式',
        //   date: '2018-08-04',
        //   installment: '内科'
        // }, {
        //   diagnosis: '病理性骨科',
        //   name: '术式',
        //   date: '2018-08-04',
        //   installment: '内科'
        // }, {
        //   diagnosis: '病理性骨科',
        //   name: '术式',
        //   date: '2018-08-04',
        //   installment: '内科'
        // }],
        // photos: [{
        //   url: '/static/images/logo.png'
        // },
        // {
        //   url: '/static/images/logo.png'
        // },
        // {
        //   url: '/static/images/logo.png'
        // },
        // {
        //   url: '/static/images/logo.png'
        // }
        // ],
        targetURL: JdyypatientsURL
      }
    },
    methods: {
      init(dialogOption) {
        console.log('---------dialogOption------------', dialogOption)
      },
      // getFilePath(filePath, fileName) {
      //   console.log('--getFilePath---', filePath)
      //   console.log('--fileName---', fileName)
      //   this.formModel.photo = filePath
      //   this.formModel.imgName = fileName
      // },
      // setGroup(val) {
      //   this.formModel.downlosd = val
      // },
      getModel(val, flag) { // 三级联动地区参数区分
        if (flag === 'address') {
          this.address_disabled = false
          this.formModel.province = val.toString()
        }
      },
      submitForm() {
        this.$refs['formModel'].validate((valid) => {
          if (valid) {
            this.$http.request({
              method: 'POST',
              url: '/camel/rest/jdyy/patientss',
              data: this.formModel
            }).then(response => {
              alert('添加成功')
              console.log(response.data.msg) // 添加成功
              // this.$refs['formModel'].resetFields() // 重置信息
            })
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm() {
        this.$refs['formModel'].resetFields()
      }
    }
  }
</script>
<style scoped lang="stylus" type="text/stylus">
  .container_box
    width 100%
    display inline-block
    margin-top 20px
    .el-form
      width 70%
      float left
      .start
        width: 98%
        height:450px
        overflow-y:scroll
        margin-bottom:50px
        margin-right -2%
        .el-form-item
            width 50%
            display inline-block
          .el-input
            border 1px solid #3465cb
        .address
          width 100%
      .block-boxs
        width: 98%
        margin-top: 30px
        height: 200px
        overflow: scroll
        margin-left 10px
      .bottom
        width 80%;
        height 60px;
        .bottom-box
          width: 50%;
          float: right;
          .right_ul
            width:80%;
            margin: 20px 10% 0 10%;
            .right_li
              width: 48%
              display: inline-block
              text-align: center
              el-button
                width: 100px
                height: 30px
                border-radius: 5px
                border: none
                font-size: 16px
                outline:none
            .right_li:first-child button
                color: #3465cb
            .right_li:last-child button
                color: red
    .box
      width 28%
      float right
      border 1px solid #3465cb
      height 700px
      .right_ul
        width:80%;
        margin: 20px 10% 0 10%;
        .right_li
          width: 48%
          display: inline-block
          text-align: center
          button
            width: 100px
            height: 30px
            border-radius: 5px
            border: none
            font-size: 16px
            outline:none
        .right_li:first-child button
          color: #3465cb
        .right_li:last-child button
          color: red
        .right_img
          width: 150px;
          height: 150px;
          margin-bottom: 20px;
          border: 1px solid #3465cb;
</style>
