import controller from "../controllers/clientController.js"
import  express from "express"

const clientRouter = express.Router();

clientRouter.get("/",controller.getAllClient);
clientRouter.post("/",controller.addClient);
clientRouter.get("/:id",controller.getClientById);
clientRouter.put("/:id",controller.updateClient);
clientRouter.put("/addCommande/:id",controller.addCommandeCli);
clientRouter.delete("/:id",controller.deleteClient);
clientRouter.post("/login",controller.loginClient);


export default clientRouter;