import axios from "axios";
import { useState, useEffect } from "react";

const useAxios = (url) => {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const download = async () => {
      const { data } = await axios.get(url);
      setData(data);
      setLoaded(true);
    };

    download();
  }, [url]);
  return { data, loaded };
};

export default useAxios;
