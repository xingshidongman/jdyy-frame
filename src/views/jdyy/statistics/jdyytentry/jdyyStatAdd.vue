<template lang="pug">
  kalix-dialog.user-add(title='添加' bizKey="jdyyStat" ref="kalixBizDialog" v-bind:formModel.sync="formModel" v-bind:targetURL="targetURL")
    div.el-form(slot="dialogFormSlot")
      el-form-item.short(label="坐班医生" prop="doctor" v-bind:label-width="labelWidth" v-bind:rules="rules.doctor")
        <!--el-input(v-model="formModel.doctor")-->
        el-autocomplete(v-model="formModel.doctor" :fetch-suggestions="querySearchAsyncDoc" @select="handleSelectDoc" clearable)
      el-form-item.short(label="坐班日期" prop="date" v-bind:label-width="labelWidth" v-bind:rules="rules.date")
        el-date-picker(v-model="formModel.date" type="date" placeholder="选择日期" v-on:change="getDataByDate" value-format="yyyy/M/d" format="yyyy/M/d" style="width: 100%;")
      el-form-item(label="原住院人数" prop="protoNum" v-bind:label-width="labelWidth" v-bind:rules="rules.protoNum")
        el-input(v-model="formModel.protoNum")
      el-form-item(label="出院人数" prop="outNum" v-bind:label-width="labelWidth" v-bind:rules="rules.outNum")
        el-input(v-model="formModel.outNum")
      el-form-item(label="入院（转）入人数" prop="inNum" v-bind:label-width="labelWidth" v-bind:rules="rules.inNum")
        el-input(v-model="formModel.inNum")
      el-form-item(label="手术人数" prop="surgeryNum" v-bind:label-width="labelWidth" v-bind:rules="rules.surgeryNum")
        el-input(v-model="formModel.surgeryNum")
      el-form-item(label="死亡人数" prop="deathNum" v-bind:label-width="labelWidth" v-bind:rules="rules.deathNum")
        el-input(v-model="formModel.deathNum")
      el-form-item(label="现住院人数" prop="nowNum" v-bind:label-width="labelWidth" v-bind:rules="rules.nowNum")
        el-input(v-model="formModel.nowNum")
      el-form-item(label="重病人数" prop="illNum" v-bind:label-width="labelWidth" v-bind:rules="rules.illNum")
        el-input(v-model="formModel.illNum")
</template>

<script type="text/ecmascript-6">
  import {JdyystatURL} from '../../config.toml'
  import {usersURL} from '../../../admin/config.toml'
  import FormModel from './model'
  export default {
    name: 'JdyyStatAdd',
    data() {
      var validatenum = (rule, value, callback) => {
        if (value !== undefined && value !== null && value !== '') {
          let valTrim = value.replace(/^\s+|\s+$/g, '')
          // let reg = /^(?:[1-9]*\d)$/
          let reg = /^[0-9]*\d$/
          if (reg.test(valTrim)) {
            this.phoneNumberInfo = true
            callback()
          } else {
            this.phoneNumberInfo = false
            callback(new Error('请输入正确数字'))
          }
        } else {
          this.phoneNumberInfo = false
          callback(new Error('请输入数字'))
        }
      }
      return {
        formModel: Object.assign({}, FormModel),
        labelWidth: '170px',
        rules: {
          protoNum: [{required: true, validator: validatenum, message: '请输入原住院人数', trigger: 'change'}],
          outNum: [{required: true, validator: validatenum, message: '请输入出院人数', trigger: 'change'}],
          inNum: [{required: true, validator: validatenum, message: '请输入入院（转）入人数', trigger: 'change'}],
          surgeryNum: [{required: true, validator: validatenum, message: '请输入手术人数', trigger: 'change'}],
          deathNum: [{required: true, validator: validatenum, message: '请输入死亡人数', trigger: 'change'}],
          nowNum: [{required: true, validator: validatenum, message: '请输入现住院人数', trigger: 'change'}],
          illNum: [{required: true, validator: validatenum, message: '请输入重病人数', trigger: 'change'}],
          doctor: [{required: true, message: '请输入坐班医生', trigger: 'change'}],
          date: [{required: true, message: '请输入坐班日期', trigger: 'change'}]
        },
        targetURL: JdyystatURL
      }
    },
    mounted() {
      this.loadAllDoc() // 获取医生信息
    },
    methods: {
      init(dialogOption) {
        console.log('---------dialogOption------------', dialogOption)
      },
      setGroup(val) {
        this.formModel.downlosd = val
      },
      getDataByDate() {
        console.log('getDataByDate======================', this.formModel.date)
        let searchDate = {'%date%': this.formModel.date}
        this.axios.request({
          method: 'GET',
          url: JdyystatURL,
          params: {
            jsonStr: searchDate
          }
        }).then(res => {
          console.log('res.data============================', res.data.data)
          if (res.data.data.length !== 0) {
            // this.formModel = res.data.data[0]
            this.$alert('所选日期已存在统计数据，请重新选择！')
            this.formModel.date = null
          }
        })
      },
      loadAllDoc() { // 获取医生信息
        this.axios.request({
          method: 'GET',
          url: usersURL + '/getDocsByAutocomplete'
        }).then(res => {
          console.log('getDocsByAutocomplete======================', res.data.data)
          this.restaurantDocs = res.data.data
        })
      },
      querySearchAsyncDoc(queryString, cb) {
        var restaurants = this.restaurantDocs
        var results = queryString ? restaurants.filter(this.createStateFilterDoc(queryString)) : restaurants
        cb(results)
      },
      createStateFilterDoc(queryString) {
        return (state) => {
          return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
        }
      },
      handleSelectDoc(item) {
        console.log('item===========================', item)
        this.formModel.doctor = item.value
      }
    }
  }
</script>

<style scoped lang="stylus" type="text/stylus">
  .el-form
    width 70%
    margin auto
    .short
       width 45%
       display inline-block
    .el-input
      width 70%
</style>
