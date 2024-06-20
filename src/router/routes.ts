import type { RouteRecordRaw } from 'vue-router';
import Login from '@/views/pages/auth/Login.vue';
import Registration from '@/views/pages/auth/Registration.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path:'/login',
        name:'login',
        component:Login
    },
    {
        path:'/register',
        name:'register',
        component:Registration
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