import controller from "../controllers/commandeController.js"
import  express from "express"

const commandeRouter = express.Router();

commandeRouter.get("/",controller.getAllCommande);
commandeRouter.post("/",controller.addCommande);
commandeRouter.delete("/:id",controller.deleteCommande);

export default commandeRouter;