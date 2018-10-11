import Vue from 'vue'
import Router from 'vue-router'
import Cache from '@/components/corelib/common/cache'
import Home from '@/components/home/Home'
import Login from '@/components/login/login'
import Inv2 from '@/views/jdyy/investigation/jdyypos/jdyyInv2'

// import Inv from '@/views/jdyy/investigation/jdyypos/jdyyInv'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/admin/jdyyInv2',
      name: 'Inv2',
      component: Inv2
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {path: '/:app', name: 'header', component: Home},
        {path: '/:app/:fun', name: 'navigater', component: Home}
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (Cache.get('id') === null && to.name !== 'login') {
    next({path: '/login'})
  }
  next()
})

export default router
