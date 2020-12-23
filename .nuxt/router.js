import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7f845e6d = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _4c504ce2 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _3df197c6 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _61118ec6 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _52605aa6 = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _73b584b0 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _47dbd213 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _7f845e6d,
    children: [{
      path: "",
      component: _4c504ce2,
      name: "home"
    }, {
      path: "/login",
      component: _3df197c6,
      name: "login"
    }, {
      path: "/register",
      component: _3df197c6,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _61118ec6,
      name: "profile"
    }, {
      path: "/settings",
      component: _52605aa6,
      name: "settings"
    }, {
      path: "/editor",
      component: _73b584b0,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _47dbd213,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
