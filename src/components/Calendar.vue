<template>
  <div class="m-auto">
    <h1 class="text-2xl my-2 text-center">Vue Calendar</h1>
    <section class="mx-5 flex justify-between">
      <h2 class="font-bold">{{ currentMonthName }}</h2>
      <h2 class="font-bold">{{ currentYear }}</h2>
    </section>

    <section class="flex my-2">
      <p
        class="text-center"
        style="width: 14.28%"
        v-for="day in days"
        :key="day"
      >
        {{ day }}
      </p>
    </section>
    <section class="flex flex-wrap">
      <p
        class="text-center"
        style="width: 14.28%"
        v-for="num in startDay()"
        :key="num"
      ></p>
      <p
        class="text-center"
        style="width: 14.28%"
        v-for="num in daysInMonth()"
        :key="num"
        :class="currenDateClass(num)"
      >
        {{ num }}
      </p>
    </section>
    <section class="flex justify-between my-4">
      <button @click="prev" class="px-2 border rounded">Prev</button>
      <button @click="next" class="px-2 border rounded">Next</button>
    </section>
  </div>
</template>
    
<script>
export default {
  data() {
    return {
      currentDate: new Date().getDate(),
      currentMonth: new Date().getMonth() + 1,
      currentYear: new Date().getFullYear(),
      days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    };
  },
  methods: {
    daysInMonth() {
      return new Date(this.currentYear, this.currentMonth, 0).getDate();
    },
    startDay() {
      return new Date(this.currentYear, this.currentMonth - 1, 1).getDay();
    },
    next() {
      if (this.currentMonth == 12) {
        this.currentMonth = 1;
        this.currentYear++;
      } else {
        this.currentMonth++;
      }
    },
    prev() {
      if (this.currentMonth === 1) {
        this.currentYear--;
        this.currentMonth = 12;
      } else {
        this.currentMonth--;
      }
    },
    currenDateClass(num) {
      const calendarFullDate = new Date(
        this.currentYear,
        this.currentMonth - 1,
        num
      ).toDateString();
      const currentFullDate = new Date().toDateString();
      const result =
        calendarFullDate === currentFullDate ? "text-yellow-300" : "";
      return result;
      //return  == new Date()
    },
  },
  computed: {
    currentMonthName() {
      return new Date(this.currentYear, this.currentMonth - 1).toLocaleString(
        "Default",
        {
          month: "long",
        }
      );
    },
  },
};
</script>
<style>
</style>