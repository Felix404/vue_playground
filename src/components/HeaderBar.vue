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
    height: 70px;
    text-align: center;
    border: solid 1px;
  }
</style>
