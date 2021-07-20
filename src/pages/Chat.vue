<template>
  <section class="flex w-full">
    <div class="m-auto">
      <h1 class="text-center text-2xl">Real Time Chat</h1>
      <div class="border rounded-lg">
        <div class="h-64 p-2">
          <div
            v-for="chat in state.chats"
            :key="chat.message"
            class="w-full"
            :class="chat.UserId === state.userId ? 'text-right' : 'text-left'"
          >
            {{ chat.message }}
          </div>
        </div>
      </div>
      <div class="h-8 p-2">
        <input
          type="text"
          v-model="state.message"
          placeholder="Start Typing...."
          class="p-1 border rounded shadow"
          @keydown.enter="addMessage"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted, reactive } from "vue";
import firebase, { chatsRef } from "../utilites/firebase";
export default {
  setup() {
    const state = reactive({
      chats: [],
      message: "",
      userId: null,
      cha :[]
    });
    onMounted(async () => {
      //const db = firebase.database();
      chatsRef.on("child_added", (snapshot) => {
        state.userId = firebase.auth().currentUser.uid;
        
        state.chats.push({key:snapshot.key, ...snapshot.val()})
        //state.chats.push({...snapshot.val()})
        //console.log(snapshot.val());
        //state.chats = snapshot.val();
      });
    });
    function addMessage() {
      const newChat = chatsRef.push();
      newChat.set({ UserId: state.userId, message: state.message });
      state.message = "";
    }
    return { state, addMessage };
  },
};
</script>

<style>
</style>