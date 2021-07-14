import { createRouter, createWebHistory } from 'vue-router'
import DcHeros from '../pages/DcHeros.vue'
import Calendar from '../pages/Calendar.vue'
import Home from '../pages/Home.vue'
import Markdown from '../pages/Markdown.vue'
import Slider from '../pages/Slider.vue'
import Home1 from '../pages/Home1.vue'
import Calculator from '../pages/Calculator.vue'
// import AppHeader from '../pages/AppHeader.vue'

const routes = [
  {
    path: '/dc-heros',
    name: 'DcHeros',
    component: DcHeros
  },
  {
    path:'/',
    component:Home1
  },
  {
    path: '/markdown',
    name: 'Markdown',
    component: Markdown
  },

  {
    path: '/Home',
    name: "Home",
    component: Home
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: Calendar
  },
  {
    path: '/slider',
    name: 'slider',
    component: Slider
  },
  {
    path: '/calculator',
    name: 'calculator',
    component: Calculator
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
