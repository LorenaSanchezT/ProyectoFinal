<?php	
	require_once 'bd.php';

	if($_SERVER["REQUEST_METHOD"] == "POST") {
		if (isset( $_POST["tipocontaminacion"])) {
			$tipocontaminacion = $_POST['tipocontaminacion'];   
            $listaEventos = $_POST['listaEventos'];
            $comunidadAutonoma = $_POST['comunidadAutonoma'];
            $datosEventos = listar_eventos($listaEventos,$tipocontaminacion,$comunidadAutonoma);
            echo $datosEventos;	

		} elseif (isset( $_POST["nombreEvento"]) && isset($_POST["like"])){
			$nombreEvento=$_POST['nombreEvento'];
			$like=$_POST['like'];

			likes($nombreEvento, $like);
		} elseif(isset( $_POST["enlace"])){
			$enlace=$_POST['enlace'];

			$infoEvento = info_eventos($enlace);
			echo $infoEvento;
		} elseif (isset( $_POST["nombreEvento"])){
			$nombreEvento=$_POST['nombreEvento'];
			$fechaEvento=$_POST['fechaEvento'];
			$lugarEvento=$_POST['lugarEvento'];
			$tipoContaminacionAdd=$_POST['tipoContaminacionAdd'];
			$comunidadAutonoma=$_POST['comunidadAutonoma'];
			$informacionEvento=$_POST['informacionEvento'];

			$agregaEvento = agregaEventos($nombreEvento,$fechaEvento,$lugarEvento,$tipoContaminacionAdd,$comunidadAutonoma,$informacionEvento);
			echo $agregaEvento;
		} elseif (isset( $_POST["meGusta"])) {
			$idEvento=$_POST['idEvento'];
			$correoUsu=$_POST['correoUsu'];

			$like = revisarLike($correoUsu, $idEvento);
			echo $like;
		} elseif (isset( $_POST["suscripcion"])) {
			$idEvento=$_POST['idEvento'];
			$correoUsu=$_POST['correoUsu'];

			$suscripcion = revisarSuscripcion($correoUsu, $idEvento);
			echo $suscripcion;
		} elseif (isset( $_POST["annadirMeGusta"])) {
			$idEvento=$_POST['idEvento'];
			$correoUsu=$_POST['correoUsu'];

			annadirMeGusta($correoUsu, $idEvento);
		} elseif (isset( $_POST["quitarMeGusta"])) {
			$idEvento=$_POST['idEvento'];
			$correoUsu=$_POST['correoUsu'];

			quitarMeGusta($correoUsu, $idEvento);
		} elseif(isset( $_POST["idEvento"])){
			$idEvento=$_POST['idEvento'];
			$correoUsu=$_POST['correoUsu'];

			$suscrito = suscribirseEvento($idEvento,$correoUsu);
			echo $suscrito;
		} elseif (isset( $_POST["listaEventos"])){
            $listaEventos=$_POST['listaEventos'];
            listar_eventos_sinSesion($listaEventos);
        } elseif (isset( $_POST["tipoContami"])){
            $tipoContami=$_POST['tipoContami'];
            listar_eventos_sinCCAA($tipoContami);
        }
	} 
