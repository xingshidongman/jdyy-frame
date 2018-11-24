<template lang="pug">
  kalix-dialog.user-add(title='编辑全髋术后调查' bizKey="jdyyHip" ref="kalixBizDialog" v-bind:formModel.sync="formModel" v-bind:targetURL="targetURL" v-bind:labelWidth="labelWidth" v-bind:labelPosition="labelPosition" )
    div.back(slot="dialogFormSlot")
      div.art1
        h1.title 全髋关节置换术
        div.con1
          div.con1-left
            el-form-item.toleft(label="姓名" @change="getData()")
              el-input(v-model="formModel.name" readonly)
              <!--el-select(v-model="formModel.pid" @change="getData($event)" filterable placeholder="请选择")-->
                <!--el-option(v-for="item in options" :key="item.value" :label="item.label" :value="item.value")-->
            el-form-item.toleft(label="性别")
              el-radio-group(v-model="formModel.sex" disabled)
                el-radio(label="男")
                el-radio(label="女")
            el-form-item.toleft(label="年龄")
              el-input(v-model="formModel.age" readonly clearable)
            el-form-item.toleft(label="电话")
              el-input(v-model="formModel.telephonePerson" readonly clearable)
            el-form-item.toleft(label="地址")
              el-input(v-model="formModel.address" readonly clearable)
          div.con1-right
            el-form-item.short.toleft(label="住院号")
              el-input(v-model="formModel.hospitalNumber" readonly clearable)
            el-form-item.short(label="研究序号")
              el-input(v-model="formModel.orderNumber" clearable)
            el-form-item.toleft(label="日期")
              el-col(:span="22")
                el-date-picker(type="date" placeholder="选择日期" v-model="formModel.date" style="width: 100%;" value-format="yyyy/M/d" format="yyyy/M/d")
            el-form-item.toleft(label="部位")
              el-radio-group(v-model="formModel.position")
                el-radio(label="左")
                el-radio(label="右")
            el-form-item.short.toleft(label="诊断")
              el-select(v-model="formModel.disease" placeholder="请选择")
                el-option(label="股骨头缺血性坏死" value="股骨头缺血性坏死")
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
                div.con2-left 部位
              td.long-td
                div.con2-right
                  el-form-item.toleft
                    el-radio-group(v-model="formModel.position")
                      el-radio(label="左")
                      el-radio(label="右")
            tr
              td.short-td
                div.con2-left 主要诊断
              td.long-td
                div.con2-right
                  el-form-item.short(label="关节炎")
                    el-select(v-model="formModel.arthritis" placeholder="请选择")
                      el-option(label="类风关" value="类风关")
                      el-option(label="骨性关节炎" value="骨性关节炎")
                      el-option(label="幼年特发性关节炎" value="幼年特发性关节炎")
                      el-option(label="强脊" value="强脊")
                      el-option(label="创伤性关节炎" value="创伤性关节炎")
                  el-form-item.short(label="骨坏死")
                    el-select(v-model="formModel.osteonecrosis" placeholder="请选择")
                      el-option(label="药物性骨坏死" value="药物性骨坏死")
                      el-option(label="酒精性骨坏死" value="酒精性骨坏死")
                      el-option(label="创伤性骨坏死" value="创伤性骨坏死")
                      el-option(label="自发性骨坏死" value="自发性骨坏死")
                  el-form-item.short(label="常见病因")
                    el-select(v-model="formModel.pathogeny" placeholder="请选择")
                      el-option(label="陈旧性结核" value="陈旧性结核")
                      el-option(label="急性骨折" value="急性骨折")
                      el-option(label="发育不良" value="发育不良")
                  el-form-item.other(label="其他")
                    el-input(v-model="formModel.other1" clearable)
            tr
              td.short-td
                div.con2-left 翻修指征
              td.long-td
                div.con2-right
                  el-form-item.short(label="松动")
                    el-select(v-model="formModel.loosening" placeholder="请选择")
                      el-option(label="无" value="无")
                      el-option(label="无菌性松动" value="无菌性松动")
                      el-option(label="低毒性感染" value="低毒性感染")
                  el-form-item.short(label="聚乙烯磨损")
                    el-select(v-model="formModel.abrasion" placeholder="请选择")
                      el-option(label="无" value="无")
                      el-option(label="骨溶解" value="骨溶解")
                      el-option(label="无骨溶解" value="无骨溶解")
                  el-form-item.short(label="深部感染")
                    el-select(v-model="formModel.infected1" placeholder="请选择")
                      el-option(label="无" value="无")
                      el-option(label="一期感染" value="一期感染")
                      el-option(label="二期感染" value="二期感染")
                  el-form-item.other(label="其他")
                    el-input(v-model="formModel.other2" clearable)
            tr
              td.short-td
                div.con2-left 术前髋关节情况/治疗
              td.long-td
                div.con2-right
                  el-form-item.short(label="骨折")
                    el-radio-group(v-model="formModel.fracture")
                      el-radio(label="是")
                      el-radio(label="否")
                  el-form-item.short(label="感染")
                    el-radio-group(v-model="formModel.infected2")
                      el-radio(label="是")
                      el-radio(label="否")
                  el-form-item.short(label="置换")
                    el-radio-group(v-model="formModel.substitution")
                      el-radio(label="是")
                      el-radio(label="否")
                  el-form-item.short(label="其他")
                    el-radio-group(v-model="formModel.other3")
                      el-radio(label="是")
                      el-radio(label="否")
            tr
              td.short-td
                div.con2-left 其他关节
              td.long-td
                div.con2-right
                  el-form-item.short(label="对侧髋关节")
                    el-select(v-model="formModel.contralateral" placeholder="请选择")
                      el-option(label="无病灶" value="无病灶")
                      el-option(label="有病灶但无症状" value="有病灶但无症状")
                      el-option(label="有症状" value="有症状")
                      el-option(label="已经置换" value="已经置换")
                      el-option(label="准备置换" value="准备置换")
                      el-option(label="不想置换" value="不想置换")
                  el-form-item.other(label="其他")
                    el-input(v-model="formModel.other4" clearable)
            tr
              td.short-td
                div.con2-left 其他信息
              td.long-td
                div.con2-right
                  el-form-item.short(label="身高")
                    el-input(v-model="formModel.height" clearable)
                      template(slot="append") cm
                  el-form-item.short(label="其他疾病")
                    el-input(v-model="formModel.other5" clearable)
                  el-form-item.short(label="体重")
                    el-input(v-model="formModel.weight" clearable)
                      template(slot="append") kg
                  el-form-item.short(label="职业")
                    el-input(v-model="formModel.work" clearable)
            tr
              td.short-td
                div.con2-left 病人分类
              td.long-td
                div.con2-right
                  el-form-item(label="分类")
                    el-select.long(v-model="formModel.classification" placeholder="请选择")
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
                      el-date-picker(type="date" placeholder="选择日期" v-model="formModel.date2" style="width: 45%;" value-format="yyyy/M/d" format="yyyy/M/d")
                  el-form-item.short(label="手术医生")
                    el-input(v-model="formModel.doctor2" clearable)
            tr
              td.short-td
                div.con2-left 体位&入路
              td.long-td
                div.con2-right
                  el-form-item.short(label="体位")
                    el-select(v-model="formModel.posture" placeholder="请选择")
                      el-option(label="侧卧" value="侧卧")
                      el-option(label="仰卧" value="仰卧")
                      el-option(label="其他" value="其他")
                  el-form-item.short(label="入路")
                    el-select(v-model="formModel.approach" placeholder="请选择")
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
                    el-select(v-model="formModel.scar" placeholder="请选择")
                      el-option(label="微小" value="微小")
                      el-option(label="正常" value="正常")
                      el-option(label="严重" value="严重")
                  el-form-item.short(label="臼杯")
                    el-select(v-model="formModel.acetabular" placeholder="请选择")
                      el-option(label="完整" value="完整")
                      el-option(label="聚乙烯磨损" value="聚乙烯磨损")
                      el-option(label="松动" value="松动")
                      el-option(label="严重松动" value="严重松动")
                  el-form-item.short(label="股骨头")
                    el-select(v-model="formModel.femoralhead" placeholder="请选择")
                      el-option(label="完整" value="完整")
                      el-option(label="磨损" value="磨损")
                  el-form-item.short(label="股骨柄")
                    el-select(v-model="formModel.femoralstem" placeholder="请选择")
                      el-option(label="完整" value="完整")
                      el-option(label="松动" value="松动")
                      el-option(label="严重松动" value="严重松动")
                  el-form-item.short(label="骨溶解")
                    el-select(v-model="formModel.osteolysis" placeholder="请选择")
                      el-option(label="无" value="无")
                      el-option(label="轻度" value="轻度")
                      el-option(label="重度" value="重度")
            tr
              td.short-td
                div.con2-left 假体植入
              td.long-td
                div.con2-right
                  el-form-item.short(label="臼杯")
                    el-input(v-model="formModel.acetabular2" clearable)
                  el-form-item.short(label="臼杯类型")
                    el-select(v-model="formModel.acetabularType" placeholder="请选择")
                      el-option(label="水泥型" value="水泥型")
                      el-option(label="生物型" value="生物型")
                  el-form-item.short(label="股骨柄")
                    el-input(v-model="formModel.femoralstem2" clearable)
                  el-form-item.short(label="股骨柄类型")
                    el-select(v-model="formModel.femoralstemType" placeholder="请选择")
                      el-option(label="水泥型" value="水泥型")
                      el-option(label="生物型" value="生物型")
            tr
              td.short-td
                div.con2-left 关节界面
              td.long-td
                div.con2-right
                  el-form-item.short(label="球头直径")
                    el-input(v-model="formModel.ballDiameter" clearable)
                      template(slot="append") mm
                  el-form-item.short(label="材料")
                    el-select(v-model="formModel.material" placeholder="请选择")
                      el-option(label="金属对聚乙烯" value="金属对聚乙烯")
                      el-option(label="氧化锆对聚乙烯" value="氧化锆对聚乙烯")
                      el-option(label="金属对金属" value="金属对金属")
                  el-form-item(label="颈长")
                    el-input(v-model="formModel.diameterLength" clearable)
            tr
              td.short-td
                div.con2-left 髋臼
              td.long-td
                div.con2-right
                  el-form-item.short(label="髋臼磨锉")
                    el-input(v-model="formModel.aModel" clearable)
                      template(slot="append") mm
                  el-form-item.short(label="假体")
                    el-input(v-model="formModel.bModel" clearable)
                      template(slot="append") mm
                  el-form-item.short(label="加减")
                    el-input(v-model="formModel.cModel" clearable)
                      template(slot="prepend") 号=
                  el-form-item.short(label="包容")
                    el-input(v-model="formModel.Inclusiveness" clearable)
                  el-form-item.short(label="稳定性")
                    el-select(v-model="formModel.stable1" placeholder="请选择")
                      el-option(label="差" value="差")
                      el-option(label="交界" value="交界")
                      el-option(label="好" value="好")
                      el-option(label="优" value="优")
                  div.mark
                    div.sta 摆放角度
                    div.stb
                      el-form-item.short.toleft(label="外翻")
                        el-input(v-model="formModel.ectropion" clearable)
                          template(slot="append") °
                      el-form-item.short(label="前倾")
                        el-input(v-model="formModel.forward " clearable)
                          template(slot="append") °
                  div.mark
                    div.sta 聚乙烯衬垫植入角度
                    div.stb
                      el-form-item.short.totoleft
                        el-input(v-model="formModel.inAngle" clearable)
                          template(slot="append") °
                      el-form-item.short(label="防脱缘在")
                        el-input(v-model="formModel.inclock " clearable)
                          template(slot="append") 点钟
            tr
              td.short-td
                div.con2-left 股骨
              td.long-td
                div.con2-right
                  el-form-item.short(label="髓腔锉型号")
                    el-input(v-model="formModel.medullaryCavity" clearable)
                  el-form-item.short(label="假体型号")
                    el-input(v-model="formModel.prosthesisType " clearable)
                  el-form-item.short(label="假体长度")
                    el-input(v-model="formModel.prosthesisLength" clearable)
                  el-form-item.short(label="远端骨水泥塞")
                    el-select(v-model="formModel.cement" placeholder="请选择")
                      el-option(label="骨" value="骨")
                      el-option(label="骨水泥" value="骨水泥")
                      el-option(label="伞" value="伞")
                      el-option(label="未应用" value="未应用")
                  el-form-item.short(label="稳定性")
                    el-select(v-model="formModel.stable2" placeholder="请选择")
                      el-option(label="差" value="差")
                      el-option(label="交界" value="交界")
                      el-option(label="好" value="好")
                      el-option(label="优" value="优")
                  el-form-item.short(label="捆绑线")
                    el-select(v-model="formModel.binding" placeholder="请选择")
                      el-option(label="无" value="无")
                      el-option(label="预防性" value="预防性")
                      el-option(label="术中存在骨折" value="术中存在骨折")
                  el-form-item.short(label="假体术中力线")
                    el-input(v-model="formModel.forceLine" clearable)
                      template(slot="append") °前倾
            tr
              td.short-td
                div.con2-left 翻修手术
              td.long-td
                div.con2-right
                  el-form-item.short(label="皮质骨开窗")
                    el-input(v-model="formModel.windowOpen" clearable)
                  el-form-item.short(label="股骨端截骨")
                    el-radio-group(v-model="formModel.Osteotomy")
                      el-radio(label="有")
                      el-radio(label="无")
                  el-form-item.short(label="并发症")
                    el-select(v-model="formModel.Complication" placeholder="请选择")
                      el-option(label="无" value="无")
                      el-option(label="股骨穿透" value="股骨穿透")
                      el-option(label="股骨骨折" value="股骨骨折")
                      el-option(label="血管损伤" value="血管损伤")
                      el-option(label="神经损伤" value="神经损伤")
                      el-option(label="其他" value="其他")
                  el-form-item.short(label="股骨缺陷")
                    el-select(v-model="formModel.defect1" placeholder="请选择")
                      el-option(label="无" value="无")
                      el-option(label="干后端" value="干后端")
                      el-option(label="皮质" value="皮质")
                      el-option(label="联合" value="联合")
                  div.mark
                    div.sta 髋臼缺陷
                    div.stb.toleft
                      el-form-item.short(label="中心型")
                        el-input(v-model="formModel.centerType" clearable)
                      el-form-item.short(label="髋臼周边")
                        el-input(v-model="formModel.periphery " clearable)
                  div.mark
                    div.sta 髋臼植骨
                    div.stb
                      el-form-item.medium(label="结构性植骨")
                        el-radio-group(v-model="formModel.structuralBone1")
                          el-radio(label="有")
                          el-radio(label="无")
                      el-form-item.medium(label="螺钉固定")
                        el-radio-group(v-model="formModel.screw")
                          el-radio(label="有")
                          el-radio(label="无")
                      el-form-item.medium(label="打压植骨")
                        el-radio-group(v-model="formModel.suppress1")
                          el-radio(label="有")
                          el-radio(label="无")
                  div.mark
                    div.sta 股骨端植骨
                    div.stb
                      el-form-item.short(label="结构性植骨")
                        el-radio-group(v-model="formModel.structuralBone2")
                          el-radio(label="有")
                          el-radio(label="无")
                      el-form-item.short(label="打压植骨")
                        el-radio-group(v-model="formModel.suppress2")
                          el-radio(label="有")
                          el-radio(label="无")
            tr
              td.short-td
                div.con2-left 术后稳定性
              td.long-td
                div.con2-right
                  div.mark
                    div.sta 后方稳定性
                    div.stb
                      el-form-item.medium.totoleft
                        el-input(v-model="formModel.frontA" clearable)
                          template(slot="append") °屈曲
                      el-form-item.medium.toleft
                        el-input(v-model="formModel.frontB " clearable)
                          template(slot="append") °内收
                      el-form-item.medium.toleft
                        el-input(v-model="formModel.frontC " clearable)
                          template(slot="append") °内旋
                  div.mark
                    div.sta 前方稳定性
                    div.stb
                      el-form-item.short.totoleft
                        el-input(v-model="formModel.afterA" clearable)
                          template(slot="append") °伸展
                      el-form-item.short.toleft
                        el-input(v-model="formModel.afterB " clearable)
                          template(slot="append") °外旋
                  div.mark
                    div.sta 内收肌肌腱切除
                    div.stb
                      el-form-item.toleft
                        el-radio-group(v-model="formModel.resection")
                          el-radio(label="有")
                          el-radio(label="无")
                      template(v-if="formModel.resection === '无'")
                        el-form-item.mini(label="外展" )
                          el-input(v-model="formModel.resectionAbduction" clearable)
                            template(slot="append") °
                        el-form-item.mini(label="增加角度" )
                          el-input(v-model="formModel.resectionaAngle" clearable)
                            template(slot="append") °
            tr
              td.short-td
                div.con2-left 术后期
              td.long-td
                div.con2-right
                  el-form-item.short(label="术后总引流量")
                    el-input(v-model="formModel.flow" clearable)
                      template(slot="append") ml
                  div.mark
                    div.sta 单拐行走
                    div.stb.toleft
                      el-form-item.toleft
                        el-radio-group(v-model="formModel.singleAbduction")
                          el-radio(label="无法使用")
                          el-radio(label="可以使用")
                      template(v-if="formModel.singleAbduction === '可以使用'")
                        el-form-item.short(label="术后" )
                          el-input(v-model="formModel.singleDay" clearable)
                            template(slot="append") 天
                  div.mark
                    div.sta 出院
                    div.stb.toleft
                      el-form-item.short(label="术后" )
                        el-input(v-model="formModel.leaveHospital" clearable)
                          template(slot="append") 天

                  div.sta 出院时关节活动角度
                  div.stb.toleft
                    el-form-item.short(label="屈曲")
                      el-input(v-model="formModel.angleA" clearable)
                        template(slot="append") °
                    el-form-item.short(label="外展")
                      el-input(v-model="formModel.angleB " clearable)
                        template(slot="append") °
                    el-form-item.short(label="内旋")
                      el-input(v-model="formModel.angleC " clearable)
                        template(slot="append") °
                    el-form-item.short(label="过伸")
                      el-input(v-model="formModel.angleD " clearable)
                        template(slot="append") °
                    el-form-item.short(label="内收")
                      el-input(v-model="formModel.angleE " clearable)
                        template(slot="append") °
                    el-form-item.short(label="外旋")
                      el-input(v-model="formModel.angleF " clearable)
                        template(slot="append") °
      div.art3
        h1.title 术后影像学检查
        div.con3
          table
            tr
              td.a-td
                div.con3-left 术后骨盆正位
              td.b-td(colspan=2)
                div.con3-mid
                  el-form-item.short(label="日期" style="float:left")
                    el-col(:span="20")
                      el-date-picker(type="date" placeholder="选择日期" v-model="formModel.date3" style="width: 100%;" value-format="yyyy/M/d" format="yyyy/M/d")
                  el-form-item.short(label="术后第")
                    el-input(v-model="formModel.weekDay" clearable)
                      template(slot="append") 周
            tr
              td.a-td
                div.con3-left 臼杯位置
              td.b-td
                div.con3-mid 高&外侧（1）/高（2）/外侧（3）/无上述表现（4）
              td.c-td
                div.con3-right
                  el-form-item.totoleft
                    el-input(v-model="formModel.cupPosition" clearable)
            tr
              td.a-td
                div.con3-left 内壁
              td.b-td
                div.con3-mid 臼杯/骨水泥 （从髂耻线计算），+= 外侧，-= 内侧
              td.c-td
                div.con3-right
                  el-form-item.totoleft
                    el-input(v-model="formModel.wall" clearable)
            tr
              td.a-td
                div.con3-left 臼杯外翻
              td.b-td
                div.con3-mid 0°= 向下，90°= 面向外侧
              td.c-td
                div.con3-right
                  el-form-item.totoleft
                    el-input(v-model="formModel.ectropion2" clearable)
            tr
              td.a-td
                div.con3-left 假体柄力线
              td.b-td
                div.con3-mid 内翻（1）/外翻（20）/中立位（3）
              td.c-td
                div.con3-right
                  el-form-item.totoleft
                    el-input(v-model="formModel.forceLine2" clearable)
            tr
              td.a-td
                div.con3-left 水泥接合
              td.b-td
                div.con3-mid 不充分不均匀（1）/未达完美（2）/完美（3）
              td.c-td
                div.con3-right
                  el-form-item.totoleft
                    el-input(v-model="formModel.joint" clearable)
      div.art3
        h1.title 术后并发症
        div.con3
          table
            tr
              td.a-td
                div.con3-left 骨科部分
              td.b-td
                div.con3-mid 骨折（1）/脱位（2）/组件早期发生移位（3）/深部感染（4）/切口微小问题（5）/无（6）
              td.c-td
                div.con3-right
                  el-form-item.totoleft
                    el-input(v-model="formModel.orthopedics" clearable)
            tr
              td.a-td
                div.con3-left 综合部分
              td.b-td
                div.con3-mid 血栓（1）/褥疮（2）/胸腔感染（3）/泌尿系感染（4）/无（5）
              td.c-td
                div.con3-right
                  el-form-item.totoleft
                    el-input(v-model="formModel.comprehensive" clearable)
      div.art2
        h1.title 临床评价——Harris评分
        div.con2
          table
            tr
              td.short-td
                div.con2-left 疼痛（4）
              td.long-td
                div.con2-right
                  p 无或者可被忽略（44）
                  p 轻微 — 偶尔疼痛或轻微疼痛，仍可活动（40）
                  p 轻度 — 活动无受限，大量活动后偶有中等疼痛，可服止痛药（30）
                  p 中度 — 疼痛可以忍受，可以日常活动，但其他活动受限，需偶尔服用强效止痛药（20）
                  p 中度 — 偶尔重度疼痛，可以步行；活动严重受限，需偶尔服用强效止痛药（20）
                  p 更重 — 偶尔重度疼痛，可以走动；活动严重受限，需经常服用强效止痛药（10）
                  p 失去活动能力 —卧床仍感剧烈疼痛；因疼痛无法活动；卧床（0）
            tr
              td.short-td
                div.con2-left 上下楼梯（4）
              td.long-td
                div.con2-right
                  p 一步一阶，不需扶手（4）
                  p 一步一阶，需扶手（2）
                  p 以任何一种方式上楼梯（1）
                  p 无法上下楼（0）
            tr
              td.short-td
                div.con2-left 坐（5）
              td.long-td
                div.con2-right
                  p 可以在任意椅子上舒适的坐一小时（5）
                  p 可以在高椅子上坐半小时（3）
                  p 无法舒适的坐任何椅子（0）
            tr
              td.short-td
                div.con2-left 穿鞋袜（4）
              td.long-td
                div.con2-right
                  p 轻松（4）
                  p 困难（2）
                  p 不能完成（0）
            tr
              td.short-td
                div.con2-left 上公交车（1）
              td.long-td
                div.con2-right
                  p 可以自行步上公交车（1）
                  p 不能（0）
            tr
              td.short-td
                div.con2-left 跛行（11）
              td.long-td
                div.con2-right
                  p 无跛行（11）
                  p 轻度跛行（8）
                  p 中度跛行（5）
                  p 重度跛行（0）
            tr
              td.short-td
                div.con2-left 行走辅助（11）
              td.long-td
                div.con2-right
                  p 无（11）
                  p 长距离行走时单手拐杖辅助（7）
                  p 大多数时间使用单手杖（5）
                  p 单拐（3）
                  p 2个单手杖（2）
                  p 双拐或根本不能行走（0）
            tr
              td.short-td
                div.con2-left 行走距离（11）
              td.long-td
                div.con2-right
                  p 行走无受限（11）
                  p 6条街（8）
                  p 2-3条街（5）
                  p 室内（3）
                  p 卧床（0）
            tr
              td.short-td
                div.con2-left 无畸形（4）
              td.long-td
                div.con2-right
                  p <30°过伸（1）
                  p <10°内收固定位（1）
                  p <10°内外旋固定位（1）
                  p 双下肢不等长小于3.2厘米（1）
            tr
              td.short-td
                div.con2-left 关节活动度（5）
              td.long-td
                div.con2-right
                  p 活动度总和 = 无过伸，屈曲>110°，外展>20°，内收>15°，外旋>15°（5）
                  p 每10°过伸（-0.5）/屈曲<90°（-0.5）/无外展<（-0.7）/无外旋（-0.3）
      div.art2
        h1.title
        div.con2
          table
            tr
              td.short-td
                div.con2-left 大腿痛
              td.long-td
                div.con2-right
                  p 无（0）/轻度（+）/中度（++）/严重且影响功能（+++）
            tr
              td.short-td
                div.con2-left Trendelenburg 征
              td.long-td
                div.con2-right
                  p 无（0）/delayed Trendelenburg（+）/阳性（++）/严重且影响功能（+++）
            tr
              td.short-td
                div.con2-left 关节活动度
              td.long-td
                div.con2-right
                  p 手术侧（对侧）
            tr
              td.short-td
                div.con2-left 双下肢不等长
              td.long-td
                div.con2-right
                  p 如手术侧下肢较长，为正数
      div.art2
        h1.title
        div.con2
          el-table(:data="tableData1" style="width: 1450px;margin:0 auto")
            el-table-column(fixed prop="harADate" label="日期" width="100")
            el-table-column(prop="harA1" label="术后第（）月" width="120")
            el-table-column(prop="harA2" label="疼痛" width="60")
            el-table-column(prop="harA3" label="上下楼梯" width="120")
            el-table-column(prop="harA4" label="坐" width="60")
            el-table-column(prop="harA5" label="穿鞋袜" width="120")
            el-table-column(prop="harA6" label="上公交车" width="120")
            el-table-column(prop="harA7" label="跛行" width="60")
            el-table-column(prop="harA8" label="行走辅助" width="120")
            el-table-column(prop="harA9" label="行走距离" width="120")
            el-table-column(prop="harA10" label="无畸形" width="120")
            el-table-column(prop="harA11" label="关节活动度" width="120")
            el-table-column(prop="harA12" label="总分（100）" width="120")
            el-table-column(prop="harBDate" label="大腿痛" width="100")
            el-table-column(prop="harB1" label="Trendelenburg 征" width="150")
            el-table-column(prop="harB2" label="活动度-伸直" width="120")
            el-table-column(prop="harB3" label="活动度-屈曲" width="120")
            el-table-column(prop="harB4" label="活动度-外展" width="120")
            el-table-column(prop="harB5" label="活动度-内收" width="120")
            el-table-column(prop="harB6" label="活动度-内旋" width="120")
            el-table-column(prop="harB7" label="活动度-外旋" width="120")
            el-table-column(prop="harB8" label="双下肢不等长" width="120")
            el-table-column(fixed="right" label="操作" width="50")
              template(slot-scope="scope")
                el-button(type="text" size="small" @click="editTable1(scope.row)") 编辑
                el-button.chan(type="text" size="small" @click="deleteTable1(scope.row)") 删除
        div(style="width:100%;height: 63px;")
          el-button.anniu( @click="addTable1"  type="primary") 添加
        template(v-if="show1")
          div.con2(style="border: 1px solid #000;padding-top: 30px;")
            el-form-item.mini(label="日期")
              el-date-picker(type="date" placeholder="选择日期" v-model="formModel1.harADate" style="width: 100%;" value-format="yyyy/M/d" format="yyyy/M/d" clearable)
            el-form-item.mini(label="术后第（）月")
              el-input(v-model="formModel1.harA1" type="number" :min="0" clearable)
            el-form-item.mini(label="疼痛")
              el-input(v-model="formModel1.harA2" type="number" :min="0" :max="100" clearable)
            el-form-item.mini(label="上下楼梯")
              el-input(v-model="formModel1.harA3" type="number" :min="0" :max="100" clearable)
            el-form-item.mini(label="坐")
              el-input(v-model="formModel1.harA4" type="number" :min="0" :max="100" clearable)
            el-form-item.mini(label="穿鞋袜")
              el-input(v-model="formModel1.harA5" type="number" :min="0" :max="100" clearable)
            el-form-item.mini(label="上公交车")
              el-input(v-model="formModel1.harA6" type="number" :min="0" :max="100" clearable)
            el-form-item.mini(label="跛行")
              el-input(v-model="formModel1.harA7" type="number" :min="0" :max="100" clearable)
            el-form-item.mini(label="行走辅助")
              el-input(v-model="formModel1.harA8" type="number" :min="0" :max="100" clearable)
            el-form-item.mini(label="行走距离")
              el-input(v-model="formModel1.harA9" type="number" :min="0" :max="100" clearable)
            el-form-item.mini(label="无畸形")
              el-input(v-model="formModel1.harA10" type="number" :min="0" :max="100" clearable)
            el-form-item.mini(label="关节活动度")
              el-input(v-model="formModel1.harA11" type="number" :min="0" :max="100" clearable)
            div.mark
              div.sta 总分：{{total1}}
            el-form-item.mini(label="大腿痛")
              el-input(v-model="formModel1.harBDate" clearable)
            el-form-item.mini(label="Trendelenburg 征" label-width="150px")
              el-input(v-model="formModel1.harB1" clearable)
            el-form-item.mini(label="活动度-伸直")
              el-input(v-model="formModel1.harB2" clearable)
            el-form-item.mini(label="活动度-屈曲")
              el-input(v-model="formModel1.harB3" clearable)
            el-form-item.mini(label="活动度-外展")
              el-input(v-model="formModel1.harB4" clearable)
            el-form-item.mini(label="活动度-内收")
              el-input(v-model="formModel1.harB5" clearable)
            el-form-item.mini(label="活动度-内旋")
              el-input(v-model="formModel1.harB6" clearable)
            el-form-item.mini(label="活动度-外旋")
              el-input(v-model="formModel1.harB7" clearable)
            el-form-item.mini(label="双下肢不等长")
              el-input(v-model="formModel1.harB8" clearable)
            el-form-item(style="width:55%;")
              el-button.anniu( @click="submitTable1"  type="primary") 保存
              el-button.anniu( @click="closeTable1"  type="primary") 关闭
      div.art2
        h1.title 患者满意度
        div.con2
          table
            tr
              td.short-td
                div.con2-left 与术前相比
              td.long-td
                div.con2-right
                  p 更差（1）/相同（2）/更好（3）/好很多（4）/接近完美（5）
          el-table(:data="tableData2" style="width: 90%;margin:0 auto")
            el-table-column(fixed prop="harCDate" label="日期" )
            el-table-column(prop="harC1" label="与术前相比" )
            el-table-column(prop="harC2" label="术后第（）月" )
            el-table-column(prop="harC3" label="疼痛")
            el-table-column(prop="harC4" label="功能" )
            el-table-column(prop="harC5" label="总评" )
            el-table-column(fixed="right" label="操作" width="60")
              template(slot-scope="scope")
                el-button(type="text" size="small" @click="editTable2(scope.row)") 编辑
                el-button.chan(type="text" size="small" @click="deleteTable2(scope.row)") 删除
          div(style="width:100%;height: 63px;")
            el-button.anniu(@click="addTable2"  type="primary") 添加
        template(v-if="show2")
          div.con2(style="border: 1px solid #000;padding-top: 30px;")
            el-form-item.mini(label="日期")
              el-date-picker(type="date" placeholder="选择日期" v-model="formModel2.harCDate" style="width: 100%;" value-format="yyyy/M/d" format="yyyy/M/d" clearable)
            el-form-item.mini(label="与术前相比")
              el-input(v-model="formModel2.harC1" clearable)
            el-form-item.mini(label="术后第（）月")
              el-input(v-model="formModel2.harC2" clearable)
            el-form-item.mini(label="疼痛")
              el-input(v-model="formModel2.harC3" clearable)
            el-form-item.mini(label="功能")
              el-input(v-model="formModel2.harC4" clearable)
            el-form-item.mini(label="总评")
              el-input(v-model="formModel2.harC5" clearable)
            el-form-item(style="width:55%;")
              el-button.anniu(@click="submitTable2"  type="primary") 保存
              el-button.anniu(@click="closeTable2"  type="primary") 关闭
      div.art2
        h1.title 影像学评估
        div.con2
          table
            tr
              td.short-td
                div.con2-left 移位
              td.long-td
                div.con2-right
                  p 臼杯与股骨柄假体同时移位（1）/髋臼角度改变（2）/臼杯穿透（3）/股骨柄假体出现内外翻 - 力线改变（4）/假体柄下沉（5）/无（6）
            tr
              td.short-td
                div.con2-left 聚乙烯磨损
              td.long-td
                div.con2-right
                  p 最大偏心距（ mm）
            tr
              td.short-td
                div.con2-left 骨水泥透亮髋臼1区
              td.long-td
                div.con2-right
                  p 骨水泥 - 骨或骨水泥 - 假体 - <2mm，部分，无 -进展性 *
            tr
              td.short-td
                div.con2-left 骨水泥透亮髋臼2区
              td.long-td
                div.con2-right
                  p 骨水泥 - 骨或骨水泥 - 假体 - <2mm，部分，无 -进展性 *
            tr
              td.short-td
                div.con2-left 骨溶解
              td.long-td
                div.con2-right
                  p 包括骨内的空腔，不包括骨股距的吸收 *
            tr
              td.short-td
                div.con2-left 增生
              td.long-td
                div.con2-right
                  p 厚度和密度增加 *
            tr
              td.short-td
                div.con2-left 萎缩
              td.long-td
                div.con2-right
                  p 厚度和密度降低 *
            tr
              td.short-td
                div.con2-left 移位骨化
              td.long-td
                div.con2-right
                  p “僵硬度”（1）/严重，间隙<1cm（2）/中度（3）/轻微（4）/无（5）
            tr
              td.short-td
                div.con2-left 金属问题
              td.long-td
                div.con2-right
                  p 金属变形或折断（1）/假体组件分离（2）/无（3）
            tr
              td.short-td
                div.con2-left 骨水泥金属界面透亮区
              td.long-td
                div.con2-right
                  p 针对骨水泥假体，如果是生物性假体请标记 NA *
            tr
              td.short-td
                div.con2-left 骨水泥骨折
              td.long-td
                div.con2-right
                  p 针对骨水泥假体，如果是生物性假体请标记 NA *
            tr
              td.short-td
                div.con2-left 涂层脱落
              td.long-td
                div.con2-right
                  p 针对骨水泥假体，如果是生物性假体请标记 NA *
      div.art2
        h1.title
        div.con2
          el-table(:data="tableData3" style="width: 100%")
            el-table-column(fixed prop="harDDate" label="日期" )
            el-table-column(prop="harD1" label="术后第（）月" )
            el-table-column(prop="harD2" label="移位" )
            el-table-column(prop="harD3" label="聚乙烯磨损" )
            el-table-column(prop="harD4" label="骨水泥透亮区 -1 *" )
            el-table-column(prop="harD5" label="骨水泥透亮区 -2 *" )
            el-table-column(prop="harD6" label="骨溶解 *" )
            el-table-column(prop="harD7" label="增生*" )
            el-table-column(prop="harD8" label="萎缩 *" )
            el-table-column(prop="harD9" label="异位骨化" )
            el-table-column(prop="harD10" label="金属问题" )
            el-table-column(prop="harD11" label="骨水泥金属界面透亮区 *" )
            el-table-column(prop="harD12" label="骨水泥骨折（） *" )
            el-table-column(prop="harD13" label="涂层脱落*" )
            el-table-column(fixed="right" label="操作" width="60" )
              template(slot-scope="scope")
                el-button(type="text" size="small" @click="editTable3(scope.row)") 编辑
                el-button.chan(type="text" size="small" @click="deleteTable3(scope.row)") 删除
          div(style="width:100%;height: 63px;")
            el-button.anniu( @click="addTable3"  type="primary") 添加
        template(v-if="show3")
          div.con2(style="border: 1px solid #000;padding-top: 30px;")
            el-form-item.mini(label="日期")
              el-date-picker(type="date" placeholder="选择日期" v-model="formModel3.harDDate" style="width: 100%;" value-format="yyyy/M/d" format="yyyy/M/d" clearable)
            el-form-item.mini(label="术后第（）月" label-width="150px")
              el-input(v-model="formModel3.harD1" clearable )
            el-form-item.mini(label="移位")
              el-input(v-model="formModel3.harD2" clearable)
            el-form-item.mini(label="聚乙烯磨损")
              el-input(v-model="formModel3.harD3" clearable)
            el-form-item.mini(label="骨水泥透亮区 -1 *" label-width="150px")
              el-input(v-model="formModel3.harD4" clearable)
            el-form-item.mini(label="骨水泥透亮区 -2 *" label-width="150px")
              el-input(v-model="formModel3.harD5" clearable)
            el-form-item.mini(label="骨溶解 *")
              el-input(v-model="formModel3.harD6" clearable)
            el-form-item.mini(label="增生*")
              el-input(v-model="formModel3.harD7" clearable)
            el-form-item.mini(label="萎缩 *")
              el-input(v-model="formModel3.harD8" clearable)
            el-form-item.mini(label="异位骨化")
              el-input(v-model="formModel3.harD9" clearable)
            el-form-item.mini(label="金属问题")
              el-input(v-model="formModel3.harD10" clearable)
            el-form-item.mini(label="骨水泥金属界面透亮区 *" label-width="190px")
              el-input(v-model="formModel3.harD11" clearable)
            el-form-item.mini(label="骨水泥骨折（） *" label-width="150px")
              el-input(v-model="formModel3.harD12" clearable)
            el-form-item.mini(label="涂层脱落*")
              el-input(v-model="formModel3.harD13" clearable)
            el-form-item(style="width:55%;")
              el-button.anniu( @click="submitTable3"  type="primary") 保存
              el-button.anniu( @click="closeTable3"  type="primary") 关闭

</template>

<script>
  import FormModel from './model'
  import FormModel1 from './model1'
  import FormModel2 from './model2'
  import FormModel3 from './model3'
  import {JdyyhipURL, JdyyhipHarrisScoreURL, JdyyhipImgEvaluationURL, JdyyhipSatisfactionURL} from '../../config.toml'
  import Message from '../../../../components/corelib/common/message'
  export default {
    name: 'jdyyHipEdit',
    data() {
      return {
        targetURL: JdyyhipURL,
        labelWidth: '150px',
        width: '80%',
        labelPosition: 'right',
        formModel: Object.assign({}, FormModel),
        formModel1: Object.assign({}, FormModel1),
        formModel2: Object.assign({}, FormModel2),
        formModel3: Object.assign({}, FormModel3),
        tableData1: [],
        tableData2: [],
        tableData3: [],
        show1: false,
        show2: false,
        show3: false
      }
    },
    computed: {
      total1: function () { // 计算总分
        this.formModel1.harA12 = (this.formModel1.harA2 == null ? 0 : parseInt(this.formModel1.harA2)) +
          (this.formModel1.harA3 == null ? 0 : parseInt(this.formModel1.harA3)) +
          (this.formModel1.harA4 == null ? 0 : parseInt(this.formModel1.harA4)) +
          (this.formModel1.harA5 == null ? 0 : parseInt(this.formModel1.harA5)) +
          (this.formModel1.harA6 == null ? 0 : parseInt(this.formModel1.harA6)) +
          (this.formModel1.harA7 == null ? 0 : parseInt(this.formModel1.harA7)) +
          (this.formModel1.harA8 == null ? 0 : parseInt(this.formModel1.harA8)) +
          (this.formModel1.harA9 == null ? 0 : parseInt(this.formModel1.harA9)) +
          (this.formModel1.harA10 == null ? 0 : parseInt(this.formModel1.harA10)) +
          (this.formModel1.harA11 == null ? 0 : parseInt(this.formModel1.harA11))
        return this.formModel1.harA12
      }
    },
    methods: {
      init(dialogOption) {
        console.log('---------dialogOption------------', dialogOption)
        console.log('this.formModel.id=================================', this.formModel.id)
        this.getTableData1(this.formModel.id)
        this.getTableData2(this.formModel.id)
        this.getTableData3(this.formModel.id)
      },
      getTableData1(hid) { // 获取临床评价——Harris评分信息
        console.log('getTableData1=========================', hid)
        let jsonStr = {'hid': hid}
        this.axios.request({
          method: 'GET',
          url: JdyyhipHarrisScoreURL,
          params: {
            jsonStr: jsonStr
          }
        }).then(res => {
          console.log('res.data==========================', res.data.data[0].id)
          this.tableData1 = res.data.data
        })
      },
      getTableData2(hid) { // 获取患者满意度信息
        console.log('getTableData3=========================', hid)
        let jsonStr = {'hid': hid}
        this.axios.request({
          method: 'GET',
          url: JdyyhipSatisfactionURL,
          params: {
            jsonStr: jsonStr
          }
        }).then(res => {
          console.log('res.data==========================', res.data.data)
          this.tableData2 = res.data.data
        })
      },
      getTableData3(hid) { // 获取影像学评估信息
        console.log('getTableData4=========================', hid)
        let jsonStr = {'hid': hid}
        this.axios.request({
          method: 'GET',
          url: JdyyhipImgEvaluationURL,
          params: {
            jsonStr: jsonStr
          }
        }).then(res => {
          console.log('res.data==========================', res.data.data)
          this.tableData3 = res.data.data
        })
      },
      setGroup(val) {
        this.formModel.downlosd = val
      },
      addTable1() { // 添加临床评价——Harris评分信息
        console.log('addTable1==========click')
        this.formModel1 = Object.assign({}, FormModel1)
        this.formModel1.hid = this.formModel.id
        this.show1 = true
      },
      addTable2() { // 添加患者满意度信息
        console.log('addTable2==========click')
        this.formModel2 = Object.assign({}, FormModel2)
        this.formModel2.hid = this.formModel.id
        this.show2 = true
      },
      addTable3() { // 添加影像学评估信息
        console.log('addTable3==========click')
        this.formModel3 = Object.assign({}, FormModel3)
        this.formModel3.hid = this.formModel.id
        this.show3 = true
      },
      editTable1(row) { // 编辑临床评价——Harris评分信息
        this.show1 = true
        console.log('editTable1=================', row)
        this.formModel1 = row
      },
      editTable2(row) { // 编辑患者满意度信息
        this.show2 = true
        console.log('editTable2=================', row)
        this.formModel2 = row
      },
      editTable3(row) { // 编辑影像学评估信息
        this.show3 = true
        console.log('editTable3=================', row)
        this.formModel3 = row
      },
      deleteTable1(row) { // 删除临床评价——Harris评分信息
        console.log('deleteTable1==================', row.id)
        this.$confirm('确定要删除吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          console.log('DELETE==================', row.id)
          this.axios.request({
            method: 'DELETE',
            url: JdyyhipHarrisScoreURL + '/' + row.id,
            params: {
              id: row.id
            }
          }).then(res => {
            Message.success(res.data.msg)
            this.getTableData1(this.formModel.id)
          })
        })
      },
      deleteTable2(row) { // 删除患者满意度信息
        console.log('deleteTable2==================', row.id)
        this.$confirm('确定要删除吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          console.log('DELETE==================', row.id)
          this.axios.request({
            method: 'DELETE',
            url: JdyyhipSatisfactionURL + '/' + row.id,
            params: {
              id: row.id
            }
          }).then(res => {
            Message.success(res.data.msg)
            this.getTableData2(this.formModel.id)
          })
        })
      },
      deleteTable3(row) { // 删除影像学评估信息
        console.log('deleteTable3==================', row.id)
        this.$confirm('确定要删除吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          console.log('DELETE==================', row.id)
          this.axios.request({
            method: 'DELETE',
            url: JdyyhipImgEvaluationURL + '/' + row.id,
            params: {
              id: row.id
            }
          }).then(res => {
            Message.success(res.data.msg)
            this.getTableData3(this.formModel.id)
          })
        })
      },
      submitTable1() { // 临床评价——Harris评分信息保存按钮
        console.log('submitTable1==================', this.formModel1)
        this.axios.request({
          method: this.formModel1.id == null ? 'POST' : 'PUT',
          url: this.formModel1.id == null ? JdyyhipHarrisScoreURL : JdyyhipHarrisScoreURL + '/' + this.formModel1.id,
          data: this.formModel1
        }).then(res => {
          console.log('submitTable1-res.data===================', res.data)
          Message.success(res.data.msg)
          this.show1 = false
          this.getTableData1(this.formModel.id)
        })
      },
      submitTable2() { // 患者满意度信息保存按钮
        console.log('submitTable2==================', this.formModel2)
        this.axios.request({
          method: this.formModel2.id == null ? 'POST' : 'PUT',
          url: this.formModel2.id == null ? JdyyhipSatisfactionURL : JdyyhipSatisfactionURL + '/' + this.formModel2.id,
          data: this.formModel2
        }).then(res => {
          console.log('submitTable2-res.data===================', res.data)
          Message.success(res.data.msg)
          this.show2 = false
          this.getTableData2(this.formModel.id)
        })
      },
      submitTable3() { // 影像学评估信息保存按钮
        console.log('submitTable3==================', this.formModel3)
        this.axios.request({
          method: this.formModel3.id == null ? 'POST' : 'PUT',
          url: this.formModel3.id == null ? JdyyhipImgEvaluationURL : JdyyhipImgEvaluationURL + '/' + this.formModel3.id,
          data: this.formModel3
        }).then(res => {
          console.log('submitTable3-res.data===================', res.data)
          Message.success(res.data.msg)
          this.show3 = false
          this.getTableData3(this.formModel.id)
        })
      },
      closeTable1() { // 关闭
        this.show1 = false
      },
      closeTable2() { // 关闭
        this.show2 = false
      },
      closeTable3() { // 关闭
        this.show3 = false
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
    .con2
      margin-bottom 5px
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
      .con2-left
        margin-top 5px
      .con2-right
        padding-left -80px
        p
          line-height 25px
  .art3
    .con3
      table
        word-break break-all
        margin-bottom 20px
        border 1px solid black
        border-collapse collapse
        width 100%
      tr
        border-top 1px solid black
        width 100%
      .a-td
        padding 10px
        width 20%
        text-align center
        word-break break-all
      .b-td
        padding 10px
        padding-top 30px
        width 67%
        border-left 1px solid black
        text-align center
        word-break break-all
      .c-td
        padding 10px
        padding-top 20px
        width 13%
        border-left 1px solid black
        text-align center
        word-break break-all
      .con3-left
        margin-top 15px
      .con3-right
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
    display inline-block
  .medium
    width 40%
    display inline-block
  .toleft
    margin-left -40px
  /*margin-bottom 0*/
  .totoleft
    margin-left -80px
  .mark
    margin-left 30px
  .sta
    /*width 140px*/
    /*height 40px*/
    /*display inline-block*/
    display inline-block
    margin-top 13px
    vertical-align top
  .stb
    width 80%
    display inline-block
    vertical-align top
  .else
    width 120px
    display inline-block
  .other
    width 315px
    display inline-block
  .input-with-select .el-input-group__prepend
    background-color: #fff
  .harris
    border-left 1px solid black
    padding 10px
  .har
    padding:10px
    width:95px
    text-align:center
  .anniu
    float right
    margin 1% 1%
    padding: 6px 12px;
  .chan
    margin-left 0px
</style>
