import Commande from "../models/commande.js"
const getAllCommande = async (req, res) =>{
    try{
        const allCommandes = await Commande.find();
        res.send(allCommandes);
    }
    catch (e){
        console.log(e);
        res.send(e);
    }
};

const addCommande = async (req,res)=>{
     try{
      const  newCommande = new Commande(req.body);
          await  newCommande.save();
          res.send(newCommande);
        }     
     catch(e){

        console.log(e);
        res.send(e);
     }
};
const deleteCommande =async (req,res)=>{
    try{
        const commande = await Commande.findByIdAndDelete(req.params.id,req.body);
        res.send("commande deleted");
    }
    catch(e){
        console.log(e);
        res.send(e);
    }
 };


export default {
    getAllCommande,
    addCommande,
    deleteCommande
}