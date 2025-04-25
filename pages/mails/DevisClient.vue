<template>
  <div
    class="w-full lg:w-1/3 bg-gradient-to-br from-gray-100 to-blue-100 p-4 md:p-6 rounded-lg shadow-inner mx-auto my-6"
  >
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
      Rappel de la demande
    </h2>

    <!-- Prix estimé -->
    <div class="p-4 bg-white rounded-lg shadow-sm mb-4 border border-blue-100">
      <p class="mb-2 text-xl text-center font-bold text-green-700">PRIX €</p>
      <p class="text-xs text-center text-gray-600 mb-2">Prix estimé</p>
    </div>

    <!-- Détails du formulaire -->
    <ul class="space-y-3 mt-4">
      <!-- Surface -->
      <li class="flex items-center">
        <div
          class="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center mr-3 flex-shrink-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 text-blue-700"
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
          <p class="text-xs text-gray-500">Surface</p>
          <p class="font-medium truncate text-gray-600">SURFACE m²</p>
        </div>
      </li>

      <!-- Ville -->
      <li class="flex items-center">
        <div
          class="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center mr-3 flex-shrink-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 text-blue-700"
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
          <p class="text-xs text-gray-500">Ville</p>
          <p class="font-medium truncate text-gray-600">VILLE</p>
        </div>
      </li>

      <!-- Fréquence -->
      <li class="flex items-center">
        <div
          class="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center mr-3 flex-shrink-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 text-blue-700"
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
          <p class="text-xs text-gray-500">Fréquence</p>
          <p class="font-medium truncate text-gray-600">FREQUENCE</p>
        </div>
      </li>

      <!-- Types de nettoyage -->
      <li class="flex items-center">
        <div
          class="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center mr-3 flex-shrink-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 text-blue-700"
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
          <p class="text-xs text-gray-500">Type(s)</p>
          <p class="font-medium truncate text-gray-600">TYPE</p>
        </div>
      </li>

      <!-- Type de client -->
      <li class="flex items-center">
        <div
          class="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center mr-3 flex-shrink-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 text-blue-700"
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
          <p class="text-xs text-gray-500">Client</p>
          <p class="font-medium truncate text-gray-600">CLIENTTYPE</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
