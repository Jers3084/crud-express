/**
 * Importaciones
 */
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const rutasAlumnos = require("./routes/alumnosRoutes");
const rutasProfesores = require("./routes/profesoresRoutes");

/**
 * Configuraciones
 */
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/**
 * Rutas
 */
app.use("/api/alumnos", rutasAlumnos);
app.use("/api/profesores", rutasProfesores);

app.listen(3000, () => {
  console.log("corriendo el servidor");
});
