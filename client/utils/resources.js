import Axios from 'axios';
import React from 'react';

export function resources() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const res = await Axios.get(
        'https://restcountries.eu/rest/v2/region/africa'
      );
      setData(res.data);
    };
    fetchData();
  }, []);

  return { data };
}
