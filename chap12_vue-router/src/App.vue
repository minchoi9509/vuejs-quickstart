<template>
  <div id="app">
    <div class="header">
      <h1 class="headerText">(주)OpenSG</h1>
      <nav>
        <ul>
          <li>
            <!-- router-link : 하이퍼링크 생성, 클릭하면 URI 변경 -->
            <router-link to="/home">Home</router-link>
          </li>
          <li>
            <router-link to="/about">About</router-link>
          </li>
          <li>
            <router-link to="/contacts">Contacts</router-link>
          </li>
        </ul>
      </nav>
    </div>
    <div class="container">
      <!-- router-view : URI 경로에 따라 매핑한 컴포넌트가 나타남 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Home from './components/Home.vue';
import About from './components/About.vue';
import Contacts from './components/Contacts.vue';
import VueRouter from 'vue-router';
// import 구문을 이용해 vue-router를 참조


const router = new VueRouter({
  routes : [
    { path:'/', component: Home},
    { path:'/home', component: Home},
    { path:'/about', component: About},
    { path:'/contacts', component: Contacts}
  ]
})

// app 인스턴스 생성시 router 객체 정보 추가 
export default {
  name: 'app',
  router
}
</script>
<style>
  @import url("https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css");

  .header { background-color: aqua; padding: 10px 0px 0px 0px; }
  .headerText { padding: 0px 20px 0px 20px }
  ul { list-style-type: none; margin: 0; padding: 0; overflow: hidden; background-color: purple; }
  li { float : left; }
  li a { display: block; color: yellow; text-align: center; padding: 14px 16px; text-decoration: none; }
  li a:hover { background-color: aqua; color: black}
</style>
