// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500&display=swap'
  }, {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Kanit:wght@500&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500&display=swap'
  });
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
