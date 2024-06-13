<template>
  <div id="app">
    <!-- <Nauur /> -->
    <!-- <NhrCreateMain /> -->
    <h1>{{ this.$store.state.count }}</h1>
    <button @click="handleIncrement">increment</button>
  </div>
</template>

<script>
// import NhrCreateMain from "./Components/nhr/Create/Create.Main.vue";
// import Nauur from "./Components/tester/main.vue";

export default {
  components: {
    // NhrCreateMain,
    // Nauur,
  },

  methods: {
    handleIncrement() {
      this.$store.commit("increment");
    },
  },
};
</script>

<style scoped></style>
