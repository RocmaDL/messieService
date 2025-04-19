<template>
  <button
    @click="$emit('click')"
    class="fixed bottom-5 right-5 h-10 w-10 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center transform hover:scale-110 hover:bg-blue-500 transition-all z-50"
    :class="{
      'translate-y-0 opacity-100': show,
      'translate-y-10 opacity-0': !show,
    }"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M5 15l7-7 7 7"
      />
    </svg>
  </button>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["click"],
};
</script>
