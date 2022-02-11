import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function DetailPage() {
  const id = useParams;
  const [singleRestaurant, setSingleRestaurant] = useState({});
    
  return (
    <div>DetailPage</div>
  );
}
