// server/api/send-email-contact.post.js
export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const config = useRuntimeConfig();

  // Débogage
  console.log("Variables d'environnement:", {
    userEnv: process.env.NUXT_GMAIL_USER,
    passEnv: process.env.NUXT_GMAIL_APP_PASS ? "défini" : "non défini",
    userConfig: config.nodemailerUser,
    passConfig: config.nodemailerPass ? "défini" : "non défini",
  });

  const { sendMail } = useNodeMailer();

  // Le reste de votre code...

  try {
    // Envoi au client
    await sendMail({
      to: body.email,
      subject: `CONTACT: Nouveau message de ${body.name}`,
      text: body.message,
    });

    // Envoi à l'administrateur
    await sendMail({
      to: config.nodemailerUser,
      subject: `CONTACT: Nouveau message de ${body.name}`,
      text: `Nom : ${body.name}\nEmail : ${body.email}\nMessage : ${body.message}`,
    });

    return { status: "success" };
  } catch (error) {
    console.error("Erreur d'envoi d'email:", error);
    return {
      status: "error",
      message: error.message,
      stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
    };
  }
});
