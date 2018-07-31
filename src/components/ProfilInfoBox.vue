<template>

    <div class="profilinfobox">
      <div class="profilinfobox-img">
        picture
      </div>
      <div class="profilinfobox-text">
        <p>{{name}}</p>
        <p>other stuff</p>
      </div>
    </div>

</template>

<script>

export default {
  data () {
    return {
    name: "Felix Schmidt"
    }
  }
}
</script>

<style>
  .profilinfobox {
    display: flex;
      margin: 5px;
    border-radius: 7px;
    background-color: #2b2c3b;
  }
  .profilinfobox-img {
    height: 64px;
    width: 64px;
  }
  .profilinfobox-text {
    text-align: center;
  }
  .profilinfobox-text p{
    margin: 0;
  }
</style>
