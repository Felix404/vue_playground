<template>

  <div class="post-container">
    <div>{{ post.owner }}</div>
    <div>{{ post.content }}</div>
  </div>
</template>

<script>

export default {
  name:'Post',
  props: ['post']
}
</script>

<style>
  .post-container {
    height: 350px;
  }
</style>
