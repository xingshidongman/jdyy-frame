<template lang="pug">
  kalix-dialog.user-add(title='修改' bizKey="jdyyStat" ref="kalixBizDialog" v-bind:formModel.sync="formModel" v-bind:targetURL="targetURL")
    div.el-form(slot="dialogFormSlot")
      el-form-item(label="坐班医生" prop="doctor" v-bind:label-width="labelWidth" v-bind:rules="rules.doctor")
        el-input(v-model="formModel.doctor")
        <!--kalix-select(v-model="formModel.doctor" v-bind:requestUrl="userURL" id="name" positionName="坐班医生" placeholder="请选择医生")-->
        <!--el-select.border(v-model="formModel.doctor" filterable placeholder="请选择")-->
          <!--el-option(v-for="item in items" :key="items.index" :label="item.value" :value="item.value")-->
      el-form-item(label="坐班日期" prop="date" v-bind:label-width="labelWidth" v-bind:rules="rules.date")
        el-date-picker(v-model="formModel.date" type="date" placeholder="选择日期" value-format="yyyy/MM/dd" style="width: 100%;")
      el-form-item(label="原住院人数" prop="protoNum" v-bind:label-width="labelWidth" v-bind:rules="rules.protoNum")
        el-input(v-model="formModel.protoNum" type="number")
      el-form-item(label="出院人数" prop="outNum" v-bind:label-width="labelWidth" v-bind:rules="rules.outNum")
        el-input(v-model="formModel.outNum" type="number")
      el-form-item(label="入院（转）入人数" prop="inNum" v-bind:label-width="labelWidth" v-bind:rules="rules.inNum")
        el-input(v-model="formModel.inNum" type="number")
      el-form-item(label="手术人数" prop="surgeryNum" v-bind:label-width="labelWidth" v-bind:rules="rules.surgeryNum")
        el-input(v-model="formModel.surgeryNum" type="number")
      el-form-item(label="死亡人数" prop="deathNum" v-bind:label-width="labelWidth" v-bind:rules="rules.deathNum")
        el-input(v-model="formModel.deathNum" type="number")
      el-form-item(label="现住院人数" prop="nowNum" v-bind:label-width="labelWidth" v-bind:rules="rules.nowNum")
        el-input(v-model="formModel.nowNum" type="number")
      el-form-item(label="重病人数" prop="illNum" v-bind:label-width="labelWidth" v-bind:rules="rules.illNum")
        el-input(v-model="formModel.illNum" type="number")
</template>

<script type="text/ecmascript-6">
  import {JdyystatURL} from '../../config.toml'
  import {usersURL} from '../../../admin/config.toml'
  import FormModel from './model'
  import KalixClansmanUpload from '../../../../components/fileUpload/upload'
  import KalixSelect from '../../../../components/corelib/components/common/baseSelect'

  export default {
    name: 'JdyyStatEdit',
    components: {KalixSelect, KalixClansmanUpload},
    data() {
      return {
        downloadURL: JdyystatURL,
        labelWidth: '150px',
        columnParam: undefined,
        formModel: Object.assign({}, FormModel),
        rules: {
          protoNum: [{required: true, message: '请输入原住院人数', trigger: 'change'}],
          outNum: [{required: true, message: '请输入出院人数', trigger: 'change'}],
          inNum: [{required: true, message: '请输入入院（转）入人数', trigger: 'change'}],
          surgeryNum: [{required: true, message: '请输入手术人数', trigger: 'change'}],
          deathNum: [{required: true, message: '请输入死亡人数', trigger: 'change'}],
          nowNum: [{required: true, message: '请输入现住院人数', trigger: 'change'}],
          illNum: [{required: true, message: '请输入重病人数', trigger: 'change'}],
          doctor: [{required: true, message: '请输入坐班医生', trigger: 'change'}],
          date: [{required: true, message: '请输入坐班日期', trigger: 'change'}]
        },
        targetURL: JdyystatURL,
        userURL: usersURL,
        items: []
      }
    },
    mounted() {
      this.findByPosition()
    },
    methods: {
      init(dialogOption) {
        console.log('---------dialogOption------------', dialogOption)
      },
      setGroup(val) {
        this.formModel.downlosd = val
      },
      findByPosition() {
        console.log('findByPosition=================active')
        this.axios.request({
          method: 'GET',
          url: usersURL + '/findByPosition',
          params: {
            position: '坐班医生'
          }
        }).then(res => {
          console.log('findByPosition-res.data.data======================', res.data.data)
          this.items = res.data.data
        })
      }
    }
  }
</script>

<style scoped lang="stylus" type="text/stylus">
  .el-form
    width 50%
    margin auto
</style>
