<template>
  <section
    @click="$emit('close-login')"
    class="z-20 h-screen w-screen bg-gray-500 fixed top-0 opacity-50"
  ></section>
  <div class="absolute inset-0">
    <div class="flex h-full">
      <div class="z-30 m-auto bg-white p-2 rounded shadow w-1/3">
        <div class="p-2 border">
          <h1 class="text-2xl">Login</h1>
          <form class="p-2 my-2" @submit.prevent="submit()">
            <div class="my-4">
              <label>Email or UserName</label>
              <input
                type="text"
                class="rounded shadow p-2 w-full"
                placeholder="Enter your email or username"
              />
            </div>
            <div class="my-4">
              <label>Password</label>
              <input
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
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    submit() {
      alert('yes')
    }
  }
};
</script>

<style>
</style>