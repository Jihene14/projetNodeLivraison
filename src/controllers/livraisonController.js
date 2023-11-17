import Livraison from "../models/livraison.js"

 const getAllLivraisons = async (req,res)=>{
    try{
        const allLivraisons = await Livraison.find();
        res.send(allLivraisons);
    }
    catch (e){
        console.log(e);
        res.send(e);
    }
 };

 const addLivraison = async (req,res)=>{
    try{
     const  newLivraison = new Livraison(req.body);
         await  newLivraison.save();
         res.send(newLivraison);
       }     
    catch(e){

       console.log(e);
       res.send(e);
    }
};

const getLivraisonById = async(req,res)=>{
   try{
       const livraison = await Livraison.findById(req.params.id);
       res.send(livraison);
   }
   catch(e){
       console.log(e);
       res.send(e)
   }
};

const updateLivraison = async (req,res)=>{
   try{
       const updateLivraison = await Livraison.findByIdAndUpdate(req.params.id,req.body);
       
       res.send(updateLivraison);
   }
   catch(e){
       console.log(e);
       res.send(e);
   }
};
const deleteLivraison = async (req,res)=>{
   try{
       const Livraison = await Livraison.findByIdAndDelete(req.params.id,req.body);
       res.send("Livraison deleted");
   }
   catch(e){
       console.log(e);
       res.send(e);
   }
}
 export default {
    getAllLivraisons,
    getLivraisonById,
    updateLivraison,
    addLivraison,
    deleteLivraison
 }
