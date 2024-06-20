import type { RouteRecordRaw } from 'vue-router';
import Login from '@/views/pages/auth/Login.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path:'/login',
        name:'login',
        component:Login
    }
    // {
    //   // path: '/about',
    //   // name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   //component: () => import('../views/AboutView.vue')
    // }
  ]

  export default routes;