import Vue from 'vue'

import Jdyytentry from './statistics/jdyytentry' // 统计录入
import Jdyyana from './statistics/Jdyyana' // 统计分析
import Jdyyvis from './patients/Jdyyvis' // 病员资料录入
import Jdyyman from './patients/Jdyyman' // 病员资料管理
import Jdyyque from './patients/Jdyyque' // 病员资料查询
import Jdyysur from './diasur/Jdyysur' // 术式
import Jdyydia from './diasur/Jdyydia' // 诊断
import Jdyyhip from './investigation/Jdyyhip' // 全髋术后调查
import Jdyyknee from './investigation/Jdyyknee' // 全髋术后调查
import Welcome from './welcome'

Jdyytentry.install(Vue)
Jdyyana.install(Vue)
Jdyyvis.install(Vue)
Jdyyman.install(Vue)
Jdyyque.install(Vue)
Jdyysur.install(Vue)
Jdyydia.install(Vue)
Jdyyhip.install(Vue)
Jdyyknee.install(Vue)
Welcome.install(Vue)
