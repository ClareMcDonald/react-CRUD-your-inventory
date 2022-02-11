import React from 'react';
import { Link } from 'react-router-dom';

export default function Restaurant({ restaurant }) {
  return (
    <Link to={`/restaurants/${restaurant.id}`}>
      <div className='restaurant'>
        <h4>{restaurant.name}</h4>
      </div>
    </Link>
  );
}
