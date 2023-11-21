import mongoose from "mongoose";

const lign_commandeSchema = new mongoose.Schema({
    commande: {
        type: mongoose.Schema.Types.ObjectId, ref: 'commande',},
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'product', },
    prix: { type: Number },
    quantite: { type: Number },
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'client'
    },
   

})
export default mongoose.model("lign_commande", lign_commandeSchema)