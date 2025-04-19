<template>
  <div class="mb-8">
    <!-- Barre de progression améliorée -->
    <div class="relative mb-14">
      <!-- Barre de progression de base -->
      <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          class="h-full bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 rounded-full transition-all duration-500 ease-out shadow-inner"
          :style="{ width: `${(currentStep / steps.length) * 100}%` }"
        ></div>
      </div>

      <!-- Conteneur flexible pour les indicateurs d'étape -->
      <div class="absolute top-0 left-0 w-full flex justify-between">
        <div
          v-for="(stepName, idx) in stepNames"
          :key="idx"
          class="flex flex-col items-center"
          :style="{ width: `${100 / stepNames.length}%` }"
        >
          <div class="relative">
            <!-- Cercle animé pour l'étape active -->
            <div
              v-if="currentStep === idx + 1"
              class="absolute inset-0 w-8 h-8 rounded-full bg-blue-100 animate-ping opacity-60 -mt-3"
            ></div>

            <!-- Indicateur principal -->
            <div
              class="w-8 h-8 rounded-full -mt-3 flex items-center justify-center border-2 shadow-md z-10 relative"
              :class="getStepClasses(idx)"
            >
              <span
                v-if="currentStep <= idx"
                class="text-xs font-bold"
                :class="
                  currentStep === idx + 1 ? 'text-blue-600' : 'text-gray-500'
                "
              >
                {{ idx + 1 }}
              </span>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          <!-- Libellé de l'étape avec meilleur positionnement -->
          <div class="mt-5 w-full text-center">
            <span
              class="text-xs font-medium transition-all duration-300 whitespace-nowrap"
              :class="getStepNameClasses(idx)"
            >
              {{ stepName }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentStep: {
      type: Number,
      required: true,
    },
    steps: {
      type: Array,
      required: true,
    },
    stepNames: {
      type: Array,
      required: true,
    },
  },
  methods: {
    getStepClasses(idx) {
      if (this.currentStep > idx + 1) {
        return "bg-blue-600 border-blue-600 text-white"; // Étape terminée
      } else if (this.currentStep === idx + 1) {
        return "bg-white border-blue-600 ring-2 ring-blue-100"; // Étape actuelle
      } else {
        return "bg-white border-gray-300"; // Étape future
      }
    },
    getStepNameClasses(idx) {
      if (this.currentStep === idx + 1) {
        return "text-blue-700 font-bold px-3 py-1 bg-blue-50 rounded-full shadow-sm inline-block";
      } else if (this.currentStep > idx + 1) {
        return "text-blue-600";
      } else {
        return "text-gray-500";
      }
    },
  },
};
</script>

<style scoped>
/* Animation optimisée pour l'étape active */
@keyframes ping {
  0% {
    transform: scale(0.8);
    opacity: 0.8;
  }
  70%,
  100% {
    transform: scale(1.7);
    opacity: 0;
  }
}

.animate-ping {
  animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
}
</style>
