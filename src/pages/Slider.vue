<template>
  <div class="flex w-full flex-wrap">
    <div class="absolute w-full" v-for="(color, index) in sliders" :key="color">
      <transition name="fade">
        <div
          :class="color"
          style="height: 350px"
          v-if="currentSlide == index"
        ></div>
      </transition>
    </div>
    <div class="absolute w-full flex justify-center" style="height: 340px">
      <div class="absolute bottom-0 flex justify-center">
        <div
          v-for="(slider,index) in sliders"
          :key="slider"
          @click="makeActive(index)"
          :class="currentSlide == index ? 'bg-gray-700':'bg-gray-300'"
          class="w-4 mx-2 h-4 rounded-full cursor-pointer shadow-m"
        ></div>
      </div>
    </div>
    <div class="my-10 flex w-full">
      <div class="m-auto">
        <transition name="fade">
          <h1 v-if="isTitleShowing">Slider Carosel</h1>
        </transition>
        <button
          @click="isTitleShowing = !isTitleShowing"
          class="px-2 rounded border"
        >
          Toggle Text
        </button>
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
      sliders: ["bg-blue-600", "bg-yellow-600", "bg-red-600"],
      isTitleShowing: true,
    };
  },
  methods:{
    makeActive(index) {
      this.currentSlide = index
    }
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
.fade-enter-active,
.fade-leave-active {
  /* transition: opacity 0.5s ease; */
  transition: all 1s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translate(-100%);
}
.fade-leave-to {
  opacity: 0;
  transform: translate(100%);
}
</style>