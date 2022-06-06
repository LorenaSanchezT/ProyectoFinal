CREATE DATABASE BaseDatos;
USE BaseDatos;

/*Creamos la tabla Usuarios*/
CREATE TABLE Usuarios(
    correo VARCHAR(50) NOT NULL PRIMARY KEY,
    nombre_usuario VARCHAR(20) NOT NULL,
    contrasenna VARCHAR(50) NOT NULL,
    comunidad_autonoma ENUM('Andalucia', 'Aragon', 'Asturias', 'Cantabria', 'Castilla', 'Leon', 'Cataluña', 
    'Comunidad Valenciana', 'Extremadura', 'Galicia', 'La rioja', 'Madrid', 'Murcia', 'Navarra', 'Pais vasco'),
    administrador ENUM('ADMIN', 'NORMAL'),
    casillaVerifica ENUM('true','false')
);

/*Creamos la tabla Evento*/
CREATE TABLE Eventos(
    id_evento INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    fecha_evento DATE,
    lugar VARCHAR(50),
    comunidad_autonoma ENUM('Andalucia', 'Aragon', 'Asturias', 'Cantabria', 'Castilla La Mancha', 'Castilla y Leon', 'Cataluña', 
    'Comunidad Valenciana', 'Extremadura', 'Galicia', 'La rioja', 'Madrid', 'Murcia', 'Navarra', 'Pais vasco'),
    tipoContaminacion VARCHAR(50),
    informacion VARCHAR(100),
    numero_de_likes INT,
    fecha_publicacion DATE
);

/*Creamos la tabla Eventos no confirmados*/
CREATE TABLE EventosConfirm(
    id_evento INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    fecha_evento DATE,
    lugar VARCHAR(50),
    comunidad_autonoma ENUM('Andalucia', 'Aragon', 'Asturias', 'Cantabria', 'Castilla La Mancha', 'Castilla y Leon', 'Cataluña', 
    'Comunidad Valenciana', 'Extremadura', 'Galicia', 'La rioja', 'Madrid', 'Murcia', 'Navarra', 'Pais vasco'),
    tipoContaminacion VARCHAR(50),
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

CREATE TABLE MeGusta(
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

INSERT INTO Usuarios (correo, nombre_usuario, contrasenna, comunidad_autonoma, administrador) VALUES
('mar@gmail.com', 'Mar', PASSWORD('1234'), 'Madrid', 'ADMIN'),
('lore@gmail.com', 'Lore', PASSWORD('1234'), 'Madrid', 'ADMIN'),
('mikel@gmail.com', 'Mikel', PASSWORD('1234'), 'Madrid', 'ADMIN');

INSERT INTO Eventos (nombre, fecha_evento, lugar, comunidad_autonoma, tipoContaminacion, informacion, numero_de_likes, fecha_publicacion) VALUES 
('Limpieza Playa Malvarosa', '2022-06-15', NULL, 'Comunidad Valenciana', 'Maritima', 'Limpieza a lo largo de toda la playa', '10', '2022-05-13'),
('Concierto Benefico: Salvemos a las ballenas', '2022-09-23', 'Vigo', 'Galicia','Maritima', 'Concierto para recaudar dinero para cuidar a las ballenas', '50', '2022-05-16'),
('Limpieza del bosque de los alcornocales', '2022-12-02', 'Tarifa', 'Andalucia', 'Rural', 'Recogida de basura en el bosque', '20', '2022-04-16'),
('Concierto Benefico: No mas plasticos', '2023-01-15', 'Oviedo', 'Asturias', 'Maritima', 'Concierto para recaudar dinero para la recogida de basura en el mar', '80', '2022-05-15');

INSERT INTO eventosConfirm (nombre, fecha_evento, lugar, comunidad_autonoma, tipoContaminacion, informacion) VALUES 
('Charla sobre la contaminacion industrial', '2022-05-31', 'Madrid', 'Madrid', 'Urbana', 'Charla en la que se trataran temas que permitiran entender mejor como afecta la contaminacion industrial'),
('Charla sobre como mejorar el medio ambiente', '2022-06-11', 'vigo', 'Galicia', 'Urbana', 'Charla en la que se trataran temas que permitiran ayudar a mejorar el estado del medio ambiente'),
('Concierto benefico: Reusa reutiliza y recicla', '2022-09-30', 'Barcelona', 'Cataluña', 'Urbana', 'Concierto para concienciar a la gente en la práctica del reciclaje');