<template>
  <div>
    Users
  </div>
</template>

<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig()
console.log(runtimeConfig.public.baseUrl, 'Users')
console.log(runtimeConfig.public.origin, 'origin')
</script>

<style>

</style>