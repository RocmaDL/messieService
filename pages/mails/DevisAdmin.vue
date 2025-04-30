<template>
  <div
    class="max-w-2xl mx-auto my-6 bg-white p-6 rounded-lg border border-gray-300"
  >
    <!-- En-tête -->
    <div class="text-center mb-6">
      <h1 class="text-2xl font-bold text-blue-700">Votre devis personnalisé</h1>
      <p class="text-gray-600">
        Nous vous remercions pour votre demande de devis
      </p>
    </div>

    <!-- Prix estimé -->
    <div
      class="bg-green-50 border border-green-200 rounded-lg p-5 mb-6 text-center"
    >
      <h4 class="text-lg font-medium text-green-700 mb-1">Prix estimé</h4>
      <div class="text-3xl font-bold text-green-700">{{ price }} €</div>
      <p class="text-xs text-gray-600 mt-3">
        Le prix affiché est une estimation basée sur vos critères. Notre équipe
        vous contactera prochainement pour finaliser votre offre.
      </p>
    </div>

    <!-- Détails de la demande -->
    <div class="bg-gradient-to-br from-gray-50 to-blue-50 p-5 rounded-lg mb-6">
      <h2 class="text-lg font-semibold mb-4 flex items-center text-blue-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 mr-2 text-blue-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
        Récapitulatif de votre demande
      </h2>

      <!-- Détails du formulaire -->
      <ul class="space-y-4 mt-4">
        <!-- Surface -->
        <li class="flex items-center bg-white p-3 rounded shadow-sm">
          <div
            class="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-blue-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
          </div>
          <div class="min-w-0 flex-1">
            <p class="text-sm text-gray-500">Surface</p>
            <p class="font-medium text-gray-800">{{ area }} m²</p>
          </div>
        </li>

        <!-- Ville -->
        <li class="flex items-center bg-white p-3 rounded shadow-sm">
          <div
            class="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-blue-700"
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
          <div class="min-w-0 flex-1">
            <p class="text-sm text-gray-500">Ville</p>
            <p class="font-medium text-gray-800">{{ city }}</p>
          </div>
        </li>

        <!-- Fréquence -->
        <li class="flex items-center bg-white p-3 rounded shadow-sm">
          <div
            class="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-blue-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div class="min-w-0 flex-1">
            <p class="text-sm text-gray-500">Fréquence</p>
            <p class="font-medium text-gray-800">{{ frequency }}</p>
          </div>
        </li>

        <!-- Types de nettoyage -->
        <li class="flex items-center bg-white p-3 rounded shadow-sm">
          <div
            class="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-blue-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
          </div>
          <div class="min-w-0 flex-1">
            <p class="text-sm text-gray-500">Type(s) de nettoyage</p>
            <p class="font-medium text-gray-800">{{ types }}</p>
          </div>
        </li>

        <!-- Type de client -->
        <li class="flex items-center bg-white p-3 rounded shadow-sm">
          <div
            class="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-blue-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <div class="min-w-0 flex-1">
            <p class="text-sm text-gray-500">Type de client</p>
            <p class="font-medium text-gray-800">{{ clientType }}</p>
          </div>
        </li>

        <!-- Commentaire (si présent) -->
        <li
          v-if="comment"
          class="flex items-center bg-white p-3 rounded shadow-sm"
        >
          <div
            class="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-blue-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              />
            </svg>
          </div>
          <div class="min-w-0 flex-1">
            <p class="text-sm text-gray-500">Commentaire</p>
            <p class="font-medium text-gray-800">{{ comment }}</p>
          </div>
        </li>
      </ul>
    </div>

    <!-- Coordonnées du client -->
    <div class="bg-blue-50 border border-blue-100 p-5 rounded-lg mb-6">
      <h2 class="text-lg font-semibold mb-4 flex items-center text-blue-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
        Vos coordonnées
      </h2>

      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-4 rounded shadow-sm"
      >
        <div>
          <p class="text-sm text-gray-500">Nom complet</p>
          <p class="font-medium text-gray-800">{{ prenom }} {{ nom }}</p>
        </div>
        <div>
          <p class="text-sm text-gray-500">Email</p>
          <p class="font-medium text-gray-800">{{ email }}</p>
        </div>
        <div>
          <p class="text-sm text-gray-500">Téléphone</p>
          <p class="font-medium text-gray-800">{{ phone }}</p>
        </div>
        <div v-if="clientType === 'Professionnel'">
          <p class="text-sm text-gray-500">Entreprise</p>
          <p class="font-medium text-gray-800">{{ entreprise }}</p>
        </div>
      </div>
    </div>

    <!-- Message de bas de page et appel à l'action -->
    <div class="bg-blue-50 p-5 rounded-lg border border-blue-100 text-center">
      <h3 class="text-lg font-medium text-blue-800 mb-2">Prochaines étapes</h3>
      <p class="text-gray-700 mb-4">
        Notre équipe vous contactera dans les 24 à 48 heures pour discuter de
        votre projet et finaliser les détails de votre prestation de nettoyage.
      </p>
      <div
        class="bg-blue-600 text-white py-3 px-4 rounded-lg inline-block font-medium"
      >
        <a href="tel:0123456789" class="text-white no-underline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 inline-block mr-2"
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
          Nous contacter directement
        </a>
      </div>
    </div>

    <!-- Pied de page -->
    <div class="text-center mt-8 text-sm text-gray-500">
      <p>&copy; {{ new Date().getFullYear() }} Notre Entreprise de Nettoyage</p>
      <p class="mt-1">36 rue du Propre, 75000 Paris</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DevisClientEmail",
  props: {
    price: {
      type: Number,
      required: true,
    },
    area: {
      type: Number,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    frequency: {
      type: String,
      required: true,
    },
    types: {
      type: Array,
      required: true,
    },
    clientType: {
      type: String,
      required: true,
    },
    prenom: {
      type: String,
      required: true,
    },
    nom: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    entreprise: {
      type: String,
      required: false,
      default: "",
    },
  },
};
</script>

<style scoped>
/* Des styles supplémentaires peuvent être ajoutés ici si nécessaire */
</style>
