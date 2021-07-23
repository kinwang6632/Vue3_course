<template>
  <div class="w-full text-justify">
    <nav
      class="
        w-full
        bg-gradient-to-r
        from-blue-800
        to-blue-600
        text-white
        px-4
        py-2
      "
    >
      <router-link
        v-for="item in list"
        :to="item.to"
        :key="item.to"
        class="mx-2"
        >{{ item.title }}</router-link
      >
      <button v-if="isLoggedIn" class="mx-2" @click="logout">Logout</button>
      <button v-else class="mx-2" @click="openLogin">
          Login

      </button>
    </nav>
  </div>
</template>

<script>
import firebase from "../utilites/firebase";
export default {
  //props:{isLoggedIn:{type:Boolean,required:true}},
  data() {
    return {
      list: [
        { title: "Home", to: "/Home" },
        //{ title: "Home1",to:"/Home1"},
        { title: "DC Heros", to: "/dc-heros" },
        { title: "Calendar", to: "/calendar" },
        { title: "Markdown", to: "/markdown" },
        { title: "Slider", to: "/slider-carousel" },
        { title: "Calculator", to: "/calculator" },
        { title: "Modal", to: "/reuseable-modal" },
        { title: "Chat", to: "/Chat" },
        { title: "User Crud", to: "/user-crud" },


      ],
    };
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          //console.log(res + ' success Logout')
        })
        .catch((error) => {
          console.log(error)
        });
    },
    openLogin() {
      this.$store.commit('setLoginModal',true)
      
    }
  },
  computed:{
    isLoggedIn() {
      return this.$store.state.isLoggedIn
    },
  },
};
</script>
  
<style>
</style>