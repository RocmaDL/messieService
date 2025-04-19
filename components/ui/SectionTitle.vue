<template>
  <div class="text-center mb-10">
    <h2
      class="text-3xl font-bold"
      :class="{ 'text-center': centered, 'text-white': light }"
      :data-aos="animation ? 'fade-up' : ''"
    >
      <span
        :class="{
          'bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400':
            gradient && !light,
          'text-white': light,
        }"
      >
        {{ title }}
      </span>
    </h2>
    <p
      v-if="subtitle"
      class="max-w-3xl mx-auto mt-3"
      :class="{
        'text-center': centered,
        'text-gray-600': !light,
        'text-blue-100': light,
      }"
      :data-aos="animation ? 'fade-up' : ''"
      :data-aos-delay="animation ? '200' : ''"
    >
      {{ subtitle }}
    </p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      default: "",
    },
    centered: {
      type: Boolean,
      default: true,
    },
    gradient: {
      type: Boolean,
      default: true,
    },
    light: {
      type: Boolean,
      default: false,
    },
    animation: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
