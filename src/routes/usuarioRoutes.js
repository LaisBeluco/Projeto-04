import express from "express";
import UsuarioController from "../controllers/usuariosController.js";

const router = express.Router();

router
  .get("/api/v1/user", UsuarioController.listarUsuarios)
  .get("/api/v1/user/busca", UsuarioController.listarUsuarioPorNome)
  .get("/api/v1/user/:id", UsuarioController.listarUsuarioPorId)
  .post("/api/v1/user", UsuarioController.cadastrarUsuario)
  .put("/api/v1/user/:id", UsuarioController.atualizarUsuario)
  .delete("/api/v1/user/:id", UsuarioController.excluirUsuario)

export default router;
