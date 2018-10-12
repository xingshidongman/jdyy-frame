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
                    el-form-item.other(label="其他")
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
                    el-form-item.other(label="其他")
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
                      div.stb
                        el-form-item.mini.toleft(label="外翻")
                          el-input(v-model="form.ectropion" clearable)
                            template(slot="append") °
                        el-form-item.mini(label="前倾")
                          el-input(v-model="form.forward " clearable)
                            template(slot="append") °
                    div.mark
                      div.sta 聚乙烯衬垫植入角度
                      div.stb
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
                      div.stb
                        el-form-item.long.toleft(label="中心型")
                          el-input(v-model="form.centerType" clearable)
                        el-form-item.long.toleft(label="髋臼周边")
                          el-input(v-model="form.periphery " clearable)
                    div.mark
                      div.sta 髋臼植骨
                      div.stb
                        el-form-item.mini(label="结构性植骨")
                          el-radio-group(v-model="form.structuralBone1")
                            el-radio(label="有")
                            el-radio(label="无")
                        el-form-item.mini(label="螺钉固定")
                          el-radio-group(v-model="form.screw")
                            el-radio(label="有")
                            el-radio(label="无")
                        el-form-item.mini(label="打压植骨")
                          el-radio-group(v-model="form.suppress1")
                            el-radio(label="有")
                            el-radio(label="无")
                    div.mark
                      div.sta 股骨端植骨
                      div.stb
                        el-form-item.short(label="结构性植骨")
                          el-radio-group(v-model="form.structuralBone2")
                            el-radio(label="有")
                            el-radio(label="无")
                        el-form-item.short(label="打压植骨")
                          el-radio-group(v-model="form.suppress2")
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
                        el-form-item.mini.toleft
                          el-input(v-model="form.frontA" clearable)
                            template(slot="append") °屈曲
                        el-form-item.mini.toleft
                          el-input(v-model="form.frontB " clearable)
                            template(slot="append") °内收
                        el-form-item.mini.toleft
                          el-input(v-model="form.frontC " clearable)
                            template(slot="append") °内收
                    div.mark
                      div.sta 前方稳定性
                      div.stb
                        el-form-item.mini.toleft
                          el-input(v-model="form.afterA" clearable)
                            template(slot="append") °伸展
                        el-form-item.mini.toleft
                          el-input(v-model="form.afterB " clearable)
                            template(slot="append") °外旋
                    div.mark
                      div.sta 内收肌肌腱切除
                      div.stb
                        el-form-item.toleft
                          el-radio-group(v-model="form.resection")
                            el-radio(label="有")
                            el-radio(label="无")
                        template(v-if="form.resection === '无'")
                          el-form-item.mini(label="外展" )
                            el-input(v-model="form.resectionAbduction" clearable)
                              template(slot="append") °
                          el-form-item.mini(label="增加角度" )
                            el-input(v-model="form.resectionaAngle" clearable)
                              template(slot="append") °
              tr
                td.short-td
                  div.con2-left 术后期
                td.long-td
                  div.con2-right
                    el-form-item.short(label="术后总引流量")
                      el-input(v-model="form.flow" clearable)
                        template(slot="append") ml
                    div.mark
                      div.sta 单拐行走
                      div.stb
                        el-form-item.toleft.elin
                          el-radio-group(v-model="form.singleAbduction")
                            el-radio(label="无法使用")
                            el-radio(label="可以使用")
                        template(v-if="form.singleAbduction === '可以使用'")
                          el-form-item.mini(label="术后" )
                            el-input(v-model="form.singleDay" clearable)
                              template(slot="append") 天
                    div.mark
                      div.sta 出院
                      div.stb
                        el-form-item.mini.toleft(label="术后" )
                          el-input(v-model="form.leaveHospital" clearable)
                            template(slot="append") 天
                    div.mark
                      div.sta 出院时关节活动角度
                      div.stb
                        el-form-item.mini.toleft(label="屈曲")
                          el-input(v-model="form.angleA" clearable)
                            template(slot="append") °
                        el-form-item.mini.toleft(label="外展")
                          el-input(v-model="form.angleB " clearable)
                            template(slot="append") °
                        el-form-item.mini.toleft(label="内旋")
                          el-input(v-model="form.angleC " clearable)
                            template(slot="append") °
                        el-form-item.mini.toleft(label="过伸")
                          el-input(v-model="form.angleD " clearable)
                            template(slot="append") °
                        el-form-item.mini.toleft(label="内收")
                          el-input(v-model="form.angleE " clearable)
                            template(slot="append") °
                        el-form-item.mini.toleft(label="外旋")
                          el-input(v-model="form.angleF " clearable)
                            template(slot="append") °
        div.art3
          h1.title 术后影像学检查
          div.con3
            table
              tr
                td.a-td
                  div.con3-left 术后骨盆正位
                td.b-td
                  div.con3-mid
                    el-form-item.short(label="日期" style="float:left")
                      el-col(:span="20")
                        el-date-picker(type="date" placeholder="选择日期" v-model="form.date3" style="width: 100%;")
                    el-form-item.mini(label="术后第")
                      el-input(v-model="form.weekDay" clearable)
                        template(slot="append") 周
                td.c-td
              tr
                td.a-td
                  div.con3-left 臼杯位置
                td.b-td
                  div.con3-mid 高&外侧（1）/高（2）/外侧（3）/无上述表现（4）
                td.c-td
                  div.con3-right
                    el-form-item.totoleft
                      el-input(v-model="form.cupPosition" clearable)
              tr
                td.a-td
                  div.con3-left 内壁
                td.b-td
                  div.con3-mid 臼杯/骨水泥 （从髂耻线计算），+= 外侧，-= 内侧
                td.c-td
                  div.con3-right
                    el-form-item.totoleft
                      el-input(v-model="form.wall" clearable)
              tr
                td.a-td
                  div.con3-left 臼杯外翻
                td.b-td
                  div.con3-mid 0°= 向下，90°= 面向外侧
                td.c-td
                  div.con3-right
                    el-form-item.totoleft
                      el-input(v-model="form.ectropion2" clearable)
              tr
                td.a-td
                  div.con3-left 假体柄力线
                td.b-td
                  div.con3-mid 内翻（1）/外翻（20）/中立位（3）
                td.c-td
                  div.con3-right
                    el-form-item.totoleft
                      el-input(v-model="form.forceLine2" clearable)
              tr
                td.a-td
                  div.con3-left 水泥接合
                td.b-td
                  div.con3-mid 不充分不均匀（1）/未达完美（2）/完美（3）
                td.c-td
                  div.con3-right
                    el-form-item.totoleft
                      el-input(v-model="form.joint" clearable)
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
                      el-input(v-model="form.orthopedics" clearable)
              tr
                td.a-td
                  div.con3-left 综合部分
                td.b-td
                  div.con3-mid 血栓（1）/褥疮（2）/胸腔感染（3）/泌尿系感染（4）/无（5）
                td.c-td
                  div.con3-right
                    el-form-item.totoleft
                      el-input(v-model="form.comprehensive" clearable)
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
          h1.title 临床评价——Harris评分
          div.con2
            el-table(:data="tableData1" style="width: 100%" height="250")
              el-table-column(fixed prop="harDate" label="日期" width="100")
              el-table-column(prop="har1" label="术后第（）月" width="120")
              el-table-column(prop="har2" label="疼痛" width="60")
              el-table-column(prop="har3" label="上下楼梯" width="120")
              el-table-column(prop="har4" label="坐" width="60")
              el-table-column(prop="har5" label="穿鞋袜" width="120")
              el-table-column(prop="har6" label="上公交车" width="120")
              el-table-column(prop="har7" label="跛行" width="60")
              el-table-column(prop="har8" label="行走辅助" width="120")
              el-table-column(prop="har9" label="行走距离" width="120")
              el-table-column(prop="har10" label="无畸形" width="120")
              el-table-column(prop="har11" label="关节活动度" width="120")
              el-table-column(prop="har12" label="总分（100）" width="120")
          div.con2
            el-form-item.mini(label="日期")
              el-input(v-model="form.harDate" clearable)
            el-form-item.mini(label="术后第（）月")
              el-input(v-model="form.har1" clearable)
            el-form-item.mini(label="疼痛")
              el-input(v-model="form.har2" clearable)
            el-form-item.mini(label="上下楼梯")
              el-input(v-model="form.har3" clearable)
            el-form-item.mini(label="坐")
              el-input(v-model="form.har4" clearable)
            el-form-item.mini(label="穿鞋袜")
              el-input(v-model="form.har5" clearable)
            el-form-item.mini(label="上公交车")
              el-input(v-model="form.har6" clearable)
            el-form-item.mini(label="跛行")
              el-input(v-model="form.har7" clearable)
            el-form-item.mini(label="行走辅助")
              el-input(v-model="form.har8" clearable)
            el-form-item.mini(label="行走距离")
              el-input(v-model="form.har9" clearable)
            el-form-item.mini(label="无畸形")
              el-input(v-model="form.har10" clearable)
            el-form-item.mini(label="关节活动度")
              el-input(v-model="form.har11" clearable)
            el-form-item.mini(label="总分")
              el-input(v-model="form.har12" clearable :disabled="true")
            <!--table-->
              <!--tr()-->
                <!--td.har 记录日期-->
                <!--td.harris 术后第( )月-->
                <!--td.harris 疼痛-->
                <!--td.harris 上下楼梯-->
                <!--td.harris 坐-->
                <!--td.harris 穿鞋袜-->
                <!--td.harris 上公交车-->
                <!--td.harris 跛行-->
                <!--td.harris 行走辅助-->
                <!--td.harris 行走距离-->
                <!--td.harris 无畸形-->
                <!--td.harris 关节活动度-->
                <!--td.harris 总分-->
              <!--tr-->
                <!--td.har 2018-10-12-->
                <!--td.harris 术前-->
                <!--td.harris 40-->
                <!--td.harris 3-->
                <!--td.harris 3-->
                <!--td.harris 2-->
                <!--td.harris 0-->
                <!--td.harris 5-->
                <!--td.harris 3-->
                <!--td.harris 2-->
                <!--td.harris 1-->
                <!--td.harris -2-->
                <!--td.harris 56-->
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
          sex: '',
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
          defect1: '',
          structuralBone1: '',
          screw: '',
          suppress1: '',
          structuralBone2: '',
          suppress2: '',
          frontA: '',
          frontB: '',
          frontC: '',
          afterA: '',
          afterB: '',
          resection: '',
          resectionAbduction: '',
          resectionaAngle: '',
          flow: '',
          singleAbduction: '',
          singleDay: '',
          leaveHospital: '',
          angleA: '',
          angleB: '',
          angleC: '',
          angleD: '',
          angleE: '',
          angleF: '',
          date3: '',
          weekDay: '',
          cupPosition: '',
          wall: '',
          ectropion2: '',
          forceLine2: '',
          joint: '',
          orthopedics: '',
          comprehensive: '',
          herDate: '',
          her1: '',
          her2: '',
          her3: '',
          her4: '',
          her5: '',
          her6: '',
          her7: '',
          her8: '',
          her9: '',
          her10: '',
          her11: '',
          her12: ''
        },
        tableData1: [
          {harDate: '2016-05-03', har1: '术前', har2: '40', har3: '3', har4: '3', har5: '2', har6: '0', har7: '5', har8: '3', har9: '2', har10: '1', har11: '-2', har12: '56'},
          {harDate: '2016-05-03', har1: '术前', har2: '40', har3: '3', har4: '3', har5: '2', har6: '0', har7: '5', har8: '3', har9: '2', har10: '1', har11: '-2', har12: '56'},
          {harDate: '2016-05-03', har1: '术前', har2: '40', har3: '3', har4: '3', har5: '2', har6: '0', har7: '5', har8: '3', har9: '2', har10: '1', har11: '-2', har12: '56'}
        ]
      }
    },
    // computed: {
    //   har12: function () {
    //     var a = this.form.har12
    //     a = a + 1
    //     return a
    //   }
    // },
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
      margin-bottom 20px
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
        p
          line-height 25px
  .art3
    /*width 1160px*/
    .con3
      table
        border 1px solid black
        border-top 0
        width 100%
        margin-bottom 20px
      tr
        border-top 1px solid black
        width 100%
        display flex
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
  .totoleft
    margin-left -80px
  .mark
    margin-left 30px
    display flex
    .sta
      /*width 140px*/
      /*height 40px*/
      /*display inline-block*/
      flex 1.5
      padding-top 10px
    .stb
      flex 8.5
  .else
    width 120px
    display inline-block
  .elin
    width 55%
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
</style>
