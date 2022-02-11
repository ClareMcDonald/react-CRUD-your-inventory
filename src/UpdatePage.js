import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getRestaurant } from './services/fetch.utils';

export default function UpdatePage() {
  const params = useParams;
  const [singleRestaurant, setSingleRestaurant] = useState({});
    
  useEffect(() => {
    async function fetchRestaurant() {
      const restaurant = await getRestaurant(params.id);
        
      setSingleRestaurant(restaurant);
    }
      
    fetchRestaurant();
      
  }, [params.id]);
    

  return (
    <div className='restaurant-detail'>
      <h3>{singleRestaurant.name}</h3>
      <p>{singleRestaurant.cuisine}</p>
      <p>{singleRestaurant.city}</p>
      <p>{singleRestaurant.pric_rating}</p>
    </div>
  );
}
