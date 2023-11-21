import controller from "../controllers/clientController.js"
import  express from "express"

import authenticateToken from "../middleWare/authentification.js";

authenticateToken
const clientRouter = express.Router();

clientRouter.get("/",controller.getAllClient);
clientRouter.post("/",controller.registerClient);
clientRouter.get("/:id",authenticateToken,controller.getClientById);
clientRouter.put("/:id",authenticateToken,controller.updateClient);
clientRouter.put("/addCommande/:id",authenticateToken,controller.addCommandeCli);
clientRouter.delete("/:id",controller.deleteClient);
clientRouter.post("/login",controller.loginClient);


export default clientRouter;