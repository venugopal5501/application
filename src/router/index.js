import { createRouter, createWebHistory } from 'vue-router'

import CounterPage from '@/components/CounterPage.vue'
import EmployeePage from '@/components/EmployeePage.vue'
import UserList from '@/components/UserList.vue'


const routes = [
  {
    path: '/counter',
    component: CounterPage
  },
  {
    path: '/employee',
    component: EmployeePage
  }, {
    path: '/users',
    component: UserList
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
