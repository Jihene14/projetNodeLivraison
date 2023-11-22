import Livreur from "../models/livreur.js";
import Livraison from "../models/livraison.js";
import Commande from "../models/commande.js";
import jwt from "jsonwebtoken";
import secret from "../vars/var.js";

const getAllLivreur = async (req, res) => {
  try {
    const allLivreurs = await Livreur.find();
    res.send(allLivreurs);
  } catch (e) {
    console.log(e);
    res.send(e);
  }
};

const addLivreur = async (req, res) => {
  try {
    const newLivreur = new Livreur(req.body);
    await newLivreur.save();
    res.send(newLivreur);
  } catch (e) {
    console.log(e);
    res.send(e);
  }
};

const getLivreurById = async (req, res) => {
  try {
    const livreur = await Livreur.findById(req.params.id);
    res.send(livreur);
  } catch (e) {
    console.log(e);
    res.send(e);
  }
};

const updateLivreur = async (req, res) => {
  try {
    const updateLivreur = await livreur.findByIdAndUpdate(
      req.params.id,
      req.body
    );

    res.send(updateLivreur);
  } catch (e) {
    console.log(e);
    res.send(e);
  }
};
const deleteLivreur = async (req, res) => {
  try {
    const livreur = await Livreur.findByIdAndDelete(req.params.id, req.body);
    res.send("livreur deleted");
  } catch (e) {
    console.log(e);
    res.send(e);
  }
};

const loginLivreur = async (req, res) => {
  try {
    const livreur = await Livreur.findOne({ username: req.body.username }).populate("livraisons");
    console.log(livreur);
    if (livreur) {
      if (livreur.password === req.body.password) {
        const token = jwt.sign({ _id: livreur._id }, secret.ACCESS_TOKEN_SECRET);

        console.log(token);

        res.json({ token: token, livreur });
       
      } else {
        res.send("oumourk teaaba bro (mdp ghalt etfakr u arjaa)");
      }
    } else {
      res.status(404).send("bro mafamech menou username hedha ");
    }
  } catch (e) {
    console.log(e);
    res.send(e);
  }
};

const addLivraisonliv = async (req, res) => {
  try {
    let livreur = await Livreur.findById(req.params.id);
    let livraison = new Livraison();
    console.log(req.body.commandes);
    for (let i = 0; i < req.body.commandes.length; i++) {
      console.log(req.body.commandes[i]);
      let commande = await Commande.findById(req.body.commandes[i]);
      commande.etat = "runing";
      await commande.save();
      console.log(commande);
      livraison.commandes.push(commande._id);
    }

    livraison.livreur = livreur._id;
    await livraison.save();
    livreur.livraisons.push(livraison._id);

    await livreur.save();
    res.send(await livreur.populate("livraisons"));
  } catch (e) {
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
  addLivraisonliv,
};
