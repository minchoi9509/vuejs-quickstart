<!-- -->
<template>
  <div id="app">
    <!-- App.vue(Parent) -->
    <div id="app">
      Parent counter : {{ getCounter }} <br>
      Parent counter3 : {{ getCounter3 }} <br>
      Parent counter5 : {{ getCounter5 }} <br>
      <button @click="addCounter">+</button>
      <button @click="subCounter">-</button>
      <!-- Child 컴포넌트를 등록하고 counter 데이터 속성을 props로 전달한다. -->
      <child></child>
    </div>
  </div>
</template>

<script>
import Child from "./Child.vue";
import { mapGetters } from 'vuex' 

export default {
  components: {
    // Child 컴포넌트를 하위 컴포넌트로 등록
    child: Child
  },
  // data() {
  //   return {
  //     counter: 0
  //   };
  // },
  /*
  computed: {
    parentCounter() {
      return this.$store.getters.getCounter; 
    }
  },*/
  computed: {
    ...mapGetters([
      'getCounter',
      'getCounter3',
      'getCounter5'
      // parentCounter : 'getCounter' > getCounter 는 Vuex 의 getters 에 선언된 속성 이름
    ])
  },
  methods: {
    // Mutations 를 이용할 때
    // addCounter() {
    //   this.$store.commit('addCounter');
    // }
    // Actions 를 이용할 때
    addCounter() {
      console.log(this.abc);
      this.$store.dispatch('addCounter');
    },
    subCounter() {
      this.$store.dispatch('subCounter'); 
    }
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
