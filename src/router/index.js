import Vue from "vue";
import VueRouter from "vue-router";
import routes from './routes'
import store from '@/store'

Vue.use(VueRouter);

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const isLogged = store.state.auth.isLogged
  if (!requiresAuth && isLogged && to.path === '/login') {
    next('/secret')
  }
  if (requiresAuth && !isLogged) {
    next('/login')
  } else {
    next()
  }
})

export default router
