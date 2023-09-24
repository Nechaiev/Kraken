<!--<template>-->
<!--  <base-field class="p-2.5 border-solid border-2 border-sky-100 resize-y" :label="label">-->
<!--    <textarea v-model="value"></textarea>-->
<!--  </base-field>-->
<!--</template>-->

<!--<script setup>-->
<!--import { ref } from 'vue';-->
<!--import BaseField from '@/components/UI/fields/BaseFieldWrapper.vue';-->

<!--const label = 'Comment';-->
<!--const value = ref('');-->
<!--</script>-->
<template>
  <base-field class="p-2.5 border-solid border-2 border-sky-100 resize-y" :label="label">
    <textarea :value="value" @input="updateValue"></textarea>
  </base-field>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';
import BaseField from '@/components/UI/fields/BaseFieldWrapper.vue';

const { label } = defineProps(['label']);
const value = ref('');

const emit = defineEmits();
const updateValue = (event) => {
  const newValue = event.target.value;
  value.value = newValue;
  emit('update:modelValue', newValue);
};
</script>
