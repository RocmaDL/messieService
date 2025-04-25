<template>
  <div>
    <!-- Cette page agit seulement comme un attrape-tout pour rediriger les routes non existantes -->
  </div>
</template>

<script setup>
// Ce fichier capture toutes les routes qui ne correspondent à aucune autre page
// et les redirige vers la page d'accueil
definePageMeta({
  middleware: [
    function (to) {
      return navigateTo("/");
    },
  ],
});
</script>
