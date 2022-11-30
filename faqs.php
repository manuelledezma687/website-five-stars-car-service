<?php
include_once "cors.php";
include_once "con_db.php";
 
switch ($method) {

  case 'GET':
    $sql = "SELECT question,answer FROM faqs"; 
    break;
    case 'POST':
      $question = $_POST["question"];
      $answer = $_POST["answer"];
 
      $sql = "INSERT into faqs (question, answer) values ('$question', '$answer')"; 
      break;
}

// run SQL statement
$result = mysqli_query($con,$sql);
 
// die if SQL statement failed
if (!$result) {
  http_response_code(404);
  die(mysqli_error($con));
}
 
if ($method == 'GET') {
    if (!$id) echo '[';
    for ($i=0 ; $i<mysqli_num_rows($result) ; $i++) {
      echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
    }
    if (!$id) echo ']';
  } elseif ($method == 'POST') {
    // $result = mysqli_query($con,$sql);
    // $sql = file_get_contents("php://input");
    echo json_encode($result);
  } else {
    echo mysqli_affected_rows($con);
  }
 
$con->close();