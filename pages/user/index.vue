<template>
  <div class="container mx-auto p-4 max-w-md">
    <h1 class="text-2xl font-bold mb-6">User Profile</h1>
    
    <div class="bg-white shadow rounded-lg p-6 mb-6">
      <h2 class="text-xl font-semibold mb-4">User Information</h2>
      <div v-if="user" class="space-y-3">
        <p><span class="font-medium">ID:</span> {{ user.id }}</p>
        <p><span class="font-medium">Name:</span> {{ user.name }}</p>
        <p><span class="font-medium">Email:</span> {{ user.email }}</p>
        <p><span class="font-medium">Role:</span> {{ user.role }}</p>
      </div>
      <div v-else class="text-gray-500">
        Loading user data...
      </div>
    </div>

    <div class="bg-white shadow rounded-lg p-6 mb-6">
      <h2 class="text-xl font-semibold mb-4">Token Information</h2>
      <div class="space-y-3">
        <p><span class="font-medium">Access Token:</span> 
          <span class="text-xs break-all">{{ token || 'Not available' }}</span>
        </p>
        <p><span class="font-medium">Token Expires:</span> {{ tokenExpires }}</p>
      </div>
    </div>

    <Button 
          label="Refresh Token"
          class="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
          :loading="isRefreshing"
          @click="handleRefresh"
        />

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

const { data: authData, refresh, signOut } = useAuth()

// ใช้ computed properties เพื่อเข้าถึงข้อมูล
const user = computed(() => authData.value?.user)
const token = computed(() => authData.value?.token)
const tokenExpires = computed(() => 
  authData.value?.expires ? new Date(authData.value.expires).toLocaleString() : 'N/A'
)


const isRefreshing = ref(false)
// const refreshToken = authData.value?.refreshToken
console.log(authData.value.token, 're');
const handleRefresh = async () => {
  isRefreshing.value = true
  try {
    /* const response = await $fetch('/users/refresh_token', {
      method: 'POST',
      body: {
        refresh_token: refreshToken
      },
      headers: {
        'Content-Type': 'application/json'
      }
    }) */
    console.log(response, 'refresh token');
    await refresh()
    console.log('Token refreshed successfully')
  } catch (error) {
    console.error('Refresh failed:', error)
    errorMessage.value = 'Failed to refresh token'
  } finally {
    isRefreshing.value = false
  }
}

const logout = async () => {
  await signOut({ redirect: false })
  navigateTo('/sign-in')
}
</script>