<template>
    <div>
        <div>
            <hr>
            Child counter : {{ childCounter }} <br/>
            <button @click="addCounter">+</button>
            <button @click="subCounter">-</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Child',
        computed : {
            childCounter() {
                // 공통 상태 값인 counter를 조회하기 위한 접근법
                // 메소드로 이것처럼 만들던가 아니면 {{}} 이중괄호 사용해서 조회 가능 
                return this.$store.getters.getCounter
            }
        },
        methods: {
            // 이벤트 추가
            addCounter() {
                this.$store.commit('addCounter')
            },
            subCounter() {
                // this.$store.state.counter--
                this.$store.dispatch('subCounter')
            }
        }
    }
</script>