import Vue from 'vue'

import Jdyytentry from './statistics/jdyytentry' // 统计录入
import Jdyyanalyse from './statistics/Jdyyana' // 统计分析
import Jdyyent from './patients/Jdyyent' // 病员资料录入
import Jdyyman from './patients/Jdyyman' // 病员资料管理
import Jdyyque from './patients/Jdyyque' // 病员资料查询
import Jdyysur from './zsg/Jdyysur' // 术式
import Jdyydia from './zsg/Jdyydia' // 诊断

Jdyytentry.install(Vue)
Jdyyanalyse.install(Vue)
Jdyyent.install(Vue)
Jdyyman.install(Vue)
Jdyyque.install(Vue)
Jdyysur.install(Vue)
Jdyydia.install(Vue)
