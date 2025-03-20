<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-blue-500 text-white p-4">
      <h1 class="text-2xl font-bold">My App</h1>
    </header>
    <main class="flex-grow p-4">
      <slot />
    </main>
    <footer class="bg-blue-500 text-white p-4">
      <p>&copy; 2023 My App</p>
    </footer>
  </div>
</template>

<script setup lang="ts">

</script>