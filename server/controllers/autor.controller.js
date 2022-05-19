const Autor = require("../models/autor.model");

//obtener todos autores
module.exports.get_all = (req, res) => {
  /*Autor.find()*/
  Autor.find()
    .collation({ locale: "en" })
    .sort({ nombre: 1 })
    .then((autores) => res.json(autores))
    .catch((err) => res.status(400).json(err));
};

//crear autor
module.exports.create_autor = (req, res) => {
  Autor.create(req.body)
    .then((autor) => res.json(autor))
    .catch((err) => res.status(400).json(err));
};

//Encontrar autor específico
module.exports.get_autor = (req, res) => {
  Autor.findOne({ _id: req.params.id })
    .then((autor) => res.json(autor))
    .catch((err) => res.status(400).json(err));
};

//Actualizar autor
module.exports.update_autor = (req, res) => {
  Autor.findByIdAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((autor) => res.json(autor))
    .catch((err) => res.status(400).json(err));
};

//Eliminar autor
module.exports.delete_autor = (req, res) => {
  Autor.deleteOne({ _id: req.params.id })
    .then((result) => res.json(result))
    .catch((err) => res.status(400).json(err));
};
