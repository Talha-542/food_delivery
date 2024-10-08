import React from 'react';
import './Header.css';

export default function Header() {
  const handleButtonClick = () => {
    console.log('View Menu is Clicked');
  };

  return (
    <div className="header">
      <div className='header-content'>
        <h2>Order your favourite food here</h2>
        <p>
          Get your favorite meals delivered fast with our food delivery app. Explore top local restaurants, place your order, and track it in real-time. Delicious food, delivered to your door with just a few taps!
        </p>
        <button className='header-btn' onClick={handleButtonClick}>View Menu</button>
      </div>
    </div>
  );
}
