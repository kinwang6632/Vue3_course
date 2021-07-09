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
      <button class="mx-2" @click="$emit('open-Login-Modal')">Login</button>
      <button class="mx-2" @click="logout">Logout</button>
    </nav>
  </div>
</template>

<script>
import firebase from "../utilites/firebase";
export default {
  data() {
    return {
      list: [
        { title: "Home", to: "/Home" },
        //{ title: "Home1",to:"/Home1"},
        { title: "DC Heros", to: "/dc-heros" },
        { title: "Calendar", to: "/calendar" },
        { title: "Markdown", to: "/markdown" },
        { title: "Slider Carousel", to: "/slider" },
      ],
    };
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then((res) => {
          console.log(res)
        })
        .catch((error) => {
          console.log(error)
        });
    },
  },
};
</script>
  
<style>
</style>