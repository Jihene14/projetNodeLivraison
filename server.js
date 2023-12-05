import express from "express";
import cors from "cors";
import connectToBd from "./database.js";
import clientRouter from "./src/routes/clientRouter.js";
import productRouter from "./src/routes/productRouter.js";
import fournisseurRouter from "./src/routes/fournisseurRouter.js";
import commandeRouter from "./src/routes/commandeRouter.js";
import livreurRouter from "./src/routes/livreurRouter.js";
import livraisonRouter from "./src/routes/livraisonRouter.js";
import authenticateToken from "./src/middleWare/authentification.js";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger_output.json" assert { type: 'json' };; 

const app = express();

const corsOpts = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"],
};
connectToBd();
app.use(cors(
  
));

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, { swaggerUrl: '/api-docs' }));

app.get("/", (req, res) => {
  res.send("salut");
});
app.use("/clients", clientRouter);
app.use("/products", productRouter);
app.use("/fournisseurs", fournisseurRouter);
app.use("/commandes", commandeRouter);
app.use("/livreurs", livreurRouter);
app.use("/livraisons", authenticateToken, livraisonRouter);
app.use("/image",express.static("./upload"))

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

