import mongoose from "mongoose";

const livraisonSchema = new mongoose.Schema({
    commandes:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'commande',
        require:true,
    }],
    livreur:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'livreur',
        require:true,
    }
})

export default mongoose.model("livraison",livraisonSchema)