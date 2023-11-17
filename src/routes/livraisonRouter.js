import controller from "../controllers/livraisonController.js";
import  express from "express"

const livraisonRouter = express.Router();

livraisonRouter.get("/",controller.getAllLivraisons);
livraisonRouter.post("/",controller.addLivraison);
livraisonRouter.get("/:id",controller.getLivraisonById);
livraisonRouter.put("/:id",controller.updateLivraison);
livraisonRouter.delete("/:id",controller.deleteLivraison);


export default livraisonRouter;