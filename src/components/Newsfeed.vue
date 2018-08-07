<template>
  <div>
    <Post v-for="post in posts" :key="post.id" v-bind:post="post"></Post>
  </div>
  


</template>

<script>

import Post from './Post'

export default {
  data () {
    return {
      loading: false
    }
  },
  computed: {
    posts () {
      return this.$store.state.posts
    }
  },
  components :{
    Post
  },
  created: function () {
      console.log(this.$store.state.posts);
    this.loading = true
    this.$store.dispatch('fetchPosts')
      .then(posts => {
        this.loading = false
      })
  }
}
</script>

<style>


</style>
