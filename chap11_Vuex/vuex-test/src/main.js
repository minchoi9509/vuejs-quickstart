// main.js
import Vue from "vue";
import App from "./App.vue";
// store.js를 불러오는 코드
import { store2 } from "./store";

new Vue({
  el: "#app",
  // 뷰 인스턴스의 store 속성에 연결
  store: store2,
  render: h => h(App)
});