<script setup lang="ts">
import router from '@/router';
import validateUser from '@/utils/ValidationChecker';
import { ref, watch } from 'vue';
import PopupModal from '../components/PopupModal.vue';

const usernameRef = ref('');
const passwordRef = ref('');
const wrongCombination = ref(false);
const showModal = ref(false);

watch(
	passwordRef,
	(value) =>
		(wrongCombination.value = !value.match(
			'^(?=.*?[A-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-/\\s]).{3,}$'
		))
);

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
	} else if (!wrongCombination.value && username && password) {
		console.log('Login failed with: ' + username, password, wrongCombination.value);
		showModal.value = true;
	}
};
</script>
<template>
	<main
		class="relative flex h-screen w-screen items-center justify-center overflow-hidden bg-[#244BC5]"
	>
		<form class="relative z-10" @submit.prevent="onLogin">
			<img
				class="top-0 mx-auto mb-[70px] block"
				src="../assets/cart.svg"
				alt="Shopping cart"
			/>
			<label class="mb-5 flex h-[45px] w-[300px] items-center rounded border border-white">
				<img class="mb-[12px] ml-[12px] mr-[20px] mt-[12px]" src="../assets/user.svg" />
				<input
					v-model.trim="usernameRef"
					class="bg-transparent text-white placeholder:text-white focus:outline-none"
					type="text"
					placeholder="USERNAME"
					required
				/>
			</label>
			<label class="flex h-[45px] w-[300px] items-center rounded border border-white">
				<img class="mb-[12px] ml-[12px] mr-[20px] mt-[12px]" src="../assets/lock.svg" />
				<input
					v-model="passwordRef"
					class="bg-transparent text-white placeholder:text-white focus:outline-none"
					type="password"
					placeholder="PASSWORD"
					required
				/>
			</label>
			<span v-if="wrongCombination" class="text-gray-4800 block">Wrong combination</span>
			<button
				class="text-align shadow-[0_4px_4px_0_rgba(0, 0, 0, 0.30)] relative mt-11 h-[45px] w-[300px] rounded bg-white text-center text-base font-semibold uppercase leading-5 text-[#2148C0] disabled:cursor-not-allowed disabled:bg-gray-300"
				:disabled="wrongCombination"
			>
				Login
			</button>
			<a
				@click.prevent="onForgotPassword"
				class="absolute right-0 mt-[11px] block font-medium text-white hover:cursor-pointer hover:underline"
				>Forgot password?</a
			>
		</form>
		<PopupModal
			:isOpen="showModal"
			:message="'Error: The provided password is wrong'"
			@modal-close="() => (showModal = false)"
		></PopupModal>
		<span
			class="absolute bottom-[-362px] left-[-362px] h-[724px] w-[724px] rounded-full bg-[#264eca]"
		></span>
		<span
			class="absolute bottom-[-286px] left-[-286px] h-[572px] w-[572px] rounded-full bg-[#244bc5]"
		></span>
		<span
			class="absolute bottom-[-219px] left-[-219px] h-[438px] w-[438px] rounded-full bg-[#274fc7]"
		></span>
		<img src="../assets/shape.svg" alt="shape" class="absolute right-0 top-[-1px] z-0" />
	</main>
</template>
