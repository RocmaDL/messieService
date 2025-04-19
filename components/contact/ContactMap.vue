<template>
  <div class="rounded-lg overflow-hidden shadow-lg">
    <div class="aspect-w-16 aspect-h-9">
      <iframe
        :src="mapUrl"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        class="w-full h-full"
        :title="title"
      >
      </iframe>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    address: {
      type: String,
      default: "5 Rue des Pêchers, 37170 Chambray-lès-Tours",
    },
    title: {
      type: String,
      default: "Carte de notre emplacement",
    },
    zoom: {
      type: Number,
      default: 15,
    },
  },
  computed: {
    mapUrl() {
      // Encoder l'adresse pour l'URL
      const encodedAddress = encodeURIComponent(this.address);
      return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2701.6815283545485!2d0.6987689!3d47.3467454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47fcd5e2e0d14a45%3A0xf5e7a890501e568c!2s${encodedAddress}!5e0!3m2!1sfr!2sfr!4v1660597955574!5m2!1sfr!2sfr`;
    },
  },
};
</script>

<style scoped>
/* Aspect ratio classes */
.aspect-w-16 {
  position: relative;
  padding-bottom: calc(var(--tw-aspect-h) / var(--tw-aspect-w) * 100%);
  --tw-aspect-w: 16;
}

.aspect-h-9 {
  --tw-aspect-h: 9;
}

.aspect-w-16 > * {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
