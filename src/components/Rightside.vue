<template>

    <div class="rightside-container">
      <p>{{ msg }}</p>
    </div>

</template>

<script>

export default {
  data () {
    return {
      msg: 'rightside'
    }
  }
}
</script>

<style>
  .rightside-container {
    width: 230px;
    text-align: center;
    flex-shrink: 0;
  }
</style>
