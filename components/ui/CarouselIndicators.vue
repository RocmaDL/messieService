<template>
  <div class="flex justify-center mt-4 space-x-2">
    <button
      v-for="(_, index) in Array(itemsCount)"
      :key="index"
      type="button"
      class="w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      :class="{
        'bg-blue-600': currentIndex === index,
        'bg-gray-300 hover:bg-gray-400': currentIndex !== index,
        'animate-pulse': currentIndex === index,
      }"
      :aria-label="`Aller au témoignage ${index + 1}`"
      :aria-current="currentIndex === index ? 'true' : 'false'"
      @click="$emit('change', index)"
    ></button>
  </div>
</template>

<script>
export default {
  props: {
    itemsCount: {
      type: Number,
      required: true,
    },
    currentIndex: {
      type: Number,
      required: true,
    },
  },
};
</script>
