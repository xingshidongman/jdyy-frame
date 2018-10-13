<template lang="pug">
  div.back
    el-form(ref="form" :model="form" label-width="90px" :label-position="labelPosition" )
      div.art1
        h1.title 全膝关节置换术
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
              el-input(v-model="form.orderNumber" clearable)
            el-form-item.toleft(label="日期")
              el-col(:span="22")
                el-date-picker(type="date" placeholder="选择日期" v-model="form.date" style="width: 100%;")
            el-form-item.toleft(label="部位")
              el-radio-group(v-model="form.position")
                el-radio(label="左")
                el-radio(label="右")
            el-form-item.short.toleft(label="诊断")
              el-select(v-model="form.disease" placeholder="请选择")
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
                div.con2-left 诊断
              td.long-td
                div.con2-right
                  el-form-item.short(label="诊断结果")
                    el-select(v-model="form.disease2" placeholder="请选择")
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
                    el-select(v-model="form.position2" placeholder="请选择")
                      el-option(label="左" value="左")
                      el-option(label="右" value="右")
                  el-form-item.short(label="方式")
                    el-select(v-model="form.mode" placeholder="请选择")
                      el-option(label="单侧置换" value="单侧置换")
                      el-option(label="一期双侧置换（两膝假体型号不一致）" value="一期双侧置换（两膝假体型号不一致）")
            tr
              td.short-td
                div.con2-left 术前膝关节情况/治疗
              td.long-td
                div.con2-right
                  el-form-item.short(label="骨折")
                    el-radio-group(v-model="form.fracture")
                      el-radio(label="是")
                      el-radio(label="否")
                  el-form-item.short(label="感染")
                    el-radio-group(v-model="form.infected")
                      el-radio(label="是")
                      el-radio(label="否")
                  el-form-item.short(label="关节镜")
                    el-radio-group(v-model="form.arthroscope")
                      el-radio(label="是")
                      el-radio(label="否")
                  el-form-item.short(label="截骨")
                    el-radio-group(v-model="form.osteotomy")
                      el-radio(label="是")
                      el-radio(label="否")
                  el-form-item.short(label="置换")
                    el-radio-group(v-model="form.substitution")
                      el-radio(label="是")
                      el-radio(label="否")
                  el-form-item.short(label="其他")
                    el-radio-group(v-model="form.other1")
                      el-radio(label="是")
                      el-radio(label="否")
                  el-form-item.long(label="其他")
                    el-input(v-model="form.other2")
            tr
              td.short-td
                div.con2-left 其他关节
              td.long-td
                div.con2-right
                  el-form-item.short(label="对侧膝关节")
                    el-select(v-model="form.contralateral" placeholder="请选择")
                      el-option(label="无症状" value="无症状")
                      el-option(label="有症状" value="有症状")
                      el-option(label="已经置换" value="已经置换")
                      el-option(label="将要置换" value="将要置换")
                      el-option(label="不想置换" value="不想置换")
                  el-form-item.short(label="其他")
                    el-input(v-model="form.other3" clearable)
            tr
              td.short-td
                div.con2-left 病人分类
              td.long-td
                div.con2-right
                  el-form-item.short(label="分类")
                    el-select(v-model="form.classification" placeholder="请选择")
                      el-option(label="单侧或双侧（对侧膝关节已成功置换）" value="单侧或双侧（对侧膝关节已成功置换）")
                      el-option(label="单侧，对侧膝关节有症状" value="单侧，对侧膝关节有症状")
                      el-option(label="多发关节炎或其他疾病" value="多发关节炎或其他疾病")
            tr
              td.short-td
                div.con2-left 术前膝关节功能评分
              td.long-td
                div.con2-right
                  el-form-item(label="疼痛")
                    el-select.long(v-model="form.pain" placeholder="请选择")
                      el-option(label="无（50）" value="50")
                      el-option(label="偶尔轻度疼痛" value="45")
                      el-option(label="仅上下楼梯时疼痛" value="40")
                      el-option(label="行走及上下楼梯是疼痛" value="30")
                      el-option(label="偶尔中度疼痛" value="20")
                      el-option(label="持续性中度疼痛" value="10")
                      el-option(label="重度" value="0")
                div
                  div.left-align
                    p 术前活动度
                  el-form-item.mini.toleft-p(label="伸直")
                    el-input.long(v-model="form.unwind" clearable)
                  el-form-item.mini
                    el-select.long.toleft(v-model="form.overextension" placeholder="请选择")
                      el-option(label="屈曲挛缩" value="屈曲挛缩")
                      el-option(label="过伸" value="过伸")
                  el-form-item.mini.toleft(label="屈曲" )
                    el-input.long(v-model="form.buckling" clearable)
                div
                  div.left-align
                    p 稳定性
                  el-form-item.short.toleft(label="前后位")
                    el-select.long(v-model="form.apPosition" placeholder="请选择")
                      el-option(label="<5mm" value="10")
                      el-option(label="5-10mm" value="5")
                      el-option(label=">10mm" value="0")
                  el-form-item.short.toleft-p(label="侧位" label-width="120px")
                    el-select.long(v-model="form.lateralPosition" placeholder="请选择")
                      el-option(label="<5°" value="15")
                      el-option(label="6-9°" value="10")
                      el-option(label="10-14°" value="5")
                      el-option(label=">14°" value="0")
                el-form-item.short(label="过伸")
                  el-select.long(v-model="form.hyperextension" placeholder="请选择")
                    el-option(label="无" value="0")
                    el-option(label="<10°" value="5")
                    el-option(label="10-20°" value="10")
                    el-option(label=">20°" value="15")
                el-form-item.short.linecenter(label="固定屈曲挛缩(FFC)" label-width="150px")
                  el-select.long(v-model="form.fixedFlexionContracture" placeholder="请选择" )
                    el-option(label="<5°" value="0")
                    el-option(label="5-10°" value="2")
                    el-option(label="10-15°" value="5")
                    el-option(label="16-20°" value="10")
                    el-option(label=">20°" value="15")
                el-form-item.short(label="力线")
                  el-select.long(v-model="form.forceLine" placeholder="请选择")
                    el-option(label="5-10°" value="0")
                    el-option(label="0-4°或者11-15°" value="3每°")
                    el-option(label="其他" value="20")
                div
                  div.left-align
                    p Total
                  span {{form.total1}}/100
            tr
              td.short-td
                div.con2-left 术前膝关节协会功能评估
              td.long-td
                div.con2-right
                  el-form-item.short(label="行走")
                    el-select.long(v-model="form.hoof" placeholder="请选择")
                      el-option(label="不受限" value="50")
                      el-option(label=">10条街" value="40")
                      el-option(label="5-10条街" value="30")
                      el-option(label="<5条街" value="20")
                      el-option(label="室内活动" value="10")
                      el-option(label="无法行走" value="0")
                  el-form-item.short(label="上下楼梯")
                    el-select.long(v-model="form.stairActivity" placeholder="请选择")
                      el-option(label="上下楼都需要扶手" value="30")
                      el-option(label="上楼需扶手，无法下楼" value="15")
                      el-option(label="无法上下楼" value="0")
                  el-form-item.short(label="行走辅助")
                    el-select.long(v-model="form.walkingAid" placeholder="请选择")
                      el-option(label="无" value="0")
                      el-option(label="单拐" value="5")
                      el-option(label="双拐" value="10")
                      el-option(label="腋杖，助步器" value="20")
                  div
                    div.left-align
                      p 总计
                    span {{form.total2}}/100
            tr
              td.short-td
                div.con2-left 其他信息
              td.long-td
                div.con2-right
                  el-form-item.short(label="身高")
                    el-input(v-model="form.height" clearable)
                      template(slot="append") cm
                  el-form-item.short(label="股四头肌肌力" label-width="50%")
                    el-input(v-model="form.muscle" clearable)
                  el-form-item.short(label="体重")
                    el-input(v-model="form.weight" clearable)
                      template(slot="append") kg
                  el-form-item.short(label="机械轴（前后位X线片）" label-width="50%")
                    el-input(v-model="form.machine" clearable)
                  el-form-item.short()
                    el-radio-group(v-model="form.around")
                      el-radio(label="内翻")
                      el-radio(label="外翻")
            tr
              td.short-td
                div.con2-left 手术
              td.long-td
                div.con2-right
                  el-form-item.short(label="日期")
                    el-date-picker.long(type="date" placeholder="选择日期" v-model="form.date2")
                  el-form-item.short(label="手术医生")
                    el-input(v-model="form.doctor2" clearable)
            tr
              td.short-td
                div.con2-left 电动驱血带
              td.long-td
                div.con2-right
                  el-form-item.unit-width(label="第一次充气")
                    el-input(v-model="form.firstInflation" clearable)
                      template(slot="append") 分
                  el-form-item.unit-width(label="放气" )
                    el-input(v-model="form.deFlation" clearable)
                      template(slot="append") 分
                  el-form-item.unit-width(label="第二次充气")
                    el-input(v-model="form.secondInflation" clearable)
                      template(slot="append") 分
            tr
              td.short-td
                div.con2-left 入路
              td.long-td
                div.con2-right
                  el-form-item.short(label="入路")
                    el-select(v-model="form.approach" placeholder="请选择")
                      el-option(label="Install" value="Install")
                      el-option(label="髌旁内侧入路" value="髌旁内侧入路")
                      el-option(label="胫骨结节截骨术" value="胫骨结节截骨术")
                      el-option(label="外侧入路" value="前侧")
                  el-form-item.short(label="其他")
                    el-input(v-model="form.other4" clearable)
            tr
              td.short-td
                div.con2-left 松解
              td.long-td
                div.con2-right
                  el-form-item.short(label="内侧")
                    el-select(v-model="form.inside" placeholder="请选择")
                      el-option(label="无" value="无")
                      el-option(label="一般性松解" value="一般性松解")
                      el-option(label="广泛性松解" value="广泛性松解")
                  el-form-item.short(label="后方")
                    el-select(v-model="form.rear" placeholder="请选择")
                      el-option(label="无" value="无")
                      el-option(label="一般性松解" value="一般性松解")
                      el-option(label="广泛性松解" value="广泛性松解")
                  el-form-item.short(label="外侧")
                    el-select(v-model="form.outBoard" placeholder="请选择")
                      el-option(label="无" value="无")
                      el-option(label="一般性松解" value="一般性松解")
                      el-option(label="广泛性松解" value="广泛性松解")
                  el-form-item.short(label="外侧支持带")
                    el-select(v-model="form.retinaculum" placeholder="请选择")
                      el-option(label="无" value="无")
                      el-option(label="一般性松解" value="一般性松解")
                      el-option(label="广泛性松解" value="广泛性松解")
            tr
              td.short-td
                div.con2-left 软组织
              td.long-td
                div.con2-right
                  el-form-item.mini(label="脂肪垫")
                    el-select(v-model="form.fatPad" placeholder="请选择")
                      el-option(label="无" value="无")
                      el-option(label="一般性松解" value="一般性松解")
                      el-option(label="广泛性松解" value="广泛性松解")
                  el-form-item.mini(label="滑膜切除")
                    el-select(v-model="form.synovectomy" placeholder="请选择")
                      el-option(label="无" value="无")
                      el-option(label="一般性松解" value="一般性松解")
                      el-option(label="广泛性松解" value="广泛性松解")
                  el-form-item.mini(label="髌韧带")
                    el-select(v-model="form.ligament" placeholder="请选择")
                      el-option(label="无" value="无")
                      el-option(label="一般性松解" value="一般性松解")
                      el-option(label="广泛性松解" value="广泛性松解")
            tr
              td.short-td
                div.con2-left 翻修手术
              td.long-td
                div.con2-right
                  el-form-item.short(label="股骨")
                    el-select(v-model="form.femur" placeholder="请选择")
                      el-option(label="完整" value="完整")
                      el-option(label="松动" value="松动")
                  el-form-item.short(label="胫骨")
                    el-select(v-model="form.tibia" placeholder="请选择")
                      el-option(label="完整" value="完整")
                      el-option(label="聚乙烯磨损" value="聚乙烯磨损")
                      el-option(label="松动" value="松动")
                  el-form-item.short(label="髌骨")
                    el-select(v-model="form.patella" placeholder="请选择")
                      el-option(label="完整" value="完整")
                      el-option(label="聚乙烯磨损" value="聚乙烯磨损")
                      el-option(label="松动" value="松动")
                  el-form-item.short(label="更换组件")
                    el-select(v-model="form.renewal" placeholder="请选择")
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
                    el-input.short(v-model="form.name2")
                  el-form-item(label="类型")
                    el-select.short(v-model="form.genre" placeholder="请选择")
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
                    el-input.long(v-model="form.genre2" clearable)
                  el-form-item.medium(label="水泥型")
                    el-select.long(v-model="form.genre3" placeholder="请选择")
                      el-option(label="是" value="是")
                      el-option(label="否" value="否")
                div.con2-right
                  el-form-item.short(label="旋转")
                    el-select(v-model="form.spin" placeholder="请选择")
                      el-option(label="内旋" value="内旋")
                      el-option(label="外旋" value="外旋")
                      el-option(label="中立" value="中立")
                  el-form-item.short.toleft-more
                    el-input(v-model="form.angle" clearable)
                      template(slot="append") °
                div.con2-right
                  el-form-item.short.toleft(label="股骨前方截骨" label-width="130px")
                    el-select(v-model="form.thighbone" placeholder="请选择")
                      el-option(label="正确" value="正确")
                      el-option(label="截骨不足" value="截骨不足")
                      el-option(label="过度截骨" value="过度截骨")
                div.con2-right
                  el-form-item.mini(label="长柄" )
                    el-select(v-model="form.longHandle" placeholder="请选择")
                      el-option(label="是" value="是")
                      el-option(label="否" value="否")
                  el-form-item.unit-width.toleft(label="长度")
                    el-input(v-model="form.longness" clearable)
                      template(slot="append") mm
                  el-form-item.unit-width(label="直径")
                    el-input(v-model="form.diameter" clearable)
                      template(slot="append") mm
                div.con2-right
                  el-form-item.short(label="髓内导向器" )
                    el-select(v-model="form.guider" placeholder="请选择")
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
                    el-input.long(v-model="form.genre4" clearable)
                  el-form-item.medium(label="水泥型")
                    el-select.long(v-model="form.genre5" placeholder="请选择")
                      el-option(label="是" value="是")
                      el-option(label="否" value="否")
                div.con2-right
                  el-form-item.short(label="旋转")
                    el-select(v-model="form.spin2" placeholder="请选择")
                      el-option(label="内旋" value="内旋")
                      el-option(label="外旋" value="外旋")
                      el-option(label="中立" value="中立")
                  el-form-item.short.toleft-more
                    el-input(v-model="form.angle2" clearable)
                      template(slot="append") °
                div.con2-right
                  el-form-item.short(label="侧位")
                    el-select(v-model="form.lateralPosition1" placeholder="请选择")
                      el-option(label="准确" value="准确")
                      el-option(label="内侧移位" value="内侧移位")
                      el-option(label="外侧移位" value="中立")
                div.con2-right
                  el-form-item.short(label="正位")
                    el-select(v-model="form.normotopia" placeholder="请选择")
                      el-option(label="准确" value="准确")
                      el-option(label="内侧移位" value="内侧移位")
                      el-option(label="外侧移位" value="中立")
                div
                  div.left-align
                    p 植入
                  el-form-item.medium.toleft-p(label="尺寸")
                    el-input(v-model="form.dimension" clearable)
                  el-form-item.medium(label="厚度")
                    el-input(v-model="form.thickness" clearable)
                      template(slot="append") mm
                div.con2-right
                  el-form-item.mini(label="长柄" )
                    el-select(v-model="form.longHandle2" placeholder="请选择")
                      el-option(label="是" value="是")
                      el-option(label="否" value="否")
                  el-form-item.unit-width.toleft(label="长度")
                    el-input(v-model="form.longness2" clearable)
                      template(slot="append") mm
                  el-form-item.unit-width(label="直径")
                    el-input(v-model="form.diameter2" clearable)
                      template(slot="append") mm
            tr
              td.short-td
                div.con2-left 髌骨假体
              td.long-td
                div
                  div.left-align
                    p 尺寸
                  el-form-item.medium.toleft-p(label="水泥")
                    el-select(v-model="form.cement" placeholder="请选择")
                      el-option(label="是" value="是")
                      el-option(label="否" value="否")
                  el-form-item.medium(label="总厚度")
                    el-input(v-model="form.thickness2" clearable)
                      template(slot="append") mm
                div.con2-right
                  el-form-item.short(label="位置" )
                    el-select(v-model="form.location" placeholder="请选择")
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
                    el-select.long(v-model="form.vitium" placeholder="请选择")
                      el-option(label="是" value="是")
                      el-option(label="否" value="否")
                div.con2-right
                  el-form-item.short(label="位置" )
                    el-select(v-model="form.location2" placeholder="请选择")
                      el-option(label="内侧" value="内侧")
                      el-option(label="外侧" value="中心")
                  el-form-item.short
                    el-select(v-model="form.location3" placeholder="请选择")
                      el-option(label="前方" value="前方")
                      el-option(label="远端" value="远端")
                      el-option(label="后方" value="后方")
                div
                  div.left-align
                    p 区域
                  el-form-item.unit-width.toleft-p
                    el-input.toleft(v-model="form.length" clearable)
                      template(slot="append") mm
                  el-form-item.unit-width.toleft-more(label="x")
                    el-input(v-model="form.wide" clearable)
                      template(slot="append") mm
                  el-form-item.unit-width.toleft(label="深度")
                    el-input(v-model="form.depth" clearable)
                      template(slot="append") mm
            tr
              td.short-td
                div.con2-left 胫骨侧缺陷
              td.long-td
                div.con2-right
                  el-form-item.short.toleft
                    el-select.long(v-model="form.vitium2" placeholder="请选择")
                      el-option(label="是" value="是")
                      el-option(label="否" value="否")
                div.con2-right
                  el-form-item.short(label="位置" )
                    el-select(v-model="form.location4" placeholder="请选择")
                      el-option(label="内侧" value="内侧")
                      el-option(label="外侧" value="中心")
                  el-form-item.short
                    el-select(v-model="form.location5" placeholder="请选择")
                      el-option(label="前方" value="前方")
                      el-option(label="远端" value="远端")
                      el-option(label="后方" value="后方")
                div
                  div.left-align
                    p 区域
                  el-form-item.unit-width.toleft-p
                    el-input.toleft(v-model="form.length2" clearable)
                      template(slot="append") mm
                  el-form-item.unit-width.toleft-more(label="x")
                    el-input(v-model="form.wide2" clearable)
                      template(slot="append") mm
                  el-form-item.unit-width.toleft(label="深度")
                    el-input(v-model="form.depth2" clearable)
                      template(slot="append") mm
                div.con2-right
                  el-form-item.short(label="处理方案" )
                    el-select(v-model="form.processingScheme" placeholder="请选择")
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
                    el-select(v-model="form.patellaTrajectory" placeholder="请选择")
                      el-option(label="完美" value="完美")
                      el-option(label="满意" value="满意")
                      el-option(label="不满意" value="不满意")
                div.con2-right
                  el-form-item.short(label="完全伸直")
                    el-input(v-model="form.completelyStraight")
                      template(slot="append") °
                  el-form-item.short
                    el-select(v-model="form.overextension2" placeholder="屈曲挛缩")
                      el-option(label="屈曲挛缩" value="屈曲挛缩")
                      el-option(label="过伸" value="过伸")
                div.con2-right
                  el-form-item.short(label="全屈")
                    el-input(v-model="form.allBends")
                      template(slot="append") °
                div.con2-right
                  el-form-item.unit-width(label="力线")
                    el-select(v-model="form.normal" placeholder="正常")
                      el-option(label="正常（5-10°）" value="正常")
                      el-option(label="不正常" value="不正常")
                  el-form-item.unit-width.toleft-p
                    el-input(v-model="form.forceLine2")
                      template(slot="append") °
                  el-form-item.unit-width.toleft-p
                    el-select(v-model="form.reversal" placeholder="内翻")
                      el-option(label="内翻" value="内翻")
                      el-option(label="外翻" value="外翻")
                div.con2-right
                  el-form-item.unit-width(label="内侧松弛")
                    el-select(v-model="form.exist" placeholder="有")
                      el-option(label="有" value="有")
                      el-option(label="无" value="无")
                  el-form-item.unit-width.toleft-p
                    el-input(v-model="form.angle3")
                      template(slot="append") °
                  el-form-item.unit-width.toleft-p(label="在")
                    el-input(v-model="form.angle4")
                      template(slot="append") °
                  span.p-left 屈曲时
                div.con2-right
                  el-form-item.unit-width(label="外侧松弛")
                    el-select(v-model="form.exist1" placeholder="有")
                      el-option(label="有" value="有")
                      el-option(label="无" value="无")
                  el-form-item.unit-width.toleft-p
                    el-input(v-model="form.angle5")
                      template(slot="append") °
                  el-form-item.unit-width.toleft-p(label="在")
                    el-input(v-model="form.angle6")
                      template(slot="append") °
                  span.p-left 屈曲时
            tr
              td.short-td
                div.con2-left 术后
              td.long-td
                div.con2-right.short
                  el-form-item(label="总引流")
                    el-input(v-model="form.drainage")
                      template(slot="append") ml
                div
                  div.left-align
                    p 屈曲达到90°
                  el-form-item.short.toleft-p(label="术后")
                    el-input.mini(v-model="form.postoperationDay" clearable)
                    span.p-left 天
                div.flex
                  div.left-align.top-align
                    p 术后两周活动度
                  div.mini
                    el-form-item.toleft-p(label="伸直")
                      el-input(v-model="form.unwind2" clearable)
                        template(slot="append") °
                  div.mini
                    el-form-item.toleft(label="屈曲")
                      el-input(v-model="form.buckling2" clearable)
                        template(slot="append") °
                  div.mini
                    el-form-item.toleft
                      el-select(v-model="form.debonding" placeholder="麻醉下松解")
                        el-option(label="麻醉下松解" value="麻醉下松解")
                        el-option(label="无麻醉下松解" value="无麻醉下松解")
                div.con2-right
                  el-form-item.short(label="切口愈合")
                    el-select(v-model="form.woundHealing" placeholder="请选择")
                      el-option(label="容易" value="容易")
                      el-option(label="边缘坏死" value="边缘坏死")
                      el-option(label="感染" value="感染")
                div
                  div.left-align.big-width
                    p 用单手杖行走
                  el-form-item.short.toleft-p(label="术后")
                    el-input(v-model="form.postoperationDay2" clearable)
                  span.p-left 天
                div
                  div.left-align
                    p 独立行走
                  el-form-item.short.toleft-p(label="术后")
                    el-input(v-model="form.postoperationDay3" clearable)
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
      div.art2
        h1.title 膝关节功能评分
        div.con2
          el-table( :data="tableData1" style="width:100%" height="250")
            el-table-column(fixed prop="date3" label="日期" min-width="150")
            el-table-column(prop="postoperationMonth" label="术后第（）个月" min-width="120")
            el-table-column(prop="pain2" label="疼痛" min-width="60")
            el-table-column(prop="activity" label="活动度" min-width="100")
            el-table-column(prop="stability" label="稳定性" min-width="100")
            el-table-column(prop="fixedFlexionContracture2" label="固定屈曲挛缩（FFC）" min-width="170")
            el-table-column(prop="extensionRelaxation" label="伸直位松弛" min-width="100")
            el-table-column(prop="forceLine3" label="力线" min-width="60")
            el-table-column(prop="total3" label="总计" min-width="60")
        div.con2
          div.con2-left
          el-form-item.mini(label="日期")
            el-input(v-model="form.data3" clearable)
          el-form-item.mini(label="术后第（）个月" label-width="120px")
            el-input(v-model="form.postoperationMonth" clearable)
          el-form-item.mini(label="疼痛")
            el-input(v-model="form.pain2" clearable)
          el-form-item.mini(label="活动度")
            el-input(v-model="form.activity" clearable)
          el-form-item.mini(label="稳定性")
            el-input(v-model="form.stability" clearable)
          el-form-item.mini(label="固定屈曲挛缩（FFC）" label-width="160px")
            el-input(v-model="form.fixedFlexionContracture2" clearable)
          el-form-item.mini(label="伸直位松弛")
            el-input(v-model="form.extensionRelaxation" clearable)
          el-form-item.mini(label="力线")
            el-input(v-model="form.forceLine3" clearable)
          el-form-item.mini(label="总计")
            el-input(v-model="form.total3" clearable :disabled="true")
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
      div.art2
        h1.title 置换术后的特殊问题
        div.con2
          el-table( :data="tableData2" style="width:100%" height="250")
            el-table-column(fixed prop="date4" label="日期" min-width="150")
            el-table-column(prop="postoperationMonth2" label="术后第（）个月" min-width="120")
            el-table-column(prop="satisfaction" label="患者满意度" min-width="100")
            el-table-column(prop="gait" label="步态" min-width="60")
            el-table-column(prop="problem" label="髌骨侧问题" min-width="100")
            el-table-column(prop="muscleStrength" label="股四头肌肌力" min-width="120")
            el-table-column(prop="fixedFlexionContracture3" label="固定屈曲挛缩（FFC）" min-width="170")
            el-table-column(prop="hyperextension2" label="过伸" min-width="60")
            el-table-column(prop="lateralSlack" label="侧方松弛" min-width="100")
            el-table-column(prop="frontBackSlack" label="前后松弛" min-width="100")
            el-table-column(prop="backSlack" label="后方松弛" min-width="100")
        div.con2
          div.con2-left
          el-form-item.mini(label="日期")
            el-input(v-model="form.date4" clearable)
          el-form-item.mini(label="术后第（）个月" label-width="120px")
            el-input(v-model="form.postoperationMonth2" clearable)
          el-form-item.mini(label="患者满意度")
            el-input(v-model="form.satisfaction" clearable)
          el-form-item.mini(label="步态")
            el-input(v-model="form.gait" clearable)
          el-form-item.mini(label="髌骨侧问题")
            el-input(v-model="form.problem" clearable)
          el-form-item.mini(label="股四头肌肌力" label-width="110px")
            el-input(v-model="form.muscleStrength" clearable)
          el-form-item.mini(label="固定屈曲挛缩（FFC）" label-width="160px")
            el-input(v-model="form.fixedFlexionContracture3" clearable)
          el-form-item.mini(label="过伸")
            el-input(v-model="form.hyperextension2" clearable)
          el-form-item.mini(label="侧方松弛")
            el-input(v-model="form.lateralSlack" clearable)
          el-form-item.mini(label="前后松弛")
            el-input(v-model="form.frontBackSlack" clearable)
          el-form-item.mini(label="后方松弛")
            el-input(v-model="form.backSlack" clearable)
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
      div.art2
        h1.title 膝关节协会功能评估
        div.con2
          el-table( :data="tableData3" style="width:100%" height="250")
            el-table-column(fixed prop="date5" label="日期" min-width="150")
            el-table-column(prop="postoperationMonth3" label="术后第（）个月" min-width="120")
            el-table-column(prop="walk1" label="步行" min-width="100")
            el-table-column(prop="stairActivity1" label="上下楼梯" min-width="60")
            el-table-column(prop="walkingAid1" label="辅助行走" min-width="100")
            el-table-column(prop="total5" label="总计" min-width="60")
        div.con2
          div.con2-left
          el-form-item.mini(label="日期")
            el-input(v-model="form.date5" clearable)
          el-form-item.mini(label="术后第（）个月" label-width="120px")
            el-input(v-model="form.postoperationMonth3" clearable)
          el-form-item.mini(label="步行")
            el-input(v-model="form.walk1" clearable)
          el-form-item.mini(label="上下楼梯")
            el-input(v-model="form.stairActivity1" clearable)
          el-form-item.mini(label="辅助行走")
            el-input(v-model="form.walkingAid1" clearable)
          el-form-item.mini(label="总计")
            el-input(v-model="form.total5" clearable :disabled="true")
      div.art2
        h1.title 影像学评估
        div.con2
          table
            tr
              td.short-td
                div.con2-left 下肢全长片
              td(colspan="2").long-td
                div.right-td
                  el-form-item.short.bottom-align(label="日期" style="float:left")
                    el-col(:span="20")
                      el-date-picker(type="date" placeholder="选择日期" v-model="form.date6" style="width: 100%;")
                  el-form-item.mini.bottom-align(label="术后第")
                    el-input(v-model="form.postoperationWeek" clearable)
                      template(slot="append") 周
            tr
              td.short-td
                div.con2-left 机械轴
              td.long-td
                div.right-td
                  div.left-box 内翻=负值，外翻=正值
                  div.right-box
                    el-form-item.bottom-align
                      el-input(v-model="form.mechanicalAxis")
                        template(slot="append") °
            tr
              td.short-td
                div.con2-left 解剖轴
              td.long-td
                div.right-td
                  div.left-box 内翻=负值，外翻=正值
                  div.right-box
                    el-form-item.bottom-align
                      el-input(v-model="form.dissectionAxis")
                        template(slot="append") °
            tr
              td.short-td
                div.con2-left 前后位股骨假体角度
              td.long-td
                div.right-td
                  div.left-box 测量角度a-90°；内翻=负值，外翻=正值
                  div.right-box
                    el-form-item.bottom-align
                      el-input(v-model="form.angle7")
                        template(slot="append") °
            tr
              td.short-td
                div.con2-left 前后位胫骨假体角度
              td.long-td
                div.right-td
                  div.left-box 测量角度b-90°；内翻=负值，外翻=正值
                  div.right-box
                    el-form-item.bottom-align
                      el-input(v-model="form.angle8")
                        template(slot="append") °
            tr
              td.short-td
                div.con2-left 侧位股骨假体角度
              td.long-td
                div.right-td
                  div.left-box 测量角度c；e过伸=负值/屈曲=正值
                  div.right-box
                    el-form-item.bottom-align
                      el-input(v-model="form.angle9")
                        template(slot="append") °
            tr
              td.short-td
                div.con2-left 侧位胫骨假体角度
              td.long-td
                div.right-td
                  div.left-box 90°-测量角度d；前倾=负值，后倾=正值
                  div.right-box
                    el-form-item.bottom-align
                      el-input(v-model="form.angle10")
                        template(slot="append") °
            tr
              td.short-td
                div.con2-left 踝关节横截线
              td.long-td
                div.right-td
                  div.left-box 相对于胫骨轴线；内翻=负值，外翻=正值
                  div.right-box
                    el-form-item.bottom-align
                      el-input(v-model="form.ankle")
                        template(slot="append") °
            tr
              td.short-td
                div.con2-left 胫骨覆盖率
              td.long-td
                div.right-td
                  div.left-box 前后位胫骨覆盖率
                  div.right-box
                    el-form-item.bottom-align
                      el-input(v-model="form.tibiaFraction")
                        template(slot="append") %
      div.art2
        h1.title
        div.con2
          table
            tr
              td.img
                img(src="../../../../../static/images/img.png")
      div.art2
        div.con2
          el-table( :data="tableData4" style="width:100%" height="250")
            el-table-column(fixed prop="date7" label="日期" min-width="150")
            el-table-column(prop="postoperationMonth4" label="术后第（）个月" min-width="120")
            el-table-column(prop="thighboneSide" label="股骨骨水泥透亮区-侧位" min-width="190")
            el-table-column(prop="tibiaFab" label="胫骨骨水泥透亮区-前后位" min-width="190")
            el-table-column(prop="tibiaSide" label="胫骨骨水泥透亮区-侧位" min-width="190")
            el-table-column(prop="thighboneCut" label="髌骨骨水泥透亮区-切位" min-width="190")
            el-table-column(prop="thighboneSubluxation" label="髌骨半脱位" min-width="90")
            el-table-column(prop="boneGraft" label="植骨吸收" min-width="90")
            el-table-column(prop="loose" label="松动（股骨/胫骨/髌骨）" min-width="190")
            el-table-column(prop="polyethyleneLiner" label="聚乙烯内衬" min-width="90")
            el-table-column(prop="osteolysis" label="骨溶解" min-width="90")
        div.con2
          div.con2-left
            el-form-item.short(label="日期" label-width="180px")
              el-input(v-model="form.date7" clearable)
            el-form-item.short(label="术后第（）个月" label-width="180px")
              el-input(v-model="form.postoperationMonth4" clearable)
            el-form-item.short(label="股骨骨水泥透亮区-侧位" label-width="180px")
              el-input(v-model="form.thighboneSide" clearable)
            el-form-item.short(label="胫骨骨水泥透亮区-前后位" label-width="180px")
              el-input(v-model="form.tibiaFab" clearable)
            el-form-item.short(label="胫骨骨水泥透亮区-侧位" label-width="180px")
              el-input(v-model="form.tibiaSide" clearable)
            el-form-item.short(label="髌骨骨水泥透亮区-切位" label-width="180px")
              el-input(v-model="form.thighboneCut" clearable)
            el-form-item.short(label="髌骨半脱位" label-width="180px")
              el-input(v-model="form.thighboneSubluxation" clearable)
            el-form-item.short(label="植骨吸收" label-width="180px")
              el-input(v-model="form.boneGraft" clearable)
            el-form-item.short(label="松动（股骨/胫骨/髌骨）" label-width="180px")
              el-input(v-model="form.loose" clearable)
            el-form-item.short(label="聚乙烯内衬" label-width="180px")
              el-input(v-model="form.polyethyleneLiner" clearable)
            el-form-item.short(label="骨溶解" label-width="180px")
              el-input(v-model="form.osteolysis" clearable)
      <!--div.btn-box-->
      <!--div.btn-->
      <!--el-form-item-->
      <!--el-button(type="primary" @click="onSubmit") 保存-->
      <!--el-button 取消-->
</template>

<script>
  export default {
    name: 'jdyyInv2',
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
          orderNumber: '',
          date: '',
          position: '',
          position2: '',
          disease: '',
          disease2: '',
          operationType: '',
          prosthesis: '',
          doctor: '',
          other1: '',
          infected: '',
          other2: '',
          fracture: '',
          substitution: '',
          other3: '',
          other4: '',
          height: '',
          weight: '',
          classification: '',
          date2: '',
          doctor2: '',
          approach: '',
          mode: '',
          pain: '',
          hoof: '',
          stairActivity: '',
          walkingAid: '',
          unwind: '',
          buckling: '',
          overextension: '',
          apPosition: '',
          lateralPosition1: '',
          fixedFlexionContracture: '',
          hyperextension: '',
          forceLine: '',
          muscle: '',
          total1: '',
          total2: '',
          machine: '',
          arthroscope: '',
          osteotomy: '',
          around: '',
          firstInflation: '',
          inside: '',
          rear: '',
          outBoard: '',
          retinaculum: '',
          fatPad: '',
          synovectomy: '',
          ligament: '',
          femur: '',
          tibia: '',
          patella: '',
          renewal: '',
          name2: '',
          genre: '',
          genre2: '',
          spin: '',
          angle: '',
          thighbone: '',
          longHandle: '',
          longHandle2: '',
          longness: '',
          diameter: '',
          guider: '',
          genre3: '',
          genre4: '',
          genre5: '',
          spin2: '',
          angle2: '',
          lateralPosition: '',
          normotopia: '',
          dimension: '',
          thickness: '',
          longness2: '',
          diameter2: '',
          contralateral: '',
          deFlation: '',
          secondInflation: '',
          cement: '',
          thickness2: '',
          location: '',
          vitium: '',
          location2: '',
          location3: '',
          length: '',
          wide: '',
          depth: '',
          vitium2: '',
          location4: '',
          location5: '',
          length2: '',
          wide2: '',
          depth2: '',
          processingScheme: '',
          patellaTrajectory: '',
          completelyStraight: '',
          overextension2: '',
          allBends: '',
          forceLine2: '',
          normal: '',
          reversal: '',
          exist: '',
          angle3: '',
          angle4: '',
          exist1: '',
          angle5: '',
          angle6: '',
          drainage: '',
          postoperationDay: '',
          unwind2: '',
          buckling2: '',
          debonding: '',
          woundHealing: '',
          postoperationDay2: '',
          postoperationDay3: '',
          date3: '',
          postoperationMonth: '',
          pain2: '',
          activity: '',
          stability: '',
          fixedFlexionContracture2: '',
          extensionRelaxation: '',
          forceLine3: '',
          total3: '',
          date4: '',
          postoperationMonth2: '',
          satisfaction: '',
          gait: '',
          problem: '',
          muscleStrength: '',
          fixedFlexionContracture3: '',
          hyperextension2: '',
          lateralSlack: '',
          frontBackSlack: '',
          backSlack: '',
          date5: '',
          postoperationMonth3: '术前',
          walk1: '',
          stairActivity1: '',
          walkingAid1: '',
          total5: '',
          mechanicalAxis: '',
          postoperationWeek: '',
          date6: '',
          dissectionAxis: '',
          angle7: '',
          angle8: '',
          angle9: '',
          angle10: '',
          ankle: '',
          tibiaFraction: '',
          date7: '',
          postoperationMonth4: '',
          thighboneSide: '',
          tibiaFab: '',
          tibiaSide: '',
          thighboneCut: '',
          thighboneSubluxation: '',
          boneGraft: '',
          loose: '',
          polyethyleneLiner: '',
          osteolysis: ''
        },
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
        }]

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
      .con3
        table
          border 1px solid black
          text-align center
          width 100%

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
        .con2-right2
          text-align justify
          padding 15px 20px

    .btn-box
      width 1160px
      .btn
        margin-left 38%
        margin-top 20px
    .mini
      width 30%
      display inline-block
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
      p
        padding-right 12px
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
      margin-top 6px
    .flex
      display flex
    .big-width
      width 96px
      margin-left -6px
    .right-td
      display flex
    .left-box
      width 70%
      text-align center
      margin-top 15px
    .right-box
      width 30%
      border-left 1px solid black
      margin -10px auto
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
