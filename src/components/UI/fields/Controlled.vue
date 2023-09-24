<template>
  <base-field-wrapper class="flex flex-col" :label="label">
    <label class="mb-1" v-for="option in options" :key="option.value">
      <input
          :type="isCheckbox ? 'checkbox' : 'radio'"
          :value="option.value"
          :checked="option.value === selectedValue"
          @input="updateSelectedValue(option.value)"
      />
      {{ option.label }}
    </label>
  </base-field-wrapper>
</template>

<script setup>
import { ref, defineProps } from 'vue';
import BaseFieldWrapper from '@/components/UI/fields/BaseFieldWrapper.vue';

const { label, options, isCheckbox } = defineProps({
  label: String,
  options: Array,
  isCheckbox: Boolean,
});

const selectedValue = ref('');

function updateSelectedValue(value) {
  selectedValue.value = value;
}
</script>
