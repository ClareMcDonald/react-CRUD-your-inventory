import React from 'react';
import { useState } from 'react';

export default function CreatePage() {
  const [formName, setFormName] = useState('');
  const [formCuisine, setFormCuisine] = useState('');
  const [formCity, setFormCity] = useState('');
  const [formPriceRating, setFormPriceRating] = useState('');

  async function handleSubmit(e) {

  }

  return (
    <div>Create a Restaurant
      <form>
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
