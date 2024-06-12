<template>
  <div>
    <ChildComponent v-model="formData" />
  </div>
</template>

<script>
import ChildComponent from "./ChildComponent.vue";

export default {
  components: {
    ChildComponent,
  },
  data() {
    return {
      formData: {
        name: "",
        age: "",
        sex: "",
      },
    };
  },
};
</script>
