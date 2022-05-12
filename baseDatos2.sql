CREATE DATABASE Prueba;
USE Prueba;

/*Creamos la tabla Usuarios*/
CREATE TABLE Usuarios(
    correo VARCHAR(50) NOT NULL PRIMARY KEY,
    nombre_usuario VARCHAR(20) NOT NULL,
    contraseña VARCHAR(50) NOT NULL,
    comunidad_autonoma ENUM('Andalucia', 'Aragon', 'Asturias', 'Cantabria', 'Castilla', 'Leon', 'Cataluña', 
    'Comunidad Valenciana', 'Extremadura', 'Galicia', 'La rioja', 'Madrid', 'Murcia', 'Navarra', 'Pais vasco'),
    administrador ENUM('ADMIN', 'NORMAL')
);

/*Creamos la tabla Evento*/
CREATE TABLE Eventos(
    id_evento INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    fecha_evento DATE,
    lugar VARCHAR(50),
    tipoContaminacion VARCHAR(50),
    comunidad_autonoma ENUM('Andalucia', 'Aragon', 'Asturias', 'Cantabria', 'Castilla', 'Leon', 'Cataluña', 
    'Comunidad Valenciana', 'Extremadura', 'Galicia', 'La rioja', 'Madrid', 'Murcia', 'Navarra', 'Pais vasco'),
    informacion VARCHAR(100),
    numero_de_likes INT
);

/*Creamos la tabla Eventos no confirmados*/
CREATE TABLE EventosConfirm(
    id_evento INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    fecha_evento DATE,
    lugar VARCHAR(50),
    comunidad_autonoma ENUM('Andalucia', 'Aragon', 'Asturias', 'Cantabria', 'Castilla', 'Leon', 'Cataluña', 
    'Comunidad Valenciana', 'Extremadura', 'Galicia', 'La rioja', 'Madrid', 'Murcia', 'Navarra', 'Pais vasco'),
    informacion VARCHAR(100)
);

/*Creamos la tabla Inscripciones*/
CREATE TABLE Inscripciones(
    correo_usuario VARCHAR(50) NOT NULL,
    id_evento INT NOT NULL,
    /*La PRIMARY KEY esta formada por los dos campos de la tabla*/
    PRIMARY KEY(correo_usuario, id_evento),
    /*El campo 'correo_usuario' hace referencia a el correo en la tabla Usuarios*/
    FOREIGN KEY(correo_usuario)
        REFERENCES Usuarios(correo) ON DELETE CASCADE ON UPDATE CASCADE,
    /*El campo 'id_evento' hace referencia a el id_evento en la tabla Eventos*/
    FOREIGN KEY(id_evento)
        REFERENCES Eventos(id_evento) ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO `eventos` (`id_evento`, `nombre`, `fecha_evento`, `lugar`, `comunidad_autonoma`, `informacion`) 
VALUES (NULL, 'Limpieza Playa Malvarosa', '2022-06-15 17:10:00', NULL, 'Comunidad Valenciana', 'Limpieza a lo largo de toda la playa');