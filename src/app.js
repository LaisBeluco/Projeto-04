import  express from "express";

const app = express();

app.use(express.json())

const usuarios = [
  {
    _id: 123,
    name: "João Silva",
    cpf: 90841540020,
    "birthDate": "01 / 01 / 2000",
    email: "joao.silva@compasso.com",
  },
];

app.get("/", (req, res) => {
  res.status(200).send("API REST FULL");
});

app.get("/api/v1/user", (req, res) => {
  res.status(200).json(usuarios);
});

app.post("/api/v1/user", (req,res) =>{
  usuarios.push(req.body);
  res.status(201).send("Usuário cadastrado com sucesso!")
})

app.put("/api/v1/user/:id", (req, res) =>{
  
})

export default app;
