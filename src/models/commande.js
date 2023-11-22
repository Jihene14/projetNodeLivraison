import mongoose from "mongoose";

const commandeSchema = new mongoose.Schema({
  num_commande: {
    type: Number,
    require: true,
  },

  // tinajem tikoun non passer wala passer wala en cour fi 3outh class panier 
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
