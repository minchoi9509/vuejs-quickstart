<template>
    <ul id="todolist">
        <!-- 
            # :class 인데 함수 호출해서 T/F return 받아서 쓰고 있는 형식. computed는 안되나?
        -->
        <li v-for="(a, index) in todolist" :class="checked(a.done)" @click="doneToggle({index: index})">
            <span>{{ a.todo }}</span>
            <span v-if="a.done">(완료)</span>
            <!-- 
                @click.stop?
                > 클릭 이벤트 전파가 중단됩니다
                > bubbling 중단, stopPropagation()과 동일한 
              -->
            <span class="close" @click.stop="deleteTodo(index)">&#x00D7;</span>
        </li>
    </ul>
</template>
<script type="text/javascript">
import Constant from '../constant' 
import { mapState, mapMutations } from 'vuex'
import _ from 'lodash';

export default {
    /* 
        자동으로 todolist 상태 데이터를 바인딩해줌 > 저장소 상태의 이름과 동일한 이름으로 바인딩 됨 -- 다른 이름으로 바인딩하고 싶다면 계산형 속성 수정 가능
        computed: mapState({
            todolist2 : (state) => state.todolist 
        })
    */

    computed: mapState(['todolist']),
    /* 
        _.extend > 객체와 객체의 속성을 병합하는 메서드
        var obj1 = { a: 100, b: 200 };
        var obj2 = { b: 999, c: 300 };
        _.extend(obj1, obj2) // {a: 100, b: 999, c: 300}

        왜 사용?? 변이를 일으키지 않는 checked 메서드도 존재하기 때문에 객체 병합 필요 
    */
    methods: _.extend({
                checked(done) {
                    console.log(done); 
                    if(done) return { checked : true };
                    else return { checked : false };
                },
             },
                mapMutations([
                
                    // deleteTodo: function(index) {
                    //     // 이벤트를 받아 처리하는 메서드에서 변이를 일으키기 위해서 this.$store.commit() 메서드 호출
                    //     // this.$store.commit(일으킬 변이 이름, 변이에 전달할 인자) > 이 경우에는 index 
                    //     this.$store.commit(Constant.DELETE_TODO, {index: index});
                    // },
                    // doneToggle: function(index) {
                    //     this.$store.commit(Constant.DONE_TOGGLE, {index: index}); 
                    // }

                    // --> deleteTodo : Constant.DELETE_TOD,
                    //     doneToggle :Constant.DONE_TOGGLE 이라고 정의해두면 사용할 때 doneToggle(index)처럼 똑같이 사용 가능 

                    // --> 오류 :  Error in v-on handler: "TypeError: Cannot read property 'done' of undefined"
                    //             found in
                    //             ---> <List> at src/components/List.vue
                    //                 <App> at src/App.vue
                    //                     <Root>
                
                    Constant.DELETE_TODO,
                    Constant.DONE_TOGGLE
                ])
                // ,mapMutations({
                //     deleteTodo : Constant.DELETE_TODO,
                //     doneToggle :Constant.DONE_TOGGLE
                // })

            )
    }

/*
    // 로컬 데이터가 없음 > store가 vue 인스턴스에 주입되었기 때문에 접근 가능. 
    export default {
        computed: {
            // 속성처럼 이용하기 위해 computed 사용 
            // todolist : function() { } 과 동일 
            todolist() {
                return this.$store.state.todolist; 
            }
        },
        methods: {
            checked: function(done) {
                console.log('done : ' + done); 
                if(done) return { 'checked' : true };
                else return { checked : false }
            },
            deleteTodo: function(index) {
                // 이벤트를 받아 처리하는 메서드에서 변이를 일으키기 위해서 this.$store.commit() 메서드 호출
                // this.$store.commit(일으킬 변이 이름, 변이에 전달할 인자) > 이 경우에는 index 
                this.$store.commit(Constant.DELETE_TODO, {index: index});
            },
            doneToggle: function(index) {
                this.$store.commit(Constant.DONE_TOGGLE, {index: index}); 
            }
        }
    }
*/
</script>
<style>
* {  box-sizing: border-box;  }
  ul {  margin: 0; padding: 0; }
  ul li {
    cursor: pointer; position: relative; padding: 8px 8px 8px 40px;
    background: #eee; font-size: 14px;  transition: 0.2s;
    -webkit-user-select: none; -moz-user-select: none;
    -ms-user-select: none; user-select: none;
  }
  ul li:hover {  background: #ddd;  }
  ul li.checked {
    background: #BBB;  color: #fff; text-decoration: line-through;
  }
  ul li.checked::before {
    content: ''; position: absolute; border-color: #fff;
    border-style: solid; border-width: 0px 1px 1px 0px;
    top: 10px; left: 16px;  transform: rotate(45deg);
    height: 8px; width: 8px;
  }
  .close {
    position: absolute; right: 0; top: 0;
    padding: 8px 12px 8px 12px
  }
  .close:hover {
    background-color: #f44336;  color: white;
  }
</style>