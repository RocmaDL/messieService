<template>
  <div>
    <!-- En-tête avec fond et animation -->
    <PageHeader
      title="Parlons de votre projet"
      subtitle="Notre équipe est à votre écoute pour répondre à toutes vos questions et vous proposer les meilleures solutions pour votre environnement."
      :showParticles="true"
    />

    <!-- Contenu principal -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <!-- Section coordonnées avec icônes animées -->
          <div class="lg:col-span-2" data-aos="fade-right">
            <ContactInfo :showSocial="true" />
          </div>

          <!-- Formulaire de contact amélioré -->
          <div class="lg:col-span-3" data-aos="fade-left">
            <ContactForm @form-sent="handleFormSent" />
          </div>
        </div>
      </div>
    </section>

    <!-- Section FAQ - Version esthétique -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-6">
        <ContactFaq />
      </div>
    </section>

    <!-- Carte Google Maps -->
    <section class="py-12 bg-white">
      <div class="container mx-auto px-6">
        <SectionTitle title="Nous retrouver" />
        <div data-aos="zoom-in">
          <ContactMap />
        </div>
      </div>
    </section>

    <!-- CTA final -->
    <CallToAction
      title="Prêt à transformer votre environnement ?"
      description="Contactez-nous dès maintenant pour une consultation gratuite ou utilisez notre simulateur pour obtenir un devis instantané."
    >
      <NuxtLink
        to="/simulateur"
        class="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition-colors transform hover:scale-105"
      >
        Simuler un devis
      </NuxtLink>
      <a
        href="tel:0247276042"
        class="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors transform hover:scale-105"
      >
        Appeler maintenant
      </a>
    </CallToAction>

    <!-- Notification -->
    <Notification
      v-if="showNotification"
      :message="notificationMessage"
      :show="showNotification"
      type="success"
      @close="showNotification = false"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      showNotification: false,
      notificationMessage:
        "Votre message a bien été envoyé. Nous vous répondrons très rapidement !",
    };
  },
  head() {
    return {
      title: "Contact - Messie Service",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Contactez notre équipe de professionnels pour tous vos besoins de nettoyage et d'entretien à Chambray-lès-Tours et en Indre-et-Loire.",
        },
      ],
    };
  },
  methods: {
    handleFormSent(formData) {
      console.log("Formulaire envoyé :", formData);
      this.showNotification = true;

      // Fermer automatiquement la notification après 5 secondes
      setTimeout(() => {
        this.showNotification = false;
      }, 5000);
    },
  },
};
</script>
