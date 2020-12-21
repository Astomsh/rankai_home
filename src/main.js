// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

/* 路由 */
import router from './router'

/* axios */
import axios from './api'
import api from './api/api'
Vue.prototype.http = axios;
Vue.prototype.api = api;

/* swiper */
import 'swiper/dist/css/swiper.min.css';

/* 多语言 */
import VueI18n from "vue-i18n"
import { browser } from "./js/utils"
Vue.use(VueI18n)

/* 重置样式 */
import './assets/css/reset.min.css'

/* jquery */
import 'jquery'

/* bootstarp */
import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.min'

/* animate.css */
import 'animate.css'

 
/* 头部组件 */
import Header from './components/Header'
Vue.component(Header.name,Header)


/* 尾部组件 */
import Footer from './components/Footer'
Vue.component(Footer.name,Footer)

/* 回到顶部 */
import GoTop from './components/GoTop'
Vue.component(GoTop.name,GoTop)

Vue.config.productionTip = false


router.beforeEach((to, from, next) => {
    if(to.meta.title){
      document.title = to.meta.title
    }
    next();
});

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
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
