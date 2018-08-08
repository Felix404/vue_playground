<template>
  <div>
    <Post v-for="post in posts" :key="post.id" v-bind:post="post"></Post>
  </div>
  


</template>

<script>

import Post from './Post'

export default {
  props: ['initialPosts'],
  data () {
    let result = {posts:[]};
    
    for(let id=0; id < this.initialPosts;id++) {
      result.posts[id] = this.getRandomPost(id);
    }
    return result;
  },
  methods: {
    getRandomPost(number){
      return {
        id:number, 
        owner:"random name" + number, 
        content: "random content" + number};
    }
  },
  components :{
    Post
  },
}
</script>

<style>


</style>
