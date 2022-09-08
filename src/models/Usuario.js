import mongoose from "mongoose";

function validatorCpf(cpf) {
  return cpf.length > 10 && cpf.length < 12;
}

function validatorPassWord(pass) {
  return pass.length > 5;
}

function validarBirthDate(birth) {
  let aniversario = new Date(birth);
  let hoje = new Date();
  let diff = hoje - aniversario;
  let anos = Math.floor(diff / 31557600000);
  return anos > 17;
}

const usuarioSchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String, required: true },
  cpf: {
    type: String,
    validate: [validatorCpf, "CPF inválido."],
    required: true,
  },
  birthDate: {
    type: Date,
    validate: [validarBirthDate, "Usuário precisa ter 18 anos ou mais!"],
    required: true,
  },
  email: { type: String, validate: /\S+@\S+.\S+/, required: true },
  password: {
    type: String,
    validate: [validatorPassWord, "Sua senha precisa ter no mínimo 6 dígitos."],
    required: true,
  },
  adress: { type: String, required: true },
  complement: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  zipCode: { type: String, required: true },
});

const usuarios = mongoose.model("usuarios", usuarioSchema);

export default usuarios;
