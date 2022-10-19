import { useEffect, useState } from "react";
import axios from "axios";

const usePostBookings = (API) => {

    const [bookings, setBookings] = useState([]);
  
  
    // async function fetchData() {
    //   const response = await axios(API);
    //   setRatings(response.data);
    // }
  
    // useEffect(() => {
    //   fetchData();
    // }, []);
  
    // return bookings;
  };
  
  export default usePostBookings;