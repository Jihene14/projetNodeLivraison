import controller from "../controllers/clientController.js"
import express from "express"

import authenticateToken from "../middleWare/authentification.js";

const clientRouter = express.Router();


 clientRouter.get("/", controller.getAllClient);
 clientRouter.post("/register", controller.registerClient);
 clientRouter.get("/getById", authenticateToken, controller.getClientById);
// clientRouter.put("/:id", authenticateToken, controller.updateClient);
clientRouter.put("/addCommande", authenticateToken, controller.addCommandeCli);



clientRouter.delete("/:id", authenticateToken, controller.deleteClient);
clientRouter.post("/login", controller.loginClient);


export default clientRouter;