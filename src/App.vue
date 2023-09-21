<template>
  <div class="text-6xl">hello world</div>

  <div
    :class="containerClasses"
    class="container bg-slate-100 flex flex-col gap-8 mx-auto"
  >
    <my-input v-model="message" @setTheme="onSetTheme" />
    <p class="pl-2">{{ message }}</p>
    <div class="mb-6 flex flex-wrap gap-3">
      <label v-for="theme in themes" :key="theme" class="flex flex-wrap gap-2">
        <input
          type="radio"
          :checked="theme === selectedTheme"
          name="theme"
          @click="onSetTheme(theme)"
          value="theme"
        />
        <span>{{ theme }}</span>
      </label>
    </div>
    <ul class="flex flex-wrap gap-8">
      <color-card title="Gradient" classColor="bg-gradient" />
    </ul>

    <ul class="flex flex-wrap gap-8">
      <color-card title="Blue" classColor="bg-blue" description="#DBE6ED" />
      <color-card
        title="Brand Blue"
        classColor="bg-brandBlue"
        description="#4288B5"
      />
      <color-card
        title="Blue 2"
        classColor="bg-blueSecond"
        description="#072E53"
      />
    </ul>

    <ul class="flex flex-wrap gap-8">
      <color-card title="Purple" classColor="bg-purple" description="#F4DCFF" />
      <color-card
        title="brand Purple"
        classColor="bg-brandPurple"
        description="#BA90CE"
      />
    </ul>

    <ul class="flex flex-wrap gap-8">
      <color-card title="red" classColor="bg-red" description="#F2E1E0" />
      <color-card
        title="red 2"
        classColor="bg-redSecond"
        description="#9B1C13"
      />
    </ul>

    <ul class="flex flex-wrap gap-8">
      <color-card title="Green" classColor="bg-green" description="#D1E7DD" />
      <color-card
        title="green 2"
        classColor="bg-greenSecond"
        description="#0F5132"
      />
    </ul>

    <ul class="flex flex-wrap gap-8">
      <color-card title="Gold" classColor="bg-gold" description="#FFF3CD" />
      <color-card
        title="Gold 2"
        classColor="bg-goldSecond"
        description="#664D03"
      />
    </ul>

    <ul class="flex flex-wrap gap-8">
      <color-card title="Light" classColor="bg-light" description="#FFFFFF" />
      <color-card title="Gray" classColor="bg-gray" description="#F6F6FA" />
      <color-card
        title="gray 2"
        classColor="bg-graySecond"
        description="#E9E9E9"
      />
      <color-card
        title="gray 3"
        classColor="bg-grayThird"
        description="#989898"
      />
      <color-card
        title="gray 4"
        classColor="bg-grayFourth"
        description="#323232"
      />
    </ul>

    <ul class="flex flex-wrap gap-8">
      <color-card title="Dark" classColor="bg-dark" description="#0E3046" />
      <color-card
        title="Dark 2"
        classColor="bg-darkSecond"
        description="#202637"
      />
      <color-card
        title="Dark 3"
        classColor="bg-darkThird"
        description="#001223"
      />
    </ul>
  </div>
</template>

<script setup>
import ColorCard from "@/components/ColorCard.vue";
import MyInput from "@/components/MyInput.vue";
import { ref, computed } from "vue";

const message = ref("Hello guru");

const containerClasses = computed(() => {
  const classes = [];
  if (selectedTheme.value === "secondary") {
    classes.push("theme-secondary");
  }
  return classes.join(" ");
});

const themes = ["default", "secondary"];
const selectedTheme = ref("default");

const onSetTheme = (newTheme) => {
  selectedTheme.value = newTheme;
};
</script>

<style scoped></style>
