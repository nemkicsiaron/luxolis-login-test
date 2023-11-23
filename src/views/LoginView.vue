<script setup lang="ts">
import router from '@/router';
import validateUser from '@/utils/ValidationChecker'
import { ref } from 'vue'

const usernameRef = ref('')
const passwordRef = ref('')

const onForgotPassword = () => {
  // Handle forgot password logic
  console.log('Forgot password clicked')
}

const onLogin = async () => {
  // Perform asynchronous validation
  //const isUsernameValid = await validateInput(username.value);
  //const isPasswordValid = await validateInput(password.value);
  const username = usernameRef.value
  const password = passwordRef.value
  const validCredentials: boolean = await validateUser({ username, password })
  if (validCredentials) {
    console.log('Login successful')
    router.push('/success');
    // Redirect or perform further actions for successful login
  } else {
    console.log('Login failed')

    // Handle login failure (show error message, etc.)
  }
}
</script>
<template>
  <main
    class="relative flex items-center justify-center w-screen h-screen bg-[#244BC5] overflow-hidden"
  >
    <form class="relative z-10" @submit="onLogin">
      <img class="block mx-auto mb-[70px] top-0" src="../assets/cart.svg" alt="Shopping cart" />
      <label class="flex items-center border-white border rounded w-[300px] h-[45px] mb-5">
        <img class="ml-[12px] mb-[12px] mt-[12px] mr-[20px]" src="../assets/user.svg" />
        <input
          v-model.trim="usernameRef"
          class="bg-transparent text-white placeholder:text-white focus:outline-none"
          type="text"
          placeholder="USERNAME"
          required
        />
      </label>
      <label class="flex items-center border-white border rounded w-[300px] h-[45px] mb-5">
        <img class="ml-[12px] mb-[12px] mt-[12px] mr-[20px]" src="../assets/lock.svg" />
        <input
          v-model.lazy="passwordRef"
          class="bg-transparent text-white placeholder:text-white focus:outline-none"
          type="password"
          id="password"
          placeholder="PASSWORD"
          required
        />
      </label>
      <p v-if=""></p>
      <button
        type="submit"
        class="relative bg-white text-[#2148C0] rounded w-[300px] h-[45px] text-center text-base uppercase font-semibold leading-5 text-align mt-11 shadow-[0_4px_4px_0_rgba(0, 0, 0, 0.30)]"
      >
        Login
      </button>
      <a
        @click.prevent="onForgotPassword"
        class="absolute block hover:underline hover:cursor-pointer text-white font-medium right-0"
        >Forgot password?</a
      >
    </form>
    <span
      class="absolute w-[724px] h-[724px] bottom-[-362px] left-[-362px] bg-[#264eca] rounded-full"
    ></span>
    <span
      class="absolute w-[572px] h-[572px] bottom-[-286px] left-[-286px] bg-[#244bc5] rounded-full"
    ></span>
    <span
      class="absolute w-[438px] h-[438px] bottom-[-219px] left-[-219px] bg-[#274fc7] rounded-full"
    ></span>
    <img src="../assets/shape.svg" alt="shape" class="absolute right-0 top-[-1px] z-0" />
  </main>
</template>
