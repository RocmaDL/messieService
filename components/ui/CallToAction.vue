<template>
  <section
    class="py-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white"
    :data-aos="animation ? 'fade-up' : ''"
  >
    <div class="container mx-auto px-6 text-center">
      <h2 class="text-3xl font-bold mb-4">{{ title }}</h2>
      <p class="max-w-2xl mx-auto mb-8">{{ description }}</p>
      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <slot>
          <NuxtLink
            :to="primaryLink"
            class="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition-colors transform hover:scale-105"
          >
            {{ primaryText }}
          </NuxtLink>
          <NuxtLink
            v-if="secondaryText"
            :to="secondaryLink"
            class="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors transform hover:scale-105"
          >
            {{ secondaryText }}
          </NuxtLink>
        </slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Prêt à transformer votre environnement ?",
    },
    description: {
      type: String,
      default:
        "Contactez-nous dès maintenant pour une consultation gratuite ou utilisez notre simulateur pour obtenir un devis instantané.",
    },
    primaryText: {
      type: String,
      default: "Simuler un devis",
    },
    primaryLink: {
      type: String,
      default: "/simulateur",
    },
    secondaryText: {
      type: String,
      default: "Contactez-nous",
    },
    secondaryLink: {
      type: String,
      default: "/contact",
    },
    animation: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
