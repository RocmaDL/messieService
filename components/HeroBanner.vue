<template>
  <section
    class="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white py-24 md:py-28 lg:py-32 overflow-hidden"
  >
    <!-- Animated shapes -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="floating-shapes">
        <div
          v-for="n in 6"
          :key="`shape-${n}`"
          :class="[
            'absolute rounded-full bg-white bg-opacity-10',
            `shape-${n}`,
          ]"
        ></div>
      </div>
    </div>

    <!-- Lottie animation -->
    <div ref="lottie" class="absolute inset-0 opacity-20"></div>

    <!-- Content -->
    <div class="container mx-auto px-6 relative z-10">
      <div class="flex flex-col items-center max-w-4xl mx-auto">
        <h1
          class="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-center"
          data-aos="fade-down"
          data-aos-duration="800"
        >
          <span class="block transform transition-all">Messie Services</span>
          <span
            class="block text-2xl sm:text-3xl md:text-4xl mt-2 text-blue-200"
            >Experts en propreté depuis 2012</span
          >
        </h1>

        <p
          class="text-lg sm:text-xl text-center mb-8 max-w-2xl"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="800"
        >
          Votre expert en propreté & services à la personne, pour un quotidien
          plus sain et des espaces valorisés.
        </p>

        <!-- Phrase d'accroche avec animation de typing -->
        <div
          class="typing-container relative h-8 mb-10 overflow-hidden"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <p
            class="typing-text italic text-xl absolute opacity-0"
            :class="{ 'typing-animation': true }"
          >
            L'excellence au service de votre bien-être et de la valorisation de
            vos espaces.
          </p>
        </div>

        <!-- Call to action -->
        <div
          class="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <NuxtLink
            to="/services"
            class="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-blue-50 transition-colors duration-300 text-center"
          >
            Nos services
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 inline-block ml-2 -mt-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </NuxtLink>

          <NuxtLink
            to="/simulateur"
            class="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-300 text-center"
          >
            Demander un devis
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 inline-block ml-2 -mt-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
              />
              <path
                d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
              />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Wave divider -->
    <div class="absolute bottom-0 left-0 w-full overflow-hidden leading-none" style="transform: scaleY(-1);">
        <svg
            class="h-12 sm:h-16 md:h-20 w-full text-white"
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
        >
            <path
                d="M0,0 C200,80 800,40 1440,80 L1440,00 L0,0 Z"
                fill="currentColor"
            ></path>
        </svg>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    // Charger dynamiquement le script Lottie
    this.loadLottieScript();

    // Start animation for statistics
    this.animateNumbers();
  },
  methods: {
    loadLottieScript() {
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/npm/lottie-web@5.10.1/build/lottie.min.js";
      script.onload = () => {
        // 'lottie' sera accessible depuis window.lottie
        fetch("/lottie/clean.json")
          .then((res) => res.json())
          .then((animData) => {
            window.lottie.loadAnimation({
              container: this.$refs.lottie,
              renderer: "svg",
              loop: true,
              autoplay: true,
              animationData: animData,
            });
          })
          .catch((err) => {
            console.log("Fallback to default animation");
            // Fallback animation if JSON doesn't load
            this.createFallbackAnimation();
          });
      };
      document.head.appendChild(script);
    },
    createFallbackAnimation() {
      // Create a fallback animation with simple SVG if JSON doesn't load
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("viewBox", "0 0 100 100");
      svg.setAttribute("class", "w-full h-full opacity-20");

      // Create a simple pattern
      const pattern = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "pattern"
      );
      pattern.setAttribute("id", "grid");
      pattern.setAttribute("width", "10");
      pattern.setAttribute("height", "10");
      pattern.setAttribute("patternUnits", "userSpaceOnUse");

      const path = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );
      path.setAttribute("fill", "none");
      path.setAttribute("stroke", "currentColor");
      path.setAttribute("stroke-width", "0.5");
      path.setAttribute("d", "M0 0h10v10H0z");

      pattern.appendChild(path);

      const defs = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "defs"
      );
      defs.appendChild(pattern);

      const rect = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
      );
      rect.setAttribute("width", "100");
      rect.setAttribute("height", "100");
      rect.setAttribute("fill", "url(#grid)");

      svg.appendChild(defs);
      svg.appendChild(rect);

      this.$refs.lottie.appendChild(svg);
    },
    animateNumbers() {
      // Animation for statistics would be added here if needed
    },
  },
};
</script>

<style scoped>
/* Floating shapes animation */
.floating-shapes div {
  position: absolute;
  border-radius: 50%;
  opacity: 0.3;
  animation-name: float;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}

.shape-1 {
  width: 80px;
  height: 80px;
  left: 5%;
  top: 20%;
  animation-duration: 8s;
}

.shape-2 {
  width: 60px;
  height: 60px;
  left: 15%;
  top: 65%;
  animation-duration: 10s;
  animation-delay: 1s;
}

.shape-3 {
  width: 40px;
  height: 40px;
  left: 40%;
  top: 25%;
  animation-duration: 7s;
  animation-delay: 2s;
}

.shape-4 {
  width: 100px;
  height: 100px;
  right: 20%;
  top: 15%;
  animation-duration: 12s;
  animation-delay: 1.5s;
}

.shape-5 {
  width: 50px;
  height: 50px;
  right: 10%;
  bottom: 20%;
  animation-duration: 9s;
  animation-delay: 0.5s;
}

.shape-6 {
  width: 70px;
  height: 70px;
  left: 75%;
  bottom: 40%;
  animation-duration: 11s;
  animation-delay: 1s;
}

@keyframes float {
  0% {
    transform: translateY(0) rotate(0);
  }
  50% {
    transform: translateY(-20px) rotate(10deg);
  }
  100% {
    transform: translateY(0) rotate(0);
  }
}

/* Typing animation */
.typing-container {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.typing-text {
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid #ffffff;
}

.typing-animation {
  animation: typing 4s steps(60, end) forwards,
    blink-caret 0.75s step-end infinite;
  opacity: 1;
}

@keyframes typing {
  from {
    width: 0;
    opacity: 1;
  }
  to {
    width: 100%;
    opacity: 1;
  }
}

@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: white;
  }
}

/* Make sure elements are properly spaced on mobile */
@media (max-width: 640px) {
  .typing-text {
    font-size: 1rem;
  }
}
</style>
