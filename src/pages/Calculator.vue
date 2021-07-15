<template>
  <section class="flex w-full">
    <div class="m-auto">
      <h1 class="text-2xl text-center">Calculator</h1>
      <p
        class="text-3xl text-right mt-10 w-32 h-11 overflow-x-scroll"
        style="direction: rtl"
      >
        {{ currentNum }}
      </p>
      <div class="h-10">
        <small v-if="selectedOperation"
          >{{ prevNum }} {{ selectedOperation }} {{ currentNum }}</small
        >
      </div>
      <div class="grid grid-cols-4 gap-1">
        <button
          @click="pressed('1')"
          class="p-2 border w-10 h-10 rounded shadow"
        >
          1
        </button>
        <button
          @click="pressed('2')"
          class="p-2 border w-10 h-10 rounded shadow"
        >
          2
        </button>
        <button
          @click="pressed('3')"
          class="p-2 border w-10 h-10 rounded shadow"
        >
          3
        </button>
        <button
          @click="pressed('+')"
          class="p-2 border w-10 h-10 rounded shadow"
        >
          +
        </button>
        <button
          @click="pressed('4')"
          class="p-2 border w-10 h-10 rounded shadow"
        >
          4
        </button>
        <button
          @click="pressed('5')"
          class="p-2 border w-10 h-10 rounded shadow"
        >
          5
        </button>
        <button
          @click="pressed('6')"
          class="p-2 border w-10 h-10 rounded shadow"
        >
          6
        </button>
        <button
          @click="pressed('-')"
          class="p-2 border w-10 h-10 rounded shadow"
        >
          -
        </button>
        <button
          @click="pressed('7')"
          class="p-2 border w-10 h-10 rounded shadow"
        >
          7
        </button>
        <button
          @click="pressed('8')"
          class="p-2 border w-10 h-10 rounded shadow"
        >
          8
        </button>
        <button
          @click="pressed('9')"
          class="p-2 border w-10 h-10 rounded shadow"
        >
          9
        </button>
        <button
          @click="pressed('*')"
          class="p-2 border w-10 h-10 rounded shadow"
        >
          *
        </button>
        <button @click="pressed('c')" class="p-2 border h-10 rounded shadow">
          C
        </button>
        <button @click="pressed('0')" class="p-2 border h-10 rounded shadow">
          0
        </button>
        <button
          @click="pressed('=')"
          class="p-2 border w-10 h-10 rounded shadow"
        >
          =
        </button>
        <button
          @click="pressed('/')"
          class="p-2 border w-10 h-10 rounded shadow"
        >
          /
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted, ref } from "vue";
export default {
  setup() {
    //const calculation = ref("");
    const operations = ["+", "-", "*", "/"];
    const currentNum = ref("");
    const numbers = ['1','2','3','4','5','6','7','8','9','0']
    const prevNum = ref("");
    const selectedOperation = ref("");
    function pressed(value) {
      if (value === "=" || value == "Enter") {
        calculate();
      } else if (value === "c") {
        clear();
      } else if (operations.includes(value)) {
        applyOperaton(value);
      } else if(numbers.includes(value)) {
        appendNumber(value);
      }
    }
    function clear() {
      currentNum.value = "";
      prevNum.value = "";
      selectedOperation.value = "";
    }
    function applyOperaton(value) {
      prevNum.value = currentNum.value;
      currentNum.value = "";
      selectedOperation.value = value;
    }
    function calculate() {
      if (selectedOperation.value === "*") multiply();
      else if (selectedOperation.value === "/") divide();
      else if (selectedOperation.value === "+") sum();
      else if (selectedOperation.value === "-") subtract();
      prevNum.value = "";
      selectedOperation.value = "";
    }
    function multiply() {
      currentNum.value = currentNum.value * prevNum.value;
    }
    function divide() {
      currentNum.value = +prevNum.value / +currentNum.value;
    }
    function sum() {
      currentNum.value = +currentNum.value + +prevNum.value;
    }
    function subtract() {
      currentNum.value = +prevNum.value - currentNum.value;
    }
    function appendNumber(value) {
      currentNum.value = currentNum.value + value;
    }
    onMounted(()=>{
      window.addEventListener('keydown',(e)=>{
        pressed(e.key)
      })
      
    })
    return { currentNum, pressed, selectedOperation, prevNum };
  },
};
</script>

<style>
</style>