// store.js
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store2 = new Vuex.Store({
  // counter라는 state 속성을 추가
  state: {
    counter: 0
  },
  getters: {
    getCounter(state) {
      return state.counter; 
    },
    getCounter3(state) {
      return state.counter * 3; 
    },
    getCounter5(state) {
      return state.counter * 5; 
    }
  },
  mutations: {
    addCounter(state) {
      return state.counter++;
    },
    subCounter(state) {
      return state.counter--; 
    },
    addCounter2(state, payload) {
      // 이런 식으로 인자값 넘김
      state.counter = payload.value; 
    }
  },
  actions: {
    // setTimeout() 이나 서버와의 http 통신 처리 같이 결과를 받아올 타이밍이 예측되지 않은 로직은 Actions 에 선언
    addCounter(context) {
      // commit 의 대상인 addCounter 는 mutations 의 메서드를 의미.
      return context.commit('addCounter');
    },
    subCounter(context) {
      return context.commit('subCounter'); 
    }

    /*
      비동기처리 로직 
      actions: {
      getServerData: function (context) {
        return axios.get("sample.json").then(function() {
          // ...
        });
      },
      delayFewMinutes: function (context) {
        return setTimeout(function () {
          commit('addCounter');
        }, 1000);
      }
      }
    */
  }
});