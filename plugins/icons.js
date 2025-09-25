import Vue from 'vue'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faLinkedinIn,
  faMastodon
} from "@fortawesome/free-brands-svg-icons";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import {
  faAdjust,
  faArrowRight,
  faArrowLeft,
  faTimes,
  faBars,
  faHistory,
  faHourglassHalf,
  faLink,
  faEnvelope,
  faDownload
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";


config.autoAddCss = false;
library.add(
  faGithub,
  faLinkedinIn,
  faAdjust,
  faArrowRight,
  faTimes,
  faBars,
  faCalendar,
  faArrowLeft,
  faHistory,
  faHourglassHalf,
  faLink,
  faEnvelope,
  faMastodon,
  faDownload
);


Vue.component("font-awesome", FontAwesomeIcon);

