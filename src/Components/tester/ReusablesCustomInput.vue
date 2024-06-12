<template>
  <div>
    <label>{{ label }}</label>
    <input v-model="value" />
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    value: String,
  },
};
</script>
