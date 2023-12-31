import controller from "../controllers/productController.js";
import express from "express"
import authenticateToken from "../middleWare/authentification.js";
import upload from "../middleWare/imageupload.js";

const productRouter = express.Router();

productRouter.get("/", controller.getAllProducts);
productRouter.post("/", authenticateToken, controller.addProduct);
productRouter.get("/:id", controller.getProductById);
productRouter.put("/:id", authenticateToken,upload.single("file"), controller.updateProduct);
productRouter.delete("/:id", authenticateToken, controller.deleteProduct);


export default productRouter