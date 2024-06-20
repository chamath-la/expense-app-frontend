import type { RouteRecordRaw } from 'vue-router';
import testBootstrap from '@/views/pages/testBootsrap.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path:'/',
        name:'',
        component:testBootstrap
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