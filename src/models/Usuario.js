import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String, required: true },
  cpf: { type: Number, required: true },
  birthDate: { type: String, required: true },
  email: { type: String, required: true },
  adress: { type: String, required: true },
  number: { type: Number, required: true },
  complement: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  zipCode: { type: String, required: true },
});

const usuarios = mongoose.model("usuarios", usuarioSchema);

export default usuarios;
