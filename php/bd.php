<?php
require_once 'sesiones_json.php';

function likes($nombreEvento, $like){
	$hostname = "mysql:dbname=BaseDatos;host=localhost";
	$usuario = "root";
	$contra = "";
	try {
		$bd = new PDO($hostname, $usuario, $contra);
		$sql = "UPDATE eventos SET numero_de_likes = numero_de_likes + '$like' WHERE nombre = '$nombreEvento'";
		$resul = $bd->query($sql);
		if ($resul->rowCount() === 1) {
			return $resul->fetch();
		}else {
			return FALSE;
		}
	} catch (PDOException $e) {
		echo "Los datos introducidos no son correctos: " . $e->getMessage();
	}
}

function revisarLike($correoUsu, $idEvento){
	$hostname = "mysql:dbname=BaseDatos;host=localhost";
	$usuario = "root";
	$contra = "";
	try {
		$bd = new PDO($hostname, $usuario, $contra);
		$sql = "SELECT correo_usuario FROM meGusta WHERE correo_usuario = '$correoUsu' AND id_evento= '$idEvento'";
		$resul = $bd->query($sql);
		if ($resul->rowCount() === 1) {
			return TRUE;
		}else {
			return FALSE;
		}
	} catch (PDOException $e) {
		echo "Los datos introducidos no son correctos: " . $e->getMessage();
	}
}

function revisarSuscripcion($correoUsu, $idEvento){
	$hostname = "mysql:dbname=BaseDatos;host=localhost";
	$usuario = "root";
	$contra = "";
	try {
		$bd = new PDO($hostname, $usuario, $contra);
		$sql = "SELECT correo_usuario FROM inscripciones WHERE correo_usuario = '$correoUsu' AND id_evento= '$idEvento'";
		$resul = $bd->query($sql);
		if ($resul->rowCount() === 1) {
			return TRUE;
		}else {
			return FALSE;
		}
	} catch (PDOException $e) {
		echo "Los datos introducidos no son correctos: " . $e->getMessage();
	}
}

function annadirMeGusta($correoUsu, $idEvento){
	$hostname = "mysql:dbname=BaseDatos;host=localhost";
	$usuario = "root";
	$contra = "";
	try {
		$bd = new PDO($hostname, $usuario, $contra);
		$sql = "INSERT INTO megusta(correo_usuario, id_evento) VALUES ('$correoUsu','$idEvento')";
		$bd->query($sql);
	} catch (PDOException $e) {
		echo "Los datos introducidos no son correctos: " . $e->getMessage();
	}
}

function quitarMeGusta($correoUsu, $idEvento){
	$hostname = "mysql:dbname=BaseDatos;host=localhost";
	$usuario = "root";
	$contra = "";
	try {
		$bd = new PDO($hostname, $usuario, $contra);
		$sql = "DELETE FROM `megusta` WHERE correo_usuario = '$correoUsu' AND id_evento = '$idEvento'";
		$bd->query($sql);
	} catch (PDOException $e) {
		echo "Los datos introducidos no son correctos: " . $e->getMessage();
	}
}

function comprobar_usuario($email, $pass)
{
	$hostname = "mysql:dbname=BaseDatos;host=localhost";
	$usuario = "root";
	$contra = "";
	try {
		$bd = new PDO($hostname, $usuario, $contra);
		$sql = "SELECT correo FROM Usuarios WHERE correo = '$email' AND contrasenna= PASSWORD('$pass')";
		$resul = $bd->query($sql);
		if ($resul->rowCount() === 1) {
			return $resul->fetch();
		}else {
			return FALSE;
		}
	} catch (PDOException $e) {
		echo "Los datos introducidos no son correctos: " . $e->getMessage();
	}
}

function comprobar_admin($email)
{
	$hostname = "mysql:dbname=BaseDatos;host=localhost";
	$usuario = "root";
	$contra = "";
	try {
		$bd = new PDO($hostname, $usuario, $contra);
		$sql = "SELECT administrador, comunidad_autonoma, nombre_usuario, correo FROM Usuarios WHERE correo = '$email'";
		$resul = $bd->query($sql);
		foreach($resul as $row){
			echo $row['administrador']."\t". $row['comunidad_autonoma']."\t". $row['nombre_usuario']."\t". $row['correo']."\t";
		}
	} catch (PDOException $e) {
		echo "Los datos introducidos no son correctos: " . $e->getMessage();
	}
}

function insertar_datos($emailAlta,$nombreUsuario,$passA, $comunidadAutonoma, $casillaVerifica)
{
	$hostname = 'mysql:dbname=BaseDatos;host=localhost';
	$usuario = 'root';
	$contra = '';
	try {
		$bd = new PDO($hostname, $usuario, $contra);
		$sql = "INSERT INTO Usuarios(correo,nombre_usuario,contrasenna,comunidad_autonoma, administrador, casillaVerifica) VALUES ('$emailAlta',' $nombreUsuario',PASSWORD('$passA'),'$comunidadAutonoma','NORMAL', '$casillaVerifica')";
		$bd->query($sql);
	} catch (PDOException $e) {
		echo "Los datos introducidos no son correctos: " . $e->getMessage();
	}
}
function agregaEventos($nombreEvento,$fechaEvento,$lugarEvento,$tipoContaminacionAdd,$comunidadAutonoma,$informacionEvento)
{
	$hostname = 'mysql:dbname=BaseDatos;host=localhost';
	$usuario = 'root';
	$contra = '';
	try {
		$bd = new PDO($hostname, $usuario, $contra);
		$sql = "INSERT INTO EventosConfirm(nombre,fecha_evento,lugar,tipoContaminacion,comunidad_autonoma,informacion) VALUES ('$nombreEvento','$fechaEvento','$lugarEvento','$tipoContaminacionAdd','$comunidadAutonoma','$informacionEvento')";
		$bd->query($sql);
	} catch (PDOException $e) {
		echo "Los datos introducidos no son correctos: " . $e->getMessage();
	}
}

function agregaEventosConfirmar($nombreEvento,$fechaEvento,$lugarEvento,$tipoContaminacionAdd,$comunidadAutonoma,$informacionEvento)
{
	$hostname = 'mysql:dbname=BaseDatos;host=localhost';
	$usuario = 'root';
	$contra = '';
	try {
		$bd = new PDO($hostname, $usuario, $contra);
		$sql = "INSERT INTO Eventos(nombre,fecha_evento,lugar,tipoContaminacion,comunidad_autonoma,informacion,numero_de_likes,fecha_publicacion) VALUES ('$nombreEvento','$fechaEvento','$lugarEvento','$tipoContaminacionAdd','$comunidadAutonoma','$informacionEvento',0,NOW())";
		$bd->query($sql);
		$sql2 = "DELETE FROM EventosConfirm WHERE nombre='$nombreEvento'";
		$bd->query($sql2);
	} catch (PDOException $e) {
		echo "Los datos introducidos no son correctos: " . $e->getMessage();
	}
}

function eliminarEventosConfirmar($nombreEvento)
{
	$hostname = 'mysql:dbname=BaseDatos;host=localhost';
	$usuario = 'root';
	$contra = '';
	try {
		$bd = new PDO($hostname, $usuario, $contra);
		$sql = "DELETE FROM EventosConfirm WHERE nombre='$nombreEvento'";
		$bd->query($sql);
	} catch (PDOException $e) {
		echo "Los datos introducidos no son correctos: " . $e->getMessage();
	}
}

function listar_eventos($listaEventos,$tipocontaminacion,$comunidadAutonoma){
	$hostname = 'mysql:dbname=BaseDatos;host=localhost';
	$usuario = 'root';
	$contra = '';
	try{
		$bd = new PDO($hostname, $usuario, $contra);
		$sql = "SELECT id_evento, nombre FROM eventos WHERE tipoContaminacion = '$tipocontaminacion' AND comunidad_autonoma='$comunidadAutonoma'";		$result = $bd->query($sql);
		foreach($result as $row){
		 echo $row['nombre']."\t";
		}
	} catch (PDOException $e) {
		echo "Los datos introducidos no son correctos: " . $e->getMessage();
	}
}

function listar_eventosConfirm(){
	$servername = "127.0.0.1";
$username = "root";
$password = "";
try {
  $conn = new PDO("mysql:host=$servername;dbname=BaseDatos", $username, $password);
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  //   echo "Connected successfully";
    $sql = "SELECT nombre FROM eventosConfirm";
    $result = $conn->query($sql);
    if ($result->rowCount() > 0) {
      // output data of each row
      foreach ($result as $row) {
        print $row['nombre']."\t";
      }
    }
} catch (PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}
}

function info_eventos($enlace){
	$hostname = 'mysql:dbname=BaseDatos;host=localhost';
	$usuario = 'root';
	$contra = '';
	try{
		$bd = new PDO($hostname, $usuario, $contra);
		$sql = "SELECT * FROM eventos WHERE nombre='$enlace'";
		$result = $bd->query($sql);
		foreach($result as $row){
			echo $row['id_evento']."*".$row['nombre']."*".$row['fecha_evento']."*".$row['lugar']."*".$row['tipoContaminacion']."*".
			$row['comunidad_autonoma']."*".$row['informacion']."*".$row['numero_de_likes']."\t";
		   }
	} catch (PDOException $e) {
		echo "Los datos introducidos no son correctos: " . $e->getMessage();
	} 
}

function info_eventosConfirm($enlace){
	$hostname = 'mysql:dbname=BaseDatos;host=localhost';
	$usuario = 'root';
	$contra = '';
	try{
		$bd = new PDO($hostname, $usuario, $contra);
		$sql = "SELECT * FROM EventosConfirm WHERE nombre='$enlace'";
		$result = $bd->query($sql);
		foreach($result as $row){
		 echo $row['nombre']."*".$row['fecha_evento']."*".$row['lugar']."*".$row['tipoContaminacion']."*".
		 $row['comunidad_autonoma']."*".$row['informacion']."\t";
		}
	} catch (PDOException $e) {
		echo "Los datos introducidos no son correctos: " . $e->getMessage();
	} 
}

function suscribirseEvento($idEvento,$correoUsu){
	$hostname = 'mysql:dbname=BaseDatos;host=localhost';
	$usuario = 'root';
	$contra = '';
	try {
		$bd = new PDO($hostname, $usuario, $contra);
		$sql = "INSERT INTO inscripciones(correo_usuario,id_evento) VALUES ('$correoUsu','$idEvento')";
		$bd->query($sql);
	} catch (PDOException $e) {
		echo "Los datos introducidos no son correctos: " . $e->getMessage();
	}
}

function listar_eventos_sinSesion($listaEventos){
    $hostname = 'mysql:dbname=BaseDatos;host=localhost';
    $usuario = 'root';
    $contra = '';
    try{
        $bd = new PDO($hostname, $usuario, $contra);
        $sql = "SELECT id_evento, nombre FROM eventos";
        $result = $bd->query($sql);
        foreach($result as $row){
         echo $row['nombre']."\t";
        }
    } catch (PDOException $e) {
        echo "Los datos introducidos no son correctos: " . $e->getMessage();
    }
}

function listar_eventos_sinCCAA($tipoContami){
    $hostname = 'mysql:dbname=BaseDatos;host=localhost';
    $usuario = 'root';
    $contra = '';
    try{
        $bd = new PDO($hostname, $usuario, $contra);
        $sql = "SELECT id_evento, nombre FROM eventos  WHERE tipoContaminacion = '$tipoContami'";
        $result = $bd->query($sql);
        foreach($result as $row){
         echo $row['nombre']."\t";
        }
    } catch (PDOException $e) {
        echo "Los datos introducidos no son correctos: " . $e->getMessage();
    }
}