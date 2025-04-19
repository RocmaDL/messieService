<template>
  <div>
    <div class="flex items-center mb-4">
      <div class="mr-3 p-2 bg-blue-100 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-blue-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      </div>
      <label for="area-input" class="block font-medium text-lg"
        >Surface de votre logement</label
      >
    </div>
    <div class="relative">
      <input
        id="area-input"
        v-model.number="areaValue"
        type="number"
        min="1"
        required
        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        placeholder="Ex. 75"
      />
      <span class="absolute right-4 top-3 text-gray-400">m²</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      areaValue: this.modelValue,
    };
  },
  watch: {
    modelValue(newVal) {
      this.areaValue = newVal;
    },
    areaValue(newVal) {
      console.log("Area value updated:", newVal);
      this.$emit("update:modelValue", newVal);
    },
  },
  emits: ["update:modelValue"],
};
</script>
