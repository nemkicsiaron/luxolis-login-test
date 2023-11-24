<script setup lang="ts">
import { onMounted, onUnmounted, defineProps, defineEmits, ref } from 'vue';

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
    <div class="modal-wrapper">
      <div class="flex items-center justify-center w-80 h-32 bg-white rounded-md shadow-lg" ref="target">
		<slot name="content">{{ message }}</slot>
		<div class="text-white bg-[]">
			<button @click.stop="emit('modal-close')">Submit</button>
		</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-container {
  width: 300px;

  margin: 150px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
}
</style>
