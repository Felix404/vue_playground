<template>

    <div>
      <ul class="menu-container">
        <li class="menu-item" v-for="entry in entries" :key="entry.name">

<router-link :to="entry.link"><i class="material-icons">{{entry.icon}}</i><span>{{entry.name}}</span></router-link>
          



        </li>

      </ul>
    </div>

</template>

<script>


export default {
  data () {
    return {
      entries : [
        {name:"News Feed",icon:"list",link:"/"},
        {name:"Nachrichten",icon:"mail",link:"/messenger"},
        {name:"Veranstaltungen",icon:"event",link:"/events"},
        {name:"Suche",icon:"search",link:"/search"}
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
