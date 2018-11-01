<template lang="pug">
  kalix-dialog.user-add(title='全膝术后编辑' bizKey="jdyyKnee" ref="kalixBizDialog" v-bind:formModel.sync="formModel" v-bind:targetURL="targetURL"  v-bind:labelWidth="labelWidth" v-bind:labelPosition="labelPosition")
    div.back(slot="dialogFormSlot")
      div.art1
        h1.title 全膝关节置换术
        div.con1
          div.con1-left
            el-form-item.toleft(label="姓名")
              el-select(v-model="formModel.pid" @change="getData($event)" filterable placeholder="请选择")
                el-option(v-for="item in options" :key="item.value" :label="item.label" :value="item.value")
            el-form-item.toleft(label="性别")
              el-radio-group(v-model="formModel.sex" disabled)
                el-radio(label="男")
                el-radio(label="女")
            el-form-item.toleft(label="年龄")
              el-input(v-model="formModel.age" readonly)
            el-form-item.toleft(label="电话")
              el-input(v-model="formModel.telephonePerson" readonly)
            el-form-item.toleft(label="地址")
              el-input(v-model="formModel.address" readonly)
          div.con1-right
            el-form-item.short.toleft(label="住院号")
              el-input(v-model="formModel.hospitalNumber" readonly)
            el-form-item.short(label="研究序号")
              el-input(v-model="formModel.orderNumber" clearable)
            el-form-item.toleft(label="日期")
              el-col(:span="22")
                el-date-picker(type="date" placeholder="选择日期" v-model="formModel.date" style="width: 100%;")
            el-form-item.toleft(label="部位")
              el-radio-group(v-model="formModel.position")
                el-radio(label="左")
                el-radio(label="右")
            el-form-item.short.toleft(label="诊断")
              el-select(v-model="formModel.disease" placeholder="请选择")
                el-option(label="骨性关节炎" value="骨性关节炎")
                el-option(label="类风湿性关节炎" value="类风湿性关节炎")
                el-option(label="其他" value="其他")
            el-form-item.short(label="手术类型")
              el-select(v-model="formModel.operationType" placeholder="请选择")
                el-option(label="初次" value="初次")
                el-option(label="翻修" value="翻修")
                el-option(label="更换部分组件" value="更换部分组件")
            el-form-item.short.toleft(label="假体")
              el-input(v-model="formModel.prosthesis" clearable)
            el-form-item.short(label="医生")
              el-input(v-model="formModel.doctor" clearable)
      div.art2
        h1.title 术前及围手术期手术资料
        div.con2
          table
            tr
              td.short-td
                div.con2-left 诊断
              td.long-td
                div.con2-right
                  el-form-item.short(label="诊断结果")
                    el-select(v-model="formModel.disease2" placeholder="请选择")
                      el-option(label="骨性关节炎" value="骨性关节炎")
                      el-option(label="类风湿性关节炎" value="类风湿性关节炎")
                      el-option(label="幼年特发性关节炎" value="幼年特发性关节炎")
                      el-option(label="创伤性" value="创伤性")
                      el-option(label="骨坏死" value="骨坏死")
                      el-option(label="夏柯氏" value="夏柯氏")
                      el-option(label="血友病" value="血友病")
                      el-option(label="其他" value="其他")

            tr
              td.short-td
                div.con2-left 侧
              td.long-td
                div.con2-right
                  el-form-item.short(label="部位")
                    el-select(v-model="formModel.position2" placeholder="请选择")
                      el-option(label="左" value="左")
                      el-option(label="右" value="右")
                  el-form-item.short(label="方式")
                    el-select(v-model="formModel.mode" placeholder="请选择")
                      el-option(label="单侧置换" value="单侧置换")
                      el-option(label="一期双侧置换（两膝假体型号不一致）" value="一期双侧置换（两膝假体型号不一致）")
            tr
              td.short-td
                div.con2-left 术前膝关节情况/治疗
              td.long-td
                div.con2-right
                  el-form-item.short(label="骨折")
                    el-radio-group(v-model="formModel.fracture")
                      el-radio(label="是")
                      el-radio(label="否")
                  el-form-item.short(label="感染")
                    el-radio-group(v-model="formModel.infected")
                      el-radio(label="是")
                      el-radio(label="否")
                  el-form-item.short(label="关节镜")
                    el-radio-group(v-model="formModel.arthroscope")
                      el-radio(label="是")
                      el-radio(label="否")
                  el-form-item.short(label="截骨")
                    el-radio-group(v-model="formModel.osteotomy")
                      el-radio(label="是")
                      el-radio(label="否")
                  el-form-item.short(label="置换")
                    el-radio-group(v-model="formModel.substitution")
                      el-radio(label="是")
                      el-radio(label="否")
                  el-form-item.short(label="其他")
                    el-radio-group(v-model="formModel.other1")
                      el-radio(label="是")
                      el-radio(label="否")
                  el-form-item.long(label="其他" v-if="formModel.other1==='是'")
                    el-input(v-model="formModel.other2")
            tr
              td.short-td
                div.con2-left 其他关节
              td.long-td
                div.con2-right
                  el-form-item.short(label="对侧膝关节")
                    el-select(v-model="formModel.contralateral" placeholder="请选择")
                      el-option(label="无症状" value="无症状")
                      el-option(label="有症状" value="有症状")
                      el-option(label="已经置换" value="已经置换")
                      el-option(label="将要置换" value="将要置换")
                      el-option(label="不想置换" value="不想置换")
                  el-form-item.short(label="其他")
                    el-input(v-model="formModel.other3" clearable)
            tr
              td.short-td
                div.con2-left 病人分类
              td.long-td
                div.con2-right
                  el-form-item.short(label="分类")
                    el-select(v-model="formModel.classification" placeholder="请选择")
                      el-option(label="单侧或双侧（对侧膝关节已成功置换）" value="单侧或双侧（对侧膝关节已成功置换）")
                      el-option(label="单侧，对侧膝关节有症状" value="单侧，对侧膝关节有症状")
                      el-option(label="多发关节炎或其他疾病" value="多发关节炎或其他疾病")
            tr
              td.short-td
                div.con2-left 术前膝关节功能评分
              td.long-td
                div.con2-right
                  el-form-item(label="疼痛")
                    el-select.long(v-model="formModel.pain" placeholder="请选择")
                      el-option(v-for="(a,index) in arr1" :key="index" :value="a.id" :label="a.name")
                div
                  div.left-align
                    p 术前活动度
                  el-form-item.mini.toleft-p(label="伸直")
                    el-input(v-model="formModel.unwind" clearable)
                      template(slot="append") °
                  el-form-item.mini
                    el-select.long.toleft(v-model="formModel.overextension" placeholder="请选择")
                      el-option(label="屈曲挛缩" value="屈曲挛缩")
                      el-option(label="过伸" value="过伸")
                  el-form-item.mini.toleft(label="屈曲" )
                    el-input(v-model="formModel.buckling" clearable)
                      template(slot="append") °
                div
                  div.left-align
                    p 稳定性
                  el-form-item.short.toleft(label="前后位")
                    el-select.long(v-model="formModel.apPosition" placeholder="请选择")
                      el-option(v-for="(a,index) in arr2" :key="index" :value="a.id" :label="a.name")

                  el-form-item.short.toleft-p(label="侧位" label-width="120px")
                    el-select.long(v-model="formModel.lateralPosition" placeholder="请选择")
                      el-option(v-for="(a,index) in arr3" :key="index" :value="a.id" :label="a.name")
                el-form-item.short(label="过伸")
                  el-select.long(v-model="formModel.hyperextension" placeholder="请选择")
                    el-option(v-for="(a,index) in arr4" :key="index" :value="a.id" :label="a.name")

                el-form-item.short.linecenter(label="固定屈曲挛缩(FFC)" label-width="150px")
                  el-select.long(v-model="formModel.fixedFlexionContracture" placeholder="请选择" )
                    el-option(v-for="(a,index) in arr5" :key="index" :value="a.id" :label="a.name")
                el-form-item.short(label="力线")
                  el-select.long(v-model="formModel.forceLine" placeholder="请选择")
                    el-option(v-for="(a,index) in arr6" :key="index" :value="a.id" :label="a.name")
                div
                  div.left-align
                    p Total
                  span {{total1}}/100
            tr
              td.short-td
                div.con2-left 术前膝关节协会功能评估
              td.long-td
                div.con2-right
                  el-form-item.short(label="行走")
                    el-select.long(v-model="formModel.hoof" placeholder="请选择")
                      el-option(v-for="(a,index) in arr7" :key="index" :value="a.id" :label="a.name")
                  el-form-item.short(label="上下楼梯")
                    el-select.long(v-model="formModel.stairActivity" placeholder="请选择")
                      el-option(v-for="(a,index) in arr8" :key="index" :value="a.id" :label="a.name")
                  el-form-item.short(label="行走辅助")
                    el-select.long(v-model="formModel.walkingAid" placeholder="请选择")
                      el-option(v-for="(a,index) in arr9" :key="index" :value="a.id" :label="a.name")
                  div
                    div.left-align
                      p 总计
                    span {{total2}}/100
            tr
              td.short-td
                div.con2-left 其他信息
              td.long-td
                div.con2-right
                  el-form-item.short(label="身高")
                    el-input(v-model="formModel.height" clearable)
                      template(slot="append") cm
                  el-form-item.short(label="股四头肌肌力" label-width="50%")
                    el-input(v-model="formModel.muscle" clearable)
                  el-form-item.short(label="体重")
                    el-input(v-model="formModel.weight" clearable)
                      template(slot="append") kg
                  el-form-item.short(label="机械轴（前后位X线片）" label-width="50%")
                    el-input(v-model="formModel.machine" clearable)
                  el-form-item.short()
                    el-input(v-model="formModel.angle11" clearable)
                      template(slot="append") °
                  el-form-item.short()
                    el-radio-group.long(v-model="formModel.around")
                      el-radio(label="内翻")
                      el-radio(label="外翻")
            tr
              td.short-td
                div.con2-left 手术
              td.long-td
                div.con2-right
                  el-form-item.short(label="日期")
                    el-date-picker.long(type="date" placeholder="选择日期" v-model="formModel.date2")
                  el-form-item.short(label="手术医生")
                    el-input(v-model="formModel.doctor2" clearable)
            tr
              td.short-td
                div.con2-left 电动驱血带
              td.long-td
                div.con2-right
                  el-form-item.unit-width(label="第一次充气")
                    el-input(v-model="formModel.firstInflation" clearable)
                      template(slot="append") 分
                  el-form-item.unit-width(label="放气" )
                    el-input(v-model="formModel.deFlation" clearable)
                      template(slot="append") 分
                  el-form-item.unit-width(label="第二次充气")
                    el-input(v-model="formModel.secondInflation" clearable)
                      template(slot="append") 分
            tr
              td.short-td
                div.con2-left 入路
              td.long-td
                div.con2-right
                  el-form-item.short(label="入路")
                    el-select(v-model="formModel.approach" placeholder="请选择")
                      el-option(label="Install" value="Install")
                      el-option(label="髌旁内侧入路" value="髌旁内侧入路")
                      el-option(label="胫骨结节截骨术" value="胫骨结节截骨术")
                      el-option(label="外侧入路" value="前侧")
                  el-form-item.short(label="其他")
                    el-input(v-model="formModel.other4" clearable)
            tr
              td.short-td
                div.con2-left 松解
              td.long-td
                div.con2-right
                  el-form-item.short(label="内侧")
                    el-select(v-model="formModel.inside" placeholder="请选择")
                      el-option(label="无" value="无")
                      el-option(label="一般性松解" value="一般性松解")
                      el-option(label="广泛性松解" value="广泛性松解")
                  el-form-item.short(label="后方")
                    el-select(v-model="formModel.rear" placeholder="请选择")
                      el-option(label="无" value="无")
                      el-option(label="一般性松解" value="一般性松解")
                      el-option(label="广泛性松解" value="广泛性松解")
                  el-form-item.short(label="外侧")
                    el-select(v-model="formModel.outBoard" placeholder="请选择")
                      el-option(label="无" value="无")
                      el-option(label="一般性松解" value="一般性松解")
                      el-option(label="广泛性松解" value="广泛性松解")
                  el-form-item.short(label="外侧支持带")
                    el-select(v-model="formModel.retinaculum" placeholder="请选择")
                      el-option(label="无" value="无")
                      el-option(label="一般性松解" value="一般性松解")
                      el-option(label="广泛性松解" value="广泛性松解")
            tr
              td.short-td
                div.con2-left 软组织
              td.long-td
                div.con2-right
                  el-form-item.mini(label="脂肪垫")
                    el-select(v-model="formModel.fatPad" placeholder="请选择")
                      el-option(label="保留" value="保留")
                      el-option(label="修剪" value="修剪")
                      el-option(label="切除" value="切除")
                  el-form-item.mini(label="滑膜切除")
                    el-select(v-model="formModel.synovectomy" placeholder="请选择")
                      el-option(label="少量" value="少量")
                      el-option(label="中等" value="中等")
                      el-option(label="完整" value="完整")
                  el-form-item.mini(label="髌韧带")
                    el-select(v-model="formModel.ligament" placeholder="请选择")
                      el-option(label="完整" value="完整")
                      el-option(label="轻度撕脱" value="轻度撕脱")
                      el-option(label="重度撕脱" value="重度撕脱")
            tr
              td.short-td
                div.con2-left 翻修手术
              td.long-td
                div.con2-right
                  el-form-item.short(label="股骨")
                    el-select(v-model="formModel.femur" placeholder="请选择")
                      el-option(label="完整" value="完整")
                      el-option(label="松动" value="松动")
                  el-form-item.short(label="胫骨")
                    el-select(v-model="formModel.tibia" placeholder="请选择")
                      el-option(label="完整" value="完整")
                      el-option(label="聚乙烯磨损" value="聚乙烯磨损")
                      el-option(label="松动" value="松动")
                  el-form-item.short(label="髌骨")
                    el-select(v-model="formModel.patella" placeholder="请选择")
                      el-option(label="完整" value="完整")
                      el-option(label="聚乙烯磨损" value="聚乙烯磨损")
                      el-option(label="松动" value="松动")
                  el-form-item.short(label="更换组件")
                    el-select(v-model="formModel.renewal" placeholder="请选择")
                      el-option(label="股骨侧" value="股骨侧")
                      el-option(label="胫骨托" value="胫骨托")
                      el-option(label="胫骨侧" value="胫骨侧")
                      el-option(label="髌骨" value="髌骨")
            tr
              td.short-td
                div.con2-left 假体
              td.long-td
                div.con2-right
                  el-form-item(label="名称")
                    el-input.short(v-model="formModel.name2")
                  el-form-item(label="类型")
                    el-select.short(v-model="formModel.genre" placeholder="请选择")
                      el-option(label="交叉韧带保留型" value="交叉韧带保留型")
                      el-option(label="后稳定型" value="后稳定型")
                      el-option(label="内外翻限制型" value="内外翻限制型")
            tr
              td.short-td
                div.con2-left 股骨部分
              td.long-td
                div
                  div.left-align
                    p 组件
                  el-form-item.medium.toleft-p(label="型号")
                    el-input.long(v-model="formModel.genre2" clearable)
                  el-form-item.medium(label="水泥型")
                    el-select.long(v-model="formModel.genre3" placeholder="请选择")
                      el-option(label="是" value="是")
                      el-option(label="否" value="否")
                div.con2-right
                  el-form-item.short(label="旋转")
                    el-select(v-model="formModel.spin" placeholder="请选择")
                      el-option(label="内旋" value="内旋")
                      el-option(label="外旋" value="外旋")
                      el-option(label="中立" value="中立")
                  el-form-item.short.toleft-more
                    el-input(v-model="formModel.angle" v-if="formModel.spin!=='中立'" clearable)
                      template(slot="append") °
                div.con2-right
                  el-form-item.short.toleft(label="股骨前方截骨" label-width="130px")
                    el-select(v-model="formModel.thighbone" placeholder="请选择")
                      el-option(label="正确" value="正确")
                      el-option(label="截骨不足" value="截骨不足")
                      el-option(label="过度截骨" value="过度截骨")
                div.con2-right
                  el-form-item.mini(label="长柄" )
                    el-select(v-model="formModel.longHandle" placeholder="请选择")
                      el-option(label="是" value="是")
                      el-option(label="否" value="否")
                  el-form-item.unit-width.toleft(label="长度"  v-if="formModel.longHandle==='是'")
                    el-input(v-model="formModel.longness" clearable)
                      template(slot="append") mm
                  el-form-item.unit-width(label="直径"  v-if="formModel.longHandle==='是'")
                    el-input(v-model="formModel.diameter" clearable)
                      template(slot="append") mm
                div.con2-right
                  el-form-item.short(label="髓内导向器" )
                    el-select(v-model="formModel.guider" placeholder="请选择")
                      el-option(label="被骨头堵住" value="被骨头堵住")
                      el-option(label="被骨水泥堵住" value="被骨水泥堵住")
                      el-option(label="没被堵" value="没被堵")
            tr
              td.short-td
                div.con2-left 胫骨部分
              td.long-td
                div
                  div.left-align
                    p 金属底托
                  el-form-item.medium.toleft-p(label="型号")
                    el-input.long(v-model="formModel.genre4" clearable)
                  el-form-item.medium(label="水泥型")
                    el-select.long(v-model="formModel.genre5" placeholder="请选择")
                      el-option(label="是" value="是")
                      el-option(label="否" value="否")
                div.con2-right
                  el-form-item.short(label="旋转")
                    el-select(v-model="formModel.spin2" placeholder="请选择")
                      el-option(label="内旋" value="内旋")
                      el-option(label="外旋" value="外旋")
                      el-option(label="中立" value="中立")
                  el-form-item.short.toleft-more
                    el-input(v-model="formModel.angle2" v-if="formModel.spin2!=='中立'" clearable)
                      template(slot="append") °
                div.con2-right
                  el-form-item.short(label="侧位")
                    el-select(v-model="formModel.lateralPosition1" placeholder="请选择")
                      el-option(label="准确" value="准确")
                      el-option(label="内侧移位" value="内侧移位")
                      el-option(label="外侧移位" value="中立")
                div.con2-right
                  el-form-item.short(label="正位")
                    el-select(v-model="formModel.normotopia" placeholder="请选择")
                      el-option(label="准确" value="准确")
                      el-option(label="内侧移位" value="内侧移位")
                      el-option(label="外侧移位" value="中立")
                div
                  div.left-align
                    p 植入
                  el-form-item.medium.toleft-p(label="尺寸")
                    el-input(v-model="formModel.dimension" clearable)
                  el-form-item.medium(label="厚度")
                    el-input(v-model="formModel.thickness" clearable)
                      template(slot="append") mm
                div.con2-right
                  el-form-item.mini(label="长柄" )
                    el-select(v-model="formModel.longHandle2" placeholder="请选择")
                      el-option(label="是" value="是")
                      el-option(label="否" value="否")
                  el-form-item.unit-width.toleft(label="长度" v-if="formModel.longHandle2==='是'")
                    el-input(v-model="formModel.longness2" clearable)
                      template(slot="append") mm
                  el-form-item.unit-width(label="直径" v-if="formModel.longHandle2==='是'")
                    el-input(v-model="formModel.diameter2" clearable)
                      template(slot="append") mm
            tr
              td.short-td
                div.con2-left 髌骨假体
              td.long-td
                div
                  div.left-align
                    p 尺寸
                  el-form-item.medium.toleft-p(label="水泥")
                    el-select(v-model="formModel.cement" placeholder="请选择")
                      el-option(label="是" value="是")
                      el-option(label="否" value="否")
                  el-form-item.medium(label="总厚度" v-if="formModel.cement==='是'")
                    el-input(v-model="formModel.thickness2" clearable)
                      template(slot="append") mm
                div.con2-right(v-if="formModel.cement==='是'")
                  el-form-item.short(label="位置" )
                    el-select(v-model="formModel.location" placeholder="请选择")
                      el-option(label="内侧" value="内侧")
                      el-option(label="中心" value="中心")
                      el-option(label="外上" value="外上")
                      el-option(label="中心" value="中心")
                      el-option(label="下" value="下")
            tr
              td.short-td
                div.con2-left 股骨侧缺陷
              td.long-td
                div.con2-right
                  el-form-item.short.toleft
                    el-select.long(v-model="formModel.vitium" placeholder="请选择")
                      el-option(label="有" value="有")
                      el-option(label="无" value="无")
                div.con2-right(v-if="formModel.vitium==='有'")
                  el-form-item.short(label="位置" )
                    el-select(v-model="formModel.location2" placeholder="请选择")
                      el-option(label="内侧" value="内侧")
                      el-option(label="外侧" value="中心")
                  el-form-item.short
                    el-select(v-model="formModel.location3" placeholder="请选择")
                      el-option(label="前方" value="前方")
                      el-option(label="远端" value="远端")
                      el-option(label="后方" value="后方")
                div(v-if="formModel.vitium==='有'")
                  div.left-align
                    p 区域
                  el-form-item.unit-width.toleft-p
                    el-input.toleft(v-model="formModel.length" clearable)
                      template(slot="append") mm
                  el-form-item.unit-width.toleft-more(label="x")
                    el-input(v-model="formModel.wide" clearable)
                      template(slot="append") mm
                  el-form-item.unit-width.toleft(label="深度")
                    el-input(v-model="formModel.depth" clearable)
                      template(slot="append") mm
            tr
              td.short-td
                div.con2-left 胫骨侧缺陷
              td.long-td
                div.con2-right
                  el-form-item.short.toleft
                    el-select.long(v-model="formModel.vitium2" placeholder="请选择")
                      el-option(label="有" value="有")
                      el-option(label="无" value="无")
                div.con2-right(v-if="formModel.vitium2==='有'")
                  el-form-item.short(label="位置" )
                    el-select(v-model="formModel.location4" placeholder="请选择")
                      el-option(label="内侧" value="内侧")
                      el-option(label="外侧" value="中心")
                  el-form-item.short
                    el-select(v-model="formModel.location5" placeholder="请选择")
                      el-option(label="前方" value="前方")
                      el-option(label="远端" value="远端")
                      el-option(label="后方" value="后方")
                div(v-if="formModel.vitium2==='有'")
                  div.left-align
                    p 区域
                  el-form-item.unit-width.toleft-p
                    el-input.toleft(v-model="formModel.length2" clearable)
                      template(slot="append") mm
                  el-form-item.unit-width.toleft-more(label="x")
                    el-input(v-model="formModel.wide2" clearable)
                      template(slot="append") mm
                  el-form-item.unit-width.toleft(label="深度")
                    el-input(v-model="formModel.depth2" clearable)
                      template(slot="append") mm
                div.con2-right(v-if="formModel.vitium2==='有'")
                  el-form-item.short(label="处理方案" )
                    el-select(v-model="formModel.processingScheme" placeholder="请选择")
                      el-option(label="打压植骨" value="打压植骨")
                      el-option(label="植骨内固定" value="植骨内固定")
                      el-option(label="楔形植骨" value="楔形植骨")
                      el-option(label="水泥" value="水泥")
                      el-option(label="其他" value="其他")
            tr
              td.short-td
                div.con2-left 术中所见
              td.long-td
                div.con2-right
                  el-form-item(label="髌骨轨迹")
                    el-select(v-model="formModel.patellaTrajectory" placeholder="请选择")
                      el-option(label="完美" value="完美")
                      el-option(label="满意" value="满意")
                      el-option(label="不满意" value="不满意")
                div.con2-right
                  el-form-item.short(label="完全伸直")
                    el-input(v-model="formModel.completelyStraight")
                      template(slot="append") °
                  el-form-item.short
                    el-select(v-model="formModel.overextension2" placeholder="屈曲挛缩")
                      el-option(label="屈曲挛缩" value="屈曲挛缩")
                      el-option(label="过伸" value="过伸")
                div.con2-right
                  el-form-item.short(label="全屈")
                    el-input(v-model="formModel.allBends")
                      template(slot="append") °
                div.con2-right
                  el-form-item.unit-width(label="力线")
                    el-select(v-model="formModel.normal" placeholder="正常")
                      el-option(label="正常（5-10°）" value="正常")
                      el-option(label="不正常" value="不正常")
                  el-form-item.unit-width.toleft-p(v-if="formModel.normal==='不正常'")
                    el-input(v-model="formModel.forceLine2")
                      template(slot="append") °
                  el-form-item.unit-width.toleft-p(v-if="formModel.normal==='不正常'")
                    el-select(v-model="formModel.reversal" placeholder="内翻")
                      el-option(label="内翻" value="内翻")
                      el-option(label="外翻" value="外翻")
                div.con2-right
                  el-form-item.unit-width(label="内侧松弛")
                    el-select(v-model="formModel.exist" placeholder="无")
                      el-option(label="有" value="有")
                      el-option(label="无" value="无")
                  el-form-item.unit-width.toleft-p(v-if="formModel.exist==='有'")
                    el-input(v-model="formModel.angle3")
                      template(slot="append") °
                  el-form-item.unit-width.toleft-p(label="在" v-if="formModel.exist==='有'")
                    el-input(v-model="formModel.angle4")
                      template(slot="append") °
                  span.p-left(v-if="formModel.exist==='有'") 屈曲时
                div.con2-right
                  el-form-item.unit-width(label="外侧松弛")
                    el-select(v-model="formModel.exist1" placeholder="无")
                      el-option(label="有" value="有")
                      el-option(label="无" value="无")
                  el-form-item.unit-width.toleft-p(v-if="formModel.exist1==='有'")
                    el-input(v-model="formModel.angle5")
                      template(slot="append") °
                  el-form-item.unit-width.toleft-p(label="在" v-if="formModel.exist1==='有'")
                    el-input(v-model="formModel.angle6")
                      template(slot="append") °
                  span(v-if="formModel.exist1==='有'").p-left 屈曲时
            tr
              td.short-td
                div.con2-left 术后
              td.long-td
                div.con2-right.short
                  el-form-item(label="总引流")
                    el-input(v-model="formModel.drainage")
                      template(slot="append") ml
                div
                  div.left-align
                    p 屈曲达到90°
                  el-form-item.short.toleft-p(label="术后")
                    el-input.mini(v-model="formModel.postoperationDay" clearable)
                    span.p-left 天
                div.flex
                  div.left-align.top-align
                    p 术后两周活动度
                  div.mini.toleft-p
                    el-form-item(label="伸直")
                      el-input(v-model="formModel.unwind2" clearable)
                        template(slot="append") °
                  div.mini.toleft
                    el-form-item(label="屈曲")
                      el-input(v-model="formModel.buckling2" clearable)
                        template(slot="append") °
                  div.mini.toleft
                    el-form-item
                      el-select(v-model="formModel.debonding" placeholder="麻醉下松解")
                        el-option(label="麻醉下松解" value="麻醉下松解")
                        el-option(label="无麻醉下松解" value="无麻醉下松解")
                div.con2-right
                  el-form-item.short(label="切口愈合")
                    el-select(v-model="formModel.woundHealing" placeholder="请选择")
                      el-option(label="容易" value="容易")
                      el-option(label="边缘坏死" value="边缘坏死")
                      el-option(label="感染" value="感染")
                div
                  div.left-align.big-width
                    p 用单手杖行走
                  el-form-item.short.toleft-p(label="术后")
                    el-input(v-model="formModel.postoperationDay2" clearable)
                  span.p-left 天
                div
                  div.left-align
                    p 独立行走
                  el-form-item.short.toleft-p(label="术后")
                    el-input(v-model="formModel.postoperationDay3" clearable)
                  span.p-left 天
      div.art2
        h1.title 膝关节功能评分
        div.con2
          table
            tr
              td.short-td
                div.con2-left 疼痛
              td.long-td
                div.con2-right2 无（50）/偶尔轻度疼痛（45）/仅上下楼梯时疼痛（40）/行走及上下楼时疼痛（30）/偶尔中度疼痛（20）/持续性中度疼痛（10）/重度（0）
            tr
              td.short-td
                div.con2-left 活动度
              td.long-td
                div.con2-right2 每五度一分
            tr
              td.short-td
                div.con2-left 稳定性
              td.long-td
                div.con2-right2 前后位：<5mm（10）/5-10mm（5）/>10mm(0)
                div.con2-right2 中间位：<5°（15）/6-9°（10）/10-14°（5）/>14°（0）
            tr
              td.short-td
                div.con2-left 固定屈曲挛缩（FFC）（-15）
              td.long-td
                div.con2-right2 <5°（0）/5-10°（2）/10-15°(5)/16-20°（10）/>20°（15）
            tr
              td.short-td
                div.con2-left 伸直位松弛（-15）
              td.long-td
                div.con2-right2 无（0）/<10°（5）/10-20°(10)/>20°（15）
            tr
              td.short-td
                div.con2-left 力线
              td.long-td
                div.con2-right2 5-10°（0）/0-4°或者11-15°（每度3分）/其他(20)
      <!--div.art2-->
        <!--h1.title 膝关节功能评分-->
        <!--div.con2-->
          <!--el-table( :data="tableData1" style="width:100%" height="250")-->
            <!--el-table-column(fixed prop="date3" label="日期" min-width="150")-->
            <!--el-table-column(prop="postoperationMonth" label="术后第（）个月" min-width="120")-->
            <!--el-table-column(prop="pain2" label="疼痛" min-width="60")-->
            <!--el-table-column(prop="activity" label="活动度" min-width="100")-->
            <!--el-table-column(prop="stability" label="稳定性" min-width="100")-->
            <!--el-table-column(prop="fixedFlexionContracture2" label="固定屈曲挛缩（FFC）" min-width="170")-->
            <!--el-table-column(prop="extensionRelaxation" label="伸直位松弛" min-width="100")-->
            <!--el-table-column(prop="forceLine3" label="力线" min-width="60")-->
            <!--el-table-column(prop="total3" label="总计" min-width="60")-->
            <!--el-table-column(label="操作" min-width="60" fixed="right")-->
              <!--template(slot-scope="scope")-->
                <!--el-button(type="text" size="small") 编辑-->
        div.con2
          div.con2-left
          el-form-item.mini(label="日期" style="float:left")
            el-col
              el-date-picker.long(type="date" placeholder="选择日期" v-model="formModel.date3")
          el-form-item.mini(label="术后第（）个月" label-width="120px")
            el-input(v-model="formModel.postoperationMonth" clearable)
          el-form-item.mini(label="疼痛" label-width="160px")
            el-input(v-model="formModel.pain2" clearable)
          el-form-item.mini(label="活动度")
            el-input(v-model="formModel.activity" clearable)
          el-form-item.mini(label="稳定性"  label-width="120px")
            el-input(v-model="formModel.stability" clearable)
          el-form-item.mini(label="固定屈曲挛缩（FFC）" label-width="160px")
            el-input(v-model="formModel.fixedFlexionContracture2" clearable)
          el-form-item.mini(label="伸直位松弛")
            el-input(v-model="formModel.extensionRelaxation" clearable)
          el-form-item.mini(label="力线"  label-width="120px")
            el-input(v-model="formModel.forceLine3" clearable)
          div
            div.left-align
              p 总计
            span {{total3}}/100
      div.art2
        h1.title 置换术后的特殊问题
        div.con2
          table
            tr
              td.short-td
                div.con2-left 患者满意度
              td.long-td
                div.con2-right2 1 - 完美/2 - 比术前好/3 - 一样/4 - 比术前更差
            tr
              td.short-td
                div.con2-left 步态
              td.long-td
                div.con2-right2 1 - 接近正常/2 - 轻度跛行/3 - 跛行明显
            tr
              td.short-td
                div.con2-left 髌骨侧问题
              td.long-td
                div.con2-right2 1 - 没问题/2 - 无症状弹响/3 - 有痛性弹响/4 - 半脱位/5 - 脱位/6 - 骨折
            tr
              td.short-td
                div.con2-left 股四头肌肌力
              td.long-td
                div.con2-right2 &nbsp&nbsp&nbsp&nbsp级
            tr
              td.short-td
                div.con2-left 固定屈曲挛缩（FFC）
              td.long-td
                div.con2-right2 &nbsp&nbsp&nbsp&nbsp级
            tr
              td.short-td
                div.con2-left 过伸
              td.long-td
                div.con2-right2 &nbsp&nbsp&nbsp&nbsp度
            tr
              td.short-td
                div.con2-left 侧方松弛
              td.long-td
                div.con2-right2 记录膝关节完全伸直状态下内外侧松弛程度，以度位单位  内翻=负值，外翻=正值  如果内外侧都有松弛记录两个数值
            tr
              td.short-td
                div.con2-left 前后松弛
              td.long-td
                div.con2-right2 记录膝关节90°屈曲时，以cm为单位
            tr
              td.short-td
                div.con2-left 后方松弛
              td.long-td
                div.con2-right2 1 - 无/2 - 轻度/3 - 明显
      <!--div.art2-->
        <!--h1.title 置换术后的特殊问题-->
        <!--div.con2-->
          <!--el-table( :data="tableData2" style="width:100%" height="250")-->
            <!--el-table-column(fixed prop="date4" label="日期" min-width="150")-->
            <!--el-table-column(prop="postoperationMonth2" label="术后第（）个月" min-width="120")-->
            <!--el-table-column(prop="satisfaction" label="患者满意度" min-width="100")-->
            <!--el-table-column(prop="gait" label="步态" min-width="60")-->
            <!--el-table-column(prop="problem" label="髌骨侧问题" min-width="100")-->
            <!--el-table-column(prop="muscleStrength" label="股四头肌肌力" min-width="120")-->
            <!--el-table-column(prop="fixedFlexionContracture3" label="固定屈曲挛缩（FFC）" min-width="170")-->
            <!--el-table-column(prop="hyperextension2" label="过伸" min-width="60")-->
            <!--el-table-column(prop="lateralSlack" label="侧方松弛" min-width="100")-->
            <!--el-table-column(prop="frontBackSlack" label="前后松弛" min-width="100")-->
            <!--el-table-column(prop="backSlack" label="后方松弛" min-width="100")-->
            <!--el-table-column(label="操作" min-width="60" fixed="right")-->
              <!--template(slot-scope="scope")-->
                <!--el-button(type="text" size="small") 编辑-->
        div.con2
          div.con2-left
          el-form-item.mini(label="日期" style="float:left")
            el-col
              el-date-picker.long(type="date" placeholder="选择日期" v-model="formModel.date4")
          el-form-item.mini(label="术后第（）个月" label-width="120px")
            el-input(v-model="formModel.postoperationMonth2" clearable)
          el-form-item.mini(label="患者满意度" label-width="110px")
            el-input(v-model="formModel.satisfaction" clearable)
          el-form-item.mini(label="步态" )
            el-input(v-model="formModel.gait" clearable)
          el-form-item.mini(label="髌骨侧问题" label-width="120px")
            el-input(v-model="formModel.problem" clearable)
          el-form-item.mini(label="股四头肌肌力" label-width="110px")
            el-input(v-model="formModel.muscleStrength" clearable)
          el-form-item.mini(label="固定屈曲挛缩（FFC）" label-width="150px")
            el-input(v-model="formModel.fixedFlexionContracture3" clearable)
          el-form-item.mini(label="过伸" label-width="120px")
            el-input(v-model="formModel.hyperextension2" clearable)
          el-form-item.mini(label="侧方松弛" label-width="110px")
            el-input(v-model="formModel.lateralSlack" clearable)
          el-form-item.mini(label="前后松弛" )
            el-input(v-model="formModel.frontBackSlack" clearable)
          el-form-item.mini(label="后方松弛" label-width="120px")
            el-input(v-model="formModel.backSlack" clearable)
      div.art2
        h1.title 膝关节协会功能评估
        div.con2
          table
            tr
              td.short-td
                div.con2-left 步行（50）
              td.long-td
                div.con2-right2 不受限（50）/>10条街（40）/5-10条街（30）/<5条街（20）/室内活动（10）/无法行走（0）
            tr
              td.short-td
                div.con2-left 上下楼梯（50）
              td.long-td
                div.con2-right2 正常上下楼梯（50）/正常上楼，下楼需扶手（40）/上下楼都需要扶手（30）/上楼需扶手，无法下楼（15）/无法上下楼（0）
            tr
              td.short-td
                div.con2-left 辅助行走
              td.long-td
                div.con2-right2 无（0）/单拐（5）/双拐（10）/腋杖，助步器（20）
      <!--div.art2-->
        <!--h1.title 膝关节协会功能评估-->
        <!--div.con2-->
          <!--el-table( :data="tableData3" style="width:100%" height="250")-->
            <!--el-table-column(fixed prop="date5" label="日期" min-width="150")-->
            <!--el-table-column(prop="postoperationMonth3" label="术后第（）个月" min-width="120")-->
            <!--el-table-column(prop="walk1" label="步行" min-width="100")-->
            <!--el-table-column(prop="stairActivity1" label="上下楼梯" min-width="60")-->
            <!--el-table-column(prop="walkingAid1" label="辅助行走" min-width="100")-->
            <!--el-table-column(prop="total5" label="总计" min-width="60")-->
            <!--el-table-column(label="操作" min-width="60" fixed="right")-->
              <!--template(slot-scope="scope")-->
                <!--el-button(type="text" size="small") 编辑-->
        div.con2
          div.con2-left
          el-form-item.mini(label="日期" style="float:left")
            el-col
              el-date-picker.long(type="date" placeholder="选择日期" v-model="formModel.date5")
          el-form-item.mini(label="术后第（）个月" label-width="120px")
            el-input(v-model="formModel.postoperationMonth3" clearable)
          el-form-item.mini(label="步行")
            el-input(v-model="formModel.walk1" clearable)
          el-form-item.mini(label="上下楼梯")
            el-input(v-model="formModel.stairActivity1" clearable)
          el-form-item.mini(label="辅助行走" label-width="120px")
            el-input(v-model="formModel.walkingAid1" clearable)
          div
            div.left-align
              p 总计
            span {{total5}}/100
      div.art2
        h1.title 影像学评估
        div.con2
          table
            tr
              td.short-td
                div.con2-left 下肢全长片
              td(colspan="2").right-td
                el-form-item.short.bottom-align(label="日期" style="float:left")
                  el-col(:span="20")
                    el-date-picker(type="date" placeholder="选择日期" v-model="formModel.date6" style="width: 100%;")
                el-form-item.short.bottom-align(label="术后第")
                  el-input(v-model="formModel.postoperationWeek" clearable)
                    template(slot="append") 周
            tr
              td.short-td
                div.con2-left 机械轴
              td.mid-td 内翻=负值，外翻=正值
              td.right-td
                el-form-item.bottom-align.toleft-p
                  el-input(v-model="formModel.mechanicalAxis")
                    template(slot="append") °
            tr
              td.short-td
                div.con2-left 解剖轴
              td.mid-td 内翻=负值，外翻=正值
              td.right-td
                el-form-item.bottom-align.toleft-p
                  el-input(v-model="formModel.dissectionAxis")
                    template(slot="append") °
            tr
              td.short-td
                div.con2-left 前后位股骨假体角度
              td.mid-td 测量角度a-90°；内翻=负值，外翻=正值
              td.right-td
                el-form-item.bottom-align.toleft-p
                  el-input(v-model="formModel.angle7")
                    template(slot="append") °
            tr
              td.short-td
                div.con2-left 前后位胫骨假体角度
              td.mid-td 测量角度b-90°；内翻=负值，外翻=正值
              td.right-td
                el-form-item.bottom-align.toleft-p
                  el-input(v-model="formModel.angle8")
                    template(slot="append") °
            tr
              td.short-td
                div.con2-left 侧位股骨假体角度
              td.mid-td 测量角度c；e过伸=负值/屈曲=正值
              td.right-td
                el-form-item.bottom-align.toleft-p
                  el-input(v-model="formModel.angle9")
                    template(slot="append") °
            tr
              td.short-td
                div.con2-left 侧位胫骨假体角度
              td.mid-td 90°-测量角度d；前倾=负值，后倾=正值
              td.right-td
                el-form-item.bottom-align.toleft-p
                  el-input(v-model="formModel.angle10")
                    template(slot="append") °
            tr
              td.short-td
                div.con2-left 踝关节横截线
              td.mid-td 相对于胫骨轴线；内翻=负值，外翻=正值
              td.right-td
                el-form-item.bottom-align.toleft-p
                  el-input(v-model="formModel.ankle")
                    template(slot="append") °
            tr
              td.short-td
                div.con2-left 胫骨覆盖率
              td.mid-td 前后位胫骨覆盖率
              td.right-td
                el-form-item.bottom-align.toleft-p
                  el-input(v-model="formModel.tibiaFraction")
                    template(slot="append") %
      div.art2
        h1.title
        div.con2
          table
            tr
              td.img
                img(src="../../../../../static/images/img.png")
      <!--div.art2-->
        <!--div.con2-->
          <!--el-table( :data="tableData4" style="width:100%" height="250")-->
            <!--el-table-column(fixed prop="date7" label="日期" min-width="150")-->
            <!--el-table-column(prop="postoperationMonth4" label="术后第（）个月" min-width="120")-->
            <!--el-table-column(prop="thighboneSide" label="股骨骨水泥透亮区-侧位" min-width="190")-->
            <!--el-table-column(prop="tibiaFab" label="胫骨骨水泥透亮区-前后位" min-width="190")-->
            <!--el-table-column(prop="tibiaSide" label="胫骨骨水泥透亮区-侧位" min-width="190")-->
            <!--el-table-column(prop="thighboneCut" label="髌骨骨水泥透亮区-切位" min-width="190")-->
            <!--el-table-column(prop="thighboneSubluxation" label="髌骨半脱位" min-width="90")-->
            <!--el-table-column(prop="boneGraft" label="植骨吸收" min-width="90")-->
            <!--el-table-column(prop="loose" label="松动（股骨/胫骨/髌骨）" min-width="190")-->
            <!--el-table-column(prop="polyethyleneLiner" label="聚乙烯内衬" min-width="90")-->
            <!--el-table-column(prop="osteolysis" label="骨溶解" min-width="90")-->
            <!--el-table-column(label="操作" min-width="60" fixed="right")-->
              <!--template(slot-scope="scope")-->
                <!--el-button(type="text" size="small") 编辑-->
        div.con2
          div.con2-left
            el-form-item.short(label="日期" style="float:left" label-width="180px")
              el-col
                el-date-picker.long(type="date" placeholder="选择日期" v-model="formModel.date7")
            el-form-item.short(label="术后第（）个月" label-width="180px")
              el-input(v-model="formModel.postoperationMonth4" clearable)
            el-form-item.short(label="股骨骨水泥透亮区-侧位" label-width="180px")
              el-input(v-model="formModel.thighboneSide" clearable)
            el-form-item.short(label="胫骨骨水泥透亮区-前后位" label-width="180px")
              el-input(v-model="formModel.tibiaFab" clearable)
            el-form-item.short(label="胫骨骨水泥透亮区-侧位" label-width="180px")
              el-input(v-model="formModel.tibiaSide" clearable)
            el-form-item.short(label="髌骨骨水泥透亮区-切位" label-width="180px")
              el-input(v-model="formModel.thighboneCut" clearable)
            el-form-item.short(label="髌骨半脱位" label-width="180px")
              el-input(v-model="formModel.thighboneSubluxation" clearable)
            el-form-item.short(label="植骨吸收" label-width="180px")
              el-input(v-model="formModel.boneGraft" clearable)
            el-form-item.short(label="松动（股骨/胫骨/髌骨）" label-width="180px")
              el-input(v-model="formModel.loose" clearable)
            el-form-item.short(label="聚乙烯内衬" label-width="180px")
              el-input(v-model="formModel.polyethyleneLiner" clearable)
            el-form-item.short(label="骨溶解" label-width="180px")
              el-input(v-model="formModel.osteolysis" clearable)
</template>

<script>
  import FormModel from './model'
  import {JdyykneeURL, JdyypatientsURL} from '../../config.toml'
  export default {
    name: 'jdyyKneeAdd',
    data() {
      return {
        targetURL: JdyykneeURL,
        width: '80%',
        labelWidth: '90px',
        labelPosition: 'right',
        formModel: Object.assign({}, FormModel),
        tableData1: [{
          date3: '2018-03-12',
          postoperationMonth: '术前',
          pain2: '50',
          activity: '25',
          stability: '25',
          fixedFlexionContracture2: '-10',
          extensionRelaxation: '-5',
          forceLine3: '12',
          total3: '100'
        }],
        tableData2: [{
          date4: '2018-03-12',
          postoperationMonth2: '术前',
          satisfaction: '1',
          gait: '1',
          problem: '1',
          muscleStrength: '1',
          fixedFlexionContracture3: '1',
          hyperextension2: '1',
          lateralSlack: '1',
          frontBackSlack: '1',
          backSlack: '1'
        }],
        tableData3: [{
          date5: '2018-03-12',
          postoperationMonth3: '术前',
          walk1: '1',
          stairActivity1: '1',
          walkingAid1: '1',
          total5: '1'
        }],
        tableData4: [{
          date7: '2018-03-12',
          postoperationMonth4: '术前',
          thighboneSide: '1',
          tibiaFab: '1',
          tibiaSide: '1',
          thighboneCut: '1',
          thighboneSubluxation: '1',
          boneGraft: '1',
          loose: '1',
          polyethyleneLiner: '1',
          osteolysis: '1'
        }],
        arr1: [
          {name: '无', id: '50'},
          {name: '偶尔轻度疼痛', id: '45'},
          {name: '仅上下楼梯时疼痛', id: '40'},
          {name: '行走及上下楼梯是疼痛', id: '30'},
          {name: '偶尔中度疼痛', id: '20'},
          {name: '持续性中度疼痛', id: '10'},
          {name: '重度', id: '0'}
        ],
        arr2: [
          {name: '<5mm', id: '10'},
          {name: '5-10mm', id: '5'},
          {name: '>10mm', id: '0'}
        ],
        arr3: [
          {name: '<5°', id: '15'},
          {name: '6-9°', id: '10'},
          {name: '10-14°', id: '5'},
          {name: '>14°', id: '0'}
        ],
        arr4: [
          {name: '无', id: '0'},
          {name: '<10°', id: '5'},
          {name: '10-20°', id: '10'},
          {name: '>20°', id: '15'}
        ],
        arr5: [
          {name: '<5°', id: '0'},
          {name: '5-10°', id: '2'},
          {name: '10-15°', id: '5'},
          {name: '16-20°', id: '10'},
          {name: '>20°', id: '15'}
        ],
        arr6: [
          {name: '5-10°', id: '0'},
          {name: '0-4°或者11-15°', id: '3每°'},
          {name: '其他', id: '20'}
        ],
        arr7: [
          {name: '不受限', id: '50'},
          {name: '>10条街', id: '40'},
          {name: '5-10条街', id: '30'},
          {name: '<5条街', id: '20'},
          {name: '室内活动', id: '10'},
          {name: '无法行走', id: '0'}
        ],
        arr8: [
          {name: '上下楼都需要扶手', id: '30'},
          {name: '上楼需扶手，无法下楼', id: '15'},
          {name: '无法上下楼', id: '0'}
        ],
        arr9: [
          {name: '无', id: '0'},
          {name: '单拐', id: '5'},
          {name: '双拐', id: '10'},
          {name: '腋杖，助步器', id: '20'}
        ],
        options: []
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!')
        alert('天啦噜')
      },
      getPatients() {
        console.log('getPatients===============================start')
        this.axios.request({
          method: 'GET',
          url: JdyypatientsURL + '/getDataBySelect'
        }).then(res => {
          console.log('getPatients.success==================', res.data.data)
          this.options = res.data.data
        })
      },
      getData(value) {
        console.log('getData========================', value)
        this.axios.request({
          method: 'GET',
          url: JdyypatientsURL + '/' + value,
          data: {
            id: value
          }
        }).then(res => {
          console.log('getData.success======================', res.data)
          this.formModel.name = res.data.name
          this.formModel.sex = res.data.sex
          this.formModel.age = res.data.age
          this.formModel.telephonePerson = res.data.telephonePerson
          this.formModel.address = res.data.address
          this.formModel.hospitalNumber = res.data.hospitalNumber
        })
      }
    },
    mounted() {
      this.getPatients()
    },
    computed: {
      total1() {
        return parseInt(this.formModel.pain) + parseInt(this.formModel.unwind / 5) + parseInt(this.formModel.buckling / 5) + parseInt(this.formModel.apPosition) + parseInt(this.formModel.lateralPosition) + parseInt(this.formModel.hyperextension) + parseInt(this.formModel.fixedFlexionContracture) + parseInt(this.formModel.forceLine)
      },
      total2() {
        return parseInt(this.formModel.hoof) + parseInt(this.formModel.stairActivity) + parseInt(this.formModel.walkingAid)
      },
      total3() {
        return parseInt(this.formModel.pain2) + parseInt(this.formModel.activity) + parseInt(this.formModel.stability) + parseInt(this.formModel.fixedFlexionContracture2) + parseInt(this.formModel.extensionRelaxation) + parseInt(this.formModel.forceLine3)
      },
      total5() {
        return parseInt(this.formModel.walk1) + parseInt(this.formModel.stairActivity1) + parseInt(this.formModel.walkingAid1)
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
        height 310px
        .con1-left
          border 1px solid black
          display inline-block
          width 40%
          margin-right 2.5%
          padding 0.5%
        .con1-right
          display inline-block
          border 1px solid black
          width 55%
          padding 0.5%
    .art2
      /*width 1160px*/
      margin-top 25px
      .con3
        table
          border 1px solid black
          text-align center
          width 100%
      .con2
        margin-top 10px
        table
          word-break break-all
          margin-bottom 20px
          border 1px solid black
          border-collapse collapse
          width 100%
        tr
          width 100%
        .short-td
          padding 10px
          width 20%
          text-align center
          border 1px solid black
        .long-td
          border 1px solid black
          padding 10px
          width 80%
        .mid-td
          width 50%
          padding 10px
          text-align center
          border 1px solid black
        .right-td
          border 1px solid black
          padding-right 15px
    .btn-box
      width 1160px
      .btn
        margin-left 38%
        margin-top 20px
    .mini
      width 30%
      display inline-block
      vertical-align top
    .short
      width 50%
      display inline-block
    .long
      width 100%
    .toleft
      margin-left -40px
    .toright
      margin-left 40px
    .left-align
      display inline-block
      text-align right
      width 90px
      font-family "Helvetica Neue", "Helvetica", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", "Arial", "sans-serif"
      color br_color3
      font-size 14px
      vertical-align center
      p
        padding-right 12px
        line-height 40px
    span
      font-family "Helvetica Neue", "Helvetica", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif
      color br_color3
      font-size 14px
    .toleft-p
      margin-left -50px
    .toleft-more
      margin-left -100px
    .unit-width
      width 33%
      display inline-block
    .medium
      display inline-block
      width 40%
    .p-left
      margin-left 10px
    .top-align
      p
        line-height 20px
    .big-width
      width 96px
      margin-left -6px
    .left-box
      text-align center
    .bottom-align
      margin-bottom 15px
      margin-top 15px
    .img
      text-align center
      width 100%
      padding 20px 0
      img
        width 80%
        height auto

  /*margin-bottom 0*/
</style>
