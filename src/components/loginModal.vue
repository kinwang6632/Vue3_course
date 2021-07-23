<template>
  <div v-if="isLoginOpen">
    <section
      @click="close"
      class="z-20 h-screen w-screen bg-gray-500 fixed top-0 opacity-50"
    ></section>
    <div class="absolute inset-0">
      <div class="flex h-full">
        <div class="z-30 m-auto bg-white p-2 rounded shadow w-1/3">
          <div class="p-2 border">
            <h1 class="text-2xl">Login</h1>
            <GoogleLogin
              class="flex m-auto"
              @close-login-from-google="close()"
            />

            <p class="my-3">Or</p>
            <form class="p-2 my-2" @submit.prevent="submit()">
              <div class="my-4">
                <label>Email or UserName</label>
                <input
                  ref="emailRef"
                  v-model="email"
                  type="text"
                  class="rounded shadow p-2 w-full"
                  placeholder="Enter your email or username"
                />
              </div>
              <div class="my-4">
                <label>Password</label>
                <input
                  v-model="password"
                  type="password"
                  class="rounded shadow p-2 w-full"
                  placeholder="Enter your password"
                />
              </div>
              <div class="my-4">
                <button
                  type="submit"
                  border
                  class="
                    w-full
                    rounded
                    shadow-md
                    bg-gradient-to-tr
                    from-red-700
                    to-pink-500
                    text-white
                    p-2
                  "
                >
                  <span v-if="!isLoading"> Login </span>
                  <span v-else>⌛</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "../utilites/firebase";
import GoogleLogin from "../components/Login/GoogleLogin.vue";
export default {
  components: { GoogleLogin },
  data() {
    return {
      email: "khalid181632@hotmail.com",
      password: "password",
      isLoading: false,
    };
  },
  computed: {
    /*
    isLoginOpen() {
      return this.$store.state.isLoginOpen;
    }, */
    isLoginOpen: {
      get()  {
        
        return this.$store.state.isLoginOpen;
      },
      set() {
        console.log('set')
      }
      
    },
    
  },
  
  mounted() {
  
    
    //console.log(this.$refs)
    //this.$refs.emailRef.focus();
    //const inputEmail = this.$refs.emailRef;
    //inputEmail.focus();
  },
  unmounted() {
    console.log('login umoumnt')
  },
  methods: {
    submit() {
      this.isLoading = true;
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          //      console.log(res);
          this.email = "";
          this.password = "";
          this.isLoading = false;
          this.close();
        })
        .catch((e) => {
          console.log(e);
          this.isLoading = true;
        });
    },
    close() {
      this.$store.commit('setLoginModal',false)

    },
  },
};
</script>

<style>
</style>