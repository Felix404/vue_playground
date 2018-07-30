<template>

    <div id="content">
        <div>
            <Sidebar></Sidebar>
        </div>
        <div>
            <PostBox></PostBox>
            <Newsfeed></Newsfeed>
        </div>
        <div>
            <Rightside></Rightside>
        </div>



    </div>

</template>

<script>

import Sidebar from './../Sidebar'
import PostBox from './../PostBox'
import Newsfeed from './../Newsfeed'
import Rightside from './../Rightside'

export default {
  components :{
    Sidebar,PostBox,Newsfeed,Rightside
  }
}
</script>

<style>
    #content {
        display: flex;
        justify-content: center;
        vertical-align: middle;
        width: 1224px;
        margin: auto;
    }
</style>
