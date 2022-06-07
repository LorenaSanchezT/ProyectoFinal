<?php

	require_once 'bd.php';

	if($_SERVER["REQUEST_METHOD"] == "POST") {
		if(isset( $_POST["enlace"])){
			$enlace=$_POST['enlace'];
			$infoEvento = info_eventosConfirm($enlace);
			echo $infoEvento;

		}  elseif(isset( $_POST["nombreEvento"]) && isset($_POST['fechaEvento'])){
			$nombreEvento=$_POST['nombreEvento'];
			$fechaEvento=$_POST['fechaEvento'];
			$lugarEvento=$_POST['lugarEvento'];
			$tipoContaminacionAdd=$_POST['tipoContaminacionAdd'];
			$comunidadAutonoma=$_POST['comunidadAutonoma'];
			$informacionEvento=$_POST['informacionEvento'];

			$agregaEvento = agregaEventosConfirmar($nombreEvento,$fechaEvento,$lugarEvento,$tipoContaminacionAdd,$comunidadAutonoma,$informacionEvento);
			eliminarEventosConfirmar($nombreEvento);
			echo $agregaEvento;
			
		} elseif(isset( $_POST["nombreEvento"])){
			$nombreEvento=$_POST['nombreEvento'];

			eliminarEventosConfirmar($nombreEvento);
		} else {
            $datosEventos = listar_eventosConfirm();
			echo $datosEventos;		

        }
	} 
