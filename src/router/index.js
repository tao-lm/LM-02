import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home'
import Member from '@/components/member'
import Technology from '@/components/technology'
import Study from '@/components/study'
import Entertainment from '@/components/entertainment'
import Axis from '@/components/axis'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/02',
      name: 'Member',
      component: Member
    },
    {
      path: '/03',
      name: 'Technology',
      component: Technology
    },
    {
      path: '/04',
      name: 'Study',
      component: Study
    },
    {
      path: '/05',
      name: 'Entertainment',
      component: Entertainment
    },
    {
      path: '/06',
      name: 'axis',
      component: Axis
    }
  ]
})
