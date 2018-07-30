<template>
    <div class="header-bar">{{greeting}}</div>
</template>

<script>

module.exports = {
  data: function () {
    return {
      greeting: 'Header'
    }
  }
}

</script>

<style scoped>
   .header-bar {
    width: 100%;
    text-align: center;
    border: solid 1px;
  }
</style>
