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
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clip-rule="evenodd"
        />
      </svg>
      À propos
    </h3>

    <div class="flex items-center mb-4">
      <div
        class="h-10 w-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      </div>
      <div>
        <h4 class="text-white font-medium">Messie Services</h4>
        <p class="text-xs text-gray-400">L'excellence depuis 2012</p>
      </div>
    </div>

    <p class="text-sm leading-relaxed">
      Messie Services propose des prestations de nettoyage sur mesure pour
      particuliers et professionnels, combinant expertise technique, équipement
      de pointe et respect de l'environnement.
    </p>

    <div class="pt-2">
      <a
        href="/services"
        class="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
      >
        En savoir plus
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 ml-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </a>
    </div>
  </div>
</template>
