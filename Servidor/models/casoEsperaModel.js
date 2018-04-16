const mongoose = require('mongoose')

const casosEsperaSchema = mongoose.Schema({
  cedula: { type: String},
  apellidos: { type: String},
  nombre: { type: String},
  domicilio: { type: Array},
  señas: { type: String},
  telefono: { type: String},
  ingreso: { type: Date, default: new Date()},
  problemas: { type: Array},
  sede: { type: String},
  prioridad: { type: String},
  notas: { type: String},
  files: { type: Array}
})

const casoEsperaModel = mongoose.model("espera", casosEsperaSchema)
module.exports = casoEsperaModel
