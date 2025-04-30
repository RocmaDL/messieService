<template>
  <div class="bg-gradient-to-br from-blue-100 to-indigo-100 min-h-screen">
    <!-- toast de confirmation avec animation -->
    <Notification
      v-if="showNotification"
      message="Votre demande a été envoyée !"
      :show="showNotification"
      type="success"
      @close="showNotification = false"
    />

    <!-- conteneur principal avec fond amélioré -->
    <div
      id="container"
      v-if="currentStep <= steps.length"
      class="py-12 px-4 min-h-[80vh] flex flex-col items-center justify-center relative overflow-hidden"
    >
      <!-- Éléments de décoration -->
      <div
        class="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-20 -mr-32 -mt-16"
      ></div>
      <div
        class="absolute bottom-0 left-0 w-48 h-48 bg-indigo-100 rounded-full opacity-20 -ml-16 -mb-16"
      ></div>

      <!-- titre avec animation au chargement -->
      <h1
        class="text-4xl font-semibold mb-8 text-center relative fade-in-down text-blue-900"
      >
        <span
          class="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-indigo-900"
        >
          Simulateur de prestation
        </span>
      </h1>

      <div
        id="card"
        class="max-w-6xl w-full p-6 md:p-8 bg-white flex flex-col lg:flex-row gap-6 md:gap-8 rounded-xl shadow-xl relative overflow-hidden fade-in-up mb-8"
      >
        <!-- Élément décoratif dans le coin supérieur du card -->
        <div
          class="absolute -top-12 -right-12 w-24 h-24 bg-blue-100 rounded-full"
        ></div>

        <!-- colonne de gauche : formulaire centré verticalement -->
        <div
          id="card-form"
          class="flex-1 flex flex-col justify-center relative z-10"
        >
          <!-- décor SVG amélioré -->
          <div class="mb-6 overflow-hidden">
            <svg
              viewBox="0 0 1440 120"
              class="w-full h-16 text-gradient-to-r from-blue-50 to-indigo-50"
              preserveAspectRatio="none"
            >
              <path
                fill="currentColor"
                d="M0,32L40,42.7C80,53,160,75,240,74.7C320,75,400,53,480,42.7C560,32,640,32,720,48C800,64,880,96,960,96C1040,96,1120,64,1200,58.7C1280,53,1360,75,1400,85.3L1440,96L1440,0L0,0Z"
              />
            </svg>
          </div>

          <!-- Indicateur d'étapes -->
          <StepIndicator
            :currentStep="currentStep"
            :steps="steps"
            :stepNames="stepNames"
          />

          <form @submit.prevent="handleFormSubmit" class="form-text-color">
            <transition name="slide-fade" mode="out-in">
              <div :key="currentStep" class="form-container">
                <!-- Étape 1 : Surface en m² -->
                <FormStepArea v-if="currentStep === 1" v-model="form.area" />

                <!-- Étape 2 : Ville -->
                <FormStepCity
                  v-else-if="currentStep === 2"
                  v-model="form.city"
                  ref="cityStep"
                />

                <!-- Étape 3 : Fréquence de prestation -->
                <FormStepFrequency
                  v-else-if="currentStep === 3"
                  v-model="form.frequency"
                />

                <!-- Étape 4 : Type de nettoyage -->
                <FormStepTypes
                  v-else-if="currentStep === 4"
                  v-model="form.cleaningTypes"
                />

                <!-- Étape 5 : Particulier ou Professionnel -->
                <FormStepClientType
                  v-else-if="currentStep === 5"
                  v-model="form.clientType"
                />

                <!-- Étape 6 : Récapitulatif et contact -->
                <FormStepSummary
                  v-else-if="currentStep === 6"
                  ref="formStepSummary"
                  :form-data="form"
                  :contact-data="contactInfo"
                  :calculated-price="calculatePrice()"
                  @update-contact="updateContactInfo"
                />
              </div>
            </transition>

            <!-- Navigation -->
            <div class="mt-8 flex items-center justify-between">
              <Button
                type="button"
                @click="prevStep"
                :disabled="currentStep === 1"
                variant="ghost"
                size="md"
              >
                <template #icon-start>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </template>
                Précédent
              </Button>

              <!-- Affichage de l'étape actuelle -->
              <div
                class="flex items-center bg-blue-50 px-4 py-2 rounded-full shadow-sm"
              >
                <span
                  class="flex items-center justify-center bg-blue-600 text-white w-6 h-6 rounded-full mr-2 text-xs font-bold"
                >
                  {{ currentStep }}
                </span>
                <span class="text-blue-700 font-medium">{{
                  stepNames[currentStep - 1]
                }}</span>
                <span class="mx-2 text-blue-400">/</span>
                <span class="text-gray-600">{{ steps.length }} étapes</span>
              </div>

              <div class="flex gap-2">
                <Button
                  type="submit"
                  :disabled="
                    isSent ||
                    (currentStep === steps.length && !isContactFormValid)
                  "
                  :loading="isSubmitting"
                  class="submit-btn-pulse"
                >
                  {{
                    currentStep < steps.length
                      ? "Suivant"
                      : "Envoyer la demande"
                  }}
                  <template #icon-end>
                    <svg
                      v-if="currentStep < steps.length"
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 ml-1"
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
                    <svg
                      v-else
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                  </template>
                </Button>
                <Button
                  v-if="isSent && currentStep === steps.length"
                  type="button"
                  @click="resetAll"
                  variant="success"
                >
                  <template #icon-start>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                  </template>
                  Nouvelle demande
                </Button>
              </div>
            </div>
          </form>
        </div>

        <!-- colonne de droite : résumé -->
        <FormSummaryCard
          :form-data="form"
          :calculated-price="calculatePrice()"
        />
      </div>
    </div>

    <!-- Page de confirmation -->
    <div
      id="container"
      v-else
      class="py-12 px-4 min-h-[80vh] flex flex-col items-center justify-center relative"
    >
      <!-- Éléments de décoration -->
      <div
        class="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-20 -mr-32 -mt-16"
      ></div>
      <div
        class="absolute bottom-0 left-0 w-48 h-48 bg-indigo-100 rounded-full opacity-20 -ml-16 -mb-16"
      ></div>

      <!-- titre avec animation au chargement -->
      <div class="text-center">
        <div class="inline-block p-4 bg-green-100 rounded-full mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-16 w-16 text-green-600 animate-bounce"
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
        <h1 class="text-4xl font-semibold mb-4 relative fade-in-down">
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-800"
          >
            Demande envoyée avec succès !
          </span>
        </h1>
        <p class="text-lg text-gray-600 mb-8">
          Nous vous contacterons prochainement
        </p>

        <Button @click="resetAll">
          <template #icon-start>
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
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </template>
          Nouvelle demande
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
// Nous utilisons l'auto-import des composants
// Les composants seront automatiquement importés depuis le répertoire components

export default {
  data() {
    return {
      currentStep: 1,
      steps: [1, 2, 3, 4, 5, 6],
      stepNames: [
        "Surface",
        "Ville",
        "Fréquence",
        "Types",
        "Profil",
        "Contact",
      ],
      form: {
        city: "",
        frequency: "",
        cleaningTypes: [],
        clientType: "",
        area: null,
      },
      contactInfo: {
        firstName: "",
        lastName: "",
        companyName: "",
        phone: "",
        email: "",
        comment: "",
      },
      showNotification: false,
      isSent: false,
      isSubmitting: false,
      isContactFormValid: false, // Ajout d'une nouvelle propriété pour gérer l'état de validation
    };
  },
  mounted() {
    this.resetAll();
    this.loadGoogleScript();

    // Animation de confetti lorsque le formulaire est soumis
    this.$nextTick(() => {
      if (this.currentStep > this.steps.length) {
        this.celebrateSubmission();
      }
    });
  },
  watch: {
    form: {
      handler() {
        this.isSent = false;
      },
      deep: true,
    },
    contactInfo: {
      handler(newVal) {
        // Vérifier si les champs obligatoires sont remplis
        this.isContactFormValid =
          !!newVal.firstName?.trim() &&
          !!newVal.lastName?.trim() &&
          !!newVal.email?.trim() &&
          !!newVal.phone?.trim() &&
          this.validateEmail(newVal.email);
      },
      deep: true,
    },
  },
  methods: {
    validateEmail(email) {
      // Expression régulière simple pour valider l'email
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
    },
    resetAll() {
      this.currentStep = 1;
      this.isSent = false;
      this.isSubmitting = false;
      this.showNotification = false;
      this.isContactFormValid = false; // Réinitialiser la validation du formulaire
      this.form = {
        city: "",
        frequency: "",
        cleaningTypes: [],
        clientType: "",
        area: null,
      };
      this.contactInfo = {
        firstName: "",
        lastName: "",
        companyName: "",
        phone: "",
        email: "",
        comment: "",
      };
      // Scroll vers le haut
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    loadGoogleScript() {
      if (!window.google) {
        const script = document.createElement("script");
        script.src =
          "https://maps.googleapis.com/maps/api/js?key=AIzaSyDAN5YO7jyKjUCP9YgBpG86ePbSYb_B_dY&libraries=places&callback=initAutocompleteCb";
        window.initAutocompleteCb = () => {
          if (this.$refs.cityStep) {
            this.$refs.cityStep.initAutocomplete();
          }
        };
        document.head.appendChild(script);
      } else if (this.$refs.cityStep) {
        this.$refs.cityStep.initAutocomplete();
      }
    },
    nextStep() {
      if (this.currentStep < this.steps.length) {
        // Empêcher le défilement de page
        event.preventDefault();

        this.currentStep++;

        // Focus sur le premier champ de l'étape suivante après transition
        this.$nextTick(() => {
          const inputs = document.querySelectorAll(
            'input:not([type="checkbox"]):not([type="radio"]), select, textarea'
          );
          if (inputs.length) inputs[0].focus();

          // Maintenir la fenêtre à la même position
          window.scrollTo({
            top: document.getElementById("container").offsetTop - 20,
            behavior: "smooth",
          });
        });
      }
    },
    prevStep() {
      if (this.currentStep > 1) {
        this.currentStep--;

        // Maintenir la fenêtre à la même position
        this.$nextTick(() => {
          window.scrollTo({
            top: document.getElementById("container").offsetTop - 20,
            behavior: "smooth",
          });
        });
      }
    },
    handleFormSubmit(event) {
      // Empêcher le comportement par défaut du formulaire
      event.preventDefault();

      // Si ce n'est pas la dernière étape, passer à la suivante
      if (this.currentStep < this.steps.length) {
        this.nextStep();
      } else {
        // Sinon, soumettre le formulaire
        this.submitForm();
      }
    },
    updateContactInfo(info) {
      this.contactInfo = info;
      // Vérifier la validité des champs immédiatement après mise à jour
      this.$nextTick(() => {
        this.isContactFormValid =
          !!info.firstName?.trim() &&
          !!info.lastName?.trim() &&
          !!info.email?.trim() &&
          !!info.phone?.trim() &&
          this.validateEmail(info.email);
      });
    },
    updateFormField(fieldName, value) {
      console.log(`Field ${fieldName} updated with value:`, value);
      // Mise à jour explicite du champ spécifié
      this.form[fieldName] = value;
    },
    async submitForm() {
      const response = await fetch("/api/send-email-devis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          price: this.calculatePrice(),
          area: this.form.area,
          city: this.form.city,
          frequency: this.form.frequency,
          types: this.form.cleaningTypes,
          clientType: this.form.clientType,
          nom: this.contactInfo.firstName,
          prenom: this.contactInfo.lastName,
          entreprise: this.contactInfo.companyName,
          email: this.contactInfo.email,
          phone: this.contactInfo.phone,
          comment: this.contactInfo.comment,
        }),
      });
      const data = response.json();
      if (!data.success) {
        console.error("Erreur lors de l'envoi du formulaire", data.error);
        return;
      }
      // Vérifier si les informations de contact sont valides
      if (this.currentStep === this.steps.length) {
        if (!this.isContactFormValid) {
          // Afficher une validation visuelle dans FormStepSummary si implémentée
          if (
            this.$refs.formStepSummary &&
            typeof this.$refs.formStepSummary.showValidationErrors ===
              "function"
          ) {
            this.$refs.formStepSummary.showValidationErrors();
          }
          return;
        }
      }

      // Simuler un délai de traitement
      this.isSubmitting = true;
      this.isSent = true;
      this.showNotification = true;

      // Animation du formulaire
      const formEl = document.querySelector(".form-container");
      if (formEl) {
        formEl.classList.add("form-submitted");
      }

      setTimeout(() => {
        // Simuler l'envoi du formulaire
        console.log("Demande envoyée", { ...this.form, ...this.contactInfo });
        mail.send({
          to: this.contactInfo.email,
          subject: "Demande de nettoyage",
          body: `Bonjour ${
            this.contactInfo.firstName
          },\n\nMerci pour votre demande de nettoyage. Voici les détails :\n\n${JSON.stringify(
            { ...this.form, ...this.contactInfo },
            null,
            2
          )}\n\nNous vous contacterons bientôt.\n\nCordialement,\nL'équipe de nettoyage`,
        });

        this.currentStep = 7; // Étape après soumission
        this.showNotification = false;
        this.isSubmitting = false;

        // Scroll vers le haut pour la page de confirmation
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });

        // Déclencher l'animation de célébration
        this.$nextTick(() => {
          this.celebrateSubmission();
        });
      }, 1500);
    },
    calculatePrice() {
      // Simuler un calcul de prix basique
      let basePrice = 0;

      if (!this.form.area) return basePrice;

      // Prix de base selon la surface
      basePrice = this.form.area * 0.7;

      // Ajustement selon la fréquence
      if (this.form.frequency === "Hebdomadaire") basePrice *= 0.85;
      if (this.form.frequency === "Bi‑hebdomadaire") basePrice *= 0.8;
      if (this.form.frequency === "Mensuelle") basePrice *= 0.9;

      // Ajustement selon le type de nettoyage
      if (this.form.cleaningTypes.includes("Grand nettoyage")) basePrice *= 1.2;
      if (this.form.cleaningTypes.includes("Vitres")) basePrice += 25;
      if (this.form.cleaningTypes.includes("Après chantier")) basePrice *= 1.35;

      // Arrondir à l'entier le plus proche
      return Math.round(basePrice);
    },
    celebrateSubmission() {
      // Cette fonction pourrait intégrer une bibliothèque de confettis si besoin
      console.log("Célébration du succès !");
    },
  },
};
</script>

<style>
/* Animation de transition entre les étapes */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s ease;
}
.slide-fade-enter-from {
  transform: translateX(20px);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}

/* Animation pour la notification */
.notification-slide-in {
  animation: slideInRight 0.5s ease forwards, fadeOut 0.5s ease 2.5s forwards;
}

@keyframes slideInRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

/* Animation pour le bouton de soumission */
.submit-btn-pulse {
  position: relative;
}

.submit-btn-pulse:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 8px;
  box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.7);
  animation: submitPulse 2s infinite;
}

@keyframes submitPulse {
  0% {
    box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(37, 99, 235, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(37, 99, 235, 0);
  }
}

/* Animation d'entrée pour le titre et le contenu principal */
.fade-in-down {
  animation: fadeInDown 1s ease-out forwards;
}

.fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

@keyframes fadeInDown {
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fadeInUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Animation quand le formulaire est envoyé */
.form-submitted {
  animation: formSuccess 0.6s ease-in-out;
}

@keyframes formSuccess {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.03);
  }
  100% {
    transform: scale(1);
  }
}

/* Transition globale pour les éléments interactifs */
input,
select,
textarea,
.frequency-option,
.cleaning-option,
.client-type-option {
  transition: all 0.2s ease-in-out;
}

/* Focus amélioré pour accessibilité */
input:focus,
select:focus,
textarea:focus {
  outline: none;
  box-shadow: 0 0 0 2px white, 0 0 0 4px #3b82f6;
  border-color: transparent;
}

/* Gestion du texte qui déborde */
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.line-clamp-1 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}

/* Prévenir le comportement de défilement en bas de page */
html {
  scroll-behavior: smooth;
}

/* Assurer que les conteneurs ont une hauteur minimale appropriée */
@media (max-width: 768px) {
  .min-h-\[80vh\] {
    min-height: auto;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
}

/* Amélioration du contraste pour les textes - utilisation de classes personnalisées */
.frequency-option span,
.cleaning-option span,
.client-type-option span,
input,
select,
textarea,
label,
.font-medium,
.form-text-color {
  color: #4b5563; /* Équivalent à text-gray-600 */
}

/* Amélioration des focus pour accessibilité */
input:focus,
select:focus,
textarea:focus {
  outline: none;
  box-shadow: 0 0 0 2px white, 0 0 0 4px #3b82f6;
  border-color: transparent;
}
</style>
