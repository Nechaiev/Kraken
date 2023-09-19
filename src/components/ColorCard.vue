<template>
  <li class="">
    <div class="w-[100px] h-[100px]" :class="classColor"></div>
    <div class="">{{ title }}</div>
    <div class="">{{ description }}</div>
  </li>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  classColor: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    validator(value) {
      return value.length >= 6;
    },
  },
});
</script>

<style></style>
