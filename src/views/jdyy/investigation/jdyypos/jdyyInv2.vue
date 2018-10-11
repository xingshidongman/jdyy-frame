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
                      el-option(label="左")
                      el-option(label="右")
                  el-form-item.short(label="方式")
                    el-select(v-model="form.mode" placeholder="请选择")
                      el-option(label="单侧置换")
                      el-option(label="一期双侧置换（两膝假体型号不一致）")
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
                    el-radio-group(v-model="form.infected2")
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
                    el-select.long(v-model="form.classification" placeholder="请选择")
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
                  div.leftAlign
                    p 术前活动度
                  el-form-item.mini.toleft(label="伸直")
                    el-input.long(v-model="form.unwind" clearable)
                  el-form-item.mini(label="屈曲挛缩/过伸" label-width="120px")
                    el-input.long(v-model="form.overextension" clearable)
                  el-form-item.mini(label="屈曲" )
                    el-input.long(v-model="form.buckling" clearable)
                div
                  div.leftAlign
                    p 稳定性
                  el-form-item.mini.toleft(label="前后位")
                    el-select.long(v-model="form.apPosition" placeholder="请选择")
                      el-option(label="<5mm" value="10")
                      el-option(label="5-10mm" value="5")
                      el-option(label=">10mm" value="0")
                  el-form-item.mini(label="侧位" label-width="120px")
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
                  div.leftAlign
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
                    div.leftAlign
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
                  el-form-item.mini(label="第一次充气")
                    el-input(v-model="form.firstInflation" clearable)
                      template(slot="append") 分
                  el-form-item.mini(label="放气" )
                    el-input(v-model="form.deFlation" clearable)
                      template(slot="append") 分
                  el-form-item.mini(label="第二次充气")
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
                  div.leftAlign
                    p 组件
                  el-form-item.mini.toleft(label="型号")
                    el-input.long(v-model="form.genre2" clearable)
                  el-form-item.mini(label="水泥型")
                    el-select.long(v-model="form.genre3" placeholder="请选择")
                      el-option(label="是" value="是")
                      el-option(label="否" value="否")
                div.con2-right
                  el-form-item.mini(label="旋转")
                    el-select(v-model="form.spin" placeholder="请选择")
                      el-option(label="内旋" value="内旋")
                      el-option(label="外旋" value="外旋")
                      el-option(label="中立" value="中立")
                  el-form-item.mini
                    el-input(v-model="form.angle" clearable)
                      template(slot="append") °
                div.con2-right
                  el-form-item.short.toleft(label="股骨前方截骨" label-width="130px")
                    el-select(v-model="form.thighBone" placeholder="请选择")
                      el-option(label="正确" value="正确")
                      el-option(label="截骨不足" value="截骨不足")
                      el-option(label="过度截骨" value="过度截骨")
                div.con2-right
                  el-form-item.mini(label="长柄" )
                    el-select(v-model="form.longHandle" placeholder="请选择")
                      el-option(label="是" value="是")
                      el-option(label="否" value="否")
                  el-form-item.mini(label="长度")
                    el-input(v-model="form.longness" clearable)
                      template(slot="append") mm
                  el-form-item.mini(label="直径")
                    el-input(v-model="form.diameter" clearable)
                      template(slot="append") mm
                div.con2-right
                  el-form-item.mini(label="髓内导向器" )
                    el-select(v-model="form.guider" placeholder="请选择")
                      el-option(label="被骨头堵住" value="被骨头堵住")
                      el-option(label="被骨水泥堵住" value="被骨水泥堵住")
                      el-option(label="没被堵" value="没被堵")
            tr
              td.short-td
                div.con2-left 胫骨部分
              td.long-td
                div
                  div.leftAlign
                    p 金属底托
                  el-form-item.mini.toleft(label="型号")
                    el-input.long(v-model="form.genre4" clearable)
                  el-form-item.mini(label="水泥型")
                    el-select.long(v-model="form.genre5" placeholder="请选择")
                      el-option(label="是" value="是")
                      el-option(label="否" value="否")
                div.con2-right
                  el-form-item.mini(label="旋转")
                    el-select(v-model="form.spin2" placeholder="请选择")
                      el-option(label="内旋" value="内旋")
                      el-option(label="外旋" value="外旋")
                      el-option(label="中立" value="中立")
                  el-form-item.mini
                    el-input(v-model="form.angle2" clearable)
                      template(slot="append") °
                div.con2-right
                  el-form-item.mini(label="侧位")
                    el-select(v-model="form.lateralPosition1" placeholder="请选择")
                      el-option(label="准确" value="准确")
                      el-option(label="内侧移位" value="内侧移位")
                      el-option(label="外侧移位" value="中立")
                div.con2-right
                  el-form-item.mini(label="正位")
                    el-select(v-model="form.normotopia" placeholder="请选择")
                      el-option(label="准确" value="准确")
                      el-option(label="内侧移位" value="内侧移位")
                      el-option(label="外侧移位" value="中立")
                div
                  div.leftAlign
                    p 植入
                  el-form-item.mini.toleft(label="尺寸")
                    el-input(v-model="form.dimension" clearable)
                  el-form-item.mini(label="厚度")
                    el-input(v-model="form.thickness" clearable)
                      template(slot="append") mm
                div.con2-right
                  el-form-item.mini(label="长柄" )
                    el-select(v-model="form.longHandle2" placeholder="请选择")
                      el-option(label="是" value="是")
                      el-option(label="否" value="否")
                  el-form-item.mini(label="长度")
                    el-input(v-model="form.longness2" clearable)
                      template(slot="append") mm
                  el-form-item.mini(label="直径")
                    el-input(v-model="form.diameter2" clearable)
                      template(slot="append") mm
            tr
              td.short-td
                div.con2-left 髌骨假体
              td.long-td
                div
                  div.leftAlign
                    p 尺寸
                  el-form-item.mini.toleft(label="水泥")
                    el-select(v-model="form.cement" placeholder="请选择")
                      el-option(label="是" value="是")
                      el-option(label="否" value="否")
                  el-form-item.mini(label="总厚度")
                    el-input(v-model="form.thickness2" clearable)
                      template(slot="append") mm
                div.con2-right
                  el-form-item.mini(label="位置" )
                    el-select(v-model="form.location" placeholder="请选择")
                      el-option(label="是" value="是")
                      el-option(label="否" value="否")

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
          arthritis: '',
          other1: '',
          loosening: '',
          abrasion: '',
          infected: '',
          other2: '',
          fracture: '',
          infected2: '',
          substitution: '',
          other3: '',
          other4: '',
          height: '',
          other5: '',
          weight: '',
          work: '',
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
          deflation: '',
          secondflation: '',
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
          thighBone: '',
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
          location: ''
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
    .leftAlign
      display inline-block
      text-align right
      width 90px
      margin-bottom 20px
      font-family "Helvetica Neue", "Helvetica", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", "Arial", "sans-serif"
      color #606266
      font-size 14px
      p
        padding-right 12px
    span
      font-family "Helvetica Neue", "Helvetica", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif
      color #606266
      font-size 14px

  /*margin-bottom 0*/
</style>
