<template>
  <header
    class="sticky top-0 z-50 bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg transition-all duration-300"
    :class="{ 'navbar-scrolled': scrolled }"
  >
    <nav class="container mx-auto flex items-center justify-between p-4">
      <!-- Logo & Title -->
      <NuxtLink to="/" class="flex items-center space-x-3 group">
        <div
          class="h-10 w-10 bg-white rounded-full flex items-center justify-center shadow-md overflow-hidden transform group-hover:scale-110 transition-transform duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-blue-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div>
          <h1 class="text-xl sm:text-2xl font-bold whitespace-nowrap">
            Messie Services
          </h1>
          <p
            class="text-xs sm:text-sm opacity-75 transform translate-y-0 group-hover:-translate-y-1 transition-transform"
          >
            Excellence & Propreté
          </p>
        </div>
      </NuxtLink>

      <!-- Desktop Menu -->
      <ul class="hidden md:flex items-center space-x-2 lg:space-x-6">
        <li>
          <NuxtLink
            to="/"
            class="relative py-2 px-3 hover:text-blue-200 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all hover:after:w-full"
            :class="{ 'text-blue-200 after:w-full': $route.path === '/' }"
          >
            Accueil
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/services"
            class="relative py-2 px-3 hover:text-blue-200 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all hover:after:w-full"
            :class="{
              'text-blue-200 after:w-full': $route.path === '/services',
            }"
          >
            Nos Services
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/simulateur"
            class="group relative overflow-hidden bg-white text-blue-600 px-4 py-2 rounded-lg font-medium shadow hover:shadow-lg transition-all duration-300"
          >
            <span class="relative z-10">Simuler un devis</span>
            <span
              class="absolute inset-0 bg-gradient-to-r from-blue-200 to-blue-100 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"
            ></span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/contact"
            class="relative py-2 px-3 hover:text-blue-200 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all hover:after:w-full"
            :class="{
              'text-blue-200 after:w-full': $route.path === '/contact',
            }"
          >
            Contact
          </NuxtLink>
        </li>
      </ul>

      <!-- Mobile Menu Button -->
      <button
        @click="menuOpen = !menuOpen"
        class="md:hidden focus:outline-none relative z-20 p-2"
        :class="{ 'text-blue-600': menuOpen }"
        aria-label="Toggle menu"
      >
        <div class="relative w-6 h-5 transform transition-all duration-300">
          <span
            class="absolute bg-current transform transition-transform duration-300 h-0.5 w-6 rounded-full"
            :class="menuOpen ? 'rotate-45 translate-y-2' : '-translate-y-2'"
          ></span>
          <span
            class="absolute bg-current transform transition-opacity duration-300 h-0.5 w-6 rounded-full"
            :class="menuOpen ? 'opacity-0' : 'opacity-100'"
          ></span>
          <span
            class="absolute bg-current transform transition-transform duration-300 h-0.5 w-6 rounded-full"
            :class="menuOpen ? '-rotate-45 translate-y-2' : 'translate-y-2'"
          ></span>
        </div>
      </button>
    </nav>

    <!-- Mobile Dropdown -->
    <div
      class="fixed inset-0 bg-blue-600 bg-opacity-95 backdrop-blur-sm z-10 transform transition-all duration-300 md:hidden"
      :class="menuOpen ? 'translate-x-0' : 'translate-x-full'"
      @click.self="menuOpen = false"
    >
      <div class="h-full flex flex-col items-center justify-center text-center">
        <ul class="space-y-6 text-white text-lg">
          <li>
            <NuxtLink
              to="/"
              @click="menuOpen = false"
              class="block px-6 py-2 transition-all hover:text-blue-200 transform hover:scale-110"
              :class="{ 'text-white font-bold scale-110': $route.path === '/' }"
            >
              Accueil
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/services"
              @click="menuOpen = false"
              class="block px-6 py-2 transition-all hover:text-blue-200 transform hover:scale-110"
              :class="{
                'text-white font-bold scale-110': $route.path === '/services',
              }"
            >
              Nos Services
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/simulateur"
              @click="menuOpen = false"
              class="block mx-4 px-6 py-3 mt-4 bg-white text-blue-600 rounded-lg text-center font-medium shadow-lg hover:bg-gray-100 transition-colors transform hover:scale-105"
            >
              Simuler un devis
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/contact"
              @click="menuOpen = false"
              class="block px-6 py-2 transition-all hover:text-blue-200 transform hover:scale-110"
              :class="{
                'text-white font-bold scale-110': $route.path === '/contact',
              }"
            >
              Contact
            </NuxtLink>
          </li>
        </ul>

        <!-- Quick Contact in Mobile Menu -->
        <div class="mt-12 px-6 py-4 bg-white bg-opacity-10 rounded-lg">
          <p class="text-white font-medium mb-2">Besoin d'aide ?</p>
          <a
            href="tel:0247276042"
            class="flex items-center justify-center text-white hover:text-blue-200"
          >
            <svg
              class="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            02 47 27 60 42
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
      scrolled: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 20;
    },
  },
  watch: {
    $route() {
      this.menuOpen = false;
    },
    menuOpen(val) {
      // Prevent body scrolling when menu is open
      document.body.style.overflow = val ? "hidden" : "";
    },
  },
};
</script>

<style scoped>
/* Classe pour l'effet de défilement */
.navbar-scrolled {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(4px);
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.3);
}

/* Animation pour les éléments du menu mobile */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.mobile-menu-item {
  animation: fadeInUp 0.4s ease forwards;
  opacity: 0;
}

.mobile-menu-item:nth-child(1) {
  animation-delay: 0.1s;
}

.mobile-menu-item:nth-child(2) {
  animation-delay: 0.2s;
}

.mobile-menu-item:nth-child(3) {
  animation-delay: 0.3s;
}

.mobile-menu-item:nth-child(4) {
  animation-delay: 0.4s;
}

/* Remplacer la propriété background-opacity par une approche compatible */
.bg-transparent-white {
  background-color: rgba(255, 255, 255, 0.8);
}
</style>
