<template>
  <AppHeader  />
  <div class="w-full flex">
    <router-view></router-view>
  </div>
  <teleport to="body">
    <loginModal  />
  </teleport>
</template>
<script>
import AppHeader from "./components/AppHeader.vue";
import loginModal from "./components/loginModal.vue";
import firebase from "./utilites/firebase";
export default {
  components: { AppHeader, loginModal },
  data() {
    return {
      
      
    };
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.commit('setIsLoggedIn',true)
        this.$store.commit('setAuthUser',user)
      } else {
        this.$store.commit('setIsLoggedIn',false)
        this.$store.commit('setAuthUser',{})

      }
    });
  },
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
