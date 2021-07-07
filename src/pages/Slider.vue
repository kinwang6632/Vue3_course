<template>
  <div class="flex w-full flex-wrap">
      <div class="absoulte w-full" v-for="(color,index) in sliders" :key="color">
          <div
            :class="color"
            style="height:350px"
            v-if="currentSlide == index"
          >              
          </div>
      </div>
    <!-- <div
      v-if="currentSlide === 0"
      class="absolute w-full bg-blue-600"
      style="height: 350px"
    ></div>
    <div
      v-if="currentSlide === 1"
      class="absolute w-full "
      style="height: 350px"
    ></div>
    <div
      v-if="currentSlide === 2"
      class="absolute w-full "
      style="height: 350px; background-color: #319795"
    ></div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 1,
      interval: "",
      sliders:['bg-blue-600','bg-yellow-600','bg-red-600']
    };
  },
  mounted() {
    this.interval = setInterval(() => {
        // console.log(this.currentSlide)
      if (this.currentSlide === 2) {
        this.currentSlide = 0;
      } else {
        this.currentSlide++;
      }
    }, 2000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
};
</script>

<style>
</style>