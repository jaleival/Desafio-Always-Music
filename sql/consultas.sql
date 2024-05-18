CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    rut INT UNIQUE NOT NULL,
    curso VARCHAR(50),
    nivel INT
);

INSERT INTO students (nombre, rut, curso, nivel) VALUES ('Juan', 123456786, 'guitarra', 1);
INSERT INTO students (nombre, rut, curso, nivel) VALUES ('Maria', 876543215, 'flauta', 2);
INSERT INTO students (nombre, rut, curso, nivel) VALUES ('Pedro', 123456789, 'piano', 3);
INSERT INTO students (nombre, rut, curso, nivel) VALUES ('Luis', 123456789, 'bajo', 4);

SELECT * FROM students;