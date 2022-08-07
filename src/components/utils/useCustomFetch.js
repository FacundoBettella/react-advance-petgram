import { useEffect, useState } from "react";

export const useCustomFetch = (url) => {
  const [fetchData, setFetchData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      fetch(url)
        .then((res) => res.json())
        .then((response) => setFetchData(response));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
      return null;
    }
  }, []);

  return [fetchData, loading];
};
