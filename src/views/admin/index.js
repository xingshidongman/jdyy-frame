import Vue from 'vue'
// admin
import Dataauth from './auth/dataauth'
import Role from './auth/role'
import User from './auth/user'
import Workgroup from './auth/workgroup'
import Duty from './organize/duty'
import Org from './organize/org'
import Orgchart from './organize/orgchart'
import Orguser from './organize/orguser'
import Function from './system/function'
import Admindict from './system/admindict'
import Audit from './system/audit'
import Auditconfig from './system/auditconfig'
import Application from './system/application'
import Welcome from './welcome'

Application.install(Vue)
Dataauth.install(Vue)
Role.install(Vue)
User.install(Vue)
Workgroup.install(Vue)
Duty.install(Vue)
Org.install(Vue)
Orgchart.install(Vue)
Orguser.install(Vue)
Function.install(Vue)
Admindict.install(Vue)
Audit.install(Vue)
Auditconfig.install(Vue)
Welcome.install(Vue)
