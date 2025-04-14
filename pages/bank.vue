<template>
  <div class="container mx-auto p-4 max-w-md">
    <h1 class="text-2xl font-bold mb-6">User Profile</h1>

    <button 
      class="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded transition"
      @click="logout"
    >
      Logout
    </button>
  </div>
</template>

<script setup>
definePageMeta({
  // middleware: 'auth'
  middleware: 'sidebase-auth'
})

const logout = async () => {
  await signOut({ redirect: false })
}
</script>