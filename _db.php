<?php

$mysqli = new mysqli('localhost', 'root', 'Theresa', 'my_app');

if ($mysqli->connect_error) {
    echo "Lo sentimos, este sitio web está experimentando problemas.";
    echo "Error: Fallo al conectarse a MySQL debido a: \n";
    echo "Error: " . $mysqli->connect_error . "\n";
    echo "Error: " . $mysqli->connect_error . "\n";
    exit;
}
$mysqli->set_charset("utf8");

?>
