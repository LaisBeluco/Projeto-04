import mongoose from "mongoose";

function validatorCpf(cpf) {
  return cpf.length > 10 && cpf.length < 12;
}

function validatorPassWord(pass){
  return pass.length > 5;
}

const usuarioSchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String, required: true },
  cpf: {
    type: String,
    validate: [validatorCpf, 'Necessário ter 11 números no CPF'],
    required: true,
  },
  birthDate: { type: Date, max:"09/08/2004", required: true },
  email: { type: String, validate: /\S+@\S+.\S+/, required: true },
  password: {type: String,validate: [validatorPassWord, 'Sua senha precisa ter no mínimo 6 dígitos.'], required: true},
  adress: { type: String, required: true },
  complement: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  zipCode: { type: String, required: true },
});

const usuarios = mongoose.model("usuarios", usuarioSchema);

export default usuarios;
