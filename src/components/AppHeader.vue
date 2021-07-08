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
      <router-link v-for="item in list" :to="item.to" :key="item.to" class="mx-2">{{
        item.title
      }}</router-link>
      <button class="mx-2">Login</button>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [    
        { title: "Home",to:"/Home"},
        //{ title: "Home1",to:"/Home1"},
        { title: "DC Heros", to: "/dc-heros" },
        { title: "Calendar", to: "/calendar" },
        { title: "Markdown", to: "/markdown" },
        { title: "Slider Carousel", to: "/slider" },
      ],
    };
  },
};
</script>
  
<style>
</style>