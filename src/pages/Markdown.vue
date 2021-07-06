<template>
  <div class="flex w-full flex-wrap">
    <h1 class="w-full text-3xl my-4">Markdown App</h1>
    <section class="flex m-auto w-10/12 text-justify h-screen">
      <article class="w-1/2 border">
        <textarea class="w-full h-full" v-model="text"></textarea>
      </article>
      <article class="w-1/2 border bg-gray-100">{{marked(text)}}</article>
    </section>
  </div>
</template>

<script>
import marked from 'marked'
export default {
  data() {
    return { text: "", };
  },
};
</script>

<style>
</style>