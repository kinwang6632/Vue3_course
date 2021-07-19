<template>
  <div class="flex w-full flex-wrap">
    <h1 class="w-full text-3xl my-4">Markdown App</h1>
    <section class="flex m-auto w-10/12 text-justify h-screen">
      <article class="w-1/2 border">
        <textarea
          ref="markdownTextArea"
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
import useDebounce from '../utilites/Composition/useDebounce'
export default {
  
  // beforeCreate() {
  //   console.log("befor Create");
  // },
  // created() {
  //   console.log("Created");
  // },
  // beforeMount() {
  //   console.log("befor mount");
  // },
  // mounted() {
  //   console.log("befor mounted");
  // },
  // beforeUnmount() {
  //   console.log("befor Unmount");
  // },
  // unmounted() {
  //   console.log("unmounted");
  // },
  beforeUpdate() {
    console.log("befor update");
  },
  updated() {
    console.log("updated");
  },
  
  data() {
    return {
      text: "",
      debounce :"",
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
        this.text = e.target.value;
      };
      this.debounce(task, 500);
    },
  },
  mounted() {
    const {debounce} = useDebounce()
    this.debounce = debounce
    this.$refs.markdownTextArea.focus();
  }
};
</script>

<style>
</style>