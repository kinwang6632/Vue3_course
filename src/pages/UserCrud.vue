<template>
  <section class="flex w-full">
    <div class="m-auto">
      <div class="mt-10">
        <table>
          <thead>
            <tr>
              <th class="px-4 py-2 border">ID</th>
              <th class="px-4 py-2 border">Avatar</th>
              <th class="px-4 py-2 border">First Name</th>
              <th class="px-4 py-2 border">Last Name</th>
              <th class="px-4 py-2 border">Email</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in state.users.data" :key="user.id">
              <td class="border px-4 py-2">
                {{ user.id }}
              </td>
              <td class="border px-4 py-2">
                <img
                  :src="user.avatar"
                  :alt="user.first_name"
                  width="50"
                  class="rounded-full"
                />
              </td>
              <td class="border px-4 py-2">
                {{ user.first_name }}
              </td>
              <td class="border px-4 py-2">
                {{ user.last_name }}
              </td>
              <td class="border px-4 py-2">
                {{ user.email }}
              </td>
            </tr>
          </tbody>
        </table>
        <div class="flex justify-between">
          <button
            class="px-3 py-2 border rounded"
            @click="prev"
            :disabled="state.users.page === 1"
            :class="state.users.page === 1 ? 'bg-gray-100' : 'hover:shadow'"
          >
            Prev
          </button>
          <button
            class="px-3 py-2 border rounded"
            @click="next"
            :disabled="state.users.page === state.users.total_pages"
            :class="
              state.users.page === state.users.total_pages
                ? 'bg-gray-100'
                : 'hover:shadow'
            "
          >
            Next
          </button>
        </div>
        <input type="text" ref="input" @input="change" @keydown="keydown" />
      </div>
    </div>
  </section>
  <teleport to="body">
    <Modal v-if="isModalOpen">
      <template #title>
        Add New User
      </template>
    </Modal>
  </teleport>
</template>

<script>
import { onMounted, reactive, ref } from "vue";
import axios from "../plugins/axios";
import Modal from '../components/Modal.vue';
export default {
  components: { Modal },
  setup() {
    const input = ref("");
    const isModalOpen = ref(true)
    const state = reactive({
      users: [],
      inputValue: "",
      backkey: false,
    });
    onMounted(async () => {
      const { data } = await axios.get(`/users`);
      state.users = data;
      console.log(state.users);
      state.inputValue = "";
      input.value.focus();
      input.value.value = "    /  /  ";
      input.value.selectionStart = 0;
      input.value.selectionEnd = 0;
    });
    function change() {
      let start = input.value.selectionStart;
      if (!state.backkey) {
        if (start === 4 || start === 7) {
          start += 1;
        }
      } else {
        //start-=1
        if (start === 5 || start === 8 || start == 4) {
          start -= 1;
        }
      }
      state.inputValue = state.inputValue.replace(/[^0-9]/g, "");
      let value = state.inputValue + "        ";

      input.value.value =
        value.substr(0, 4) +
        "/" +
        value.substr(4, 2) +
        "/" +
        value.substr(6, 2);
      input.value.selectionStart = start;
      input.value.selectionEnd = start;
      state.backkey = false;
      // let value = input.value.value
      // value = value.substr(0,4) + '/' + value.substr(6,2)
      //console.log(value)
      //let value = input.value;
      //value = value.replace(/D+/g,'');

      //input.value.selectionStart = 1
      //input.value.selectionEnd = 1
      // console.log(input.value.selectionStart)
    }
    function keydown(e) {
      let start = input.value.selectionStart;
      const allowKey = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "Backspace",
      ];
      if (!allowKey.includes(e.key)) {
        console.log("return false");
        return false;
      }
      if (e.key === "Backspace") {
        let charAry = Array.from(state.inputValue);

        let o = 0;
        o = start;
        if (start === 10) {
          o = 7;
        }
        if (start === 9) {
          o = 6;
        }

        console.log("position:" + o);
        charAry[o] = "X";
        console.log(charAry);
        state.inputValue = state.inputValue.substr(
          0,
          state.inputValue.length - 1
        );
        input.value.selectionStart = start;
        input.value.selectionEnd = start;
        state.backkey = true;
      } else {
        state.inputValue = state.inputValue + e.key;
      }
      //value = value + e.key;
      state.inputValue = state.inputValue.replace(/[^0-9]/g, "");
      state.inputValue = state.inputValue.replace(/\//g, "");
      //value = value.substr(0,4) + '/' + value.substr(5,2)
      //console.log(value)
    }
    async function next() {
      const { data } = await axios.get(`/users?page=2`);
      state.users = data;
    }
    async function prev() {
      const { data } = await axios.get(`/users?page=1`);
      state.users = data;
    }
    return { state, next, prev, change, input, keydown,isModalOpen };
  },
};
</script>

<style>
</style>