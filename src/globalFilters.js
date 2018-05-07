import { formatDate, formatTime } from './filters/formatDate';

/**
 * You can register global filters here and use them as a plugin in your main Vue instance
 */

const GlobalFilters = {
  install (Vue) {
    Vue.filter('formatDate', formatDate)
    Vue.filter('formatTime', formatTime)
  }
}

export default GlobalFilters
