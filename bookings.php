<?php
include_once "cors.php";
include_once "con_db.php";
 
switch ($method) {

  case 'GET':
    $sql = "SELECT pick_up_location, drop_off_location, full_name, email, hour, date_booking, flight_id, payment_method, passengers, observations, referrals, type_of_service,created_at FROM bookings ORDER BY created_at DESC"; 
    break;

    case 'POST':
      $pick_up_location = trim($_POST["pick_up_location"]);
      $drop_off_location = trim($_POST["drop_off_location"]);
      $full_name = trim($_POST["full_name"]);
      $email = trim($_POST["email"]);
      $hour = trim($_POST["hour"]);
      $phone = trim($_POST["phone"]);
      $date_booking = trim($_POST["date_booking"]);
      $flight_id = trim($_POST["flight_id"]);
      $payment_method = trim($_POST["payment_method"]);
      $passengers = trim($_POST["passengers"]);
      $observations = trim($_POST["observations"]);
      $referrals = trim($_POST["referrals"]);
      $type_of_service = trim($_POST["type_of_service"]);

      $sql = "INSERT into bookings (pick_up_location, drop_off_location, full_name, email, hour, phone, date_booking, flight_id, payment_method, passengers, observations, referrals, type_of_service) values ('$pick_up_location', '$drop_off_location', '$full_name', '$email', '$hour', '$phone', '$date_booking', '$flight_id', '$payment_method', '$passengers', '$observations', '$referrals', '$type_of_service')"; 
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
    echo json_encode($result);
  } else {
    echo mysqli_affected_rows($con);
  }
 
$con->close();