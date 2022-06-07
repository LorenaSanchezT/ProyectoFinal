<?php
require_once 'bd.php';
/*formulario de login habitual
si va bien abre sesión, guarda el nombre de usuario y redirige a principal.php 
si va mal, mensaje de error */
if ($_SERVER["REQUEST_METHOD"] == "POST") {
	if ($email = $_POST['email']) {
		$pass = $_POST['pass'];
		$usu = comprobar_usuario($email, $pass);
		$admin = comprobar_admin($email);
		if ($usu === FALSE) {
			echo "FALSE";
			setcookie("token", "", time() - 1, "/");
		} else {
			session_start();
			$_SESSION['usuario'] = $usu;
//creo una variable token para guardadr dentro la "formulita" que genera un token y poder reutilizarla
			$token = sha1(uniqid(rand(), true));
			echo $token;
//con la variable sesión guardamos en el servidor el valor del token para poder compararlo con la cookie del usu después
			$_SESSION['token'] = $token;
//con la cookie le asigno al usuario el mismo token que está en el servidor
			setcookie("token", "$token", time() + (60 * 60 * 24 * 1), "/");
			
		}
	} else if ($emailAlta = $_POST['emailA']) {
		$passA = $_POST['passA'];
		$passDuplicada = $_POST['passDuplicada'];
		$nombreUsuario = $_POST['nombreUsuario'];
		$comunidadAutonoma = $_POST['comunidadAutonoma'];
		$casillaVerifica = $_POST['casillaVerifica'];
        $alta = insertar_datos($emailAlta, $nombreUsuario,$passA, $comunidadAutonoma,$casillaVerifica);
	}
}
