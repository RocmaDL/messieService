<template>
  <div class="text-yellow-400 flex">
    <svg
      v-for="n in 5"
      :key="n"
      class="h-5 w-5"
      :class="{ 'text-gray-300': n > rating }"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    rating: {
      type: Number,
      required: true,
      validator: (value) => value >= 0 && value <= 5,
    },
  },
};
</script>
