<template>
  <div
    class="bg-gray-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
  >
    <div class="bg-blue-600 p-4 flex justify-center">
      <slot name="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-12 w-12 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      </slot>
    </div>
    <div class="p-6">
      <h3 class="text-xl font-bold mb-3">{{ title }}</h3>
      <p class="text-gray-600 mb-4">{{ description }}</p>
      <p v-if="services.length > 0" class="font-semibold text-blue-600">
        Services inclus:
      </p>
      <ul v-if="services.length > 0" class="mt-2 space-y-1 text-sm">
        <li
          v-for="(service, index) in services"
          :key="index"
          class="flex items-center"
        >
          <svg
            class="h-4 w-4 text-blue-600 mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            ></path>
          </svg>
          {{ service }}
        </li>
      </ul>
      <slot name="additional"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    services: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
