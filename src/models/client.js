import mongoose from "mongoose";
import adresseSchema from "./adresse.js";
const clientSchema = new mongoose.Schema({
  nom: {
    type: String,
    
  },
  prenom: {
    type: String,
    
  },
  username: {
    type: String,
    
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  tel: {
    type: String,
    required: true,
    minlength: [8, 'Le numéro doit contenir au moins 8 chiffres.'],
  },
  adresse: {
    ville: {
      type: String,
      required: true,
    },
    region: {
      type: String,
      required: true,
    },
    rue: {
      type: String,
      required: true,
    },
    poste: {
      type: String,
      required: true,
    },
  },
  commandes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "commande",
    },
  ],
});

export default mongoose.model("client", clientSchema);
