<template lang="pug">
  div.start
    div.analyse-buttons
      el-button(@click="monthClick" autofocus= true) 数据对比
      el-button(@click="surClick") 术式分析
      el-button(@click="diaClick") 诊断分析
      el-button(@click="operationClick") 手术率
      el-button(@click="bedClick") 病床使用率
      el-button(@click="fiveClick") 五年比手术量
    div.left-box(v-if="monthShow")
      div.left-line
        div.text-box.text 月份数据对比
        div.left-sx
        div.block
          el-date-picker.input-year.chose-first(v-model="chooseYear" type="year" value-format="yyyy"
          placeholder="选择年份")
          el-date-picker.input-date.left-margin(v-model="chooseStartDate" type="date" format="yyyy/M/d" value-format="yyyy/M/d" placeholder="开始日期")
          span.to ~
          el-date-picker.input-date(v-model="chooseEndDate" type="date" format="yyyy/M/d" value-format="yyyy/M/d" placeholder="结束日期")
          el-autocomplete.input-time.left-margin.doctor(v-model="directorDoctor" :fetch-suggestions="querySearchAsyncDoc" @select="handleSelectDoc" placeholder="请输入主管医生")
          el-cascader.input-time.left-margin.doctor1(ref="cascaderSur" placeholder="请选择术式信息" :options="options" filterable @change="getSur" :clearable="true" v-bind:show-all-levels="false" change-on-select)
          el-cascader.input-time.left-margin.doctor1(ref="cascaderDia" placeholder="请选择诊断信息" :options="arrays" filterable @change="getDia" :clearable="true" v-bind:show-all-levels="false" change-on-select)
          span.to.left-margin.chose-first 年龄段
          el-input.input-time.block-input.age-block(type="number" v-model="chooseStartAge" placeholder="起始年龄" min="0")
          span.to ~
          el-input.input-time.block-input.age-block(type="number" v-model="chooseEndAge" placeholder="结束年龄" min="0")
          el-radio.left-margin(v-model="chooseRadio"  label="男") 男
          el-radio.left-margin(v-model="chooseRadio"  label="女") 女
          el-button.search.left-margin(v-on:click="searchColumnar()") 查询
          el-button.reset.search(@click="resetMon") 重置
          div.clear
        div.chart-cnt( id="histogram")
      div.left-xr
    div.left-box(v-if="surShow")
      div.left-line
        div.text-box.text 术式分析
        div.left-sx
        div.block
          el-date-picker.input-time.chose-first(v-model="surDate" type="year" value-format="yyyy" placeholder="选择年份" )
          span.to.left-margin 年龄段
          el-input.input-time.block-input.age-block(type="number" v-model="surStartAge" placeholder="起始年龄" min="0")
          span.to ~
          el-input.input-time.block-input.age-block(type="number" v-model="surEndAge" placeholder="结束年龄" min="0")
          el-radio.left-margin(v-model="surRadio"  label="男") 男
          el-radio.left-margin(v-model="surRadio"  label="女") 女
          el-date-picker.input-time.left-margin(v-model="surStartDate" type="date" placeholder="开始日期")
          span.to ~
          el-date-picker.input-time(v-model="surEndDate" type="date" placeholder="结束日期")
          el-button.reset.search(@click="resetSurPie") 重置
          el-button.search(v-on:click="searchSurPie") 查询
          div.clear
        div.chart-cnt(id="sur")
      div.left-xr
    div.left-box(v-if="diaShow")
      div.left-line
        div.text-box.text 诊断分析
        div.left-sx
        div.block
          el-date-picker.input-time.chose-first(v-model="diaDate" type="year" value-format="yyyy" placeholder="选择年份")
          span.to.left-margin  年龄段
          el-input.input-time.block-input.age-block(type="number" v-model="diaStartAge" placeholder="起始年龄" min="0")
          span.to ~
          el-input.input-time.block-input.age-block(type="number" v-model="diaEndAge" placeholder="结束年龄" min="0")
          el-radio.left-margin(v-model="diaRadio"  label="男") 男
          el-radio.left-margin(v-model="diaRadio"  label="女") 女
          el-date-picker.input-time.left-margin(v-model="diaStartDate" type="date" placeholder="开始日期")
          span.to ~
          el-date-picker.input-time(v-model="diaEndDate" type="date" placeholder="结束日期")
          el-button.reset.search(@click="resetDiaPie") 重置
          el-button.search(v-on:click="searchDiaPie()") 查询
          div.clear
        div.chart-cnt(id="dia")
      div.left-xr
    div.left-box(v-if="operateShow")
      div.left-line
        div.text-box.text 手术率
        div.left-sx
        div.block
          el-date-picker.input-time.chose-first(v-model="operateYear" type="year" format="yyyy" value-format="yyyy" placeholder="选择年份")
          el-date-picker.input-time.chose-first(v-model="operateMonth" type="month" format="yyyy/M" value-format="yyyy/M" placeholder="选择月份")
          el-button.reset.search(@click="resetOperate") 重置
          el-button.search(v-on:click="searchOperate") 查询
          div.clear
        div.chart-cnt(id="operate")
      div.left-xr
    div.left-box(v-if="bedShow")
      div.left-line
        div.text-box.text 病床使用率
        div.left-sx
        div.block
          el-date-picker.input-time.chose-first(v-model="bedYear" type="year" format="yyyy" value-format="yyyy" placeholder="选择年份")
          el-date-picker.input-time.chose-first(v-model="bedMonth" type="month" format="yyyy/M" value-format="yyyy/M" placeholder="选择月份")
          el-date-picker.input-time.left-margin(v-model="bedStartDate" type="date" format="yyyy/M/d" value-format="yyyy/M/d" placeholder="开始日期")
          span.to ~
          el-date-picker.input-time(v-model="bedEndDate" type="date" format="yyyy/M/d" value-format="yyyy/M/d" placeholder="结束日期")
          el-button.reset.search(@click="resetBed") 重置
          el-button.search(v-on:click="searchBed()") 查询
          div.clear
        div.chart-cnt(id="bed")
      div.left-xr
    div.left-box(v-if="fiveShow")
      div.left-line
        div.text-box.text 五年比手术量
        div.left-sx
        div.chart-cnt.five-chart(id="diagram")
      div.left-xr
</template>

<script>
  import {JdyyvisitURL, JdyystatURL, JdyysurURL, JdyydiaURL} from '../../config.toml'
  import {usersURL} from '../../../admin/config.toml'
  import Message from '../../../../components/corelib/common/message'
  import echarts from 'echarts'
  // 引入基本模板
  // let echarts = require('echarts/lib/echarts')
  // 引入柱状图组件
  // require('echarts/lib/chart/bar')
  // 引入提示框和title组件
  // require('echarts/lib/component/tooltip')
  // require('echarts/lib/component/title')
  export default {
    name: 'kalix-jdyy-jdyyana',
    data() {
      return {
        datevalue4: '',
        radio: '',
        items: [], // 定义今日数据指标数据集合
        chooseYear: null, // 定义数据对比柱状图时间插件时间
        columnar: [], // 定义柱状图数据
        columnarX: [], // 定义柱状图数据X轴
        chooseStartAge: null, // 数据对比柱状图年龄段开始年龄
        chooseEndAge: null, // 数据对比柱状图结束年龄
        chooseRadio: null, // 数据对比柱状图男女单选按钮
        firstYear: new Date().getFullYear() + '', // 获取今年年份
        secondYear: new Date().getFullYear() - 1 + '', // 获取近两年年份
        threeYear: new Date().getFullYear() - 2 + '', // 获取近三年年份
        fourYear: new Date().getFullYear() - 3 + '', // 获取进四年年份
        fiveYear: new Date().getFullYear() - 4 + '', // 获取近五年年份
        firstLine: [], // 定义线性图Y轴数据（今年）
        secondLine: [], // 定义线性图Y轴数据（近两年）
        threeLine: [], // 定义线性图Y轴数据（近三年）
        fourLine: [], // 定义线性图Y轴数据（近四年）
        fiveLine: [], // 定义线性图Y轴数据（近五年）
        diaColumn: [], // 诊断饼状图数据列表
        surColumn: [], // 术式饼状图数据列表
        diaData: [], // 诊断饼状图数据
        surData: [], // 术式饼状图数据
        surColumnSelected: {}, // 选中的术式信息
        diaColumnSelected: {}, // 选中的诊断信息
        surDate: null, // 术式饼状图时间插件
        surStartAge: null, // 术式饼状年龄段开始年龄
        surEndAge: null, // 术式饼状图结束年龄
        surRadio: null, // 术式饼状图男女单选按钮
        surStartDate: null, // 术式查询的开始日期
        surEndDate: null, // 术式查询的结束日期
        diaDate: null, // 诊断饼状图时间插件
        diaStartAge: null, // 诊断饼状年龄段开始年龄
        diaEndAge: null, // 诊断饼状图结束年龄
        diaRadio: null, // 诊断饼状图男女单选按钮
        diaStartDate: null, // 诊断查询的开始日期
        diaEndDate: null, // 诊断查询的开始日期
        chooseStartDate: null, // 月份数据对比图查询的开始日期
        chooseEndDate: null, // 月份数据对比图查询的结束日期
        // surgical: null,
        surgicalCode: null,
        diagnosisCode: null,
        Code: null,
        options: [],
        arrays: [],
        duty: '白班',
        monthShow: true,
        surShow: false,
        fiveShow: false,
        diaShow: false,
        operateShow: false,
        bedShow: false,
        option: '',
        directorDoctor: null, // 定义月份数据对比查询条件-主管医生
        bedYear: null, // 定义床位使用率查询条件-年份
        bedMonth: null, // 定义床位使用率查询条件-月份
        bedStartDate: null, // 定义床位使用率查询条件-开始日期
        bedEndDate: null, // 定义床位使用率查询条件-结束日期
        bedColumnarX: [], // 定义床位使用率柱状图X轴数据
        bedColumnarY: [], // 定义床位使用率柱状图Y轴数据
        operateYear: null, // 定义手术率查询条件-年份
        operateMonth: null, // 定义手术率查询条件-月份
        operateColumnarX: [], // 定义手术率柱状图X轴数据
        operateColumnarY: [] // 定义手术率柱状图Y轴数据
      }
    },
    methods: {
      resetOperate() {
        this.operateYear = null
        this.operateMonth = null
      },
      resetBed() {
        this.bedYear = null
        this.bedMonth = null
        this.bedStartDate = null
        this.bedEndDate = null
      },
      resetMon() {
        this.chooseYear = null
        this.chooseStartDate = null
        this.chooseEndDate = null
        this.directorDoctor = null
        let obj = {}
        obj.stopPropagation = () => {
        }
        this.surgicalCode = null
        this.diagnosisCode = null
        this.$refs.cascaderSur.clearValue(obj) // 术式级联选择器重置
        this.$refs.cascaderDia.clearValue(obj) // 诊断级联选择器重置
        this.chooseStartAge = null
        this.chooseEndAge = null
        this.chooseRadio = null
      },
      resetSurPie() {
        this.surDate = null
        this.surStartDate = null
        this.surEndDate = null
        this.surStartAge = null
        this.surEndAge = null
        this.surRadio = null
      },
      resetDiaPie() {
        this.diaDate = null
        this.diaStartDate = null
        this.diaEndDate = null
        this.diaStartAge = null
        this.diaEndAge = null
        this.diaRadio = null
      },
      searchOperate() {
        if (this.operateYear == null && this.operateMonth == null) {
          Message.info('请选择查询条件')
        } else if (this.operateMonth != null) {
          this.operateYear = null
          this.getOperateData()
        } else {
          this.getOperateData()
        }
      },
      searchBed() {
        if (this.bedYear == null && this.bedMonth == null && this.bedStartDate == null && this.bedEndDate == null) {
          Message.info('请选择查询条件')
        } else if (this.bedStartDate != null && this.bedEndDate != null) {
          if (new Date(this.bedStartDate) > new Date(this.bedEndDate)) {
            Message.info('日期选择错误')
          } else {
            this.getBedData()
          }
        } else {
          if (this.bedMonth != null) {
            this.bedYear = null
          } else if (this.bedStartDate != null || this.bedEndDate != null) {
            this.bedMonth = null
            this.bedYear = null
          }
          this.getBedData()
        }
      },
      searchSurPie() {
        if (this.surDate != null) {
          if (this.surStartDate != null || this.surEndDate != null) {
            this.surDate = null
          }
        }
        if (this.surEndAge - this.surStartAge < 0) {
          Message.info('年龄输入有误')
        } else if (this.surStartDate != null && this.surEndDate != null) {
          if (new Date(this.surStartDate) > new Date(this.surEndDate)) {
            Message.info('日期选择有误')
          } else {
            this.getSurData()
          }
        } else {
          this.getSurData()
        }
      },
      searchDiaPie() {
        if (this.diaDate != null) {
          if (this.diaStartDate != null || this.diaEndDate != null) {
            this.diaDate = null
          }
        }
        if (this.diaEndAge - this.diaStartAge < 0) {
          Message.info('年龄输入有误')
        } else if (this.diaStartDate != null && this.diaEndDate != null) {
          if (new Date(this.diaStartDate) > new Date(this.diaEndDate)) {
            Message.info('日期选择有误')
          } else {
            this.getDiaData()
          }
        } else {
          this.getDiaData()
        }
      },
      searchColumnar() {
        if (this.directorDoctor != null || this.surgicalCode != null || this.diagnosisCode != null ||
          this.chooseStartAge != null || this.chooseEndAge != null || this.chooseRadio != null) {
          if (this.surgicalCode != null && this.surgicalCode !== '' &&
            this.diagnosisCode != null && this.diagnosisCode !== '') {
            Message.info('诊断和术式不能同时选择')
          } else {
            if (this.chooseYear == null && this.chooseStartDate == null && this.chooseEndDate == null) {
              Message.info('请选择时间')
            } else {
              if (this.chooseYear != null) {
                if (this.chooseStartDate != null || this.chooseEndDate != null) {
                  this.chooseYear = null
                }
                this.getColumnarData()
              } else {
                if (new Date(this.chooseStartDate) <= new Date(this.chooseEndDate)) {
                  this.getColumnarData()
                } else {
                  Message.info('日期选择有误')
                }
              }
            }
          }
        } else {
          if (this.chooseYear != null) {
            if (this.chooseStartDate != null || this.chooseEndDate != null) {
              this.chooseYear = null
            }
            this.getColumnarData()
          } else {
            if (this.chooseStartDate != null && this.chooseEndDate != null) {
              if (new Date(this.chooseStartDate) < new Date(this.chooseEndDate)) {
                this.getColumnarData()
              } else {
                Message.info('日期选择有误')
              }
            } else if (this.chooseStartDate != null || this.chooseEndDate != null) {
              this.getColumnarData()
            } else {
              Message.info('请选择查询条件')
            }
          }
        }
        // if (this.surgicalCode != null || this.surgicalCode !== '') {
        //   if (this.diagnosisCode == null) {
        //     if (this.chooseYear == null && this.chooseStartDate == null && this.chooseEndDate == null) {
        //       Message.info('请选择时间')
        //     } else {
        //       if (this.chooseYear != null) {
        //         if (this.chooseStartDate != null || this.chooseEndDate != null) {
        //           this.chooseYear = null
        //         }
        //         this.getColumnarData()
        //       } else {
        //         if (new Date(this.chooseStartDate) <= new Date(this.chooseEndDate)) {
        //           this.getColumnarData()
        //         } else {
        //           Message.info('日期选择有误')
        //         }
        //       }
        //     }
        //   } else {
        //     Message.info('诊断和术式不能同时选择')
        //   }
        // } else {
        //   if (this.chooseYear != null) {
        //     if (this.chooseStartDate != null || this.chooseEndDate != null) {
        //       this.chooseYear = null
        //     }
        //     this.getColumnarData()
        //   } else {
        //     if (this.chooseStartDate != null && this.chooseEndDate != null) {
        //       if (new Date(this.chooseStartDate) < new Date(this.chooseEndDate)) {
        //         this.getColumnarData()
        //       } else {
        //         Message.info('日期选择有误')
        //       }
        //     } else if (this.chooseStartDate != null || this.chooseEndDate != null) {
        //       this.getColumnarData()
        //     } else {
        //       Message.info('请选择查询条件')
        //     }
        //   }
        // }
      },
      getColumnarData() {
        this.axios.request({
          method: 'GET',
          url: JdyyvisitURL + '/getColumnarData',
          params: {
            chooseYear: this.chooseYear,
            chooseStartDate: this.chooseStartDate,
            chooseEndDate: this.chooseEndDate,
            directorDoctor: this.directorDoctor,
            surgicalCode: this.surgicalCode,
            diagnosisCode: this.diagnosisCode,
            chooseStartAge: this.chooseStartAge,
            chooseEndAge: this.chooseEndAge,
            chooseRadio: this.chooseRadio
          }
        }).then(res => {
          console.log('res======================', res.data.data)
          if (res.data.data.length > 0) {
            this.columnarX = []
            this.columnar = []
            for (let i = 0; i < res.data.data.length; i++) {
              this.columnarX.push(res.data.data[i].month)
              this.columnar.push(res.data.data[i].sum)
            }
          } else {
            Message.info('暂无数据')
          }
          console.log('this.columnarX================', this.columnarX)
          console.log('this.columnar================', this.columnar)
          this.histogram('histogram')
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
        this.formModel1.directorDoctor = item.value
      },
      monthClick() {
        this.monthShow = true
        this.surShow = false
        this.fiveShow = false
        this.diaShow = false
        this.operateShow = false
        this.bedShow = false
        this.getColumnarData()
      },
      surClick() {
        this.monthShow = false
        this.surShow = true
        this.fiveShow = false
        this.diaShow = false
        this.operateShow = false
        this.bedShow = false
        this.getSurData()
      },
      fiveClick() {
        this.monthShow = false
        this.surShow = false
        this.fiveShow = true
        this.diaShow = false
        this.operateShow = false
        this.bedShow = false
        this.getLine()
      },
      diaClick() {
        this.monthShow = false
        this.surShow = false
        this.fiveShow = false
        this.diaShow = true
        this.operateShow = false
        this.bedShow = false
        this.getDiaData()
      },
      operationClick() {
        this.monthShow = false
        this.surShow = false
        this.fiveShow = false
        this.diaShow = false
        this.operateShow = true
        this.bedShow = false
        this.getOperateData()
      },
      bedClick() {
        this.monthShow = false
        this.surShow = false
        this.fiveShow = false
        this.diaShow = false
        this.operateShow = false
        this.bedShow = true
        this.getBedData()
      },
      open() {
        this.$alert('该年份没有数据 ', '温馨提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `查询无数据`
            })
          }
        })
      },
      surPie(id) {
        console.log('charts++++++++++', this.charts)
        let charts = echarts.init(document.getElementById(id))
        charts.clear()
        charts.setOption({
          tooltip: {
            formatter: '{a}<br/>{b}:{c} ({d}%)',
            axisPointer: {
              type: 'none'
            }
          },
          dataZoom: {
            show: false
          },
          legend: {
            type: 'scroll',
            orient: 'vertical',
            x: 'left',
            data: this.surColumn,
            textStyle: {
              color: '#303030',
              fontSize: 20,
              fontWeight: 'bold'
            },
            selected: this.surColumnSelected,
            formatter: function (name) {
              return (name.length > 8 ? (name.slice(0, 8) + '...') : name)
            }
          },
          labelLine: {
            show: false
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            },
            right: 20
          },
          xAxis: {
            show: false
          },
          yAxis: {
            show: false
          },
          series: [
            {
              name: '手术分析',
              type: 'pie',
              radius: '80%',
              center: ['50%', '50%'],
              data: this.surData,
              color: ['#f49f42', '#00BFFF', '#FF0000', '#3CB371', '#9370DB', '#808080', '#00FFFF', '#FF33FF', '#33CC00', '#DB7093'],
              label: {
                align: 'left',
                normal: {
                  formatter(v) {
                    let text = v.percent + '%' + '' + v.name
                    console.log('v++++++++++++++++++', v)
                    // if (v.data.value === 0) {
                    //   // params.data.itemStyle.normal.labelLine.show = false;
                    //   v.data.label.normal.show = false
                    //   v.data.labelLine.normal.show = false
                    // }
                    if (text.length <= 8) {
                      return text
                    } else if (text.length > 8 && text.length <= 16) {
                      text = `${text.slice(0, 8)}\n${text.slice(8)}`
                      return text
                    } else if (text.length > 16 && text.length <= 24) {
                      text = `${text.slice(0, 8)}\n${text.slice(8, 16)}\n${text.slice(16)}`
                      return text
                    } else if (text.length > 24 && text.length <= 30) {
                      text = `${text.slice(0, 8)}\n${text.slice(8, 16)}\n${text.slice(16, 24)}\n${text.slice(24)}`
                      return text
                    } else if (text.length > 30) {
                      text = `${text.slice(0, 8)}\n${text.slice(8, 16)}\n${text.slice(16, 24)}\n${text.slice(24, 30)}\n${text.slice(30)}`
                      return text
                    }
                  },
                  textStyle: {
                    color: '#303030',
                    fontSize: 20,
                    fontWeight: 'bold'
                  }
                }
              }
            }
          ]
        }, true)
      },
      diaPie(id) {
        let charts = echarts.init(document.getElementById(id))
        charts.clear()
        charts.setOption({
          tooltip: {
            formatter: '{a}<br/>{b}:{c} ({d}%)',
            axisPointer: {
              type: 'none'
            }
          },
          dataZoom: {
            show: false
          },
          legend: {
            type: 'scroll',
            orient: 'vertical',
            x: 'left',
            data: this.diaColumn,
            textStyle: {
              color: '#303030',
              fontSize: 20,
              fontWeight: 'bold'
            },
            formatter: function (name) {
              return (name.length > 6 ? (name.slice(0, 6) + '...') : name)
            },
            selected: this.diaColumnSelected
          },
          labelLine: {
            show: false
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            },
            right: 20
          },
          xAxis: {
            show: false
          },
          yAxis: {
            show: false
          },
          series: [
            {
              name: '诊断分析',
              type: 'pie',
              radius: '80%',
              center: ['50%', '50%'],
              data: this.diaData,
              color: ['#f49f42', '#00BFFF', '#FF0000', '#3CB371', '#9370DB', '#808080', '#00FFFF', '#FF33FF', '#33CC00', '#DB7093'],
              label: {
                align: 'left',
                normal: {
                  formatter(v) {
                    let text = v.percent + '%' + '' + v.name
                    if (text.length <= 6) {
                      return text
                    } else if (text.length > 8 && text.length <= 16) {
                      text = `${text.slice(0, 10)}\n${text.slice(10)}`
                      return text
                    } else if (text.length > 16 && text.length <= 24) {
                      text = `${text.slice(0, 6)}\n${text.slice(6, 16)}\n${text.slice(16)}`
                      return text
                    } else if (text.length > 24 && text.length <= 30) {
                      text = `${text.slice(0, 6)}\n${text.slice(6, 16)}\n${text.slice(16, 24)}\n${text.slice(24)}`
                      return text
                    } else if (text.length > 30) {
                      text = `${text.slice(0, 6)}\n${text.slice(6, 16)}\n${text.slice(16, 24)}\n${text.slice(24, 30)}\n${text.slice(30)}`
                      return text
                    }
                  },
                  textStyle: {
                    color: '#303030',
                    fontSize: 20,
                    fontWeight: 'bold'
                  }
                }
              }
            }
          ]
        }, true)
      },
      operateColumn(id) {
        let charts = echarts.init(document.getElementById(id))
        charts.clear()
        charts.setOption({
          tooltip: {
            trigger: 'axis',
            formatter: '{b}:\n{c}%'
          },
          dataZoom: [{
            type: 'slider',
            show: true,
            xAxisIndex: [0],
            left: 50,
            bottom: -5,
            startValue: 0,
            endValue: 6
          }],
          legend: {
            data: ['手术率'],
            x: 'center',
            textStyle: {
              color: '#000',
              fontSize: 24,
              fontWeight: 'bold'
            }
          },
          grid: {
            left: '2%',
            right: '2%',
            bottom: 30,
            containLabel: true
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            },
            right: 20
          },
          xAxis: [
            {
              type: 'category',
              show: true,
              data: this.operateColumnarX,
              axisLabel: {
                show: true,
                interval: 0,
                textStyle: {
                  color: '#2d8ac7',
                  fontSize: 24,
                  fontWeight: 'bold'
                }
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              show: true,
              axisLabel: {
                interval: 0,
                textStyle: {
                  color: '#2d8ac7',
                  fontSize: 24,
                  fontWeight: 'bold'
                },
                formatter: '{value} %'
              }
            }
          ],
          series: [
            {
              name: '手术率',
              type: 'bar',
              barWidth: '30%',
              data: this.operateColumnarY,
              color: '#2d8ac7'
            },
            {
              name: '手术率',
              type: 'line',
              data: this.operateColumnarY,
              color: '#2d8ac7',
              lineStyle: {
                color: '#f00'
              }
            }
          ]
        }, true)
      },
      bedColumnar(id) {
        console.log('histogram', id)
        let charts = echarts.init(document.getElementById(id))
        charts.clear()
        charts.setOption({
          tooltip: {
            trigger: 'axis',
            formatter: '{b}:\n{c}%'
          },
          dataZoom: [{
            type: 'slider',
            show: true,
            xAxisIndex: [0],
            left: 50,
            bottom: -5,
            startValue: 0,
            endValue: 6
          }],
          legend: {
            data: ['病床使用率'],
            x: 'center',
            textStyle: {
              color: '#000',
              fontSize: 24,
              fontWeight: 'bold'
            }
          },
          grid: {
            left: '2%',
            right: '2%',
            bottom: 30,
            containLabel: true
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            },
            right: 20
          },
          xAxis: [
            {
              type: 'category',
              show: true,
              data: this.bedColumnarX,
              axisLabel: {
                show: true,
                interval: 0,
                textStyle: {
                  color: '#2d8ac7',
                  fontSize: 24,
                  fontWeight: 'bold'
                }
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              show: true,
              axisLabel: {
                interval: 0,
                textStyle: {
                  color: '#2d8ac7',
                  fontSize: 24,
                  fontWeight: 'bold'
                },
                formatter: '{value} %'
              }
            }
          ],
          series: [
            {
              name: '病床使用率',
              type: 'bar',
              barWidth: '30%',
              data: this.bedColumnarY,
              color: '#2d8ac7'
            },
            {
              type: 'line',
              data: this.bedColumnarY,
              color: '#2d8ac7',
              lineStyle: {
                color: '#f00'
              }
            }
          ]
        }, true)
      },
      histogram(id) {
        console.log('histogram', id)
        let charts = echarts.init(document.getElementById(id))
        charts.clear()
        charts.setOption({
          tooltip: {
            trigger: 'axis'
          },
          dataZoom: [{
            type: 'slider',
            show: true,
            xAxisIndex: [0],
            left: 50,
            bottom: -5,
            startValue: 0,
            endValue: 6
          }],
          legend: {
            data: ['人数'],
            x: 'center',
            textStyle: {
              color: '#000',
              fontSize: 24,
              fontWeight: 'bold'
            }
          },
          grid: {
            left: '2%',
            right: '2%',
            bottom: 30,
            containLabel: true
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            },
            right: 20
          },
          xAxis: [
            {
              type: 'category',
              show: true,
              data: this.columnarX,
              axisLabel: {
                show: true,
                interval: 0,
                textStyle: {
                  color: '#2d8ac7',
                  fontSize: 24,
                  fontWeight: 'bold'
                }
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              show: true,
              axisLabel: {
                interval: 0,
                textStyle: {
                  color: '#2d8ac7',
                  fontSize: 24,
                  fontWeight: 'bold'
                }
              }
            }
          ],
          series: [
            {
              name: '人数',
              type: 'bar',
              barWidth: '30%',
              data: this.columnar,
              color: '#2d8ac7'
            },
            {
              name: '人数',
              type: 'line',
              data: this.columnar,
              color: '#012655',
              lineStyle: {
                color: '#f00'
              }
            }
          ]
        }, true)
      },
      diagram(id) {
        console.log('diagram', id)
        let charts = echarts.init(document.getElementById(id))
        charts.clear()
        charts.setOption({
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: [this.firstYear, this.secondYear, this.threeYear, this.fourYear, this.fiveYear],
            textStyle: {
              color: '#2d8ac7'
            }
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            },
            right: 20
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
            axisLabel: {
              show: true,
              interval: 0,
              textStyle: {
                color: '#2d8ac7',
                fontSize: 22,
                fontWeight: 'bold'
              }
            }
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              show: true,
              textStyle: {
                color: '#2d8ac7',
                fontSize: 22,
                fontWeight: 'bold'
              }
            }
          },
          series: [
            {
              name: this.firstYear,
              type: 'line',
              smooth: true,
              data: this.firstLine
            },
            {
              name: this.secondYear,
              type: 'line',
              smooth: true,
              data: this.secondLine
            },
            {
              name: this.threeYear,
              type: 'line',
              smooth: true,
              data: this.threeLine
            },
            {
              name: this.fourYear,
              type: 'line',
              smooth: true,
              data: this.fourLine
            },
            {
              name: this.fiveYear,
              type: 'line',
              smooth: true,
              data: this.fiveLine
            }
          ]
        }, true)
      },
      getDate() { // 获取系统当前时间
        /* eslint-disable */
        let date = new Date()
        let year = date.getFullYear()
        let month = date.getMonth() + 1
        let day = date.getDate()
        // if (month >= 1 && month <= 9) {
        //   month = "0" + month;
        // }
        let nowDate = year + '/' + month + '/' + day
        console.log('date .toLocaleDateString()==================', date.toLocaleDateString())
        // this.getColumnar(year) // 获取月份数据对比柱状图数据方法
        // this.chooseYear = year
        // this.getColumnarData()
      },
      getLine() { // 获取近五年比手术量数据
        this.$http.request({// 向后台发送请求
          method: 'GET',
          url: JdyyvisitURL + '/getColumnarData',
          params: {
            chooseYear: this.firstYear
          }
        }).then(response => {
          console.log("firstYear================", response.data)
          if (response.data.data.length > 0) {
            this.firstLine = []
            for (let i = 0; i < response.data.data.length; i++) {
              this.firstLine.push(response.data.data[i].sum)
            }
          }
          this.diagram('diagram')
        })
        this.$http.request({// 向后台发送请求
          method: 'GET',
          url: JdyyvisitURL + '/getColumnarData',
          params: {
            chooseYear: this.secondYear
          }
        }).then(response => {
          console.log("secondYear================", response.data)
          if (response.data.data.length > 0) {
            this.secondLine = []
            for (let i = 0; i < response.data.data.length; i++) {
              this.secondLine.push(response.data.data[i].sum)
            }
          }
          this.diagram('diagram')
        })
        this.$http.request({// 向后台发送请求
          method: 'GET',
          url: JdyyvisitURL + '/getColumnarData',
          params: {
            chooseYear: this.threeYear
          }
        }).then(response => {
          console.log("threeLine================", response.data)
          if (response.data.data.length > 0) {
            this.threeLine = []
            for (let i = 0; i < response.data.data.length; i++) {
              this.threeLine.push(response.data.data[i].sum)
            }
          }
          this.diagram('diagram')
        })
        this.$http.request({// 向后台发送请求
          method: 'GET',
          url: JdyyvisitURL + '/getColumnarData',
          params: {
            chooseYear: this.fourYear
          }
        }).then(response => {
          console.log("fourLine================", response.data)
          if (response.data.data.length > 0) {
            this.fourLine = []
            for (let i = 0; i < response.data.data.length; i++) {
              this.fourLine.push(response.data.data[i].sum)
            }
          }
          this.diagram('diagram')
        })
        this.$http.request({// 向后台发送请求
          method: 'GET',
          url: JdyyvisitURL + '/getColumnarData',
          params: {
            chooseYear: this.fiveYear
          }
        }).then(response => {
          console.log("fiveLine================", response.data)
          if (response.data.data.length > 0) {
            this.fiveLine = []
            for (let i = 0; i < response.data.data.length; i++) {
              this.fiveLine.push(response.data.data[i].sum)
            }
          }
          this.diagram('diagram')
        })
      },
      getDiaData() { // 获取诊断统计数据
        console.log('getDiaData=========================in')
        this.axios.request({
          method: 'GET',
          url: '/camel/rest/jdyy/visits/getDiaData',
          params: {
            diaDate: this.diaDate,
            diaStartAge: this.diaStartAge,
            diaEndAge: this.diaEndAge,
            diaRadio: this.diaRadio,
            diaStartDate: this.diaStartDate,
            diaEndDate: this.diaEndDate
          }
        }).then(res => {
          console.log('getDiaData==============', res.data.data)
          if (res.data.data.length == 0) {
            this.open()
            // this.diaDate = null
            // this.getDiaData()
          }
          let diaColumn = ''
          for (let i = 0; i < res.data.data.length; i++) {
            diaColumn += res.data.data[i].name + ","
          }
          console.log('diaColumn===========================', diaColumn)
          let strs = diaColumn.substring(0, diaColumn.length - 1).split(',')
          for (let i = 0; i < strs.length; i++) {
            this.diaColumn[i] = strs[i]
          }
          console.log('this.diaColumn========================', this.diaColumn)
          this.diaData = res.data.data
          if (this.diaData) {
            this.diaData.map(e => {
              if (e.value == 0) {
                this.$set(this.diaColumnSelected, e.name, false)
                this.$set(e, 'label', {show: false})
                this.$set(e, 'labelLine', {show: false})
              } else {
                this.$set(this.diaColumnSelected, e.name, true)
              }
            })
          }
          this.diaPie('dia')
        })
      },
      getSurData() { // 获取术式统计数据
        console.log('getSurData=========================in')
        this.axios.request({
          method: 'GET',
          url: '/camel/rest/jdyy/visits/getSurData',
          params: {
            surDate: this.surDate,
            surStartAge: this.surStartAge,
            surEndAge: this.surEndAge,
            surRadio: this.surRadio,
            surStartDate: this.surStartDate,
            surEndDate: this.surEndDate
          }
        }).then(res => {
          console.log('getSurData==============', res.data.data)
          if (res.data.data.length == 0) {
            this.open()
            // this.surDate = null
            // this.getSurData()
          }
          let surColumn = ''
          for (let i = 0; i < res.data.data.length; i++) {
            surColumn += res.data.data[i].name + ","
          }
          console.log('surColumn===========================', surColumn)
          let strs = surColumn.substring(0, surColumn.length - 1).split(',')
          for (let i = 0; i < strs.length; i++) {
            this.surColumn[i] = strs[i]
          }
          console.log('this.surColumn========================', this.surColumn)
          this.surData = res.data.data
          if (this.surData) {
            this.surData.map(e => {
              if (e.value == 0) {
                this.$set(this.surColumnSelected, e.name, false)
                this.$set(e, 'label', {show: false})
                this.$set(e, 'labelLine', {show: false})
              } else {
                this.$set(this.surColumnSelected, e.name, true)
              }
            })
          }
          this.surPie('sur')
        })
      },
      getOperateData() { // 获取术式统计数据
        console.log('getOperateData=========================in')
        this.axios.request({
          method: 'GET',
          url: JdyyvisitURL + '/getOperateByDate',
          params: {
            operateYear: this.operateYear,
            operateMonth: this.operateMonth
          }
        }).then(res => {
          console.log('getOperateData==============', res.data.data)
          if (res.data.data.length > 0) {
            this.operateColumnarX = []
            this.operateColumnarY = []
            for (let i = 0; i < res.data.data.length; i++) {
              this.operateColumnarX.push(res.data.data[i].columnX)
              this.operateColumnarY.push(res.data.data[i].columnY)
            }
          } else {
            Message.info('暂无数据')
          }
          console.log('this.columnarX================', this.operateColumnarX)
          console.log('this.columnarY================', this.operateColumnarY)
          this.operateColumn('operate')
        })
      },
      getBedData() {
        this.axios.request({
          method: 'GET',
          url: JdyystatURL + '/getBedData',
          params: {
            bedYear: this.bedYear,
            bedMonth: this.bedMonth,
            bedStartDate: this.bedStartDate,
            bedEndDate: this.bedEndDate
          }
        }).then(res => {
          console.log('res======================', res.data.data)
          if (res.data.data.length > 0) {
            this.bedColumnarX = []
            this.bedColumnarY = []
            for (let i = 0; i < res.data.data.length; i++) {
              this.bedColumnarX.push(res.data.data[i].columnX)
              this.bedColumnarY.push(res.data.data[i].columnY)
            }
          } else {
            Message.info('暂无数据')
          }
          console.log('this.columnarX================', this.bedColumnarX)
          console.log('this.columnarY================', this.bedColumnarY)
          this.bedColumnar('bed')
        })
      },
      getSurCascader() { // 获取术式信息并以级联形式显示
        console.log('getSurCascader========================')
        this.axios.request({
          method: 'GET',
          url: JdyysurURL + '/getSurCascader'
        }).then(res => {
          console.log('Request-getSurCascader-Success==============', res.data.data)
          this.options = res.data.data
        })
      },
      getDiaCascader() { // 获取诊断信息并以级联形式显示
        console.log('getDiaCascader========================')
        this.axios.request({
          method: 'GET',
          url: JdyydiaURL + '/getDiaCascader'
        }).then(res => {
          console.log('Request-getDiaCascader-Success==============', res.data.data)
          this.arrays = res.data.data
        })
      },
      getSur(val) { // 通过级联获取数据后转成字符串
        this.surgicalCode = val.toString().substring(val.toString().lastIndexOf(',') + 1, val.toString().length)
      },
      getDia(val) { // 通过级联获取数据后转成字符串
        this.diagnosisCode = val.toString().substring(val.toString().lastIndexOf(',') + 1, val.toString().length)
      }
    },
    // 调用
    mounted() {
      this.loadAllDoc() // 获取主管医生数据
      this.getSurCascader() // 获取术式信息并以级联形式显示
      this.getDiaCascader() // 获取诊断信息并以级联形式显示
    },
    // watch:{
    //   surDate:function () {
    //     console.log('surDate==================================', this.surDate)
    //     this.getSurData()
    //   },
    //   surStartAge:function () {
    //     let i = this.surEndAge - this.surStartAge
    //     if(i > 0){
    //       console.log('surStartAge==================================', this.surStartAge)
    //       this.getSurData()
    //     }
    //   },
    //   surEndAge:function () {
    //     let i = this.surEndAge - this.surStartAge
    //     if(i > 0){
    //       console.log('surEndAge==================================', this.surEndAge)
    //       this.getSurData()
    //     }
    //   },
    //   surRadio:function () {
    //     console.log('surRadio==================================', this.surRadio)
    //     this.getSurData()
    //   },
    //   diaDate:function () {
    //     console.log('surDate==================================', this.diaDate)
    //     this.getDiaData()
    //   },
    //   diaStartAge:function () {
    //     let i = this.diaEndAge - this.diaStartAge
    //     if (i > 0){
    //       console.log('surStartAge==================================', this.diaStartAge)
    //       this.getDiaData()
    //     }
    //   },
    //   diaEndAge:function () {
    //     let i = this.diaEndAge - this.diaStartAge
    //     if (i > 0){
    //       console.log('surEndAge==================================', this.diaEndAge)
    //       this.getDiaData()
    //     }
    //   },
    //   diaRadio:function () {
    //     console.log('surRadio==================================', this.diaRadio)
    //     this.getDiaData()
    //   }
    // }
  }

</script>

<style scoped lang="stylus" type="text/stylus">
  * {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .clear {
    clear both
  }

  .start
    width 100%
    padding 30px 5px
    color #2d8ac7
    .analyse-buttons
      width 1104px
      margin auto
      margin-bottom 30px
      .el-button
        font-size 24px
        font-weight bold
        padding 15px
        margin 0 20px
    .left-box
      width 80%
      margin 0px auto
      height 600px
      border 2px solid #23769a
      position relative
    .left-line
      width 98%
      min-height 580px
      margin 10px auto
      border 0.3px solid #23769a
      border-radius 5px
      box-shadow 0px 0px 10px 5px #23769a inset
    .text-box
      width 30%
      position relative
      background-color rgba(77, 109, 177, 0.8)
      margin 0 auto
      text-align center
      font-size 2.2vw
      color #ffffff
      font-weight bold
      padding 5px 0
      top -30px
    .left-sx
      width 30px
      height 30px
      border-left 5px solid #3ac8f3
      border-top 5px solid #3ac8f3
      position absolute
      left -5px
      top -5px
    .left-xr
      width 30px
      height 30px
      border-right 5px solid #3ac8f3
      border-bottom 5px solid #3ac8f3
      position absolute
      right -5px
      bottom -5px
    .block
      margin-top -10px
    .input-time
      border 2px solid #909090
      border-radius 4px
      color #23769a
      margin-bottom 10px
      font-size 18px !important
      font-weight bold !important
      width 170px
      .el-input
        font-size 22px
        font-weight bold
      .el-input__inner
        padding-left: 30px;
        height 30px
    .input-year
      border 2px solid #909090
      border-radius 4px
      color #23769a
      margin-bottom 10px
      font-size 18px !important
      font-weight bold !important
      width 132px
    .input-date
      border 2px solid #909090
      border-radius 4px
      color #23769a
      margin-bottom 10px
      font-size 18px !important
      font-weight bold !important
      width 145px
    .doctor
      width 180px
    .doctor1
      width 190px

    .age-block
      width 120px

  .to
    margin 0 5px
    font-size 20px
    font-weight bold

  .left-margin
    margin-left 15px

  .chose-first
    margin-left 40px

  .search
    font-size 20px
    font-weight bold
    padding 10px
    float right
    margin-right 34px

  .block-input
    width 140px
    display inline-block

  .chart-cnt
    width 94%
    height 430px
    margin 0 auto
    position absolute !important
    left 3%
    bottom 20px

  .five-chart
    margin-bottom 20px
</style>
<style lang="stylus">
  .input-time
    .el-input
      font-size 20px
      font-weight bold
</style>
