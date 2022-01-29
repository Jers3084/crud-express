const { Router } = require('express');
const router = Router();
const {
  obtenerProfesores,
  obtenerProfesoresconAlumnos,
  creaUnNuevoProfesor,
  actualizaProfesor,
  eliminaProfesor,
} = require('../controllers/profesoresControllers');

// Obtiene todo los profesor
router.get('/', obtenerProfesores);
// Obtener profesorescon Alumnos
router.get('/profesoresAlumnos', obtenerProfesoresconAlumnos);
// Crea un nuevo profesor
router.post('/', creaUnNuevoProfesor);
// Actualiza un profesor
router.put('/', actualizaProfesor);
// Elimina un profesor
router.delete('/', eliminaProfesor);

module.exports = router;