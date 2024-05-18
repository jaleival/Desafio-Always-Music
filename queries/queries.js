import pool from "../config/db.js";

const argumento = process.argv.slice(2);
const opcion = argumento[0];
let id = argumento[1];
let nombre = argumento[2];
let rut = argumento[3];
let curso = argumento[4];
let nivel = argumento[5];

/* 1.- Crear una función asíncrona para registrar un nuevo estudiante en la base de datos.
(2 puntos) */
const insertStudents = async () => {
  const students = [
    ["Juan", "123456786", "guitarra", 1],
    ["Maria", "876543215", "flauta", 2],
    ["Pedro", "123456789", "piano", 3],
    ["Luis", "123456789", "bajo", 4],
  ];

  for (const student of students) {
    const consulta =
      "INSERT INTO students (Nombre, Rut, Curso, Nivel) VALUES ($1, $2, $3, $4)";
    try {
      const resp = await db.query(consulta, student);
      console.log("Inserted:", student, "Response:", resp);
    } catch (error) {
      console.error("Error inserting student:", student, "Error:", error);
    }
  }
};

insertStudents();

/* 2.- Crear una función asíncrona para obtener por consola el registro de un estudiante
por medio de su rut. (2 puntos) */
const getStudent = async () => {
  const consulta = "SELECT * FROM students WHERE Rut = $1";
  const rut = "123456786";

  try {
    const resp = await db.query(consulta, [rut]);
    console.log(resp.rows);
  } catch (error) {
    console.error("Error fetching student with Rut:", rut, "Error:", error);
  }
};

getStudent();

/* 3.- Crear una función asíncrona para obtener por consola todos los estudiantes
registrados. (2 puntos) */
const getAllStudents = async () => {
  const consulta = "SELECT * FROM students";

  try {
    const resp = await db.query(consulta);
    console.log(resp.rows);
  } catch (error) {
    console.error("Error fetching all students:", error);
  }
};

getAllStudents();

/* 4.- Crear una función asíncrona para actualizar los datos de un estudiante en la base de
datos. (2 puntos) */
const updateStudent = async () => {
  const consulta = "UPDATE students SET nombre = 'Pedro Gomez' WHERE id = 1";
  try {
    const resp = await db.query(consulta);
    console.log(resp);
    console.log("Estudiante actualizado");
  } catch (error) {
    console.error("Error updating student:", error);
  }
};

updateStudent();

/* 5.-Crear una función asíncrona para eliminar el registro de un estudiante de la base de
datos. (2 puntos) */
const deleteStudent = async () => {
  const consulta = "DELETE FROM students WHERE id = 1";

  try {
    const resp = await db.query(consulta);
    console.log(resp);
    console.log("Estudiante eliminado");
  } catch (error) {
    console.error("Error deleting student:", error);
  }
};

deleteStudent();

if (opcion === "add") {
  insertStudents();
} else if (opcion === "get") {
  getStudent;
} else if (opcion === "edit") {
  updateStudent();
} else if (opcion === "delete") {
  deleteStudent();
} else {
  console.log("No es una opción válida");
}