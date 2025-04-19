<template>
  <section
    class="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20 overflow-hidden"
  >
    <!-- Éléments décoratifs d'arrière-plan -->
    <div class="absolute inset-0 opacity-20" v-if="showGrid">
      <!-- SVG abstrait en arrière-plan -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 800 800"
      >
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              d="M0 0h40v40H0z"
            />
          </pattern>
        </defs>
        <rect width="800" height="800" fill="url(#grid)" />
      </svg>
    </div>

    <!-- Animation de particules -->
    <div class="absolute inset-0 overflow-hidden" v-if="showParticles">
      <div class="particles-container">
        <div
          v-for="n in 20"
          :key="`particle-${n}`"
          class="particle"
          :style="{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 10}s`,
          }"
        ></div>
      </div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <h1
        class="text-4xl md:text-5xl font-bold mb-4 text-center"
        data-aos="fade-down"
      >
        {{ title }}
      </h1>
      <p
        v-if="subtitle"
        class="text-xl max-w-3xl mx-auto text-center"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {{ subtitle }}
      </p>
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      default: "",
    },
    showGrid: {
      type: Boolean,
      default: false,
    },
    showParticles: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
/* Animation des particules décoratives */
.particles-container {
  width: 100%;
  height: 100%;
}

.particle {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.3);
  animation: float 15s infinite;
}

@keyframes float {
  0% {
    transform: translateY(0) translateX(0) scale(1);
    opacity: 0.7;
  }
  50% {
    transform: translateY(-20px) translateX(20px) scale(1.5);
    opacity: 0.3;
  }
  100% {
    transform: translateY(0) translateX(0) scale(1);
    opacity: 0.7;
  }
}
</style>
