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
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      </div>
      <legend class="block font-medium text-lg" id="cleaning-types-label">
        Type(s) de nettoyage
      </legend>
    </div>
    <div
      class="grid grid-cols-2 gap-3"
      role="group"
      aria-labelledby="cleaning-types-label"
    >
      <label
        v-for="option in cleaningTypeOptions"
        :key="option"
        class="cleaning-option cursor-pointer border rounded-lg p-3 flex items-center transition-all duration-200"
        :class="
          selectedTypes.includes(option)
            ? 'bg-blue-50 border-blue-400'
            : 'border-gray-200 hover:bg-gray-50'
        "
      >
        <input
          type="checkbox"
          :id="`clean-type-${option}`"
          :value="option"
          :checked="selectedTypes.includes(option)"
          @change="toggleType(option)"
          class="mr-2 h-5 w-5 text-blue-600 focus:ring-blue-500 rounded transition-all"
          :aria-label="`Type de nettoyage: ${option}`"
        />
        <span class="line-clamp-1">{{ option }}</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      selectedTypes: [...this.modelValue],
      cleaningTypeOptions: [
        "Grand nettoyage",
        "Vitres",
        "Après chantier",
        "Déménagement",
        "Inter-location",
        "Autre",
      ],
    };
  },
  watch: {
    modelValue: {
      handler(newVal) {
        this.selectedTypes = [...newVal];
      },
      deep: true,
    },
  },
  methods: {
    toggleType(option) {
      const index = this.selectedTypes.indexOf(option);

      if (index === -1) {
        // Option n'est pas dans le tableau, alors on l'ajoute
        this.selectedTypes.push(option);
      } else {
        // Option est dans le tableau, alors on la supprime
        this.selectedTypes.splice(index, 1);
      }

      // Émettre une copie du tableau pour garantir la réactivité
      this.$emit("update:modelValue", [...this.selectedTypes]);
    },
  },
  emits: ["update:modelValue"],
};
</script>
