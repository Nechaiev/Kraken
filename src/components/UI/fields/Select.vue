<!--<template>-->
<!--  <base-field :label="label">-->
<!--    <select class="w-full p-2.5 border-solid border-2 border-sky-100" v-model="selectedValue">-->
<!--      <option v-for="option in countryOptions" :key="option.value" :value="option.value">{{ option.label }}</option>-->
<!--    </select>-->
<!--  </base-field>-->
<!--</template>-->

<!--<script setup>-->
<!--import { ref } from 'vue';-->
<!--import BaseField from '@/components/UI/fields/BaseFieldWrapper.vue';-->

<!--const label = 'Country';-->
<!--const countryOptions = [-->
<!--  { label: "Ukraine", value: "ukraine" },-->
<!--  { label: "Terrorist", value: "russia" },-->
<!--  { label: "USA", value: "usa" },-->
<!--];-->
<!--const selectedValue = ref('');-->
<!--</script>-->
<template>
  <base-field :label="label">
    <select class="w-full p-2.5 border-solid border-2 border-sky-100" v-model="selectedValue">
      <option v-for="option in options" :key="option.value" :value="option.value">{{ option.label }}</option>
    </select>
  </base-field>
</template>

<script setup>
import { ref, defineProps } from 'vue';
import BaseField from '@/components/UI/fields/BaseFieldWrapper.vue';

const { label, options } = defineProps({
  label: String,
  options: Array,
});

const selectedValue = ref('');
</script>
