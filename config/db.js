// Importer les modules requis
const mongoose = require('mongoose');
require("dotenv").config();

// Récupérer l'URI de la base de données à partir des variables d'environnement
 const uri = process.env.MONGO_URI;


// Se connecter à la base de données MongoDB
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connecté à la base de données MongoDB');
}).catch((err) => {
  console.error('Erreur de connexion à la base de données MongoDB:', err);
});
