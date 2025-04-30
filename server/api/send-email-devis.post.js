// server/api/send-email.post.js
export default defineEventHandler(async (event) => {
  // Récupère les données JSON envoyées par le client
  const body = await readBody(event);
  console.log("body", body);

  // Injecte le composable serveur
  const { sendMail } = useNodeMailer();

  // Année actuelle pour le copyright
  const currentYear = new Date().getFullYear();

  // Formatage conditionnel pour entreprise et commentaire
  const entrepriseHtml =
    body.clientType === "Professionnel" && body.entreprise
      ? `
    <div>
      <p class="detail-label">Entreprise</p>
      <p class="detail-value">${body.entreprise}</p>
    </div>
    `
      : "";

  const commentHtml =
    body.comment && body.comment.trim() !== ""
      ? `
    <li class="detail-item">
      <div class="icon-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
          />
        </svg>
      </div>
      <div class="detail-content">
        <p class="detail-label">Commentaire</p>
        <p class="detail-value">${body.comment}</p>
      </div>
    </li>
    `
      : "";

  // Créer le HTML avec les valeurs directement injectées
  const html = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Votre devis personnalisé</title>
  <style>
    /* Reset et styles de base */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    }
    /* Reste des styles inchangés */
    /* ... */
    
    /* Conteneur principal */
    .devis-container {
      max-width: 42rem;
      margin: 1.5rem auto;
      background-color: white;
      padding: 1.5rem;
      border-radius: 0.5rem;
      border: 1px solid #d1d5db;
    }
    
    /* En-tête */
    .header {
      text-align: center;
      margin-bottom: 1.5rem;
    }
    
    .header h1 {
      font-size: 1.5rem;
      font-weight: 700;
      color: #1d4ed8;
      margin-bottom: 0.5rem;
    }
    
    .header p {
      color: #4b5563;
    }
    
    /* Section de prix */
    .price-section {
      background-color: #ecfdf5;
      border: 1px solid #a7f3d0;
      border-radius: 0.5rem;
      padding: 1.25rem;
      margin-bottom: 1.5rem;
      text-align: center;
    }
    
    .price-section h4 {
      font-size: 1.125rem;
      font-weight: 500;
      color: #047857;
      margin-bottom: 0.25rem;
    }
    
    .price-amount {
      font-size: 1.875rem;
      font-weight: 700;
      color: #047857;
    }
    
    .price-note {
      font-size: 0.75rem;
      color: #4b5563;
      margin-top: 0.75rem;
    }
    
    /* Section de récapitulatif */
    .recap-section {
      background: linear-gradient(to bottom right, #f9fafb, #eff6ff);
      padding: 1.25rem;
      border-radius: 0.5rem;
      margin-bottom: 1.5rem;
    }
    
    .section-title {
      font-size: 1.125rem;
      font-weight: 600;
      margin-bottom: 1rem;
      color: #1e40af;
      display: flex;
      align-items: center;
    }
    
    .section-title svg {
      margin-right: 0.5rem;
    }
    
    .details-list {
      list-style: none;
      margin-top: 1rem;
    }
    
    .detail-item {
      display: flex;
      align-items: center;
      background-color: white;
      padding: 0.75rem;
      border-radius: 0.25rem;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
      margin-bottom: 1rem;
    }
    
    .detail-item:last-child {
      margin-bottom: 0;
    }
    
    .icon-circle {
      width: 2.5rem;
      height: 2.5rem;
      background-color: #dbeafe;
      border-radius: 9999px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 1rem;
      flex-shrink: 0;
    }
    
    .icon-circle svg {
      width: 1.25rem;
      height: 1.25rem;
      color: #1d4ed8;
    }
    
    .detail-content {
      min-width: 0;
      flex: 1;
    }
    
    .detail-label {
      font-size: 0.875rem;
      color: #6b7280;
    }
    
    .detail-value {
      font-weight: 500;
      color: #1f2937;
    }
    
    /* Section de coordonnées */
    .contact-section {
      background-color: #eff6ff;
      border: 1px solid #dbeafe;
      padding: 1.25rem;
      border-radius: 0.5rem;
      margin-bottom: 1.5rem;
    }
    
    .contact-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1rem;
      background-color: white;
      padding: 1rem;
      border-radius: 0.25rem;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    }
    
    @media (min-width: 768px) {
      .contact-grid {
        grid-template-columns: 1fr 1fr;
      }
    }
    
    /* Section d'appel à l'action */
    .cta-section {
      background-color: #eff6ff;
      padding: 1.25rem;
      border-radius: 0.5rem;
      border: 1px solid #dbeafe;
      text-align: center;
    }
    
    .cta-section h3 {
      font-size: 1.125rem;
      font-weight: 500;
      color: #1e40af;
      margin-bottom: 0.5rem;
    }
    
    .cta-section p {
      color: #374151;
      margin-bottom: 1rem;
    }
    
    .cta-button {
      background-color: #2563eb;
      color: white;
      padding: 0.75rem 1rem;
      border-radius: 0.5rem;
      display: inline-block;
      font-weight: 500;
      text-decoration: none;
    }
    
    .cta-button svg {
      display: inline-block;
      vertical-align: middle;
      margin-right: 0.5rem;
      width: 1.25rem;
      height: 1.25rem;
    }
    
    /* Pied de page */
    .footer {
      text-align: center;
      margin-top: 2rem;
      font-size: 0.875rem;
      color: #6b7280;
    }
    
    .footer p + p {
      margin-top: 0.25rem;
    }
    
    /* Helper for hiding elements */
    .hidden {
      display: none;
    }
  </style>
</head>
<body>
  <div class="devis-container">
    <!-- En-tête -->
    <div class="header">
      <h1>Votre devis personnalisé</h1>
      <p>Nous vous remercions pour votre demande de devis</p>
    </div>

    <!-- Prix estimé -->
    <div class="price-section">
      <h4>Prix estimé</h4>
      <div class="price-amount">${body.price} €</div>
      <p class="price-note">
        Le prix affiché est une estimation basée sur vos critères.
        Notre équipe vous contactera prochainement pour finaliser votre offre.
      </p>
    </div>

    <!-- Détails de la demande -->
    <div class="recap-section">
      <h2 class="section-title">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
        Récapitulatif de votre demande
      </h2>

      <!-- Détails du formulaire -->
      <ul class="details-list">
        <!-- Surface -->
        <li class="detail-item">
          <div class="icon-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
          </div>
          <div class="detail-content">
            <p class="detail-label">Surface</p>
            <p class="detail-value">${body.area} m²</p>
          </div>
        </li>

        <!-- Ville -->
        <li class="detail-item">
          <div class="icon-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <div class="detail-content">
            <p class="detail-label">Ville</p>
            <p class="detail-value">${body.city}</p>
          </div>
        </li>

        <!-- Fréquence -->
        <li class="detail-item">
          <div class="icon-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div class="detail-content">
            <p class="detail-label">Fréquence</p>
            <p class="detail-value">${body.frequency}</p>
          </div>
        </li>

        <!-- Types de nettoyage -->
        <li class="detail-item">
          <div class="icon-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
          </div>
          <div class="detail-content">
            <p class="detail-label">Type(s) de nettoyage</p>
            <p class="detail-value">${
              body.types ? body.types.join(", ") : ""
            }</p>
          </div>
        </li>

        <!-- Type de client -->
        <li class="detail-item">
          <div class="icon-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <div class="detail-content">
            <p class="detail-label">Type de client</p>
            <p class="detail-value">${body.clientType}</p>
          </div>
        </li>

        <!-- Commentaire (conditionnel) -->
        ${commentHtml}
      </ul>
    </div>

    <!-- Coordonnées du client -->
    <div class="contact-section">
      <h2 class="section-title">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
        Vos coordonnées
      </h2>

      <div class="contact-grid">
        <div>
          <p class="detail-label">Nom complet</p>
          <p class="detail-value">${body.prenom} ${body.nom}</p>
        </div>
        <div>
          <p class="detail-label">Email</p>
          <p class="detail-value">${body.email}</p>
        </div>
        <div>
          <p class="detail-label">Téléphone</p>
          <p class="detail-value">${body.phone}</p>
        </div>
        ${entrepriseHtml}
      </div>
    </div>

    <!-- Message de bas de page et appel à l'action -->
    <div class="cta-section">
      <h3>Prochaines étapes</h3>
      <p>
        Notre équipe vous contactera dans les 24 à 48 heures pour discuter de votre projet
        et finaliser les détails de votre prestation de nettoyage.
      </p>
      <a href="tel:0247276042" class="cta-button">
        Nous contacter directement
      </a>
    </div>

    <!-- Pied de page -->
    <div class="footer">
      <p>© ${currentYear} Messie Service</p>
      <p>37170 Chambray-lès-Tours</p>
    </div>
  </div>
</body>
</html>
`;

  // Envoi de l'e-mail
  await sendMail({
    to: body.email,
    subject: `Votre demande de devis | Messie Service`,
    html: html,
  });

  return { status: "success" };
});
