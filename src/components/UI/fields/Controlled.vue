<template>
  <base-field class="flex flex-col" :label="label">
    <label class="mb-1" v-for="option in options" :key="option.value">
      <input :type="isCheckbox ? 'checkbox' : 'radio'" :value="option.value" v-model="selectedValue" />
      {{ option.label }}
    </label>
  </base-field>
</template>

<script setup>
import { ref } from 'vue';
import BaseField from '@/components/ui/fields/BaseField.vue';

const label = 'Gender';
const options = [
  { label: 'Man', value: 'male' },
  { label: 'Woman', value: 'female' },
];
const isCheckbox = false; 
const selectedValue = ref('');
</script>