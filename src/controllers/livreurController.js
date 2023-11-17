
import Livreur from "../models/livreur.js";

const getAllLivreur = async (req, res) =>{
    try{
        const allLivreurs = await Livreur.find();
        res.send(allLivreurs);
    }
    catch (e){
        console.log(e);
        res.send(e);
    }
};

const addLivreur = async (req,res)=>{
     try{
      const  newLivreur = new Livreur(req.body);
          await  newLivreur.save();
          res.send(newLivreur);
        }     
     catch(e){

        console.log(e);
        res.send(e);
     }
};

const getLivreurById = async(req,res)=>{
    try{
        const livreur = await Livreur.findById(req.params.id);
        res.send(livreur);
    }
    catch(e){
        console.log(e);
        res.send(e)
    }
};

const updateLivreur = async (req,res)=>{
    try{
        const updateLivreur = await livreur.findByIdAndUpdate(req.params.id,req.body);
        
        res.send(updateLivreur);
    }
    catch(e){
        console.log(e);
        res.send(e);
    }
};
 const deleteLivreur =async (req,res)=>{
    try{
        const livreur = await Livreur.findByIdAndDelete(req.params.id,req.body);
        res.send("livreur deleted");
    }
    catch(e){
        console.log(e);
        res.send(e);
    }
 };

 const loginLivreur = async (req,res)=>{
    try{
        const livreur = await Livreur.findOne({username:req.body.username} );
        console.log(livreur);
        if (livreur){
            if(livreur.password === req.body.password){
                res.send(livreur);
            }
            else{
                res.send("oumourk teaaba bro (mdp ghalt etfakr u arjaa)")
            }
        }
        else {
            
            res.status(404).send("bro mafamech menou username hedha ");

        }
    }
    catch(e){
        console.log(e);
        res.send(e);
    }
 };

 const addLivraisonliv = async (req,res)=>{
    try{
        let livreur = await Livreur.findById(req.params.id);
        let newLivraison = new Livraison(req.body);
        newLivraison.livreur=livreur._id;
        const livraison= await newLivraison.save();
        livreur.livraisons.push(livraison._id);
        livreur.save();
        res.send(livreur);
    }
    catch(e){
        console.log(e);
        res.send(e);
    }
};

export default {
    getAllLivreur,
    addLivreur,
    getLivreurById,
    updateLivreur,
    deleteLivreur,
    loginLivreur,
    addLivraisonliv
}