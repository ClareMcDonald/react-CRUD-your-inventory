import React from 'react';
import { useState } from 'react';
import { createRestaurant } from './services/fetch-utils';
import { useHistory } from 'react-router-dom';

export default function CreatePage() {
  const history = useHistory();
  const [formName, setFormName] = useState('');
  const [formCuisine, setFormCuisine] = useState('');
  const [formCity, setFormCity] = useState('');
  const [formPriceRating, setFormPriceRating] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    const restaurant = {
      name: formName,
      cuisine: formCuisine,
      city: formCity,
      price_rating: formPriceRating
    };
    
    await createRestaurant(restaurant);

    history.push('/restaurants');
  }

  return (
    <div>
      <h3>Create a Restaurant</h3>
      <form onSubmit={handleSubmit}>
        <label>Name
          <input name="name" value={formName} onChange={e => setFormName(e.target.value)}/>
        </label>
        <label>Cuisine
          <input name="cuisine" value={formCuisine} onChange={e => setFormCuisine(e.target.value)} />
        </label>
        <label>City
          <input name="city" value={formCity} onChange={e => setFormCity(e.target.value)} />
        </label>
        <label>Price Rating
          <input name="price-rating" value={formPriceRating} onChange={e => setFormPriceRating(e.target.value)} />
        </label>
        <button>Add Restaurant</button>
      </form>
    </div>
  );
}
