import express from "express";
import db from "./config/dbConnect.js";
import usuarios from "./models/Usuario.js";

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
  console.log("Conexão com o banco feita com sucesso!");
});

const app = express();

app.use(express.json());
/*
const usuarios = [
  {
    id: 1,
    name: "João Silva",
    cpf: 90841540020,
    birthDate: "01 / 01 / 2000",
    email: "joao.silva@compasso.com",
  },
];
*/

app.get("/", (req, res) => {
  res.status(200).send("API REST FULL");

});

app.get("/api/v1/user", (req, res) => {
  usuarios.find((err, usuarios) => {
    res.status(200).json(usuarios);
  });
});

app.get("/api/v1/user/:id", (req, res) => {
  let index = pesquisarUsuario(req.params.id);
  res.json(usuarios[index]);
});

app.post("/api/v1/user", (req, res) => {
  usuarios.push(req.body);
  res.status(201).send("Usuário cadastrado com sucesso!");
});

app.put("/api/v1/user/:id", (req, res) => {
  let index = pesquisarUsuario(req.params.id);
  usuarios[index].name = req.body.name;
  res.json(usuarios);
});

app.delete("/api/v1/user/:id", (req, res) => {
  let { id } = req.params;
  let index = pesquisarUsuario(id);
  usuarios.splice(index, 1);
  res.send(`Usuário ${id} removido com sucesso!`);
});

function pesquisarUsuario(id) {
  return usuarios.findIndex((usuario) => usuario.id == id);
}

export default app;
