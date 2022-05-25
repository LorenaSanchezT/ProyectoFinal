<?php	
	require_once 'bd.php';

	if($_SERVER["REQUEST_METHOD"] == "POST") {
		if (isset( $_POST["tipocontaminacion"])) {
			$tipocontaminacion = $_POST['tipocontaminacion'];	
			$listaEventos = $_POST['listaEventos'];
			
			$datosEventos = listar_eventos($listaEventos,$tipocontaminacion);
			echo $datosEventos;		

		}
		elseif(isset( $_POST["enlace"])){
			$enlace=$_POST['enlace'];

			$infoEvento = info_eventos($enlace);
			echo $infoEvento;
		} 
		elseif(isset( $_POST["nombreEvento"])){
			$nombreEvento=$_POST['nombreEvento'];
			$fechaEvento=$_POST['fechaEvento'];
			$lugarEvento=$_POST['lugarEvento'];
			$tipoContaminacionAdd=$_POST['tipoContaminacionAdd'];
			$comunidadAutonoma=$_POST['comunidadAutonoma'];
			$informacionEvento=$_POST['informacionEvento'];

			$agregaEvento = agregaEventos($nombreEvento,$fechaEvento,$lugarEvento,$tipoContaminacionAdd,$comunidadAutonoma,$informacionEvento);
			echo $agregaEvento;
		}  
	} 
