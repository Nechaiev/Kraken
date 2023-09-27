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
</script>