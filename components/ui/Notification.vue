<template>
  <div
    v-if="visible"
    :class="[
      'fixed bottom-4 right-4 px-6 py-3 rounded-lg shadow-lg flex items-center transition-all duration-300',
      `bg-${type}-500 text-white`,
      {
        'translate-y-0 opacity-100': visible,
        'translate-y-10 opacity-0': !visible,
      },
    ]"
  >
    <svg
      v-if="type === 'success'"
      class="h-6 w-6 mr-2"
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
    <svg
      v-else-if="type === 'error'"
      class="h-6 w-6 mr-2"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
    <svg
      v-else-if="type === 'warning'"
      class="h-6 w-6 mr-2"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
      />
    </svg>
    <svg
      v-else-if="type === 'info'"
      class="h-6 w-6 mr-2"
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
    <span>{{ message }}</span>
    <button
      @click="close"
      class="ml-4 text-white hover:text-gray-200 focus:outline-none"
      aria-label="Fermer la notification"
    >
      <svg
        class="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 5000,
    },
    type: {
      type: String,
      default: "success",
      validator: (value) =>
        ["success", "error", "warning", "info"].includes(value),
    },
    show: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      visible: false,
      timeout: null,
    };
  },
  watch: {
    show: {
      immediate: true,
      handler(newVal) {
        if (newVal) {
          this.showNotification();
        } else {
          this.visible = false;
        }
      },
    },
  },
  methods: {
    showNotification() {
      this.visible = true;

      if (this.timeout) {
        clearTimeout(this.timeout);
      }

      if (this.duration > 0) {
        this.timeout = setTimeout(() => {
          this.close();
        }, this.duration);
      }
    },
    close() {
      this.visible = false;
      this.$emit("close");
    },
  },
  beforeUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  },
};
</script>
