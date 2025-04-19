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
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      </div>
      <legend class="block font-medium text-lg" id="client-type-label">
        Vous êtes
      </legend>
    </div>
    <div
      class="flex flex-col space-y-3"
      role="radiogroup"
      aria-labelledby="client-type-label"
    >
      <label
        class="client-type-option cursor-pointer border rounded-lg p-4 flex items-center transition-all duration-200"
        :class="
          selectedType === 'Particulier'
            ? 'bg-blue-50 border-blue-400'
            : 'border-gray-200 hover:bg-gray-50'
        "
      >
        <input
          type="radio"
          id="type-particulier"
          value="Particulier"
          v-model="selectedType"
          required
          class="mr-3 h-5 w-5 text-blue-600 focus:ring-blue-500"
          aria-labelledby="label-particulier sublabel-particulier"
        />
        <div>
          <span id="label-particulier" class="block font-medium"
            >Particulier</span
          >
          <span id="sublabel-particulier" class="text-sm text-gray-700"
            >Pour votre domicile privé</span
          >
        </div>
      </label>
      <label
        class="client-type-option cursor-pointer border rounded-lg p-4 flex items-center transition-all duration-200"
        :class="
          selectedType === 'Professionnel'
            ? 'bg-blue-50 border-blue-400'
            : 'border-gray-200 hover:bg-gray-50'
        "
      >
        <input
          type="radio"
          id="type-professionnel"
          value="Professionnel"
          v-model="selectedType"
          required
          class="mr-3 h-5 w-5 text-blue-600 focus:ring-blue-500"
          aria-labelledby="label-professionnel sublabel-professionnel"
        />
        <div>
          <span id="label-professionnel" class="block font-medium"
            >Professionnel</span
          >
          <span id="sublabel-professionnel" class="text-sm text-gray-700"
            >Pour votre entreprise ou local commercial</span
          >
        </div>
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
      selectedType: this.modelValue,
    };
  },
  watch: {
    modelValue(newVal) {
      this.selectedType = newVal;
    },
    selectedType(newVal) {
      this.$emit("update:modelValue", newVal);
    },
  },
  emits: ["update:modelValue"],
};
</script>
