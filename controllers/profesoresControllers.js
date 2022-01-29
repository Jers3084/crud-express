const {
  obtenerTodosLosAlumnos,
  obtenerAlumnoPorId,
} = require("../bussinesLogic/alumnosBL");
const {
  obtenerTodosLosProfesores,
  obtenerProfesoresPorSexo,
  obtenerProfesorPorId,
  crearUnProfesor,
  actualizarProfesor,
  eliminarProfesor,
} = require("../bussinesLogic/profesoresBL");
//Controller que se llame profesorConAlumnos

const respuesta = {
  messages: "",
  status: true,
  data: [],
  errors: [],
};

const obtenerProfesores = (req, res) => {
  const resultado = obtenerTodosLosProfesores();

  if (resultado === undefined) {
    respuesta.messages = "Profesor no encontrado";
    respuesta.status = false;
    respuesta.data = [];
    return res.status(404).json(respuesta);
  }

  respuesta.messages = "Success";
  respuesta.data = resultado;
  res.json(respuesta);
};

const obtenerProfesoresconAlumnos = (req, res) => {
  const resultado = obtenerTodosLosProfesores();
  var alumnoprofesor = [];

  if (resultado === undefined) {
    respuesta.messages = "Profesor no encontrado";
    respuesta.status = false;
    respuesta.data = [];
    return res.status(404).json(respuesta);
  }

  respuesta.messages = "Success";
  resultado.map((x) => {
    const variable = x.idAlumno;
    const alumno = obtenerAlumnoPorId(variable);
    alumnoprofesor.push({
      profesor: x,
      alumno: alumno,
    });
  });
  res.json(alumnoprofesor);
};

const creaUnNuevoProfesor = (req, res) => {
  const resultado = crearUnProfesor(
    req.body.nombre,
    req.body.apellido,
    req.body.edad,
    req.body.sexo,
    req.body.idAlumno
  );
  respuesta.messages = "Profesor creado correctamente";
  respuesta.data = resultado;

  return res.status(201).json(respuesta);
};

const actualizaProfesor = (req, res) => {
  const validoSiExiste = obtenerProfesorPorId(req.body.id);

  if (!validoSiExiste) {
    (respuesta.messages = "El profesor no existe"), (respuesta.status = false);
    respuesta.data = [];

    return res.status(404).json(respuesta);
  }

  respuesta.data = actualizarProfesor(
    req.body.id,
    req.body.sexo,
    req.body.edad,
    req.body.idAlumno
  );
  respuesta.messages = "Se actualizo el profesor correctamente";
  return res.json(respuesta);
};

const eliminaProfesor = (req, res) => {
  const validoSiExiste = obtenerProfesorPorId(req.body.id);

  if (!validoSiExiste) {
    (respuesta.messages = "El profesor no existe"), (respuesta.status = false);
    respuesta.data = [];

    return res.status(404).json(respuesta);
  }

  eliminarProfesor(req.body.id);
  respuesta.messages = "Profesor eliminado correctamente";
  respuesta.data = [];
  return res.json(respuesta);
};

module.exports = {
  obtenerProfesores,
  obtenerProfesoresconAlumnos,
  creaUnNuevoProfesor,
  actualizaProfesor,
  eliminaProfesor,
};
