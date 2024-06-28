import type { RouteRecordRaw } from 'vue-router';
import Login from '@/views/pages/auth/Login.vue';
import Registration from '@/views/pages/auth/Registration.vue';
import Dashboard from '@/views/pages/Dashboard.vue';
import Expenses from '@/views/pages/Expenses/Expenses.vue';
import AddExpenses from '@/views/pages/Expenses/AddExpense.vue';
import BasicLayout from '@/views/layouts/BasicLayout.vue';

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
    },
    {
        path:'/',
        name:'basiclayout',
        component:BasicLayout,
        children:[
            {
                path:'',
                name:'dashboard',
                component:Dashboard,
                meta: { requiresAuth: true },
            },
            {
                path:'/expenses',
                name:'expenses',
                component:Expenses,
                meta: { requiresAuth: true },
            },
            {
                path:'/addExpense',
                name:'addExpense',
                component:AddExpenses,
                meta: { requiresAuth: true },
            }
        ]
    },
    
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