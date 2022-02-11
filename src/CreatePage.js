import React from 'react';
import { useState } from 'react';

export default function CreatePage() {
  const [formName, setFormName] = useState('');
  const [formCuisine, setFormCuisine] = useState('');
  const [formCity, setFormCity] = useState('');
  const [formPriceRating, setFormPriceRating] = useState('');

  return (
    <div>Create a Restaurant
      <form>
        <label>Name
          <input></input>
        </label>
        <label>Cuisine
          <input></input>
        </label>
        <label>City
          <input></input>
        </label>
        <label>Price Rating
          <input></input>
        </label>
        <button>Add Restaurant</button>
      </form>
    </div>
  );
}
