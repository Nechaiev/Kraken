<template>
  <component
      :is="props.as"
      :disabled="props.disabled"
      :class="buttonClass">
    <my-loader v-if="loading"/>

    <component
        :is="props.leftIcon"
        :class="[
            'w-5 h-5 mr-2',
            props.loading && 'invisible'
            ]"

    />
    <span :class="[
            props.loading && 'invisible'
            ]">
      <slot/>
    </span>
    <component
        :is="props.rightIcon"
        :class="[
            'w-5 h-5 ml-2',
            props.loading && 'invisible'
            ]"/>
  </component>
</template>

<script setup>
import {computed} from "vue";
import {cva} from "class-variance-authority";
import MyLoader from "@/components/UI/fields/MyLoader.vue";

const buttonClass = computed(() => {
  return cva("inline-flex justify-center items-center text-sm rounded min-h-[32px] px-3 py-0.5 font-semibold ", {
    variants: {
      intent: {
        primary: "bg-black text-white hover:bg-sky-700 ",
        secondary: "bg-black/5 hover:bg-black/10 text-gray-600",
        danger: "bg-pink-500 text-white hover:bg-pink-300",
        text: "text-gray-700 hover:bg-black/5"
      },
      disabled: {
        true: "!bg-gray-100 !text-gray-400 cursor-not-allowed"
      }
    }
  })({
    intent: props.intent,
    disabled: props.disabled,
  })
})

const props = defineProps({
  leftIcon: Object,
  rightIcon: Object,
  loading: Boolean,
  disabled: Boolean,
  as: {
    type: [String, Object],
    default: 'button',
  },
  intent: {
    type: String,
    validator: (val) => ["primary", "secondary", "danger", "text"].includes(val),
    default: "secondary"
  },
})
</script>