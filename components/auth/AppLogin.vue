<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <!-- Logo -->
      <div class="text-center mb-6">
        <!-- <img src="~/assets/logo.png" alt="Logo" class="w-24 h-24 mx-auto" /> -->
      </div>

      <h2 class="text-2xl font-bold mb-6 text-center">Sign In to your account</h2>

      <!-- Sign In Form -->
      <form class="space-y-4" @submit.prevent="login">
        <div>
          <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
          <InputText id="username" v-model="username" class="w-full" placeholder="Enter your username" />
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <Password id="password" v-model="password" class="w-full" :style="{ width: '100%' }" :input-style="{ width: '100%' }"   toggle-mask placeholder="Enter your password" />
        </div>
        <Button type="submit" label="Sign in" class="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600" />
      </form>

      <!-- Social Media Login -->
      <div class="mt-6 text-center">
        <p class="text-sm text-gray-600">or Connect with Social Media</p>
        <div class="flex justify-center space-x-4 mt-4">
          <Button label="Sign in With Twitter" icon="pi pi-twitter" class="bg-blue-400 text-white p-2 rounded hover:bg-blue-500" />
          <Button label="Sign in With Facebook" icon="pi pi-facebook" class="bg-blue-600 text-white p-2 rounded hover:bg-blue-700" />
        </div>
      </div>

      <!-- Footer -->
      <div class="mt-6 text-center text-sm text-gray-500">
        <p>www.yoursite.com</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const username = ref('')
const password = ref('')

const login = () => {
  console.log('Logging in with:', username.value, password.value)
}
</script>

<style scoped>
.p-password input {
  width: 100% !important;
}
</style>