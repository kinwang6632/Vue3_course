<template>
  <section class="my-5">
    <button class="border px-2 rounded" @click="loginWithGoogle">
      Login with Google
    </button>
  </section>
</template>

<script>
import firebase from "../../utilites/firebase"
export default {
  methods: {
    loginWithGoogle() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(() => {
          //this.close();
          this.$emit("close-login-from-google");
        })
        .catch(() => {
          //console.log(error);
        });
    },
  },
};
</script>

<style>
</style>