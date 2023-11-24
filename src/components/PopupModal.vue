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
  <div v-if="isOpen" class="fixed flex items-center justify-center w-full h-full z-50 bg-black bg-opacity-50">
	<div class="flex flex-col items-center justify-center w-80 min-h-32 bg-white rounded-md shadow-lg px-10 py-7" ref="target">
	<div :class="{'text-red-500': message.startsWith('Error:')}">
		<slot name="content">{{ message }}</slot>
	</div>
	<div class="text-white bg-[#244BC5] py-2 px-4 mt-2 self-end rounded">
		<button @click.stop="emit('modal-close')">OK</button>
	</div>
	</div>
  </div>
</template>