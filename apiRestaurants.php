<?php
/*
Trataremos los datos deacuerdo con la especificación 
*/
include("_db.php");

$sql = "SELECT * FROM my_app.restaurants"; 
$result = $mysqli->query($sql);

$numrows = $result->num_rows;

// $datos = array();

// $datos = 

echo json_encode($result->fetch_all(MYSQLI_ASSOC));

?>
		