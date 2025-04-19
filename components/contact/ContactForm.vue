<template>
  <div class="bg-white rounded-lg shadow-lg overflow-hidden">
    <div class="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
      <h2 class="text-2xl font-semibold flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
        Envoyez-nous un message
      </h2>
      <p class="text-blue-100 mt-1">Nous vous répondons sous 24 à 48 heures</p>
    </div>

    <form @submit.prevent="validateAndSend" class="p-6 space-y-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Champ Nom -->
        <div class="form-group">
          <label
            for="name"
            class="block text-sm font-medium text-gray-700 mb-1"
          >
            Nom complet <span class="text-red-500">*</span>
          </label>
          <div class="relative">
            <div
              class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                :class="errors.name ? 'text-red-400' : 'text-gray-400'"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <input
              id="name"
              v-model="form.name"
              type="text"
              placeholder="John Doe"
              :class="[
                'w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none transition-colors',
                errors.name
                  ? 'border-red-300 focus:ring-2 focus:ring-red-500 focus:border-red-500'
                  : 'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
              ]"
              @blur="validateField('name')"
              required
            />
          </div>
          <p v-if="errors.name" class="mt-1 text-xs text-red-500">
            {{ errors.name }}
          </p>
        </div>

        <!-- Champ Email -->
        <div class="form-group">
          <label
            for="email"
            class="block text-sm font-medium text-gray-700 mb-1"
          >
            Email <span class="text-red-500">*</span>
          </label>
          <div class="relative">
            <div
              class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                :class="errors.email ? 'text-red-400' : 'text-gray-400'"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                />
                <path
                  d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                />
              </svg>
            </div>
            <input
              id="email"
              v-model="form.email"
              type="email"
              placeholder="exemple@email.com"
              :class="[
                'w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none transition-colors',
                errors.email
                  ? 'border-red-300 focus:ring-2 focus:ring-red-500 focus:border-red-500'
                  : 'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
              ]"
              @blur="validateField('email')"
              required
            />
          </div>
          <p v-if="errors.email" class="mt-1 text-xs text-red-500">
            {{ errors.email }}
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Champ Téléphone -->
        <div class="form-group">
          <label
            for="phone"
            class="block text-sm font-medium text-gray-700 mb-1"
          >
            Téléphone <span class="text-red-500">*</span>
          </label>
          <div class="relative">
            <div
              class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                :class="errors.phone ? 'text-red-400' : 'text-gray-400'"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                />
              </svg>
            </div>
            <input
              id="phone"
              v-model="form.phone"
              type="tel"
              placeholder="01 23 45 67 89"
              :class="[
                'w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none transition-colors',
                errors.phone
                  ? 'border-red-300 focus:ring-2 focus:ring-red-500 focus:border-red-500'
                  : 'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
              ]"
              @blur="validateField('phone')"
              required
            />
          </div>
          <p v-if="errors.phone" class="mt-1 text-xs text-red-500">
            {{ errors.phone }}
          </p>
        </div>

        <!-- Champ Service -->
        <div class="form-group">
          <label
            for="service"
            class="block text-sm font-medium text-gray-700 mb-1"
          >
            Service concerné
          </label>
          <div class="relative">
            <div
              class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <select
              id="service"
              v-model="form.service"
              class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors appearance-none"
            >
              <option value="">-- Sélectionner un service --</option>
              <option
                v-for="(service, index) in services"
                :key="index"
                :value="service.value"
              >
                {{ service.label }}
              </option>
            </select>
            <div
              class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
            >
              <svg
                class="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Champ Message -->
      <div class="form-group">
        <label
          for="message"
          class="block text-sm font-medium text-gray-700 mb-1"
        >
          Votre message <span class="text-red-500">*</span>
        </label>
        <div class="relative">
          <textarea
            id="message"
            v-model="form.message"
            rows="6"
            placeholder="Comment pouvons-nous vous aider ?"
            :class="[
              'w-full px-4 py-2 border rounded-md focus:outline-none transition-colors',
              errors.message
                ? 'border-red-300 focus:ring-2 focus:ring-red-500 focus:border-red-500'
                : 'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
            ]"
            @blur="validateField('message')"
            required
          ></textarea>
        </div>
        <p v-if="errors.message" class="mt-1 text-xs text-red-500">
          {{ errors.message }}
        </p>
      </div>

      <!-- Case à cocher pour le consentement -->
      <div class="flex items-start">
        <div class="flex items-center h-5">
          <input
            id="consent"
            type="checkbox"
            v-model="form.consent"
            class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            @change="validateField('consent')"
            required
          />
        </div>
        <div class="ml-3 text-sm">
          <label
            :for="'consent'"
            :class="errors.consent ? 'text-red-500' : 'text-gray-700'"
          >
            J'accepte que mes données soient utilisées pour me recontacter
            <span class="text-red-500">*</span>
          </label>
          <p v-if="errors.consent" class="mt-1 text-xs text-red-500">
            {{ errors.consent }}
          </p>
        </div>
      </div>

      <!-- Message d'erreur général -->
      <div
        v-if="formError"
        class="p-3 bg-red-50 text-red-700 text-sm rounded-md border border-red-200"
      >
        {{ formError }}
      </div>

      <!-- Bouton d'envoi -->
      <div class="flex justify-end">
        <button
          type="submit"
          :disabled="!isFormValid || isSubmitting"
          :class="[
            'px-8 py-3 font-medium rounded-md shadow-lg transition-all transform',
            isFormValid && !isSubmitting
              ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-xl hover:-translate-y-1'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed',
          ]"
        >
          <span v-if="isSubmitting" class="flex items-center">
            <!-- Indicateur de chargement -->
            <svg
              class="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Envoi en cours...
          </span>
          <span v-else class="flex items-center">
            Envoyer le message
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
              />
            </svg>
          </span>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        phone: "",
        message: "",
        service: "",
        consent: false,
      },
      errors: {
        name: "",
        email: "",
        phone: "",
        message: "",
        consent: "",
      },
      formError: "",
      isSubmitting: false,
      services: [
        { value: "nettoyage-bureaux", label: "Nettoyage de bureaux" },
        { value: "menage-particuliers", label: "Ménage particuliers" },
        { value: "nettoyage-vitres", label: "Nettoyage vitres" },
        { value: "fin-chantier", label: "Nettoyage fin de chantier" },
        { value: "nettoyage-moquette", label: "Nettoyage moquette" },
        { value: "services-personne", label: "Services à la personne" },
        { value: "autre", label: "Autre" },
      ],
    };
  },
  computed: {
    isFormValid() {
      // Vérifier si tous les champs obligatoires sont remplis et sans erreurs
      return (
        this.form.name.trim() !== "" &&
        this.form.email.trim() !== "" &&
        this.form.phone.trim() !== "" &&
        this.form.message.trim() !== "" &&
        this.form.consent === true &&
        !Object.values(this.errors).some((error) => error !== "")
      );
    },
  },
  methods: {
    validateField(field) {
      // Réinitialiser les erreurs
      this.errors[field] = "";

      // Validation du nom
      if (field === "name" && this.form.name.trim() === "") {
        this.errors.name = "Le nom est obligatoire";
      }

      // Validation de l'email
      if (field === "email") {
        if (this.form.email.trim() === "") {
          this.errors.email = "L'email est obligatoire";
        } else if (!this.validateEmail(this.form.email)) {
          this.errors.email = "Veuillez entrer une adresse email valide";
        }
      }

      // Validation du téléphone
      if (field === "phone") {
        if (this.form.phone.trim() === "") {
          this.errors.phone = "Le téléphone est obligatoire";
        } else if (!this.validatePhone(this.form.phone)) {
          this.errors.phone = "Veuillez entrer un numéro de téléphone valide";
        }
      }

      // Validation du message
      if (field === "message" && this.form.message.trim() === "") {
        this.errors.message = "Le message est obligatoire";
      }

      // Validation du consentement
      if (field === "consent" && !this.form.consent) {
        this.errors.consent =
          "Vous devez accepter que vos données soient utilisées";
      }
    },

    validateAllFields() {
      this.validateField("name");
      this.validateField("email");
      this.validateField("phone");
      this.validateField("message");
      this.validateField("consent");

      // Vérifier s'il y a des erreurs
      return !Object.values(this.errors).some((error) => error !== "");
    },

    validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    },

    validatePhone(phone) {
      // Accepte les formats français courants et les formats internationaux
      const re =
        /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4})$/;
      return re.test(phone);
    },

    async validateAndSend() {
      // Valider tous les champs
      if (!this.validateAllFields()) {
        this.formError = "Veuillez corriger les erreurs dans le formulaire";
        return;
      }

      // Réinitialiser l'erreur du formulaire
      this.formError = "";
      this.isSubmitting = true;

      try {
        // Simuler l'envoi du formulaire (remplacer par une vraie requête API)
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Émettre l'événement de succès
        this.$emit("form-sent", this.form);

        // Réinitialiser le formulaire
        this.resetForm();
      } catch (error) {
        console.error("Erreur lors de l'envoi du formulaire", error);
        this.formError =
          "Une erreur s'est produite lors de l'envoi du formulaire. Veuillez réessayer.";
      } finally {
        this.isSubmitting = false;
      }
    },

    resetForm() {
      this.form = {
        name: "",
        email: "",
        phone: "",
        message: "",
        service: "",
        consent: false,
      };
      this.errors = {
        name: "",
        email: "",
        phone: "",
        message: "",
        consent: "",
      };
      this.formError = "";
    },
  },
};
</script>

<style scoped>
/* Animation pour les transitions de validation */
.form-control-transition {
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

/* Style pour afficher les astérisques des champs obligatoires */
.required::after {
  content: "*";
  color: #ef4444;
  margin-left: 2px;
}
</style>
