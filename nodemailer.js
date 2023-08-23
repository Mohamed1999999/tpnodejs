const nodemailer = require("nodemailer"); // Importation du module "nodemailer"

// Configuration du transporteur de messagerie
const transporter = nodemailer.createTransport({
  service: "gmail", // Service de messagerie (par exemple, gmail, outlook, etc.)
  auth: {
    user: "votre.adresse.email@gmail.com", // Votre adresse e-mail
    pass: "votre_mot_de_passe", // Votre mot de passe
  },
});

// Détails du message
const mailOptions = {
  from: "votre.adresse.email@gmail.com", // Votre adresse e-mail
  to: "destination@example.com", // Adresse e-mail du destinataire
  subject: "Test d'envoi d'e-mail", // Sujet du message
  text: "Ceci est un e-mail de test envoyé depuis Node.js avec nodemailer.", // Corps du message
};

// Envoi de l'e-mail
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log("Erreur lors de l'envoi de l'e-mail:", error);
  } else {
    console.log("E-mail envoyé avec succès:", info.response);
  }
});
