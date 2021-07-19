<template>
  <section>
    <div v-for="chat in state.chats.split(',')" :key="chat">
      {{ chat }}
    </div>
  </section>
</template>

<script>
import { onMounted, reactive } from "vue";
import firebase from "../utilites/firebase";
export default {
  setup() {
    const state = reactive({
      chats:''
    })
    onMounted(async () => {
      const db = firebase.database();
      const collection = db.ref("chats");
      const data = await collection.once("value");
        state.chats = data.val();

      const realTimeData = collection.on('value',(snapshot) =>{
        state.chats = snapshot.val()
      }) 

    });
    return { state };
  },
};
</script>

<style>
</style>