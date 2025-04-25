// server/api/send-email.post.js
export default defineEventHandler(async (event) => {
  // Récupère les données JSON envoyées par le client
  const body = await readBody(event);

  // Injecte le composable serveur
  const { sendMail } = useNodeMailer();

  // Envoi de l’e-mail
  await sendMail({
    to: body.email, // destinataire
    subject: `Nouveau message de ${body.name}`, // sujet
    text: body.message, // contenu texte
    // Pour du HTML : html: `<p>${body.message}</p>`
  });

  return { status: "success" };
});
