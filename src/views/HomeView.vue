<template>
  <main>
    <button @click="start">
      시작!
    </button>
  </main>
</template>

<script setup lang="ts">
import router from '@/router';

const start = () => {
  router.push('/about')
}
</script>

<style>
main {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>