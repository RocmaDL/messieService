<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold text-center mb-10" data-aos="fade-up">
        Informations Pratiques
      </h2>

      <div
        class="bg-white rounded-lg shadow-lg overflow-hidden"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div class="grid grid-cols-1 md:grid-cols-2">
          <div class="p-6 md:border-r border-gray-200">
            <div class="flex items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-blue-600 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 9V7a2 2 0 00-2-2H9a2 2 0 00-2 2v2m0 9a2 2 0 002 2h6a2 2 0 002-2m0-9v9M9 7h6"
                />
              </svg>
              <h3 class="text-xl font-bold">Horaires d'ouverture</h3>
            </div>
            <table class="w-full text-left">
              <thead class="sr-only">
                <tr>
                  <th scope="col">Jour</th>
                  <th scope="col">Horaires</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="py-1 pr-4 font-medium">Lundi - Vendredi</td>
                  <td>10h00 – 19h00</td>
                </tr>
                <tr>
                  <td class="py-1 pr-4 font-medium">Samedi</td>
                  <td>10h00 – 19h00</td>
                </tr>
                <tr>
                  <td class="py-1 pr-4 font-medium">Dimanche</td>
                  <td>Sur rendez-vous</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="p-6">
            <div class="flex items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-blue-600 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
              <h3 class="text-xl font-bold">Moyens de paiement</h3>
            </div>
            <ul class="grid grid-cols-2 gap-2">
              <li
                v-for="(method, index) in paymentMethods"
                :key="index"
                class="flex items-center"
              >
                <svg
                  class="h-4 w-4 text-green-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>{{ method }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      paymentMethods: [
        "Cartes bancaires",
        "Visa & Mastercard",
        "Chèques",
        "Espèces",
      ],
    };
  },
};
</script>
