<template>
  <div id="app">
    <HeaderBar></HeaderBar>
    <Main></Main>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>

import HeaderBar from './components/HeaderBar'
import Main from './components/layouts/DefaultLayout'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App.'
    }
  },
  components :{
    HeaderBar,Main
  }
}
</script>

<style>
</style>
