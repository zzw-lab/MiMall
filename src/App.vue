<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import jsonp from 'jsonp'
import storage from './storage'
export default {
  name: 'App',
  components: {
    
  },
  data(){
    return{
     
    }
  },
  mounted(){
    // let url= "/pay/cartorder";
    // jsonp(url,()=>{

    // })

    // storage.setItem('user',{a:1});
    storage.setItem('abc',{a:1},'user');
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
