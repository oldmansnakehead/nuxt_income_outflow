<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-blue-500 text-white p-4">
      <h1 class="text-2xl font-bold">My App</h1>
    </header>
    <main class="flex-grow p-4">
      <Nuxt />
    </main>
    <footer class="bg-blue-500 text-white p-4">
      <p>&copy; 2023 My App</p>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  // eslint-disable-next-line vue/component-definition-name-casing
  name: 'default',
})
</script>