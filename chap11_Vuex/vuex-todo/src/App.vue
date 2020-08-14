<template>
  <div id="app">
    <InputTodo></InputTodo>
    <List></List>
  </div>
</template>

<script>
import List from './components/List.vue'
import InputTodo from './components/InputTodo.vue'

export default {
  name: 'app',
  components: {
    'List' : List,
    'InputTodo' : InputTodo
  }
}
</script>
