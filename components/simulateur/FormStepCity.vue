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
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>
      <label for="city-input" class="block font-medium text-lg"
        >Votre ville</label
      >
    </div>
    <div class="relative">
      <input
        id="city-input"
        ref="cityInput"
        v-model="cityValue"
        type="text"
        required
        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        placeholder="Ex. Paris"
        @input="updateValue"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 absolute right-4 top-3.5 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
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
      cityValue: this.modelValue,
    };
  },
  watch: {
    modelValue(newVal) {
      this.cityValue = newVal;
    },
    cityValue(newVal) {
      this.$emit("update:modelValue", newVal);
    },
  },
  methods: {
    updateValue() {
      this.$emit("update:modelValue", this.cityValue);
    },
    initAutocomplete() {
      if (window.google && this.$refs.cityInput) {
        const ac = new window.google.maps.places.Autocomplete(
          this.$refs.cityInput,
          {
            types: ["(cities)"],
          }
        );
        ac.addListener("place_changed", () => {
          const place = ac.getPlace();
          this.cityValue = place.name || this.cityValue;
          this.$emit("update:modelValue", this.cityValue);
        });
      }
    },
  },
  mounted() {
    // Initialiser l'autocomplétion si Google Maps est déjà chargé
    if (window.google && window.google.maps) {
      this.initAutocomplete();
    }
  },
  emits: ["update:modelValue"],
};
</script>
