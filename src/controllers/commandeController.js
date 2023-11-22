import Commande from "../models/commande.js"
const getAllCommande = async (req, res) =>{
    try{
        const allCommandes = await Commande.find().populate("lignCommandes");
        res.send(allCommandes);
    }
    catch (e){
        console.log(e);
        res.send(e);
    }
};
const getAllCommandeWaiting = async (req, res) =>{
    try{
        const allCommandes = await Commande.find({etat:"waiting"})
        res.send(allCommandes);
    }
    catch (e){
        console.log(e);
        res.send(e);
    }
};

const getAllCommandeRuning = async (req, res) =>{
    try{
        const allCommandes = await Commande.find({etat:"runing"})
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
    deleteCommande,
    getAllCommandeWaiting,
    getAllCommandeRuning
}