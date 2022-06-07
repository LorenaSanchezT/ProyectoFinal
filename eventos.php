<?php
$servername = "127.0.0.1";
$username = "root";
$password = "";


try {
  $conn = new PDO("mysql:host=$servername;dbname=BaseDatos", $username, $password);
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  //   echo "Connected successfully";
    $sql = "SELECT nombre, fecha_evento, numero_de_likes, fecha_publicacion FROM eventos";
    $result = $conn->query($sql);
    if ($result->rowCount() > 0) {
      // output data of each row
      foreach ($result as $row) {
        print "/t" . $row['nombre'] . "," . $row['fecha_evento']. "," . $row['numero_de_likes']. "," . $row['fecha_publicacion'];
      }
    }
} catch (PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}
