import express from "express";
import cors from "cors";
import connectToBd from "./database.js";
import clientRouter from "./src/routes/clientRouter.js"
import productRouter from "./src/routes/productRouter.js";
import fournisseurRouter from "./src/routes/fournisseurRouter.js";
import commandeRouter from "./src/routes/commandeRouter.js";
import livreurRouter from "./src/routes/livreurRouter.js";
import livraisonRouter from "./src/routes/livraisonRouter.js"
const app = express();

const corsOpts = {
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  };

connectToBd();
app.use(cors({corsOpts,
  Credentials : true,
  origin:['http//localhost:3000','http//localhost:8080','http//localhost:4200']
}));
app.use(express.json());
app.use("/clients", clientRouter);
app.use("/products", productRouter);
app.use("/fournisseurs",fournisseurRouter);
app.use("/commandes",commandeRouter);
app.use("/livreurs",livreurRouter);
app.use("/livraisons",livraisonRouter);
app.listen(3000,()=>{console.log("khedmet");});