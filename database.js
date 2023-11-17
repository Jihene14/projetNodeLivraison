import mongoose from "mongoose";
function connectToBd() {
    mongoose.connect("mongodb://127.0.0.1:27017/livraisonAdomicile");

    const db = mongoose.connection;

    db.on("error", (error) => console.log(error));
    db.once("open", () => {
      console.log("data base connected");
    });
  }
  
  export default connectToBd;