import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
    nom:{
        type:String,
        require:true,
    },
    prenom:{
        type:String,
        require:true,
    },
    username:{
        type:String,
        dropDups: true,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    tel:
    {
        type:String,
        require:true,
    },
    adresse:{
        type:String,
        require:true,
    },
    commandes:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'commande',
    }],
})

export default mongoose.model("client",clientSchema)