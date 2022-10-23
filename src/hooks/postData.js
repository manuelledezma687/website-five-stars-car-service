import axios from "axios";


const postData = (e) => {
  e.preventDefault();
  axios.post("http://127.0.0.1:8000/bookings", {
    pick_up_location,
    drop_off_location,
    full_name,
    email,
    hour,
    date,
    flight_id,
    payment_method,
    passengers,
    observations,
    type_of_service
  }).then(res => console.log('Posting data', res)).catch(err => console.log(err))
}