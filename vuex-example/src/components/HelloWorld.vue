<template>
    <div class="hello">
        Parent counter : {{ getCounter }} <br/>
        <button @click="addCounter">+</button>
        <button @click="subCounter">-</button>
        <button @click="doubleCounter">*</button>
        <button @click="asyncAddCounter">~+</button>

        <!-- Child 컴포넌트를 등록하고 counter 데이터 속서어을 props로 전달 -->
        <!-- <child :passedCounter="counter"></child> -->
        <child></child>
    </div>
</template>
<script>
    import Child from './Child.vue'
    import {mapGetters, mapMutations, mapActions } from 'vuex'

    export default {
        computed: {
            ...mapGetters([
                'getCounter'
            ])
        },
        methods: {
            //이벤트 추가
            addCounter() {
                // mutations 객체 호출은 commit 이용 
                this.$store.commit('addCounter')
            },
            subCounter() {
                // 사용할 Action 함수 이름 > dispatch 이용해서 이벤트 사용 
                // this.$stroe.state.counter--
                this.$store.dispatch('subCounter')
            },
            ...mapMutations([
                'doubleCounter'
            ]),
            ...mapActions([
                'asyncAddCounter'
            ])
        },
        components: {
            //Child 컴포넌트를 하위 컴포넌트로 등록
            'child' : Child
        }
    }
</script>