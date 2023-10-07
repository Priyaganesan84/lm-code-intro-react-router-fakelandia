// hooks/useFetch.ts
import { useState, useEffect } from 'react';

const useFetch = (url: string) => {
  const [data, setData] = useState<any>(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setData(data);
        setIsFetching(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsFetching(false);
      }

     

    };

    fetchData();
  }, [url]);

  return { data, isFetching };
};

export default useFetch;
