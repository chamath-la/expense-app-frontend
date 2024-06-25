import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// Simulated authentication check function
const isAuthenticated = () => {
  // Replace this with actual authentication logic
  return !!localStorage.getItem('token');
};

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated()) {
      next({
        path: '/login'});
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router
