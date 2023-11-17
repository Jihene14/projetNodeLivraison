import mongoose from "mongoose";

const commandeSchema = new mongoose.Schema({
num_commande:{
    type:Number,
    require:true,
},
products: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'product',

    
}],
client:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'client'
}

})

export default mongoose.model("commande",commandeSchema)