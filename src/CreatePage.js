import React from 'react';
import { useState } from 'react';

export default function CreatePage() {
  const [formName, setFormName] = useState('');
  const [formCuisine, setFormCuisine] = useState('');
  const [formCity, setFormCity] = useState('');
  const [formPriceRating, setFormPriceRating] = useState('');
  
  return (
    <div>Create a Restaurant</div>
  );
}
