<template>
  <div
    class="bg-white p-6 rounded-lg shadow-lg"
    :data-aos="testimonial.aos || 'fade-up'"
    :data-aos-delay="delay || 0"
  >
    <div class="flex items-center mb-4">
      <div class="text-yellow-400 flex">
        <svg
          v-for="star in testimonial.rating"
          :key="star"
          class="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          />
        </svg>
        <svg
          v-for="star in 5 - testimonial.rating"
          :key="'empty' + star"
          class="h-5 w-5 text-gray-300"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          />
        </svg>
      </div>
      <span class="ml-2 text-gray-500 text-sm">{{ testimonial.date }}</span>
    </div>
    <p class="text-gray-600 mb-4 leading-relaxed">{{ testimonial.text }}</p>
    <div class="flex items-center">
      <span class="font-semibold text-gray-600">{{ testimonial.author }}</span>
      <span v-if="testimonial.service" class="mx-2">•</span>
      <span v-if="testimonial.service" class="text-gray-500 text-sm">
        {{ testimonial.service }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    testimonial: {
      type: Object,
      required: true,
    },
    delay: {
      type: Number,
      default: 0,
    },
  },
};
</script>
