<script setup lang="ts">
const onForgotPassword = () => {
    console.log()
}
</script>

<template>
  <main class="relative w-screen h-screen bg-[#244BC5] overflow-hidden">
    <form class="justify-center">
        <img src="../assets/cart.svg" alt="Shopping cart">
        <input type="text" placeholder="USERNAME">
        <input type="password" placeholder="PASSWORD">
        <button @click.prevent="submitForm" id="mo" class="bg-white text-[#2148C0] w-[300px] h-[45px] text-center text-base uppercase font-semibold leading-5 text-align">Login</button>
        <a class="text-white hover:underline">Forgot password?</a>
      </form>
    <span class="absolute w-[724px] h-[724px] bottom-[-362px] left-[-362px] bg-[#264eca] rounded-full"></span>
    <span class="absolute w-[572px] h-[572px] bottom-[-286px] left-[-286px] bg-[#244bc5] rounded-full"></span>
    <span class="absolute w-[438px] h-[438px] bottom-[-219px] left-[-219px] bg-[#274fc7] rounded-full"></span>
    <img src="../assets/shape.svg" alt="shape" class="absolute right-0 top-[-1px] z-0">
  </main>
</template>

<style scoped>
#mo {
    font-family: 'Montserrat';
}
</style>
