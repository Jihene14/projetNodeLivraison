import controller from "../controllers/livreurController.js"
import  express from "express"

const livreurRouter = express.Router();

livreurRouter.get("/",controller.getAllLivreur);
livreurRouter.post("/",controller.addLivreur);
livreurRouter.get("/:id",controller.getLivreurById);
livreurRouter.put("/:id",controller.updateLivreur);
livreurRouter.put("/addLivraison/:id",controller.addLivraisonliv);
livreurRouter.delete("/:id",controller.deleteLivreur);
livreurRouter.post("/login",controller.loginLivreur);

export default livreurRouter;