<template>
    <div id="input-box">
        <input class="input" type="text" id="task" v-model.trim="todo" placeholder="입력 후 엔터!" @keyup.enter="addTodo">
        <span class="addbutton" @click="addTodo">추 가</span>
    </div>
</template>
<script type="text/javascript">
    import Constant from '../constant'

    export default {
        name: 'input-todo',
        data: function() {
            // 로컬 상태 데이터를 가짐 > InputTodo 컴포넌트에서만 사용하기 때문에 필요 
            return { todo : "" }
        },
        methods: {
            addTodo: function() {
                this.$store.commit(Constant.ADD_TODO, { todo : this.todo });
                this.todo = ""; 
            }
        }
    }
</script>
<style>
    #input-box {
        height : 35px; 
    }
    .input {
        border: none; width: 75%; height:35px; padding: 10px;
        float: left; font-size: 16px;
    }
    .addbutton {
        padding: 10px; width: 25%; height:35px; background: #d9d9d9;
        color: #555; float: left; text-align: center;
        font-size: 13px; cursor: pointer; transition: 0.3s;
    }
    .addbutton:hover { background-color: #bbb; }
</style>