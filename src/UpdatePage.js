import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getRestaurant, updateRestaurant, deleteRestaurant } from './services/fetch.utils';

export default function UpdatePage() {
  const { id } = useParams;
  const [formName, setFormName] = useState('');
  const [formCuisine, setFormCuisine] = useState('');
  const [formCity, setFormCity] = useState('');
  const [formPriceRating, setFormPriceRating] = useState('');
    
  useEffect(() => {
    async function fetchRestaurant() {
      const restaurant = await getRestaurant(id);
        
      setFormName(restaurant.name);
      setFormCuisine(restaurant.cuisine);
      setFormCity(restaurant.city);
      setFormPriceRating(restaurant.price_rating);
    }
      
    fetchRestaurant();
      
  }, [id]);
    
  async function handleDelete() {
    await deleteRestaurant(id);

    history.push('/restaurants');
  }
    
  async function handleUpdate(e) {
    await updateRestaurant(id, {
      name: formName,
      cuisine: formCuisine,
      city: formCity,
      price_rating: formPriceRating
    });

    history.push('/restaurants');
  }

  return (
    <div className='restaurant-detail'>

    </div>
  );
}
