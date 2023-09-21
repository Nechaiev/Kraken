<template>
  <div>
    <slot name="label"></slot>
    <slot></slot>
    <slot name="error"></slot>
    <slot name="helper-text"></slot>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  label: String,
  error: String,
  helperText: String,
});
</script>

<style scoped>
</style>

