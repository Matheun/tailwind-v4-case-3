<script setup lang="ts">
const isOpen = ref(false);
</script>

<template>
  <button @click="isOpen = !isOpen">
    Button
    <div v-if="isOpen" :data-state="isOpen ? 'open' : 'closed'">
      content
    </div>
  </button>
</template>