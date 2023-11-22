import controller from "../controllers/commandeController.js"
import  express from "express"
import authenticateToken from "../middleWare/authentification.js";

const commandeRouter = express.Router();

commandeRouter.get("/",controller.getAllCommande);
commandeRouter.get("/waiting",controller.getAllCommandeWaiting);
commandeRouter.get("/Runing",controller.getAllCommandeRuning);
commandeRouter.post("/",controller.addCommande);
commandeRouter.delete("/:id",controller.deleteCommande);

export default commandeRouter;