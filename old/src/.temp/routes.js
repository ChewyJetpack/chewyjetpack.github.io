const c1 = () => import(/* webpackChunkName: "page--src--components--pages--projects-vue" */ "/Users/chewy/Dev/chewyjetpack.github.io/src/components/pages/Projects.vue")
const c2 = () => import(/* webpackChunkName: "page--src--components--pages--blog-vue" */ "/Users/chewy/Dev/chewyjetpack.github.io/src/components/pages/Blog.vue")
const c3 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/chewy/Dev/chewyjetpack.github.io/node_modules/gridsome/app/pages/404.vue")
const c4 = () => import(/* webpackChunkName: "page--src--components--pages--index-vue" */ "/Users/chewy/Dev/chewyjetpack.github.io/src/components/pages/Index.vue")

export default [
  {
    path: "/projects/",
    component: c1
  },
  {
    path: "/blog/",
    component: c2
  },
  {
    name: "404",
    path: "/404/",
    component: c3
  },
  {
    path: "/",
    component: c4
  },
  {
    name: "*",
    path: "*",
    component: c3
  }
]
