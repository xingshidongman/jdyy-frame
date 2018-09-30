import Vue from 'vue'

import Jdyydict from './system/jdyydict'
import Jdyyimg from './jdyyimg'
import Jdyytentry from './statistics/jdyytentry'
import Jdyyanalyse from './statistics/jdyyana'

Jdyydict.install(Vue)
Jdyyimg.install(Vue)
Jdyytentry.install(Vue)
Jdyyanalyse.install(Vue)
