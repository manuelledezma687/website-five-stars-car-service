<?php
$host = "localhost"; 
$user = ""; 
$password = ""; 
$dbname = ""; 
$id = '';
$con = mysqli_connect($host, $user, $password,$dbname);
$method = $_SERVER['REQUEST_METHOD'];


if (!$con) {
  die("Connection failed: " . mysqli_connect_error());
}