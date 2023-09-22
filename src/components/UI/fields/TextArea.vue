<template>
  <base-field class="p-2.5 border-solid border-2 border-sky-100 resize-y" :label="label">
    <textarea v-model="value"></textarea>
  </base-field>
</template>

<script setup>
import { ref } from 'vue';
import BaseField from '@/components/ui/fields/BaseField.vue';

const label = 'Comment';
const value = ref('');
</script>