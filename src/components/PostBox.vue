<template>

    <div class="postbox-container">
      <div class="postbox-options">options</div>
      <div  class="postbox-body">
        <div  class="postbox-img">
          picture
        </div>
        <div class="postbox-form">
          <div class="postbox-label">
            post something
          </div>
          <div  class="postbox-input">
            write here
          </div>
          
        </div>
      </div>
    </div>

</template>

<script>

export default {
  data () {
    return {
      msg: 'postbox'
    }
  }
}
</script>

<style>
  .postbox-container {
    display: flex;
    flex-direction: column;
  }
  .postbox-options {
    height: 30px;
  }
  .postbox-img {
    height: 64px;
    width: 64px;
    margin: 10px;
  }
  .postbox-body {
    display: flex;
  }
  .postbox-form {
    width: 100%;
    height: 150px;
     display: flex;
    flex-direction: column;
  }
  .postbox-input {
    height: 100%;
  }
  
</style>
