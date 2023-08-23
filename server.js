// Importation du module http intégré à Node.js
const http = require("http");

// Définition de la fonction de gestionnaire de requêtes
const requestHandler = (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" }); // Définition de l'en-tête de réponse
  res.end("<h1>Hello Node!!!!</h1>\n"); // Envoi de la réponse
};

// Création du serveur en utilisant le module http
const server = http.createServer(requestHandler);

// Écoute du serveur sur le port 3000, j'ai taper node server.js et j'ai accéder au port 3000
server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
