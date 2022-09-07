import usuarios from "../models/Usuario.js";

class UsuarioController {
  static listarUsuarios = (req, res) => {
    usuarios.find((err, usuarios) => {
      res.status(200).json(usuarios);
    });
  };

  static cadastrarUsuario = (req, res) => {
    let usuario = new usuarios(req.body);

    usuario.save((err) => {
      if(err){
        res.status(500).send({message:`${err.message} - falha ao cadastrar o usuário.`})
      }else{
        res.status(201).send(usuario.toJSON())
      }
    })
  };

  static atualizarUsuario= (req, res) =>{
    const id = req.params.id;

    livros.findByIdAndUpdate(id, {$set: req.body})
  }
}

export default UsuarioController;
