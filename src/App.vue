<template>
  <div id="app">
    <login v-show="loginbol" @login="login"></login>
    <div class="show" v-if="indexbol">
      <router-view ></router-view>
    </div>

  </div>
</template>

<script>
  import login from './components/Login'
export default {
  name: 'App',
  data(){
       return {
         loginbol:true,
         indexbol:false
       }

  },
  created: function() {
    if (sessionStorage.pwd) {
      this.loginbol=false;
      this.indexbol=true
    }else{
      this.loginbol=true;
      this.indexbol=false
    }


  },


  components: {
    login
  },
  methods:{
    login(val){
      this.loginbol=val.loginbol
      this.indexbol=val.indexbol
    }
    }
}
</script>

<style>
 #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  margin-top: 20px;
}
</style>
