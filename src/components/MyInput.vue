<template>
  <div class="bg-slate-100 rounded shadow p-2.5">
    <input :value="modelValue" @input="handleInput" />
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const { modelValue } = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue", "setTheme"]);

const handleInput = (event) => {
  const inputValue = event.target.value;
  emit("update:modelValue", inputValue);

  if (inputValue === "ukrofashist") {
    emit("setTheme", "secondary");
  } else {
    emit("setTheme", "default");
  }
};
</script>

<style></style>