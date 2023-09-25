<template>
  <InputWrapper>
    <template #label>
    </template>
    <input :value="modelValue" @input="handleInput" placeholder="Enter 'ukrofashist'" />
    <template #error>
    </template>
    <template #helper-text>
    </template>
  </InputWrapper>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import debounce from "lodash.debounce";
import InputWrapper from "@/components/UI/fields/BaseFieldWrapper.vue";

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
// Change to true if no help text is required
let showLabel = false;
let showError = false;
let showHelperText = false;
</script>