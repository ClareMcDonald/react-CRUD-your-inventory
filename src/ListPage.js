import React, { useEffect } from 'react';

export default function ListPage() {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        async function getRestaurants() { 
            const allRestaurants = await getRestaurants();

            setRestaurants(allRestaurants);
    }
    }, []);

  return (
      <div>Restaurants</div>
      {}
  );
}
