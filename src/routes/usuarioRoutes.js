import express from "express";
import UsuarioController from "../controllers/usuariosController.js";

const router = express.Router();

router.get("/api/v1/user", UsuarioController.listarUsuarios);

export default router;
