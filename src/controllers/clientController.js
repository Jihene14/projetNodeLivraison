
import Client from "../models/client.js";
import Commande from "../models/commande.js";
import jwt from "jsonwebtoken";
import secret from "../vars/var.js"

const getAllClient = async (req, res) =>{
    try{
        const allClients = await Client.find();
        res.send(allClients);
    }
    catch (e){
        console.log(e);
        res.send(e);
    }
};

const registerClient = async (req,res)=>{
     try{
      const  newClient = new Client(req.body);
          await  newClient.save();
          res.send(newClient);
        }     
     catch(e){

        console.log(e);
        res.send(e);
     }
};

const getClientById = async(req,res)=>{
    try{
        const client = await Client.findById(req.params.id);
       
        res.send(client);
    }
    catch(e){
        console.log(e);
        res.send(e)
    }
};

const updateClient = async (req,res)=>{
    try{
        const updateClient = await Client.findByIdAndUpdate(req.params.id,req.body);
        
        res.send(updateClient);
    }
    catch(e){
        console.log(e);
        res.send(e);
    }
};
 const deleteClient =async (req,res)=>{
    try{
        const client = await Client.findByIdAndDelete(req.params.id,req.body);
        res.send("client deleted");
    }
    catch(e){
        console.log(e);
        res.send(e);
    }
 };
 
 const loginClient = async (req,res)=>{
    try{
        const client = await Client.findOne({username:req.body.username} );
        console.log(client);
        if (client){
            if(client.password === req.body.password){
                const token = jwt.sign({_id: client._id},secret.ACCESS_TOKEN_SECRET);

                console.log(token);

                res.send(token);
            }
            else{
                res.send("wrong password !")
            }
        }
        else {
            
            res.status(404).send("username not found ! ");

        }
    }
    catch(e){
        console.log(e);
        res.send(e);
    }
 };

const addCommandeCli = async (req,res)=>{
    try{
        let client = await Client.findById(req.params.id);
        let newCommande = new Commande(req.body);
        newCommande.client=client._id;
        const commande= await newCommande.save();
        client.commandes.push(commande._id);
        client.save();
        res.send(client);
    }
    catch(e){
        console.log(e);
        res.send(e);
    }
};

export default {
    getAllClient,
    registerClient,
    getClientById,
    updateClient,
    deleteClient,
    loginClient,
    addCommandeCli
}
