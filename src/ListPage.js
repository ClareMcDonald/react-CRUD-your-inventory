import React, { useEffect } from 'react';
import { getRestaurants } from './services/fetch.utils';

export default function ListPage() {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        async function fetchRestaurants() { 
            const allRestaurants = await getRestaurants();

            setRestaurants(allRestaurants);
        }
        fetchRestaurants();
    }, []);

  return (
      <div>Restaurants</div>
      {}
  );
}
