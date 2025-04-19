<template>
  <div class="relative" data-aos="fade-up">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
      <ServiceCard
        v-for="(service, i) in services"
        :key="i"
        :service="service"
      />
    </div>
  </div>
</template>

<script>
import ServiceCard from "./service/ServiceCard.vue";

export default {
  components: {
    ServiceCard,
  },
  data() {
    return {
      services: [
        {
          title: "Moquette & Tapis",
          desc: "Nous garantissons une désincrustation en profondeur grâce à des traitements spécialisés, assurant la longévité et la fraîcheur de vos revêtements.",
          icon: "M4 4h16v16H4z",
        },
        {
          title: "Vitres & Façades",
          desc: "Nettoyage sans traces, adapté à toutes les hauteurs pour des résultats impeccables qui subliment l'image de votre entreprise.",
          icon: "M12 2l3 6-3 6-3-6z",
        },
        {
          title: "Fin de Chantier",
          desc: "Après travaux, nous assurons un nettoyage complet et minutieux pour que vos espaces retrouvent leur éclat d'origine rapidement.",
          icon: "M6 18L18 6M6 6l12 12",
        },
        // Autres services peuvent être ajoutés ici...
      ],
    };
  },
};
</script>
