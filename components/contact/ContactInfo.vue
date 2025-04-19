<template>
  <div class="bg-gray-50 rounded-lg shadow-lg p-8 h-full">
    <h2 class="text-2xl font-bold mb-6 text-blue-600 flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      Nos coordonnées
    </h2>

    <div class="space-y-8">
      <div class="flex items-start">
        <div
          class="bg-blue-600 text-white rounded-full p-3 mr-4 shadow-md animate-pulse-slow"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
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
        <div>
          <h3 class="font-semibold text-lg text-gray-800 mb-1">Adresse</h3>
          <p class="text-gray-600">
            {{ address.street }}<br />{{ address.city }}
          </p>
        </div>
      </div>

      <div class="flex items-start">
        <div
          class="bg-blue-600 text-white rounded-full p-3 mr-4 shadow-md animate-pulse-slow animation-delay-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        </div>
        <div>
          <h3 class="font-semibold text-lg text-gray-800 mb-1">Téléphone</h3>
          <p class="text-gray-600">
            <a
              :href="`tel:${phone}`"
              class="text-blue-600 hover:underline transition"
            >
              {{ phone }}
            </a>
          </p>
        </div>
      </div>

      <div class="flex items-start">
        <div
          class="bg-blue-600 text-white rounded-full p-3 mr-4 shadow-md animate-pulse-slow animation-delay-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
        <div>
          <h3 class="font-semibold text-lg text-gray-800 mb-1">Email</h3>
          <p class="text-gray-600">
            <a
              :href="`mailto:${email}`"
              class="text-blue-600 hover:underline transition"
            >
              {{ email }}
            </a>
          </p>
        </div>
      </div>

      <div class="flex items-start">
        <div
          class="bg-blue-600 text-white rounded-full p-3 mr-4 shadow-md animate-pulse-slow animation-delay-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div>
          <h3 class="font-semibold text-lg text-gray-800 mb-1">
            Horaires d'ouverture
          </h3>
          <p class="text-gray-600">{{ hours }}</p>
        </div>
      </div>
    </div>

    <!-- Réseaux sociaux -->
    <div v-if="showSocial" class="mt-10">
      <h3 class="font-semibold text-gray-800 mb-3">Suivez-nous</h3>
      <div class="flex space-x-4">
        <a
          v-for="(network, index) in socialNetworks"
          :key="index"
          :href="network.url"
          :aria-label="`Suivez-nous sur ${network.name}`"
          class="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition transform hover:scale-110"
        >
          <component :is="network.icon" class="w-5 h-5" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    address: {
      type: Object,
      default: () => ({
        street: "5 rue Péchers",
        city: "37170 Chambray‑lès‑Tours",
      }),
    },
    phone: {
      type: String,
      default: "02 47 27 60 42",
    },
    email: {
      type: String,
      default: "contact@messieservice.com",
    },
    hours: {
      type: String,
      default: "Lundi - Samedi : 10h00 – 19h00",
    },
    showSocial: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      socialNetworks: [
        {
          name: "Twitter",
          url: "#",
          icon: {
            template: `
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
            `,
          },
        },
        {
          name: "Instagram",
          url: "#",
          icon: {
            template: `
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            `,
          },
        },
        {
          name: "Facebook",
          url: "#",
          icon: {
            template: `
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
              </svg>
            `,
          },
        },
      ],
    };
  },
};
</script>

<style scoped>
.animate-pulse-slow {
  animation: pulse 3s infinite;
}

.animation-delay-200 {
  animation-delay: 0.2s;
}

.animation-delay-400 {
  animation-delay: 0.4s;
}

.animation-delay-600 {
  animation-delay: 0.6s;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}
</style>
