<template>
  <div class="flex w-full flex-wrap">
    <h1 class="w-full text-3xl my-4">Markdown App</h1>
    <section class="flex m-auto w-10/12 text-justify h-screen">
      <article class="w-1/2 border">
        <textarea
          class="w-full h-full"
          v-bind:value="text"
          @input="update"
        ></textarea>
      </article>
      <article class="w-1/2 border bg-gray-100" v-html="markedText"></article>
    </section>
    <button @click="calltest()">call test</button>
  </div>
</template>

<script>
import marked from "marked";
import debounce from '../utilites/mixins/debounce'
export default {
  mixins:[debounce],
  data() {
    return {
      text: "",
      
    };
  },
  computed: {
    markedText() {
      return marked(this.text);
    },
  },
  methods: {
    update(e) {
      const task = () => {
        this.text = e.target.value
      }
      this.debounce(task,500)
    },
    
   
  },
};
</script>

<style>
</style>