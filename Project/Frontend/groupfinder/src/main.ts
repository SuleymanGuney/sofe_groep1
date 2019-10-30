import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

let _ = require('lodash');

Vue.config.productionTip = false;
Vue.prototype.$_ = _;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
