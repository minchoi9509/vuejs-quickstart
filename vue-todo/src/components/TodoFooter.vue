<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" @click="clearTodo">Clear All</span>
  </div>
</template>

<script>
export default {
  methods: {
    clearTodo() {
      /* 
        버튼을 클릭하면 clearTodo() methods가 실행되고 여기서 removeAll 이벤트를 발생시켜 상위 컴포넌트로 전달함
        그러면 상위 컴포넌트(App.vue)에서는 removeAll을 받아 상위 컴포넌트에서 정의된 clearAll() 메서드 실행. 
      */
      this.$emit('removeAll'); 
    }
  }
}
</script>

<style scoped>
  .clearAllContainer {
    width: 8.5rem;
    height: 50px;
    line-height: 50px;
    background-color: white;
    border-radius: 5px;
    margin: 0 auto;
  }
  .clearAllBtn {
    color: #e20303;
    display: block;
  }
</style>