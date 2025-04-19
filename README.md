# Messie Services - Site Web

Ce projet est le site web pour Messie Services, une entreprise spécialisée dans les services de nettoyage professionnel.

## Structure du projet

Le projet est organisé en composants modulaires pour une meilleure maintenabilité et réutilisabilité:

```
components/
├── ui/                   # Composants UI réutilisables
│   ├── StarRating.vue
│   ├── CarouselNavButton.vue
│   ├── CarouselIndicators.vue
│   ├── SocialButton.vue
│   ├── NewsletterForm.vue
│   ├── BackToTopButton.vue
│   └── PatternBackground.vue
├── icons/                # Composants d'icônes
│   └── QuoteIcon.vue
├── testimonial/          # Composants liés aux témoignages
│   └── TestimonialCard.vue
├── service/             # Composants liés aux services
│   └── ServiceCard.vue
├── footer/              # Composants du pied de page
│   ├── FooterAboutSection.vue
│   ├── FooterLinks.vue
│   ├── FooterContact.vue
│   ├── FooterSocial.vue
│   └── FooterBottom.vue
├── TestimonialCarousel.vue   # Carrousel de témoignages
├── ServiceCarousel.vue       # Carrousel de services
├── foot.vue                  # Pied de page principal
├── navbar.vue                # Barre de navigation
└── HeroBanner.vue            # Bannière d'accueil
```

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```
