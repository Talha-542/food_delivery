import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

export default function ExploreMenu({ Category, setCategory }) {
  return (
    <div className='explore-menu'>
      <h1>Checkout our Menu</h1>
      <p className='explore-menu-text'>
        Get your favorite meals delivered fast with our food delivery app. Explore top local restaurants, place your order, and track it in real-time. Delicious food, delivered to your door with just a few taps!
      </p>
      <div className='explore-menu-list'>
        {
          menu_list.map((item, index) => {
            return (
              <div 
                onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} 
                key={index} 
                className={`explore-menu-list-item ${Category === item.menu_name ? "active" : ""}`}
              >
                <img src={item.menu_image} alt="" />
                <p>{item.menu_name}</p>
              </div>
            );
          })
        }
      </div>
      <hr />
    </div>
  );
}
