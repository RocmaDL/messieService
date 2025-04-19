<template>
  <section class="py-16 bg-white">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold text-center mb-10" data-aos="fade-up">
        {{ title }}
      </h2>

      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Nos Domaines d'Expertise",
    },
  },
};
</script>
