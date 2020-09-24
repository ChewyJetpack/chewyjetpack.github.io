// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
//import { } from '@fortawesome/free-regular-svg-icons'
import { faAdjust, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import VueTruncate from 'vue-truncate-filter'

config.autoAddCss = false;
library.add(faGithub, faInstagram, faLinkedinIn, faAdjust, faArrowRight);

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

  // Global icon component
  Vue.component('font-awesome', FontAwesomeIcon)
  Vue.use(VueTruncate)
}
