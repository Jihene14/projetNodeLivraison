import controller from "../controllers/fournisseurController.js"
import  express from "express"

const fournisseurRouter = express.Router();

fournisseurRouter.get("/",controller.getAllFournisseur);
fournisseurRouter.get("/:id",controller.getFournisseurById);
fournisseurRouter.post("/",controller.addFournisseur);
fournisseurRouter.put("/addProduct/:id",controller.addProductFour);
fournisseurRouter.put("/:id",controller.updateFournisseur);
fournisseurRouter.delete("/:id",controller.deleteFournisseur)
fournisseurRouter.post("/login",controller.loginFournisseur);
export default fournisseurRouter;