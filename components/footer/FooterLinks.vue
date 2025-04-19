<template>
  <div class="space-y-4">
    <h3 class="text-white text-lg font-semibold mb-4 flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 mr-2 text-blue-400"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
          clip-rule="evenodd"
        />
      </svg>
      Liens rapides
    </h3>
    <ul class="space-y-3">
      <li v-for="(link, index) in links" :key="index" class="group">
        <NuxtLink
          :to="link.url"
          class="inline-flex items-center text-gray-300 hover:text-white transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 mr-2 text-blue-400 group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
          {{ link.text }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { text: "Accueil", url: "/" },
        { text: "Nos Services", url: "/services" },
        { text: "Simulateur de devis", url: "/simulateur" },
        { text: "Contact", url: "/contact" },
      ],
    };
  },
};
</script>
