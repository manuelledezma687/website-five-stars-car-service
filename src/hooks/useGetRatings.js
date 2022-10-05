import { useEffect, useState } from "react";
import axios from "axios";

const useGetRatings = (API) => {

const [ratings, setRatings] = useState([]);


  async function fetchData() {
    const response = await axios(API);
    setRatings(response.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return ratings;
};

export default useGetRatings;
