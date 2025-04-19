<template>
  <div
    :class="[
      'rounded-lg shadow-lg overflow-hidden bg-gradient-to-br',
      colorClass,
    ]"
    :style="{ height: height }"
  >
    <div class="flex flex-col items-center justify-center h-full p-6">
      <svg
        :class="['w-16 h-16 mb-3', textColorClass]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        ></path>
      </svg>
      <p :class="['text-center font-medium', textColorClass]">{{ alt }}</p>
      <p :class="['text-xs mt-2', textColorClass]">{{ path }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    alt: {
      type: String,
      default: "Image à remplacer",
    },
    path: {
      type: String,
      required: true,
    },
    theme: {
      type: String,
      default: "blue",
      validator: (value) => ["blue", "green", "gray"].includes(value),
    },
    height: {
      type: String,
      default: "300px",
    },
  },
  computed: {
    colorClass() {
      const themes = {
        blue: "from-blue-50 to-blue-100",
        green: "from-green-50 to-green-100",
        gray: "from-gray-50 to-gray-100",
      };
      return themes[this.theme] || themes.blue;
    },
    textColorClass() {
      const themes = {
        blue: "text-blue-500",
        green: "text-green-500",
        gray: "text-gray-500",
      };
      return themes[this.theme] || themes.blue;
    },
  },
};
</script>
