<template>
  <navbar />
  <div>
    <slot />
  </div>
  <foot />
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  mounted() {
    AOS.init({ duration: 800, once: true });
  },
};
</script>
