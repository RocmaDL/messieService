<template>
  <div
    class="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition"
  >
    <div class="text-blue-600 mb-4">
      <svg
        class="h-10 w-10 mx-auto"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path :d="service.icon" />
      </svg>
    </div>
    <h3 class="font-semibold mb-2 text-center">{{ service.title }}</h3>
    <p class="text-sm text-center">{{ service.desc }}</p>
  </div>
</template>

<script>
export default {
  props: {
    service: {
      type: Object,
      required: true,
    },
  },
};
</script>
