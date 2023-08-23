const generatePassword = require("generate-password"); // Importation du module "generate-password"

// Fonction pour générer et afficher un mot de passe aléatoire
function generateRandomPassword() {
  const password = generatePassword.generate({
    length: 12, // Longueur du mot de passe
    numbers: true, // Inclure des chiffres
    symbols: true, // Inclure des symboles
    uppercase: true, // Inclure des lettres majuscules
    excludeSimilarCharacters: true, // Exclure les caractères similaires (comme i, I, l, L, 1, o, O, 0)
  });

  console.log("Mot de passe généré:", password);
}

// Appel de la fonction pour générer un mot de passe aléatoire, j'ai saisi node generate-password.js dans le terminal

generateRandomPassword();
