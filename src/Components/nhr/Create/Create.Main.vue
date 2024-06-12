<template>
  <section>
    {{ this.inputValue }}

    <ReusablesCustomInput v-model="inputValue" />
  </section>
</template>

<script>
import ReusablesCustomInput from "./Components/Reusables.CustomInput.vue";

export default {
  components: {
    ReusablesCustomInput,
  },

  data() {
    return {
      userName: "adadsfsdfsf",
      inputValue: "",
    };
  },
};
</script>
