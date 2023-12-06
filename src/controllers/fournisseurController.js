import Fournisseur from "../models/fournisseur.js"
import Product from "../models/product.js"
import jwt from "jsonwebtoken";
import secret from "../vars/var.js";

const addFournisseur = async (req,res)=>{
    try{
        req.body.product=[];
        const  newFournisseur = new Fournisseur(req.body);
         await  newFournisseur.save();
         res.send(newFournisseur);
       }     
    catch(e){

       console.log(e);
       res.send(e);
    }
};
const getFournisseurById = async(req,res)=>{
    try{
        const fournisseur = await Fournisseur.findById(req.user._id).populate("products");
        res.send(fournisseur);
    }
    catch(e){
        console.log(e);
        res.send(e)
    }
};

const updateFournisseur = async (req,res)=>{
    try{
        const updateFournisseur = await Fournisseur.findByIdAndUpdate(req.params.id,req.body);
        
        res.send(updateFournisseur);
    }
    catch(e){
        console.log(e);
        res.send(e);
    }
};

const getAllFournisseur = async (req, res) =>{
    try{
        const allFournisseurs = await Fournisseur.find().populate("products");
        res.send(allFournisseurs);
    }
    catch (e){
        console.log(e);
        res.send(e);
    }
};


const addProductFour = async (req,res)=>{
    try{
        let fournisseur = await Fournisseur.findById(req.user._id);
        let newProduct = new Product(req.body);
        console.log(fournisseur);
        newProduct.img=req.body.image;
        newProduct.fournisseur=fournisseur._id;
        const product= await newProduct.save();
        fournisseur.products.push(product._id);
        await fournisseur.save();
        res.send(fournisseur);
    }
    catch(e){
        console.log(e);
        res.send(e);
    }
};

const deleteFournisseur =async (req,res)=>{
    try{
        const fournisseur = await Fournisseur.findByIdAndDelete(req.params.id,req.body);
        res.send("fournisseur deleted");
    }
    catch(e){
        console.log(e);
        res.send(e);
    }
 };

 const loginFournisseur = async (req,res)=>{
    try{
        const fournisseur = await Fournisseur.findOne({username:req.body.username} ).populate("products");
        console.log(fournisseur);
        if (fournisseur){
            if(fournisseur.password === req.body.password){
                const token = jwt.sign({ _id: fournisseur._id }, secret.ACCESS_TOKEN_SECRET);

                console.log(token);
        
                res.json({ token: token, fournisseur });
       
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

export default{
addFournisseur,
getAllFournisseur,
addProductFour,
deleteFournisseur,
updateFournisseur,
getFournisseurById,
loginFournisseur
}