<?php

function comprobar_sesion()
{
	session_start();

	if (!isset($_SESSION['token']) || (!isset($_COOKIE['token'])) ||
		($_SESSION['token'] =! $_COOKIE['token'])) {
		echo "No tienes permisos";
		exit;
	}

	if (!isset($_SESSION['usuario'])) {
		return false;
	} else return true;
}
