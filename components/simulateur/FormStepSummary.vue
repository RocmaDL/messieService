<template>
  <div>
    <div class="max-w-2xl mx-auto">
      <h3 class="text-lg font-medium mb-6 text-blue-700">
        Récapitulatif et coordonnées
      </h3>

      <!-- Prix estimé -->
      <div
        class="bg-green-50 border border-green-200 rounded-lg p-5 mb-8 text-center"
      >
        <h4 class="text-lg font-medium text-green-700 mb-1">Prix estimé</h4>
        <div class="text-3xl font-bold text-green-700">
          {{ calculatedPrice }} €
        </div>
        <p class="text-xs text-gray-600 mt-3">
          Le prix affiché est une estimation basée sur vos critères. Veuillez
          remplir vos coordonnées pour nous permettre de vous contacter.
        </p>
      </div>

      <!-- Formulaire de contact -->
      <div class="bg-white rounded-lg border border-blue-100 p-6">
        <h4 class="text-lg font-medium mb-4 text-blue-600 flex items-center">
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
        </h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Prénom -->
          <div>
            <label for="firstName" class="block text-sm font-medium mb-1">
              Prénom <span class="text-red-600">*</span>
            </label>
            <input
              id="firstName"
              v-model="localContactData.firstName"
              type="text"
              class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500"
              placeholder="Votre prénom"
              @blur="validateField('firstName')"
              required
            />
            <p v-if="errors.firstName" class="mt-1 text-xs text-red-600">
              {{ errors.firstName }}
            </p>
          </div>

          <!-- Nom de famille -->
          <div>
            <label for="lastName" class="block text-sm font-medium mb-1">
              Nom <span class="text-red-600">*</span>
            </label>
            <input
              id="lastName"
              v-model="localContactData.lastName"
              type="text"
              class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500"
              placeholder="Votre nom"
              @blur="validateField('lastName')"
              required
            />
            <p v-if="errors.lastName" class="mt-1 text-xs text-red-600">
              {{ errors.lastName }}
            </p>
          </div>

          <!-- Email -->
          <div>
            <label for="email" class="block text-sm font-medium mb-1">
              Email <span class="text-red-600">*</span>
            </label>
            <input
              id="email"
              v-model="localContactData.email"
              type="email"
              class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500"
              placeholder="exemple@email.com"
              @blur="validateField('email')"
              required
            />
            <p v-if="errors.email" class="mt-1 text-xs text-red-600">
              {{ errors.email }}
            </p>
          </div>

          <!-- Téléphone -->
          <div>
            <label for="phone" class="block text-sm font-medium mb-1">
              Téléphone <span class="text-red-600">*</span>
            </label>
            <input
              id="phone"
              v-model="localContactData.phone"
              type="tel"
              class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500"
              placeholder="06 12 34 56 78"
              @blur="validateField('phone')"
              required
            />
            <p v-if="errors.phone" class="mt-1 text-xs text-red-600">
              {{ errors.phone }}
            </p>
          </div>

          <!-- Nom d'entreprise (si professionnel) -->
          <div
            v-if="formData.clientType === 'Professionnel'"
            class="md:col-span-2"
          >
            <label for="companyName" class="block text-sm font-medium mb-1">
              Nom de l'entreprise <span class="text-red-600">*</span>
            </label>
            <input
              id="companyName"
              v-model="localContactData.companyName"
              type="text"
              class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500"
              placeholder="Nom de votre entreprise"
              @blur="validateField('companyName')"
              required
            />
            <p v-if="errors.companyName" class="mt-1 text-xs text-red-600">
              {{ errors.companyName }}
            </p>
          </div>

          <!-- Commentaire -->
          <div class="md:col-span-2">
            <label for="comment" class="block text-sm font-medium mb-1">
              Commentaire (facultatif)
            </label>
            <textarea
              id="comment"
              v-model="localContactData.comment"
              rows="3"
              class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500"
              placeholder="Précisez vos besoins spécifiques..."
            ></textarea>
          </div>
        </div>

        <!-- Message d'information sur les champs obligatoires -->
        <div class="mt-4 flex items-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-blue-500 mr-2 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p class="text-sm text-gray-600">
            Les champs marqués d'un <span class="text-red-600">*</span> sont
            obligatoires. <br />
            <span v-if="!isFormValid" class="text-orange-500 font-medium">
              Veuillez compléter tous les champs obligatoires pour continuer.
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    formData: {
      type: Object,
      required: true,
    },
    contactData: {
      type: Object,
      required: true,
    },
    calculatedPrice: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      localContactData: { ...this.contactData },
      isFormValid: false,
      errors: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        companyName: "",
      },
    };
  },
  watch: {
    contactData: {
      handler(newVal) {
        this.localContactData = { ...newVal };
      },
      deep: true,
    },
    localContactData: {
      handler(newVal) {
        this.$emit("update-contact", newVal);
        this.checkFormValidity();
      },
      deep: true,
    },
  },
  methods: {
    validateField(field) {
      this.errors[field] = "";

      if (field === "firstName" && !this.localContactData.firstName.trim()) {
        this.errors.firstName = "Le prénom est obligatoire";
      }

      if (field === "lastName" && !this.localContactData.lastName.trim()) {
        this.errors.lastName = "Le nom est obligatoire";
      }

      if (field === "email") {
        if (!this.localContactData.email.trim()) {
          this.errors.email = "L'email est obligatoire";
        } else if (
          !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.localContactData.email)
        ) {
          this.errors.email = "Veuillez entrer une adresse email valide";
        }
      }

      if (field === "phone") {
        if (!this.localContactData.phone.trim()) {
          this.errors.phone = "Le téléphone est obligatoire";
        } else if (
          !/^(\+33|0)[1-9]([-. ]?[0-9]{2}){4}$/.test(
            this.localContactData.phone.replace(/\s/g, "")
          )
        ) {
          this.errors.phone = "Veuillez entrer un numéro de téléphone valide";
        }
      }

      if (
        field === "companyName" &&
        this.formData.clientType === "Professionnel" &&
        !this.localContactData.companyName.trim()
      ) {
        this.errors.companyName = "Le nom de l'entreprise est obligatoire";
      }
    },
    validateAllFields() {
      this.validateField("firstName");
      this.validateField("lastName");
      this.validateField("email");
      this.validateField("phone");
      if (this.formData.clientType === "Professionnel") {
        this.validateField("companyName");
      }

      return this.isFormValid;
    },
    checkFormValidity() {
      const hasRequiredFields =
        this.localContactData.firstName &&
        this.localContactData.lastName &&
        this.localContactData.email &&
        this.localContactData.phone;

      const needsCompany = this.formData.clientType === "Professionnel";
      const hasCompanyName = needsCompany
        ? !!this.localContactData.companyName
        : true;

      const hasErrors = Object.values(this.errors).some(
        (error) => error !== ""
      );

      this.isFormValid = hasRequiredFields && hasCompanyName && !hasErrors;
    },
  },
  emits: ["update-contact"],
};
</script>

<style scoped>
.form-section {
  margin-bottom: 2rem;
}

.form-section:last-child {
  margin-bottom: 0;
}
</style>
