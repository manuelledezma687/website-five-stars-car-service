import { useEffect, useState } from "react";
import axios from "axios";

const useGetFAQs = (API) => {

  const [faqs, setFaqs] = useState([]);


  async function fetchData() {
    const response = await axios(API);
    setFaqs(response.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return faqs;
};

export default useGetFAQs;
