import controller from "../controllers/clientController.js"
import  express from "express"

import authenticateToken from "../middleWare/authentification.js";

authenticateToken
const clientRouter = express.Router();

clientRouter.get("/",controller.getAllClient);
clientRouter.post("/",controller.registerClient);
clientRouter.get("/:id",authenticateToken,controller.getClientById);
clientRouter.put("/:id",authenticateToken,controller.updateClient);



// lezm login 9abl ma tista3mlo | ta3tih id mit3 client w lista mit3 id produit ma3 qte exemple  :
//     [{ "id": "655e166943e8685efff791aa","qte": 95 }]
clientRouter.put("/addCommande/:id",authenticateToken,controller.addCommandeCli);



clientRouter.delete("/:id",authenticateToken,controller.deleteClient);
clientRouter.post("/login",controller.loginClient);


export default clientRouter;