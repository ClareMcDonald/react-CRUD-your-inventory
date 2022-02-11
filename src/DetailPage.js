import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getRestaurant } from './services/fetch.utils';

export default function DetailPage() {
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
    <h3>{singleRestaurant.name}</h3>
  );
}
