<?php 

header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: *');


$data = json_decode(file_get_contents('php://input'), true);

$name = $data['name'];
$email = $data['email'];
$password = $data['password'];
echo $name;
echo $email;
echo $password;
 ?>