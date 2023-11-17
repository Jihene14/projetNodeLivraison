import mongoose from "mongoose";

const livreurSchema = new mongoose.Schema({
username:{
    type:String,
    require:true,
},
password:{
    type:String,
    require:true,
},
tel:{
    type:String,
    require:true,
},
livraisons: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'livraison',
}],
})

export default mongoose.model("livreur",livreurSchema)