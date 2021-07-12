<template>
  <div class="m-auto">
    <h1 class="text-2xl text-center">DC Heros {{ herosCount }}</h1>
    <ul v-for="(hero, index) in heros" :key="hero.nme">
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
export default {
  data() {
    return {
      heros: [
        { name: "Super Man" },
        { name: "Super Women" },
        { name: "Flash" },
      ],
      newHero: "",
    };
  },
  computed: {
    herosCount: {
      get() {
        return this.heros.length;
      },
    },
  },
  methods: {
    addHero() {
      if (this.newHero) {
        this.heros.unshift({ name: this.newHero });
      }
      this.newHero = "";
    },
    remove(index) {
      this.heros = this.heros.filter((hero, i) => i != index);
    },
  },
  mounted() {
    this.$refs.newHeroRef.focus();
  }
};
</script>

<style>
</style>