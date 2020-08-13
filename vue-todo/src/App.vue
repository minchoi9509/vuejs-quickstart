<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <!-- v-on : 화면에서 발생한 이벤트 처리 (??) 
      # 할 일 추가 버튼을 클릭했을 때 App 컴포넌트로 이벤트를 전달 할 수 있게 v-on 디렉터리 추가 
      # DOM 이벤트를 듣고 트리거 될 때 JavaScript를 실행할 수 있음 (이벤트 리스너)
      # 
    -->
    <TodoInput @addTodo="addTodo"></TodoInput>
    <TodoList :todoData="todoItems" @removeTodo="removeTodo"></TodoList>
    <TodoFooter @removeAll="clearAll"></TodoFooter>
  </div>
</template>
<script>
// 컴포넌트 불러오기
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

  export default {
    data() {
      return {
        todoItems : []
      }
    }, 
    methods: {
      addTodo(todoItem) {
        // 로컬 스토리지에 데이터를 추가하는 로직 
        localStorage.setItem(todoItem, todoItem);
        this.todoItems.push(todoItem);
      },
      removeTodo(todoItem, index) {
        /* 
          선택한 할일을 뷰 데이터에서 삭제하는 로직 (이벤트와 인자를 같이 전달 받았음)
          # 전달 받은 인자 값은 상위 컴포넌트에서 참고용으로만 활용하고 데이터 값은 변경하지 말아야 함. 
        */
        localStorage.removeItem(todoItem);

        // splice() : 배열의 특정 인덱스에서 부여한 숫자만큼 인덱스를 삭제함. 
        // todoItems의 배열 요소를 제거하자마자 바로 뷰에서 자동으로 화면을 다시 갱신함 > 데이터 속성이 변하면 화면에 즉시 반영하는 뷰의 반응성 때문 
        this.todoItems.splice(index, 1); 
      },
      clearAll() {
        localStorage.clear();
        this.todoItems = []; 
      }
    },
    mounted() {
      if (localStorage.length > 0) {
        for (let i= 0; i < localStorage.length; i++) {
          this.todoItems.push(localStorage.key(i));
        }
      }
    },
    components: {
      'TodoHeader' : TodoHeader,
      'TodoInput' : TodoInput,
      'TodoList' : TodoList,
      'TodoFooter' : TodoFooter
    }
  }
</script>
<style>
  body {
    text-align: center;
    background-color: #F6F6F8;
  }
  input {
    border-style: groove;
    width: 200px;
  }
  button {
    border-style: groove;
  }
  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03)
  }
</style>