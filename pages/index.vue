<template>
  <div>
    <!-- Hero Section avec appel à l'action -->
    <section
      class="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20 lg:py-32 overflow-hidden"
    >
      <!-- Éléments décoratifs d'arrière-plan -->
      <div class="absolute inset-0 opacity-20">
        <!-- SVG abstrait en arrière-plan -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 800 800"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-width="1"
                d="M0 0h40v40H0z"
              />
            </pattern>
          </defs>
          <rect width="800" height="800" fill="url(#grid)" />
        </svg>
      </div>

      <!-- Animation de particules -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="particles-container">
          <div
            v-for="n in 20"
            :key="`particle-${n}`"
            class="particle"
            :style="{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }"
          ></div>
        </div>
      </div>

      <div class="container mx-auto px-6 relative z-10">
        <div class="flex flex-col lg:flex-row items-center">
          <div class="lg:w-1/2" data-aos="fade-right">
            <h1
              class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Des services de nettoyage
              <span class="text-yellow-300">professionnels</span> pour votre
              confort
            </h1>
            <p class="text-xl mb-8 text-blue-100 max-w-lg">
              Messie Service vous propose des prestations de qualité pour
              particuliers et professionnels à Chambray-lès-Tours et dans toute
              l'Indre-et-Loire.
            </p>
            <div class="flex flex-wrap gap-4">
              <NuxtLink
                to="/simulateur"
                class="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition-colors transform hover:-translate-y-1 hover:shadow-lg"
              >
                Simuler un devis
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 inline ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </NuxtLink>
              <NuxtLink
                to="/contact"
                class="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Nous contacter
              </NuxtLink>
            </div>
          </div>
          <div class="lg:w-1/2 mt-10 lg:mt-0" data-aos="fade-left">
            <PlaceholderImage
              alt="Services de nettoyage professionnel"
              path="assets/images/cleaning-hero.png"
              theme="blue"
              height="400px"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Section Avantages avec icônes -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-6">
        <SectionTitle
          title="Pourquoi nous choisir ?"
          subtitle="Nos clients nous font confiance pour notre professionnalisme, notre réactivité et notre attention aux détails."
        />

        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div
            class="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center"
          >
            <div
              class="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg
                class="w-8 h-8 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Qualité garantie</h3>
            <p class="text-gray-600">
              Des prestations rigoureuses avec un contrôle qualité systématique.
            </p>
          </div>
          <div
            class="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center"
          >
            <div
              class="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg
                class="w-8 h-8 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
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
            <h3 class="text-xl font-semibold mb-2">Réactivité</h3>
            <p class="text-gray-600">
              Intervention rapide et disponibilité 6 jours sur 7.
            </p>
          </div>
          <div
            class="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center"
          >
            <div
              class="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg
                class="w-8 h-8 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Fiabilité</h3>
            <p class="text-gray-600">
              Personnel formé et équipements professionnels adaptés.
            </p>
          </div>
          <div
            class="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center"
          >
            <div
              class="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg
                class="w-8 h-8 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
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
            </div>
            <h3 class="text-xl font-semibold mb-2">Tarifs compétitifs</h3>
            <p class="text-gray-600">
              Solutions adaptées à vos besoins et à votre budget.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Nos Services -->
    <ExpertiseDomain title="Nos services de nettoyage">
      <ExpertiseCard
        title="Nettoyage Bureaux & Locaux"
        description="Entretenez un environnement de travail propre et sain pour vos employés et clients avec nos services d'entretien régulier ou ponctuel."
        :services="[
          'Nettoyage des espaces communs',
          'Entretien des sanitaires',
          'Nettoyage des vitres',
          'Entretien des sols',
        ]"
      >
        <template #icon>
          <svg
            class="h-12 w-12 text-white"
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
        </template>
      </ExpertiseCard>

      <ExpertiseCard
        title="Nettoyage de Vitres"
        description="Retrouvez une parfaite transparence et une luminosité optimale grâce à notre service de nettoyage de vitres pour particuliers et professionnels."
        :services="[
          'Vitres et baies vitrées',
          'Vérandas et verrières',
          'Miroirs et surfaces vitrées',
          'Nettoyage en hauteur',
        ]"
      >
        <template #icon>
          <svg
            class="h-12 w-12 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </template>
      </ExpertiseCard>

      <ExpertiseCard
        title="Nettoyage après Chantier"
        description="Éliminez toute trace de travaux avec notre service complet de nettoyage post-chantier pour rendre l'espace impeccable avant emménagement."
        :services="[
          'Élimination des résidus et poussières',
          'Nettoyage complet des surfaces',
          'Nettoyage des vitres et huisseries',
          'Traitement des sols',
        ]"
      >
        <template #icon>
          <svg
            class="h-12 w-12 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            />
          </svg>
        </template>
      </ExpertiseCard>
    </ExpertiseDomain>

    <!-- Section Témoignages -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-6">
        <SectionTitle
          title="Ce que nos clients disent de nous"
          subtitle="Des témoignages authentiques de clients satisfaits par nos prestations de nettoyage."
        />

        <div class="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="flex items-center mb-4">
              <div class="text-yellow-400 flex">
                <svg
                  v-for="star in 5"
                  :key="star"
                  class="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
              </div>
              <span class="ml-2 text-gray-600">Il y a 2 semaines</span>
            </div>
            <p class="text-gray-700 mb-4">
              "Équipe super professionnelle, ponctuelle et efficace. Le résultat
              était impeccable et le prix très raisonnable. Je recommande
              vivement leurs services de nettoyage de bureaux."
            </p>
            <div class="flex items-center">
              <span class="font-semibold">Marie-Claude P.</span>
              <span class="mx-2">•</span>
              <span class="text-gray-600">Entreprise à Tours</span>
            </div>
          </div>

          <div
            class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="flex items-center mb-4">
              <div class="text-yellow-400 flex">
                <svg
                  v-for="star in 5"
                  :key="star"
                  class="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
              </div>
              <span class="ml-2 text-gray-600">Il y a 1 mois</span>
            </div>
            <p class="text-gray-700 mb-4">
              "J'ai fait appel à Messie Service pour un nettoyage post-chantier
              et j'ai été bluffé par la qualité du service. Ils ont su éliminer
              toutes les traces de travaux et ont rendu ma maison impeccable."
            </p>
            <div class="flex items-center">
              <span class="font-semibold">Thomas D.</span>
              <span class="mx-2">•</span>
              <span class="text-gray-600">Particulier à Chambray</span>
            </div>
          </div>

          <div
            class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div class="flex items-center mb-4">
              <div class="text-yellow-400 flex">
                <svg
                  v-for="star in 5"
                  :key="'a' + star"
                  class="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
              </div>
              <span class="ml-2 text-gray-600">Il y a 2 mois</span>
            </div>
            <p class="text-gray-700 mb-4">
              "Excellent service de nettoyage de vitres qui a redonné une
              lumière incroyable à notre local commercial. Service rapide,
              personnel courtois et prix très compétitif."
            </p>
            <div class="flex items-center">
              <span class="font-semibold">Sophie B.</span>
              <span class="mx-2">•</span>
              <span class="text-gray-600">Commerce à Saint-Avertin</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Informations pratiques -->
    <InfoPratiques />

    <!-- Call-to-Action -->
    <CallToAction />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title:
        "Messie Service - Entreprise de nettoyage professionnel à Chambray-lès-Tours",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Services de nettoyage pour particuliers et professionnels : bureaux, vitres, fin de chantier, domicile. Intervention dans toute l'Indre-et-Loire.",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Animation des particules décoratives */
.particles-container {
  width: 100%;
  height: 100%;
}

.particle {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.3);
  animation: float 15s infinite;
}

@keyframes float {
  0% {
    transform: translateY(0) translateX(0) scale(1);
    opacity: 0.7;
  }
  50% {
    transform: translateY(-20px) translateX(20px) scale(1.5);
    opacity: 0.3;
  }
  100% {
    transform: translateY(0) translateX(0) scale(1);
    opacity: 0.7;
  }
}
</style>
