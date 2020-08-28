// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// highchart, highchart-vue 이용하기 위해서 선언
import HighchartsVue from 'highcharts-vue'
import Highcharts from "highcharts";
// stock chart 사용하기 위해서는 이런식으로 추가해줘 야함. 
import Stock from "highcharts/modules/stock";

Vue.config.productionTip = false

Vue.use(HighchartsVue)
Stock(Highcharts)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
