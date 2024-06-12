<template>
  <div>
    <GrandChildComponent v-model="formData" />
  </div>
</template>

<script>
import GrandChildComponent from "./GrandChildComponent.vue";

export default {
  components: {
    GrandChildComponent,
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
