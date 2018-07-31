<template>
  <div class="maincontent-container">
    <PostBox></PostBox>
    <Newsfeed v-bind:initialPosts="6"></Newsfeed>
  </div>
</template>

<script>

import Newsfeed from './Newsfeed'
import PostBox from './PostBox'

export default {
  components :{
    PostBox,Newsfeed
  }
}
</script>

<style>
.maincontent-container {
    text-align: center;
     width: 100%;
      padding: 20px;
}
.maincontent-container > ul {

    list-style: none;
    padding: 0;
}
</style>
