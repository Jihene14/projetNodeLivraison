import controller from "../controllers/commandeController.js"
import express from "express"

const commandeRouter = express.Router();
commandeRouter.get("/:id", controller.getCommandeById);
commandeRouter.put("/:id", controller.updateCommande);
commandeRouter.get("/", controller.getAllCommande);
commandeRouter.get("/waiting", controller.getAllCommandeWaiting);
commandeRouter.get("/Runing", controller.getAllCommandeRuning);
commandeRouter.post("/", controller.addCommande);
commandeRouter.delete("/:id", controller.deleteCommande);

export default commandeRouter;