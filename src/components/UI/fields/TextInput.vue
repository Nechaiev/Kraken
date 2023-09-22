<template>
  <base-field class="p-2.5 border-solid border-2 border-sky-100 " :label="label">
    <input type="text" v-model="value" />
  </base-field>
</template>

<script setup>
import { ref } from 'vue';
import BaseField from '@/components/ui/fields/BaseField.vue';

const label = 'Name';
const value = ref('');
</script>