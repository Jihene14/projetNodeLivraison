import mongoose from "mongoose";

const commandeSchema = new mongoose.Schema({
    num_commande: {
        type: Number,
        require: true,
    },
    products: [
      
    ],
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'client'
    },
    date: {
        type: Date,
        require: true,
    }

})

export default mongoose.model("commande", commandeSchema)