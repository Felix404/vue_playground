<template>

  <div class="post-container">
    <div>{{ post.userId }}</div>
    <div>{{ post.id }}</div>
    <div>{{ post.title }}</div>
    <div>{{ post.body }}</div>
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
