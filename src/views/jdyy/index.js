import Vue from 'vue'

import Jdyydict from './system/jdyydict'
import Jdyyimg from './jdyyimg'
import Jdyytentry from './statistics/jdyytentry'
import Jdyyanalyse from './statistics/Jdyyana'
import Jdyyent from './patients/Jdyyent'
import Jdyyman from './patients/Jdyyman'
import Jdyyque from './dcg/Jdyyque'
import Jdyysur from './zsg/Jdyysur'

Jdyydict.install(Vue)
Jdyyimg.install(Vue)
Jdyytentry.install(Vue)
Jdyyanalyse.install(Vue)
Jdyyent.install(Vue)
Jdyyman.install(Vue)
Jdyyque.install(Vue)
Jdyysur.install(Vue)
