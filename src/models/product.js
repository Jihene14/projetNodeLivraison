import mongoose from "mongoose";
import fournisseur from "./fournisseur.js";
const productSchema = new mongoose.Schema({
    label:{
        type:String,
        require:true,
    },
   
    price:
    {
        type:Number,
        require:true,
    },
    stock:{
        type:Number,
        require:true,
    },
    fournisseur:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'fournisseur',
        require:true,
    },
})
productSchema.pre("remove",async function(next){
    const product = this;
    await fournisseur.deleteOne({products:product._id});
    next();
})

export default mongoose.model("product",productSchema)