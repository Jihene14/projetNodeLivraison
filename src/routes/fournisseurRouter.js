import controller from "../controllers/fournisseurController.js";
import express from "express";
import authenticateToken from "../middleWare/authentification.js";

const fournisseurRouter = express.Router();

fournisseurRouter.get("/", controller.getAllFournisseur);
fournisseurRouter.get("/:id", authenticateToken, controller.getFournisseurById);
fournisseurRouter.post("/", controller.addFournisseur);

// ta3tit id mit3 fournisseur w fi body 3adi produit mit3k taw rigel jawo
fournisseurRouter.put(
  "/addProduct",
  authenticateToken,
  controller.addProductFour
);
fournisseurRouter.put("/:id", authenticateToken, controller.updateFournisseur);
fournisseurRouter.delete(
  "/:id",
  authenticateToken,
  controller.deleteFournisseur
);
fournisseurRouter.post("/login", controller.loginFournisseur);
export default fournisseurRouter;
