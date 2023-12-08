import Commande from "../models/commande.js";

const getAllCommande = async (req, res) => {
    try {
        const allCommandes = await Commande.find().populate("client").populate("lignCommandes");
        res.send(allCommandes);
    } catch (e) {
        console.log(e);
        res.send(e);
    }
};

const getCommandeById = async (req, res) => {
    try {
        const commande = await Commande.findById(req.params.id).populate({path:"client",populate:"adresse"}).populate({
            path: 'lignCommandes',
            populate: { path: 'product', model: 'product' }
        });
        if (!commande) {
            return res.status(404).send("Commande not found");
        }
        res.send(commande);
    } catch (e) {
        console.log(e);
        res.send(e);
    }
};

const getAllCommandeWaiting = async (req, res) => {
    try {
        const allCommandes = await Commande.find({ etat: "waiting" });
        res.send(allCommandes);
    } catch (e) {
        console.log(e);
        res.send(e);
    }
};

const getAllCommandeRuning = async (req, res) => {
    try {
        const allCommandes = await Commande.find({ etat: "runing" });
        res.send(allCommandes);
    } catch (e) {
        console.log(e);
        res.send(e);
    }
};

const addCommande = async (req, res) => {
    try {
        const newCommande = new Commande(req.body);
        await newCommande.save();
        res.send(newCommande);
    } catch (e) {
        console.log(e);
        res.send(e);
    }
};

const deleteCommande = async (req, res) => {
    try {
        const commande = await Commande.findByIdAndDelete(req.params.id, req.body);
        res.send("Commande deleted");
    } catch (e) {
        console.log(e);
        res.send(e);
    }
};

const updateCommande = async (req, res) => {
    const { id } = req.params;

    try {
        const updatedCommande = await Commande.findByIdAndUpdate(
            id,
            req.body.commande
        );

        if (!updatedCommande) {
            return res.status(404).send("Commande not found");
        }

        res.send(updatedCommande);
    } catch (e) {
        console.log(e);
        res.send(e);
    }
};

export default {
    getAllCommande,
    getCommandeById,
    addCommande,
    deleteCommande,
    getAllCommandeWaiting,
    getAllCommandeRuning,
    updateCommande,
};
