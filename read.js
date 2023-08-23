const fs = require("fs"); // Importation du module de système de fichiers

// Contenu à écrire dans le fichier
const content = "Hello Node";

// Écriture du contenu dans le fichier "welcome.txt"
fs.writeFile("welcome.txt", content, (err) => {
  if (err) {
    console.error("Erreur lors de l'écriture dans le fichier :", err);
    return;
  }
  console.log('Le fichier "welcome.txt" a été créé avec succès.');

  // Lecture du contenu du fichier "welcome.txt"
  fs.readFile("welcome.txt", "utf8", (err, data) => {
    if (err) {
      console.error("Erreur lors de la lecture du fichier :", err);
      return;
    }
    console.log('Contenu du fichier "welcome.txt":\n', data);
  });
});

// j'ai taper read.js dans le terminal
