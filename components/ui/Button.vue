<template>
  <button
    :type="type"
    :disabled="disabled || loading"
    :class="[
      'flex items-center justify-center transition-all duration-300',
      variantClasses,
      sizeClasses,
      rounded ? 'rounded-lg' : '',
      fullWidth ? 'w-full' : '',
      disabled || loading
        ? 'opacity-50 cursor-not-allowed'
        : 'hover:-translate-y-1 hover:shadow-lg',
    ]"
    @click="$emit('click', $event)"
  >
    <svg
      v-if="loading"
      class="animate-spin -ml-1 mr-2 h-4 w-4"
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

    <slot name="icon-start"></slot>

    <span
      ><slot>{{ text }}</slot></span
    >

    <slot name="icon-end"></slot>
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "Button",
    },
    type: {
      type: String,
      default: "button",
    },
    variant: {
      type: String,
      default: "primary",
      validator: (value) =>
        [
          "primary",
          "secondary",
          "outline",
          "ghost",
          "danger",
          "success",
        ].includes(value),
    },
    size: {
      type: String,
      default: "md",
      validator: (value) => ["sm", "md", "lg"].includes(value),
    },
    rounded: {
      type: Boolean,
      default: true,
    },
    fullWidth: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    variantClasses() {
      const variants = {
        primary: "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow",
        secondary: "bg-gray-200 text-gray-800 shadow",
        outline: "bg-transparent border-2 border-blue-600 text-blue-600",
        ghost: "bg-transparent text-blue-600 hover:bg-blue-50",
        danger: "bg-gradient-to-r from-red-600 to-red-700 text-white shadow",
        success:
          "bg-gradient-to-r from-green-600 to-green-700 text-white shadow",
      };
      return variants[this.variant];
    },
    sizeClasses() {
      const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
      };
      return sizes[this.size];
    },
  },
};
</script>
