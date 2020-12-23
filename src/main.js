import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import { browser } from "./js/utils"
import VueI18n from "vue-i18n"
import VueLazyload from 'vue-lazyload'
import '@/assets/css/iconfont.css'
import '@/assets/css/common.scss'
import '@/assets/css/anime.scss'

Vue.config.productionTip = false
Vue.use(VueI18n);
Vue.use(VueLazyload);

var local = localStorage.getItem('languageType');
if (!local || local === "") {
  local = (browser.language.substr(0, 2)) === 'zh' ? 'zh' : 'en';
  localStorage.setItem('languageType', local);
}

const i18n = new VueI18n({
  locale: local,
  messages: {
    'zh': require('./i18n/zh-CN'),
    'en': require('./i18n/en-US')
  }
})

new Vue({
  router,
  i18n,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
