import Vue from 'vue'
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
  faHourglassHalf,
  faLink,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";


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
  faHourglassHalf,
  faLink,
  faEnvelope
);


Vue.component("font-awesome", FontAwesomeIcon);

