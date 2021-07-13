<template>
  <div class="m-auto">
    <h1 class="text-2xl text-center">DC Heros {{ herosCount }}</h1>
    <ul v-for="(hero, index) in dcHeros" :key="hero.nme">
      <li class="flex justify-between">
        <div>
          {{ hero.name }}
        </div>
        <button @click="remove(index)">x</button>
        <!-- <input type="text"> -->
      </li>
    </ul>
    <form class="m-10" @submit.prevent="addHero">
      <input
        class="border rounded"
        v-model.trim="newHero"
        type="text"
        placeholder="Type Hero Name Here"
        ref="newHeroRef"
      />
      <button
        class="
          border
          rounded
          bg-gradient-to-tr
          from-red-700
          to-pink-500
          text-white
        "
        type="summit"
      >
        Add Hero
      </button>
    </form>
  </div>
</template>

<script>
import { computed, onMounted, ref } from "vue";
export default {
  setup() {
    const newHeroRef = ref("");
    const newHero = ref("");
    const dcHeros = ref([
      { name: "Super Man" },
      { name: "Super Women" },
      { name: "Flash" },
    ]);
    onMounted(() => {
      newHeroRef.value.focus();
    });
    const herosCount = computed({
      get() {
        return dcHeros.value.length;
      },
    }) 
    
    function remove(index) {
      dcHeros.value = dcHeros.value.filter((hero, i) => i != index);
    }
    function addHero() {
      if (newHero.value) {
        dcHeros.value.unshift({ name: newHero.value });
      }
      newHero.value = "";
    }

    return { dcHeros: dcHeros, newHero, remove, addHero,newHeroRef,herosCount };
  },

  
  
};
</script>

<style>
</style>