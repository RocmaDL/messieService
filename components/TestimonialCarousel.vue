<template>
  <div class="relative max-w-4xl mx-auto overflow-hidden">
    <!-- Conteneur principal avec overflow caché pour éviter de voir les autres diapositives -->
    <div class="overflow-hidden rounded-lg">
      <div
        ref="carouselTrack"
        class="flex transition-transform duration-500 ease-in-out"
        :style="{ transform: `translateX(-${current * 100}%)` }"
      >
        <TestimonialCard
          v-for="(t, i) in testimonials"
          :key="i"
          :testimonial="t"
          :delay="i * 100"
          class="w-full flex-shrink-0 px-4"
        />
      </div>
    </div>

    <!-- Navigation Buttons avec animation -->
    <CarouselNavButton
      direction="prev"
      @click="prev"
      class="absolute left-0 top-1/2 -translate-y-1/2"
      aria-label="Témoignage précédent"
    />

    <CarouselNavButton
      direction="next"
      @click="next"
      class="absolute right-0 top-1/2 -translate-y-1/2"
      aria-label="Témoignage suivant"
    />

    <!-- Dots Indicators with Animation -->
    <CarouselIndicators
      :items-count="testimonials.length"
      :current-index="current"
      @change="current = $event"
    />
  </div>
</template>

<script>
import TestimonialCard from "./testimonial/TestimonialCard.vue";
import CarouselNavButton from "./ui/CarouselNavButton.vue";
import CarouselIndicators from "./ui/CarouselIndicators.vue";

export default {
  components: {
    TestimonialCard,
    CarouselNavButton,
    CarouselIndicators,
  },
  data() {
    return {
      current: 0,
      testimonials: [
        {
          text: "Nous avons fait appel à MESSIE SERVICES pour un nettoyage de fin de chantier. Cette société nous a donné pleine et entière satisfaction. Nous n'hésiterons pas à faire de nouveau appel à ses services.",
          author: "PJ4KGrVq",
          date: "24 juin 2015",
          service: "Nettoyage fin de chantier",
          rating: 5,
        },
        {
          text: "Service rapide et professionnel. L'équipe est arrivée à l'heure et a traité nos bureaux avec le plus grand soin. Un résultat impeccable qui a impressionné nos clients.",
          author: "Marie D.",
          date: "12 mars 2021",
          service: "Nettoyage de bureaux",
          rating: 5,
        },
        {
          text: "Je fais appel à leurs services depuis plus de 3 ans pour l'entretien de mon appartement. Toujours ponctuels, efficaces et d'une grande gentillesse. Je recommande vivement !",
          author: "Thomas L.",
          date: "5 novembre 2022",
          service: "Ménage régulier",
          rating: 5,
        },
        {
          text: "Après un dégât des eaux, leur intervention a été salvatrice. Non seulement ils ont nettoyé, mais ils ont su nous conseiller sur les démarches à suivre. Un grand merci à toute l'équipe.",
          author: "Sophie B.",
          date: "17 janvier 2023",
          service: "Nettoyage après sinistre",
          rating: 5,
        },
        {
          text: "L'usage de produits écologiques était important pour moi. Messie Services a parfaitement respecté cette exigence tout en offrant un nettoyage de grande qualité. Bravo !",
          author: "Laurent P.",
          date: "3 avril 2023",
          service: "Nettoyage écologique",
          rating: 4,
        },
      ],
      autoplayInterval: null,
    };
  },
  methods: {
    next() {
      this.current = (this.current + 1) % this.testimonials.length;
      this.resetAutoplayTimer();
    },
    prev() {
      this.current =
        (this.current - 1 + this.testimonials.length) %
        this.testimonials.length;
      this.resetAutoplayTimer();
    },
    resetAutoplayTimer() {
      // Réinitialiser le timer à chaque navigation manuelle
      clearInterval(this.autoplayInterval);
      this.autoplayInterval = setInterval(this.next, 5000);
    },
    startAutoplay() {
      this.autoplayInterval = setInterval(this.next, 5000);
    },
    stopAutoplay() {
      clearInterval(this.autoplayInterval);
    },
    updateSlideWidth() {
      if (this.$refs.carouselTrack) {
        const slides = this.$refs.carouselTrack.children;
        const containerWidth =
          this.$refs.carouselTrack.parentElement.clientWidth;

        for (let i = 0; i < slides.length; i++) {
          slides[i].style.width = `${containerWidth}px`;
        }
      }
    },
    goToSlide(index) {
      this.activeIndex = index;
      this.resetTimer();

      // Remplacer la boucle for par for-of
      for (const dot of this.dots) {
        dot.classList.remove("active");
      }
    },
  },
  mounted() {
    // Défilement automatique toutes les 5 secondes
    this.startAutoplay();

    // Réinitialiser les dimensions pour s'assurer que chaque slide occupe la bonne largeur
    window.addEventListener("resize", this.updateSlideWidth);
    this.updateSlideWidth();
  },
  beforeUnmount() {
    // Nettoyer les événements
    this.stopAutoplay();
    window.removeEventListener("resize", this.updateSlideWidth);
  },
};
</script>

<style scoped>
/* Animation pour les boutons et inidcateurs */
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

.active-dot {
  animation: pulse 2s infinite;
}
</style>
