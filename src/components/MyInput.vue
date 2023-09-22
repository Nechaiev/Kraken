<template>
  <div >
    <InputWrapper>
      <template #label>
        <label v-if="showLabel">Label text</label>
      </template>
      <input :value="modelValue" @input="handleInput" placeholder="Enter 'ukrofashist'" />
      <template #error>
        <div class="error" v-if="showError">False text</div>
      </template>
      <template #helper-text>
        <div v-if="showHelperText">Auxiliary text</div>
      </template>
    </InputWrapper>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import debounce from "lodash.debounce";
import InputWrapper from "./InputWrapper.vue";

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
const showLabel = false;
const showError = false;
const showHelperText = false; 
</script>