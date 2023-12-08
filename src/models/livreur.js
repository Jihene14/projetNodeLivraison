import mongoose from "mongoose";

const livreurSchema = new mongoose.Schema({
username:{
    type:String,
    required:true,
    unique: true,
},
password:{
    type:String,
    required:true,
},
tel:{
    type:String,
    
},
livraisons: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'livraison',
}],
})

export default mongoose.model("livreur",livreurSchema)