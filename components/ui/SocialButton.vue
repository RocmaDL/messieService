<template>
  <a
    :href="url"
    :aria-label="platform"
    class="h-10 w-10 bg-gray-700 rounded-lg flex items-center justify-center text-gray-300 hover:text-white transform hover:-translate-y-1 transition-all"
    :class="hoverClass"
  >
    <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path :d="icon" />
    </svg>
  </a>
</template>

<script>
export default {
  props: {
    platform: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    hoverClass: {
      type: String,
      default: "",
    },
  },
};
</script>
