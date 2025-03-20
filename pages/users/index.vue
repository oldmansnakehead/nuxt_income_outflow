<template>
  <div>
    Users
  </div>
</template>

<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig()
console.log(runtimeConfig.public.baseUrl, 'Users')
</script>

<style>

</style>