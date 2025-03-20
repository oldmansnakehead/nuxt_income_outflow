<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useTauriMenu();

const runtimeConfig = useRuntimeConfig()
console.log(runtimeConfig.public.baseUrl)
</script>