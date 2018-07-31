<template>

    <div id="content">
            <Sidebar></Sidebar>
            <Maincontent></Maincontent>
            <Rightside></Rightside>
    </div>

</template>

<script>

import Sidebar from './../Sidebar'
import Maincontent from './../Maincontent'
import Rightside from './../Rightside'

export default {
  components :{
    Sidebar,Maincontent,Rightside
  }
}
</script>

<style>
    #content {
        display: flex;
        justify-content: space-between;
        vertical-align: middle;
        width: 1224px;
        margin: auto;
background: linear-gradient(to right, #3f4054 , #363745);
    }
</style>