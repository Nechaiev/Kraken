<template>
  <div class="text-6xl">hello world</div>
  <div class="container bg-slate-100 flex flex-col gap-8 mx-auto">
    <ul class="flex flex-wrap gap-8">
      <ColorCard title="Gradient" classColor="bg-gradient" />
    </ul>

    <ul class="flex flex-wrap gap-8">
      <ColorCard title="Blue" classColor="bg-blue" description="#DBE6ED" />
      <ColorCard
        title="Brand Blue"
        classColor="bg-brandBlue"
        description="#4288B5"
      />
      <ColorCard
        title="Blue 2"
        classColor="bg-blueSecond"
        description="#072E53"
      />
    </ul>

    <ul class="flex flex-wrap gap-8">
      <ColorCard title="Purple" classColor="bg-purple" description="#F4DCFF" />
      <ColorCard
        title="brand Purple"
        classColor="bg-brandPurple"
        description="#BA90CE"
      />
    </ul>

    <ul class="flex flex-wrap gap-8">
      <ColorCard title="red" classColor="bg-red" description="#F2E1E0" />
      <ColorCard
        title="red 2"
        classColor="bg-redSecond"
        description="#9B1C13"
      />
    </ul>

    <ul class="flex flex-wrap gap-8">
      <ColorCard title="Green" classColor="bg-green" description="#D1E7DD" />
      <ColorCard
        title="green 2"
        classColor="bg-greenSecond"
        description="#0F5132"
      />
    </ul>

    <ul class="flex flex-wrap gap-8">
      <ColorCard title="Gold" classColor="bg-gold" description="#FFF3CD" />
      <ColorCard
        title="Gold 2"
        classColor="bg-goldSecond"
        description="#664D03"
      />
    </ul>

    <ul class="flex flex-wrap gap-8">
      <ColorCard title="Light" classColor="bg-light" description="#FFFFFF" />
      <ColorCard title="Gray" classColor="bg-gray" description="#F6F6FA" />
      <ColorCard
        title="gray 2"
        classColor="bg-graySecond"
        description="#E9E9E9"
      />
      <ColorCard
        title="gray 3"
        classColor="bg-grayThird"
        description="#989898"
      />
      <ColorCard
        title="gray 4"
        classColor="bg-grayFourth"
        description="#323232"
      />
    </ul>

    <ul class="flex flex-wrap gap-8">
      <ColorCard title="Dark" classColor="bg-dark" description="#0E3046" />
      <ColorCard
        title="Dark 2"
        classColor="bg-darkSecond"
        description="#202637"
      />
      <ColorCard
        title="Dark 3"
        classColor="bg-darkThird"
        description="#001223"
      />
    </ul>
  </div>
</template>

<script setup>

import ColorCard from "@/components/ColorCard.vue";

</script>

<style scoped></style>
