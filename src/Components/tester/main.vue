<template>
  <div>
    <ChildComponent v-model:name="name" v-model:age="age" v-model:sex="sex" />
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
      name: "",
      age: "",
      sex: "",
    };
  },
};
</script>
