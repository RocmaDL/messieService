<template>
  <div>
    <!-- En-tête de page -->
    <PageHeader
      title="Nos Services de Nettoyage"
      subtitle="Des prestations adaptées à chaque situation, pour particuliers et professionnels."
      :showGrid="true"
    />

    <!-- Liste des services avec détails -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-6">
        <!-- Service 1 -->
        <div class="mb-20" data-aos="fade-up">
          <div
            class="flex flex-col-reverse md:flex-row items-center gap-10 mb-8"
          >
            <div class="md:w-1/2">
              <h2 class="text-3xl font-bold mb-4 text-blue-700">
                Nettoyage de Bureaux et Locaux
              </h2>
              <p class="text-lg text-gray-700 mb-6">
                Maintenez un environnement de travail propre et accueillant avec
                nos services d'entretien régulier ou ponctuel. Nos équipes
                qualifiées interviennent selon vos besoins et peuvent planifier
                les interventions en dehors de vos heures d'activité pour ne pas
                perturber votre activité professionnelle.
              </p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-center">
                  <svg
                    class="h-5 w-5 text-green-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Nettoyage quotidien ou hebdomadaire</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="h-5 w-5 text-green-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Entretien complet des sanitaires</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="h-5 w-5 text-green-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Aspiration et lavage des sols</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="h-5 w-5 text-green-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Dépoussiérage des surfaces</span>
                </li>
              </ul>
              <NuxtLink
                to="/simulateur"
                class="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Demander un devis
                <svg
                  class="ml-2 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </NuxtLink>
            </div>
            <div class="md:w-1/2">
              <PlaceholderImage
                alt="Nettoyage de bureaux"
                path="assets/images/office-cleaning.jpg"
              />
            </div>
          </div>
        </div>

        <!-- Service 2 -->
        <div class="mb-20" data-aos="fade-up">
          <div class="flex flex-col md:flex-row items-center gap-10 mb-8">
            <div class="md:w-1/2">
              <PlaceholderImage
                alt="Nettoyage de vitres"
                path="assets/images/window-cleaning.jpg"
                theme="green"
              />
            </div>
            <div class="md:w-1/2">
              <h2 class="text-3xl font-bold mb-4 text-blue-700">
                Nettoyage de Vitres
              </h2>
              <p class="text-lg text-gray-700 mb-6">
                Retrouvez une parfaite transparence et une luminosité optimale
                avec notre service de nettoyage de vitres professionnel. Nous
                utilisons des techniques et des équipements adaptés pour tous
                types de vitres, même en hauteur ou difficiles d'accès.
              </p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-center">
                  <svg
                    class="h-5 w-5 text-green-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Vitres intérieures et extérieures</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="h-5 w-5 text-green-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Baies vitrées et grandes surfaces</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="h-5 w-5 text-green-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Nettoyage des huisseries et encadrements</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="h-5 w-5 text-green-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Vérandas et verrières</span>
                </li>
              </ul>
              <NuxtLink
                to="/simulateur"
                class="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Demander un devis
                <svg
                  class="ml-2 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Service 3 -->
        <div class="mb-20" data-aos="fade-up">
          <div
            class="flex flex-col-reverse md:flex-row items-center gap-10 mb-8"
          >
            <div class="md:w-1/2">
              <h2 class="text-3xl font-bold mb-4 text-blue-700">
                Nettoyage Fin de Chantier
              </h2>
              <p class="text-lg text-gray-700 mb-6">
                Après vos travaux, assurez-vous que votre espace soit impeccable
                et prêt à être utilisé. Notre service de nettoyage post-chantier
                élimine toutes traces de travaux (poussière, résidus, taches...)
                pour vous permettre d'emménager dans un environnement
                parfaitement propre.
              </p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-center">
                  <svg
                    class="h-5 w-5 text-green-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Élimination des résidus de construction</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="h-5 w-5 text-green-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Nettoyage en profondeur des sols</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="h-5 w-5 text-green-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Nettoyage complet des sanitaires</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="h-5 w-5 text-green-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Dépoussiérage complet</span>
                </li>
              </ul>
              <NuxtLink
                to="/simulateur"
                class="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Demander un devis
                <svg
                  class="ml-2 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </NuxtLink>
            </div>
            <div class="md:w-1/2">
              <PlaceholderImage
                alt="Nettoyage fin de chantier"
                path="assets/images/construction-cleaning.jpg"
                theme="gray"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tableau comparatif des services -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-6">
        <SectionTitle
          title="Comparatif de nos Formules"
          subtitle="Choisissez la prestation la plus adaptée à votre situation"
        />

        <div class="overflow-x-auto mt-10" data-aos="fade-up">
          <table
            class="w-full min-w-full border-collapse bg-white rounded-lg shadow-lg"
          >
            <thead>
              <tr class="bg-blue-600 text-white">
                <th class="py-4 px-6 text-left">Service</th>
                <th class="py-4 px-6 text-center">Standard</th>
                <th class="py-4 px-6 text-center">Premium</th>
                <th class="py-4 px-6 text-center">Sur-mesure</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-gray-200">
                <td class="py-4 px-6 font-medium">Fréquence</td>
                <td class="py-4 px-6 text-center">Ponctuelle</td>
                <td class="py-4 px-6 text-center">
                  Régulière (hebdo/mensuelle)
                </td>
                <td class="py-4 px-6 text-center">Selon besoins</td>
              </tr>
              <tr class="border-b border-gray-200 bg-gray-50">
                <td class="py-4 px-6 font-medium">Nettoyage des sols</td>
                <td class="py-4 px-6 text-center">
                  <svg
                    class="h-5 w-5 text-green-500 mx-auto"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </td>
                <td class="py-4 px-6 text-center">
                  <svg
                    class="h-5 w-5 text-green-500 mx-auto"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </td>
                <td class="py-4 px-6 text-center">
                  <svg
                    class="h-5 w-5 text-green-500 mx-auto"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </td>
              </tr>
              <tr class="border-b border-gray-200">
                <td class="py-4 px-6 font-medium">Sanitaires</td>
                <td class="py-4 px-6 text-center">
                  <svg
                    class="h-5 w-5 text-green-500 mx-auto"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </td>
                <td class="py-4 px-6 text-center">
                  <svg
                    class="h-5 w-5 text-green-500 mx-auto"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </td>
                <td class="py-4 px-6 text-center">
                  <svg
                    class="h-5 w-5 text-green-500 mx-auto"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </td>
              </tr>
              <tr class="border-b border-gray-200 bg-gray-50">
                <td class="py-4 px-6 font-medium">Vitres</td>
                <td class="py-4 px-6 text-center">
                  <svg
                    class="h-5 w-5 text-gray-400 mx-auto"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </td>
                <td class="py-4 px-6 text-center">
                  <svg
                    class="h-5 w-5 text-green-500 mx-auto"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </td>
                <td class="py-4 px-6 text-center">
                  <svg
                    class="h-5 w-5 text-green-500 mx-auto"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </td>
              </tr>
              <tr class="border-b border-gray-200">
                <td class="py-4 px-6 font-medium">Produits écologiques</td>
                <td class="py-4 px-6 text-center">
                  <svg
                    class="h-5 w-5 text-gray-400 mx-auto"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </td>
                <td class="py-4 px-6 text-center">
                  <svg
                    class="h-5 w-5 text-green-500 mx-auto"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </td>
                <td class="py-4 px-6 text-center">
                  <svg
                    class="h-5 w-5 text-green-500 mx-auto"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </td>
              </tr>
              <tr class="bg-gray-50">
                <td class="py-4 px-6 font-medium">Prix indicatif</td>
                <td class="py-4 px-6 text-center font-semibold text-green-600">
                  À partir de 20€/h
                </td>
                <td class="py-4 px-6 text-center font-semibold text-green-600">
                  À partir de 25€/h
                </td>
                <td class="py-4 px-6 text-center font-semibold text-green-600">
                  Sur devis
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Call-to-action -->
    <CallToAction
      title="Prêt à confier votre nettoyage à des pros ?"
      description="Notre équipe est à votre écoute pour vous proposer une solution adaptée à votre besoin et à votre budget."
    />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Services de Nettoyage - Messie Service",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Découvrez tous nos services de nettoyage pour particuliers et professionnels : bureaux, vitres, fin de chantier et plus encore. Intervention en Indre-et-Loire.",
        },
      ],
    };
  },
};
</script>
