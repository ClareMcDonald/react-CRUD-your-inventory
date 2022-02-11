import React from 'react';
import { Link } from 'react-router-dom';

export default function Restaurant({ restaurant }) {
  return (
    <div className='restaurant'>
      <Link to={`/restaurants/${restaurant.id}`}>
        <h4>{restaurant.name}</h4>
      </Link>
      <h5>{restaurant.cuisine}</h5>
      <h5>{restaurant.city}</h5>
      <h5>{restaurant.price_rating}</h5>
    </div>
  );
}
