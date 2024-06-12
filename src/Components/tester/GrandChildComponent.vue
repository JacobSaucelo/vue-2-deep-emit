<template>
  <div>
    <ReusablesCustomInput label="Name" v-model="formData.name" />
    <ReusablesCustomInput label="Age" v-model="formData.age" />
    <ReusablesCustomInput label="Sex" v-model="formData.sex" />
  </div>
</template>

<script>
import ReusablesCustomInput from "./ReusablesCustomInput.vue";

export default {
  components: {
    ReusablesCustomInput,
  },
  props: {
    value: Object,
  },
  computed: {
    formData: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit("input", newValue);
      },
    },
  },
};
</script>
