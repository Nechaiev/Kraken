<template>
  <div class="mb-5">
    <label class="font-bold mr-4">{{ label }}</label>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
  },
};
</script>

<style scoped>

</style>
