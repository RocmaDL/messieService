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
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>
      <legend class="block font-medium text-lg">Fréquence de nettoyage</legend>
    </div>
    <div
      class="grid grid-cols-2 md:grid-cols-4 gap-3"
      role="radiogroup"
      aria-labelledby="frequency-label"
    >
      <label
        v-for="option in frequencyOptions"
        :key="option"
        class="frequency-option cursor-pointer border rounded-lg p-4 flex flex-col items-center transition-all duration-200"
        :class="
          selectedFrequency === option
            ? 'bg-blue-50 border-blue-400 shadow-inner'
            : 'border-gray-200 hover:bg-gray-50'
        "
      >
        <input
          type="radio"
          :id="`frequency-${option}`"
          :value="option"
          v-model="selectedFrequency"
          class="hidden"
          required
          :aria-label="`Fréquence ${option}`"
        />
        <span class="block w-full text-center">{{ option }}</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      selectedFrequency: this.modelValue,
      frequencyOptions: [
        "Unique",
        "Hebdomadaire",
        "Bi‑hebdomadaire",
        "Mensuelle",
      ],
    };
  },
  watch: {
    modelValue(newVal) {
      this.selectedFrequency = newVal;
    },
    selectedFrequency(newVal) {
      this.$emit("update:modelValue", newVal);
    },
  },
  emits: ["update:modelValue"],
};
</script>
