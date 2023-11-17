import mongoose from "mongoose";
import product from "./product.js"
const fournisseurSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product',

        
    }],
});
fournisseurSchema.pre("remove",async function(next){
    const fournisseur = this;
    await product.deleteMany({fournisseur:fournisseur._id});
    next();
})


export default mongoose.model("fournisseur",fournisseurSchema)