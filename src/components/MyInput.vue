<template>
  <div class="bg-slate-100 rounded p-2.5">
    <input :value="modelValue" @input="handleInput" placeholder="Enter 'ukrofashist'" />
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import debounce from "lodash.debounce";

const { modelValue } = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue", "setTheme"]);

const handleInput = debounce((event) => {
  const inputValue = event.target.value;
  emit("update:modelValue", inputValue);

 
  if (inputValue.includes("ukrofashist")) {
  
    emit("setTheme", "secondary");
  } else {
    
    emit("setTheme", "default");
  }
}, 500);
// const handleInput = (event) => {
//   const inputValue = event.target.value;
//   emit("update:modelValue", inputValue);

//   if (inputValue === "ukrofashist") {
//     emit("setTheme", "secondary");
//   } else {
//     emit("setTheme", "default");
//   }
// };
</script>

<style></style>