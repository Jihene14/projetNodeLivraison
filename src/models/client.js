import mongoose from "mongoose";
import adresseSchema from "./adresse.js";
const clientSchema = new mongoose.Schema({
  nom: {
    type: String,
    require: true,
  },
  prenom: {
    type: String,
    require: true,
  },
  username: {
    type: String,
    dropDups: true,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  tel: {
    type: String,
    require: true,
  },
  adresse: {
    ville: {
      type: String,
      require: true,
    },
    region: {
      type: String,
      require: true,
    },
    rue: {
      type: String,
      require: true,
    },
    poste: {
      type: String,
      require: true,
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
