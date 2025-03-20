<template>
  <div>
    <AuthAppLogin/>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'login'
})
const runtimeConfig = useRuntimeConfig()
console.log(runtimeConfig.public.baseUrl, 'Users')
</script>

<style>

</style>