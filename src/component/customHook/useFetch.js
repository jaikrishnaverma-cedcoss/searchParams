import { useEffect, useState } from "react";

// customHook to fetch api
const useFetch = (url) => {
  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState("");
  useEffect(() => {
    try{
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setdata(res.products);
        setloading(false);
      });
    }
    catch(er){
      seterror(er);
    }
  }, [url]);
  return { data, loading, error };
};
export default useFetch;
