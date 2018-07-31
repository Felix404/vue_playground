<template>

    <div class="sidebar-container">

      <ProfilInfoBox></ProfilInfoBox>
      <Menu></Menu>

      <p>{{ msg }}</p>
    </div>

</template>

<script>
import ProfilInfoBox from './ProfilInfoBox'
import Menu from './Menu'

export default {
  components :{
    ProfilInfoBox,Menu
  },
  data () {
    return {
      msg: 'sidebar'
    }
  }
}
</script>

<style>
  .sidebar-container {
    width: 230px;
    text-align: center;
    flex-shrink: 0;
  }
</style>
