<template>

    <div>
      <ul class="menu-container">
        <li class="menu-item" v-for="entry in entries" :key="entry.name">
          <p>{{entry.icon}}</p>
          <p>{{entry.name}}</p>
        </li>

      </ul>
    </div>

</template>

<script>

export default {
  data () {
    return {
      entries : [
        {name:"point1",icon:"icon1",link:"link1"},
        {name:"point2",icon:"icon2",link:"link2"},
        {name:"point3",icon:"icon3",link:"link3"},
        {name:"point4",icon:"icon4",link:"link4"}
      ]
    }
  }
}
</script>

<style>
  .menu-container {   
    list-style: none;
    padding: 0;
  }
  .menu-item {
    text-align: left;
    border: solid 1px;
    margin: 5px;
  }
  .menu-item p {
    display: inline-block;
  }
  
</style>
