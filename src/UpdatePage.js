import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getRestaurant, updateRestaurant, deleteRestaurant } from './services/fetch-utils';

export default function UpdatePage() {
  const { id } = useParams();
  const history = useHistory();
  const [formName, setFormName] = useState('');
  const [formCuisine, setFormCuisine] = useState('');
  const [formCity, setFormCity] = useState('');
  const [formPriceRating, setFormPriceRating] = useState(1);
    
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
    e.preventDefault();
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
      <div>
        <h3>Update a Restaurant</h3>
        <form onSubmit={handleUpdate}>
          <label>Name
            <input value={formName} onChange={e => setFormName(e.target.value)}/>
          </label>
          <label>Cuisine
            <input value={formCuisine} onChange={e =>setFormCuisine(e.target.value)} />
          </label>
          <label>City
            <input value={formCity} onChange={e =>setFormCity(e.target.value)} />
          </label>
          <label>Price Rating
            <input value={formPriceRating} onChange={e =>setFormPriceRating(e.target.value)} />
          </label>
          <button>Update Restaurant</button>
        </form>
        <button className="delete" type="button" onClick={handleDelete}>Delete Restaurant</button>
      </div>
    </div>
  );
}
