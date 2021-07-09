<template>
  <AppHeader @open-Login-Modal="isLoginOpen = true" />
  <div class="w-full flex">    
    <router-view></router-view>
  </div>
  <loginModal v-if="isLoginOpen" @close-login="isLoginOpen = false" />
</template>
<script>
import AppHeader from "./components/AppHeader.vue";
import loginModal from "./components/loginModal.vue"
export default {
  components: { AppHeader,loginModal },
  data() {
        return{
            isLoginOpen:false
        }
    }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
