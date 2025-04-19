<template>
  <div>
    <SectionTitle title="Questions fréquentes" />

    <div class="max-w-3xl mx-auto space-y-6">
      <div
        v-for="(item, index) in faqItems"
        :key="index"
        class="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
        data-aos="fade-up"
        :data-aos-delay="100 + index * 100"
      >
        <div
          class="flex justify-between items-center cursor-pointer bg-gradient-to-r from-gray-50 to-gray-100 hover:from-blue-50 hover:to-blue-100 transition-all duration-300"
          :class="{ 'from-blue-50 to-blue-100': openIndex === index }"
          @click="toggleItem(index)"
        >
          <h3 class="font-medium text-lg text-gray-900 py-5 px-6">
            {{ item.question }}
          </h3>
          <div class="pr-5">
            <div
              class="bg-white p-2 rounded-full shadow-sm transform transition-transform duration-300"
              :class="{ 'rotate-180': openIndex === index }"
            >
              <svg
                class="h-5 w-5 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
        <!-- Contenu de la réponse -->
        <div
          v-if="openIndex === index"
          class="bg-white p-6 border-t border-gray-100"
        >
          <p class="text-gray-700 leading-relaxed">{{ item.answer }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      openIndex: null,
      defaultFaqItems: [
        {
          question: "Comment obtenir un devis ?",
          answer:
            "Pour obtenir un devis personnalisé, vous pouvez nous contacter par téléphone, par email ou via notre formulaire en ligne. Notre équipe vous répondra dans les meilleurs délais pour discuter de vos besoins spécifiques et vous proposer une solution adaptée. Pour des projets plus complexes, nous pouvons également organiser une visite sur site afin d'évaluer précisément l'ampleur des travaux.",
        },
        {
          question: "Quelles sont vos zones d'intervention ?",
          answer:
            "Nous intervenons principalement à Chambray-lès-Tours et dans toute l'Indre-et-Loire. Pour les services spécifiques ou les contrats d'entreprise, nous pouvons également nous déplacer dans les départements limitrophes. N'hésitez pas à nous contacter pour vérifier si votre localité est couverte par nos services.",
        },
        {
          question: "Quels moyens de paiement acceptez-vous ?",
          answer:
            "Nous acceptons plusieurs modes de paiement pour votre confort : cartes bancaires (Visa, Mastercard), chèques, espèces et virements bancaires pour les entreprises. Nous proposons également des solutions de paiement échelonné pour les contrats à long terme.",
        },
      ],
    };
  },
  computed: {
    faqItems() {
      return this.items.length > 0 ? this.items : this.defaultFaqItems;
    },
  },
  methods: {
    toggleItem(index) {
      if (this.openIndex === index) {
        this.openIndex = null;
      } else {
        this.openIndex = index;
      }
    },
  },
};
</script>
