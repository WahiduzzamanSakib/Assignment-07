
import React, { useEffect, useState } from "react";

const useData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://mocki.io/v1/db4c671e-d0d4-4361-86a7-d3f42d66bdc7");
      const data = await res.json();

      setTimeout(() => {
        setData(data);
        setLoading(false);
      }, 1000);
    };
    fetchData();
  }, []);

  return { data, loading };
};

export default useData;
