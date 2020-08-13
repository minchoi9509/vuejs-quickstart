/*
    # Vuex의 가장 기본 구조
    # 공통 관리하는 모듈과 변수를 store이라는 Vuex 객체로 관리하게 됨 

    # status : 컴포넌트간 공유할 Data 객체
    # getters : 공유하는 Data를 그대로 전달, 혹은 가공해서 전달
    # mutations : 저장소에 공유되어 있는 Data 가공, setter 역할
    # actions : mutations와 비슷하지만 비동기 작업 처리. 

*/
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.store({
    state : {
        // 공통 관리되는 상태값 관리
        counter : 0
    },
    geters: {
        // 공유되는 상태 값 조회 로직
        getCounter(state) {
            return state.counter 
        }
    },
    mutations: {
        /*
            상태 값 변경 로직 관리
            # state : 내부 공통 상태 값 객체
            # payload : 전달 받는 인자 객체, json 형태로도 전달 가능 > 인자가 여러개일 경우 이런식으로 조회하여 반영하면 됨. 
        */
        addCounter: function(state, payload) {
            console.log(payload)
            state.counter++
        },
        subCounter: function(state, payload) {
            state.counter--
        },
        doubleCounter: function(state, payload) {
            state.counter = state.counter * 2;
        }
    },
    actions: {
        /* 
            비동기 통신 및 동작 정의 관리 
            Mutation과 연계하여 데이터 처리
            context > {다양한 속성들 포함} ex) state.. commit..dispatch...
        */
        subCounter: function({commit, state}, payload) {
            return commit('subCounter')
        },
        asyncAddCounter: function(context, payload) {
            return setTimeout(() => {
                context.commit('addCounter')
            }, 1000)
        }
    }
})