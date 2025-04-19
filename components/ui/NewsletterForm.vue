<template>
  <form @submit.prevent="subscribe" class="relative">
    <div class="flex flex-col sm:flex-row gap-2">
      <input
        v-model="email"
        type="email"
        required
        placeholder="Votre email"
        class="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
      />
      <button
        type="submit"
        class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors whitespace-nowrap"
      >
        S'abonner
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 inline-block ml-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
    <transition name="fade">
      <p v-if="subscribeSuccess" class="text-green-400 text-sm mt-2">
        Merci pour votre inscription !
      </p>
    </transition>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      subscribeSuccess: false,
    };
  },
  methods: {
    subscribe() {
      // appeler votre API ou afficher un toast…
      console.log(`Newsletter subscription: ${this.email}`);
      this.subscribeSuccess = true;
      this.email = "";
      setTimeout(() => {
        this.subscribeSuccess = false;
      }, 3000);
    },
  },
};
</script>
