const DB = [
   { id: 1, nombre: 'Juan', apellido: 'Pérez', edad: 30, sexo: 'M' },
   { id: 2, nombre: 'Ana', apellido: 'Méndez', edad: 26, sexo: 'F' },
   { id: 3, nombre: 'Gabriela', apellido: 'Garcia', edad: 35, sexo: 'F' },
   { id: 4, nombre: 'Pedro', apellido: 'Valdez', edad: 30, sexo: 'M' },
 ];
 
 const DBProfesor = [
   {
     id: 1,
     nombre: 'Roberto',
     apellido: 'Pérez',
     edad: 30,
     sexo: 'M',
     idAlumno: 1,
   },
   {
     id: 2,
     nombre: 'Erika',
     apellido: 'Méndez',
     edad: 26,
     sexo: 'F',
     idAlumno: 2,
   },
   {
     id: 3,
     nombre: 'Pablo',
     apellido: 'Garcia',
     edad: 35,
     sexo: 'F',
     idAlumno: 1,
   },
   {
     id: 4,
     nombre: 'Alberto',
     apellido: 'Valdez',
     edad: 30,
     sexo: 'M',
     idAlumno: 3,
   },
 ];
 
 const obtenerTodosLosProfesores = () => {
   return DBProfesor;
 };
 
 const obtenerProfesoresPorSexo = (tipo) => {
   return DBProfesor.filter((x) => x.sexo === tipo);
 };
 
 const obtenerProfesorPorId = (id) => {
   return DBProfesor.find((x) => x.id === id);
 };
 
 const crearUnProfesor = (nombre, apellido, edad, sexo, idalumno) => {
   const id = DBProfesor.length + 1;
   const agregarPDB = {
     id,
     nombre: nombre,
     apellido: apellido,
     edad: edad,
     sexo: sexo,
     idalumno: idalumno,
   };
 
   DBProfesor.push(agregarPDB);
 
   return agregarPDB;
 };
 
 const actualizarProfesor = (id, sexo, edad, idalumno) => {
   const profesor = obtenerProfesorPorId(id);
 
   if (sexo !== undefined) {
     //Distonto de undefined y disto null{
     profesor.sexo = sexo;
   }
   if (edad !== undefined) {
     profesor.edad = edad;
   }
   if (idalumno !== undefined) {
      profesor.idAlumno = idalumno;
    }

   return profesor;
 };
 
 const eliminarProfesor = (id) => {
   const posicionEnArreglo = DBProfesor.findIndex((x) => x.id === id);
   DB.splice(posicionEnArreglo, 1);
 };
 
 module.exports = {
   obtenerTodosLosProfesores,
   obtenerProfesoresPorSexo,
   obtenerProfesorPorId,
   crearUnProfesor,
   actualizarProfesor,
   eliminarProfesor,
 };