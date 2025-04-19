<template>
  <button
    type="button"
    class="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-colors duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500"
    :aria-label="direction === 'prev' ? 'Précédent' : 'Suivant'"
    @click="$emit('click')"
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
        :d="direction === 'prev' ? 'M15 19l-7-7 7-7' : 'M9 5l7 7-7 7'"
      />
    </svg>
  </button>
</template>

<script>
export default {
  props: {
    direction: {
      type: String,
      required: true,
      validator: (value) => ["prev", "next"].includes(value),
    },
  },
};
</script>
