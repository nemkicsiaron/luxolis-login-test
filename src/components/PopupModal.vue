<script setup lang="ts">
import { onMounted, onUnmounted, defineProps, defineEmits, ref } from 'vue';

//This is a known issue in the Vue 3 template generation
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps(['isOpen', 'message']);
const emit = defineEmits(['modal-close']);
const target = ref(null as HTMLElement | null);

onMounted(() => {
	const clickOutsideHandler = (event: Event) => {
		if (target.value && !target.value.contains(event.target as Node)) {
			emit('modal-close');
		}
	};

	document.addEventListener('click', clickOutsideHandler);

	onUnmounted(() => {
		document.removeEventListener('click', clickOutsideHandler);
	});
});
</script>

<template>
	<div
		v-if="isOpen"
		class="fixed z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-50"
	>
		<div
			class="min-h-32 flex w-80 flex-col items-center justify-center rounded-md bg-white px-10 py-7 shadow-lg"
			ref="target"
		>
			<div :class="{ 'text-red-500': message.startsWith('Error:') }">
				<slot name="content">{{ message }}</slot>
			</div>
			<div class="mt-2 self-end rounded bg-[#244BC5] px-4 py-2 text-white">
				<button @click.stop="emit('modal-close')">OK</button>
			</div>
		</div>
	</div>
</template>
