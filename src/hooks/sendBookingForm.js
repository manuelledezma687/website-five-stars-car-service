

	export function sendContactForm(){

    const pick_up_location = document.getElementById('pick_up_location');
    const drop_off_location = document.getElementById('drop_off_location');
    const full_name = document.getElementById('full_name');
    const email = document.getElementById('email');
    const hour = document.getElementById('hour');
    const date = document.getElementById('date');
    const flight_id = document.getElementById('flight_id');
    const payment_method = document.getElementById('payment_method');
    const passengers = document.getElementById('passengers');
    const observations = document.getElementById('observations');
    const type_of_travel = document.getElementById('type_of_travel');
    const submit = document.getElementById('button');

    submit.addEventListener("click", () => {
        const pick_up_location = pick_up_location.value;
        const drop_off_location = drop_off_location.value;
        const full_name = full_name.value;
        const email = email.value;
        const hour = hour.value;
        const date = date.value;
        const flight_id = flight_id.value;
        const payment_method = payment_method.value;
        const passengers = passengers.value;
        const observations = observations.value;
        const type_of_travel = type_of_travel.value;
    
    axios.post("http://127.0.0.1:8000/bookings", {
        pick_up_location: pick_up_location,
        drop_off_location : drop_off_location,
        full_name : full_name,
        email: email,
        hour: hour,
        date : date,
        flight_id : flight_id,
        payment_method : payment_method,
        passengers : passengers,
        observations : observations,
        type_of_travel : type_of_travel
      })
      .then((response) => {
        console.log(response);
      });
   });}