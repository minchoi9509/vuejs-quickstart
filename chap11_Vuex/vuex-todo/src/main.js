import Vue from 'vue'
// 이렇게 경로를 하면 폴더 자체?????? ???
import {store} from './store'
import App from './App.vue'

new Vue({
  // vuex 사용 > store 객체 전달 > 모든 자식 컴포넌트에서 저장소 객체를 this.$store을 통해 접근 가능
  store,
  el: '#app',
  render: h => h(App)
})