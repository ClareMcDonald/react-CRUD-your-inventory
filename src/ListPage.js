import React, { useState, useEffect } from 'react';
import { getRestaurants } from './services/fetch-utils';
import Restaurant from './Restaurant';

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
    <>
      <h2>Restaurants</h2>
      {restaurants.map((restaurant, i) => <Restaurant key={`${restaurant.name}-${i}`} restaurant={restaurant}/>)}
    </>
  );
}
