<template lang="pug">
  kalix-dialog.user-add(title='编辑' bizKey="jdyyPos" ref="kalixBizDialog" v-bind:formModel.sync="form" v-bind:targetURL="targetURL")
    div.back(slot="dialogFormSlot")
      el-form(ref="form" :model="form" label-width="100px" :label-position="labelPosition" )
        div.art1
          h1.title 全髋关节置换术
          div.con1
            div.con1-left
              el-form-item.toleft(label="姓名")
                el-input(v-model="form.name" clearable)
              el-form-item.toleft(label="性别")
                el-radio-group(v-model="form.sex")
                  el-radio(label="男")
                  el-radio(label="女")
              el-form-item.toleft(label="年龄")
                el-input(v-model="form.age" clearable)
              el-form-item.toleft(label="电话")
                el-input(v-model="form.tel" clearable)
              el-form-item.toleft(label="地址")
                el-input(v-model="form.address" clearable)
            div.con1-right
              el-form-item.short.toleft(label="住院号")
                el-input(v-model="form.inpatientNumber" clearable)
              el-form-item.short(label="研究序号")
                el-input(v-model="form.inpatientNumber" clearable)
              el-form-item.toleft(label="日期")
                el-col(:span="22")
                  el-date-picker(type="date" placeholder="选择日期" v-model="form.date" style="width: 100%;")
              el-form-item.toleft(label="部位")
                el-radio-group(v-model="form.position")
                  el-radio(label="左")
                  el-radio(label="右")
              el-form-item.short.toleft(label="诊断")
                el-select(v-model="form.disease" placeholder="请选择")
                  el-option(label="股骨头缺血性坏死" value="股骨头缺血性坏死")
                  el-option(label="骨性关节炎" value="骨性关节炎")
                  el-option(label="类风湿性关节炎" value="类风湿性关节炎")
                  el-option(label="其他" value="其他")
              el-form-item.short(label="手术类型")
                el-select(v-model="form.operationType" placeholder="请选择")
                  el-option(label="初次" value="初次")
                  el-option(label="翻修" value="翻修")
                  el-option(label="更换部分组件" value="更换部分组件")
              el-form-item.short.toleft(label="假体")
                el-input(v-model="form.prosthesis" clearable)
              el-form-item.short(label="医生")
                el-input(v-model="form.doctor" clearable)
        div.art2
          h1.title 术前及围手术期手术资料
          div.con2
            table
              tr
                td.short-td
                  div.con2-left 部位
                td.long-td
                  div.con2-right
                    el-form-item.toleft
                      el-radio-group(v-model="form.position")
                        el-radio(label="左")
                        el-radio(label="右")
              tr
                td.short-td
                  div.con2-left 主要诊断
                td.long-td
                  div.con2-right
                    el-form-item.short(label="关节炎")
                      el-select(v-model="form.arthritis" placeholder="请选择")
                        el-option(label="类风关" value="类风关")
                        el-option(label="骨性关节炎" value="骨性关节炎")
                        el-option(label="幼年特发性关节炎" value="幼年特发性关节炎")
                        el-option(label="强脊" value="强脊")
                        el-option(label="创伤性关节炎" value="创伤性关节炎")
                    el-form-item.short(label="骨坏死")
                      el-select(v-model="form.osteonecrosis" placeholder="请选择")
                        el-option(label="药物性骨坏死" value="药物性骨坏死")
                        el-option(label="酒精性骨坏死" value="酒精性骨坏死")
                        el-option(label="创伤性骨坏死" value="创伤性骨坏死")
                        el-option(label="自发性骨坏死" value="自发性骨坏死")
                    el-form-item.short(label="常见病因")
                      el-select(v-model="form.pathogeny" placeholder="请选择")
                        el-option(label="陈旧性结核" value="陈旧性结核")
                        el-option(label="急性骨折" value="急性骨折")
                        el-option(label="发育不良" value="发育不良")
                    el-form-item.other(label="其他")
                      el-input(v-model="form.other1" clearable)
              tr
                td.short-td
                  div.con2-left 翻修指征
                td.long-td
                  div.con2-right
                    el-form-item.short(label="松动")
                      el-select(v-model="form.loosening" placeholder="请选择")
                        el-option(label="无" value="无")
                        el-option(label="无菌性松动" value="无菌性松动")
                        el-option(label="低毒性感染" value="低毒性感染")
                    el-form-item.short(label="聚乙烯磨损")
                      el-select(v-model="form.abrasion" placeholder="请选择")
                        el-option(label="无" value="无")
                        el-option(label="骨溶解" value="骨溶解")
                        el-option(label="无骨溶解" value="无骨溶解")
                    el-form-item.short(label="深部感染")
                      el-select(v-model="form.infected1" placeholder="请选择")
                        el-option(label="无" value="无")
                        el-option(label="一期感染" value="一期感染")
                        el-option(label="二期感染" value="二期感染")
                    el-form-item.short(label="其他")
                      el-input(v-model="form.other2" clearable)
              tr
                td.short-td
                  div.con2-left 术前髋关节情况/治疗
                td.long-td
                  div.con2-right
                    el-form-item.short(label="骨折")
                      el-radio-group(v-model="form.fracture")
                        el-radio(label="是")
                        el-radio(label="否")
                    el-form-item.short(label="感染")
                      el-radio-group(v-model="form.infected2")
                        el-radio(label="是")
                        el-radio(label="否")
                    el-form-item.short(label="置换")
                      el-radio-group(v-model="form.substitution")
                        el-radio(label="是")
                        el-radio(label="否")
                    el-form-item.short(label="其他")
                      el-radio-group(v-model="form.other3")
                        el-radio(label="是")
                        el-radio(label="否")
              tr
                td.short-td
                  div.con2-left 其他关节
                td.long-td
                  div.con2-right
                    el-form-item.short(label="对侧髋关节")
                      el-select(v-model="form.contralateral" placeholder="请选择")
                        el-option(label="无病灶" value="无病灶")
                        el-option(label="有病灶但无症状" value="有病灶但无症状")
                        el-option(label="有症状" value="有症状")
                        el-option(label="已经置换" value="已经置换")
                        el-option(label="准备置换" value="准备置换")
                        el-option(label="不想置换" value="不想置换")
                    el-form-item.short(label="其他")
                      el-input(v-model="form.other4" clearable)
              tr
                td.short-td
                  div.con2-left 其他信息
                td.long-td
                  div.con2-right
                    el-form-item.short(label="身高")
                      el-input(v-model="form.height" clearable)
                        template(slot="append") cm
                    el-form-item.short(label="其他疾病")
                      el-input(v-model="form.other5" clearable)
                    el-form-item.short(label="体重")
                      el-input(v-model="form.weight" clearable)
                        template(slot="append") kg
                    el-form-item.short(label="职业")
                      el-input(v-model="form.work" clearable)
              tr
                td.short-td
                  div.con2-left 病人分类
                td.long-td
                  div.con2-right
                    el-form-item(label="分类")
                      el-select.long(v-model="form.classification" placeholder="请选择")
                        el-option(label="单侧髋受累，无其他影响走路的疾病" value="单侧髋受累，无其他影响走路的疾病")
                        el-option(label="双侧髋受累，无其他影响走路的疾病" value="双侧髋受累，无其他影响走路的疾病")
                        el-option(label="身体一般问题影响走路" value="身体一般问题影响走路")
            //           ***************************************************************************
            table
              tr
                td.short-td
                  div.con2-left 手术
                td.long-td
                  div.con2-right
                    el-form-item(label="日期")
                      el-col(:span="23")
                        el-date-picker(type="date" placeholder="选择日期" v-model="form.date2" style="width: 45%;")
                    el-form-item.short(label="手术医生")
                      el-input(v-model="form.doctor2" clearable)
              tr
                td.short-td
                  div.con2-left 体位&入路
                td.long-td
                  div.con2-right
                    el-form-item.short(label="体位")
                      el-select(v-model="form.posture" placeholder="请选择")
                        el-option(label="侧卧" value="侧卧")
                        el-option(label="仰卧" value="仰卧")
                        el-option(label="其他" value="其他")
                    el-form-item.short(label="入路")
                      el-select(v-model="form.approach" placeholder="请选择")
                        el-option(label="后侧" value="后侧")
                        el-option(label="经臀肌入路" value="经臀肌入路")
                        el-option(label="转子间截骨" value="转子间截骨")
                        el-option(label="前侧" value="前侧")
                        el-option(label="联合" value="联合")
                        el-option(label="其他" value="其他")
              tr
                td.short-td
                  div.con2-left 翻修手术术中所见
                td.long-td
                  div.con2-right
                    el-form-item.short(label="瘢痕")
                      el-select(v-model="form.scar" placeholder="请选择")
                        el-option(label="微小" value="微小")
                        el-option(label="正常" value="正常")
                        el-option(label="严重" value="严重")
                    el-form-item.short(label="臼杯")
                      el-select(v-model="form.acetabular" placeholder="请选择")
                        el-option(label="完整" value="完整")
                        el-option(label="聚乙烯磨损" value="聚乙烯磨损")
                        el-option(label="松动" value="松动")
                        el-option(label="严重松动" value="严重松动")
                    el-form-item.short(label="股骨头")
                      el-select(v-model="form.femoralhead" placeholder="请选择")
                        el-option(label="完整" value="完整")
                        el-option(label="磨损" value="磨损")
                    el-form-item.short(label="股骨柄")
                      el-select(v-model="form.femoralstem" placeholder="请选择")
                        el-option(label="完整" value="完整")
                        el-option(label="松动" value="松动")
                        el-option(label="严重松动" value="严重松动")
                    el-form-item.short(label="骨溶解")
                      el-select(v-model="form.osteolysis" placeholder="请选择")
                        el-option(label="无" value="无")
                        el-option(label="轻度" value="轻度")
                        el-option(label="重度" value="重度")
              tr
                td.short-td
                  div.con2-left 假体植入
                td.long-td
                  div.con2-right
                    el-form-item.short(label="臼杯")
                      el-input(v-model="form.acetabular2" clearable)
                    el-form-item.short(label="臼杯类型")
                      el-select(v-model="form.acetabularType" placeholder="请选择")
                        el-option(label="水泥型" value="水泥型")
                        el-option(label="生物型" value="生物型")
                    el-form-item.short(label="股骨柄")
                      el-input(v-model="form.femoralstem2" clearable)
                    el-form-item.short(label="股骨柄类型")
                      el-select(v-model="form.femoralstemType" placeholder="请选择")
                        el-option(label="水泥型" value="水泥型")
                        el-option(label="生物型" value="生物型")
              tr
                td.short-td
                  div.con2-left 关节界面
                td.long-td
                  div.con2-right
                    el-form-item.short(label="球头直径")
                      el-input(v-model="form.ballDiameter" clearable)
                        template(slot="append") mm
                    el-form-item.short(label="材料")
                      el-select(v-model="form.material" placeholder="请选择")
                        el-option(label="金属对聚乙烯" value="金属对聚乙烯")
                        el-option(label="氧化锆对聚乙烯" value="氧化锆对聚乙烯")
                        el-option(label="金属对金属" value="金属对金属")
                    el-form-item(label="颈长")
                      el-input(v-model="form.diameterLength" clearable)
              tr
                td.short-td
                  div.con2-left 髋臼
                td.long-td
                  div.con2-right
                    el-form-item.short(label="髋臼磨锉")
                      el-input(v-model="form.aModel" clearable)
                        template(slot="append") mm
                    el-form-item.short(label="假体")
                      el-input(v-model="form.bModel" clearable)
                        template(slot="append") mm
                    el-form-item.short(label="加减")
                      el-input(v-model="form.cModel" clearable)
                        template(slot="prepend") 号=
                    el-form-item.short(label="包容")
                      el-input(v-model="form.Inclusiveness" clearable)
                    el-form-item.short(label="稳定性")
                      el-select(v-model="form.stable1" placeholder="请选择")
                        el-option(label="差" value="差")
                        el-option(label="交界" value="交界")
                        el-option(label="好" value="好")
                        el-option(label="优" value="优")
                    div.mark
                      div.sta 摆放角度
                      el-form-item.mini.toleft(label="外翻")
                        el-input(v-model="form.ectropion" clearable)
                          template(slot="append") °
                      el-form-item.mini(label="前倾")
                        el-input(v-model="form.forward " clearable)
                          template(slot="append") °
                    div.mark
                      div.sta 聚乙烯衬垫植入角度
                      el-form-item.mini.toleft
                        el-input(v-model="form.ectropion" clearable)
                          template(slot="append") °
                      el-form-item.mini(label="防脱缘 在")
                        el-input(v-model="form.forward " clearable)
                          template(slot="append") 点钟
              tr
                td.short-td
                  div.con2-left 股骨
                td.long-td
                  div.con2-right
                    el-form-item.short(label="髓腔锉型号")
                      el-input(v-model="form.medullaryCavity" clearable)
                    el-form-item.short(label="假体型号")
                      el-input(v-model="form.prosthesisType " clearable)
                    el-form-item.short(label="假体长度")
                      el-input(v-model="form.prosthesisLength" clearable)
                    el-form-item.short(label="远端骨水泥塞")
                      el-select(v-model="form.cement" placeholder="请选择")
                        el-option(label="骨" value="骨")
                        el-option(label="骨水泥" value="骨水泥")
                        el-option(label="伞" value="伞")
                        el-option(label="未应用" value="未应用")
                    el-form-item.short(label="稳定性")
                      el-select(v-model="form.stable2" placeholder="请选择")
                        el-option(label="差" value="差")
                        el-option(label="交界" value="交界")
                        el-option(label="好" value="好")
                        el-option(label="优" value="优")
                    el-form-item.short(label="捆绑线")
                      el-select(v-model="form.binding" placeholder="请选择")
                        el-option(label="无" value="无")
                        el-option(label="预防性" value="预防性")
                        el-option(label="术中存在骨折" value="术中存在骨折")
                    el-form-item.short(label="假体术中力线")
                      el-input(v-model="form.forceLine" clearable)
                        template(slot="append") °前倾
              tr
                td.short-td
                  div.con2-left 翻修手术
                td.long-td
                  div.con2-right
                    el-form-item.short(label="皮质骨开窗")
                      el-input(v-model="form.windowOpen" clearable)
                    el-form-item.short(label="股骨端截骨")
                      el-radio-group(v-model="form.Osteotomy")
                        el-radio(label="有")
                        el-radio(label="无")
                    el-form-item.short(label="并发症")
                      el-select(v-model="form.Complication" placeholder="请选择")
                        el-option(label="无" value="无")
                        el-option(label="股骨穿透" value="股骨穿透")
                        el-option(label="股骨骨折" value="股骨骨折")
                        el-option(label="血管损伤" value="血管损伤")
                        el-option(label="神经损伤" value="神经损伤")
                        el-option(label="其他" value="其他")
                    el-form-item.short(label="股骨缺陷")
                      el-select(v-model="form.defect1" placeholder="请选择")
                        el-option(label="无" value="无")
                        el-option(label="干后端" value="干后端")
                        el-option(label="皮质" value="皮质")
                        el-option(label="联合" value="联合")
                    div.mark
                      div.sta 髋臼缺陷
                      el-form-item.long.toleft(label="中心型")
                        el-input(v-model="form.centerType" clearable)
                      el-form-item.long.toleft(label="髋臼周边")
                        el-input(v-model="form.periphery " clearable)

        <!--div.btn-box-->
          <!--div.btn-->
            <!--el-form-item-->
              <!--el-button(type="primary" @click="onSubmit") 保存-->
              <!--el-button 取消-->
</template>

<script>
  export default {
    name: 'jdyyInv',
    data() {
      return {
        width: '80%',
        labelPosition: 'right',
        form: {
          name: '',
          sex: [],
          age: '',
          tel: '',
          address: '',
          inpatientNumber: '',
          date: '',
          position: '',
          disease: '',
          operationType: '',
          prosthesis: '',
          doctor: '',
          arthritis: '',
          osteonecrosis: '',
          pathogeny: '',
          other1: '',
          loosening: '',
          abrasion: '',
          infected: '',
          other2: '',
          fracture: '',
          infected2: '',
          substitution: '',
          other3: '',
          contralateral: '',
          other4: '',
          height: '',
          other5: '',
          weight: '',
          work: '',
          classification: '',
          date2: '',
          doctor2: '',
          posture: '',
          approach: '',
          scar: '',
          acetabular: '',
          femoralhead: '',
          femoralstem: '',
          osteolysis: '',
          acetabular2: '',
          acetabularType: '',
          femoralstem2: '',
          femoralstemType: '',
          ballDiameter: '',
          diameterLength: '',
          material: '',
          aModel: '',
          bModel: '',
          cModel: '',
          Inclusiveness: '',
          stable1: '',
          ectropion: '',
          forward: '',
          medullaryCavity: '',
          prosthesisType: '',
          prosthesisLength: '',
          cement: '',
          stable2: '',
          binding: '',
          forceLine: '',
          windowOpen: '',
          Osteotomy: '',
          Complication: '',
          centerType: '',
          periphery: '',
          defect1: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!')
        alert('天啦噜')
      }
    }
  }
</script>

<style scoped lang="stylus" type="text/stylus">
  @import "~@/assets/stylus/color.styl"
.back
  .title
    text-align center
    font-size 24px
    height 50px
    line-height 50px
    color br_color3
  .art1
    /*width 1160px*/
    .con1
      display flex
      height 310px
      .con1-left
        border 1px solid black
        flex 4
        margin-right 10px
        padding 10px 10px
      .con1-right
        border 1px solid black
        flex 6
        margin-left 10px
        padding 10px
  .art2
    /*width 1160px*/
    .con2
      table
        border 1px solid black
        border-top 0
        width 100%
        margin-bottom 20px
      tr
        border-top 1px solid black
        width 100%
        display flex
      .short-td
        padding 10px
        width 20%
        text-align center
        word-break break-all
      .long-td
        border-left 1px solid black
        padding 10px
        width 80%
      .con2-left
        margin-top 15px
      .con2-right
        padding-left -80px
  .btn-box
    width 1160px
    .btn
      margin-left 38%
      margin-top 20px
  .mini
    width 250px
    display inline-block
  .short
    width 50%
    display inline-block
  .long
    width 100%
  .toleft
    margin-left -40px
    /*margin-bottom 0*/
  .mark
    margin-left 30px
    height 40px
    line-height 40px
    margin-bottom 20px
  .sta
    width 140px
    margin-bottom 20px
    display inline-block
  .else
    width 120px
    display inline-block
  .elin
    width 400px
  .other
    width 315px
    display inline-block
  .input-with-select .el-input-group__prepend
    background-color: #fff
</style>
