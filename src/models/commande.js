import mongoose from "mongoose";

const commandeSchema = new mongoose.Schema({
  num_commande: {
    type: Number,
    require: true,
  },
  etat: {
    type: String,
    require: true,
  },
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "client",
  },
  date: {
    type: Date,
    require: true,
  },
  lignCommandes: [
    { type: mongoose.Schema.Types.ObjectId, ref: "lign_commande" },
  ],
});

export default mongoose.model("commande", commandeSchema);
