import mongoose from "mongoose";

const adresseSchema = new mongoose.Schema({
  ville: {
    type: String,
    require: true,
  },
  region: {
    type: String,
    require: true,
  },
  rue: {
    type: String,
    require: true,
  },
  poste: {
    type: String,
    require: true,
  },
});

export default adresseSchema
