// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800;900&display=swap'
  }, {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Martel:wght@300;400;600;700&display=swap"'
  }, {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Poly:ital@0;1&display=swap'
  });
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
