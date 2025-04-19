// https://nuxt.com/docs/api/configuration/nuxt-config
// Importation correcte de defineNuxtConfig depuis 'nuxt/config'
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  css: [
    "@/assets/css/main.css",
    "@/assets/css/utility-fix.css", // Ajout du fichier avec nos classes CSS fixes
  ],
  // @ts-ignore - Ignorer cette erreur car la propriété est supportée par le module @nuxt/ui
  ui: {
    colorMode: false,
  },
  devServer: {
    host: "0.0.0.0",
    port: 3000,
  },
  // Définir les alias pour les imports
  alias: {
    "@": "/home/rocma/Documents/messieService",
    "~": "/home/rocma/Documents/messieService",
  },
  // Configurer les imports automatiques des composants
  components: [{ path: "./components", pathPrefix: false }],
  // Configuration pour améliorer le SEO et les métadonnées
  app: {
    head: {
      charset: "utf-8",
      viewport: "width-device-width, initial-scale=1",
      title: "Messie Service - Entreprise de nettoyage à Chambray-lès-Tours",
      meta: [
        {
          name: "description",
          content:
            "Services de nettoyage professionnel pour particuliers et entreprises en Indre-et-Loire.",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  // Optimisations de build
  build: {
    transpile: ["@nuxt/ui"],
  },
});
