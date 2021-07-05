<template>
  <div class="w-full">
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
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { title: "DC Heros", to: "/dc-heros" },
        { title: "Calendar", to: "/calendar" },
        { title: "Markdown", to: "/markdown" },
      ],
    };
  },
};
</script>
  
<style>
</style>