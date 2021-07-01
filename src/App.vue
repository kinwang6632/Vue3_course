<template>
  <div>
    <AppHeader />
    <div class="w-full flex">
      <!-- <DcHeros /> -->
      <Calendar />
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";
import Calendar from "./components/Calendar";

// import DcHeros from "./components/DcHeros.vue";
export default {
  components: { AppHeader, Calendar },
};
</script>

