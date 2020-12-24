import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _9ff89888 = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _481aac1e = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _baca46d2 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _407ce357 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _605f9835 = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _b7964c02 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _274726a4 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _9ff89888,
    children: [{
      path: "",
      component: _481aac1e,
      name: "home"
    }, {
      path: "/login",
      component: _baca46d2,
      name: "login"
    }, {
      path: "/register",
      component: _baca46d2,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _407ce357,
      name: "profile"
    }, {
      path: "/settings",
      component: _605f9835,
      name: "settings"
    }, {
      path: "/editor",
      component: _b7964c02,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _274726a4,
      name: "article"
    }]
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decodeURIComponent(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
