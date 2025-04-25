// server/api/send-email.post.js
export default defineEventHandler(async (event) => {
  // Récupère les données JSON envoyées par le client
  const body = await readBody(event);
  const config = useRuntimeConfig();
  // Injecte le composable serveur
  const { sendMail } = useNodeMailer();

  // Envoi de l’e-mail de contact au client pour l'informer de la réception de son message
  await sendMail({
    to: body.email, // destinataire
    subject: `CONTACT: Nouveau message de ${body.name}`, // sujet
    text: body.message, // contenu texte
    // Pour du HTML : html: `<p>${body.message}</p>`
  });

  // Envoi de l’e-mail de contact à l'administrateur
  await sendMail({
    to:config.nodemailerUser, // destinataire
    subject: `CONTACT: Nouveau message de ${body.name}`, // sujet
    text: `Nom : ${body.name}\nEmail : ${body.email}\nMessage : ${body.message}`, // contenu texte
    // Pour du HTML : html: `<p>${body.message}</p>`
  });

  return { status: "success" };
});
