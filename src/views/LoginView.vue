<script setup lang="ts">
import router from '@/router';
import validateUser from '@/utils/ValidationChecker';
import { ref, watch } from 'vue';
import PopupModal from '../components/PopupModal.vue';

const usernameRef = ref('');
const passwordRef = ref('');
const wrongCombination = ref(false);
const showModal = ref(false);

watch(passwordRef, (value) => wrongCombination.value = !value.match('^(?=.*?[A-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-/\\s]).{3,}$'));

const onForgotPassword = () => {
	// Handle forgot password logic
	console.log('Forgot password clicked');
};


const onLogin = async () => {
	// Perform asynchronous validation
	const username = usernameRef.value;
	const password = passwordRef.value;
	const validCredentials: boolean = await validateUser({ username, password });
	if (validCredentials) {
		console.log('Login successful');
		router.push('/success');
	} else if(!wrongCombination.value && username && password) {
		console.log('Login failed with: ' + username, password, wrongCombination.value);
    showModal.value = true;
  }

};
</script>
<template>
	<main
		class="relative flex items-center justify-center w-screen h-screen bg-[#244BC5] overflow-hidden"
	>
		<form class="relative z-10" @submit.prevent="onLogin">
			<img
				class="block mx-auto mb-[70px] top-0"
				src="../assets/cart.svg"
				alt="Shopping cart"
			/>
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
			<label class="flex items-center border-white border rounded w-[300px] h-[45px]">
				<img class="ml-[12px] mb-[12px] mt-[12px] mr-[20px]" src="../assets/lock.svg" />
				<input
					v-model="passwordRef"
					class="bg-transparent text-white placeholder:text-white focus:outline-none"
					type="password"
					placeholder="PASSWORD"
					required
				/>
			</label>
			<span v-if="wrongCombination" class="block text-gray-4800">Wrong combination</span>
			<button
				class="disabled:bg-gray-300 disabled:cursor-not-allowed relative bg-white text-[#2148C0] rounded w-[300px] h-[45px] text-center text-base uppercase font-semibold leading-5 text-align mt-11 shadow-[0_4px_4px_0_rgba(0, 0, 0, 0.30)]"
        :disabled="wrongCombination"
        >
				Login
			</button>
			<a
				@click.prevent="onForgotPassword"
				class="absolute block hover:underline hover:cursor-pointer text-white font-medium right-0 mt-[11px]"
				>Forgot password?</a
			>
		</form>
    <PopupModal :isOpen="showModal" :message="'Error: The provided password is wrong'" @modal-close="() => showModal = false"></PopupModal>
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
