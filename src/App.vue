<template>
  <div id="app">
    <HeaderBar></HeaderBar>
    <!--Main></Main-->
    <router-view></router-view>
  </div>
</template>

<script>

import HeaderBar from './components/HeaderBar'
import Main from './views/DefaultLayout'
import router from './router'
import store from './store'

export default {
  name: 'app',
  router,
  data () {
    return {
      msg: 'Welcome to Your Vue.js App.'
    }
  },
  components :{
    HeaderBar,Main
  },
  store
}
</script>

<style>
  * {
    color:#85878a;
  }
  body {
    margin: 0;
  }
  div {
    border: solid 1px;
    margin: 2px;
  }
  #app {
    border: none;
    background: linear-gradient(to bottom right, #8d92a7 , #35384d);
    background-attachment: fixed;
    margin: 0;
  }
</style>
