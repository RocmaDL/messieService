// server/api/send-email-contact.post.js
export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const config = useRuntimeConfig();

  // Afficher les informations de configuration (sans le mot de passe complet)
  console.log("Configuration nodemailer:", {
    user: config.nodemailerUser,
    pass: config.nodemailerPass
      ? `${config.nodemailerPass.substring(0, 3)}...`
      : "absent",
    host: "smtp.gmail.com",
    port: 587,
  });

  try {
    const { sendMail } = useNodeMailer();

    // Envoyer uniquement à vous-même pour tester
    const result = await sendMail({
      to: config.nodemailerUser, // envoyer à vous-même
      subject: "Test de connexion SMTP sur Netlify",
      text: "Ceci est un test de la configuration SMTP sur Netlify",
    });

    console.log("Résultat envoi email:", result);
    return { status: "success", details: result };
  } catch (error) {
    console.error("Erreur détaillée:", error);
    return {
      status: "error",
      message: error.message,
      details: JSON.stringify(error),
    };
  }
});
