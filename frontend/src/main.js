/* eslint-disable no-unused-vars */
// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faInstagram,
  faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import {
  faAdjust,
  faArrowRight,
  faArrowLeft,
  faTimes,
  faBars,
  faHistory,
  faHourglassHalf
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import VueTruncate from "vue-truncate-filter";
import VueLodash from "vue-lodash";
import throttle from "lodash/throttle";
import lodash from "lodash";
import VuePageTransition from "vue-page-transition";
import ReadingTime from "reading-time";

config.autoAddCss = false;
library.add(
  faGithub,
  faInstagram,
  faLinkedinIn,
  faAdjust,
  faArrowRight,
  faTimes,
  faBars,
  faCalendar,
  faArrowLeft,
  faHistory,
  faHourglassHalf
);

export default function(Vue, { router, head, isClient }) {
  // Global icon component
  Vue.component("font-awesome", FontAwesomeIcon);

  Vue.use(VueLodash, { lodash: { throttle } });
  Vue.use(VueTruncate);
  Vue.use(VuePageTransition);
  Vue.use(require("vue-moment"));
  Object.defineProperty(Vue.prototype, "$readingTime", { value: ReadingTime });
}
