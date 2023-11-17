import controller from "../controllers/productController.js";
import  express from "express"

const productRouter = express.Router();

productRouter.get("/",controller.getAllProducts);
productRouter.post("/",controller.addProduct);
productRouter.get("/:id",controller.getProductById);
productRouter.put("/:id",controller.updateProduct);
productRouter.delete("/:id",controller.deleteProduct);


export default productRouter;